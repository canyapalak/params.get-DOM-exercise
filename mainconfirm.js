let params = (new URL(document.location)).searchParams;
let firstNameInfo = params.get('firstname');
let lastNameInfo = params.get('lastname');
let mailAddressInfo = params.get('mailaddress');
let dateInfo = params.get('reserv-date');
let timeInfo = params.get('reserv-time');
let phoneInfo = params.get('phone-number');
let guestInfo = params.get('guests');
let tableInfo = params.get('tables');
let commentsInfo = params.get('comments');

let firstNameP = document.getElementById("first-name");
let lastNameP = document.getElementById("last-name");
let mailAddressP = document.getElementById("mail-address");
let dateP = document.getElementById("res-date");
let timeP = document.getElementById("res-time");
let phoneP = document.getElementById("phone");
let guestP = document.getElementById("number-of-guests");
let tableP = document.getElementById("table-select");
let commentsP = document.getElementById("comments");

firstNameP.appendChild(document.createTextNode(firstNameInfo));
lastNameP.appendChild(document.createTextNode(lastNameInfo));
mailAddressP.appendChild(document.createTextNode(mailAddressInfo));
dateP.appendChild(document.createTextNode(dateInfo));
timeP.appendChild(document.createTextNode(timeInfo));
phoneP.appendChild(document.createTextNode(phoneInfo));
guestP.appendChild(document.createTextNode(guestInfo));
tableP.appendChild(document.createTextNode(tableInfo));
commentsP.appendChild(document.createTextNode(commentsInfo));


console.log(firstNameInfo + ", " + lastNameInfo + ", " + mailAddressInfo + ", " + dateInfo + ", " + timeInfo + ", " + phoneInfo + ", " + tableInfo + ", " + guestInfo + ", " + commentsInfo);