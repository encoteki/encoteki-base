import React from 'react'
import { Metadata } from 'next'
import DAODetail from '@/components/dao/daoDetail'
import Navbar from '@/components/navbar'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export async function generateMetadata({
  params,
}: {
  params: { daoId: number }
}): Promise<Metadata> {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })

  const { data, error } = await supabase
    .from('dao')
    .select('dao_name')
    .eq('dao_id', params.daoId)
    .single()

  if (error || !data) {
    console.error('Error fetching metadata:', error?.message)
    return {
      title: 'DAO Not Found',
      description: 'No details available for this DAO.',
    }
  }

  return {
    title: data.dao_name || 'DAO', // Fallback to 'DAO' if title is empty
    description: `Vote for ${data.dao_name}`,
  }
}

export default async function DAODetailPage({
  params,
}: {
  params: { daoId: number }
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })

  const { data, error } = await supabase
    .from('dao')
    .select('*')
    .eq('dao_id', params.daoId)

  if (error) {
    console.error('Error fetching data:', error.message)
    return
  }

  return (
    <>
      <div className="flex h-screen flex-col bg-[#F6F6EC] p-8">
        <Navbar />

        <main className="flex flex-1 items-center justify-center">
          <DAODetail daoId={Number(params.daoId)} daoDetail={data[0]} />
        </main>
      </div>
    </>
  )
}
