exports.mergeSort = function(arr){
	return __mergeSort(arr)	
}
// 归并排序
// 2分数组，递归拆分到每个数组只剩一个元素
function __mergeSort(arr){
	if (arr.length == 1) {
		return arr
	}

	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid);

	return __merge(__mergeSort(left),__mergeSort(right));
}
// 合并数组，通过比较左右两数组的元素，合并成新数组
function __merge(left, right){
	var res = [];
	// 优化：如果左侧数组的最大值比右侧数组的最小值小，则直接合并返回
	if (left[left.length] < right[0]) {
		return left.concat(right)
	}

	while(left.length > 0 && right.length > 0){
		if (left[0] < right[0]) {
			res.push(left.shift());
		}else{
			res.push(right.shift());
		}
	}

	return res.concat(left).concat(right);
}
