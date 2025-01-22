import ControlPanel from "./Components/ControlPanel/ControlPanel"
import TaskSection from "./Components/TaskRelated/TaskSection"
import { useState } from "react";

export default function App() {

      const [taskList, setTaskList] = useState([]) ; 
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
                  <ControlPanel taskList = {taskList} setTaskList = {setTaskList} filters = {filters} setFilters = {setFilters} ></ControlPanel>
                  <TaskSection taskList = {taskList} setTaskList = {setTaskList} filters = {filters}></TaskSection>
            </div>
      )
}