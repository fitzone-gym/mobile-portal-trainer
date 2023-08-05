import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal:30,
    marginBottom: 30,
    backgroundColor: "#E54646",
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  footerBtns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },

  footericon: {
    color: "white",
  },
});

export default styles;
