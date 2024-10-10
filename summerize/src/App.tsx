import { useState } from 'react'
import { AlignJustify, Copy, Check } from 'lucide-react'

function App() {
  const [inputText, setInputText] = useState('')
  const [summary, setSummary] = useState('')
  const [copied, setCopied] = useState(false)

  const generateSummary = () => {
    // This is a simple summary generator. In a real application, you'd use a more sophisticated algorithm or API.
    const sentences = inputText.split(/[.!?]+/).filter(Boolean)
    const summaryText = sentences.slice(0, 3).join('. ') + '.'
    setSummary(summaryText)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="min-h-screen bg-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
          <AlignJustify className="inline-block mr-2" />
          Text Summary Generator
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-green-700">Input Text</h2>
            <textarea
              className="w-full h-64 p-4 border-2 border-green-500 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent thin-scrollbar bg-white"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your text here..."
            ></textarea>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-4 text-green-700">Summary</h2>
            <div className="relative">
              <div className="w-full h-64 p-4 bg-white border-2 border-green-500 rounded-lg overflow-auto thin-scrollbar">
                {summary}
              </div>
              {summary && (
                <button
                  onClick={copyToClipboard}
                  className="absolute bottom-2 right-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full transition duration-300"
                  title="Copy All"
                >
                  {copied ? <Check size={20} /> : <Copy size={20} />}
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
            onClick={generateSummary}
          >
            Generate Summary
          </button>
        </div>
      </div>
    </div>
  )
}

export default App