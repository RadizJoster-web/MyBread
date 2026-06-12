import { pagesList } from "@/assets/pageList";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const usePage = () => {
  const [selectedPage, setSelectedPage] = useState("Home");

  const pathname = usePathname();
  useEffect(() => {
    const match = pagesList.find((page) => page.href === pathname);
    if (match) setSelectedPage(match.label);
  }, [pathname]);

  return { selectedPage, setSelectedPage };
};
