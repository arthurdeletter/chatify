import { FileInputContainer } from "./file-input.styled";
import { PhotoIcon, PaperClipIcon } from "@heroicons/react/24/outline";

type FileInputProps = {
  label?: string;
  fileType?: "file" | "image";
  name: string;
};

const ICONS = {
  file: <PaperClipIcon />,
  image: <PhotoIcon />,
};

export const FileInput = ({
  label,
  fileType = "file",
  name,
}: FileInputProps) => {
  return (
    <FileInputContainer>
      <label htmlFor={name}>
        {fileType && ICONS[fileType]}
        <span>{label}</span>
      </label>

      <input type="file" name={name} id={name} />
    </FileInputContainer>
  );
};
