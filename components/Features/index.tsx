"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Fonctionnalités Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Titre de la section Start --> */}
          <SectionHeader
            headerInfo={{
              title: "CE QU'ON OFFRE",
              description: `Nous vous offrons des solutions digitales performantes et adaptées à vos besoins. 
              Nos services allient innovation et efficacité pour garantir une présence en ligne optimale.`,
            }}
          />
          {/* <!-- Titre de la section End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Liste des fonctionnalités Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Liste des fonctionnalités End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Fonctionnalités End ===== --> */}
    </>
  );
};

export default Feature;
