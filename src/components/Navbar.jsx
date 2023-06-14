import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { SiThemoviedatabase } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [term, setTerm] = useState("");
  const [searchBar, setSearchBar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      toggleScroll();
    });
  }, []);

  const toggleScroll = () => {
    if (window.scrollY > 60) {
      navRef?.current.classList.add("bg-black");
    }
    if (window.scrollY < 60) {
      navRef?.current.classList.remove("bg-black");
    }
  };
  const handleMenu = () => {
    setMenu(!menu);
    setSearchBar(false);
  };

  const handleSearch = () => {
    setSearchBar((prev) => !prev);
    setMenu(true);
    setTerm("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${term}`);
    setSearchBar(false);
  };
  return (
    <div
      className="fixed h-14 top-0 w-full z-20 text-white transition-all duration-500"
      ref={navRef}
    >
      <div
        className={`max-w-screen-lg mx-auto bg-transparent h-full flex items-center justify-between px-4`}
      >
        <Link
          to="/"
          className="cursor-pointer text-orange-400"
          onClick={() => setMenu(true)}
        >
          <SiThemoviedatabase size={45} />
        </Link>
        <ul className="flex items-center justify-around gap-3">
          {location.pathname !== "/" && (
            <BiSearch
              size={20}
              className="cursor-pointer md:hover:text-orange-400"
              onClick={handleSearch}
            />
          )}
          <Link
            to="/explore/movie"
            className="text-sm uppercase hover:text-orange-400 hidden md:block cursor-pointer"
          >
            Movies
          </Link>
          <Link
            to="/explore/tv"
            className="text-sm uppercase hover:text-orange-400 hidden md:block cursor-pointer"
          >
            TV Shows
          </Link>
          {menu ? (
            <AiOutlineMenu
              size={20}
              className="md:hidden"
              onClick={handleMenu}
            />
          ) : (
            <RxCross1 size={20} className="md:hidden" onClick={handleMenu} />
          )}
        </ul>
        {/* mobile menu */}
        <div
          className={`absolute left-0 top-14 w-full ${
            scrollY > 30 ? "bg-black" : "bg-inherit"
          } px-4 py-2 md:hidden ${menu ? "hidden" : "block"} `}
        >
          <ul className="flex flex-col gap-6">
            <Link
              to="/explore/movie"
              className="uppercase text-sm"
              onClick={() => setMenu(true)}
            >
              Movies
            </Link>
            <Link
              to="/explore/tv"
              className="uppercase text-sm"
              onClick={() => setMenu(true)}
            >
              Tv shows
            </Link>
          </ul>
        </div>
      </div>
      {searchBar && (
        <div className="bg-orange-400 h-10">
          <form
            className="max-w-screen-lg mx-auto h-full flex items-center justify-between gap-2 px-4"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              type="text"
              className="w-full p-2 text-black outline-none focus:outline-none"
              placeholder="Search Any Movie or TV Show..."
              onChange={(event) => setTerm(event.target.value)}
              value={term}
            />
            <RxCross1
              className="cursor-pointer"
              size={15}
              onClick={handleSearch}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default Navbar;
