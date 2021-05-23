import React from 'react'

import './styles.scss'

interface RepositoryProps {
  repository: {
    id: number,
    name: string,
    description: string;
    html_url: string;
  }
}

const RepositoryItem = ({ repository }: RepositoryProps) => {
  return (
    <li>
      <strong>{repository.name ?? "default"}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}

export default RepositoryItem
