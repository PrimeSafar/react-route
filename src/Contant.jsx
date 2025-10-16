import Post from "./Post";
export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">Contact Us</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Get in Touch with the Duck Lovers!
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="https://images.pexels.com/photos-128051/pexels-photo-128051.jpeg?w=400&h=300&fit=crop" 
            alt="Cute yellow rubber duck"
            className="rounded-2xl shadow-lg w-full max-w-md transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Have questions about our yellow duck collection or want to share your
            own rubber duck stories? We'd love to hear from you! Whether you're
            looking for a specific vintage duck, want to report a missing squeaker,
            or just feel like chatting about your favorite bath time companions, our
            team of duck enthusiasts is here to help.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Reach out to us through any of the methods below - we promise every query 
            gets the attention it deserves and we'll float back to you with a response 
            quicker than a duck takes to water!
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="mt-12 bg-yellow-50 rounded-2xl p-8 shadow-md">
        <h3 className="text-2xl font-bold text-yellow-700 mb-6 text-center">
          How to Reach Us
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">📧</div>
            <h4 className="font-semibold text-yellow-600 mb-2">Email</h4>
            <p className="text-gray-600">ducks@yellowquack.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">📞</div>
            <h4 className="font-semibold text-yellow-600 mb-2">Phone</h4>
            <p className="text-gray-600">1-800-DUCK-LOVE</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="font-semibold text-yellow-600 mb-2">Visit</h4>
            <p className="text-gray-600">123 Rubber Duck Lane</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
          Quack Hello! 🦆
        </button>
      </div>
      <Post />
    </div>
    
  );
}