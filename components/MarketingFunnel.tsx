
import React from 'react';
import { motion } from 'framer-motion';
import { FunnelStep } from '../types';

const steps: FunnelStep[] = [
  { number: '01', title: 'Аудит и Анализ', details: 'Глубокий разбор конкурентов, ЦА и текущей воронки продаж.' },
  { number: '02', title: 'Упаковка оффера', details: 'Создаем предложение, от которого невозможно отказаться.' },
  { number: '03', title: 'Захват трафика', details: 'Запуск рекламных кампаний во всех эффективных каналах.' },
  { number: '04', title: 'Аналитика и Масштаб', details: 'Отсекаем лишнее, масштабируем то, что приносит деньги.' },
];

const MarketingFunnel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter italic">
          ПУТЬ К <span className="text-brand-accent">ПРИБЫЛИ</span>
        </h2>
        <p className="text-white/40 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">
          Прозрачный процесс от первого касания до кассового чека
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0">
        {/* Connection Line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
        
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative z-10 flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-brand-black border-2 border-white/10 flex items-center justify-center rounded-full mb-8 group-hover:border-brand-accent transition-colors duration-500">
              <span className="text-2xl font-black text-brand-accent italic">{step.number}</span>
            </div>
            <div className="text-center px-4">
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-sm text-white/40 font-medium">
                {step.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketingFunnel;
