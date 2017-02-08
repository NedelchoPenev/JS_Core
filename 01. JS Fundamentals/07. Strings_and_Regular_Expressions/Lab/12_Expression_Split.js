function expressionSplit([input]) {
    let output = input.split(/[\s().,;]+/).filter(w => w != '');
    console.log(output.join('\n'));
}
expressionSplit(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']);