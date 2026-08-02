import Image from "next/image"
import { LinkButton } from "@/components/link-button"
import { CalendarDays } from "lucide-react"
import { WhatsAppIcon, FacebookIcon, InstagramIcon, PriceIcon } from "@/components/icons"

const links = [
  { href: "/appointment", label: "Aparta tu cita", icon: CalendarDays },
  { href: "https://pixeloidtech.com/ss/gallery/catalog.pdf", label: "Precios", icon: PriceIcon },
  { href: "https://wa.me/53502772", label: "WhatsApp", icon: WhatsAppIcon },
  { href: "https://chat.whatsapp.com/DX3Hi13gwVn2atk5gjqMOm?mode=wwt", label: "Grupo de WhatsApp", icon: WhatsAppIcon },
  { href: "https://www.instagram.com/gwendolyn_beautystudio?igsh=MW11YTllaGxmanEzdg==", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.facebook.com/share/1DGnHq9oqw/?mibextid=qi2Om", label: "Facebook", icon: FacebookIcon },
]

export default function Menu() {
  return (
    <div className="">
      <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-12">
        <div className="relative mb-5 h-48 w-48 overflow-hidden rounded-full shadow-xl">
          <Image src="/profile.jpeg" alt="Sinela Studio" fill priority className="object-cover" />
        </div>

        <h1 className="mb-2 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
          Gwendolyn Beauty
        </h1>
        <h1 className="mb-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
          Studio
        </h1>

        <nav className="mt-8 flex w-full flex-col gap-2" aria-label="Enlaces">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </nav>
      </section>
    </div>
  )
}