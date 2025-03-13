import { Metadata } from "next";
import { BlogPostLayout } from "../../blog/BlogPostLayout/page";
export const metadata: Metadata = {
  title: "Maintenance et mise à jour de sites web en Tunisie – Gardez votre site performant",
  description:
    "Découvrez comment notre équipe assure la maintenance et la mise à jour régulière de votre site web pour garantir performance, sécurité et continuité.",
};

const MaintenanceBlog = async () => {
  const blogProps = {
    mainImage: {
      src: "/images/maintenance/maintenance-site-web-01.jpg", 
      alt: "Maintenance et mise à jour de site web",
      aspect: "97/60",
    },
    title: "Optimisez la performance de votre site grâce à une maintenance régulière",
    content: {
      paragraphs: [
        "Votre site web est la vitrine de votre entreprise et doit rester performant, sécurisé et toujours à jour. En Tunisie, notre équipe de spécialistes en maintenance intervient pour garantir la continuité de votre présence digitale et optimiser l’expérience utilisateur.",
        "Nous vous proposons des services complets de maintenance, incluant la mise à jour des contenus, des plugins et des technologies, ainsi que la surveillance constante de la sécurité et des performances. Notre approche proactive permet d’anticiper les besoins de votre site afin d’éviter toute interruption ou dysfonctionnement.",
      ],
      additionalImages: [
        {
          src: "/images/maintenance/maintenance-site-web-02.jpg",
          alt: "Intervention technique sur site web",
        },
        {
          src: "/images/maintenance/maintenance-site-web-03.jpg", 
          alt: "Optimisation et mises à jour régulières",
        },
      ],
      secondaryHeading: "Une maintenance proactive pour une tranquillité d'esprit",
      secondaryParagraphs: [
        "Nous mettons en place un suivi régulier et des mises à jour planifiées pour garantir la stabilité et la sécurité de votre site. Notre service vous permet de vous concentrer sur votre cœur de métier pendant que nous assurons le bon fonctionnement de votre présence en ligne.",
        "En choisissant notre service, vous bénéficiez d’une expertise technique avancée et d’un accompagnement personnalisé pour anticiper et résoudre rapidement tout problème. Contactez-nous dès aujourd’hui pour discuter de vos besoins et assurer la pérennité de votre site web.",
      ],
    },
  };

  return <BlogPostLayout {...blogProps} />;
};

export default MaintenanceBlog;
