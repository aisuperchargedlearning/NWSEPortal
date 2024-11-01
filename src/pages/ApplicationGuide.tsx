import { FileText, Upload, ClipboardList } from 'lucide-react';

interface Section {
  title: string;
  image: string;
}

export default function ApplicationGuide() {
  const applicationParts: Section[] = [
    {
      title: "Part 1: Program Information",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part1bar.jpg?updatedAt=1730408594934"
    },
    {
      title: "Part 2: Biographical Information",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part2bar.jpg?updatedAt=1730408594752"
    },
    {
      title: "Part 3: Lifestyle, Personality & Hobbies",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part3bar.jpg?updatedAt=1730408594760"
    },
    {
      title: "Part 4: Introduction & Essays",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part4bar.jpg?updatedAt=1730408594777"
    },
    {
      title: "Part 5: Photos / Video",
      image: "https://ik.imagekit.io/a7tech/nwse/NWSE%20images%20for%20imagekit.io/Part5bar.jpg?updatedAt=1730408594814"
    }
  ];

  const requiredDocuments: Section[] = [
    {
      title: "NWSE Agreements",
      image: "https://ik.imagekit.io/a7tech/nwse/1%20NWSE%20Agreement.jpg?updatedAt=1729534120797"
    },
    {
      title: "Power of Attorney",
      image: "https://ik.imagekit.io/a7tech/nwse/2%20Power%20of%20Attorney.jpg?updatedAt=1729534120599"
    },
    {
      title: "Medical Forms",
      image: "https://ik.imagekit.io/a7tech/nwse/3%20medical%20forms.jpg?updatedAt=1729534120767"
    },
    {
      title: "Copy of Original Immunization Record",
      image: "https://ik.imagekit.io/a7tech/nwse/4%20copy%20of%20immunization%20record.jpg?updatedAt=1729534120778"
    },
    {
      title: "Copy of Official School Transcripts",
      image: "https://ik.imagekit.io/a7tech/nwse/5%20copy%20of%20school%20Transcripts.jpg?updatedAt=1729534120658"
    },
    {
      title: "English Translation of School Transcripts",
      image: "https://ik.imagekit.io/a7tech/nwse/6%20English%20Translation%20of%20Transcripts.jpg?updatedAt=1729534120631"
    },
    {
      title: "Recommendations",
      image: "https://ik.imagekit.io/a7tech/nwse/7%20Recommendations.jpg?updatedAt=1729534120788"
    },
    {
      title: "Copy of Passport",
      image: "https://ik.imagekit.io/a7tech/nwse/8%20Copy%20of%20Passport.jpg?updatedAt=1729534120707"
    },
    {
      title: "Copy of Birth Certificate and English Translation",
      image: "https://ik.imagekit.io/a7tech/nwse/9%20Copy%20of%20Birth%20Certificate%20and%20English%20translation.jpg?updatedAt=1729534120802"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Application Parts Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Exchange Student Application Parts</h1>
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
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents Section */}
        <section>
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
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}