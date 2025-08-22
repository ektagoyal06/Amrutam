import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import TestDescriptionToggle from "./components/TestDescriptionToggle";
// import Footer from "./components/Footer";
import Store from "./pages/Store";
// import ProductCarousel from "./components/ProductCarousel";
import Forum from "./components/Forum";
// import About from "./pages/About";
// import Doctors from "./pages/Doctors";

// function App() {
//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar */}
//         <Navbar />
//         {/* <Forum/> */}

//         {/* Main Content */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Store />} />
//             <Route path="/store" element={<Store />} />
//             <Route path="/ProductCarousel" element={<ProductCarousel />} />
//             {/* <Route path="/Navbar" element={<Navbar />} /> */}
//             <Route path="/Forum" element={<Forum />} />
//             {/* <Route path="/about" element={<About />} /> */}
//             {/* <Route path="/doctors" element={<Doctors />} /> */}
//             {/* You can add more pages like Lab Tests, Forum, etc. */}
//           </Routes>
//         </main>

//       </div>
//     </Router>
//   );
// }

const App = () => (
  <Router>
    <Routes>
      {/* Homepage → Navbar + Store */}
      <Route path="/" element={<><Navbar /><Store /></>} />

      {/* Other routes */}
      <Route path="/store" element={<Store />} />
      <Route path="/forum" element={<Forum />} />
    </Routes>
  </Router>
);

export default App;
