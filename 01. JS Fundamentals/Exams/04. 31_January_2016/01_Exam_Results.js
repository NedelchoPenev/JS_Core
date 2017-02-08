function examResult(input) {
    let averagePointsFor = input.pop().trim();
    let countAvr = 0, sum = 0;
    for (let line of input) {
        let [name, course, examPoints, bonusP] = line.trim().split(/\s+/);
        examPoints = Number(examPoints);
        bonusP = Number(bonusP);
        let coursePoints = (examPoints * 0.2) + bonusP;
        coursePoints = +coursePoints.toFixed(2);
        
        if (course == averagePointsFor){
            sum += examPoints;
            countAvr++;
        }

        if (examPoints < 100){
            console.log(`${name} failed at "${course}"`)
        } else {
            let grade = (((coursePoints) / 80) * 4) + 2;
            if (coursePoints >= 80){
                grade = 6.00
            }
            grade = grade.toFixed(2);
            console.log(`${name}: Exam - "${course}"; Points - ${coursePoints}; Grade - ${grade}`);
        }
    }

    let average = sum/countAvr;
    console.log(`"${averagePointsFor}" average points -> ${+average.toFixed(2)}`);
}
// examResult(["Pesho C#-Advanced 100 3","Gosho Java-Basics 157 3","Tosho HTML&CSS 317 12",
//     "Minka C#-Advanced 57 15","Stanka C#-Advanced 157 15","Kircho C#-Advanced 300 0",
//     "Niki C#-Advanced 400 10","C#-Advanced"]);
examResult(["EDUU    JS-Basics                317          15         ",
    "           RoYaL        HTML5        121         10        ",
    "ApovBerger      OOP   0    10     ","Stamat OOP   190 10","MINKA OOP   230 10","   OOP"]);