// <Setting>
// Setting 목록의 개수는 최대 6개

var dvcCount = msg.payload.length // 설정 장비 개수

msg.payload = {
    "group": {
        "show": [   // 대시보드에 해당 그룹을 나타냄
            "Setting_설정입력" + dvcCount, "Setting_설정입력" + (dvcCount - 1), "Setting_설정입력" + (dvcCount - 2), "Setting_설정입력" + (dvcCount - 3), "Setting_설정입력" + (dvcCount - 4), "Setting_설정입력" + (dvcCount - 5)    // Setting 목록
        ], 
        "hide": [   // 대시보드에서 해당 그룹을 숨김
            "Setting_설정입력" + (dvcCount + 1), "Setting_설정입력" + (dvcCount + 2), "Setting_설정입력" + (dvcCount + 3), "Setting_설정입력" + (dvcCount + 4), "Setting_설정입력" + (dvcCount + 5)    // Setting 목록
        ], 
        "focus":true
    }
}

return msg;
