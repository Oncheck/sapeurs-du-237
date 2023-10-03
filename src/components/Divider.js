const lineStyles = {
    width: '80%',
    height: '8px',
    background: '#f2f2f2',
    marginBottom: '100px',
    marginTop: '50px',
    display: 'block',
    marginLeft: '10%',
    borderRadius: '15px'
}

const leftSideStyles = {
    width: '30%',
    height: '8px',
    background: '#ffcb45',
    borderRadius: '15px'
}

function Divider() {
    return (
        <span className="line" style={lineStyles}>
            <div className="left-side" style={leftSideStyles}></div>
        </span>
    )
}

export default Divider;