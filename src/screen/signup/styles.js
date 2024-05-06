import { StyleSheet } from "react-native";
import { colors } from "../../utils/database";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  Text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 22,
  },
  btn: {
    backgroundColor: colors.btnBg,
    padding: 10,
    paddingHorizontal: 45,
    borderRadius: 35,
    elevation: 12,
    marginBottom: 20,
  },
  inputView: {
    marginVertical: 20,
    alignItems: "center",
    borderColor: "#fff",
    elevation: 12,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "#fff",
    height: 45,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    marginLeft: 8,
    paddingRight: 34,
  },
  Icon: {
    height: 60,
    borderColor: "#fff",
    elevation: 12,
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
});
export default styles;