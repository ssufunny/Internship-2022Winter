-- Node-RED와 DB를 연결하여 원하는 정보를 불러오기 위한 코드 중 SQL문만 작성

-- <Select문>
-- - 코드 형식
--      msg.topic = "sql문;"
--      return msg;

-- 센서의 수
select count(*) as count from smartfarm_1 where ObjectType = 'Y' and ;
-- 모터의 수
select count(*) as count from smartfarm_1 where ObjectType = 'M';
-- 모터의 위치
select ObjectPositionName as position from smartfarm_1 where ObjectType = 'M';
-- FAN의 수
select count(*) as count from smartfarm_1 where FanDevDriverType is not null;
-- Valve 수
select count(*) as count from smartfarm_1 where ObjectType = 'V';

INSERT INTO "tMstObjectItemNew" ("RowNo","ObjectExist","ObjectID4LoRa","LoRaNodeGpioRelayNo","ObjectType","TempHumiType","FanDevDriverType","ObjectCommunicationType","objectPin1","objectPin2","MotorOperTime","ObjectPositionName","OperationControlMode","OperationModeStatus","OperationStartTime","objectValueTemp","objectValueHumi","ThSensorRowNo","ThTempOpen","ThTempClose") 
    VALUES (1,'O','00101','1','Y','B',NULL,'L',NULL,NULL,NULL,NULL,'S',NULL,'2022-02-11 16:25:16',0,0,-1,NULL,NULL),
    (2,'O','00102','2','Y','B',NULL,'L',NULL,NULL,NULL,NULL,'S',NULL,'2022-02-11 16:28:07',0,0,-1,NULL,NULL),
    (3,'O',NULL,'3','Y','V',NULL,'G',23,NULL,NULL,NULL,'S',NULL,'2022-02-11 16:28:33',0,0,-1,NULL,NULL),
    (4,'O',NULL,'3','M',NULL,NULL,'G',17,27,50,'TopLeft',NULL,NULL,'2022-02-11 16:28:34',0,0,-1,NULL,NULL),
    (5,'O','00105','3','M',NULL,NULL,'L',NULL,NULL,70,'TopRight',NULL,NULL,'2022-02-11 16:28:34',0,0,-1,NULL,NULL),
    (6,'O','00106','1','F',NULL,'F:C:2','L',NULL,NULL,NULL,NULL,NULL,NULL,'2022-02-11 16:28:34',0,0,-1,NULL,NULL),
    (7,'O',NULL,'2','V',NULL,NULL,'G',9,NULL,NULL,NULL,NULL,NULL,'2022-02-11 16:28:35',0,0,-1,NULL,NULL),
    (8,'O',NULL,'2','V',NULL,NULL,'G',6,NULL,NULL,NULL,NULL,NULL,'2022-02-11 16:28:35',0,0,-1,NULL,NULL),
    (9,'O',NULL,'2','V',NULL,NULL,'G',13,NULL,NULL,NULL,NULL,NULL,'2022-02-11 16:28:37',0,0,-1,NULL,NULL);
