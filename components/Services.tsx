
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, Share2, MapPin, Database, Film } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: '1', title: 'Target VK/TG', description: 'Запускаем рекламу там, где сидят ваши гости. Окупаемость х5-х10.', icon: 'Target' },
  { id: '2', title: 'Yandex Direct', description: 'Горячий спрос на доставку еды. Перехватываем клиента в момент голода.', icon: 'Search' },
  { id: '3', title: 'Гео-маркетинг', description: 'ТОП-1 в Яндекс.Картах и 2ГИС. Увеличиваем пешеходный трафик.', icon: 'MapPin' },
  { id: '4', title: 'Контент & Reels', description: 'Виральный контент, который продает атмосферу и вкус.', icon: 'Film' },
  { id: '5', title: 'CRM-маркетинг', description: 'Возвращаем ушедших клиентов и повышаем LTV через рассылки.', icon: 'Database' },
  { id: '6', title: 'SMM-Стратегия', description: 'Упаковка бренда, которая вызывает доверие и аппетит.', icon: 'Share2' },
];

const IconMap: Record<string, any> = { Target, Search, Share2, MapPin, Database, Film };

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter italic">
          НАШЕ <span className="text-outline">ОРУЖИЕ</span>
        </h2>
        <div className="w-24 h-2 bg-brand-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => {
          const Icon = IconMap[service.icon];
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 group hover:border-brand-accent/50 transition-all duration-500"
            >
              <div className="mb-6 p-4 bg-brand-accent/5 w-fit rounded-lg group-hover:scale-110 transition-transform">
                <Icon className="text-brand-accent" size={32} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-white/50 font-medium leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
