
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Download, CheckCircle, Smartphone, Tablet, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const DownloadPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-irerero-dark mb-6">Download Irerero</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the Irerero English learning app on your device and start improving your 
              English skills today.
            </p>
          </div>
        </section>
        
        {/* Download Options */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Android Download */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="bg-green-500 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Android</h2>
                  <p>Download for phones and tablets running Android</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Android 6.0 (Marshmallow) or higher</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>50MB free storage space</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>1GB RAM minimum</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Supported Devices:</h3>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 text-gray-500 mr-1" />
                        <span>Phones</span>
                      </div>
                      <div className="flex items-center">
                        <Tablet className="h-5 w-5 text-gray-500 mr-1" />
                        <span>Tablets</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download APK (v1.2.0)
                  </a>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    File size: 22.5 MB
                  </div>
                </div>
              </div>
              
              {/* iOS Download */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100">
                <div className="bg-blue-500 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">iOS</h2>
                  <p>Download for iPhone and iPad devices</p>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span>iOS 12.0 or higher</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span>60MB free storage space</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2" />
                        <span>Compatible with iPhone, iPad, and iPod touch</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Supported Devices:</h3>
                    <div className="flex space-x-4">
                      <div className="flex items-center">
                        <Smartphone className="h-5 w-5 text-gray-500 mr-1" />
                        <span>iPhone</span>
                      </div>
                      <div className="flex items-center">
                        <Tablet className="h-5 w-5 text-gray-500 mr-1" />
                        <span>iPad</span>
                      </div>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Download className="h-5 w-5 mr-2" />
                    Download IPA (v1.2.0)
                  </a>
                  
                  <div className="mt-4 text-sm text-gray-500 text-center">
                    File size: 28.3 MB
                  </div>
                </div>
              </div>
            </div>
            
            {/* Installation Instructions */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-irerero-dark mb-6 text-center">Installation Instructions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Android Instructions */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-green-600 mb-4">For Android</h3>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="text-gray-700">
                      <span className="font-medium">Enable Unknown Sources:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Go to Settings {'>'} Security {'>'} Unknown Sources and enable it to allow installation from sources other than Play Store.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Download the APK file:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Click the download button above to download the APK file to your device.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Open the APK file:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Once downloaded, tap on the APK file to begin installation.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Follow the prompts:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Follow the on-screen instructions to complete the installation.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Open the app:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Once installed, tap "Open" to launch Irerero.
                      </p>
                    </li>
                  </ol>
                </div>
                
                {/* iOS Instructions */}
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">For iOS</h3>
                  <ol className="space-y-4 list-decimal list-inside">
                    <li className="text-gray-700">
                      <span className="font-medium">Download the IPA file:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Click the download button above to download the IPA file to your device.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Use Sideloading tool:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Use AltStore, Sideloadly, or a similar tool to install the IPA on your device.
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Trust Developer:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Go to Settings {'>'} General {'>'} Profiles & Device Management, find the developer profile, and tap "Trust".
                      </p>
                    </li>
                    <li className="text-gray-700">
                      <span className="font-medium">Open the app:</span>
                      <p className="text-gray-600 ml-6 mt-1">
                        Once installed and trusted, open Irerero from your home screen.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Subscription Info */}
            <div className="mt-16 bg-irerero-light rounded-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-irerero-dark mb-6 text-center">Subscription Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-irerero-dark mb-2">Monthly</h3>
                    <div className="text-3xl font-bold text-irerero-blue mb-1">2,000 RWF</div>
                    <p className="text-gray-500 mb-6">per month</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Access to all learning content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Voice recognition features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Progress tracking</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#" 
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 border-2 border-irerero-blue shadow-md relative">
                  <div className="absolute top-0 right-0 bg-irerero-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    POPULAR
                  </div>
                
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-irerero-dark mb-2">Quarterly</h3>
                    <div className="text-3xl font-bold text-irerero-blue mb-1">5,000 RWF</div>
                    <p className="text-gray-500 mb-6">per 3 months</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Access to all learning content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Voice recognition features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Download lessons for offline use</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#" 
                    className="w-full bg-irerero-blue hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    Get Started
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-irerero-dark mb-2">Yearly</h3>
                    <div className="text-3xl font-bold text-irerero-blue mb-1">18,000 RWF</div>
                    <p className="text-gray-500 mb-6">per year</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Access to all learning content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Voice recognition features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Progress tracking</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Download lessons for offline use</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-irerero-green mr-2 flex-shrink-0" />
                      <span>Premium customer support</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="#" 
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
              
              <div className="mt-8 text-center text-gray-600">
                <p>All plans include a 7-day free trial. Cancel anytime.</p>
                <p className="mt-2">
                  Need help? <Link to="/contact" className="text-irerero-blue hover:underline">Contact our support team</Link>
                </p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-irerero-dark mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">Can I use Irerero without an internet connection?</h3>
                  <p className="text-gray-600">
                    Yes, many features of Irerero work offline. You can download lessons for offline use with a 
                    premium subscription, though some features like speech recognition require an internet connection.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">How do I install the APK file on my Android device?</h3>
                  <p className="text-gray-600">
                    First, enable installation from unknown sources in your device's security settings. 
                    Then download the APK file, tap on it, and follow the on-screen instructions to install.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">Is there a free version of Irerero?</h3>
                  <p className="text-gray-600">
                    Yes, Irerero offers a limited free version with basic lessons and features. For full access to 
                    all content and premium features, you'll need a subscription plan.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-irerero-dark mb-2">How do I cancel my subscription?</h3>
                  <p className="text-gray-600">
                    You can cancel your subscription at any time through the app's settings menu or by contacting 
                    our support team. Your access will continue until the end of your billing period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
