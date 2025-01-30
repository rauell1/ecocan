import React from "react";
import Image from "next/image";

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "ECOCAN receives additional grant funding from Business Finland",
    description:
      "To support market pilot of Brand protection and recycling solutions in Kenya.  use above Image",
    date: "Sept 2023",
    imageUrl: "/assets/images/blog/business-finland.png",
  },
  {
    id: 2,
    title:
      "Embassy of Finland in Kenya Strengthens Its Commitment to Supporting ECOCAN.",
    description:
      "During a visit to the ECOCAN offices by Finland's Deputy Ambassador to Kenya... ",
    date: "9 Dec, 2024",
    imageUrl: "/assets/images/blog/white-man.png",
  },
  {
    id: 3,
    title: "ECOCAN collaborates with Australian-based Codeifai in a 3-year partnership",
    description:
      "This collaboration is marked to enhance ECOCAN’s brand protection and packaging recycling offering across Africa....",
    date: "June 2024",
    imageUrl: "/assets/images/blog/codefai.jpeg",
  },
  {
    id: 4,
    title: "NEFCO approves conditional loan",
    description:
      "NEFCO, via its NOPEF investment instrument, has approved a conditional loan to ECOCAN to facilitate technology pilot preparations in Kenya",
    date: "April 2024",
    imageUrl: "/assets/images/blog/nefco.png",
  },
  {
    id: 5,
    title: "ECOCAN onboards Savannah Brands limited to ECO-system",
    description:
      "Savannah Brands Limited, the maker of the renowned cider brand Kenyan Originals, has officially joined the ECO-system to enable the recycling of its cider bottles in Kenya",
    date: "July  2023",
    imageUrl: "/assets/images/blog/ko.png",
  },
  {
    id: 6,
    title: "ECOCAN partners with Mr. Green Africa",
    description:
      "The leading plastics Recycler in Kenya signs MoU to join the ECO-system to facilitate recycling of PET plastics bottles.....",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/green.png",
  },
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white rounded-smooth-lg shadow-lg">
    <div
      className="rounded-t-2xl overflow-hidden w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(${article.imageUrl})` }}
    ></div>
    <div className="p-4 text-start">
      <h3 className="font-bold text-lg mb-2">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{article.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-xs">{article.date}</span>
        <button className="text-green-500 text-sm font-semibold">
          Read more
        </button>
      </div>
    </div>
  </div>
);

const PartnershipArticles: React.FC = () => {
  return (
    <div className="mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default PartnershipArticles;
