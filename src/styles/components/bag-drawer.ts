import { styled } from "..";

export const BodyContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
});

export const DrawerHeader = styled("header", {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  button: {
    background: "none",
    color: "$green500",
    border: "none",
    cursor: "pointer",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "160%",
  },
});

export const DrawerContent = styled("div", {});

export const DrawerFooter = styled("footer", {
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  button: {
    width: "100%",
    marginTop: "auto",
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled):hover": {
      backgroundColor: "$green300",
    },
  },
});

export const FooterContainerInfo = styled("section", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",

  h6: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "160%",

    color: "#E1E1E6",
  },

  h3: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "160%",

    color: "#E1E1E6",
  },
});

export const LeftInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const RightInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-end",
});

export const LineItem = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "16px",
});

export const Item = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  gap: 24,

  img: {},

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",

    h4: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "160%",

      display: "flex",
      alignItems: "center",

      color: "#C4C4CC",
    },

    h3: {
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "160%",

      display: "flex",
      alignItems: "center",

      color: "#E1E1E6",
    },

    button: {
      background: "none",
      color: "$green500",
      border: "none",
      cursor: "pointer",

      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "16px",
      lineHeight: "160%",
    },
  },
});

export const ItemImageContainer = styled("div", {
  width: 102,
  height: 102,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
