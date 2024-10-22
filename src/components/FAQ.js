import React from 'react';
import styled from 'styled-components';

const FAQWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #3a5a8c;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #3a5a8c;
  margin-bottom: 1rem;
`;

const Question = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const Answer = styled.div`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
`;

const List = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FAQ = () => {
  return (
    <FAQWrapper>
      <Title>NWSE Student Exchange Program Application FAQ</Title>
      
      <Section>
        <SectionTitle>Program Overview</SectionTitle>
        <Question>1. What are the different program options available?</Question>
        <Answer>
          NWSE offers two main program options:
          <List>
            <ListItem>Host Family Placement: NWSE finds a suitable host family and school for you.</ListItem>
            <ListItem>Direct Exchange: You already have a potential host family and school arranged.</ListItem>
          </List>
          You'll need to select your preferred option and desired exchange term (Fall only, Full Academic Year, or Spring only) in Section 1 of the application.
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Application Process</SectionTitle>
        <Question>2. What are the main sections of the NWSE Exchange Student Application?</Question>
        <Answer>
          <List>
            <ListItem>Program Information</ListItem>
            <ListItem>Biographical Information</ListItem>
            <ListItem>Lifestyle, Personality & Hobbies</ListItem>
            <ListItem>Introduction & Essays</ListItem>
            <ListItem>Photos / Videos</ListItem>
          </List>
        </Answer>

        <Question>3. What personal information do I need to provide?</Question>
        <Answer>
          <List>
            <ListItem>Personal Details: Full name, gender, date of birth, birthplace, nationality, and permanent residence.</ListItem>
            <ListItem>Passport and Citizenship: Passport details and any additional citizenships.</ListItem>
            <ListItem>Contact Information: Current address, email, phone numbers, and social media accounts.</ListItem>
            <ListItem>Family Information: Details about parents, siblings, and an emergency contact in your home country.</ListItem>
          </List>
        </Answer>

        <Question>4. How do I showcase my personality and interests?</Question>
        <Answer>
          <List>
            <ListItem>Lifestyle: Information about pets, allergies, fears, religion, dietary restrictions, and smoking habits.</ListItem>
            <ListItem>Personality: Five adjectives that best describe you.</ListItem>
            <ListItem>Hobbies and Activities: Top three non-school activities, sports, arts, community involvement, and activities you'd like to explore in the US.</ListItem>
            <ListItem>Language Skills: Native language, English proficiency, and other languages studied.</ListItem>
          </List>
        </Answer>

        <Question>5. What is required for the Letter of Introduction and essays?</Question>
        <Answer>
          <List>
            <ListItem>Letter of Introduction (500+ words): Introduce yourself and your family, explain your reasons for participating, describe your personality and interests, and share your expectations and potential contributions.</ListItem>
            <ListItem>Essays (100+ words each): Four essays on your reasons for becoming an exchange student, goals and expectations, contributions to the host family and community, and anticipated challenges and how you plan to overcome them.</ListItem>
          </List>
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Required Documents</SectionTitle>
        <Question>6. What documents need to be uploaded?</Question>
        <Answer>
          <List>
            <ListItem>NWSE Agreements</ListItem>
            <ListItem>Power of Attorney</ListItem>
            <ListItem>Medical Forms</ListItem>
            <ListItem>Copy of Original Immunization Record</ListItem>
            <ListItem>Copy of Official School Transcripts</ListItem>
            <ListItem>English Translation of School Transcripts</ListItem>
            <ListItem>Recommendations (three separate forms uploaded as one pdf document)</ListItem>
            <ListItem>Passport (readable digital copy in JPEG format)</ListItem>
            <ListItem>Birth Certificate (readable digital copy and English translation)</ListItem>
          </List>
        </Answer>

        <Question>7. What medical documents are required?</Question>
        <Answer>
          <List>
            <ListItem>Medical History: Completed by you and your parent/guardian.</ListItem>
            <ListItem>Physical Examination Form: Completed by a licensed medical doctor within the last three months.</ListItem>
            <ListItem>Certificate of Immunization Status: Fully completed in all required areas and signed by parent/guardian and licensed medical doctor.</ListItem>
            <ListItem>Additional Medical Information: Detailed explanations for any medical conditions or treatments disclosed.</ListItem>
          </List>
        </Answer>

        <Question>8. What are the requirements for school transcripts and recommendations?</Question>
        <Answer>
          <List>
            <ListItem>School Transcripts: Upload a readable scan of your official transcript and an English translation completed and signed by your school principal.</ListItem>
            <ListItem>Recommendations: Three separate recommendations - one from your English teacher and two from non-relative adult acquaintances or teachers. Recommenders must complete a provided form and send it directly to NWSE.</ListItem>
          </List>
        </Answer>

        <Question>9. What are the NWSE Agreement and Power of Attorney forms?</Question>
        <Answer>
          <List>
            <ListItem>NWSE Agreement: Requires signatures from you and your parent/guardian in multiple sections. Covers program rules, expectations, and legal agreements.</ListItem>
            <ListItem>Power of Attorney: Authorizes NWSE and your host family to make decisions regarding your medical care and schooling in emergencies. Requires signatures from both parents/guardians and a witness (not a relative) with an official seal.</ListItem>
          </List>
        </Answer>
      </Section>

      <Section>
        <SectionTitle>Application Support</SectionTitle>
        <Question>10. What is the purpose of the NWSE Audio Portal Guide?</Question>
        <Answer>
          <List>
            <ListItem>Provides step-by-step instructions on navigating the NWSE Online Portal.</ListItem>
            <ListItem>Helps you complete your exchange student application efficiently.</ListItem>
            <ListItem>Highlights key sections and required documents.</ListItem>
          </List>
        </Answer>
      </Section>
    </FAQWrapper>
  );
};

export default FAQ;