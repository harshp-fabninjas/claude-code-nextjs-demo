import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "About — Demo Figma",
  description: "About and contact page, ported from the Figma mockup.",
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: "/figma/icon-facebook.svg" },
  { name: "LinkedIn", href: "#", icon: "/figma/icon-linkedin.svg" },
  { name: "YouTube", href: "#", icon: "/figma/icon-youtube.svg" },
  { name: "Instagram", href: "#", icon: "/figma/icon-instagram.svg" },
];

const footerColumns = [
  { topic: "Topic", pages: ["Page", "Page", "Page"] },
  { topic: "Topic", pages: ["Page", "Page", "Page"] },
  { topic: "Topic", pages: ["Page", "Page", "Page"] },
];

// Renders the top navigation bar with the site logo, page links, and CTA button
function Navigation() {
  return (
    <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-8 sm:px-10 lg:px-20 lg:py-14">
      <span className="text-[20px] font-medium text-black">Demo Figma</span>
      <nav className="flex items-center gap-6 lg:gap-12">
        <a href="#" className="hidden text-[20px] font-medium text-black sm:inline">
          Page
        </a>
        <a href="#" className="hidden text-[20px] font-medium text-black sm:inline">
          Page
        </a>
        <a href="#" className="hidden text-[20px] font-medium text-black sm:inline">
          Page
        </a>
        <a
          href="#"
          className="rounded-lg bg-black px-6 py-3.5 text-[16px] font-medium text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
        >
          Button
        </a>
      </nav>
    </header>
  );
}

// Renders the About hero section with heading, copy, and portrait photo
function AboutHero() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-8 sm:px-10 lg:grid-cols-[624px_1fr] lg:gap-x-36 lg:px-20 lg:py-12">
      <div className="flex flex-col gap-6">
        <h1 className="text-[40px] font-bold leading-none tracking-[-0.02em] text-black sm:text-[64px]">
          About
        </h1>
        <p className="text-[24px] leading-[1.5] text-[#828282]">
          Subheading for description or instructions
        </p>
        <div className="flex flex-col gap-6 text-[20px] font-medium leading-[1.5] text-black">
          <p>
            Body text for your whole article or post. We&apos;ll put in some
            lorem ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully
            curated Ginza conversation exquisite perfect nostrud nisi
            intricate Content. Qui international first-class nulla ut.
            Punctual adipisicing, essential lovely queen tempor eiusmod
            irure. Exclusive izakaya charming Scandinavian impeccable aute
            quality of life soft power pariatur Melbourne occaecat
            discerning. Qui wardrobe aliquip, et Porter destination Toto
            remarkable officia Helsinki excepteur Basset hound. Zürich sleepy
            perfect consectetur.
          </p>
        </div>
      </div>
      <div className="relative mx-auto aspect-[508/657] w-full max-w-[508px] overflow-hidden rounded-lg bg-[#f7f7f7] lg:ml-auto">
        <Image
          src="/figma/about-portrait.png"
          alt="Portrait photo"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 508px, 100vw"
          priority
        />
      </div>
    </section>
  );
}

// Renders the Contact me heading and message form
function ContactSection() {
  const fieldClasses =
    "rounded-lg border border-[#e0e0e0] bg-white px-4 py-3 text-[16px] font-medium text-black shadow-[0_1px_1px_rgba(0,0,0,0.05)] placeholder:text-[#828282] focus:outline-none focus:ring-2 focus:ring-black/10";

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-8 sm:px-10 lg:px-20 lg:py-12">
      <div className="flex max-w-[626px] flex-col gap-6">
        <h2 className="text-[32px] font-semibold leading-[1.5] text-black">
          Contact me
        </h2>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 sm:flex-row">
            <label className="flex flex-1 flex-col gap-2">
              <span className="text-[16px] font-medium text-black">
                First name
              </span>
              <input type="text" placeholder="Jane" className={fieldClasses} />
            </label>
            <label className="flex flex-1 flex-col gap-2">
              <span className="text-[16px] font-medium text-black">
                Last name
              </span>
              <input
                type="text"
                placeholder="Smitherton"
                className={fieldClasses}
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-[16px] font-medium text-black">
              Email address
            </span>
            <input
              type="email"
              placeholder="email@janesfakedomain.net"
              className={fieldClasses}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[16px] font-medium text-black">
              Your message
            </span>
            <textarea
              rows={5}
              placeholder="Enter your question or message"
              className={`${fieldClasses} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="rounded-lg bg-black px-8 py-4 text-[20px] font-medium text-white shadow-[0_1px_1px_rgba(0,0,0,0.05)]"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

// Renders the site footer with link columns and social icons
function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1440px] px-6 pb-16 pt-8 sm:px-10 lg:px-20">
      <div className="flex flex-col gap-12 border-t border-[#e0e0e0] pt-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-6">
          <span className="text-[24px] text-black">Site name</span>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex size-10 items-center justify-center rounded text-[#828282] transition-colors hover:text-black"
              >
                <Image src={social.icon} alt="" width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-16 gap-y-8 sm:justify-end">
          {footerColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex w-[187px] flex-col items-end gap-6 text-right"
            >
              <span className="text-[16px] font-medium text-black">
                {column.topic}
              </span>
              {column.pages.map((page, pageIndex) => (
                <span
                  key={pageIndex}
                  className="text-[16px] font-medium text-[#454545]"
                >
                  {page}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Renders the /figma page, ported from the Figma "About" mockup
export default function FigmaPage() {
  return (
    <div className={`${inter.className} flex-1 bg-white text-black`}>
      <Navigation />
      <AboutHero />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}
