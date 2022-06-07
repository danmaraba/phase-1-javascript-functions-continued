// code your solution here
function saturdayFun(task='roller-skate'){
    return (`This Saturday, I want to ${task}!`);
}

function mondayWork(task='go to the office'){
    return (`This Monday, I will ${task}.`)
}

function wrapAdjective(result="*"){
    return function wrapAdj(emphatic="a hard worker"){
    return `You are ${result}${emphatic}${result}!`;
    }
}


