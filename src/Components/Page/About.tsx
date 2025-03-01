import React from 'react';
import '../BodyAll/Filter.css';
import Post from '../BodyAll/Post';
import AboutMe from '../Ejer/AboutMe';
import Team from '../Ejer/Team';
import Cooperate from '../Ejer/Cooperate';
import Marketing from '../Ejer/Marketing';
import Story from '../Ejer/Story';
import TopHeader from '../Header/TopHeader';

const About: React.FC = () => {
  return (
    <>
    <TopHeader/>
      <div className="container mx-auto px-4">
        <div className="about-fon">
          <img 
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75" 
            className="w-full h-[50vh] object-cover rounded-[10px]"
            alt="Background"
          />
        </div>

        <AboutMe />

        <Team />

        <div className="mt-[50px]">
          <img 
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75"
            className="w-full h-[50vh] object-cover rounded-[10px]"
            alt="Cooperate"
          />
        </div>
        <Cooperate />

        <Marketing />

        <Story />

        <div className="mt-[50px]">
          <img 
            src="https://amaranoc.am/_next/image?url=%2Fimages%2Fabout-us%2Fabout-background-pc.jpg&w=1920&q=75"
            className="w-full h-[50vh] object-cover rounded-[10px]"
            alt="Final Background"
          />
        </div>
      </div>
      <Post />
    </>
  );
}

export default About;
