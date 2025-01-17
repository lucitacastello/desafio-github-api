import { Link } from 'react-router-dom';
import './styles.css';
import Button from '../../../components/Button/button';

export default function HomeBody() {
  return (
    <div className="home-container">
            <div className="home-container-text">
                <h1>Desafio Github API</h1>
                <p>DevSuperior - Escola de programação</p>
            </div>
            <div>
              <Link to='/gitsearch'>              
                {/* <button className='home-container-start-button'>Começar</button> */}
                <Button text='Começar' />
              </Link>
            </div>
        </div>
  )
}
