
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-brand-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="text-4xl font-black italic tracking-tighter mb-4">
            PRO<span className="text-brand-accent">BOOST</span>
          </div>
          <p className="text-white/20 text-xs font-bold uppercase tracking-widest max-w-xs mb-6">
            Делаем ресторанный бизнес прибыльным <br /> за счет данных и креатива.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
          <div className="space-y-2">
            <p className="text-brand-accent">Контакты</p>
            <p>+7 (999) 000-00-00</p>
            <p>HELLO@PRO-BOOST.RU</p>
          </div>
          <div className="space-y-2">
            <p className="text-brand-accent">Офис</p>
            <p>МОСКВА, СИТИ</p>
            <p>БАШНЯ ФЕДЕРАЦИЯ</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 font-bold uppercase tracking-widest">
        <p>© 2024 PROBOOST AGENCY. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6">
          <span>ИНН: 770000000000</span>
          <span>ОГРНИП: 320000000000000</span>
        </div>
        <p>CREATED BY PROBOOST TEAM</p>
      </div>
    </footer>
  );
};

export default Footer;
