function personalBMI() {
    let name = arguments[0];
    let age = arguments[1];
    let weight = arguments[2];
    let height = arguments[3];

    let bmi = Math.round(weight / ((height/100) * (height/100)));
    let status = '';

    if (bmi < 18.5){
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25){
        status = "normal";
    } else if (bmi >= 25 && bmi < 30){
        status = 'overweight';
    } else if (bmi >= 30){
        status = "obese";
    }

    let obj =  {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: status

    };

    if (status == 'obese'){
        obj["recommendation"] = 'admission required';
    }

    return obj;
}
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));