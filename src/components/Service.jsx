import React from "react";
import s1 from "../assets/images/s1.jpg";
import s2 from "../assets/images/s2.jpg";
import s3 from "../assets/images/s3.jpg";
const Service = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4">
        <img src={s1} alt="Service1" className="h-10 w-14 object-cover" />
        <div className="mt-2 text-black">Service1</div>
      </div>
      <div className="flex flex-col items-center p-4">
        <img src={s2} alt="Service2" className="h-10 w-14 object-cover" />
        <div className="mt-2 text-orange-500">Service2</div>
        <div className="mt-1 h-1 w-16 bg-orange-500"></div>
      </div>
      <div className="flex flex-col items-center p-4">
        <img src={s3} alt="Service" className="h-10 w-14 object-cover" />
        <div className="mt-1 text-black">Service3</div>
      </div>
    </>
  );
};

export default Service;
