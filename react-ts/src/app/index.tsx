import { Fragment } from 'react'
import './index.css'

import { useGetAxiosAxios } from '../query'

export default function Page() {
  const { data, isLoading, isError, refetch } = useGetAxiosAxios()

  if (isLoading) {
    return <h1>loading...</h1>
  }

  if (isError) {
    return <h1>error...</h1>
  }

  return (
    <Fragment>
      <h1> Repo: {data.name}</h1>

      <p className="read-the-docs">
        {data.description}
      </p>

      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>

      <br />
      <br />


      <br />

      <button onClick={() => refetch()}>refetch</button>
    </Fragment>
  )
}