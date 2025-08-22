// src/components/DownloadAppSection.jsx
import { CheckCircle } from "lucide-react";

// Import images from assets
import googlePlay from "../assets/google-play-badge.png";
import appStore from "../assets/app-store-badge.png";
import mockup from "../assets/app-mockup.png";

export default function DownloadAppSection() {
  return (
    <section className="bg-[#f8f3e9] py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 rounded-2xl mt-12">
      {/* Left Content */}
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold text-green-900 mb-4">
          Download Amrutam Ayurveda App Now
        </h2>
        <p className="text-gray-600 mb-6 max-w-md">
          The Amrutam Ayurveda App is your one-stop app for all things Ayurveda.
          Apart from mimicking the website, the app has added benefits:
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            "Access To Prescriptions",
            "Track Health Efficiently",
            "Direct Chat With Doctors",
            "In-App Reminders For Consultations",
          ].map((benefit, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm"
            >
              <CheckCircle className="text-green-700 w-5 h-5" />
              <span className="text-sm font-medium text-gray-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>

        {/* Store Buttons */}
        <div className="flex gap-4">
          <a href="#">
            <img src={googlePlay} alt="Get it on Google Play" className="h-12" />
          </a>
          <a href="#">
            <img src={appStore} alt="Download on App Store" className="h-12" />
          </a>
        </div>
      </div>

      {/* Right Image (Mockup phone) */}
      <div className="flex-1 flex justify-center">
        <img
          src={mockup}
          alt="Amrutam Ayurveda App"
          className="w-64 md:w-80"
        />
      </div>
    </section>
  );
}
