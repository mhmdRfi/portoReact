import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Aboutme from './components/Aboutme/Aboutme';
import Skill from './components/Skill/Skill';
import Portofolio from './components/Portofolio/Portofolio';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Profile/>
      <Aboutme/>
      <Portofolio/>
      <Skill/>
      <Footer/>
    </div>
  );
}

export default App;
