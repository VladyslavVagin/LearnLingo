import React from "react";
import styled from "styled-components";
import { ThreeCircles } from "react-loader-spinner";

export const LoaderBackdrop = styled.div`
  width: 100dvw;
  height: 100dvh;
  position: fixed;
`;

const Loader = () => {
  return (
    <LoaderBackdrop>
      <ThreeCircles
        visible={true}
        height="120"
        width="120"
        color="var(--accent-color)"
        ariaLabel="three-circles-loading"
        wrapperStyle={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />
    </LoaderBackdrop>
  );
};

export default Loader;
