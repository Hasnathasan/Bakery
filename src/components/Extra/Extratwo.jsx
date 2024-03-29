import { motion } from "framer-motion";

const Extratwo = () => {
  return (
    <div className="container my-24 pl-5 md:pl-0 md:flex gap-10 justify-center mx-auto">
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="w-[400px]"
      >
        <p className="text-3xl font-bold text-[#2e7d32]">
          Big Momment Lil Pastry
        </p>
        <p className="my-5">
          Cake&apos;s are not just a desert they are a little slice of happiness. To
          make your special more enjoyable we <br />
          are here with freshly baked products.
        </p>
        <img
          className="w-96 shadow-lg"
          src="https://i.ibb.co/mDyV9JB/2023-11-05-2.png"
          alt="a pic of a cake"
        />
      </div>
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="mt-4 w-[400px]"
      >
        <img
          className="w-96 shadow-lg"
          src="https://i.ibb.co/q0QV6Gq/strawberries-and-cream-french-macarons.jpg "
          alt="pic of breads"
        />
        <p className="my-5">
          Cake&apos;s are not just a desert they are a little slice of happiness. To
          make your special more enjoyable we <br />
          are here with freshly baked products.
        </p>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="btn bg-[#2e7d32] text-white"
        >
          Book Us
        </motion.button>
      </div>
    </div>
  );
};

export default Extratwo;
