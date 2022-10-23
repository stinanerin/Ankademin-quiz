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
          {
            answer: "14aaa", correct: false,
          },
          {
            answer: "14bbb", correct: true,
          },
          {
            answer: "14ccc", correct: true,
          },
          {
            answer: "14ddd", correct: false,
          },
        ],
        // correct:
        // [
        //   0,
        //   1,
        //   3,
        // ],        
        
        //! Måste fixa, flervalsalt.
        type: "checkbox",
    },
    {
        q: "Fråga 15:",
        alt: 
        [
           {
							answer: "15aaa", correct: true,
						},
						{
							answer: "15bbb", correct: false,
						},
						{
							answer: "15ccc", correct: true,
						},
						{
							answer: "15ddd", correct: false,
						},
        ],
        // correct:
        // [
        //   0,
        //   2,
        //   3,
        // ],          //! Måste fix flervals alt - dum tanke: kan man kolla not correct?
        type: "checkbox",
    },
];
// console.log(arrayOfQuestions.length);

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
      //--------------------------------------Radiobuttons:-----------------------------------
      // console.log("Fråge-index: " + index);
      // console.log(question.q);
      // console.log("Korrekt svar index: " + question.correct);
      // console.log("typ: " + question.type);
      // console.log("Arrayen med alternativ: " + question.alt);

      question.alt.forEach((answer, altIndex) => {
        alternativeStr += `
        <label>
          <input type="radio" name="R${index}" value="${question.correct === altIndex}">
          ${answer}
        </label>
        `
        // console.log(answer);
        // console.log("R"+ index);
      });
    } else {
      //--------------------------------------Checkboxes:-----------------------------------
      question.alt.forEach((answer2, altIndex2) => {
        // console.log(question.correct);
        // console.log(answer2.answer);

        alternativeStr += `
        <label>
          <input type="checkbox" 
          name="C${index}" 
					class="C${index}"
          value="${answer2.correct}" 					//!Brandon - hur gör jag en korrekt loop, om jag vill matcha index av alt mot, question.correct: [1,2,3] tex?
        ">
          ${answer2.answer}
        </label>
        `
        // console.log(answer);
        // console.log("C"+ index);

        //! Loopar till correct: [0,1,3]
          // question.correct.forEach((correctAnsValue, index3) => {
            //    if (correctAnsValue === altIndex2) { 
            //    }
            // })
              // if (correctAnsValue === altIndex2) {
              //   i++;
              //   console.log(i);
              // }
              // console.log("altIndex2: " + altIndex2);
              // console.log("Value: " + value);
              // console.log(altIndex2);
              // console.log(correctAnsValue === altIndex2);

              // return (correctAnsValue === altIndex2);
      });
    };
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

  getResult(arrayOfQuestions);
  //todo: Alert du har inte svarat på alla frågor
  // if (checkedRadiobuttons.length < )

});

function getResult (arr) {
//----------------------------------Radiobuttons resultat-----------------------------------
  let checkedRadiobuttons = document.querySelectorAll("input[type=radio]:checked");
	//! hämta valuet direkt?
  console.log(checkedRadiobuttons);

  //Nollar färgen - finns säkert smidigare sätt att göra på...
  //todo:! Problem, blir ej vit text om darkmode är påslaget inann man klickar resultat. 
  document.querySelectorAll("label").forEach((label) => {
    label.style.color = "black";
  })

  let radioScore = 0;
  checkedRadiobuttons.forEach((radio) => {
    if (radio.value === "true") {
      radioScore++
      radio.parentElement.style.color = "green";
    } else {
      radio.parentElement.style.color = "red";
    };
    // console.log(radioScore);
    return radioScore;
  });
	console.log("Radiobuttons slutgiltig poäng: " + radioScore)
//--------------------------------------Checkboxes resultat:-----------------------------------
//!----------------------------------------AAAARGHGRGHGH---------------------------------------

	let arrOfCorrectAnswers = [];

  arr.forEach((question, index) => {
		if (question.type === "checkbox") { //! ta kanske bort sen, jobbigt utan console.log annars dock. 
			let checkedCheckboxesValue = Array.from(document.querySelectorAll(`input[type='checkbox'][name=C${CSS.escape(index)}]:checked`)).map(element => element.value);
			console.log(checkedCheckboxesValue);
			
			question.alt.filter((key) => {
				if (key.correct) {
					arrOfCorrectAnswers.push(key.correct);
				};
				console.log("arrCorrectAsnw: " + arrOfCorrectAnswers);
				if (checkedCheckboxesValue.every((val, idx) => val === arrOfCorrectAnswers[idx])) {
					return radioScore++;
				};
		});
		}	
		console.log("Poäng innkls. checkbox: " + radioScore)
	});


			//!Spara ifall filter blir kaos
			// question.alt.forEach((key) => {
			// 	if (key.correct) {
			// 		arrOfCorrectAnswers.push(key.correct);
			// 	}
			// 	console.log(key.correct);
			// 	// console.log(arrOfCorrectAnswers);
			// });


	

// let index2 = index;
		// console.log(index);
			// let checkedCheckboxes = document.querySelectorAll("[name='C+index']");
			// let checkedCheckboxes = document.querySelectorAll("input[type='checkbox'][name=' + CSS.escape(index) + ']:checked");
	// let checkedCheckboxes = document.querySelectorAll('[name="((C)(${index}))"]');
			// console.log(checkedCheckboxes);
			

			//  checkedCheckboxes.forEach((box) => {
			//  	if (box.value === "true")  {
			//  		box.parentElement.style.color = "green";
			//  		console.log(box.parentElement);
			//  	};
			//  });

	// 	}
    
  // });

  

//     // let checkboxesValue = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(element => element.value);

//     // console.log(checkboxesValue);

//     //! if(checkboxes[i].value == "wrong" && checkboxes[i].checked == true) {
//     // !    right = false;
//     // !  }

//! Vill jag ha, maxpoäng osv, array längd???
//--------------------------------------Rendering av resultat:-----------------------------------

  if (radioScore > 0.75 * arrayOfQuestions.length) {
		resultHeader.innerText = `Mycket väl godkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "green";
	} else if (radioScore >= 0,5 * arrayOfQuestions.length) {
		resultHeader.innerText = `Godkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "orange";
	} else {
		resultHeader.innerText = `Underkänd: Du fick ${radioScore} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "red";
	}
	document.querySelector("#resultContainer").append(resultHeader);

  //todo: Färga alternativen + ev. frågorna man fick rätt och fel:
  // arr.forEach((question, index) => {
  //   question.alt.forEach((answer, altIndex) => {
  //     if (question.type === "radiobutton" && question.correct === altIndex) {
  //       console.log(answer);
  //       answer.style.color = "green";
  //     };

  //   });
  // });
};








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
