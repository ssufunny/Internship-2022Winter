// 배열에 값 넣고 꺼내는 거 해보기
for (var j = 0; j < payload.length; j++){
    msg.payload={"group":{"show":["자동개폐기(동)_센서" + payload[j]], "hide":["자동개폐기(동)_센서" + deviceCountOver], "focus":true}}
}
return msg;