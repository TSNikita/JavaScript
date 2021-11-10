5 > 4  //true
"ананас" > "яблоко" //true
"2" > "12" //fulse
undefined == null //true
undefined === null //fulse
null == "\n0\n"  //true
null === +"\n0\n" // fulse
"" + 1 + 0 //"10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" //"9px"
"$" + (4 + 5) //"$45"
"4" - 2 // 2
"4px" - 2 //2px
7 / 0 // Number/ infinity
"  -9  " + 5 // "-95"
"  -9  " - 5 // -14
null + 1 // 1
undefined + 1 // NaN
" \t \n" - 2 //-2



Дом. задание Лекция №3


1.
let a = 0;

if (a == 0) {
    console.log('Верно');

} else if (a != 0) {
console.log('Неверно');
}



2.
let a = 1;

if (a > 0) {
    console.log('Верно');

} else if (a < 0) {
console.log('Неверно');

}


3.
let a = -3;

if (a < 0) {
    console.log('Верно');

} else if (a > 0) {
console.log('Неверно');

}



4.
let a = 1;

if (a >= 0) {
    console.log('Верно');

} else if (a <= 0) {
console.log('Неверно');

}


5.
let a = 0;

if (a <=0) {
    console.log('Верно');
} else if (a >=0) {
    console.log('Неверно');
}


6.
let a = -3;

if (a != 0) {
    console.log('Верно');
} else if (a == 0) {
    console.log('Неверно');
}


7.
let a = 'тест';

if (a == 'test') {
    console.log('Верно');
} else if (a != 'test') {
    console.log('Неверно');
}



8. 
let a = '1';

if (a === '1') {
    console.log('Верно');
} else if (a = '1') {
    console.log('Неверно');
}
