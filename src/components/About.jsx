import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
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
      },
    },
  };

  const features = [
    {
      icon: <Building className="w-12 h-12 text-primary" />,
      title: 'Experiência Comprovada',
      description:
        'Anos de expertise no setor de construção, entregando projetos excepcionais.',
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: 'Foco em Resultados',
      description:
        'Comprometimento com prazos e qualidade em cada etapa do projeto.',
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: 'Garantia de Qualidade',
      description:
        'Padrões rigorosos de qualidade e segurança em todas as construções.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-6">
            Sobre a <span className="gradient-text">NTC Brasil</span>
          </h2>
          <p className="text-xl text-gray-600">
            Somos uma empresa comprometida com a excelência em construção,
            transformando visões em realidade através de projetos inovadores e
            sustentáveis.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={itemVariants}>
          <a href="#contact" className="btn btn-primary">
            Conheça Nossa História
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
