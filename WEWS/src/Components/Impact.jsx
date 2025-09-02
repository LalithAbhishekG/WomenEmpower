import React from "react";
import { Banknote, HandCoins, Scale, BarChart3 } from "lucide-react";
import impact from '../assets/Impact/impact.png';

export default function Impact() {
const sections = [
  {
    id: 1,
    title: "Financial Literacy",
    icon: <Banknote size={50} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b4f7d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // women working with finances
    description:
      "We empower women with financial knowledge, ensuring long-term independence and security.",
    points: [
      "Via International: 98% of women expressed high confidence in saving money after workshops.",
      "Urban Corps of San Diego: All 9 participants successfully opened bank accounts and applied for jobs.",
      "IRC San Diego: Over 75% of participants learned about credit scores, budgeting, and business financing.",
      "Over 150 women started emergency savings accounts in the last year.",
      "60% reported increased confidence in negotiating salaries and managing debt.",
    ],
  },
  {
    id: 2,
    title: "Change in Provider Role",
    icon: <HandCoins size={50} className="text-white" />,
    image:
     "https://images.unsplash.com/photo-1541697470093-45488a105863?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    description:
      "Women are increasingly becoming the backbone of households, transforming communities through economic resilience.",
    points: [
      "Nyaka: 60% of grandmothers are now primary providers, 21% increased their monthly contributions.",
      "Multicolores: Two-thirds of 19 women artists consistently support household expenses.",
      "Adelante: 74% of women with renewing loans became stable contributors to family finances.",
      "40% of participants transitioned from seasonal jobs to full-time providers.",
      "Increased self-reliance reduced dependency on external aid by 30%.",
    ],
  },
  {
    id: 3,
    title: "Change in Decision Making",
    icon: <Scale size={50} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // women in meeting/discussion
    description:
      "Our programs give women a voice in family and business decisions, shaping stronger societies.",
    points: [
      "OEF de El Salvador: 88% of women reported feeling empowered to make key family decisions.",
      "Nyaka: 12% increase in women speaking up about household matters within one year.",
      "Adelante: Nearly 50% of 2,776 women spoke up most or all of the time.",
      "Participants reported increased confidence in community leadership roles.",
      "Over 300 women entered local councils and cooperatives.",
    ],
  },
  {
    id: 4,
    title: "Business Sustainability",
    icon: <BarChart3 size={50} className="text-white" />,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // women entrepreneurs
    description:
      "We provide women entrepreneurs with skills, mentorship, and access to markets, ensuring long-lasting success.",
    points: [
      "OEF de El Salvador: 38 of 48 businesses survived and grew after one year.",
      "IRC San Diego: 100% of businesses in 2024 stayed open for at least 6 months.",
      "Adelante: 42 of 50 loan recipients sustained businesses after one year.",
      "Women-owned businesses saw an average of 25% revenue growth in 12 months.",
      "85% of participants reported reinvesting profits into education and healthcare for their families.",
    ],
  },
];


  return (
    <div className="bg-[#000000] text-white overflow-hidden">
      {sections.map((section, index) => (
        <div
          key={section.id}
          className={`flex flex-col md:flex-row ${
            index % 2 === 0 ? "" : "md:flex-row-reverse"
          } h-screen overflow-hidden`}
        >
          {/* Image */}
          <div className="md:w-2/5 h-2/5 md:h-full overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="md:w-3/5 bg-[#110111] flex flex-col justify-center p-10 bg-fixed overflow-hidden" 
          // style={{ backgroundImage: `url(${impact})` }} 
           >
            <div className="flex items-center gap-4 mb-6">
              {section.icon}
              <h2 className="text-4xl font-bold">{section.title}</h2>
            </div>
            <p className="text-lg mb-6">{section.description}</p>
            <ul className="list-disc list-inside space-y-3 text-pink-200 text-lg">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
