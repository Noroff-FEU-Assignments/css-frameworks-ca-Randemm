import React from "react";

const BoxList = () => {
  return (
    <main className="max-w-8xl flex mx-auto md:mx-32">
      <div className="mb-20 flex flex-col justify-center space-y-8">
        <h1 className="font-Open mt-12 mb-6 text-4xl text-secondary">
          Page heading
        </h1>
        <div className="flex flex-row flex-wrap justify-evenly gap-y-8 gap-x-8">
          <TailwindCSSContainerBeige />
          <TailwindCSSContainerBeige />
          <TailwindCSSContainerWhite />
          <TailwindCSSContainerBeige />
          <TailwindCSSContainerBeige />
          <TailwindCSSContainerPink />
          <TailwindCSSContainerBeige />
          <TailwindCSSContainerWhite />
        </div>
      </div>
    </main>
  );
};
function TailwindCSSContainerWhite() {
  return (
    <div className="container p-36 h- max-w-xs bg-white border-2 border-smashpink rounded-xl shadow-md"></div>
  );
}
function TailwindCSSContainerPink() {
  return (
    <div className="container p-36 max-w-xs bg-smashpink border-2 border-white rounded-xl shadow-md"></div>
  );
}
function TailwindCSSContainerBeige() {
  return (
    <div className="container p-36 max-w-xs bg-softbeige rounded-xl shadow-md"></div>
  );
}
export default BoxList;
