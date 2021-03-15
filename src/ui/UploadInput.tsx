// import { FC } from 'react'

// export interface UploadInputProps {}
// export const UploadInput: FC<UploadInputProps> = () => {
//   return (
//     <div className="flex flex-1 bg-primary-500">
//       <input className="" type="file" />
//     </div>
//   )
// }



import { FC, useRef, useState } from 'react'

export interface UploadInputProps { }
export const UploadInput: FC<UploadInputProps> = () => {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });
  console.log(newUserInfo)

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <button type="submit">Create New User</button>
      </form>
      {newUserInfo.profileImages.length > 0 ? <img src={URL.createObjectURL(newUserInfo.profileImages[0])} alt="state foto" /> : null}
    </div>
  );
}


const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000;

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);


const FileUpload = ({
  label,
  updateFilesCb,
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  ...otherProps
}) => {
  const fileInputField = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState({});

  const handleUploadBtnClick = () => {
    // console.log(fileInputField.current)
    if (null !== fileInputField.current) {
      console.log(fileInputField.current.click())
      fileInputField.current.click();
    }

  };

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };


  return (
    <>
      <section>
        <label>{label}</label>
        <p>Drag and drop your files anywhere or</p>
        <button type="button" onClick={handleUploadBtnClick}>
          <i className="fas fa-file-upload" />
          <span> Upload {otherProps.multiple ? "files" : "a file"}</span>
        </button>
        <input className="bg-black"
          type="file"
          ref={fileInputField}
          onChange={handleNewFileUpload}
          title=""
          value=""
          {...otherProps}
        />
      </section>
    </>
  );
};
