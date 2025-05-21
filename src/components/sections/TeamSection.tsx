import React from 'react';

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ image, name, role, description }) => (
  <div className="border border-[color:var(--CTA---Aqua-Squeeze,#E5F4F2)] shadow-[34.854px_29.626px_48.34px_0px_rgba(51,102,255,0.05)] bg-white min-w-60 w-[370px] px-[30px] py-10 rounded-[20px] border-solid max-md:px-5">
    <div className="flex w-full flex-col overflow-hidden items-stretch justify-center">
      <img
        src={image}
        alt={name}
        className="aspect-[1] object-contain w-[100px] self-center max-w-full rounded-[100px]"
      />
      <div className="flex w-full flex-col overflow-hidden mt-4">
        <h3 className="text-gray-900 text-[21px] font-bold leading-[1.3]">
          {name}
        </h3>
        <p className="text-gray-700 text-base font-normal leading-none mt-1.5">
          {role}
        </p>
      </div>
    </div>
    <p className="w-full text-base text-[rgba(45,45,45,1)] font-normal leading-[26px] mt-[30px]">
      {description}
    </p>
  </div>
);

export const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/3842d5380da5bf8f30a84364e6a65d3d4fe34952?placeholderIfAbsent=true",
      name: "Sarah K.",
      role: "Manager",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/df4445e4ae6d0db0b9cc01fe83c6f3edbee7de0c?placeholderIfAbsent=true",
      name: "Michael L.",
      role: "Lead",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/198f5b27f8577895a26043665a3fb48330d7863e?placeholderIfAbsent=true",
      name: "Lauren M.",
      role: "Finance Adviser",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }
  ];

  return (
    <section className="bg-white flex min-h-[663px] w-[1440px] max-w-full flex-col items-center text-center mt-[43px] px-[55px] max-md:mt-10 max-md:px-5">
      <div className="flex w-[1166px] max-w-full flex-col items-stretch">
        <h2 className="text-black text-[38px] font-bold leading-[1.3] tracking-[-0.76px] self-center">
          Meet our team
        </h2>
        <p className="text-[rgba(49,49,49,1)] text-base font-normal mt-5 max-md:max-w-full">
          Get to know the faces behind the scenes and learn about the values that drive us.
        </p>
      </div>
      <div className="flex gap-[30px] flex-wrap mt-10 max-md:max-w-full">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};
