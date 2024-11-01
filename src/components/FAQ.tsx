import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "1. What are the different program options available?",
      answer: (
        <div>
          <p>NWSE offers two main program options:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Host Family Placement: NWSE finds a suitable host family and school for you.</li>
            <li>Direct Exchange: You already have a potential host family and school arranged.</li>
          </ul>
          <p className="mt-2">You'll need to select your preferred option and desired exchange term (Fall only, Full Academic Year, or Spring only) in Section 1 of the application.</p>
        </div>
      )
    },
    {
      question: "2. What are the main sections of the NWSE Exchange Student Application?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Program Information</li>
          <li>Biographical Information</li>
          <li>Lifestyle, Personality & Hobbies</li>
          <li>Introduction & Essays</li>
          <li>Photos / Videos</li>
        </ul>
      )
    },
    {
      question: "3. What personal information do I need to provide?",
      answer: (
        <div>
          <ul className="list-disc ml-6">
            <li>Personal Details: Full name, gender, date of birth, birthplace, nationality, and permanent residence.</li>
            <li>Passport and Citizenship: Passport details and any additional citizenships.</li>
            <li>Contact Information: Current address, email, phone numbers, and social media accounts.</li>
            <li>Family Information: Details about parents, siblings, and an emergency contact in your home country.</li>
          </ul>
        </div>
      )
    },
    {
      question: "4. How do I showcase my personality and interests?",
      answer: (
        <div>
          <ul className="list-disc ml-6">
            <li>Lifestyle: Information about pets, allergies, fears, religion, dietary restrictions, and smoking habits.</li>
            <li>Personality: Five adjectives that best describe you.</li>
            <li>Hobbies and Activities: Top three non-school activities, sports, arts, community involvement, and activities you'd like to explore in the US.</li>
            <li>Language Skills: Native language, English proficiency, and other languages studied.</li>
          </ul>
        </div>
      )
    },
    {
      question: "5. What is required for the Letter of Introduction and essays?",
      answer: (
        <div>
          <p><strong>Letter of Introduction (500+ words):</strong> Introduce yourself and your family, explain your reasons for participating, describe your personality and interests, and share your expectations and potential contributions.</p>
          <p className="mt-2"><strong>Essays (100+ words each):</strong> Four essays on:</p>
          <ul className="list-disc ml-6">
            <li>Your reasons for becoming an exchange student</li>
            <li>Goals and expectations</li>
            <li>Contributions to the host family and community</li>
            <li>Anticipated challenges and how you plan to overcome them</li>
          </ul>
        </div>
      )
    },
    {
      question: "6. What documents need to be uploaded?",
      answer: (
        <ul className="list-disc ml-6">
          <li>NWSE Agreements</li>
          <li>Power of Attorney</li>
          <li>Medical Forms</li>
          <li>Copy of Original Immunization Record</li>
          <li>Copy of Official School Transcripts</li>
          <li>English Translation of School Transcripts</li>
          <li>Recommendations (three separate forms uploaded as one pdf document)</li>
          <li>Passport (readable digital copy in JPEG format)</li>
          <li>Birth Certificate (readable digital copy and English translation)</li>
        </ul>
      )
    },
    {
      question: "7. What medical documents are required?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Medical History: Completed by you and your parent/guardian.</li>
          <li>Physical Examination Form: Completed by a licensed medical doctor within the last three months.</li>
          <li>Certificate of Immunization Status: Fully completed in all required areas and signed by parent/guardian and licensed medical doctor.</li>
          <li>Additional Medical Information: Detailed explanations for any medical conditions or treatments disclosed.</li>
        </ul>
      )
    },
    {
      question: "8. What are the requirements for school transcripts and recommendations?",
      answer: (
        <div>
          <p><strong>School Transcripts:</strong> Upload a readable scan of your official transcript and an English translation completed and signed by your school principal.</p>
          <p className="mt-2"><strong>Recommendations:</strong> Three separate recommendations - one from your English teacher and two from non-relative adult acquaintances or teachers. Recommenders must complete a provided form and send it directly to NWSE.</p>
        </div>
      )
    },
    {
      question: "9. What are the NWSE Agreement and Power of Attorney forms?",
      answer: (
        <div>
          <p><strong>NWSE Agreement:</strong> Requires signatures from you and your parent/guardian in multiple sections. Covers program rules, expectations, and legal agreements.</p>
          <p className="mt-2"><strong>Power of Attorney:</strong> Authorizes NWSE and your host family to make decisions regarding your medical care and schooling in emergencies. Requires signatures from both parents/guardians and a witness (not a relative) with an official seal.</p>
        </div>
      )
    },
    {
      question: "10. What is the purpose of the NWSE Audio Portal Guide?",
      answer: (
        <ul className="list-disc ml-6">
          <li>Provides step-by-step instructions on navigating the NWSE Online Portal.</li>
          <li>Helps you complete your exchange student application efficiently.</li>
          <li>Highlights key sections and required documents.</li>
        </ul>
      )
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border rounded-lg">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <div className="prose prose-sm max-w-none text-gray-600">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}