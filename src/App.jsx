import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contant";
import PostDetails from "./PostDetails";
import Posts from "./context/context";

let post =[
        {
            id:1,
            title:"Hello Post",
            desc:"this is post title "
        },
        {
            id:2,
            title:"Hello duck",
            desc:"this is post title "
        },
        {
            id:3,
            title:"Hello rubber",
            desc:"this is post title "
        },
    ]

function App() {
  return (
    <Posts.Provider value={post}>
    <div className="w-7xl  bg-gray-50">
      <header className="bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-center space-x-8">
            <Link to="/">
              <button className="bg-white text-yellow-700 hover:bg-yellow-100 hover:text-yellow-800 font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md flex items-center space-x-2">
                <span>Home</span>
              </button>
            </Link>
            
            <Link to="/about">
              <button className="bg-white text-amber-700 hover:bg-amber-100 hover:text-amber-800 font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md flex items-center space-x-2">
                <span>About</span>
              </button>
            </Link>
            
            <Link to="/contact">
              <button className="bg-white text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-semibold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-md flex items-center space-x-2">
                <span>Contact</span>
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/postDetails/:postID" element={<PostDetails />} />
        </Routes>
      </main>

      <footer className="bg-amber-600 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-4">🦆 Quack-tastic Navigation 🦆</p>
          <div className="flex justify-center space-x-6">
            <Link to="/" className="text-yellow-300 hover:text-yellow-100 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-yellow-300 hover:text-yellow-100 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-yellow-300 hover:text-yellow-100 transition duration-300">
              Contact
            </Link>
          </div>
          <p className="mt-4 text-white">Made with 💛 by Duck Lovers</p>
        </div>
      </footer>
    </div>
    </Posts.Provider>
  );
}

export default App;