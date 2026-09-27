const history_calculations = []
function storecalculations(a,b,operation,result){
    const calculation = {
        "a" : a,
        "b" : b,
        "operation" : operation,
        "result" : result,
    }
    history_calculations.push(calculation)
    console.log(history_calculations)
}
function calculate(a,b,operation){
    if(operation === '+'){
        let sum = a + b
        storecalculations(a,b,operation,sum)
        return sum
    } else if(operation === '-'){
        let sub = a - b
        storecalculations(a,b,operation,sub)
        return sub
    } else if(operation === '/' && b !== 0){
        let division = a / b
        storecalculations(a,b,operation,division)
        return division
    } else if(operation === '*'){
        let multiply = a * b
        storecalculations(a,b,operation,multiply)
        return multiply
    } else {
        return 'invalid operation!!'
    }
}

calculate(30,2,"+")
calculate(30,5,"-")
calculate(30,2,"/")
calculate(30,2,"*")
