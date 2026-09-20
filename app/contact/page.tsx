import type { Metadata } from "next";
import { ContactSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cerebry to discuss workplace learning, leadership programs, onboarding, and team capability needs."
};

export default function ContactPage() {
  return <ContactSection />;
}
