import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Image from "next/image";

export interface BlogPostContent {
  paragraphs: string[];
  additionalImages?: { src: string; alt: string }[];
  secondaryHeading?: string;
  secondaryParagraphs?: string[];
}

export interface RelatedPostItem {
  title: string;
  mainImage: string;
  link: string;
}

export interface BlogPostLayoutProps {
  mainImage: {
    src: string;
    alt: string;
    aspect?: string;
  };
  title: string;
  content: BlogPostContent;
  relatedPosts?: RelatedPostItem[]; // New prop
}

export const BlogPostLayout = ({
  mainImage,
  title,
  content,
  relatedPosts = [], // default to an empty array if not provided
}: BlogPostLayoutProps) => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          {/* Sidebar */}
          <div className="md:w-1/2 lg:w-[32%]">
            <RelatedPost posts={relatedPosts} />
          </div>

          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
              {/* Main Image */}
              <div className="mb-10 w-full overflow-hidden">
                <div
                  className={`relative w-full ${
                    mainImage.aspect
                      ? `aspect-[${mainImage.aspect}]`
                      : "aspect-video"
                  } sm:aspect-[97/44]`}
                >
                  <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    className="rounded-md object-cover object-center"
                  />
                </div>
              </div>

              {/* Title */}
              <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                {title}
              </h2>

              {/* Content */}
              <div className="blog-details">
                {content.paragraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}

                {content.additionalImages && (
                  <div className="flex flex-wrap gap-5 justify-center">
                    {content.additionalImages.map((img, index) => (
                      <div
                        key={index}
                        className="relative w-[350px] h-[250px] overflow-hidden rounded-lg shadow-lg"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {content.secondaryHeading && (
                  <h3 className="pt-8">{content.secondaryHeading}</h3>
                )}

                {content.secondaryParagraphs &&
                  content.secondaryParagraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
              </div>

              {/* <SharePost /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
