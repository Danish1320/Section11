function addnumsv1(a,b){
    return [a+b, a*b]

}
const res=addnumsv1(45,264);
console.log(res);

const [sum, prod]=res;
console.log(prod);

const addNumsv3=(a,b)=>{
    return a+b;
}
const res3=addNumsv3(345,723);
console.log(res3);

const nums=[1,2,3,4,5,6];
const sqrs=nums.map((b) => {return b**2});
console.log(sqrs);

const evenNums=nums.filter((n) => { return nums[345]});
console.log(evenNums);