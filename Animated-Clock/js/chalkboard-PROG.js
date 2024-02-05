// Lesson 08.07 - Animated Clock Hands - PROG
// Displaying the Date and Time to a Chalkboard with second updating

// 0. Get the chalkboard, which is a div where the date time will display
const chalkboard = document.getElementById('chalkboard');

// 12. put this all in a setInterval so that updates the time display every second
// run this every sec
setInterval(() => {
    // 
    const dt = new Date();
    let hr= dt.getHours();
  // 3. Get day of week as string name, like "Wednesday" instead of 3:
    let dayOfWeek = dt.toLocaleString('en-US', {weekday: 'long'});
    console.log('dayOfWeekLongStr:', dayOfWeek);

    // 6. Declare a greeting variable to hold the "Timely Greeting"
    let greeting = "";

    // 7. Get the current hour 
    // comeplete the greeting based on the hour:
    if(hr < 4) {
        greeting = "Hey, Night Owl!"; // 12:00 midnight - 3:59am
    } else if(hr < 12) {
        greeting = "Good Morning!"; // 4:00 - 11:59am
    } else if(hr < 18) {
        greeting = "Good Afternoon!"; // 12:00 midnight - 5:59pm
    } else {
        greeting = "Good Evening!"; // 6:00pm - 11:59pm
    }

    // 8. Use toLocalTimeString to get the time, with the leading 0 and AM / PM:
    let timeOfDay= dt.toLocaleTimeString('en-US');
    console.log('timeOfDay:', timeOfDay);
   

    // 11. output to the chalkboard: the day of the week, greeting and current timee:
    chalkboard.innerHTML = `${dayOfWeek} is Coffee Day!<br>${greeting}<br>Time: ${timeOfDay}`;

    // 10. Repeat  the whole interval process with date-time every 1 sec.
}, 1000); 
