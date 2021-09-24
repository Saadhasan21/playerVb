import React, { useState } from 'react'
import Trackform from './Trackform';

export default function Toggleform() {


    const [show, setShow] = useState(false)

    return (
        <div>

            {
                show ? <Trackform/>: null
            }
            <button type="button" class="btn btn-dark" onClick={() => setShow(!show)}>+</button>

            {/* <button onClick={() => setShow(!show)} >Toggle</button> */}
        </div>
    )
}
