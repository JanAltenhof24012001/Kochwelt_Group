function sendMail (event){
    event.preventDefault();
    const data =  new FormData(event.target);
    fetch("https://formspree.io/f/xgvndgqp",{
        method: "POST", 
        body: new FormData(event.target),
        headers:{
            'Accept':'application/json'
        }
    }).then(() => {
        alert("Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.");
    }).catch((error) => {
        console.log(error);
    });
}

function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}





function listit() {
    
}