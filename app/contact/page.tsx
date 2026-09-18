import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CEREBRY INC to discuss business solutions, strategic questions, and commercial partnerships."
};

export default function ContactPage() {
  return <ContactSection />;
}
