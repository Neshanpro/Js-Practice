let re;
let str;
//Phone number
//re = /^(\+)?(88)?01[0-9]{9}$/;
//str = "+8801928456821";

//Postal code
//re = /^[0-9]{4}$/;
//str = "9100";

//Email Address
re = /^([a-z0-9]\.?)+[^\.]@([a-z0-9]\.?)+$/i;
str = "Jayedroky@gmail.com";

console.log(re.exec(str));
res(str, re);
function res(str, re) {
    if (re.test(str)) {
        console.log(`'${str}' Matches '${re}'`);
    }
    else {
        console.log(`'${str}' Dosen't match '${re}'`);
    }
} 
