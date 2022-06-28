var total = 0

function calculate() {
    const weight = window.document.getElementById('txtweight').value    
    const height = window.document.getElementById('txtheight').value
    const age =  window.document.getElementById('txtage').value   
    const r = window.document.getElementById('txtres')
    const fsex = document.getElementsByName('radsex')
    
    if (weight == 0 || height == 0 || age == 0) {
        alert('Please verify your information.') 
    }
    if (fsex[0].checked) { //man  
        total = 88.362 + (13.397 * Number(weight)) + (4.799 * Number(height)) - (5.677 * Number(age))
    }
    else if (fsex[1].checked) { //woman
        total = 447.593 + (9.247 * Number(weight)) + (3.098 * Number(height)) - (4.330 * Number(age))
    }
    r.innerHTML = `Your Basal Metabolic Rate is: ${total.toFixed(2)} kcal.`
}

var bike = false
var run = false
var swim = false
var walk = false
var wl = false
var lazy = false

function check() {
    var sports = window.document.getElementById('txtsports').value
    var r2 = window.document.getElementById('sportsres')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (sports === 'cycling') {
        bike = true
        r2.innerHTML = 'You chose cycling.'
        img.src = 'cycling.jpeg'
    } else if (sports === 'running') { 
        run = true
        r2.innerHTML = 'You chose running.'
        img.src = 'running.jpeg'
    } else if (sports === 'swimming'){
        swim = true
        r2.innerHTML = 'You chose swimming.'
        img.src = 'swimming.jpeg'
    } else if (sports === 'walking'){
        walk = true
        r2.innerHTML = 'You chose walking.'
        img.src = 'walking.jpeg'
    } else if (sports === 'weightlifting'){
        wl = true
        r2.innerHTML = 'You chose weight lifting.'
        img.src = 'weightlifting.jpeg'
    } else {
        lazy = true
        r2.innerHTML = 'You did not chose any exercise'
        img.src = 'lazy.jpeg'
    } 
    r2.appendChild(img)
    r2.style.textAlign = 'center'
}

var goalLoseWeight = false

function submit() {
    var goal = window.document.getElementById('txtgoal').value
    var r3 = window.document.getElementById('goalres')
    var img2 = document.createElement('img')
    img2.setAttribute('id', 'foto')

    if (goal === 'lose-weight') {
        goalLoseWeight = true
        r3.innerHTML = 'You chose lose weight.'
        img2.src = 'lose-fat.jpg'
    } else {
        goalLoseWeight = false
        r3.innerHTML = 'You chose gain weight.'
        img2.src = 'lose-fat.jpg'
    }
    r3.appendChild(img2)
    r3.style.textAlign = 'center'
}
    
function verify() {
    var r4 = window.document.getElementById('hoursres')
    if (total > 1800 && run && goalLoseWeight) {
        r4.innerHTML = 'you should exercise blablabla'
    } else {
        r4.innerHTML = 'opa'
    }
    
}
