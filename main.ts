if (pins.digitalReadPin(DigitalPin.P0) == 0) {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    basic.showNumber(10)
    basic.showNumber(9)
    basic.showNumber(8)
    basic.showNumber(7)
    basic.showNumber(6)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    for (let index = 0; index < 10; index++) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("LEAVE IMMEDIETLY!")
    basic.showIcon(IconNames.Sad)
    for (let index = 0; index < 10; index++) {
        music.playTone(988, music.beat(BeatFraction.Whole))
    }
}
