let arrayOfQuestions = [
  {
      q: "The divorce of Lady Diana and Prince Charles was the first divorce in the British Royal family.",
      alt: 
      [ 
        {
          answer: "True", correct: false,
        },
        {
          answer: "False", correct: true,
        },
      ],
      type: "radiobutton",
  },
  {
      q: "Of which Prince has a nude picture been published?",
      alt: 
      [
        {
          answer: "Prince William", correct: false,
        },
        {
          answer: "Prince Harry", correct: true,
        },
        {
          answer: "Prince Andrew", correct: false,
        },
        {
          answer: "Prince Edward", correct: false,
        },
      ],
      type: "radiobutton",
  },
  {
      q: "What did Prince Charles answer when asked if he was in love with his new fiancee Diana?",
      alt: 
      [
        {
          answer: "Why wouldn't I be", correct: false,
        },
        {
          answer: "No, we just did it for funsies", correct: false,
        },
        {
          answer: "Well, yes, if one can ever know for sure", correct: false,
        },
        {
          answer: "Whatever 'in love' means", correct: true,
        },
         
      ],
      type: "radiobutton",
  },
   {
    q: "Which of below royal(s) have had public affairs?",
    alt: 
    [
       {
          answer: "Prince Charles", correct: true,
        },
        {
          answer: "Princess Diana", correct: true,
        },
        {
          answer: "Queen Elizabeth", correct: false,
        },
        {
          answer: "Princess Margaret", correct: true,
        },
    ],
    type: "checkbox",
  },
  {
    q: "Prince Philip and Queen Elizabeth were second cousins.",
    alt: 
    [
      {
        answer: "True", correct: false,
      },
      {
        answer: "False", correct: true,
      },
    ],
    type: "radiobutton",
  },
  {
    q: "What upsets Prince Philip during his 2017 visit to Mayflower Primary School?",
    alt: 
    [
      {
        answer: "The child's handwriting", correct: true,
      },
      {
        answer: "The motif of the drawing", correct: false,
      },
      {
        answer: "His own breath", correct: false,
      },
      {
        answer: "The teacher’s comment", correct: false,
      },
    ],
    type: "radiobutton",
    image: true,              
    url: "https://cdn.images.express.co.uk/img/dynamic/106/590x/Prince-Philip-snub-Duke-s-fiery-reaction-as-he-humiliated-teacher-over-handwriting-1354471.jpg?r=1604154170007"
  },
  {
    q: "With which of the following excuse(s) did Prince Andrew refute Virginia Giuffrethe's sexual accusations?",
    alt: 
    [
      {
        answer: "He's unable to sweat", correct: true,
      },
      {
        answer: "He's impotent", correct: false,
      },
      {
        answer: "He was having pizza with his daughter at the time", correct: true,
      },
      {
        answer: "He doesn't drink", correct: true,
      },
    ],
    type: "checkbox",
  },
  {
    q: "Which Royal was caught dressed as a nazi while partying?",
    alt: 
    [
      {
        answer: "Prince Philip", correct: false,
      },
      {
        answer: "Prince Andrew", correct: false,
      },
      {
        answer: "Prince William", correct: false,
      },
      {
        answer: "Prince Harry", correct: true,
      },
    ],
    type: "radiobutton",
  },
  {
    q: "For what reason(s) couldn't Princess Margaret and Peter Townsend marry?",
    alt: 
    [
      {
          answer: "He was working class", correct: false,
        },
        {
          answer: "He left the army dishonorably", correct: false,
        },
        {
          answer: "He was not christian", correct: false,
        },
        {
          answer: "He was divorced", correct: true,
        },
    ],
    type: "checkbox",
  },
  {
    q: "Which Royal had their affair exposed when caught having their toes licked by their lover?",
    alt: 
    [
      {
        answer: "Princess Margaret", correct: false,
      },
      {
        answer: "Prince Charles", correct: false,
      },
      {
        answer: "Duchess Sarah Ferguson", correct: true,
      },
      {
        answer: "Prince Andrew", correct: false,
      },
    ],
    type: "radiobutton",
  },
];

//!ta bort
console.log(arrayOfQuestions.length);

//Resultatknapp:
let resultBtn = document.querySelector("#resultButton")
//Restart-knapp:
let restartBtn = document.createElement("button");
restartBtn.className = "button";
restartBtn.innerText = "Try again";
//Header: resultat
let resultHeader = document.createElement("h3");
//Mode-knapp:
let darkModeBtn = document.querySelector("#darkMode")
//Fråge-div:
let container = document.querySelector("#questionContainer");

//--------------------------------------Skapar frågorna:-----------------------------------
function displayQuestions(arr) {
  // Loopar fråge-arrayen och genererar HTML-elemnt per fråga: 
  let htmlString = "";

  arr.forEach((question, index) => {
    let alternativeStr = "";
    //-----------------------------------------Bild:---------------------------------------
    if (question.image) {
      alternativeStr += `<img src=\"${question.url}" + "\" width=\"300\" height=\"200\"><br>`;
    }
    //--------------------------------------Radiobuttons:-----------------------------------
    if (question.type === "radiobutton") {
      question.alt.forEach((radioAnswer) => {
        alternativeStr += `
        <label><input type="radio" name="r${index}" value="${radioAnswer.correct}">${radioAnswer.answer}<br></label>`
      });
    } else {
      //--------------------------------------Checkboxes:-----------------------------------
      question.alt.forEach((boxAnswer) => { 
        alternativeStr += 
        `<label><input type="checkbox" name="c${index}" value="${boxAnswer.correct}">${boxAnswer.answer}<br></label>`
      });
    };
    htmlString += 
    `<div id="div${index}"><h4 id="q${index}">${question.q}</h4>${alternativeStr}</div>`
    container.innerHTML = htmlString;
  }); 
};

//--------------------------------------Initiering av generera frågorna funktion:-----------------------------------
displayQuestions(arrayOfQuestions);

//--------------------------------------Svarshanteringsfunktion:-----------------------------------
function getResult (arr) {

  // Poäng-variabel
  let score = 0;

//---------------------------------Radiobuttons resultat:-----------------------------------
  // Alla användarens icheckade radiobuttons
  let checkedRadiobuttons = document.querySelectorAll("input[type=radio]:checked");

  // Utvärderar om användarens svar är rätt/fel genom loop
    // Ökar poängen därefter
    // Färgar tillhörande label + fråga(h4)
    // Retunerar poängen
  checkedRadiobuttons.forEach((radio) => {
    let label = radio.parentElement;
    let h4 = label.parentElement.firstChild;
    
    if (radio.value === "true") {
      score++
      label.style.color = "green";
      h4.style.color = "green"
    } else if (radio.value === "false") {
      label.style.color = "red";
      h4.style.color = "red"
    };
    return score;
  });

//--------------------------------------Checkboxar resultat🔫:-----------------------------------
  // För varje fråga jämföra frågans facit(array) med användarens svar

  // Loopar igenom fråge-array
  arr.forEach((question, index) => {

    if (question.type === "checkbox") {      
      // För varje checkbox-fråga: skapa tom array för frågans facit
      let facit = [];

      // Sparar alla rätta svar(true-värden) frågan har i facit-array
      question.alt.forEach((key) => {
        return key.correct ? facit.push(key.correct): "";
        // if (key.correct) {
        //   facit.push(key.correct);
        // };
      });
      console.log("facti: " + facit);
   
      // Alla icheckade boxar för aktuell fråga
      let checkedCheckboxes = document.querySelectorAll(`input[type='checkbox'][name=c${CSS.escape(index)}]:checked`);
      console.log(checkedCheckboxes);

      // Tom array för icheckade boxars värde
      let checkedCheckboxesValue = [];

      // Loopar användarens svar --> pushar in värdet i checkedCheckboxesValue-array
      checkedCheckboxes.forEach((box) => {
        checkedCheckboxesValue.push(box.value);
        // Färgar icheckade-svarsalternativens label - rätt/fel: WTF-synatx
        return box.value === "true" ? box.parentElement.style.color = "green": box.parentElement.style.color = "red";
        
        //!Ta bort
        // if (box.value === "true") {
        //   box.parentElement.style.color = "green";
        // } else if (box.value === "false") {
        //   box.parentElement.style.color = "red";
        // };
      });

      h4 = document.querySelector(`h4[id=q${index}]`);

      if(checkedCheckboxesValue.toString() === facit.toString()) {
        h4.style.color = "green";
        return score++;
      } else if (checkedCheckboxes.length > 0) {
        h4.style.color = "red";
      }
    
    };
});
  // Renderar slutgiltiga resultatet
  if (score > 0.75 * arrayOfQuestions.length) {
    resultHeader.innerText = `You got ${score} out of ${arrayOfQuestions.length} correct.`;
    resultHeader.style.color = "green";
  } else if (score >= 0.5 * arrayOfQuestions.length) {
    resultHeader.innerText = `You got ${score} out of ${arrayOfQuestions.length} correct.`;
    resultHeader.style.color = "orange";
  } else {
    resultHeader.innerText = `You got ${score} out of ${arrayOfQuestions.length} correct.`;
    resultHeader.style.color = "red";
  }
  document.querySelector("#resultContainer").append(resultHeader);
};



//--------------------------------------Resultat-knapp:-----------------------------------
resultBtn.addEventListener("click", () => {

  // Kör svarshanteringsfunktionen: getResult
  getResult(arrayOfQuestions);

  //Inaktiverar alla inputs(radiobuttons + checkboxes)
  let allInputs = document.querySelectorAll("input");
  allInputs.forEach((input) => {
    input.disabled = true;
  });

  //Ersätt resultat-knapp med omstart-knapp när resultatet genererats
  document.querySelector("#quizToolsContainer").appendChild(restartBtn);
  resultBtn.remove();

});

//--------------------------------------Darkmode-knapp:-----------------------------------
darkModeBtn.addEventListener("click", () => {
  if (document.body.classList === "dark-mode") {
    document.body.classList.toggle("light-mode")
  } 
  else {
    document.body.classList.toggle("dark-mode");
  };
});

//--------------------------------------Omstart-knapp:-----------------------------------
restartBtn.addEventListener("click", () => {
  location.reload();
});
