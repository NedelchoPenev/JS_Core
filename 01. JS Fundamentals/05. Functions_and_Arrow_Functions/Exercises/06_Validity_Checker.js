function validityChecker(input) {
    [x1, y1, x2, y2] = input.map(Number);

    print(x1, y1, 0, 0, isInt(calculateDistance(x1, y1)));
    print(x2, y2, 0, 0, isInt(calculateDistance(x2, y2)));
    print(x1, y1, x2, y2, isInt(calculateDistance(x1, y1, x2, y2)));

    function calculateDistance(x1, y1, x2 = 0, y2 = 0) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }

    function isInt(num) {
        return num % 1 === 0;
    }

    function print(x1, y1, x2, y2, isInt) {
        if (isInt){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}