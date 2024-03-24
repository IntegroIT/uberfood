import { StyleSheet } from "react-native";


export default StyleSheet.create({
  page: {
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
    borderRadius: 50,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },

  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },

  subtitle: {
    color: "grey",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
  menuTitle: {
    marginVertical: 10,
    fontSize: 16,
    letterSpacing: 5,
    
    },
    menuSubTitle: {
        borderColor: "orange",
        borderWidth: 1,
        justifyContent: "center",
        alignItems:"center"
  }
});
