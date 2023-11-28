// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// login user 

function loginUser (){
    
     const email = document.querySelector('#email').value;

      if(!email){
        alert ("Plz enter Email and Password")
        return;
      }
 
      signInWithEmailAndPassword(auth,email).then((userCredintial)=>{
          console.log("Login USER");
      })
      .catch((error)=>{
         console.log(error);
      })


}

const login_btn = document.querySelector('#login_btn')
 login_btn.addEventListener('click',loginUser)


//  on state 

onAuthStateChanged(auth,(user)=>{
    if(user){
         document.querySelector('.admin').classList.add('show')
         document.querySelector('.form').classList.add('hide')
    }else{
        console.log("eror");
    }
})


// logout Function 

 function logOut(){
     signOut(auth).then(()=>{
        document.querySelector('.admin').classList.remove('show')
         document.querySelector('.form').classList.remove('hide')
     })
 }

 const logout_btn = document.querySelector('#logout')

 logout_btn.addEventListener('click', logOut)