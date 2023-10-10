import { useEffect, useRef, useState } from "react";

export const useToDoContents = () => {
  const [toDoContents, setToDoContents] = useState([]);

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      const json = localStorage.getItem("to_do_contents");
      if (json) {
        const array = JSON.parse(json);
        setToDoContents(array);
      }
    } else {
      if (toDoContents.length) {
        const json = JSON.stringify(toDoContents);
        localStorage.setItem("to_do_contents", json);
      } else {
        localStorage.removeItem("to_do_contents");
      }
    }
  }, [toDoContents]);

  return { toDoContents, setToDoContents }
}