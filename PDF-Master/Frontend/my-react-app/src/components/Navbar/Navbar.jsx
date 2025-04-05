import "./Navbar.css"

const Navbar = ({isTools,setIsTools}) => {
  return (
    <>
        <section className="Header">
            <header>
                <nav>
                    <div className="logo">logo</div>
                    <div className="tools" 
                    onClick={() => setIsTools(!isTools)}>
                        Tools
                    </div>
                    <ul className="menu">
                        <li>Compress</li>
                        <li>Decompress</li>
                        <li>Convert</li>
                        <li>Merg</li>
                        <li>Edit</li>
                    </ul>
                    <div className="auth">
                        <button>Login</button>
                        <button>Sign Up</button>
                    </div>
                </nav>
            </header>
        </section>
    </>
  )
}

export default Navbar