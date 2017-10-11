var xPos = 575;
var yPos = 450;
var shapesImage = new Raster('http://az616578.vo.msecnd.net/files/2016/11/17/636149977030665003-228111708_ODYSSEY.jpg', xPos, yPos);
shapesImage.scale(1.1);

function onMouseDown() {

    var response = true;

    while (response) {

        var score = 0;
        // add new questions here
        var questions = ['How many dice are there?', 'What colour is the crayon?', 'What is the name of the disney character?', 'How many keys can you see?'];
        // add question answers here
        var answers = ['3', 'purple', 'mickey', '2'];

        // error check
        if (questions.length != answers.length) {
            console.log('question/answer mismatch');
            return;
        }

        for (var i = 0; i < questions.length; i++) {

            // Stop if the user clicks cancel
            // or doesn't type anything
            var userAnswer = prompt(questions[i]);
            if (userAnswer == null || userAnswer == '') {
                alert("Thanks for playing!");
                return;
            }

            if (userAnswer == answers[i]) {
                alert('Correct!');
                score++;
            } else {
                alert('Sorry, not quite!');
            }
        }

        if (score > 0) {
            alert('You scored ' + score + '/' + questions.length + '\nWell Done!');
        } else {
            alert('You scored ' + score + '/' + questions.length + '\nBetter luck next time');
        }

        response = confirm('Would you like to play again?');
    }

    alert("Thanks for playing!");
}
