import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B5345",
  },
  heading: {
    color: "white",
    textShadow: "2px 2px 1px black",
  },
  image: {
    marginLeft: "15px",
    height: "50px",
    width: "50px",
    color: "white",
    textShadow: "2px 2px 1px black",
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse",
    },
  },
}));
