function calculate() {
    var txtw = window.document.getElementById('txtweight')    //men =88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
    var txth = window.document.getElementById('txtheight')    // woman = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
    var txta = window.document.getElementById('txtage')
    var r = window.document.getElementById('txtres')
    var fsex = document.getElementsByName('radsex')
    
    if (fsex[0].checked) { //man
        
        var total = 88362 + (13397 * Number(txtw.value)) + (4799 * Number(txth.value)) - (5677 * Number(txta.value))
    }
    
    else if (fsex[1].checked) { //woman
        
        var total = 447593 + (9247 * Number(txtw.value)) + (3098 * Number(txth.value)) - (4330 * Number(txta.value))
    }
    window.alert(`Your Basal Metabolic Rate is: ${total}.`)
    //r.innerHTML = `Your Basal Metabolic Rate is: ${total}.`
   
}