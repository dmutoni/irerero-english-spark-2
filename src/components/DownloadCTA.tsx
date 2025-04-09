
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const DownloadCTA = () => {
  return (
    <section className="py-16 bg-irerero-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Learning English?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Download the Irerero app today and begin your journey to English proficiency.
            Available for Android and iOS devices.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/download" 
              className="bg-white text-irerero-blue hover:bg-gray-100 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download APK (Android)
            </Link>
            <Link 
              to="/download" 
              className="bg-white text-irerero-blue hover:bg-gray-100 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <Download className="h-5 w-5 mr-2" />
              Download IPA (iOS)
            </Link>
          </div>
          
          <div className="mt-8 text-white text-opacity-80 text-sm">
            By downloading, you agree to our Terms of Service and Privacy Policy
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
