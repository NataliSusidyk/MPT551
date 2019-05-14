export default class Model{
	
	constructor(){
		this.cutentQuestion = 0;

		var xhr = new XMLHttpRequest();
		xhr.open('GET', './questions', false);
		xhr.send();
		let respArr = JSON.parse(xhr.responseText );
		let arr =[];
  		for (let question of respArr){
  			arr.push({
  				text: question.text,
  				hangler: new Function('input',question.hangler),
  			});
  		}
  		this.questions = arr;
	}

	calculate(input) {
		return this.questions[this.cutentQuestion].hangler(input);
	}

	getCurrentQuestion(){
		if (this.cutentQuestion >= this.questions.length ) return "Питань більше нема";
		return this.questions[this.cutentQuestion].text;
	}

	goToNextQuestion(){
		this.cutentQuestion++;
	}
}