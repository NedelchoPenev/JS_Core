function minkaSolve(input) {
    let result = {};

    for (let line of input) {
        let [name, type, taskN, score, linesCode] = line.split(' & ');
        taskN = 'Task ' + taskN;
        score = Number(score);
        linesCode = Number(linesCode);
        if (!result.hasOwnProperty(taskN)){
            result[taskN] = {tasks: [], average: 0, lines: 0, score: 0};
        }

        result[taskN].tasks.push({name: name, type: type});
        result[taskN].score += score;
        result[taskN].lines += linesCode;
        let calcAve = result[taskN].score / result[taskN].tasks.length;
        result[taskN].average = +calcAve.toFixed(2);
    }

    for (let key of Object.keys(result)) {
        delete result[key].score;
    }

    function customSort(itemA, itemB) {
        if (result[itemA].average != result[itemB].average){
            return result[itemB].average - result[itemA].average;
        }

        return result[itemA].lines - result[itemB].lines;
    }

    let sortedResult = [...Object.keys(result)].sort((a, b) => customSort(a, b));
    let output = {};
    for (let num of sortedResult) {
        result[num].tasks = result[num].tasks.sort((a, b) => a.name.localeCompare(b.name));
        output[num] = result[num];
    }

    console.log(JSON.stringify(output));
}
minkaSolve(["Array Matcher & strings & 4 & 100 & 38","Magic Wand & draw & 3 & 100 & 15",
    "Dream Item & loops & 2 & 88 & 80","Knight Path & bits & 5 & 100 & 65",
    "Basket Battle & conditionals & 2 & 100 & 120","Torrent Pirate & calculations & 1 & 100 & 20",
    "Encrypted Matrix & nested loops & 4 & 90 & 52","Game of bits & bits & 5 &  100 & 18",
    "Fit box in box & conditionals & 1 & 100 & 95","Disk & draw & 3 & 90 & 15",
    "Poker Straight & nested loops & 4 & 40 & 57","Friend Bits & bits & 5 & 100 & 81"]);