import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ color: 'black' }}>𝐒𝐇𝐎𝐏𝐏𝐈𝐍𝐆 𝐀𝐏𝐏</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/" style={{ color: 'white' }}>𝐀𝐃𝐃</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search" style={{ color: 'white' }}>𝐒𝐄𝐀𝐑𝐂𝐇</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view" style={{ color: 'white' }}>𝐕𝐈𝐄𝐖</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
