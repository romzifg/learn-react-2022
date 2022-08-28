import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'


// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnA1rjvzUQEOhJXJ6zNb19nxj-5PRg48Y",
    authDomain: "crwn-clothing-db-2e48d.firebaseapp.com",
    projectId: "crwn-clothing-db-2e48d",
    storageBucket: "crwn-clothing-db-2e48d.appspot.com",
    messagingSenderId: "742329278740",
    appId: "1:742329278740:web:9103a15a0a905660062201"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);