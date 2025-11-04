import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  const t = useMemo(() => ({
    brand: 'Digital Minimal',
    nav: {
      features: lang === 'en' ? 'Features' : 'Características',
      products: lang === 'en' ? 'Products' : 'Productos',
      contact: lang === 'en' ? 'Contact' : 'Contacto',
      cart: lang === 'en' ? 'Cart' : 'Carrito',
    },
    hero: {
      title: lang === 'en'
        ? 'Minimalist 3D goods for modern creators'
        : 'Productos 3D minimalistas para creadores modernos',
      subtitle: lang === 'en'
        ? 'Discover premium digital assets crafted with a futuristic, interactive aesthetic.'
        : 'Descubre activos digitales premium con una estética futurista e interactiva.',
      cta: lang === 'en' ? 'Browse products' : 'Ver productos',
      secondary: lang === 'en' ? 'See features' : 'Ver características',
    },
    products: {
      title: lang === 'en' ? 'Digital Products' : 'Productos Digitales',
      subtitle: lang === 'en'
        ? 'Curated tools and assets to accelerate your next launch.'
        : 'Herramientas y recursos para acelerar tu próximo lanzamiento.',
      buy: lang === 'en' ? 'Buy now' : 'Comprar',
      rareBadge: lang === 'en' ? 'Rarely sold' : 'Se vende raramente',
    },
    alerts: {
      rare: {
        title: lang === 'en' ? 'Heads up' : 'Atención',
        text: (name) => lang === 'en'
          ? `${name} is rarely sold. Are you sure you want to proceed?`
          : `${name} se vende raramente. ¿Deseas continuar?`,
        confirm: lang === 'en' ? 'Yes, continue' : 'Sí, continuar',
        cancel: lang === 'en' ? 'Cancel' : 'Cancelar',
      },
      success: {
        title: lang === 'en' ? 'Added to cart' : 'Añadido al carrito',
        text: lang === 'en' ? 'You can review your cart anytime.' : 'Puedes revisar tu carrito en cualquier momento.',
      },
    },
    footer: {
      rights: lang === 'en' ? 'All rights reserved.' : 'Todos los derechos reservados.',
      terms: lang === 'en' ? 'Terms' : 'Términos',
      privacy: lang === 'en' ? 'Privacy' : 'Privacidad',
    },
  }), [lang])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero3D t={t} />
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-slate-900 to-slate-600 mb-4" />
                <h3 className="font-semibold">{lang === 'en' ? 'Futuristic aesthetic' : 'Estética futurista'}</h3>
                <p className="text-slate-600 text-sm mt-1">
                  {lang === 'en'
                    ? 'Clean, minimalist visuals paired with interactive depth.'
                    : 'Visuales limpios y minimalistas con profundidad interactiva.'}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ProductGrid t={t} lang={lang} />
      </main>
      <Footer t={t} />
    </div>
  )
}
