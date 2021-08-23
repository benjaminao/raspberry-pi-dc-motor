const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const gpio = require('rpi-gpio');
const gpiop = gpio.promise;
const webroot = __dirname + '/../../build';
http.listen(8080); //listen to port 8080
app.use(express.static(webroot));

const motor1A = 17; // Green wire
const motor1B = 27; // Green wire
const motor1E = 22; // Blue wire

// Setting up the pins
gpiop.setup(motor1A, gpio.DIR_OUT);
gpiop.setup(motor1B, gpio.DIR_OUT);
gpiop.setup(motor1E, gpio.DIR_OUT);


pio.write(motor1A, true); // 1 & 0 => Clockwise
gpio.write(motor1B, false);
gpio.write(motor1E, true); // Turn them on!

// By default we turn off the motors
gpio.write(motor1E, false);
