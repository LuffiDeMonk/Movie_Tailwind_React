import React from "react";
import { createPortal } from "react-dom";
import { RxCross1 } from "react-icons/rx";

const VideoPortal = ({ showTrailer, data }) => {
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 w-screen h-screen bg-red-300/10 z-30 flex items-center justify-center">
          <div className="w-80 md:w-[40rem] lg:w-[1080px] h-56 md:h-[28rem] lg:h-[480px] bg-white z-40 text-black">
            <RxCross1
              size={30}
              className="absolute top-7 right-10 text-white cursor-pointer"
              onClick={showTrailer}
            />
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${data}`}
            ></iframe>
          </div>
        </div>,
        document.getElementById("portal")
      )}
    </>
  );
};

export default VideoPortal;
