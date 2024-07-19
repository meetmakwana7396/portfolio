import React from "react";

const AboutSection = () => {
  return (
    <section className="flex justify-center items-start text-center" id="about">
      <div className="space-y-6">
        <h1
          className="text-4xl font-semibold text-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          ABOUT ME
        </h1>
        <p
          className="text-lg max-w-3xl font-thin mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-anchor-placement="center-bottom">
          I wear two hats: a skilled front-end developer leading a team of
          junior developers, and a passionate creative individual. Beyond
          crafting user-friendly interfaces, I&apos;m fascinated by User
          Experience (UX) and System Design. I share my knowledge by writing
          about practical code patterns and concepts used to improve real-world
          applications. When I&apos;m not coding, I delve into strategic games
          like chess and cricket. I also find solace and expression in music and
          sketching. My exploration extends to the realm of spirituality,
          seeking a deeper understanding of life&apos;s purpose.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
