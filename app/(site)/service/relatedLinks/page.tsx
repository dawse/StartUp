import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface RelatedItem {
  id: string | number;
  title: string;
  image?: string;
  link: string;
}

export interface RelatedLinksProps {
  header?: string;
  items: RelatedItem[];
  limit?: number;
}

const RelatedLinks: React.FC<RelatedLinksProps> = ({
  header = "Related Items",
  items,
  limit = 3,
}) => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        {header}
      </h4>
      <div>
        {items.slice(0, limit).map((item) => (
          <div
            key={item.id}
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
          >
            <div className="max-w-45 relative h-18 w-45">
              {item.image ? (
                <Image fill src={item.image} alt={item.title} />
              ) : (
                "No image"
              )}
            </div>
            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={item.link}>
                {item.title.length > 40
                  ? `${item.title.slice(0, 40)}...`
                  : item.title}
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedLinks;
