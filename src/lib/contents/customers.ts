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
    jobTitle: "CTO at Shares.io",
    companyLogo: {
      src: "/svg/customers/shares-io.svg",
      alt: "Prisma",
    },
    img: {
      src: "/images/customers/shares-io/quote.png",
      alt: "Shares.io",
    },
  },
  {
    text: "Gitpod totally changed the development velocity for RedwoodJS—it removed any issues related to configurations of dev environments and made it incredibly easy to contribute. Reviewing pull requests is delightful because they are prebuilt and ready for review!",
    author: "Tom Preston-Werner",
    jobTitle:
      "Tom Preston-Werner, Founder of GitHub & Redwood, former CEO of GitHub",
    companyLogo: {
      src: "/images/customers/redwoodjs/logo.png",
      alt: "Redwoodjs",
    },
    img: {
      src: "/images/customers/redwoodjs/quote.png",
      alt: "Shares.io",
    },
  },
  {
    text: "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, aliqua nsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "John Doe",
    jobTitle: "X at Y",
    companyLogo: {
      src: "/svg/customers/customer-io.svg",
      alt: "Customer.io",
    },
    img: {
      src: "/images/customers/customer-io/quote.png",
      alt: "Customer.io",
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
