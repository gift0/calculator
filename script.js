//function to display value  
     function cal (val){
           document.getElementById("result") .value += val 
     }
//function to solve and get result
     function solve () {
           let x = document.getElementById("result").value
           let y = eval (x)
           document.getElementById ("result").value = y
     }
//function to clear anything on the screen
      function clr (){
            document.getElementById ("result").value = ""
      }
     