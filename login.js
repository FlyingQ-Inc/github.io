function logIn()
{
//variables to make use of the inputs from the form//
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var credit = document.getElementById("credit").value;
//concantenates two fields//
var fullName = firstName + " " + lastName;
alert(firstName + " " + lastName + " " + credit);
//checks length of fullName variable//
if (fullName.length > 20 )
   {
    //and returns an error message if too long//
        document.getElementById("loginStatus").innerHTML = "Sorry, your name is too long"; 
    }
    //allows for credit between 100 and 999, mostly to make it require 3 digits for assignment//
if (credit >999 || credit<=99)
    {
        //and returns an error if outside of parameter//
        document.getElementById("loginStatus").innerHTML = "You've asked for too many, or too few Credits"; 
    }
   //if full name and credit requirements are correct runs this alert and opens index page//
   //&& is essentially and || is or//
else if(fullName.length <= 20 && credit <=999 && credit >99)
    {
    document.getElementById("loginStatus").innerHTML = "login info " + fullName + " " + credit;
    alert("Congrats - you are now logged on - hit enter to go to the next page");
    location.replace("index.html");
    }
}