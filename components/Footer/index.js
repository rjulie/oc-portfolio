import React from "react";
import Socials from "../Socials";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h2 className="text-2xl text-bold">Contact.</h2>
          <div className="mt-10">
            <h3 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TRAVAILLONS
            </h3>
            <h3 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              ENSEMBLE
            </h3>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm text-bold text-gray-500 mt-2 laptop:mt-10 p-2 laptop:p-0">
        Fait avec ❤. Template React développé par Chetan Verma et adapté, ajusté, modifié par Julie Reynal.
      </div>
    </>
  );
};

export default Footer;
