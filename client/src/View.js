const AppDiv = 'app';

export default class View{
	constructor(){
		this.mainDiv = document.getElementById(AppDiv);
		this.mainDiv.style = "text-align: center; font-size: 24px;";

		let title = document.createElement('p');
		let titleText = document.createTextNode("Мій перший веб додаток");
    	title.appendChild(titleText);
		this.mainDiv.appendChild(title);

		let questionDiv = document.createElement('div');
		questionDiv.id  = 'showQuestion';
		this.mainDiv.appendChild(questionDiv);

		let mainInput = document.createElement('input');
		mainInput.id  = 'mainInput';
		this.mainDiv.appendChild(mainInput);

		let br = document.createElement('br');
		this.mainDiv.appendChild(br);

		let btn = document.createElement("button");
    	let btnText = document.createTextNode("Обчислити");
    	btn.id = 'calcUser';
    	btn.appendChild(btnText);
		this.mainDiv.appendChild(btn);
		
		let errorDiv = document.createElement('div');
		errorDiv.style = "color: red";
		errorDiv.id  = 'showError';
		this.mainDiv.appendChild(errorDiv);


	}

	showQuestion(n) {
		this.showError('');
		let el = document.getElementById("showQuestion");
		el.innerHTML = n;
	} 

	showError(error){
		let el = document.getElementById("showError");
		el.innerHTML = error;
	}
}