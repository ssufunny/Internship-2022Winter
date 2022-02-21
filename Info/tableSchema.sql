-- 1.성격 : 개페기와 밸브를 관리하는 마스터 Table로 Cloud에 1분 단위로 보고
--         주의) GPIO 핀에 최대치에 맞춰 등록하고 사용하지 않는 경우에는 OperationMode는 'X'로 설정한다.
--         즉, 개폐기 2개만 사용하는 경우 개폐기 No #3, #4, #5는 OperationMode는 'X'로 세팅한다.
--
--         센서와 관련되는 개폐기 mapping UI 화면 구성해야 한다(MotorAboutHotAndRain,SensorMotorMapping)
--         자동제어(센서 또는 온도)에 해당되지 않는 개체는 등록하지 않는다
--            ex) 우적센서(GPIO 19), 고온센서(GPIO 26)는 등록하지 않는다
--            ex) CO2센서(GPIO 14, 15)는 등록하지 않는다
--            ex) 7 Segment(GPIO 2, 3)는 등록하지 않는다
--         
--        UPDATE tMstObjectItemNew SET OperationControlMode='T' WHERE ObjectType = 'M' AND ObjectSequenceNo = '1';
--        UPDATE tMstObjectItemNew SET OperationControlMode='T' WHERE RowNo = 8;
-- 
-- 2.데이터 보존기간 : 영구 (마스터 Table)
-- 3.변경이력
--   1) 2019.08.20   By JK   최초생성
--   2) 2019.10.29   By JK   sensor event에 대한 action처리를 위한 필드추가 (MotorAboutHotAndRain, SensorMotorMapping)
--   3) 2019.11.12   By JK   sensor event에 대한 action처리를 위한 필드추가 (OperationMode, ControlType)
--                           필드 삭제(MotorAboutHotAndRainSensor, MotorAboutTopAndSideSensor)후 tMstSensor_ObjectItem table에서 처리
--   4) 2020.01.02   By JK   필드명 변경 (OnOffRunStopPinNo <-- ValveRunStopPinNo)
--   5) 2021.01.20   By JK   필드명 변경 (OperationControlMode <-- OperationMode)
--   6) 2021.01.27   By JK   필드명 추가 (ObjectCommunicationType, ObjectID4LoRa)
--   7) 2021.01.31   By JK   필드명 추가 (RowNo - device_config 파일과 일치시키기 위하)
--   8) 2021.02.11   By JK   필드명 추가 (ObjectExist - OperationControlMode field 기능 세분화분리)
--   9) 2021.03.09   By JK   필드명 변경 추가 (objectValue --> objectValueTemp - objectValueHumi 추가)
--  10) 2021.03.25   By JK   RowNo Field 속성 변경(NUMBER --> INTEGER)
--  11) 2021.03.27   By JK   필드명 추가 (ThSensorRowNo - 자동스케쥴링 센서모드처리를 위하여)
--  12) 2021.03.28   By JK   필드명 추가 (ThTempOpen, ThTempClose - 자동스케쥴링 센서모드처리를 위하여)
--  13) 2021.04.03   By JK   필드명 추가 (FanSpeed)
--  14) 2021.04.03   By JK   필드명 삭제 (FanSpeed, objectValueTemp 통합)
--                           CO2의 경우에도 objectValueTemp에 넣는다
--  15) 2021.09.10   By JK   필드속성 변경
--                           objectValueTemp double default 0 --> NUMERIC(4,1)
--                           objectValueHumi double default 0 --> NUMERIC(4,1)
--  16) 2022.01.22   By JK   필드명 추가 (MotorOperTime)
--
drop table tMstObjectItemNew;
create table IF NOT EXISTS tMstObjectItemNew
(
   RowNo INTEGER NOT NULL,               -- 일련번호 (ObjectNo)
   --ObjectSequenceNo VARCHAR(2) NOT NULL, -- Object Sequence No
   ObjectExist CHAR(1) NOT NULL,         -- ubisoul.json에서 객체 사용(존재)여부 정의 (O:Manual, X:None)
   ObjectID4LoRa VARCHAR(8),             -- LoRa통신 객체식별 ID
   LoRaNodeGpioRelayNo CHAR(1) NOT NULL, -- 한개 LoRa Node에 4개 GPIO 확장할수 있다. (1 ~ 4)
   ObjectType CHAR(1) NOT NULL,          -- Object Type ('M':Motor, 'V':Valve, 'E':환풍기[Extractor fan], 'F':열풍기[Heater Fan], 'B':송풍팬[Blast fan], Y:온습도계, T:온도계, H:습도계)
   TempHumiType CHAR(1),                 -- 온습도계 Type (V:상온전압, B:배터리전압)
   FanDevDriverType CHAR(1),             -- Object Type Fan인경우 Fan Device Driver Type (1:독일 슈나이드, 2:중국 Fan Driver)
   ObjectCommunicationType CHARACTER(1) NOT NULL, -- Object를 제어(통신)하는 방식 (G:GPIO-CPU에서 GPIO On/Off제어, L:LoRa-GPIO를 사용하지 않고 통신을 이용)
   objectPin1 NUMBER(2),                 -- Motor GPIO Pair #1 (Motor #1, Valve Pin)
   objectPin2 NUMBER(2),                 -- Motor GPIO Pair #2 (Motor Only)
   MotorOperTime NUMBER(3),              -- Object Type이 Motor인 경우에만 사용. 모터동작시간
   ObjectPositionName VARCHAR(25),       -- Motor/Valve, 송풍팬, 열풍기 위치이름

   OperationControlMode CHARACTER(1),    -- OperationMode ('M':Manual, 자동제어모드의 경우 'T':Time-시간, 'S':TH Sensor, 사용중이지 않을때는 'X':None)
                                         -- 제어유형(밸브의 경우 Today:당일급수, Everyday:매일급수,M:수동급수/ 개폐기의 경우 T:댱일시간, E:매일시간)
                                         -- 제어유형(개폐기의 경우 T:댱일온도, E:매일온도, M:수동제어)
   --AutoModeControlType CHARACTER(1),     -- 자동모드인 경우 Control Type ('T':Time-시간, 'S':TH Sensor)
   --MotorAboutHotAndRainSensor CHAR(1),   -- H:고온/우적센서 관련된 개페기의 경우, N:고온/우적센서와 관련없는 개폐기인 경우
   --MotorAboutTopAndSideSensor CHAR(1),   -- tMstAction4SensorEvent table의 SensorNo filed
                                         -- T:TH 센서와 관련된 개폐기인 경우, N:관련없는 개폐기인 경우
   --OnOffRunStopPinNo CHARACTER(2),       -- Valve GPIO Pin No (Valve, 것등 On/Off 제어를 하는 모든)
   OperationModeStatus CHARACTER(1) CHECK ((RowNo = 0 Or RowNo > 0 and OperationModeStatus in ('S', 'F', 'R', 'B', 'O', 'T', 'P'))),
                                         -- 'F':Forware, 'B':Reverse/Backware Running, 'O':Open valve to supply Water
                                         -- 'S':Stop Moter rotating, 'S': Close vlave for stopping water supply 
                                         -- in case of motor, there are 3 kinds of value that are 'F', 'B', 'S'
                                         -- in case of valve, there are 2 kinds of value that are '0', 'S'  
                                         -- LoRa게이트웨이에서 문제가 생겨 데이터 수집인 안될때 T(Trouble), 정상일때 N(Normal)
                                         -- caution) updated by moter rotation, not by user                                         
   --OperationStartTime DATETIME default (strftime('%Y-%m-%d 00:00:00','now','localtime')),          -- Motor/Valve Operation(Forward/Reverse) start time
   OperationStartTime DATETIME default (datetime('now','localtime')),          -- Motor/Valve Operation(Forward/Reverse) start time    
   objectValueTemp NUMERIC(4,1) default 0,     -- ObjectType이 TH Sensor인 경우는 온도값, CO2 Object에서는 CO2값, FAN에서는 속도 (ViewTable에서는 ObjectValue)
   objectValueHumi DECIMAL(4,1) default 0,     -- 습도값 (ObjectType값이 TH Sensor인 경우에만 사용 - ViewTable에서는 ObjectValue2)
   --FanSpeed int,                         -- Fan 속도 (0 ~ 100), Fan 에서만 사용
   ThSensorRowNo int default -1,         -- 자동스케쥴링 센서모드에서 object관련된 온습도센서 rowno
   ThTempOpen Int(3),                    -- 목표온도
   ThTempClose Int(3),                   -- 목표온도

   PRIMARY KEY (RowNo)                   -- UNIQUE(RowNo)
);
