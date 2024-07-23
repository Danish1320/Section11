function addNums(a,b){
    c=a+b;
    console.log(c);
}
addNums(3,5);
//console.log(c);
const getavg=function(m1,m2,m3){
    const avg=(m1+m2+m3)/3;
    return avg;

    
}
let result=getavg(78,89,90);
console.log(result);

const factorial=(n) => {
    let f=1;

    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;
}
let ans=factorial(6);
console.log(ans);

// WAP to find sum of all numbers in a given range

function sumInRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

// Example usage
let start = 1;
let end = 10;
console.log(sumInRange(start, end));

