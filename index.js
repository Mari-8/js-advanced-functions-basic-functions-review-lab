// Your code here

function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(toDo="go to the office") {
    return `This Monday, I will ${toDo}.`
}   

function wrapAdjective(flair="*") {
    return function(adj="special") {
        return `You are ${flair}${adj}${flair}!`
    }
   
}

function add() {
    return 1 + 3
}

function subtract() {
    return 1 - 3 
}

function multiply() {
    return 1 * 3
}

function divide() {
    return 10 / 5
}

const Calculator = {add, subtract, multiply, divide}; 


function actionApplyer(int=0, arr) {
    let start = int 

    for (let i = 0; i < arr.length; i++ ){
        start = arr[i](start)
    }
    return start
}