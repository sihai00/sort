var common = require('./common.js')

// 选择排序
exports.selectSort = function(arr){
	var arr = arr
	for (var i = 0; i < arr.length; i++) {
		// 寻找【i，n）里的最小值
		minindex = i
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minindex]) {
				minindex = j
			}
		}
		// 交换数组值
		arr = common.swap(arr, i, minindex)
	}
	return arr
}
