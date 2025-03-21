import Image from "@/node_modules/next/image";
import React from "react";

const Sponsors = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="flex text-2xl font-bold">Our Sponsors</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="flex flex-col items-center justify-center">
          <Image src="/zoho.png" alt="zoho" width={220} height={80} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/wondersoftB.png"
            alt="wondersoft"
            width={220}
            height={80}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/webhr.svg" alt="webhr" width={220} height={80} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image src="/xero_1.png" alt="xero" width={150} height={80} />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
