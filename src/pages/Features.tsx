
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DownloadCTA from '../components/DownloadCTA';
import { CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const learningFeatures = [
    {
      title: 'Interactive Learning Modules',
      description: 'Engaging lessons with audio, video, and interactive exercises',
      icon: '📚'
    },
    {
      title: 'Vocabulary Builder',
      description: 'Expand your vocabulary with contextual word learning',
      icon: '📝'
    },
    {
      title: 'Grammar Practice',
      description: 'Master English grammar through structured exercises',
      icon: '📏'
    },
    {
      title: 'Pronunciation Tools',
      description: 'Perfect your accent with voice recognition technology',
      icon: '🎤'
    }
  ];

  const gameFeatures = [
    {
      title: 'Animal Matching',
      description: 'Match 10+ animals with their names, with voice guidance',
      icon: '🦁'
    },
    {
      title: 'Shape Drawing',
      description: 'Practice drawing shapes while learning their names',
      icon: '⭐'
    },
    {
      title: 'Word Puzzles',
      description: 'Fun word games that reinforce vocabulary',
      icon: '🧩'
    },
    {
      title: 'Memory Challenges',
      description: 'Train your brain while learning new words',
      icon: '🧠'
    }
  ];

  const trackingFeatures = [
    {
      title: 'Progress Dashboard',
      description: 'Visual representation of your learning journey',
      icon: '📊'
    },
    {
      title: 'Achievement Badges',
      description: 'Earn platinum, silver, and bronze badges as you progress',
      icon: '🏆'
    },
    {
      title: 'Learning Roadmap',
      description: 'Clear path showing course sequence and progress',
      icon: '🗺️'
    },
    {
      title: 'Parent Controls',
      description: 'Parents can monitor progress and manage usage time',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-irerero-dark mb-6">Features & Benefits</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the innovative tools and features that make Irerero the perfect 
              platform for mastering English.
            </p>
          </div>
        </section>
        
        {/* Learning Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-irerero-dark mb-2 text-center">Learning Tools</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Comprehensive resources for reading, writing, listening, and speaking
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-irerero-light p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-irerero-dark mb-4">Key Learning Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Content aligned with Rwandan educational curriculum</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Bilingual support in English and Kinyarwanda</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>AI-powered learning path adaptation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Culturally relevant examples and scenarios</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Game Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-irerero-dark mb-2 text-center">Interactive Games</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Fun and engaging games that make learning enjoyable
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {gameFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-irerero-dark mb-4">Gaming Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Makes learning fun and reduces boredom</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Reinforces learning through repetition</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Sound effects provide immediate feedback</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Age-appropriate content for all learners</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tracking Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-irerero-dark mb-2 text-center">Progress Tracking</h2>
            <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Monitor your improvement and celebrate achievements
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trackingFeatures.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-irerero-light p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-irerero-dark mb-4">Tracking Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Visualizes progress and motivates continued learning</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Identifies strengths and areas for improvement</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Rewards system boosts motivation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-irerero-green mt-0.5 mr-3 flex-shrink-0" />
                  <p>Parental involvement enhances learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Features */}
        <section className="py-16 bg-irerero-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Technical Specifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Platform Support</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-blue rounded-full mr-3"></div>
                    <span>Android 6.0 and above</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-blue rounded-full mr-3"></div>
                    <span>iOS 12.0 and above</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-blue rounded-full mr-3"></div>
                    <span>Tablets supported</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-blue rounded-full mr-3"></div>
                    <span>Works offline for key features</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Security Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-green rounded-full mr-3"></div>
                    <span>Data encryption (AES-256)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-green rounded-full mr-3"></div>
                    <span>Secure authentication</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-green rounded-full mr-3"></div>
                    <span>Child safety controls</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-green rounded-full mr-3"></div>
                    <span>Privacy-focused design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-yellow rounded-full mr-3"></div>
                    <span>Voice guidance</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-yellow rounded-full mr-3"></div>
                    <span>Adjustable text size</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-yellow rounded-full mr-3"></div>
                    <span>High contrast mode</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-irerero-yellow rounded-full mr-3"></div>
                    <span>Screen reader compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
