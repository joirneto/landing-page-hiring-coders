const form = document.getElementById('form-js');


form.addEventListener('submit', (e)=> {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;

  if(validator(name,email))addItem(name, email);

});

function validator(name,email){
  if((name !== null && name !== '') && (email !== null && email !== '')){
    return true;
  }
  else{
   alert("Prencha os campos solicitados!") ;
  }
}

function atualizaPage(){
  let divForm = document.getElementById('div-form-js');

  let loader = `<img src="public/images/Loader.gif" alt="loader" width="320px" height="280px">`
  let pronto = `<p id = "pronto" > PRONTO </p>`
 
  divForm.innerHTML = loader

  setTimeout(() => {
    divForm.innerHTML = pronto
  },2000);
  
  setTimeout(() => {
    window.location.href = window.location.href;
  },4000);
  
}

function addItem(name,email) {
  let data = {
    name,
    email
  };

  if (localStorage.getItem('lead') === null) {
    localStorage.setItem('lead', JSON.stringify([data]));
  } else {
    localStorage.setItem(
      'lead',
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('lead')),
            data
        ])
      );
    }
    atualizaPage();
}


