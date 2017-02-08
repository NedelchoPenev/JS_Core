function circleArea(r) {
    let area = Math.PI * r * r;
    let areaRounded = Math.round(area * 100) / 100;

    console.log(area);
    console.log(areaRounded);
}