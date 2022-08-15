import React, { FC } from "react";

const Main: FC = () => {

  return (
    <div>
      <video style={{ margin: 0, height: "initial", position: "fixed", zIndex: -1 }}
        width={"100%"}
        autoPlay
        muted
        className="video"
        src={
          "/video/video.mp4"
        }
      />
    </div>
  );
};

export { Main };
