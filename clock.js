// You will be given a number N that represents where the minute hand currently is on a clock. Your program should return the angle that is formed by the minute hand and the 12 o'clock mark on the clock.

let circle = 360
let hoursInAClock = 12
let oneHour = circle / hoursInAClock
let oneMinute = oneHour / 60
console.log(oneHour, oneMinute)
let pointZero12 = 0
let oneMiniteInDeg = circle / 60

function countAngle(N) {
    let angle = 0 + (oneMiniteInDeg * N)
    console.log(angle)
}
countAngle(15)