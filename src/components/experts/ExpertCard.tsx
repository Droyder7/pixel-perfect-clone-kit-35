import React from 'react';

interface ExpertCardProps {
  image: string;
  name: string;
  role: string;
  experience: string;
  rating: string;
  ratingCount: string;
  price: string;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({
  image,
  name,
  role,
  experience,
  rating,
  ratingCount,
  price
}) => {
  return (
    <div className="min-w-60 flex-1 shrink basis-[0%] rounded-[0px_0px_0px_0px]">
      <div className="bg-white border w-full px-[25px] py-[19px] rounded-xl border-[rgba(227,227,227,1)] border-solid">
        <div className="flex flex-col relative min-h-[292px] w-[520px] max-w-full pt-[19px] pb-[234px] px-[70px] rounded-xl max-md:mr-1.5 max-md:pl-5 max-md:pb-[100px]">
          <img
            src={image}
            alt={name}
            className="absolute h-full w-full object-cover inset-0"
          />
          <div className="relative flex mb-[-47px] min-h-[39px] items-center gap-2.5 max-md:mb-2.5">
            <button
              aria-label="Like"
              className="bg-[rgba(1,110,105,1)] self-stretch flex min-h-[30px] flex-col overflow-hidden items-center justify-center w-[30px] h-[30px] my-auto px-[3px] rounded-[70px]"
            >
              <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/5a223fa9c0cc91be11bebd6a69d2905ebad9ce1d?placeholderIfAbsent=true" className="aspect-[1.1] object-contain w-[11px]" />
            </button>
            <button
              aria-label="Share"
              className="bg-[rgba(1,110,105,1)] self-stretch flex min-h-[30px] flex-col overflow-hidden items-center justify-center w-[30px] h-[30px] my-auto px-[3px] rounded-[70px]"
            >
              <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/a00d5fcd4915acf351f60895ed5504824b93c7fa?placeholderIfAbsent=true" className="aspect-[0.9] object-contain w-[9px]" />
            </button>
          </div>
        </div>
        <div className="flex gap-[30px] flex-wrap mt-3.5">
          <div className="flex min-w-60 flex-col grow shrink w-[306px]">
            <h3 className="text-black text-xl font-bold leading-[30px] self-stretch">
              {name}
            </h3>
            <div className="flex min-h-[31px] w-[255px] max-w-full items-center gap-2 text-sm text-[rgba(109,109,109,1)] font-normal">
              <span className="self-stretch min-h-6 gap-1 whitespace-nowrap my-auto">
                {role}
              </span>
              <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/46a820b9697eff66f53b6a81f467eb2b16930d7a?placeholderIfAbsent=true" className="object-contain w-0 self-stretch shrink-0 my-auto" />
              <span className="self-stretch min-h-6 gap-1 my-auto">
                {experience}
              </span>
            </div>
            <div className="flex w-[107px] max-w-full items-stretch gap-[3px] text-base text-[rgba(54,54,54,1)] font-medium px-0.5 py-[3px] rounded-sm">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/80e1765c41192ff8af0d67b7dd6ff46e9593efca?placeholderIfAbsent=true"
                alt="Rating"
                className="aspect-[1.04] object-contain w-[27px] shrink-0 rounded-sm"
              />
              <span>{rating} ({ratingCount})</span>
            </div>
          </div>
          <div className="text-[rgba(1,110,105,1)] text-[22px] font-medium text-right grow shrink w-[122px]">
            <span className="font-['Manrope'] text-sm text-[rgba(49,49,49,1)] block">
              Starting from
            </span>
            <span className="font-['Manrope'] font-bold block">
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
