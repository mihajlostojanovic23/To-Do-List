const addbtn = document.getElementById('add')
var plan = document.getElementById('plan')
var niz = []
var plans = document.getElementById('plans')
var tekst = document.getElementById('tekst')
var deletAll = document.getElementById('delAll')
var i = 1
var planit = document.getElementsByClassName('plan-item')




addbtn.onclick = () => {
    if(plan.value == "") {
        alert('Unesti plan')
    }
    else {
    click()
    plan.value=""
}

}



function click() {
    
var inputValue = plan.value
  var plans = document.getElementById('plans')  
  var planItem = document.createElement('div');
  var clearItem = document.createElement('img');
  planItem.setAttribute('class', 'plan-item')
  clearItem.setAttribute('src', 'img/delete.svg')
  clearItem.setAttribute('class', 'clear')
  clearItem.setAttribute('onclick','remove()')
  niz.push(planItem)
  console.log(niz)
  console.log(niz.length)
  planItem.innerHTML = niz.length + "  " +  inputValue;
  plans.appendChild(planItem)
  planItem.appendChild(clearItem)

  localStorage.setItem(inputValue, inputValue)
}


function remove() {    
    var clear = document.getElementsByClassName('clear') 
    for (var i=0; i<clear.length; i++) {
        clear[i].onclick = function()  {
            this.parentNode.remove()
            niz.length--;
            console.log(niz.length)
            console.log(this.value)
            
        }
    }   
}

plan.addEventListener('keyup', function (event){
    
    if(plan.value == "") {
        alert('Unesite plan')
    }
    else if(event.key == "Enter") {
        click()
        plan.value=""
    }
})

deletAll.onclick = () => {
    del()
}
function del() {
    var plans = document.getElementById('plans')
    while (plans.hasChildNodes()) {
        plans.removeChild(plans.firstChild);
        niz.shift()
}

console.log(niz)
}
