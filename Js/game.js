const letsGoBtn = document.getElementById('btn');
const myGame = document.getElementById('game');

const select = document.querySelector("select"); 
const html = document.querySelector("html");
const body = document.querySelector("body");

  function changeTheme(bgColor, txtColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = txtColor;
  }

  function changeSelectTheme(bgColor, txtColor) {
    if (select.value === "black") {
      select.style.color = "black";
      guessField.style.color = "black";
    }
    else {
      select.style.color = txtColor;        
    }
  }

  select.addEventListener("change", () => {
    select.value === "black" ? changeTheme("rgb(40, 40, 40)", "white") : changeTheme("white", "black");
    select.style.outline = "none";
    changeSelectTheme();
  });

  
  game.style.display = "none";

  function letSGo() {
    game.style.display = "block";
    letsGoBtn.style.backgroundColor = 'green';
  }

  letsGoBtn.addEventListener('click', letSGo);

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const guesses = document.querySelector(".guesses");
  const lastResult = document.querySelector(".lastResult");
  const lowOrHi = document.querySelector(".lowOrHi");
  const guessSubmit = document.querySelector(".guessSubmit");
  const guessField = document.querySelector(".guessField");

  let guessCount = 1;
  let resetButton;
  guessField.focus();


  function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = "Previous guesses: ";
    }
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    function correctAttempts() {
        let paymentList = document.querySelector("li")
        for (let paymentItems of paymentList) {
          localStorage.setItem('name', paymentItems);
        }
        const myPrompt = `You got it right on your ${paymentItems}. Enter your Mpesa number: `

        prompt(myPrompt);
        alert("Processing payment... Please ensure you've subscribed to the YouTube channel for your payment to be complete.");
      }
      
    if (userGuess === randomNumber) {
      ifCorrectGuess();

      switch (guessCount) {
        case 1:
          correctAttempts();     
        break;
        case 2: 
          correctAttempts();     
        break;
        case 3: 
          correctAttempts();     
        break;
        case 4: 
          correctAttempts();     
        break;
        case 5: 
          correctAttempts();     
        break;
        default: 
          lowOrHi.textContent = "No reward!";
      }

      function ifCorrectGuess() {
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
      }
    
      setGameOver();
    }
    else if (guessCount === 10) {
      lastResult.textContent = "!!!GAME OVER!!!";
      lowOrHi.textContent = "";
      setGameOver();
    }

    else if (guessCount === 7) {
      alert('You have 3 remaining attempts, try your best!');
    }

    else {
      lastResult.textContent = "Wrong!";
      lastResult.style.backgroundColor = "red";
      if (userGuess < randomNumber) {
        lowOrHi.textContent = `${userGuess} was too low!`;
      }
      else if (userGuess > randomNumber) {
        lowOrHi.textContent = `${userGuess} was too high!`;
      }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
  }

  guessSubmit.addEventListener("click", checkGuess);

  function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
    resetButton.style.display.backgroundColor = 'blue'
    resetButton.style.padding = '8px 12px'
  }

  function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
  }