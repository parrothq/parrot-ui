import React from "react";
import { styled } from "../../stitches/stitches.config";

const Box = styled("div", {
  height: 100,
  width: 500,
  variants: {
    position: {
      relative: {
        position: "relative",
      },
      absolute: {
        position: "absolute",
      },
      fixed: {
        position: "fixed",
      },
    },

    stretchX: {
      true: {
        width: "100%",
      },
    },

    stretchY: {
      true: {
        height: "100%",
      },
    },
  },
});

export default Box;
