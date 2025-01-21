import ConfettiExplosion from "react-confetti-explosion";
import ControlPanel from "./Components/ControlPanel/ControlPanel"
import TaskList from "./Components/TaskList/TaskList"
import { useState } from "react";

export default function App() {

      const [tasklist, setTaskList] = useState([]) ; 
      // this will contain all the tasks as objects with their states 
      

      const [filters, setFilters] = useState({
            'showByLowPriority' : true, 
            'showByMedPriority' : true, 
            'showByHighPriority' : true, 
            'showPendingTask' : true, 
            'showCompletedTask' : true, 
            'sortByPriority' : false, 
            'sortByDeadline' : false, 
            'sortByCreationTime' : false, 
      })

      return (
            <div className="box-border">
                  <ConfettiExplosion></ConfettiExplosion>
                  <ControlPanel tasklist = {tasklist} setTaskList = {setTaskList} filters = {filters} setFilters = {setFilters} ></ControlPanel>
                  <TaskList tasklist = {tasklist} filters = {filters}></TaskList>
            </div>
      )
}