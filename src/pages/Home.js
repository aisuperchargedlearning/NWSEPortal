import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import ApplicationSteps from '../components/ApplicationSteps';
import ProgramInfo from '../components/ProgramInfo';
import BiographicalInfo from '../components/BiographicalInfo';
import LifestyleSection from '../components/LifestyleSection';
import IntroductionEssays from '../components/IntroductionEssays';
import PhotosVideos from '../components/PhotosVideos';
import DocumentSubmission from '../components/DocumentSubmission';
import FinalReview from '../components/FinalReview';
import FAQ from '../components/FAQ';
import Conclusion from '../components/Conclusion';

const HomeWrapper = styled.div`
  // Add any global styles for the home page here
`;

const PortalImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 2rem auto;
  display: block;
`;

function Home() {
  return (
    <HomeWrapper>
      <HeroSection />
      <PortalImage 
        src="https://ik.imagekit.io/a7tech/nwse/NWSE%20Portal.jpg?updatedAt=1728609830993" 
        alt="NWSE Portal"
      />
      <ApplicationSteps />
      <ProgramInfo />
      <BiographicalInfo />
      <LifestyleSection />
      <IntroductionEssays />
      <PhotosVideos />
      <DocumentSubmission />
      <FinalReview />
      <FAQ />
      <Conclusion />
    </HomeWrapper>
  );
}

export default Home;