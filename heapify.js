var common = require('./common.js')
// 随机数组生成堆
// 任何一个节点都不大于它的父亲节点
// 数组从0开始，设任意节点为 i；其父节点为 Math.ceil(i/2) - 1
exports.heapify = function(arr){
	var arr = arr
	// 遍历随机数组
	for (var i = 1; i < arr.length; i++) {
		// 按堆规则生成堆
		shiftUp(i)
	}
	// 若新插入节点比它的父节点大，则交换位置，直到最高层
	function shiftUp(i){
		while (i > 0 && arr[i] > arr[Math.ceil(i/2) - 1]) {
			arr = common.swap(arr, i, Math.ceil(i/2) - 1);
			i = Math.ceil(i/2) - 1;
		}
	}

	return arr
}
// 堆排序
// 把堆的最大值arr[0]弹出，用堆最末元素顶替arr[0]
// 若arr[0]比子树的最大值小，则交换位置，直到最底层
exports.heapifySort = function(arr){
	var arr = arr,
		newArr = [],
		len = arr.length;
	// 维持堆
	function shiftDown(i){
		// 判断左子树是否存在
		while(2*i+1 <= arr.length - 1){
			// j为需要交换的位置
			var j = 2*i+1;
			// 判断右子树是否存在
			if (j + 1 <= arr.length - 1 && arr[j] < arr[j+1]) {
				j += 1;
			}
			// 判断当前节点是否比左右子树大
			if (arr[i] >= arr[j]) {
				break;
			}

			arr = common.swap(arr, i, j)
			i = j
		}
	}
	// 堆排序
	for (var i = 0; i < len; i++) {
		arr = common.swap(arr, 0, arr.length - 1);
		newArr.unshift(arr.pop())
		if (arr.length > 1) {
			shiftDown(0)
		}
	}

	return newArr;
}
