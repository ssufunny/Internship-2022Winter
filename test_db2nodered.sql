-- 코드 형식
-- msg.topic = "sql문;"
-- return msg;

-- node-red와 db를 연결하여 원하는 정보를 불러오기 위한 코드 중 sql문만 작성

-- 센서의 수
select count(*) as count from smartfarm_1 where OperationControlMode = 'S';
-- 모터의 수
select count(*) as count from smartfarm_1 where ObjectType = 'M';
-- FAN의 수
select count(*) as count from smartfarm_1 where FanDevDriverType is not null;
-- Valve 수
select count(*) as count from smartfarm_1 where ObjectType = 'V';