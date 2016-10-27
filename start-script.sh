#!/bin/sh

gpio mode 1 out
gpio write 1 1
gpio mode 15 out
gpio write 15 1
gpio mode 16 out
gpio write 16 1
cd "/home/pi/home-automation/automation-client/"
sudo forever start automate-client.js
