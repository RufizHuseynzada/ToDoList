import './App.css'
import Action from './Action'
import Dialog from './Dialog'
import TaskList from './TaskList'
import { useState } from 'react'

function App() {
  const [dialogVis, setDialogVis] = useState(false)
  const [list, setList] = useState([{startDate: '2004-12-12', hardness: 'Hard', days: 10, isUrgently: true, descr: 'Go do something man'},
    {date: '2004-07-08', level: 'Easy', days: 100, isUrgently: false, descr: 'Just relax'}
  ])

  const handleDialog = () => {
    setDialogVis(!dialogVis)
  }

  const newTask = (task) => {
    setList(l => [...l, task])
  }

  return (
    <>
      <section>
        <Action showDialog={handleDialog}></Action>
      </section>
      <section>
        <TaskList list={list}></TaskList>
      </section>
      {dialogVis ? <Dialog handleDialog={handleDialog} newTask={newTask}></Dialog> : null}
    </>
  )
}

export default App
