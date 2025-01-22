import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, BG_IMAGE } from "../utils/constent";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constent";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            userId: uid,
            emailId: email,
            userName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageClick = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="h-[65px]"
        alt="logo-img"
        src={LOGO}
      />
      {auth.currentUser && (
        <div className="flex mr-5">
          {showGptSearch &&<select className="rounded-lg px-2 mr-2" onChange={handleLanguageClick}>
            {
              SUPPORTED_LANGUAGES.map((lang)=><option key={lang.identifier}  value={lang.identifier} >{lang.name}</option>)
            }
          </select>}
          <button className=" text-white bg-red-600 px-2 hover:opacity-70 rounded-lg" onClick={handleGptSearchClick}>{showGptSearch?"Homepage":"Search GPT"}</button>
          <img
            className="w-8 mx-2 rounded-full "
            src={BG_IMAGE}
          />
          <button className=" text-white bg-red-600 px-2 hover:opacity-70 rounded-lg" onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
