function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}

const numberofpersons = document.getElementById('number-of-persons');



function ammount() {
    document.getElementById('Rinderrouladen').innerHTML = (2 * numberofpersons.value) + 'Rinder Rouladen'
    document.getElementById('zwiebel').innerHTML = (1.25 * numberofpersons.value) + 'Zwiebel(n)'
    document.getElementById('Gwürzgurke').innerHTML = (1 * numberofpersons.value) + 'Gwürzgurke(n)'
    document.getElementById('Scheiben Frühstücksspeck').innerHTML = (3 * numberofpersons.value) + 'Scheiben Frühstücksspeck'
    document.getElementById('Butterschmalz').innerHTML = (0.5 * numberofpersons.value) + 'Butterschmalz'
    document.getElementById('Knollensllerie').innerHTML = (0.25 * numberofpersons.value) + 'Stück(e) Knollensllerie'
    document.getElementById('Möhren').innerHTML = (0.25 * numberofpersons.value) + 'Möhren'
    document.getElementById('Stangen').innerHTML = (0.13 * numberofpersons.value) + 'Stange(n) Lauch'
    document.getElementById('Rotwein').innerHTML = (0.13 * numberofpersons.value) + 'ml Rotwein'
    document.getElementById('Rinderfond').innerHTML = (0.13 * numberofpersons.value) + 'Rinderfond'
    document.getElementById('Gurkenflüssigkeit').innerHTML = (0.25 * numberofpersons.value) + 'Gurkenflüssigkeit'
}

function set_multiplied() {
    document.getElementById('multiplied-persons').innerHTML = numberofpersons.value;
}