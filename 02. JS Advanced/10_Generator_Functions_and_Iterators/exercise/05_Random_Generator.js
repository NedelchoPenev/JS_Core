function* random(seed) {
    let mod = 4871 * 7919;
    let x1 = seed;

    while (true){
        x1 = (x1 * x1) % mod;
        yield x1 % 100;
    }
}
let rnd = random(100);

for (let i = 0; i < 10; i++) {
    console.log(rnd.next().value);
}
