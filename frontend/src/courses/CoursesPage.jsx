import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";


function CoursesPage() {
    // console.log(list);
  return (
    <div>
      {/* <Navbar /> */}
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default CoursesPage;
