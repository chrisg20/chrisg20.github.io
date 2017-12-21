var correct = Math.floor(Math.random() * 6);
var guess = prompt("Enter a password between 0 and 5 inclusive.")
var tries = 1;
      
while (guess != correct) {
        
   guess = prompt("The password is not " + guess + ", Try again.")
      tries ++;
         }
      
   else {
      alert(" + guess + ", is correct. It took you " + tries + " tries!");
        }
        }
            if (guesses ==1) {
    document.getElementById("test").innerHTML = "You guessed " + number + " and it only took you " + guesses + " try";}
    else {
       document.getElementById("test").innerHTML = "You guessed " + number + " and it took you " + guesses + " tries";}
