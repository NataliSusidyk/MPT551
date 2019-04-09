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
					 var  str = /[0-9-!№#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
					 var result = {};
					 if(str.test(input)){
						result.ok = false;
						result.errorText = 'Ти ж не робот, напиши нормально.';
					} else { 
						result.ok = true;
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
