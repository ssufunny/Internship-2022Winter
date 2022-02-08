-- 온습도계가 아닌 장비의 TempHumiType을 null로 변경
UPDATE test SET TempHumiType ='' WHERE ObjectType != 'Y' and ObjectType != 'T' and ObjectType != 'H'; 

-- FAN이 아닌 장비의 FanDevDriverType을 null로 변경
UPDATE test SET FanDevDriverType ='' WHERE ObjectType != 'F';

-- Motor가 아닌 장비의 MotorOperTime을 null로 변경
UPDATE test SET MotorOperTime ='' WHERE ObjectType != 'M';

-- 15부터 삭제
DELETE FROM test WHERE RowNo >= 15;