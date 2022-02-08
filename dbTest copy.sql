drop table tMstObjectItemNew;
create table IF NOT EXISTS tMstObjectItemNew

create table test
(
   RowNo INTEGER NOT NULL,
   ObjectExist CHAR(1) NOT NULL,
   ObjectID4LoRa VARCHAR(8),
   LoRaNodeGpioRelayNo CHAR(1) NOT NULL,
   ObjectType CHAR(1) NOT NULL,
   TempHumiType CHAR(1),
   FanDevDriverType CHAR(1),
   ObjectCommunicationType CHARACTER(1) NOT NULL,
   objectPin1 NUMBER(2),
   objectPin2 NUMBER(2),
   MotorOperTime NUMBER(3),
   ObjectPositionName VARCHAR(25),
   OperationControlMode CHARACTER(1),
   OperationModeStatus CHARACTER(1) CHECK ((RowNo = 0 Or RowNo > 0 and OperationModeStatus in ('S', 'F', 'R', 'B', 'O', 'T', 'P'))),
   OperationStartTime DATETIME default (datetime('now','localtime')),
   objectValueTemp NUMERIC(4,1) default 0,
   objectValueHumi DECIMAL(4,1) default 0,
   ThSensorRowNo int default -1,
   ThTempOpen Int(3),
   ThTempClose Int(3),
   PRIMARY KEY (RowNo)
);