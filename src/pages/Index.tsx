import React from 'react';
import { ExpertCard } from '@/components/experts/ExpertCard';
import { BecomeExpertSection } from '@/components/sections/BecomeExpertSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { Footer } from '@/components/layout/Footer';

const experts = [
  {
    image: "https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/b0da29197d171eb1f0beb44bc211db1e26d337ff?placeholderIfAbsent=true",
    name: "John Doe Expert in Finance Management",
    role: "Professor",
    experience: "2 Years of experience",
    rating: "4.8",
    ratingCount: "250",
    price: "₹500/ 15mins"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/e00dcf22b6267d2b9e78480e01a64f4516aec213?placeholderIfAbsent=true",
    name: "Jasica Mantrol Expert in Art and crafts",
    role: "Professor",
    experience: "2 Years of experience",
    rating: "4.8",
    ratingCount: "250",
    price: "₹800/ 15mins"
  }
];

export default function Index() {
  return (
    <main className="bg-white overflow-hidden">
      <div className="flex w-full flex-col items-center max-md:max-w-full">
        <header className="flex flex-col items-center max-md:max-w-full">
          <div className="rounded gap-2.5 text-sm text-[rgba(133,131,150,1)] font-medium leading-none p-2.5">
            New sessions for you
          </div>
          <h1 className="text-[rgba(43,43,61,1)] text-[38px] font-bold leading-none max-md:max-w-full">
            Most Searched Experts
          </h1>
        </header>

        <section className="flex min-h-[490px] w-[1170px] max-w-full items-center gap-[22px] mt-[43px] max-md:mt-10">
          <div className="self-stretch flex min-w-60 min-h-[490px] w-full gap-[30px] flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            {experts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </div>
        </section>

        <BecomeExpertSection />
        <TeamSection />
      </div>
      <Footer />
    </main>
  );
}
