// <자동개폐기>
// 1. 온습도 - 온습도센서, 온도센서, 습도센서
//    최대 센서의 개수는 6개로 제한
// 2. 천창개폐기 - 모터
//    최대 모터의 개수는 3개로 제한

// db에서 불러온 data를 활용하여 장비 수에 맞게 ui가 동적으로 적용되도록 하는 코드 작성
// db를 통해 얻은 장비의 수만큼 그룹을 나타내고 그 이상의 그룹은 숨김 처리함

var deviceCount = msg.payload.length // 센서와 모터 수의 합
var thCount = 0 // 센서 개수
var mtrCount = 0 // 모터 개수


for (i = 0; i < deviceCount; i++) { // 센서와 모터 수의 합만큼 반복
    if (msg.payload[i].OperationControlMode == "S") { // 장비 종류가 센서라면
        thCount += 1
    }
    else if (msg.payload[i].ObjectType == "M") { // 장비 종류가 모터라면
        mtrCount += 1
    }
    
}

if (thCount < 3 || thCount == 5) { // 센서 수가 1, 2, 5 일 때
    msg.payload = {
        "group": {
            "show": [ 
                "자동개폐기(동)_구분1", "자동개폐기(동)_구분" + (thCount - 3),
                "자동개폐기(동)_spacerLeft_dvc" + thCount, "자동개폐기(동)_spacerLeft_dvc" + (thCount + 1), "자동개폐기(동)_spacerRight_dvc" + thCount, "자동개폐기(동)_spacerRight_dvc" + (thCount + 1), 
                "자동개폐기(동)_센서" + thCount, "자동개폐기(동)_센서" + (thCount - 1), "자동개폐기(동)_센서" + (thCount - 2),
                "자동개폐기(동)_천창" + (mtrCount - 1), "자동개폐기(동)_천창" + mtrCount
            ], 
            "hide": [ 
                "자동개폐기(동)_구분" + (thCount * thCount + 1), "자동개폐기(동)_구분" + (thCount * thCount - 2), 
                "자동개폐기(동)_spacerLeft_dvc" + (thCount - 3),"자동개폐기(동)_spacerLeft_dvc" + (thCount - 1), "자동개폐기(동)_spacerLeft_dvc" + (thCount + 2), "자동개폐기(동)_spacerLeft_dvc" + (thCount + 3), "자동개폐기(동)_spacerLeft_dvc" + (thCount + 4), "자동개폐기(동)_spacerRight_dvc" + (thCount - 3), "자동개폐기(동)_spacerRight_dvc" + (thCount - 1), "자동개폐기(동)_spacerRight_dvc" + (thCount + 2), "자동개폐기(동)_spacerRight_dvc" + (thCount + 3), "자동개폐기(동)_spacerRight_dvc" + (thCount + 4), 
                "자동개폐기(동)_센서" + (thCount + 1), "자동개폐기(동)_센서" + (thCount + 2), "자동개폐기(동)_센서" + (thCount + 3), "자동개폐기(동)_센서" + (thCount + 4), "자동개폐기(동)_센서" + (thCount + 5), "자동개폐기(동)_(2)센서3",
                "자동개폐기(동)_천창" + (mtrCount + 1), "자동개폐기(동)_천창" + (mtrCount + 2)
            ], 
            "focus":true
        }
    }
}
else if (thCount == 4) {
    msg.payload = {
        "group": {
            "show": [ 
                "자동개폐기(동)_구분1", "자동개폐기(동)_구분2", 
                "자동개폐기(동)_spacerLeft_dvc" + thCount, "자동개폐기(동)_spacerLeft_dvc" + (thCount - 2), "자동개폐기(동)_spacerRight_dvc" + thCount, "자동개폐기(동)_spacerRight_dvc" + (thCount - 2), 
                "자동개폐기(동)_센서" + thCount, "자동개폐기(동)_(2)센서" + (thCount - 1), "자동개폐기(동)_센서" + (thCount - 2), "자동개폐기(동)_센서" + (thCount - 3), "자동개폐기(동)_센서" + (thCount - 4), "자동개폐기(동)_센서" + (thCount - 5),
                "자동개폐기(동)_천창" + (mtrCount - 1), "자동개폐기(동)_천창" + mtrCount
            ], 
            "hide": [ 
                "자동개폐기(동)_spacerLeft_dvc" + (thCount - 3), "자동개폐기(동)_spacerLeft_dvc" + (thCount + 1), "자동개폐기(동)_spacerRight_dvc" + (thCount - 3), "자동개폐기(동)_spacerRight_dvc" + (thCount + 1), 
                "자동개폐기(동)_센서" + (thCount -1), "자동개폐기(동)_센서" + (thCount + 1), "자동개폐기(동)_센서" + (thCount + 2), "자동개폐기(동)_센서" + (thCount + 3), "자동개폐기(동)_센서" + (thCount + 4), "자동개폐기(동)_센서" + (thCount + 5),
                "자동개폐기(동)_천창" + (mtrCount + 1), "자동개폐기(동)_천창" + (mtrCount + 2)
            ], 
            "focus":true
        }
    }
}
else {
    msg.payload = {
        "group": {
            "show": [ 
                "자동개폐기(동)_구분1", "자동개폐기(동)_구분" + (thCount - 4),
                "자동개폐기(동)_센서" + thCount, "자동개폐기(동)_센서" + (thCount - 1), "자동개폐기(동)_센서" + (thCount - 2), "자동개폐기(동)_센서" + (thCount - 3), "자동개폐기(동)_센서" + (thCount - 4), "자동개폐기(동)_센서" + (thCount - 5),
                "자동개폐기(동)_천창" + (mtrCount - 1), "자동개폐기(동)_천창" + mtrCount
            ], 
            "hide": [ 
                "자동개폐기(동)_구분" + (thCount - 1), 
                "자동개폐기(동)_spacerLeft_dvc" + (thCount + 1), "자동개폐기(동)_spacerLeft_dvc" + (thCount + 2), "자동개폐기(동)_spacerLeft_dvc" + (thCount - 1), "자동개폐기(동)_spacerLeft_dvc" + (thCount - 2), "자동개폐기(동)_spacerLeft_dvc" + (thCount - 4), "자동개폐기(동)_spacerLeft_dvc" + (thCount - 5), "자동개폐기(동)_spacerRight_dvc" + (thCount + 1), "자동개폐기(동)_spacerRight_dvc" + (thCount + 2), "자동개폐기(동)_spacerRight_dvc" + (thCount - 1), "자동개폐기(동)_spacerRight_dvc" + (thCount - 2), "자동개폐기(동)_spacerRight_dvc" + (thCount - 4), "자동개폐기(동)_spacerRight_dvc" + (thCount - 5), 
                "자동개폐기(동)_센서" + (thCount + 1), "자동개폐기(동)_센서" + (thCount + 2), "자동개폐기(동)_센서" + (thCount + 3), "자동개폐기(동)_(2)센서3",
                "자동개폐기(동)_천창" + (mtrCount + 1), "자동개폐기(동)_천창" + (mtrCount + 2)
            ], 
            "focus":true
        }
    }
}



return msg;