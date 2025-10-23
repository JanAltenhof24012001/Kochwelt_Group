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
        window.location.href = "ContactSuccess.html";
    }).catch((error) => {
        console.log(error);
    });
}

function hidden_menu() {
    document.getElementById('hide-menu').classList.toggle('hide');
}