import { ShoppingCart, Bell, User, ChevronDown, Phone, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-1 px-6 flex justify-center">
        <span>Your first 5 minutes instant call is free.</span>
        <button className="ml-3 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-xs flex items-center gap-1">
          <Phone size={14} /> Try Instant Free Call Now
        </button>
      </div>

      {/* Main Navbar */}
      <div className="bg-[#f8f3e9] px-8 py-3 border-b">
        <div className="flex justify-between items-center">
          {/* Left Contact */}
          <div className="flex items-center gap-2 text-green-900 font-medium">
            <Phone size={18} />
            <span>+91 9826352321</span>
          </div>

          {/* Logo */}
          <h1 className="text-green-900 font-bold text-lg tracking-wide">
            AMRUTAM
          </h1>

          <div className="w-24"></div>
        </div>

        {/* Navigation */}
        <nav className="mt-3 flex items-center text-sm font-medium text-green-900">
          <div className="flex gap-6 mx-auto">
            <Link to="/home">Home</Link> {/* CHANGED */}
            <Link to="/doctors">Find Doctors</Link> {/* CHANGED */}
            <Link to="/lab-tests">Lab Tests</Link> {/* CHANGED */}
            <Link to="/">Shop</Link> {/* CHANGED */}
            <Link to="/forum">Forum</Link> {/* CHANGED */}
            <Link to="/about">About Us</Link> {/* CHANGED */}
          </div>

          {/* Right icons */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="relative bg-green-100 p-2 rounded-full">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs px-1 rounded-full">
                2
              </span>
            </div>
            <div className="relative bg-green-100 p-2 rounded-full">
              <Bell size={20} />
              <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs px-1 rounded-full">
                1
              </span>
            </div>
            <div className="bg-green-100 p-2 rounded-full">
              <User size={20} />
            </div>
            <div className="bg-green-100 p-2 rounded-full">
              <ChevronDown size={18} />
            </div>
          </div>
        </nav>
      </div>

      {/* Store Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-8 px-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Store</h2>
        <div className="flex justify-center items-center gap-2 max-w-xl mx-auto">
          <div className="flex items-center bg-white border rounded-full px-4 py-2 w-full">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for Kuntal Care"
              className="ml-2 flex-grow outline-none text-sm"
            />
          </div>
          <div className="bg-white p-2 rounded-full shadow">
            <ShoppingCart size={22} className="text-gray-700" />
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="bg-[#fdf5e6] py-6 flex justify-center gap-6 overflow-x-auto">
        {[
          { name: "All", icon: "⬜" },
          { name: "Hair", icon: "💇" },
          { name: "Skin", icon: "✨" },
          { name: "Digestion", icon: "🍽️" },
          { name: "Bones", icon: "🦴" },
          { name: "Immunity", icon: "🛡️" },
          { name: "More", icon: "➡️" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 cursor-pointer"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow">
              <span className="text-xl">{item.icon}</span>
            </div>
            <span className="text-sm text-gray-700">{item.name}</span>
          </div>
        ))}
      </div>
    </header>
  );
}
