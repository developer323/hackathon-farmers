function formSubmission() {
  var year = document.getElementById("year").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;
  console.log(year, make, model);
  
  if(year==="2020" && model ==="3" && make==="tesla"){
    document.getElementById("initial-quote").innerHTML = "2000 a month is your payment";

  } else if(year=== "2020" && model==="corvette" && make ==="chevrolet"){
    document.getElementById("initial-quote").innerHTML = "1000 a month is your payment";

  } else if(year==="2019"&& model==="highlander"&& make ==="toyota"){
    document.getElementById("initial-quote").innerHTML = "1000 a month is your payment";
   
  } 
  else if (year===""|| model===""||make==="" ) { 
    document.getElementById("initial-quote").innerHTML = "Please fill out everything";

  } else {
    document.getElementById("initial-quote").innerHTML = "Please fill the data correctly";

  }
  

  }

function formComparison(){
 
  document.getElementById("comparisons").innerHTML = "tesla model 3";

}

