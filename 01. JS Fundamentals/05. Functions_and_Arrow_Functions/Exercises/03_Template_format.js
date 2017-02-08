function questionAswers(input) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0){
            console.log("<question>");
            console.log(input[i]);
            console.log("</question>");
        } else {
            console.log("<answer>");
            console.log(input[i])
            console.log("</answer>");
        }
    }
    console.log("</quiz>");
}