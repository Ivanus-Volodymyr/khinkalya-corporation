import React, { FC } from 'react';
import { ReviewsList } from "../ReviewsList/ReviewsList";

const Main: FC = () => {
  return (
    <div
      style={{ margin: 0, height: 'initial', position: 'fixed', zIndex: -1 }}
    >
      <video
        width={'100%'}
        autoPlay
        muted
        loop={true}
        className="video"
        src={'/video/video.mp4'}
      />

      <ReviewsList/>
    </div>
  );
};

export { Main };
