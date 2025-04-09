
const Mission = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="text-3xl font-bold text-irerero-dark mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Irerero mobile app is an application that helps students improve their English in an easy, 
              affordable, engaging and personalized way. 
            </p>
            <p className="text-gray-600 mb-6">
              Our mission is to develop an engaging, personalized, and comprehensive learning platform 
              that equips African students, specifically in Rwanda, with English language proficiency to 
              enhance their academic and professional opportunities.
            </p>
            <p className="text-gray-600">
              This aligns with the broader goal of empowering students in Africa with quality education 
              and language skills for global competitiveness.
            </p>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="bg-irerero-light rounded-xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-bold text-irerero-dark mb-4">The Problem We Solve</h3>
              <p className="text-gray-600 mb-4">
                Rwandan students face significant barriers to mastering English, which impacts their ability 
                to excel academically and professionally. These barriers include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-irerero-blue mr-2">•</span>
                  <span>Limited interactive tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-irerero-blue mr-2">•</span>
                  <span>Outdated teaching methods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-irerero-blue mr-2">•</span>
                  <span>Insufficient exposure to the language</span>
                </li>
                <li className="flex items-start">
                  <span className="text-irerero-blue mr-2">•</span>
                  <span>Lack of personalized learning resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-irerero-blue mr-2">•</span>
                  <span>Limited access to quality learning materials</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-gray-100">
                <h4 className="font-semibold text-irerero-dark">Our Solution:</h4>
                <p className="text-gray-600">
                  An interactive, gamified, personalized and adaptive English learning platform developed 
                  specifically for Rwandan students, designed to improve engagement and proficiency, leading 
                  to better academic outcomes and career prospects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
