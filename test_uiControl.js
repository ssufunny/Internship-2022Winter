// db에서 불러온 data를 활용하여 장비 수에 맞게 ui가 동적으로 적용되도록 하는 코드 작성(for문 이용)

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