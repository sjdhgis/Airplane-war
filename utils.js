//生成随机数
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//用来检测两个对象之间是否发生了碰撞，如果碰撞了返回true， 反之返回false
// x,y, width, height
// function isCollide(objA, objB) {
// 	return (Math.abs(objA.x - objB.x) < Math.max(objA.width, objB.width)) &&
// 		(Math.abs(objA.y - objB.y) < Math.max(objA.height, objB.height));
// }

//  更新版碰撞检测函数
function isCollide(objA, objB){
	return (Math.abs(objA.x+objA.width/2 - objB.x-objB.width/2) < (objA.width/2+objB.width/2)) &&
			(Math.abs(objA.y+objA.height/2 - objB.y-objB.height/2) <(objA.height/2+objB.height/2));
	
}

//判断单个对象是否和某个数组中的对象发生了碰撞
function isCollideOneAndGroup(objA, objArr) {
	for (let i = 0; i < objArr.length; i++) {
		if (isCollide(objA, objArr[i])) {
			return objArr[i];
		}
	}
}

//判断两个数组中的对象是否发生了碰撞
function isCollideGroup(arrA, arrB) {
	for (let i = 0; i < arrA.length; i++) {
		for (let j = 0; j < arrB.length; j++) {
			if (isCollide(arrA[i], arrB[j])) {
				return [arrA[i], arrB[j]];
			}
		}
	}
}

//从数组中删除指定的元素 
// 第一个参数：数组，第二个参数，要删除的元素
function arrRemove(arr, obj) {
	var index = arr.indexOf(obj);
	if (index !== -1) {
		arr.splice(index, 1);
	}
}
