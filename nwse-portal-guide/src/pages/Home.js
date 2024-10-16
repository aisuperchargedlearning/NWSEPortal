import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import ProgramInfo from '../components/ProgramInfo';
import BiographicalInfo from '../components/BiographicalInfo';
import LifestyleSection from '../components/LifestyleSection';
import IntroductionEssays from '../components/IntroductionEssays';
import PhotosVideos from '../components/PhotosVideos';
import DocumentSubmission from '../components/DocumentSubmission';

const HomeWrapper = styled.div`
  // Add any global styles for the home page here
`;

function Home() {
  return (
    <HomeWrapper>
      <HeroSection />
      <ProgramInfo />
      <BiographicalInfo />
      <LifestyleSection />
      <IntroductionEssays />
      <PhotosVideos />
      <DocumentSubmission />
    </HomeWrapper>
  );
}

export default Home;