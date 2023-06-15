const arr = [];

function isPrimeNumber(num){

    if(num < 2){
        return false;
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true;
};
 
function primeNumbers(start, end){
    if(start > end){
        [start,end] = [end,start]
    }

    for(let num = start; num <= end; num++){
        if(isPrimeNumber(num)){
            arr.push(num);
        }
    }
}

primeNumbers(50,7);
console.log(arr)