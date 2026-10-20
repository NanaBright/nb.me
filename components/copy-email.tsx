'use client'
import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { profile } from '@/lib/portfolio'
export function CopyEmail() {
  const [status, setStatus] = useState('')
  async function copy() {
    try { await navigator.clipboard.writeText(profile.email); setStatus('Email copied') }
    catch { setStatus('Select the email address above to copy it.') }
  }
  return <div className="copy-email"><button className="text-link" onClick={copy}>{status === 'Email copied' ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />} Copy email address</button><span role="status">{status}</span></div>
}
