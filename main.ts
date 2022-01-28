radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ezkerreko_intermitentea()
    }
    if (receivedNumber == 2) {
        eskuineko_intermitentea()
    }
    if (receivedNumber == 3) {
        limpia_parabrisas()
    }
    if (receivedNumber == 4) {
        music.playMelody("C C - - - - - - ", 120)
    }
})
function ezkerreko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # # . . .
            # # . . .
            # # . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(200)
    }
}
function limpia_parabrisas () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(100)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(500)
    }
}
function eskuineko_intermitentea () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . # #
            . . . # #
            . . . # #
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(200)
    }
}
radio.setGroup(1)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(4)
    }
})
