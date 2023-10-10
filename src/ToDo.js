const ToDo = ({ index, text, toDoContents, setToDoContents }) => {
  const handleClick = () => {
    const _toDoContents = [...toDoContents];
    _toDoContents.splice(index, 1);
    setToDoContents(_toDoContents);
  }

  return (
    <div className='to-do'>
      <p>{text}</p>
      <button onClick={handleClick}>完了</button>
    </div>
  );
}

export default ToDo;