
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            ГОТОВЫ К <br /> <span className="text-white italic underline">ПРОРЫВУ?</span>
          </h2>
          <p className="text-brand-black/80 font-bold uppercase text-lg mb-8 max-w-sm">
            Оставьте заявку на бесплатный аудит вашей маркетинговой воронки.
          </p>
          <div className="space-y-4 text-brand-black/60 font-black tracking-widest text-xs uppercase">
            <p>01. Анализ текущей ситуации</p>
            <p>02. Прогноз окупаемости</p>
            <p>03. Стратегия захвата рынка</p>
          </div>
        </div>

        <div className="bg-brand-black p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-brand-accent text-3xl font-black uppercase italic mb-4">Принято!</h3>
              <p className="text-white/60 uppercase tracking-widest text-xs font-bold">Свяжемся с вами в течение 15 минут.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase font-black tracking-widest">Ваше имя</label>
                <input 
                  type="text" 
                  required
                  placeholder="ИВАН"
                  className="w-full bg-transparent border-b-2 border-white/10 p-4 outline-none focus:border-brand-accent transition-colors text-white font-bold uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase font-black tracking-widest">Телефон</label>
                <input 
                  type="tel" 
                  required
                  placeholder="+7 (___) ___-__-__"
                  className="w-full bg-transparent border-b-2 border-white/10 p-4 outline-none focus:border-brand-accent transition-colors text-white font-bold uppercase"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-white/40 uppercase font-black tracking-widest">Ниша ресторана</label>
                <select className="w-full bg-transparent border-b-2 border-white/10 p-4 outline-none focus:border-brand-accent transition-colors text-white font-bold uppercase appearance-none">
                  <option className="bg-brand-black">ДОСТАВКА СУШИ/ПИЦЦЫ</option>
                  <option className="bg-brand-black">РЕСТОРАН / КАФЕ</option>
                  <option className="bg-brand-black">DARK KITCHEN</option>
                  <option className="bg-brand-black">ДРУГОЕ</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-6 bg-brand-accent text-brand-black font-black uppercase tracking-widest text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
              >
                {status === 'loading' ? 'ОТПРАВЛЯЕМ...' : (
                  <>
                    ОБСУДИТЬ РОСТ <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
