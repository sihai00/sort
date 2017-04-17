exports.quickSort = function(arr){
	return __quickSort(arr)
}
// 三路快速排序
// 1.选择数组中任一一个值
// 2.通过比较分为小于等于大于这个值的数组，递归继续拆分小于和大于数组到最小个数为1
// 3.合并小于等于大于数组
function __quickSort(arr){
	var arr = arr

	if (arr.length <= 1) {
		return arr
	}

	var midIndex = Math.floor(arr.length / 2)
	var left = []
	var right = []
	var mid = []

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < arr[midIndex]) {
			left.push(arr[i])
		}else if(arr[i] > arr[midIndex]){
			right.push(arr[i])
		}else if(arr[i] === arr[midIndex]){
			mid.push(arr[i])
		}
	}

	return __quickSort(left).concat(mid,__quickSort(right))
}