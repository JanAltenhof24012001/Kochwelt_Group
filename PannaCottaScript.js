function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}


const numberofpersons = document.getElementById('number-of-persons');



function ammount() {
    document.getElementById('schlagsahne').innerHTML =  (100 * numberofpersons.value) + 'ml Schlagsahne'
    document.getElementById('milch').innerHTML =  (1 * numberofpersons.value) + 'EL Milch'
    document.getElementById('schokolade').innerHTML =  (25 * numberofpersons.value) + 'g Schokolade'
    document.getElementById('vanille-zucker').innerHTML =  (5 * numberofpersons.value) + 'g Vanille Zucker'
    document.getElementById('gelatine').innerHTML =  (2 * numberofpersons.value) + 'Blätter Gelatine'
    document.getElementById('himbeere').innerHTML =  (10 * numberofpersons.value) + 'g himbeere'
    document.getElementById('zucker').innerHTML =  (5 * numberofpersons.value) + 'g Zucker'
    document.getElementById('eier').innerHTML =  (1 * numberofpersons.value) + 'ei(er)'
    document.getElementById('wasser').innerHTML =  (100 * numberofpersons.value) + 'ml Wasser'
    document.getElementById('mehl').innerHTML =  (300 * numberofpersons.value) + 'g Mehl'
    document.getElementById('hackfleisch').innerHTML =  (200 * numberofpersons.value) + 'g Hackfleisch'
    document.getElementById('zwiebel').innerHTML =  (1 * numberofpersons.value) + 'Zwiebel'
    
}

function MantiAmmount() {
    document.getElementById('eier').innerHTML =  (1 * numberofpersons.value) + 'Ei(er)'
    document.getElementById('wasser').innerHTML =  (100 * numberofpersons.value) + 'ml Wasser'
    document.getElementById('mehl').innerHTML =  (300 * numberofpersons.value) + 'g Mehl'
    document.getElementById('hackfleisch').innerHTML =  (200 * numberofpersons.value) + 'g Hackfleisch'
    document.getElementById('zwiebel').innerHTML =  (1 * numberofpersons.value) + 'Zwiebel'
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
    { amount: 41.66, unit: 'g', name: 'Rindfleisch' },
    { amount: 41.66, unit: 'g', name: 'Schweinefleisch' },
    { amount: 0.42, unit: 'EL', name: 'Tomatenmark' },
    { amount: 0.25, unit: 'große', name: 'Zwiebel' },
    { amount: 60, unit: 'g', name: 'Letscho' },
    { amount: 58.34, unit: 'g', name: 'Gewürzgurken' },
    { amount: 55, unit: 'ml', name: 'passierte Tomaten' },
    { amount: 83.3, unit: 'ml', name: 'Wasser' },
    { amount: 0.25, unit: 'TL', name: 'Paprikapulver (edelsüß)' },
    { amount: 0.25, unit: 'Becher', name: 'Schmand oder Saure Sahne (optional)' },
    { amount: 0.25, unit: 'Zitrone', name: '(optional)' }
];

function init_multiplied() {
    set_clearmultiplied()
        ;

}







function set_clearmultiplied() {
    let ingredientsList = document.getElementById('ingredientslist');
    let numberofpersons = document.getElementById('multiplied-persons');
    ingredientsList.innerHTML = '';

    console.log(numberofpersons.value);

    let predictioningredients = [];
    for (let i = 0; i < ingredients.length; i++) {
        predictioningredients.push({ ...ingredients[i] });
    }
    console.log(predictioningredients);
    console.log(ingredients);


    for (let indexingredients = 0; indexingredients < predictioningredients.length; indexingredients++) {
        predictioningredients[indexingredients].amount =
            (predictioningredients[indexingredients].amount * numberofpersons.value).toFixed(2);
        console.log(predictioningredients);
    }

    console.log(predictioningredients);

    for (let indexingredients = 0; indexingredients < predictioningredients.length; indexingredients++) {
        if (predictioningredients[indexingredients].amount < 1000) {
            predictioningredients[indexingredients].amount = predictioningredients[indexingredients].amount;
        } else if (predictioningredients[indexingredients].unit === 'ml') {
            predictioningredients[indexingredients].unit = predictioningredients[indexingredients].unit.replace('ml', 'L');
            predictioningredients[indexingredients].amount = (predictioningredients[indexingredients].amount / 1000).toFixed(2);
        } else if (predictioningredients[indexingredients].unit === 'g') {
            predictioningredients[indexingredients].unit = predictioningredients[indexingredients].unit.replace('g', 'kg');
            predictioningredients[indexingredients].amount = (predictioningredients[indexingredients].amount / 1000).toFixed(2);
        }
        console.log(predictioningredients[indexingredients]);
    }

    for (let indexingredients = 0; indexingredients < predictioningredients.length; indexingredients++) {
        if (predictioningredients[indexingredients].amount < 1000 && 
            (predictioningredients[indexingredients].unit === 'ml' || 
            predictioningredients[indexingredients].unit === 'g')) {
            predictioningredients[indexingredients].amount = predictioningredients[indexingredients].amount.toFixed(0);
        }
        else {
            predictioningredients[indexingredients].amount = predictioningredients[indexingredients].amount;
        }
        console.log(predictioningredients[indexingredients]);
    }

    for (let indexingredients = 0; indexingredients < predictioningredients.length; indexingredients++) {
        if ((indexingredients - 100) % 2) {
            ingredientsList.innerHTML += `<li class='ingredients2'>
        ${predictioningredients[indexingredients].amount} 
        ${predictioningredients[indexingredients].unit}  
        ${predictioningredients[indexingredients].name}
        </li>`;
        } else {
            ingredientsList.innerHTML += `<li class='ingredients'>
        ${predictioningredients[indexingredients].amount} 
        ${predictioningredients[indexingredients].unit} 
        ${predictioningredients[indexingredients].name}
        </li>`;
        }
        console.log(indexingredients);
    }

};













// function set_multiplied() {
//     let numberofpersons = document.getElementById('multiplied-persons');
//     let ingredientsList = document.getElementById('ingredientslist');
//     ingredientsList.innerHTML = '';

//     for (let indexingredients = 0; indexingredients < ingredients.length; indexingredients++) {
//         if ((indexingredients - 100) % 2) {
//             ingredientsList.innerHTML += `<li class='ingredients2'>
//         ${(ingredients[indexingredients].amount * numberofpersons.value).toFixed(0)}
//         ${ingredients[indexingredients].unit}
//         ${ingredients[indexingredients].name}
//         </li>`;
//         }
//         else {
//             ingredientsList.innerHTML += `<li class='ingredients'>
//         ${(ingredients[indexingredients].amount * numberofpersons.value).toFixed(0)}
//         ${ingredients[indexingredients].unit}
//         ${ingredients[indexingredients].name}
//         </li>`;
//         }
//         console.log((indexingredients - 100) % 2);
//     }
// };


// function reset_multiplied25() {
//     for (let indexingredients = 0; indexingredients < ingredients.length; indexingredients++) {
//         if (ingredients[indexingredients].amount >= 1000) {
//             ingredients[indexingredients].amount = ingredients[indexingredients].amount;
//         } else if (ingredients[indexingredients].unit === 'L') {
//             ingredients[indexingredients].unit = ingredients[indexingredients].unit.replace('L', 'ml');
//             ingredients[indexingredients].amount = (ingredients[indexingredients].amount * 1000).toFixed(0);
//         } else if (ingredients[indexingredients].unit === 'kg') {
//             ingredients[indexingredients].unit = ingredients[indexingredients].unit.replace('kg', 'g');
//             ingredients[indexingredients].amount = (ingredients[indexingredients].amount * 1000).toFixed(0);
//         }
//         console.log(ingredients);
//     }
// };
