import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4 ">
    <div className="container">
      <a className="navbar-brand" href="/">Task Management System</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/users"><a className="nav-link">Users</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/tasks"><a className="nav-link">Tasks </a></Link>
            </li>
          </ul>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Login</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Logout</a></Link>
          </li>
          <li className="nav-item">
            <Link href="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;