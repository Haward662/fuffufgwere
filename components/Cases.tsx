
import React from 'react';
import { motion } from 'framer-motion';
import { Case } from '../types';

const cases: Case[] = [
  { 
    id: '1', 
    client: 'GOKU SUSHI', 
    niche: 'Доставка',
    imageUrl: 'https://picsum.photos/seed/sushi/800/600',
    results: ['+240% заказов за месяц', 'ROI: 840%'] 
  },
  { 
    id: '2', 
    client: 'BURGER QUEEN', 
    niche: 'Фастфуд',
    imageUrl: 'https://picsum.photos/seed/burger/800/600',
    results: ['Лид по 45 рублей', 'Забитая посадка 24/7'] 
  },
  { 
    id: '3', 
    client: 'DARK KITCHEN X', 
    niche: 'Dark Kitchen',
    imageUrl: 'https://picsum.photos/seed/pizza/800/600',
    results: ['С нуля до 5млн/мес', 'Захват района за 14 дней'] 
  },
];

const Cases: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter italic leading-none">
            РЕЗУЛЬТАТЫ <br />
            В <span className="text-brand-accent">ЦИФРАХ</span>
          </h2>
          <div className="w-48 h-2 bg-white/10" />
        </div>
        <p className="max-w-xs text-white/40 text-sm font-bold uppercase tracking-wider">
          Мы не продаем надежды. <br />Мы продаем подтвержденную прибыль.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cases.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden mb-6">
              <img 
                src={item.imageUrl} 
                alt={item.client} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-brand-accent text-brand-black px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                {item.niche}
              </div>
            </div>
            <h3 className="text-2xl font-black mb-4 group-hover:text-brand-accent transition-colors italic uppercase">{item.client}</h3>
            <div className="space-y-2">
              {item.results.map((res, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/60 font-bold uppercase tracking-tight">
                  <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                  {res}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cases;
