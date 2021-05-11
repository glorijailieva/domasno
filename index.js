

let a = 2;
let b = 5; 
let c = 4;
let d = 7;
let e = '6';



add = a + c + d;
console.log(add);
sub = b - c - d;
console.log(sub);
mult = b * c;
console.log(mult);
div = b / d;
console.log(div);
mod = a % c;
console.log(mod);
a++;
console.log(a);
a = a + 1;
console.log(a);
b--;
console.log(b);
b = b - 1;
console.log(b);



a = 2;
b = 5;
c = 4;
d = 7;
e = '6';
console.log(b == e);
console.log(a == b);
console.log(b === e);
console.log(b != e);
console.log(b !== e);
console.log(a !== d);
console.log(a > d);
console.log(a >= d);
console.log(b < c);
console.log(b <= a);



console.log(a > c || c > b);
console.log(a < b || d > c);
console.log(b = e && a > d);

console.log(d > a && c < b);
console.log('a > c || c > b' ,!(a > c || c > b));
console.log('d > a && c < b' , !(d > a && c < b));



console.error('This message is an error!');
console.table(['day', 'month', 'year']);
console.log(['day', 'month', 'year']);
let fruit = { 
    name: 'Apple',
    color: "red",
    form: "circular"
 };
console.dir(fruit);
console.dir(location); 
console.log(location);
console.info('Semos course: JavaScript basics.')

console.time('script');
setTimeout(() => {
    console.timeEnd('script');
}, 7000);