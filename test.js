// config file에서 특정 값을 가져오기 위한 코드 구상

let arr = [] // 배열
let count // Y
let temp 
for (let i = 0; i < 10; i++) {
    if (msg.payload.objectInfo[i].includes("Y")) {
        count = count(msg.payload.objectInfo[i].includes("Y"))
        for (let j = 0; j < count; j++) {
            
        }
        arr.push(msg.payload.objectInfo[i])
    }
}
msg.payload = arr
return msg;