// function decoder(number){
//     let words = ""
//     for(let i = 1; i < number.length; i++){
//         let shift = number[0]
//         let nums = number.charCodeAt(i)
//         // console.log(nums)
//         let letters = String.fromCharCode(nums + +shift)
//         words += letters
//     }
    
//     return words
// }

// console.log(decoder("2fcjjm"))
// let test = "z"
// console.log(test.charCodeAt(0))


// Jared's solution:

function decoder(str) {
    let alphaArr = [ 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Use regex to determine the entire number at the beginning
    let num = +str.match(/^[0-9]+/)

// Remove the number from the string
    str = str.replace(str.match(/^[0-9]+/), '')

    let answer = ''
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i]

// capture the index of the letters in the string
        let charIndex = alphaArr.indexOf(char)

// shift the index by the number indicated
// modulo 26 to subtract 26 however many times as needed
        let newIndex = (charIndex + num) % 26

// add the new letter to the new string
        answer += alphaArr[newIndex]
    }

    return answer
}

console.log(decoder('12534fcjjm'))