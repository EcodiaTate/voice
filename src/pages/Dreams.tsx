// /src/pages/Dreams.tsx
import { useEffect, useState } from 'react'
import DreamCard from '../components/DreamCard'
import { fetchDreams } from '../services/api'
import { on } from '../services/socket'

export default function DreamsPage() {
  const [dreams, setDreams] = useState<any[]>([])
  useEffect(() => {
    fetchDreams().then(data => setDreams(data.dreams || []))
    const handler = (dream: any) => setDreams(ds => [dream, ...ds])
    on('dream_update', handler)
    return () => on('dream_update', handler) // cleanup
  }, [])
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dreams</h1>
      <div className="grid gap-4">{dreams.map(d => <DreamCard dream={d} key={d.id} />)}</div>
    </div>
  )
}
