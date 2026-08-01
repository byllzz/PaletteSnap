export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1
        className="text-[36px] mb-2 text-zinc-900"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic italic">About palettesnap</em>
      </h1>
      <p className="text-zinc-500 text-[14px] mb-10">
        A small, fast place to find and publish color palettes.
      </p>

      <div className="space-y-8 text-[14.5px] leading-relaxed text-zinc-700">
        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            What this is
          </h2>
          <p>
            palettesnap is a place to browse, save, and create four-color
            palettes. Every palette on the site was either hand-picked or
            published by someone using the app — there's no algorithm generating
            them and no account required to take part.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            How it works
          </h2>
          <p>
            Browse by New, Popular, or Random, or filter by color and tag from
            the sidebar. Click any palette to see its hex and RGB values, copy a
            single color, or export the whole thing as an SVG, PNG, or JPEG.
            Like a palette to save it to your collection — likes are tied to
            your browser, not an account, so no sign-up is needed.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Publishing your own
          </h2>
          <p>
            Anyone can create and publish a palette from the Create screen. Pick
            four colors, add a few tags so people can find it, and it appears
            for everyone — instantly, publicly, no approval queue.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Who built this
          </h2>
          <p>
            palettesnap is an independent project built and maintained by Bilal.
            If something looks broken or you have an idea for it, reach out on
            Instagram.
          </p>
        </section>
      </div>
    </div>
  );
}
