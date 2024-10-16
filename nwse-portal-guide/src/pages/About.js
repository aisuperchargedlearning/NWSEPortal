import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Content = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

function About() {
  return (
    <AboutWrapper>
      <Title>About NWSE</Title>
      <Content>
        NWSE (Northwest Student Exchange) is dedicated to providing exceptional exchange student experiences. 
        Our portal guide is designed to help students navigate through the application process and make the most of their exchange program.
      </Content>
    </AboutWrapper>
  );
}

export default About;