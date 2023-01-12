import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "12px",
  gap: "12px",

  //position: "absolute",
  width: "48px",
  height: "48px",
  right: "136px",
  top: "42px",

  background: "#202024",
  borderRadius: "6px",
});

export const Badge = styled("span", {
  top: "128px",
  right: "342px",
  position: "absolute",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid $gray900",
  width: "26px",
  height: "26px",
  background: "#00875F",
  borderRadius: "50px",
  color: "#fff",
});
