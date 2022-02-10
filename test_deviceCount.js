// db에서 불러온 data를 활용하여 장비 수에 맞게 ui가 동적으로 적용되도록 하는 코드 작성

// 최대 장비 개수는 6개로 제한
// 장비 수는 연결된 db를 통해 가져옴
// db를 통해 얻은 장비의 수만큼 그룹을 나타내고 그 이상의 그룹은 숨김 처리함

var defaultCount = 6 // 장비 개수 default 값
var deviceCount = msg.payload[0].count // 각 장비 수

// 센서 수만큼의 그룹을 나타내고 센서 수보다 큰 수의 그룹은 숨김
if (deviceCount < 3 || deviceCount == 5) {
    msg.payload = {
        "group": {
            "show":["자동개폐기(동)_구분1", "자동개폐기(동)_구분" + (deviceCount - 3), "자동개폐기(동)_spacerLeft_dvc" + deviceCount, "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 1), "자동개폐기(동)_spacerRight_dvc" + deviceCount, "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 1), "자동개폐기(동)_센서" + deviceCount, "자동개폐기(동)_센서" + (deviceCount - 1), "자동개폐기(동)_센서" + (deviceCount - 2)], 
            "hide":["자동개폐기(동)_구분" + (deviceCount * deviceCount + 1), "자동개폐기(동)_구분" + (deviceCount * deviceCount - 2), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 1), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 2), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 3), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 4), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 1), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 2), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 3), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 4), "자동개폐기(동)_센서" + (deviceCount + 1), "자동개폐기(동)_센서" + (deviceCount + 2), "자동개폐기(동)_센서" + (deviceCount + 3), "자동개폐기(동)_센서" + (deviceCount + 4), "자동개폐기(동)_센서" + (deviceCount + 5), "자동개폐기(동)_(2)센서3"], 
            "focus":true
        }
    }
}
else if (deviceCount == 4) {
    msg.payload = {
        "group": {
            "show":["자동개폐기(동)_구분1", "자동개폐기(동)_구분2", "자동개폐기(동)_spacerLeft_dvc" + deviceCount, "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 2), "자동개폐기(동)_spacerRight_dvc" + deviceCount, "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 2), "자동개폐기(동)_센서" + deviceCount, "자동개폐기(동)_(2)센서" + (deviceCount - 1), "자동개폐기(동)_센서" + (deviceCount - 2), "자동개폐기(동)_센서" + (deviceCount - 3), "자동개폐기(동)_센서" + (deviceCount - 4), "자동개폐기(동)_센서" + (deviceCount - 5)], 
            "hide":["자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 3), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 1), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 3), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 1), "자동개폐기(동)_센서" + (deviceCount -1), "자동개폐기(동)_센서" + (deviceCount + 1), "자동개폐기(동)_센서" + (deviceCount + 2), "자동개폐기(동)_센서" + (deviceCount + 3), "자동개폐기(동)_센서" + (deviceCount + 4), "자동개폐기(동)_센서" + (deviceCount + 5)], 
            "focus":true
        }
    }
}
else {
    msg.payload = {
        "group": {
            "show":["자동개폐기(동)_구분1", "자동개폐기(동)_구분" + (deviceCount - 4), "자동개폐기(동)_센서" + deviceCount, "자동개폐기(동)_센서" + (deviceCount - 1), "자동개폐기(동)_센서" + (deviceCount - 2), "자동개폐기(동)_센서" + (deviceCount - 3), "자동개폐기(동)_센서" + (deviceCount - 4), "자동개폐기(동)_센서" + (deviceCount - 5)], 
            "hide":["자동개폐기(동)_구분" + (deviceCount - 1), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 1), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount + 2), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 1), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 2), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 4), "자동개폐기(동)_spacerLeft_dvc" + (deviceCount - 5), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 1), "자동개폐기(동)_spacerRight_dvc" + (deviceCount + 2), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 1), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 2), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 4), "자동개폐기(동)_spacerRight_dvc" + (deviceCount - 5), "자동개폐기(동)_센서" + (deviceCount + 1), "자동개폐기(동)_센서" + (deviceCount + 2), "자동개폐기(동)_센서" + (deviceCount + 3), "자동개폐기(동)_(2)센서3"], 
            "focus":true
        }
    }
}


return msg;