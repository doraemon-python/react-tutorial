import { useCreateForm } from "./hooks/useCreateForm";

const CreateForm = ({ toDoContents, setToDoContents }) => {
  const { value, handleChange, handleSubmit } = useCreateForm({ toDoContents, setToDoContents });

  return (
    <div className='form-wrapper'>
      <h2>ToDoを作成</h2>
      <form onSubmit={handleSubmit}>
        <input required value={value} onChange={handleChange} name='title' placeholder='ToDoを入力' />
        <button>作成</button>
      </form>
    </div>
  );
}

export default CreateForm;