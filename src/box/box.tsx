import React from "react";

const Box = React.forwardRef((props, ref) => {
  return <div></div>;
});

Box.displayName = "Box";

export default Box;
