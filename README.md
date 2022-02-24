# 2022 Winter Intership

- 유비샘   
- 2022.01.03 - 2022.02.25   
- AM 9:00 - PM 6:00

### :file_folder: 01.03-01.10
> Simple Smart-Farm 스토리보드 제작
> - <2022.01.03> Node-RED, Smart-Farm 학습
> - <2022.01.04> Node-RED 학습, Smart-Farm 초기화면 구상
> - <2022.01.05 ~ 2022.01.06> Node-RED 이용해 로그인, 회원가입, 마이페이지 화면 UI 제작
> - <2022.01.06 ~ 2022.01.10> Smart-Farm 스토리보드 제작

### :file_folder: 01.11-01.25
> 장비 특화 블록코딩 프로그램 스토리보드 제작
> - <2022.01.11> 프로그램 이름 선정 및 아이콘 생성
> - <2022.01.12 ~ 2022.01.25> 스토리보드 제작
> - <2022.01.12> 메인화면 - 타이틀 바, 작업공간, 노드팔레트, 사이드 바 화면 제작
> - <2022.01.13 ~ 2022.01.19> 노드팔레트 - Dashboard, Function 구상(<a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.11-01.25/rotation.py'>rotation.py</a>, <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.11-01.25/temp-humidity.py'>temp-humidity.py)
> - <2022.01.20 ~ 2022.01.25> 예시 flow 생성, 예시 flow 실행 시 화면 UI 제작

### :file_folder: 01.25-02.25
> Git 관리
>
> Node-RED로 Smart-Farm UI 제작 및 Smart-Farm 스토리보드 제작
> - <2022.01.25 ~ 2022.01.27> config file 값 읽어서 기존 예시 화면 Node-RED로 구상 시도(~~test.js~~)
> - <2022.01.27 ~ 2022.01.28> DB table에 dummy data 넣기(~~insert.sql~~, ~~test.db~~)
> - <2022.02.03 ~ 2022.02.07> dummy data로 생성한 table 정보와 Node-RED 연결
> - <2022.02.08 ~ 2022.02.09> 임시 값으로 Group 생성하여 DB table 정보에 따라 화면 동적으로 표현
> - <2022.02.08> Data 개수 축소
> - <2022.02.09> 불필요한 Data 값 삭제
> - <2022.02.08 ~ 2022.02.09> Node-RED와 SQLite 연동하여 테이블 정보 불러오기(~~test_db2nodered.sql~~)
> - <2022.02.09 ~ 2022.02.10> 위젯 크기 조절
> - <2022.02.09> DB script와 config file을 고려하여 임시 table 생성(~~test.db~~)
> - <2022.02.09> 연동된 table 정보로 동적 화면 표현 시도(~~test_deviceCountIf.js~~, ~~test_uiControl.js~~, ~~test_deviceCount.js~~)
> - <2022.02.10> 연동된 table 정보로 자동개폐기 - 온습도센서 동적 화면 표현(~~test_deviceCount.js~~)
> - <2022.02.10 ~ 2022.02.11> 동적 화면 test에 필요한 임시 table 추가 생성(~~test.db~~)
> - <2022.02.11> 연동된 table 정보로 자동개폐기 - 온습도센서, 천창 동적 화면 표현(~~test_deviceCount -> test_auto.js~~)
> - <2022.02.14> 연동된 table 정보로 관수 동적 화면 표현(~~test_watering.js~~)
> - <2022.02.15> 연동된 table 정보로 setting 동적 화면 표현(~~test_setting.js~~)
> - <2022.02.15> 연동된 table 정보로 setting 화면의 그룹이름에 정보 넣기(~~test_setting_groupName.js~~)
> - <2022.02.15 ~ 2022.02.21> 제작된 스토리보드 내용 수정
> - <2022.02.17> 코드 주석 추가 및 파일명 변경(~~test_auto.js~~ -> <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/autoSwitch.js'>autoSwitch.js</a>, ~~test_watering~~ -> <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/watering.js'>watering.js</a>, ~~test_setting.js~~ -> <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/setting.js'>setting.js</a>, ~~test_setting_groupName.js~~ -> <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/setting_groupName.js'>setting_groupName.js</a>)
> - <2022.02.18> 연동된 table 정보로 swtich 동적 화면 표현(<a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/switch.js'>switch.js</a>)
> - <2022.02.21> 연동된 table 정보로 swtich 화면의 장비이름에 정보 넣기(<a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/Ui/switchName.js'>switchName.js</a>)
> - <2022.02.22> 버튼 Event Click 시 해당 Web 화면으로 연결을 위해 GET, POST 방식 학습
> - <2022.02.22> <a href='https://github.com/ssufunny/Internship-2022Winter/blob/main/01.25-02.25/DB%20script/sqlCollection.sql'>sqlCollection.sql</a>에 Insert문, Delete문 추가
> - <2022.02.23 ~ 2022.02.24> Ui Folder 내 모든 코드에 사용 설명 추가
> - <2022.02.24> Ui Folder 내 모든 코드에 history 추가, sqlCollection.sql에 history 추가
