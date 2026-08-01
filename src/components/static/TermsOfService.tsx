export default function TermsOfService() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1
        className="text-[36px] mb-2 text-zinc-900"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic italic">Terms of service</em>
      </h1>
      <p className="text-zinc-400 text-[13px] mb-10">
        Last updated August 2026
      </p>

      <div className="space-y-7 text-[14.5px] leading-relaxed text-zinc-700">
        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Using palettesnap
          </h2>
          <p>
            palettesnap is free to use. You can browse, like, and publish
            palettes without creating an account. By using the site, you agree
            to these terms.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Publishing palettes
          </h2>
          <p>
            When you publish a palette, it becomes visible to everyone on the
            site. Don't publish tags or content that are offensive, misleading,
            or infringe on someone else's rights. We reserve the right to remove
            any published palette at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            No warranty
          </h2>
          <p>
            palettesnap is provided as-is. We don't guarantee it will be
            available at all times, error-free, or that any data — including
            published palettes and likes — will be preserved indefinitely.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Acceptable use
          </h2>
          <p>
            Don't use automated tools to scrape, spam, or flood the site with
            palettes, and don't attempt to interfere with other people's
            collections or likes.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Changes
          </h2>
          <p>
            These terms may be updated as the product changes. Continued use of
            palettesnap after an update means you accept the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
}
