//function called by line 27 in html, onclick//
function countDown() 
{
    //variable that sets start time at 10 seconds, could set it to whatever//
    var currTime = 10;
    // for (initial condition, ending condition stop when false, what to do after each loop) i++ shorthand for i=i+1 //
    //The for statement includes the three parts needed for loops: initialize, test, and update//
    for (var i = 1; i <= 11; i++) 
    {
        //Use if to specify a block of code to be executed, if a specified condition is true, in this case when i is 11, 0 seconds remaining//
        if (i == 11) 
        {
            setTimeout(function () 
            {
                //timer functionality, console logs message on complete//
                document.getElementById("countdownTimer").innerHTML = "Success!!!";
                //opens 3rd page//
                location.replace("RPS.html");
            }, 1000 * i);
            // function that logs message on else if condition, in this case when i is greater than 6, 4 seconds remaining//
            //Use else if to specify a new condition to test, if the first condition is false//
        } else if (i > 6) 
        {
            setTimeout(function () 
           {
                document.getElementById("countdownTimer").innerHTML =
                    "Wow this is taking awhile  " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
            //else condition, logs message until else if condition is met//
            //Use else to specify a block of code to be executed, if the same condition is false//
        } else
        {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Searching for Opponent  " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
//Added these two functions for week 4, enables sound to play along with countdown//
function DialUp() 
{
    //credit for music clip to Mike Olsen, Danheim music, https://danheim.bandcamp.com///
    mySound = new sound("DialUp.mp3");
    mySound.play();
}
//helper function copypasta//
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play= function(){
        this.sound.play();
    }
}
