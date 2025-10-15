export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-600 mb-4 drop-shadow-sm">
            About Ducks Content
          </h1>
          <h2 className="text-3xl font-semibold text-orange-600 mb-8">
            The Fascinating History of Rubber Ducks
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                The journey of the rubber duck began in the late 19th century, but it
                wasn't until the 1940s that the classic yellow floating duck we know and
                love today was born.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                Originally made of hard rubber, these ducks evolved into vinyl versions 
                that are safer and more durable. What makes the yellow rubber duck so special?
              </p>
            </div>

            <div className="bg-amber-100 border-l-4 border-amber-500 rounded-r-xl p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Its bright color represents sunshine and happiness, while its gentle squeak 
                brings comfort to children.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1554456854-55a089fd4cb2?w=400&h=300&fit=crop" 
              alt="Collection of rubber ducks"
              className="rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-300 border-4 border-amber-300"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-orange-100 rounded-2xl p-8 shadow-md mb-12">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            Today, rubber ducks have become cultural icons, appearing in art exhibitions,
            races for charity, and even as travel companions sharing adventures
            across social media!
          </p>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-600 mb-6 text-center">
            Duck Evolution Timeline
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300">
              <div className="text-3xl mb-2">🕰️</div>
              <h4 className="font-bold text-amber-600 mb-2">Late 1800s</h4>
              <p className="text-gray-600 text-sm">First rubber duck prototypes</p>
            </div>
            <div className="text-center p-4 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300">
              <div className="text-3xl mb-2">🌟</div>
              <h4 className="font-bold text-amber-600 mb-2">1940s</h4>
              <p className="text-gray-600 text-sm">Classic yellow duck born</p>
            </div>
            <div className="text-center p-4 border-2 border-amber-200 rounded-xl hover:bg-amber-50 transition duration-300">
              <div className="text-3xl mb-2">🎨</div>
              <h4 className="font-bold text-amber-600 mb-2">Today</h4>
              <p className="text-gray-600 text-sm">Cultural icons & collectibles</p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-amber-500 text-white p-6 rounded-2xl shadow-md">
            <h4 className="font-bold text-xl mb-3">Did You Know? 🤔</h4>
            <p>The world's largest rubber duck collection has over 9,000 different ducks!</p>
          </div>
          <div className="bg-orange-500 text-white p-6 rounded-2xl shadow-md">
            <h4 className="font-bold text-xl mb-3">Fun Fact! 💡</h4>
            <p>Rubber duck races raise millions for charity worldwide each year!</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Learn More History 📚
          </button>
        </div>
      </div>
    </div>
  );
}