import "../Style/ModalEdit.css"
export default function ModalEdit(props){
    const {editTask,closeModal,inputTask,SetInputTask,updateTask} = props
    return(
        <div className="modal">
            <div className="modal-bg" onClick={closeModal}></div>
            <div className="modal-content">
            <h2>Edit</h2>
            <input type="text" value={inputTask} onChange={(e)=>SetInputTask(e.target.value)}/>
            <button className="btn-add" onClick={updateTask}>UPDATE</button>
            </div>
        </div>
    )
}