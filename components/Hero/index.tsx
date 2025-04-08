"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Boostez Votre Présence en Ligne avec Notre Agence Web !
              </h4>
              <h1 className="relative inline-block text-2xl font-bold text-black dark:text-white l:text-hero">
                 Innover. Collaborer. Réussir.
              </h1>
              <p>
              En tant qu’agence web en Tunisie, 
              nous vous accompagnons à chaque étape de votre projet digital,
              de la conception de votre site à la mise en œuvre de stratégies de marketing digital efficaces. 
              Nous croyons fermement que le succès réside dans la collaboration étroite et continue avec nos clients. 
              C’est pourquoi nous nous engageons à construire des relations durables basées sur la confiance et la transparence,
              afin de transformer vos ambitions digitales en projets concrets et performants.
              </p>

              <div className="mt-10">
                  <div className="flex flex-wrap gap-5">
                    <Link
                      href="/support"
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Besoin d'un coup de main ?
                    </Link>
                  </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                {/* 700/444 */}
                <div className="relative aspect-[980/550] w-full rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light-02.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-light-02.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
