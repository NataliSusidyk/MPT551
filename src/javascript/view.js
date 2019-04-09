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