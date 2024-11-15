basic.showIcon(IconNames.Diamond)
radio.setGroup(1)
radio.setTransmitPower(6)
basic.forever(function () {
    radio.sendString("A")
    basic.pause(3000)
})
