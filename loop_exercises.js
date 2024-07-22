// WAP to check the no. is Prime
const n1=8;
let c=0;
for(let i=1;i<=n1;i++)
{
    if(n1%i==0){
        c++;
    }
    
}
if(c===2)
    console.log('no. is prime')
else{
    console.log('not prime');
}

// WAP to reverse a no.
let i=21657
let reverse=0;
for( let i=number;number != 0; number=number/10)   
    {  
    let remainder = number % 10;  
    reverse = reverse * 10 + remainder;  
    } 
    console.log(reverse); 