export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-600 mb-4 drop-shadow-sm">
            Home Content - Yellow Ducks
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-8">
            Welcome to the Wonderful World of Yellow Ducks!
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=300&fit=crop" 
              alt="Classic yellow rubber duck"
              className="rounded-2xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-300 border-4 border-yellow-300"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-md">
              Discover the magical universe of yellow rubber ducks! From classic bath
              time companions to collectible masterpieces, our yellow ducks bring joy
              and nostalgia to everyone.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-md">
              Whether you're a casual admirer or a serious collector, you'll find that 
              these cheerful yellow companions have been making bathtubs and desks 
              happier since 1949.
            </p>
          </div>
        </div>

        <div className="bg-yellow-100 border-l-4 border-yellow-500 rounded-r-xl p-6 shadow-md">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dive in to explore the history, varieties, and pure delight of these iconic 
            yellow treasures that have quacked their way into hearts worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🛁</div>
            <h3 className="font-bold text-yellow-600 mb-2">Bath Time Fun</h3>
            <p className="text-gray-600">Perfect companions for splashy adventures</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="font-bold text-yellow-600 mb-2">Collectible Art</h3>
            <p className="text-gray-600">Unique designs for serious collectors</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="font-bold text-yellow-600 mb-2">Since 1949</h3>
            <p className="text-gray-600">Decades of quacking joy and nostalgia</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Ducks 🦆
          </button>
        </div>
      </div>
    </div>
  );
}