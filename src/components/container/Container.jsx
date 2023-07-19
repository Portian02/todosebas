import { useState } from "react";

import Tasklist from "../TaskList/tasklist";
import Form from "../TodoForm/input";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const deleteItem = (id) => {
    //Aqui recibo un id personalizado
    //y la tarea que quiero eliminar

    const newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== id) {
        newList.push(list[i]);
      }
    }
    setList(newList);
  };
  // const toggleDone = (id) => {
  //   const newCheck = [];
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].id !== id) {
  //       newCheck.push(list[i]);
  //     }
  //   }
  // };

  return (
    <>
      <div>Container</div>
      <Form handleAddItem={handleAddItem} />
      <Tasklist
        list={list}
        handleDelete={deleteItem}
        // handleCheck={toggleDone}
      />
    </>
  );
};

export default Container;
