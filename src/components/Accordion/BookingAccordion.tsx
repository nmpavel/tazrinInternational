'use client'
import React, { Fragment } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  children?: React.ReactNode;
  default: boolean;
  title: string;
  subtitle : string
  tcls? : string
  titleClass?: string;
  contentClass?: string;
  icons?: {
    open: React.ReactNode;
    close: React.ReactNode;
  };
};

const BookingAccordion = (p: Props) => {
  const [active, setActive] = React.useState(p.default || false);

  return (
    <Fragment>
      <div className={`${p.titleClass} ${!active ? 'bg-[#F8F8F8]' : "bg-white"} my-2 flex justify-center items-center relative`}
        onClick={() => setActive(!active)}

      >
        <div className="text-center ">
        <h3 className={`${p.tcls} pb-3`}>{p.title}</h3>
        <p className="text-lg text-pc">{p.subtitle}</p>
        </div>
        <button
          className="border-none bg-transparent text-2xl absolute top-3 right-3"
        >
          {p.icons ? (
            active ? (
              p.icons.close
            ) : (
              p.icons.open
            )
          ) : active ? (
            <IoIosArrowDown />
          ) : (
            <IoIosArrowUp />
          )}
        </button>
      </div>

      <div
        className={`${
          p.contentClass
        } overflow-x-hidden overflow-y-auto transition-all max-h-0 duration-700 bg-white ${
          active ? "max-h-96" : ""
        }`}
      >
        {p.children}
      </div>
    </Fragment>
  );
};

export default BookingAccordion;
