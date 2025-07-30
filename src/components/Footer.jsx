import { motion } from 'framer-motion';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <footer className="bg-gray-900 text-white py-12">
      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div variants={itemVariants}>
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753903623599_0.png"
              alt="NTC Brasil"
              className="h-12 mb-6"
            />
            <p className="text-gray-400">
              Construindo futuros, transformando vidas com inovação e qualidade
              em cada projeto.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Padre Lebret 801 G05 Bloco 03</li>
              <li>+55 44 99104-0774</li>
              <li>ffbrunoff@yahoo.com.br</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>
            &copy; {new Date().getFullYear()} NTC Brasil. Todos os direitos
            reservados.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
