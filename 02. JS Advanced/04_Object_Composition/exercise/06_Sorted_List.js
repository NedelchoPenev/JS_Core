function sortedList() {
    return (function () {
        let list = [];

        function size() {
            return list.length;
        }

        function add(elemenent) {
            list.push(elemenent);
            reSort()
        }

        function remove(index) {
            if (isValidIndex(index)){
                list.splice(index, 1);
            } else {
                throw new Error;
            }

            reSort();
        }

        function get(index) {
            if (isValidIndex(index)){
                return list[index];
            } else {
                throw new Error;
            }
        }

        function isValidIndex(index) {
            return index >= 0 && list.length > index;
        }

        function reSort() {
            list = list.sort((a, b) => a - b);
        }

        let a =  {add, remove, get};
        a.__defineGetter__('size', size);

        return a;
    })();
}
