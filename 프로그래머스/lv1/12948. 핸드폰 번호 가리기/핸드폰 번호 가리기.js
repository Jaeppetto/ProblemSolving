function solution(phone_number) {
    const private = phone_number.slice(0,-4).replace(/./g, '*')
    const public = phone_number.slice(-4)

    return private+public
}