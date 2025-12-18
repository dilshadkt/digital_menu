import React from "react";

const EmptyScreen = () => {
  return (
    <div className="w-full h-full flex items-center flex-col gap-y-5 justify-center opacity-75">
      <iframe src="https://lottie.host/embed/5db954e2-f272-4c86-a692-870f051fbf69/pbcepChnlk.lottie"></iframe>
      <span className="text-btn/75">No Itmes Found</span>
    </div>
  );
};

export default EmptyScreen;
