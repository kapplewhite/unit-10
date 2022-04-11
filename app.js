function askName(){
    var name1 = prompt("what's your name?")
    return name1
}

function askConvert() {

    var option = prompt ('To convert from F to C, enter 1. From C to F, enter 2.');
}

function convertTemp(){
    do {
      
        if ((option != 1) && (option != 2)) {
          alert("please read instructions.")
        }
        
      } while ((option != 1) && (option != 2)) 
      
        if (option == 1) {
        
            var ftoc = prompt ("Please enter your temperture in Fahrenheit");
          if (isNaN(ftoc)==false){
            console.log(ftoc);
          var tc = (((ftoc - 32) * 5 ) / 9);
          alert(` ${name1}, ${ftoc} Fº is ${tc} in Cº`);
          } else {
            alert("Please restart and put in a number.");
          }
          
      } else if (option == 2) {
          var cal = prompt (`Please enter the temperture in Celsius`);
          if(isNaN(cal)==false){
            console.log(cal);
          var tf = (((cal * 9) / 5) + 32);
          alert(` ${name1}, ${cal} Cº is ${tf} in Fº`);
          } else {
            alert("Please restart and put in a number.");
          }
      }
}


var num1 = 9;

var num2 = 5;

var num3 = 32;

askName()

askConvert()

convertTemp()
