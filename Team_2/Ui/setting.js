// <Setting>
// [default] Setting 목록의 개수는 최대 6개 : 6개 이하에서 동적인 화면 적용 가능 
// Setting 목록 개수 6개 이상 : 
//  1) Node-RED Dashboard Setting Tab에 그룹 추가 - 그룹이름 : 설정입력 + 목록번호 
//  2) Setting flow에 Setting 정보에 들어가는 Dashboad 위젯 추가 후 flow 설정 및 그룹 설정
//  3) setting.js 코드 수정 - 동적 화면 적용에 추가된 목록의 수만큼 show, hide 수정 
//      ex) 목록 개수 8개 일 때
//          설정입력7, 설정입력8 그룹 생성 
//          -> 위젯 추가 
//          -> 코드 수정 : show에 "Setting_설정입력 + (dvcCount - 6)","Setting_설정입력 + (dvcCount - 7)"  추가, 
//                         hide에 "Setting_설정입력 + (dvcCount + 6)","Setting_설정입력 + (dvcCount + 7)" 추가


var dvcCount = msg.payload.length // 설정 장비 개수

// 동적 화면 적용
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
