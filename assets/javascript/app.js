/*
I could not get this application to acknowledge that any of the radio buttons were even checked
*/

var view = $("#game-view");

var questions = [
{
	question: "What is Obi-Wan's nickname?",
	choices: ["Phil", "Kermit", "Ben", "MerkMok"],
	correctAnswer: "Ben"
}, 
{
	question: "What color blade is Luke's first lightsaber?",
	choices: ["Green", "Red", "Blue", "Orange"],
	correctAnswer: "Blue"
}, 
{
	question: "What color blade is Luke's second lightsaber?",
	choices: ["Green", "Red", "Blue", "Orange"],
	correctAnswer: "Green"
},
{
	question: "Yoda first appeared in which movie?",
	choices: ["The Phantom Menace", "A New Hope", "The Empire Strikes Back", "Rogue One"],
	correctAnswer: "The Empire Strikes Back"
},
{
	question: "Which planet is the Wookie homeworld?",
	choices: ["Kashyyyk", "Coruscant", "Endor", "Dantooine"],
	correctAnswer: "Kashyyyk"
},
{
	question: "What kept Boba Fett alive when he fell into the Sarlaac Pit?",
	choices: ["The pit wasn't hungry", "The Force", "His desire to please his father", "His Mandalorian Armor"],
	correctAnswer: "His Mandalorian Armor"
},
{
	question: "What was the name of the Ewok that Leia first encounters?",
	choices: ["Chirpa", "Wicket", "Teebo", "Logray"],
	correctAnswer: "Wicket"
},
{
	question: "What color was Plo-Koon's lightsaber in the Playstation game, Jedi Power Battles?",
	choices: ["Yellow", "Blue", "Green", "Magenta"],
	correctAnswer: "Yellow"
},
{
	question: "What is the language of traders in Mos Eisley?",
	choices: ["Huttese", "English", "Bocce", "Mando'a"],
	correctAnswer: "Bocce"
},
{
	question: "What color was Ki-Adi Mundi's lightsaber?",
	choices: ["Green", "Red", "Blue", "Orange"],
	correctAnswer: "Blue"
}];

var game =
{
	rightAnswers: 0,
	wrongAnswers: 0,
	counter: 90,

	countdown: function()
	{
		game.counter--;
		$("#countdown").html(game.counter);
		if(game.counter === 0)
		{
			game.done();
		}
	},

	start: function()
	{
		timer = setInterval(game.countdown, 1000);
		$("#displayTimer").prepend("<h2>Time Left: <span id='countdown'>90</span> Seconds</h2>");

		$("#StartBtn").remove();
		$("#jtron").remove();

		for(var i = 0; i < questions.length; i++)
		{
			view.append("<h2>" + questions[i].question + "</h2>");
			view.append("<br>");
			console.log(questions[i]);
			for(var j = 0; j < questions[i].choices.length; j++)
			{
				view.append("<input type='radio' name='question-" + i + "' value='" + questions[i].choices[j] + "'>" + questions[i].choices[j] + "  ");
			}
			view.append("<hr>");
		}
		view.append("<button type ='submit' id='submitBtn'>Submit</button>");
	},

	done: function()
	{
		$.each($("input[name='question-0']:checked"), function() 
		{
			if ($(this).val() === questions[0].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});
	  
		$.each($("input[name='question-1']:checked"), function() 
		{
			if ($(this).val() === questions[1].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-2']:checked"), function() 
		{
			if ($(this).val() === questions[2].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-3']:checked"), function() 
		{
			if ($(this).val() === questions[3].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-4']:checked"), function() 
		{
			if ($(this).val() === questions[4].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-5']:checked"), function() 
		{
			if ($(this).val() === questions[5].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-6']:checked"), function() 
		{
			if ($(this).val() === questions[6].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-7']:checked"), function() 
		{
			if ($(this).val() === questions[7].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-8']:checked"), function() 
		{
			if ($(this).val() === questions[8].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});

		$.each($("input[name='question-9']:checked"), function() 
		{
			if ($(this).val() === questions[9].correctAnswer) 
			{
			  game.rightAnswers++;
			}
			else 
			{
			  game.wrongAnswers++;
			}
		});
	  
		this.result();
	},

	result: function()
	{
		clearInterval(timer);

		$("#displayTimer h2").remove();

		view.html("<h2>Well that was quick... unless of course you didn't answer all of them</h2>");
		view.append("<h3>Right Answers: " + this.rightAnswers + "</h3>");
		view.append("<h3>Wrong Answers: " + this.wrongAnswers + "</h3>");
		view.append("<h3>Unanswered: " + (questions.length - (this.wrongAnswers + this.rightAnswers)) + "</h3>");
	}
};

$(document).on("click", "#StartBtn", function()
{
	game.start();
});
  
  
$(document).on("click", "#submitBtn", function() 
{
	game.done();
});
  