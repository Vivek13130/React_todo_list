import ControlPanel from "./Components/ControlPanel/ControlPanel"
import TaskList from "./Components/TaskList/TaskList"

export default function App() {
      return (
            <div className="box-border">
                  <ControlPanel></ControlPanel>
                  <TaskList></TaskList>
            </div>
      )
}