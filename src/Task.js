 export const Task = (props) =>{
	 return (
         <div className="task" style = {{ backgroundColor: props.completed ? "green" : "white" }}>
               <h1>{props.taskName}</h1>
               <button className="button1" onClick={() => props.completeTask(props.id)}>Complete</button>
               <button className="button2 " onClick={() => props.deleteTask(props.id)}> X </button>
         </div> 
         );     

}; 