// console.log("hello world")
//var a ;
//console.log(a);a = 30;
// var a = 40;
// if (a > 10) {
//     var a = 300;
//     console.log("a is inside " + a);

// }
// else
// {
//     console.log("a is outside" + a);
// }
// let a = '20';
// if (a === 20) {
//     console.log("Equal data")

// }
// else {
//     console.log(" a is not equal");
// }
// const myname = "yash";
// // console.log("hiii" + myname);
// // const data = 'hello $(myname)';
// // console.log(data);
// function msg(name) {
//     return name + "welcome to js";

// }
// const data = msg("ram");
// console.log(data);
// const data = function msg(name) {
//     return name+"welcome to js"
// }
// arrow function
// const data = () => {
//     console.log("hiii......hello" + myname)
//     return" hiii......hello" + myname;
// }

// const result = data("ram");
// console.log(result)
// //  single line
// const data = msg => msg;
// console.log(data("greting..... "));
// iife
// (function () {
//     console.log("welcome to js")
// })();
// (() => {
//     console.log("welcome to abes")
// })();
// setInterval(() => {
//     console.log("hiii.... how are you")
// // }, 1000);
//  function greetings(msg="hello") {
//      console.log("hii" + msg);
// }
// greetings("yash");
function selectlanguage(lang) {
    let data;
    if (lang === "java") {
        function javacomiler() {
            return "java compiler selected";
        }
        data = javacompiler();
    } else if (lang = 'c') {
        function ccompiler() {
            return "c compiler seleted";
        }
        data = javacompiler();
    }
    else if (lang = 'c') {
        function ccompiler() {
            return "c compiler sected"
        }
        data = ccompiler();
    }
    else {
        data="no such compiler available"
    }
    return data;
    console.log(data);
        