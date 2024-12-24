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
    description: "After months of controversy surrounding Kenya's Green Economy Implementation Plan (GEIP), the East African government has embarked on drafti...",
    date: "25 May, 2021",
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
    description: "We enable over 14% of a Craft brewery's glass market circulation to be reused and helps reduce the PET recyclers processing loss rate from +20%...",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/glass-recycling.svg"
  },
  {
    id: 4,
    title: "Governments Climate Action Initiatives",
    description: "Governments worldwide are enacting laws to combat climate change. Recent legislation mandates eco-friendly practices in industries lik...",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/wind-turbine-sky.svg"
  },
  {
    id: 5,
    title: "Green Economy Fostering Preservation",
    description: "This proactive approach aims to preserve the environment for future generations while fostering a green economy. Stay tuned for updates on the...",
    date: "25 May, 2021",
    imageUrl: "/assets/images/blog/green-agriculture.svg"
  },
  {
    id: 6,
    title: "Community Led Eco-Friendly Campaigns",
    description: "Communities worldwide are banding together to fight climate change through eco-friendly initiatives. From tree-planting campaigns to plas...",
    date: "25 May, 2021",
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