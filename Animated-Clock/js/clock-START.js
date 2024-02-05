// Lesson 08.07 - Animated Clock Hands - PROG
// Animating the Clock Hands and Clock Guy Drinking Coffee

// 0. Get the DOM elements for animating : .clock and cup-arm

// 1. Declare a variable for the cup-arm rotation deg num

// 1B. Declare a variable for keeping track of rotation that is 
// NOT simply the actual degree number

// 2. Set an initial rotation angle for the cup-arm
// cupArm.style.transform = `rotate(${degRotate}deg)`;

// 3. Do a setInterval that runs 25x per sec (every 40 ms)

    // 4. Increment the degCounter

    // 5. every 30 sec, reset degCounter to 0 (since the setInterval is running 40x per sec, we reset degCounter when it reaches 1200)
    // every 30 sec is one cycle of the arm going up and down, so 
    // the arm moves up for 15 sec, then down for 15 sec

    // 6.  For the first half of the degCounter cycle (0-599), move the arm up (degRotate increases); For the second half of the degCounter cycle (600-1199), move the arm down (degRotate decreases);

    // console.log(degRotate, degCounter);

    // Rotate the clock hands: hour, min, sec -- obviously, the sec hand is the one that moves every time setInterval runs; the others only tick when they need to (when the hour or min change)

    // 7. Instantiate a new Date obj

    // 8. get the current hr, min and msec (miliseconds)
    
    // returns tot ms since Jan 1. 1970 !!
    // 16 27 1,678,998,412,312

    // 9. "normalize" the time units (put all in 0-1 range)
    //    1 is a full 360 rotation of the clock hand, so when min = 30, 
    //    this is 1/2 a min, so min needs to be normalized to 0.5

    // 10. convert the hr from mil. time 0-23 to "reg" time: 0-11 (am vs pm)


    // 11. Calc normalized hr (0-12 becomes 0-1, where 6 becomes 0.5 and 9 becomes 0.75 and 3 becomes 0.25 (quarters of the clock face)
    // Ex: 6 / 12 = 0.5

    // 12. Calc normalized min (0-59 becomes 0-1, where 30 becomes 0.5)
    // 30 / 60 = 0.5

    // 30 / 60 = 0.5

    // 12. Calc normalized sec (0-59 becomes 0-1, where 30 becomes 0.5)
    // seconds since 1970 -- but as float
    // divide that by 60 to get "normalized multiple" (remainder after doing x turns around clock is in 0-1 range) 

    // 13. Put all the normalized times in an array; the index of the item matches the children index of the clock hand inside the clock div
    
    // 14. Using a forEach, iterate the timeUnits array and assign the time unit to the correspoding hand of clock div

    /*
    <div class="clock">
        <div class="hourhand"></div>
        <div class="minutehand"></div>
        <div class="sechand"></div>
    </div>
    */
    // as the time unit is looped through, that unit is applied as the rotation
    // turn value of the corresponding clock hand div
    // 1 turn = 360 degrees

// end setInterval 40 ms