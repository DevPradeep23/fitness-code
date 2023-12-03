import React from "react";
const CollapsibleVideo = () => {
  return (
    <div className="lg:container mx-auto p-2 py-20 flex justify-center align-center"
    
    >
      <iframe
        src="https://www.youtube.com/embed/HnoPHqrdXQ8"
        title="YouTube Video"
        frameBorder="0" 
        allowFullScreen
        // borderRadius="30px"
        className="lg:w-[75%] lg:h-[60vh] w-[90%] h-[40vh] shadow-shadow md:hover:shadow-color scale-105 ease-in duration-300 "
    // style={{ boxShadow: '0px 0px 20px rgba(255, 167, 5)'}}

      ></iframe>
    </div>
  );
};

export default CollapsibleVideo;
