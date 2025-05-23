"use client";

import { Check, ArrowRight, Link } from "lucide-react";

export const UpcomingMovies = (el: any) => {
  return (
    <div>
      <div className="flex justify-between w-full items-center pb-[32px] -mt-[120px]">
        <h3 className="font-semibold text-[24px] text-[#09090B]">Upcoming</h3>
        <Link href={`/seeMore/${el.id}`} className="flex gap-[8px] border-0 cursor-pointer">
          See more <ArrowRight className="flex w-[15px]" />
          </Link>
      </div>
      <div className="flex gap-[32px] flex-wrap w-full">
      </div>
    </div>
  );
};
