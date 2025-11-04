import Spline from '@splinetool/react-spline'

export default function Hero3D({ t }) {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            {t.hero.title}
          </h1>
          <p className="mt-4 text-slate-700 text-lg max-w-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-800">
              {t.hero.cta}
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
              {t.hero.secondary}
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
    </section>
  )
}
