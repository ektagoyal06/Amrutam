import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ add this
import { ShoppingCart, Bell, User, ChevronDown, Phone, Search, X } from "lucide-react";

export default function Forum() {
  const [visible, setVisible] = useState(2);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("questions");
  const [sortCategory, setSortCategory] = useState("recent");
  const [isModalOpen, setModalOpen] = useState(false); // modal state

  // Dummy items (you can later replace with API data)
  const items = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    comments: Math.floor(Math.random() * 10),
    likes: Math.floor(Math.random() * 20),
    date: Date.now() - i * 1000 * 60 * 60 * 24, // decreasing date
  }));

  const loadMore = () => {
    setVisible((v) => Math.min(v + 2, items.length));
  };

  // Filter items
  const filteredItems = items.filter((item) =>
    item.id.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort items
  const sortedItems = () => {
    switch (sortCategory) {
      case "most commented":
        return [...filteredItems].sort((a, b) => b.comments - a.comments);
      case "most liked":
        return [...filteredItems].sort((a, b) => b.likes - a.likes);
      case "oldest":
        return [...filteredItems].sort((a, b) => a.date - b.date);
      default:
        return [...filteredItems].sort((a, b) => b.date - a.date); // recent
    }
  };

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
          <div className="flex items-center gap-2 text-green-900 font-medium">
            <Phone size={18} />
            <span>+91 9826352321</span>
          </div>
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

      {/* Ayurveda Discussion Section */}
      <div className="bg-green-100 py-4 text-center ">
        <h2 className="text-lg mt-8 mb-8 font-bold">
          Find Discussions Related To Ayurveda Here
        </h2>
      </div>

      {/* Tabs + Search + Sort */}
      <div className="bg-white rounded-lg shadow p-4 max-w-3xl mx-auto -mt-0">
        <div className="flex border-b mb-4">
          {["questions", "thoughts"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 text-center pb-2 font-medium ${activeTab === tab
                ? "text-green-800 border-b-2 border-green-700"
                : "text-gray-500"
                }`}
              onClick={() => {
                setActiveTab(tab);
                setVisible(2);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-white border rounded-full px-4 py-2 w-full shadow-sm">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search remedies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 flex-grow outline-none text-sm"
            />
          </div>

          <select
            value={sortCategory}
            onChange={(e) => setSortCategory(e.target.value)}
            className="border rounded-lg px-2 py-1 text-sm"
          >
            <option value="recent">Recent</option>
            <option value="most commented">Most Commented</option>
            <option value="most liked">Most Liked</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Forum Thread Section */}
      <section className="max-w-3xl mx-auto py-6 px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300" />
            <div>
              <div className="text-sm font-medium">Priya Singh</div>
              <div className="text-xs text-gray-500">Anonymous • 5 days ago</div>
            </div>
          </div>
          {activeTab === "questions" ? (
            <button
              onClick={() => setModalOpen(true)}
              className="bg-green-700 text-white px-4 py-2 rounded"
            >
              Ask Question
            </button>
          ) : (
            <button
              onClick={() => setModalOpen(true)}
              className="bg-green-700 text-white px-4 py-2 rounded"
            >
              Add Thought
            </button>
          )}
        </div>

        {/* Conditional Rendering */}
        {activeTab === "questions" ? (
          sortedItems().slice(0, visible).map((item, idx) => (
            <React.Fragment key={idx}>
              {/* Question Card */}
              <div className="bg-white rounded-lg shadow border p-4 mb-4">
                <div className="text-lg font-semibold mb-1">
                  Question: Can Ayurveda help with stress and mental health issues?
                </div>
                <p className="text-sm text-gray-700">
                  Explores the potential benefits of traditional Ayurvedic
                  practices in managing stress and improving mental well-being,
                  examining holistic approaches like herbal remedies, meditation,
                  and lifestyle adjustments.
                </p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>Replies • 10 reply</span>
                  <span className="text-green-700 cursor-pointer">
                    View All 9 Replies
                  </span>
                </div>
              </div>

              {/* Answer Card */}
              <div className="bg-green-50 rounded-lg shadow p-4 mb-4 ml-12">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Dr. Mathew Adams"
                    className="w-9 h-9 rounded-full"
                  />
                  <div className="font-semibold text-sm">Dr. Mathew Adams</div>
                  <div className="text-xs text-gray-500">5 days ago</div>
                </div>
                <div className="text-sm leading-relaxed">
                  Ans. Ayurveda offers holistic approaches like herbal remedies,
                  lifestyle adjustments, and relaxation techniques to alleviate
                  stress and support mental well-being. It emphasizes personalized
                  care and natural methods to address the root causes of mental
                  health challenges, promoting balance and harmony in mind and
                  body.
                </div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                  <span>❤️ 2</span>
                  <span>💬 2</span>
                </div>
              </div>

              {/* Actions Bar */}
              <div className="flex items-center justify-between border-t pt-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span>{item.likes} Likes</span>
                  <span>{item.comments} Reply</span>
                  <span>3 Saves</span>
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          sortedItems().slice(0, visible).map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow border p-4 mb-4">
              <div className="text-sm font-medium mb-2">Anonymous Thought</div>
              <p className="text-gray-700 text-sm">
                Ayurveda has really helped me reduce stress with daily meditation and herbal tea. 🌿
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <span>{item.likes} Likes</span>
                <span>{item.comments} Comments</span>
              </div>
            </div>
          ))
        )}

        {/* Load More Button */}
        {visible < sortedItems().length && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800"
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
      {/* Close */}
      <button
        onClick={() => setModalOpen(false)}
        className="absolute top-3 right-3 text-gray-600 hover:text-black"
      >
        <X size={22} />
      </button>

      {/* Title */}
      <h2 className="text-lg font-bold mb-4">
        {activeTab === "questions" ? "Ask Question" : "Add Thought"}
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // stop reload
          // ✅ here you can handle submit logic
          setModalOpen(false);
        }}
      >
        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://via.placeholder.com/40"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">Priya Singh</p>
            <select className="border rounded px-2 py-1 text-sm">
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>

        {/* Question / Thought Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            {activeTab === "questions" ? "Add Question *" : "Add Thought *"}
          </label>
          <input
            type="text"
            placeholder={
              activeTab === "questions"
                ? "Ask your question here (max 50 words)"
                : "Write your thought..."
            }
            maxLength={50}
            className="w-full border rounded p-2 text-sm"
            required
          />
          {activeTab === "questions" && (
            <p className="text-xs text-gray-500 mt-1">Max 50 words</p>
          )}
        </div>

        {/* Description (only for questions) */}
        {activeTab === "questions" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Add Description *
            </label>
            <textarea
              className="w-full border rounded p-2 text-sm"
              placeholder="Add your description here (max 70 words)"
              rows={3}
              maxLength={70}
              required
            />
            <p className="text-xs text-gray-500 mt-1">Max 70 words</p>
          </div>
        )}

        {/* Attachments (only for questions) */}
        {activeTab === "questions" && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Attachments *
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <input
                type="file"
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
                required
              />
              <div className="flex items-center space-x-2 text-green-700">
                <label className="p-2 hover:bg-green-100 rounded cursor-pointer">
                  📷
                  <input type="file" accept="image/*" capture="environment" className="hidden" required />
                </label>
                <label className="p-2 hover:bg-green-100 rounded cursor-pointer">
                  🎥
                  <input type="file" accept="video/*" capture="environment" className="hidden" required />
                </label>
                <label className="p-2 hover:bg-green-100 rounded cursor-pointer">
                  📎
                  <input type="file" className="hidden" required />
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          >
            {activeTab === "questions" ? "Ask" : "Post"}
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </header>
  );
}
