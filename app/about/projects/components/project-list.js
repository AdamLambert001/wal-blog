import React from 'react'

export default async function ProjectList() {
    const response = await fetch('http://localhost:3001/repos', { cache: 'no-store'})
    const repos = await response.json()
    return (
        <ul>
            {repos.map(repos => (
                <li key={repos.id} className="mb-4 border rounded-md p-5 border-purple-300" >
                    <div>{repos.title}</div>
                    <div>{repos.description}</div>
                    <div>{repos.stargazers_count}</div>
                </li>
            ))}
        </ul>
    )
}
