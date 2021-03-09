import { IconButton } from '@material-ui/core'
import React from 'react'
import "./SelectElement.css"
import CancelIcon from '@material-ui/icons/Cancel';

function SelctedElement({showData, setShow}) {
    return (
        <div className="selectedElement">
            <div className="card">
                <div className="card__head">
                    <h2>{showData}</h2>
                    <IconButton onClick={setShow(true)}><CancelIcon/></IconButton>
                </div>
            </div>
        </div>
    )
}

export default SelctedElement
