import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    color: "white",
    "&:hover": {
      backgroundColor: "#8759C1",
    },
  },
  buttonClear: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));
