
#include <Servo.h> 
#include <SoftwareSerial.h>

Servo lightServo;
int lightServoPin = 12;
int lightControlPin = 10;
Servo fanServo;
int fanServoPin = 13;
int fanControlPin = 9;

void setup() 
{ 
  pinMode(lightControlPin, INPUT_PULLUP);
  lightServo.attach(lightServoPin);
  lightServo.write(0);

  pinMode(fanControlPin, INPUT_PULLUP);
  fanServo.attach(fanServoPin);
  fanServo.write(0);
  
} 

void loop() 
{
  if (digitalRead(lightControlPin) == LOW) {
    lightServo.write(0);
  } else
  {
    lightServo.write(35);
  }
  if (digitalRead(fanControlPin) == LOW) {
    fanServo.write(0);
  } else
  {
    fanServo.write(90);
  }
} 

