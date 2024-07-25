const user = {
    name: 'danish',
    email: 'xyz@gmail.com',
    password: '12345'
};
console.log(user.email);
console.log(user['email']);

user.email = 'abc@gmail.com';
console.log(user);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand = 'one+';
const model = 'one+12';
const price = '50000';
const colors = ['red', 'black', 'white'];

const smartphone = { brand, model, price, colors }
console.log(smartphone);

const { address } = user;
console.log(address);

console.log(smartphone.price);
smartphone.colors.push("pink")
console.log(smartphone.colors);

smartphone.colors[2] = 'moonwhite'
console.log(colors);

const smartphoneList = [
    {
        brand: 'one+',
        model: 'one+12',
        price: '50000',
        colors: ['black', 'white'],
    },
    {
        brand: 'Apple',
        model: '15',
        price: '125000',
        colors: ['red', 'yellow'],
    },
    {
        brand: 'google',
        model: 'pixel 8',
        price: '55000',
        colors: ['green', 'orange',],
    },
];
//1. access the price of apple iphone
console.log(smartphoneList[1].price);
//2. access the last color of google pixel
console.log(smartphoneList[2].colors.at(-1));
//another method
console.log(smartphoneList[2].colors[smartphoneList[2].colors.length - 1]);

const myphones = smartphoneList.filter((phone) => { return phone.price <= 50000 });
console.log(myphones);

let filter1 = smartphoneList.filter(function (phone) {
    return phone.brand === 'one+'
})
console.log("Question 2", filter1);

const query = 'go';
const googlephones = smartphoneList.filter((phone) => {
    return phone.brand.toLowerCase().includes(query.toLowerCase())
})
console.log(googlephones);
console.log([2, 3, 4].includes(3));





