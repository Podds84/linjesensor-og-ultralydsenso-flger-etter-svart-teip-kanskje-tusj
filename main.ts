basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.setPixelColor(5, 0x00FF00)
        bitbot.setPixelColor(4, 0x00FF00)
        bitbot.setPixelColor(3, 0x00FF00)
        bitbot.setPixelColor(2, 0x00FF00)
        bitbot.setPixelColor(1, 0x00FF00)
        bitbot.setPixelColor(0, 0x00FF00)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.setPixelColor(11, 0x00FF00)
        bitbot.setPixelColor(10, 0x00FF00)
        bitbot.setPixelColor(9, 0x00FF00)
        bitbot.setPixelColor(8, 0x00FF00)
        bitbot.setPixelColor(7, 0x00FF00)
        bitbot.setPixelColor(6, 0x00FF00)
    } else {
        bitbot.ledClear()
    }
})
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.rotate(BBRobotDirection.Left, 30)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 30)
    } else if (bitbot.sonar(BBPingUnit.Centimeters) < 7) {
        bitbot.stop(BBStopMode.Coast)
    } else {
        bitbot.go(BBDirection.Forward, 25)
    }
})
