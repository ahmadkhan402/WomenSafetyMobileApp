import { StyleSheet } from "react-native";
import { colors } from "../../utils/database";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    color: "#fff",
    fontSize: 22,
  },
  btn: {
    backgroundColor: colors.btnBg,
    padding: 10,
    paddingHorizontal: 70,
    borderRadius: 30,
    elevation: 12,
    marginBottom: 50,
  },
});
export default styles;