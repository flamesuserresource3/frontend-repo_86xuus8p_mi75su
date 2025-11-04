export default function Footer({ t }) {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} {t.brand}. {t.footer.rights}</p>
          <div className="text-slate-500 text-sm">
            <a href="#" className="hover:text-slate-900 transition-colors">{t.footer.terms}</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:text-slate-900 transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
