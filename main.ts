input.onButtonPressed(Button.A, function () {
    radio.sendString("pump-on")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("pump-off")
    radio.sendString("fan-off")
    radio.sendString("light-off")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("light-on")
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("new_file")
})
radio.setGroup(58)
let time = 1000
radio.sendValue("time", time)
radio.setTransmitPower(7)
