function calculate() {
    var txtw = window.document.getElementById('txtweight')    
    var txth = window.document.getElementById('txtheight')    
    var txta = window.document.getElementById('txtage')
    var r = window.document.getElementById('txtres')
    var fsex = document.getElementsByName('radsex')

    if (txtw.value == 0 || txth.value == 0 || txta.value == 0) {
        alert('Please verify your information.')
        return total = ''
    }
    
    if (fsex[0].checked) { //man
        
        var total = 88.362 + (13.397 * Number(txtw.value)) + (4.799 * Number(txth.value)) - (5.677 * Number(txta.value))
      
        
    }
    
    else if (fsex[1].checked) { //woman
        
        var total = 447.593 + (9.247 * Number(txtw.value)) + (3.098 * Number(txth.value)) - (4.330 * Number(txta.value))
       
    }
    //window.alert(`Your Basal Metabolic Rate is: ${total}.`)
    r.innerHTML = `Your Basal Metabolic Rate is: ${total.toFixed(0)} kcal.`
   
}

function check() {
var txtsports = window.document.getElementById('sports')
var sports = txtsports.value
var r = window.document.getElementById('sportsres')
var img = document.createElement('img')
img.setAttribute('id', 'foto')

    if (sports === 'cycling') {
        r.innerHTML = 'You chose Cycling'
        img.src = 'cycling.jpeg'

        
    } else if (sports === 'running') { 
        r.innerHTML = 'You chose running'
        img.src = 'running.jpeg'
    } else if (sports === 'swimming'){
        r.innerHTML = 'You chose swimming'
        img.src = 'swimming.jpeg'
    } else if (sports === 'walking'){
        r.innerHTML = 'You chose walking'
        img.src = 'walking.jpeg'
    } else if (sports === 'weightlifting'){
        r.innerHTML = 'You chose weight lifting'
        img.src = 'weightlifting.jpeg'
    } else {
        r.innerHTML = 'You did not chose any exercise'
        img.src = 'lazy.jpeg'
    } 
    r.appendChild(img)
    r.style.textAlign = 'center'
    
    

} 

