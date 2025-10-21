function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}

const numberofpersons = document.getElementById('number-of-persons');



function ammount() {

    if (numberofpersons.value < 1) {
        document.getElementById('number-of-persons').value = '1'
        document.getElementById('Rinderrouladen').innerHTML = (2 * 1) + 'Rinder Rouladen'
        document.getElementById('zwiebel').innerHTML = (1.25 * 1) + 'Zwiebel(n)'
        document.getElementById('Gwürzgurke').innerHTML = (1 * 1) + 'Gwürzgurke(n)'
        document.getElementById('Scheiben Frühstücksspeck').innerHTML = (3 * 1) + 'Scheiben Frühstücksspeck'
        document.getElementById('Butterschmalz').innerHTML = (0.5 * 1) + 'Butterschmalz'
        document.getElementById('Knollensellerie').innerHTML = (0.25 * 1) + 'Stück(e) Knollensllerie'
        document.getElementById('Möhren').innerHTML = (0.25 * 1) + 'Möhren'
        document.getElementById('Stangen').innerHTML = (0.13 * 1) + 'Stange(n) Lauch'
        document.getElementById('Rotwein').innerHTML = (0.13 * 1) + 'ml Rotwein'
        document.getElementById('Rinderfond').innerHTML = (0.13 * 1) + 'Rinderfond'
        document.getElementById('Gurkenflüssigkeit').innerHTML = (0.25 * 1) + 'Gurkenflüssigkeit'
    }

    if (numberofpersons.value > 20) {
        document.getElementById('number-of-persons').value = '20'
        document.getElementById('Rinderrouladen').innerHTML = (2 * 20) + 'Rinder Rouladen'
        document.getElementById('zwiebel').innerHTML = (1.25 * 20) + 'Zwiebel(n)'
        document.getElementById('Gwürzgurke').innerHTML = (1 * 20) + 'Gwürzgurke(n)'
        document.getElementById('Scheiben Frühstücksspeck').innerHTML = (3 * 20) + 'Scheiben Frühstücksspeck'
        document.getElementById('Butterschmalz').innerHTML = (0.5 * 20) + 'Butterschmalz'
        document.getElementById('Knollensellerie').innerHTML = (0.25 * 20) + 'Stück(e) Knollensllerie'
        document.getElementById('Möhren').innerHTML = (0.25 * 20) + 'Möhren'
        document.getElementById('Stangen').innerHTML = (0.13 * 20) + 'Stange(n) Lauch'
        document.getElementById('Rotwein').innerHTML = (0.13 * 20) + 'ml Rotwein'
        document.getElementById('Rinderfond').innerHTML = (0.13 * 20) + 'Rinderfond'
        document.getElementById('Gurkenflüssigkeit').innerHTML = (0.25 * 20) + 'Gurkenflüssigkeit'
    }

    else {
        document.getElementById('Rinderrouladen').innerHTML = (2 * numberofpersons.value) + 'Rinderrouladen'
        document.getElementById('zwiebel').innerHTML = (1.25 * numberofpersons.value) + 'Zwiebel(n)'
        document.getElementById('Gewürzgurke').innerHTML = (1 * numberofpersons.value) + 'Gwürzgurke(n)'
        document.getElementById('Scheiben Frühstücksspeck').innerHTML = (1 * numberofpersons.value) + 'Scheiben Frühstücksspeck'
        document.getElementById('Butterschmalz').innerHTML = (0.5 * numberofpersons.value) + 'Butterschmalz'
        document.getElementById('Knollensellerie').innerHTML = (0.5 * numberofpersons.value) + 'Stück(e) Knollensllerie'
        document.getElementById('Möhren').innerHTML = (0.25 * numberofpersons.value) + 'Möhren'
        document.getElementById('Stangen').innerHTML = (0.13 * numberofpersons.value) + 'Stange(n) Lauch'
        document.getElementById('Rotwein').innerHTML = (0.13 * numberofpersons.value) + 'ml Rotwein'
        document.getElementById('Rinderfond').innerHTML = (0.13 * numberofpersons.value) + 'ml Rinderfond'
        document.getElementById('Gurkenflüssigkeit').innerHTML = (0.25 * numberofpersons.value) + 'Gurkenflüssigkeit'
    }
}



function set_multiplied() {
    document.getElementById('multiplied-persons').innerHTML = numberofpersons.value;
}