// 交换数组下标值
// arr: 目标数组; start、end均为交换下标
exports.swap = function(arr, start, end){
	var arr = arr;
	var a = arr[start];

	arr[start] = arr[end];
	arr[end] = a;

	return arr;
}

// 给定一个范围，生成随机数组
// num: 数组元素; start: 范围起始值; end:范围结束值;
exports.randomNumber = function(num, start, end){
	var arr = [];
	var randomNum = 0;

	if (end < start) {
		return
	}

	while(arr.length < num){
		randomNum = Math.floor(Math.random()*(end - start + 1) + start);
		
		// 不去重
		arr.push(randomNum)

		// 去重
		// unique(arr, randomNum) && arr.push(randomNum);
	}

	return arr;
}

// 数组去重
function unique(arr, randomNum){
	// 数组为空直接返回
	if (arr.length === 0) {
		return true;
	}else{
		if (arr.indexOf(randomNum) < 0) {
			return true
		}else{
			return false
		}
	}
}
// 测试函数执行时间
exports.testFunTime = function(fun, arr){
	var startTime, endTime;

	startTime = new Date().getTime()
	// fun(arr)
	console.log(fun(arr))
	endTime = new Date().getTime()
	return ('执行时间为' + (endTime - startTime) / 1000 + 's')
}