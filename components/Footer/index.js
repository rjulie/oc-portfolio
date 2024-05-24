import React from "react";
import Socials from "../Socials";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TRAVAILLONS
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              ENSEMBLE
            </h1>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-bold text-gray-300 mt-2 laptop:mt-10 p-2 laptop:p-0">
        Template React développé avec ❤ par Chetan Verma, et adapté, ajusté, modifié avec ❤ également par Julie Reynal.
      </div>
    </>
  );
};

export default Footer;
