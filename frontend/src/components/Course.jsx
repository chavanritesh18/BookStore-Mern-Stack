import React from "react";
import axios from "axios";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to see you
            <span className="text-pink-500"> here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla at
            aliquid minus quis dolorem necessitatibus. Eius molestias iste
            pariatur ad sapiente facere eveniet? Perspiciatis nihil assumenda
            sit cupiditate aliquam voluptatem! Reiciendis expedita placeat
            illum. Magni ea repellat sunt voluptatibus, dolores voluptas
            consectetur tenetur dolor soluta enim! Soluta dolores quidem magnam
            fuga corrupti adipisci maxime, sequi aperiam dolorem, minus atque
            fugiat.
          </p>
          <Link to="/">
          <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-yellow-300 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
           {book.map((item) => (
            
            <Cards key={item.id} item={item}/>
            
           ))}
        </div>
      </div>
    </>
  );
}

export default Course;

  