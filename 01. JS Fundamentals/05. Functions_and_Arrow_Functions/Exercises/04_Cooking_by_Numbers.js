function cooking(input) {
    let number = Number(input[0]);

    for (let i = 1; i <= 5; i++){
        if (input[i] === "chop") {
            number = number / 2;
        } else if (input[i] === "dice") {
            number = Math.sqrt(number);
        } else if (input[i] === "spice"){
            number = number + 1;
        } else if (input[i] === "bake"){
            number = number * 3;
        } else {
            number = number - (number * 0.2);
        }
        console.log(number);
    }
}