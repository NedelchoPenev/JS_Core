function constructionCrew(obj) {
    if (obj.handsShaking === true){
        let weight = obj['weight'];
        let experience = obj['experience'];
        let bloodAlcoholLevel = obj['bloodAlcoholLevel'];

        bloodAlcoholLevel += (weight * experience) * 0.1;
        obj['bloodAlcoholLevel'] = bloodAlcoholLevel;
        obj['handsShaking'] = false;
    }

    return obj;
}
console.log(constructionCrew([{ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }
]));