import Image from "next/image";

export default function Gwendolyn() {
    return (
        <section className="mx-auto mb-4 flex w-full max-w-md flex-1 flex-col items-center px-5 pt-12">
            <div className="relative mb-5 h-48 w-48 overflow-hidden rounded-full shadow-xl">
                <Image src="/profile.jpeg" alt="Sinela Studio" fill priority className="object-cover"/>
            </div>

            <h1 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
                Gwendolyn
            </h1>
            <h1 className="text-balance font-serif text-xl font-bold tracking-tight text-foreground">
                Beauty Studio
            </h1>
        </section>
    )
}
