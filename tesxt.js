//bai 1
//  function findnumber(number){
//     number = parseInt(prompt("Nhập một số từ 4 đến 20"))
//     for ( i =4;i< number;i++){
//         if (i%2==0){
//             console.log(i)
//         }
//     }    
// }
// findnumber( )


// bai 3

// let text = document.getElementById("text")
// function numberOneTriangle(){
//     let line = ""
//     for(let i = 1; i <= 5; i++){
//         for(let j = 1; j<= i;j++){
//             line += "1"
//         }
//         line += "\n"
//     }
//     return line
// }
// text.innerText = numberOneTriangle();


//bai 4
function updateTime(k) { 
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
}
function currentTime() {
    var date = new Date(); 
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec  
    var t = setTimeout(currentTime, 1000); 
  }
  


  
  currentTime();