function transformMe(arr) {
  //sort original array
	arr.sort(function(a, b) {
		return a - b;
	});
  //need to clone the original array so we can preserve its sorted state
	//when we run reverse() function
  var tempArr = arr.slice();

	return arr.concat(tempArr.reverse()).concat(tempArr.reverse());
}

var array1 = [3,1,4,5,2];
array1 = transformMe(array1);
console.log(array1);
