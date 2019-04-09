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