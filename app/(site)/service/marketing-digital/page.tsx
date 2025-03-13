import { Metadata } from "next";
import { BlogPostLayout } from "../../blog/BlogPostLayout/page";

export const metadata: Metadata = {
  title: "Marketing digital sur-mesure en Tunisie – Boostez votre visibilité et vos conversions",
  description:
    "Découvrez comment notre équipe experte en marketing digital transforme votre présence en ligne grâce à des stratégies personnalisées et innovantes.",
};

const MarketingDigitalBlog = async () => {
  const blogProps = {
    mainImage: {
      src: "/images/marketing/marketing-01.jpg", 
      alt: "Stratégie marketing digital innovante",
      aspect: "97/60",
    },
    title: "Dynamisez votre entreprise avec un marketing digital personnalisé",
    content: {
      paragraphs: [
        "Dans un environnement numérique en constante évolution, se démarquer demande plus qu'une simple présence en ligne. Notre équipe de spécialistes en marketing digital en Tunisie élabore des stratégies sur-mesure pour maximiser votre visibilité, attirer des prospects qualifiés et convertir vos visiteurs en clients fidèles.",
        "Nous analysons en profondeur votre marché et vos objectifs afin de créer des campagnes efficaces alliant SEO, publicité payante, marketing de contenu et réseaux sociaux. Cette approche intégrée vous garantit une croissance durable et un retour sur investissement optimal.",
      ],
      additionalImages: [
        {
            src: "/images/marketing/marketing-02.jpg", 
          alt: "Analyse des données et stratégie marketing",
        },
        {
            src: "/images/marketing/marketing-03.png", 
          alt: "Campagne publicitaire performante",
        },
      ],
      secondaryHeading: "Une approche innovante pour une croissance exponentielle",
      secondaryParagraphs: [
        "Grâce à des outils d'analyse avancés et une veille constante des tendances du marché, nous ajustons vos campagnes en temps réel pour optimiser leur performance. Notre objectif est de transformer chaque opportunité en succès mesurable.",
        "En choisissant notre service de marketing digital, vous investissez dans un partenariat stratégique qui vous accompagne à chaque étape, de la conception à l'exécution, pour assurer le succès de votre entreprise dans l'univers digital.",
      ],
    },
  };

  return <BlogPostLayout {...blogProps} />;
};

export default MarketingDigitalBlog;
