// db에서 불러온 data를 활용하여 장비 수에 맞게 ui가 동적으로 적용되도록 하는 코드 작성

var defaultCount = 8 // 장비 개수 default 값
var deviceCount = msg.payload[0].count // 각 장비 수

msg.payload={"group":{"show":["자동개폐기(동)_센서" + deviceCount, "자동개폐기(동)_센서" + (deviceCount - 1), "자동개폐기(동)_센서" + (deviceCount - 2), "자동개폐기(동)_센서" + (deviceCount - 3), "자동개폐기(동)_센서" + (deviceCount - 4), "자동개폐기(동)_센서" + (deviceCount - 5), "자동개폐기(동)_센서" + (deviceCount - 6), "자동개폐기(동)_센서" + (deviceCount - 7)], "hide":["자동개폐기(동)_센서" + (deviceCount + 1), "자동개폐기(동)_센서" + (deviceCount + 2), "자동개폐기(동)_센서" + (deviceCount + 3), "자동개폐기(동)_센서" + (deviceCount + 4), "자동개폐기(동)_센서" + (deviceCount + 5), "자동개폐기(동)_센서" + (deviceCount + 6), "자동개폐기(동)_센서" + (deviceCount + 7)], "focus":true}}

return msg;