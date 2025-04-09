
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Layers, Star, Users, Award, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-irerero-dark mb-6">About Irerero</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of English language education for Rwandan students through 
              technology, innovation, and cultural relevance.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-irerero-dark mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Irerero was founded with a clear vision: to transform how Rwandan students learn English. 
                  We recognized that despite English being crucial for academic success and global 
                  engagement, many students face significant barriers to mastering the language.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of educators, technologists, and language experts came together to create 
                  a solution that addresses these challenges through innovation, technology, and 
                  cultural relevance.
                </p>
                <p className="text-gray-600">
                  Today, Irerero stands as a platform that not only teaches English but does so in 
                  a way that respects and incorporates the Rwandan context, making learning more 
                  effective and meaningful for our users.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 grid grid-cols-2 gap-6">
                <div className="bg-irerero-light rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <Layers className="h-12 w-12 text-irerero-blue mb-4" />
                  <h3 className="font-bold mb-2">Founded</h3>
                  <p className="text-gray-600">2023</p>
                </div>
                <div className="bg-irerero-light rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-irerero-blue mb-4" />
                  <h3 className="font-bold mb-2">Active Users</h3>
                  <p className="text-gray-600">10,000+</p>
                </div>
                <div className="bg-irerero-light rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <Star className="h-12 w-12 text-irerero-blue mb-4" />
                  <h3 className="font-bold mb-2">Success Rate</h3>
                  <p className="text-gray-600">87%</p>
                </div>
                <div className="bg-irerero-light rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-irerero-blue mb-4" />
                  <h3 className="font-bold mb-2">Recognition</h3>
                  <p className="text-gray-600">EdTech Award</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-irerero-dark mb-6">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                These core principles guide everything we do at Irerero, from product development to 
                customer support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                  <Heart className="h-8 w-8 text-irerero-blue" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  We design our platform to be accessible to all Rwandan students, regardless of 
                  their background or previous education.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4">
                  <TrendingUp className="h-8 w-8 text-irerero-green" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We continuously evolve our platform with cutting-edge technology to provide the 
                  best learning experience possible.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-lg mb-4">
                  <Award className="h-8 w-8 text-irerero-yellow" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for the highest standards in educational content, ensuring quality 
                  and effectiveness.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-4">
                  <Users className="h-8 w-8 text-irerero-blue" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive learning community where students can collaborate and 
                  grow together.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-lg mb-4">
                  <Layers className="h-8 w-8 text-irerero-green" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Adaptability</h3>
                <p className="text-gray-600">
                  We personalize the learning experience to meet each student's unique needs 
                  and learning style.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-lg mb-4">
                  <Star className="h-8 w-8 text-irerero-yellow" />
                </div>
                <h3 className="text-xl font-bold text-irerero-dark mb-2">Cultural Relevance</h3>
                <p className="text-gray-600">
                  We incorporate Rwandan cultural elements to make learning more relatable 
                  and effective.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-irerero-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the Irerero family and elevate your English learning experience today.
            </p>
            <a 
              href="/download" 
              className="bg-white text-irerero-blue hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Download the App
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
