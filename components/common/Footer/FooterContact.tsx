"use client";

import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-sans text-xs font-bold tracking-widest text-white uppercase">
        Contact
      </h4>

      <ul className="flex flex-col gap-4 font-sans text-xs sm:text-sm text-white/60 font-light max-w-xs">
        {/* Address */}
        <li className="flex items-start gap-3">
          <FiMapPin className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            Jl. Kemang Raya No. 88, Kebayoran Baru, Jakarta Selatan 12730
          </span>
        </li>

        {/* Phones */}
        <li className="flex items-start gap-3">
          <FiPhone className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span>+62 812-3456-7890</span>
            <span>+62 21-7890-1234</span>
          </div>
        </li>

        {/* Emails */}
        <li className="flex items-start gap-3">
          <FiMail className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <a
              href="mailto:hello@lafarine.id"
              className="hover:text-[#E5C299] transition-colors"
            >
              hello@lafarine.id
            </a>
            <a
              href="mailto:order@lafarine.id"
              className="hover:text-[#E5C299] transition-colors"
            >
              order@lafarine.id
            </a>
          </div>
        </li>

        {/* Operational Hours */}
        <li className="flex items-start gap-3">
          <FiClock className="text-[#E5C299] text-base shrink-0 mt-0.5" />
          <div className="flex flex-col gap-0.5">
            <span>Every Day: 07:00 – 21:00</span>
            <span>Weekend: 06:00 – 22:00</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
