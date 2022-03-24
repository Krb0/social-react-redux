import useStyles from "./styles";
import { TextField, Button, Typography, Paper, Grid } from "@material-ui/core";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import Capitalize from "../../utils/capitalize";
import FileUpload from "./FileUpload";
import { createPost } from "../../actions/posts.actions";

interface PostType {
  creator: String;
  title: String;
  message: String;
  tags: String;
  file: String;
}

const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState<PostType>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    file: "",
  });
  const clear = () => {};
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <Input field="creator" postData={postData} setPostData={setPostData} />
        <Input field="title" postData={postData} setPostData={setPostData} />
        <Input field="message" postData={postData} setPostData={setPostData} />
        <Input field="tags" postData={postData} setPostData={setPostData} />
        <FileUpload postData={postData} setPostData={setPostData} />
        <Grid container alignItems="center">
          <Grid item xs={10}>
            <Button
              className={classes.buttonSubmit}
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              className={classes.buttonClear}
              variant="contained"
              color="secondary"
              size="large"
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form;

const Input = ({
  field,
  postData,
  setPostData,
}: {
  field: string;
  postData: any;
  setPostData: Dispatch<SetStateAction<PostType>>;
}) => {
  return (
    <TextField
      name={Capitalize(field)}
      variant="outlined"
      label={Capitalize(field)}
      fullWidth
      value={postData[field]}
      onChange={(e) => setPostData({ ...postData, [field]: e.target.value })}
    />
  );
};
