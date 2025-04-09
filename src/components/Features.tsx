
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'Writing, Reading & Listening',
      description: 'Interactive exercises to develop comprehensive English skills',
      icon: '📝'
    },
    {
      title: 'Interactive Games',
      description: 'Engaging games that make learning fun and prevent boredom',
      icon: '🎮'
    },
    {
      title: 'Personalized Learning',
      description: 'Adaptive content that adjusts to your skill level and progress',
      icon: '👤'
    },
    {
      title: 'Progress Tracking',
      description: 'Monitor your improvement with detailed progress reports',
      icon: '📊'
    },
    {
      title: 'Earn Rewards & Badges',
      description: 'Get motivated with achievements and recognition',
      icon: '🏆'
    },
    {
      title: 'Voice Recognition',
      description: 'Practice pronunciation with advanced speech technology',
      icon: '🎤'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Irerero offers a comprehensive suite of tools designed specifically for Rwandan students learning English
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-irerero-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="lg:flex">
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-irerero-dark mb-4">
                Why Choose Irerero?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-irerero-green mr-3 flex-shrink-0" />
                  <p>Designed specifically for Rwandan students and cultural context</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-irerero-green mr-3 flex-shrink-0" />
                  <p>Supports both English and Kinyarwanda languages</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-irerero-green mr-3 flex-shrink-0" />
                  <p>Works offline for areas with limited connectivity</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-irerero-green mr-3 flex-shrink-0" />
                  <p>Affordable subscription plans with free content available</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-irerero-green mr-3 flex-shrink-0" />
                  <p>Parental controls and progress monitoring</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-r from-irerero-blue to-blue-700 p-8 lg:p-12 text-white">
              <h3 className="text-2xl font-bold mb-4">
                For Students of All Ages
              </h3>
              <p className="mb-6">
                Whether you're a young learner just starting out or an advanced student looking to perfect your skills, 
                Irerero has content tailored for every level.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-white border-opacity-20 rounded-lg p-4 bg-white bg-opacity-10">
                  <div className="text-xl font-bold mb-2">Beginners</div>
                  <p className="text-sm">Interactive basics, simple vocabulary, and fun games</p>
                </div>
                <div className="border border-white border-opacity-20 rounded-lg p-4 bg-white bg-opacity-10">
                  <div className="text-xl font-bold mb-2">Intermediate</div>
                  <p className="text-sm">Conversation practice, grammar, and reading comprehension</p>
                </div>
                <div className="border border-white border-opacity-20 rounded-lg p-4 bg-white bg-opacity-10">
                  <div className="text-xl font-bold mb-2">Advanced</div>
                  <p className="text-sm">Complex topics, writing skills, and exam preparation</p>
                </div>
                <div className="border border-white border-opacity-20 rounded-lg p-4 bg-white bg-opacity-10">
                  <div className="text-xl font-bold mb-2">Specialized</div>
                  <p className="text-sm">Professional English, academic writing, and public speaking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
