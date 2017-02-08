function orderRects(input) {
    let rects = [];

    for (let line of input)  {
        let rect = (function () {
            let current = {
                width: Number(line[0]),
                height: Number(line[1]),
                area: () => current.width * current.height,
                compareTo: function (other) {
                    let result = other.area() - current.area();
                    return result || (other.width - current.width)
                }
            };
            return current;
        })();
        rects.push(rect);
    }

    rects.sort((a,b) => a.compareTo(b));
    return rects;
}
console.log(orderRects([[3, 4], [5, 3], [3, 4], [3, 5], [12, 1]]));
