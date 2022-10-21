let arrayOfQuestions = [
    {
        q: "Fråga 1:",
        alt: 
        [
                "Sant",
                "Falskt",
        ],
        correct: 0,
        type: "radiobutton",
    },
    {
        q: "Jorden är 20 år gammal",
        alt: 
        [
            "Sant",
            "Falskt",
        ],
        correct: 0,
        type: "radiobutton",
    },
    {
        q: "Fråga 8:",
        alt: 
        [
            "8aaa",
            "8bbb",
            "8ccc",
            "8ddd",
        ],
        correct: 2,
        type: "radiobutton",
    },
    {
        q: "Fråga 9:",
        alt: 
        [
            "9aaa",
            "9bbb",
            "9ccc",
            "9ddd",
        ],
        correct: 1,
        type: "radiobutton",
    },
    {
        q: "Fråga 10:",
        alt: 
        [
            "10aaa",
            "10bbb",
            "10ccc",
            "10ddd",
        ],
        correct: 1,
        type: "radiobutton",
    },
    {
        q: "Fråga 11:",
        alt: 
        [
            "11aaa",
            "11bbb",
            "11ccc",
            "11ddd",
        ],
        correct: 3,
        type: "radiobutton",
    },
    {
        q: "Fråga 12:",
        alt: 
        [
            "12aaa",
            "12bbb",
            "12ccc",
            "12ddd",
        ],
        correct: 2,
        type: "radiobutton",
    },
    {
        q: "Fråga 13:",
        alt: 
        [
            "13aaa",
            "13bbb",
            "13ccc",
            "13ddd",
        ],
        correct: 1,
        type: "radiobutton",
    },
    {
        q: "Fråga 14:",
        alt: 
        [
            "14aaa",
            "14bbb",
            "14ccc",
            "14ddd",
        ],
        correct:
        [
          0,
          3,
        ],        
        
        //! Måste fixa, flervalsalt.
        type: "checkbox",
    },
    {
        q: "Fråga 15:",
        alt: 
        [
            "15aaa",
            "15bbb",
            "15ccc",
            "15ddd",
        ],
        correct:
        [
          0,
          2,
          3,
        ],          //!Måste fix flervals alt - dum tanke: kan man kolla not correct?
        type: "checkbox",
    },
];
console.log(arrayOfQuestions.length);

//Deklarationer:

    //Resultatknapp:
let resultBtn = document.querySelector("#resultButton")

    //Header: resultat
let resultHeader = document.createElement("h3");

    //Mode-knapp:
let darkModeBtn = document.querySelector("#darkMode")

    //Fråge-div:
let container = document.querySelector("#questionContainer");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  //! Toggla även knapparna?
  //! Ändra text vid toggel
});

function displayQuestions(arr) {
  // loopa igenom frågorna
  let htmlString = "";                //! Fattar inte egentligen

  //! Alert du har inte svarat på alla frågor

    //Skapa html-element för varje fråga
  arr.forEach((question, index) => {
    let alternativeStr = "";

      if (question.type === "radiobutton") {
        console.log(question.q);
        console.log(question.correct);
        console.log(question.type);
        console.log(question.alt);

        question.alt.forEach((answer, altIndex) => {
          alternativeStr += `
          <label>
            <input type="radio" name="R${index}" value="${question.correct === altIndex}">
            ${answer}
          </label>
          `
          console.log(answer);
          console.log("R"+ index);
        });
      } else {
        question.alt.forEach((answer) => {
          console.log(question.correct);
          alternativeStr += `
          <label>
            <input type="checkbox" name="C${index}" value="${question.correct}">
            ${answer}
          </label>
          `
          console.log(answer);
          console.log("C"+ index);
        });
      }
        //! Ta bort div / ta bort class bara? - användning?
        htmlString += `
        <div class="question" id="Q${index}">      
            <h4>${question.q}</h4>
            ${alternativeStr}
        </div>`

        container.innerHTML = htmlString;
  }); 

};

displayQuestions(arrayOfQuestions);

resultBtn.addEventListener("click", () => {
  //! Alert du har inte svarat på alla frågor
  getResult(arrayOfQuestions);
});

function getResult (arr) {
//----------------------------------Radiobuttons resultat-----------------------------------
  let checkedRadiobuttons = document.querySelectorAll("input[type='radio']:checked");
  console.log(checkedRadiobuttons);

  let radioScore = 0;
  checkedRadiobuttons.forEach((input) => {
    if (input.value === "true") {
      radioScore++
    };
    console.log(radioScore);
    return radioScore;
  });




//!----------------------------------Om radiobuttons har true, false values se nedan:)-----------------------------------
// let radiobuttonsValue = Array.from(document.querySelectorAll("input[type='radio']:checked")).map(element => element.value);
    
  // console.log(radiobuttonsValue);
  // //! alla värden ovan blir till strängar )-:< ????map????)
	// //Räknare till score-keeping
	// let score = 0;
  //   radiobuttonsValue.forEach((value) => {
  //       if (value === "true") {
  //           score++
  //       }
  //       console.log(score);
  //       return score;
  //   })

//--------------------------------------Checkboxes resultat:-----------------------------------
//!----------------------------------------AAAARGHGRGHGH--------------------------------------

  let checkedCheckboxes = document.querySelectorAll("[type='checkbox']:checked");
  let arrAnswers = [];
  console.log(checkedCheckboxes);

  checkedCheckboxes.forEach((value) => {
    value.alternatives.forEach((alt, index2) => {           //!ta bort index2 ????
      if (alt.correct === "true")  {
        arrAnswers.push(alt.correct.value)
      };
    });
  });
  console.log(arrAnswers)

//     // let checkboxesValue = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(element => element.value);

//     // console.log(checkboxesValue);

//     //! if(checkboxes[i].value == "wrong" && checkboxes[i].checked == true) {
//     // !    right = false;
//     // !  }

//! Vill jag ha, maxpoäng osv, array längd???
//--------------------------------------Rendering av resultat:-----------------------------------

  if (radioScore > 7.5 ) {
		resultHeader.innerText = `Mycket väl godkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "green";
	} else if (radioScore >= 5) {
		resultHeader.innerText = `Godkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "orange";
	} else {
		resultHeader.innerText = `Underkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "red";
	}
	document.querySelector("#resultContainer").append(resultHeader);

};




