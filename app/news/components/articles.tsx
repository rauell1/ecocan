import React from 'react';
import Image from 'next/image';

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
    title: "Kenya: New Law On Sustainable Waste Management Enacted.",
    description: "This legislation lays the foundation for establishment of the first nationwide Deposit Refund Scheme (DRS) in Africa, supporting comprehensive recycling....",
    date: "2 Mar, 2023",
    imageUrl: "/assets/images/blog/wind-turbine-sunset.svg"
  },
  {
    id: 2,
    title: "UN Treaty On Plastic Containers.",
    description: "175 nations agree to develop a legally binding agreement on plastic pollution by 2024, prompting a major step towards reducing green...",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/plastic-waste.svg"
  },
  {
    id: 3,
    title: "How Ecocan Africa Is Helping Combat Counterfeits.",
    description: "ECOCAN is an early stage start-up offering Supply-chain Traceability And Recycling as a Service...",
    date: "15 Feb, 2022",
    imageUrl: "/assets/images/blog/glass-recycling.svg"
  },
  {
    id: 4,
    title: "Governments Climate Action Initiatives",
    description: "Governments worldwide are enacting laws to combat climate change. Recent legislation mandates eco-friendly practices in industries lik...",
    date: "17 Nov, 2021",
    imageUrl: "/assets/images/blog/wind-turbine-sky.svg"
  },
  {
    id: 5,
    title: "Green Economy Fostering Preservation",
    description: "This proactive approach aims to preserve the environment for future generations while fostering a green economy. Stay tuned for updates on the...",
    date: "2 June, 2024",
    imageUrl: "/assets/images/blog/green-agriculture.svg"
  },
  {
    id: 6,
    title: "Community Led Eco-Friendly Campaigns",
    description: "Communities worldwide are banding together to fight climate change through eco-friendly initiatives. From tree-planting campaigns to plas...",
    date: "30 May, 2021",
    imageUrl: "/assets/images/blog/plastic-caps.svg"
  }
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <Image src={article.imageUrl} alt={article.title} width={400} height={200} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{article.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{article.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-xs">{article.date}</span>
        <button className="text-green-500 text-sm font-semibold">Read more</button>
      </div>
    </div>
  </div>
);

const Articles: React.FC = () => {
  return (
    <div className="mx-auto py-8">
      <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;