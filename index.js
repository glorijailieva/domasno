
let a = 3;
let b = 6;
let c =5;
a = 4;
console.log(a);
a += 1;
console.log(a);
b += 3;
console.log(b);
b -= 1;
console.log(b);
b *= 3;
console.log(b);
c /= 1;
console.log(c);
c %= 2;
console.log(c);
b %= 3;
console.log(b);


let x = 6;
let y = 8;
let z = 9;

if (x <= y && y <= z) {
    console.log(x, y, z);
} else if (x <= z && z <= y) { 
    console.log(x, z, y);
} else if (y <= x && x <= z) {
    console.log(y, x, z);
}else if(y <= z && z <=x) {
    console.log(y, z, x);
}else if(z <= x && x <= y) {
    console.log(z, x, y);
} else  {
    console.log(z, y, x);
}


let David = 80;
let Vinoth = 77;
let Divya = 88;
let Ishitha = 95;
let Tomash = 68;
let prosec = (David + Vinoth + Divya + Ishitha + Tomash) / 5;
console.log(prosec);

if (prosec < 60) {
    console.log('F');
} else if(prosec < 70) {
    console.log('D');
} else if (prosec < 80) {
    console.log('D');
} else if (prosec < 90) {
    console.log('B');
} else if( prosec < 100) {
    console.log('A');
}


let day = 'Cetvrtok';
switch (day){
    case 'Ponedelnik':
        console.log('workDay');
        break;
    case 'Vtornik':
        console.log('workDay');
        break;
    case 'Sreda':
        console.log('workDay');
        break;
    case 'Cetvrtok':
        console.log('workDay');
        break;
    case 'Petok':
         console.log('workDay');
        break;
    case 'Sabota':
        console.log('weekend');
        break;
     case 'Nedela':
        console.log('weekend');
        break;
      default:
         console.log('unnone');
 
}



