function calculateDistance([speed1, speed2, time]) {
    speed1 = Number(speed1);
    speed2 = Number(speed2);
    time = Number(time);

    let kms1 = speed1 / 3600;
    let kms2 = speed2 / 3600;

    let dist1 = kms1 * time * 1000;
    let dist2 = kms2 * time * 1000;

    console.log(Math.abs(dist1 - dist2));
}