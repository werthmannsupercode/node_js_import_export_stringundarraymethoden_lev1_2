// const pop = (param) => {
//     param.pop();
// }

// const pop = (param) => {
//     const a = param.pop();
//     console.log(a);
// }

// module.exports = pop;

// const splice = (param) => {
//     const a = param.splice(1, param.length);
//     

// }

// const ntesElement = (param, n) => {
//     if (n > param.length || n < 0) {
//         const a = param.pop();
//         console.log(a);
//     }

//     else {
//         const a = param.splice(n, 1);
//         console.log(a);
//     }
// }

// const filter = () => {

//     const array = ["remove", "stay", "stay5", 22, true, "remove"]
//     const newarray = array.filter((elt) => {
//         return elt != "remove"
//     })
//     console.log(newarray);
// }

// const einzigartig = () => {
//     const array = [1, 6, 9, 2, 1, 6, 7, 10];
//     const newarray = array.filter((elt, pos) => {
//         return array.indexOf(elt) == pos;
//     })
//     console.log(newarray);
// }

// const summe = () => {
//     const array = [1, 6, 9, 2, 1, 6, 7, 10];
//     const newarray = array.filter((elt, pos) => {
//         return array.indexOf(elt) == pos;
//     })

//     let add = 0

//     for (let i = 0; i < newarray.length; i++) {
//         add += newarray[i];
//     }
//     console.log(add);
// }

// const functionOne = (a, b) => {
//     let m = Math.random() * (b - a) + a;
//     console.log(m);
// }

// const functionTwo = () => {

//     let a = "ichbineinewortschlange";
//     let b = a.slice(0, 1);
//     let c = b.toUpperCase();
//     let d = a.slice(1, a.length);
//     console.log(c + d);
// }

const functionThree = () => {

    let a = "ichbinaucheinewortschlange"
    let b = a.toUpperCase();
    console.log(b);
}

module.exports = functionThree;