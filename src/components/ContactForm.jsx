import { useState } from 'react'

export function ContactForm({ email }) {
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const submit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const nextErrors = {}

    if (!data.name?.trim()) nextErrors.name = 'Silakan masukkan nama Anda.'
    if (!/^\S+@\S+\.\S+$/.test(data.email || '')) nextErrors.email = 'Silakan gunakan alamat email yang valid.'
    if (!data.subject?.trim()) nextErrors.subject = 'Silakan tuliskan subjek pesan.'
    if (!data.message?.trim()) nextErrors.message = 'Silakan tuliskan isi pesan.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) {
      setStatus('error')
      return
    }

    setStatus('loading')
    const subject = encodeURIComponent(`[Portfolio] ${data.subject}`)
    const body = encodeURIComponent(`Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return <form className="contact-form" noValidate onSubmit={submit}>
    <label>Nama<input name="name" aria-invalid={!!errors.name} placeholder="Nama Anda" />{errors.name && <small>{errors.name}</small>}</label>
    <label>Email<input name="email" type="email" aria-invalid={!!errors.email} placeholder="nama@contoh.com" />{errors.email && <small>{errors.email}</small>}</label>
    <label>Subjek<input name="subject" aria-invalid={!!errors.subject} placeholder="Topik yang ingin didiskusikan" />{errors.subject && <small>{errors.subject}</small>}</label>
    <label>Pesan<textarea name="message" aria-invalid={!!errors.message} placeholder="Sampaikan kebutuhan atau gagasan Anda..." rows="4" />{errors.message && <small>{errors.message}</small>}</label>
    <button className="button button-primary" type="submit">{status === 'loading' ? 'Menyiapkan email…' : 'Kirim pesan'}</button>
    {status === 'success' && <p className="form-success" role="status">Aplikasi email Anda telah dibuka. Periksa kembali pesan, lalu kirimkan.</p>}
    {status === 'error' && <p className="form-error" role="alert">Silakan periksa kembali kolom yang ditandai.</p>}
  </form>
}
