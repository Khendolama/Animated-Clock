// Lesson 08.07 - Animated Clock Hands - PROG
// Animating the Clock Hands and Clock Guy Drinking Coffee

// 0. Get the DOM elements for animating : .clock and cup-arm
const cupArm = document.querySelector('.cup-arm');
// just for fun play a ticking clock sound for around 15 sec when user clicks cup-arm
// use arrow function => and since this can be done in one line of code by pasing 
// audio src path to constructor, and chaninign play() method onto end 
// since it's a 1-line arrow func, don't need curly braces or 
cupArm.addEventListener('click', () => new Audio(`audio/ticking-clock.mp3`).play());

// 1. Declare a variable for the cup-arm rotation deg num
let degRotate = -30;

// 1B. Declare a variable for keeping track of rotation that is 
// NOT simply the actual degree number
let degCounter = 0;

// 2. Set an initial rotation angle for the cup-arm
cupArm.style.transform = `rotate(${degRotate}deg)`; // transform: rotate(5deg)

// 2B. Instantiate a new instance of the ..Adio obj
//document.addEventListener('DOMContentLoaded',() => new Audio(`audio/ticking-clock.mp3`));

// a boolean to keep track of whether the bell on ther hour has tolled or not
let isBell = false;
// 3. Do a setInterval that runs 25x per sec (every 40 ms)
setInterval(() => {

    // 4. Increment the degCounter by 1 every time (25x per sec)
    degCounter++;

    // reset the degCounter after a full round-trip of the coffee arm
    // a round trip starts at -30 deg, rises to +30 deg, and goes back down to -30
    // that round trip takes 2000 frames , 2000 iterations of the setInterval function

    if(degCounter >= 2000) {
        // once degCounter reaches 2000, and arm is back at starting position of -30 deg
        // then reset the degCounter to 0, cuz you are back to square one, so to speak
        degCounter = 0; // reset degCounter, so that the if part runs again
        // and therefore the degRotate is += and arm starts to rise again
    }

    // from 0-1000 the arm is going up
    // 1001-1999 arm is going down
    // right at 2000 arm is reset to 0
    // this gives a 1000 range for up and anoter 1000 for down
    if(degCounter <= 1000) {
       degRotate += 0.08; // increase angle (raise arm) 
    } else { // after 600x, the arm is high enough, so switch directions:
        degRotate -= 0.08; // decrease angle (lower arm) 
    }

    // console.log('degreeCounter:', degCounter, 'degRotate:', degRotate);
    
    // update the cup arm rot angle:
    cupArm.style.transform = `rotate(${degRotate}deg)`;

    // 5. every 30 sec, reset degCounter to 0 (since the setInterval is running 
    // 40x per sec, we reset degCounter when it reaches 1200)
    // every 30 sec is one cycle of the arm going up and down, so 
    // the arm moves up for 15 sec, then down for 15 sec

    // 6.  For the first half of the degCounter cycle (0-599), move the arm up (degRotate increases); 
    // For the second half of the degCounter cycle (600-1199), move the arm down (degRotate decreases);

    // console.log(degRotate, degCounter);

    // Rotate the clock hands: hour, min, sec -- obviously, the sec hand is the one that moves 
    // every time setInterval runs; the others only tick when they need to (when the hour or min change)

    // 7. Instantiate a new Date obj
    const dt = new Date();

    // 8. get the current hr, min and msec (miliseconds)
    let hr = dt.getHours(); // 0-23
    let min = dt.getMinutes(); // 0-59
    let sec = dt.getSeconds(); // 0-59
    let msec = dt.getTime(); // returns tot ms since Jan 1. 1970 !!
    // 16 27 1,678,998,412,312

    // 9. "normalize" the time units (put all in 0-1 range)
    //    1 is a full 360 rotation of the clock hand, so when min = 30, 
    //    this is 1/2 a min, so min needs to be normalized to 0.5
    let hrNorm = 0;
    let minNorm = 0;
    let secNorm = 0;

    // 10. convert the hr from mil. time 0-23 to "reg" time: 0-11 (am vs pm)
    if(hr > 12) {
        hr -= 12;
    }

    // 11. Calc normalized hr (0-12 becomes 0-1, where 6 becomes 0.5 and 9 
    // becomes 0.75 and 3 becomes 0.25 (quarters of the clock face)
   

    // 12. Calc normalized min (0-59 becomes 0-1, where 30 becomes 0.5)
    minNorm = min / 60;
    // 30 / 60 = 0.5

    hrNorm = hr / 12 + (minNorm/12);
    // add minNorm/60 so that hr hand moves a fraction of the way to next hr
    // based on the minute, that is at 11:30, hr hand is half-way to the 1
    // Ex: 6 / 12 = 0.5

    //secNorm = msec / 100 / 60 / 12;
    secNorm = sec / 60;

    // 12. Calc normalized sec (0-59 becomes 0-1, where 30 becomes 0.5)
    // seconds since 1970 -- but as float
    // divide that by 60 to get "normalized multiple" (remainder after doing x turns around clock is in 0-1 range) 

    // 13. Put all the normalized times in an array; the index of the item matches the children index of the clock hand inside the clock div
    
    // 14. Using a forEach, iterate the timeUnits array and assign the time unit to the correspoding hand of clock div
    const timeUnitsArr = [hrNorm, minNorm, secNorm];

    // get the hr, min, sec hands which are all div childen of the clock class div
    const clockHandDivsArr = document.querySelectorAll('.clock div');
        /*
        <div class="clock">
            <div class="hourhand"></div>
            <div class="minutehand"></div>
            <div class="sechand"></div>
        </div>
    */

    for(let i = 0; i < clockHandDivsArr.length; i++) {
        // set hr hand rot angle using normalized (0-1) value
        clockHandDivsArr[i].style.transform = `rotate(${timeUnitsArr[i]}turn)`;
    }

    // as the time unit is looped through, that unit is applied as the rotation
    // turn value of the corresponding clock hand div
    // 1 turn = 360 degrees

    // when min is 0, play bell toll
    // if(min == 0 && !isBell) {
    //    new Audio('audio/clock-bell.mp3').play();
    //    isBell = true;
    // }

    // when min is less than 15, play bell toll when user clicks the clock face
    if(min < 5 && !isBell) {
        
        // when clock is clicked run func that plays bell sound
        const clock = document.querySelector('.clock');
        clock.addEventListener('click', function() {
            const bellSound = new Audio();
            bellSound.src = 'audio/clock-bell.mp3';
            bellSound.play();
        });

        // the abovve all in one  line:
        document.querySelector('.clock').addEventListener('click', () => new Audio('audio/clock-bell.mp3').play());
        

        isBell = true;// make isBell true, so that this little if statement only runs once
       
    }

}, 40); // end setInterval 40 ms

// setInterval(callback, delay_in_ms)