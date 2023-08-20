var sum = 0;
var list = [];
for (var index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        list.push(index);
        sum = sum + index;
    }
}
console.log(sum, list);
