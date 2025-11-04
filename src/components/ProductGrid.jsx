import { useMemo } from 'react'
import Swal from 'sweetalert2'

const currency = (value) => new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(value)

export default function ProductGrid({ t, lang }) {
  const products = useMemo(() => ([
    {
      id: 'ui-kit',
      name: { en: 'Neo UI Kit', es: 'Neo UI Kit' },
      description: {
        en: 'A minimalist component library for modern web apps.',
        es: 'Una biblioteca minimalista de componentes para apps web modernas.',
      },
      price: 49,
      lowSales: false,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      id: 'sound-pack',
      name: { en: 'Micro Sound Pack', es: 'Paquete de Sonidos Micro' },
      description: {
        en: '200 crisp UI sounds crafted for digital products.',
        es: '200 sonidos nítidos de UI para productos digitales.',
      },
      price: 29,
      lowSales: true,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 'template',
      name: { en: 'SaaS Starter Template', es: 'Plantilla SaaS Starter' },
      description: {
        en: 'Production-ready template integrating auth and billing.',
        es: 'Plantilla lista para producción con auth y pagos.',
      },
      price: 99,
      lowSales: false,
      color: 'from-sky-500 to-cyan-500',
    },
    {
      id: 'icon-pack',
      name: { en: 'Mono Icon Pack', es: 'Paquete de Iconos Mono' },
      description: {
        en: '700 vector icons in outline and solid styles.',
        es: '700 iconos vectoriales en estilos contorno y sólido.',
      },
      price: 39,
      lowSales: true,
      color: 'from-rose-500 to-fuchsia-500',
    },
  ]), [])

  const handleBuy = (product) => {
    if (product.lowSales) {
      Swal.fire({
        title: t.alerts.rare.title,
        text: t.alerts.rare.text(product.name[lang]),
        icon: 'info',
        confirmButtonText: t.alerts.rare.confirm,
        showCancelButton: true,
        cancelButtonText: t.alerts.rare.cancel,
        confirmButtonColor: '#0f172a',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: 'success',
            title: t.alerts.success.title,
            text: t.alerts.success.text,
            confirmButtonColor: '#0f172a',
          })
        }
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: t.alerts.success.title,
      text: t.alerts.success.text,
      confirmButtonColor: '#0f172a',
    })
  }

  return (
    <section id="products" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              {t.products.title}
            </h2>
            <p className="text-slate-600 mt-2">{t.products.subtitle}</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map(prod => (
            <div key={prod.id} className="group rounded-2xl border border-slate-200 p-5 hover:shadow-lg transition-shadow bg-white">
              <div className={`h-36 rounded-xl bg-gradient-to-br ${prod.color} mb-4`}></div>
              <h3 className="font-semibold text-slate-900">{prod.name[lang]}</h3>
              <p className="text-slate-600 text-sm mt-1 min-h-[40px]">{prod.description[lang]}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-slate-900 font-semibold">{currency(prod.price)}</span>
                <button
                  onClick={() => handleBuy(prod)}
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
                >
                  {t.products.buy}
                </button>
              </div>
              {prod.lowSales && (
                <span className="mt-3 inline-block text-[11px] font-medium text-amber-700 bg-amber-100 px-2 py-1 rounded">
                  {t.products.rareBadge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
