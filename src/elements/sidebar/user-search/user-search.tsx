import { UserSearchContainer } from "./user-search.styled";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

type UserSearchProps = {
  name: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
};

export const UserSearch = ({
  name,
  placeholder,
  onChange,
  onSubmit,
  ...props
}: UserSearchProps) => {
  return (
    <UserSearchContainer onChange={onChange}>
      <label htmlFor={name}>
        <MagnifyingGlassIcon />
      </label>
      <input
        type="text"
        name={name}
        id={name}
        {...props}
        placeholder={placeholder}
      />
    </UserSearchContainer>
  );
};
