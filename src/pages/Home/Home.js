import React from "react";
import About from "../../components/Footer/About";
import Footer from "../../components/Footer/Footer";
import Subscribe from "../../components/Footer/Subscribe";
import Navbar from "../../components/Header/Navbar";
import NavbarTop from "../../components/Header/NavbarTop";
import Category from "../../components/Main/Category";
import Collection from "../../components/Main/Collection";
import Suggested from "../../components/Main/Suggested";
import { data } from "../../constants/data";

export default function Home() {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Collection />
      <Category pictures={data.womenPics} />
      <Category pictures={data.menPics} />
      <Suggested />
      <About />
      <Subscribe />
      <Footer />
    </>
  );
}
