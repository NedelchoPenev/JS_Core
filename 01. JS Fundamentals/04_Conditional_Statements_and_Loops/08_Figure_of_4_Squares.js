function drawSquare([n]) {
    
    if (n % 2 == 0){
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let i = 0; i <= n-3; i++){
            for (let j = 0; j < Math.floor((n - 3) / 2); j++){
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
                i++;
            }
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        }
    } else {
        console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        for (let i = 0; i <= n-2; i++){
            for (let j = 0; j < Math.floor((n - 3) / 2); j++){
                console.log("|" + " ".repeat(n - 2) + "|" + " ".repeat(n - 2) + "|");
                i++;
            }
            console.log("+" + "-".repeat(n - 2) + "+" + "-".repeat(n - 2) + "+");
        }
    }
}
drawSquare([7]);