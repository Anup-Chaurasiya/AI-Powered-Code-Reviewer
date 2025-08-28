import { useState, useEffect } from 'react'
import "prismjs/themes/prism-okaidia.css"
import Prism from "prismjs"
import "prismjs/components/prism-javascript"
import Editor from "react-simple-code-editor"
import axios from 'axios'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/atom-one-dark.css'
import './App.css'  

function App() {
  const [code, setCode] = useState(`function add() {
  return 1 + 1
}`)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  async function codeReview() {
    setLoading(true)        // start loading
    setResult(null)         // clear old result
    try {
      const response = await axios.post(import.meta.env.VITE_API_URL, { code })
      setResult(response.data)
    } catch (error) {
      setResult("⚠️ Error fetching response")
    } finally {
      setLoading(false)     // stop loading
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <Editor
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => Prism.highlight(code, Prism.languages.javascript, 'javascript')}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: '1px solid #ccc',
              borderRadius: '6px',
              height: '100%',
              width: '100%'
            }}
          />
        </div>
        <div 
          onClick={codeReview} 
          className={`review ${loading ? "active" : ""}`}
        >
          {loading ? "Reviewing..." : "Review"}
        </div>
      </div>

      <div className="right">
        {loading ? (
          <p className="processing">Processing...</p>
        ) : (
          <Markdown rehypePlugins={[rehypeHighlight]}>{result}</Markdown>
        )}
      </div>
    </main>
  )
}

export default App
