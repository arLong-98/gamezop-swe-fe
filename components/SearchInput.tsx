"use client";

import type { ChangeEvent, FocusEvent } from "react";

function SearchInput({ handleChange }: SearchInputProps) {
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    handleChange(event.target.value);
  }

  function handleInputBlur(event: FocusEvent<HTMLInputElement>) {
    event.target.value = "";
    handleChange("");
  }

  return (
    <input
      onBlur={handleInputBlur}
      onChange={handleInputChange}
      type="text"
      className="h-[30px] text-tinted-black rounded-3xl px-3 py-5 outline-none"
      placeholder="Search..."
    />
  );
}

interface SearchInputProps {
  handleChange: Function;
}

export default SearchInput;
