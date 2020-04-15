/* event.target.value */
let numberOfStudent = 1;

window.onload = function () {



  let regWords = /^[a-zA-Z\s]+$/;




  function buildTheCanva() {
    let canva = document.getElementById("canva");
    for (let i = 1; i < canva.childNodes.length; i++) {
      let newWidthForElement = 100 / ((canva.childNodes.length - 1));
      let newHeight = (canva.childNodes[i].offsetHeight / canva.offsetHeight) * 100;
      /* alert(newHeight); */
      canva.childNodes[i].setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color: white; position:relative;");
      if (i % 2 == 1) {
        let rateForSpecialElement = canva.childNodes[i].dataset.rate;
        canva.childNodes[i].childNodes[canva.childNodes[i].childNodes.length - 1].setAttribute("style", "width: " + 100 + "%;" + "height: " + rateForSpecialElement + "%;" + "background-color: blue; position:relative;");
        canva.childNodes[i].childNodes[canva.childNodes[i].childNodes.length - 1].setAttribute("data-color", "blue");
        canva.childNodes[i].childNodes[canva.childNodes[i].childNodes.length - 2].setAttribute("data-color", "white");
      }
    }
  }







  function onChangeInformation() {

    let newValue = event.target.textContent;

    if (event.target.dataset.surname) {
      if (newValue.length > 25 || newValue.search(regWords) == -1 || !(newValue)) {
        event.target.textContent = event.target.dataset.surname;
      }
      else {
        event.target.dataset.surname = event.target.textContent;
        let list = document.getElementsByClassName(event.target.className);

      }

    }
    if (event.target.dataset.name) {
      if (newValue.length > 25 || newValue.search(regWords) == -1 || !(newValue)) {
        event.target.textContent = event.target.dataset.name;
      }
      else {
        event.target.dataset.name = event.target.textContent;
        let list = document.getElementsByClassName(event.target.className);


      }

    }
    if (event.target.dataset.rate) {
      let numValue = Number(newValue);
      if (numValue == NaN || numValue > 100 || numValue <= 0) {
        event.target.textContent = event.target.dataset.rate;
      }
      else {
        event.target.setAttribute("data-rate", event.target.textContent);
        let canva = document.getElementById("canva");
        for (let i = 1; i < canva.childNodes.length; i++) {
          canva.childNodes[i].className;

          if (event.target.className == canva.childNodes[i].className) {
            if (i % 2 == 1) {
              let heightForWhiteDiv = 100 - Number(event.target.textContent);
              canva.childNodes[i].setAttribute("data-rate", event.target.textContent);
              canva.childNodes[i].childNodes[canva.childNodes[i].childNodes.length - 1].setAttribute("style", "width: " + 100 + "%;" + "height: " + event.target.textContent + "%;" + "background-color: blue; position:relative;");
              canva.childNodes[i].childNodes[canva.childNodes[i].childNodes.length - 2].setAttribute("style", "height: " + heightForWhiteDiv + "%;");
            }
          }
        }

      }

    }
  }


  let newName = document.getElementById("Name");
  let newSurname = document.getElementById("Surname");
  let GPA = document.getElementById("GPA");
  let buttonAddStudent = document.getElementById("buttonForAddingNewStudent");



  newName.oninput = function () {


    let newNameStr = newName.value;
    let newSurnameStr = newSurname.value;
    let GPAnum = Number(GPA.value);

    if (newNameStr.search(regWords) == -1 || !(newNameStr)) {

      buttonAddStudent.setAttribute("disabled", "disabled");
      newName.classList.add("error-style");
    }
    else {
      newName.classList.remove("error-style");
      /*  alert(GPAnum); */
      if ((0 < GPAnum && GPAnum <= 100) && newNameStr.search(regWords) !== -1 && newSurnameStr.search(regWords) !== -1) {
        buttonAddStudent.removeAttribute("disabled");
      }


    }

  }





  newSurname.oninput = function () {


    let newNameStr = newName.value;
    let newSurnameStr = newSurname.value;
    let GPAnum = Number(GPA.value);

    if (newSurnameStr.search(regWords) == -1 || !(newSurnameStr)) {

      buttonAddStudent.setAttribute("disabled", "disabled");
      newSurname.classList.add("error-style");
    }
    else {
      newSurname.classList.remove("error-style");
      if ((0 < GPAnum && GPAnum <= 100) && newNameStr.search(regWords) !== -1 && newSurnameStr.search(regWords) !== -1) {
        buttonAddStudent.removeAttribute("disabled");
      }
    }

  }





  GPA.oninput = function () {


    let newNameStr = newName.value;
    let newSurnameStr = newSurname.value;
    let GPAnum = Number(GPA.value);

    if (GPAnum > 100 || GPAnum <= 0) {

      buttonAddStudent.setAttribute("disabled", "disabled");
      GPA.classList.add("error-style");
    }
    else {
      GPA.classList.remove("error-style");
      if ((0 < GPAnum && GPAnum <= 100) && newNameStr.search(regWords) !== -1 && newSurnameStr.search(regWords) !== -1) {
        buttonAddStudent.removeAttribute("disabled");
      }


    }

  }



  function appearRate() {

    let listOfStudents = document.getElementById("listOfStudents");
    let lengthOfList = listOfStudents.childNodes.length;
    let name;
    let surname;

    for (let i = 0; i < lengthOfList; i++) {
      if (event.target.className == listOfStudents.childNodes[i].className) {
        listOfStudents.childNodes[i].setAttribute("data-class", event.target.className);
        listOfStudents.childNodes[i].className = "color";
        name = listOfStudents.childNodes[i].childNodes[1].dataset.surname;
        surname = listOfStudents.childNodes[i].childNodes[2].dataset.name;
        console.log(listOfStudents.childNodes[i].childNodes[2]);
        console.log(listOfStudents.childNodes[i].childNodes[1]);

        document.getElementById("fotterWithNameAndSurname").textContent = surname + " " + name;
      }
    }


    let h3WithRate = document.createElement('h1');
    h3WithRate.setAttribute("style", "position:absolute;bottom:50%;right:50%;color:red");
    let rate = event.target.parentNode.dataset.rate;

    h3WithRate.textContent = rate;
    event.target.parentNode.parentNode.appendChild(h3WithRate);

    if (event.target.dataset.color == 'blue') {
      let newWidthForElement = (event.target.parentNode.childNodes[0].offsetWidth / event.target.parentNode.parentNode.childNodes[0].offsetWidth) * 100;
      let newHeight = (event.target.parentNode.childNodes[0].offsetHeight / event.target.parentNode.childNodes[0].parentNode.offsetHeight) * 100;
      event.target.parentNode.childNodes[0].setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color: green; position:relative;")
    }

    else if (event.target.dataset.color == 'white') {
      let newWidthForElement = (event.target.offsetWidth / event.target.parentNode.offsetWidth) * 100;
      let newHeight = (event.target.offsetHeight / event.target.parentNode.offsetHeight) * 100;
      event.target.setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color: green; position:relative;");
    }

  }
  function disappearRate() {



    let listOfStudents = document.getElementById("listOfStudents");
    let lengthOfList = listOfStudents.childNodes.length;
    for (let i = 0; i < lengthOfList; i++) {
      if (listOfStudents.childNodes[i].dataset) {

        if (event.target.className == listOfStudents.childNodes[i].dataset.class) {
          listOfStudents.childNodes[i].className = listOfStudents.childNodes[i].dataset.class;
        }

      }


    }
    document.getElementById("fotterWithNameAndSurname").textContent = "";

    let color;
    if (event.target.dataset.color == 'blue') {

      let newWidthForElement = (event.target.parentNode.childNodes[0].offsetWidth / event.target.parentNode.childNodes[0].offsetWidth) * 100;
      let newHeight = (event.target.parentNode.childNodes[0].offsetHeight / event.target.parentNode.childNodes[0].parentNode.offsetHeight) * 100;

      color = event.target.parentNode.childNodes[0].dataset.color;

      event.target.parentNode.childNodes[0].setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color:" + color + "; position:relative;");

    }
    else if (event.target.dataset.color == 'white') {

      let newWidthForElement = (event.target.offsetWidth / event.target.parentNode.offsetWidth) * 100;
      let newHeight = (event.target.offsetHeight / event.target.parentNode.offsetHeight) * 100

      color = event.target.dataset.color;
      event.target.setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color:" + color + "; position:relative;");
    }


    let indexOfdeletingElement = event.target.parentNode.parentNode.childNodes.length - 1;
    let parentCanva = event.target.parentNode.parentNode;
    parentCanva.removeChild(parentCanva.childNodes[indexOfdeletingElement]);




  }



  let canva = document.getElementById("canva");
  function OnDeleteClick() {
    let className = event.target.className;
    let classCollection = document.getElementsByClassName(className);

    for (let i = classCollection.length - 1; i >= 0; i--) {
      classCollection[i].remove();
    }

    for (let i = 1; i < canva.childNodes.length; i++) {

      let newWidthForElement = 100 / ((canva.childNodes.length - 1));
      let newHeight = (canva.childNodes[i].offsetHeight / canva.offsetHeight) * 100;
      canva.childNodes[i].setAttribute("style", "width: " + newWidthForElement + "%;" + "height: " + newHeight + "%;" + "background-color: white;");
    }

    event.preventDefault();
  }
  let buttonSubmitAdding = document.getElementsByClassName("btn btn-primary")[0];
  buttonSubmitAdding.addEventListener("click", addNewStudent);


  function addNewStudent() {
    let surname = document.getElementById("Surname").value;
    let name = document.getElementById("Name").value;
    let rate = document.getElementById("GPA").value;
    let newStudent = document.createElement("tr");
    newStudent.className = numberOfStudent;
    let newDelete = document.createElement("td");
    newDelete.setAttribute("scope", "row");
    newDelete.className = numberOfStudent;

    let newA = document.createElement("a");
    newA.setAttribute("href", "");
    newA.className = numberOfStudent;
    newA.textContent = "Delete";
    newA.addEventListener("click", OnDeleteClick);
    newDelete.appendChild(newA);

    /*   let newNumber = document.createElement("td");
      newNumber.className = numberOfStudent;
      newNumber.setAttribute("scope", "row");
      newNumber.textContent = numberOfStudent; */

    let newSurname = document.createElement("td");
    newSurname.textContent = surname;
    newSurname.setAttribute("contenteditable", "true");
    newSurname.addEventListener("blur", onChangeInformation);
    newSurname.className = numberOfStudent;
    newSurname.setAttribute("data-surname", surname);

    let newName = document.createElement("td");
    newName.textContent = name;
    newName.className = numberOfStudent;
    newName.setAttribute("contenteditable", "true");
    newName.addEventListener("blur", onChangeInformation);
    newName.className = numberOfStudent;
    newName.setAttribute("data-name", name);

    let newRate = document.createElement("td");
    newRate.setAttribute("contenteditable", "true");
    newRate.textContent = rate;
    newRate.addEventListener("blur", onChangeInformation);
    newRate.setAttribute("data-rate", rate);
    newRate.className = numberOfStudent;
    /* newRate.setAttribute.setAttribute("data-rate",rate); */



    let newStudentForDiagram = document.createElement("div");
    let newStudentForDiagramColor = document.createElement("div");
    let newStudentForDiagramWhite = document.createElement("div");
    newStudentForDiagram.appendChild(newStudentForDiagramWhite);
    newStudentForDiagram.appendChild(newStudentForDiagramColor);

    newStudentForDiagram.setAttribute("data-rate", rate);
    newStudentForDiagram.addEventListener('mouseover', appearRate);
    newStudentForDiagram.addEventListener('mouseout', disappearRate);


    let heightForWhiteDiv = 100 - rate;
    let heightForColorDiv = rate;

    if (canva.childNodes.length == 1) {
      newStudentForDiagram.setAttribute("style", "height: " + 100 + "%;");
      canva.appendChild(newStudentForDiagram);
    }
    else {
      let newEmptyDivForDiagram = document.createElement("div");
      newEmptyDivForDiagram.className = numberOfStudent;

      newEmptyDivForDiagram.setAttribute("style", "height: " + 100 + "%;");
      canva.appendChild(newEmptyDivForDiagram);
      canva.appendChild(newStudentForDiagram);
    }

    newStudentForDiagramWhite.setAttribute("style", "height: " + heightForWhiteDiv + "%;");
    newStudentForDiagramColor.setAttribute("style", "height: " + heightForColorDiv + "%;");
    newStudentForDiagram.setAttribute("style", "height: " + 100 + "%;");

    newStudentForDiagram.className = numberOfStudent;
    newStudentForDiagramColor.className = numberOfStudent;
    newStudentForDiagramWhite.className = numberOfStudent;

    numberOfStudent++;
    buildTheCanva();

    newStudent.appendChild(newDelete);
    /* newStudent.appendChild(newNumber); */
    newStudent.appendChild(newSurname);
    newStudent.appendChild(newName);
    newStudent.appendChild(newRate);
    let listOfStudents = document.getElementById("listOfStudents");
    listOfStudents.appendChild(newStudent);
  }









}



