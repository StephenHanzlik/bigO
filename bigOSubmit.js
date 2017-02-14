//Write a function that is O(1)

let printItem = function(array, n) {
  console.log(array[n]);
}


//Write a function that is O(n)

let printLoop = function(array, n) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

//Write a function that is O(n^2)

let printLoop = function(array, n) {
  for (var i = 0; i < array.length; i++) {
    for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
};
