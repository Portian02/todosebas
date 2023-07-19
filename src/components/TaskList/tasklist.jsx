import ListItem from "../listItem";
import "./list.css";

const Tasklist = ({ list, handleDelete
  //  handleCheck
   }) => {
  const tareas = list.map((item) => (
    <ListItem
      data={item}
      handleDelete={() => handleDelete(item.id)}
      // handleCheck={() => handleCheck(item.id)}
    />
  ));

  return (
    <div className="task-list">
      {list.length ? <div className="list">{tareas}</div> : "No hay Tareas"}

      {/* {list.length ? (
        <button className=" btn2" onClick={onClickRemoveItem}>
          Borrar tareas 
        </button>
      ) : null} */}
    </div>
  );
};

export default Tasklist;
