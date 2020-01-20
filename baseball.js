var arr = [1, 2, 3];
var str = ['1', '2', '3'];
var mix = [true, 1, '2']; //this array type is assigned to the arrangement that include string or number or boolean. "|" means "or"
var mix2 = [true, 2, '3']; // this array is strictly regulated only for the array which length is 3, and the specific type can be stored. It is called "Tuple"
var mix3 = [true, 2, '3']; // appending "as const" means I would declare that as unchangable code like const.(=type : readonly).
var obj = { a: 'b' }; // if I add as const, I could not change the property. for example, obj.a = 'w' is not available.
var obj2 = { a: 'abc' };
//obj2.a = 3; this code makes error because obj2.a's type is determined as string.
function add(a, b) {
    console.log(a, b);
} //If there is no "return" in function, the type of function is void.
function add2(a, b) {
    return function (c) {
        return 3;
    };
} //the type of return's function should be proclaimed as the form of function like that. "(c:string) => number"
function add3(a, b) {
    return function (c) {
        return function (d) {
            return false;
        };
    };
}
var objMethod = {
    a: function () {
        return 'hello';
    }
}; //to put the type of method, I can write the type like that "{ a: () =>string}"
var objMethod2 = {
    a: function (b) {
        return 'hello';
    }
}; //"?" : if the parameter is not likely to be used, I can add ? to distinguish this.
// to allow typescript read js, 1. make tsconfig.json 2. type {"allowJs" : true} inside compilerOptions
// If I declare "let num" as number, I can type "num=3;" but I couldn't put "num='3';"
// However, if I use "toString()" I can change number to string. "let str: string =num.toString(); or String(num)" like that.
// Warning : don't write the type with upper case like Number,String,Bulean,Array.....
