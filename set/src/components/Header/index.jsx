// ======================================================
// 📄 Header Page Structure
// ======================================================
// 1️⃣ Top Strip
//    ├── Container
//    │   ├── col1 → نص ترحيبي أو إعلان صغير
//    │   └── col2 → روابط (Help Center, Order Tracking)
//
// 2️⃣ Main Header
//    ├── col1 → شعار الموقع (Logo Image)
//    ├── col2 → مربع البحث (Search Component)j
//    └── col3 → روابط المستخدم + أيقونات:
//         • Login / Register
//         • Compare (IoGitCompareOutline)
//         • Wishlist (IoIosHeartEmpty)
//         • Cart (MdOutlineShoppingCart)
//
// ======================================================
// 🧰 Dependencies Used
// - React Router (Link)
// - MUI: Badge, IconButton, Tooltip, styled
// - React Icons: IoGitCompareOutline, IoIosHeartEmpty, MdOutlineShoppingCart
// - Custom Component: Search
// =====================================================

import { Link } from "react-router-dom";
import React from "react";
import Search from "../Search";
import Button from "@mui/material/Button";
import Navigation from "../Header/Navigation";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import Tooltip from "@mui/material/Tooltip";

// ===== Styled Components =====
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

// ===== Header Component =====
const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t-[1px]  border-gray-250  border-b-[1px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className=" text-[20px] font-[400] ">
                Lorem,y only ge, architid!
              </p>
            </div>

            {/* links */}
            <div className="col2 flex items-center justify-between">
              <ul className="  flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[15px] link font-[400] transition"
                  >
                    Help center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[15px] link font-[400] transition"
                  >
                    order-tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== Main Header ===================== */}
      <div className="header py-1   border-t-[1px]  border-gray-250  border-b-[1px]">
        <div className="  flex items-center justify-between">
          <div className="col1 w-[25%] ">
            <Link to={"/"}>
              <img src="shping.jpg" width={200} height={100} />
            </Link>
          </div>
          <div className="col2  w-[45%] ">
            <Search />
          </div>
          <div className="col3  w-[30%] flex items-center  pl-7 ">
            {/* justify-endcc */}
            <ul className="flex items-center gap-3   w-full">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                &nbsp;/&nbsp;
                <Link
                  to={"/register"}
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              {/* Compare */}
              <li>
                {/*  placement="top" */}
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              {/* Wishlist */}
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosHeartEmpty />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              {/* Cart */}
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
 {/*===== Navigation Component ===== */}

      <Navigation />
    </header>
  );
};

export default Header;
