import React, { useState, useEffect } from 'react';

import RepositoryItem from '../RepositoryItem';
import './styles.scss';

interface RepositoryData {
  id: number,
  name: string,
  description: string;
  html_url: string;
  
}

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<RepositoryData[]>([]);
  const [githubUser, setGithubUser ] = useState<string>('leonardomessias98')


  const handleLoadUserRepos = () => {
    fetch(`https://api.github.com/users/${githubUser}/repos`)
      .then(response => response.json())
      .then(data => setRepositories(data))
  }

  useEffect(() => {
    handleLoadUserRepos();
  }, [])


  return (
    <>
      <section className="user">
        <h1>GITHUB EXPLORER</h1>

        <section className="inputs">
          <input type="text" placeholder="Digite um username" onChange={(e) => setGithubUser(e.target.value)} />
          <button onClick={handleLoadUserRepos}>Buscar</button>
        </section>
      </section>

      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          {repositories?.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </ul>
      </section>

    </>
  )
}

export default RepositoryList
