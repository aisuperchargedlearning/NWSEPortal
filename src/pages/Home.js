import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import ApplicationSteps from '../components/ApplicationSteps';
import ProgramInfo from '../components/ProgramInfo';
import BiographicalInfo from '../components/BiographicalInfo';
import LifestyleSection from '../components/LifestyleSection';
import IntroductionEssays from '../components/IntroductionEssays';
import PhotosVideos from '../components/PhotosVideos';

const HomeWrapper = styled.div`
  // Add any global styles for the home page here
`;

function Home() {
  return (
    <HomeWrapper>
      <HeroSection />
      <ApplicationSteps />
      <div id="programInfo">
        <ProgramInfo />
      </div>
      <div id="biographicalInfo">
        <BiographicalInfo />
      </div>
      <div id="lifestyleSection">
        <LifestyleSection />
      </div>
      <div id="introductionEssays">
        <IntroductionEssays />
      </div>
      <div id="photosVideos">
        <PhotosVideos />
      </div>
    </HomeWrapper>
  );
}

export default Home;