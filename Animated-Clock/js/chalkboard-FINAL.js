// Lesson 08.07 - Animated Clock Hands - PROG
// Displaying the Date and Time to a Chalkboard

// 
// 0. Get the chalkboard, which is a div where the date time will display

// 1. Instantiate the Date object

// 2. Get the current day, which is an int from 0-6 (Sunday=0, Saturday=6)

// 3. Make an array of the days of the week
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// 4. Get the day of the week by looking it up in the dayOfWeek array

// 5. Get the current hour, minute and second


// 6. Declare a greeting variable to hold the "Timely Greeting"
let greeting = "";

// 7. Do if-else logic to set the greeting:
// Hey, Night Owl! (from midnight til 3:59 am) '
// Good Morning! (from 4am til noon) 
// Good Afternoon! (from noon to 5:59pm)
// Good Evening! (from 6:00pm til 11:59pm)


// 8. convert military time to "regular" time (14:00 hours becomes 2:00pm)
let amPm = 'am';


// 9. if minutes or seconds is less than 10, add a leading zero, so we get 3:04:05--not 3:4:5



// 10. output to the chalkboard: the day of the week, greeting and the time in 00:00:00 format


// 11. put this all in a setInterval so that updates the time display every second
// run this every sec