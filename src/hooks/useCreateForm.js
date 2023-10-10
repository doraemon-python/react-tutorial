import { useState } from "react";

export const useCreateForm = ({ toDoContents, setToDoContents }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setToDoContents([...toDoContents, value]);
    setValue("");
  }

  return { value, handleChange, handleSubmit }
}