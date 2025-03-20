import Image from "@/node_modules/next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <h2 className="flex text-2xl font-bold">Our Sponsors</h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <Image src="/zoho.png" alt="zoho" width={220} height={80} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/wondersoftB.png" alt="zoho" width={220} height={80} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/webhr.svg" alt="zoho" width={220} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
