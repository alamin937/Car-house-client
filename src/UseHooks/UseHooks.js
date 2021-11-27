import firebaseAuthentication from "../firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged,updateProfile,signInWithEmailAndPassword ,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";



firebaseAuthentication()


const UseHooks = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();



const createUser = (email,password,name) =>{

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const newUser = {email, displayName:name}
        saveUser(email, name)
        setError('')
        setUser(newUser)
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
           
          });
      })
      .catch((error) => {
        setError(error.message)
      });
}


const loginUser = (email,password,history,location) =>{
  setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
    })
    .catch((error) => {
      setError(error.message)
    })
    .finally(() => setLoading(false))
  
}

useEffect(() => {
  fetch(`https://stark-woodland-28823.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
}, [user?.email])




useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
          setUser({ })
        }
        setLoading(false)
      })
},[])


const saveUser = (email, displayName) =>{
    const user = {email, displayName}

    fetch('https://stark-woodland-28823.herokuapp.com/users', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
}


const logOut = () =>{
  setLoading(true)
    signOut(auth).then(() => {
        setUser({ })
      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
}

return{
    user,
    error,
    createUser,
    logOut,
    admin,
    loginUser,
    loading
}




}

export default UseHooks;