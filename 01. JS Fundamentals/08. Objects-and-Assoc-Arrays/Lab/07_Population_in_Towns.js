function populationInTowns(input) {
    let population = new Map();
    for (let i = 0; i < input.length; i++){
        let [town, pop] = input[i].split(/ <-> /);
        pop = Number(pop);
        population.has(town) ? population.set(town, population.get(town) + pop) : population.set(town, pop);
    }

    for (let [city, sum] of population){
        console.log(`${city} : ${sum}`)
    }
}
populationInTowns(["Istanbul <-> 100000","Honk Kong <-> 2100004","Jerusalem <-> 2352344","Mexico City <-> 23401925","Istanbul <-> 1000"])