"use client";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="flex flex-col gap-5">
      {/* Column Title */}
      <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">
        {title}
      </h4>

      {/* Links List */}
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="font-sans text-xs sm:text-sm text-white/60 hover:text-[#E5C299] transition-colors duration-200 font-light"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
