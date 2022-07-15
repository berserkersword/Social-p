import React from 'react'
const Navbar = ({ setCategory }) => {

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid flex">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-end" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle btn" id="navbarDarkDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><button className="dropdown-item" onClick={() => setCategory('anal')}>Anal</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('arab')}>Arab</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('teen')}>Teen</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('asian')}>Asian</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('blowjob')}>BlowJob</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('indian')}>Indian</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('orgy')}>Orgy</button></li>
                                <li><button className="dropdown-item" onClick={() => setCategory('hardcore')}>Hardcore</button></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" onChange={e => setCategory(e.target.value)} />
                        <button className="btn btn-outline-success" onClick={(e) => e.preventDefault()} >Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar