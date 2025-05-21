import React, { useState } from 'react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <footer className="bg-white border min-h-[499px] w-full overflow-hidden pl-[136px] pr-[134px] py-[79px] border-[rgba(49,49,49,1)] border-solid max-md:max-w-full max-md:px-5">
      <div className="flex h-[248px] w-full gap-[40px_128px] flex-wrap max-md:max-w-full">
        <div className="min-w-60 w-[500px] max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/ea9017b8758423f8db9ca9e239aaa2389ae88507?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[2.33] object-contain w-[84px]"
          />
          <p className="text-[rgba(49,49,49,1)] text-base font-normal leading-6 mt-6 max-md:max-w-full">
            Subscribe to our newsletter for the latest features and updates directly to your inbox.
          </p>
          <div className="w-full mt-6 max-md:max-w-full">
            <form onSubmit={handleSubmit} className="flex w-full gap-4 text-base flex-wrap max-md:max-w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email here"
                className="self-stretch flex-1 shrink basis-10 border min-w-60 gap-2 text-[#1b1b1b] font-normal p-3 rounded-lg border-[rgba(49,49,49,1)] border-solid"
                required
              />
              <button
                type="submit"
                className="text-neutral-50 self-stretch bg-[rgba(1,110,105,1)] min-h-12 font-semibold whitespace-nowrap text-center leading-none px-8 py-3.5 rounded-md max-md:px-5"
              >
                Submit
              </button>
            </form>
            <p className="text-[rgba(49,49,49,1)] text-xs font-normal mt-3 max-md:max-w-full">
              By subscribing, you consent to our Privacy Policy and receiving updates.
            </p>
          </div>
        </div>
        
        <div className="flex min-w-60 gap-10 text-[#313131] flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="flex min-w-60 flex-col overflow-hidden items-stretch text-base font-semibold flex-1 shrink basis-[0%]">
            <h3>Quick Links</h3>
            <nav className="w-full text-sm font-normal mt-4">
              <a href="#" className="block py-2">About Us</a>
              <a href="#" className="block py-2">Contact Us</a>
              <a href="#" className="block py-2">Support Center</a>
              <a href="#" className="block py-2">FAQs</a>
            </nav>
            <button className="text-neutral-50 bg-[rgba(1,110,105,1)] min-h-12 text-center leading-none mt-4 px-8 py-3.5 rounded-md max-md:px-5">
              Become an Expert
            </button>
          </div>
          
          <div className="min-w-60 flex-1 shrink basis-[0%]">
            <h3 className="text-base font-semibold">Follow Us</h3>
            <nav className="w-full text-sm font-normal whitespace-nowrap mt-4">
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/586c3158826c2623e88ad7428af7def82ef10995?placeholderIfAbsent=true" alt="Facebook" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
                <span className="self-stretch my-auto">Facebook</span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/3f95385787cbbe3362b75f74a92fe92c5436e8e3?placeholderIfAbsent=true" alt="Instagram" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
                <span className="self-stretch my-auto">Instagram</span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/7df19b30a23556ccadc4584f88d12c6e73760341?placeholderIfAbsent=true" alt="X" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
                <span className="self-stretch my-auto">X</span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/ea400456306ac56155c9d02bde1135d77e38e246?placeholderIfAbsent=true" alt="LinkedIn" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
                <span className="self-stretch my-auto">LinkedIn</span>
              </a>
              <a href="#" className="flex w-full items-center gap-3 py-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/9cad1b2e0df44b1d8a1257f19256f1aa/6a7bff2fdbba09ad434c3e57f8c77067e2190e1d?placeholderIfAbsent=true" alt="YouTube" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto" />
                <span className="self-stretch my-auto">YouTube</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="w-full text-sm font-normal mt-10 max-md:max-w-full">
        <hr className="border bg-[#313131] min-h-px w-full border-[rgba(49,49,49,1)] border-solid max-md:max-w-full" />
        <div className="flex w-full gap-[40px_100px] justify-between flex-wrap mt-8 max-md:max-w-full">
          <p className="text-[rgba(49,49,49,1)]">
            © 2025 Xperttime. All rights reserved.
          </p>
          <nav className="flex min-w-60 gap-6 text-[#313131] underline">
            <a href="#" className="underline">Privacy Policy</a>
            <a href="#" className="underline">Terms of Service</a>
            <a href="#" className="underline">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
