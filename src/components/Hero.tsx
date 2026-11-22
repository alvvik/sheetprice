import Image from "next/image";
import bg from "../../public/bg.jpg";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black pt-48 pb-12 sm:pb-16 lg:pb-32 xl:pt-48 xl:pb-48 2xl:pb-56">
      <div className="absolute inset-y-0 right-0">
        <Image
          className="h-full w-full max-w-4xl origin-left object-cover opacity-50 lg:-translate-x-8 lg:scale-110 xl:opacity-100"
          src={bg}
          alt="Tło"
          width={1200}
          height={800}
          priority
          quality={75}
        />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="w-full text-right md:text-left lg:w-2/3 xl:w-1/2">
            <h1 className="mt-6 text-center text-7xl font-bold tracking-tighter text-white md:text-left">
              Osiedlowy szczeniak
            </h1>
            <p className="text-opacity-70 mt-12 leading-7 text-white md:max-w-sm">
              Znajdziesz u nas karmę, akcesoria i wszystko, czego potrzebują Twoi czworonożni
              przyjaciele.
            </p>

            <div className="mt-8 flex items-center justify-end space-x-3 sm:space-x-4 md:justify-start">
              <Link
                className="inline-flex items-center justify-center rounded-full border border-blue-600 bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:outline-hidden"
                href="/oferta"
              >
                Sprawdź ofertę
                <ExternalLink className="ml-2 size-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
