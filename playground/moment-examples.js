var moment = require('moment');


console.log(moment().format());


// January 1st 1970 @ 12:00 am -> 0
// January 1st 1970 @12:01 am -> 60


var now = moment();

console.log('Current timestamp', now.unix());

var timeStamp = 1554059235;
var currentMoment = moment.unix(timeStamp);
console.log(currentMoment.format('MMM D,YYYY @ h:mm a'));


// January 3rd, 2019 @ 12:13 AM

console.log(currentMoment.format('MMMM Do, YYYY @ hh:mm A'))
