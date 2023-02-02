//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

//Add new student
function addNewStudent(){

  try {

  var table = document.getElementById("myTable");
  var tableLength=Math.ceil(document.getElementById("myTable").rows.length/2);
  var row = table.insertRow(document.getElementById("myTable").rows.length);
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  let td = document.createElement('td');
  td.innerHTML =  '<input type="checkbox" class="checkbox" onclick="onClickCheckBox(this);"/><br/><br/><img src="down.png" width="25px" onclick="dropDownRow(this)"/>';
  
  row.appendChild(td); 
  row.insertCell(1).innerHTML="Student"+" "+tableLength;
  row.insertCell(2).innerHTML="Teacher"+" "+tableLength;
  row.insertCell(3).innerHTML="Approved";
  row.insertCell(4).innerHTML="Spring";
  row.insertCell(5).innerHTML="Lecturer";
  row.insertCell(6).innerHTML=tableLength.toString()+(tableLength+1).toString()+(tableLength+2).toString()+(tableLength+3).toString()+(tableLength+4).toString();
  row.insertCell(7).innerHTML="100%";
  row.insertCell(8);
 
  var newRow = table.insertRow(document.getElementById("myTable").rows.length);
  newRow.setAttribute("class","dropDownTextArea");
  
  let tdData = document.createElement('td');
  tdData.setAttribute("colspan",8);
  tdData.innerHTML =  'Advisor:<br/><br/>Award Details<br/>Summer 1-2014(TA)<br/>Budget Number:<br/>Tuition Number:<br/>Comments:<br/><br/><br/>Award Status:<br/><br/><br/>'; 
  newRow.appendChild(tdData); 

  alert("You have added a new record!");

  } catch (error) {
    alert("Something went wrong!");
  }

}

//on check box click display delete & edit button
function onClickCheckBox(index){

  var selectedRow=index.parentNode.parentNode.rowIndex; 
  if(index.checked){
  
  document.getElementById("myTable").rows[selectedRow].style.backgroundColor="yellow";
  document.getElementById("submitButton").style.backgroundColor="orange";
  document.getElementById("submitButton").setAttribute("disabled","false");
  document.getElementById("submitButton").style.cursor="pointer";
  document.getElementById("myTable").rows[selectedRow].cells[8].innerHTML='<td><button id="deleteButton" onclick="deleteRowDetails(this);">Delete</button><br><button id="editButton" onclick="editRowDetails()">Edit</button></td>';

  }else{
    document.getElementById("myTable").rows[selectedRow].style.backgroundColor="white";
    document.getElementById("submitButton").style.backgroundColor="grey";
    document.getElementById("submitButton").style.cursor="";
    document.getElementById("deleteButton").remove();
    document.getElementById("editButton").remove();
  }
 
}

function deleteRowDetails(index){
  var selectedRow=index.parentNode.parentNode.rowIndex; 
  document.getElementById("myTable").deleteRow(selectedRow+1);
  document.getElementById("myTable").deleteRow(selectedRow);

  alert("Record is deleted!");

}

function editRowDetails(){ 
  edit = prompt("Edit the Records!","");
  
}

const boolean = "true";

function dropDownRow(row) 
{  
 var selectedRow=row.parentNode.parentNode.rowIndex; 
 document.getElementsByClassName('dropDownTextArea')[Math.floor(selectedRow/2)].style.display='block';
 if (boolean) {
    descRow.style.display = "table-cell";
    boolean = false;
  } else {          
    descRow.style.display = "none";
    boolean = true;
  }

}


Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");