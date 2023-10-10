const ToDoList = ({ children }) => {
  return (
    <>
      <h2>ToDo</h2>
      <div className='to-do-list-wrapper'>
        {children}
      </div>
    </>
  );
}

export default ToDoList;