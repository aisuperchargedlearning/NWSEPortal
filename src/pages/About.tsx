export function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About NWSE</h1>
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-4">
              Northwest Student Exchange (NWSE) is dedicated to fostering cultural understanding
              through educational exchange programs. We believe that international exchange
              creates lifelong connections and promotes global citizenship.
            </p>
            <p className="text-gray-600">
              Our comprehensive portal guide helps students navigate the application process
              smoothly, ensuring all requirements are met for a successful exchange experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;