import { useState } from 'react'

// Shows your email address. Clicking copies it instead of opening a mail app.
export default function EmailButton({ email, className = '' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Older browsers: fall back to selecting a hidden input
      const input = document.createElement('input')
      input.value = email
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      input.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button type="button" className={`btn email-btn ${className}`} onClick={copy} title="Click to copy">
      <span aria-live="polite">{copied ? 'Copied to clipboard' : email}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {copied
          ? <path d="M5 12l5 5L20 7" />
          : <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></>}
      </svg>
    </button>
  )
}