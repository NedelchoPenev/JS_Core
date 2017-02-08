function argumentInfo() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++){
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ": " + obj);
        if (!summary[type]){
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    let sortedTypes = [];
    for (let currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    sortedTypes = sortedTypes.sort(function (a, b) {
        a = a[1];
        b = b[1];
        return b - a;
    });

    for (let [type, value] of sortedTypes) {
        console.log(type + " = " + value);
    }
}
argumentInfo('cat', 42, 43, function () { console.log('Hello world!'); });