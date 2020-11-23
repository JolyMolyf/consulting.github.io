let questions = [
	{
		"question": "На основании какого документа вы находитесь в Польше?",
		"choice1": "биометрический паспорт",
		"choice2": "карта побыта",
		"choice3": "Виза",
		"choice4": "другое"

	}, 
	{
		"question": "Сколько времени Вы находитесь в Польше?",
		"choice1": "До 90 дней",
		"choice2": "От 90 до 180 дней",
		"choice3": "От 180 дней до года",
		"choice4": "Больше года"
	},
	{
		"question": "Чем вы занимаетесь в Польше?",
		"choice1": "Работа",
		"choice2": "Учеба",
		"choice3": "Бизнес",
		"choice4": "другое"
	},
	{
		"question": "Есть ли у Вас родственники с Польским происхождением?",
		"choice1": "Да",
		"choice2": "Нет",
		"choice3": "Не знаю",
	}

];


var answers = []; 

let quiz = document.getElementById('question-wrapper'); 

let header = document.getElementById('question-header'); 
let choice1 = document.getElementById('choice1lbl'); 
let choice2 = document.getElementById('choice2lbl'); 
let choice3 = document.getElementById('choice3lbl'); 
let choice4 = document.getElementById('choice4lbl'); 
let choice1btn = document.getElementById('choice1'); 
let choice2btn = document.getElementById('choice2'); 
let choice3btn = document.getElementById('choice3'); 
let choice4btn = document.getElementById('choice4'); 
let progresBar = document.getElementById('quiz-progress'); 
let questionChoice = document.getElementById('quiestion-choice'); 
let town = document.getElementById('question-text');
let questionText = document.getElementById('text-in'); 
let nametxt = document.getElementById('name');
let surnametxt  = document.getElementById('surname');
let next = document.getElementById('next');
let back = document.getElementById('back');




var counter = 0; 
header.innerHTML = questions[counter].question;
choice1.innerHTML = questions[counter].choice1;
choice2.innerHTML = questions[counter].choice2;
choice3.innerHTML = questions[counter].choice3;
choice4.innerHTML = questions[counter].choice4;
questionText.classList.add("hide");
nametxt.classList.add("hide");
surnametxt.classList.add("hide");
var progress = 0; 
progresBar.style.width = progress + '%';
$("#next").click(function() {
  	var checkedFlag = false; 

  if(counter != 7 ){
	counter++;

  	
  	if (choice1btn.checked ||choice2btn.checked ||  choice3btn.checked || choice4btn.checked  ){	
  	
	if(choice1btn.checked){
  		answers.push(questions[counter -1].choice1); 
 		choice1btn.checked = false;
  	}else if(choice2btn.checked){
		answers.push(questions[counter-1].choice2); 
		choice2btn.checked = false;
  	}else if(choice3btn.checked){
		answers.push(questions[counter-1].choice3); 
  		choice3btn.checked = false;
  	} else{
  		choice4btn.checked = false;
		answers.push(questions[counter-1].choice4); 
  	}
		if(counter == 0){


			progresBar.style.width = '0%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;


		}
		 if(counter == 1){
			progresBar.style.width = '20%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;
		}
		 if(counter == 2){
			progresBar.style.width = '40%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;
		}
	}
	 if(counter == 3){
		
			progresBar.style.width = '60%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			$("#choice4").css("display", "none");

			
	}
	 }
	 
	
	 if(counter == 4){
	 	header.innerHTML = "В каком городе Вы находитесь?";
		questionChoice.classList.add("hide");
		questionText.classList.remove("hide");
		

 	}

 	if(counter == 5){

		header.innerHTML = "Введите Ваши данные";
 		answers.push(questionText.value);
		progresBar.style.width = '100%';
		questionText.classList.add("show");
		questionChoice.classList.add("hide");
		town.style.display = "none";
		nametxt.classList.remove("hide");
		surnametxt.classList.remove("hide");
		questionText.classList.add("hide");

 		
 	} 

 	if(counter == 6){
 		
		answers.push(nametxt.value);
		answers.push(surnametxt.value);

	

 	}

 	if(counter == 7){

 	$.post("src/js/sender.php",
   		{
	 	    passport: answers[0], 
	 	    term: answers[1], 
	 	    reason: answers[2],
	 	    relatives: answers[3], 
	 	    city: answers[4], 
	 	    name: answers[5], 
	 	    email: answers[6], 
	 	    data: "sometexthere"

	 		},
	 	 	function(res, status){
	 	    var data = JSON.parse(res);
	 	    console.log(data);
	 	    console.log("Status: " + status);

	 	});
 	}

 	
 	console.log(answers);

});

$("#prev").click(function() {
  	
	if(counter != 0 ){
	  	counter--;
	  	answers.pop();
	

		if(counter == 0){


			progresBar.style.width = '0%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;


		}
		 if(counter == 1){
			progresBar.style.width = '20%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;
		}
		 if(counter == 2){
			progresBar.style.width = '40%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			choice4.innerHTML = questions[counter].choice4;
		}
	
	 if(counter == 3){
		
			progresBar.style.width = '60%';
			header.innerHTML = questions[counter].question;
			choice1.innerHTML = questions[counter].choice1;
			choice2.innerHTML = questions[counter].choice2;
			choice3.innerHTML = questions[counter].choice3;
			$("#choice4").css("display", "none");
		
	}
	 if(counter == 4){
	 	header.innerHTML = "В каком городе Вы находитесь?";
		questionChoice.classList.add("hide");
		nametxt.classList.add("hide");
		surnametxt.classList.add("hide");
		questionText.classList.remove("hide");
		questionText.classList.add("show");
		$("#question-text").css("display", "block");
 	}

 	if(counter == 5){
		header.innerHTML = "Введите Ваши данные";
 		answers.push(questionText.value);
		progresBar.style.width = '100%';
		questionText.classList.add("show");
		questionChoice.classList.add("hide");
		town.style.display = "none";
		nametxt.classList.remove("hide");
		surnametxt.classList.remove("hide");

		console.log("backed");
 		
 	} 

 	if(counter == 6){
 		
		answers.push(nametxt.value);
		answers.push(surnametxt.value);

 	}

 	if(counter == 7){


 	}
}

 	console.log(counter);
 	
 	console.log(answers);

});
