import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
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

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      userEmail: 'ffbrunoff@yahoo.com.br',
    };
    console.log('Form submitted:', data);
  };

  return (
    <section id="contact" className="section-padding bg-white">
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
            Entre em <span className="gradient-text">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para transformar seu projeto em realidade
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">Telefone</h4>
                  <p className="text-gray-600">+55 44 99104-0774</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">E-mail</h4>
                  <p className="text-gray-600">ffbrunoff@yahoo.com.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="text-lg font-semibold">Endereço</h4>
                  <p className="text-gray-600">Padre Lebret 801 G05 Bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            variants={itemVariants}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-field"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="input-field"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary w-full flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
              <Send size={20} />
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
