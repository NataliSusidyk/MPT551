/* ---------------------------- begin view ----------------------------- */
	
	var view = {

		showQuestion: function (n) {
			this.showError('');
			var el = document.getElementById("showQuestion");
			el.innerHTML = n;
		}, 

		showError: function (error){
			var el = document.getElementById("showError");
			el.innerHTML = error;
		}


	};

/* ----------------------------- end view ------------------------------ */

	

/* ---------------------------- begin model ---------------------------- */
	
	var model = {
		cutentQuestion: 0,
		questions: [
			{
				text: 'Привіт',
				hangler: function(input) {
					var result = {};
					input = input.toLowerCase();
					if (input === 'хай' || input === 'привіт' || input === 'добрий день'){
						result.ok = true;
					} else {
						result.ok = false;
						result.errorText = 'Привітайся нормально';
					}
					return result;
				}
			}, 
			{
				text: 'Як тебе зати?',
				hangler: function(input) {
					var result = {};
					if (input){
						result.ok = true;
					} else {
						result.ok = false;
						result.errorText = 'Ти ж не робот, напиши нормально.';
					}
					return result;
				}
			}, 
			{
				text: 'Скільки тобі років?',
				hangler: function(input) {
					var result = {};
					if (input > 10 && input < 100){
						result.ok = true;
					} else {
						result.ok = false;
						if (input<10) result.errorText = 'Йди звідси, щеня';
						else if(input>100) result.errorText = 'Що ти тут забув, старий?';
						else result.errorText = 'Кажи свій справжній вік!';
					}
					return result;
				}
			}, 
			{
				text: 'Ну ми починаємо',
				hangler: function(input) {
					var result = {};
					if (input){
						result.ok = false;
						result.errorText = 'Не поспішай!';
					} else {
						result.ok = false;
						result.errorText = 'Не поспішай!';
					}
					return result;
				}
			}, 
		],

		calculate: function (input) {
			return this.questions[this.cutentQuestion].hangler(input);
		}, 

		getCurrentQuestion: function (){
			if (this.cutentQuestion >= this.questions.length ) return "Питань більше нема";
			return this.questions[this.cutentQuestion].text;
		},

		goToNextQuestion: function (){
			this.cutentQuestion++;
		}
	};

/* ----------------------------- end model ----------------------------- */


/* -------------------------- begin controller ------------------------- */
	
	var controller = {

		init: function () {
			view.showQuestion(model.getCurrentQuestion());
		},

		handleClick: function () {
			var mainInput = document.getElementById('mainInput').value;
			var result = model.calculate(mainInput);
			if (result.ok){
				model.goToNextQuestion();
				view.showQuestion(model.getCurrentQuestion());
			} else {
				view.showError(result.errorText);
			}
		}

	};

/* --------------------------- end controller -------------------------- */




/* --------------------- anonymous initialize function ----------------- */
	(function() { 

		var app = {

			init: function () {
				this.main();
				this.event();
			},

			main: function () {
				controller.init();
			},

			event: function () {
				var el = document.getElementById("calcUser");
				el.onclick = controller.handleClick;
			}

		};
		
		app.init();

	}());
/* --------------------- anonymous initialize function ----------------- */