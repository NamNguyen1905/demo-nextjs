import Link from 'next/link';



export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="/">Nguyen Thanh Nam DEMO</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/">
                                    <button type="button" className="btn btn-danger">Home</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Coin">
                                    <button type="button" className="btn btn-info">Coin</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Github">
                                    <button type="button" className="btn btn-success">Github</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}