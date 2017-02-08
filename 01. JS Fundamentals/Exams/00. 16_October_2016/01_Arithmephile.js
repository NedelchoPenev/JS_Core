function arithmephile(input) {

    let biggestSum = -Infinity;
    for (let i = 0; i < input.length; i++){
        let num = Number(input[i]);
        let newArr = [];
        let currentSum  = -Infinity;
        if (num >= 0 && num < 10){
            newArr = input.slice(i + 1, (num + i + 1)).map(n => Number(n));
            if (newArr.length > 0){
                currentSum = newArr.reduce((a, b) => a*b);
            }
        }

        if (currentSum > biggestSum){
            biggestSum = currentSum;
        }
    }
    console.log(biggestSum);
}
//arithmephile(["10","20","2","30","44","123","3","56","20","24"]);
arithmephile(["18","42","19","36","1","-297","38","100","9","-249","-170","-18","-208","-11","-87","-90","-286","-27"]);