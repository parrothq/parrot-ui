import { styled } from "../../stitches/stitches.config";
import { Box } from "../box";

const Flex = styled(Box, {
  display: "flex",

  variants: {
    stack: {
      true: {
        flexDirection: "column !important",
      },
    },
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
      rowReverse: { flexDirection: "row-reverse" },
      columnReverse: { flexDirection: "column-reverse" },
    },
    align: {
      start: { alignItems: "flex-start" },
      center: { alignItems: "center" },
      end: { alignItems: "flex-end" },
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      center: { justifyContent: "center" },
      end: { justifyContent: "flex-end" },
      between: { justifyContent: "space-between" },
    },
    wrap: {
      noWrap: { flexWrap: "nowrap" },
      wrap: { flexWrap: "wrap" },
      wrapReverse: { flexWrap: "wrap-reverse" },
    },
    gap: {
      1: { gap: "$1" },
      2: { gap: "$2" },
      3: { gap: "$3" },
      4: { gap: "$4" },
      5: { gap: "$5" },
      6: { gap: "$6" },
      7: { gap: "$7" },
      8: { gap: "$8" },
      9: { gap: "$9" },
      10: { gap: "$10" },
      11: { gap: "$11" },
      12: { gap: "$12" },
      14: { gap: "$14" },
      16: { gap: "$16" },
      20: { gap: "$20" },
      24: { gap: "$24" },
      28: { gap: "$28" },
      32: { gap: "$32" },
      36: { gap: "$36" },
      40: { gap: "$40" },
      44: { gap: "$44" },
      48: { gap: "$48" },
      52: { gap: "$52" },
      56: { gap: "$56" },
      60: { gap: "$60" },
      64: { gap: "$64" },
      72: { gap: "$72" },
      80: { gap: "$80" },
      96: { gap: "$96" },
    },

    rowGap: {
      1: { rowGap: "$1" },
      2: { rowGap: "$2" },
      3: { rowGap: "$3" },
      4: { rowGap: "$4" },
      5: { rowGap: "$5" },
      6: { rowGap: "$6" },
      7: { rowGap: "$7" },
      8: { rowGap: "$8" },
      9: { rowGap: "$9" },
    },
    columnGap: {
      1: { columnGap: "$1" },
      2: { columnGap: "$2" },
      3: { columnGap: "$3" },
      4: { columnGap: "$4" },
      5: { columnGap: "$5" },
      6: { columnGap: "$6" },
      7: { columnGap: "$7" },
      8: { columnGap: "$8" },
      9: { columnGap: "$9" },
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: "noWrap",
  },
});

export default Flex;
