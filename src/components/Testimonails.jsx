import React from "react";
import Avataranisha from "../assets/avatar-anisha.png";
import Avatarali from "../assets/avatar-ali.png";
import Avatarrichard from "../assets/avatar-richard.png";

const Testimonails = () => {
  return (
    // max-w-6xl will apply a maximum width to the element on larger screens
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">What they’ve said</h2>

      {/* Testimonials Container */}

      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/*1 Anisha Li */}
        <div className=" flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100  md:w-1/3">
          {/* -mt-14 to applies a negative top margin.  it will move the element 14 units upwards from its normal position. */}
          <img src={Avataranisha} alt="Anisha img" className="w-16 -mt-14" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-gray-500 ">
            “Manage has supercharged our team’s workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.”
          </p>
        </div>

        {/*2 Ali Bravo */}
        <div
          className=" hidden  flex-col items-center p-6 space-y-6 
        rounded-lg bg-gray-100 md:flex md:w-1/3"
        >
          {/* -mt-14 to applies a negative top margin.  it will move the element 14 units upwards from its normal position. */}
          <img src={Avatarali} alt="Anisha img" className="w-16 -mt-14" />

          <h5 className="text-lg font-bold">Ali Bravo</h5>

          <p className="text-sm text-gray-500 ">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>

        {/*3 Richard Watts */}
        <div
          className=" hidden  flex-col items-center p-6 space-y-6 
        rounded-lg bg-gray-100 md:flex md:w-1/3"
        >
          {/* -mt-14 to applies a negative top margin.  it will move the element 14 units upwards from its normal position. */}
          <img src={Avatarrichard} alt="Anisha img" className="w-16 -mt-14" />

          <h5 className="text-lg font-bold">Richard Watts</h5>

          <p className="text-sm text-gray-500 ">
            “Manage allows us to provide structure and process. It keeps us
            organized and focused. I can’t stop recommending them to everyone I
            talk to!”
          </p>
        </div>
      </div>
      {/* Button Get Started*/}

      <div className="my-16 ">
        <a
          href="#"
          className="p-3 px-6 pt-2 text-white bg-orange-500 
            rounded-full self-baseline hover:bg-red-400 "
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Testimonails;
