//func 1
const minimal = (a,b)=>{
    if (a>b){
        return b;
    }
    else if(b>a){
        return a;
    }
    else if(a==b){
        return a;
    }
}
console.log(minimal(3,3))

//func 2
const findIndex = (array,number)=>{
    for(let e of array){
        if(array.includes(number)){
            return array.indexOf(number)
        }
        else{
            return -1
        }
    }
}
console.log(findIndex([1,2,3,4,5],5))

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

console.log(calculate(3));
//soal dikoding
function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    console.log(`currentMin: ${currentMin}, currentMax: ${currentMax}`);
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

//min: -23
//max: 71