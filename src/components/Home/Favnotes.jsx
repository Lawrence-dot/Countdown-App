import React from 'react'

function Favnotes(props) {
    return (
        <div className='card border-1 mt-4'>
        <div className='row card-body'>
            <h5 className='card-title text-center mb-3'> {props.title}</h5>      
            <p className="note-text">
                {props.content}
            </p>
            <p className='timeStand text-dark'>{props.date}</p>
        </div>
        <div className="alter">
            <button className='btn btn-primary'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
        </div>
    </div>

    )
}

export default Favnotes
