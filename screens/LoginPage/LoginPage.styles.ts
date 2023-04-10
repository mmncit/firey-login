import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4f1f9",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 50,
    textAlign: "center",
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
  signUpLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  forgotPasswordLink: {
    color: "blue",
    textDecorationLine: "underline",
    alignSelf: "flex-end",
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
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  socialButtonText: {
    textAlign: "center",
  },
});
