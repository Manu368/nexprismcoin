// var coinElement = document.getElementById('coin');
// var headImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png';
// var tailImageUrl = 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';
// var flipsRemaining = 1;
// var newSound = new Audio("manu01.mp3");
// var winSound = new Audio("claps-44774.mp3");
// var loseSound = new Audio("loser.mp3");
// var headsButton = document.querySelector('.h01');
// var tailsButton = document.querySelector('.h02');
// var resultElement = document.getElementById('manu');
// var btn01 = document.getElementById("button02");

// headsButton.addEventListener('click', function() {
//   flipsRemaining = 1; // Reset the number of flips
//   flipCoin('heads');
// });

// tailsButton.addEventListener('click', function() {
//   flipsRemaining = 1; // Reset the number of flips
//   flipCoin('tails');
// });


// function flipCoin(buttonClicked) {
//   // Hide the text on both buttons and add spinner
//   headsButton.textContent = '';
//   tailsButton.textContent = '';
//   btn01.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';
//   coinElement.classList.add('flipped', 'move-animation');
//   shadow01.classList.add('animate');

//   setTimeout(function() {
//     var random = Math.random();
//     var imageUrl = random < 0.5 ? headImageUrl : tailImageUrl;

//     if (imageUrl === headImageUrl) {
//       coinElement.src = imageUrl;
//       coinElement.alt = "Coin Head";
//       if (buttonClicked === 'heads') {
//         setTimeout(function() {
//           displayResult('The Result is Head and You Won');
//         }, 2000);
//       } else {
//         setTimeout(function() {
//           displayResult('The Result is Head and You Lose');
//         }, 2000);
//       }
//     } else if (imageUrl === tailImageUrl) {
//       coinElement.src = imageUrl;
//       coinElement.alt = "Coin Tail";
//       if (buttonClicked === 'tails') {
//         setTimeout(function() {
//           displayResult('The Result is Tail and You Won');
//         }, 2000);
//       } else {
//         setTimeout(function() {
//           displayResult('The Result is Tail and You Lose');
//         }, 2000);
//       }
//     }

//     setTimeout(function() {
//       coinElement.classList.remove('flipped', 'move-animation');
//       shadow01.classList.remove('animate');

//       flipsRemaining--;

//       if (flipsRemaining > 0) {
//         setTimeout(function() {
//           flipCoin(buttonClicked);
//         }, 1000); // Flip the coin again after a short delay
//       }
//     }, 1000);
//   }, 250);
// }

// coinElement.addEventListener('animationstart', function() {
//   newSound.play();
// });

// function displayResult(result) {
//   resultElement.classList.remove('fade-in');
//   resultElement.style.display = "block";
//   resultElement.innerHTML = "";

//   if (result.includes("You Won")) {
//     resultElement.innerHTML = result.replace("You Won", "<span style='color: green; font-weight:700'>You Won</span>");
//     resultElement.classList.add('result-won');
//     winSound.play();
//   } else if (result.includes("You Lose")) {
//     resultElement.innerHTML = result.replace("You Lose", "<span style='color: red; font-weight:700'>You Lose</span>");
//     resultElement.classList.add('result-lose');
//     loseSound.play();
//   } else {
//     resultElement.textContent = result;
//   }

//   // Restore the text on both buttons and remove spinner
//   headsButton.textContent = 'Heads';
//   tailsButton.textContent = 'Tails';

//   // Triggering reflow to apply transition classes
//   void resultElement.offsetWidth;

//   resultElement.classList.add('fade-in');
// }

// headsButton.addEventListener("click", function(){
//   resultElement.textContent = "";
//   resultElement.style.display = "none";
// });

// tailsButton.addEventListener("click", function(){
//   resultElement.textContent = "";
//   resultElement.style.display = "none";
// });




// Get the required elements
const playButton = document.getElementById('button02');
const messageElement = document.getElementById('manu');
const coinImage = document.getElementById('coin');
var newSound = new Audio("manu01.mp3");

// Add event listener to the play button
playButton.addEventListener('click', function() {
  // Check if either h01 or h02 is selected
  const h01Selected = document.querySelector('.h01').classList.contains('selected');
  const h02Selected = document.querySelector('.h02').classList.contains('selected');

  if (!h01Selected && !h02Selected) {
    // If neither option is selected, show the message
    messageElement.textContent = 'Select Heads or Tails Option';
    messageElement.style.color = '#fff';
  } else {
    // If either option is selected, perform the animation
    coinImage.classList.add('flipped', 'move-animation');
    newSound.play();

    // Wait for the animation to complete and show the result
    setTimeout(function() {
      const randomNumber = Math.random(); // Generate a random number
      const result = randomNumber < 0.5 ? 'head' : 'tail'; // Assign 'head' or 'tail' based on the random number

      // Update the coin image source based on the result
      coinImage.src = result === 'head' ? 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456292/head_image-removebg-preview_gv7su7.png' : 'https://res.cloudinary.com/dqrttxm5s/image/upload/v1688456287/tail_image-removebg-preview_za10pk.png';

      // Check if the user won or lost
      if ((result === 'head' && h01Selected) || (result === 'tail' && h02Selected)) {
        messageElement.textContent = 'Congratulations! You won!';
        messageElement.style.color = 'green';
      } else {
        messageElement.textContent = 'Sorry! You lose!';
        messageElement.style.color = 'red';
      }

      // Remove the animation classes after the animation is completed
      setTimeout(function() {
        coinImage.classList.remove('flipped', 'move-animation');
      }, 1000); // Change the delay time (in milliseconds) as needed
    }, 1000); // Change the delay time (in milliseconds) as needed
  }
});

// Add event listeners to the h01 and h02 elements for selection
const h01Element = document.querySelector('.h01');
const h02Element = document.querySelector('.h02');

h01Element.addEventListener('click', function() {
  // Add or remove the selected class when clicked
  h01Element.classList.toggle('selected');
  h02Element.classList.remove('selected');
});

h02Element.addEventListener('click', function() {
  // Add or remove the selected class when clicked
  h02Element.classList.toggle('selected');
  h01Element.classList.remove('selected');
});
