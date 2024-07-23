let arr=[10,'Danish',false,45]
console.log(arr);
console.log(typeof(arr));
console.log(Array.isArray(arr));

const movies=['Dangal','kill','manji','ddlj','jawan','pk'];
console.log(movies.length);

//indexing
console.log(movies[3]);
console.log(movies[4]);
console.log(movies.at(-4));
movies[3]='krish';
console.log(movies);

console.log(movies.indexOf('kill'));

//slicing

console.log(movies);
console.log(movies.slice(2,5));
console.log(movies.slice(2,-3));
console.log(movies.slice(2));
console.log(movies.slice(2,60));

//adding & removing elements

movies.push('Kalki'); // adds element to end of an array
console.log(movies);

movies.unshift('KGF'); // adds element at start of array
console.log(movies);

movies.pop(); // removes element from end of array
movies.shift(); // removes element from start of array
console.log(movies);

//movies.splice(3,2);
//movies.splice(3,2,'deadpool','venom');
console.log(movies);
movies.splice(3,0,'deadpool','venom');
console.log(movies);
