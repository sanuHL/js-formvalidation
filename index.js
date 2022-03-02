let sName = 'Sanuri';
let sNIC = '977292140V'; //window.prompt("Enter NIC no");
let bDay = '16081997'; //window.prompt("Enter your birthday")
let month;
let date;

let yearValue = parseInt(sNIC.substr(0, 2));
let tempMonth = parseInt(sNIC.substr(2, 3));

let monthValue ;
if (tempMonth >=500)
{
 monthValue = tempMonth - 500;
}
else
{
  monthValue = tempMonth;
}

if (monthValue < 31) {
  month = 01;
  date = monthValue;
} else if (monthValue <= 60) {
  month = 02;
  date = Math.abs(31 - monthValue);
} else if (monthValue <= 91) {
  month = 03;
  date = Math.abs(60 - monthValue);
} else if (monthValue <= 121) {
  month = 04;
  date = Math.abs(91 - monthValue);
} else if (monthValue <= 152) {
  month = 05;
  date = Math.abs(121 - monthValue);
} else if (monthValue <= 182) {
  month = 06;
  date = Math.abs(152 - monthValue);
} else if (monthValue <= 213) {
  month = 07;
  date = Math.abs(182 - monthValue);
} else if (monthValue <= 244) {
  month = 08;
  date = Math.abs(213 - monthValue);
} else if (monthValue <= 274) {
  month = 09;
  date = Math.abs(244 - monthValue);
} else if (monthValue <= 305) {
  month = 10;
  date = Math.abs(274 - monthValue);
} else if (305 < monthValue && monthValue <= 335) {
  month = 11;
  date = Math.abs(305 - monthValue);
} else if (335 < monthValue && monthValue <= 366) {
  month = 12;
  date = Math.abs(335 - monthValue);
}
console.log("Birthday : " + yearValue, month, date);

// validate

let bdayArray = [];

let birthYear = parseInt(bDay.substr(6, 7));
let birthMonth = parseInt(bDay.substr(2,2)); 
let birthDate = parseInt(bDay.substr(0, 2));

if (
  yearValue == birthYear &&
  month == birthMonth &&
  date == birthDate
) {
  console.log('Successfully validated !!');
} else {
  console.log('Plese recheck your details!!');
}


