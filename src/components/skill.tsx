"use client";

import IconCloud from "@/components/magicui/icon-cloud";
import { DATA } from "@/data/resume";

export function Skills() {
  const slugs: string[] = [...DATA.skillSlugs]

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
