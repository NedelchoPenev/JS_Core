function calucateQuadratic([a, b, c]) {

    a = Number(a);
    b = Number(b);
    c = Number(c);

    let d = b*b - 4*a*c;

    if (d > 0){
        console.log((-b - Math.sqrt(d)) / (2*a));
        console.log((-b + Math.sqrt(d)) / (2*a));
    } else if (d == 0){
        console.log(-b / (2*a));
    } else {
        console.log("No")
    }
}