var topPosition = 200;
var leftPosition = -200;
var initialTopPosition = 200; 
var initialLeftPosition = -200;
var puppyWidth = 200;
var puppyHeight = 200;
var screenWidth = screen.availWidth;
var screenHeight = screen.availHeight;

function runPuppy() {
                    
    var puppy = document.getElementById("puppy");

    var screenWidth = screen.availWidth;

    leftPosition += 8; 
    topPosition += 2; 

    if (leftPosition >= screenWidth - puppyWidth) 
    {
        leftPosition = initialLeftPosition;
        topPosition = initialTopPosition;
    }

    if (topPosition >= screenHeight - puppyHeight)
    {
        leftPosition = initialLeftPosition;
        topPosition = initialTopPosition;
    }

    puppy.style.position = "absolute";
    puppy.style.top = topPosition + "px";
    puppy.style.left = leftPosition + "px";
    puppy.style.visibility = "visible";

    // add if it reaches the screen end (you can check with screen.availwidth)					
}
