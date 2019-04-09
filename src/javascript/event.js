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