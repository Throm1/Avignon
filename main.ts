input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C C C D D D E F ", 120)
    music.playMelody("G C - C C C C C5 ", 120)
})
basic.forever(function () {
    basic.showString("Music\"")
})
