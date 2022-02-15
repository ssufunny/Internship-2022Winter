// <Setting>
// Setting 목록의 개수는 최대 6개

var dvcCount = msg.payload.length // 설정 장비 개수

msg.payload = {
    "group": {
        "show": [ 
            "Setting_설정입력" + dvcCount, "Setting_설정입력" + (dvcCount - 1), "Setting_설정입력" + (dvcCount - 2), "Setting_설정입력" + (dvcCount - 3), "Setting_설정입력" + (dvcCount - 4), "Setting_설정입력" + (dvcCount - 5)    // Setting 목록
        ], 
        "hide": [ 
            "Setting_설정입력" + (dvcCount + 1), "Setting_설정입력" + (dvcCount + 2), "Setting_설정입력" + (dvcCount + 3), "Setting_설정입력" + (dvcCount + 4), "Setting_설정입력" + (dvcCount + 5)    // Setting 목록
        ], 
        "focus":true
    }
}

return msg;
