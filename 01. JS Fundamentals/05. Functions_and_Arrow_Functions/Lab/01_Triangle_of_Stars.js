function drawTrianle(size) {
    function drawStar(count) {
        console.log("*".repeat(count))
    }
    for (let i = 1; i <= size; i++){
        drawStar(i);
    }
    for (let i = size - 1; i >=1; i--){
        drawStar(i);
    }
}
