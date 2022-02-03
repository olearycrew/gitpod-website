import type { Feature } from "$lib/types/feature.type";
import type { Quote } from "$lib/types/quote.type";

export const benefits = [
  {
    title: "5h",
    text: "average weekly<br/>time saved per engineer",
  },
  {
    title: "4x",
    text: "faster code<br/>contribution of new hires",
  },
  {
    title: "5x",
    text: 'revenue growth compared to companies<br/>with low dev experience & velocity [<a href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance" target="_blank">1</a>]',
  },
];

export const quotes: Quote[] = [
  {
    text: "Gitpod has been instrumental to our ability to scale so quickly",
    author: "François Ruty",
    jobTitle: "CTO",
    company: "Shares.io",
    companyLogo: {
      src: "/svg/customers/shares-io.svg",
      alt: "Prisma",
    },
    img: {
      src: "/images/customers/gitlab.png",
      alt: "GitLab",
    },
  },
];

export const developFeature: Feature = {
  title: "Develop like Google, Facebook or Shopify",
  paragraph:
    "What big tech companies are trying to build internally, Gitpod is bringing to the rest of the world: container-based development in the cloud.",
  image: {
    src: "/svg/customers/develop-like.svg",
    alt: "Develop like Google, Facebook or Shopify",
  },
};
