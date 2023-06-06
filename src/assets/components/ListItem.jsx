import "../Style/ListItem.css"
import ModalEdit from "./ModalEdit";
export default function Listitem(props) {
    const {data,removeTask,tasks,editTask,editId,closeModal} = props
    const itemIndex = tasks.indexOf(data);

   
  return (
    <div className="ListItem-Container">
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        </thead>
       <tbody>
       <tr>
            <td className="tableId">{itemIndex+1}</td>
            <td>{data.task}</td>
            <td><button className="btn delete" onClick={()=>removeTask(data.id)}>Delete</button></td>
            <td><button className="btn edit" onClick={()=>editTask(data.id)}>Edit</button></td>
        </tr>
       </tbody>
      </table>
    </div>
  );
}
