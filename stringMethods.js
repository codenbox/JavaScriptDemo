var str="welcome";
console.log(str.length); //length property

//use case of indexOf and search()
//var s="welcome to codenbox to automationLab" 
//var v=s.indexOf("to")
// var v=s.search("to")
// console.log(v)

//use case of charAt()
console.log(str.charAt(5));

//use case of concat()
var str1=" to codenbox automationLab"
var st=str.concat(str1).concat(" free tutorials")
console.log(st)

//use case of replace()
var str2="plesae visit our site"
var n=str2.replace("site", "youtube channel")
console.log(n)

//use case of substring()

var s="codenbox";
console.log(s.substring(0, 5));
console.log(s.substring(5, 8));

//use case of toUpperCase() & toLowerCase()
console.log(s.toUpperCase());

// use case of split()
var a="welcome to codenbox"
var arr=a.split("  ");
//console.log(arr)
console.log(arr[0]);
console.log(arr[2]);

//trim()
var b="   automationLab  "
console.log(b.trim())






