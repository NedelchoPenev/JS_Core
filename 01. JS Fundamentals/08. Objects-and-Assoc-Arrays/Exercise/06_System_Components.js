function systemComponents(input) {
    let systems = new Map();
    for (let line of input) {
        let [system, component, subComp] = line.split(' | ');
        if (!systems.has(system)) {
            systems.set(system, new Map);
        }
        if (!systems.get(system).has(component)) {
            systems.get(system).set(component, []);
        }
        systems.get(system).get(component).push(subComp);
    }
    
    let sortSystems = [...systems.keys()];
    sortSystems.sort(function (a, b) {
        let compA = [...systems.get(a).keys()];
        let compB = [...systems.get(b).keys()];
        if (compA.length != compB.length){
            return compA.length < compB.length;
        }

        return a > b;
    });

    for (let system of sortSystems) {
        console.log(system);
        let sortComponents = [...systems.get(system).keys()];
        sortComponents.sort((a, b) => systems.get(system).get(b).length - systems.get(system).get(a).length);
        for (let component of sortComponents) {
            console.log(`|||${component}`);
            let subComps = systems.get(system).get(component);
            subComps.forEach(p => console.log(`||||||${p}`));
        }

    }
}

systemComponents(["SULS | Main Site | Home Page", "SULS | Main Site | Login Page", "SULS | Main Site | Register Page",
    "SULS | Judge Site | Login Page", "SULS | Judge Site | Submittion Page", "Lambda | CoreA | A23",
    "SULS | Digital Site | Login Page", "Lambda | CoreB | B24", "Lambda | CoreA | A24", "Lambda | CoreA | A25",
    "Lambda | CoreC | C4", "Indice | Session | Default Storage", "Indice | Session | Default Security"]);