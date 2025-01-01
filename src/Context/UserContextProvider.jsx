import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserContextProvider = ({children}) =>{
    const[topNavItem, setTopNavItem] = useState([]);
    const [socialLinks, setSocialLinks] = useState([]);
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/topNavItem')
          .then((response) => {
            setTopNavItem(response.data);
          })
          .catch((error) => {
            console.error('There was an error fetching the nav items!', error);
          });


          //////////////////For NavBar///////////////
         
            axios
              .get("http://localhost:5000/navData")
              .then((response) => {
                setNavItems(response.data);
              })
              .catch((error) => {
                console.error("There was an error fetching the nav items!", error);
              });
         


      /////////////////// Call For Get SocialLinks/////////////////

     
        axios.get('http://localhost:5000/socialLinks')
          .then((response) => {
            setSocialLinks(response.data);
          })
          .catch((error) => {
            console.error('There was an error fetching the nav items!', error);
          });

      }, []);

return(
    <UserContext.Provider value ={{topNavItem, socialLinks, navItems}}>
    {children}
    </UserContext.Provider>
)
}


export default UserContextProvider