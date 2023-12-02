import {data, testData} from './data.mjs'

const numWordList = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
]

const numHashMap = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
}

let partOneNum = 0
let partTwoNum = 0

data.forEach(str => {
    let numStr1 = ''
    let numStr2 = ''
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (!isNaN(char)){
            numStr1 += char
            break
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (!!numStr2[0]) break
        if (!isNaN(str[i])){
            numStr2 += str[i]
            break
        }
        for (let j = 0; j < numWordList.length; j++) {
            const numWord = numWordList[j]
            const sliceStr = str.slice(i, i + numWord.length)
            if (sliceStr === numWord){
                numStr2 += numHashMap[numWord]
                break
            }
        }
    }
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i]
        if (!isNaN(char)){
            numStr1 += char
            break
        }
    }

    for (let i = str.length; i >= 0; i--) {
        if (!!numStr2[1]) break
        if (!isNaN(str[i])){
            numStr2 += str[i]
            break
        }
        for (let j = 0; j < numWordList.length; j++) {
            const numWord = numWordList[j]
            const sliceStr = str.slice(Math.max(0, i - numWord.length), i)
            if (sliceStr === numWord){
                numStr2 += numHashMap[numWord]
                break
            }
        }
    }
    partOneNum += numStr1 * 1
    partTwoNum += numStr2 * 1
})

console.log(partOneNum)
console.log(partTwoNum)