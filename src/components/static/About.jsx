import { Instagram, Github, Twitter, Mail, Palette } from "lucide-react";
import { useStore } from "../../store/useStore";

export default function About() {
  const { setView } = useStore();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 md:px-0">
      <h1
        className="text-[36px] mb-2 text-zinc-900"
        style={{ fontFamily: "'Instrument Serif', serif" }}
      >
        <em className="not-italic italic">About PaletteSnap</em>
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
            PaletteSnap is a place to browse, save, and create four-color
            palettes. Every palette on the site was either hand-picked or
            published by someone using the app - there's no algorithm generating
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
            Like a palette to save it to your collection - likes are tied to
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
            for everyone - instantly, publicly, no approval queue.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-2 uppercase">
            Who built this
          </h2>
          <p className="mb-4">
            PaletteSnap is an independent project built and maintained by Bilal.
            If something looks broken or you have an idea for it, reach out
            through the links below.
          </p>
        </section>

        {/*CONNECT SECTION */}
        <section className="pt-4 border-t border-zinc-200">
          <h2 className="text-[13px] font-semibold tracking-[0.02em] text-zinc-900 mb-4 uppercase">
            Connect
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/bilalmlkdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
            >
              <Instagram size={15} />
              Instagram
            </a>
            <a
              href="https://github.com/byllzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="https://twitter.com/bilalmlkdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
            >
              <Twitter size={15} />
              Twitter / X
            </a>
            <a
              href="mailto:bilalmlkdev@email.com"
              className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-[13px] font-medium text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
            >
              <Mail size={15} />
              Email
            </a>

            {/* GO BACK TO APP LINK */}
            <button
              onClick={() => setView("new")}
              className="flex items-center gap-2 px-4 py-2 border border-zinc-900 rounded-full text-[13px] font-medium text-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              <Palette size={15} />
              Explore the app
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
