import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 border border-brand-accent/30 text-brand-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 rounded-full bg-brand-accent/5">
            Агентство ресторанного маркетинга
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8"
        >
          ВЗРЫВАЕМ <br />
          <span className="text-brand-accent">ПРОДАЖИ</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-medium"
        >
          Приводим платежеспособных гостей в рестораны и dark kitchens за счет агрессивного маркетинга и сквозной аналитики.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#contact"
            className="group relative px-10 py-5 bg-brand-accent text-brand-black font-black uppercase tracking-wider text-lg overflow-hidden flex items-center gap-2"
          >
            Обсудить проект
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#cases"
            className="px-10 py-5 border border-white/20 hover:border-brand-accent hover:text-brand-accent transition-all font-bold uppercase tracking-wider text-sm"
          >
            Смотреть кейсы
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
          <span className="text-[10px] uppercase tracking-widest vertical-rl">Scroll</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;