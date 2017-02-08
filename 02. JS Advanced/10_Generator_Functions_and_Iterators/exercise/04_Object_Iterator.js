function makeIterable(obj) {
    let index = 0;
    let keys = Object.keys(obj)
        .sort()
        .reverse();

    return {
        next: function () {
            if (index >= keys.length){
                return {
                    done: true
                }
            } else {
                return{
                    done: false,
                    value: keys[index++]
                }
            }
        }
    }
}
