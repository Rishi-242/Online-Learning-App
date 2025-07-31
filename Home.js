/*import React from 'react';

function Home() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to LearnIt!</h1>
      <p className="mt-4 text-gray-600">Your online learning platform.</p>
    </div>
  );
}

export default Home;
*/
/*import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to LearnIt!</h1>
      <p className="text-lg text-gray-700">Your online learning platform.</p>
    </div>
  );
};

export default Home;
*/
/*import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to LearnIt!</h1>
      <p className="text-gray-700 text-lg">Your online learning platform.</p>
    </div>
  );
};

export default Home;
*/
// src/pages/Home.jsx


import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-2xl p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Accessible Online Courses For All</h1>
        <p className="mb-6 text-gray-700">Learn from the best instructors anytime, anywhere.</p>

        <h2 className="text-xl font-semibold mb-4">Popular Categories</h2>

        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p>Explore the latest content in Web Development</p>
            <a
              href="https://www.youtube.com/watch?v=3JluqTojuME"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Watch Web Dev Course on YouTube
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Data Science</h3>
            <p>Explore the latest content in Data Science</p>
            <a
              href="https://www.youtube.com/watch?v=ua-CiDNNj30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Watch Data Science Course on YouTube
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">AI & ML</h3>
            <p>Explore the latest content in AI & ML</p>
            <a
              href="https://www.youtube.com/watch?v=GwIo3gDZCVQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Watch AI & ML Course on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

