let arrayOfQuestions = [
	{
		question: "Fråga 1:",
		alternatives: [
			{
				answer: "true",
				correct: true,
			},
			{
				answer: "false",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Jorden är 20 år gammal",
		alternatives: [
			{
				answer: "true",
				correct: true,
			},
			{
				answer: "false",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Fråga 8:",
		alternatives: [
			{
				answer: "8aaa",
				correct: true,
			},
			{
				answer: "8bbb",
				correct: false,
			},
			{
				answer: "8ccc",
				correct: false,
			},
			{
				answer: "8ddd",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Fråga 9:",
		alternatives: [
			{
				answer: "9aaa",
				correct: false,
			},
			{
				answer: "9bbb",
				correct: true,
			},
			{
				answer: "9ccc",
				correct: false,
			},
			{
				answer: "9ddd",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Fråga 10:",
		alternatives: [
			{
				answer: "10aaa",
				correct: false,
			},
			{
				answer: "10bbb",
				correct: false,
			},
			{
				answer: "10ccc",
				correct: true,
			},
			{
				answer: "10ddd",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Fråga 11:",
		alternatives: [
			{
				answer: "11aaa",
				correct: false,
			},
			{
				answer: "11bbb",
				correct: false,
			},
			{
				answer: "11ccc",
				correct: true,
			},
			{
				answer: "11ddd",
				correct: false,
			},
		],
		type: "radiobutton",
	},
	{
		question: "Fråga 12:",
		alternatives: [
			{
				answer: "12aaa",
				correct: true,
			},
			{
				answer: "12bbb",
				correct: false,
			},
			{
				answer: "12ccc",
				correct: true,
			},
			{
				answer: "12ddd",
				correct: false,
			},
		],
		type: "checkboxes",
	},
	// {
	// 	question: "Fråga 13:",
	// 	alternatives: [
	// 		{
	// 			answer: "13aaa",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "13bbb",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "13ccc",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "13ddd",
	// 			correct: false,
	// 		},
	// 	],
	// 	type: "checkboxes",
	// },
	// {
	// 	question: "Fråga 14:",
	// 	alternatives: [
	// 		{
	// 			answer: "14aaa",
	// 			correct: false,
	// 		},
	// 		{
	// 			answer: "14bbb",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "14ccc",
	// 			correct: false,
	// 		},
	// 		{
	// 			answer: "14ddd",
	// 			correct: false,
	// 		},
	// 	],
	// 	type: "checkboxes",
	// },
	// {
	// 	question: "Fråga 15:",
	// 	alternatives: [
	// 		{
	// 			answer: "15aaa",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "15bbb",
	// 			correct: false,
	// 		},
	// 		{
	// 			answer: "15ccc",
	// 			correct: true,
	// 		},
	// 		{
	// 			answer: "15ddd",
	// 			correct: false,
	// 		},
	// 	],
	// 	type: "checkboxes",
	//},
];

//Resultatknapp
let resultBtn = document.querySelector("#resultButton");

//Header: resultat
let resultHeader = document.createElement("h3");

let darkModeBtn = document.querySelector("#darkMode")

let container = document.querySelector("#questionContainer");

darkModeBtn.addEventListener("click", () => {
		document.body.classList.toggle("dark-mode");
});
	

resultBtn.addEventListener("click", () => {
    //! Alert du har inte svarat på alla frågor
    getResult(arrayOfQuestions);
});

function displayQuestions (arr) {
	arr.forEach((obj, index) => {
        let question = document.createElement("h4");
		question.innerText = obj.question;
        // console.log(obj.question)
        container.append(question);
		obj.alternatives.forEach((alt, index2) => {           //!ta bort index2 ????
            if (obj.type === "radiobutton") {
                let radiobutton = document.createElement("input");
                radiobutton.type = "radio";
                radiobutton.name = "R" + index; 		
                radiobutton.id = "R" + index + index2;
                radiobutton.value = alt.correct;
                //console.log(alt.correct);
                //console.log(obj.alternatives[index])
    
                //Label
                let label = document.createElement("label")
                label.for = "R" + index + index2;
                label.innerText = alt.answer;
                //!label for funkar ej, ingen koppling mellan radioK + label-text
                // console.log(radiobutton.id)
                // console.log(label.for);
                // console.log(radiobutton.value)
                container.appendChild(radiobutton)
				container.appendChild(label)

            } else {
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.name = "C" + index;
                checkbox.id = "C" + index + index2;
                checkbox.value = alt.correct;

                let label = document.createElement("label")
                label.for = "C" + index + index2;
                label.innerText = alt.answer;
                container.append(checkbox, label)
            }
		});
	});    
}

displayQuestions(arrayOfQuestions);

function getResult (arr) {
//--------------------------Hämtar alla icheckade radiobuttons value-----------------
	let radiobuttonsValue = Array.from(document.querySelectorAll("input[type='radio']:checked")).map(element => element.value);
    
    console.log(radiobuttonsValue);
    //! alla värden ovan blir till strängar )-:< ????map????)
	//Räknare till score-keeping
	let score = 0;

    radiobuttonsValue.forEach((value) => {
        if (value === "true") {
            score++
			console.log(("[type='radio']:checked").parentElement);}
			// value.parentElement.style.color = "green"; 
        // } else {
		// 	value.parentElement.style.color = "red";
		// }
        console.log(score);
        return score;
    })

	// let radiobuttonsValue = (document.querySelectorAll("input[type='radio']:checked"));
    
    // console.log(radiobuttonsValue);
    // //! alla värden ovan blir till strängar )-:< ????map????)
	// //Räknare till score-keeping
	// let score = 0;

    // radiobuttonsValue.forEach((answer) => {
    //     if (answer.value === "true") {
	// 		console.log(answer.value);
    //         score++;
	// 		answer.parentElement.style.color = "green";
    //     } else {
	// 		answer.parentElement.style.color = "red";
	// 	}
    //     console.log(score);
    //     return score;
    // })

//--------------------------Hämtar alla icheckade checkboxes value-----------------
    // let checkboxes = document.querySelectorAll("[type='checkbox']:checked");
    // let arrAnswers = [];
    // console.log(checkboxes);

    // checkboxes.forEach((item) => {
    //     question.alternatives.forEach((alt, index2) => {           //!ta bort index2 ????
    //         if (alt.correct === "true")  {
    //             arrAnswers.push(alt.correct.value)
    //         };


    //     });
    // });
    // console.log(arrAnswers)



    // let checkboxesValue = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(element => element.value);

    // console.log(checkboxesValue);

    //! if(checkboxes[i].value == "wrong" && checkboxes[i].checked == true) {
    // !    right = false;
    // !  }





    if (score > 7.5 ) {
		resultHeader.innerText = `Mycket väl godkänd: Du fick ${score} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "green";
	} else if (score >= 5) {
		resultHeader.innerText = `Godkänd: Du fick ${score} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "orange";
	} else {
		resultHeader.innerText = `Underkänd: Du fick ${score} av ${arrayOfQuestions.length} rätt.`;
		resultHeader.style.color = "red";
	}
	document.querySelector("#resultContainer").append(resultHeader);

};




 // arr.forEach((obj, index) => {
    //     obj.alternatives.forEach((alt, index2) => {
    //         // console.log(alt.correct) //Booleaner
    //         // console.log(checkedAnswerValue[index]); //Strängar
    //         // console.log(index);
    //         if (alt.correct) {
    //             score++;
    //         }
    //         console.log(score);
    //         return score;
    

	// //Räknar resultat:
	// arr.forEach((obj, index) => {
	// 	let a = index;					//!Är detta bästa lösnignen????? NJAAOO
	// 	if (checkedAnswerValue[a] === obj.answer) {			//!OBS båda måste vara strängar - kolla upp... map metoden ovan ställer till det?
	// 		score++;
	// 	}
	// 	return score;
	// });