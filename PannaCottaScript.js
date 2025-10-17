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