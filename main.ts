let A = 0
basic.forever(function () {
    A = pins.analogReadPin(AnalogPin.P1)
    pins.analogWritePin(AnalogPin.P0, A * 2)
})
