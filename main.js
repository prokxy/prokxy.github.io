var prayers = document.getElementById('prayers')
var owned1 = document.getElementById('ownedCharacter1').innerText
var owned2 = document.getElementById('ownedCharacter2').innerText
var prayersMaking = document.getElementById('prayersMaking').innerText


console.log(owned1.innerText)
var owned2Value = owned2.innerText


// Cheat in starter money
prayers.innerText = 10


function buy1() {
    if (prayers.innerText >= 10) {
        owned1.innerText ++
        prayers.innerText = parseInt(prayers.innerText) - 10
        document.getElementById('ownedCharacter1').innerText ++
        owned1 ++
    } 
}
function buy2() {
    if (prayers.innerText >= 100) {
        owned2.innerText ++
        prayers.innerText = parseInt(prayers.innerText) - 100
        document.getElementById('ownedCharacter2').innerText ++
        owned2 ++
    } 
}



function prayersAdd() {
    prayers.innerText = parseInt(prayers.innerText) + 1 * owned1
    prayers.innerText = parseInt(prayers.innerText) + 5 * owned2
}
setInterval(prayersAdd, 1000)

