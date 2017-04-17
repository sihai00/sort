var common = require('./common.js')

// 插入排序
exports.insertSort = function(arr){
	var arr = arr
	
	for (var i = 1; i < arr.length; i++) {
		// 寻找元素arr[i]适合插入的位置
		for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
			common.swap(arr, j, j-1)
		}
	}

	return arr
}

// 优化插入排序 -- 减少数组交换赋值的操作
exports.insertSort2 = function(arr){
	var arr = arr
	
	for (var i = 1; i < arr.length; i++) {
		// 寻找元素arr[i]适合插入的位置，等遍历完再赋值
		var min = arr[i]
		for (var j = i; j > 0 && arr[j - 1] > min; j--) {
			// 如果前一个值比当前值大，则把前一个值移到当前值的位置，继续进行比较
			arr[j] = arr[j - 1]
		}
		// 此时j为合适的位置，赋值
		arr[j] = min
	}

	return arr
}
