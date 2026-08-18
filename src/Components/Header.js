
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(store=>store.user)
  console.log(user)
  const hanleSignout = ()=>{
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
       navigate("/errorpage")
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayname: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-screen p-4 ml-3 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAfwxusEeCteu-L_QQ56_G2cohyI1E4BIh2uyr5t9gDhH0CKWHw3NVhndjuF7yQ26z3cYq_lnzY5pP6OarHyiibuiy2jIIa5sIhSvgal1S6u9YDVAyVoX6osPniEKN-dYy77H_pLfOCD7.svg"
        alt="logo"
      />
      {user &&(<div className="flex p-2">
        <img
          className="w-12 h-12"
          alt="userIcon"
          src="https://tse3.mm.bing.net/th/id/OIP.kYYbdJhBIh1SEi8MKTPYpgHaHa?r=0&pid=Api&P=0&h=180"
        />

        <button onClick={hanleSignout} className="font-bold text-white m-2">
          Sign Out{" "}
        </button>
      </div>)}
    </div>
  );
}

export default Header
