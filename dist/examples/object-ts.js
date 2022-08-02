"use strict";
var person = {
    name: 'Mariana',
    age: 28,
    career: 'developer'
};
// const andre: (name:string,age:number,career:string) = {
//     name:'Andre',
//     age:25,
//     career:"painter"
// }
// const paula: (name:string,age:number,career:string) = {
//     name:'Andre',
//     age:25,
//     career:"developer"
// }
var Career;
(function (Career) {
    Career[Career["Developer"] = 0] = "Developer";
    Career[Career["Painter"] = 1] = "Painter";
    Career[Career["Actor"] = 2] = "Actor";
    Career[Career["Player"] = 3] = "Player";
})(Career || (Career = {}));
var vanessa = {
    name: 'Vanessa',
    age: 25,
    career: Career.Developer
};
var maria = {
    name: 'Maria',
    age: 28,
    career: Career.Developer
};
var jessica = {
    name: 'Jessica',
    age: 12,
    career: Career.Developer,
    subjects: ['math', 'english', 'science']
};
var monica = {
    name: 'Monica',
    age: 14,
    subjects: ['science', 'english', 'math'],
};
var toList = function (list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        console.log('- ', item);
    }
};
toList(monica.subjects);
