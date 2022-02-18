# Smart-Farm used Node-RED 

## <수정사항>
- Node-RED
- [ ] 개별스위치 동적 적용
- [ ] SETTING 값 설정
- [ ] DB 연결(DB 생성 관련)
- PPT
- [ ] Flow 수정
- [ ] UI 화면 추가(동적 보여주는)
- README
- [ ] 수정사항 지속적으로 확인 후 반영


## 1팀 
  - config file 생성
  > Q. DB 생성(schema, table)은 언제, 어느 팀에서 하는 것인지? </br>
  > Q. 1팀에서 생성한 config file의 값은 DB 정보에 입력되는 것인지? 
## 2팀 
  - Node-RED에서 config or DB 연결 
  - data에 따라 UI 동적으로 제작
    - 자동개폐기</br>
    `온습도센서(Y, H, T), 천창개폐기(M)`
    
    - 개별스위치</br>
    `F(FAN), V(Valve), A(AC)`
      > Q. FAN, AC는 열림, 정지, 닫힘의 의미가 명확하지 않은 느낌</br>
      > Q. 1번, 2번.. 으로 설정하면 어떤 Device인지 알기 어려우니까 이름으로 변경해야 하는지?
    
     - 관수</br>
     `V(Valve)`
     
     - SETTING</br>
        > Q. DB에서 불러오는 정보 or DB에 입력하는 정보?</br>
        > Q. 저장된 장치 전부 or 온습도센서 제외</
        > Q. 화면 목록의 정보가 의미하는 DB 컬럼은 무엇인지?

