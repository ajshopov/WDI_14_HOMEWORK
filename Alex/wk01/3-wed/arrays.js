//1.

var days_of_the_week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(days_of_the_week);

//2.

days_of_the_week.unshift(days_of_the_week.pop());
console.log(days_of_the_week);

//3.

var weekdays = days_of_the_week.slice(1,6);
console.log(weekdays);

var weekends = [].concat(days_of_the_week.slice(0,1), days_of_the_week.slice(-1));
console.log(weekends);
weekends.reverse();
console.log(weekends);

//4. ~~~~~~~~~~~

//5.

weekdays.sort();
console.log(weekdays);


