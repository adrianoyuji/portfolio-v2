import React from "react";
import { useLayout } from "hooks/layout";

const Billboard = () => {
  const { billboardRef } = useLayout();
  return (
    <section ref={billboardRef} className="w-full min-h-full">
      <div className="bg-image">
        <div className="rounded-l-lg bg-black bg-opacity-60 w-full h-2/5 sm:h-full sm:w-1/2 flex items-center justify-center flex-col">
          <h1 className="main-title">Hey there! I'm Adriano</h1>
          <h2 className="sub-title">and I am a Web Developer!</h2>
        </div>
      </div>
    </section>
  );
};

export default Billboard;
