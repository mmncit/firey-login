import { StyleSheet } from "react-native";
import { padding } from "../theme/utils";
import { minWidth } from "react-native-stylex/media-query";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    ...padding(40, 20),
    ...minWidth(500, {
      // if window width MORE then 500 apply style
      alignItems: "center",
    }),
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  signUpText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  Link: {
    alignSelf: "center",
    marginBottom: 30,
    color: "#007aff",
    fontWeight: "bold",
    fontSize: 16,
  },
  separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "gray",
  },
  socialButton: {
    backgroundColor: "#ccc",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  socialButtonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 14,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginVertical: 20,
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  link: {
    alignSelf: "center",
    marginBottom: 30,
  },
  linkText: {
    color: "#007aff",
    fontWeight: "bold",
    fontSize: 16,
  },
  subheader: {
    fontSize: 16,
    marginBottom: 40,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  codeInput: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
