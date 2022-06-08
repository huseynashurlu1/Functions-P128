'use strict';

// var x = 'P128';
// var group_name = new String('P128');
// console.log(typeof x);
// console.log(typeof group_name);

// var z = new String('salam')
// var n = new String('salam')

// if(z===n) {
//     alert('salam')
// }
// else{
//     alert('salam')
// }

// var ad = 'Abbasov'
// var charName = ad.charAt(0);
// var upperName = charName.toUpperCase();
// console.log(ad.charCodeAt(0))

// console.log(ad.slice(-2))

// var course = 'Welcome to Code Academy. In Code Academy ....'
// // console.log(course.replace(/academy/gi,'Akademiya'))
// console.log(course.toUpperCase())


// var ad = 'Vasif';
// var course = 'Code Academy';

// var text = "Telebenin adi " + ad + "dir. O " + course + "de oxuyur"
// var new_text = `Telebenin adi ${ad}dir.O ${course}de oxuyur`
// console.log(text);

// var x = '10x';
// var y = new Number('10');
// console.log(isNaN(x));


// toString / toFixed / toPrecision / toExponential / valueOf

// var n = '20 '
// var z = Number(n)
// var num = 5.67;
// console.log(num.toExponential())
// var new_num = num.toString();
// console.log(typeof new_num);


// var colors = ['black','red','green','yellow','gray','white'];
// // var color = new Array('black','red','green','yellow','gray','white')
// // colors.length = 0
// // delete colors[0]
// console.log(Array.isArray(colors));
// pop / push / shift / unshift

// colors.unshift('orange')
// colors[0] = 'purple'
// console.log(colors);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // var i;

// fruits.forEach(element => {
//     console.log(element);
// });

// for(var x of fruits) {
//     console.log(x);
// }

// for(i=0;i<fruits.length;i++) {
//     document.write(fruits[i] + "<br>")
// }

// for(var i=0;i<=100;i++) {
//    if(i===10) {
//        console.log('Bura 10dur')
//        continue;
//    }
//    console.log(i)
// }

// var texmin = Math.floor(Math.random() * fruits.length)
// document.write(fruits[texmin]);

// console.log(fruits.join(' - '));

// var front_end = ['html','css','js']
// var back_end = ['c#','sql','server']
// var full_stack = front_end.concat(back_end)
// full_stack.sort()
// full_stack.reverse()
// console.log(full_stack);


// var z = 0;
// do {
//     z++;
//     console.log(z);
// } while (z<100);

// while (z<100) {
//     z++;
//     console.log(z);
// }



// HOISTING

// function ShowMessage(firstname) {
//     console.log('Hello ' + firstname);
// }

// ShowMessage('Ilkin');


// x = 20
// console.log(x);
// var x;


// function Click() {
//     var div = document.getElementById('first');
//     if(div.style.display === 'none') {
//         div.style.display = 'block'
//     }
//     else{
//         div.style.display = 'none'
//     }
// }



// function Click(){
//     var photo = document.getElementById('img');
//     if(photo.style.filter === 'grayscale(1)') {
//         photo.style.filter = 'grayscale(0)'
//     }
//     else{
//         photo.style.filter = 'grayscale(1)'
//     }
// }

// function Mode() {
//     var body = document.getElementById('bdy');
//     var icon = document.getElementById('icon');

//     if(body.style.backgroundColor === 'black') {
//         body.style.backgroundColor = 'white'
//         body.style.color = 'black'
//         icon.className = 'fa-solid fa-moon'
//     }
//     else{
//         body.style.backgroundColor = 'black'
//         body.style.color = 'white'
//         icon.className = 'fa-solid fa-sun'
//     }
// }


// function AddUser() {
//     var username = document.getElementById('input').value;
//     var span = document.getElementById('username');

//     span.innerHTML = username
// }

function AddUser() {
    var color = document.getElementById('input').value;
    var new_color = color.toLowerCase();
    document.body.style.backgroundColor = new_color
}

if(confirm('Do you agree the terms?') === true) {
    alert('Salam')
}
else{
    alert('Olmaz')
    document.body.style.display = 'none'
}