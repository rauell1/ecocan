import React from "react";
import TestimonialCard from "./testimonialCard";

const testimonialsData = [
  {
    image: "/assets/images/events/memoji.png",
    name: "Kenya Rugby",
    surname: "International Safari 7s",
    testimony: "Our official 2023 international Safari Sevens sustainability partners, ECOCAN. Asante sana for keeping us green!",
    title: "CEO, Company Inc.",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: "Sportspesa",
    surname: "Legends",
    testimony: "Dear Ecocan... asanteni sana for supporting the #SportPesaLegendsCup we couldn't have done it without you. #KEvUGLegends #WazeeHukumbuka",
    title: "CTO, Tech Solutions",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: "Kenya",
    surname: "Harlequins",
    testimony: "Committed to a cleaner, greener future! Excited to introduce Christie 7s official waste management partner, ECOCAN, dedicated to sustainable solutions that keep our environment pristine.",
    title: "Manager, Business Corp.",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: " Kabeberi",
    surname: "7s",
    testimony: "Exciting news! We are teaming up with ECOCAN to make #Kabeberi 7s an ECO-friendly event. Let’s tackle plastic pollution together. Say no to single use plastics and help keep our environment clean by disposing of litter in designated trash points around the venue",
    title: "Director, Creative Agency",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#2F313F] py-12 px-4 xl:px-0">
      <div className="max-w-[72rem] mx-auto py-8">
        <h2 className="bg-gradient-to-tr from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text capitalize mb-2 text-center text-[2rem] font-medium">
          Testimonials
        </h2>
        <div className="grid lg:grid-cols-2 gap-5 mb-5">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              surname={testimonial.surname}
              testimony={testimonial.testimony}
              title={testimonial.title}
            />
          ))}
        </div>
        <p className="text-[#4AC63F] font-inter text-[16px] font-bold leading-[20px] text-center">
          A win for the fan, for you, and most importantly, for the Environment
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
