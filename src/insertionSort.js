function insertionSort(arr) {
  // your code here!

  var swap;
  var swapCount = 0;

   do{
     for (var i = 1, swapCount = 0; i < arr.length; i++){
         if (arr[i - 1]  > arr[i]) {
             swap = arr[i - 1];
             arr[i - 1] = arr[i];
             arr[i] = swap;
             swapCount +=1;
            }
      }
   } while(swapCount>0 );
   return arr;
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // let sortedArr = arr.sort(function(a, b) {
  //   return a - b
  // })
}
