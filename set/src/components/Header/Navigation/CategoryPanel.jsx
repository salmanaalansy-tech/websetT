import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPenal(newOpen);
  };
  const [openSubmuneIndex, setOpenSubmune] = useState(null);

  const openSubmune = (index) => {
    if (openSubmuneIndex === index) {
      setOpenSubmune(null);
    } else {
      setOpenSubmune(index);
    }
  };

  const [openSubmune_innerIndex, setOpenSubmune_inner] = useState(null);

  const openSubmune_inner = (index) => {
    if (openSubmune_innerIndex === index) {
      setOpenSubmune_inner(null);
    } else {
      setOpenSubmune_inner(index);
    }
  };

  const DrawerList = (
    // onClick={toggleDrawer(false)}

    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-2 text-[20px] flex items-center justify-between cursor-pointer ">
        Shop By Categries{" "}
        <IoIosClose
          className="text-[30px] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>
      <Divider />
      <div className="scroll">


        <ul className="w-full">
          <li className="list-none items-center   flex relative ">
            <Link to={"/"} className="w-full ">
              <Button className="w-full   text-left !justify-start !px-3  !text-black ">
                Fashion
              </Button>
            </Link>

            

            {openSubmuneIndex === 1 ? (
              <FaRegSquareMinus
                className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                onClick={() => openSubmune(1)}
              />
            ) : (
              <FaRegPlusSquare
                className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                onClick={() => openSubmune(1)}
              />
            )}
          </li>

          {openSubmuneIndex === 1 && (
            <ul className="w-full submune ">
              <li className=" list-none items-center   flex relative ">
                <Link to={"/"} className="w-full ">
                  <Button className="w-full   text-left !justify-start !px-8 !text-black ">
                    Fashion2
                  </Button>
                
                </Link>

                {openSubmune_innerIndex === 1 ? (
                  <FaRegSquareMinus
                    className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                    onClick={() => openSubmune_inner(1)}
                  />
                ) : (
                  <FaRegPlusSquare
                    className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                    onClick={() => openSubmune_inner(1)}
                  />
                )}
              </li>
            </ul>
          )}

          {openSubmune_innerIndex === 1 && (
            <ul className="inner_submune w-full cursor-pointer">
              <li className="list-none flex items-center relative">
                <Link
                  to="/"
                  className="w-full text-left !justify-start !px-12 link transition text-[14px]"
                >
                  Fashion3
                </Link>
              </li>

              <li className="list-none flex items-center relative">
                <Link
                  to="/"
                  className="w-full text-left !justify-start !px-12 link transition text-[14px]"
                >
                  Fashion11
                </Link>
              </li>
            </ul>
          )}
        </ul>

 
<ul className="w-full">
          <li className="list-none items-center   flex relative ">
            <Link to={"/"} className="w-full ">
              <Button className="w-full   text-left !justify-start !px-3  !text-black ">
                Fashion_2
              </Button>
            </Link>

            {openSubmuneIndex === 0 ? (
              <FaRegSquareMinus
                className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                onClick={() => openSubmune(0)}
              />
            ) : (
              <FaRegPlusSquare
                className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                onClick={() => openSubmune(0)}
              />
            )}
          </li>

          {openSubmuneIndex ===0 && (
            <ul className="w-full submune ">
              <li className=" list-none items-center   flex relative ">
                <Link to={"/"} className="w-full ">
                  <Button className="w-full   text-left !justify-start !px-8 !text-black ">
                    Fashion2_@
                  </Button>
                
                </Link>

                {openSubmune_innerIndex === 0 ? (
                  <FaRegSquareMinus
                    className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                    onClick={() => openSubmune_inner(0)}
                  />
                ) : (
                  <FaRegPlusSquare
                    className=" absolute cursor-pointer  !top-[10px] !right-[15px]  "
                    onClick={() => openSubmune_inner(0)}
                  />
                )}
              </li>
            </ul>
          )}

          {openSubmune_innerIndex === 0 && (
            <ul className="inner_submune w-full cursor-pointer">
              <li className="list-none flex items-center relative">
                <Link
                  to="/"
                  className="w-full text-left !justify-start !px-12 link transition text-[14px]"
                >
                  Fashion3@
                </Link>
              </li>

              <li className="list-none flex items-center relative">
                <Link
                  to="/"
                  className="w-full text-left !justify-start !px-12 link transition text-[14px]"
                >
                  Fashion00@
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </Box>


  );

  return (
    <>
    
      <Drawer open={props.isOpenCatPenal} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default CategoryPanel;
