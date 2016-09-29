#!/bin/sh

gpio mode 15 out
gpio write 15 1
gpio mode 16 out
gpio write 16 1
sudo forever start "/home/pi/home-automation/automation-client/app.js"
cd /home/pi/home-automation/webcam-server
./motion -n -c motion-mmalcam.conf &

