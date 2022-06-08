// code your solution here
function saturdayFun(fun='roller-skate'){
    return (`This Saturday, I want to ${fun}!`);
}

function mondayWork(task='go to the office'){
    return (`This Monday, I will ${task}.`)
}

function wrapAdjective(adjective){
    const specialChar=function(char){
        return `You are ${adjective}${char}${adjective}!`
    }
    return specialChar
 }
 wrapAdjective('*')


