// db에서 불러온 data를 활용하여 ui에 적용할 수 있도록 하는 코드

var deviceCount = msg.payload[0].count // 각 장비 수
let arr1 = [] // 출력확인용
let arr2 =[] // 출력확인용
let deviceCountAll =[]
for (var i = 1; i <= deviceCount; i++) {
    var deviceCountOver = deviceCount + i
    deviceCountAll.push(i)
    arr1.push(i) // 출력확인용
    arr2.push(deviceCountOver) // 출력확인용
}
msg.count = arr1 + "/" + arr2 // 출력확인용
return msg;