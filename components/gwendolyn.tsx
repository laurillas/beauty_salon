import Image from "next/image";

export default function Gwendolyn() {
    return (
        <section className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-3 py-12">
            <div className="relative mb-5 h-48 w-48 overflow-hidden rounded-full shadow-xl">
                <Image src="/profile.jpeg" alt="Sinela Studio" fill priority className="object-cover"/>
            </div>

            <h1 className="mb-2 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
                Gwendolyn Beauty
            </h1>
            <h1 className="mb-4 text-balance font-serif text-3xl font-bold tracking-tight text-foreground">
                Studio
            </h1>
        </section>
    )
}
