// db에서 불러온 data를 활용하여 ui에 적용할 수 있도록 하는 코드

sensorCount = msg.payload[0].LoRaNodeGpioRelayNo    // 센서 수(test.db에서 불러옴)

if (sensorCount == 1)   // 센서 수가 1개라면 센서1의 정보만 보여줌
    msg.payload={"group":{"hide":["자동개폐기_센서2", "자동개폐기_센서3", "자동개폐기_센서4"],"show":["자동개폐기_센서1"], "focus":true}}
else if (sensorCount == 2)  // 센서 수가 2개라면 센서1과 센서2의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기_센서3", "자동개폐기_센서4"],"show":["자동개폐기_센서1", "자동개폐기_센서2"], "focus":true}}
else if (sensorCount == 3)  // 센서 수가 3개라면 센서1, 센서2, 센서3의 정보를 보여줌
    msg.payload={"group":{"hide":["자동개폐기_센서4"],"show":["자동개폐기_센서1", "자동개폐기_센서2", "자동개폐기_센서3"], "focus":true}}
else if (sensorCount == 4)  // 센서 수가 4개라면 센서1, 센서2, 센서3, 센서4의 정보를 보여줌
    msg.payload={"group":{"show":["자동개폐기_센서1", "자동개폐기_센서2", "자동개폐기_센서3", "자동개폐기_센서4"], "focus":true}}
return msg;