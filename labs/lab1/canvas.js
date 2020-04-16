 window.onload = function() {
    var drawingCanvas = document.getElementById('smile');

    if(drawingCanvas && drawingCanvas.getContext) {
     var context = drawingCanvas.getContext('2d');
     // Рисуем окружность 
     context.strokeStyle = "#000";
     context.fillStyle = "#fc0";
     context.beginPath();
     context.arc(100,100,50,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем левый глаз 
     context.fillStyle = "#fff";
     context.beginPath();
     context.arc(84,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем правый глаз 
     context.beginPath();
     context.arc(116,90,8,0,Math.PI*2,true);
     context.closePath();
     context.stroke();
     context.fill();
     // Рисуем рот
     context.beginPath();
     context.moveTo(70,115);
     context.quadraticCurveTo(100,130,130,115);
     context.quadraticCurveTo(100,150,70,115); 
     context.closePath();
     context.stroke();
     context.fill();
    }
    var dialog = document.querySelector('dialog');
    document.querySelector('#openDialog').onclick = function() {
     dialog.show(); // Показываем диалоговое окно
    }
    document.querySelector('#closeDialog').onclick = function() {
     dialog.close(); // Прячем диалоговое окно
    }
    var myArr = ["Audi", "BMW", "Ford", "Honda", "Jaguar", "Nissan"];

    function showContent() {
      var temp, item, a, i;
      //get the template element:
      temp = document.getElementsByTagName("template")[0];
      //get the DIV element from the template:
      item = temp.content.querySelector("div");
      //for each item in the array:
      for (i = 0; i < myArr.length; i++) {
        //Create a new node, based on the template:
        a = document.importNode(item, true);
        //Add data from the array:
        a.textContent += myArr[i];
        //append the new node wherever you like:
        document.body.appendChild(a);
      }
    }
    
 
   
   }
