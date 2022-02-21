// <개별스위치>
// 스위치 종류 : F(FAN), V(Valve), A(AC)

var switchCount = msg.payload.length // 스위치 개수
if (switchCount <= 3) groupCount = 1
else if (switchCount <= 6) groupCount = 2
else if (switchCount <= 9) groupCount = 3
else if (switchCount <= 12) groupCount = 4
else if (switchCount <= 15) groupCount = 5
else if (switchCount <= 18) groupCount = 6

msg.payload = {
    "group": {
        "show": [ 
            "개별스위치_번호목록" + groupCount, "개별스위치_번호목록" + (groupCount - 1), "개별스위치_번호목록" + (groupCount - 2), "개별스위치_번호목록" + (groupCount - 3), "개별스위치_번호목록" + (groupCount - 4), "개별스위치_번호목록" + (groupCount - 5)    // 번호목록
        ], 
        "hide": [ 
            "개별스위치_번호목록" + (groupCount + 1), "개별스위치_번호목록" + (groupCount + 2), "개별스위치_번호목록" + (groupCount + 3), "개별스위치_번호목록" + (groupCount + 4), "개별스위치_번호목록" + (groupCount + 5)    // 번호목록
        ], 
        "focus":true
    }
}

return msg;
