function calculate() {
    var txtw = window.document.getElementById('txtweight')    //men =88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
    var txth = window.document.getElementById('txtheight')    // woman = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
    var txta = window.document.getElementById('txtage')
    var r = window.document.getElementById('txtres')
    var fsex = document.getElementsByName('radsex')
    
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
        r.innerHTML = 'You chose Running'
        img.src = 'running.jpeg'
    } else if (sports === 'swimming'){
        r.innerHTML = 'You chose Swimming'
        img.src = 'swimming.jpeg'
    } else if (sports === 'walking'){
        r.innerHTML = 'You chose Walking'
        img.src = 'walking.jpeg'
    } else if (sports === 'weightlifting'){
        r.innerHTML = 'You chose Weight Lifting'
        img.src = 'weightlifting.jpeg'
    } else {
        r.innerHTML = 'You did not chose any exercise'
        img.src = 'lazy.jpeg'
    } 
    r.appendChild(img)
    r.style.textAlign = 'center'
    
    

} 
