function parachute(input) {
    let row = 0;
    let col = 0;
    for (let line of input) {
        for (let i = 0; i < line.length; i++){
            if (line[i] == 'o') {
                col = i;
                break;
            }
            if (line[i] == '>'){
                col++;
            } else if (line[i] == '<'){
                col--;
            }
        }

        if (line[col] == '_'){
            console.log('Landed on the ground like a boss!');
            console.log(row + ' ' + col);
            return;
        } else if (line[col] == '~'){
            console.log('Drowned in the water like a cat!');
            console.log(row + ' ' + col);
            return;
        } else if (line[col] == '/' || line[col] == '\\'){
            console.log('Got smacked on the rock like a dog!');
            console.log(row + ' ' + col);
            return;
        }
        row++;
    }
}
parachute([
    "-------------o-<<--------",
    "-------->>>>>------------",
    "---------------->-<---<--",
    "------<<<<<-------/\\--<--",
    "--------------<--/-<\\----",
    ">>--------/\\----/<-<-\\---",
    "---------/<-\\--/------\\--",
    "<-------/----\\/--------\\-",
    "\\------/--------------<-\\",
    "-\\___~/------<-----------"]);