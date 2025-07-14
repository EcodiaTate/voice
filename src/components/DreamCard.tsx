// /src/components/DreamCard.tsx
import { Card } from 'shadcn/ui/card'
export default function DreamCard({ dream }) {
  return (
    <Card className="p-4 rounded-2xl shadow-xl bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <div className="text-xs text-gray-500">{dream.timestamp}</div>
      <div className="font-semibold mb-2">{dream.user_origin || 'System'}</div>
      <div className="text-lg">{dream.raw_text}</div>
      {dream.meta_notes && <div className="mt-2 text-sm italic">{dream.meta_notes}</div>}
    </Card>
  )
}
