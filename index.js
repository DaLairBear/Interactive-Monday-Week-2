let jonSnowHealth = 100

jonSnowHealth = String(jonSnowHealth)

//jonSnowHealth = Number(jonSnowHealth)
//jonSnowHealth = parseInt(jonSnowHealth)
jonSnowHealth = +jonSnowHealth


//console.log(Boolean(''))

//console.log(typeof jonSnowHealth)

let theWinnerIs = 'Jamie is the winner.'

let newWinner = theWinnerIs.replace('Jamie', 'Jon')

// if(newWinner.includes('Jon')){
//     console.log('Replaced successfully')
// }

let lowerCamelCase
let UpperCamelCase = 'Pascal case'
let kebobCase = 'this-is-kebob-case'
let snake_case

//newWinner = newWinner.toLowerCase().replaceAll(" ", "-")

//newWinner = newWinner.toLowerCase().split(" ").join("-")

// console.log(newWinner)
// newWinner = newWinner.toLowerCase()
// console.log(newWinner)
// newWinner = newWinner.split(' ')
// console.log(newWinner)
// newWinner = newWinner.join('-')
// console.log(newWinner)

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('Jon is alive!')
    }else{
        console.log('Jon has perished.')
    }
}


isJonAlive()

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
}

surpriseAttack(20)
surpriseAttack(12)
surpriseAttack(13)


function greeting(name1, name2){
    console.log(name1, 'greets', name2)
}
//greeting('Jon Snow', 'Jamie Lanister')

function rollDice(){
    let possibleRolls = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.floor(Math.random() * possibleRolls.length)
    return possibleRolls[randomNumber]
}

let firstRoll = rollDice()
let secondRoll = rollDice()

// console.log(firstRoll)
// console.log(secondRoll)

function diceMultiplier(){
    let firstRoll = rollDice()
    let secondRoll = rollDice()

    return firstRoll * secondRoll
}
let multipliedNumber = diceMultiplier()

console.log(multipliedNumber)