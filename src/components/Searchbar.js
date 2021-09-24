import React from 'react'

export default function Searchbar() {
    return (
        <div className="my-2 mx-5">
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className ="btn btn-outline-success" type ="submit">Search</button>
            </form>
        </div>
    )
}
