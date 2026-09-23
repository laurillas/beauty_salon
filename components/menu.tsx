import { LinkButton } from "@/components/link-button"
import {CalendarDays, NotebookPen} from "lucide-react"
import { WhatsAppIcon, FacebookIcon, InstagramIcon, PriceIcon } from "@/components/icons"
import Gwendolyn from "@/components/gwendolyn";

const links = [
  { href: "/appointment", label: "Aparta tu cita", icon: CalendarDays },
  { href: "https://iris.lab406.com/gwendolynbeautystudio", label: "Precios", icon: PriceIcon },
  { href: "https://wa.me/53502772", label: "WhatsApp", icon: WhatsAppIcon },
  { href: "https://chat.whatsapp.com/DX3Hi13gwVn2atk5gjqMOm?mode=wwt", label: "Grupo de WhatsApp", icon: WhatsAppIcon },
  { href: "https://www.instagram.com/gwendolyn_beautystudio?igsh=MW11YTllaGxmanEzdg==", label: "Instagram", icon: InstagramIcon },
  { href: "https://www.facebook.com/share/1DGnHq9oqw/?mibextid=qi2Om", label: "Facebook", icon: FacebookIcon },
  { href: "/curse", label: "Cursos", icon: NotebookPen },
]

export default function Menu() {
  return (
    <div className="">
      <Gwendolyn/>
      <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-5 py-4 mb-6">
        <nav className="mt-8 flex w-full flex-col gap-2" aria-label="Enlaces">
          {links.map((link) => (
            <LinkButton key={link.label} {...link} />
          ))}
        </nav>
      </section>
    </div>
  )
}