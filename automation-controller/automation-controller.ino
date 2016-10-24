
#include <Servo.h> 
#include <SoftwareSerial.h>

Servo lightServo;
Servo fanServo;
int lightSensorPin = A6;

int lightAutoPin = 8;
int lightControlPin = 9;
int fanControlPin = 10;
int lightServoPin = 12;
int fanServoPin = 13;

void setup() 
{ 
  pinMode(lightAutoPin, INPUT_PULLUP);
  pinMode(lightControlPin, INPUT_PULLUP);
  pinMode(fanControlPin, INPUT_PULLUP);
  
  lightServo.attach(lightServoPin);
  lightServo.write(0);

  fanServo.attach(fanServoPin);
  fanServo.write(0);
} 

void loop() 
{
  if (digitalRead(lightAutoPin) == HIGH) { // If in auto mode
    if (analogRead(lightSensorPin)>550) {
      lightServo.write(0);
    } else if (analogRead(lightSensorPin)<450) {
      lightServo.write(35);
    }
//    lightServo.write(0);
  } else {                                 // If in manual mode
    if (digitalRead(lightControlPin) == LOW) {
      lightServo.write(0);
    } else {
      lightServo.write(35);
    }
  }
  
  if (digitalRead(fanControlPin) == LOW) {
    fanServo.write(0);
  } else {
    fanServo.write(90);
  }
} 

