let date_ob = new Date();

//current date
//abjust o before single digit date
let date =("0" +  date_ob.getDate()).slice(-2);

//current month
let month = ("0" + (date_ob.getMonth()+ 1)).slice(-2);

//current year
let year = date_ob.getFullYear();

//current hours
let  hours = date_ob.getHours();

//current minutes
let minutes = date_ob.getMinutes();

//current seconds
let seconds = date_ob.getSeconds();

console.log(year + "-" + month + "-" + date);

console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

console.log(hours + ":" + minutes);