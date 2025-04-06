import React from "react";
import Image from "../ui/Image";

export default function Home() {
  return (
    <>
      <Image src="/image/banner.jpg" alt="Placeholder Image" tabletSrc="/image/banner-tablet.jpg" mobileSrc="/image/banner-mobile.jpg"/>
      <div>
        <h1>Welcome to Our Website</h1>
        <p>
          This is a simple CRUD application built with React. Feel free to explore
          and interact with the features provided.
        </p>
        <button onClick={() => alert("Button clicked!")}>Click Me</button>
      </div>
    </>
  );
}