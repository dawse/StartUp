import { Metadata } from "next";
import { BlogPostLayout } from "../../blog/BlogPostLayout/page";

export const metadata: Metadata = {
  title: "E-commerce sur-mesure en Tunisie – Boostez vos ventes en ligne",
  description:
    "Découvrez comment notre équipe de professionnels crée des solutions e-commerce innovantes et personnalisées pour dynamiser votre activité en ligne en Tunisie.",
};

const ECommerceBlog = async () => {
  const blogProps = {
    mainImage: {
      src: "/images/e-commerce/e-commerce-01.jpg", 
      alt: "Solution e-commerce performante et moderne",
      aspect: "97/60",
    },
    title: "Boostez vos ventes avec une solution e-commerce sur-mesure",
    content: {
      paragraphs: [
        "Vous souhaitez transformer votre activité et élargir votre marché en ligne ? En Tunisie, notre équipe de spécialistes en commerce électronique vous accompagne dans la création d'une boutique en ligne performante et adaptée à vos besoins.",
        "Nous allions design moderne et fonctionnalités avancées pour offrir une expérience d'achat exceptionnelle à vos clients. Que vous soyez une startup ou une entreprise établie, nos solutions e-commerce sur-mesure sont conçues pour maximiser vos conversions et booster vos ventes.",
      ],
      additionalImages: [
        {
          src: "/images/e-commerce/e-commerce-02.jpg", 
          alt: "Interface e-commerce intuitive",
        },
        {
          src: "/images/e-commerce/e-commerce-03.jpg", 
          alt: "Design attractif pour boutique en ligne",
        },
      ],
      secondaryHeading: "Une solution complète pour réussir en ligne",
      secondaryParagraphs: [
        "Nous vous offrons un accompagnement global, de la conception de votre site e-commerce à son développement, en passant par l'optimisation SEO et des stratégies de marketing digital efficaces. Nos experts travaillent avec vous pour créer une plateforme qui s'adapte à l'évolution de votre entreprise et aux tendances du marché.",
        "Opter pour notre service, c'est investir dans une solution pérenne et innovante. Nous mettons à votre disposition notre savoir-faire technique et notre passion pour le digital afin de transformer votre vision en une boutique en ligne à succès. Contactez-nous dès aujourd'hui pour découvrir comment nous pouvons vous aider à atteindre vos objectifs commerciaux.",
      ],
    },
    relatedPosts: [
      {
        title: "Site vitrine",
        mainImage: "/images/siteVitrine/website.jpg",
        link: "/service/site-vitine",
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

export default ECommerceBlog;
