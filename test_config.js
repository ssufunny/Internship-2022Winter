// X
// config file에서 특정 값을 가져오기 위한 코드 구상

let arr = [] // 배열
for (let i = 0; i < 10; i++) {
    if (msg.payload.objectInfo[i].includes("Y")) {
        arr.push(msg.payload.objectInfo[i])
    }
}
msg.payload = arr
return msg;