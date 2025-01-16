import { Link } from 'react-router-dom';

import './styles.css';


export default function Header() {
  return (
    <header >
      <nav className="container-link">
        <Link to="/" className=''>
          <h4>Github API</h4>
        </Link>
      </nav>
    </header>
  )
}
