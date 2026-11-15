import Image from "next/image";
import bg from "../../public/bg.jpg";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
export default function Home() {
  return (
    <div className="relative pt-48 pb-12 overflow-hidden bg-black min-h-screen xl:pt-48 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56 ">
      <div className="absolute inset-y-0 right-0">
        <Image
          className="object-cover w-full h-full max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110 lg:-translate-x-8"
          src={bg}
          alt="Tło"
          width={1200}
          height={800}
          priority
          quality={20}
        />
      </div>

      <div className="relative ">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl ">
          <div className="w-full text-right lg:w-2/3 xl:w-1/2 md:text-left ">
            <h1 className="text-7xl font-bold mt-6 tracking-tighter text-white text-center md:text-left">
              Osiedlowy szczeniak
            </h1>
            <p className="mt-12  leading-7 md:max-w-sm text-white text-opacity-70">
              Znajdziesz u nas karmę, akcesoria i wszystko, czego potrzebują
              Twoi czworonożni przyjaciele.
            </p>

            <div className="flex items-center justify-end mt-8 space-x-3 md:justify-start sm:space-x-4">
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
