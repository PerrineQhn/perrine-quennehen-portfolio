'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Créer un mailto link avec les données du formulaire
    const mailtoLink = `mailto:perrine.quennehen@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="card max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">Envoyez-moi un message</h2>

      {/* Name */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FiUser /> Nom
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Votre nom"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FiMail /> Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="votre.email@exemple.com"
        />
      </div>

      {/* Subject */}
      <div className="mb-4">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FiMessageSquare /> Sujet
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Opportunité de CDI, Collaboration..."
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <FiMessageSquare /> Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          placeholder="Votre message..."
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        <FiSend /> Envoyer le message
      </button>
    </motion.form>
  )
}