import React from 'react';

export const BecomeExpertSection: React.FC = () => {
  return (
    <section className="bg-white flex w-[1440px] max-w-full flex-col overflow-hidden items-center justify-center mt-[43px] px-[70px] py-[69px] max-md:mt-10 max-md:px-5">
      <div className="rounded bg-[rgba(242,255,254,1)] border flex min-h-[501px] w-full max-w-[1170px] items-center gap-[40px_97px] justify-between flex-wrap pl-8 border-[rgba(0,0,0,0.08)] border-solid max-md:max-w-full max-md:pl-5">
        <div className="self-stretch min-w-60 min-h-[334px] text-[rgba(12,14,15,1)] w-[506px] my-auto max-md:max-w-full">
          <div className="flex w-full max-w-[506px] flex-col items-stretch max-md:max-w-full">
            <div className="flex w-full max-w-[496px] flex-col items-stretch max-md:max-w-full">
              <span className="rounded bg-neutral-100 shadow-[0px_4px_4px_rgba(0,0,0,0.04)] border text-[11px] font-semibold whitespace-nowrap uppercase tracking-[0.56px] leading-normal px-[13px] py-[7px] border-[rgba(0,0,0,0.16)] border-solid inline-block">
                Interested?
              </span>
              <h2 className="text-[38px] font-bold leading-none mt-3 max-md:max-w-full">
                Become an Expert Today
              </h2>
            </div>
            <p className="text-xl font-normal leading-[30px] mt-4 max-md:max-w-full">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
            <button className="text-neutral-50 bg-[rgba(1,110,105,1)] min-h-11 text-base font-semibold text-center leading-none mt-4 px-8 py-3 rounded-md max-md:px-5">
              Become an Expert
            </button>
          </div>
        </div>
        <div className="rounded bg-white border self-stretch flex min-w-60 min-h-[501px] flex-col items-center justify-center w-[533px] my-auto p-px border-[rgba(0,0,0,0.12)] border-solid max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/3a088ea3932e0438d2e6897595b357b550a80a7c?placeholderIfAbsent=true"
            alt="Become an expert illustration"
            className="aspect-[1] object-contain w-[499px] max-w-full flex-1"
          />
        </div>
      </div>
    </section>
  );
};
