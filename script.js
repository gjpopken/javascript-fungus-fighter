// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// Todo 
// - STATE:create variable for fungus' health points and out attack points (can't go negative - check to make sure you have enough AP to make the attack?)
//// - RENDER: update how much AP and HP show on the screen
// - if the mushroom dies, replace it's 'walk' class with 'dead' class
// - if you don't have AP, make the mushroom's class be 'jump', and disable attribute to the attack buttons
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
function attack(cost, damage){
console.log('Attack calld. \nCost:', cost, '\nDamage:', damage);
//updates state 
enemyHP -= damage
ourAP -= cost
render()
}



// ! State
let ourAP = 100
let enemyHP = 100

// ! Render
function render() {
    // get the text for AP and HP
    const aPTextDiv = document.getElementsByClassName('ap-text')[0]
    //console.log(aPTextDiv);
    aPTextDiv.innerHTML = `
    ${ourAP} AP
    `

    const hPTextDiv = document.getElementsByClassName('hp-text')[0]
    console.log(hPTextDiv);
    hPTextDiv.innerHTML = `
    ${enemyHP} HP
    `
}