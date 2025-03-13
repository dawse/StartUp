import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Site Vitrine sur-mesure en Tunisie – Boostez votre présence digitale",
  description: "Découvrez comment notre équipe de professionnels crée des sites vitrines innovants et personnalisés pour valoriser votre entreprise en Tunisie."
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={"/images/siteVitrine/website.jpg"}
                      alt="Site vitrine moderne et attractif"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Donnez vie à votre image digitale avec un site vitrine sur-mesure
                </h2>
                <div className="blog-details">
                  <p>
                    Vous aspirez à posséder un site web qui non seulement reflète l’essence de votre entreprise, mais qui transforme également vos visiteurs en clients fidèles ? En Tunisie, notre équipe de spécialistes passionnés conçoit des sites vitrines uniques et adaptés à vos besoins spécifiques.
                  </p>

                  <p>
                    Notre approche repose sur l’innovation et la personnalisation. Chaque projet est pensé pour offrir une expérience utilisateur optimale, combinant un design moderne, des fonctionnalités avancées et une optimisation SEO pointue. Ainsi, votre entreprise bénéficie d'une visibilité accrue et d'un positionnement différenciant sur le marché.
                  </p>

                  <div className="flex flex-wrap gap-5 justify-center">
  <div className="relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg">
    <Image
      src="/images/siteVitrine/site-vitrine-02.jpg"
      alt="Design attractif et ergonomique"
      fill
      className="object-cover object-center"
    />
  </div>
  <div className="relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg">
    <Image
      src="/images/siteVitrine/site-vitrine-03.png"
      alt="Interface intuitive et performante"
      fill
      className="object-cover object-center"
    />
  </div>
</div>

                  <h3 className="pt-8">
                    Une offre complète pour un succès garanti
                  </h3>

                  <p>
                    Au-delà de la simple création, nous assurons un accompagnement global : du développement à la maintenance, en passant par le référencement naturel et le marketing digital. Nos solutions sur-mesure sont conçues pour évoluer avec votre entreprise et répondre aux exigences d’un marché en perpétuel changement.
                  </p>

                  <p>
                    Choisir notre service, c'est opter pour l'excellence et la transparence. Nous allions expertise technique et créativité pour bâtir un site vitrine qui vous distingue de la concurrence et attire durablement l'attention de vos prospects. Contactez-nous dès aujourd'hui pour transformer votre vision en succès digital !
                  </p>
                </div>

                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
