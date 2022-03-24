import React from "react";
import FileBase from "react-file-base64";
import useStyles from "./styles";

const FileUpload = ({ postData, setPostData }) => {
  const classes = useStyles();
  return (
    <div className={classes.fileInput}>
      <FileBase
        type="file"
        multiple={false}
        onDone={({ base64 }) =>
          setPostData({ ...postData, selectedFile: base64 })
        }
      />
    </div>
  );
};

export default FileUpload;
