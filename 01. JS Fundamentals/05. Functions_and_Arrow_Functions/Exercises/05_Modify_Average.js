function modifyAverage([num]) {
    while (true) {
        let number = 0;
        for (let i = 0; i < num.length; i++) {
            number += Number(num[i]);
        }

        if (number / num.length > 5) {
            console.log(num);
            break;
        } else {
            num = num + "9";
        }
    }
}
modifyAverage(["5835"]);