// <관수>
// 관수의 개수는 최대 6개로 제한

var wtrCount = msg.payload.length // 관수 개수

msg.payload = {
    "group": {
        "show": [   // 대시보드에 해당 그룹을 나타냄
            "관수_관수" + wtrCount, "관수_관수" + (wtrCount - 1), "관수_관수" + (wtrCount - 2), "관수_관수" + (wtrCount - 3), "관수_관수" + (wtrCount - 4), "관수_관수" + (wtrCount - 5)    // 관수
        ], 
        "hide": [   // 대시보드에서 해당 그룹을 숨김
            "관수_관수" + (wtrCount + 1), "관수_관수" + (wtrCount + 2), "관수_관수" + (wtrCount + 3), "관수_관수" + (wtrCount + 4), "관수_관수" + (wtrCount + 5)    // 관수
        ], 
        "focus":true
    }
}

return msg;
