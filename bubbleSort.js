var common = require('./common.js')

// 冒泡排序 -- 前往后冒泡
exports.bubbleSort = function(arr){
	var arr = arr
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				arr = common.swap(arr, j, j+1)
			}
		}
	}

	return arr
}
// 冒泡排序 -- 后往前冒泡
exports.bubbleSort2 = function(arr){
	var arr = arr

	for (var i = 1; i < arr.length; i++) {
		for (var j = arr.length - 1; j > -1 + i; j--) {
			if (arr[j] < arr[j - 1]) {
				arr = common.swap(arr, j, j-1)
			}
		}
	}

	return arr
}
