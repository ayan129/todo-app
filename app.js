var list = document.getElementById('list')

function addtodo() {
    var todoitems = document.getElementById('todo-item')
    var li = document.createElement('li')
    var text = document.createTextNode(todoitems.value)
    li.appendChild(text)   //ab humne upper list target keyawa he jo html me he ab hum usko append krdege

    var dltbtn = document.createElement('button')
    var dlttext = document.createTextNode('Delete')

    var editbtn = document.createElement('button')
    var edittext = document.createTextNode('edit')

editbtn.appendChild(edittext)
li.appendChild(editbtn)
list.appendChild(li)


    dltbtn.appendChild(dlttext)
    dltbtn.setAttribute("onclick","deleteitem(this)") // aur isme hum  'iske andar ase jo bhe likhenge wo vge jaiga' // this krneke ke bd line no 1204 me hum aik koi sa bhe perimiter pass krdeege joke neche bhe wuhe name se krna huga isse wo pora khud uth kr ajaiga\

    dltbtn.setAttribute("class","ayan")
    editbtn.setAttribute("class","ayan") 
    list.setAttribute("class","margin") 

editbtn.setAttribute("onclick","edititem(this)")

    li.appendChild(dltbtn)

    list.appendChild(li)

    list.appendChild(li)

    todoitems.value = " "

}
function deleteitem(ops){

// console.log(ayan)
ops.parentNode.remove()
}


function deltall(){

list.innerHTML = "  "         // inner html use krengey jab bhe hune waha se kuxh nikalna huga


}

function edititem(ed){
console.log(ed.parentNode.firstChild.nodeValue)

var val = prompt("ENTER EDIT VALUE",ed.parentNode.firstChild.nodeValue)
   
ed.parentNode.firstChild.nodeValue = val


}
