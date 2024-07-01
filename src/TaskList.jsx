function TaskList(props) {
    return (
        <>
            {props.list.map(l =>
                <div className="card">
                    <div className="row" style={{ borderBottom: '2px solid grey', gap: '0px' }}>
                        <div className="col-sm-2" style={{ borderRight: '2px solid grey', textAlign: 'center' }}>
                            Date
                        </div>
                        <div className="col-sm-2" style={{ borderRight: '2px solid grey', textAlign: 'center' }}>
                            Level
                        </div>
                        <div className="col-sm-1" style={{ borderRight: '2px solid grey', textAlign: 'center' }}>
                            Days
                        </div>
                        <div className="col-sm-1" style={{ borderRight: '2px solid grey', textAlign: 'center' }}>
                            Urgently
                        </div>
                        <div className="col-sm-6" style={{ textAlign: 'center' }}>
                            Description
                        </div>
                    </div>
                    <div className="row" style={{ gap: '0px' }}>
                        <div className="col-sm-2" style={{ textAlign: 'center' }}>
                            {l.startDate}
                        </div>
                        <div className="col-sm-2" style={{ textAlign: 'center' }}>
                            {l.hardness}
                        </div>
                        <div className="col-sm-1" style={{ textAlign: 'center' }}>
                            {l.days}
                        </div>
                        <div className="col-sm-1" style={{ textAlign: 'center' }}>
                            <input type="checkbox" disabled="true" style={{ fontSize: '10px', width: '20%', marginTop: '-10px' }} checked={l.isUrgently} />
                        </div>
                        <div className="col-sm-6" style={{ textAlign: 'center' }}>
                            {l.descr}
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default TaskList