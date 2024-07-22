// for loop
// while loop
// do while loop

for(let i=0;i<10;i++){
    console.log(i);
}

// WAP to print all number divisible by 7 in range of 50 to 100

for(let j=50;j<=100;j++){
    if(j%7==0){
        console.log(j);
    }
}

// WAP to print all number divisible by 7 & 5 in range of 50 to 100
for(let j=50;j<=100;j++){
    if(j%7===0 && j%5===0){
        console.log(j);
    }
}

// for of loop
console.log('------for of loop-------')
const nums=[3,5,7,8,9]
for(let i of nums){
    console.log(i);
}

// while loop

console.log('------while loop------');
let a=10;
while(a<20){
    console.log(a);
    a++;
}

// do while loop

console.log('------ do while loop------');
let b=10;
do{
    console.log(b);
    b++;

}while(b<10);

