import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  footerBtns: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
  footer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#E54646",
    borderRadius: 50,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  footericon: {
    color: "white",
  },
});

export default styles;
