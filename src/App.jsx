import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero3D from './components/Hero3D'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function App() {
  const [lang, setLang] = useState('en')

  const t = useMemo(() => {
    const brand = 'Digital E-Comerce'
    const translations = {
      en: {
        brand,
        nav: { features: 'Features', products: 'Products', contact: 'Contact', cart: 'Cart' },
        hero: {
          title: 'Minimalist 3D goods for modern creators',
          subtitle: 'Discover premium digital assets crafted with a futuristic, interactive aesthetic.',
          cta: 'Browse products',
          secondary: 'See features',
        },
        products: {
          title: 'Digital Products',
          subtitle: 'Curated tools and assets to accelerate your next launch.',
          buy: 'Buy now',
          rareBadge: 'Rarely sold',
        },
        alerts: {
          rare: {
            title: 'Heads up',
            text: (name) => `${name} is rarely sold. Are you sure you want to proceed?`,
            confirm: 'Yes, continue',
            cancel: 'Cancel',
          },
          success: {
            title: 'Added to cart',
            text: 'You can review your cart anytime.',
          },
        },
        footer: {
          rights: 'All rights reserved.',
          terms: 'Terms',
          privacy: 'Privacy',
        },
        features: {
          title: 'Futuristic aesthetic',
          text: 'Clean, minimalist visuals paired with interactive depth.',
        },
      },
      es: {
        brand,
        nav: { features: 'Características', products: 'Productos', contact: 'Contacto', cart: 'Carrito' },
        hero: {
          title: 'Productos 3D minimalistas para creadores modernos',
          subtitle: 'Descubre activos digitales premium con una estética futurista e interactiva.',
          cta: 'Ver productos',
          secondary: 'Ver características',
        },
        products: {
          title: 'Productos Digitales',
          subtitle: 'Herramientas y recursos para acelerar tu próximo lanzamiento.',
          buy: 'Comprar',
          rareBadge: 'Se vende raramente',
        },
        alerts: {
          rare: {
            title: 'Atención',
            text: (name) => `${name} se vende raramente. ¿Deseas continuar?`,
            confirm: 'Sí, continuar',
            cancel: 'Cancelar',
          },
          success: {
            title: 'Añadido al carrito',
            text: 'Puedes revisar tu carrito en cualquier momento.',
          },
        },
        footer: {
          rights: 'Todos los derechos reservados.',
          terms: 'Términos',
          privacy: 'Privacidad',
        },
        features: {
          title: 'Estética futurista',
          text: 'Visuales limpios y minimalistas con profundidad interactiva.',
        },
      },
      id: {
        brand,
        nav: { features: 'Fitur', products: 'Produk', contact: 'Kontak', cart: 'Keranjang' },
        hero: {
          title: 'Produk 3D minimalis untuk kreator modern',
          subtitle: 'Temukan aset digital premium dengan estetika futuristik yang interaktif.',
          cta: 'Lihat produk',
          secondary: 'Lihat fitur',
        },
        products: {
          title: 'Produk Digital',
          subtitle: 'Kumpulan alat dan aset untuk mempercepat peluncuran Anda berikutnya.',
          buy: 'Beli sekarang',
          rareBadge: 'Jarang terjual',
        },
        alerts: {
          rare: {
            title: 'Perhatian',
            text: (name) => `${name} jarang terjual. Anda yakin ingin melanjutkan?`,
            confirm: 'Ya, lanjutkan',
            cancel: 'Batal',
          },
          success: {
            title: 'Ditambahkan ke keranjang',
            text: 'Anda dapat meninjau keranjang kapan saja.',
          },
        },
        footer: {
          rights: 'Semua hak dilindungi.',
          terms: 'Ketentuan',
          privacy: 'Privasi',
        },
        features: {
          title: 'Estetika futuristik',
          text: 'Visual minimalis yang bersih dengan kedalaman interaktif.',
        },
      },
    }

    return translations[lang] || translations.en
  }, [lang])

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
                <h3 className="font-semibold">{t.features.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{t.features.text}</p>
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
