const Nav = () => {
    return <div>
        <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
            <div className="container-fluid">
                <a className="navbar-brand" href="Profil.html">profil</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample01">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="Home.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Link.html">Link Pembayaran</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="dropdown.html" id="dropdown01" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdown01">
                                <li><a className="dropdown-item" href="Project.html">Rumah Modern</a></li>
                                <li><a className="dropdown-item" href="Project2.html">Villa</a></li>
                                <li><a className="dropdown-item" href="Project3.html">Perumahan</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form>
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </nav>

    </div>
};

export default Nav;