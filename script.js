// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Todo 
//// - STATE:create variable for fungus' health points and out attack points (can't go negative - check to make sure you have enough AP to make the attack?)
//// - RENDER: update how much AP and HP show on the screen
//// - if the mushroom dies, replace it's 'walk' class with 'dead' class
//// - if you don't have AP, make the mushroom's class be 'jump', and disable attribute to the attack buttons
// - STRETCH create a way to increment the health of the shroom while it's health is low. It should activate when it is below 50, and stop healing when it reaches 100 again
// whenever its health changes, it should check to see if it's below 50 and if it is currently healing. If its below 50 and it hasn't started healing, start. if not, it shouldn't do anything


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
    checkHealthStatus()
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
}

// A function to disable the attack buttons
function disableAttacks() {
    const buttons = document.getElementsByTagName('button')
    //console.log(buttons);
    for (let button of buttons) {
        button.setAttribute('disabled', 'true')
    }
}

// a function to check if it's health is below 50 and if it's currently healing
function checkHealthStatus() {
    if (enemyHP < 50 && !criticalStatus) {
        criticalStatus = true
        console.log('start healing');
        healer = setInterval(healingPower, 1000, 1) // i need a way to access the original interval that was set, and clear it when health is back up
    } else if (enemyHP >= 75 && criticalStatus) {
        !criticalStatus
        clearInterval(healer)
        healer = null
        console.log('stop healing');
    } else if (enemyHP < 50 && criticalStatus) {
        console.log('continue healing')
    }
} 



// Function that increases the fungus' health by a certain amount
function healingPower(amount) {
    console.log('in healing power', amount);
    enemyHP += amount
    console.log(enemyHP)
    checkHealthStatus()
    render()
}



// ! State
let ourAP = 100
let enemyHP = 100
let criticalStatus = false
let healer

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