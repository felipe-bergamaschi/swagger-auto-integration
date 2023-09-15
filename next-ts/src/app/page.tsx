"use client"

import { CommonLayout } from '@/components/layout/common'
import { useGetAxiosAxios } from '../query'
import { Card } from '@/components/card'

export default function Home() {
  const { data, isLoading, isError } = useGetAxiosAxios()

  if (isLoading) {
    return <CommonLayout title='Loading' />
  }

  if (isError) {
    return <CommonLayout title='Error' />
  }

  return (
    <CommonLayout title={`Repo: ${data.name}`}>
      <Card
        title='Description'
        description={data.description || 'N/A'}
      />

      <Card
        title='Subscribers'
        description={`👀 ${data.subscribers_count}`}
      />

      <Card
        title='Stargazers'
        description={`✨ ${data.stargazers_count}`}
      />

      <Card
        title='Subscribers'
        description={`🍴 ${data.forks_count}`}
      />
    </CommonLayout>
  )
}
