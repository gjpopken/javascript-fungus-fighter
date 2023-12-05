// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Todo 
//// - STATE:create variable for fungus' health points and out attack points (can't go negative - check to make sure you have enough AP to make the attack?)
//// - RENDER: update how much AP and HP show on the screen
//// - if the mushroom dies, replace it's 'walk' class with 'dead' class
//// - if you don't have AP, make the mushroom's class be 'jump', and disable attribute to the attack buttons
// - STRETCH

function onReady() {
    console.log("Ready to go!")

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!


    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


onReady()


// ! Event

// When on of the attacks is clicked
function attack(cost, damage) {
    console.log('Attack calld. \nCost:', cost, '\nDamage:', damage);
    //updates state 
    enemyHP -= damage
    ourAP -= cost
    checkIfDead()
    checkIfLowHealth()
    render()
}

function checkIfDead() {
    //console.log(document.getElementsByClassName('freaky-fungus'));
    if (enemyHP <= 0) {
        document.getElementsByClassName('freaky-fungus')[0].classList.replace('walk', 'dead')
        //resets hp so that it doesn't go below 0
        enemyHP = 0
        disableAttacks()
    }
    if (ourAP <= 0) { // In the case of a tie, it will appear as though the fungus loses
        document.getElementsByClassName('freaky-fungus')[0].classList.replace('walk', 'jump')
        ourAP = 0
        // get the buttons to disable them
        disableAttacks()
    }

    // A function to disable the attack buttons
    function disableAttacks() {
        const buttons = document.getElementsByTagName('button')
        //console.log(buttons);
        for (let button of buttons) {
            button.setAttribute('disabled', 'true')
        }
    }
}

function checkIfLowHealth () {
// We want to set the critial status to true if the fungus' health is below 50, and false if it gets above
// if it is critical, then we activate its healing ability
let healing
if (enemyHP <= 50) {
    criticalStatus = true
    console.log('health is critical');
} else {
    criticalStatus = false
    console.log('health is not critical');
}
if (criticalStatus) {
    console.log('activate healing');
    healing = setInterval(healingPower, 1000, 1)
} else { // breaks the interval timer
    clearInterval(healing)
    healing = null
}
}

// Function that increases the fungus' health by a certain amount
function healingPower(amount) {
    console.log('in healing power', amount);
    enemyHP += amount
    console.log(enemyHP);
    //checkIfLowHealth() this made it heal way too much
    render()
}



// ! State
let ourAP = 100
let enemyHP = 100
let criticalStatus = false

// ! Render
function render() {
    // get the text for AP and HP
    const aPTextDiv = document.getElementsByClassName('ap-text')[0]
    //console.log(aPTextDiv);
    aPTextDiv.innerHTML = `
    ${ourAP} AP
    `

    const hPTextDiv = document.getElementsByClassName('hp-text')[0]
    //console.log(hPTextDiv);
    hPTextDiv.innerHTML = `
    ${enemyHP} HP
    `

    // STRETCH
    //  update the meters' values
    const apmeter = document.getElementById('ap-meter')
    const hpmeter = document.getElementById('hp-meter')
    //console.log(apmeter);
    apmeter.value = ourAP
    hpmeter.value = enemyHP
}