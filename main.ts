radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # # . . .
                # # . . .
                # # . . .
                . . . . .
                `)
        }
    }
    if (receivedNumber == 2) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . . . . .
                # # . . .
                # # . . .
                # # . . .
                . . . . .
                `)
        }
    }
    if (receivedNumber == 3) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(3)
})
radio.setGroup(1)
basic.forever(function () {
	
})
