import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-slate-500 c-space">
      <div className="mb-4 bg-orange-100 h-[1px] w-full" />
      <div className="flex gap-2">
        <p className="hover:text-orange-500 transition-colors cursor-pointer">Terms & Conditions</p>
        <p className="text-orange-300">|</p>
        <p className="hover:text-orange-500 transition-colors cursor-pointer">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} className="hover:opacity-80 transition-opacity">
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>
      <p className="text-slate-400">© 2025 Akhil Metlakunta. All rights reserved.</p>
    </section>
  );
};

export default Footer;
