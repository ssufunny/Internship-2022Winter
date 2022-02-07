// LoRaNodeGpioRelayNo
// OperationControlMode
// ObjectExist

// node-red와 db를 연결하여 원하는 정보를 불러오기 위한 코드
msg.topic = "select LoRaNodeGpioRelayNo from test where OperationControlMode = 'S' and LoRaNodeGpioRelayNo = 1;";





