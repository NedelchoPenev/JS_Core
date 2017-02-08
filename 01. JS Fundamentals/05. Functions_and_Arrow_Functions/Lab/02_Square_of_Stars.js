function printSquere(size) {
    function printStars(n = size) {
        console.log("*" + " *".repeat(n - 1));
    }
    for (let i = 1; i <= size; i++){
        printStars();
    }
}
