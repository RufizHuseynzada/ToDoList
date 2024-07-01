function Action({ showDialog }) {
    return (
        <>
            <div className="pa-2">
                <div className="row">
                    <div className="col-sm-6">
                        <button className="btn btn-md btn-radius-md" onClick={showDialog}><i style={{backgroundColor: 'transparent' }} className="fa fa-plus"></i> &nbsp; Add Task</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Action