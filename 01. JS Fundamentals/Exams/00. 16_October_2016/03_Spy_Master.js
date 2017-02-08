function spyMaster(input) {
    let specialKey = input.shift();
    specialKey = new RegExp(specialKey, "gi");
    let pattern = '(?:\\s+|^)([A-Z!%$#]{8,})(?:\\s+|\\.|,|$)';
    let text = input.join(' ');
    let matches = text.match(specialKey);
    while (matches){
        let newPatt = new RegExp(matches[1] + pattern);
        let newMatch = text.match(newPatt);
        console.log()
    }


    console.log(text);
}
spyMaster(["specialKey","In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"]);
spyMaster(["enCode","Some messages are just not encoded what can you do?",
    "RE - ENCODE THEMNOW! - he said.","Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."]);