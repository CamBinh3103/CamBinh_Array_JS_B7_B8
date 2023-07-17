// Hàm domId
 function domId(id) {
    return document.getElementById(id)
  };
//Hàm getNum
  var numbers = [];
  function getNum() {
      var number = Number(domId('inputNum').value);
      numbers.push(number);
      domId('arrayNum').innerHTML = numbers;
  }
  
// Bài 1: TÍNH TỔNG CÁC SỐ DƯƠNG TRONG MẢNG
  function calcSum() {
      var total = 0;
      for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
              total += numbers[i];
          }
      }
      domId('sum').innerHTML = total;
  }
  
  
//Bài 2: ĐẾM CÓ BAO NHIÊU SỐ DƯƠNG TRONG MẢNG
  function countSum() {
      var count = 0;
      for (var i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
              count++;
          }
      }
      domId('count').innerHTML = count;
  }
  
// Bài 3: TÌM SỐ NHỎ NHẤT TRONG MẢNG
  function findMin(){
      var min = numbers[0];
      for(var i = 0; i < numbers.length; i++){
          if (min > numbers[i]){
              min = numbers[i];
          }
      }
      domId('min').innerHTML = min;
  }
  
//Bài 4: TÌM SỐ DƯƠNG NHỎ NHẤT TRONG MẢNG
  function findMinPos(){
      var positive = [];
      for(var i = 0; i < numbers.length; i++){
          if(numbers[i] > 0){
              positive.push(numbers[i]);
          }
      }
      if(positive.length > 0){
          var minPos = positive[0];
          for(var i =0; i < positive.length; i++){
              if(minPos>positive[i]){
                  minPos=positive[i];
              }
              domId('minPos').innerHTML = minPos;
          }
      }else
      domId('minPos').innerHTML = "không tìm thấy số dương";
  }
  
//Bài 5: TÌM SỐ CHẴN CUỐI CÙNG TRONG MẢNG. NẾU MẢNG KHÔNG CÓ GIÁ TRỊ CHẴN THÌ TRẢ VỀ -1
  function findLastEven(){
      var lastEven = 0;
      for(var i = 0; i < numbers.length; i++){
          if(numbers[i] % 2 == 0){
              lastEven = numbers[i];
          }
      }
      domId("lastEven").innerHTML = lastEven;
  }
  
//Bài 6: ĐỔI CHỖ 2 GIÁ TRỊ TRONG MẢNG THEO VỊ TRÍ (CHO NHẬP VÀO 2 GIÁ TRỊ MUỐN ĐỔI CHỖ GIÁ TRỊ)
  function changePos() {
      index1 = domId('inputIndex1').value;
      index2 = domId('inputIndex2').value;
  
      function change(a, b) {
          var c = numbers[a];
          numbers[a] = numbers[b];
          numbers[b] = c;
      }
      change(index1, index2);
      domId('ChangePosition').innerHTML = "Sau khi đổi " + numbers;
  }
  
//Bài 7: SẮP XÉP MẢNG THEO THỨ TỰ TĂNG DẦN
  function sortIn() {
      var result = numbers.sort(function (a, b) {
          return a - b;
      });
      domId('inCrease').innerHTML = result;
  }
  
//Bài 8: TÌM SỐ NGUYÊN ĐẦU TIÊN TRONG MẢNG. NẾU MẢNG KHÔNG CÓ SỐ NGUYÊN TỐ THÌ TRẢ VỀ -1
  function checkPrime(number) {
      if (number < 2){
          return false;
      }
      for (var i = 2; i <= Math.sqrt(number); i++){
          if (number % i == 0){
              return false;
          } 
      }
      return true;
  }
  function findFirstPrime() {
      for (var i = 0; i < numbers.length; i++) {
          var firstPrime = 0;
          if (checkPrime(numbers[i])) {
              firstPrime = numbers[i];
              break
          } 
      }
      firstPrime === 0? domId("prime").innerHTML = "Không có số nguyên tố trong mảng" : domId("prime").innerHTML = firstPrime;
  }
  
//Bài 9: NHẬP THÊM 1 MẢNG SỐ THỰC, TÌM XEM TRONG MẢNG CÓ BAO NHIÊU SỐ NGUYÊN?
  var newNums = [];
  function getNewNum (){
      var newNum = Number(domId('inputNewNum').value);  
      newNums.push(newNum);
      domId('newNum').innerHTML = newNums;
  }
  function countInt(){
      var count = 0;
      for (var  i = 0; i < newNums.length; i++)
      if (Number.isInteger(newNums[i])){
          count++;
      } 
      domId('countInt').innerHTML = "Số nguyên " + count;
  }
  
//Bài 10: SO SÁNH SỐ LƯỢNG SỐ DƯƠNG VÀ SỐ LƯỢNG SỐ ÂM XEM SỐ NÀO NHIỀU HƠN
  function compareNum(){
      for (var pos = 0, neg = 0, i = 0; i < numbers.length; i++) {
          if (numbers[i] > 0) {
              pos++;
          } else {numbers[i] < 0 && neg++ }
      }
      if (pos < neg){
          domId('compare').innerHTML = "Số dương < Số âm ";
      } else if (pos > neg){
          domId('compare').innerHTML = "Số dương > Số âm ";
      } else {
          domId('compare').innerHTML = "Số dương = Số âm ";
      }
  }