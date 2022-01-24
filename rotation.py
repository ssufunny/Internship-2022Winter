from gpio import Motor # 라이브러리 불러오기

motor = Motor(forward = gpioNum1, backward = gpioNum2) # 라즈베리파이 연결 gpioNum = pin 번호

# speedNum : 개발자가 설정한 회전 속도
# dirValue : 개발자가 설정한 회전 방향
# count : 개발자가 설정한 회전 수

if dirValue == 1 : # 정방향 회전
    for i in range(count) :
        motor.forward(speed=speedNum)
elif dirValue == -1 : # 역방향 회전
    for i in count : 
        motor.backward(speed=speedNum)
elif dirValue == 0 : # 정지
    for i in reversed(range(speedNum*10)) :
        motor.forward(speed=i/10)
# or
elif dirValue == 0 : # 정지
    exit()
