import { FC }, React from "react";

const Main:FC  = () => {

  return (
    <div style={{margin:0,height:'initial',position:'fixed',zIndex:-1}}>
      <video width={'100%'}  autoPlay muted
             className="video"
             src={
               "https://okten.s3.amazonaws.com/avatar/%D0%A5%D1%96%D0%BD%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8F+ukr+(1).mp4"
             }
      />
    </div>
  );
};

export { Main };
