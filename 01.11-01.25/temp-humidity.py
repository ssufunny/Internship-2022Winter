import Adafruit_DHT# 라이브러리 불러오기

sensor = Adafruit_DHT.DHT11 #  sensor 객체 생성
pin = gpioNum1 # Data핀의 GPIO핀 넘버
humidity, temperature = Adafruit_DHT.read_retry(sensor, pin) # 센서 객체에서 센서 값(온도, 습도) 읽기

if humidity != None and temperature != None: # 습도 및 온도 값이 모두 제대로 읽혔다면 
    humidity = str(round(humidity, 1)) + " %" # 습도
    temperature = str(round(temperature, 1)) + " ℃" # 온도
