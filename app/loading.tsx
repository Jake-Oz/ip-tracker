import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen text-blue-400 mt-10">
      <div className=" loading loading-spinner"></div>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
