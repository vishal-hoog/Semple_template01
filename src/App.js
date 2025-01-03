import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from 'react-scroll-to-top';
import UserContext from "./Context/UserContext";

// Import static pages
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import HomeFour from './pages/HomeFour';
import HomeOne from './pages/HomeOne';
import HomeThree from './pages/HomeThree';
import HomeTwo from './pages/HomeTwo';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import HomeFive from './pages/HomeFive';
import HomeSix from './pages/HomeSix';
import HomeSeven from './pages/HomeSeven';
import HomeEight from './pages/HomeEight';
import HomeNine from './pages/HomeNine';
import HomeTen from './pages/HomeTen';
import ServiceTwo from './pages/ServiceTwo';
import ServiceThree from './pages/ServiceThree';
import ServiceFour from './pages/ServiceFour';
import ServiceFive from './pages/ServiceFive';
import TeamTwo from './pages/TeamTwo';
import TeamThree from './pages/TeamThree';
import PriceOne from './pages/PriceOne';
import PriceTwo from './pages/PriceTwo';
import BlogTwo from './pages/BlogTwo';
import BlogThree from './pages/BlogThree';
import BlogFour from './pages/BlogFour';
import Project from './pages/Project';
import ProjectTwo from './pages/ProjectTwo';
import ProjectThree from './pages/ProjectThree';
import HomeEleven from './pages/HomeEleven';

function App() {
  const { navItems } = useContext(UserContext); 

  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: 'ease',
      once: true,
    });
    AOS.refresh();
  }, []);

  
  const componentMapping = {
    "Home": HomeOne,
    "About": About,
    "Blog": Blog,
    "Contact": Contact,
    "Service": Service,
    "HomeFour": HomeFour,
    "HomeTwo": HomeTwo,
    "HomeThree": HomeThree,
    "HomeFive": HomeFive,
    "HomeSix": HomeSix,
    "HomeSeven": HomeSeven,
    "HomeEight": HomeEight,
    "HomeNine": HomeNine,
    "HomeTen": HomeTen,
    "BlogDetails": BlogDetails,
    "ServiceDetails": ServiceDetails,
    "Team": Team,
    "TeamDetails": TeamDetails,
    "PriceOne": PriceOne,
    "PriceTwo": PriceTwo,
    "Project": Project,
    "ProjectTwo": ProjectTwo,
    "ProjectThree": ProjectThree,
    "ProjectDetails": ProjectDetails,
    "ServiceTwo": ServiceTwo,
    "ServiceThree": ServiceThree,
    "ServiceFour": ServiceFour,
    "ServiceFive": ServiceFive,
    "TeamTwo": TeamTwo,
    "TeamThree": TeamThree,
    "BlogTwo": BlogTwo,
    "BlogThree": BlogThree,
    "BlogFour": BlogFour,
    "HomeEleven": HomeEleven,
  };

  return (
    <BrowserRouter>
      <Routes>
      
        {navItems.map((item) => {
          const Component = componentMapping[item.name];
          console.log("jfbeddbncnbuin nkbuywedn wnkdbgywi", Component)
          return Component ? (
            <Route key={item.url} exact path={item.url} element={<Component />} />
          ) : null;
        })}
      </Routes>
      <ScrollToTop smooth color="#246BFD" />
    </BrowserRouter>
  );
}

export default App;
