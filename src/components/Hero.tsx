
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-irerero-blue opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-irerero-green opacity-5 rounded-full"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-irerero-yellow opacity-5 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-irerero-dark">
              <span className="block">Learn English</span>
              <span className="block text-irerero-blue">The Rwandan Way</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
              Irerero helps students improve their English in an easy, affordable, engaging 
              and personalized way, designed specifically for Rwandan learners.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/download" className="btn-primary text-center">
                Download App
              </Link>
              <Link to="/about" className="btn-secondary text-center">
                Learn More
              </Link>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/62.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <p className="ml-4 text-sm text-gray-500">Join thousands of students already learning</p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md animate-float">
              {/* Placeholder for app screenshot/mockup */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-8 border-white">
                <div className="bg-irerero-blue h-12 flex items-center justify-center">
                  <div className="w-20 h-6 bg-white bg-opacity-20 rounded-full"></div>
                </div>
                <div className="bg-gray-100 aspect-[9/16] flex flex-col justify-center items-center p-4">
                  <div className="w-16 h-16 bg-irerero-blue rounded-full flex items-center justify-center mb-4">
                    <span className="text-white text-3xl font-bold">I</span>
                  </div>
                  <div className="h-8 w-3/4 bg-white rounded-lg mb-4"></div>
                  <div className="h-20 w-full bg-white rounded-lg mb-4"></div>
                  <div className="grid grid-cols-2 gap-4 w-full">
                    <div className="h-24 bg-white rounded-lg"></div>
                    <div className="h-24 bg-white rounded-lg"></div>
                    <div className="h-24 bg-white rounded-lg"></div>
                    <div className="h-24 bg-white rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
