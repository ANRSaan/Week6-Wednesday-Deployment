


const romanification = num => {
    let newArray = []
    let numbers = [1000, 500, 100, 50, 10, 5, 1]
    let romanNums = ["M", "D", "C", "L", "X", "V", "I"]

    for (i = 0; i < numbers.length;) {
        if ((num - numbers[i]) >= 0) {
            newArray.push(romanNums[i])
            num -= numbers[i]
        } else {
            i++
        }
        if (num === 0){
            return newArray.join('')
        }
    }
}
console.log(romanification(267))
