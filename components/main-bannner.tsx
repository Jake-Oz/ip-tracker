import React from "react";
import { MapProps } from "@/lib/types";

const Banner = ({ data }: { data: MapProps }) => {
  return (
    <div className="relative z-10 mx-auto sm:w-full sm:max-w-[1100px] h-[290px] w-[330px] sm:h-40 bg-white rounded-xl -translate-y-32 sm:-translate-y-20 p-8">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-3 sm:gap-0 sm:justify-around sm:items-center h-full">
        <div className="flex flex-col sm:justify-start sm:items-start gap-1 sm:gap-4">
          <h2 className="text-[10px] sm:text-sm font-bold tracking-widest text-center text-darkGray uppercase ">
            IP Address
          </h2>
          <h1 className="text-xl sm:text-2xl font-medium"> {data?.ip || ""}</h1>
        </div>
        <div className="hidden sm:block w-0 border-l-2 border-l-gray-200 h-2/3"></div>
        <div className="flex flex-col sm:justify-start sm:items-start gap-1 sm:gap-4">
          <h2 className="text-[10px] sm:text-sm font-bold tracking-widest text-center text-darkGray uppercase ">
            Location
          </h2>
          <div>
            <h1 className="text-xl sm:text-2xl  font-medium ">
              {" "}
              {data?.location.city || ""}
            </h1>
            <h1 className="text-xl sm:text-2xl  font-medium">
              {" "}
              {data?.location.postalCode || ""}
            </h1>
          </div>
        </div>
        <div className="hidden sm:block w-0 border-l-2 border-l-gray-200 h-2/3"></div>
        <div className="flex flex-col sm:justify-start sm:items-start gap-1 sm:gap-4">
          <h2 className="text-[10px] sm:text-sm  font-bold tracking-widest text-center text-darkGray uppercase ">
            Timezone
          </h2>
          <h1 className="text-xl sm:text-2xl  font-medium">
            {"UTC "}
            {data?.location.timezone || ""}
          </h1>
        </div>
        <div className="hidden sm:block w-0 border-l-2 border-l-gray-200 h-2/3"></div>
        <div className="flex flex-col sm:justify-start sm:items-start gap-1 sm:gap-4">
          <h2 className="text-[10px] sm:text-sm  font-bold tracking-widest text-center text-darkGray uppercase ">
            ISP
          </h2>
          <h1 className="text-xl sm:text-2xl  font-medium">
            {" "}
            {data?.isp || ""}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
