
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Project from './components/Project';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ActionMenu from './components/ActionMenu';
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <section id="home"><MainSection /></section>
    <section id="about"><AboutMe /></section>
    <section id="skills"><Skills /></section>
    <section id="experience"><Experience /></section>
    <section id="projects"><Project /></section>
    <section id="contact"><ContactMe /></section>
    <Footer />
    <ActionMenu /> 
    </>
  );
}

export default App;
