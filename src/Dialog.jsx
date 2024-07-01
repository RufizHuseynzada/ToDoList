import { useState } from "react"

function Dialog({ handleDialog, newTask }) { 

    const [startDate, setStartDate] = useState()
    const [hardness, setHardness] = useState()
    const [descr, setDescr] = useState()
    const [days, setDays] = useState()
    const [isUrgently, setIsUrgently] = useState(false)

    const handleStartDate = (event) => {
        setStartDate(event.target.value)
    }
    const handleHardness = (event) => {
        setHardness(event.target.value)
    }
    const handleDays = (event) => {
        setDays(event.target.value)
    }
    const handleIsUrgently = (event) => {
        console.log(event)
        setIsUrgently(event.target.checked)
    }
    const handleDescr = (event) => {
        setDescr(event.target.value)
    }
    const addNewTask = () => {
        const task = {
            startDate: startDate.toString(),
            hardness: hardness.toString(),
            descr: descr,
            days: days,
            isUrgently: isUrgently,
        }
        console.log(task)
        newTask(task)
        handleDialog()
    }
    return (
        <>
            <div class="overlay"></div>
            <div className="dialog" style={{ width: '35%' }}>
                <div className="row">
                    <div className="col-sm-11">
                        New Task
                    </div>
                    <div className="col-sm-1" style={{ textAlign: 'end' }}>
                        <i onClick={handleDialog} class="fa fa-close" style={{ backgroundColor: 'transparent', color: 'grey', cursor: 'pointer' }}></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <label className="input-label">Start Date</label>
                        <input onChange={handleStartDate} type="date" />
                    </div>
                    <div className="col-sm-6">
                        <label className="input-label">Level</label>
                        <select name="cars" id="cars" onChange={handleHardness}>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2">
                        <label className="input-label">Days</label> <br />
                        <input type="number"  onChange={handleDays} />
                    </div>
                    <div className="col-sm-1">
                        <input type="checkbox" id="isUrgently" className="input-checkbox" onChange={handleIsUrgently} />
                        <label htmlFor="isUrgently"></label>
                    </div>
                    <div className="col-sm-2" style={{ paddingTop: '28px' }}>
                    Urgently
                    </div>
                </div>
                <label className="input-label">Description</label> <br />
                <div className="row">
                    <input onChange={handleDescr} />
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-8">

                    </div>
                    <div className="col-sm-4" style={{textAlign: 'end'}}>
                        <button onClick={addNewTask} className="btn btn-md btn-radius-md btn-success">Add</button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={handleDialog} className="btn btn-md btn-radius-md btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dialog