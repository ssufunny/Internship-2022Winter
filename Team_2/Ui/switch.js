// <개별스위치>
// 스위치 종류 : F(FAN), V(Valve), A(AC)
// 스위치 개수에 따라 그룹 번호 설정
// 스위치 그룹은 한 그룹에 3개씩 6 그룹으로 총 개별스위치 개수 18개 제한

var switchCount = msg.payload.length // 스위치 개수
// 그룹 번호 설정
if (switchCount <= 3) groupCount = 1
else if (switchCount <= 6) groupCount = 2
else if (switchCount <= 9) groupCount = 3
else if (switchCount <= 12) groupCount = 4
else if (switchCount <= 15) groupCount = 5
else if (switchCount <= 18) groupCount = 6

msg.payload = {
    "group": {
        "show": [   // 대시보드에 해당 그룹을 나타냄
            "개별스위치_번호목록" + groupCount, "개별스위치_번호목록" + (groupCount - 1), "개별스위치_번호목록" + (groupCount - 2), "개별스위치_번호목록" + (groupCount - 3), "개별스위치_번호목록" + (groupCount - 4), "개별스위치_번호목록" + (groupCount - 5)    // 번호목록
        ], 
        "hide": [   // 대시보드에서 해당 그룹을 숨김
            "개별스위치_번호목록" + (groupCount + 1), "개별스위치_번호목록" + (groupCount + 2), "개별스위치_번호목록" + (groupCount + 3), "개별스위치_번호목록" + (groupCount + 4), "개별스위치_번호목록" + (groupCount + 5)    // 번호목록
        ], 
        "focus":true
    }
}

return msg;
