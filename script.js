var team = 1;
var ball = 1;
var totalruns = 0;
var totalWicket = 0;
var team1Score = 0;
var team2Score = 0;

function strike() {
    var run;
    if (team === 1) {
        var curr = 't1' + ball
        run = document.getElementById(curr);
        total = document.getElementById('score-team1');
        wicket = document.getElementById('wickets-team1');
    }
    else {
        var curr = 't2' + ball
        run = document.getElementById(curr);
        total = document.getElementById('score-team2');
        wicket = document.getElementById('wickets-team2');
    }
    var randomNumber = Math.floor(Math.random() * 8) + 1;
    if (randomNumber === 7) {
        randomNumber = 0
    }
    if (randomNumber != 8) {
        totalruns += randomNumber
        if (team === 1) {
            team1Score += totalruns;
        }
        else {
            team2Score += totalruns;
        }
        total.innerHTML = (totalruns).toString();
    }
    if (randomNumber === 8) {
        ++totalWicket;
    }
    if (randomNumber === 8) {
        randomNumber = 'W'
    }
    run.innerHTML = randomNumber.toString();
    wicket.innerHTML = totalWicket.toString();


    ball++;
    if (team === 2) {
        if (team1Score < team2Score) {
            setTimeout(function () {
                alert("Pakistan Wins");
                location.reload();
            }, 500);
            console.log('this 0')
        }

    }
    if (ball > 6 || totalWicket === 2) {


        if (team === 2) {

            if (team1Score > team2Score) {
                console.log('this 1')

                setTimeout(function () {
                    alert("India Wins")
                }, 500);
            }
            else if (team1Score < team2Score) {
                console.log('this 2')

                setTimeout(function () {
                    alert("pakistan wins")
                }, 500);
            }
            else {
                console.log('this 3')

                setTimeout(function () {
                    alert("Match tied")
                }, 500);
            }
            setTimeout(function () {
                location.reload();
            }, 500);
        }
        ball = 1;
        team = 2;
        totalruns = 0;
        totalWicket = 0;
    }

}

function reload() {
    location.reload()
}