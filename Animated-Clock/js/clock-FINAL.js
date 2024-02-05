// Lesson 08.07
// Animated Clock Hands - PROG
// Animating the Clock Hands and Clock Guy Drinking Coffee

// 0. Get the DOM elements for animating : .clock and cup-arm
const clock = document.querySelector('.clock');
const cupArm = document.querySelector('.cup-arm');

// 1. Declare a variable for the cup-arm rotation deg num
let degRotate = -35;

// 2. Declare a counter variable for keeping track of when
//     to change direction of rotation from + to -
let counter = 0;

// 3. Set an initial rotation angle for the cup-arm
cupArm.style.transform = `rotate(${degRotate}deg)`;

setInterval(() => { // 4. Do a setInterval that runs 25x per sec (every 40 ms)

    counter++; // 5. Increment the counter

    // 6. every 30 sec, reset degCounter to 0 (since the setInterval is running 25x per sec, 
    if(counter >= 1200) counter = 0; // reset degCounter to 0 when it reaches 1200;

    // 7.  For the first half of the degCounter cycle (0-599), move the arm up (degRotate increases); 
    //     For the second half of the degCounter cycle (600-1200), move the arm down (degRotate decreases);
    degRotate += counter < 600 ? 0.1 : -0.1;
    cupArm.style.transform = `rotate(${degRotate}deg)`; // 8. Rotate cup-arm by the degRotate

    // 9. Rotate the clock hands: hour, min, sec -- 
    //    the sweeping sec hand moves every time the setInterval runs
    const dt = new Date(); // 7. Instantiate a new Date obj

    // 10. get the current hr, min and msec (miliseconds)
    let hr = dt.getHours();
    let min = dt.getMinutes();
    let ms = dt.getTime(); // getTime() method returns the toal number of milliseconds since Jan. 1, 1970

    if(hr > 11) hr -= 12; // 9. convert hr from 0-23 to 0-11 am or pm

    // 11. "normalize" the time units (put all in 0-1 range)
    //     3 becomes 0.25; 6 becomes 0.5 and 9 becomes 0.75 and
    hr /= 12; // put hr in 0-1 range
    min /= 60; // put minhr in 0-1 range
    ms /= 60000; // put sec in 0-1 range

    const timeUnits = [hr, min, ms]; // 11. make array of the time units
    
    // 12. Using a forEach, iterate timeUnits and assign the correct time unit to the each clock hand:
    timeUnits.forEach((tu,i) => clock.children[i].style.transform = `rotate(${tu}turn)`); // turn range is 0-1

}, 40); // end setInterval 40 ms