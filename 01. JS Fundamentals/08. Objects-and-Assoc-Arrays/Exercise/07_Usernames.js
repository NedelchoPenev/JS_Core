function usernames(input) {
    let names = new Set();
    for (let name of input) {
        names.add(name);
    }
    
    let sortedNames = [...names].sort(function (a, b) {
        if (a.length != b.length){
            return a.length - b.length;
        }

        return a.localeCompare(b);
    });

    sortedNames.forEach(n => console.log(n));
}

usernames(["Ashton","Kutcher","Ariel","Lilly","Keyden","Aizen","Billy","Braston"]);