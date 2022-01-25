from gpio import Motor # 라이브러리 불러오기

motor = Motor(forward = gpioNum1, backward = gpioNum2) # 라즈베리파이 연결 gpioNum = pin 번호

# speedNum : 개발자가 설정한 회전 속도
# dirMode : 개발자가 설정한 회전 방향
# count : 개발자가 설정한 회전 수
# durationTime : 개발자가 설정한 회전 시간

# 함수로 설정하기 (일단 잔뜩 아닌거같음)
def forward(speedNum, dirMode, durationTime) : # 정방향 회전
    for _ in range(durationTime) :
        motor.forward(speed=speedNum)
        if dirMode == 0 :
            stop(speedNum, dirMode, durationTime)
        elif dirMode == -1 :
            backward(speedNum, dirMode, durationTime)

def backward(speedNum, dirMode, durationTime) : # 역방향 회전
    for _ in range(durationTime) :
        motor.forward(speed=speedNum)
        if dirMode == 0 :
            stop(speedNum, dirMode, durationTime)
        elif dirMode == 1 :
            forward(speedNum, dirMode, durationTime)

def stop(speedNum, dirMode, durationTime) : # 정지
    for _ in range(durationTime) :
        motor.forward(speed=speedNum) 
        if dirMode == 1 :
            forward(speedNum, dirMode, durationTime)
        elif dirMode == -1 :
            backward(speedNum, dirMode, durationTime)

if dirMode == 1 : # 정방향 회전
    forward(speedNum, dirMode, durationTime)
elif dirMode == -1 : # 역방향 회전
    backward(speedNum, dirMode, durationTime)
elif dirMode == 0 : # 정지
    stop(speedNum, dirMode, durationTime)

