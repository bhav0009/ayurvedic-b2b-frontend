export function IntroSection() {
  return (
    <section className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Our Philosophy
        </p>
        <h2 className="mt-4 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
          Rooted in Tradition, Driven by Excellence
        </h2>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p className="leading-relaxed">
            Ayurveda, the ancient science of life, has guided wellness practices
            for over 5,000 years. At Maharishi Atreya, we honor this profound legacy by
            sourcing the finest herbs from their native regions and processing
            them with meticulous care.
          </p>
          <p className="leading-relaxed">
            Our commitment extends beyond quality products. We believe in
            sustainable sourcing, ethical partnerships, and supporting the
            communities that cultivate these precious botanicals. Every product
            we create carries forward the wisdom of Ayurveda while meeting the
            rigorous standards of modern global trade.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary">
              500+
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Products in Portfolio
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary">
              50+
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Countries Served
            </p>
          </div>
          <div className="text-center">
            <p className="font-serif text-4xl font-semibold text-primary">
              25+
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Years of Excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
