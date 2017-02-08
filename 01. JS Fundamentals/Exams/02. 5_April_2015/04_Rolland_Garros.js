function rollandGarros(input) {
    let ranking = new Map();
    for (let line of input) {
        let tokens = line.split(/vs\.|:/);
        let playerA = tokens[0].trim().replace(/\s+/g, ' ');
        let playerB = tokens[1].trim().replace(/\s+/g, ' ');
        let scores = tokens[2].trim().split(/-|\s+/g).map(Number);

        if (!ranking.has(playerA)){
            ranking.set(playerA, {
                "name": playerA,
                "matchesWon": 0,
                "matchesLost": 0,
                "setsWon": 0,
                "setsLost": 0,
                "gamesWon": 0,
                "gamesLost": 0
            });
        }

        if (!ranking.has(playerB)) {
            ranking.set(playerB, {
                "name": playerB,
                "matchesWon": 0,
                "matchesLost": 0,
                "setsWon": 0,
                "setsLost": 0,
                "gamesWon": 0,
                "gamesLost": 0
            });
        }

        let playerAGames = 0;
        let playerASets = 0;
        let playerBGames = 0;
        let playerBSets = 0;

        for (let i = 0; i < scores.length; i+=2){
            playerAGames += scores[i];
            playerBGames += scores[i + 1];

            if (scores[i] > scores[i + 1]){
                playerASets++;
            } else {
                playerBSets++;
            }
        }

        ranking.get(playerA).gamesWon += playerAGames;
        ranking.get(playerA).gamesLost += playerBGames;
        ranking.get(playerB).gamesWon += playerBGames;
        ranking.get(playerB).gamesLost += playerAGames;

        ranking.get(playerA).setsWon += playerASets;
        ranking.get(playerA).setsLost += playerBSets;
        ranking.get(playerB).setsWon += playerBSets;
        ranking.get(playerB).setsLost += playerASets;

        if (playerASets > playerBSets){
            ranking.get(playerA).matchesWon++;
            ranking.get(playerB).matchesLost++;
        } else {
            ranking.get(playerB).matchesWon++;
            ranking.get(playerA).matchesLost++;
        }
    }

    function sortPlayers(playerA, playerB) {
        if (ranking.get(playerA).matchesWon != ranking.get(playerB).matchesWon){
            return ranking.get(playerB).matchesWon - ranking.get(playerA).matchesWon;
        } else if (ranking.get(playerA).setsWon != ranking.get(playerB).setsWon){
            return ranking.get(playerB).setsWon - ranking.get(playerA).setsWon;
        } else if (ranking.get(playerA).gamesWon != ranking.get(playerB).gamesWon){
            return ranking.get(playerB).gamesWon - ranking.get(playerA).gamesWon;
        }

        return playerA.localeCompare(playerB);
    }

    let output = [];
    [...ranking.keys()].sort((a, b) => sortPlayers(a, b)).forEach(pl => output.push(ranking.get(pl)));

    console.log(JSON.stringify(output));
}
rollandGarros(["Novak Djokovic vs. Roger Federer : 6-3 6-3","Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3","Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7","Andy Murray vs. David     Ferrer : 6-4 7-6","Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7","Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2","Pete Sampras vs. Andre Agassi : 2-1","Boris Beckervs.Andre        Agassi:2-1"]);
