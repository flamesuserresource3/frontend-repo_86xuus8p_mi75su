import { useMemo } from 'react'
import { Globe, ShoppingCart } from 'lucide-react'

export default function Navbar({ lang, setLang, t, cartCount = 0 }) {
  const languages = useMemo(() => ([
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'id', label: 'ID' },
  ]), [])

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-slate-900 to-slate-600" />
          <span className="font-semibold tracking-tight text-slate-900">{t.brand}</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">{t.nav.features}</a>
          <a href="#products" className="hover:text-slate-900 transition-colors">{t.nav.products}</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">{t.nav.contact}</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-lg border border-slate-300/60 bg-white px-2 py-1">
            <Globe className="h-4 w-4 text-slate-600" />
            <select
              aria-label="Language selector"
              className="bg-transparent text-sm text-slate-700 focus:outline-none cursor-pointer"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              {languages.map(l => (
                <option key={l.code} value={l.code}>{l.label}</option>
              ))}
            </select>
          </div>

          <button className="relative inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800 transition-colors">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">{t.nav.cart}</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] font-semibold bg-emerald-500 text-white rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
