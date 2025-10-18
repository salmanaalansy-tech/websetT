import React, { useState } from "react";
import Button from "@mui/material/Button";
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "../Navigation/CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatPenal, setIsOpenCatPenal] = useState(false);
  const openCatPenal = () => {
    setIsOpenCatPenal(true);
  };

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-9">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full  "
              onClick={openCatPenal}
            >
              <CgMenuLeftAlt className="text-[20px]" />
              Shop By Categries
              <FaAngleDown className="text-[25px] font-bold ml-auto" />
            </Button>
          </div>

          <div className="col_2 w-[60%]  ">
            <ul className="flex items-center gap-3  nav">
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none  relative">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    Fishon
                  </Button>
                </Link>

                <div
                  className="submune absolute top-[100%]  left-[0%] min-w-[200px]  bg-white
              shadow-md opacity-0 transition-all "
                >
                  <ul>
                    <li className="list-none !w-full">
                      <Button className=" !text-black !w-full !justify-start  !rounded-none ">Men</Button>
                    </li>
                    <li className="list-none !w-full">
                      <Button className=" !text-black !w-full !justify-start !rounded-none">women</Button>
                    </li>
                    <li className="list-none !w-full">
                      <Button className=" !text-black !w-full !justify-start !rounded-none">kids</Button>
                    </li>
                    <li className="list-none !w-full">
                      <Button className=" !text-black !w-full !justify-start !rounded-none">girale</Button>
                    </li>
                    <li className="list-none !w-full">
                      <Button className=" !text-black  !w-full !justify-start  !rounded-none">boys</Button>
                    </li>
                  </ul>
                </div>


              </li>


              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    Elictroinc
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    Bages
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    shortMan
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    short
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    clothis
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    wer
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link className="link transition text-[18px] font-[500] ">
                  <Button
                    className="link transition !text-[18px] font-[500] !text-[rgba(0.0.0.7)]
                hover:!text-[#f77474] "
                  >
                    Women
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]  ">
            <p className="text-[18px]  font-[500]  flex gap-3 items-center mb-0 top-0">
              <GoRocket className="text-[20px]" />
              Loremr, idem.
            </p>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenCatPenal={isOpenCatPenal}
        setIsOpenCatPenal={setIsOpenCatPenal}
      />
    </>
  );
};

export default Navigation;
