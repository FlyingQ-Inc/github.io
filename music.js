//Caleb Quisenberry, week4//
//Added onclick sound to index.html//
//Ended up not using these first 3 functions, left in for later reference and copyright acknowledgement//
function Danheim() 
{
    //credit for music clip to Mike Olsen, Danheim music, https://danheim.bandcamp.com///
    mySound = new sound("TempleOfOdin.mp3");
    mySound.play();
}

function AtSea()
{
    //credit for cip to Skye Klein, At Sea, https://4tsea.bandcamp.com/track/at-m-lti-m-n-m-ir-my-mother-told-me-demo//
    mySound = new sound("MyMotherToldMe.mp3");
    mySound.play();
}
//Helper function, do not change, would be the same//
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play= function(){
        this.sound.play();
    }
}
//Functions for two buttons for rubric, they don't function much yet beyond the enable/disable and alerts//
function begin ()
{
    alert("It has begun");
    //turns off begin, not as visible with my css, still does function as intended//
    document.getElementById("begin").disabled = true;
    //turns on cancel, not as visible with my css//
    document.getElementById("cancel").disabled = false;
}

function cancel ()
{
    alert("It has been cancelled")
    //turns on begin//
    document.getElementById("begin").disabled = false;
    //turns off cancel//
    document.getElementById("cancel").disabled = true;
}