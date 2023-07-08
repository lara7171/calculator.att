function calculationProfit() {
  let S = calculation.profit.value;
  let P = Number(calculation.deposit.value);
  let I = calculation.depositRate.value;
  let t = calculation.period.value;
  let j = calculation.intervalCapitalization.value;
  let K = calculation.daysInYear.value;
  calculation.deposit.value = Number(document.getElementById("rangeDeposit").value);


  if (document.getElementsByName("choice")[0].checked) {
    let n = 0;
    if(t % j != 0 ){
     n = Math.floor(t / j);
    }else{
      n = t / j;
    }
    let arr = [];
    arr.length = n;
    sum = 0;

    for (let i = 0; i < n; i++) {

      arr[i] = Number((P * I * j / K) / 100);


      sum += Number(arr[i]);
      
      P += Number(arr[i]);
      

    }
    document.getElementById("profit").value = Math.floor(sum);
  }


  else {
    S = Number((P * I * t / K) / 100);
    document.getElementById("profit").value = Math.floor(S);
  }


}