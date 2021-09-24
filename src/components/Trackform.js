import React from 'react'

export default function Trackform() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label for="InputTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="InputTitle" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="InputSubtitle" className="form-label">Subtitle</label>
                    <input type="text" className="form-control" id="InputSubtite"/>
                </div>
            
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
