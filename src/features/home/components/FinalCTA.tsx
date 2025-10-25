import React from "react";
import Image from "next/image";
import HighlightText from "../../../components/HighlightText";

const FinalCTA = () => {
  return (
    <section className=" bg-white sm:mt-6 lg:mt-8  mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className=" bg-white my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div className=" bg-white sm:text-center lg:text-left">
          <h1 className=" bg-white text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Ready to </span>
            <span className="block xl:inline">
              <HighlightText>maximize your property</HighlightText>
            </span>{" "}
            <span className="block  xl:inline">investment?</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Join property owners who trust PropertyCraft to manage their
            investments. Experience professional property management that
            delivers results and peace of mind.
          </p>
          <div className=" bg-white mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/contact-us"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-800 hover:bg-brand-700 md:py-4 md:text-lg md:px-10"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>

        <div className=" bg-white lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-lg"
            src="https://images.squarespace-cdn.com/content/v1/65ead168a72f9a0dae55ee97/5cb995f8-fff1-4533-bfac-2978249bbd39/AWC_6186a+800x600.jpg?format=2500w"
            alt="Property Management"
            width={1000}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
