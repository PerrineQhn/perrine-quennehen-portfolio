import '../styles/global.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Perrine Quennehen | Ingénieure ML & Data Scientist NLP',
  description: 'Portfolio de Perrine Quennehen, Ingénieure Machine Learning et Data Scientist spécialisée en NLP. Experte en fine-tuning, transformers, et analyse de données.',
  keywords: 'NLP, Machine Learning, Data Science, Python, Transformers, BERT, Deep Learning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}