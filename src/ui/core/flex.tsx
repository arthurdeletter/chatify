import styled from "styled-components";

type FlexProps = {
  gap?: number;
  column?: boolean;
  reverse?: boolean;
  collide?: boolean;
  justify?: "start" | "end" | "center" | "between" | "evenly" | "around";
  align?: "center" | "start" | "end";
  css?: object;
};

const createGap = (gap: number) => {
  return `${gap}rem`;
};

const JUSTIFY_OPTIONS = {
  start: {
    justifyContent: "flex-start",
  },
  end: {
    justifyContent: "flex-end",
  },
  center: {
    justifyContent: "center",
  },
  between: {
    justifyContent: "space-between",
  },
  evenly: {
    justifyContent: "space-evenly",
  },
  around: {
    justifyContent: "space-around",
  },
};

const ALIGN_OPTIONS = {
  center: {
    alignItems: "center",
  },
  start: {
    alignItems: "flex-start",
  },
  end: {
    alignItems: "flex-end",
  },
};

export const Flex = styled.div<FlexProps>(
  ({
    gap,
    column = false,
    reverse = false,
    collide = false,
    justify = "start",
    align = "start",
    css,
  }) => ({
    display: "flex",
    flexDirection: column && reverse ? "column-reverse" : column ? "column" : reverse ? "row-reverse" : "row",
    gap: gap ? createGap(gap) : "0",
    flexWrap: collide ? "wrap" : "nowrap",
    ...(justify && JUSTIFY_OPTIONS[justify]),
    ...(align && ALIGN_OPTIONS[align]),
    ...css,
  })
);
