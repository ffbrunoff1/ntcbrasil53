import { motion } from 'framer-motion';
import { Building2, Ruler, HardHat, Hammer } from 'lucide-react';

export default function Services() {
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

  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: 'Construção Civil',
      description:
        'Execução de obras residenciais e comerciais com alto padrão de qualidade.',
    },
    {
      icon: <Ruler className="w-12 h-12 text-primary" />,
      title: 'Projetos Arquitetônicos',
      description: 'Desenvolvimento de projetos personalizados e inovadores.',
    },
    {
      icon: <HardHat className="w-12 h-12 text-primary" />,
      title: 'Gerenciamento de Obras',
      description: 'Gestão completa do seu projeto, do início à entrega.',
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary" />,
      title: 'Reformas',
      description:
        'Transformação e renovação de espaços com expertise técnica.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600">
            Oferecemos soluções completas em construção civil, com foco em
            qualidade e inovação
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              variants={itemVariants}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <motion.a
                href="#contact"
                className="mt-6 text-primary font-medium hover:text-accent transition-colors duration-300 inline-flex items-center"
                whileHover={{ x: 5 }}
              >
                Saiba mais
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
