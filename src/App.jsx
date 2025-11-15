<section className="services">
  <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
    {translations[lang].services}
  </motion.h2>

  {/* Service 1 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.1 }}
  >
    <img src="/services1.jpg" alt="Sensibilisation & Prévention" />
    <h3>Sensibilisation & Prévention</h3>
    <p>Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits</p>
  </motion.div>

  {/* Service 2 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.2 }}
  >
    <img src="/services2.jpg" alt="Formations en ligne" />
    <h3>Formations en ligne</h3>
    <p>Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin</p>
  </motion.div>

  {/* Service 3 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.3 }}
  >
    <img src="/services3.jpg" alt="Recyclage des déchets ménagers" />
    <h3>Recyclage des déchets ménagers</h3>
    <p>Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables</p>
  </motion.div>

  {/* Service 4 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.4 }}
  >
    <img src="/services4.jpg" alt="Assistance & orientation" />
    <h3>Assistance & orientation</h3>
    <p>Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires</p>
  </motion.div>

  {/* Service 5 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.5 }}
  >
    <img src="/services5.jpg" alt="Santé sexuelle" />
    <h3>Santé sexuelle</h3>
    <p>Accès à l’information et soutien pour la santé sexuelle et reproductive</p>
  </motion.div>

  {/* Service 6 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.6 }}
  >
    <img src="/services6.jpg" alt="Éducation & Protection environnementale" />
    <h3>Éducation & Protection environnementale</h3>
    <p>Programmes éducatifs et initiatives pour protéger l’environnement</p>
  </motion.div>

  {/* Service 7 */}
  <motion.div
    className="service"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ delay: 0.7 }}
  >
    <img src="/services7.jpg" alt="Adaptabilité climatique" />
    <h3>Adaptabilité climatique</h3>
    <p>Formations et projets pour aider à s’adapter aux changements climatiques</p>
  </motion.div>
</section>
