import AboutPage from "../Pages/AboutPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us"
}

export default function About() {
  return <AboutPage />;
}
