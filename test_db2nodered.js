// LoRaNodeGpioRelayNo : 센서 개수로 생각
// OperationControlMode : 장비 타입이 센서임을 얻기 위함

// node-red와 db를 연결하여 원하는 정보를 불러오기 위한 코드
msg.topic = "select LoRaNodeGpioRelayNo from test where OperationControlMode = 'S' and LoRaNodeGpioRelayNo = '" + msg.payload + "';"
return msg;