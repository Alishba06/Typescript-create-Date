var date_ob = new Date();
//current date
//abjust o before single digit date
var date = ("0" + date_ob.getDate()).slice(-2);
//current month
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
//current year
var year = date_ob.getFullYear();
//current hours
var hours = date_ob.getHours();
//current minutes
var minutes = date_ob.getMinutes();
//current seconds
var seconds = date_ob.getSeconds();
console.log(year + "-" + month + "-" + date);
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
console.log(hours + ":" + minutes);
