function remainder(n) {
var arr = [];
var newArr = [];
for (let i = 1; i <= n; i++) {
	arr.push(i);
	}
	for (let a = 0; a < arr.length; a++) {
	if(arr[a] % 2 == 0 && arr[a] % 3 == 0 && arr[a] % 5 == 0) {
		newArr.push('yu-gi-oh');
		} else if (arr[a] % 2 == 0 && arr[a] % 3 == 0) {
			newArr.push('yu-gi');
			} else if (arr[a] % 2 == 0 && arr[a] % 5 == 0) {
				newArr.push('yu-oh');
				} else if(arr[a] % 3 == 0 && arr[a] % 5 == 0) {
					newArr.push('gi-oh');
					} else if (arr[a] % 2 == 0) {
						newArr.push('yu');
						} else if (arr[a] % 3 == 0) {
							newArr.push('gi');
							} else if (arr[a] % 5 == 0) {
								newArr.push('oh');
								} else {newArr.push(arr[a]);
								}
	}
	return newArr;
}
console.log(remainder(50));
