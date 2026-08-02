import type {ComponentType} from "react"

interface LinkButtonProps {
  href: string
  label: string
  icon: ComponentType<{ className?: string }>
}

export function LinkButton({href, label, icon: Icon}: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex w-full items-center justify-center gap-2 rounded-full border border-b-4 border-r-2 border-[#a68966] bg-card px-6 py-4 text-center font-serif text-lg font-semibold text-card-foreground shadow-[0_10px_25px_-12px_rgba(120,90,40,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_16px_30px_-12px_rgba(120,90,40,0.55)]"
    >
      <span className="text-sm">{label}</span>
      <Icon className="h-5 w-5 text-card-foreground" aria-hidden="true"/>
    </a>
  )
}
