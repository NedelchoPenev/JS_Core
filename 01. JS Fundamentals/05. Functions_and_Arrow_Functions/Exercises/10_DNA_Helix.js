function helix([num]) {
    num = Number(num);
    let dnaText = 'ATCGTTAGGG';

    let index = 0;

    for (let i = 0; i < num; i++){
        let letterA = dnaText[index++ % dnaText.length];
        let letterB = dnaText[index++ % dnaText.length];

        switch (i % 4){
            case 0:
                console.log(`**${letterA}${letterB}**`);
                break;
            case 1:
                console.log(`*${letterA}--${letterB}*`);
                break;
            case 2:
                console.log(`${letterA}----${letterB}`);
                break;
            case 3:
                console.log(`*${letterA}--${letterB}*`);
        }
    }
}
