import { useState } from 'react';
import { AudioPlayer } from '../components/AudioPlayer';
import { FAQ } from '../components/FAQ';
import { ConclusionSection } from '../components/ConclusionSection';

interface Section {
  title: string;
  image: string;
  germanAudio?: string;
  englishAudio?: string;
}

export function Home() {
  const applicationParts: Section[] = [
    {
      title: "Part 1: Program Information",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part1bar.jpg?updatedAt=1730408594934",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/Teil+1-Programm+Information(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+1+Program+Information.mp3"
    },
    {
      title: "Part 2: Biographical Information",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part2bar.jpg?updatedAt=1730408594752",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/Teil+2-Biographische(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+2+Biographical+information.mp3"
    },
    {
      title: "Part 3: Lifestyle, Personality & Hobbies",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part3bar.jpg?updatedAt=1730408594760",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/Teil+3-Lebensstil(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+3+Lifestyle.mp3"
    },
    {
      title: "Part 4: Introduction & Essays",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part4bar.jpg?updatedAt=1730408594777",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/Teil+4-Einleitung(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+4++Introduction+and+Essays.mp3"
    },
    {
      title: "Part 5: Photos / Video",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part5bar.jpg?updatedAt=1730408594814",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/Teil+5-Photos(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+5+photos.mp3"
    }
  ];

  const requiredDocuments: Section[] = [
    {
      title: "NWSE Agreements",
      image: "https://ik.imagekit.io/a7tech/nwse/1%20NWSE%20Agreement.jpg?updatedAt=1729534120797",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/1.+NWSE+Vereinbarungen(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/1+NWSE+Agreements.mp3"
    },
    {
      title: "Power of Attorney",
      image: "https://ik.imagekit.io/a7tech/nwse/2%20Power%20of%20Attorney.jpg?updatedAt=1729534120599",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/2.+Vollmacht(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/Part+2+Biographical+information.mp3"
    },
    {
      title: "Medical Forms",
      image: "https://ik.imagekit.io/a7tech/nwse/3%20medical%20forms.jpg?updatedAt=1729534120767",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/3.+Medizinische(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/3+Medical+Forms+and+Immunization+Record.mp3"
    },
    {
      title: "Copy of Original Immunization Record",
      image: "https://ik.imagekit.io/a7tech/nwse/4%20copy%20of%20immunization%20record.jpg?updatedAt=1729534120778",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/4.+Immunization(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/4+Copy+of+Immunization.mp3"
    },
    {
      title: "Copy of Official School Transcripts",
      image: "https://ik.imagekit.io/a7tech/nwse/5%20copy%20of%20school%20Transcripts.jpg?updatedAt=1729534120658",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/5.+Schulzeugnisse(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/5+School+Transcripts+upload.mp3"
    },
    {
      title: "English Translation of School Transcripts",
      image: "https://ik.imagekit.io/a7tech/nwse/6%20English%20Translation%20of%20Transcripts.jpg?updatedAt=1729534120631",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/6.+Ubersetzung(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/6+English+Translation+of+School+Transcripts.mp3"
    },
    {
      title: "Recommendations",
      image: "https://ik.imagekit.io/a7tech/nwse/7%20Recommendations.jpg?updatedAt=1729534120788",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/7.+Empfehlungsschreiben(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/7+Recommendations.mp3"
    },
    {
      title: "Copy of Passport",
      image: "https://ik.imagekit.io/a7tech/nwse/8%20Copy%20of%20Passport.jpg?updatedAt=1729534120707",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/8.+Reisepass(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/8+paassport.mp3"
    },
    {
      title: "Copy of Birth Certificate and English Translation",
      image: "https://ik.imagekit.io/a7tech/nwse/9%20Copy%20of%20Birth%20Certificate%20and%20English%20translation.jpg?updatedAt=1729534120802",
      germanAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+German/NWSE+Audio+German/9.+GeburtsUrkunde(small).mp3",
      englishAudio: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/NWSE+English+Audio/9+Birth+certificate.mp3"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to NWSE Portal Guide
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Step by Step guide to filling out your NWSE Application
            </p>
            <img 
              src="https://ik.imagekit.io/a7tech/nwse/Parent%20with%20child%20doing%20app.jpg?updatedAt=1729546093941"
              alt="Parent with child"
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Application Parts Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Exchange Student Application Parts</h2>
              <p className="text-xl text-gray-600">Complete each section carefully for a successful application</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {applicationParts.map((part, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{part.title}</h3>
                    <img 
                      src={part.image} 
                      alt={part.title}
                      className="w-full rounded-lg mb-4"
                    />
                    {part.germanAudio && part.englishAudio && (
                      <AudioPlayer
                        germanSrc={part.germanAudio}
                        englishSrc={part.englishAudio}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Required Documents Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <p className="text-xl text-gray-600">Essential paperwork for your application</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requiredDocuments.map((doc, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{doc.title}</h3>
                    <img 
                      src={doc.image} 
                      alt={doc.title}
                      className="w-full rounded-lg mb-4"
                    />
                    {doc.germanAudio && doc.englishAudio && (
                      <AudioPlayer
                        germanSrc={doc.germanAudio}
                        englishSrc={doc.englishAudio}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion Section */}
          <section className="mb-16">
            <ConclusionSection />
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <FAQ />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;