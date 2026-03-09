'use client'

import { useState, useCallback } from 'react'

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState('')
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [preview, setPreview] = useState<{ en: string; es: string } | null>(null)

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
    }
  }, [])

  const generateRecap = async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setPreview({
      en: `Yesterday's message on "${title}" reminded us that God's love is unconditional. Let this truth guide you through the week ahead. 🙏`,
      es: `El mensaje de ayer sobre "${title}" nos recordó que el amor de Dios es incondicional. 🙏`,
    })
    setLoading(false)
  }

  return (
    <div>
      <h1 className="text-3xl font-serif text-navy mb-8">Upload Sermon</h1>

      {!preview ? (
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-xl font-serif text-navy mb-4">Sermon Notes</h2>
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center ${
                dragActive ? 'border-gold bg-gold/5' : 'border-gray-200'
              }`}
            >
              {file ? (
                <div>
                  <p className="text-2xl mb-2">📄</p>
                  <p className="font-medium text-navy">{file.name}</p>
                  <button onClick={() => setFile(null)} className="text-sm text-red-500 mt-2">Remove</button>
                </div>
              ) : (
                <>
                  <p className="text-4xl mb-4">📤</p>
                  <p className="text-navy font-medium mb-2">Drop your sermon notes here</p>
                  <p className="text-sm text-navy/70 mb-4">Supports .docx, .pdf, .txt</p>
                  <label className="btn-secondary cursor-pointer inline-block">
                    Browse Files
                    <input type="file" className="hidden" onChange={(e) => e.target.files && setFile(e.target.files[0])} />
                  </label>
                </>
              )}
            </div>
            <div className="mt-6">
              <p className="text-sm text-navy/70 text-center mb-4">— or paste your notes —</p>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Paste your sermon notes here..."
                className="input min-h-[200px]"
              />
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-serif text-navy mb-4">Sermon Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Sermon Title *</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input" placeholder="The Power of Grace" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Scripture Reference</label>
                <input type="text" className="input" placeholder="John 3:16-17" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Sermon Date</label>
                <input type="date" className="input" defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
            <button onClick={generateRecap} disabled={loading || (!file && !text) || !title} className="btn-primary w-full mt-8 disabled:opacity-50">
              {loading ? 'Generating...' : 'Generate Recap Preview'}
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <h2 className="text-xl font-serif text-navy mb-6">Preview Your Recaps</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-navy mb-3">🇺🇸 English</h3>
              <div className="bg-navy/5 rounded-xl p-4">
                <p className="text-sm text-navy">{preview.en}</p>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-navy mb-3">🇪🇸 Spanish</h3>
              <div className="bg-gold/10 rounded-xl p-4">
                <p className="text-sm text-navy">{preview.es}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button onClick={() => setPreview(null)} className="btn-secondary flex-1">← Back</button>
            <button onClick={() => alert('Scheduled!')} className="btn-primary flex-1">✓ Approve & Schedule</button>
          </div>
        </div>
      )}
    </div>
  )
}
