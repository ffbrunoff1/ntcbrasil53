import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="gradient-text">Construindo futuros,</span>
              <br />
              transformando vidas
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-8"
              variants={itemVariants}
            >
              Inovação e qualidade em cada projeto. Descubra como podemos
              transformar suas ideias em realidade.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <a
                href="#contact"
                className="btn btn-primary flex items-center gap-2"
              >
                Fale Conosco
                <ArrowRight size={20} />
              </a>

              <a href="#services" className="btn btn-outline">
                Nossos Serviços
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-primary rounded-lg mb-6" />
              <h3 className="text-2xl font-bold mb-4">
                Excelência em Construção
              </h3>
              <p className="text-gray-600">
                Comprometidos com a qualidade e inovação em cada detalhe dos
                nossos projetos.
              </p>
            </div>

            <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-accent opacity-10 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
