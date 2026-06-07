"use client";

import { FaStar } from "react-icons/fa6";
import { ImQuotesLeft } from "react-icons/im";

interface CommentCardProps {
  comment: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
}

export default function CommentCard({
  comment,
  name,
  role,
  rating,
  avatar,
}: CommentCardProps) {
  return (
    <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.01)] border border-[#F4EDE2] flex flex-col justify-between h-full min-h-[250px]">
      <div>
        {/* Quote Icon */}
        <ImQuotesLeft className="text-[#EFECE6] text-3xl md:text-4xl mb-4" />

        {/* Comment Text */}
        <p className="font-sans italic text-sm md:text-base text-muted-cocoa/90 leading-relaxed font-light mb-6">
          "{comment}"
        </p>
      </div>

      {/* User Profile Info */}
      <div className="flex items-center gap-4 border-t border-[#FAF6F0] pt-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FAF6F0] flex items-center justify-center border border-[#EFECE6] shrink-0">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h4 className="font-sans text-sm md:text-base font-bold text-bakeryText">
            {name}
          </h4>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-cocoa">
            <span>{role}</span>
            <span className="text-[#E5C299]">•</span>
            <div className="flex items-center gap-1">
              <span>{rating.toFixed(1)}</span>
              <FaStar className="text-[#E5C299] text-[10px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
