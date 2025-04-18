export function ContactCTA() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600 to-transparent opacity-20"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-600/20 bg-black/70 p-8 text-center backdrop-blur-sm">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-300">
            We welcome enquiries from investors, partners, and industry professionals. Reach out to our team for
            strategic discussions, investment opportunities, or any support you may need.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4">
            <p className="text-sm text-gray-400">📩 Email: dg@dparadigmcapital.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

