function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}


const numberofpersons = document.getElementById('number-of-persons');



function ammount() {
    document.getElementById('schlagsahne').innerHTML =  (400 * numberofpersons.value) + 'ml Schlagsahne'
    document.getElementById('milch').innerHTML =  (4 * numberofpersons.value) + 'EL Milch'
    document.getElementById('schokolade').innerHTML =  (100 * numberofpersons.value) + 'g Schokolade'
    document.getElementById('vanille-zucker').innerHTML =  (20 * numberofpersons.value) + 'g Vanille Zucker'
    document.getElementById('gelatine').innerHTML =  (8 * numberofpersons.value) + 'Blätter Gelatine'
    document.getElementById('himbeere').innerHTML =  (40 * numberofpersons.value) + 'g himbeere'
    document.getElementById('zucker').innerHTML =  (20 * numberofpersons.value) + 'g Zucker'

}











// Soljanka Script

window.addEventListener('resize', () => {
    let width_vw = document.documentElement.clientWidth;
    let Nav_list = document.getElementsByClassName('navigation')[0];
    
    if (width_vw > 1170) {
        Nav_list.style.display = "flex";
    } else {
        Nav_list.style.display = "none";
    }
});

function toggle_menu() {    
    let Nav_list = document.getElementsByClassName('navigation')[0];
    if (Nav_list.style.display !== "none") {
        Nav_list.style.display = "none";
    } else {
        Nav_list.style.display = "flex";
    }
}






// const number_of_persons = document.getElementById('multiplied-persons');


const ingredients = [
    {amount: 500, unit: 'g', name: 'Rindfleisch'},
    {amount: 500, unit: 'g', name: 'Schweinefleisch'},
    {amount: 5, unit: 'EL', name: 'Tomatenmark'},
    {amount: 3, unit: 'große', name: 'Zwiebel'},
    {amount: 720, unit: 'g', name: 'Letscho'},
    {amount: 700, unit: 'g', name: 'Gewürzgurken'},
    {amount: 700, unit: 'ml', name: 'passierte Tomaten'},
    {amount: 1000, unit: 'ml', name: 'Wasser'},
    {amount: 1, unit: 'TL', name: 'Paprikapulver (edelsüß)'},
    {amount: 1, unit: 'Becher', name: 'Schmand oder Saure Sahne (optional)'},
    {amount: 1, unit: 'Zitrone', name: '(optional)'}
];

function init_multiplied() {
    set_multiplied();
}

function set_multiplied() {
    let numberofpersons = document.getElementById('multiplied-persons');
    let ingredientsList = document.getElementById('ingredientslist');
    ingredientsList.innerHTML = '';
    for (let indexingredients = 0; indexingredients < ingredients.length ; indexingredients++) {
        if ((indexingredients - 100) % 2) {
        ingredientsList.innerHTML += `<li class='ingredients2'>
        ${ingredients[indexingredients].amount * numberofpersons.value} 
        ${ingredients[indexingredients].unit} 
        ${ingredients[indexingredients].name}
        </li>`;
    }
    else {
        ingredientsList.innerHTML += `<li class='ingredients'>
        ${ingredients[indexingredients].amount * numberofpersons.value} 
        ${ingredients[indexingredients].unit} 
        ${ingredients[indexingredients].name}
        </li>`;
    }
    console.log((indexingredients - 100) % 2);
}};