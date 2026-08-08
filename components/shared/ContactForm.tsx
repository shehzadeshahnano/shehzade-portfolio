'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle } from 'lucide-react'
import Button from '@/components/shared/Button'
import { fadeUpVariant } from '@/lib/utils'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

interface SubmitState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const inputClassName = `px-4 py-3 rounded-xl bg-background border border-brand-border
  text-text-primary placeholder:text-text-muted
  focus:outline-none focus:border-brand-blue/40 focus:ring-2 
  focus:ring-brand-blue/20 transition-all duration-200 cursor-text`

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitState, setSubmitState] = useState<SubmitState>({
    status: 'idle',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitState({ status: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setSubmitState({
          status: 'error',
          message: data.message || 'Failed to send message',
        })
        return
      }

      setSubmitState({
        status: 'success',
        message: data.message || 'Message sent successfully!',
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => {
        setSubmitState({ status: 'idle', message: '' })
      }, 5000)
    } catch {
      setSubmitState({
        status: 'error',
        message: 'An error occurred. Please try again.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-small font-semibold text-text-primary cursor-default"
        >
          Full Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className={inputClassName}
        />
      </motion.div>

      <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-small font-semibold text-text-primary cursor-default"
        >
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
          className={inputClassName}
        />
      </motion.div>

      <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="text-small font-semibold text-text-primary cursor-default"
        >
          Subject *
        </label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          required
          className={inputClassName}
        />
      </motion.div>

      <motion.div variants={fadeUpVariant} className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-small font-semibold text-text-primary cursor-default"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          required
          className={`${inputClassName} resize-none`}
        />
      </motion.div>

      {submitState.status === 'success' && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 
            text-green-700 dark:text-green-400"
          role="status"
        >
          <CheckCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="text-small font-semibold">Success!</p>
            <p className="text-xs">{submitState.message}</p>
          </div>
        </div>
      )}

      {submitState.status === 'error' && (
        <div
          className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 
            text-red-700 dark:text-red-400"
          role="alert"
        >
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <div>
            <p className="text-small font-semibold">Error</p>
            <p className="text-xs">{submitState.message}</p>
          </div>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={submitState.status === 'loading'}
      >
        {submitState.status === 'loading' ? 'Sending...' : 'Send Message'}
      </Button>

      <p className="text-xs text-text-muted text-center">
        I&apos;ll get back to you as soon as possible.
      </p>
    </form>
  )
}
