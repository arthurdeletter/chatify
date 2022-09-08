import { FileInputContainer } from "./file-input.styled";
import { PhotoIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import { ChangeEventHandler } from "react";

type FileInputProps = {
  label?: string;
  fileType?: "file" | "image";
  name: string;
  required?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const ICONS = {
  file: <PaperClipIcon />,
  image: <PhotoIcon />,
};

export const FileInput = ({
  label,
  fileType = "file",
  name,
  required,
  onChange,
}: FileInputProps) => {
  return (
    <FileInputContainer>
      <label htmlFor={name}>
        {fileType && ICONS[fileType]}
        <span>{label}</span>
      </label>

      <input
        type="file"
        name={name}
        id={name}
        onChange={onChange}
        required={required}
      />
    </FileInputContainer>
  );
};
