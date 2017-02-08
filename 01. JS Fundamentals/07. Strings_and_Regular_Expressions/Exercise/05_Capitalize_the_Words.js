function capitalization([input]) {
    return input.split(" ")
        .map(ch => ch[0].toUpperCase() + ch.substr(1).toLowerCase())
        .join(' ');

}
console.log(capitalization(['Was that Easy? tRY thIs onE for SiZe!']));