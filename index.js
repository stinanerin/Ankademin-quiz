let arrayOfQuestions = [
    {
		question: "Fråga 1:",
		answer: "false",
	},
	{
		question: "Jorden är 20 år gammal.",
		answer: "true",
	},
    {
		question: "Fråga 3:",
		answer: "false",
	},
    {
		question: "Fråga 4:",
		answer: "false",
	},
	{
		question: "Fråga 5:",
		answer: "true",
	},
    {
		question: "Fråga 6:",
		answer: "false",
	},
    {
		question: "Fråga 7:",
		answer: "false",
	},
	{
		question: "Fråga 8:",
		answer: "true",
	},
    {
		question: "Fråga 9:",
		answer: "false",
	},
    {
		question: "Fråga 10:",
		answer: "false",
	},
];

//Resultatknapp
let resultBtn = document.querySelector("#resultButton");

//Header: resultat
let resultHeader = document.createElement("h3");

let darkModeBtn = document.querySelector("#darkMode")

darkModeBtn.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");
});

function displayQuestion (arr) {
    //Skapa textfråga+radiobutton*2+label*2 för varje fråga:
    arr.forEach((obj, index)  => {

		//!OBS! Alla radiobutton grupperingar indexeras vid noll. så fråga 1 = Q0

		//Fråga
		let question = document.createElement("h4");
		question.innerText = obj.question; 		//!ALT: ??skapar helt ny HTML-tagg: <h2> Det här är en ny h2 </h2>

		//Radiobutton - Sant
        let radiobuttonTrue = document.createElement("input");
        radiobuttonTrue.type = "radio";
        radiobuttonTrue.name = "Q" + index; 		
        radiobuttonTrue.id = "trueQ" + index;
        radiobuttonTrue.value = true;

		//Label - Sant
        let labelTrue = document.createElement("label")
        labelTrue.innerText = "Sant";

		//Radiobutton - Falskt
        let radiobuttonFalse = document.createElement("input");
        radiobuttonFalse.type = "radio";
        radiobuttonFalse.name = "Q" + index; 		//!Bör bli 
        radiobuttonFalse.id = "falseQ" + index;
        radiobuttonFalse.value = false;

		// console.log("True:", radiobuttonTrue.name)
		// console.log("False:", radiobuttonFalse.name)

		//Label - Falskt
        let labelFalse = document.createElement("label")
        labelFalse.innerText = "Falskt";
	 
		//! Bör ändras - få in efter varje label ovan (innerHTML?)?
		let newRowOne = document.createElement("br");
		let newRowTwo = document.createElement("br");

		let container = document.querySelector("#questionContainer");
		container.append(question, radiobuttonTrue, labelTrue, newRowOne, radiobuttonFalse, labelFalse, newRowTwo);
    });
};

displayQuestion(arrayOfQuestions);

resultBtn.addEventListener("click", () => {

	getResult(arrayOfQuestions);
});

function getResult (arr) {
	//Rensar tidgare resultat
	resultHeader.innerText = "";

	//! Fixa krav måsta svarat på alla frågor --> annars ALERT

	//Hämtar alla icheckade radiobuttons value
	let checkedAnswerValue = Array.from(document.querySelectorAll("input[type='radio']:checked")).map(element => element.value);
 
	//Räknare till score-keeping
	let score = 0;

	//Räknar resultat:
	arr.forEach((obj, index) => {
		let a = index;					//!Är detta bästa lösnignen????? NJAAOO
		if (checkedAnswerValue[a] === obj.answer) {			//!OBS båda måste vara strängar - kolla upp... map metoden ovan ställer till det?
			score++;
		}
		return score;
	});

	//Printar resultat: 
	if (score > 7.5 ) {
		resultHeader.innerText = `Mycket väl godkänd: Du fick ${score} av 10 rätt.`;
		resultHeader.style.color = "green";
	} else if (score >= 5) {
		resultHeader.innerText = `Godkänd: Du fick ${score} av 10 rätt.`;
		resultHeader.style.color = "orange";
	} else {
		resultHeader.innerText = `Underkänd: Du fick ${score} av 10 rätt.`;
		resultHeader.style.color = "red";
	}
	document.querySelector("#resultContainer").append(resultHeader);
};


