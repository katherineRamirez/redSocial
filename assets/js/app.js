(function() {

//Inicializar Firebase
  const config = {
    apiKey: "AIzaSyAQdZCxZy2dp0wTFUnCAnARwV4J0dYiJ78",
    authDomain: "redsocial-4286a.firebaseapp.com",
    databaseURL: "https://redsocial-4286a.firebaseio.com",
    projectId: "redsocial-4286a",
    storageBucket: "redsocial-4286a.appspot.com",
    messagingSenderId: "652533453318"
  };
  firebase.initializeApp(config);

  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');

  // Añadir Evento login
  btnLogin.addEventListener('click', e => {
    //Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));   
  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    // TODO: comprobar que el email sea real
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  
  });
