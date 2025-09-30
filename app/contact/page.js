'use client'
import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiPhone } from 'react-icons/fi'

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'perrine.quennehen@gmail.com',
      link: 'mailto:perrine.quennehen@gmail.com'
    },
    {
      icon: <FiPhone />,
      label: 'Téléphone',
      value: '06.65.61.98.38',
      link: 'tel:+33665619838'
    },
    {
      icon: <FiMapPin />,
      label: 'Localisation',
      value: 'Pantin, 93500',
      link: null
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'perrine-quennehen',
      link: 'https://www.linkedin.com/in/perrine-quennehen'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: '@PerrineQhn',
      link: 'https://github.com/PerrineQhn'
    }
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Contactez-moi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet ou une opportunité ? N'hésitez pas à me contacter. 
            Je suis disponible pour un CDI à partir de décembre 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Informations de Contact</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-primary text-xl mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-gray-900 hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability Badge */}
              <div className="mt-6 pt-6 border-t">
                <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg">
                  <p className="font-semibold mb-1">🚀 Disponibilité</p>
                  <p className="text-sm">À partir de décembre 2025</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <ContactForm />
          </motion.div>
        </div>

        {/* Alternative Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-600 mb-4">Ou connectez-vous directement via :</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/perrine-quennehen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FiLinkedin className="inline mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/PerrineQhn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FiGithub className="inline mr-2" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}