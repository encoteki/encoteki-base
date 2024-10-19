import React from 'react'
import Link from 'next/link'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import calculateDayDifference from '@/services/calculateDayDiffs'
import { cookies } from 'next/headers'

type DAO = {
  dao_id: string
  dao_name: string
  start_date: string
  end_date: string
}

export default async function DAO() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  })

  const { data, error } = await supabase.from('dao').select('*')

  if (error) {
    console.error('Error fetching data:', error.message)
    return
  }

  return (
    <div className="flex h-auto flex-col bg-[#F6F6EC] p-8">
      <main className="flex flex-1 items-center justify-center">
        <div className="relative w-[912px] space-y-12">
          <header className="space-y-[18px]">
            <h1 className="text-5xl font-medium">Encoteki DAO</h1>
            <p className="text-lg">
              Encoteki governs the Encoteki DAO. Owning an NFT allows you to
              vote on our proposals, with the results determining the direction
              of Encoteki’s future initiatives.
            </p>
          </header>

          <main className="">
            <div className="flex flex-col gap-8">
              {data.map((dao: any, index: number) => {
                return (
                  <Link key={index} href={`/dao/${dao.dao_id}`}>
                    <section className="w-full cursor-pointer rounded-[32px] bg-white p-6">
                      <div className="space-y-1">
                        <h1 className="text-2xl font-medium">{dao.dao_name}</h1>
                        <div className="font-base flex justify-between">
                          <p>
                            Voting ends in{' '}
                            {calculateDayDifference(dao.end_date)}
                            {calculateDayDifference(dao.end_date) > 1
                              ? ' days'
                              : ' day'}
                          </p>
                          <p>
                            {calculateDayDifference(dao.start_date)}
                            {calculateDayDifference(dao.start_date) > 1
                              ? ' days ago'
                              : ' day ago'}
                          </p>
                        </div>
                      </div>
                    </section>
                  </Link>
                )
              })}
            </div>
          </main>
        </div>
      </main>
    </div>
  )
}
