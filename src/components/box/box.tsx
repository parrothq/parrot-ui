import React from "react";
import { styled } from "../../stitches/stitches.config";

const StyledBox = styled("div", {
  background: "red",
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
  },
});

type BoxProps = React.ComponentProps<typeof StyledBox>;

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return <StyledBox ref={ref} {...props}></StyledBox>;
});

Box.displayName = "Box";

export default Box;
