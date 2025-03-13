import { Metadata } from "next";
import { BlogPostLayout } from "../../blog/BlogPostLayout/page";

export const metadata: Metadata = {
  title: "Site Vitrine sur-mesure en Tunisie – Boostez votre présence digitale",
  description:
    "Découvrez comment notre équipe de professionnels crée des sites vitrines innovants et personnalisés pour valoriser votre entreprise en Tunisie.",
};

const SiteVitrineBlog = async () => {
  const blogProps = {
    mainImage: {
      src: "/images/siteVitrine/website.jpg",
      alt: "Site vitrine moderne et attractif",
      aspect: "97/60",
    },
    title: "Donnez vie à votre image digitale avec un site vitrine sur-mesure",
    content: {
      paragraphs: [
        "Vous aspirez à posséder un site web qui non seulement reflète l’essence de votre entreprise, mais qui transforme également vos visiteurs en clients fidèles ? En Tunisie, notre équipe de spécialistes passionnés conçoit des sites vitrines uniques et adaptés à vos besoins spécifiques.",
        "Notre approche repose sur l’innovation et la personnalisation. Chaque projet est pensé pour offrir une expérience utilisateur optimale, combinant un design moderne, des fonctionnalités avancées et une optimisation SEO pointue. Ainsi, votre entreprise bénéficie d'une visibilité accrue et d'un positionnement différenciant sur le marché.",
      ],
      additionalImages: [
        {
          src: "/images/siteVitrine/site-vitrine-02.jpg",
          alt: "Design attractif et ergonomique",
        },
        {
          src: "/images/siteVitrine/site-vitrine-03.png",
          alt: "Interface intuitive et performante",
        },
      ],
      secondaryHeading: "Une offre complète pour un succès garanti",
      secondaryParagraphs: [
        "Au-delà de la simple création, nous assurons un accompagnement global : du développement à la maintenance, en passant par le référencement naturel et le marketing digital. Nos solutions sur-mesure sont conçues pour évoluer avec votre entreprise et répondre aux exigences d’un marché en perpétuel changement.",
        "Choisir notre service, c'est opter pour l'excellence et la transparence. Nous allions expertise technique et créativité pour bâtir un site vitrine qui vous distingue de la concurrence et attire durablement l'attention de vos prospects. Contactez-nous dès aujourd'hui pour transformer votre vision en succès digital !",
      ],
    },
    relatedPosts: [
      {
        title: "E-commerce",
        mainImage: "/images/e-commerce/e-commerce-01.jpg",
        link: "/service/e-commerce",
      },
      {
        title: "Maintenance et mise à jour",
        mainImage: "/images/maintenance/maintenance-site-web-01.jpg",
        link: "/service/maintenance",
      },
      {
        title: "Marketing digital",
        mainImage: "/images/marketing/marketing-01.jpg",
        link: "/service/marketing-digital",
      },
    ],
  };

  return <BlogPostLayout {...blogProps} />;
};

export default SiteVitrineBlog;
