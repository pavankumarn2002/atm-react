const EventHandling = (prop) => {
    const { message } = prop
    return (
        <div className="">
            <button className="btn btn-primary" onClick={() => { alert(message) }}>
                {message}
            </button>
        </div>
    )
}

export default EventHandling;