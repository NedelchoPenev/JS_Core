function useYourChains([html]) {
    let pattern = /<p>(.*?)<\/p>/g;
    let text = '', match;
    while (match = pattern.exec(html)){
        text += match[1];
    }

    text = text.replace(/[^a-z0-9]+/g, ' ');

    let decodedText = '';
    for (let i = 0; i < text.length; i++){
        if (text.charCodeAt(i) > 96 && text.charCodeAt(i) < 110){
            decodedText += String.fromCharCode(text.charCodeAt(i) + 13);
        } else if (text.charCodeAt(i) > 109 && text.charCodeAt(i) < 123){
            decodedText += String.fromCharCode(text.charCodeAt(i) - 13);
        } else {
            decodedText += text[i];
        }
    }
    
    console.log(decodedText);
}
useYourChains(["<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li>" +
"</ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div>" +
"<p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p>" +
"<span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span>" +
"<p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra " +
"gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>"]);