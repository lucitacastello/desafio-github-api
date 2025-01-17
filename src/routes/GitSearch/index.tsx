import './styles.css';

import { useState } from 'react';
import './styles.css';
import Button from '../../components/Button/button';
import axios from 'axios';
import ResultCard from '../../components/ResultCard';
import { Outlet, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/system';

type FormData = {
  inputUser: string;
}

type GitUser = {
  url: string;
  followers: string;
  location: string;
  name: string;
  avatar_url: string;
}

export default function GitSearch() {

  const [formData, setFormData] = useState<FormData>({
    inputUser: ''
  });

  const navigate = useNavigate();

  const [gitUser, setGitUser] = useState<GitUser>();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {

    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`${BASE_URL}/${formData.inputUser}`)
      .then((response) => {
        setGitUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        navigate("not-found");
        setGitUser(undefined);
        console.log(error);
      });
  }

  return (
    <div className='container git-search-container'>
      <div className='git-search-container-card'>

        <div className='container-search-container'>
          <h1>Encontre um perfil Github</h1>

          <form onSubmit={handleOnSubmit}>
            <div className="form-container">
              <input
                name='inputUser'
                value={formData.inputUser}
                type="text"
                placeholder='Usuário Github'
                className="search-input"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Button text='Encontrar' />
            </div>
          </form >
        </div>
      </div>
      
      <div className='container-response-error'>
        {!gitUser &&
          <>
            <Outlet />
          </>
        }
      </div>

      <div className="container-response">
        <div className="container-response-img" >
          {gitUser &&
            <>
              <img src={gitUser.avatar_url} alt={gitUser.name} />
            </>
          }
        </div>

        <div className="container-response-data">
          {gitUser &&
            <>
              <h4>Informações</h4>
              <ResultCard title='Perfil:' description={gitUser.url} />
              <ResultCard title='Seguidores:' description={gitUser.followers} />
              <ResultCard title='Localidade:' description={gitUser.location} />
              <ResultCard title='Nome:' description={gitUser.name} />
            </>
          }
        </div>
      </div>
    </div>
  )
}
