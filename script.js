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
    checkIfDead();
    render()
}

function checkIfDead() {
    //console.log(document.getElementsByClassName('freaky-fungus'));
    if (enemyHP <= 0) {
        document.getElementsByClassName('freaky-fungus')[0].classList.replace('walk', 'dead')
        //resets hp so that it doesn't go below 0
        enemyHP = 0
    }
    if (ourAP <= 0) { // In the case of a tie, it will appear as though the fungus loses
        document.getElementsByClassName('freaky-fungus')[0].classList.replace('walk', 'jump')
        ourAP = 0
        // get the buttons to disable them
        disableAttacks();
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



// ! State
let ourAP = 100
let enemyHP = 100
let attacks = [
    {
        attackName: 'Arcane Scepter',
        'AP Cost': 12,
        'HP Damage': 14
    },
    {
        attackName: 'Entangle',
        'AP Cost': 23,
        'HP Damage': 9
    },
    {
        attackName: 'Dragon Blade',
        'AP Cost': 38,
        'HP Damage': 47
    },
    {
        attackName: 'Star Fire',
        'AP Cost': 33,
        'HP Damage': 25
    },
]

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
}