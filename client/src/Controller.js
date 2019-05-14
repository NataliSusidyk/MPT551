export default class Controller{
	constructor(view, model){
		this.view = view;
		this.model = model;

		view.showQuestion(this.model.getCurrentQuestion());

		let el = document.getElementById("calcUser");
		el.onclick = () => this.handleClick();
	}

	handleClick() {
			let mainInput = document.getElementById('mainInput').value;
			let result = this.model.calculate(mainInput);
			if (result.ok){
				this.model.goToNextQuestion();
				this.view.showQuestion(this.model.getCurrentQuestion());
			} else {
				this.view.showError(result.errorText);
			}
	}
}