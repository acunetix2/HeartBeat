import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-md z-50">
      <div className="max-w-8xl mx-auto px-10 py-6 lg:px-16">
        <div className="flex justify-between items-center h-">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-green-500">
            Heartbeat SIEM
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link to="/features" className="text-gray-300 hover:text-green-400 transition">
              Features
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-green-400 transition">
              About
            </Link>
            <Link to="/docs" className="text-gray-300 hover:text-green-400 transition">
              Docs
            </Link>
            <Link
              to="/login"
              className="px-5 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 shadow transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-gray-100 shadow-lg px-6 py-4 space-y-4">
          <Link
            to="/features"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/about"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/docs"
            className="block hover:text-green-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Docs
          </Link>
          <Link
            to="/get-started"
            className="block px-4 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700 text-center transition"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
