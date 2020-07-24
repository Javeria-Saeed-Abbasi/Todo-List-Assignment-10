var list = document.getElementById('myUL');

function inputItem(){
    var myInupt = document.getElementById('myInput');
    console.log(myInupt.value);
    
    if(myInput.value == "")
{
alert("Enter something");
}

    //create li
    var li = document.createElement('li');
    var liText = document.createTextNode("myInput.value");
    li.appendChild(liText);

    //create delete 
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "btn-success");
    delBtn.setAttribute("onclick", "delet('this')");
    delBtn.appendChild(delText);

    // create edit btn
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editbtn.appendChild(editText)
    editbtn.setAttribute("class", "btn1")
    editbtn.setAttribute("onclick","editItem('this')");



    li.appendChild(delBtn);
    li.appendChild(editbtn)
    list.appendChild(li);

    myInupt.value = "";

}



function delet(e){
   e.parentNode.remove();
}

function deleteAll() {
    list.innerHTML = ""
    }
    function editItem(e){
    // e.parentNode.firstChild.nodeValue = "JSA"
    var val =e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value", val)
    // console.log(e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue= editValue
    // console.log(editValue)
    
    }