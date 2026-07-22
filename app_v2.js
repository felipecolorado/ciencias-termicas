// Data for the timeline
const timelineEvents = [
    {
        year: -350,
        title: "Aristóteles y la Naturaleza del Calor",
        title_en: "Aristotle and the Nature of Heat",
        surname: "Aristóteles",
        law: "Teoría de los Cuatro Elementos",
        law_en: "Four Element Theory",
        country: "<img src='https://flagcdn.com/w20/gr.png' alt='Grecia' style='vertical-align: text-bottom; margin-right: 4px;'> Grecia Antigua",
        country_en: "<img src='https://flagcdn.com/w20/gr.png' alt='Grecia' style='vertical-align: text-bottom; margin-right: 4px;'> Ancient Greece",
        desc: "El filósofo griego sistematizó la visión antigua del calor como uno de los cuatro elementos fundamentales: fuego, agua, tierra y aire. Propuso que el calor y el frío eran cualidades primarias opuestas que explicaban los cambios en la materia. Observó que el calor <em>fluye</em> de los cuerpos calientes hacia los fríos — intuición que, aunque no matemática, anticipó el concepto de flujo de calor y la segunda ley de la termodinámica.<br><br><strong>Anecdotario:</strong> Aristóteles creía que el cerebro humano servía como un radiador que enfriaba la sangre caliente proveniente del corazón — el calor era, para él, el origen de la vida y la inteligencia. Esta idea influyó en la medicina durante ¡más de 1.500 años!",
        desc_en: "The Greek philosopher systematized the ancient view of heat as one of the four fundamental elements: fire, water, earth and air. He proposed that heat and cold were opposite primary qualities that explained changes in matter. He observed that heat <em>flows</em> from hot bodies to cold ones — an intuition that, although not mathematical, anticipated the concept of heat flow and the second law of thermodynamics. <br><br><strong>Anecdote:</strong> Aristotle believed that the human brain served as a radiator that cooled the hot blood coming from the heart — heat was, for him, the origin of life and intelligence. This idea influenced medicine for more than 1,500 years!",
        category: "Historia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/330px-Aristotle_Altemps_Inv8575.jpg",
        bio: { name: "Aristóteles de Estagira", life: "384 - 322 a.C.", country: "Grecia" }
    },
    {
        year: 1593,
        title: "Galileo Galilei y el Termoscopio",
        title_en: "Galileo Galilei and the Thermoscope",
        surname: "Galileo",
        law: "Invención del Termoscopio",
        law_en: "Invention of the Thermoscope",
        country: "<img src='https://flagcdn.com/w20/it.png' alt='Italia' style='vertical-align: text-bottom; margin-right: 4px;'> Italia",
        country_en: "<img src='https://flagcdn.com/w20/it.png' alt='Italia' style='vertical-align: text-bottom; margin-right: 4px;'> Italy",
        desc: "Galileo inventó el <strong>termoscopio</strong> (~1593), el primer instrumento capaz de detectar diferencias de temperatura. Consistía en un tubo de vidrio con una bola de aire sellada cuyo nivel de agua subía o bajaba según el calentamiento o enfriamiento del ambiente. Aunque no tenía escala numérica, fue el primer paso hacia la medición cuantitativa del calor.<br><br>Galileo también observó sistemáticamente cómo el calor afectaba la expansión de los materiales, un fenómeno clave para entender la conducción y convección térmicas.<br><br><strong>Anecdotario:</strong> Se dice que Galileo concibió la idea del termoscopio mientras daba clases de medicina en la Universidad de Padua. Lo usaba en demostraciones para mostrar a sus estudiantes que el calor no era solo una sensación subjetiva, sino algo que podía ser medido objetivamente — algo revolucionario para su época.",
        desc_en: "Galileo invented the thermoscope (~1593), the first instrument capable of detecting temperature differences. It consisted of a glass tube with a sealed air ball whose water level rose or fell depending on the heating or cooling of the environment. Although it had no numerical scale, it was the first step toward quantitative measurement of heat.<br><br>Galileo also systematically observed how heat affected the expansion of materials, a key phenomenon for understanding thermal conduction and convection.<br><br><strong>Anecdotal:</strong> Galileo is said to have conceived the idea of ​​the thermoscope while teaching medicine at the University of Padua. He used it in demonstrations to show his students that heat was not just a subjective sensation, but something that could be measured objectively — something revolutionary for its time.",
        category: "Historia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/330px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
        bio: { name: "Galileo Galilei", life: "1564 - 1642", country: "Italia" }
    },
    {
        year: 1620,
        title: "Francis Bacon y el Calor como Movimiento",
        title_en: "Francis Bacon and Heat as Movement",
        surname: "Bacon",
        law: "Calor = Movimiento Molecular",
        law_en: "Heat = Molecular Movement",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "En su obra <em>Novum Organum</em> (1620), Francis Bacon fue el primero en proponer formalmente que el <strong>calor es una forma de movimiento</strong> de las partículas de materia — no una sustancia o un elemento, sino energía cinética en acción. Rechazó la teoría aristotélica del fuego como elemento y anticipó en dos siglos la teoría cinética de los gases.<br><br><strong>Anecdotario:</strong> Bacon murió víctima de su propia experimentación. En 1626, obsesionado con estudiar si el frío podía preservar los alimentos, salió en pleno invierno a rellenar un pollo con nieve para observar el efecto. Contrajo una neumonía severa y falleció pocas semanas después. Se podría decir que fue el primer mártir de la refrigeración experimental.",
        desc_en: "In his work Novum Organum (1620), Francis Bacon was the first to formally propose that heat is a form of motion of particles of matter—not a substance or an element, but kinetic energy in action. He rejected the Aristotelian theory of fire as an element and anticipated the kinetic theory of gases by two centuries.<br><br><strong>Anecdotal:</strong> Bacon died a victim of his own experimentation. In 1626, obsessed with studying whether the cold could preserve food, he went out in the middle of winter to stuff a chicken with snow to observe the effect. He contracted severe pneumonia and died a few weeks later. You could say that he was the first martyr of experimental refrigeration.",
        category: "Historia",
        image: "bacon.jpg",
        bio: { name: "Sir Francis Bacon", life: "1561 - 1626", country: "Reino Unido" }
    },
    {
        year: 1650,
        title: "Otto von Guericke y la Transmisión en el Vacío",
        title_en: "Otto von Guericke and Transmission in a Vacuum",
        surname: "Von Guericke",
        law: "Calor sin Medio Material (Radiación)",
        law_en: "Heat without Material Medium (Radiation)",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "El físico alemán inventor de la <strong>bomba de vacío</strong> realizó experimentos fundamentales al observar que el calor podía propagarse a través del vacío (algo que la conducción y la convección no pueden hacer), anticipando el concepto de <strong>radiación térmica</strong>. Demostró que la conducción requiere un medio material, mientras que el calor radiante no.<br><br>Sus experimentos con las famosas <em>Esferas de Magdeburgo</em> (1654) demostraron la fuerza de la presión atmosférica y establecieron las bases para entender el comportamiento de los gases y su relación con el calor.<br><br><strong>Anecdotario:</strong> Von Guericke organizó una dramática demostración pública para el Emperador Fernando III: unió dos hemisferios de bronce, extrajo el aire con su bomba, y ¡ni 16 caballos (8 por lado) pudieron separarlos! Cuando abrió la válvula, los hemisferios se separaron solos. Fue el primer gran espectáculo científico de la historia.",
        desc_en: "The German physicist who invented the vacuum pump performed fundamental experiments when he observed that heat could spread through a vacuum (something that conduction and convection cannot do), anticipating the concept of thermal radiation. He demonstrated that conduction requires a material medium, while radiant heat does not.<br><br>His experiments with the famous <em>Magdeburg Spheres</em> (1654) demonstrated the strength of atmospheric pressure and established the basis for understanding the behavior of gases and their relationship with heat.<br><br><strong>Anecdotal:</strong> Von Guericke organized a dramatic public demonstration for Emperor Ferdinand III: he joined two bronze hemispheres, He extracted the air with his pump, and not even 16 horses (8 per side) could separate them! When he opened the valve, the hemispheres separated on their own. It was the first great scientific spectacle in history.",
        category: "Historia",
        image: "guericke.jpg",
        bio: { name: "Otto von Guericke", life: "1602 - 1686", country: "Alemania" }
    },
    {
        year: 1665,
        title: "Robert Boyle y la Naturaleza Cinética del Calor",
        title_en: "Robert Boyle and the Kinetic Nature of Heat",
        surname: "Boyle",
        law: "Movimiento Molecular y Calor",
        law_en: "Molecular Movement and Heat",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "Robert Boyle confirmó experimentalmente la teoría de Bacon, demostrando que el calor es producto del movimiento interno de las partículas de materia. Su famosa <strong>Ley de Boyle</strong> estableció la primera relación cuantitativa entre presión, volumen y calor en los gases (a temperatura constante):<br><br>$$PV = \\text{constante}$$<br><br>Junto a Robert Hooke, Boyle también estudió la expansión térmica de fluidos, preparando el terreno para el desarrollo de termómetros cuantitativos y escalas de temperatura precisas.<br><br><strong>Anecdotario:</strong> Boyle fue un hombre profundamente religioso que veía la ciencia como una forma de comprender la obra de Dios. Financió traducciones de la Biblia a lenguas indígenas al tiempo que realizaba experimentos en su laboratorio privado. Irónicamente, rechazó todos los títulos nobiliarios que la Corona le ofreció, siendo uno de los científicos más influyentes y humildes de su era.",
        desc_en: "Robert Boyle experimentally confirmed Bacon's theory, demonstrating that heat is the product of the internal movement of matter particles. His famous <strong>Boyle's Law</strong> established the first quantitative relationship between pressure, volume and heat in gases (at constant temperature):<br><br>$$PV = \\text{constant}$$<br><br>Along with Robert Hooke, Boyle also studied the thermal expansion of fluids, paving the way for the development of quantitative thermometers and accurate temperature scales.<br><br><strong>Anecdotal:</strong> Boyle was a deeply religious man who saw science as a way of understanding God's work. He financed translations of the Bible into indigenous languages while conducting experiments in his private laboratory. Ironically, he rejected all the noble titles the Crown offered him, being one of the most influential and humble scientists of his era.",
        category: "Historia",
        image: "boyle.jpg",
        bio: { name: "Robert Boyle", life: "1627 - 1691", country: "Irlanda / Reino Unido",
        country_en: "Ireland / United Kingdom" }
    },
    {
        year: 1701,
        title: "Isaac Newton y la Ley de Enfriamiento",
        title_en: "Isaac Newton and the Law of Cooling",
        surname: "Newton",
        law: "Ley de Enfriamiento",
        law_en: "Cooling Law",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "Publica de forma anónima sus observaciones sobre las temperaturas de un bloque de hierro al rojo vivo al enfriarse en el aire. Postuló que la tasa de pérdida de calor es proporcional a la diferencia de temperatura entre el objeto y su entorno. Esta relación empírica es la base de la convección térmica moderna:<br><br>$$ q = h A (T_s - T_\\infty) $$<br>Donde $h$ es el coeficiente de transferencia de calor.<br><br><strong>Anecdotario:</strong> Para medir el calor, Newton creó su propio termómetro llenándolo con aceite de linaza. Definió el $0^\\circ$ en la nieve derritiéndose y $12^\\circ$ en la temperatura del cuerpo humano. Además, para medir metales muy calientes sin derretir su termómetro, colocaba trozos de aleaciones con puntos de fusión conocidos sobre un bloque de hierro caliente y cronometraba cuánto tardaban en solidificarse.",
        desc_en: "He anonymously publishes his observations of the temperatures of a red-hot block of iron as it cools in air. He postulated that the rate of heat loss is proportional to the temperature difference between the object and its surroundings. This empirical relationship is the basis of modern thermal convection:<br><br>$$ q = h A (T_s - T_\\infty) $$<br>Where $h$ is the heat transfer coefficient.<br><br><strong>Anecdotal:</strong> To measure heat, Newton created his own thermometer by filling it with linseed oil. He defined $0^\\circ$ on melting snow and $12^\\circ$ on human body temperature. Additionally, to measure very hot metals without melting his thermometer, he would place pieces of alloys with known melting points on a block of hot iron and time how long it took for them to solidify.",
        category: "Convección",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg",
        bio: { name: "Sir Isaac Newton", life: "1642 - 1727", country: "Reino Unido" }
    },
    {
        year: 1738,
        title: "Daniel Bernoulli y la Hidrodinámica",
        title_en: "Daniel Bernoulli and Hydrodynamics",
        surname: "Bernoulli",
        law: "Principio de Bernoulli",
        law_en: "Bernoulli's principle",
        country: "<img src='https://flagcdn.com/w20/ch.png' alt='Suiza' style='vertical-align: text-bottom; margin-right: 4px;'> Suiza",
        country_en: "<img src='https://flagcdn.com/w20/ch.png' alt='Suiza' style='vertical-align: text-bottom; margin-right: 4px;'> Switzerland",
        desc: "Publica su obra revolucionaria <em>Hydrodynamica</em> en Estrasburgo, consagrándose como el gran héroe y padre de la mecánica de fluidos clásica. Formuló la relación fundamental entre presión, densidad y velocidad para fluidos en movimiento:<br><br>$$ P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const} $$<br><br><strong>El genio multidisciplinario:</strong> Su inspiración inicial provino de la medicina. Al estudiar la mecánica de la respiración y el flujo de la sangre (hemodinámica), diseñó un método experimental para medir la presión arterial introduciendo tubos de vidrio directamente en las arterias. Esta analogía biológica lo llevó a comprender la relación fundamental entre la velocidad de un fluido y su presión estática.<br><br><strong>Colaboración en San Petersburgo:</strong> Trabajó de forma estrecha con su gran amigo <strong>Leonhard Euler</strong>. Mientras Daniel aportaba el ingenio físico y experimental, Euler pulió la formulación matemática de la ecuación, dándole la elegante forma diferencial e integral moderna.<br><br><strong>Anecdotario y rivalidad familiar:</strong> Los Bernoulli produjeron mentes brillantes pero celos destructivos. Cuando Daniel ganó el gran premio de la Academia de París empatando con su padre Johann Bernoulli, este se enfureció tanto que lo expulsó de casa. Posteriormente, Johann plagió partes de <em>Hydrodynamica</em> en su propio libro <em>Hydraulica</em>, antedatando falsamente la fecha a 1732 para arrebatarle el mérito del descubrimiento a su hijo.",
        desc_en: "He published his revolutionary work <em>Hydrodynamica</em> in Strasbourg, establishing himself as the great hero and father of classical fluid mechanics. He formulated the fundamental relationship between pressure, density and velocity for fluids in motion:<br><br>$$ P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{const} $$<br><br><strong>The multidisciplinary genius:</strong> His initial inspiration came from medicine. By studying the mechanics of respiration and blood flow (hemodynamics), he designed an experimental method to measure blood pressure by introducing glass tubes directly into the arteries. This biological analogy led him to understand the fundamental relationship between the velocity of a fluid and its static pressure.<br><br><strong>Collaboration in St. Petersburg:</strong> He worked closely with his great friend <strong>Leonhard Euler</strong>. While Daniel provided the physical and experimental ingenuity, Euler polished the mathematical formulation of the equation, giving it its elegant modern differential and integral form.<br><br><strong>Anecdotal and family rivalry:</strong> The Bernoullis produced brilliant minds but destructive jealousy. When Daniel won the grand prize of the Paris Academy tying with his father Johann Bernoulli, the latter was so infuriated that he kicked him out of the house. Later, Johann plagiarized parts of <em>Hydrodynamica</em> in his own book <em>Hydraulica</em>, falsely backdating it to 1732 to rob his son of the credit for the discovery.",
        category: "Historia",
        image: "Porträt_des_Daniel_Bernoulli_(cropped).jpg",
        bio: { name: "Daniel Bernoulli", life: "1700 - 1782", country: "Suiza",
        country_en: "Swiss", }
    },
    {
        year: 1742,
        title: "Anders Celsius y la Escala Centígrada",
        title_en: "Anders Celsius and the Centigrade Scale",
        surname: "Celsius",
        law: "Escala Celsius",
        law_en: "Celsius scale",
        country: "<img src='https://flagcdn.com/w20/se.png' alt='Suecia' style='vertical-align: text-bottom; margin-right: 4px;'> Suecia",
        country_en: "<img src='https://flagcdn.com/w20/se.png' alt='Suecia' style='vertical-align: text-bottom; margin-right: 4px;'> Sweden",
        desc: "Astrónomo, físico y matemático que propuso la escala termométrica que lleva su nombre. Presentó a la Real Sociedad Sueca de Ciencias su investigación sobre un termómetro con 100 grados de diferencia entre el punto de congelación y ebullición del agua.<br><br><strong>Anecdotario:</strong> Curiosamente, Celsius estableció originalmente el 0 en el punto de ebullición y el 100 en el punto de congelación. Fue el renombrado biólogo Carl Linneo quien propuso invertir la escala poco después del fallecimiento de Celsius, dejándola como la usamos actualmente.",
        desc_en: "Astronomer, physicist and mathematician who proposed the thermometric scale that bears his name. He presented to the Royal Swedish Society of Sciences his research on a thermometer with a 100 degree difference between the freezing and boiling points of water.<br><br><strong>Anecdotal:</strong> Interestingly, Celsius originally established 0 as the boiling point and 100 as the freezing point. It was the renowned biologist Carl Linnaeus who proposed inverting the scale shortly after the death of Celsius, leaving it as we use it today.",
        category: "Termodinámica",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Anders-Celsius.jpeg",
        bio: { name: "Anders Celsius", life: "1701 - 1744", country: "Suecia" }
    },
    {
        year: 1769,
        title: "James Watt y la Eficiencia Térmica de la Máquina de Vapor",
        title_en: "James Watt and the Thermal Efficiency of the Steam Engine",
        surname: "Watt",
        law: "Condensador Separado y Eficiencia Térmica",
        law_en: "Separate Condenser and Thermal Efficiency",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "El ingeniero escocés James Watt revolucionó la máquina de vapor de Newcomen al identificar su inmenso desperdicio de calor: el cilindro debía calentarse y enfriarse en cada ciclo, consumiendo enormes cantidades de carbón. En 1769 patentó el <strong>condensador separado</strong>, permitiendo que el cilindro permaneciera siempre caliente mientras el vapor se condensaba en una cámara fría independiente. Esto redujo el consumo de combustible en un ~75% y marcó el inicio de la ingeniería térmica moderna.<br><br>Watt también introdujo el concepto de <strong>potencia</strong> como tasa de transferencia de energía en el tiempo, definiendo el <em>caballo de vapor</em> (hp) para cuantificar el rendimiento de sus motores frente a los caballos de tiro:<br><br>$$ W = \\frac{Q}{\\Delta t} $$<br>La unidad internacional de potencia, el <strong>Watt (W)</strong>, lleva su nombre en su honor. Su trabajo sobre la eficiencia en la conversión calor→trabajo fue un precursor directo de la termodinámica formal de Carnot y Clausius.<br><br><strong>Anecdotario:</strong> La leyenda dice que Watt tuvo la idea del condensador separado durante un paseo dominical por el Parque de Glasgow, al meditar sobre por qué el modelo de Newcomen era tan ineficiente. Lo que sí es cierto es que su colaboración con el fabricante Matthew Boulton fue uno de los primeros casos de <em>transferencia tecnológica</em> exitosa de la historia: Watt inventaba, Boulton financiaba y comercializaba. Sin Boulton, la Revolución Industrial habría esperado décadas más.",
        desc_en: "Scottish engineer James Watt revolutionized the Newcomen steam engine by identifying its immense heat waste: the cylinder had to be heated and cooled in each cycle, consuming enormous amounts of coal. In 1769 he patented the <strong>separate condenser</strong>, allowing the cylinder to remain constantly hot while the steam condensed in an independent cold chamber. This reduced fuel consumption by ~75% and marked the beginning of modern thermal engineering.<br><br>Watt also introduced the concept of <strong>power</strong> as the rate of energy transfer over time, defining the <em>horsepower</em> (hp) to quantify the performance of his engines against draft horses:<br><br>$$ W = \\frac{Q}{\\Delta t} $$<br>The international unit of power, the <strong>Watt (W)</strong>, is named in his honor. His work on heat→work conversion efficiency was a direct precursor to the formal thermodynamics of Carnot and Clausius.<br><br><strong>Anecdotal:</strong> Legend has it that Watt had the idea for the separate condenser during a Sunday walk through Glasgow Park, while pondering why the Newcomen model was so inefficient. What is certain is that his collaboration with manufacturer Matthew Boulton was one of the first cases of successful <em>technology transfer</em> in history: Watt invented, Boulton financed and marketed. Without Boulton, the Industrial Revolution would have waited decades longer.",
        category: "Termodinámica",
        image: "James_Watt_by_Henry_Howard.jpg",
        bio: { name: "James Watt", life: "1736 - 1819", country: "Escocia / Reino Unido",
        country_en: "Scotland / United Kingdom", }
    },
    {
        year: 1783,
        title: "Antoine Lavoisier y la Teoría del Calórico",
        title_en: "Antoine Lavoisier and the Caloric Theory",
        surname: "Lavoisier",
        law: "Teoría del Calórico",
        law_en: "Caloric Theory",
        country: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> Francia",
        country_en: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> France",
        desc: "El padre de la química moderna formalizó y popularizó la <strong>Teoría del Calórico</strong> — la idea de que el calor era un fluido sutil, invisible e indestructible que fluía de los cuerpos calientes a los fríos. Lo incluyó en su tabla de 33 elementos como una sustancia real. Esta teoría dominó la física por casi 50 años y fue extraordinariamente fructífera: permitió a Carnot desarrollar su ciclo termodinámico y a Fourier formular su ley de conducción, pese a estar basada en una premisa falsa.<br><br>$$ Q_{total} = Q_{cedido} + Q_{absorbido} = \\text{const} $$<br><br><strong>Anecdotario:</strong> Lavoisier fue guillotinado durante el Terror de la Revolución Francesa en 1794, a los 50 años. El matemático Joseph-Louis Lagrange sentenció: <em>«Sólo un momento bastó para cortarle la cabeza, y quizás no bastarán cien años para producir otra igual»</em>. Curiosamente, fue rehabilitado oficialmente por el gobierno francés... ¡18 meses después de su ejecución!",
        desc_en: "The father of modern chemistry formalized and popularized the <strong>Caloric Theory</strong> — the idea that heat was a subtle, invisible and indestructible fluid that flowed from hot to cold bodies. He included it in his table of 33 elements as a real substance. This theory dominated physics for almost 50 years and was extraordinarily fruitful: it allowed Carnot to develop his thermodynamic cycle and Fourier to formulate his law of conduction, despite being based on a false premise.<br><br>$$ Q_{total} = Q_{yielded} + Q_{absorbed} = \\text{const} $$<br><br><strong>Anecdotal:</strong> Lavoisier was guillotined during the Terror of the French Revolution in 1794, at the age of 50. The mathematician Joseph-Louis Lagrange stated: <em>'It took only a moment to sever his head, and perhaps a hundred years will not be enough to produce another like it'</em>. Interestingly, he was officially exonerated by the French government... 18 months after his execution!",
        category: "Termodinámica",
        image: "lavoisier.jpg",
        bio: { name: "Antoine-Laurent de Lavoisier", life: "1743 - 1794", country: "Francia",
        country_en: "France", }
    },
    {
        year: 1798,
        title: "Conde de Rumford y el Fin del Calórico",
        title_en: "Earl of Rumford and the End of Caloric",
        surname: "Rumford",
        law: "Calor = Trabajo Mecánico",
        law_en: "Heat = Mechanical Work",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='EE.UU.' style='vertical-align: text-bottom; margin-right: 4px;'> EE.UU. / Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='EE.UU.' style='vertical-align: text-bottom; margin-right: 4px;'> US/UK",
        desc: "Benjamin Thompson (Conde de Rumford) realizó el experimento que <strong>destruyó la teoría del calórico</strong>. Mientras supervisaba el taladrado de cañones de bronce en Munich, observó que el calor generado era prácticamente <strong>ilimitado</strong> mientras hubiera movimiento — algo imposible si el calórico era una sustancia finita y conservada. Concluyó que el calor era simplemente una forma de <strong>movimiento mecánico</strong>:<br><br>$$ Q \\propto W_{mecánico} $$<br><br>Este experimento fue el primer clavo en el ataúd del calórico y anticipó el concepto de equivalencia energética que Joule formalizaría décadas después.<br><br><strong>Anecdotario:</strong> Rumford fue un personaje extraordinariamente controversial: fue espía de los ingleses durante la Revolución Americana, obligado a huir a Europa. En Múnich se hizo poderoso reorganizando el ejército bávaro. También inventó el fogón de cocina moderno, el percolador de café, y el tejido de lana Congreve. Fue un genio práctico y oportunista como pocos en la historia de la ciencia.",
        desc_en: "Benjamin Thompson (Count Rumford) performed the experiment that <strong>destroyed the caloric theory</strong>. While supervising the boring of bronze cannons in Munich, he observed that the heat generated was practically <strong>limitless</strong> as long as there was motion — something impossible if caloric was a finite and conserved substance. He concluded that heat was simply a form of <strong>mechanical motion</strong>:<br><br>$$ Q \\propto W_{mechanical} $$<br><br>This experiment was the first nail in the caloric coffin and anticipated the concept of energy equivalence that Joule would formalize decades later.<br><br><strong>Anecdotal:</strong> Rumford was an extraordinarily controversial figure: he was a British spy during the American Revolution, forced to flee to Europe. In Munich he became powerful reorganizing the Bavarian army. He also invented the modern kitchen stove, the coffee percolator, and the Congreve wool weave. He was a practical and opportunistic genius like few in the history of science.",
        category: "Termodinámica",
        image: "rumford.jpg",
        bio: { name: "Benjamin Thompson (Conde de Rumford)", life: "1753 - 1814", country: "EE.UU. / Reino Unido",
        country_en: "USA/UK", }
    },
    {
        year: 1800,
        title: "William Herschel: Descubrimiento de la Radiación Infrarroja",
        title_en: "William Herschel: Discovery of Infrared Radiation",
        surname: "Herschel",
        law: "Descubrimiento del Infrarrojo",
        law_en: "Discovery of Infrared",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "William Herschel descubrió la radiación infrarroja al medir la temperatura de los colores de la luz solar dispersada por un prisma. Observó que al mover un termómetro con el bulbo ennegrecido más allá del extremo rojo visible del espectro (una zona oscura), la temperatura aumentaba considerablemente. Concluyó la existencia de 'rayos caloríficos' invisibles que se comportaban igual que la luz visible. Este fue el primer indicio de la existencia de radiación electromagnética no visible, fundamental para la posterior física de la radiación y transferencia de calor.<br><br><strong>Anecdotario:</strong> Herschel originalmente buscaba un filtro solar para su telescopio y notó que ciertos colores pasaban más calor que otros. Para comprobarlo, colocó termómetros en cada color con bulbos ennegrecidos con hollín para absorber mejor el calor, usando otros termómetros de control fuera del espectro. ¡Así descubrió el infrarrojo casi por accidente!",
        desc_en: "William Herschel discovered infrared radiation by measuring the color temperatures of sunlight scattered by a prism. He observed that moving a thermometer with a blackened bulb beyond the visible red end of the spectrum (a dark area), the temperature increased considerably. He concluded the existence of invisible 'heat rays' that behaved just like visible light. This was the first indication of the existence of non-visible electromagnetic radiation, fundamental to the subsequent physics of radiation and heat transfer.<br><br><strong>Anecdotal:</strong> Herschel was originally looking for a solar filter for his telescope and noticed that certain colors passed through more heat than others. To test this, he placed thermometers in each color with bulbs blackened with soot to better absorb heat, using other control thermometers outside the spectrum. This is how he discovered infrared almost by accident!",
        category: "Radiación",
        image: "herschel.jpg",
        bio: { name: "Sir William Herschel", life: "1738 - 1822", country: "Alemania / Reino Unido" }
    },
    {
        year: 1822,
        title: "Jean-Baptiste Joseph Fourier y la Conducción",
        title_en: "Jean-Baptiste Joseph Fourier and Heat Conduction",
        surname: "Fourier",
        law: "Ley de la Conducción",
        law_en: "Heat Conduction Law",
        country: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> Francia",
        country_en: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> France",
        desc: "Publica la 'Théorie Analytique de la Chaleur' (Teoría Analítica del Calor), estableciendo la Ley de Fourier de la conducción térmica. Propuso que el flujo de calor es proporcional al gradiente de temperatura, sentando las bases matemáticas definitivas de la disciplina:<br><br>$$ q'' = -k \\nabla T $$<br>O en una dimensión ($x$):<br>$$ q_x = -k A \\frac{dT}{dx} $$<br>Donde $k$ es la conductividad térmica.<br><br><strong>Aportes Matemáticos y Climáticos:</strong> Para poder resolver la ecuación diferencial del calor, Fourier inventó una herramienta matemática revolucionaria: las <em>Series de Fourier</em>. Hoy en día, esta misma herramienta es el corazón del procesamiento de señales, las telecomunicaciones (Wi-Fi, 5G), el análisis acústico y la compresión de imágenes (JPEG). Además, en 1824, Fourier fue el primer científico en proponer formalmente la existencia del <strong>efecto invernadero</strong>, sugiriendo que la atmósfera de la Tierra retiene la radiación térmica al igual que lo hace el cristal de un invernadero.<br><br><strong>Anecdotario:</strong> Fourier desarrolló una obsesión casi fanática por el calor tras acompañar a Napoleón Bonaparte en su expedición a Egipto (1798), donde actuó como secretario del Instituto de Egipto. A su regreso a la húmeda Francia, empezó a sufrir de reumatismo. Llegó a creer firmemente que el calor extremo era la fuente absoluta de la vida y la salud, por lo que solía envolverse como momia en múltiples capas de abrigos gruesos y mantenía su habitación a temperaturas sofocantes con chimeneas encendidas a tope, ¡incluso en pleno verano parisino!",
        desc_en: "He publishes the 'Théorie Analytique de la Chaleur' (Analytical Theory of Heat), establishing Fourier's Law of thermal conduction. He proposed that heat flux is proportional to the temperature gradient, laying the definitive mathematical foundations of the discipline:<br><br>$$ q'' = -k \\nabla T $$<br>Or in one dimension ($x$):<br>$$ q_x = -k A \\frac{dT}{dx} $$<br>Where $k$ is the thermal conductivity.<br><br><strong>Mathematical and Climate Contributions:</strong> To solve the heat differential equation, Fourier invented a revolutionary mathematical tool: <em>Fourier Series</em>. Today, this same tool is the heart of signal processing, telecommunications (Wi-Fi, 5G), acoustic analysis and image compression (JPEG). Furthermore, in 1824, Fourier was the first scientist to formally propose the existence of the <strong>greenhouse effect</strong>, suggesting that the Earth's atmosphere retains thermal radiation just as the glass of a greenhouse does.<br><br><strong>Anecdotal:</strong> Fourier developed an almost fanatical obsession with heat after accompanying Napoleon Bonaparte on his expedition to Egypt (1798), where he served as secretary of the Institute of Egypt. Upon returning to damp France, he began to suffer from rheumatism. He came to firmly believe that extreme heat was the absolute source of life and health, so he used to wrap himself like a mummy in multiple layers of thick coats and kept his room at suffocating temperatures with fireplaces fully blazing, even in the middle of the Parisian summer!",
        category: "Conducción",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fourier2_-_restoration1.jpg/330px-Fourier2_-_restoration1.jpg",
        bio: { name: "Jean-Baptiste Joseph Fourier", life: "1768 - 1830", country: "Francia",
        country_en: "France", }
    },
    {
        year: 1822,
        title: "Navier y Stokes: Las Ecuaciones Fundamentales del Flujo",
        title_en: "Navier and Stokes: The Fundamental Equations of Flow",
        surname: "Navier & Stokes",
        law: "Ecuaciones de Navier-Stokes",
        law_en: "Navier-Stokes equations",
        country: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> Francia / <img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> France / <img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "Claude-Louis Navier (1822) y George Gabriel Stokes (1845) formularon independientemente las ecuaciones que describen el movimiento de cualquier fluido viscoso, desde el agua en una tubería hasta la atmósfera terrestre y el plasma solar. Son la columna vertebral de toda la mecánica de fluidos computacional (CFD) moderna:<br><br>$$ \\rho \\left(\\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u}\\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\rho\\mathbf{g} $$<br>Donde el término izquierdo es la <strong>inercia</strong>, $-\\nabla p$ es la <strong>presión</strong>, $\\mu \\nabla^2 \\mathbf{u}$ es la <strong>viscosidad</strong> y $\\rho\\mathbf{g}$ son las fuerzas de cuerpo.<br><br><strong>El vínculo fundamental con el CFD:</strong> Debido a que estas ecuaciones son diferenciales parciales altamente no lineales de extrema complejidad, no poseen una solución matemática analítica exacta conocida para casos generales (de hecho, probar su existencia y suavidad es uno de los Problemas del Milenio de Clay). Para poder usarlas en la práctica (como simular el flujo en un ala de avión o el clima), se debe recurrir a computadoras que dividen el fluido en millones de celdas pequeñas y resuelven las ecuaciones de forma numérica aproximada (usando volúmenes finitos, diferencias finitas o Lattice Boltzmann). El nacimiento y evolución de la <strong>Mecánica de Fluidos Computacional (CFD)</strong> se debe enteramente a la necesidad de resolver las Ecuaciones de Navier-Stokes en problemas del mundo real.<br><br><strong>Anecdotario:</strong> Navier supervisó la construcción del puente colgante Châtelet en París... pero este colapsó en 1826 antes de inaugurarse, un escándalo monumental que dañó su reputación como ingeniero práctico. Por otro lado, George G. Stokes era tan extremadamente silencioso que en Cambridge lo apodaban «el hombre callado»; podía pasar horas en reuniones sin decir una sola palabra, para luego resolver el asunto en segundos con una precisión matemática insuperable. Además, el famoso <em>Teorema de Stokes</em> (cálculo vectorial) ¡no fue descubierto por él! Fue propuesto por su amigo Lord Kelvin en una carta de 1850. Stokes simplemente lo incluyó en el examen del Premio Smith de Cambridge en 1854 y desde entonces quedó inmortalizado con su nombre.",
        desc_en: "Claude-Louis Navier (1822) and George Gabriel Stokes (1845) independently formulated the equations that describe the motion of any viscous fluid, from water in a pipe to the Earth's atmosphere and solar plasma. They are the backbone of all modern computational fluid dynamics (CFD):<br><br>$$ \\rho \\left(\\frac{\\partial \\mathbf{u}}{\\partial t} + \\mathbf{u} \\cdot \\nabla \\mathbf{u}\\right) = -\\nabla p + \\mu \\nabla^2 \\mathbf{u} + \\rho\\mathbf{g} $$<br>Where the left term is the <strong>inertia</strong>, $-\\nabla p$ is the <strong>pressure</strong>, $\\mu \\nabla^2 \\mathbf{u}$ is the <strong>viscosity</strong> and $\\rho\\mathbf{g}$ are the body forces.<br><br><strong>The fundamental link with CFD:</strong> Because these equations are highly non-linear partial differentials of extreme complexity, they have no known exact analytical mathematical solution for general cases (in fact, proving their existence and smoothness is one of the Clay Millennium Problems). To be able to use them in practice (like simulating flow over an airplane wing or the weather), one must resort to computers that divide the fluid into millions of small cells and solve the equations numerically and approximately (using finite volumes, finite differences or Lattice Boltzmann). The birth and evolution of <strong>Computational Fluid Dynamics (CFD)</strong> is entirely due to the need to solve the Navier-Stokes Equations in real-world problems.<br><br><strong>Anecdotal:</strong> Navier supervised the construction of the Châtelet suspension bridge in Paris... but it collapsed in 1826 before opening, a monumental scandal that damaged his reputation as a practical engineer. On the other hand, George G. Stokes was so extremely quiet that in Cambridge he was nicknamed 'the silent man'; he could spend hours in meetings without saying a single word, only to later resolve the matter in seconds with unsurpassed mathematical precision. Furthermore, the famous <em>Stokes' Theorem</em> (vector calculus) was not discovered by him! It was proposed by his friend Lord Kelvin in an 1850 letter. Stokes simply included it in the 1854 Cambridge Smith Prize exam and it has been immortalized with his name ever since.",
        category: "Convección",
        image: "Navier_stokes.PNG",
        bio: { name: "Claude-Louis Navier / George G. Stokes", life: "1785 - 1836 / 1819 - 1903", country: "Francia / Reino Unido",
        country_en: "France / United Kingdom", }
    },
    {
        year: 1824,
        title: "Sadi Carnot y el Ciclo de Carnot",
        title_en: "Sadi Carnot and the Carnot Cycle",
        surname: "Carnot",
        law: "Ciclo de Carnot",
        law_en: "Carnot cycle",
        country: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> Francia",
        country_en: "<img src='https://flagcdn.com/w20/fr.png' alt='Francia' style='vertical-align: text-bottom; margin-right: 4px;'> France",
        desc: "Publica su única obra, <em>Reflexiones sobre la potencia motriz del fuego</em>, donde introduce el concepto del <strong>Ciclo de Carnot</strong>: el motor térmico más eficiente posible que opera entre dos temperaturas. Estableció que la eficiencia máxima depende solo de las temperaturas de las fuentes caliente y fría:<br><br>$$ \\eta = 1 - \\frac{T_C}{T_H} $$<br>Sentó las bases teóricas de la <strong>Segunda Ley de la Termodinámica</strong>.<br><br><strong>Anecdotario:</strong> Carnot desarrolló sus revolucionarias ideas utilizando la teoría del calórico (un fluido invisible), demostrando que la lógica física correcta puede surgir de premisas erróneas. Murió trágicamente de cólera a los 36 años en 1832. Debido a las leyes sanitarias de la peste, casi todas sus pertenencias y escritos científicos fueron quemados y enterrados con él, perdiéndose gran parte de sus manuscritos originales.",
        desc_en: "He publishes his only work, <em>Reflections on the Motive Power of Fire</em>, where he introduces the concept of the <strong>Carnot Cycle</strong>: the most efficient thermal engine possible operating between two temperatures. He established that maximum efficiency depends only on the temperatures of the hot and cold sources:<br><br>$$ \\eta = 1 - \\frac{T_C}{T_H} $$<br>It laid the theoretical foundations for the <strong>Second Law of Thermodynamics</strong>.<br><br><strong>Anecdotal:</strong> Carnot developed his revolutionary ideas using the caloric theory (an invisible fluid), demonstrating that correct physical logic can arise from erroneous premises. He died tragically of cholera at age 36 in 1832. Due to the sanitary laws of the plague, almost all his belongings and scientific writings were burned and buried with him, losing a large part of his original manuscripts.",
        category: "Termodinámica",
        image: "Sadi_Carnot.jpeg",
        bio: { name: "Nicolas Léonard Sadi Carnot", life: "1796 - 1832", country: "Francia",
        country_en: "France", }
    },
    {
        year: 1843,
        title: "James Joule: El Equivalente Mecánico del Calor",
        title_en: "James Joule: The Mechanical Equivalent of Heat",
        surname: "Joule",
        law: "Conservación de la Energía",
        law_en: "Energy Conservation",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "James Prescott Joule demostró experimentalmente la equivalencia precisa entre el trabajo mecánico y el calor. Con su famoso experimento de paletas mecánicas giratorias impulsadas por pesas que agitaban agua en un contenedor aislado, midió el aumento de temperatura y estableció que la energía se conserva, sentando la base de la Primera Ley de la Termodinámica:<br><br>$$ 1 \\text{ caloría} \\approx 4.15 \\text{ Joules} $$<br>O en términos mecánicos:<br>$$ W = J \\cdot Q $$<br>Donde $J$ es el equivalente mecánico del calor.<br><br><strong>Anecdotario:</strong> Joule era dueño de una fábrica de cerveza, lo que le dio acceso a termómetros extremadamente precisos del siglo XIX (cruciales para medir aumentos de temperatura tan pequeños como $0.02\\text{ °C}$ en sus experimentos). Durante su luna de miel en los Alpes con su esposa Amelia, ¡se le vio intentando medir la diferencia de temperatura del agua en la cima y en la base de una gran cascada!",
        desc_en: "James Prescott Joule experimentally demonstrated the precise equivalence between mechanical work and heat. With his famous experiment of rotating mechanical paddles driven by weights stirring water in an insulated container, he measured the temperature increase and established that energy is conserved, laying the foundation of the First Law of Thermodynamics:<br><br>$$ 1 \\text{ calorie} \\approx 4.15 \\text{ Joules} $$<br>Or in mechanical terms:<br>$$ W = J \\cdot Q $$<br>Where $J$ is the mechanical equivalent of heat.<br><br><strong>Anecdotal:</strong> Joule owned a brewery, which gave him access to extremely precise 19th-century thermometers (crucial for measuring temperature increases as small as $0.02\\text{ °C}$ in his experiments). During his honeymoon in the Alps with his wife Amelia, he was seen trying to measure the temperature difference of the water at the top and bottom of a large waterfall!",
        category: "Termodinámica",
        image: "joule.jpg",
        bio: { name: "James Prescott Joule", life: "1818 - 1889", country: "Reino Unido",
        country_en: "United Kingdom", }
    },
    {
        year: 1848,
        title: "Lord Kelvin y la Escala Absoluta",
        title_en: "Lord Kelvin and the Absolute Scale",
        surname: "Kelvin",
        law: "Escala Kelvin",
        law_en: "Kelvin scale",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "William Thomson (Lord Kelvin) reconoció la necesidad de una escala de temperatura donde el cero represente el límite extremo del frío, es decir, la ausencia total de energía térmica (cero absoluto). Esta idea se fundamentó fuertemente en el ciclo de Carnot.<br><br>$$ T\\,(\\text{K}) = T\\,(^{\\circ}\\text{C}) + 273.15 $$<br><br><strong>Anecdotario:</strong> Fue un niño prodigio que entró a la universidad a los 10 años. Además de su escala de temperaturas, se hizo inmensamente rico y famoso por dirigir la instalación del primer cable telegráfico transatlántico, lo que le valió su título nobiliario de 'Lord'.",
        desc_en: "William Thomson (Lord Kelvin) recognized the need for a temperature scale where zero represents the extreme limit of cold, that is, the total absence of thermal energy (absolute zero). This idea was strongly based on the Carnot cycle.<br><br>$$ T\\,(\\text{K}) = T\\,(^{\\circ}\\text{C}) + 273.15 $$<br><br><strong>Anecdotal:</strong> He was a child prodigy who entered university at age 10. In addition to his temperature scale, he became immensely rich and famous for directing the installation of the first transatlantic telegraph cable, which earned him his noble title of 'Lord'.",
        category: "Termodinámica",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lord_Kelvin_photograph.jpg/330px-Lord_Kelvin_photograph.jpg",
        bio: { name: "William Thomson (Lord Kelvin)", life: "1824 - 1907", country: "Reino Unido",
        country_en: "United Kingdom", }
    },
    {
        year: 1850,
        title: "Rudolf Clausius: La Entropía y la Segunda Ley",
        title_en: "Rudolf Clausius: Entropy and the Second Law",
        surname: "Clausius",
        law: "Segunda Ley de la Termodinámica",
        law_en: "Second Law of Thermodynamics",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Publica su famoso artículo sobre la fuerza motriz del calor, formulando la Segunda Ley de la Termodinámica: <em>'El calor no puede pasar por sí mismo de un cuerpo más frío a uno más caliente'</em>. Posteriormente, introdujo el concepto fundamental de <strong>Entropía (S)</strong>, definiendo su cambio como la transferencia de calor reversible dividida por la temperatura absoluta:<br><br>$$ dS = \\frac{dQ_{rev}}{T} $$<br>Concluyó que la entropía del universo siempre tiende a un máximo.<br><br><strong>Anecdotario:</strong> Clausius fue un hombre sumamente patriótico. Durante la guerra franco-prusiana (1870), organizó y lideró un cuerpo de ambulancias voluntario de estudiantes para rescatar heridos en el campo de batalla. Fue herido en la pierna, lo que le dejó una cojera permanente, y recibió la Cruz de Hierro por su valentía. Además de su genio teórico, ¡era un verdadero hombre de acción!",
        desc_en: "He publishes his famous article on the motive force of heat, formulating the Second Law of Thermodynamics: <em>'Heat can never pass from a colder to a warmer body without some other change'</em>. Later, he introduced the fundamental concept of <strong>Entropy (S)</strong>, defining its change as the reversible heat transfer divided by the absolute temperature:<br><br>$$ dS = \\frac{dQ_{rev}}{T} $$<br>He concluded that the entropy of the universe always tends to a maximum.<br><br><strong>Anecdotal:</strong> Clausius was a highly patriotic man. During the Franco-Prussian war (1870), he organized and led a volunteer student ambulance corps to rescue the wounded on the battlefield. He was wounded in the leg, leaving him with a permanent limp, and received the Iron Cross for his bravery. Besides his theoretical genius, he was a true man of action!",
        category: "Termodinámica",
        image: "Clausius.jpg",
        bio: { name: "Rudolf Clausius", life: "1822 - 1888", country: "Alemania",
        country_en: "Germany", }
    },
    {
        year: 1860,
        title: "Maxwell y Boltzmann: Teoría Cinética",
        title_en: "Maxwell and Boltzmann: Kinetic Theory",
        surname: "Maxwell & Boltzmann",
        law: "Distribución de Maxwell-Boltzmann",
        law_en: "Maxwell–Boltzmann distribution",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido / <img src='https://flagcdn.com/w20/at.png' alt='Austria' style='vertical-align: text-bottom; margin-right: 4px;'> Austria",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom / <img src='https://flagcdn.com/w20/at.png' alt='Austria' style='vertical-align: text-bottom; margin-right: 4px;'> Austria",
        desc: "James Clerk Maxwell y Ludwig Boltzmann formularon de manera independiente la distribución estadística de las velocidades moleculares en un gas ideal. Fue la primera vez que se utilizó la probabilidad en la física fundamental.<br><br>$$ f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 e^{-\\frac{m v^2}{2 k_B T}} $$<br>Demostraron que la temperatura de un cuerpo no es más que la medida macroscópica de la energía cinética microscópica de sus átomos.<br><br><strong>Anecdotario:</strong> Maxwell dedujo esta curva matemáticamente en 1860 basándose casi por completo en la intuición de la simetría. Nueve años después, Boltzmann la dotó de un rigor estadístico absoluto. Ambos son los padres fundadores indiscutibles de la mecánica estadística.",
        desc_en: "James Clerk Maxwell and Ludwig Boltzmann independently formulated the statistical distribution of molecular speeds in an ideal gas. It was the first time probability was used in fundamental physics.<br><br>$$ f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2 e^{-\\frac{m v^2}{2 k_B T}} $$<br>They demonstrated that the temperature of a body is nothing more than the macroscopic measure of the microscopic kinetic energy of its atoms.<br><br><strong>Anecdotal:</strong> Maxwell deduced this curve mathematically in 1860 based almost entirely on the intuition of symmetry. Nine years later, Boltzmann gave it absolute statistical rigor. Both are the undisputed founding fathers of statistical mechanics.",
        category: "Termodinámica",
        image: "maxwell.jpg",
        bio: { name: "James Clerk Maxwell / Ludwig Boltzmann", life: "1831 - 1879 / 1844 - 1906", country: "Reino Unido / Austria",
        country_en: "United Kingdom/Austria", },
        "tab-target": "maxwell-sim"
    },
    {
        year: 1879,
        title: "Stefan y Boltzmann: Radiación Térmica",
        title_en: "Stefan and Boltzmann: Thermal Radiation",
        surname: "Stefan & Boltzmann",
        law: "Ley de Stefan-Boltzmann",
        law_en: "Stefan-Boltzmann law",
        country: "<img src='https://flagcdn.com/w20/at.png' alt='Austria' style='vertical-align: text-bottom; margin-right: 4px;'> Austria",
        country_en: "<img src='https://flagcdn.com/w20/at.png' alt='Austria' style='vertical-align: text-bottom; margin-right: 4px;'> Austria",
        desc: "Josef Stefan dedujo experimentalmente, y Ludwig Boltzmann demostró teóricamente, que la energía total irradiada por un cuerpo negro es proporcional a la cuarta potencia de su temperatura absoluta. Esta ley es uno de los pilares de la radiación térmica:<br><br>$$ q'' = \\sigma T^4 $$<br>Donde $\\sigma$ es la constante de Stefan-Boltzmann ($5.67 \\times 10^{-8} \\, \\text{W/(m}^2\\text{K}^4\\text{)}$).<br><br><strong>Anecdotario:</strong> Boltzmann (alumno de Stefan) usó la termodinámica teórica para demostrar lo que su maestro halló en el laboratorio. Trágicamente, Boltzmann sufrió profunda depresión por el rechazo de la comunidad a sus teorías atómicas y se quitó la vida antes de que fueran universalmente aceptadas.",
        desc_en: "Josef Stefan experimentally deduced, and Ludwig Boltzmann theoretically demonstrated, that the total energy radiated by a black body is proportional to the fourth power of its absolute temperature. This law is one of the pillars of thermal radiation:<br><br>$$ q'' = \\sigma T^4 $$<br>Where $\\sigma$ is the Stefan-Boltzmann constant ($5.67 \\times 10^{-8} \\, \\text{W/(m}^2\\text{K}^4\\text{)}$).<br><br><strong>Anecdotal:</strong> Boltzmann (Stefan's student) used theoretical thermodynamics to prove what his teacher found in the laboratory. Tragically, Boltzmann suffered profound depression due to the community's rejection of his atomic theories and took his own life before they were universally accepted.",
        category: "Radiación",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Boltzmann2.jpg/330px-Boltzmann2.jpg",
        bio: { name: "Josef Stefan (1835 - 1893) y Ludwig Boltzmann (1844 - 1906)", life: "S. XIX", country: "Austria",
        country_en: "Austria", }
    },
    {
        year: 1883,
        title: "Osborne Reynolds y la Transición de Flujo",
        title_en: "Osborne Reynolds and the Flow Transition",
        surname: "Reynolds",
        law: "Número de Reynolds (Re)",
        law_en: "Reynolds number (Re)",
        country: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> Reino Unido",
        country_en: "<img src='https://flagcdn.com/w20/gb.png' alt='Reino Unido' style='vertical-align: text-bottom; margin-right: 4px;'> United Kingdom",
        desc: "Osborne Reynolds demostró mediante sus famosos experimentos de inyección de tinta que el flujo de un fluido en un canal o tubería pasa de un régimen ordenado (laminar) a uno caótico (turbulento) al superar un valor crítico del parámetro adimensional que hoy lleva su nombre: $$ Re = \\frac{\\rho u D}{\\mu} $$ Este descubrimiento permitió clasificar el movimiento de los fluidos y sentar las bases para modelar la transferencia de calor por convección.<br><br><strong>Anecdotario:</strong> Para su experimento original, Reynolds construyó un tanque de agua de madera con un tubo de vidrio largo. Para evitar cualquier vibración que pudiera alterar el flujo laminar antes de tiempo, ¡colocó el equipo en un sótano silencioso y realizó las observaciones en plena noche cuando la ciudad dormía y las calles estaban completamente tranquilas!",
        desc_en: "Osborne Reynolds demonstrated through his famous ink injection experiments that the flow of a fluid in a channel or pipe transitions from an ordered (laminar) regime to a chaotic (turbulent) one when a critical value of the dimensionless parameter that today bears his name is exceeded: $$ Re = \\frac{\\rho u D}{\\mu} $$ This discovery allowed classifying fluid motion and laying the foundations for modeling convective heat transfer.<br><br><strong>Anecdotal:</strong> For his original experiment, Reynolds built a wooden water tank with a long glass tube. To prevent any vibration from altering the laminar flow prematurely, he placed the equipment in a quiet basement and made the observations in the middle of the night when the city was asleep and the streets were completely calm!",
        category: "Convección",
        image: "reynolds.jpg",
        bio: { name: "Osborne Reynolds", life: "1842 - 1912", country: "Irlanda / Reino Unido",
        country_en: "Ireland / United Kingdom", }
    },
    {
        year: 1900,
        title: "Max Planck y la Radiación Cuántica",
        title_en: "Max Planck and Quantum Radiation",
        surname: "Planck",
        law: "Ley de Radiación Térmica",
        law_en: "Thermal Radiation Law",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Resolvió el problema de la catástrofe ultravioleta postulando que la energía electromagnética se emite en cuantos (paquetes discretos). Su Ley de Planck unificó las aproximaciones de Wien y Rayleigh-Jeans, sentando las bases de la mecánica cuántica y la termodinámica de radiación:<br><br>$$ E_\\lambda = \\frac{2\\pi h c^2}{\\lambda^5 \\left[ \\exp\\left(\\frac{hc}{\\lambda kT}\\right) - 1 \\right]} $$<br><br><strong>Anecdotario:</strong> Planck era un excelente pianista y casi se dedica a la música. Irónicamente, dudó durante años de su propio descubrimiento de los 'cuantos'; al principio pensaba que era solo un truco matemático sin realidad física, hasta que Einstein y Bohr confirmaron que el universo funcionaba así.",
        desc_en: "He solved the ultraviolet catastrophe problem by postulating that electromagnetic energy is emitted in quanta (discrete packets). His Planck's Law unified the Wien and Rayleigh-Jeans approximations, laying the foundations of quantum mechanics and radiation thermodynamics:<br><br>$$ E_\\lambda = \\frac{2\\pi h c^2}{\\lambda^5 \\left[ \\exp\\left(\\frac{hc}{\\lambda kT}\\right) - 1 \\right]} $$<br><br><strong>Anecdotal:</strong> Planck was an excellent pianist and almost dedicated himself to music. Ironically, he doubted his own discovery of 'quanta' for years; at first he thought it was just a mathematical trick without physical reality, until Einstein and Bohr confirmed that the universe worked that way.",
        category: "Radiación",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg/330px-Max_Planck_by_Hugo_Erfurth_1938cr_-_restoration1.jpg",
        bio: { name: "Max Karl Ernst Ludwig Planck", life: "1858 - 1947", country: "Alemania",
        country_en: "Germany", }
    },
    {
        year: 1904,
        title: "Ludwig Prandtl y la Capa Límite",
        title_en: "Ludwig Prandtl and the Boundary Layer",
        surname: "Prandtl",
        law: "Teoría Capa Límite",
        law_en: "Boundary Layer Theory",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Presentó un artículo de solo 8 páginas en el Congreso de Matemáticos en Heidelberg donde introdujo el concepto de 'Capa Límite'. Demostró que los efectos viscosos se limitan a una delgada capa junto a la pared, resolviendo la paradoja de d'Alembert y separando el flujo en dos zonas analizables. Ecuaciones simplificadas:<br><br>$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp}{dx} + \\nu \\frac{\\partial^2 u}{\\partial y^2} $$<br><br><strong>Anecdotario:</strong> Prandtl tenía una intuición física tan desarrollada que solía encontrar inspiración en las cosas más simples. Se cuenta que concibió aspectos clave de la teoría de fluidos simplemente observando los remolinos y las corrientes de agua mientras se lavaba las manos o caminaba cerca de los ríos.",
        desc_en: "He presented an 8-page paper at the Congress of Mathematicians in Heidelberg where he introduced the concept of 'Boundary Layer'. He demonstrated that viscous effects are limited to a thin layer next to the wall, solving d'Alembert's paradox and dividing the flow into two analyzable zones. Simplified equations:<br><br>$$ u\\frac{\\partial u}{\\partial x} + v\\frac{\\partial u}{\\partial y} = -\\frac{1}{\\rho}\\frac{dp}{dx} + \\nu \\frac{\\partial^2 u}{\\partial y^2} $$<br><br><strong>Anecdotal:</strong> Prandtl had such a developed physical intuition that he used to find inspiration in the simplest things. It is said that he conceived key aspects of fluid theory simply by observing eddies and water currents while washing his hands or walking near rivers.",
        category: "Convección",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Prandtl_portrait.jpg/330px-Prandtl_portrait.jpg",
        bio: { name: "Ludwig Prandtl", life: "1875 - 1953", country: "Alemania",
        country_en: "Germany", }
    },
    {
        year: 1912,
        title: "Theodore von Kármán y el Instituto de Aerodinámica",
        title_en: "Theodore von Kármán and the Institute of Aerodynamics",
        surname: "von Kármán",
        country: "<img src='https://flagcdn.com/w20/hu.png' alt='Hungría' style='vertical-align: text-bottom; margin-right: 4px;'> Hungría",
        country_en: "<img src='https://flagcdn.com/w20/hu.png' alt='Hungría' style='vertical-align: text-bottom; margin-right: 4px;'> Hungary",
        desc: "Estudió bajo la supervisión de Prandtl en la Universidad de Gotinga y realizó trabajos fundamentales sobre convección y turbulencia. En 1912 aceptó el puesto como director del Instituto de Aerodinámica en la RWTH Aquisgrán (Aachen), consolidando la escuela alemana de mecánica de fluidos.",
        desc_en: "He studied under Prandtl at the University of Göttingen and did fundamental work on convection and turbulence. In 1912 he accepted the position as director of the Institute of Aerodynamics at the RWTH Aachen (Aachen), consolidating the German school of fluid mechanics.",
        category: "Convección",
        law: "Instituto de Aerodinámica",
        law_en: "Institute of Aerodynamics",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Theodor_von_K%C3%A1rm%C3%A1n_sketch_1931.png/330px-Theodor_von_K%C3%A1rm%C3%A1n_sketch_1931.png",
        bio: { name: "Theodore von Kármán (Época en Alemania)", life: "1881 - 1963", country: "Hungría" }
    },
    {
        year: 1915,
        title: "Wilhelm Nusselt y el Análisis Dimensional",
        title_en: "Wilhelm Nusselt and Dimensional Analysis",
        surname: "Nusselt",
        law: "Análisis Dimensional (Nu)",
        law_en: "Dimensional Analysis (Nu)",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Aplicó el análisis dimensional a la transferencia de calor convectiva por primera vez, definiendo el Número de Nusselt (Nu). Su trabajo permitió escalar resultados de laboratorio a equipos industriales. Definió el número como el cociente entre la transferencia de calor por convección y conducción:<br><br>$$ Nu = \\frac{hL}{k} $$<br><br><strong>Anecdotario:</strong> Nusselt era conocido por su profundo enfoque analítico. Derivó sus famosas y complejas ecuaciones de condensación utilizando puramente papel y lápiz, sin realizar un solo experimento físico. Años más tarde, los laboratorios comprobaron asombrados que su matemática era asombrosamente precisa!",
        desc_en: "He applied dimensional analysis to convective heat transfer for the first time, defining the Nusselt Number (Nu). His work allowed scaling laboratory results to industrial equipment. He defined the number as the ratio of convective to conductive heat transfer:<br><br>$$ Nu = \\frac{hL}{k} $$<br><br><strong>Anecdotal:</strong> Nusselt was known for his deep analytical approach. He derived his famous and complex condensation equations using purely pencil and paper, without performing a single physical experiment. Years later, laboratories were amazed to find that his mathematics were astoundingly accurate!",
        category: "Convección",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Professor_Nusselt_in_seinem_Amtszimmer_Karlsruhe_April_1925.jpg/330px-Professor_Nusselt_in_seinem_Amtszimmer_Karlsruhe_April_1925.jpg",
        bio: { name: "Ernst Kraft Wilhelm Nusselt", life: "1882 - 1957", country: "Alemania",
        country_en: "Germany", }
    },
    {
        year: 1928,
        title: "Max Jakob y los Cambios de Fase",
        title_en: "Max Jakob and Phase Changes",
        surname: "Jakob",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Físico que realizó contribuciones fundamentales para entender el comportamiento del vapor a alta presión, midió con precisión la conductividad térmica de diversos materiales y gases, y caracterizó los mecanismos fundamentales de transferencia de calor durante la condensación y la ebullición.<br><br><strong>Anecdotario:</strong> Cuando Max Jakob fue obligado a abandonar la Alemania nazi en 1936, no pudo llevarse prácticamente nada de valor material. Sin embargo, se llevó consigo sus meticulosas libretas de apuntes y tenía una memoria tan prodigiosa que, según sus alumnos, podía recitar de memoria larguísimas tablas de propiedades térmicas del vapor.",
        desc_en: "Physicist who made fundamental contributions to understanding the behavior of steam at high pressure, accurately measured the thermal conductivity of various materials and gases, and characterized the fundamental mechanisms of heat transfer during condensation and boiling.<br><br><strong>Anecdotal:</strong> When Max Jakob was forced to leave Nazi Germany in 1936, he was able to take virtually nothing of material value with him. However, he took his meticulous notebooks with him and had such a prodigious memory that, according to his students, he could recite by heart very long tables of the thermal properties of steam.",
        category: "Conducción",
        law: "Ebullición y Condensación",
        law_en: "Boiling and Condensation",
    },
    {
        year: 1930,
        title: "Dittus y Boelter (Flujo Interno)",
        title_en: "Dittus and Boelter (Internal Flow)",
        surname: "Dittus & Boelter",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> Estados Unidos",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> United States",
        desc: "F. W. Dittus y L. M. K. Boelter de la Universidad de California publicaron en 1930 su famosa correlación empírica para la transferencia de calor en flujo interno turbulento dentro de tuberías lisas. Esta ecuación clásica es uno de los estándares principales para estimar el número de Nusselt en ingeniería térmica:<br><br>$$ Nu = 0.023 Re^{0.8} Pr^n $$<br>Donde $n=0.4$ para calentamiento y $n=0.3$ para enfriamiento del fluido.<br><br><strong>Anecdotario:</strong> Llewellyn Boelter fue un pionero extraordinario en la educación de ingeniería. Fundó el Colegio de Ingeniería en la UCLA y diseñó un plan de estudios que integraba estrechamente las matemáticas y la física en problemas prácticos. Â¡Básicamente, ayudó a crear el modelo moderno de cómo se enseña la ingeniería en todo el mundo!",
        desc_en: "F. W. Dittus and L. M. K. Boelter from the University of California published in 1930 their famous empirical correlation for turbulent internal flow heat transfer in smooth pipes. This classic equation is one of the main standards for estimating the Nusselt number in thermal engineering:<br><br>$$ Nu = 0.023 Re^{0.8} Pr^n $$<br>Where $n=0.4$ for heating and $n=0.3$ for cooling of the fluid.<br><br><strong>Anecdotal:</strong> Llewellyn Boelter was an extraordinary pioneer in engineering education. He founded the College of Engineering at UCLA and designed a curriculum that closely integrated mathematics and physics into practical problems. He basically helped create the modern model of how engineering is taught worldwide!",
        category: "Convección",
        law: "Correlación Flujo Interno"
    },
    {
        year: 1933,
        title: "El Éxodo Científico (Régimen Nazi)",
        title_en: "The Scientific Exodus (Nazi Regime)",
        country: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Alemania",
        country_en: "<img src='https://flagcdn.com/w20/de.png' alt='Alemania' style='vertical-align: text-bottom; margin-right: 4px;'> Germany",
        desc: "Tras el nombramiento de Adolf Hitler como Canciller de Alemania en enero de 1933, la rápida implementación de políticas antisemitas provocó un éxodo masivo de mentes brillantes. Grandes investigadores de origen judío, como Theodore von Kármán y Max Jakob, se vieron obligados a huir de Europa. Este trágico evento histórico desplazó drásticamente el epicentro mundial de la investigación aeroespacial y la transferencia de calor desde la escuela alemana de Gotinga hacia los Estados Unidos.",
        desc_en: "Following the appointment of Adolf Hitler as Chancellor of Germany in January 1933, the rapid implementation of anti-Semitic policies caused a mass exodus of brilliant minds. Great researchers of Jewish origin, such as Theodore von Kármán and Max Jakob, were forced to flee Europe. This tragic historical event dramatically shifted the world's epicenter of aerospace research and heat transfer from the German Göttingen school to the United States.",
        category: "Historia",
        surname: "",
        law: "",
        highlight: true
    },
    {
        year: 1934,
        title: "Curva de Ebullición de Nukiyama",
        title_en: "Nukiyama Boiling Curve",
        surname: "Nukiyama",
        country: "<img src='https://flagcdn.com/w20/jp.png' alt='Japón' style='vertical-align: text-bottom; margin-right: 4px;'> Japón",
        country_en: "<img src='https://flagcdn.com/w20/jp.png' alt='Japón' style='vertical-align: text-bottom; margin-right: 4px;'> Japan",
        desc: "Shiro Nukiyama publica su monumental estudio sobre la ebullición de agua en alambres de platino y nicromel calentados eléctricamente. Descubre la existencia de un flujo máximo de calor (CHF) y la ebullición de transición, trazando por primera vez la curva completa de ebullición que lleva su nombre y explicando el fenómeno físico del 'burnout'.",
        desc_en: "Shiro Nukiyama publishes his monumental study on the boiling of water in electrically heated platinum and nicromel wires. He discovers the existence of a maximum heat flux (CHF) and transition boiling, tracing for the first time the complete boiling curve that bears his name and explaining the physical phenomenon of 'burnout'.",
        category: "Convección",
        law: "Curva de Nukiyama",
        law_en: "Nukiyama curve",
        image: "nukiyama.png",
        bio: { name: "Shiro Nukiyama", life: "1896 - 1983", country: "Japón" }
    },
    {
        year: 1934,
        title: "Método de Colburn-Hougen",
        title_en: "Colburn-Hougen method",
        surname: "Colburn & Hougen",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> Estados Unidos",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> United States",
        desc: "Allan Colburn y Olaf Hougen publicaron un procedimiento revolucionario para el diseño de condensadores en presencia de un gas incondensable (como aire en vapor de agua). Demostraron que incluso una pequeñísima fracción de gas no condensable se acumula en la interfaz líquido-vapor, ahogando severamente la transferencia de calor. Esto obligó a la ingeniería a abandonar los cálculos simples y considerar gradientes térmicos y de transferencia de masa (difusión) de forma simultánea mediante un balance iterativo de flujos de calor sensible y latente:<br><br>$$ h_g (T_g - T_i) + K_g \\lambda (p_v - p_i) = h_0 (T_i - T_c) $$<br><br><strong>Anecdotario:</strong> El impacto de este artículo de 1934 fue tan abrumador para la industria química que, durante décadas, el <em>'Método Colburn-Hougen'</em> fue temido por los ingenieros de todo el mundo debido a lo tedioso que resultaba realizar el cálculo de prueba y error a mano punto por punto a lo largo del condensador, ¡todo sin computadoras! Este rigor matemático elevó drásticamente la seguridad y eficiencia de las plantas petroquímicas.",
        desc_en: "Allan Colburn and Olaf Hougen published a revolutionary procedure for the design of condensers in the presence of an incondensable gas (such as air in water vapor). They showed that even a tiny fraction of non-condensable gas accumulates at the liquid-vapor interface, severely stifling heat transfer. This forced engineering to abandon simple calculations and consider thermal and mass transfer (diffusion) gradients simultaneously by iteratively balancing sensible and latent heat fluxes: feared by engineers around the world because of how tedious it was to do the point-by-point trial and error calculation by hand along the capacitor, all without computers! This mathematical rigor drastically increased the safety and efficiency of petrochemical plants.", 
        category: "Convección",
        law: "Método Colburn-Hougen",
        law_en: "Colburn-Hougen Method",
    },
    {
        year: 1936,
        title: "Analogía de Chilton-Colburn",
        title_en: "Chilton-Colburn analogy",
        surname: "Chilton & Colburn",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> Estados Unidos",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> United States",
        desc: "Colburn, junto a Thomas Chilton, expandió el trabajo de Reynolds (quien propuso que el calor y el momento se transportan mediante el mismo mecanismo en fluidos turbulentos) hacia fluidos reales con números de Prandtl distintos a 1. En la Universidad de Delaware, introdujeron el célebre <strong>'factor J de Colburn' ($j_H$)</strong>. Esta analogía empírica relacionó de forma práctica y unificada la transferencia de calor, la masa y la fricción del fluido, convirtiéndose en el método estándar para predecir coeficientes de transferencia en tuberías y lechos empacados usando caídas de presión:<br><br>$$ j_H = \\text{St} \\cdot \\text{Pr}^{2/3} = \\frac{f}{2} $$<br><br><strong>Anecdotario:</strong> Colburn fue uno de los ingenieros químicos más brillantes y queridos de su época. Padeció de una grave y dolorosa tuberculosis durante gran parte de su vida adulta. Sin embargo, su enfermedad nunca doblegó su espíritu. Cuando no podía levantarse, trabajaba incansablemente desde su cama de hospital revisando ecuaciones, y mantenía correspondencia constante con sus estudiantes de posgrado en Delaware, a quienes guiaba, enseñaba y apoyaba afectuosamente como si fueran sus propios hijos.",
        desc_en: "Colburn, alongside Thomas Chilton, expanded the work of Reynolds (who proposed that heat and momentum are transported by the same mechanism in turbulent fluids) to real fluids with Prandtl numbers different from 1. At the University of Delaware, they introduced the famous <strong>'Colburn J-factor' ($j_H$)</strong>. This empirical analogy practically and unifiedly related heat transfer, mass, and fluid friction, becoming the standard method for predicting transfer coefficients in pipes and packed beds using pressure drops:<br><br>$$ j_H = \\text{St} \\cdot \\text{Pr}^{2/3} = \\frac{f}{2} $$<br><br><strong>Anecdotal:</strong> Colburn was one of the most brilliant and beloved chemical engineers of his time. He suffered from severe and painful tuberculosis for much of his adult life. However, his illness never broke his spirit. When he couldn't get up, he worked tirelessly from his hospital bed reviewing equations, and maintained constant correspondence with his graduate students in Delaware, whom he guided, taught, and affectionately supported as if they were his own children.",
        category: "Convección",
        law: "Analogía de Chilton-Colburn",
        image: "colburn.png",
        bio: { name: "Allan Philip Colburn", life: "1904 - 1955", country: "Estados Unidos",
        country_en: "USA", }
    },
    {
        year: 1939,
        title: "Von Kármán en EE.UU. (Analogía de Turbulencia)",
        title_en: "Von Kármán in the US (Turbulence Analogy)",
        surname: "von Kármán",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> Estados Unidos",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> United States",
        desc: "Tras establecerse en Caltech, von Kármán formuló su analogía para la transferencia de calor y momento en flujo turbulento. Su visión impulsó el desarrollo aeroespacial de EE.UU.<br><br><strong>Anecdotario:</strong> Fue el principal fundador del JPL (Jet Propulsion Lab). Famoso por ser un conductor despistado, a menudo se perdía y chocaba su coche en el campus de Caltech mientras pensaba en ecuaciones. También fue clave en explicar el colapso del puente Tacoma Narrows (1940) utilizando su teoría sobre la 'calle de vórtices de von Kármán'.",
        desc_en: "After settling at Caltech, von Kármán formulated his analogy for the transfer of heat and momentum in turbulent flow. His vision promoted US aerospace development.<br><br><strong>Anecdotal:</strong> He was the main founder of JPL (Jet Propulsion Lab). Famous for being a distracted driver, he often got lost and crashed his car on the Caltech campus while thinking about equations. He was also instrumental in explaining the collapse of the Tacoma Narrows Bridge (1940) using his 'von Kármán vortex street' theory.",
        category: "Convección",
        law: "Analogía de Turbulencia",
        law_en: "Turbulence Analogy",
        highlight_jpl: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Dr._von_K%C3%A1rm%C3%A1n%2C_posed_in_his_office_chair_%28cropped%29.jpg/330px-Dr._von_K%C3%A1rm%C3%A1n%2C_posed_in_his_office_chair_%28cropped%29.jpg",
        bio: { name: "Theodore von Kármán", life: "1881 - 1963", country: "Hungría / EE.UU." }
    },
    {
        year: 1945,
        title: "Ernst R. G. Eckert y la Convección de Alta Velocidad",
        title_en: "Ernst R. G. Eckert and High Speed ​​Convection",
        surname: "Eckert",
        country: "<img src='https://flagcdn.com/w20/cz.png' alt='República Checa' style='vertical-align: text-bottom; margin-right: 4px;'> República Checa",
        country_en: "<img src='https://flagcdn.com/w20/cz.png' alt='República Checa' style='vertical-align: text-bottom; margin-right: 4px;'> Czech Republic",
        desc: "Científico nacido en Praga que realizó investigaciones cruciales sobre transferencia de calor en cohetes y motores de chorro (turborreactores). Introdujo el método de enfriamiento por película ('film cooling') para proteger álabes de turbinas y el número adimensional que lleva su nombre (Número de Eckert, Ec), relacionando la energía cinética del flujo con la entalpía.<br><br><strong>Anecdotario:</strong> Durante la Segunda Guerra Mundial, el régimen alemán le ordenó trabajar en aerodinámica militar, pero él estaba tan obsesionado con la transferencia de calor que a menudo escondía su verdadera investigación bajo nombres de proyectos aerodinámicos falsos para poder seguir haciendo lo que amaba sin que los militares lo descubrieran.",
        desc_en: "Prague-born scientist who conducted crucial research on heat transfer in rockets and jet engines (turbojets). He introduced the film cooling method to protect turbine blades and the dimensionless number that bears his name (Eckert Number, Ec), relating the kinetic energy of the flow to the enthalpy.<br><br><strong>Anecdotal:</strong> During World War II, the German regime ordered him to work on military aerodynamics, but he was so obsessed with heat transfer that he often hid his true research under names of fake aerodynamic projects so he could continue doing what he loved without the military finding out.",
        category: "Convección",
        law: "Enfriamiento por película (Ec)",
        law_en: "Film cooling (Ec)",
    },
    {
        year: 1947,
        title: "Proyecto Delaware (Método de Bell-Delaware)",
        title_en: "Delaware Project (Bell-Delaware Method)",
        surname: "Bell-Delaware",
        country: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> Estados Unidos",
        country_en: "<img src='https://flagcdn.com/w20/us.png' alt='Estados Unidos' style='vertical-align: text-bottom; margin-right: 4px;'> United States",
        desc: "Auspiciado por la ASME e iniciado por Colburn en Delaware, este enorme proyecto buscó caracterizar los flujos reales en intercambiadores de calor de carcasa y tubos. El trabajo fue publicado formalmente en 1963 por Kenneth Bell, estableciendo el estándar industrial global para predecir coeficientes de transferencia y caídas de presión considerando fugas y bypass.",
        desc_en: "Sponsored by ASME and initiated by Colburn in Delaware, this massive project sought to characterize actual flows in shell-and-tube heat exchangers. The work was formally published in 1963 by Kenneth Bell, establishing the global industry standard for predicting transfer coefficients and pressure drops considering leaks and bypass.",
        category: "Convección",
        law: "Método de Bell-Delaware",
        law_en: "Bell-Delaware method",
        law_descr: "Flujos Reales en Intercambiadores"
    }
];

// Initialize DOM elements when loaded
document.addEventListener("DOMContentLoaded", () => {
    const safeInit = (name, fn) => { 
        try { fn(); } 
        catch(e) { console.warn(`Skipping ${name} due to missing DOM elements:`, e); } 
    };

    safeInit('Timeline', initTopTimeline);
    safeInit('TimelineCards', initTimeline);
    safeInit('Tabs', initTabs);
    safeInit('Fourier', initFourierSimulation);
    safeInit('Planck', initPlanckSimulation);
    safeInit('Maxwell', initMaxwellSimulation);
    safeInit('InvSq', initInvSqSimulation);
    safeInit('Bernoulli', initBernoulliSimulation);
    safeInit('Fin', initFinSimulation);
    safeInit('Prandtl', initPrandtlSimulation);
    safeInit('ViewFactor', initViewFactorSimulation);
    safeInit('Generation', initGenerationSimulation);
    safeInit('MultiLayer', initMultiLayerSimulation);
    safeInit('Newton', initNewtonSimulation);
    safeInit('CondConv', initCondConvSimulation);
    safeInit('Nusselt', initNusseltSimulation);
    safeInit('BoundaryLayer', initBoundaryLayerSimulation);
    safeInit('Resistance', initResistanceSimulation);
    safeInit('Parallel', initParallelSimulation);
    safeInit('Reynolds', initReynoldsSimulation);
    safeInit('NatConv', initNatConvSimulation);
    safeInit('KelvinScale', initKelvinSimulation);
    safeInit('Clausius', initClausiusSimulation);
    safeInit('NavierStokes', initNavierStokesSimulation);
    safeInit('JouleEquivalent', initJouleSimulation);
    safeInit('HerschelSimulation', initHerschelSimulation);
    safeInit('Microchannel', initMicrochannelSimulation);
    safeInit('CpCv', initCpCvSimulation);
    safeInit('DoublePipe', initDoublePipeSimulation);
    safeInit('VortexStreet', initVortexSimulation);
    safeInit('BoilingRegimes', initBoilingSimulation);
    safeInit('Transient', initTransientSimulation);
    safeInit('Insulated', initInsulatedSimulation);
    safeInit('MulticapaCustom', initMulticapaCustomSimulation);
    safeInit('Carnot', initCarnotSimulation);
    safeInit('OttoDiesel', initOttoDieselSimulation);
    safeInit('Pelton', initPeltonSimulation);
    safeInit('Celsius', initCelsiusSimulation);
    safeInit('InternalBL', initInternalBLSimulation);

    // Modal close logic
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-modal');
    const newtonModal = document.getElementById('newton-tribute-modal');
    
    if (modal && closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
    if (newtonModal) {
        newtonModal.addEventListener('click', (e) => {
            if (e.target === newtonModal) {
                newtonModal.classList.remove('show');
            }
        });
    }

    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            document.body.classList.remove('light-theme');
            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }

        themeBtn.addEventListener('click', () => {
            const isLight = document.body.classList.toggle('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            updateAllChartsTheme();
        });
    }

    // Contact Toggle Logic
    const contactBtn = document.getElementById('contact-toggle');
    const contactBox = document.getElementById('contact-box');
    if (contactBtn && contactBox) {
        contactBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (contactBox.style.display === 'none' || contactBox.style.display === '') {
                contactBox.style.display = 'flex';
                contactBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                contactBox.style.display = 'none';
                contactBtn.innerHTML = '<i class="fas fa-envelope"></i>';
            }
        });
        
        // Close contact box when clicking anywhere else
        document.addEventListener('click', (e) => {
            if (!contactBox.contains(e.target) && e.target !== contactBtn && !contactBtn.contains(e.target)) {
                contactBox.style.display = 'none';
                contactBtn.innerHTML = '<i class="fas fa-envelope"></i>';
            }
        });
    }

    // Search and Filter Listeners
    const searchInput = document.getElementById('timeline-search');
    const categorySelect = document.getElementById('timeline-filter-category');
    
    if (searchInput && categorySelect) {
        const handleFilter = () => {
            initTimeline(searchInput.value, categorySelect.value);
        };
        searchInput.addEventListener('input', handleFilter);
        categorySelect.addEventListener('change', handleFilter);
    }

    const sciModal = document.getElementById("scientist-details-modal");
    if (sciModal) {
        sciModal.addEventListener("click", (e) => {
            if (e.target === sciModal) {
                sciModal.classList.remove("show");
            }
        });
    }

    // Sync initial theme for charts after they load
    setTimeout(updateAllChartsTheme, 800);
});

// Global function to open modal
window.openModal = function(idx, event) {
    event.stopPropagation(); // prevent card from activating
    const ev = timelineEvents[idx];
    if (!ev || !ev.image) return;
    
    // Convert Wikipedia thumb URL to full res
    let fullUrl = ev.image;
    if (fullUrl.includes('/thumb/')) {
        fullUrl = fullUrl.replace('/thumb/', '/').split('/').slice(0, -1).join('/');
    }
    
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    modalImg.src = fullUrl;
    
    const caption = document.getElementById('modal-caption');
    if (ev.bio) {
        document.getElementById('modal-bio-name').innerText = ev.bio.name;
        document.getElementById('modal-bio-life').parentNode.style.display = 'block';
        document.getElementById('modal-bio-country').parentNode.style.display = 'block';
        document.getElementById('modal-bio-life').innerText = ev.bio.life;
        document.getElementById('modal-bio-country').innerText = ev.bio.country;
        caption.style.display = 'block';
    } else {
        caption.style.display = 'none';
    }
    
    modal.classList.add('show');
};

window.zoomImage = function(src, title) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    if (!modal || !modalImg) return;
    
    modalImg.src = src;
    const caption = document.getElementById('modal-caption');
    if (title) {
        document.getElementById('modal-bio-name').innerText = title;
        document.getElementById('modal-bio-life').parentNode.style.display = 'none';
        document.getElementById('modal-bio-country').parentNode.style.display = 'none';
        caption.style.display = 'block';
    } else {
        caption.style.display = 'none';
    }
    modal.classList.add('show');
};
    
window.openNewtonLegacy = function(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById('newton-tribute-modal');
    if (modal) modal.classList.add('show');
};

window.closeScientistModal = function() {
    const modal = document.getElementById("scientist-details-modal");
    if (modal) modal.classList.remove("show");
};

window.openScientistModalDirect = function(idx, event) {
    if (event) event.stopPropagation();
    const ev = timelineEvents[idx];
    if (!ev) return;
    
    // Determine tabTarget
    let tabTarget = "";
    if (ev["tab-target"]) tabTarget = ev["tab-target"];
    else if (ev.surname === "Bernoulli") tabTarget = "bernoulli-sim";
    else if (ev.surname === "Reynolds") tabTarget = "reynolds-sim";
    else if (ev.surname === "Celsius") tabTarget = "celsius-sim";
    else if (ev.surname === "Watt") tabTarget = "watt-sim";
    else if (ev.surname === "Navier & Stokes") tabTarget = "ns-sim";
    else if (ev.surname === "Nukiyama") tabTarget = "boiling-sim";
    else if (ev.surname === "von Kármán") tabTarget = "vortex-sim";
    else if (ev.year === 1701) tabTarget = "newton-sim";
    else if (ev.year === 1800) tabTarget = "herschel-sim";
    else if (ev.year === 1822) tabTarget = "fourier-sim";
    else if (ev.year === 1900 || ev.year === 1879) tabTarget = "planck-sim";
    else if (ev.year === 1904) tabTarget = "prandtl-sim";
    else if (ev.year === 1915 || ev.year === 1930) tabTarget = "nusselt-sim";
    else if (ev.year === 1936) tabTarget = "bl-sim";
    else if (ev.year === 1947) tabTarget = "res-sim";
    else if (ev.surname === "Joule") tabTarget = "joule-sim";
    else if (ev.surname === "Kelvin") tabTarget = "kelvin-sim";
    else if (ev.surname === "Clausius") tabTarget = "clausius-sim";
    else if (ev.surname === "Colburn & Hougen" || ev.surname === "Chilton & Colburn" || ev.surname === "Bell-Delaware") tabTarget = "doublepipe-sim";
    else if (ev.surname === "Jakob") tabTarget = "fourier-sim";
    else {
        if (ev.category === "Radiación") tabTarget = "planck-sim";
        else if (ev.category === "Convección") tabTarget = "prandtl-sim";
        else if (ev.category === "Conducción") tabTarget = "fourier-sim";
        else if (ev.category === "Termodinámica") tabTarget = "carnot-sim";
    }

    const modal = document.getElementById("scientist-details-modal");
    const avatar = document.getElementById("mobile-modal-avatar");
    const title = document.getElementById("mobile-modal-title");
    const years = document.getElementById("mobile-modal-years");
    const country = document.getElementById("mobile-modal-country");
    const desc = document.getElementById("mobile-modal-desc");
    const simBtn = document.getElementById("mobile-modal-sim-btn");
    
    if (modal) {
        title.textContent = window.currentLanguage === 'en' ? (ev.title_en || ev.title) : ev.title;
        avatar.src = ev.image || "https://via.placeholder.com/150";
        avatar.style.display = ev.image ? "block" : "none";
        
        const yearLabel = ev.year < 0 ? (window.currentLanguage === 'en' ? `${Math.abs(ev.year)} BC` : `${Math.abs(ev.year)} a.C.`) : ev.year;
        years.textContent = yearLabel;
        
        country.innerHTML = window.currentLanguage === 'en' ? (ev.country_en || ev.country) : ev.country;
        desc.innerHTML = window.currentLanguage === 'en' ? (ev.desc_en || ev.desc) : ev.desc;
        
        if (tabTarget) {
            simBtn.style.display = "inline-flex";
            simBtn.onclick = () => {
                modal.classList.remove("show");
                switchTab(tabTarget, false);
                const infoPanel = document.querySelector(".info-panel");
                if (infoPanel) {
                    infoPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
        } else {
            simBtn.style.display = "none";
        }
        modal.classList.add("show");
    }
};

window.closeNewtonModal = function() {
    const modal = document.getElementById('newton-tribute-modal');
    if (modal) modal.classList.remove('show');
};

window.switchNewtonTab = function(tabId, btn) {
    document.querySelectorAll('.newton-tab-content').forEach(el => el.style.display = 'none');
    const activeContent = document.getElementById(`newton-${tabId}`);
    if (activeContent) activeContent.style.display = 'block';

    document.querySelectorAll('.newton-tab-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
};

window.currentLanguage = 'es';

// Render timeline cards
function initTimeline(searchText = '', selectedCategory = 'all') {
    const container = document.getElementById("timeline");
    if (!container) return;
    container.innerHTML = "";

    const query = searchText.toLowerCase().trim();

    timelineEvents.forEach((ev, idx) => {
        // Apply category and search filters
        const matchesCategory = selectedCategory === 'all' || ev.category === selectedCategory;
        
        const titleVal = (window.currentLanguage === 'en' ? (ev.title_en || ev.title) : ev.title) || "";
        const descVal = (window.currentLanguage === 'en' ? (ev.desc_en || ev.desc) : ev.desc) || "";
        const lawVal = (window.currentLanguage === 'en' ? (ev.law_en || ev.law) : ev.law) || "";
        const countryVal = (window.currentLanguage === 'en' ? (ev.country_en || ev.country) : ev.country) || "";
        const surnameVal = ev.surname || "";
        const yearVal = ev.year !== undefined && ev.year !== null ? ev.year.toString() : "";

        const matchesSearch = !query || 
            titleVal.toLowerCase().includes(query) || 
            surnameVal.toLowerCase().includes(query) || 
            lawVal.toLowerCase().includes(query) || 
            descVal.toLowerCase().includes(query) ||
            yearVal.includes(query);

        if (!matchesCategory || !matchesSearch) return;
        const card = document.createElement("div");
        card.setAttribute("data-index", idx);
        // Maintain active default (Fourier is now idx 12) and add highlight-card if requested
        const activeClass = idx === 12 ? 'active ' : '';
        const highlightClass = ev.highlight ? 'highlight-card ' : '';
        const highlightJplClass = ev.highlight_jpl ? 'highlight-jpl ' : '';
        const isNewton = ev.surname === "Newton";
        const newtonClass = isNewton ? 'newton-special-card ' : '';
        
        card.className = `timeline-card ${activeClass}${highlightClass}${highlightJplClass}${newtonClass}`.trim();
        
        let imageHtml = ev.image ? `<img src="${ev.image}" alt="${titleVal}" class="card-avatar" onclick="window.openModal(${idx}, event)" style="cursor: zoom-in;" title="Ampliar imagen" />` : '';

        let newtonTributeButton = '';
        if (isNewton) {
            const btnText = window.currentLanguage === 'en' ? 'Explore Scientific Legacy' : 'Explorar Legado Científico';
            newtonTributeButton = `
                <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
                    <button class="btn-clear" onclick="window.openNewtonLegacy(event)" style="font-weight: 700; background: linear-gradient(135deg, var(--accent-orange), #ea580c); color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 0.72rem; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(234, 88, 12, 0.25); transition: all 0.2s;"><i class="fas fa-crown"></i> ${btnText}</button>
                </div>
            `;
        }

        const yearLabel = ev.year < 0 ? (window.currentLanguage === 'en' ? `${Math.abs(ev.year)} BC` : `${Math.abs(ev.year)} a.C.`) : ev.year;

        card.innerHTML = `
            <div class="card-header">
                <span class="card-year">${yearLabel}</span>
                <span class="card-country">${countryVal}</span>
            </div>
            <div class="card-content-wrapper" style="display: flex; gap: 1rem; align-items: flex-start; margin-top: 0.5rem;">
                ${imageHtml}
                <div style="flex: 1;">
                    <h3 class="card-title">${titleVal}</h3>
                    <p class="card-desc">${descVal}</p>
                    <div style="margin-top: 6px; display: flex; gap: 6px; flex-wrap: wrap; align-items: center;">
                        <button class="btn-clear" onclick="window.openScientistModalDirect(${idx}, event)" style="font-weight: 600; background: rgba(59, 130, 246, 0.12); color: var(--accent-blue); border: 1px solid rgba(59, 130, 246, 0.25); padding: 4px 8px; border-radius: 4px; font-size: 0.68rem; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; transition: all 0.2s;"><i class="fas fa-info-circle"></i> <span class="lang-es">Ver Detalles</span><span class="lang-en" style="display:none;">View Details</span></button>
                        ${newtonTributeButton}
                    </div>
                </div>
            </div>
        `;
        
        // Determine tab target
        let tabTarget = "";
        if (ev["tab-target"]) tabTarget = ev["tab-target"];
        else if (ev.surname === "Bernoulli") tabTarget = "bernoulli-sim";
        else if (ev.surname === "Reynolds") tabTarget = "reynolds-sim";
        else if (ev.surname === "Celsius") tabTarget = "celsius-sim";
        else if (ev.surname === "Watt") tabTarget = "watt-sim";
        else if (ev.surname === "Navier & Stokes") tabTarget = "ns-sim";
        else if (ev.surname === "Nukiyama") tabTarget = "boiling-sim";
        else if (ev.surname === "von Kármán") tabTarget = "vortex-sim";
        else if (ev.year === 1701) tabTarget = "newton-sim";
        else if (ev.year === 1800) tabTarget = "herschel-sim";
        else if (ev.year === 1822) tabTarget = "fourier-sim";
        else if (ev.year === 1900 || ev.year === 1879) tabTarget = "planck-sim";
        else if (ev.year === 1904) tabTarget = "prandtl-sim";
        else if (ev.year === 1915 || ev.year === 1930) tabTarget = "nusselt-sim";
        else if (ev.year === 1936) tabTarget = "bl-sim";
        else if (ev.year === 1947) tabTarget = "res-sim";
        else if (ev.surname === "Joule") tabTarget = "joule-sim";
        else if (ev.surname === "Kelvin") tabTarget = "kelvin-sim";
        else if (ev.surname === "Clausius") tabTarget = "clausius-sim";
        else if (ev.surname === "Colburn & Hougen" || ev.surname === "Chilton & Colburn" || ev.surname === "Bell-Delaware") tabTarget = "doublepipe-sim";
        else if (ev.surname === "Jakob") tabTarget = "fourier-sim";
        else {
            if (ev.category === "Radiación") tabTarget = "planck-sim";
            else if (ev.category === "Convección") tabTarget = "prandtl-sim";
            else if (ev.category === "Conducción") tabTarget = "fourier-sim";
            else if (ev.category === "Termodinámica") tabTarget = "carnot-sim";
        }
        
        if (tabTarget) card.setAttribute("data-tab-target", tabTarget);

        card.addEventListener("click", () => {
            // Remove active and reset inline styles on all cards
            document.querySelectorAll(".timeline-card").forEach(c => {
                c.classList.remove("active");
                const d = c.querySelector(".card-desc");
                if (d) {
                    d.style.display = "";
                    d.style.webkitLineClamp = "";
                    d.style.lineClamp = "";
                    d.style.overflow = "";
                }
            });
            // Add active and force expand styles on clicked card
            card.classList.add("active");
            const descEl = card.querySelector(".card-desc");
            if (descEl) {
                descEl.style.display = "block";
                descEl.style.webkitLineClamp = "unset";
                descEl.style.lineClamp = "none";
                descEl.style.overflow = "visible";
            }
            if (tabTarget) {
                switchTab(tabTarget, true);
            }

            // Mobile popup modal logic (width <= 1024px)
            if (window.innerWidth <= 1024) {
                window.openScientistModalDirect(idx);
            }
        });
        
        container.appendChild(card);
    });

    // Special Relationships Card at the end
    if (!query && selectedCategory === 'all') {
        const relationsCard = document.createElement("div");
        relationsCard.className = "timeline-card";
        relationsCard.style.background = "linear-gradient(145deg, rgba(30,27,75,0.9), rgba(49,46,129,0.95))";
        relationsCard.style.border = "1px solid rgba(139, 92, 246, 0.4)";
        relationsCard.style.boxShadow = "0 8px 30px rgba(139, 92, 246, 0.2)";
        
        if (window.currentLanguage === 'en') {
            relationsCard.innerHTML = `
                <div class="card-header" style="justify-content: center; border-bottom: 1px solid rgba(139, 92, 246, 0.2); padding-bottom: 10px;">
                    <span class="card-year" style="color: #c4b5fd; background: rgba(139, 92, 246, 0.2); font-size: 1rem; padding: 6px 14px;"><i class="fas fa-network-wired"></i> Historical Connections Network</span>
                </div>
                <div style="margin-top: 15px; font-size: 0.9rem; color: #e2e8f0; line-height: 1.6;">
                    <p style="margin-bottom: 15px; font-style: italic; opacity: 0.9;">Science was not built in isolation. Behind the great equations, there are deep human relationships, intense rivalries, and unbreakable legacies from master to pupil:</p>
                    <ul style="padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 14px;">
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                            <strong><i class="fas fa-skull-crossbones" style="color: #ef4444; margin-right: 6px;"></i> Newton vs Hooke (Total War) [~1670 - 1703]:</strong> The relationship between Isaac Newton and Robert Hooke is one of the most toxic feuds in scientific history. Hooke repeatedly accused Newton of plagiarizing his work on optics and gravity (the inverse-square law). Newton's contempt was so visceral that he refused to publish his masterpiece (<em>Optics</em>) until Hooke died. It is said that upon assuming the presidency of the Royal Society after his rival's death, Newton intentionally "lost" the only existing portrait of Hooke, condemning him to be faceless in history books. In fact, Newton's famous "humble" quote: <em>"If I have seen further, it is by standing on the shoulders of giants"</em>, is today considered a veiled insult mocking Hooke's short stature and hunched back.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #fbbf24;">
                            <strong><i class="fas fa-bolt" style="color: #fbbf24; margin-right: 6px;"></i> The Newton - Bernoulli Rivalry [1696]:</strong> Isaac Newton and Johann Bernoulli fought a fierce intellectual duel. Bernoulli challenged Europe's mathematicians to solve the brachistochrone problem (the curve of fastest descent). Newton solved it in a single night anonymously. Upon reading it, Bernoulli instantly recognized his archrival, saying: <em>"I recognize the lion by his claw"</em>.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f97316;">
                            <strong><i class="fas fa-fire" style="color: #f97316; margin-right: 6px;"></i> The Bernoulli Family Civil War [1738]:</strong> The Bernoulli family produced brilliant but extremely jealous mathematicians. Johann Bernoulli competed to the death with his older brother Jacob, even stealing his ideas and publicly celebrating his death. However, his worst act was against his own son, Daniel Bernoulli. When Daniel published his revolutionary work <em>Hydrodynamica</em> (1738), Johann, consumed by envy, published his own book (<em>Hydraulica</em>), stole the ideas, and falsified the publication date to 1732 to make it look like his son had plagiarized him! He ended up throwing Daniel out of his own house.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #14b8a6;">
                            <strong><i class="fas fa-gavel" style="color: #14b8a6; margin-right: 6px;"></i> Fourier's Rebellion against Lagrange [1807]:</strong> When Joseph Fourier first presented (in 1807) his bold theory on heat conduction, the old guard of French mathematics attacked him. Joseph-Louis Lagrange and Pierre-Simon Laplace flatly rejected his use of "trigonometric series" (today Fourier Series), arguing they lacked rigor and could not represent functions with corners. Despite the initial humiliation, Fourier proved to be correct, permanently revolutionizing applied mathematics. Interestingly, years later, it was his loyal protege and student, Claude-Louis Navier, who defended and posthumously published Fourier's final work.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #34d399;">
                            <strong><i class="fas fa-handshake" style="color: #34d399; margin-right: 6px;"></i> Carnot, Clapeyron and Clausius [1824 - 1850]:</strong> Sadi Carnot died very young of cholera and his brilliant masterpiece on heat engines went completely unnoticed. It was "rescued" from oblivion by Émile Clapeyron, who translated it into analytical language. Years later, a brilliant Rudolf Clausius read Clapeyron's work and unified the ideas to formulate the Second Law of Thermodynamics.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #60a5fa;">
                            <strong><i class="fas fa-chalkboard-teacher" style="color: #60a5fa; margin-right: 6px;"></i> Josef Stefan and Ludwig Boltzmann [1879 - 1884]:</strong> One of the most beautiful and productive mentor-pupil relationships in history. Boltzmann was Stefan's student at the University of Vienna. Together, they achieved the monumental milestone of transforming his teacher's empirical radiation law (Stefan's Law) into a law derived purely from the statistical thermodynamics (Stefan-Boltzmann Law).
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #a78bfa;">
                            <strong><i class="fas fa-water" style="color: #a78bfa; margin-right: 6px;"></i> The German Foundation (Prandtl and Nusselt) [1904 - 1915]:</strong> Wilhelm Nusselt was not a direct pupil of Ludwig Prandtl, but his monumental work on dimensional analysis of heat transfer (1915) mounted directly on the shoulders of Prandtl's newly born <em>Boundary Layer Theory</em> (1904). Together, though from different universities, they formed the "golden age" of German fluid mechanics.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f87171;">
                            <strong><i class="fas fa-link" style="color: #f87171; margin-right: 6px;"></i> From Germany to Berkeley (Nusselt to Dittus-Boelter) [1930]:</strong> After Nusselt established the mathematical relation $Nu = f(Re, Pr)$, the baton crossed the ocean to the University of California, Berkeley. There, Professor Llewellyn M. K. Boelter and his student F. W. Dittus (1930) took Nusselt's theoretical framework and, after extracting mountains of experimental data, created the famous empirical correlation $Nu = 0.023 Re^{0.8} Pr^n$ which continues to torture and save engineering students worldwide.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f472b6;">
                            <strong><i class="fas fa-users" style="color: #f472b6; margin-right: 6px;"></i> Colburn and the "School" of Convection [1930s]:</strong> Allan Colburn (a devoted teacher) and his team at the University of Delaware created a true school of thought that trained dozens of the best engineers of the 20th century. He kept correspondence from his hospital bed with his students, leaving the convection methods that still operate the world's refineries today.
                        </li>
                    </ul>
                </div>
            `;
        } else {
            relationsCard.innerHTML = `
                <div class="card-header" style="justify-content: center; border-bottom: 1px solid rgba(139, 92, 246, 0.2); padding-bottom: 10px;">
                    <span class="card-year" style="color: #c4b5fd; background: rgba(139, 92, 246, 0.2); font-size: 1rem; padding: 6px 14px;"><i class="fas fa-network-wired"></i> Red de Conexiones Históricas</span>
                </div>
                <div style="margin-top: 15px; font-size: 0.9rem; color: #e2e8f0; line-height: 1.6;">
                    <p style="margin-bottom: 15px; font-style: italic; opacity: 0.9;">La ciencia no se construyó en aislamiento. Detrás de las grandes ecuaciones, existen relaciones humanas profundas, rivalidades intensas y legados inquebrantables de maestro a pupilo:</p>
                    <ul style="padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 14px;">
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #ef4444;">
                            <strong><i class="fas fa-skull-crossbones" style="color: #ef4444; margin-right: 6px;"></i> Newton contra Hooke (La Guerra Total) [~1670 - 1703]:</strong> La relación entre Isaac Newton y Robert Hooke es una de las enemistades más tóxicas de la historia de la ciencia. Hooke acusó repetidamente a Newton de plagiar su trabajo sobre la óptica y sobre la gravedad (la ley de la inversa del cuadrado). El desprecio de Newton era tan visceral que se negó a publicar su obra cumbre (<em>Óptica</em>) hasta que Hooke murió. Se cuenta que, al asumir la presidencia de la Royal Society tras la muerte de su rival, Newton "extravió" intencionalmente el único retrato que existía de Hooke, condenándolo a no tener rostro en los libros de historia. De hecho, la famosa y "humilde" frase de Newton: <em>"Si he visto más lejos, es poniéndome sobre hombros de gigantes"</em>, se considera hoy un insulto encubierto burlándose de la baja estatura y la espalda encorvada de Hooke.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #fbbf24;">
                            <strong><i class="fas fa-bolt" style="color: #fbbf24; margin-right: 6px;"></i> La Rivalidad Newton - Bernoulli [1696]:</strong> Isaac Newton y Johann Bernoulli mantuvieron un fiero duelo intelectual. Bernoulli retó a los matemáticos de Europa a resolver el problema de la braquistócrona (la curva de descenso más rápido). Newton lo resolvió en una sola noche de forma anónima. Al leerlo, Bernoulli reconoció al instante a su archirrival diciendo: <em>"Reconozco al león por su garra"</em>.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f97316;">
                            <strong><i class="fas fa-fire" style="color: #f97316; margin-right: 6px;"></i> La Guerra Civil de los Bernoulli [1738]:</strong> La familia Bernoulli produjo matemáticos brillantes, pero extremadamente celosos. Johann Bernoulli compitió a muerte con su hermano mayor Jacob, llegando a robarle ideas y celebrando públicamente su muerte. Sin embargo, su peor acto fue contra su propio hijo, Daniel Bernoulli. Cuando Daniel publicó su revolucionaria obra <em>Hydrodynamica</em> (1738), Johann, consumido por la envidia ante el éxito de su hijo, publicó su propio libro (<em>Hydraulica</em>), le robó las ideas, ¡y falsificó la fecha de publicación al año 1732 para que pareciera que su hijo le había plagiado a él! Terminó expulsando a Daniel de su propia casa.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #14b8a6;">
                            <strong><i class="fas fa-gavel" style="color: #14b8a6; margin-right: 6px;"></i> La Rebelión de Fourier frente a Lagrange [1807]:</strong> Cuando Joseph Fourier presentó por primera vez (en 1807) su audaz teoría sobre la conducción del calor, la vieja guardia de las matemáticas francesas se le echó encima. Joseph-Louis Lagrange y Pierre-Simon Laplace rechazaron tajantemente su uso de "series trigonométricas" (hoy Series de Fourier), argumentando que carecían de rigor y no podían representar funciones con esquinas. A pesar de la humillación inicial, Fourier demostró estar en lo correcto, revolucionando para siempre las matemáticas aplicadas. Curiosamente, años más tarde, fue su leal protegido y alumno, Claude-Louis Navier, quien defendió y publicó póstumamente el trabajo final de Fourier.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #34d399;">
                            <strong><i class="fas fa-handshake" style="color: #34d399; margin-right: 6px;"></i> Carnot, Clapeyron y Clausius [1824 - 1850]:</strong> Sadi Carnot murió muy joven de cólera y su genial obra maestra sobre los motores térmicos pasó totalmente desapercibida. Fue "rescatada" del olvido por Émile Clapeyron, quien la tradujo al lenguaje analítico. Años después, un brillante Rudolf Clausius leyó el trabajo de Clapeyron y unificó las ideas para formular la Segunda Ley de la Termodinámica.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #60a5fa;">
                            <strong><i class="fas fa-chalkboard-teacher" style="color: #60a5fa; margin-right: 6px;"></i> Josef Stefan y Ludwig Boltzmann [1879 - 1884]:</strong> Una de las relaciones maestro-pupilo más hermosas y prolíficas de la historia. Boltzmann fue estudiante de Stefan en la Universidad de Viena. Juntos, lograron el hito monumental de transformar la ley empírica de radiación de su maestro (Ley de Stefan) en una ley deducida puramente desde las entrañas matemáticas de la termodinámica estadística (Ley de Stefan-Boltzmann).
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #a78bfa;">
                            <strong><i class="fas fa-water" style="color: #a78bfa; margin-right: 6px;"></i> La Fundación Alemana (Prandtl y Nusselt) [1904 - 1915]:</strong> Wilhelm Nusselt no fue pupilo directo de Ludwig Prandtl, pero su monumental trabajo en el análisis dimensional de la transferencia de calor (1915) se montó directamente sobre los hombros de la recién nacida <em>Teoría de la Capa Límite</em> de Prandtl (1904). Juntos, aunque desde distintas universidades, formaron la "era dorada" de la mecánica de fluidos alemana.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f87171;">
                            <strong><i class="fas fa-link" style="color: #f87171; margin-right: 6px;"></i> De Alemania a Berkeley (Nusselt a Dittus-Boelter) [1930]:</strong> Tras establecer Nusselt la relación matemática $Nu = f(Re, Pr)$, el testigo cruzó el océano hasta la Universidad de California, Berkeley. Allí, el profesor Llewellyn M. K. Boelter y su estudiante F. W. Dittus (1930) tomaron el armazón teórico de Nusselt y, tras exprimir montañas de datos experimentales, crearon la famosísima correlación empírica $Nu = 0.023 Re^{0.8} Pr^n$ que sigue torturando y salvando a estudiantes de ingeniería en todo el mundo.
                        </li>
                        <li style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border-left: 3px solid #f472b6;">
                            <strong><i class="fas fa-users" style="color: #f472b6; margin-right: 6px;"></i> Colburn y la "Escuela" de la Convección [Años 1930s]:</strong> Allan Colburn (un maestro devoto) y su equipo en la Universidad de Delaware crearon una verdadera escuela de pensamiento que entrenó a docenas de los mejores ingenieros del siglo XX. Mantenía correspondencia desde su cama de hospital con sus estudiantes, legando los métodos de convección que aún operan las refinerías del mundo hoy.
                        </li>
                    </ul>
                </div>
            `;
        }
        container.appendChild(relationsCard);
    }

    // Defer MathJax typesetting to allow script to load
    setTimeout(() => {
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise().catch((err) => console.log('MathJax error: ', err));
        }
    }, 1000);
}

// Render top horizontal timeline
function initTopTimeline() {
    const container = document.getElementById("top-timeline");
    if (!container) return;
    
    container.innerHTML = "";
    
    timelineEvents.forEach((ev, idx) => {
        if (!ev.surname) return; // Only show main events with surname
        
        const chip = document.createElement("div");
        chip.className = "timeline-chip";
        
        const lawVal = (window.currentLanguage === 'en' ? (ev.law_en || ev.law) : ev.law);
        const yearLabel = ev.year < 0 ? (window.currentLanguage === 'en' ? `${Math.abs(ev.year)} BC` : `${Math.abs(ev.year)} a.C.`) : ev.year;
        chip.innerHTML = `
            <div class="chip-year">${yearLabel}</div>
            <div class="chip-name">${ev.surname}</div>
            <div class="chip-law">${lawVal}</div>
        `;
        
        chip.addEventListener("click", () => {
            // Find corresponding vertical card by data-index and click it
            const targetCard = document.querySelector(`.timeline-card[data-index="${idx}"]`);
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetCard.click();
            }
        });
        
        container.appendChild(chip);
    });
}

// Simple tab navigation system
function initTabs() {
    const tabButtons = document.querySelectorAll(".tab-btn");
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-target");
            switchTab(targetId);
        });
    });
}

function switchTab(tabId, disableTimelineSync = false) {
    // Update buttons active status
    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.getAttribute("data-target") === tabId) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Update pane active status
    document.querySelectorAll(".tab-pane").forEach(pane => {
        if (pane.getAttribute("id") === tabId) {
            pane.classList.add("active");
        } else {
            pane.classList.remove("active");
        }
    });

    // Sync timeline card active status and scroll into view only if not clicked from timeline
    if (!disableTimelineSync) {
        const primaryYears = {
            "carnot-sim": "1824",
            "fourier-sim": "1822",
            "planck-sim": "1900",
            "nusselt-sim": "1915",
            "prandtl-sim": "1904",
            "newton-sim": "1701",
            "boiling-sim": "1934",
            "bl-sim": "1908",
            "res-sim": "1947",
            "ns-sim": "1822", 
            "celsius-sim": "1742",
            "bernoulli-sim": "1738",
            "herschel-sim": "1800",
            "joule-sim": "1843",
            "kelvin-sim": "1848",
            "clausius-sim": "1850",
            "doublepipe-sim": "1934"
        };
        
        const targetYear = primaryYears[tabId];
        const timelineCards = document.querySelectorAll(".timeline-card");
        
        timelineCards.forEach(card => {
            card.classList.remove("active");
            const d = card.querySelector(".card-desc");
            if (d) {
                d.style.display = "";
                d.style.webkitLineClamp = "";
                d.style.lineClamp = "";
                d.style.overflow = "";
            }
            if (targetYear && card.querySelector('.card-year') && card.querySelector('.card-year').textContent.includes(targetYear)) {
                card.classList.add("active");
                if (d) {
                    d.style.display = "block";
                    d.style.webkitLineClamp = "unset";
                    d.style.lineClamp = "none";
                    d.style.overflow = "visible";
                }
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // Trigger window resize to adjust canvas dimensions when tab becomes visible
    setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
    }, 50);

    // FIX v2: Re-render MathJax equations for the newly visible tab pane
    setTimeout(() => {
        if (window.MathJax && MathJax.typesetPromise) {
            const activePane = document.querySelector('.tab-pane.active');
            if (activePane) {
                MathJax.typesetPromise([activePane]).catch(function(err) {
                    console.warn('MathJax tab typeset error:', err);
                });
            }
        }
    }, 100);
}


/* =========================================================================
   FOURIER CONDUCTION SIMULATOR
   ========================================================================= */
let fourierAnimationId = null;
let fourierChart = null;
let fourierT1 = 100;
let fourierT2 = 20;
let fourierK = 205;
let fourierL = 0.1;
let fourierQ = 1000;

function initFourierSimulation() {
    const sliderT1 = document.getElementById("fourier-t1");
    const sliderT2 = document.getElementById("fourier-t2");
    const sliderK = document.getElementById("fourier-k");
    const sliderL = document.getElementById("fourier-l"); // L acts as thickness for plane
    const sliderR2 = document.getElementById("fourier-r2");
    const sliderQin = document.getElementById("fourier-q-in");
    const sliderR1 = document.getElementById("fourier-r1");
    const sliderAH = document.getElementById("fourier-ah");
    const geomSelect = document.getElementById("fourier-geom");
    
    const modeSelect = document.getElementById("fourier-mode-select");
    const t2Container = document.getElementById("fourier-t2-container");
    const qInContainer = document.getElementById("fourier-q-in-container");
    const r1Container = document.getElementById("fourier-r1-container");
    const lContainer = document.getElementById("fourier-l-container");
    const r2Container = document.getElementById("fourier-r2-container");
    const ahContainer = document.getElementById("fourier-ah-container");
    
    const labelAH = document.getElementById("fourier-ah-label");

    const valT1 = document.getElementById("fourier-t1-val");
    const valT2 = document.getElementById("fourier-t2-val");
    const valK = document.getElementById("fourier-k-val");
    const valQin = document.getElementById("fourier-q-in-val");
    const valR = document.getElementById("fourier-r-val");
    const valR1 = document.getElementById("fourier-r1-val");
    const valR2 = document.getElementById("fourier-r2-val");
    const valRlabel = document.getElementById("fourier-r-label");
    const valCalcL = document.getElementById("fourier-calc-l-val");
    
    const geomStats = document.getElementById("fourier-geom-stats");
    const valA1 = document.getElementById("fourier-a1-val");
    const valA2 = document.getElementById("fourier-a2-val");
    const valVol = document.getElementById("fourier-vol-val");
    
    const resultLabel = document.getElementById("fourier-result-label");
    const resultVal = document.getElementById("fourier-result-val");

    let currentMode = "calc-q";
    const canvas = document.getElementById("fourierChart");
    const ctx = canvas.getContext("2d");
    
    if (fourierAnimationId) {
        cancelAnimationFrame(fourierAnimationId);
    }

    let particles = [];
    
    function initParticles() {
        particles = [];
        const numParticles = 80;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random(), 
                y: Math.random(), 
                size: 2 + Math.random() * 2,
                angle: Math.random() * Math.PI * 2,
                r_norm: Math.random()
            });
        }
    }
    initParticles();

    const graphCanvas = document.getElementById("fourierGraph");
    const graphCtx = graphCanvas.getContext("2d");
    
    fourierChart = new Chart(graphCtx, {
        type: 'line',
        data: {
            labels: [0, fourierL],
            datasets: [{
                label: 'Perfil de Temperatura T(x) o T(r)',
                data: [fourierT1, fourierT2],
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                borderWidth: 3,
                pointBackgroundColor: '#f59e0b',
                pointRadius: 0,
                fill: true,
                tension: 0
            }]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    title: { display: true, text: 'Posición x/r (m)', color: '#94a3b8' },
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e2e8f0' } }
            }
        }
    });
    
    function formatValue(value, type) {
        if (type === "q") {
            if (!isFinite(value)) {
                return (value < 0 ? "-" : "") + "&infin; W";
            }
            const absQ = Math.abs(value);
            if (absQ >= 1e6) {
                return `${(value / 1e6).toFixed(2)} MW`;
            } else if (absQ >= 1000) {
                return `${(value / 1000).toFixed(2)} kW`;
            } else {
                return `${value.toFixed(2)} W`;
            }
        } else if (type === "t") {
            return `${value.toFixed(2)} &deg;C`;
        }
    }

    function getColorForTemp(T) {
        const normalized = Math.max(0, Math.min(1, T / 500));
        const r = Math.round(normalized * 255);
        const b = Math.round((1 - normalized) * 255);
        return `rgb(${r}, 50, ${b})`;
    }

    function updateGeometryUI() {
        const geom = geomSelect.value;
        const formulaDiv = document.getElementById("fourier-analytical-formula");
        if (geom === "plane") {
            r1Container.style.display = "none";
            r2Container.style.display = "none";
            lContainer.style.display = "block";
            ahContainer.style.display = "block";
            if (document.getElementById("fourier-l-val")) document.getElementById("fourier-l-val").textContent = sliderL.value;
            if (document.getElementById("fourier-ah-val")) document.getElementById("fourier-ah-val").textContent = sliderAH.value;
            labelAH.innerHTML = `Área transversal (A): <span id="fourier-ah-val">${sliderAH.value}</span> m&sup2;`;
            if (geomStats) geomStats.style.display = "none";
            if (formulaDiv) formulaDiv.innerHTML = "\\[ T(x) = T_1 - (T_1 - T_2) \\frac{x}{L} \\]";
        } else if (geom === "cylinder") {
            r1Container.style.display = "block";
            r2Container.style.display = "block";
            lContainer.style.display = "none";
            ahContainer.style.display = "block";
            labelAH.innerHTML = `Longitud cilindro (H): <span id="fourier-ah-val">${sliderAH.value}</span> m`;
            if (geomStats) geomStats.style.display = "flex";
            if (formulaDiv) formulaDiv.innerHTML = "\\[ T(r) = T_1 - (T_1 - T_2) \\frac{\\ln(r/r_1)}{\\ln(r_2/r_1)} \\]";
        } else if (geom === "sphere") {
            r1Container.style.display = "block";
            r2Container.style.display = "block";
            lContainer.style.display = "none";
            ahContainer.style.display = "none";
            if (geomStats) geomStats.style.display = "flex";
            if (formulaDiv) formulaDiv.innerHTML = "\\[ T(r) = T_1 - (T_1 - T_2) \\frac{1/r_1 - 1/r}{1/r_1 - 1/r_2} \\]";
        }
        
        if (window.MathJax && typeof window.MathJax.typesetPromise === 'function' && formulaDiv) {
            MathJax.typesetPromise([formulaDiv]).catch(function (err) {
                console.log(err.message);
            });
        }
    }

    function updateSimulation() {
        fourierT1 = parseFloat(sliderT1.value);
        fourierK = parseFloat(sliderK.value);
        const geom = geomSelect ? geomSelect.value : "plane";
        
        const r1 = sliderR1 ? parseFloat(sliderR1.value) : 0.05;
        let r2 = sliderR2 ? parseFloat(sliderR2.value) : 0.15;
        
        // Prevent r2 from being smaller than r1
        if (geom !== "plane" && r2 < r1) {
            r2 = r1;
            if (sliderR2) sliderR2.value = r2;
        }
        
        if (geom === "plane") {
            fourierL = parseFloat(sliderL.value);
        } else {
            fourierL = r2 - r1;
        }

        const AH = sliderAH ? parseFloat(sliderAH.value) : 1.0;
        
        valT1.textContent = fourierT1;
        valK.textContent = fourierK;
        
        if(document.getElementById("fourier-l-val")) document.getElementById("fourier-l-val").textContent = fourierL.toFixed(2);
        if(valR1) valR1.textContent = r1.toFixed(2);
        if(valR2) valR2.textContent = r2.toFixed(2);
        if(document.getElementById("fourier-ah-val")) document.getElementById("fourier-ah-val").textContent = AH.toFixed(2);
        if(valCalcL) valCalcL.textContent = fourierL.toFixed(3) + " m";

        let R_cond = 0;
        const isEn = (window.currentLanguage === 'en');
        
        if (geom === "plane") {
            R_cond = fourierL / (fourierK * AH);
            valRlabel.innerHTML = isEn ? "Thermal Resistance (R<sub>t</sub> = L/kA):" : "Resistencia Térmica (R<sub>t</sub> = L/kA):";
        } else if (geom === "cylinder") {
            if (fourierL === 0) {
                R_cond = 0;
            } else {
                R_cond = Math.log(r2 / r1) / (2 * Math.PI * fourierK * AH);
            }
            valRlabel.innerHTML = isEn ? "Thermal Resistance (R<sub>t</sub> = ln(r₂/r₁)/(2πkH)):" : "Resistencia Térmica (R<sub>t</sub> = ln(r₂/r₁)/(2πkH)):";
            
            if (valA1 && valA2 && valVol) {
                document.getElementById("fourier-a1-label").innerHTML = isEn ? "Internal Area (A<sub>1</sub> = 2&pi;r<sub>1</sub>H):" : "Área Interna (A<sub>1</sub> = 2&pi;r<sub>1</sub>H):";
                document.getElementById("fourier-a2-label").innerHTML = isEn ? "External Area (A<sub>2</sub> = 2&pi;r<sub>2</sub>H):" : "Área Externa (A<sub>2</sub> = 2&pi;r<sub>2</sub>H):";
                document.getElementById("fourier-vol-label").innerHTML = isEn ? "Volume (V = &pi;(r<sub>2</sub>&sup2;-r<sub>1</sub>&sup2;)H):" : "Volumen (V = &pi;(r<sub>2</sub>&sup2;-r<sub>1</sub>&sup2;)H):";
                const a1 = 2 * Math.PI * r1 * AH;
                const a2 = 2 * Math.PI * r2 * AH;
                const v = Math.PI * (r2*r2 - r1*r1) * AH;
                valA1.innerHTML = `${a1.toFixed(3)} m&sup2;`;
                valA2.innerHTML = `${a2.toFixed(3)} m&sup2;`;
                valVol.innerHTML = `${v.toFixed(4)} m&sup3;`;
            }
        } else if (geom === "sphere") {
            if (fourierL === 0) {
                R_cond = 0;
            } else {
                R_cond = (r2 - r1) / (4 * Math.PI * fourierK * r1 * r2);
            }
            valRlabel.innerHTML = isEn ? "Thermal Resistance (R<sub>t</sub> = (r₂-r₁)/(4πkr₁r₂)):" : "Resistencia Térmica (R<sub>t</sub> = (r₂-r₁)/(4πkr₁r₂)):";
            
            if (valA1 && valA2 && valVol) {
                document.getElementById("fourier-a1-label").innerHTML = isEn ? "Internal Area (A<sub>1</sub> = 4&pi;r<sub>1</sub>&sup2;):" : "Área Interna (A<sub>1</sub> = 4&pi;r<sub>1</sub>&sup2;):";
                document.getElementById("fourier-a2-label").innerHTML = isEn ? "External Area (A<sub>2</sub> = 4&pi;r<sub>2</sub>&sup2;):" : "Área Externa (A<sub>2</sub> = 4&pi;r<sub>2</sub>&sup2;):";
                document.getElementById("fourier-vol-label").innerHTML = isEn ? "Volume (V = &#8308;/&#8323;&pi;(r<sub>2</sub>&sup3;-r<sub>1</sub>&sup3;)):" : "Volumen (V = &#8308;/&#8323;&pi;(r<sub>2</sub>&sup3;-r<sub>1</sub>&sup3;)):";
                const a1 = 4 * Math.PI * r1 * r1;
                const a2 = 4 * Math.PI * r2 * r2;
                const v = (4/3) * Math.PI * (Math.pow(r2, 3) - Math.pow(r1, 3));
                valA1.innerHTML = `${a1.toFixed(3)} m&sup2;`;
                valA2.innerHTML = `${a2.toFixed(3)} m&sup2;`;
                valVol.innerHTML = `${v.toFixed(4)} m&sup3;`;
            }
        }
 
        if (valR) {
            valR.textContent = R_cond.toFixed(5) + " K/W";
        }
 
        let absoluteZeroReached = false;
 
        if (currentMode === "calc-q") {
            fourierT2 = parseFloat(sliderT2.value);
            valT2.textContent = fourierT2;
            
            if (R_cond === 0) {
                if (fourierT1 === fourierT2) fourierQ = 0;
                else fourierQ = (fourierT1 > fourierT2) ? Infinity : -Infinity;
            } else {
                fourierQ = (fourierT1 - fourierT2) / R_cond;
            }
            
            resultLabel.innerHTML = isEn ? "Heat transfer rate (q):" : "Tasa de transferencia (q):";
            resultVal.innerHTML = formatValue(fourierQ, "q");
        } else {
            const qIn_kW = parseFloat(sliderQin.value);
            valQin.textContent = qIn_kW;
            let tempQ = qIn_kW * 1000;
            
            let computedT2 = fourierT1 - (tempQ * R_cond);
            
            if (computedT2 <= -273.15) {
                fourierT2 = -273.15;
                absoluteZeroReached = true;
                if (R_cond === 0) {
                    fourierQ = (fourierT1 === fourierT2) ? 0 : ((fourierT1 > fourierT2) ? Infinity : -Infinity);
                } else {
                    fourierQ = (fourierT1 - fourierT2) / R_cond;
                }
            } else {
                fourierT2 = computedT2;
                fourierQ = tempQ;
            }
            
            resultLabel.innerHTML = isEn ? "Temperature T<sub>2</sub> (Outer):" : "Temperatura T<sub>2</sub> (Externa):";
            resultVal.innerHTML = formatValue(fourierT2, "t");
        }

        const warningEl = document.getElementById("fourier-limit-warning");
        if (warningEl) {
            warningEl.style.display = absoluteZeroReached ? "block" : "none";
        }

        let minY = Math.min(0, fourierT1, fourierT2) - 10;
        let maxY = Math.max(500, fourierT1, fourierT2) + 10;
        fourierChart.options.scales.y.min = minY < 0 ? minY : 0;
        fourierChart.options.scales.y.max = maxY;

        let points_x = [];
        let points_y = [];
        const steps = 20;
        
        if (geom === "plane") {
            for(let i=0; i<=steps; i++){
                let f = i/steps;
                points_x.push(fourierL * f);
                points_y.push(fourierT1 - f * (fourierT1 - fourierT2));
            }
        } else if (geom === "cylinder") {
            if (fourierL === 0) {
                points_x.push(r1); points_y.push(fourierT1);
                points_x.push(r1); points_y.push(fourierT2);
            } else {
                for(let i=0; i<=steps; i++){
                    let f = i/steps;
                    let r = r1 + f * fourierL;
                    points_x.push(r);
                    let Tr = fourierT1 - fourierQ * Math.log(r/r1) / (2*Math.PI*fourierK*AH);
                    if (!isFinite(Tr)) Tr = fourierT1; // fallback if infinite flow
                    points_y.push(Tr);
                }
            }
        } else if (geom === "sphere") {
            if (fourierL === 0) {
                points_x.push(r1); points_y.push(fourierT1);
                points_x.push(r1); points_y.push(fourierT2);
            } else {
                for(let i=0; i<=steps; i++){
                    let f = i/steps;
                    let r = r1 + f * fourierL;
                    points_x.push(r);
                    let Tr = fourierT1 - fourierQ * (r - r1) / (4*Math.PI*fourierK*r1*r);
                    if (!isFinite(Tr)) Tr = fourierT1;
                    points_y.push(Tr);
                }
            }
        }

        fourierChart.data.labels = points_x.map(x => x.toFixed(3));
        fourierChart.data.datasets[0].data = points_y;
        
        const color = (fourierT1 >= fourierT2) ? '#ef4444' : '#3b82f6';
        fourierChart.data.datasets[0].borderColor = color;
        fourierChart.data.datasets[0].pointBackgroundColor = color;
        fourierChart.data.datasets[0].backgroundColor = (fourierT1 >= fourierT2) ? 'rgba(239, 68, 68, 0.15)' : 'rgba(59, 130, 246, 0.15)';

        fourierChart.update('none');
    }

    function draw() {
        const parent = canvas.parentElement;
        if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const w = canvas.width;
        const h = canvas.height;
        const geom = geomSelect ? geomSelect.value : "plane";
        
        const absQ = Math.abs(fourierQ);
        const direction = Math.sign(fourierQ);
        
        let speedMultiplier = 0;
        if (isFinite(absQ)) {
            speedMultiplier = direction * Math.sqrt(absQ) * 0.00015;
        } else {
            speedMultiplier = direction * 0.02; // max speed for infinity
        }
        
        const maxSpeed = 0.02;
        if (speedMultiplier > maxSpeed) speedMultiplier = maxSpeed;
        if (speedMultiplier < -maxSpeed) speedMultiplier = -maxSpeed;
        const hasActiveFlow = Math.abs(fourierT1 - fourierT2) > 0.5 && fourierL > 0;

        if (geom === "plane") {
            const minWallWidth = w * 0.1;
            const maxWallWidth = w * 0.7;
            const wallWidth = fourierL === 0 ? 2 : minWallWidth + (fourierL - 0.01) / (1.0 - 0.01) * (maxWallWidth - minWallWidth);
            const wallLeft = (w - wallWidth) / 2;
            const wallRight = wallLeft + wallWidth;
            const wallTop = h * 0.15;
            const wallHeight = h * 0.7;

            const wallGrad = ctx.createLinearGradient(wallLeft, 0, wallRight, 0);
            wallGrad.addColorStop(0, getColorForTemp(fourierT1));
            wallGrad.addColorStop(1, getColorForTemp(fourierT2));

            ctx.fillStyle = wallGrad;
            ctx.fillRect(wallLeft, wallTop, wallWidth, wallHeight);
            ctx.strokeStyle = "rgba(255,255,255,0.3)";
            ctx.lineWidth = 2;
            ctx.strokeRect(wallLeft, wallTop, wallWidth, wallHeight);

            ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
            particles.forEach(p => {
                if (hasActiveFlow) p.x += speedMultiplier;
                else p.x += (Math.random() - 0.5) * 0.001;
                
                if (p.x > 1.0) p.x = 0;
                if (p.x < 0) p.x = 1.0;
                const px = wallLeft + p.x * wallWidth;
                const py = wallTop + p.y * wallHeight;
                ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2); ctx.fill();
            });

            ctx.fillStyle = "#ffffff"; ctx.font = "bold 14px Outfit";
            ctx.textAlign = "right"; ctx.fillText(`T₁ = ${fourierT1.toFixed(0)}°C`, wallLeft - 10, h * 0.5);
            ctx.textAlign = "left"; ctx.fillText(`T₂ = ${fourierT2.toFixed(0)}°C`, wallRight + 10, h * 0.5);
            
        } else {
            const cx = w/2;
            const cy = h/2;
            const maxR = Math.min(w, h) * 0.45;
            const r1 = sliderR1 ? parseFloat(sliderR1.value) : 0.05;
            let r2 = sliderR2 ? parseFloat(sliderR2.value) : 0.15;
            if (r2 < r1) r2 = r1;
            
            // Map physical radius to pixels
            const r_inner_px = maxR * (r1 / r2) || 0.1; 
            const r_outer_px = maxR;
            
            ctx.fillStyle = "rgba(0,0,0,0.1)";
            ctx.fillRect(0,0,w,h);

            // Handle zero thickness gracefully visually
            if (r2 === r1) {
                ctx.beginPath();
                ctx.arc(cx, cy, r_outer_px, 0, Math.PI*2);
                ctx.strokeStyle = getColorForTemp(fourierT1);
                ctx.lineWidth = 4;
                ctx.stroke();
            } else {
                const rGrad = ctx.createRadialGradient(cx, cy, r_inner_px, cx, cy, r_outer_px);
                rGrad.addColorStop(0, getColorForTemp(fourierT1));
                rGrad.addColorStop(1, getColorForTemp(fourierT2));

                ctx.beginPath();
                ctx.arc(cx, cy, r_outer_px, 0, Math.PI*2);
                ctx.arc(cx, cy, r_inner_px, 0, Math.PI*2, true);
                ctx.fillStyle = rGrad;
                ctx.fill();
                
                ctx.strokeStyle = "rgba(255,255,255,0.4)";
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(cx, cy, r_inner_px, 0, Math.PI*2);
                ctx.fillStyle = "rgba(0,0,0,0.6)";
                ctx.fill();
                ctx.stroke();

                ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
                particles.forEach(p => {
                    if (hasActiveFlow) p.r_norm += speedMultiplier;
                    else p.r_norm += (Math.random() - 0.5) * 0.001;
                    
                    if (p.r_norm > 1.0) p.r_norm = 0;
                    if (p.r_norm < 0) p.r_norm = 1.0;
                    
                    const pr = r_inner_px + p.r_norm * (r_outer_px - r_inner_px);
                    const px = cx + Math.cos(p.angle) * pr;
                    const py = cy + Math.sin(p.angle) * pr;
                    ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2); ctx.fill();
                });
            }

            // Draw dimension lines
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);

            // r1 line (draw upwards slightly angled to not overlap with text)
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx - r_inner_px * 0.707, cy - r_inner_px * 0.707);
            ctx.stroke();

            // r2 line (draw straight right)
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + r_outer_px, cy);
            ctx.stroke();

            ctx.setLineDash([]);
            
            // Draw labels for dimensions
            ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
            ctx.font = "13px Outfit";
            ctx.textAlign = "right";
            ctx.fillText("r₁", cx - r_inner_px * 0.707 - 5, cy - r_inner_px * 0.707 - 5);
            ctx.textAlign = "center";
            ctx.fillText("r₂", cx + r_outer_px/2, cy - 8);

            ctx.fillStyle = "#ffffff"; ctx.font = "bold 14px Outfit";
            ctx.textAlign = "center"; 
            ctx.fillText(`T₁=${fourierT1.toFixed(0)}°C`, cx, cy + 5);
            ctx.textAlign = "left"; 
            ctx.fillText(`T₂=${fourierT2.toFixed(0)}°C`, cx + r_outer_px + 10, cy);
        }

        fourierAnimationId = requestAnimationFrame(draw);
    }

    if(geomSelect) geomSelect.addEventListener("change", () => {
        updateGeometryUI();
        updateSimulation();
    });

    if(modeSelect) modeSelect.addEventListener("change", (e) => {
        currentMode = e.target.value;
        if (currentMode === "calc-q") {
            t2Container.style.display = "block";
            qInContainer.style.display = "none";
        } else {
            t2Container.style.display = "none";
            qInContainer.style.display = "block";
        }
        updateSimulation();
    });

    [sliderT1, sliderT2, sliderQin, sliderK, sliderL, sliderR1, sliderR2, sliderAH].forEach(el => {
        if(el) el.addEventListener('input', updateSimulation);
    });

    window.addEventListener('resize', () => {
        if(document.getElementById('fourier-sim').classList.contains('active')){
            if(fourierChart) fourierChart.resize();
        }
    });

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulation();
            if (fourierChart) fourierChart.resize();
        }
    });
    observer.observe(canvas);

    updateGeometryUI();
    updateSimulation();
    draw();
}



// ==========================================
// Newton's Cooling Simulation
// ==========================================
function initNewtonSimulation_OLD_UNUSED() {
    const canvas = document.getElementById('newtonCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderTi = document.getElementById('newton-ti');
    const sliderTinf = document.getElementById('newton-tinf');
    const selectMedium = document.getElementById('newton-medium');
    const sliderD = document.getElementById('newton-d');
    
    const valTi = document.getElementById('newton-ti-val');
    const valTinf = document.getElementById('newton-tinf-val');
    const valD = document.getElementById('newton-d-val');
    const resBi = document.getElementById('newton-bi-res');
    const resTau = document.getElementById('newton-tau-res');
    const resTime = document.getElementById('newton-time');
    
    const graphCanvas = document.getElementById('newtonGraph');
    const graphCtx = graphCanvas.getContext('2d');
    
    // Propiedades del hierro puro
    const rho = 7870; // kg/m^3
    const cp = 450; // J/kg.K
    const k_hierro = 80.2; // W/m.K
    const L_cylinder = 0.1; // m (Longitud del cilindro)
    
    let chartInstance = new Chart(graphCtx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'T(t) Cilindro de Hierro',
                data: [],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: 'Tiempo (s)', color: '#94a3b8' },
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e2e8f0' } }
            }
        }
    });

    let animationId;
    let simTime = 0;
    let particles = [];
    const timeScale = 50; // Acelerador de tiempo
    let lastTimestamp = 0;
    
    // Parámetros actuales
    let currentTi, currentTinf, currentH, currentD;
    let currentTau, currentBi;
    
    function initParticles() {
        particles = [];
        const numParticles = 100;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2 - 1 // Tendencia hacia arriba por convección natural
            });
        }
    }

    function updateSimulationParams() {
        currentTi = parseFloat(sliderTi.value);
        currentTinf = parseFloat(sliderTinf.value);
        currentH = parseFloat(selectMedium.value);
        currentD = parseFloat(sliderD.value);
        
        valTi.textContent = currentTi;
        valTinf.textContent = currentTinf;
        valD.textContent = currentD.toFixed(2);
        
        // Área superficial y Volumen
        const r = currentD / 2;
        const As = 2 * Math.PI * r * L_cylinder + 2 * Math.PI * r * r;
        const V = Math.PI * r * r * L_cylinder;
        const Lc = V / As;
        
        currentBi = (currentH * Lc) / k_hierro;
        currentTau = (rho * V * cp) / (currentH * As);
        
        resBi.innerHTML = currentBi.toFixed(4) + (currentBi < 0.1 ? " <span style='color:#10b981;'>(Válido)</span>" : " <span style='color:#ef4444;'>(Inválido)</span>");
        resTau.innerHTML = currentTau.toFixed(1) + " s";
        
        simTime = 0; // Reiniciar simulación
        lastTimestamp = performance.now();
        initParticles();
        
        // Pre-calcular la gráfica teórica (hasta 5 Tau)
        const tMax = currentTau * 5;
        const graphData = [];
        for (let t = 0; t <= tMax; t += tMax/50) {
            const T = currentTinf + (currentTi - currentTinf) * Math.exp(-t / currentTau);
            graphData.push({ x: t, y: T });
        }
        chartInstance.data.datasets[0].data = graphData;
        
        const maxTemp = Math.max(currentTi, currentTinf);
        const minTemp = Math.min(currentTi, currentTinf);
        chartInstance.options.scales.y.max = maxTemp > 500 ? Math.ceil(maxTemp / 100) * 100 : (Math.ceil(maxTemp / 10) * 10 + 10);
        chartInstance.options.scales.y.min = minTemp < 0 ? Math.floor(minTemp / 10) * 10 : (minTemp > 20 ? 0 : Math.floor(minTemp / 10) * 10 - 10);
        chartInstance.options.scales.x.max = tMax;
        
        chartInstance.update();
    }

    function getColorForTemp(T) {
        const minT = 0;
        const maxT = 500;
        const normalized = Math.max(0, Math.min(1, (T - minT) / (maxT - minT)));
        const r = Math.round(normalized * 255);
        const b = Math.round((1 - normalized) * 255);
        return `rgb(${r}, 50, ${b})`;
    }

    function draw(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const dt = (timestamp - lastTimestamp) / 1000; // segundos reales
        lastTimestamp = timestamp;
        
        simTime += dt * timeScale;
        resTime.innerHTML = simTime.toFixed(1) + " s";
        
        // Temperatura actual del cilindro
        const currentT = currentTinf + (currentTi - currentTinf) * Math.exp(-simTime / currentTau);
        
        // Make canvas responsive
        const parent = canvas.parentElement;
        if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            initParticles();
        }

        // Efecto de desvanecimiento para estelas
        ctx.fillStyle = 'rgba(15, 23, 42, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        // Escala visual del cilindro basada en el diámetro (0.01 a 0.2 m -> 20 a 100 px radio)
        const minR = 20;
        const maxR = 100;
        const visualR = minR + ((currentD - 0.01) / (0.2 - 0.01)) * (maxR - minR);
        
        // Actualizar y dibujar partículas de convección (fluido)
        ctx.fillStyle = getColorForTemp(currentTinf);
        particles.forEach(p => {
            // Acelerar partículas según la diferencia de temperatura
            const deltaT = currentT - currentTinf;
            // Si el cilindro está más caliente, las partículas suben más rápido cerca del cilindro
            const dist = Math.hypot(p.x - cx, p.y - cy);
            
            let speedFactor = 1;
            if (dist < visualR * 3) {
                speedFactor = 1 + (deltaT / 100) * (1 - dist / (visualR * 3));
            }
            
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;
            
            // Reaparecer partículas que salen de la pantalla
            if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                if (Math.random() > 0.5) {
                    p.x = Math.random() * canvas.width;
                    p.y = canvas.height;
                } else {
                    p.x = Math.random() > 0.5 ? 0 : canvas.width;
                    p.y = Math.random() * canvas.height;
                }
                // Si la distancia al centro es muy grande, forzar a que reaparezca más cerca a veces
                if (Math.random() > 0.7) {
                    p.x = cx + (Math.random() - 0.5) * visualR * 4;
                    p.y = cy + (Math.random() - 0.5) * visualR * 4;
                }
            }
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Dibujar el cilindro
        ctx.beginPath();
        ctx.arc(cx, cy, visualR, 0, Math.PI * 2);
        ctx.fillStyle = getColorForTemp(currentT);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Texto de temperatura
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Outfit';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${currentT.toFixed(1)} °C`, cx, cy);
        
        animationId = requestAnimationFrame(draw);
    }
    
    [sliderTi, sliderTinf, selectMedium, sliderD].forEach(el => {
        el.addEventListener('input', updateSimulationParams);
    });
    
    // Intersection Observer para detener/iniciar animación
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulationParams();
            lastTimestamp = performance.now();
            animationId = requestAnimationFrame(draw);
        } else {
            if (animationId) cancelAnimationFrame(animationId);
        }
    });
    
    observer.observe(canvas);
}

// ==========================================
// Conduction + Convection Simulation
// ==========================================
function initCondConvSimulation() {
    const canvas = document.getElementById("condConvChart");
    if (!canvas) return;
    
    const sliderT1 = document.getElementById("cc-t1");
    const sliderK = document.getElementById("cc-k");
    const sliderL = document.getElementById("cc-l");
    const sliderTinf = document.getElementById("cc-tinf");
    const sliderH = document.getElementById("cc-h");
    
    const valT1 = document.getElementById("cc-t1-val");
    const valK = document.getElementById("cc-k-val");
    const valL = document.getElementById("cc-l-val");
    const valTinf = document.getElementById("cc-tinf-val");
    const valH = document.getElementById("cc-h-val");
    
    const resT2 = document.getElementById("cc-t2-res");
    const resQ = document.getElementById("cc-q-res");
    const resRCond = document.getElementById("cc-rcond-res");
    const resRConv = document.getElementById("cc-rconv-res");
    const resRTotal = document.getElementById("cc-rtot-res");
    
    const ctx = canvas.getContext("2d");
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Pared Sólida (Conducción)",
                    data: [],
                    borderColor: "#f59e0b",
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0
                },
                {
                    label: "Capa Límite (Convección)",
                    data: [],
                    borderColor: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: "linear",
                    title: { display: true, text: "Posición x (m)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                y: {
                    title: { display: true, text: "Temperatura (°C)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                }
            },
            plugins: {
                legend: { labels: { color: "#e2e8f0" } }
            }
        }
    });

    function formatValue(value, type) {
        if (type === "q") {
            const absQ = Math.abs(value);
            if (absQ >= 1e6) {
                return `${(value / 1e6).toFixed(2)} MW/m&sup2;`;
            } else if (absQ >= 1000) {
                return `${(value / 1000).toFixed(2)} kW/m&sup2;`;
            } else {
                return `${value.toFixed(2)} W/m&sup2;`;
            }
        } else if (type === "t") {
            return `${value.toFixed(2)} &deg;C`;
        }
    }

    function updateSimulation() {
        const T1 = parseFloat(sliderT1.value);
        const k = parseFloat(sliderK.value);
        const L = parseFloat(sliderL.value);
        const Tinf = parseFloat(sliderTinf.value);
        const h = parseFloat(sliderH.value);
        
        valT1.textContent = T1;
        valK.textContent = k;
        valL.textContent = L.toFixed(2);
        valTinf.textContent = Tinf;
        valH.textContent = h;
        
        // Calcular R total y Flujo de calor
        const R_cond = L / k;
        const R_conv = 1 / h;
        const R_total = R_cond + R_conv;
        
        const q = (T1 - Tinf) / R_total;
        let T2 = Tinf + (q / h);
        
        // Validar límite físico
        if (T2 < -273.15) { T2 = -273.15; }
        
        resQ.innerHTML = formatValue(q, "q");
        resT2.innerHTML = formatValue(T2, "t");
        if (resRCond) resRCond.textContent = R_cond.toFixed(4) + " m²K/W";
        if (resRConv) resRConv.textContent = R_conv.toFixed(4) + " m²K/W";
        if (resRTotal) resRTotal.textContent = R_total.toFixed(4) + " m²K/W";
        
        // Datos para gráfico
        // 1. Zona sólida (línea recta)
        const solidData = [
            { x: 0, y: T1 },
            { x: L, y: T2 }
        ];
        
        // 2. Zona fluida (curva de capa límite)
        const fluidData = [];
        const L_fluid = 0.05; // Mostrar 5 cm de fluido
        const numPoints = 20;
        
        for (let i = 0; i <= numPoints; i++) {
            const x_fluid = L + (i / numPoints) * L_fluid;
            // Distancia en el fluido
            const dx = x_fluid - L;
            const decay = Math.exp(-dx * (h / 5)); 
            const T_fluid = Tinf + (T2 - Tinf) * decay;
            fluidData.push({ x: x_fluid, y: T_fluid });
        }
        
        chartInstance.data.datasets[0].data = solidData;
        chartInstance.data.datasets[1].data = fluidData;
        
        // Ajustar escalas dinámicamente
        const maxTemp = Math.max(T1, T2, Tinf);
        const minTemp = Math.min(T1, T2, Tinf);
        chartInstance.options.scales.y.max = maxTemp > 500 ? Math.ceil(maxTemp / 100) * 100 : 500;
        chartInstance.options.scales.y.min = minTemp < 0 ? Math.floor(minTemp / 100) * 100 : 0;
        
        chartInstance.options.scales.x.max = L + L_fluid;
        
        // Annotations para diferenciar el muro del fluido
        chartInstance.options.plugins.annotation = {
            annotations: {
                wallRegion: {
                    type: "box",
                    xMin: 0,
                    xMax: L,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderWidth: 0,
                    label: {
                        display: true,
                        content: "Pared",
                        position: "top"
                    }
                },
                fluidRegion: {
                    type: "box",
                    xMin: L,
                    xMax: L + L_fluid,
                    backgroundColor: "rgba(56, 189, 248, 0.05)",
                    borderWidth: 0,
                    label: {
                        display: true,
                        content: "Fluido",
                        position: "top"
                    }
                }
            }
        };
        
        chartInstance.update();
    }
    
    [sliderT1, sliderK, sliderL, sliderTinf, sliderH].forEach(slider => {
        slider.addEventListener("input", updateSimulation);
    });
    
    updateSimulation();
}



// ==========================================
// 12. NUSSELT SIMULATION
// ==========================================
function initNusseltSimulation_OLD_UNUSED() {
    const uSlider = document.getElementById("nu-u");
    const kSlider = document.getElementById("nu-k");
    const lcSlider = document.getElementById("nu-lc");
    const tsSlider = document.getElementById("nu-ts");
    const tinfSlider = document.getElementById("nu-tinf");
    
    const uVal = document.getElementById("nu-u-val");
    const kVal = document.getElementById("nu-k-val");
    const lcVal = document.getElementById("nu-lc-val");
    const tsVal = document.getElementById("nu-ts-val");
    const tinfVal = document.getElementById("nu-tinf-val");
    
    const resQCond = document.getElementById("nu-qcond-res");
    const resQConv = document.getElementById("nu-qconv-res");
    const resNu = document.getElementById("nu-res");
    
    const canvas = document.getElementById("nusseltChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Conducción Pura (Fluido estático)",
                    data: [],
                    borderColor: "#94a3b8",
                    backgroundColor: "rgba(148, 163, 184, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0
                },
                {
                    label: "Convección (Fluido en movimiento)",
                    data: [],
                    borderColor: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: "linear",
                    min: 0,
                    max: 0.2, // max Lc is 0.2
                    title: { display: true, text: "Distancia desde la pared (y)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                y: {
                    min: 20,
                    max: 100,
                    title: { display: true, text: "Temperatura (°C)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                }
            },
            plugins: {
                legend: { labels: { color: "#e2e8f0" } }
            }
        }
    });

    function updateSimulation() {
        const u = parseFloat(uSlider.value);
        const k = parseFloat(kSlider.value);
        const Lc = parseFloat(lcSlider.value);
        
        uVal.textContent = u.toFixed(1);
        kVal.textContent = k.toFixed(2);
        lcVal.textContent = Lc.toFixed(2);
        
        // Temperatures
        const Ts = 100; // Wall temp
        const Tinf = 20; // Fluid free stream temp
        
        // If u = 0, it's pure conduction. Nu = 1.
        // As u increases, h increases. Let's assume h = (k/Lc) * (1 + C * u^0.8)
        // So Nu = 1 + C * u^0.8
        const C = 2.5; // Arbitrary constant for visual effect
        let Nu = 1.0;
        if (u > 0) {
            Nu = 1.0 + C * Math.pow(u, 0.8);
        }
        
        const h = (k / Lc) * Nu;
        
        const q_cond = k * (Ts - Tinf) / Lc;
        const q_conv = h * (Ts - Tinf);
        
        resQCond.textContent = q_cond.toFixed(1) + " W/m²";
        resQConv.textContent = q_conv.toFixed(1) + " W/m²";
        resNu.textContent = Nu.toFixed(2);
        
        // Update Chart
        chartInstance.options.scales.x.max = Math.max(0.2, Lc);
        
        const condData = [];
        const convData = [];
        
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const y = (i / numPoints) * Lc;
            
            // Conduction Profile (Linear from Ts at y=0 to Tinf at y=Lc)
            const T_cond = Ts - (Ts - Tinf) * (y / Lc);
            condData.push({ x: y, y: T_cond });
            
            // Convection Profile
            // Must have gradient at wall equal to -h(Ts-Tinf)/k = -Nu*(Ts-Tinf)/Lc
            // A simple profile that matches Ts at y=0, Tinf at y=Lc, and has the correct initial slope:
            // T(y) = Tinf + (Ts - Tinf) * (1 - y/Lc)^Nu
            const T_conv = Tinf + (Ts - Tinf) * Math.pow(1 - y/Lc, Nu);
            convData.push({ x: y, y: T_conv });
        }
        
        chartInstance.data.datasets[0].data = condData;
        chartInstance.data.datasets[1].data = convData;
        chartInstance.update();
    }

    uSlider.addEventListener("input", updateSimulation);
    kSlider.addEventListener("input", updateSimulation);
    lcSlider.addEventListener("input", updateSimulation);
    if(tsSlider) tsSlider.addEventListener("input", updateSimulation);
    if(tinfSlider) tinfSlider.addEventListener("input", updateSimulation);
    
    // Initial call
    updateSimulation();
}



/* =========================================================================
   BOUNDARY LAYER & ANALOGY SIMULATOR
   ========================================================================= */
function initBoundaryLayerSimulation_OLD_UNUSED() {
    const prSlider = document.getElementById("bl-pr");
    const scSlider = document.getElementById("bl-sc");
    
    const prVal = document.getElementById("bl-pr-val");
    const scVal = document.getElementById("bl-sc-val");
    
    const resDeltaT = document.getElementById("bl-deltat-res");
    const resDeltaC = document.getElementById("bl-deltac-res");
    
    const canvas = document.getElementById("blChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Velocidad (u/Uinfinity)",
                    data: [],
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: "Temperatura ((T-Ts)/(Tinf-Ts))",
                    data: [],
                    borderColor: "#ef4444",
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: "Concentración ((C-Cs)/(Cinf-Cs))",
                    data: [],
                    borderColor: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    borderWidth: 2,
                    borderDash: [2, 2],
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    title: {
                        display: true,
                        text: "Distancia desde la pared (y/δ)",
                        color: "#94a3b8"
                    },
                    min: 0,
                    max: 1.5,
                    grid: { color: "#334155" },
                    ticks: { 
                        color: "#94a3b8",
                        callback: function(value) {
                            if (value === 0) return '0 (Pared)';
                            if (value === 1) return '1 (Borde de Capa)';
                            return value;
                        }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Perfil Adimensional (Velocidad, Temperatura, Masa)",
                        color: "#94a3b8"
                    },
                    min: 0,
                    max: 1.05,
                    grid: { color: "#334155" },
                    ticks: { 
                        color: "#94a3b8",
                        callback: function(value) {
                            if (value === 0) return '0 (Superficie)';
                            if (value === 1) return '1 (Infinito)';
                            return value;
                        }
                    }
                }
            },
            plugins: {
                legend: { labels: { color: "#cbd5e1" } }
            }
        }
    });

    function updateSimulation() {
        const Pr = parseFloat(prSlider.value);
        const Sc = parseFloat(scSlider.value);
        
        prVal.textContent = Pr.toFixed(1);
        scVal.textContent = Sc.toFixed(1);
        
        // Relaciones empíricas de espesor de capa límite
        const delta_t_ratio = Math.pow(Pr, -1/3);
        const delta_c_ratio = Math.pow(Sc, -1/3);
        
        resDeltaT.textContent = delta_t_ratio.toFixed(2) + " δ";
        resDeltaC.textContent = delta_c_ratio.toFixed(2) + " δ";
        
        const velData = [];
        const tempData = [];
        const concData = [];
        
        // Eje y va de 0 a 1.5 (donde 1.0 es el borde de la capa límite hidrodinámica)
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const y = (i / numPoints) * 1.5;
            
            // Perfil de velocidad (Polinomio de orden 2, aproximación de Von Kármán)
            // u/Uinfinity = 2(y/δ) - (y/δ)^2 for y/δ <= 1, else 1
            let u_ratio = 1.0;
            if (y <= 1.0) {
                u_ratio = 2 * y - Math.pow(y, 2);
            }
            velData.push({ x: y, y: u_ratio });
            
            // Perfil de Temperatura
            // y_t = y / (δ_t) = y / (δ * delta_t_ratio)
            let y_t = y / delta_t_ratio;
            let t_ratio = 1.0;
            if (y_t <= 1.0) {
                t_ratio = 2 * y_t - Math.pow(y_t, 2);
            }
            tempData.push({ x: y, y: t_ratio });
            
            // Perfil de Concentración
            let y_c = y / delta_c_ratio;
            let c_ratio = 1.0;
            if (y_c <= 1.0) {
                c_ratio = 2 * y_c - Math.pow(y_c, 2);
            }
            concData.push({ x: y, y: c_ratio });
        }
        
        chartInstance.data.datasets[0].data = velData;
        chartInstance.data.datasets[1].data = tempData;
        chartInstance.data.datasets[2].data = concData;
        
        chartInstance.update();
    }
    
    prSlider.addEventListener('input', updateSimulation);
    scSlider.addEventListener('input', updateSimulation);
    
    updateSimulation();
}



/* =========================================================================
   THERMAL RESISTANCE NETWORK SIMULATOR
   ========================================================================= */
function initResistanceSimulation() {
    const canvas = document.getElementById("resCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    // UI Elements
    const sl_tinf1 = document.getElementById("res-tinf1");
    const sl_h1 = document.getElementById("res-h1");
    const sl_tinf2 = document.getElementById("res-tinf2");
    const sl_h2 = document.getElementById("res-h2");
    
    const sl_k1 = document.getElementById("res-k1");
    const sl_L1 = document.getElementById("res-L1");
    const sl_k2 = document.getElementById("res-k2");
    const sl_L2 = document.getElementById("res-L2");
    const sl_k3 = document.getElementById("res-k3");
    const sl_L3 = document.getElementById("res-L3");
    
    const val_rtot = document.getElementById("res-rtot-val");
    const val_q = document.getElementById("res-q-val");
    
    function drawResistor(x, y, width, height, color, label, valStr) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        // Draw zigzag
        const numZigs = 5;
        const dx = width / (numZigs * 2 + 1);
        let cx = x;
        
        ctx.moveTo(cx, y);
        cx += dx;
        
        for (let i = 0; i < numZigs; i++) {
            ctx.lineTo(cx, y - height/2);
            cx += dx;
            ctx.lineTo(cx, y + height/2);
            cx += dx;
        }
        
        ctx.lineTo(cx, y);
        ctx.stroke();
        
        // Label
        ctx.fillStyle = "#94a3b8";
        ctx.font = "12px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(label, x + width/2, y + height/2 + 15);
        ctx.fillStyle = color;
        ctx.fillText(valStr, x + width/2, y + height/2 + 30);
    }
    
    function updateSimulation() {
        const tinf1 = parseFloat(sl_tinf1.value);
        const h1 = parseFloat(sl_h1.value);
        const tinf2 = parseFloat(sl_tinf2.value);
        const h2 = parseFloat(sl_h2.value);
        
        const k1 = parseFloat(sl_k1.value);
        const L1 = parseFloat(sl_L1.value) / 100;
        const k2 = parseFloat(sl_k2.value);
        const L2 = parseFloat(sl_L2.value) / 100;
        const k3 = parseFloat(sl_k3.value);
        const L3 = parseFloat(sl_L3.value) / 100;
        
        document.getElementById("res-tinf1-val").textContent = tinf1;
        document.getElementById("res-h1-val").textContent = h1;
        document.getElementById("res-tinf2-val").textContent = tinf2;
        document.getElementById("res-h2-val").textContent = h2;
        
        document.getElementById("res-k1-val").textContent = k1.toFixed(2);
        document.getElementById("res-L1-val").textContent = (L1*100).toFixed(0);
        document.getElementById("res-k2-val").textContent = k2.toFixed(2);
        document.getElementById("res-L2-val").textContent = (L2*100).toFixed(0);
        document.getElementById("res-k3-val").textContent = k3.toFixed(2);
        document.getElementById("res-L3-val").textContent = (L3*100).toFixed(0);
        
        const R_conv1 = 1 / h1;
        const R_cond1 = L1 / k1;
        const R_cond2 = L2 / k2;
        const R_cond3 = L3 / k3;
        const R_conv2 = 1 / h2;
        
        const R_tot = R_conv1 + R_cond1 + R_cond2 + R_cond3 + R_conv2;
        const q = (tinf1 - tinf2) / R_tot;
        
        val_rtot.textContent = R_tot.toFixed(4) + " K/W";
        val_q.textContent = q.toFixed(1) + " W";
        
        const Ts1 = tinf1 - q * R_conv1;
        const T2 = Ts1 - q * R_cond1;
        const T3 = T2 - q * R_cond2;
        const Ts2 = T3 - q * R_cond3;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Centered and larger layout
        const startX = 150;
        const totalL = L1 + L2 + L3;
        const availWidth = 500;
        
        const w1 = (L1 / totalL) * availWidth;
        const w2 = (L2 / totalL) * availWidth;
        const w3 = (L3 / totalL) * availWidth;
        
        const wallY = 40;
        const wallH = 220;
        
        // Walls
        ctx.fillStyle = "rgba(100, 116, 139, 0.4)";
        ctx.fillRect(startX, wallY, w1, wallH);
        ctx.strokeStyle = "#94a3b8";
        ctx.strokeRect(startX, wallY, w1, wallH);
        
        ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
        ctx.fillRect(startX + w1, wallY, w2, wallH);
        ctx.strokeRect(startX + w1, wallY, w2, wallH);
        
        ctx.fillStyle = "rgba(203, 213, 225, 0.4)";
        ctx.fillRect(startX + w1 + w2, wallY, w3, wallH);
        ctx.strokeRect(startX + w1 + w2, wallY, w3, wallH);
        
        // Temperature Profile
        const minT = Math.min(tinf1, tinf2) - 10;
        const maxT = Math.max(tinf1, tinf2) + 10;
        const T_range = maxT - minT || 1; // avoid div by 0
        
        function getTy(T) {
            return wallY + wallH - ((T - minT) / T_range) * wallH;
        }
        
        ctx.beginPath();
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 3;
        
        const x_inf1 = startX - 80;
        ctx.moveTo(x_inf1, getTy(tinf1));
        ctx.lineTo(startX, getTy(Ts1));
        ctx.lineTo(startX + w1, getTy(T2));
        ctx.lineTo(startX + w1 + w2, getTy(T3));
        ctx.lineTo(startX + w1 + w2 + w3, getTy(Ts2));
        
        const x_inf2 = startX + availWidth + 80;
        ctx.lineTo(x_inf2, getTy(tinf2));
        ctx.stroke();
        
        // Nodes
        ctx.fillStyle = "#ef4444";
        const points = [
            {x: x_inf1, y: getTy(tinf1), label: "T_inf1", val: tinf1},
            {x: startX, y: getTy(Ts1), label: "Ts1", val: Ts1},
            {x: startX + w1, y: getTy(T2), label: "T2", val: T2},
            {x: startX + w1 + w2, y: getTy(T3), label: "T3", val: T3},
            {x: startX + w1 + w2 + w3, y: getTy(Ts2), label: "Ts2", val: Ts2},
            {x: x_inf2, y: getTy(tinf2), label: "T_inf2", val: tinf2}
        ];
        
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.font = "12px Arial";
            ctx.fillStyle = "#ffffff";
            ctx.fillText(`${p.label}=${p.val.toFixed(1)}°C`, p.x, p.y - 12);
        });
        
        // Electrical Circuit
        const circY = wallY + wallH + 70;
        
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x_inf1, getTy(tinf1)); ctx.lineTo(x_inf1, circY);
        ctx.moveTo(startX, getTy(Ts1)); ctx.lineTo(startX, circY);
        ctx.moveTo(startX + w1, getTy(T2)); ctx.lineTo(startX + w1, circY);
        ctx.moveTo(startX + w1 + w2, getTy(T3)); ctx.lineTo(startX + w1 + w2, circY);
        ctx.moveTo(startX + w1 + w2 + w3, getTy(Ts2)); ctx.lineTo(startX + w1 + w2 + w3, circY);
        ctx.moveTo(x_inf2, getTy(tinf2)); ctx.lineTo(x_inf2, circY);
        ctx.stroke();
        
        drawResistor(x_inf1, circY, startX - x_inf1, 20, "#60a5fa", "R_conv1", R_conv1.toFixed(3));
        drawResistor(startX, circY, w1, 20, "#facc15", "R_cond1", R_cond1.toFixed(3));
        drawResistor(startX + w1, circY, w2, 20, "#facc15", "R_cond2", R_cond2.toFixed(3));
        drawResistor(startX + w1 + w2, circY, w3, 20, "#facc15", "R_cond3", R_cond3.toFixed(3));
        drawResistor(startX + w1 + w2 + w3, circY, x_inf2 - (startX + w1 + w2 + w3), 20, "#60a5fa", "R_conv2", R_conv2.toFixed(3));
        
        points.forEach(p => {
            ctx.fillStyle = "#0f172a";
            ctx.beginPath();
            ctx.arc(p.x, circY, 4, 0, Math.PI*2);
            ctx.fill();
            ctx.strokeStyle = "#ef4444";
            ctx.stroke();
        });
    }
    
    // Add Event Listeners
    [sl_tinf1, sl_h1, sl_tinf2, sl_h2, sl_k1, sl_L1, sl_k2, sl_L2, sl_k3, sl_L3].forEach(el => {
        el.addEventListener('input', updateSimulation);
    });
    
    updateSimulation();
}


// Planck's Law and Wavelength to Color Helper Functions
function calculatePlanck(lambda, T) {
    // Planck's Law: E_lambda = (C1) / (lambda^5 * (exp(C2 / (lambda * T)) - 1))
    // lambda is in micrometers, T is in Kelvin
    // C1 = 2 * pi * h * c^2 = 3.74177e8 W * um^4 / m^2
    // C2 = h * c / k_B = 1.43878e4 um * K
    // The result is spectral emissive power E_lambda in kW / (m^2 * nm) (which is equivalent to MW / (m^2 * um))
    const C1 = 3.74177e8;
    const C2 = 1.43878e4;
    
    const exponent = C2 / (lambda * T);
    if (exponent > 100) return 0; // Prevent overflow in Math.exp
    
    const spectralRadiance = C1 / (Math.pow(lambda, 5) * (Math.exp(exponent) - 1));
    // Scale value to match standard display ranges (e.g., peak of ~80 kW/(m²·nm) at 5800 K)
    // 1 W / (m^2 * m) = 1e-9 W / (m^2 * nm) = 1e-12 kW / (m^2 * nm)
    // Using scaled constant C1 gives output in W / (m^2 * um) = 1e-6 W / (m^2 * nm) = 1e-9 kW / (m^2 * nm)
    // To match typical spectral emissive power in kW / (m^2 * nm), we divide by 1000.
    return spectralRadiance / 1000;
}

function getWavelengthColor(lambda) {
    // lambda is in micrometers. Convert to nanometers.
    const wl = lambda * 1000;
    
    // Simple RGB conversion from wavelength (wl in nm)
    let r = 0, g = 0, b = 0;
    
    if (wl < 0.01) {
        return { name: "Rayos Gamma", color: "#4c1d95" }; // Deep purple
    } else if (wl >= 0.01 && wl < 10) {
        return { name: "Rayos X", color: "#7c3aed" }; // Neon purple
    } else if (wl >= 10 && wl < 380) {
        return { name: "Ultravioleta (UV)", color: "#a78bfa" }; // Light purple
    } else if (wl >= 380 && wl < 440) {
        r = -(wl - 440) / (440 - 380);
        g = 0.0;
        b = 1.0;
    } else if (wl >= 440 && wl < 490) {
        r = 0.0;
        g = (wl - 440) / (490 - 440);
        b = 1.0;
    } else if (wl >= 490 && wl < 510) {
        r = 0.0;
        g = 1.0;
        b = -(wl - 510) / (510 - 490);
    } else if (wl >= 510 && wl < 580) {
        r = (wl - 510) / (580 - 510);
        g = 1.0;
        b = 0.0;
    } else if (wl >= 580 && wl < 645) {
        r = 1.0;
        g = -(wl - 645) / (645 - 580);
        b = 0.0;
    } else if (wl >= 645 && wl <= 780) {
        r = 1.0;
        g = 0.0;
        b = 0.0;
    } else if (wl < 380) {
        // Ultraviolet representation (violet/purple/grey blend)
        return { name: "Ultravioleta (Invisible)", color: "#7c3aed" };
    } else {
        // Infrared representation (deep red/infra-red)
        return { name: "Infrarrojo (Invisible)", color: "#b91c1c" };
    }
    
    // Intensity factor near the limits of human vision
    let factor = 0;
    if (wl >= 380 && wl < 420) {
        factor = 0.3 + 0.7 * (wl - 380) / (420 - 380);
    } else if (wl >= 420 && wl < 701) {
        factor = 1.0;
    } else if (wl >= 701 && wl <= 780) {
        factor = 0.3 + 0.7 * (780 - wl) / (780 - 701);
    }
    
    const R = Math.round(r * factor * 255);
    const G = Math.round(g * factor * 255);
    const B = Math.round(b * factor * 255);
    
    // Descriptive names
    let name = "Visible";
    if (wl >= 380 && wl < 450) name = "Visible (Violeta)";
    else if (wl >= 450 && wl < 485) name = "Visible (Azul)";
    else if (wl >= 485 && wl < 500) name = "Visible (Cian)";
    else if (wl >= 500 && wl < 565) name = "Visible (Verde)";
    else if (wl >= 565 && wl < 590) name = "Visible (Amarillo)";
    else if (wl >= 590 && wl < 625) name = "Visible (Naranja)";
    else if (wl >= 625 && wl <= 780) name = "Visible (Rojo)";
    
    return {
        name: name,
        color: `rgb(${R}, ${G}, ${B})`
    };
}


function initMaxwellSimulation() {
    const canvas = document.getElementById("maxwellChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const slider = document.getElementById("maxwell-temp");
    const valDisplay = document.getElementById("maxwell-temp-val");
    const gasSelect = document.getElementById("maxwell-gas");

    const R = 8.314; // Ideal gas constant J/(mol*K)
    
    // Function to calculate PDF of v
    function calculateMaxwell(v, M, T) {
        // v in m/s, M in kg/mol, T in K
        const factor = Math.pow(M / (2 * Math.PI * R * T), 1.5);
        const expTerm = Math.exp(- (M * v * v) / (2 * R * T));
        return 4 * Math.PI * factor * v * v * expTerm;
    }

    let maxwellChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Distribución de Velocidades',
                data: [],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#f1f5f9', font: { family: 'Outfit', size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: function(c) {
                            return `Probabilidad: ${(c.parsed.y * 1000).toFixed(2)} (x10^-3)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Velocidad Molecular v (m/s)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    title: { display: true, text: 'Densidad de Probabilidad f(v)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });

    function updateSimulation() {
        const T = parseFloat(slider.value);
        const M = parseFloat(gasSelect.value); // kg/mol
        valDisplay.textContent = T;

        // Calculate characteristic speeds
        const vrms = Math.sqrt((3 * R * T) / M);
        const vp = Math.sqrt((2 * R * T) / M);
        const vmean = Math.sqrt((8 * R * T) / (Math.PI * M));
        
        // Fix the X and Y axes based on the selected gas to visually show the curve flattening
        const maxT = 2500;
        const minT = 50;
        const vrms_maxT = Math.sqrt((3 * R * maxT) / M);
        let newMaxV = Math.ceil((vrms_maxT * 3.5) / 100) * 100;
        
        // Max probability occurs at minimum temperature (50K) at vp_minT
        const vp_minT = Math.sqrt((2 * R * minT) / M);
        const maxProb = calculateMaxwell(vp_minT, M, minT);
        
        const newVelocities = [];
        const step = newMaxV / 100;
        for(let v=0; v<=newMaxV; v+=step) {
            newVelocities.push(Math.round(v));
        }

        const newData = newVelocities.map(v => calculateMaxwell(v, M, T));
        
        maxwellChart.data.labels = newVelocities;
        maxwellChart.data.datasets[0].data = newData;
        maxwellChart.data.datasets[0].label = `T = ${T} K`;
        
        maxwellChart.options.scales.y.max = maxProb * 1.05;
        maxwellChart.options.scales.x.max = newMaxV;
        
        // Dynamic color based on Temp (cool blue to hot red)
        const hue = Math.max(0, 240 - (T/2500)*240);
        maxwellChart.data.datasets[0].borderColor = `hsl(${hue}, 80%, 55%)`;
        maxwellChart.data.datasets[0].backgroundColor = `hsla(${hue}, 80%, 55%, 0.15)`;
        
        maxwellChart.update('none');

        // Update stats
        document.getElementById("maxwell-vp").textContent = `${Math.round(vp)} m/s`;
        document.getElementById("maxwell-vmean").textContent = `${Math.round(vmean)} m/s`;
        document.getElementById("maxwell-vrms").textContent = `${Math.round(vrms)} m/s`;
    }

    slider.addEventListener("input", updateSimulation);
    gasSelect.addEventListener("change", updateSimulation);
    
    // Initial call
    updateSimulation();
}

function initPlanckSimulation() {
    const slider = document.getElementById("planck-temp");
    const valDisplay = document.getElementById("planck-temp-val");
    const ctx = document.getElementById("planckChart").getContext("2d");

    // Generate wavelengths from 0.1 um to 4.0 um
    const wavelengths = [];
    for (let w = 0.1; w <= 4.0; w += 0.05) {
        wavelengths.push(parseFloat(w.toFixed(2)));
    }

    const T = parseInt(slider.value);
    const dataPoints = wavelengths.map(w => calculatePlanck(w, T));

    // Update Wien values on init
    const updateWienDisplay = (temp) => {
        const lambda_max = temp > 0 ? 2897.8 / temp : Infinity;
        document.getElementById("planck-wien-val").innerHTML = temp > 0 ? `${lambda_max.toFixed(3)} &micro;m` : "&infin; &micro;m";
        const colorInfo = temp > 0 ? getWavelengthColor(lambda_max) : { color: '#000000', name: 'Ninguno (0K)' };
        document.getElementById("planck-color-name").textContent = colorInfo.name;
        
        const box = document.getElementById("planck-color-box");
        box.style.backgroundColor = colorInfo.color;
        box.style.boxShadow = `0 0 15px ${colorInfo.color}`;

        // Stefan-Boltzmann Law: E = sigma * T^4
        const sigma = 5.670374e-8;
        const E = sigma * Math.pow(temp, 4);
        let E_str = "";
        if (E < 1000) {
            E_str = `${E.toFixed(2)} W/m&sup2;`;
        } else if (E < 1e6) {
            E_str = `${(E / 1000).toFixed(2)} kW/m&sup2;`;
        } else {
            E_str = `${(E / 1e6).toFixed(2)} MW/m&sup2;`;
        }
        document.getElementById("planck-sb-val").innerHTML = E_str;

        // Calculate Blackbody Energy Fractions
        const getFraction = (lmb, t) => {
            if (t <= 0 || lmb <= 0) return 0;
            const C2 = 14387.8;
            const zeta = C2 / (lmb * t);
            if (zeta > 100) return 0; // effectively zero
            let sum = 0;
            for (let n = 1; n <= 40; n++) {
                sum += (Math.exp(-n * zeta) / n) * (Math.pow(zeta, 3) + 3*Math.pow(zeta, 2)/n + 6*zeta/(n*n) + 6/Math.pow(n, 3));
            }
            return (15 / Math.pow(Math.PI, 4)) * sum;
        };

        const fXray = temp > 0 ? getFraction(0.01, temp) : 0;
        const fUV = temp > 0 ? getFraction(0.38, temp) - fXray : 0;
        const fVis = temp > 0 ? getFraction(0.78, temp) - getFraction(0.38, temp) : 0;
        const fIR = temp > 0 ? 1.0 - getFraction(0.78, temp) : 1;

        if (document.getElementById("frac-xray")) {
            document.getElementById("frac-xray").textContent = (fXray * 100).toFixed(4) + "%";
            document.getElementById("frac-uv").textContent = (Math.max(0, fUV) * 100).toFixed(2) + "%";
            document.getElementById("frac-vis").textContent = (Math.max(0, fVis) * 100).toFixed(2) + "%";
            document.getElementById("frac-ir").textContent = (Math.max(0, fIR) * 100).toFixed(2) + "%";
        }
    };
    
    updateWienDisplay(T);

    const activeDataset = {
        label: `Dinámico: ${T} K`,
        data: dataPoints,
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointRadius: 0
    };

    const datasets = [activeDataset];

    // Reference curves to illustrate Wien's Displacement Law
    const refs = [
        { temp: 3000, color: 'rgba(239, 68, 68, 0.8)' },   // Red
        { temp: 4500, color: 'rgba(234, 179, 8, 0.8)' },   // Yellow
        { temp: 6000, color: 'rgba(56, 189, 248, 0.8)' }   // Blue
    ];

    refs.forEach(ref => {
        datasets.push({
            label: `Ref: ${ref.temp} K`,
            data: wavelengths.map(w => calculatePlanck(w, ref.temp)),
            borderColor: ref.color,
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.4,
            pointRadius: 0
        });
    });

    const visibleSpectrumPlugin = {
        id: 'visibleSpectrum',
        beforeDraw: (chart) => {
            const ctx = chart.ctx;
            const chartArea = chart.chartArea;
            const labels = chart.data.labels;
            
            if (!labels || labels.length === 0) return;
            
            const minVal = labels[0];
            const maxVal = labels[labels.length - 1];
            
            const getPix = (val) => {
                const ratio = (val - minVal) / (maxVal - minVal);
                return chartArea.left + ratio * (chartArea.right - chartArea.left);
            };
            
            const leftPx = getPix(0.38);
            const rightPx = getPix(0.75);
            
            if (rightPx > chartArea.left && leftPx < chartArea.right) {
                const drawLeft = Math.max(leftPx, chartArea.left);
                const drawRight = Math.min(rightPx, chartArea.right);
                
                ctx.save();
                const gradient = ctx.createLinearGradient(leftPx, 0, rightPx, 0);
                gradient.addColorStop(0, 'rgba(138, 43, 226, 0.25)'); // Violeta
                gradient.addColorStop(0.2, 'rgba(0, 0, 255, 0.25)');   // Azul
                gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.25)');   // Verde
                gradient.addColorStop(0.8, 'rgba(255, 255, 0, 0.25)'); // Amarillo
                gradient.addColorStop(1, 'rgba(255, 0, 0, 0.25)');     // Rojo
                
                ctx.fillStyle = gradient;
                ctx.fillRect(drawLeft, chartArea.top, drawRight - drawLeft, chartArea.bottom - chartArea.top);
                
                ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
                ctx.font = '10px Outfit, sans-serif';
                ctx.textAlign = 'center';
                
                // Draw text only if it's wide enough
                if (drawRight - drawLeft > 30) {
                    ctx.fillText('Visible', (drawLeft + drawRight) / 2, chartArea.top + 15);
                }
                
                ctx.restore();
            }
        }
    };

    planckChart = new Chart(ctx, {
        type: 'line',
        plugins: [visibleSpectrumPlugin],
        data: {
            labels: wavelengths,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#f1f5f9', font: { family: 'Outfit', size: 12 } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Radiancia: ${context.parsed.y.toFixed(2)} kW/(m²·nm)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: { display: true, text: 'Longitud de onda, λ (µm)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    title: { display: true, text: 'Radiancia Espectral (kW / m² / nm)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });

    slider.addEventListener("input", (e) => {
        const multiplier = parseInt(document.getElementById("planck-multiplier") ? document.getElementById("planck-multiplier").value : 1);
        const T_val = parseInt(e.target.value) * multiplier;
        valDisplay.textContent = T_val.toLocaleString();
        
        // Mathematically elegant dynamic X-axis scaling: ALWAYS center the peak!
        // lambda_max = 2897.8 / T_val. We set maxW to ~8x the peak wavelength.
        let maxW = T_val > 0 ? (2897.8 / T_val) * 8 : 20.0;
        
        const newWavelengths = [];
        const step = maxW / 80.0;
        // Start close to 0 to capture Gamma/X-ray peaks
        const startW = maxW / 80.0; 
        for (let w = startW; w <= maxW; w += step) {
            // Keep precision dynamic based on scale
            const precision = maxW < 0.001 ? 8 : (maxW < 0.1 ? 5 : 3);
            newWavelengths.push(parseFloat(w.toFixed(precision)));
        }
        
        planckChart.data.labels = newWavelengths;
        
        // Recalculate values for the active dataset
        const newData = newWavelengths.map(w => calculatePlanck(w, T_val));
        
        planckChart.data.datasets[0].label = `Dinámico: ${T_val} K`;
        planckChart.data.datasets[0].data = newData;
        
        // Recalculate values for the reference datasets
        planckChart.data.datasets[1].data = newWavelengths.map(w => calculatePlanck(w, refs[0].temp));
        planckChart.data.datasets[2].data = newWavelengths.map(w => calculatePlanck(w, refs[1].temp));
        planckChart.data.datasets[3].data = newWavelengths.map(w => calculatePlanck(w, refs[2].temp));
        
        // Update Wien indicator
        updateWienDisplay(T_val);
        
        // Dynamically adjust color gradient based on temperature
        const hue = Math.max(15, 240 - (T_val - 1000) * 0.025); 
        planckChart.data.datasets[0].borderColor = `hsl(${hue}, 90%, 55%)`;
        planckChart.data.datasets[0].backgroundColor = `hsla(${hue}, 90%, 55%, 0.15)`;
        
        // Handle logarithmic scale dynamically
        const isLog = document.getElementById("planck-log-scale").checked;
        const maxVal = Math.max(...newData);
        
        if (isLog) {
            planckChart.options.scales.y.type = 'logarithmic';
            planckChart.options.scales.y.min = 1e-8; // Prevent log(0)
            // Allow Y max to float in log scale or force it to slightly above maxVal
            delete planckChart.options.scales.y.max; 
        } else {
            planckChart.options.scales.y.type = 'linear';
            delete planckChart.options.scales.y.min;
            if (T_val < 3000) {
                planckChart.options.scales.y.max = maxVal * 1.5;
            } else {
                delete planckChart.options.scales.y.max;
            }
        }

        planckChart.update('none'); // silent update for performance
    });
    
    // Attach listener for logarithmic scale checkbox
    const logCheckbox = document.getElementById("planck-log-scale");
    if (logCheckbox) {
        logCheckbox.addEventListener("change", (e) => {
            slider.dispatchEvent(new Event("input"));
        });
    }

    // Attach listener for the multiplier dropdown
    const multiplierSelect = document.getElementById("planck-multiplier");
    if (multiplierSelect) {
        multiplierSelect.addEventListener("change", (e) => {
            slider.dispatchEvent(new Event("input"));
        });
    }
}

/* =========================================================================
   PRANDTL BOUNDARY LAYER VELOCITY PROFILE SIMULATOR
   ========================================================================= */
let prandtlChart;

function initPrandtlSimulation() {
    const sliderRe = document.getElementById("prandtl-re");
    const sliderX = document.getElementById("prandtl-x");
    const valReDisplay = document.getElementById("prandtl-re-val");
    const valXDisplay = document.getElementById("prandtl-x-val");
    const ctx = document.getElementById("prandtlChart").getContext("2d");

    function getBoundaryLayer(ReL, x_m) {
        const L = 2.0;
        const Rex = ReL * (x_m / L);
        const Rex_crit = 500000;
        let delta = 0;
        let isTurbulent = false;
        
        if (Rex < Rex_crit) {
            delta = (5.0 * x_m) / Math.sqrt(Math.max(Rex, 1));
        } else {
            isTurbulent = true;
            delta = (0.37 * x_m) / Math.pow(Math.max(Rex, 1), 0.2);
        }
        
        return { delta, isTurbulent, Rex };
    }

    // Update profile using laminar (Blasius) or turbulent (1/7 power law) depending on Rex
    function updatePrandtlData(ReL, x) {
        const bl = getBoundaryLayer(ReL, x);
        const delta_mm = bl.delta * 1000;
        
        // Dynamic y max based on delta to always show the profile properly, but at least 20mm
        const max_y_mm = Math.max(30, delta_mm * 1.5);
        
        const yPoints = [];
        const uPoints = [];
        
        // Generate points up to max_y_mm
        const steps = 100;
        const step_y = max_y_mm / steps;
        
        for (let y_mm = 0; y_mm <= max_y_mm; y_mm += step_y) {
            yPoints.push(parseFloat(y_mm.toFixed(2)));
            
            const ratio = y_mm / delta_mm;
            if (ratio >= 1.0) {
                uPoints.push(1.0);
            } else {
                if (!bl.isTurbulent) {
                    // Blasius cubic approx
                    const u_ratio = 1.5 * ratio - 0.5 * Math.pow(ratio, 3);
                    uPoints.push(parseFloat(u_ratio.toFixed(4)));
                } else {
                    // 1/7 power law
                    const u_ratio = Math.pow(ratio, 1.0/7.0);
                    uPoints.push(parseFloat(u_ratio.toFixed(4)));
                }
            }
        }
        
        return { yPoints, uPoints, delta_mm, isTurbulent: bl.isTurbulent, Rex: bl.Rex };
    }

    const Re = parseInt(sliderRe.value);
    const x = parseFloat(sliderX.value);
    let simData = updatePrandtlData(Re, x);

    prandtlChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: simData.yPoints, // Height above plate y
            datasets: [
                {
                    label: 'Perfil de Velocidad u/Uinfinity',
                    data: simData.uPoints,
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    borderWidth: 3,
                    tension: 0.1,
                    pointRadius: 0,
                    fill: true
                },
                {
                    label: 'Espesor de la Capa Límite (δ)',
                    data: simData.yPoints.map(y => (Math.abs(y - simData.delta_mm) < (simData.delta_mm*1.5/100)*1.5) ? 1.0 : null),
                    borderColor: 'rgba(239, 68, 68, 0.8)',
                    borderDash: [5, 5],
                    borderWidth: 2,
                    showLine: true,
                    pointRadius: 3,
                    pointBackgroundColor: '#ef4444'
                }
            ]
        },
        options: {
            indexAxis: 'y', // Swap axes to plot velocity u on horizontal axis and y on vertical!
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#f1f5f9', font: { family: 'Outfit', size: 12 } }
                }
            },
            scales: {
                x: {
                    min: 0,
                    max: 1.1,
                    title: { display: true, text: 'Velocidad Normalizada (u / Uinfinity)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    title: { display: true, text: 'Distancia normal a la placa, y (mm)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });

    const updateDisplay = () => {
        const re_val = parseInt(sliderRe.value);
        const x_val = parseFloat(sliderX.value);
        valReDisplay.textContent = re_val.toLocaleString();
        valXDisplay.textContent = x_val.toFixed(2);
        
        const newData = updatePrandtlData(re_val, x_val);
        prandtlChart.data.labels = newData.yPoints;
        prandtlChart.data.datasets[0].data = newData.uPoints;
        
        const tol = (Math.max(30, newData.delta_mm * 1.5) / 100) * 1.5;
        prandtlChart.data.datasets[1].data = newData.yPoints.map(y => (Math.abs(y - newData.delta_mm) < tol) ? 1.0 : null);
        
        // Update annotation if plugin exists
        if (prandtlChart.options.plugins && prandtlChart.options.plugins.annotation && prandtlChart.options.plugins.annotation.annotations && prandtlChart.options.plugins.annotation.annotations.regimeLabel) {
            prandtlChart.options.plugins.annotation.annotations.regimeLabel.content = newData.isTurbulent ? `RÉGIMEN TURBULENTO (Rex = ${newData.Rex.toExponential(2)})` : `RÉGIMEN LAMINAR (Rex = ${newData.Rex.toExponential(2)})`;
            prandtlChart.options.plugins.annotation.annotations.regimeLabel.backgroundColor = newData.isTurbulent ? 'rgba(239,68,68,0.2)' : 'rgba(16,185,129,0.2)';
            prandtlChart.options.plugins.annotation.annotations.regimeLabel.color = newData.isTurbulent ? '#ef4444' : '#10b981';
            prandtlChart.options.plugins.annotation.annotations.regimeLabel.yValue = Math.max(30, newData.delta_mm * 1.5) * 0.9;
        }

        prandtlChart.update('none');
    };
    
    sliderRe.addEventListener("input", updateDisplay);
    sliderX.addEventListener("input", updateDisplay);

    // Particle animation logic
    const canvas = document.getElementById("boundaryLayerCanvas");
    const animCtx = canvas.getContext("2d");
    
    class Particle {
        constructor() {
            this.reset();
            this.x = Math.random() * canvas.width;
        }
        reset() {
            this.x = 0;
            this.y = Math.random() * (canvas.height - 15);
        }
        update(ReL) {
            const physicalX = (this.x / canvas.width) * 2.0;
            const bl = getBoundaryLayer(ReL, physicalX);
            const scaleY = canvas.height / 0.040; // 40mm fills the canvas
            const delta_pixels = bl.delta * scaleY;
            
            const distFromPlate = canvas.height - this.y;
            
            let u_ratio = 1.0;
            if (distFromPlate < delta_pixels) {
                const ratio = distFromPlate / delta_pixels;
                if (!bl.isTurbulent) {
                    u_ratio = 1.5 * ratio - 0.5 * Math.pow(ratio, 3);
                } else {
                    u_ratio = Math.pow(ratio, 1.0/7.0);
                }
                if (u_ratio < 0.05) u_ratio = 0.05;
            }
            
            this.x += 2.5 * u_ratio;
            if (this.x > canvas.width) {
                this.reset();
            }
        }
        draw() {
            animCtx.beginPath();
            animCtx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            animCtx.fillStyle = "rgba(6, 182, 212, 0.75)";
            animCtx.fill();
        }
    }
    
    const particles = [];
    const numParticles = 60;
    
    function resizeCanvas() {
        if (!canvas) return;
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        particles.length = 0;
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    function animateParticles() {
        if (!canvas || !animCtx) return;
        animCtx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw flat plate at the bottom (solid line)
        animCtx.fillStyle = "#475569";
        animCtx.fillRect(0, canvas.height - 4, canvas.width, 4);
        
        const ReL = parseInt(sliderRe.value);
        const currentX = parseFloat(sliderX.value);
        const scaleY = canvas.height / 0.040; // 40mm fits canvas vertically
        
        // Draw boundary layer boundary delta(x)
        animCtx.beginPath();
        animCtx.moveTo(0, canvas.height);
        for (let px = 0; px <= canvas.width; px += 5) {
            const physicalX = (px / canvas.width) * 2.0;
            const bl = getBoundaryLayer(ReL, physicalX);
            const delta_pixels = bl.delta * scaleY;
            animCtx.lineTo(px, canvas.height - delta_pixels);
        }
        animCtx.strokeStyle = "rgba(239, 68, 68, 0.4)";
        animCtx.lineWidth = 2;
        animCtx.stroke();
        
        // Shade the boundary layer area
        animCtx.lineTo(canvas.width, canvas.height);
        animCtx.lineTo(0, canvas.height);
        animCtx.fillStyle = "rgba(239, 68, 68, 0.05)";
        animCtx.fill();
        
        // Draw sliderX location line
        const indicatorPx = (currentX / 2.0) * canvas.width;
        animCtx.beginPath();
        animCtx.moveTo(indicatorPx, 0);
        animCtx.lineTo(indicatorPx, canvas.height);
        animCtx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        animCtx.setLineDash([4, 4]);
        animCtx.stroke();
        animCtx.setLineDash([]);
        
        // Draw velocity profile arrows at indicatorPx
        const numArrows = 8;
        const arrowMaxPx = 60; // max length of arrow for V_infinity
        const physicalX_ind = currentX;
        const bl_ind = getBoundaryLayer(ReL, physicalX_ind);
        const delta_pixels_ind = bl_ind.delta * scaleY;

        // Draw curve connecting tips
        animCtx.beginPath();
        animCtx.moveTo(indicatorPx, canvas.height);
        for (let i = 0; i <= 30; i++) {
            const distFromPlate = (i / 30) * Math.min(canvas.height, delta_pixels_ind * 1.5);
            const y = canvas.height - distFromPlate;
            let u_ratio = 1.0;
            if (distFromPlate < delta_pixels_ind) {
                const ratio = distFromPlate / delta_pixels_ind;
                if (!bl_ind.isTurbulent) {
                    u_ratio = 1.5 * ratio - 0.5 * Math.pow(ratio, 3);
                } else {
                    u_ratio = Math.pow(ratio, 1.0/7.0);
                }
            }
            animCtx.lineTo(indicatorPx + u_ratio * arrowMaxPx, y);
        }
        animCtx.strokeStyle = "rgba(16, 185, 129, 0.8)"; // emerald curve
        animCtx.lineWidth = 2;
        animCtx.stroke();

        // Draw individual arrows
        for (let i = 0; i <= numArrows; i++) {
            const distFromPlate = (i / numArrows) * Math.min(canvas.height, delta_pixels_ind * 1.5);
            const y = canvas.height - distFromPlate;
            
            if (y < 0) continue; 

            let u_ratio = 1.0;
            if (distFromPlate < delta_pixels_ind) {
                const ratio = distFromPlate / delta_pixels_ind;
                if (!bl_ind.isTurbulent) {
                    u_ratio = 1.5 * ratio - 0.5 * Math.pow(ratio, 3);
                } else {
                    u_ratio = Math.pow(ratio, 1.0/7.0);
                }
            }
            
            const arrowLen = u_ratio * arrowMaxPx;
            
            // Draw line
            animCtx.beginPath();
            animCtx.moveTo(indicatorPx, y);
            animCtx.lineTo(indicatorPx + arrowLen, y);
            animCtx.strokeStyle = "rgba(16, 185, 129, 0.9)";
            animCtx.lineWidth = 1.5;
            animCtx.stroke();
            
            // Draw arrowhead
            if (arrowLen > 2) {
                animCtx.beginPath();
                animCtx.moveTo(indicatorPx + arrowLen, y);
                animCtx.lineTo(indicatorPx + arrowLen - 6, y - 3);
                animCtx.lineTo(indicatorPx + arrowLen - 6, y + 3);
                animCtx.fillStyle = "rgba(16, 185, 129, 0.9)";
                animCtx.fill();
            }
        }
        
        // Draw text labels for boundary conditions
        animCtx.fillStyle = "rgba(248, 250, 252, 0.9)"; // slate-50 color
        animCtx.font = "12px 'Outfit', sans-serif";
        
        // No-slip condition label
        animCtx.fillText("u=0 (No deslizamiento)", indicatorPx + 8, canvas.height - 8);
        
        // Free stream velocity label
        animCtx.fillText("u ≈ U∞", indicatorPx + arrowMaxPx + 8, canvas.height - (delta_pixels_ind * 1.3));
        
        // Update and draw particles
        particles.forEach(p => {
            p.update(ReL);
            p.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
}

/* =========================================================================
   INVERSE SQUARE LAW SIMULATOR
   ========================================================================= */
let invsqChart;

function initInvSqSimulation() {
    const sliderPower = document.getElementById("invsq-power");
    const sliderDist = document.getElementById("invsq-dist");
    const ctx = document.getElementById("invsqChart");
    if (!ctx) return;

    function calcIntensity(P, r) {
        return P / (4 * Math.PI * r * r);
    }

    function updateInvSqData(P) {
        const distances = [];
        const intensities = [];
        for (let r = 0.5; r <= 10; r += 0.1) {
            distances.push(parseFloat(r.toFixed(1)));
            intensities.push(calcIntensity(P, r));
        }
        return { distances, intensities };
    }

    let P = parseInt(sliderPower.value);
    let r_active = parseFloat(sliderDist.value);
    let simData = updateInvSqData(P);

    invsqChart = new Chart(ctx.getContext("2d"), {
        type: 'line',
        data: {
            labels: simData.distances,
            datasets: [{
                label: `Intensidad para P=${P}W`,
                data: simData.intensities,
                borderColor: '#eab308',
                backgroundColor: 'rgba(234, 179, 8, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: 'Punto Actual',
                data: [{x: r_active, y: calcIntensity(P, r_active)}],
                backgroundColor: '#ef4444',
                borderColor: '#ef4444',
                pointRadius: 6,
                type: 'scatter'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Distancia r (m)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' },
                    type: 'linear',
                    min: 0.5,
                    max: 10
                },
                y: {
                    title: { display: true, text: 'Intensidad Incidente I (W/m²)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                legend: { labels: { color: '#f1f5f9', font: { family: 'Outfit', size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `I = ${context.parsed.y.toFixed(2)} W/m²`;
                        }
                    }
                }
            }
        }
    });

    const updateDisplay = () => {
        const p_val = parseInt(sliderPower.value);
        const r_val = parseFloat(sliderDist.value);
        document.getElementById("invsq-power-val").textContent = p_val;
        document.getElementById("invsq-dist-val").textContent = r_val.toFixed(1);
        
        const I = calcIntensity(p_val, r_val);
        document.getElementById("invsq-intensity-val").innerHTML = `${I.toFixed(2)} W/m&sup2;`;
        
        const newData = updateInvSqData(p_val);
        invsqChart.data.datasets[0].label = `Intensidad para P=${p_val}W`;
        invsqChart.data.datasets[0].data = newData.intensities;
        
        // Update scatter point
        invsqChart.data.datasets[1].data = [{x: r_val, y: I}];
        
        invsqChart.update('none');
    };

    sliderPower.addEventListener("input", updateDisplay);
    sliderDist.addEventListener("input", updateDisplay);
    
    updateDisplay();
}

/* =========================================================================
   FIN COOLING SIMULATOR
   ========================================================================= */
let finChart;

function initFinSimulation() {
    const sliderL = document.getElementById("fin-length");
    const sliderK = document.getElementById("fin-k");
    const sliderH = document.getElementById("fin-h");
    const sliderTL = document.getElementById("fin-tl");
    const sliderTinf = document.getElementById("fin-tinf");
    const sliderD = document.getElementById("fin-d");
    const ctx = document.getElementById("finChart");
    if (!ctx) return;

    // Constants
    let Tb = 100; // Base temperature 100 °C

    function calcHeatRates(L_m, k, h, TL, Tinf, P, A) {

        const m = Math.sqrt((h * P) / (k * A));
        const theta_b = Tb - Tinf;
        const M = Math.sqrt(h * P * k * A) * theta_b;
        const h_mk = h / (m * k);
        const mL = m * L_m;

        // Infinitamente Larga
        const q_inf = M;
        
        // Punta Aislada
        const q_iso = M * Math.tanh(mL);
        
        // Punta con Convección
        const numConv = Math.sinh(mL) + h_mk * Math.cosh(mL);
        const denConv = Math.cosh(mL) + h_mk * Math.sinh(mL);
        const q_conv = M * (numConv / denConv);
        
        // Punta Temperatura Especificada
        const theta_L = TL - Tinf;
        const q_spec = M * (Math.cosh(mL) - (theta_L / theta_b)) / Math.sinh(mL);
        
        // Longitud Corregida
        const L_c = L_m + A / P;
        const q_corr = M * Math.tanh(m * L_c);
        
        return { q_iso, q_conv, q_spec, q_inf, q_corr };
    }

    function calcTemps(x, L, k, h, TL, Tinf, P, A) {

        const m = Math.sqrt((h * P) / (k * A));
        const theta_b = Tb - Tinf;
        const h_mk = h / (m * k);
        
        // Punta aislada (Adiabática)
        const numIso = Math.cosh(m * (L - x));
        const denIso = Math.cosh(m * L);
        const T_iso = Tinf + theta_b * (numIso / denIso);
        
        // Punta con convección
        const numConv = Math.cosh(m * (L - x)) + h_mk * Math.sinh(m * (L - x));
        const denConv = Math.cosh(m * L) + h_mk * Math.sinh(m * L);
        const T_conv = Tinf + theta_b * (numConv / denConv);

        // Punta a temperatura especificada
        const theta_L = TL - Tinf;
        const numSpec = (theta_L / theta_b) * Math.sinh(m * x) + Math.sinh(m * (L - x));
        const denSpec = Math.sinh(m * L);
        const T_spec = Tinf + theta_b * (numSpec / denSpec);
        
        // Infinitamente Larga
        const T_infLong = Tinf + theta_b * Math.exp(-m * x);
        const L_c = L + A / P;
        const numCorr = Math.cosh(m * (L_c - x));
        const denCorr = Math.cosh(m * L_c);
        const T_corr = Tinf + theta_b * (numCorr / denCorr);
        return { T_iso, T_conv, T_spec, T_infLong, T_corr };
    }

    function updateFinData(L_cm, k, h, TL, Tinf, P, A) {
        const L = L_cm / 100.0;
        const x_cm_arr = [];
        const T_iso_arr = [];
        const T_conv_arr = [];
        const T_spec_arr = [];
        const T_infLong_arr = [];
        const T_corr_arr = [];
        
        // 50 points along the fin
        for (let i = 0; i <= 50; i++) {
            const x_cm = (i / 50) * L_cm;
            const x = x_cm / 100.0;
            x_cm_arr.push(parseFloat(x_cm.toFixed(2)));
            
            const temps = calcTemps(x, L, k, h, TL, Tinf, P, A);
            T_iso_arr.push(temps.T_iso);
            T_conv_arr.push(temps.T_conv);
            T_spec_arr.push(temps.T_spec);
            T_infLong_arr.push(temps.T_infLong);
            T_corr_arr.push(temps.T_corr);
        }
        return { x_cm_arr, T_iso_arr, T_conv_arr, T_spec_arr, T_infLong_arr, T_corr_arr };
    }

    let L_cm = parseInt(sliderL.value);
    let k = parseInt(sliderK.value);
    let h = parseInt(sliderH.value);
    let TL = parseInt(sliderTL.value);
    let Tinf = parseInt(sliderTinf.value);
    let D_mm = parseInt(sliderD.value);
    let P_init = Math.PI * (D_mm/1000.0);
    let Ac_init = (Math.PI / 4) * Math.pow(D_mm/1000.0, 2);
    let simData = updateFinData(L_cm, k, h, TL, Tinf, P_init, Ac_init);

    finChart = new Chart(ctx.getContext("2d"), {
        type: 'line',
        data: {
            labels: simData.x_cm_arr,
            datasets: [{
                label: `Punta Aislada`,
                data: simData.T_iso_arr,
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: `Punta c/ Convección`,
                data: simData.T_conv_arr,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.0)',
                borderWidth: 3,
                borderDash: [5, 5],
                fill: false,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: `Temp. Especificada`,
                data: simData.T_spec_arr,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.0)',
                borderWidth: 3,
                borderDash: [2, 2],
                fill: false,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: `Infinitamente Larga`,
                data: simData.T_infLong_arr,
                borderColor: '#eab308',
                backgroundColor: 'rgba(234, 179, 8, 0.0)',
                borderWidth: 3,
                borderDash: [10, 5],
                fill: false,
                tension: 0.4,
                pointRadius: 0
            }, {
                label: `Long. Corregida`,
                data: simData.T_corr_arr,
                borderColor: '#a855f7',
                backgroundColor: 'rgba(168, 85, 247, 0.0)',
                borderWidth: 3,
                borderDash: [8, 4],
                fill: false,
                tension: 0.4,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Distancia x (cm)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                },
                y: {
                    title: { display: true, text: 'Temperatura T (°C)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' }
                }
            },
            plugins: {
                legend: { labels: { color: '#f1f5f9', font: { family: 'Outfit', size: 12 } } },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(1)} °C`;
                        }
                    }
                }
            }
        }
    });

    const updateDisplay = () => {
        const sliderTb = document.getElementById("fin-tb");
        const valTb = document.getElementById("fin-tb-val");
        if (sliderTb) {
            Tb = parseFloat(sliderTb.value);
            if (valTb) valTb.textContent = Tb;
        }
        const l_val = parseInt(sliderL.value);
        const k_val = parseInt(sliderK.value);
        const h_val = parseInt(sliderH.value);
        const tl_val = parseInt(sliderTL.value);
        const tinf_val = parseInt(sliderTinf.value);
        const d_val = parseInt(sliderD.value);
        const w_val = parseInt(document.getElementById("fin-w").value);
        const t_val = parseInt(document.getElementById("fin-t").value);
        const shape = document.getElementById("fin-shape").value;
        
        document.getElementById("fin-d-val").textContent = d_val;
        document.getElementById("fin-w-val").textContent = w_val;
        document.getElementById("fin-t-val").textContent = t_val;
        document.getElementById("fin-length-val").textContent = l_val;
        document.getElementById("fin-k-val").textContent = k_val;
        document.getElementById("fin-h-val").textContent = h_val;
        document.getElementById("fin-tinf-val").textContent = tinf_val;
        document.getElementById("fin-tl-val").textContent = tl_val;
        
        let Ac, P;
        if (shape === 'circular') {
            const D_m = d_val / 1000.0;
            Ac = (Math.PI / 4) * Math.pow(D_m, 2);
            P = Math.PI * D_m;
        } else {
            const W_m = w_val / 1000.0;
            const T_m = t_val / 1000.0;
            Ac = W_m * T_m;
            P = 2 * (W_m + T_m);
        }
        
        const newData = updateFinData(l_val, k_val, h_val, tl_val, tinf_val, P, Ac);
        finChart.data.labels = newData.x_cm_arr;
        finChart.data.datasets[0].data = newData.T_iso_arr;
        finChart.data.datasets[1].data = newData.T_conv_arr;
        finChart.data.datasets[2].data = newData.T_spec_arr;
        finChart.data.datasets[3].data = newData.T_infLong_arr;
        if(finChart.data.datasets[4]) finChart.data.datasets[4].data = newData.T_corr_arr;
        
        // Update tip temperatures
        const tipTempIso = newData.T_iso_arr[newData.T_iso_arr.length - 1];
        const tipTempConv = newData.T_conv_arr[newData.T_conv_arr.length - 1];
        const tipTempSpec = newData.T_spec_arr[newData.T_spec_arr.length - 1];
        const tipTempInf = newData.T_infLong_arr[newData.T_infLong_arr.length - 1];
        const tipTempCorr = newData.T_corr_arr[newData.T_corr_arr.length - 1];
        document.getElementById("fin-tip-temp-iso-val").innerHTML = `${tipTempIso.toFixed(1)} &deg;C`;
        document.getElementById("fin-tip-temp-conv-val").innerHTML = `${tipTempConv.toFixed(1)} &deg;C`;
        document.getElementById("fin-tip-temp-spec-val").innerHTML = `${tipTempSpec.toFixed(1)} &deg;C`;
        document.getElementById("fin-tip-temp-inf-val").innerHTML = `${tipTempInf.toFixed(1)} &deg;C`;
        const elTipCorr = document.getElementById("fin-tip-temp-corr-val");
        if(elTipCorr) elTipCorr.innerHTML = `${tipTempCorr.toFixed(1)} &deg;C`;
        
        finChart.update('none');

        const sliderX = document.getElementById("fin-x");
        if (sliderX) {
            sliderX.max = l_val;
            let x_val = parseFloat(sliderX.value);
            if (x_val > l_val) { x_val = l_val; sliderX.value = l_val; }
            document.getElementById("fin-x-val").textContent = x_val.toFixed(1);
            
            const x_m = x_val / 100.0;
            const L_m = l_val / 100.0;
            const tempsAtX = calcTemps(x_m, L_m, k_val, h_val, tl_val, tinf_val, P, Ac);
            
            const elIso = document.getElementById("fin-x-iso-val");
            const elConv = document.getElementById("fin-x-conv-val");
            const elSpec = document.getElementById("fin-x-spec-val");
            const elInf = document.getElementById("fin-x-inf-val");
            const elCorr = document.getElementById("fin-x-corr-val");
            
            if (elIso) elIso.innerHTML = tempsAtX.T_iso.toFixed(1);
            if (elConv) elConv.innerHTML = tempsAtX.T_conv.toFixed(1);
            if (elSpec) elSpec.innerHTML = tempsAtX.T_spec.toFixed(1);
            if (elInf) elInf.innerHTML = tempsAtX.T_infLong.toFixed(1);
            if (elCorr) elCorr.innerHTML = tempsAtX.T_corr.toFixed(1);
        }

        // Calculate and update heat rates, efficiency, and effectiveness
        const L_m = l_val / 100.0;
        const A_c = Ac; // already calculated above
        const heats = calcHeatRates(L_m, k_val, h_val, tl_val, tinf_val, P, A_c);
        const theta_b = Tb - tinf_val;
        
        const q_no_fin = h_val * A_c * theta_b;
        const q_max = h_val * P * L_m * theta_b;
        
        const m_val = Math.sqrt((h_val * P) / (k_val * A_c));
        const acElem = document.getElementById("fin-ac-display-val");
        const mElem = document.getElementById("fin-m-display-val");
        if (acElem) acElem.innerHTML = A_c.toExponential(4);
        if (mElem) mElem.innerHTML = m_val.toFixed(2);
        
        document.getElementById("fin-q-iso-val").innerHTML = `${heats.q_iso.toFixed(2)}`;
        document.getElementById("fin-q-conv-val").innerHTML = `${heats.q_conv.toFixed(2)}`;
        document.getElementById("fin-q-spec-val").innerHTML = `${heats.q_spec.toFixed(2)}`;
        document.getElementById("fin-q-inf-val").innerHTML = `${heats.q_inf.toFixed(2)}`;
        const elQCorr = document.getElementById("fin-q-corr-val");
        if(elQCorr) elQCorr.innerHTML = `${heats.q_corr.toFixed(2)}`;

        // Efficiency (eta)
        document.getElementById("fin-eff-iso-val").innerHTML = Math.abs(q_max) > 1e-6 ? `${(heats.q_iso / q_max * 100).toFixed(1)}` : `0.0`;
        document.getElementById("fin-eff-conv-val").innerHTML = Math.abs(q_max) > 1e-6 ? `${(heats.q_conv / q_max * 100).toFixed(1)}` : `0.0`;
        document.getElementById("fin-eff-spec-val").innerHTML = Math.abs(q_max) > 1e-6 ? `${(heats.q_spec / q_max * 100).toFixed(1)}` : `0.0`;
        const elEffCorr = document.getElementById("fin-eff-corr-val");
        if(elEffCorr) elEffCorr.innerHTML = Math.abs(q_max) > 1e-6 ? `${(heats.q_corr / q_max * 100).toFixed(1)}` : `0.0`;

        // Effectiveness (epsilon)
        document.getElementById("fin-eps-iso-val").innerHTML = Math.abs(q_no_fin) > 1e-6 ? `${(heats.q_iso / q_no_fin).toFixed(1)}` : `0.0`;
        document.getElementById("fin-eps-conv-val").innerHTML = Math.abs(q_no_fin) > 1e-6 ? `${(heats.q_conv / q_no_fin).toFixed(1)}` : `0.0`;
        document.getElementById("fin-eps-spec-val").innerHTML = Math.abs(q_no_fin) > 1e-6 ? `${(heats.q_spec / q_no_fin).toFixed(1)}` : `0.0`;
        document.getElementById("fin-eps-inf-val").innerHTML = Math.abs(q_no_fin) > 1e-6 ? `${(heats.q_inf / q_no_fin).toFixed(1)}` : `0.0`;
        const elEpsCorr = document.getElementById("fin-eps-corr-val");
        if(elEpsCorr) elEpsCorr.innerHTML = Math.abs(q_no_fin) > 1e-6 ? `${(heats.q_corr / q_no_fin).toFixed(1)}` : `0.0`;
    };

    sliderD.addEventListener("input", updateDisplay);
    document.getElementById("fin-w").addEventListener("input", updateDisplay);
    document.getElementById("fin-t").addEventListener("input", updateDisplay);
    document.getElementById("fin-shape").addEventListener("change", function() {
        if(this.value === 'circular') {
            document.getElementById('fin-d-group').style.display = 'block';
            document.getElementById('fin-w-group').style.display = 'none';
            document.getElementById('fin-t-group').style.display = 'none';
        } else {
            document.getElementById('fin-d-group').style.display = 'none';
            document.getElementById('fin-w-group').style.display = 'block';
            document.getElementById('fin-t-group').style.display = 'block';
        }
        updateDisplay();
    });
    const sliderTb = document.getElementById("fin-tb");
    if (sliderTb) sliderTb.addEventListener("input", updateDisplay);
    sliderL.addEventListener("input", updateDisplay);
    sliderK.addEventListener("input", updateDisplay);
    sliderH.addEventListener("input", updateDisplay);
    sliderTL.addEventListener("input", updateDisplay);
    sliderTinf.addEventListener("input", updateDisplay);
    const sliderX = document.getElementById("fin-x");
    if (sliderX) sliderX.addEventListener("input", updateDisplay);
    
    updateDisplay();
}



// ----------------------------------------------------
let genChartInstance = null;

function initGenerationSimulation() {
    const sliderQdot = document.getElementById('gen-qdot');
    const sliderK = document.getElementById('gen-k');
    const sliderH = document.getElementById('gen-h');
    const sliderTinf = document.getElementById('gen-tinf');
    const sliderW = document.getElementById('gen-w');
    
    const valQdot = document.getElementById('gen-qdot-val');
    const valK = document.getElementById('gen-k-val');
    const valH = document.getElementById('gen-h-val');
    const valTinf = document.getElementById('gen-tinf-val');
    const valW = document.getElementById('gen-w-val');
    
    const valTs = document.getElementById('gen-ts-val');
    const valTmax = document.getElementById('gen-tmax-val');
    const valTsCyl = document.getElementById('gen-ts-cyl');
    const valTmaxCyl = document.getElementById('gen-tmax-cyl');
    const valTsSph = document.getElementById('gen-ts-sph');
    const valTmaxSph = document.getElementById('gen-tmax-sph');
    
    const ctx = document.getElementById('genChart').getContext('2d');
    
    genChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Pared Plana',
                    data: [],
                    borderColor: '#f97316',
                    backgroundColor: 'rgba(249, 115, 22, 0.05)',
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Cilindro Infinito',
                    data: [],
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.4
                },
                {
                    label: 'Esfera',
                    data: [],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.05)',
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: 'Posición x (m)', color: '#94a3b8' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: '#cbd5e1' }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: '#cbd5e1' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e2e8f0' } },
                annotation: {
                    annotations: {
                        leftWall: {
                            type: 'line',
                            xMin: 0,
                            xMax: 0,
                            borderColor: '#38bdf8',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: 'Superficie',
                                position: 'end',
                                backgroundColor: 'rgba(56, 189, 248, 0.8)'
                            }
                        },
                        rightWall: {
                            type: 'line',
                            xMin: 0,
                            xMax: 0,
                            borderColor: '#38bdf8',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                display: true,
                                content: 'Superficie',
                                position: 'end',
                                backgroundColor: 'rgba(56, 189, 248, 0.8)'
                            }
                        }
                    }
                }
            }
        }
    });

    function updateSimulation() {
        const qdot = parseFloat(sliderQdot.value) * 1000;
        const k = parseFloat(sliderK.value);
        const h = parseFloat(sliderH.value);
        const Tinf = parseFloat(sliderTinf.value);
        const w = parseFloat(sliderW.value);
        const L = w / 2;
        
        valQdot.textContent = sliderQdot.value;
        valK.textContent = sliderK.value;
        valH.textContent = sliderH.value;
        valTinf.textContent = sliderTinf.value;
        valW.textContent = sliderW.value;
        
        // Calculations for Flat Plate
        const Ts = Tinf + (qdot * L) / h;
        const Tmax = Ts + (qdot * L * L) / (2 * k);
        valTs.textContent = Ts.toFixed(1) + " °C";
        valTmax.textContent = Tmax.toFixed(1) + " °C";

        // Calculations for Cylinder
        const TsCyl = Tinf + (qdot * L) / (2 * h);
        const TmaxCyl = TsCyl + (qdot * L * L) / (4 * k);
        if (valTsCyl) valTsCyl.textContent = TsCyl.toFixed(1) + " °C";
        if (valTmaxCyl) valTmaxCyl.textContent = TmaxCyl.toFixed(1) + " °C";

        // Calculations for Sphere
        const TsSph = Tinf + (qdot * L) / (3 * h);
        const TmaxSph = TsSph + (qdot * L * L) / (6 * k);
        if (valTsSph) valTsSph.textContent = TsSph.toFixed(1) + " °C";
        if (valTmaxSph) valTmaxSph.textContent = TmaxSph.toFixed(1) + " °C";
        
        const points = 50;
        const dataPlate = [];
        const dataCyl = [];
        const dataSph = [];
        const dx = w / points;
        
        for (let i = 0; i <= points; i++) {
            const x = -L + i * dx;
            const r = Math.abs(x);
            
            // Plate
            const T_plate = Ts + (qdot / (2 * k)) * (L * L - x * x);
            dataPlate.push({ x: x, y: T_plate });

            // Cylinder
            const T_cyl = TsCyl + (qdot / (4 * k)) * (L * L - r * r);
            dataCyl.push({ x: x, y: T_cyl });

            // Sphere
            const T_sph = TsSph + (qdot / (6 * k)) * (L * L - r * r);
            dataSph.push({ x: x, y: T_sph });
        }
        
        genChartInstance.data.datasets[0].data = dataPlate;
        genChartInstance.data.datasets[1].data = dataCyl;
        genChartInstance.data.datasets[2].data = dataSph;
        
        genChartInstance.options.plugins.annotation.annotations.leftWall.xMin = -L;
        genChartInstance.options.plugins.annotation.annotations.leftWall.xMax = -L;
        genChartInstance.options.plugins.annotation.annotations.rightWall.xMin = L;
        genChartInstance.options.plugins.annotation.annotations.rightWall.xMax = L;
        
        const margin = Math.max(10, (Tmax - Tinf) * 0.2);
        genChartInstance.options.scales.y.min = Math.floor(Tinf - margin);
        genChartInstance.options.scales.y.max = Math.ceil(Tmax + margin);
        genChartInstance.options.scales.x.min = -L * 1.2;
        genChartInstance.options.scales.x.max = L * 1.2;
        
        genChartInstance.update();
    }

    [sliderQdot, sliderK, sliderH, sliderTinf, sliderW].forEach(slider => {
        slider.addEventListener('input', updateSimulation);
    });
    
    window.addEventListener('resize', () => {
        if(document.getElementById('gen-sim').classList.contains('active')){
            genChartInstance.resize();
            updateSimulation();
        }
    });

    updateSimulation();
}

// ----------------------------------------------------
// 8. Multilayer Wall Simulator
// ----------------------------------------------------
let multiChartInstance = null;

function initMultiLayerSimulation() {
    const sliderTinf1 = document.getElementById('multi-tinf1');
    const sliderH1 = document.getElementById('multi-h1');
    const sliderL1 = document.getElementById('multi-l1');
    const sliderK1 = document.getElementById('multi-k1');
    
    const sliderL2 = document.getElementById('multi-l2');
    const sliderK2 = document.getElementById('multi-k2');

    const sliderL3 = document.getElementById('multi-l3');
    const sliderK3 = document.getElementById('multi-k3');

    const sliderTinf2 = document.getElementById('multi-tinf2');
    const sliderH2 = document.getElementById('multi-h2');
    
    const valTinf1 = document.getElementById('multi-tinf1-val');
    const valH1 = document.getElementById('multi-h1-val');
    const valL1 = document.getElementById('multi-l1-val');
    const valK1 = document.getElementById('multi-k1-val');
    
    const valL2 = document.getElementById('multi-l2-val');
    const valK2 = document.getElementById('multi-k2-val');

    const valL3 = document.getElementById('multi-l3-val');
    const valK3 = document.getElementById('multi-k3-val');

    const valTinf2 = document.getElementById('multi-tinf2-val');
    const valH2 = document.getElementById('multi-h2-val');
    
    const valQ = document.getElementById('multi-q-val');
    const valR = document.getElementById('multi-r-val');
    const valRConv1 = document.getElementById('multi-r-conv1-val');
    const valRCond1 = document.getElementById('multi-r-cond1-val');
    const valRCond2 = document.getElementById('multi-r-cond2-val');
    const valRCond3 = document.getElementById('multi-r-cond3-val');
    const valRConv2 = document.getElementById('multi-r-conv2-val');
    const valTs1 = document.getElementById('multi-ts1-val');
    const valTint1 = document.getElementById('multi-tint1-val');
    const valTint2 = document.getElementById('multi-tint2-val');
    const valTs2 = document.getElementById('multi-ts2-val');
    
    const ctx = document.getElementById('multiChart').getContext('2d');
    
    multiChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Perfil de Temperatura',
                data: [],
                borderColor: '#f97316',
                backgroundColor: 'transparent',
                borderWidth: 3,
                pointRadius: 6,
                pointBackgroundColor: '#fff',
                tension: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: 'Posición x (m)', color: '#94a3b8' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: '#cbd5e1' }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: '#cbd5e1' }
                }
            },
            plugins: {
                legend: { display: false },
                annotation: {
                    annotations: {
                        boxLayer1: {
                            type: 'box',
                            xMin: 0,
                            xMax: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.04)',
                            borderWidth: 0,
                            label: {
                                display: true,
                                content: 'Capa 1',
                                position: 'center',
                                color: 'rgba(255,255,255,0.3)',
                                font: { size: 12 }
                            }
                        },
                        boxLayer2: {
                            type: 'box',
                            xMin: 0,
                            xMax: 0,
                            backgroundColor: 'rgba(56, 189, 248, 0.04)',
                            borderWidth: 0,
                            label: {
                                display: true,
                                content: 'Capa 2',
                                position: 'center',
                                color: 'rgba(56,189,248,0.3)',
                                font: { size: 12 }
                            }
                        },
                        boxLayer3: {
                            type: 'box',
                            xMin: 0,
                            xMax: 0,
                            backgroundColor: 'rgba(16, 185, 129, 0.04)',
                            borderWidth: 0,
                            label: {
                                display: true,
                                content: 'Capa 3',
                                position: 'center',
                                color: 'rgba(16,185,129,0.3)',
                                font: { size: 12 }
                            }
                        }
                    }
                }
            }
        }
    });

    function updateSimulation() {
        const Tinf1 = parseFloat(sliderTinf1.value);
        const h1 = parseFloat(sliderH1.value);
        const L1 = parseFloat(sliderL1.value);
        const k1 = parseFloat(sliderK1.value);
        
        const L2 = parseFloat(sliderL2.value);
        const k2 = parseFloat(sliderK2.value);

        const L3 = parseFloat(sliderL3.value);
        const k3 = parseFloat(sliderK3.value);

        const Tinf2 = parseFloat(sliderTinf2.value);
        const h2 = parseFloat(sliderH2.value);
        
        valTinf1.textContent = sliderTinf1.value;
        valH1.textContent = sliderH1.value;
        valL1.textContent = sliderL1.value;
        valK1.textContent = sliderK1.value;
        
        valL2.textContent = sliderL2.value;
        valK2.textContent = sliderK2.value;

        valL3.textContent = sliderL3.value;
        valK3.textContent = sliderK3.value;

        valTinf2.textContent = sliderTinf2.value;
        valH2.textContent = sliderH2.value;
        
        const rConv1 = 1 / h1;
        const rCond1 = L1 / k1;
        const rCond2 = L2 / k2;
        const rCond3 = L3 / k3;
        const rConv2 = 1 / h2;
        const rTot = rConv1 + rCond1 + rCond2 + rCond3 + rConv2;
        
        const q = (Tinf1 - Tinf2) / rTot;
        
        const Ts1 = Tinf1 - q * rConv1;
        const Tint1 = Ts1 - q * rCond1;
        const Tint2 = Tint1 - q * rCond2;
        const Ts2 = Tint2 - q * rCond3;
        
        valQ.textContent = (q / 1000).toFixed(2) + " kW/m²";
        valR.textContent = rTot.toFixed(4) + " m²K/W";
        if (valRConv1) valRConv1.textContent = rConv1.toFixed(4) + " m²K/W";
        if (valRCond1) valRCond1.textContent = rCond1.toFixed(4) + " m²K/W";
        if (valRCond2) valRCond2.textContent = rCond2.toFixed(4) + " m²K/W";
        if (valRCond3) valRCond3.textContent = rCond3.toFixed(4) + " m²K/W";
        if (valRConv2) valRConv2.textContent = rConv2.toFixed(4) + " m²K/W";
        valTs1.textContent = Ts1.toFixed(1) + " °C";
        valTint1.textContent = Tint1.toFixed(1) + " °C";
        valTint2.textContent = Tint2.toFixed(1) + " °C";
        valTs2.textContent = Ts2.toFixed(1) + " °C";
        
        const delta = 0.05; 
        const freeStream = 0.03; 
        
        const xS1 = 0;
        const xInt1 = L1;
        const xInt2 = L1 + L2;
        const xS2 = L1 + L2 + L3;
        
        const data = [];
        const numFluidPoints = 20; 
        
        // Left boundary layer fluid curve
        data.push({ x: xS1 - delta - freeStream, y: Tinf1 });
        data.push({ x: xS1 - delta, y: Tinf1 });
        
        for (let i = 1; i <= numFluidPoints; i++) {
            const fraction = i / numFluidPoints; 
            const x = xS1 - delta + (delta * fraction);
            const T = Tinf1 + (Ts1 - Tinf1) * Math.pow(fraction, 2);
            data.push({ x: x, y: T });
        }
        
        // Wall boundaries & interfaces
        data.push({ x: xS1, y: Ts1 });
        data.push({ x: xInt1, y: Tint1 });
        data.push({ x: xInt2, y: Tint2 });
        data.push({ x: xS2, y: Ts2 });
        
        // Right boundary layer fluid curve
        for (let i = 1; i <= numFluidPoints; i++) {
            const fraction = i / numFluidPoints; 
            const x = xS2 + (delta * fraction);
            const T = Ts2 - (Ts2 - Tinf2) * (2 * fraction - Math.pow(fraction, 2));
            data.push({ x: x, y: T });
        }
        
        data.push({ x: xS2 + delta + freeStream, y: Tinf2 });
        
        multiChartInstance.data.datasets[0].data = data;
        
        multiChartInstance.options.plugins.annotation.annotations.boxLayer1.xMin = xS1;
        multiChartInstance.options.plugins.annotation.annotations.boxLayer1.xMax = xInt1;
        
        multiChartInstance.options.plugins.annotation.annotations.boxLayer2.xMin = xInt1;
        multiChartInstance.options.plugins.annotation.annotations.boxLayer2.xMax = xInt2;

        multiChartInstance.options.plugins.annotation.annotations.boxLayer3.xMin = xInt2;
        multiChartInstance.options.plugins.annotation.annotations.boxLayer3.xMax = xS2;
        
        const maxT = Math.max(Tinf1, Tinf2, Ts1, Ts2, Tint1, Tint2);
        const minT = Math.min(Tinf1, Tinf2, Ts1, Ts2, Tint1, Tint2);
        const marginY = Math.max(10, (maxT - minT) * 0.1);
        
        multiChartInstance.options.scales.y.min = Math.floor(minT - marginY);
        multiChartInstance.options.scales.y.max = Math.ceil(maxT + marginY);
        
        multiChartInstance.options.scales.x.min = xS1 - delta - freeStream;
        multiChartInstance.options.scales.x.max = xS2 + delta + freeStream;
        
        multiChartInstance.update();
    }

    [sliderTinf1, sliderH1, sliderL1, sliderK1, sliderL2, sliderK2, sliderL3, sliderK3, sliderTinf2, sliderH2].forEach(slider => {
        slider.addEventListener('input', updateSimulation);
    });
    
    window.addEventListener('resize', () => {
        if(document.getElementById('multi-sim').classList.contains('active')){
            multiChartInstance.resize();
            updateSimulation();
        }
    });

    updateSimulation();
}

// ==========================================
// Newton's Cooling Simulation
// ==========================================
function initNewtonSimulation() {
    const canvas = document.getElementById('newtonCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderTi = document.getElementById('newton-ti');
    const sliderTinf = document.getElementById('newton-tinf');
    const selectMedium = document.getElementById('newton-medium');
    const sliderD = document.getElementById('newton-d');
    const sliderK = document.getElementById('newton-k');
    const sliderRho = document.getElementById('newton-rho');
    const sliderCp = document.getElementById('newton-cp');
    
    const valTi = document.getElementById('newton-ti-val');
    const valTinf = document.getElementById('newton-tinf-val');
    const valD = document.getElementById('newton-d-val');
    const valK = document.getElementById('newton-k-val');
    const valRho = document.getElementById('newton-rho-val');
    const valCp = document.getElementById('newton-cp-val');
    
    const resBi = document.getElementById('newton-bi-res');
    const resTau = document.getElementById('newton-tau-res');
    const resTime = document.getElementById('newton-time');
    const resCurrentT = document.getElementById('newton-current-t');
    
    const startBtn = document.getElementById('newton-start-btn');
    const resetBtn = document.getElementById('newton-reset-btn');
    
    const graphCanvas = document.getElementById('newtonGraph');
    const graphCtx = graphCanvas.getContext('2d');
    
    const L_cylinder = 0.1; 
    
    let chartInstance = new Chart(graphCtx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'T(t) Cilindro de Hierro',
                    data: [],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.1
                },
                {
                    label: 'Estado Actual',
                    data: [],
                    borderColor: '#fbbf24',
                    backgroundColor: '#fbbf24',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    showLine: false
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: 'linear',
                    title: { display: true, text: 'Tiempo (s)', color: '#94a3b8' },
                    ticks: {
                        color: '#cbd5e1',
                        precision: 0,
                        callback: function(value) {
                            if (value % 1 === 0) {
                                return value;
                            }
                        }
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    ticks: { color: '#cbd5e1' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            },
            plugins: {
                legend: { labels: { color: '#e2e8f0' } }
            }
        }
    });

    let animationId;
    let simTime = 0;
    let particles = [];
    const timeScale = 50; 
    let lastTimestamp = 0;
    let isPlaying = false;
    
    let currentTi, currentTinf, currentH, currentD, currentK, currentRho, currentCp;
    let currentTau, currentBi;
    
    function initParticles() {
        particles = [];
        const numParticles = 100;
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2 - 1 
            });
        }
    }

    function updateSimulationParams() {
        currentTi = parseFloat(sliderTi.value);
        currentTinf = parseFloat(sliderTinf.value);
        currentH = parseFloat(selectMedium.value);
        currentD = parseFloat(sliderD.value);
        currentK = parseFloat(sliderK.value);
        currentRho = parseFloat(sliderRho.value);
        currentCp = parseFloat(sliderCp.value);
        
        valTi.textContent = currentTi;
        valTinf.textContent = currentTinf;
        valD.textContent = currentD.toFixed(2);
        if (valK) valK.textContent = currentK.toFixed(1);
        if (valRho) valRho.textContent = currentRho;
        if (valCp) valCp.textContent = currentCp;
        
        const r = currentD / 2;
        const As = 2 * Math.PI * r * L_cylinder + 2 * Math.PI * r * r;
        const V = Math.PI * r * r * L_cylinder;
        const Lc = V / As;
        
        currentBi = (currentH * Lc) / currentK;
        currentTau = (currentRho * V * currentCp) / (currentH * As);
        
        resBi.innerHTML = currentBi.toFixed(4) + (currentBi < 0.1 ? " <span style='color:#10b981;'>(Válido)</span>" : " <span style='color:#ef4444;'>(Inválido)</span>");
        resTau.innerHTML = currentTau.toFixed(1) + " s";
        
        if (!isPlaying) {
            simTime = 0;
            resTime.innerHTML = simTime.toFixed(1) + " s";
            if (resCurrentT) {
                resCurrentT.textContent = currentTi.toFixed(1) + " °C";
            }
        }
        
        lastTimestamp = performance.now();
        initParticles();
        
        const tMax = currentTau * 5;
        const graphData = [];
        for (let t = 0; t <= tMax; t += tMax/50) {
            const T = currentTinf + (currentTi - currentTinf) * Math.exp(-t / currentTau);
            graphData.push({ x: t, y: T });
        }
        chartInstance.data.datasets[0].data = graphData;
        
        const currentT = currentTinf + (currentTi - currentTinf) * Math.exp(-simTime / currentTau);
        chartInstance.data.datasets[1].data = [{ x: simTime, y: currentT }];
        
        const maxTemp = Math.max(currentTi, currentTinf);
        const minTemp = Math.min(currentTi, currentTinf);
        chartInstance.options.scales.y.max = maxTemp > 500 ? Math.ceil(maxTemp / 100) * 100 : (Math.ceil(maxTemp / 10) * 10 + 10);
        chartInstance.options.scales.y.min = minTemp < 0 ? Math.floor(minTemp / 10) * 10 : (minTemp > 20 ? 0 : Math.floor(minTemp / 10) * 10 - 10);
        chartInstance.options.scales.x.max = tMax;
        
        chartInstance.update();
    }

    function getColorForTemp(T) {
        const minT = 0;
        const maxT = 500;
        const normalized = Math.max(0, Math.min(1, (T - minT) / (maxT - minT)));
        const r = Math.round(normalized * 255);
        const b = Math.round((1 - normalized) * 255);
        return `rgb(${r}, 50, ${b})`;
    }

    function draw(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const dt = (timestamp - lastTimestamp) / 1000; 
        lastTimestamp = timestamp;
        
        if (isPlaying) {
            simTime += dt * timeScale;
        }
        resTime.innerHTML = simTime.toFixed(1) + " s";
        
        const currentT = currentTinf + (currentTi - currentTinf) * Math.exp(-simTime / currentTau);
        
        // Auto-pause when equilibrium is reached (difference < 0.05 °C)
        if (isPlaying && Math.abs(currentT - currentTinf) < 0.05) {
            isPlaying = false;
            if (startBtn) {
                startBtn.textContent = 'Iniciar Enfriamiento';
                startBtn.style.background = '#3b82f6';
            }
        }
        
        if (resCurrentT) {
            resCurrentT.textContent = currentT.toFixed(1) + " °C";
        }
        
        chartInstance.data.datasets[1].data = [{ x: simTime, y: currentT }];
        
        // Dynamically adjust x-axis if simTime exceeds the current max
        if (simTime > chartInstance.options.scales.x.max) {
            const newMax = simTime + currentTau;
            chartInstance.options.scales.x.max = newMax;
            
            const graphData = [];
            for (let t = 0; t <= newMax; t += newMax/50) {
                const T = currentTinf + (currentTi - currentTinf) * Math.exp(-t / currentTau);
                graphData.push({ x: t, y: T });
            }
            chartInstance.data.datasets[0].data = graphData;
        }
        
        chartInstance.update('none');
        
        const parent = canvas.parentElement;
        if (canvas.width !== parent.clientWidth || canvas.height !== parent.clientHeight) {
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            initParticles();
        }

        ctx.fillStyle = 'rgba(15, 23, 42, 0.3)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        
        const minR = 20;
        const maxR = 100;
        const visualR = minR + ((currentD - 0.01) / (0.3 - 0.01)) * (maxR - minR);
        
        ctx.fillStyle = getColorForTemp(currentTinf);
        particles.forEach(p => {
            const deltaT = currentT - currentTinf;
            const dist = Math.hypot(p.x - cx, p.y - cy);
            
            let speedFactor = 1;
            if (dist < visualR * 3) {
                speedFactor = 1 + (deltaT / 100) * (1 - dist / (visualR * 3));
            }
            
            p.x += p.vx * speedFactor;
            p.y += p.vy * speedFactor;
            
            if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
                if (Math.random() > 0.5) {
                    p.x = Math.random() * canvas.width;
                    p.y = canvas.height;
                } else {
                    p.x = Math.random() > 0.5 ? 0 : canvas.width;
                    p.y = Math.random() * canvas.height;
                }
                if (Math.random() > 0.7) {
                    p.x = cx + (Math.random() - 0.5) * visualR * 4;
                    p.y = cy + (Math.random() - 0.5) * visualR * 4;
                }
            }
            
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.beginPath();
        ctx.arc(cx, cy, visualR, 0, Math.PI * 2);
        ctx.fillStyle = getColorForTemp(currentT);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 16px Outfit';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${currentT.toFixed(1)} °C`, cx, cy);
        
        // Dibujar etiqueta T_infinito en el ambiente (esquina superior izquierda)
        ctx.save();
        ctx.fillStyle = 'rgba(15, 23, 42, 0.7)';
        ctx.fillRect(15, 15, 130, 32);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.strokeRect(15, 15, 130, 32);
        
        ctx.fillStyle = '#94a3b8'; // color texto secundario
        ctx.font = 'bold 13px Outfit';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(`T_∞ = ${currentTinf.toFixed(1)} °C`, 25, 31);
        ctx.restore();
        
        animationId = requestAnimationFrame(draw);
    }
    
    [sliderTi, sliderTinf, selectMedium, sliderD, sliderK, sliderRho, sliderCp].forEach(el => {
        if (el) el.addEventListener('input', updateSimulationParams);
    });

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            if (isPlaying) {
                startBtn.textContent = 'Pausar Enfriamiento';
                startBtn.style.background = '#eab308';
                lastTimestamp = performance.now();
            } else {
                startBtn.textContent = 'Iniciar Enfriamiento';
                startBtn.style.background = '#3b82f6';
            }
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            isPlaying = false;
            simTime = 0;
            if (startBtn) {
                startBtn.textContent = 'Iniciar Enfriamiento';
                startBtn.style.background = '#3b82f6';
            }
            updateSimulationParams();
        });
    }
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulationParams();
            lastTimestamp = performance.now();
            animationId = requestAnimationFrame(draw);
        } else {
            if (animationId) cancelAnimationFrame(animationId);
        }
    });
    
    observer.observe(canvas);
}

// ==========================================
// Conduction + Convection Simulation
// ==========================================
function initCondConvSimulation() {
    const canvas = document.getElementById("condConvChart");
    if (!canvas) return;
    
    const sliderT1 = document.getElementById("cc-t1");
    const sliderK = document.getElementById("cc-k");
    const sliderL = document.getElementById("cc-l");
    const sliderTinf = document.getElementById("cc-tinf");
    const sliderH = document.getElementById("cc-h");
    
    const valT1 = document.getElementById("cc-t1-val");
    const valK = document.getElementById("cc-k-val");
    const valL = document.getElementById("cc-l-val");
    const valTinf = document.getElementById("cc-tinf-val");
    const valH = document.getElementById("cc-h-val");
    
    const resT2 = document.getElementById("cc-t2-res");
    const resQ = document.getElementById("cc-q-res");
    const resRCond = document.getElementById("cc-rcond-res");
    const resRConv = document.getElementById("cc-rconv-res");
    const resRTotal = document.getElementById("cc-rtot-res");
    
    const ctx = canvas.getContext("2d");
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Pared Sólida (Conducción)",
                    data: [],
                    borderColor: "#f59e0b",
                    backgroundColor: "rgba(245, 158, 11, 0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0
                },
                {
                    label: "Capa Límite (Convección)",
                    data: [],
                    borderColor: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: "linear",
                    title: { display: true, text: "Posición x (m)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                y: {
                    title: { display: true, text: "Temperatura (°C)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                }
            },
            plugins: {
                legend: { labels: { color: "#e2e8f0" } }
            }
        }
    });

    function formatValue(value, type) {
        if (type === "q") {
            const absQ = Math.abs(value);
            if (absQ >= 1e6) {
                return `${(value / 1e6).toFixed(2)} MW/m&sup2;`;
            } else if (absQ >= 1000) {
                return `${(value / 1000).toFixed(2)} kW/m&sup2;`;
            } else {
                return `${value.toFixed(2)} W/m&sup2;`;
            }
        } else if (type === "t") {
            return `${value.toFixed(2)} &deg;C`;
        }
    }

    function updateSimulation() {
        const T1 = parseFloat(sliderT1.value);
        const k = parseFloat(sliderK.value);
        const L = parseFloat(sliderL.value);
        const Tinf = parseFloat(sliderTinf.value);
        const h = parseFloat(sliderH.value);
        
        valT1.textContent = T1;
        valK.textContent = k;
        valL.textContent = L.toFixed(2);
        valTinf.textContent = Tinf;
        valH.textContent = h;
        
        const R_cond = L / k;
        const R_conv = 1 / h;
        const R_total = R_cond + R_conv;
        
        const q = (T1 - Tinf) / R_total;
        let T2 = Tinf + (q / h);
        
        if (T2 < -273.15) { T2 = -273.15; }
        
        resQ.innerHTML = formatValue(q, "q");
        resT2.innerHTML = formatValue(T2, "t");
        if (resRCond) resRCond.textContent = R_cond.toFixed(4) + " m²K/W";
        if (resRConv) resRConv.textContent = R_conv.toFixed(4) + " m²K/W";
        if (resRTotal) resRTotal.textContent = R_total.toFixed(4) + " m²K/W";
        
        const solidData = [
            { x: 0, y: T1 },
            { x: L, y: T2 }
        ];
        
        const fluidData = [];
        const L_fluid = 0.05; 
        const numPoints = 20;
        
        for (let i = 0; i <= numPoints; i++) {
            const x_fluid = L + (i / numPoints) * L_fluid;
            const dx = x_fluid - L;
            const decay = Math.exp(-dx * (h / 5)); 
            const T_fluid = Tinf + (T2 - Tinf) * decay;
            fluidData.push({ x: x_fluid, y: T_fluid });
        }
        
        chartInstance.data.datasets[0].data = solidData;
        chartInstance.data.datasets[1].data = fluidData;
        
        const maxTemp = Math.max(T1, T2, Tinf);
        const minTemp = Math.min(T1, T2, Tinf);
        chartInstance.options.scales.y.max = maxTemp > 500 ? Math.ceil(maxTemp / 100) * 100 : 500;
        chartInstance.options.scales.y.min = minTemp < 0 ? Math.floor(minTemp / 100) * 100 : 0;
        
        chartInstance.options.scales.x.max = L + L_fluid;
        
        chartInstance.options.plugins.annotation = {
            annotations: {
                wallRegion: {
                    type: "box",
                    xMin: 0,
                    xMax: L,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderWidth: 0,
                    label: {
                        display: true,
                        content: "Pared",
                        position: "top"
                    }
                },
                fluidRegion: {
                    type: "box",
                    xMin: L,
                    xMax: L + L_fluid,
                    backgroundColor: "rgba(56, 189, 248, 0.05)",
                    borderWidth: 0,
                    label: {
                        display: true,
                        content: "Fluido",
                        position: "top"
                    }
                }
            }
        };
        
        chartInstance.update();
    }
    
    [sliderT1, sliderK, sliderL, sliderTinf, sliderH].forEach(slider => {
        slider.addEventListener("input", updateSimulation);
    });
    
    updateSimulation();
}

// ==========================================
// 12. NUSSELT SIMULATION
// ==========================================
function initNusseltSimulation() {
    const uSlider = document.getElementById("nu-u");
    const kSlider = document.getElementById("nu-k");
    const lcSlider = document.getElementById("nu-lc");
    const tsSlider = document.getElementById("nu-ts");
    const tinfSlider = document.getElementById("nu-tinf");
    
    const uVal = document.getElementById("nu-u-val");
    const kVal = document.getElementById("nu-k-val");
    const lcVal = document.getElementById("nu-lc-val");
    const tsVal = document.getElementById("nu-ts-val");
    const tinfVal = document.getElementById("nu-tinf-val");
    
    const resQCond = document.getElementById("nu-qcond-res");
    const resQConv = document.getElementById("nu-qconv-res");
    const resNu = document.getElementById("nu-res");
    
    const canvas = document.getElementById("nusseltChart");
    const animCanvas = document.getElementById("nusseltCanvas");
    if (!canvas || !animCanvas) return;
    
    const ctx = canvas.getContext("2d");
    const actx = animCanvas.getContext("2d");
    
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "",
                    data: [],
                    borderColor: "#94a3b8",
                    backgroundColor: "rgba(148, 163, 184, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0
                },
                {
                    label: "",
                    data: [],
                    borderColor: "#38bdf8",
                    backgroundColor: "rgba(56, 189, 248, 0.2)",
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            legend: { display: false },
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            scales: {
                x: {
                    type: "linear",
                    min: 0,
                    max: 0.2, 
                    title: { display: true, text: "Distancia desde la pared y (m)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                },
                y: {
                    min: 20,
                    max: 100,
                    title: { display: true, text: "Temperatura (°C)", color: "#94a3b8" },
                    ticks: { color: "#cbd5e1" },
                    grid: { color: "rgba(255,255,255,0.1)" }
                }
            },

        }
    });

    let particles = [];
    const numParticles = 80;
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < numParticles; i++) {
            particles.push({
                y: Math.random() * animCanvas.height,
                xRel: Math.random(), 
                size: 1.5 + Math.random() * 2
            });
        }
    }

    function getColorForTemp(T, minT=20, maxT=100) {
        const normalized = (maxT === minT) ? 0.5 : Math.max(0, Math.min(1, (T - minT) / (maxT - minT)));
        const r = Math.round(normalized * 220 + 35); 
        const g = Math.round(normalized * 50 + 30);
        const b = Math.round((1 - normalized) * 200 + 55); 
        return `rgb(${r}, ${g}, ${b})`;
    }

    let animationId;
    let lastTimestamp = 0;
    
    let currentU = 0;
    let currentK = 0.6;
    let currentLc = 0.05;
    let currentNu = 1.0;
    let currentTs = 100;
    let currentTinf = 20;

    function updateSimulation() {
        currentU = parseFloat(uSlider.value);
        currentK = parseFloat(kSlider.value);
        currentLc = parseFloat(lcSlider.value);
        
        uVal.textContent = currentU.toFixed(1);
        kVal.textContent = currentK.toFixed(2);
        lcVal.textContent = currentLc.toFixed(2);
        
        currentTs = tsSlider ? parseFloat(tsSlider.value) : 100; 
        currentTinf = tinfSlider ? parseFloat(tinfSlider.value) : 20;
        
        if(tsVal) tsVal.textContent = currentTs.toFixed(0);
        if(tinfVal) tinfVal.textContent = currentTinf.toFixed(0); 
        
        // Propiedades de referencia del fluido (tipo agua)
        const rho = 1000; // kg/m³
        const cp = 4180;  // J/kg·K
        const mu = 0.001; // Pa·s
        
        // Prandtl y Reynolds
        const Pr = (mu * cp) / currentK;
        const Re = (rho * currentU * currentLc) / mu;
        
        currentNu = 1.0;
        if (currentU > 0) {
            // Relación clásica de correlación
            currentNu = 1.0 + 0.03 * Math.sqrt(Re) * Math.pow(Pr, 1/3);
        }
        
        const h = (currentK / currentLc) * currentNu;
        
        const q_cond = currentK * (currentTs - currentTinf) / currentLc;
        const q_conv = h * (currentTs - currentTinf);
        
        resQCond.textContent = q_cond.toFixed(1) + " W/m²";
        resQConv.textContent = q_conv.toFixed(1) + " W/m²";
        resNu.textContent = currentNu.toFixed(2);
        
        chartInstance.options.scales.x.max = Math.max(0.2, currentLc);
        chartInstance.options.scales.y.max = currentTs;
        chartInstance.options.scales.y.min = currentTinf;
        
        const condData = [];
        const convData = [];
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const y = (i / numPoints) * currentLc;
            const T_cond = currentTs - (currentTs - currentTinf) * (y / currentLc);
            condData.push({ x: y, y: T_cond });
            
            const T_conv = currentTinf + (currentTs - currentTinf) * Math.pow(1 - y/currentLc, currentNu);
            convData.push({ x: y, y: T_conv });
        }
        
        chartInstance.data.datasets[0].data = condData;
        chartInstance.data.datasets[1].data = convData;
        chartInstance.update();
    }

    function draw(timestamp) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const dt = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        const parent = animCanvas.parentElement;
        if (animCanvas.width !== parent.clientWidth || animCanvas.height !== parent.clientHeight) {
            animCanvas.width = parent.clientWidth;
            animCanvas.height = parent.clientHeight;
            initParticles();
        }

        actx.clearRect(0, 0, animCanvas.width, animCanvas.height);

        // 1. Dibujar Pared Sólida (izquierda, caliente)
        const wallWidth = 60;
        actx.fillStyle = "#ef4444"; 
        actx.fillRect(0, 0, wallWidth, animCanvas.height);
        
        actx.fillStyle = "#ffffff";
        actx.font = "bold 12px Outfit";
        actx.textAlign = "center";
        actx.fillText("PARED", wallWidth / 2, animCanvas.height / 2 - 10);
        actx.fillText(currentTs.toFixed(0) + "°C", wallWidth / 2, animCanvas.height / 2 + 10);

        // 2. Dibujar Capa de Fluido con gradiente de temperatura
        const maxFluidPxWidth = animCanvas.width - wallWidth - 45;
        const fluidPxWidth = (currentLc / 0.2) * maxFluidPxWidth;
        const fluidEnd = wallWidth + fluidPxWidth;

        for (let px = 0; px < fluidPxWidth; px++) {
            const yRel = px / fluidPxWidth;
            const T = currentTinf + (currentTs - currentTinf) * Math.pow(1 - yRel, currentNu);
            actx.fillStyle = getColorForTemp(T, currentTinf, currentTs);
            actx.fillRect(wallWidth + px, 0, 1.5, animCanvas.height);
        }

        // 3. Dibujar Medio Exterior
        actx.fillStyle = "#1e293b"; 
        actx.fillRect(fluidEnd, 0, animCanvas.width - fluidEnd, animCanvas.height);
        
        actx.fillStyle = "#38bdf8";
        actx.font = "bold 11px Outfit";
        actx.textAlign = "left";
        actx.fillText("T_inf = " + currentTinf.toFixed(0) + "°C", fluidEnd + 10, animCanvas.height / 2);

        // 4. Partículas
        actx.fillStyle = "rgba(255, 255, 255, 0.4)";
        particles.forEach(p => {
            const speed = currentU * 50 * p.xRel; 
            p.y -= speed * dt;
            if (p.y < 0) {
                p.y = animCanvas.height;
                p.xRel = Math.random();
            }

            const xPx = wallWidth + p.xRel * fluidPxWidth;
            actx.beginPath();
            actx.arc(xPx, p.y, p.size, 0, Math.PI * 2);
            actx.fill();
        });

        // 5. Límites
        actx.strokeStyle = "rgba(255,255,255,0.2)";
        actx.lineWidth = 1;
        actx.beginPath();
        actx.moveTo(fluidEnd, 0);
        actx.lineTo(fluidEnd, animCanvas.height);
        actx.stroke();

        actx.fillStyle = "#ffffff";
        actx.font = "bold 10px Outfit";
        actx.textAlign = "center";
        actx.fillText(`Espesor Lc = ${currentLc.toFixed(2)}m`, wallWidth + fluidPxWidth / 2, 20);

        animationId = requestAnimationFrame(draw);
    }

    uSlider.addEventListener("input", updateSimulation);
    kSlider.addEventListener("input", updateSimulation);
    lcSlider.addEventListener("input", updateSimulation);
    if(tsSlider) tsSlider.addEventListener("input", updateSimulation);
    if(tinfSlider) tinfSlider.addEventListener("input", updateSimulation);
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulation();
            lastTimestamp = performance.now();
            animationId = requestAnimationFrame(draw);
        } else {
            if (animationId) cancelAnimationFrame(animationId);
        }
    });
    
    observer.observe(animCanvas);
}

/* =========================================================================
   BOUNDARY LAYER & ANALOGY SIMULATOR
   ========================================================================= */
function initBoundaryLayerSimulation() {
    const prSlider = document.getElementById("bl-pr");
    const scSlider = document.getElementById("bl-sc");
    const tcondSelect = document.getElementById("bl-tcond");
    
    const prVal = document.getElementById("bl-pr-val");
    const scVal = document.getElementById("bl-sc-val");
    
    const resDeltaT = document.getElementById("bl-deltat-res");
    const resDeltaC = document.getElementById("bl-deltac-res");
    const resLe = document.getElementById("bl-le-res");
    const resRatio = document.getElementById("bl-ratio-res");
    
    const canvas = document.getElementById("blChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    let chartInstance = new Chart(ctx, {
        type: "line",
        data: {
            datasets: [
                {
                    label: "Velocidad: u* = u / U_∞",
                    data: [],
                    borderColor: "#3b82f6",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: "Temperatura: Perfil Normalizado",
                    data: [],
                    borderColor: "#ef4444",
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    borderWidth: 2,
                    borderDash: [5, 5],
                    fill: false,
                    tension: 0.4
                },
                {
                    label: "Concentración: C* = (C - C_s) / (C_∞ - C_s)",
                    data: [],
                    borderColor: "#10b981",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    borderWidth: 2,
                    borderDash: [2, 2],
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: "linear",
                    position: "bottom",
                    title: {
                        display: true,
                        text: "Distancia adimensional, y / δ",
                        color: "#94a3b8"
                    },
                    min: 0,
                    max: 1.5,
                    grid: { color: "#334155" },
                    ticks: { color: "#94a3b8" }
                },
                y: {
                    title: {
                        display: true,
                        text: "Perfiles adimensionales (u*, T*, C*)",
                        color: "#94a3b8"
                    },
                    min: 0,
                    max: 1.05,
                    grid: { color: "#334155" },
                    ticks: { color: "#94a3b8" }
                }
            },
            plugins: {
                legend: { labels: { color: "#cbd5e1" } }
            }
        }
    });

    function updateSimulation() {
        const Pr = parseFloat(prSlider.value);
        const Sc = parseFloat(scSlider.value);
        
        prVal.textContent = Pr.toFixed(1);
        scVal.textContent = Sc.toFixed(1);
        
        const delta_t_ratio = Math.pow(Pr, -1/3);
        const delta_c_ratio = Math.pow(Sc, -1/3);
        const Le = Sc / Pr;
        const thickness_ratio = delta_t_ratio / delta_c_ratio;
        
        resDeltaT.textContent = delta_t_ratio.toFixed(2) + " δ";
        resDeltaC.textContent = delta_c_ratio.toFixed(2) + " δ";
        if (resLe) resLe.textContent = Le.toFixed(2);
        if (resRatio) resRatio.textContent = thickness_ratio.toFixed(2);
        
        const velData = [];
        const tempData = [];
        const concData = [];
        
        const tCond = tcondSelect ? tcondSelect.value : "cold";
        
        const numPoints = 50;
        for (let i = 0; i <= numPoints; i++) {
            const y = (i / numPoints) * 1.5;
            
            let u_ratio = 1.0;
            if (y <= 1.0) {
                u_ratio = 2 * y - Math.pow(y, 2);
            }
            velData.push({ x: y, y: u_ratio });
            
            let y_t = y / delta_t_ratio;
            let t_ratio = 1.0;
            if (y_t <= 1.0) {
                t_ratio = 2 * y_t - Math.pow(y_t, 2);
            }
            if (tCond === "hot") {
                // If Ts > Tinf, temperature drops from 1 to 0
                if (y_t <= 1.0) {
                    t_ratio = 1.0 - (2 * y_t - Math.pow(y_t, 2));
                } else {
                    t_ratio = 0.0;
                }
            }
            tempData.push({ x: y, y: t_ratio });
            
            let y_c = y / delta_c_ratio;
            let c_ratio = 1.0;
            if (y_c <= 1.0) {
                c_ratio = 2 * y_c - Math.pow(y_c, 2);
            }
            concData.push({ x: y, y: c_ratio });
        }
        
        chartInstance.data.datasets[0].data = velData;
        chartInstance.data.datasets[1].data = tempData;
        chartInstance.data.datasets[2].data = concData;
        
        chartInstance.update();
    }
    
    prSlider.addEventListener('input', updateSimulation);
    scSlider.addEventListener('input', updateSimulation);
    if (tcondSelect) tcondSelect.addEventListener('change', updateSimulation);
    
    updateSimulation();
}

/* =========================================================================
   THERMAL RESISTANCE NETWORK SIMULATOR
   ========================================================================= */
function initResistanceSimulation() {
    const canvas = document.getElementById("resCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const sl_tinf1 = document.getElementById("res-tinf1");
    const sl_h1 = document.getElementById("res-h1");
    const sl_tinf2 = document.getElementById("res-tinf2");
    const sl_h2 = document.getElementById("res-h2");
    
    const sl_k1 = document.getElementById("res-k1");
    const sl_L1 = document.getElementById("res-L1");
    const sl_k2 = document.getElementById("res-k2");
    const sl_L2 = document.getElementById("res-L2");
    const sl_k3 = document.getElementById("res-k3");
    const sl_L3 = document.getElementById("res-L3");
    
    const val_rtot = document.getElementById("res-rtot-val");
    const val_q = document.getElementById("res-q-val");
    
    function drawResistor(x, y, width, height, color, baseLabel, subLabel, valStr) {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        const numZigs = 5;
        const dx = width / (numZigs * 2 + 1);
        let cx = x;
        
        ctx.moveTo(cx, y);
        cx += dx;
        
        for (let i = 0; i < numZigs; i++) {
            ctx.lineTo(cx, y - height/2);
            cx += dx;
            ctx.lineTo(cx, y + height/2);
            cx += dx;
        }
        
        ctx.lineTo(cx, y);
        ctx.stroke();
        
        // Draw label with subscripts
        ctx.fillStyle = "#94a3b8";
        ctx.textAlign = "left";
        
        ctx.font = "11px Outfit";
        const baseWidth = ctx.measureText(baseLabel).width;
        ctx.font = "8px Outfit";
        const subWidth = ctx.measureText(subLabel).width;
        
        const totalLabelWidth = baseWidth + subWidth;
        const startLabelX = x + width/2 - totalLabelWidth / 2;
        
        ctx.font = "11px Outfit";
        ctx.fillText(baseLabel, startLabelX, y + height/2 + 15);
        ctx.font = "8px Outfit";
        ctx.fillText(subLabel, startLabelX + baseWidth, y + height/2 + 18);
        
        // Draw value
        ctx.fillStyle = color;
        ctx.font = "11px Outfit";
        ctx.textAlign = "center";
        ctx.fillText(valStr, x + width/2, y + height/2 + 30);
    }
    
    function updateSimulation() {
        const tinf1 = parseFloat(sl_tinf1.value);
        const h1 = parseFloat(sl_h1.value);
        const tinf2 = parseFloat(sl_tinf2.value);
        const h2 = parseFloat(sl_h2.value);
        
        const k1 = parseFloat(sl_k1.value);
        const L1 = parseFloat(sl_L1.value) / 100;
        const k2 = parseFloat(sl_k2.value);
        const L2 = parseFloat(sl_L2.value) / 100;
        const k3 = parseFloat(sl_k3.value);
        const L3 = parseFloat(sl_L3.value) / 100;
        
        document.getElementById("res-tinf1-val").textContent = tinf1;
        document.getElementById("res-h1-val").textContent = h1;
        document.getElementById("res-tinf2-val").textContent = tinf2;
        document.getElementById("res-h2-val").textContent = h2;
        
        document.getElementById("res-k1-val").textContent = k1.toFixed(2);
        document.getElementById("res-L1-val").textContent = (L1*100).toFixed(0);
        document.getElementById("res-k2-val").textContent = k2.toFixed(2);
        document.getElementById("res-L2-val").textContent = (L2*100).toFixed(0);
        document.getElementById("res-k3-val").textContent = k3.toFixed(2);
        document.getElementById("res-L3-val").textContent = (L3*100).toFixed(0);
        
        const R_conv1 = 1 / h1;
        const R_cond1 = L1 / k1;
        const R_cond2 = L2 / k2;
        const R_cond3 = L3 / k3;
        const R_conv2 = 1 / h2;
        
        const R_tot = R_conv1 + R_cond1 + R_cond2 + R_cond3 + R_conv2;
        const q = (tinf1 - tinf2) / R_tot;
        
        val_rtot.textContent = R_tot.toFixed(4) + " K/W";
        val_q.textContent = q.toFixed(1) + " W";
        
        const Ts1 = tinf1 - q * R_conv1;
        const T2 = Ts1 - q * R_cond1;
        const T3 = T2 - q * R_cond2;
        const Ts2 = T3 - q * R_cond3;
        
        const parent = canvas.parentElement;
        if (canvas.width !== parent.clientWidth) {
            canvas.width = parent.clientWidth;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const leftMargin = 50;
        const gap = 80;
        
        const x_inf1 = leftMargin;
        const startX = leftMargin + gap;
        const x_inf2 = canvas.width - leftMargin;
        const endX = canvas.width - leftMargin - gap;
        const availWidth = endX - startX;
        
        const totalL = L1 + L2 + L3;
        
        const w1 = (L1 / totalL) * availWidth;
        const w2 = (L2 / totalL) * availWidth;
        const w3 = (L3 / totalL) * availWidth;
        
        const wallY = 40;
        const wallH = 220;
        
        ctx.fillStyle = "rgba(100, 116, 139, 0.4)";
        ctx.fillRect(startX, wallY, w1, wallH);
        ctx.strokeStyle = "#94a3b8";
        ctx.strokeRect(startX, wallY, w1, wallH);
        
        ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
        ctx.fillRect(startX + w1, wallY, w2, wallH);
        ctx.strokeRect(startX + w1, wallY, w2, wallH);
        
        ctx.fillStyle = "rgba(203, 213, 225, 0.4)";
        ctx.fillRect(startX + w1 + w2, wallY, w3, wallH);
        ctx.strokeRect(startX + w1 + w2, wallY, w3, wallH);
        
        const minT = Math.min(tinf1, tinf2) - 10;
        const maxT = Math.max(tinf1, tinf2) + 10;
        const T_range = maxT - minT || 1; 
        
        function getTy(T) {
            return wallY + wallH - ((T - minT) / T_range) * wallH;
        }
        
        ctx.beginPath();
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 3;
        
        // Zona de Convección Izquierda (curva parabólica con asíntota en tinf1)
        const numLeftPoints = 30;
        ctx.moveTo(x_inf1, getTy(tinf1));
        for (let i = 1; i <= numLeftPoints; i++) {
            const t = i / numLeftPoints;
            const x = x_inf1 + t * (startX - x_inf1);
            const T = tinf1 + (Ts1 - tinf1) * Math.pow(t, 2);
            ctx.lineTo(x, getTy(T));
        }
        
        // Zonas de Conducción en las 3 paredes sólidas (líneas rectas)
        ctx.lineTo(startX + w1, getTy(T2));
        ctx.lineTo(startX + w1 + w2, getTy(T3));
        
        // Zona de Convección Derecha (curva parabólica con asíntota en tinf2)
        ctx.lineTo(endX, getTy(Ts2));
        const numRightPoints = 30;
        for (let i = 1; i <= numRightPoints; i++) {
            const t = i / numRightPoints;
            const x = endX + t * (x_inf2 - endX);
            const T = tinf2 + (Ts2 - tinf2) * Math.pow(1 - t, 2);
            ctx.lineTo(x, getTy(T));
        }
        ctx.stroke();
        
        const points = [
            {x: x_inf1, y: getTy(tinf1), base: "T", sub: "∞,1", val: tinf1},
            {x: startX, y: getTy(Ts1), base: "T", sub: "s,1", val: Ts1},
            {x: startX + w1, y: getTy(T2), base: "T", sub: "2", val: T2},
            {x: startX + w1 + w2, y: getTy(T3), base: "T", sub: "3", val: T3},
            {x: startX + w1 + w2 + w3, y: getTy(Ts2), base: "T", sub: "s,2", val: Ts2},
            {x: x_inf2, y: getTy(tinf2), base: "T", sub: "∞,2", val: tinf2}
        ];
        
        points.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = "#ef4444";
            ctx.fill();
            
            // Medir anchos para caja de fondo
            ctx.font = "bold 11px Outfit";
            const baseWidth = ctx.measureText(p.base).width;
            ctx.font = "bold 8px Outfit";
            const subWidth = ctx.measureText(p.sub).width;
            ctx.font = "bold 11px Outfit";
            const valText = ` = ${p.val.toFixed(1)}°C`;
            const valWidth = ctx.measureText(valText).width;
            
            const totalWidth = baseWidth + subWidth + valWidth;
            const startX_text = p.x - totalWidth / 2;
            
            // Caja de fondo
            ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
            ctx.fillRect(p.x - totalWidth/2 - 4, p.y - 24, totalWidth + 8, 16);
            
            // Dibujar T
            ctx.fillStyle = "#ffffff";
            ctx.font = "bold 11px Outfit";
            ctx.textAlign = "left";
            ctx.fillText(p.base, startX_text, p.y - 12);
            
            // Dibujar Subíndice
            ctx.font = "bold 8px Outfit";
            ctx.fillText(p.sub, startX_text + baseWidth, p.y - 9);
            
            // Dibujar valor
            ctx.font = "bold 11px Outfit";
            ctx.fillText(valText, startX_text + baseWidth + subWidth, p.y - 12);
        });
        
        const circY = wallY + wallH + 70;
        
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x_inf1, getTy(tinf1)); ctx.lineTo(x_inf1, circY);
        ctx.moveTo(startX, getTy(Ts1)); ctx.lineTo(startX, circY);
        ctx.moveTo(startX + w1, getTy(T2)); ctx.lineTo(startX + w1, circY);
        ctx.moveTo(startX + w1 + w2, getTy(T3)); ctx.lineTo(startX + w1 + w2, circY);
        ctx.moveTo(startX + w1 + w2 + w3, getTy(Ts2)); ctx.lineTo(startX + w1 + w2 + w3, circY);
        ctx.moveTo(x_inf2, getTy(tinf2)); ctx.lineTo(x_inf2, circY);
        ctx.stroke();
        
        const h_conv1 = 10 + Math.min(45, R_conv1 * 60);
        const h_cond1 = 10 + Math.min(45, R_cond1 * 60);
        const h_cond2 = 10 + Math.min(45, R_cond2 * 60);
        const h_cond3 = 10 + Math.min(45, R_cond3 * 60);
        const h_conv2 = 10 + Math.min(45, R_conv2 * 60);

        drawResistor(x_inf1, circY, startX - x_inf1, h_conv1, "#60a5fa", "R''", "conv,1", R_conv1.toFixed(3));
        drawResistor(startX, circY, w1, h_cond1, "#facc15", "R''", "cond,1", R_cond1.toFixed(3));
        drawResistor(startX + w1, circY, w2, h_cond2, "#facc15", "R''", "cond,2", R_cond2.toFixed(3));
        drawResistor(startX + w1 + w2, circY, w3, h_cond3, "#facc15", "R''", "cond,3", R_cond3.toFixed(3));
        drawResistor(startX + w1 + w2 + w3, circY, x_inf2 - (startX + w1 + w2 + w3), h_conv2, "#60a5fa", "R''", "conv,2", R_conv2.toFixed(3));
        
        points.forEach(p => {
            ctx.fillStyle = "#0f172a";
            ctx.beginPath();
            ctx.arc(p.x, circY, 4, 0, Math.PI*2);
            ctx.fill();
            ctx.strokeStyle = "#ef4444";
            ctx.stroke();
        });
    }
    
    [sl_tinf1, sl_h1, sl_tinf2, sl_h2, sl_k1, sl_L1, sl_k2, sl_L2, sl_k3, sl_L3].forEach(el => {
        el.addEventListener('input', updateSimulation);
    });
    
    window.addEventListener('resize', updateSimulation);
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulation();
        }
    });
    observer.observe(canvas);
    
    updateSimulation();
}

function initViewFactorSimulation() {
    const sliderW = document.getElementById("vf-w");
    const sliderL = document.getElementById("vf-l");
    const sliderD = document.getElementById("vf-d");
    const canvas = document.getElementById("viewFactorGeometry");
    const chartCtx = document.getElementById("viewFactorChart");
    if (!canvas || !chartCtx) return;

    let viewFactorChart = null;
    const ctx = canvas.getContext("2d");

    function calcF12(W, L, D) {
        const X = W / D;
        const Y = L / D;
        
        const term1 = Math.log(Math.sqrt(((1 + X*X) * (1 + Y*Y)) / (1 + X*X + Y*Y)));
        const term2 = X * Math.sqrt(1 + Y*Y) * Math.atan(X / Math.sqrt(1 + Y*Y));
        const term3 = Y * Math.sqrt(1 + X*X) * Math.atan(Y / Math.sqrt(1 + X*X));
        const term4 = -X * Math.atan(X);
        const term5 = -Y * Math.atan(Y);
        
        const F12 = (2 / (Math.PI * X * Y)) * (term1 + term2 + term3 + term4 + term5);
        return F12;
    }

    function drawViewFactorGeometry(W, L, D) {
        const width = canvas.width;
        const height = canvas.height;
        
        ctx.clearRect(0, 0, width, height);

        const cx = width / 2 - 45;
        const cy = height / 2;
        
        const angleX = Math.PI / 6; // 30 deg
        const angleZ = 5 * Math.PI / 6; // 150 deg

        const spanVert = D + (W + L) * Math.sin(angleX);
        const spanHoriz = (W + L) * Math.cos(angleX);
        
        const scaleX = (width * 0.8) / Math.max(spanHoriz, 0.1);
        const scaleY = (height * 0.7) / Math.max(spanVert, 0.1);
        const scale = Math.min(scaleX, scaleY);
        
        function project(x, y, z) {
            const px = cx + (x * Math.cos(angleX) + z * Math.cos(angleZ)) * scale;
            const py = cy - (y * scale) + (x * Math.sin(angleX) + z * Math.sin(angleZ)) * scale;
            return { x: px, y: py };
        }
        
        function drawPlate(y_offset, color, fillStyle, label) {
            const hw = W / 2;
            const hl = L / 2;
            
            const p1 = project(hw, y_offset, hl);
            const p2 = project(hw, y_offset, -hl);
            const p3 = project(-hw, y_offset, -hl);
            const p4 = project(-hw, y_offset, hl);
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.lineTo(p4.x, p4.y);
            ctx.closePath();
            
            ctx.fillStyle = fillStyle;
            ctx.fill();
            
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();

            // Label
            ctx.fillStyle = color;
            ctx.font = "bold 11px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(label, (p1.x + p3.x)/2, (p1.y + p3.y)/2 + 4);
            
            return { p1, p2, p3, p4 };
        }
        
        function drawConnector(pBottom, pTop) {
            ctx.beginPath();
            ctx.moveTo(pBottom.x, pBottom.y);
            ctx.lineTo(pTop.x, pTop.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        const yTop = D / 2;
        const yBottom = -D / 2;
        
        const bottomCorners = drawPlate(yBottom, '#60a5fa', 'rgba(96, 165, 250, 0.15)', "Placa 1 (Emisora)");
        const topCorners = drawPlate(yTop, '#facc15', 'rgba(250, 204, 21, 0.15)', "Placa 2 (Receptora)");
        
        drawConnector(bottomCorners.p1, topCorners.p1);
        drawConnector(bottomCorners.p2, topCorners.p2);
        drawConnector(bottomCorners.p3, topCorners.p3);
        drawConnector(bottomCorners.p4, topCorners.p4);
    }

    function updateViewFactorData(W, L) {
        const d_arr = [];
        const f12_arr = [];
        for (let i = 1; i <= 50; i++) {
            const Dist = i * 0.2;
            d_arr.push(Dist.toFixed(1));
            f12_arr.push(calcF12(W, L, Dist));
        }
        return { d_arr, f12_arr };
    }

    let w_val = parseFloat(sliderW.value);
    let l_val = parseFloat(sliderL.value);
    let simData = updateViewFactorData(w_val, l_val);

    viewFactorChart = new Chart(chartCtx.getContext("2d"), {
        type: 'line',
        data: {
            labels: simData.d_arr,
            datasets: [{
                label: 'F12 vs Separación (D)',
                data: simData.f12_arr,
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.05)',
                borderWidth: 2,
                fill: true,
                tension: 0.3,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: { display: true, text: 'Distancia D (m)', color: '#94a3b8', font: { size: 9 } },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8', font: { size: 9 } }
                },
                y: {
                    title: { display: true, text: 'F12', color: '#94a3b8', font: { size: 9 } },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8', font: { size: 9 } },
                    min: 0,
                    max: 1
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `F12: ${context.parsed.y.toFixed(4)}`;
                        }
                    }
                }
            }
        }
    });

    const updateDisplay = () => {
        const w = parseFloat(sliderW.value);
        const l = parseFloat(sliderL.value);
        const d = parseFloat(sliderD.value);
        
        document.getElementById("vf-w-val").textContent = w.toFixed(1);
        document.getElementById("vf-l-val").textContent = l.toFixed(1);
        document.getElementById("vf-d-val").textContent = d.toFixed(1);
        
        const newData = updateViewFactorData(w, l);
        viewFactorChart.data.labels = newData.d_arr;
        viewFactorChart.data.datasets[0].data = newData.f12_arr;
        viewFactorChart.update('none');
        
        const currentF12 = calcF12(w, l, d);
        document.getElementById("vf-f12-val").textContent = currentF12.toFixed(4);
        document.getElementById("vf-escape-val").textContent = `${((1 - currentF12) * 100).toFixed(1)}%`;
        
        drawViewFactorGeometry(w, l, d);
    };

    [sliderW, sliderL, sliderD].forEach(el => {
        el.addEventListener("input", updateDisplay);
    });

    window.addEventListener("resize", updateDisplay);

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateDisplay();
        }
    });
    observer.observe(canvas);

    updateDisplay();
}

function initParallelSimulation() {
    const sl_t1 = document.getElementById("par-t1");
    const sl_tsurr = document.getElementById("par-tsurr");
    const sl_h = document.getElementById("par-h");
    const sl_eps = document.getElementById("par-eps");
    const sl_k1 = document.getElementById("par-k1");
    const sl_L1 = document.getElementById("par-L1");
    const sl_k2 = document.getElementById("par-k2");
    const sl_L2 = document.getElementById("par-L2");
    const sl_k3 = document.getElementById("par-k3");
    const sl_L3 = document.getElementById("par-L3");
    const sl_g = document.getElementById("par-g");
    const sl_alpha = document.getElementById("par-alpha");
    
    const canvas = document.getElementById("parCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    function drawResistorLine(ctx, startX, startY, endX, endY, heightVal) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        const len = endX - startX;
        
        ctx.lineTo(startX + len * 0.15, startY);
        
        const zWidth = len * 0.7;
        const step = zWidth / 6;
        let direction = -1;
        const hVal = Math.min(Math.max(heightVal, 8), 40);
        
        for (let i = 0; i < 6; i++) {
            const px = startX + len * 0.15 + step * (i + 0.5);
            const py = startY + direction * hVal;
            ctx.lineTo(px, py);
            direction *= -1;
        }
        
        ctx.lineTo(startX + len * 0.85, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }

    function drawVerticalText(text, x, y) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(-Math.PI / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }

    function updateSimulation() {
        const t1 = parseFloat(sl_t1.value);
        const tsurr = parseFloat(sl_tsurr.value);
        const h = parseFloat(sl_h.value);
        const eps = parseFloat(sl_eps.value);
        const k1 = parseFloat(sl_k1.value);
        const L1 = parseFloat(sl_L1.value) / 100;
        const k2_real = parseFloat(sl_k2.value);
        const L2 = parseFloat(sl_L2.value) / 100;
        const k3_real = parseFloat(sl_k3.value);
        const L3 = parseFloat(sl_L3.value) / 100;
        const G = parseFloat(sl_g.value);
        const alpha = parseFloat(sl_alpha.value);
        
        document.getElementById("par-t1-val").textContent = t1;
        document.getElementById("par-tsurr-val").textContent = tsurr;
        document.getElementById("par-h-val").textContent = h;
        document.getElementById("par-eps-val").textContent = eps.toFixed(2);
        document.getElementById("par-k1-val").textContent = k1.toFixed(1);
        document.getElementById("par-L1-val").textContent = parseFloat(sl_L1.value).toFixed(1);
        document.getElementById("par-k2-val").textContent = k2_real.toFixed(1);
        document.getElementById("par-L2-val").textContent = parseFloat(sl_L2.value).toFixed(1);
        document.getElementById("par-k3-val").textContent = k3_real.toFixed(1);
        document.getElementById("par-L3-val").textContent = parseFloat(sl_L3.value).toFixed(1);
        document.getElementById("par-g-val").textContent = G;
        document.getElementById("par-alpha-val").textContent = alpha.toFixed(2);
        
        const A = 1.0;
        const R1 = L1 / (k1 * A);
        const R2 = L2 / (k2_real * A);
        const R3 = L3 / (k3_real * A);
        const R123 = R1 + R2 + R3;
        
        const t1_K = t1 + 273.15;
        const tsurr_K = tsurr + 273.15;
        const sigma = 5.67e-8;
        const q_solar = alpha * G * A;
        
        let Ts_K = (t1_K + tsurr_K) / 2;
        let q = 0;
        let hr = 0;
        let Rconv = 0;
        let Rrad = 0;
        let Rparallel = 0;
        
        for (let iter = 0; iter < 100; iter++) {
            const Ts_clamped = Math.max(Ts_K, 1.0);
            hr = eps * sigma * (Ts_clamped + tsurr_K) * (Ts_clamped * Ts_clamped + tsurr_K * tsurr_K);
            
            Rconv = h > 0 ? 1 / (h * A) : 1e12;
            Rrad = hr > 0 ? 1 / (hr * A) : 1e12;
            
            Rparallel = 1 / ((1/Rconv) + (1/Rrad));
            const Ts_new_K = (Rparallel * t1_K + R123 * tsurr_K + R123 * Rparallel * q_solar) / (R123 + Rparallel);
            
            if (Math.abs(Ts_new_K - Ts_K) < 1e-5) {
                Ts_K = Ts_new_K;
                break;
            }
            Ts_K = Ts_new_K;
        }
        
        const Ts = Ts_K - 273.15;
        q = (t1_K - Ts_K) / R123;
        const Ti1 = t1 - q * R1;
        const Ti2 = t1 - q * (R1 + R2);
        
        document.getElementById("par-rcond-val").textContent = `${R123.toFixed(4)} K/W`;
        document.getElementById("par-rconv-val").textContent = h > 0 ? `${Rconv.toFixed(4)} K/W` : '∞ K/W';
        document.getElementById("par-rrad-val").textContent = eps > 0 ? `${Rrad.toFixed(4)} K/W` : '∞ K/W';
        document.getElementById("par-req-val").textContent = `${Rparallel.toFixed(4)} K/W`;
        document.getElementById("par-ts-val").textContent = `${Ts.toFixed(1)} °C`;
        document.getElementById("par-q-val").textContent = `${q.toFixed(1)} W`;
        
        // Heat Flow Surface Energy Balance calculations
        const q_conv = h > 0 ? (Ts - tsurr) / Rconv : 0.0;
        const q_rad = (eps > 0 && hr > 0) ? (Ts - tsurr) / Rrad : 0.0;
        
        document.getElementById("par-qcond-val").textContent = `${q.toFixed(1)} W`;
        document.getElementById("par-qsol-val").textContent = `${q_solar.toFixed(1)} W`;
        document.getElementById("par-qconv-val").textContent = `${q_conv.toFixed(1)} W`;
        document.getElementById("par-qrad-val").textContent = `${q_rad.toFixed(1)} W`;
        
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);
        
        const leftMargin = 120;
        const rightMargin = 120;
        const totalL = L1 + L2 + L3;
        
        const maxTotalL = 0.9;
        const maxAvailWidth = width - leftMargin - rightMargin - 80;
        const currentAvailWidth = Math.max(0.25, totalL / maxTotalL) * maxAvailWidth;
        
        const w1 = (L1 / totalL) * currentAvailWidth;
        const w2 = (L2 / totalL) * currentAvailWidth;
        const w3 = (L3 / totalL) * currentAvailWidth;
        
        const startX = leftMargin;
        const wallY = 30;
        const wallH = 180;
        
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 1.5;

        ctx.fillStyle = "rgba(100, 110, 120, 0.4)";
        ctx.fillRect(startX, wallY, w1, wallH);
        ctx.strokeRect(startX, wallY, w1, wallH);
        
        ctx.fillStyle = "rgba(140, 150, 160, 0.4)";
        ctx.fillRect(startX + w1, wallY, w2, wallH);
        ctx.strokeRect(startX + w1, wallY, w2, wallH);
        
        ctx.fillStyle = "rgba(180, 190, 200, 0.4)";
        ctx.fillRect(startX + w1 + w2, wallY, w3, wallH);
        ctx.strokeRect(startX + w1 + w2, wallY, w3, wallH);
        
        const minT = Math.min(t1, tsurr) - 20;
        const maxT = Math.max(t1, tsurr) + 20;
        const T_range = maxT - minT || 1;
        
        function getTempY(t) {
            return wallY + wallH - ((t - minT) / T_range) * wallH;
        }
        
        const y1 = getTempY(t1);
        const yi1 = getTempY(Ti1);
        const yi2 = getTempY(Ti2);
        const ys = getTempY(Ts);
        const ysurr = getTempY(tsurr);
        
        const x_s = startX + w1 + w2 + w3;
        const x_surr = x_s + 140;

        ctx.beginPath();
        ctx.moveTo(startX, y1);
        ctx.lineTo(startX + w1, yi1);
        ctx.lineTo(startX + w1 + w2, yi2);
        ctx.lineTo(x_s, ys);
        ctx.lineTo(x_surr, ysurr);
        
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 3;
        ctx.stroke();
        
        ctx.fillStyle = "#ef4444";
        [[startX, y1], [startX + w1, yi1], [startX + w1 + w2, yi2], [x_s, ys], [x_surr, ysurr]].forEach(p => {
            ctx.beginPath();
            ctx.arc(p[0], p[1], 5, 0, Math.PI * 2);
            ctx.fill();
        });
        
        if (G > 0) {
            const sunX = x_s + 90;
            const sunY = wallY + 25;
            ctx.save();
            ctx.beginPath();
            ctx.arc(sunX, sunY, 12, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(250, 204, 21, 0.9)";
            ctx.shadowBlur = 15;
            ctx.shadowColor = "#facc15";
            ctx.fill();
            ctx.strokeStyle = "#facc15";
            ctx.lineWidth = 1.5;
            ctx.shadowBlur = 0;
            for (let angle = Math.PI * 0.7; angle <= Math.PI * 1.3; angle += 0.2) {
                const sx = sunX + Math.cos(angle) * 16;
                const sy = sunY + Math.sin(angle) * 16;
                const ex = sunX + Math.cos(angle) * 28;
                const ey = sunY + Math.sin(angle) * 28;
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                ctx.stroke();
            }
            ctx.fillStyle = "#facc15";
            ctx.font = "9px Outfit";
            ctx.textAlign = "center";
            ctx.fillText(`${G} W/m²`, sunX, sunY + 25);
            ctx.restore();
        }
        
        ctx.fillStyle = "#f1f5f9";
        ctx.font = "bold 11px Outfit";
        ctx.textAlign = "center";
        
        ctx.fillText(`T₁ = ${t1.toFixed(0)}°C`, startX - 35, y1 + 4);
        ctx.fillText(`Ti₁ = ${Ti1.toFixed(0)}°C`, startX + w1, yi1 - 10);
        ctx.fillText(`Ti₂ = ${Ti2.toFixed(0)}°C`, startX + w1 + w2, yi2 - 10);
        ctx.fillText(`Ts = ${Ts.toFixed(0)}°C`, x_s + 35, ys + 4);
        ctx.fillText(`T∞ = ${tsurr.toFixed(0)}°C`, x_surr + 35, ysurr + 4);
        
        ctx.fillStyle = "#cbd5e1";
        ctx.font = "bold 10px Outfit";
        const textY = wallY + wallH / 2;
        drawVerticalText(`Capa 1 (k₁ = ${k1})`, startX + w1/2, textY);
        drawVerticalText(`Capa 2 (k₂ = ${k2_real})`, startX + w1 + w2/2, textY);
        drawVerticalText(`Capa 3 (k₃ = ${k3_real})`, startX + w1 + w2 + w3/2, textY);
        
        const circY = 320;
        
        const nodeX1 = startX;
        const nodeX2 = startX + w1;
        const nodeX3 = startX + w1 + w2;
        const nodeX4 = startX + w1 + w2 + w3;
        const nodeX5 = x_surr;
        
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 2;
        
        ctx.strokeStyle = "#3b82f6";
        drawResistorLine(ctx, nodeX1, circY, nodeX2, circY, R1 * 100);
        
        ctx.strokeStyle = "#f97316";
        drawResistorLine(ctx, nodeX2, circY, nodeX3, circY, R2 * 100);

        ctx.strokeStyle = "#10b981";
        drawResistorLine(ctx, nodeX3, circY, nodeX4, circY, R3 * 100);
        
        ctx.strokeStyle = "#94a3b8";
        ctx.beginPath();
        ctx.moveTo(nodeX4, circY);
        ctx.lineTo(nodeX4 + 15, circY - 30);
        ctx.moveTo(nodeX4, circY);
        ctx.lineTo(nodeX4 + 15, circY + 30);
        ctx.stroke();
        
        ctx.strokeStyle = "#06b6d4";
        drawResistorLine(ctx, nodeX4 + 15, circY - 30, nodeX5 - 15, circY - 30, Rconv * 1.5);
        
        ctx.strokeStyle = "#a855f7";
        drawResistorLine(ctx, nodeX4 + 15, circY + 30, nodeX5 - 15, circY + 30, Rrad * 1.5);
        
        ctx.strokeStyle = "#94a3b8";
        ctx.beginPath();
        ctx.moveTo(nodeX5 - 15, circY - 30);
        ctx.lineTo(nodeX5, circY);
        ctx.moveTo(nodeX5 - 15, circY + 30);
        ctx.lineTo(nodeX5, circY);
        ctx.stroke();
        
        ctx.fillStyle = "#ffffff";
        [[nodeX1, circY], [nodeX2, circY], [nodeX3, circY], [nodeX4, circY], [nodeX5, circY]].forEach(p => {
            ctx.beginPath();
            ctx.arc(p[0], p[1], 4, 0, Math.PI * 2);
            ctx.fill();
        });
        
        ctx.fillStyle = "#cbd5e1";
        ctx.font = "10px Outfit";
        ctx.fillText("R₁ (Cond)", (nodeX1 + nodeX2)/2, circY + 20);
        ctx.fillText("R₂ (Cond)", (nodeX2 + nodeX3)/2, circY + 20);
        ctx.fillText("R₃ (Cond)", (nodeX3 + nodeX4)/2, circY + 20);
        ctx.fillText("Rconv", (nodeX4 + nodeX5)/2, circY - 45);
        ctx.fillText("Rrad", (nodeX4 + nodeX5)/2, circY + 45);
        ctx.font = "bold 11px Outfit";
        ctx.fillStyle = "#ef4444";
        ctx.fillText("T₁", nodeX1, circY - 10);
        ctx.fillText("Ti₁", nodeX2, circY - 10);
        ctx.fillText("Ti₂", nodeX3, circY - 10);
        ctx.fillText("Ts", nodeX4, circY - 10);
        ctx.fillText("T∞", nodeX5, circY - 10);
    }
    
    const elements = [sl_t1, sl_tsurr, sl_h, sl_eps, sl_k1, sl_L1, sl_k2, sl_L2, sl_k3, sl_L3, sl_g, sl_alpha];
    elements.forEach(el => {
        if (el) el.addEventListener("input", updateSimulation);
    });
    
    window.addEventListener("resize", updateSimulation);
    
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateSimulation();
        }
    });
    observer.observe(canvas);
    
    updateSimulation();
}

// Add empty lines at the end to ensure it parses correctly




/* =========================================================================
   REYNOLDS INK INJECTION SIMULATOR
   ========================================================================= */
let reynoldsAnimationId = null;

function initReynoldsSimulation() {
    const canvas = document.getElementById("reynoldsCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const sliderV = document.getElementById("reynolds-v");
    const sliderDh = document.getElementById("reynolds-dh");
    const sliderNu = document.getElementById("reynolds-nu");
    
    const valV = document.getElementById("reynolds-v-val");
    const valDh = document.getElementById("reynolds-dh-val");
    const valNu = document.getElementById("reynolds-nu-val");
    const valReCalc = document.getElementById("reynolds-calc-val");
    const valNuDisplay = document.getElementById("reynolds-nu-display");
    
    const displayRegime = document.getElementById("reynolds-regime");
    const displayBehavior = document.getElementById("reynolds-behavior");
    
    let time = 0;
    const particles = [];
    const numParticles = 35;
    for (let i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * 800,
            yRatio: Math.random()
        });
    }
    
    function draw() {
        if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const w = canvas.width;
        const h = canvas.height;
        const pipeY = h / 2;
        
        // Read values from sliders
        const V = sliderV ? parseFloat(sliderV.value) : 2.0;
        const Dh_mm = sliderDh ? parseFloat(sliderDh.value) : 50;
        
        // Read continuous logarithmic kinematic viscosity (log10 of nu)
        const logNu = sliderNu ? parseFloat(sliderNu.value) : -6.0;
        const Nu_real = Math.pow(10, logNu); // value in m²/s
        
        // Format to scientific notation (e.g. 1.00 x 10^-6)
        const exponent = Math.floor(logNu);
        const base = Nu_real / Math.pow(10, exponent);
        const displayStr = `${base.toFixed(2)} &times; 10<sup>${exponent}</sup>`;
        
        // Update label texts
        if (valV) valV.textContent = V.toFixed(2);
        if (valDh) valDh.textContent = Dh_mm;
        if (valNuDisplay) valNuDisplay.innerHTML = displayStr;
        if (valNu) valNu.innerHTML = displayStr;
        
        // Calculate Reynolds: Re = V * D_h / nu_real
        const Re = Math.round((V * (Dh_mm / 1000.0)) / Nu_real);
        if (valReCalc) valReCalc.textContent = Re.toLocaleString();
        
        // Dynamic pipe height scales with Hydraulic Diameter
        const pipeH = Math.round(30 + (Dh_mm / 100.0) * 80);
        
        // 1. Draw Glass Pipe
        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 3;
        ctx.strokeRect(0, pipeY - pipeH/2, w, pipeH);
        
        // Fill pipe background slightly
        ctx.fillStyle = "rgba(59, 130, 246, 0.03)";
        ctx.fillRect(0, pipeY - pipeH/2, w, pipeH);
        
        // Determine Regime and Update Text
        let regime = "LAMINAR";
        let color = "//10b981"; // Emerald
        let behavior = "Línea de tinta suave y recta";
        
        if (Re >= 2300 && Re <= 4000) {
            regime = "TRANSICIÓN";
            color = "//f59e0b"; // Orange/Yellow
            behavior = "La tinta empieza a ondularse";
        } else if (Re > 4000) {
            regime = "TURBULENTO";
            color = "//ef4444"; // Red
            behavior = "Dispersión caótica y mezcla completa";
        }
        
        if (displayRegime) {
            displayRegime.textContent = regime;
            displayRegime.style.color = color;
        }
        if (displayBehavior) {
            displayBehavior.textContent = behavior;
        }
        
        // 2. Draw background flow particles (Water)
        const speed = V * 1.5;
        ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
        particles.forEach(p => {
            // Radial distance from center (0 at center, 1 at wall)
            const r = Math.abs(p.yRatio - 0.5) * 2;
            
            // Calculate velocity profile factor based on regime
            let profileFactor = 1.0;
            if (Re < 2300) {
                // Parabolic profile (laminar Hagen-Poiseuille)
                profileFactor = 1.0 - r * r;
            } else if (Re <= 4000) {
                // Transition profile (interpolate between parabolic and flat)
                const interp = (Re - 2300) / 1700;
                const laminar = 1.0 - r * r;
                const turbulent = Math.pow(1.0 - r, 1.0 / 7.0);
                profileFactor = laminar * (1.0 - interp) + turbulent * interp;
            } else {
                // Turbulent profile (1/7 power law)
                profileFactor = Math.pow(1.0 - r, 1.0 / 7.0);
            }
            
            // Ensure particles near the wall still creep forward slowly
            profileFactor = Math.max(0.08, profileFactor);
            
            p.x += speed * 2.5 * profileFactor;
            if (p.x > w) {
                p.x = 0;
                p.yRatio = Math.random();
            }
            const py = pipeY - pipeH/2 + 10 + p.yRatio * (pipeH - 20);
            ctx.fillRect(p.x, py, 4, 1.5);
        });
        
        // 3. Draw Needle (Ink injector) on the left
        const needleX = 80;
        ctx.strokeStyle = "//cbd5e1";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(needleX, pipeY - pipeH/2 - 20);
        ctx.lineTo(needleX, pipeY - 5);
        ctx.stroke();
        
        // Needle tip dot
        ctx.fillStyle = "//ef4444";
        ctx.beginPath();
        ctx.arc(needleX, pipeY - 5, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // 4. Draw Ink flow line with Reynolds-dependent waves / chaos
        ctx.beginPath();
        ctx.moveTo(needleX, pipeY - 5);
        
        if (Re < 2300) {
            // Laminar: Straight line
            ctx.lineTo(w, pipeY - 5);
            ctx.strokeStyle = "rgba(239, 68, 68, 0.85)";
            ctx.lineWidth = 4;
            ctx.stroke();
        } else if (Re >= 2300 && Re <= 4000) {
            // Transition: Wavy line that starts small and grows downstream
            ctx.beginPath();
            ctx.moveTo(needleX, pipeY - 5);
            // Limit wave amplitude to stay within the pipe (leave 6px padding from walls)
            const maxAmp = Math.max(2, pipeH / 2 - 12);
            const ampBase = Math.min(maxAmp, (Re - 2300) / 1700 * 12); // wave amplitude
            for (let x = needleX; x <= w; x += 4) {
                const distRatio = (x - needleX) / (w - needleX);
                const wave = Math.sin(x * 0.05 - time * 0.1) * ampBase * distRatio;
                // Clamp y coordinate to stay inside pipe walls
                const targetY = Math.max(pipeY - pipeH/2 + 5, Math.min(pipeY + pipeH/2 - 5, pipeY - 5 + wave));
                ctx.lineTo(x, targetY);
            }
            ctx.strokeStyle = "rgba(239, 68, 68, 0.85)";
            ctx.lineWidth = 4;
            ctx.stroke();
        } else {
            // Turbulent: Chaos and mixing
            // Draw several lines fading into a colored cloud
            const segments = 100;
            const stepX = (w - needleX) / segments;
            
            // Draw the main filament break-up
            ctx.beginPath();
            ctx.moveTo(needleX, pipeY - 5);
            let currentY = pipeY - 5;
            // Cap noise/wave so they don't exceed the pipe limits (leave padding)
            const maxDev = Math.max(5, pipeH / 2 - 10);
            for (let step = 0; step <= segments; step++) {
                const x = needleX + step * stepX;
                const distRatio = (x - needleX) / (w - needleX);
                
                // Noise and wave grow with distance but are bounded
                const noise = (Math.random() - 0.5) * 8 * Math.pow(distRatio, 1.5) * Math.min(3, Re / 4000);
                const wave = Math.sin(x * 0.08 - time * 0.15) * 6 * distRatio;
                
                let targetDev = wave + noise;
                // Bound the deviation
                targetDev = Math.max(-maxDev, Math.min(maxDev, targetDev));
                
                currentY = pipeY - 5 + targetDev;
                ctx.lineTo(x, currentY);
            }
            ctx.strokeStyle = "rgba(239, 68, 68, 0.75)";
            ctx.lineWidth = 3;
            ctx.stroke();
            
            // Draw colored cloud representation using multiple transparent curves or rects
            const maxCloudSpread = Math.max(5, pipeH / 2 - 6);
            for (let step = 10; step <= segments; step += 2) {
                const x = needleX + step * stepX;
                const distRatio = (x - needleX) / (w - needleX);
                const spread = Math.min(maxCloudSpread, 20 * Math.pow(distRatio, 1.2) * Math.min(2.5, Re / 4000));
                
                // Draw vertical ink cloud slice
                const grad = ctx.createLinearGradient(x, pipeY - spread, x, pipeY + spread);
                const alpha = Math.max(0.01, 0.4 * (1 - distRatio));
                grad.addColorStop(0, "rgba(239, 68, 68, 0)");
                grad.addColorStop(0.5, "rgba(239, 68, 68, " + alpha + ")");
                grad.addColorStop(1, "rgba(239, 68, 68, 0)");
                
                ctx.fillStyle = grad;
                ctx.fillRect(x - 2, pipeY - spread, stepX + 3, spread * 2);
            }
        }

        // Draw Reynolds relation directly on the Canvas
        ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = 1;
        
        const boxX = 15;
        const boxY = 15;
        const boxW = 390;
        const boxH = 55;
        ctx.fillRect(boxX, boxY, boxW, boxH);
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        // Re =
        ctx.fillStyle = "#f8fafc";
        ctx.font = "bold 13px Inter, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText("Re = ", boxX + 12, boxY + 32);

        // Numerator text: Fuerzas Inercia (V·Dh)
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.fillStyle = "#38bdf8"; // Light Cyan for Inertia
        ctx.fillText("Fuerzas de Inercia (V·Dh)", boxX + 50, boxY + 20);
        ctx.font = "10px Inter, sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(`= ${V.toFixed(1)} × ${(Dh_mm/1000).toFixed(3)} = ${(V * Dh_mm / 1000).toFixed(3)}`, boxX + 185, boxY + 20);

        // Fraction Line
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(boxX + 50, boxY + 27);
        ctx.lineTo(boxX + 310, boxY + 27);
        ctx.stroke();

        // Denominator text: Fuerzas Viscosas (ν)
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.fillStyle = "#c084fc"; // Purple for Viscous
        ctx.fillText("Fuerzas Viscosas (ν)", boxX + 50, boxY + 41);
        ctx.font = "10px Inter, sans-serif";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(`= ${base.toFixed(2)} × 10    m²/s`, boxX + 185, boxY + 41);
        
        // Exponent superscript
        ctx.font = "7.5px Inter, sans-serif";
        ctx.fillText(`${exponent}`, boxX + 271, boxY + 36);

        // Equals and Result
        ctx.fillStyle = color.replace("//", "#");
        ctx.font = "bold 14px Inter, sans-serif";
        ctx.fillText(`= ${Re.toLocaleString()}`, boxX + 320, boxY + 33);
        
        time += 1;
        reynoldsAnimationId = requestAnimationFrame(draw);
    }
    
    // Animation loop runs continuously, reading sliders on each frame
    
    // Start loop
    draw();
}

function initNatConvSimulation() {
    const canvas = document.getElementById('natConvCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const sliderTs = document.getElementById('natconv-ts');
    const sliderTinf = document.getElementById('natconv-tinf');
    const sliderD = document.getElementById('natconv-d');
    
    const valTs = document.getElementById('natconv-ts-val');
    const valTinf = document.getElementById('natconv-tinf-val');
    const valD = document.getElementById('natconv-d-val');
    
    const valRa = document.getElementById('natconv-ra');
    const valNu = document.getElementById('natconv-nu');
    const valH = document.getElementById('natconv-h');
    const valQ = document.getElementById('natconv-q');
    
    // Resize handler
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particle class for buoyancy currents
    class PlumeParticle {
        constructor(cx, cy, baseR, isHot) {
            this.reset(cx, cy, baseR, isHot);
            // Stagger initial progress
            this.y = isHot ? cy - baseR - Math.random() * 120 : cy + baseR + Math.random() * 120;
            this.x = cx + (Math.random() - 0.5) * (baseR * 1.5);
            this.side = Math.sign(this.x - cx) || 1;
            this.life = Math.random();
        }
        
        reset(cx, cy, baseR, isHot) {
            // Hot particles spawn below the cylinder, cold particles spawn above the cylinder
            const angle = isHot 
                ? (Math.PI / 2) + (Math.random() - 0.5) * Math.PI
                : (-Math.PI / 2) + (Math.random() - 0.5) * Math.PI;
            this.x = cx + Math.cos(angle) * (baseR + 2);
            this.y = cy + Math.sin(angle) * (baseR + 2);
            this.side = Math.sign(this.x - cx) || 1;
            this.vx = (Math.random() - 0.5) * 0.03;
            this.vy = isHot ? -0.08 - Math.random() * 0.12 : 0.08 + Math.random() * 0.12;
            this.size = 1.5 + Math.random() * 2.5;
            this.life = 1.0;
            this.decay = 0.0012 + Math.random() * 0.002; // Slower decay, lives longer
        }
        
        update(cx, cy, baseR, isHot, dT, w, h) {
            this.life -= this.decay;
            if (this.life <= 0) {
                this.reset(cx, cy, baseR, isHot);
                return;
            }
            
            // Buoyancy acceleration (extremely slow and gentle)
            const buoyancyForce = Math.min(0.5, Math.abs(dT) * 0.003);
            if (isHot) {
                this.vy -= buoyancyForce * 0.008;
            } else {
                this.vy += buoyancyForce * 0.008;
            }
            
            // Limit velocities to a very gentle "floating" speed
            const maxVy = 0.25 + Math.min(0.45, Math.abs(dT) * 0.002);
            const maxVx = 0.18;
            this.vx = Math.max(-maxVx, Math.min(maxVx, this.vx));
            this.vy = Math.max(-maxVy, Math.min(maxVy, this.vy));
            
            this.x += this.vx;
            this.y += this.vy;
            
            // Cylinder Boundary Collision & Hugging Flow
            const dx = this.x - cx;
            const dy = this.y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const minAllowedDist = baseR + 2;
            const huggingDist = baseR + 10;
            
            if (dist < huggingDist) {
                const nx = dx / dist;
                const ny = dy / dist;
                
                // Solid core boundary repulsion (always active to prevent entering circle)
                if (dist < minAllowedDist) {
                    this.x = cx + nx * minAllowedDist;
                    this.y = cy + ny * minAllowedDist;
                }
                
                // Separation zone check: hot separates at the top (ny < -0.15), cold at the bottom (ny > 0.15)
                const inSeparationZone = isHot ? (ny < -0.15) : (ny > 0.15);
                
                if (!inSeparationZone) {
                    // Project velocity to slide along surface (tangential)
                    const dotProduct = this.vx * nx + this.vy * ny;
                    if (dotProduct < 0) { // moving inward
                        this.vx -= dotProduct * nx;
                        this.vy -= dotProduct * ny;
                    }
                    
                    // Apply centripetal pull to make particles hug the cylinder surface
                    const pullForce = 0.03 * (huggingDist - dist);
                    this.vx -= nx * pullForce;
                    this.vy -= ny * pullForce;
                    
                    // Tangential sweep vector
                    const tx = -ny;
                    const ty = nx;
                    // Guide hot flow up (-y), cold flow down (+y)
                    const sweepDirection = isHot ? -Math.sign(ty) : Math.sign(ty);
                    const sweepForce = (0.1 + Math.random() * 0.15) * (0.3 + buoyancyForce);
                    
                    this.vx += tx * sweepDirection * sweepForce * 0.2;
                    this.vy += ty * sweepDirection * sweepForce * 0.2;
                } else {
                    // In separation zone: encourage detachment upwards (for hot) or downwards (for cold)
                    if (isHot) {
                        this.vy -= 0.04;
                    } else {
                        this.vy += 0.04;
                    }
                }
            }
            
            // Drag and plume convergence (hot air converges towards the center line above the cylinder)
            const distFromCenterLine = this.x - cx;
            const yDist = Math.abs(this.y - cy);
            
            if (yDist > baseR) {
                // Gently converge plume towards the centerline without crossing it
                this.vx -= Math.sign(distFromCenterLine) * 0.005 * (yDist / h);
                
                // Prevent particles from crossing the center line to keep flow laminarly parallel
                if (this.side === -1) {
                    this.x = Math.min(cx - 1.5, this.x);
                } else {
                    this.x = Math.max(cx + 1.5, this.x);
                }
            }
            
            // Check boundary resets
            if (this.y < 0 || this.y > h || this.x < 0 || this.x > w) {
                this.reset(cx, cy, baseR, isHot);
            }
        }
        
        draw(ctx, isHot, cx, cy, baseR, dT, time) {
            const yDist = Math.abs(this.y - cy);
            let drawX = this.x;
            
            // Apply gentle wave oscillation once escaped into the plume
            if (yDist > baseR) {
                // Amplitude grows with distance from the cylinder to simulate plume flapping
                const waveAmp = Math.min(8, (yDist - baseR) * 0.06 * Math.min(2, Math.abs(dT) * 0.02));
                const waveOffset = Math.sin(this.y * 0.04 - time * 0.03) * waveAmp;
                drawX += waveOffset;
            }
            
            ctx.beginPath();
            ctx.arc(drawX, this.y, this.size, 0, Math.PI * 2);
            const alpha = this.life * 0.45;
            ctx.fillStyle = isHot 
                ? `rgba(249, 115, 22, ${alpha})` // Orange for hot rising
                : `rgba(56, 189, 248, ${alpha})`; // Sky-blue for cold falling
            ctx.fill();
        }
    }
    
    // Initialize particle array
    const particles = [];
    const maxParticles = 60;
    
    let time = 0;
    let natConvAnimationId = null;
    
    function draw() {
        if (!canvas.offsetParent) {
            // Tab not visible, pause loop
            natConvAnimationId = requestAnimationFrame(draw);
            return;
        }
        
        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        
        // Read Sliders
        const Ts = sliderTs ? parseFloat(sliderTs.value) : 80;
        const Tinf = sliderTinf ? parseFloat(sliderTinf.value) : 20;
        const D_mm = sliderD ? parseFloat(sliderD.value) : 40;
        
        const dT = Ts - Tinf;
        const isHot = dT >= 0;
        
        // Update slider values texts
        if (valTs) valTs.textContent = Ts;
        if (valTinf) valTinf.textContent = Tinf;
        if (valD) valD.textContent = D_mm;
        
        // 1. Physical properties of Air at Film Temperature Tf = (Ts + Tinf)/2
        const Tf = (Ts + Tinf) / 2;
        const Tf_K = Tf + 273.15;
        const beta = 1.0 / Tf_K; // Ideal gas expansion coefficient
        const g = 9.81;
        const D_m = D_mm / 1000.0;
        
        // Standard dry air properties approximated
        const nu = 15.89e-6; // m²/s
        const alpha = 22.5e-6; // m²/s
        const Pr = 0.707;
        const k = 0.0263; // W/mK
        
        // Rayleigh Number
        const Ra = (g * beta * Math.abs(dT) * Math.pow(D_m, 3)) / (nu * alpha);
        if (valRa) {
            if (Math.abs(dT) === 0) {
                valRa.textContent = "0";
            } else {
                valRa.textContent = Ra.toExponential(2);
            }
        }
        
        // Nusselt Number (Churchill & Chu Correlation)
        let Nu_val = 0.36; // Pure conduction base
        if (Ra > 0) {
            const num = 0.387 * Math.pow(Ra, 1/6);
            const den = Math.pow(1 + Math.pow(0.559 / Pr, 9/16), 8/27);
            Nu_val = Math.pow(0.60 + num / den, 2);
        }
        if (valNu) valNu.textContent = Nu_val.toFixed(2);
        
        // Convection Coefficient: h = Nu * k / D
        const h_coef = (Nu_val * k) / D_m;
        if (valH) valH.textContent = `${h_coef.toFixed(2)} W/m²K`;
        
        // Heat Loss per unit length: q' = h * pi * D * dT
        const q_loss = h_coef * Math.PI * D_m * dT;
        if (valQ) valQ.textContent = `${q_loss.toFixed(1)} W/m`;
        
        // Dynamic visual cylinder radius (scaled for canvas representation)
        const baseR = (D_mm / 100) * 45 + 15;
        
        // Clear Canvas
        ctx.clearRect(0, 0, w, h);
        
        // Draw background convective temperature field / plume glow
        if (Math.abs(dT) > 0.5) {
            ctx.save();
            const plumeGradient = ctx.createLinearGradient(cx, cy, cx, isHot ? 0 : h);
            const coreAlpha = Math.min(0.35, Math.abs(dT) * 0.003);
            
            if (isHot) {
                plumeGradient.addColorStop(0, "rgba(239, 68, 68, 0.45)");
                plumeGradient.addColorStop(0.3, "rgba(249, 115, 22, 0.25)");
                plumeGradient.addColorStop(0.8, "rgba(253, 224, 71, 0.05)");
                plumeGradient.addColorStop(1, "rgba(253, 224, 71, 0)");
            } else {
                plumeGradient.addColorStop(0, "rgba(59, 130, 246, 0.45)");
                plumeGradient.addColorStop(0.3, "rgba(56, 189, 248, 0.25)");
                plumeGradient.addColorStop(0.8, "rgba(186, 230, 253, 0.05)");
                plumeGradient.addColorStop(1, "rgba(186, 230, 253, 0)");
            }
            
            // Draw plume shape path
            ctx.beginPath();
            ctx.moveTo(cx - baseR, cy);
            
            // Outer plume envelope boundaries
            const spreadWidth = baseR * (1.5 + Math.abs(dT) * 0.005);
            if (isHot) {
                // Rising plume geometry
                ctx.bezierCurveTo(cx - baseR * 1.2, cy - baseR * 1.5, cx - spreadWidth, 50, cx - 10, 0);
                ctx.lineTo(cx + 10, 0);
                ctx.bezierCurveTo(cx + spreadWidth, 50, cx + baseR * 1.2, cy - baseR * 1.5, cx + baseR, cy);
            } else {
                // Falling plume geometry
                ctx.bezierCurveTo(cx - baseR * 1.2, cy + baseR * 1.5, cx - spreadWidth, h - 50, cx - 10, h);
                ctx.lineTo(cx + 10, h);
                ctx.bezierCurveTo(cx + spreadWidth, h - 50, cx + baseR * 1.2, cy + baseR * 1.5, cx + baseR, cy);
            }
            
            ctx.closePath();
            ctx.fillStyle = plumeGradient;
            ctx.fill();
            ctx.restore();
        }
        
        // 2. Draw Cylinder
        // Outer temperature glow outer ring
        const glowRad = baseR + Math.min(20, Math.abs(dT) * 0.15);
        const ringGrad = ctx.createRadialGradient(cx, cy, baseR - 2, cx, cy, glowRad);
        if (isHot) {
            ringGrad.addColorStop(0, "rgba(239, 68, 68, 0.8)");
            ringGrad.addColorStop(1, "rgba(239, 68, 68, 0)");
        } else {
            ringGrad.addColorStop(0, "rgba(59, 130, 246, 0.8)");
            ringGrad.addColorStop(1, "rgba(59, 130, 246, 0)");
        }
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, glowRad, 0, Math.PI * 2);
        ctx.fill();
        
        // Cylinder Solid Core
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        const cylinderGrad = ctx.createRadialGradient(cx - baseR/4, cy - baseR/4, baseR/10, cx, cy, baseR);
        cylinderGrad.addColorStop(0, "#475569");
        cylinderGrad.addColorStop(0.8, "#1e293b");
        cylinderGrad.addColorStop(1, "#0f172a");
        ctx.fillStyle = cylinderGrad;
        ctx.fill();
        
        // Cylinder Stroke outline
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Write T_s inside cylinder
        ctx.fillStyle = "#ffffff";
        ctx.font = `bold ${Math.max(10, baseR * 0.35)}px Inter, system-ui, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(`Ts = ${Ts}°C`, cx, cy);
        
        // 3. Update and draw particles representing convection currents
        if (Math.abs(dT) > 0.1) {
            // Dynamic spawn of particles based on temperature difference
            const activeParticlesCount = Math.min(maxParticles, Math.floor(Math.abs(dT) * 0.4) + 5);
            
            // Populate active set
            while (particles.length < activeParticlesCount) {
                particles.push(new PlumeParticle(cx, cy, baseR, isHot));
            }
            // Trim if active count decreased
            if (particles.length > activeParticlesCount) {
                particles.splice(activeParticlesCount);
            }
            
            particles.forEach(p => {
                p.update(cx, cy, baseR, isHot, dT, w, h);
                p.draw(ctx, isHot, cx, cy, baseR, dT, time);
            });
        } else {
            // No convective force, empty particles gradually
            particles.length = 0;
        }
        
        time += 1;
        natConvAnimationId = requestAnimationFrame(draw);
    }
    
    draw();
}

function initKelvinSimulation() {
    const canvas = document.getElementById('kelvinCanvas');
    const chartCtx = document.getElementById('kelvinChart');
    if (!canvas || !chartCtx) return;

    const ctx = canvas.getContext('2d');
    
    // Sliders
    const sliderTemp = document.getElementById('kelvin-temp');
    const sliderPressure = document.getElementById('kelvin-pressure');
    const sliderMoles = document.getElementById('kelvin-moles');
    
    // Labels
    const valTemp = document.getElementById('kelvin-temp-val');
    const valTempK = document.getElementById('kelvin-temp-k-val');
    const valPressure = document.getElementById('kelvin-pressure-val');
    const valMoles = document.getElementById('kelvin-moles-val');
    
    // Texts
    const textTc = document.getElementById('kelvin-tc-text');
    const textTk = document.getElementById('kelvin-tk-text');
    const textVol = document.getElementById('kelvin-vol-text');
    const textVrms = document.getElementById('kelvin-vrms-text');

    const R = 0.08206; // L*atm/(mol*K)
    const R_J = 8.314; // J/(mol*K)
    const M_helium = 0.004; // kg/mol (Helium gas)

    let animationId = null;
    let particles = [];
    
    // Resize canvas
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class inside cylinder
    class GasParticle {
        constructor(w, h, pistonY) {
            this.x = Math.random() * (w - 60) + 30;
            this.y = Math.random() * (h - pistonY - 50) + pistonY + 30;
            const angle = Math.random() * Math.PI * 2;
            this.vx = Math.cos(angle);
            this.vy = Math.sin(angle);
            this.radius = 4;
            this.color = `hsl(${Math.random() * 30 + 200}, 80%, 60%)`;
        }
        
        update(w, h, pistonY, speedFactor) {
            if (speedFactor <= 0) {
                this.vx = 0;
                this.vy = 0;
                return;
            }
            
            // Normalize velocity vector
            const currentMag = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
            if (currentMag > 0) {
                this.vx = (this.vx / currentMag) * speedFactor;
                this.vy = (this.vy / currentMag) * speedFactor;
            } else {
                const angle = Math.random() * Math.PI * 2;
                this.vx = Math.cos(angle) * speedFactor;
                this.vy = Math.sin(angle) * speedFactor;
            }

            this.x += this.vx;
            this.y += this.vy;

            // Collision with left/right walls
            const margin = 30;
            if (this.x < margin + this.radius) {
                this.x = margin + this.radius;
                this.vx = -this.vx;
            } else if (this.x > w - margin - this.radius) {
                this.x = w - margin - this.radius;
                this.vx = -this.vx;
            }

            // Collision with bottom wall
            const bottom = h - 30;
            if (this.y > bottom - this.radius) {
                this.y = bottom - this.radius;
                this.vy = -this.vy;
            }

            // Collision with moving piston bottom face
            const topLimit = pistonY + 15; // bottom face of the piston
            if (this.y < topLimit + this.radius) {
                this.y = topLimit + this.radius;
                this.vy = Math.abs(this.vy); // Bounce downwards
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Chart.js initialization
    const kelvinChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Región Experimental (Gas)',
                    data: [],
                    borderColor: 'rgba(56, 189, 248, 1)', // Sky-blue
                    backgroundColor: 'rgba(56, 189, 248, 0.1)',
                    borderWidth: 3,
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Extrapolación Teórica',
                    data: [],
                    borderColor: 'rgba(239, 68, 68, 0.7)', // Red
                    borderWidth: 2,
                    borderDash: [6, 6],
                    pointRadius: 0,
                    fill: false
                },
                {
                    label: 'Punto de Operación',
                    data: [],
                    borderColor: '#ffffff',
                    backgroundColor: '#e0f2fe',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    showLine: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Temperatura (°C)',
                        color: '#94a3b8'
                    },
                    min: -300,
                    max: 300,
                    ticks: {
                        stepSize: 100,
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.08)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Volumen (L)',
                        color: '#94a3b8'
                    },
                    min: 0,
                    max: 100,
                    ticks: {
                        color: '#94a3b8'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.08)'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#f8fafc',
                        font: { size: 10 }
                    }
                }
            }
        }
    });

    function updateSimulation() {
        const Tc = parseFloat(sliderTemp.value);
        const P = parseFloat(sliderPressure.value);
        const n = parseFloat(sliderMoles.value);

        // Kelvin temperature (never below 0K)
        const TK = Math.max(0, Tc + 273.15);

        // Update labels
        valTemp.textContent = Tc;
        valTempK.textContent = TK.toFixed(1);
        valPressure.textContent = P.toFixed(2);
        valMoles.textContent = n.toFixed(2);

        textTc.textContent = `${Tc.toFixed(1)} °C`;
        textTk.textContent = `${TK.toFixed(2)} K`;

        // Calculate Volume: V = n*R*T / P
        const V = (n * R * TK) / P;
        textVol.textContent = `${V.toFixed(2)} L`;

        // Calculate v_rms = sqrt(3 * R_J * T_K / M)
        const vrms = TK > 0 ? Math.sqrt((3 * R_J * TK) / M_helium) : 0;
        textVrms.textContent = `${vrms.toFixed(0)} m/s`;

        // Update Chart data
        // 1. Experimental line (from -100C to 300C)
        const expData = [];
        for (let t = -100; t <= 300; t += 10) {
            const tk = t + 273.15;
            expData.push({ x: t, y: (n * R * tk) / P });
        }
        kelvinChart.data.datasets[0].data = expData;

        // 2. Extrapolation line (from -273.15C to -100C)
        const extData = [
            { x: -273.15, y: 0 },
            { x: -100, y: (n * R * (-100 + 273.15)) / P }
        ];
        kelvinChart.data.datasets[1].data = extData;

        // 3. Operating point
        kelvinChart.data.datasets[2].data = [{ x: Tc, y: V }];

        kelvinChart.update('none');

        // Manage particles count
        const targetParticlesCount = Math.floor(n * 50) + 10;
        const w = canvas.width;
        const h = canvas.height;
        
        // Piston Y coordinate (Y = 0 is top, Y = bottom is V=0)
        // Let's reserve 30px margin at top and 30px at bottom.
        const cylinderTop = 40;
        const cylinderBottom = h - 40;
        const cylinderHeight = cylinderBottom - cylinderTop;
        
        // Max volume is for n=1, T=300C (573K), P=0.5 => V ~ 94L. Let's scale V max to 100L.
        const V_max_scale = 100;
        const volumeHeight = Math.min(1.0, V / V_max_scale) * cylinderHeight;
        
        // Piston Y is cylinderBottom - volumeHeight
        const pistonTargetY = cylinderBottom - volumeHeight;

        // Maintain particles
        while (particles.length < targetParticlesCount) {
            particles.push(new GasParticle(w, h, pistonTargetY));
        }
        if (particles.length > targetParticlesCount) {
            particles.splice(targetParticlesCount);
        }

        // Particle speed factor proportional to sqrt(T_K)
        // At 293K (20C), let speed factor be 2.5
        const speedFactor = TK > 0 ? 2.5 * Math.sqrt(TK / 293.15) : 0;

        return { pistonTargetY, speedFactor };
    }

    let currentPistonY = canvas.height / 2;

    function renderLoop() {
        if (!canvas.offsetParent) {
            // Tab is not visible
            animationId = requestAnimationFrame(renderLoop);
            return;
        }

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const { pistonTargetY, speedFactor } = updateSimulation();

        // Smooth piston movement
        currentPistonY += (pistonTargetY - currentPistonY) * 0.1;

        const margin = 30;
        const cylinderTop = 40;
        const cylinderBottom = h - 40;

        // Draw Cylinder Glass Body
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.beginPath();
        // Left wall
        ctx.moveTo(margin, cylinderTop);
        ctx.lineTo(margin, cylinderBottom);
        // Bottom wall
        ctx.lineTo(w - margin, cylinderBottom);
        // Right wall
        ctx.lineTo(w - margin, cylinderTop);
        ctx.stroke();

        // Draw Gas particles in the chamber below the piston
        particles.forEach(p => {
            p.update(w, h, currentPistonY, speedFactor);
            p.draw(ctx);
        });

        // Draw Piston
        ctx.fillStyle = "rgba(148, 163, 184, 0.85)"; // slate-400
        ctx.strokeStyle = "#475569"; // slate-600
        ctx.lineWidth = 2;
        ctx.beginPath();
        // Piston block
        ctx.rect(margin + 2, currentPistonY, w - 2 * margin - 4, 15);
        ctx.fill();
        ctx.stroke();

        // Draw Piston Rod extending upwards
        ctx.fillStyle = "rgba(100, 116, 139, 0.9)";
        ctx.beginPath();
        ctx.rect(w / 2 - 8, cylinderTop - 10, 16, currentPistonY - cylinderTop + 10);
        ctx.fill();
        ctx.stroke();

        // Draw a pressure gauge indicator/sensor on the side
        ctx.fillStyle = "rgba(255,255,255,0.05)";
        ctx.beginPath();
        ctx.arc(w - margin - 20, cylinderBottom - 30, 15, 0, Math.PI*2);
        ctx.fill();

        animationId = requestAnimationFrame(renderLoop);
    }

    // Set event listeners
    sliderTemp.addEventListener('input', updateSimulation);
    sliderPressure.addEventListener('input', updateSimulation);
    sliderMoles.addEventListener('input', updateSimulation);

    // Initial run
    updateSimulation();
    renderLoop();
}

function initJouleSimulation() {
    const canvas = document.getElementById('jouleCanvas');
    const chartCtx = document.getElementById('jouleChart');
    if (!canvas || !chartCtx) return;

    const ctx = canvas.getContext('2d');
    
    // Sliders
    const sliderMass = document.getElementById('joule-mass');
    const sliderHeight = document.getElementById('joule-height');
    const sliderWater = document.getElementById('joule-water');
    
    // Labels
    const valMass = document.getElementById('joule-mass-val');
    const valHeight = document.getElementById('joule-height-val');
    const valWater = document.getElementById('joule-water-val');
    
    // Buttons
    const btnDrop = document.getElementById('joule-drop-btn');
    const btnReset = document.getElementById('joule-reset-btn');
    const btnClear = document.getElementById('joule-clear-btn');
    
    // Output Texts
    const textDrops = document.getElementById('joule-n-drops');
    const textW = document.getElementById('joule-w-val');
    const textQ = document.getElementById('joule-q-val');
    const textDt = document.getElementById('joule-dt-val');
    const textJ = document.getElementById('joule-j-val');
    const textUi = document.getElementById('joule-ui-val');
    const textUf = document.getElementById('joule-uf-val');
    const textDu = document.getElementById('joule-du-val');

    // Constants
    const g = 9.80665; // m/s^2
    const cp_water = 1.0; // cal/(g*K) -> cp = 1000 cal/(kg*K)
    const C_cal = 0.0; // cal/K (assuming ideal adiabatic calorimeter where water absorbs 100% heat)
    
    // Simulation state
    let nDrops = 0;
    let totalWork = 0; // J
    let currentTemp = 20.0; // °C
    const initialTemp = 20.0; // °C
    
    let baseTemp = 20.0;
    let dT_current_drop = 0.0;
    let baseWork = 0;
    let W_current_drop = 0;
    
    let massPosition = 0; // 0 to 1
    let isFalling = false;
    let isResetting = false;
    let wheelAngle = 0;
    let animationId = null;

    // Resize handler
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Chart.js Setup
    const chartData = [{ x: 0, y: initialTemp }];
    const jouleChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'Datos del Experimento',
                    data: chartData,
                    borderColor: 'rgba(249, 115, 22, 1)', // Orange
                    backgroundColor: 'rgba(249, 115, 22, 0.2)',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    showLine: true,
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    title: {
                        display: true,
                        text: 'Trabajo Mecánico Acumulado (J)',
                        color: '#94a3b8'
                    },
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Temperatura del Agua (°C)',
                        color: '#94a3b8'
                    },
                    ticks: { color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.08)' }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    // Handle inputs
    function updateInputs() {
        const m = parseFloat(sliderMass.value);
        const h_val = parseFloat(sliderHeight.value);
        const M_water_kg = parseFloat(sliderWater.value);
        valMass.textContent = m.toFixed(1);
        valHeight.textContent = h_val.toFixed(1);
        valWater.textContent = M_water_kg.toFixed(2);
        
        const Ep = 2 * m * g * h_val;
        const textEp = document.getElementById('joule-ep-val');
        if (textEp) textEp.textContent = `${Ep.toFixed(1)} J`;

        const Ui = M_water_kg * 4184 * initialTemp;
        const Uf = M_water_kg * 4184 * currentTemp;
        const dU = Uf - Ui;
        if (textUi) textUi.textContent = `${Ui.toFixed(1)} J`;
        if (textUf) textUf.textContent = `${Uf.toFixed(1)} J`;
        if (textDu) textDu.textContent = `${dU.toFixed(1)} J`;
    }
    
    sliderMass.addEventListener('input', updateInputs);
    sliderHeight.addEventListener('input', updateInputs);
    sliderWater.addEventListener('input', updateInputs);

    function dropWeights() {
        if (isFalling || isResetting || massPosition >= 1.0) return;
        
        // Save current base values
        baseTemp = currentTemp;
        baseWork = totalWork;
        
        // Pre-compute parameters
        const m = parseFloat(sliderMass.value);
        const h_val = parseFloat(sliderHeight.value);
        const M_water_kg = parseFloat(sliderWater.value);
        
        W_current_drop = 2 * m * g * h_val;
        
        const noise = 0.985 + Math.random() * 0.03;
        const J_target = 4.184 * noise;
        const Q_drop_cal = W_current_drop / J_target;
        const heatCapacity = M_water_kg * 1000 * cp_water + C_cal;
        dT_current_drop = Q_drop_cal / heatCapacity;

        isFalling = true;
        
        // Disable sliders during fall
        sliderMass.disabled = true;
        sliderHeight.disabled = true;
        sliderWater.disabled = true;
        btnDrop.disabled = true;
        btnReset.disabled = true;
    }

    function resetWeights() {
        if (isFalling || isResetting || massPosition <= 0) return;
        isResetting = true;
        btnDrop.disabled = true;
        btnReset.disabled = true;
    }

    function clearExperiment() {
        isFalling = false;
        isResetting = false;
        massPosition = 0;
        nDrops = 0;
        totalWork = 0;
        currentTemp = initialTemp;
        
        // Re-enable inputs
        sliderMass.disabled = false;
        sliderHeight.disabled = false;
        sliderWater.disabled = false;
        btnDrop.disabled = false;
        btnReset.disabled = true;

        chartData.length = 0;
        chartData.push({ x: 0, y: initialTemp });
        jouleChart.update();

        // Update displays
        const M_water_kg = parseFloat(sliderWater.value);
        const Ui = M_water_kg * 4184 * initialTemp;
        textDrops.textContent = "0";
        textW.textContent = "0.0 J";
        textQ.textContent = "0.0 cal / 0.0 J";
        textDt.textContent = "0.000 °C";
        textJ.textContent = "-- J/cal";
        if (textUi) textUi.textContent = `${Ui.toFixed(1)} J`;
        if (textUf) textUf.textContent = `${Ui.toFixed(1)} J`;
        if (textDu) textDu.textContent = "0.0 J";
    }

    btnDrop.addEventListener('click', dropWeights);
    btnReset.addEventListener('click', resetWeights);
    btnClear.addEventListener('click', clearExperiment);

    // Initial button state
    btnReset.disabled = true;

    function renderLoop() {
        if (!canvas.offsetParent) {
            animationId = requestAnimationFrame(renderLoop);
            return;
        }

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const m = parseFloat(sliderMass.value);
        const height_m = parseFloat(sliderHeight.value);
        const M_water_kg = parseFloat(sliderWater.value);

        // Simulation update
        if (isFalling) {
            massPosition += 0.008; // Control falling speed
            wheelAngle += 0.15;

            const heatCapacity = M_water_kg * 1000 * cp_water + C_cal;

            // Interpolate values in real-time
            const interpWork = baseWork + massPosition * W_current_drop;
            const interpTemp = baseTemp + massPosition * dT_current_drop;
            const interpHeat_cal = (interpTemp - initialTemp) * heatCapacity;
            const interpHeat_J = interpWork;
            const interpJ = interpHeat_cal > 0 ? interpWork / interpHeat_cal : 0;

            // Update DOM text fields dynamically in real-time
            textW.textContent = `${interpWork.toFixed(1)} J`;
            textQ.textContent = `${interpHeat_cal.toFixed(1)} cal / ${interpHeat_J.toFixed(1)} J`;
            textDt.textContent = `${(interpTemp - initialTemp).toFixed(3)} °C`;
            textJ.textContent = interpJ > 0 ? `${interpJ.toFixed(3)} J/cal` : "-- J/cal";

            const interpUi = M_water_kg * 4184 * initialTemp;
            const interpDu = interpWork;
            const interpUf = interpUi + interpDu;
            if (textUi) textUi.textContent = `${interpUi.toFixed(1)} J`;
            if (textUf) textUf.textContent = `${interpUf.toFixed(1)} J`;
            if (textDu) textDu.textContent = `${interpDu.toFixed(1)} J`;

            currentTemp = interpTemp;

            if (massPosition >= 1.0) {
                massPosition = 1.0;
                isFalling = false;
                nDrops += 1;

                totalWork = baseWork + W_current_drop;
                currentTemp = baseTemp + dT_current_drop;

                const finalHeat_cal = (currentTemp - initialTemp) * heatCapacity;
                const finalHeat_J = totalWork;
                const finalJ = finalHeat_cal > 0 ? totalWork / finalHeat_cal : 0;

                const finalUi = M_water_kg * 4184 * initialTemp;
                const finalDu = totalWork;
                const finalUf = finalUi + finalDu;

                textDrops.textContent = nDrops;
                textW.textContent = `${totalWork.toFixed(1)} J`;
                textQ.textContent = `${finalHeat_cal.toFixed(1)} cal / ${finalHeat_J.toFixed(1)} J`;
                textDt.textContent = `${(currentTemp - initialTemp).toFixed(3)} °C`;
                textJ.textContent = `${finalJ.toFixed(3)} J/cal`;
                if (textUi) textUi.textContent = `${finalUi.toFixed(1)} J`;
                if (textUf) textUf.textContent = `${finalUf.toFixed(1)} J`;
                if (textDu) textDu.textContent = `${finalDu.toFixed(1)} J`;

                // Add point to chart
                chartData.push({ x: totalWork, y: currentTemp });
                jouleChart.update('none');

                btnReset.disabled = false;
            }
        } else if (isResetting) {
            massPosition -= 0.015; // Re-winding is faster
            if (massPosition <= 0) {
                massPosition = 0;
                isResetting = false;

                // Re-enable controls if not running
                sliderMass.disabled = false;
                sliderHeight.disabled = false;
                sliderWater.disabled = false;
                btnDrop.disabled = false;
                btnReset.disabled = true;
            }
        }

        // Draw components in Canvas
        const margin = 50;
        const topY = 60;
        const bottomY = h - 60;
        const ropeLength = bottomY - topY - 40;
        const currentMassY = topY + massPosition * ropeLength;

        // 1. Draw Pulley Axles and Support beam
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(margin, topY);
        ctx.lineTo(w - margin, topY);
        ctx.stroke();

        // 2. Draw Pulleys (circular disks on left and right)
        const pulleyR = 18;
        const leftPulleyX = margin + 30;
        const rightPulleyX = w - margin - 30;

        const drawPulley = (x, y, angle) => {
            ctx.fillStyle = "#475569";
            ctx.strokeStyle = "#94a3b8";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(x, y, pulleyR, 0, Math.PI*2);
            ctx.fill();
            ctx.stroke();
            
            // Draw cross spokes representing rotation
            ctx.strokeStyle = "rgba(255,255,255,0.4)";
            ctx.beginPath();
            ctx.moveTo(x - Math.cos(angle)*pulleyR, y - Math.sin(angle)*pulleyR);
            ctx.lineTo(x + Math.cos(angle)*pulleyR, y + Math.sin(angle)*pulleyR);
            ctx.moveTo(x - Math.sin(angle)*pulleyR, y + Math.cos(angle)*pulleyR);
            ctx.lineTo(x + Math.sin(angle)*pulleyR, y - Math.cos(angle)*pulleyR);
            ctx.stroke();
        };

        drawPulley(leftPulleyX, topY, wheelAngle);
        drawPulley(rightPulleyX, topY, -wheelAngle);

        // 3. Draw Calorimeter (in the center)
        const calX = w / 2;
        const calY = h / 2 + 30;
        const calW = 90;
        const calH = 100;

        // Draw outer glass body of calorimeter
        ctx.fillStyle = "rgba(30, 41, 59, 0.7)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.rect(calX - calW/2, calY - calH/2, calW, calH);
        ctx.fill();
        ctx.stroke();

        // Water level inside calorimeter
        const waterH = calH - 20;
        const waterY = calY + calH/2 - waterH;
        ctx.fillStyle = "rgba(56, 189, 248, 0.25)"; // Translucent sky blue
        ctx.beginPath();
        ctx.rect(calX - calW/2 + 2, waterY, calW - 4, waterH - 2);
        ctx.fill();

        // 4. Central Rotating Axle and Paddle Wheel inside calorimeter
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(calX, topY);
        ctx.lineTo(calX, calY + 30);
        ctx.stroke();

        // Draw central spool on the axle
        ctx.fillStyle = "#64748b";
        ctx.beginPath();
        ctx.rect(calX - 8, topY + 5, 16, 15);
        ctx.fill();
        ctx.stroke();

        // Draw paddle blades
        ctx.strokeStyle = "#f59e0b";
        ctx.lineWidth = 4;
        const numBlades = 4;
        const bladeLength = 26;
        for (let i = 0; i < numBlades; i++) {
            const angle = wheelAngle + (i * Math.PI / 2);
            // Squish vertically to simulate 3D projection
            const bx = calX + Math.cos(angle) * bladeLength;
            const by = calY + Math.sin(angle) * 8; // flat ellipse
            ctx.beginPath();
            ctx.moveTo(calX, calY);
            ctx.lineTo(bx, by);
            ctx.stroke();
        }

        // Draw swirling friction wave ripples when falling
        if (isFalling) {
            ctx.strokeStyle = "rgba(249, 115, 22, 0.4)";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(calX, calY, bladeLength + 6, 0, Math.PI*2);
            ctx.stroke();
        }

        // 5. Draw Ropes and Falling Weights
        const drawRopeAndWeight = (pulleyX, weightX, leftSide) => {
            // Draw rope wrapped around central spool, extending to the pulley
            ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(calX, topY + 12);
            ctx.lineTo(pulleyX, topY - pulleyR + 3);
            ctx.stroke();

            // Rope from pulley down to weight
            ctx.beginPath();
            ctx.moveTo(weightX, topY + (leftSide ? -pulleyR + 3 : pulleyR - 3));
            ctx.lineTo(weightX, currentMassY);
            ctx.stroke();

            // Draw Weight block
            ctx.fillStyle = "#475569";
            ctx.strokeStyle = "#94a3b8";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.rect(weightX - 12, currentMassY, 24, 28);
            ctx.fill();
            ctx.stroke();

            // Write mass value on weight block
            ctx.fillStyle = "#ffffff";
            ctx.font = "9px Inter, sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`${m.toFixed(1)}kg`, weightX, currentMassY + 18);
        };

        drawRopeAndWeight(leftPulleyX, leftPulleyX - pulleyR, true);
        drawRopeAndWeight(rightPulleyX, rightPulleyX + pulleyR, false);

        // 6. Thermometer extending inside calorimeter water
        const thermX = calX - calW/2 + 20;
        ctx.strokeStyle = "#e2e8f0";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(thermX, calY - calH/2 - 20);
        ctx.lineTo(thermX, calY + 20);
        ctx.stroke();

        // Red mercury line in thermometer reflecting temperature rise
        const dtRatio = Math.min(1.0, (currentTemp - initialTemp) / 1.0); // 1.0 C max rise visual scale
        const thermLevel = calY + 20 - (dtRatio * 45);
        ctx.strokeStyle = "#ef4444";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(thermX, calY + 20);
        ctx.lineTo(thermX, thermLevel);
        ctx.stroke();

        // 7. Digital temperature display badge next to thermometer
        ctx.fillStyle = "rgba(15, 23, 42, 0.85)"; // Slate 900
        ctx.strokeStyle = "rgba(245, 158, 11, 0.5)"; // Amber border
        ctx.lineWidth = 1;
        const badgeX = thermX + 15;
        const badgeY = calY - calH/2 - 25;
        const badgeW = 72;
        const badgeH = 18;
        ctx.beginPath();
        if (typeof ctx.roundRect === 'function') {
            ctx.roundRect(badgeX, badgeY, badgeW, badgeH, 4);
        } else {
            ctx.rect(badgeX, badgeY, badgeW, badgeH);
        }
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#fbbf24"; // Amber text
        ctx.font = "bold 9px monospace";
        ctx.textAlign = "left";
        ctx.fillText(`${currentTemp.toFixed(3)} °C`, badgeX + 6, badgeY + 12);

        animationId = requestAnimationFrame(renderLoop);
    }

    // Initial setup
    updateInputs();
    renderLoop();
}

function initHerschelSimulation() {
    const canvas = document.getElementById('herschelCanvas');
    const chartCtx = document.getElementById('herschelChart');
    if (!canvas || !chartCtx) return;

    const ctx = canvas.getContext('2d');
    
    // Sliders
    const sliderPos = document.getElementById('herschel-pos');
    const sliderInt = document.getElementById('herschel-int');
    const sliderTemp = document.getElementById('herschel-temp');
    
    // Labels
    const valPos = document.getElementById('herschel-pos-val');
    const valInt = document.getElementById('herschel-int-val');
    const valTemp = document.getElementById('herschel-temp-val');
    
    // Results
    const lblRegion = document.getElementById('herschel-region-lbl');
    const valTact = document.getElementById('herschel-tact-val');
    const valTc1 = document.getElementById('herschel-tc1-val');
    const valTc2 = document.getElementById('herschel-tc2-val');
    const valDt = document.getElementById('herschel-dt-val');

    let animationId = null;

    // Spectra mapping
    // 0% is Violet (380nm), 70% is Red (700nm), 75% is near IR peak, 100% is far IR.
    function getRegionInfo(pct) {
        if (pct < 15) return { name: "Violeta", wavelength: 380 + pct * 2, color: "#8b5cf6", heatFactor: 0.15 };
        if (pct < 30) return { name: "Azul", wavelength: 410 + (pct - 15) * 4.6, color: "#3b82f6", heatFactor: 0.22 };
        if (pct < 45) return { name: "Verde", wavelength: 480 + (pct - 30) * 4.6, color: "#10b981", heatFactor: 0.30 };
        if (pct < 58) return { name: "Amarillo", wavelength: 550 + (pct - 45) * 3.8, color: "#eab308", heatFactor: 0.42 };
        if (pct < 70) return { name: "Naranja", wavelength: 600 + (pct - 58) * 3.3, color: "#f97316", heatFactor: 0.58 };
        if (pct < 82) return { name: "Rojo", wavelength: 640 + (pct - 70) * 5.0, color: "#ef4444", heatFactor: 0.85 };
        if (pct < 92) return { name: "Infrarrojo Cercano (Invisible)", wavelength: 700 + (pct - 82) * 15.0, color: "#3f1a1a", heatFactor: 1.25 }; // Peak!
        return { name: "Infrarrojo Lejano (Invisible)", wavelength: 850 + (pct - 92) * 30.0, color: "#1c0d0d", heatFactor: 0.65 }; // Decay
    }

    // Chart.js Setup
    const curveLabels = [];
    const curveData = [];
    const numPoints = 25;
    for (let i = 0; i <= numPoints; i++) {
        const pct = (i / numPoints) * 100;
        const reg = getRegionInfo(pct);
        curveLabels.push(reg.name);
        curveData.push(0); // populated dynamically
    }

    const herschelChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: curveLabels,
            datasets: [
                {
                    label: 'Perfil de Temperatura',
                    data: curveData,
                    borderColor: 'rgba(239, 68, 68, 0.8)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Termómetro Activo',
                    data: [],
                    borderColor: '#ffffff',
                    backgroundColor: '#ef4444',
                    borderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    showLine: false
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#cbd5e1', font: { size: 9 } }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#cbd5e1', font: { size: 9 } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    let currentTact = 20;
    let currentTc1 = 20;
    let currentTc2 = 20;

    function updateSimulation() {
        const pct = parseFloat(sliderPos.value);
        const I = parseFloat(sliderInt.value);
        const Tamb = parseFloat(sliderTemp.value);
        
        const reg = getRegionInfo(pct);
        
        valPos.textContent = `${reg.name} (${Math.round(reg.wavelength)} nm)`;
        valInt.textContent = I;
        valTemp.textContent = Tamb;
        
        lblRegion.textContent = reg.name;

        // Targets based on physics
        // Maximum rise at peak is ~4.5 degrees at I=1000 W/m2
        const targetTact = Tamb + (I / 1000) * 3.5 * reg.heatFactor;
        
        // Control thermometers have tiny ambient noise
        const targetTc1 = Tamb + Math.sin(Date.now() / 1500) * 0.02;
        const targetTc2 = Tamb + Math.cos(Date.now() / 1200) * 0.02 - 0.01;

        // Smooth transition (thermal inertia)
        currentTact += (targetTact - currentTact) * 0.08;
        currentTc1 += (targetTc1 - currentTc1) * 0.08;
        currentTc2 += (targetTc2 - currentTc2) * 0.08;

        valTact.innerHTML = `${currentTact.toFixed(2)} &deg;C`;
        valTc1.innerHTML = `${currentTc1.toFixed(2)} &deg;C`;
        valTc2.innerHTML = `${currentTc2.toFixed(2)} &deg;C`;
        
        const dT = currentTact - Tamb;
        valDt.innerHTML = `${dT >= 0 ? '+' : ''}${dT.toFixed(2)} &deg;C`;
        
        // Update Chart
        const tempCurve = [];
        for (let i = 0; i <= numPoints; i++) {
            const tempPct = (i / numPoints) * 100;
            const tempReg = getRegionInfo(tempPct);
            const tempT = Tamb + (I / 1000) * 3.5 * tempReg.heatFactor;
            tempCurve.push(tempT);
        }
        
        // Active thermometer marker on chart
        const markerIdx = Math.round((pct / 100) * numPoints);
        const markerData = Array(numPoints + 1).fill(null);
        markerData[markerIdx] = currentTact;

        herschelChart.data.datasets[0].data = tempCurve;
        herschelChart.data.datasets[1].data = markerData;
        
        // Keep scale appropriate
        herschelChart.options.scales.y.min = Math.floor(Tamb - 1);
        herschelChart.options.scales.y.max = Math.ceil(Tamb + (I / 1000) * 5);
        herschelChart.update('none');
    }

    function renderLoop() {
        if (!canvas.offsetParent) {
            animationId = requestAnimationFrame(renderLoop);
            return;
        }

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const pct = parseFloat(sliderPos.value);
        const Tamb = parseFloat(sliderTemp.value);
        const reg = getRegionInfo(pct);

        // Resize if needed
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        // DRAW HERSCHEL APPARATUS
        const cx = canvas.width;
        const cy = canvas.height;

        // 1. Draw Window slit and sunray beam
        const windowX = 40;
        const windowY = 60;
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(0, 0, windowX, cy); // Wall
        ctx.fillStyle = "#020617";
        ctx.fillRect(0, windowY, windowX, 25); // Slit opening

        // Draw sunray beam entering through the slit
        const beamStart = windowX;
        const beamEndY = 140;
        const prismX = 140;
        const prismY = 140;

        ctx.strokeStyle = "rgba(255, 253, 220, 0.4)";
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.moveTo(beamStart, windowY + 12.5);
        ctx.lineTo(prismX - 10, beamEndY);
        ctx.stroke();

        // 2. Draw Prism (Triangle)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.fillStyle = "rgba(147, 197, 253, 0.3)"; // light blue glass
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(prismX, prismY - 40);
        ctx.lineTo(prismX + 35, prismY + 30);
        ctx.lineTo(prismX - 35, prismY + 30);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 3. Draw Dispersed Ray Gradient Spectrum on the table
        const tableY = cy - 130;
        const spectrumStartX = prismX + 50;
        const spectrumEndX = cx - 50;
        const spectrumW = spectrumEndX - spectrumStartX;

        // Dispersed light paths from prism to spectrum
        // We draw individual colors to show a nice dispersion fan
        const colors = [
            { c: "rgba(139, 92, 246, 0.2)", xRatio: 0.05 }, // Violet
            { c: "rgba(59, 130, 246, 0.2)", xRatio: 0.18 }, // Blue
            { c: "rgba(16, 185, 129, 0.2)", xRatio: 0.33 }, // Green
            { c: "rgba(234, 179, 8, 0.2)", xRatio: 0.50 }, // Yellow
            { c: "rgba(249, 115, 22, 0.2)", xRatio: 0.65 }, // Orange
            { c: "rgba(239, 68, 68, 0.25)", xRatio: 0.78 }, // Red
            { c: "rgba(239, 68, 68, 0.03)", xRatio: 0.95 }  // Infrared
        ];

        colors.forEach(col => {
            ctx.fillStyle = col.c;
            ctx.beginPath();
            ctx.moveTo(prismX, prismY);
            ctx.lineTo(spectrumStartX + col.xRatio * spectrumW - 10, tableY);
            ctx.lineTo(spectrumStartX + col.xRatio * spectrumW + 10, tableY);
            ctx.closePath();
            ctx.fill();
        });

        // Draw Table Surface
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(spectrumStartX - 40, tableY + 5);
        ctx.lineTo(spectrumEndX + 45, tableY + 5);
        ctx.stroke();

        // Projected spectrum band on the table
        const grad = ctx.createLinearGradient(spectrumStartX, 0, spectrumStartX + spectrumW, 0);
        grad.addColorStop(0.0, "#8b5cf6"); // Violet
        grad.addColorStop(0.15, "#3b82f6"); // Blue
        grad.addColorStop(0.35, "#10b981"); // Green
        grad.addColorStop(0.52, "#eab308"); // Yellow
        grad.addColorStop(0.68, "#f97316"); // Orange
        grad.addColorStop(0.80, "#ef4444"); // Red
        grad.addColorStop(0.85, "rgba(239, 68, 68, 0.15)"); // Near IR (slightly visible deep red glow)
        grad.addColorStop(0.95, "rgba(12, 20, 36, 0.1)"); // Dark

        ctx.fillStyle = grad;
        ctx.fillRect(spectrumStartX, tableY - 6, spectrumW, 12);
        
        // Draw labels below spectrum (rotated vertically and larger)
        const colorLabels = [
            { text: "Violeta", x: spectrumStartX + 0.05 * spectrumW },
            { text: "Azul", x: spectrumStartX + 0.18 * spectrumW },
            { text: "Verde", x: spectrumStartX + 0.33 * spectrumW },
            { text: "Amarillo", x: spectrumStartX + 0.50 * spectrumW },
            { text: "Naranja", x: spectrumStartX + 0.65 * spectrumW },
            { text: "Rojo", x: spectrumStartX + 0.78 * spectrumW },
            { text: "Infrarrojo (Oscuro)", x: spectrumStartX + 0.90 * spectrumW }
        ];

        colorLabels.forEach(lbl => {
            ctx.save();
            ctx.translate(lbl.x, tableY + 18);
            ctx.rotate(Math.PI / 2); // 90 degrees clockwise
            ctx.fillStyle = "#cbd5e1";
            ctx.font = "bold 11px Inter, sans-serif";
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";
            ctx.fillText(lbl.text, 0, 0);
            ctx.restore();
        });

        // 4. DRAW THERMOMETERS
        // 4. DRAW THERMOMETERS
        const drawThermometer = (tx, ty, tVal, isActive) => {
            // Dimensions based on active status
            const wSupport = isActive ? 44 : 26;
            const hSupport = isActive ? 145 : 95;
            const ySupportOffset = isActive ? 115 : 75;

            const glassW = isActive ? 8 : 5;
            const glassTop = isActive ? ty - 95 : ty - 60;
            const glassBottom = isActive ? ty + 20 : ty + 12;

            const bulbRadius = isActive ? 12 : 7.5;
            const bulbY = isActive ? ty + 20 : ty + 12;

            // Dynamic scale: Tamb - 2 to Tamb + 5 to make ambient reading clearly visible above bulb
            const tMin = Tamb - 2;
            const tMax = Tamb + 5;
            const tRatio = Math.max(0, Math.min(1, (tVal - tMin) / (tMax - tMin)));
            
            const liquidH = isActive ? 95 : 62;
            const liquidTop = bulbY - (tRatio * liquidH);
            const liquidW = isActive ? 4.5 : 3.0;

            const bulbCoreRadius = isActive ? 6 : 4;

            const badgeW = isActive ? 82 : 56;
            const badgeH = isActive ? 26 : 20;
            const badgeYOffset = isActive ? 148 : 100;
            const badgeXOffset = badgeW / 2;

            const textYOffset = isActive ? 131 : 86;
            const fontSize = isActive ? "15px" : "10px";

            // Draw wooden support
            ctx.fillStyle = "#475569";
            ctx.fillRect(tx - wSupport / 2, ty - ySupportOffset, wSupport, hSupport);
            
            // Draw glass tube
            ctx.strokeStyle = "#e2e8f0";
            ctx.lineWidth = glassW;
            ctx.beginPath();
            ctx.moveTo(tx, glassTop);
            ctx.lineTo(tx, glassBottom);
            ctx.stroke();

            // Draw blackened bulb at the bottom
            ctx.fillStyle = "#0c1424"; // blackened bulb
            ctx.beginPath();
            ctx.arc(tx, bulbY, bulbRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#94a3b8";
            ctx.lineWidth = isActive ? 2 : 1.2;
            ctx.stroke();

            // Red liquid column inside thermometer reflecting temperature
            ctx.strokeStyle = "#ef4444";
            ctx.lineWidth = liquidW;
            ctx.beginPath();
            ctx.moveTo(tx, bulbY);
            ctx.lineTo(tx, liquidTop);
            ctx.stroke();

            // Small liquid bulb core
            ctx.fillStyle = "#ef4444";
            ctx.beginPath();
            ctx.arc(tx, bulbY, bulbCoreRadius, 0, Math.PI * 2);
            ctx.fill();

            // Value badge
            ctx.fillStyle = isActive ? "rgba(239, 68, 68, 0.95)" : "rgba(15, 23, 42, 0.85)";
            ctx.strokeStyle = isActive ? "#fbbf24" : "#475569";
            ctx.lineWidth = isActive ? 2 : 1;
            ctx.beginPath();
            if (typeof ctx.roundRect === 'function') {
                ctx.roundRect(tx - badgeXOffset, ty - badgeYOffset, badgeW, badgeH, 4);
            } else {
                ctx.rect(tx - badgeXOffset, ty - badgeYOffset, badgeW, badgeH);
            }
            ctx.fill();
            ctx.stroke();

            // Temperature text
            ctx.fillStyle = isActive ? "#000000" : "#ffffff";
            ctx.font = `bold ${fontSize} monospace`;
            ctx.textAlign = "center";
            ctx.fillText(`${tVal.toFixed(1)}°C`, tx, ty - textYOffset);
        };

        // Termómetro Activo (se desliza a lo largo del espectro, sits on table)
        const activeTx = spectrumStartX + (pct / 100) * spectrumW;
        drawThermometer(activeTx, tableY - 15, currentTact, true);

        // Termómetros de Control en la Sombra (drawn below the floor/table line)
        // Control 1: Colocado a la izquierda, fuera de la luz dispersada
        const c1Tx = spectrumStartX - 30;
        drawThermometer(c1Tx, tableY + 80, currentTc1, false);

        // Control 2: Colocado a la derecha, muy lejos en la oscuridad total
        const c2Tx = spectrumEndX + 35;
        drawThermometer(c2Tx, tableY + 80, currentTc2, false);

        // Labels above thermometers (positioned carefully to avoid badges)
        ctx.fillStyle = "#94a3b8";
        ctx.font = "11px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Termómetro Activo", activeTx, tableY - 180);

        // Control 1 label drawn vertically on the left side
        ctx.save();
        ctx.translate(c1Tx - 20, tableY + 85);
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText("Control 1 (Sombra)", 0, 0);
        ctx.restore();

        // Control 2 label drawn vertically on the left side
        ctx.save();
        ctx.translate(c2Tx - 20, tableY + 85);
        ctx.rotate(-Math.PI / 2);
        ctx.fillStyle = "#94a3b8";
        ctx.font = "bold 10px Inter, sans-serif";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText("Control 2 (Sombra)", 0, 0);
        ctx.restore();

        animationId = requestAnimationFrame(renderLoop);
    }

    [sliderPos, sliderInt, sliderTemp].forEach(slider => {
        slider.addEventListener('input', updateSimulation);
    });

    // Initial run
    updateSimulation();
    renderLoop();
}

/* =========================================================================
   GLOBAL THEME CHART SYNC
   ========================================================================= */
function updateAllChartsTheme() {
    if (!window.Chart || !Chart.instances) return;
    
    const bodyStyles = getComputedStyle(document.body);
    const gridColor = bodyStyles.getPropertyValue('--chart-grid').trim() || 'rgba(255,255,255,0.05)';
    const textColor = bodyStyles.getPropertyValue('--chart-text').trim() || '#cbd5e1';

    const isLight = document.body.classList.contains('light-theme');
    const labelBgColor = isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(11, 15, 25, 0.85)';

    Object.values(Chart.instances).forEach(chart => {
        if (chart.options.scales) {
            Object.values(chart.options.scales).forEach(scale => {
                if (scale.grid) {
                    scale.grid.color = gridColor;
                }
                if (scale.ticks) {
                    scale.ticks.color = textColor;
                }
                if (scale.title) {
                    scale.title.color = textColor;
                }
            });
        }
        
        if (chart.options.plugins && chart.options.plugins.legend && chart.options.plugins.legend.labels) {
            chart.options.plugins.legend.labels.color = textColor;
        }

        // Specially update Nukiyama chart annotations if present
        if (chart.canvas.id === 'nukiyamaChart' && chart.options.plugins.annotation && chart.options.plugins.annotation.annotations) {
            const ann = chart.options.plugins.annotation.annotations;
            if (ann.burnoutJump && ann.burnoutJump.label) {
                ann.burnoutJump.label.backgroundColor = labelBgColor;
            }
            if (ann.coolingJump && ann.coolingJump.label) {
                ann.coolingJump.label.backgroundColor = labelBgColor;
            }
        }

        chart.update('none');
    });
}

function initMicrochannelSimulation() {
    const canvas = document.getElementById('microchannelCanvas');
    const chartCtx = document.getElementById('microchannelChart');
    if (!canvas || !chartCtx) return;

    const ctx = canvas.getContext('2d');

    // Controls
    const sPower = document.getElementById('mc-power');
    const sWidth = document.getElementById('mc-width');
    const sFlow = document.getElementById('mc-flow');
    const sMaterial = document.getElementById('mc-material');
    const cbBallistic = document.getElementById('mc-ballistic');

    // Labels
    const valPower = document.getElementById('mc-power-val');
    const valWidth = document.getElementById('mc-width-val');
    const valFlow = document.getElementById('mc-flow-val');

    // Results
    const lblDh = document.getElementById('mc-dh-lbl');
    const lblH = document.getElementById('mc-h-lbl');
    const lblRmic = document.getElementById('mc-rmic-lbl');
    const lblTmax = document.getElementById('mc-tmax-lbl');

    let animationId = null;
    let particleOffset = 0;

    // Dimensions
    const W_chip = 0.015; // 15 mm
    const L_chip = 0.015; // 15 mm
    const H_channel = 400e-6; // 400 um (height of channels)
    const k_fluid = 0.60; // Water conductivity (W/mK)
    const rho_fluid = 1000; // Density
    const Cp_fluid = 4184; // Heat capacity
    const T_in = 20.0; // Coolant inlet temperature

    // Chart Setup
    const numPoints = 20;
    const xLabels = [];
    const tFluidData = [];
    const tChipData = [];

    for (let i = 0; i <= numPoints; i++) {
        xLabels.push(`${(i / numPoints * 15).toFixed(1)} mm`);
        tFluidData.push(20);
        tChipData.push(20);
    }

    const mcChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [
                {
                    label: 'Temperatura del Chip T_chip(x)',
                    data: tChipData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    borderWidth: 2.5,
                    fill: false,
                    tension: 0.1,
                    pointRadius: 0
                },
                {
                    label: 'Temperatura del Fluido T_f(x)',
                    data: tFluidData,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.1,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#cbd5e1', font: { size: 9 } }
                },
                y: {
                    title: { display: true, text: 'Temperatura (°C)', color: '#94a3b8' },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#cbd5e1', font: { size: 9 } }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: { color: '#cbd5e1', boxWidth: 12, font: { size: 9 } }
                }
            }
        }
    });

    let currentTmax = 20;
    let currentFluidOut = 20;
    let computedProfiles = { chip: [], fluid: [] };

    function calculateThermals() {
        const Q = parseFloat(sPower.value);
        const w_c = parseFloat(sWidth.value) * 1e-6; // convert to m
        const V_dot = (parseFloat(sFlow.value) / 60) * 1e-6; // convert to m3/s
        const material = sMaterial.value;
        const isBallistic = cbBallistic.checked;

        valPower.textContent = Q;
        valWidth.textContent = Math.round(w_c * 1e6);
        valFlow.textContent = sFlow.value;

        // Pitch between channels: assume ribs are as wide as the channels
        const pitch = 2 * w_c; 
        const N_channels = Math.floor(W_chip / pitch);

        // Hydraulic Diameter
        const D_h = (2 * w_c * H_channel) / (w_c + H_channel);

        // Nusselt number model for rectangular channels
        const Nu = 4.0;
        const h = (Nu * k_fluid) / D_h;

        // Thermal conductivity of block
        let k_s = material === 'Cu' ? 401 : 148;

        if (material === 'Si' && isBallistic) {
            // Ballistic phonon effect (scaled to 40 um for pedagogical visibility in microscale channels)
            const lambda = 40e-6; 
            const wall_thickness = w_c; 
            k_s = k_s / (1 + lambda / wall_thickness);
        }

        // Fin efficiency model for channel walls
        const m = Math.sqrt((2 * h) / (k_s * w_c));
        const fin_efficiency = Math.tanh(m * H_channel) / (m * H_channel);

        // Active area per channel
        const A_active_per_channel = (w_c + 2 * H_channel * fin_efficiency) * L_chip;
        const R_conv = 1 / (h * A_active_per_channel * N_channels);

        // Conduction resistance of base thickness (assume 0.5 mm)
        const t_base = 500e-6;
        const R_cond_base = t_base / (k_s * W_chip * L_chip);

        // Fluid mass flow
        const m_dot = rho_fluid * V_dot;
        const dT_fluid_total = m_dot > 0 ? (Q / (m_dot * Cp_fluid)) : 0;

        // Populate curve profiles
        const fluidProfile = [];
        const chipProfile = [];

        for (let i = 0; i <= numPoints; i++) {
            const xRatio = i / numPoints;
            const T_f_x = T_in + dT_fluid_total * xRatio;
            const T_c_x = T_f_x + R_conv * Q + R_cond_base * Q;
            
            fluidProfile.push(T_f_x);
            chipProfile.push(T_c_x);
        }

        computedProfiles.fluid = fluidProfile;
        computedProfiles.chip = chipProfile;

        // Results displays
        currentTmax = chipProfile[numPoints];
        currentFluidOut = fluidProfile[numPoints];

        lblDh.innerHTML = `${(D_h * 1e6).toFixed(1)} &mu;m`;
        lblH.innerHTML = `${Math.round(h)} W/m²K`;
        lblRmic.innerHTML = `${(R_conv + R_cond_base).toFixed(3)} K/W`;
        lblTmax.innerHTML = `${currentTmax.toFixed(1)} °C`;

        // Update Chart
        mcChart.data.datasets[0].data = chipProfile;
        mcChart.data.datasets[1].data = fluidProfile;
        mcChart.options.scales.y.min = 15;
        mcChart.options.scales.y.max = Math.ceil(Math.max(50, currentTmax + 5));
        mcChart.update('none');
    }

    function renderLoop() {
        if (!canvas.offsetParent) {
            animationId = requestAnimationFrame(renderLoop);
            return;
        }

        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            canvas.width = rect.width;
            canvas.height = rect.height;
        }

        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const isBallistic = cbBallistic.checked;
        const flowValue = parseFloat(sFlow.value);

        // Update particle offsets
        const speed = flowValue * 0.05;
        particleOffset += speed;
        if (particleOffset > 60) particleOffset = 0;

        // Draw disipador base
        const marginX = 40;
        const marginY = 30;
        const blockW = w - 2 * marginX;
        const blockH = h - 2 * marginY - 20;

        const material = sMaterial.value;
        const blockColor = material === 'Cu' ? '#c27e56' : '#475569';

        // Draw Microchip
        const chipColorRatio = Math.min(1, Math.max(0, (currentTmax - 20) / 60));
        ctx.fillStyle = `rgb(${200 + chipColorRatio * 55}, ${50 - chipColorRatio * 50}, ${50 - chipColorRatio * 50})`;
        ctx.fillRect(marginX + 20, h - marginY - 15, blockW - 40, 15);
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("MICROPROCESADOR (FUENTE DE CALOR)", w / 2, h - marginY - 4);

        // Draw base block
        ctx.fillStyle = blockColor;
        ctx.fillRect(marginX, h - marginY - 35, blockW, 20);

        // Microchannel fluid zone
        const channelY = marginY + 20;
        const channelH = blockH - 55;

        // Bottom solid wall
        ctx.fillStyle = blockColor;
        ctx.fillRect(marginX, channelY + channelH, blockW, 10);
        // Top solid wall
        ctx.fillRect(marginX, channelY - 10, blockW, 10);

        // Fluid color gradient
        const gradFluid = ctx.createLinearGradient(marginX, 0, marginX + blockW, 0);
        gradFluid.addColorStop(0.0, '#3b82f6');
        const middleColorRatio = Math.min(1, Math.max(0, (currentFluidOut - T_in) / 30));
        gradFluid.addColorStop(0.5, `rgb(${59 + middleColorRatio * 150}, ${130 + middleColorRatio * 50}, ${246 - middleColorRatio * 180})`);
        gradFluid.addColorStop(1.0, `rgb(${59 + middleColorRatio * 196}, 80, ${246 - middleColorRatio * 200})`);

        ctx.fillStyle = gradFluid;
        ctx.fillRect(marginX, channelY, blockW, channelH);

        // Flowing particles
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        const numParticles = 12;
        const numRows = 3;
        for (let r = 0; r < numRows; r++) {
            const py = channelY + (r + 0.5) * (channelH / numRows);
            const yNormalized = (r + 0.5) / numRows * 2 - 1;
            const velocityFactor = 1 - yNormalized * yNormalized;
            
            for (let i = -1; i < numParticles + 1; i++) {
                const px = marginX + ((i * 50 + particleOffset * velocityFactor) % blockW);
                if (px >= marginX && px <= marginX + blockW) {
                    ctx.beginPath();
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // Rib structures
        ctx.fillStyle = blockColor;
        ctx.globalAlpha = 0.2;
        const numRibs = 10;
        for (let i = 0; i < numRibs; i++) {
            ctx.fillRect(marginX + i * (blockW / numRibs), channelY, 5, channelH);
        }
        ctx.globalAlpha = 1.0;

        // Flow arrows
        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(marginX - 25, channelY + channelH / 2);
        ctx.lineTo(marginX - 5, channelY + channelH / 2);
        ctx.lineTo(marginX - 10, channelY + channelH / 2 - 5);
        ctx.moveTo(marginX - 5, channelY + channelH / 2);
        ctx.lineTo(marginX - 10, channelY + channelH / 2 + 5);
        ctx.stroke();

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '8px monospace';
        ctx.textAlign = 'right';
        ctx.fillText("Entrada", marginX - 28, channelY + channelH / 2 - 4);
        ctx.fillText("Fluido Frío", marginX - 28, channelY + channelH / 2 + 6);

        ctx.strokeStyle = '#f87171';
        ctx.beginPath();
        ctx.moveTo(marginX + blockW + 5, channelY + channelH / 2);
        ctx.lineTo(marginX + blockW + 25, channelY + channelH / 2);
        ctx.lineTo(marginX + blockW + 20, channelY + channelH / 2 - 5);
        ctx.moveTo(marginX + blockW + 25, channelY + channelH / 2);
        ctx.lineTo(marginX + blockW + 20, channelY + channelH / 2 + 5);
        ctx.stroke();

        ctx.textAlign = 'left';
        ctx.fillText("Salida", marginX + blockW + 28, channelY + channelH / 2 - 4);
        ctx.fillText("Caliente", marginX + blockW + 28, channelY + channelH / 2 + 6);

        if (material === 'Si' && isBallistic) {
            ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            const startY = h - marginY - 35;
            for (let x = marginX + 10; x < marginX + blockW; x += 15) {
                ctx.moveTo(x, startY);
                ctx.lineTo(x + 5, startY + 10);
                ctx.lineTo(x + 10, startY);
            }
            ctx.stroke();
            
            ctx.fillStyle = '#f87171';
            ctx.font = 'bold 8px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText("¡TRANSPORTE BALÍSTICO DE FONONES! (k_eff reducida)", w / 2, marginY - 14);
        }

        animationId = requestAnimationFrame(renderLoop);
    }

    [sPower, sWidth, sFlow, sMaterial, cbBallistic].forEach(el => {
        el.addEventListener('input', calculateThermals);
        el.addEventListener('change', calculateThermals);
    });
    cbBallistic.addEventListener('click', calculateThermals);

    calculateThermals();
    renderLoop();
}

// ============================================================================
// 8. CAPACIDADES CALORÍFICAS CP Y CV SIMULATION
// ============================================================================
function initCpCvSimulation() {
    const canvas = document.getElementById('cpcvCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const selectGas = document.getElementById('cpcv-gas');
    const inputDt = document.getElementById('cpcv-dt');
    const spanDtVal = document.getElementById('cpcv-dt-val');
    const btnCalentar = document.getElementById('cpcv-btn');
    const lblQv = document.getElementById('cpcv-qv-lbl');
    const lblQp = document.getElementById('cpcv-qp-lbl');
    const lblWp = document.getElementById('cpcv-wp-lbl');
    const lblCp = document.getElementById('cpcv-cp-val');
    const lblCv = document.getElementById('cpcv-cv-val');
    const lblRExpr = document.getElementById('cpcv-r-expr');
    const lblRVal = document.getElementById('cpcv-r-val');
    const chartCanvas = document.getElementById('cpcvChart');
    if (!chartCanvas) return;
    const chartCtx = chartCanvas.getContext('2d');
    
    // Physical Constants
    const GAS_PROPERTIES = {
        air: { name: 'Aire', Cv: 718, Cp: 1005, R: 287 },
        he: { name: 'Helio', Cv: 3120, Cp: 5193, R: 2073 },
        h2: { name: 'Hidrógeno (H₂)', Cv: 10183, Cp: 14307, R: 4124 },
        co2: { name: 'Dióxido de Carbono (CO₂)', Cv: 657, Cp: 846, R: 189 },
        o2: { name: 'Oxígeno (O₂)', Cv: 658, Cp: 918, R: 260 },
        n2: { name: 'Nitrógeno (N₂)', Cv: 743, Cp: 1040, R: 297 },
        ar: { name: 'Argón (Ar)', Cv: 312, Cp: 520, R: 208 }
    };
    
    let isHeating = false;
    let heatingProgress = 0.0;
    let currentDT = 0.0;
    let animationId = null;
    
    // Create Chart
    let cpcvChart = new Chart(chartCtx, {
        type: 'bar',
        data: {
            labels: ['V = Constante (Cv)', 'P = Constante (Cp)'],
            datasets: [
                {
                    label: 'Energía Interna (ΔU)',
                    data: [0, 0],
                    backgroundColor: 'rgba(56, 189, 248, 0.85)', // cyan
                    borderColor: '#38bdf8',
                    borderWidth: 1.5,
                    stack: 'Stack 0'
                },
                {
                    label: 'Trabajo de Expansión (W = P·ΔV)',
                    data: [0, 0],
                    backgroundColor: 'rgba(52, 211, 153, 0.85)', // emerald
                    borderColor: '#34d399',
                    borderWidth: 1.5,
                    stack: 'Stack 0'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8', font: { family: 'Inter' } }
                },
                y: {
                    stacked: true,
                    title: { display: true, text: 'Energía (Joules para 1 kg)', color: '#94a3b8', font: { family: 'Inter', weight: 'bold' } },
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#94a3b8', font: { family: 'Inter' } }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#f8fafc', font: { family: 'Inter' } }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${context.raw.toFixed(1)} J`;
                        }
                    }
                }
            }
        }
    });

    // Particle class for molecular agitation
    class GasParticle {
        constructor() {
            this.x = null;
            this.y = null;
            const angle = Math.random() * Math.PI * 2;
            this.vx = Math.cos(angle);
            this.vy = Math.sin(angle);
        }
        
        update(tempRatio, minX, maxX, minY, maxY) {
            this.minX = minX;
            this.maxX = maxX;
            this.minY = minY;
            this.maxY = maxY;
            
            // If first frame or particle somehow ends up out of bounds, place it inside randomly
            if (this.x === null || this.y === null || this.x < minX || this.x > maxX || this.y < minY || this.y > maxY) {
                this.x = minX + Math.random() * (maxX - minX);
                this.y = minY + Math.random() * (maxY - minY);
            }
            
            // Velocity scales with square root of absolute temperature (T_base = 300 K)
            const speed = 1.3 * Math.sqrt(1 + tempRatio);
            
            this.x += this.vx * speed;
            this.y += this.vy * speed;
            
            // Collision with left/right walls
            if (this.x < this.minX) { this.x = this.minX; this.vx *= -1; }
            if (this.x > this.maxX) { this.x = this.maxX; this.vx *= -1; }
            // Collision with top piston/bottom cylinder
            if (this.y < this.minY) { this.y = this.minY; this.vy *= -1; }
            if (this.y > this.maxY) { this.y = this.maxY; this.vy *= -1; }
        }
        
        draw(ctxColor) {
            ctx.fillStyle = ctxColor;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Initialize Particles
    const particlesV = [];
    const particlesP = [];
    const numParticles = 25;
    
    for (let i = 0; i < numParticles; i++) {
        particlesV.push(new GasParticle());
        particlesP.push(new GasParticle());
    }
    
    function calculatePhysics() {
        const gas = selectGas.value;
        const props = GAS_PROPERTIES[gas];
        const dtTarget = parseFloat(inputDt.value);
        
        // Show current input value
        spanDtVal.innerText = dtTarget.toFixed(1);
        
        const dU = props.Cv * currentDT;
        const Wp = props.R * currentDT;
        const Qv = props.Cv * currentDT;
        const Qp = props.Cp * currentDT;
        
        lblQv.innerText = Qv.toFixed(1) + ' J';
        lblQp.innerText = Qp.toFixed(1) + ' J';
        lblWp.innerText = Wp.toFixed(1) + ' J';
        
        if (lblCp && lblCv && lblRExpr && lblRVal) {
            lblCp.innerText = props.Cp;
            lblCv.innerText = props.Cv;
            lblRExpr.innerText = `${props.Cp} - ${props.Cv}`;
            lblRVal.innerText = props.R;
        }
        
        // Update Chart
        cpcvChart.data.datasets[0].data = [dU, dU];
        cpcvChart.data.datasets[1].data = [0, Wp];
        cpcvChart.update('none');
    }
    
    // Event listeners
    selectGas.addEventListener('change', () => {
        currentDT = 0;
        heatingProgress = 0;
        isHeating = false;
        btnCalentar.innerHTML = '<i class="fas fa-play"></i> Iniciar Calentamiento';
        calculatePhysics();
    });
    
    inputDt.addEventListener('input', () => {
        currentDT = 0;
        heatingProgress = 0;
        isHeating = false;
        btnCalentar.innerHTML = '<i class="fas fa-play"></i> Iniciar Calentamiento';
        calculatePhysics();
    });
    
    btnCalentar.addEventListener('click', () => {
        if (isHeating) {
            isHeating = false;
            btnCalentar.innerHTML = '<i class="fas fa-play"></i> Reanudar';
        } else {
            if (heatingProgress >= 1.0) {
                heatingProgress = 0.0;
                currentDT = 0.0;
            }
            isHeating = true;
            btnCalentar.innerHTML = '<i class="fas fa-pause"></i> Pausar';
        }
    });
    
    function renderLoop() {
        if (!canvas.offsetParent) {
            animationId = requestAnimationFrame(renderLoop);
            return;
        }
        
        const rect = canvas.getBoundingClientRect();
        if (canvas.width !== rect.width || canvas.height !== rect.height) {
            canvas.width = rect.width;
            canvas.height = rect.height;
        }
        
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        
        const gas = selectGas.value;
        const props = GAS_PROPERTIES[gas];
        const dtTarget = parseFloat(inputDt.value);
        
        // Physics update if heating
        if (isHeating) {
            heatingProgress += 0.003; // heating rate
            if (heatingProgress >= 1.0) {
                heatingProgress = 1.0;
                isHeating = false;
                btnCalentar.innerHTML = '<i class="fas fa-redo"></i> Reiniciar';
            }
            currentDT = heatingProgress * dtTarget;
            calculatePhysics();
        }
        
        // Temperature ratio for animation speed (base T = 300K)
        const tempRatio = currentDT / 300;
        
        // Draw Left Cylinder (V = Constant)
        const cylW = 120;
        const cylH = 170;
        const baseY = h - 60;
        
        const cyl1X = w / 4 - cylW / 2;
        const cyl2X = 3 * w / 4 - cylW / 2;
        
        // Left Cylinder - Piston is locked
        const pistonHeightVal = 100; // fixed position
        const piston1Y = baseY - pistonHeightVal;
        
        // Right Cylinder - Piston moves up (Work of expansion: W = P * dV)
        // Max height displacement proportional to gas expansion ratio:
        // Piston displacement scaled by 120 for clear visual expansion
        const expansionDisplacement = pistonHeightVal * tempRatio * 120; 
        const piston2Y = baseY - pistonHeightVal - expansionDisplacement;
        
        // Draw Flames under cylinders if heating
        if (isHeating || (heatingProgress > 0 && heatingProgress < 1.0)) {
            // Draw fires at bottom
            drawFlame(cyl1X + cylW / 2, baseY + 10, 25);
            drawFlame(cyl2X + cylW / 2, baseY + 10, 25);
        }
        
        // Draw Left Cylinder Walls
        drawCylinder(cyl1X, baseY, cylW, cylH, piston1Y, true);
        // Draw Right Cylinder Walls
        drawCylinder(cyl2X, baseY, cylW, cylH, piston2Y, false);
        
        // Update and Draw particles in Left Cylinder
        particlesV.forEach(p => {
            p.update(tempRatio, cyl1X + 5, cyl1X + cylW - 5, piston1Y + 5, baseY - 5);
            p.draw('#38bdf8');
        });
        
        // Update and Draw particles in Right Cylinder
        particlesP.forEach(p => {
            p.update(tempRatio, cyl2X + 5, cyl2X + cylW - 5, piston2Y + 5, baseY - 5);
            p.draw('#34d399');
        });
        
        // Draw Text Labels on Canvas
        ctx.fillStyle = '#f8fafc';
        ctx.font = 'bold 12px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText("VOLUMEN CONSTANTE (V = cte)", cyl1X + cylW / 2, baseY - cylH - 20);
        ctx.fillText("PRESIÓN CONSTANTE (P = cte)", cyl2X + cylW / 2, baseY - cylH - 20);
        
        // Display Pressure and Work Info
        ctx.font = '11px monospace';
        const pressV = (1.0 * (1 + tempRatio)).toFixed(3);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`Presión: ${pressV} atm`, cyl1X + cylW / 2, baseY + 28);
        ctx.fillText(`Trabajo: 0.0 J`, cyl1X + cylW / 2, baseY + 42);
        
        ctx.fillStyle = '#34d399';
        ctx.fillText(`Presión: 1.000 atm (cte)`, cyl2X + cylW / 2, baseY + 28);
        const currentWork = (props.R * currentDT).toFixed(1);
        ctx.fillText(`Trabajo: ${currentWork} J`, cyl2X + cylW / 2, baseY + 42);
        
        // Draw Temperature increase HUD
        ctx.fillStyle = '#e2e8f0';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.fillText(`Incremento Térmico (ΔT): +${currentDT.toFixed(2)} K`, w / 2, 25);
        
        animationId = requestAnimationFrame(renderLoop);
    }
    
    function drawCylinder(x, baseY, w, h, pistonY, isLocked) {
        // Draw Cylinder outline
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(x, pistonY - 20);
        ctx.lineTo(x, baseY);
        ctx.lineTo(x + w, baseY);
        ctx.lineTo(x + w, pistonY - 20);
        ctx.stroke();
        
        // Draw Piston
        ctx.fillStyle = '#475569';
        ctx.fillRect(x + 2, pistonY - 10, w - 4, 12);
        
        // Draw Piston Rod
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(x + w / 2 - 4, pistonY - 45, 8, 35);
        
        // Draw Locking pins if Locked (V = Constant)
        if (isLocked) {
            ctx.fillStyle = '#ef4444';
            // Left lock pin
            ctx.beginPath();
            ctx.arc(x - 5, pistonY - 4, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillRect(x - 5, pistonY - 6, 12, 4);
            // Right lock pin
            ctx.beginPath();
            ctx.arc(x + w + 5, pistonY - 4, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillRect(x + w - 7, pistonY - 6, 12, 4);
            
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 8px Inter, sans-serif';
            ctx.fillText("TRABADO", x + w / 2, pistonY - 14);
        } else {
            // Draw weight block on top of rod to represent pressure mass
            ctx.fillStyle = '#f59e0b';
            ctx.fillRect(x + w / 2 - 15, pistonY - 55, 30, 12);
            ctx.fillStyle = '#1e293b';
            ctx.font = 'bold 8px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText("PESO", x + w / 2, pistonY - 46);
        }
    }
    
    function drawFlame(centerX, centerY, size) {
        const grad = ctx.createRadialGradient(centerX, centerY, 2, centerX, centerY, size);
        grad.addColorStop(0, '#f59e0b'); // amber
        grad.addColorStop(0.4, '#ef4444'); // red
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Start simulation loops
    calculatePhysics();
    renderLoop();
}

// ============================================================================
// 22. DOUBLE-PIPE HEAT EXCHANGER SIMULATION
// ============================================================================
function initDoublePipeSimulation() {
    const canvas = document.getElementById('doublepipeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const selectFluidH = document.getElementById('dp-fluid-h');
    const selectFluidC = document.getElementById('dp-fluid-c');
    const selectFlow = document.getElementById('dp-flow');
    const inputLength = document.getElementById('dp-length');
    const inputDi = document.getElementById('dp-di');
    const inputThick = document.getElementById('dp-thick');
    const inputDs = document.getElementById('dp-ds');
    const inputThi = document.getElementById('dp-thi');
    const inputTci = document.getElementById('dp-tci');
    const inputMh = document.getElementById('dp-mh');
    const inputMc = document.getElementById('dp-mc');

    const spanLength = document.getElementById('dp-length-val');
    const spanDi = document.getElementById('dp-di-val');

    function updateTemperatureSliders() {
        const isAirH = selectFluidH && selectFluidH.value === 'air';
        const isAirC = selectFluidC && selectFluidC.value === 'air';

        // Hot inlet T
        if (isAirH) {
            inputThi.min = -40;
            inputThi.max = 1200;
            const val = parseFloat(inputThi.value);
            if (val < -40 || val > 1200 || val === 80) {
                inputThi.value = 300;
            }
        } else {
            inputThi.min = 1;
            inputThi.max = 99;
            const val = parseFloat(inputThi.value);
            if (val < 1 || val > 99) {
                inputThi.value = 80;
            }
        }

        // Cold inlet T
        if (isAirC) {
            inputTci.min = -40;
            inputTci.max = 1200;
            const val = parseFloat(inputTci.value);
            if (val < -40 || val > 1200 || val === 15) {
                inputTci.value = 20;
            }
        } else {
            inputTci.min = 1;
            inputTci.max = 99;
            const val = parseFloat(inputTci.value);
            if (val < 1 || val > 99) {
                inputTci.value = 15;
            }
        }

        spanThi.innerText = inputThi.value;
        spanTci.innerText = inputTci.value;
        solveSystem();
    }
    const spanThick = document.getElementById('dp-thick-val');
    const spanDs = document.getElementById('dp-ds-val');
    const spanThi = document.getElementById('dp-thi-val');
    const spanTci = document.getElementById('dp-tci-val');
    const spanMh = document.getElementById('dp-mh-val');
    const spanMc = document.getElementById('dp-mc-val');

    const lblQ = document.getElementById('dp-q-val');
    const lblEff = document.getElementById('dp-eff-val');
    const lblNtu = document.getElementById('dp-ntu-val');
    const lblUA = document.getElementById('dp-ua-val');
    const lblTho = document.getElementById('dp-tho-val');
    const lblTco = document.getElementById('dp-tco-val');

    const lblDhi = document.getElementById('dp-dhi-val');
    const lblRei = document.getElementById('dp-rei-val');
    const lblRegi = document.getElementById('dp-regi-val');
    const lblDho = document.getElementById('dp-dho-val');
    const lblReo = document.getElementById('dp-reo-val');
    const lblRego = document.getElementById('dp-rego-val');

    const lblCh = document.getElementById('dp-ch-val');
    const lblCc = document.getElementById('dp-cc-val');

    const lblDtml = document.getElementById('dp-dtml-val');
    const lblCminNote = document.getElementById('dp-cmin-note');

    const lblNodeTmh = document.getElementById('dp-node-tmh');
    const lblNodeTmc = document.getElementById('dp-node-tmc');
    const lblNodeTwi = document.getElementById('dp-node-twi');
    const lblNodeTwo = document.getElementById('dp-node-two');

    const lblQh = document.getElementById('dp-qh-val');
    const lblQc = document.getElementById('dp-qc-val');
    const lblQres = document.getElementById('dp-qres-val');
    const lblQdiff = document.getElementById('dp-qdiff-val');

    const lblHi = document.getElementById('dp-hi-val');
    const lblHo = document.getElementById('dp-ho-val');
    const lblRconvi = document.getElementById('dp-rconvi-val');
    const lblRcondw = document.getElementById('dp-rcondw-val');
    const lblRconvo = document.getElementById('dp-rconvo-val');
    const lblRtot = document.getElementById('dp-rtot-val');

    const lblTmh = document.getElementById('dp-tmh-val');
    const lblTmc = document.getElementById('dp-tmc-val');
    const lblCph = document.getElementById('dp-cph-val');
    const lblCpc = document.getElementById('dp-cpc-val');
    const lblRhoh = document.getElementById('dp-rhoh-val');
    const lblRhoc = document.getElementById('dp-rhoc-val');
    const lblKh = document.getElementById('dp-kh-val');
    const lblKc = document.getElementById('dp-kc-val');
    const lblMuh = document.getElementById('dp-muh-val');
    const lblMuc = document.getElementById('dp-muc-val');
    const lblNuh = document.getElementById('dp-nuh-val');
    const lblNuc = document.getElementById('dp-nuc-val');
    const lblPrh = document.getElementById('dp-prh-val');
    const lblPrc = document.getElementById('dp-prc-val');

    const chartCanvas = document.getElementById('doublepipeChart');
    if (!chartCanvas) return;
    const chartCtx = chartCanvas.getContext('2d');

    let dpChart;

    // Initialize Chart.js
    function initChart() {
        const bodyStyles = getComputedStyle(document.body);
        const textColor = bodyStyles.getPropertyValue('--chart-text').trim() || '#94a3b8';
        const gridColor = bodyStyles.getPropertyValue('--chart-grid').trim() || 'rgba(255, 255, 255, 0.05)';

        dpChart = new Chart(chartCtx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 21 }, (_, i) => `${(i * 5)}%`), // % of Length
                datasets: [
                    {
                        label: 'Fluido Caliente (Th)',
                        data: [],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        borderWidth: 3,
                        pointRadius: 0,
                        tension: 0.1
                    },
                    {
                        label: 'Fluido Frío (Tc)',
                        data: [],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 3,
                        pointRadius: 0,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: { display: true, text: 'Posición a lo largo del tubo (x / L)', color: textColor, font: { family: 'Inter' } },
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { family: 'Inter' } }
                    },
                    y: {
                        title: { display: true, text: 'Temperatura (°C)', color: textColor, font: { family: 'Inter' } },
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { family: 'Inter' } }
                    }
                },
                plugins: {
                    legend: { labels: { color: textColor, font: { family: 'Inter', weight: '600' } } }
                }
            }
        });
    }

    initChart();

    // Particle class for flow animation
    class FlowParticle {
        constructor(type) {
            this.type = type; // 'hot' or 'cold'
            this.reset();
        }
        reset() {
            this.x = Math.random();
            this.y = (Math.random() - 0.5) * 0.7; // offset from centerline
            this.speed = 0.003 + Math.random() * 0.003;
        }
        update(isCounter) {
            if (this.type === 'hot') {
                this.x += this.speed;
                if (this.x > 1.0) this.x = 0;
            } else {
                // cold fluid
                if (isCounter) {
                    this.x -= this.speed;
                    if (this.x < 0) this.x = 1.0;
                } else {
                    this.x += this.speed;
                    if (this.x > 1.0) this.x = 0;
                }
            }
        }
    }

    const particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push(new FlowParticle('hot'));
        particles.push(new FlowParticle('cold'));
    }

    let results = {};

    function solveSystem() {
        const Di_mm = parseFloat(inputDi.value);
        const thick_mm = parseFloat(inputThick.value);
        const minDs_mm = Di_mm + 2 * thick_mm;
        
        let Ds_mm = parseFloat(inputDs.value);
        if (Ds_mm < minDs_mm + 2) {
            Ds_mm = Math.ceil(minDs_mm + 2);
            inputDs.value = Ds_mm;
        }

        const L = parseFloat(inputLength.value);
        const Di = Di_mm / 1000;
        const t = thick_mm / 1000;
        const Do = Di + 2 * t;
        let Dext = Ds_mm / 1000;
        const Dh = Dext - Do;

        const Thi = parseFloat(inputThi.value);
        const Tci = parseFloat(inputTci.value);
        const mh = parseFloat(inputMh.value);
        const mc = parseFloat(inputMc.value);
        const isCounter = selectFlow.value === 'counter';

        // Update slider labels
        spanLength.innerText = L.toFixed(1);
        spanDi.innerText = inputDi.value;
        spanThick.innerText = inputThick.value;
        spanDs.innerText = inputDs.value;
        spanThi.innerText = inputThi.value;
        spanTci.innerText = inputTci.value;
        spanMh.innerText = mh.toFixed(2);
        spanMc.innerText = mc.toFixed(2);

        // Polynomial fits for water properties between 0°C and 100°C
        function getWaterProperties(T) {
            const cp = 4185 - 0.4 * T + 0.007 * T * T;
            const rho = 1000 - 0.06 * T - 0.0035 * T * T;
            const k = 0.56 + 0.0019 * T - 0.000008 * T * T;
            const mu = 0.00179 / (1 + 0.03368 * T + 0.00021 * T * T);
            const Pr = (mu * cp) / k;
            return { cp, rho, k, mu, Pr, nu: mu / rho };
        }

        // Thermophysical properties of Air as a real gas
        function getAirProperties(T) {
            const cp = 1005 + 0.075 * T + 0.00005 * T * T;
            const TK = T + 273.15;
            const rho = 352.98 / TK;
            const k = 0.0242 + 0.000074 * T - 0.000000018 * T * T;
            const mu = 1.827e-5 * Math.pow(TK / 291.15, 1.5) * (291.15 + 120) / (TK + 120);
            const Pr = (mu * cp) / k;
            return { cp, rho, k, mu, Pr, nu: mu / rho };
        }

        // Helper function for Nusselt calculation based on flow regime
        function getNu(Re, Pr, n) {
            if (Re < 2300) {
                // Laminar flow
                return 3.66;
            } else if (Re < 10000) {
                // Transition flow (Gnielinski Correlation)
                const f = Math.pow(0.79 * Math.log(Re) - 1.64, -2);
                const f8 = f / 8;
                const num = f8 * (Re - 1000) * Pr;
                const den = 1 + 12.7 * Math.sqrt(f8) * (Math.pow(Pr, 2/3) - 1);
                return Math.max(3.66, num / den);
            } else {
                // Turbulent flow (Dittus-Boelter)
                return 0.023 * Math.pow(Re, 0.8) * Math.pow(Pr, n);
            }
        }

        // Iterative thermodynamic solver to converge outlet temperatures and properties
        let Tho = Thi - 5;
        let Tco = Tci + 5;
        let propH, propC;
        let Re_i = 100, Re_o = 100;
        let hi = 500, ho = 500;
        let UA = 10, NTU = 0.1, eff = 0.1, Q = 0;
        let Ch = 1000, Cc = 1000, Cmin = 1000, Cmax = 1000, Cr = 1.0;
        let R_conv_in = 0, R_cond_wall = 0, R_conv_out = 0, R_tot = 0;

        const fluidH = selectFluidH ? selectFluidH.value : 'water';
        const fluidC = selectFluidC ? selectFluidC.value : 'water';

        for (let iter = 0; iter < 5; iter++) {
            const Tmean_h = (Thi + Tho) / 2;
            const Tmean_c = (Tci + Tco) / 2;

            propH = (fluidH === 'air') ? getAirProperties(Tmean_h) : getWaterProperties(Tmean_h);
            propC = (fluidC === 'air') ? getAirProperties(Tmean_c) : getWaterProperties(Tmean_c);

            // 1. Calculate convective coefficients
            // Inner Tube (hot fluid)
            const Ac_i = Math.PI * Di * Di / 4;
            const v_i = mh / (propH.rho * Ac_i);
            Re_i = Math.max(10, (propH.rho * v_i * Di) / propH.mu);
            const Nu_i = getNu(Re_i, propH.Pr, 0.3);
            hi = Math.max(5, Math.min(10000, (Nu_i * propH.k) / Di));

            // Annulus (cold fluid)
            const Ac_o = Math.PI * (Dext * Dext - Do * Do) / 4;
            const v_o = mc / (propC.rho * Ac_o);
            Re_o = Math.max(10, (propC.rho * v_o * Dh) / propC.mu);
            const Nu_o = getNu(Re_o, propC.Pr, 0.4);
            ho = Math.max(5, Math.min(10000, (Nu_o * propC.k) / Dh));

            // 2. Overall UA
            const Ai = Math.PI * Di * L;
            const Ao = Math.PI * Do * L;
            R_conv_in = 1.0 / (hi * Ai);
            R_cond_wall = Math.log(Do / Di) / (2 * Math.PI * 50 * L); // k_wall = 50 (steel)
            R_conv_out = 1.0 / (ho * Ao);
            R_tot = R_conv_in + R_cond_wall + R_conv_out;
            UA = 1.0 / R_tot;

            // 3. Capacitance rates
            Ch = mh * propH.cp;
            Cc = mc * propC.cp;
            Cmin = Math.min(Ch, Cc);
            Cmax = Math.max(Ch, Cc);
            Cr = Cmin / Cmax;

            NTU = UA / Cmin;

            // 4. Effectiveness
            if (isCounter) {
                if (Cr < 0.999) {
                    eff = (1 - Math.exp(-NTU * (1 - Cr))) / (1 - Cr * Math.exp(-NTU * (1 - Cr)));
                } else {
                    eff = NTU / (1 + NTU);
                }
            } else {
                eff = (1 - Math.exp(-NTU * (1 + Cr))) / (1 + Cr);
            }
            eff = Math.max(0, Math.min(0.999, eff));

            // 5. Heat transfer rate and updated outlet temperatures
            const Qmax = Cmin * (Thi - Tci);
            Q = eff * Qmax;

            Tho = Thi - Q / Ch;
            Tco = Tci + Q / Cc;
        }

        // Boiling alert logic for water (boiling point = 100°C)
        let waterBoiling = false;
        if (fluidH === 'water') {
            if (Thi >= 99.9 || Tho >= 99.9) {
                waterBoiling = true;
            }
        }
        if (fluidC === 'water') {
            if (Tci >= 99.9 || Tco >= 99.9) {
                waterBoiling = true;
            }
        }
        const alertDiv = document.getElementById('dp-boiling-alert');
        if (alertDiv) {
            alertDiv.style.display = waterBoiling ? 'flex' : 'none';
        }

        // Save for graphics
        results = {
            Thi, Tci, Tho, Tco, Ch, Cc, Cmin, Cmax, Cr, UA, NTU, eff, Q, isCounter, L
        };

        // Update UI
        lblQ.innerText = (Q / 1000).toFixed(2) + ' kW';
        lblEff.innerText = (eff * 100).toFixed(1) + '%';
        lblNtu.innerText = NTU.toFixed(3);
        lblUA.innerText = UA.toFixed(1) + ' W/K';
        lblTho.innerText = Tho.toFixed(1) + ' °C';
        lblTco.innerText = Tco.toFixed(1) + ' °C';

        // 5b. Logarithmic Mean Temperature Difference (LMTD / Delta T_ML)
        let dT1, dT2;
        if (isCounter) {
            dT1 = Thi - Tco;
            dT2 = Tho - Tci;
        } else {
            dT1 = Thi - Tci;
            dT2 = Tho - Tco;
        }

        let dT_ML = 0;
        if (dT1 <= 0 || dT2 <= 0) {
            dT_ML = 0;
        } else if (Math.abs(dT1 - dT2) < 0.01) {
            dT_ML = (dT1 + dT2) / 2;
        } else {
            dT_ML = (dT1 - dT2) / Math.log(dT1 / dT2);
        }

        if (lblDtml) {
            lblDtml.innerText = dT_ML.toFixed(2) + ' °C';
        }

        // 5c. Capacitance note
        if (lblCminNote) {
            const dTh = Thi - Tho;
            const dTc = Tco - Tci;
            if (Math.abs(Ch - Cc) < 1e-2) {
                lblCminNote.innerHTML = `<i class="fas fa-info-circle"></i> Ambos fluidos tienen la misma capacitancia térmica ($C_h = C_c$), por lo que experimentan el mismo cambio de temperatura: $\\Delta T = ${dTh.toFixed(1)}\\ \\text{°C}$.`;
            } else if (Ch < Cc) {
                lblCminNote.innerHTML = `<i class="fas fa-info-circle"></i> El fluido caliente tiene la <strong>capacitancia térmica mínima</strong> ($C_h < C_c$), por lo que presenta el mayor cambio de temperatura: $\\Delta T_h = ${dTh.toFixed(1)}\\ \\text{°C}$ (frente a $\\Delta T_c = ${dTc.toFixed(1)}\\ \\text{°C}$ del fluido frío).`;
            } else {
                lblCminNote.innerHTML = `<i class="fas fa-info-circle"></i> El fluido frío tiene la <strong>capacitancia térmica mínima</strong> ($C_c < C_h$), por lo que presenta el mayor cambio de temperatura: $\\Delta T_c = ${dTc.toFixed(1)}\\ \\text{°C}$ (frente a $\\Delta T_h = ${dTh.toFixed(1)}\\ \\text{°C}$ del fluido caliente).`;
            }
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([lblCminNote]);
            }
        }

        // Update convection coefficients and thermal resistances UI
        if (lblHi && lblHo && lblRconvi && lblRcondw && lblRconvo && lblRtot) {
            lblHi.innerText = hi.toFixed(1) + ' W/m²K';
            lblHo.innerText = ho.toFixed(1) + ' W/m²K';
            lblRconvi.innerText = R_conv_in.toExponential(4) + ' K/W';
            lblRcondw.innerText = R_cond_wall.toExponential(4) + ' K/W';
            lblRconvo.innerText = R_conv_out.toExponential(4) + ' K/W';
            lblRtot.innerText = R_tot.toExponential(4) + ' K/W';

            // Calculate converged node temperatures for visual circuit
            const Tmh = (Thi + Tho) / 2;
            const Tmc = (Tci + Tco) / 2;
            const Twi = Tmh - Q * R_conv_in;
            const Two = Tmc + Q * R_conv_out;

            if (lblNodeTmh) lblNodeTmh.innerText = Tmh.toFixed(1);
            if (lblNodeTmc) lblNodeTmc.innerText = Tmc.toFixed(1);
            if (lblNodeTwi) lblNodeTwi.innerText = Twi.toFixed(1);
            if (lblNodeTwo) lblNodeTwo.innerText = Two.toFixed(1);

            // Energy Balance verification calculations
            const Qh_calc = Ch * (Thi - Tho);
            const Qc_calc = Cc * (Tco - Tci);
            const Qres_calc = dT_ML / R_tot;

            if (lblQh) lblQh.innerText = (Qh_calc / 1000).toFixed(4) + ' kW';
            if (lblQc) lblQc.innerText = (Qc_calc / 1000).toFixed(4) + ' kW';
            if (lblQres) lblQres.innerText = (Qres_calc / 1000).toFixed(4) + ' kW';

            const maxDiff = Math.max(Math.abs(Qh_calc - Qc_calc), Math.abs(Qh_calc - Qres_calc));
            if (lblQdiff) {
                lblQdiff.innerText = maxDiff.toFixed(5) + ' W';
            }
        }

        // Update fluid dynamics values
        if (lblDhi && lblRei && lblRegi && lblDho && lblReo && lblRego) {
            lblDhi.innerText = (Di * 1000).toFixed(0) + ' mm';
            lblDho.innerText = ((Dext - Do) * 1000).toFixed(0) + ' mm';
            
            lblRei.innerText = Math.round(Re_i).toLocaleString();
            lblReo.innerText = Math.round(Re_o).toLocaleString();

            if (lblCh) lblCh.innerText = Math.round(Ch).toLocaleString() + ' W/K';
            if (lblCc) lblCc.innerText = Math.round(Cc).toLocaleString() + ' W/K';

            let regi = 'Laminar';
            let regiColor = '#10b981';
            if (Re_i >= 4000) {
                regi = 'Turbulento';
                regiColor = '#ef4444';
            } else if (Re_i >= 2300) {
                regi = 'Transición';
                regiColor = '#f59e0b';
            }
            lblRegi.innerText = regi;
            lblRegi.style.color = regiColor;

            let rego = 'Laminar';
            let regoColor = '#10b981';
            if (Re_o >= 4000) {
                rego = 'Turbulento';
                regoColor = '#ef4444';
            } else if (Re_o >= 2300) {
                rego = 'Transición';
                regoColor = '#f59e0b';
            }
            lblRego.innerText = rego;
            lblRego.style.color = regoColor;
        }

        // Update dynamic thermophysical properties UI
        if (lblTmh && lblTmc) {
            const Tmh = (Thi + Tho) / 2;
            const Tmc = (Tci + Tco) / 2;
            lblTmh.innerText = Tmh.toFixed(1);
            lblTmc.innerText = Tmc.toFixed(1);
            
            lblCph.innerText = propH.cp.toFixed(0);
            lblCpc.innerText = propC.cp.toFixed(0);

            lblRhoh.innerText = propH.rho.toFixed(1);
            lblRhoc.innerText = propC.rho.toFixed(1);

            lblKh.innerText = propH.k.toFixed(3);
            lblKc.innerText = propC.k.toFixed(3);

            lblMuh.innerText = propH.mu.toExponential(2);
            lblMuc.innerText = propC.mu.toExponential(2);

            lblNuh.innerText = propH.nu.toExponential(2);
            lblNuc.innerText = propC.nu.toExponential(2);

            lblPrh.innerText = propH.Pr.toFixed(2);
            lblPrc.innerText = propC.Pr.toFixed(2);
        }

        // 6. Generate temperature profiles
        const thData = [];
        const tcData = [];
        const steps = 20;

        for (let j = 0; j <= steps; j++) {
            const xFrac = j / steps;
            let Tx_h, Tx_c;

            if (!isCounter) {
                // Parallel flow profile
                const NTU_x = xFrac * NTU;
                const eff_x = (1 - Math.exp(-NTU_x * (1 + Cr))) / (1 + Cr);
                const Q_x = eff_x * Cmin * (Thi - Tci);
                Tx_h = Thi - Q_x / Ch;
                Tx_c = Tci + Q_x / Cc;
            } else {
                // Counterflow profile
                const B = NTU * (Cmin / Ch - Cmin / Cc);
                if (Math.abs(B) < 0.001) {
                    Tx_h = Thi - (Thi - Tho) * xFrac;
                    Tx_c = Tco - (Tco - Tci) * xFrac;
                } else {
                    Tx_h = Thi - ((Thi - Tho) / (1 - Math.exp(-B))) * (1 - Math.exp(-B * xFrac));
                    Tx_c = Tci + (Ch / Cc) * (Tx_h - Tho);
                }
            }

            thData.push(Tx_h.toFixed(1));
            tcData.push(Tx_c.toFixed(1));
        }

        // Update Chart
        dpChart.data.datasets[0].data = thData;
        dpChart.data.datasets[1].data = tcData;
        dpChart.update();
    }

    function render() {
        if (canvas.offsetParent === null) return; // not visible

        const w = canvas.width = canvas.clientWidth;
        const h = canvas.height = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const marginX = 90;
        const startX = marginX;
        const endX = w - marginX;
        const lengthX = endX - startX;

        const centerY = h / 2 - 10;
        const di_mm = parseFloat(inputDi.value);
        const thick_mm = parseFloat(inputThick.value);
        let ds_mm = parseFloat(inputDs.value);
        if (ds_mm <= di_mm + 2 * thick_mm) {
            ds_mm = di_mm + 2 * thick_mm + 2; // geometry protection
        }

        // Dynamically scale both radii so that increasing ds_mm grows the outer tube visually,
        // and increasing di_mm grows the inner tube.
        const extRadius = Math.max(25, Math.min(95, 25 + 70 * (ds_mm / 1000)));
        const intRadius = Math.max(5, Math.min(extRadius - 8, extRadius * (di_mm / ds_mm)));
        const thickness = Math.max(1.5, Math.min(8, extRadius * (thick_mm / ds_mm)));

        // 1. Draw Outer Pipe (Annulus Jacket)
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
        ctx.lineWidth = 2;
        ctx.fillStyle = 'rgba(148, 163, 184, 0.06)';
        ctx.fillRect(startX, centerY - extRadius, lengthX, extRadius * 2);
        ctx.strokeRect(startX, centerY - extRadius, lengthX, extRadius * 2);

        // 2. Draw Inner Pipe wall
        ctx.fillStyle = 'rgba(180, 83, 9, 0.35)'; // copper color wall
        ctx.fillRect(startX, centerY - intRadius - thickness, lengthX, thickness);
        ctx.fillRect(startX, centerY + intRadius, lengthX, thickness);

        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 1;
        ctx.strokeRect(startX, centerY - intRadius - thickness, lengthX, thickness);
        ctx.strokeRect(startX, centerY + intRadius, lengthX, thickness);

        // 3. Draw inner flow core (Hot fluid)
        const hotGrad = ctx.createLinearGradient(startX, 0, endX, 0);
        hotGrad.addColorStop(0, '#ef4444');
        hotGrad.addColorStop(1, '#f59e0b');
        ctx.fillStyle = hotGrad;
        ctx.globalAlpha = 0.22;
        ctx.fillRect(startX, centerY - intRadius, lengthX, intRadius * 2);
        ctx.globalAlpha = 1.0;

        // 4. Draw Annulus flow (Cold fluid)
        const coldGrad = ctx.createLinearGradient(startX, 0, endX, 0);
        if (results.isCounter) {
            coldGrad.addColorStop(0, '#a855f7'); // exits left (purple)
            coldGrad.addColorStop(1, '#3b82f6'); // enters right (blue)
        } else {
            coldGrad.addColorStop(0, '#3b82f6'); // enters left (blue)
            coldGrad.addColorStop(1, '#a855f7'); // exits right (purple)
        }
        ctx.fillStyle = coldGrad;
        ctx.globalAlpha = 0.15;
        // Top annulus space
        ctx.fillRect(startX, centerY - extRadius, lengthX, extRadius - intRadius - thickness);
        // Bottom annulus space
        ctx.fillRect(startX, centerY + intRadius + thickness, lengthX, extRadius - intRadius - thickness);
        ctx.globalAlpha = 1.0;

        // Update and Draw Particles
        particles.forEach(p => {
            p.update(results.isCounter);
            
            const px = startX + p.x * lengthX;
            let py;

            if (p.type === 'hot') {
                py = centerY + p.y * (intRadius * 1.6);
                // Color transition from red to orange
                const tempFrac = p.x; // 0 to 1
                ctx.fillStyle = lerpColor('#ef4444', '#f59e0b', tempFrac);
                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // cold particle in annulus
                const sign = Math.random() > 0.5 ? 1 : -1;
                const offset = intRadius + thickness + 4 + Math.abs(p.y) * (extRadius - intRadius - thickness - 8);
                py = centerY + sign * offset;

                // Color transition from blue to purple
                const tempFrac = results.isCounter ? (1 - p.x) : p.x;
                ctx.fillStyle = lerpColor('#3b82f6', '#a855f7', tempFrac);
                ctx.beginPath();
                ctx.arc(px, py, 3.5, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // 5. Heat Transfer Wavy Arrows
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.45)';
        ctx.lineWidth = 1.5;
        const arrowCount = 6;
        for (let i = 0; i < arrowCount; i++) {
            const ax = startX + (i + 0.5) * (lengthX / arrowCount);
            // Wavy arrows pointing outward
            ctx.beginPath();
            ctx.moveTo(ax, centerY - 6);
            ctx.quadraticCurveTo(ax - 5, centerY - 13, ax, centerY - 20);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(ax, centerY + 6);
            ctx.quadraticCurveTo(ax + 5, centerY + 13, ax, centerY + 20);
            ctx.stroke();
        }

        // 6. Draw inlets/outlets tags
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';

        // Hot Inlet (Left)
        ctx.fillText(`Entrada Caliente`, startX - 45, centerY - 5);
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(`${results.Thi.toFixed(1)} °C`, startX - 45, centerY + 10);

        // Hot Outlet (Right)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.font = '10px Inter, sans-serif';
        ctx.fillText(`Salida Caliente`, endX + 45, centerY - 5);
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.fillText(`${results.Tho.toFixed(1)} °C`, endX + 45, centerY + 10);

        // Cold Inlet/Outlet (depending on parallel or counter)
        if (results.isCounter) {
            // Cold enters from Right, exits from Left
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText(`Salida Frío`, startX - 45, centerY - 32);
            ctx.fillStyle = '#a855f7';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(`${results.Tco.toFixed(1)} °C`, startX - 45, centerY - 20);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText(`Entrada Frío`, endX + 45, centerY - 32);
            ctx.fillStyle = '#3b82f6';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(`${results.Tci.toFixed(1)} °C`, endX + 45, centerY - 20);
        } else {
            // Cold enters from Left, exits from Right
            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText(`Entrada Frío`, startX - 45, centerY - 32);
            ctx.fillStyle = '#3b82f6';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(`${results.Tci.toFixed(1)} °C`, startX - 45, centerY - 20);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.font = '10px Inter, sans-serif';
            ctx.fillText(`Salida Frío`, endX + 45, centerY - 32);
            ctx.fillStyle = '#a855f7';
            ctx.font = 'bold 11px Inter, sans-serif';
            ctx.fillText(`${results.Tco.toFixed(1)} °C`, endX + 45, centerY - 20);
        }
    }

    // Helper color interpolator
    function lerpColor(color1, color2, factor) {
        const hex = color => color.replace('#', '');
        const r1 = parseInt(hex(color1).substring(0, 2), 16);
        const g1 = parseInt(hex(color1).substring(2, 4), 16);
        const b1 = parseInt(hex(color1).substring(4, 6), 16);

        const r2 = parseInt(hex(color2).substring(0, 2), 16);
        const g2 = parseInt(hex(color2).substring(2, 4), 16);
        const b2 = parseInt(hex(color2).substring(4, 6), 16);

        const r = Math.round(r1 + factor * (r2 - r1));
        const g = Math.round(g1 + factor * (g2 - g1));
        const b = Math.round(b1 + factor * (b2 - b1));

        return `rgb(${r}, ${g}, ${b})`;
    }

    // Event listeners
    const inputs = [
        selectFluidH, selectFluidC, selectFlow, inputLength, inputDi, inputThick, inputDs, inputThi, inputTci, inputMh, inputMc
    ];

    inputs.forEach(el => {
        if (el) {
            el.addEventListener('input', solveSystem);
            el.addEventListener('change', solveSystem);
        }
    });

    if (selectFluidH) {
        selectFluidH.addEventListener('change', updateTemperatureSliders);
    }
    if (selectFluidC) {
        selectFluidC.addEventListener('change', updateTemperatureSliders);
    }

    solveSystem();

    let animId;
    function animLoop() {
        render();
        animId = requestAnimationFrame(animLoop);
    }
    animLoop();
}

function initVortexSimulation() {
    const canvas = document.getElementById('vortexCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const inputU = document.getElementById('vortex-u');
    const inputD = document.getElementById('vortex-d');
    const inputNu = document.getElementById('vortex-nu');

    const valU = document.getElementById('vortex-u-val');
    const valD = document.getElementById('vortex-d-val');
    const valNu = document.getElementById('vortex-nu-val');

    const lblRe = document.getElementById('vortex-re-val');
    const lblSt = document.getElementById('vortex-st-val');
    const lblF = document.getElementById('vortex-f-val');
    const lblT = document.getElementById('vortex-t-val');
    const lblCd = document.getElementById('vortex-cd-val');
    const lblRegime = document.getElementById('vortex-regime-note');

    // Particle class
    class Particle {
        constructor(x, y, isDyeLine = false, dyeIndex = 0) {
            this.x = x;
            this.y = y;
            this.initialY = y;
            this.age = 0;
            this.life = 200 + Math.random() * 100;
            this.isDyeLine = isDyeLine;
            this.dyeIndex = dyeIndex;
            this.vorticityInfluence = 0; // -1 to 1
        }
    }

    let particles = [];
    let vortices = [];
    let t_sim = 0;
    let last_shed_time = 0;
    let toggle_shed = true; // Alternator

    // Resize canvas
    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles across the canvas
    function initParticles() {
        particles = [];
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        // Random particles to fill the screen initially
        for (let i = 0; i < 180; i++) {
            particles.push(new Particle(Math.random() * w, Math.random() * h));
        }
    }
    initParticles();

    function getDragCoefficient(Re) {
        if (Re <= 0) return 0;
        if (Re < 1) return (24 / Re) + 4.0;
        if (Re < 100) return (24 / Math.pow(Re, 0.85)) + 1.0;
        if (Re < 1000) return 1.2 - (0.2 * (Re - 100) / 900);
        if (Re < 2e5) return 1.2; // Classic plateau
        if (Re < 3e5) {
            // Drag crisis drop
            const frac = (Re - 2e5) / 1e5;
            return 1.2 - 0.9 * frac;
        }
        return 0.3; // Turbulent drag
    }

    function updateAndRender() {
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);

        // Get inputs
        const U = parseFloat(inputU.value);
        const D_mm = parseFloat(inputD.value);
        const D = D_mm / 1000;
        const nu = parseFloat(inputNu.value) * 1e-6;

        // Update labels
        if (valU) valU.innerText = U.toFixed(2);
        if (valD) valD.innerText = D_mm.toFixed(0);
        if (valNu) valNu.innerText = nu.toExponential(2);

        // Calculations
        const Re = (U * D) / nu;
        let St = 0;
        let f = 0;
        let T = 0;
        let regimeText = '';
        let regimeColor = '#10b981';

        if (Re < 47) {
            St = 0;
            f = 0;
            T = Infinity;
            regimeText = `<i class="fas fa-info-circle"></i> <strong>Régimen: Flujo Estacionario y Simétrico ($Re = ${Math.round(Re)}$)</strong>.<br>A números de Reynolds menores a 47, el flujo se adhiere al cilindro formando dos vórtices estacionarios simétricos en la parte trasera sin desprenderse.`;
            regimeColor = '#10b981';
        } else {
            // Shedding regime
            if (Re < 1000) {
                St = 0.212 * (1 - 21.2 / Re);
            } else {
                St = 0.21;
            }
            f = (St * U) / D;
            T = 1 / f;

            if (Re < 180) {
                regimeText = `<i class="fas fa-info-circle"></i> <strong>Régimen: Desprendimiento Laminar Periódico ($Re = ${Math.round(Re)}$)</strong>.<br>Se forma una calle de vórtices de Von Kármán perfectamente periódica y laminar. La oscilación es puramente bidimensional.`;
                regimeColor = '#fb923c';
            } else if (Re < 300) {
                regimeText = `<i class="fas fa-info-circle"></i> <strong>Régimen: Transición a la Tridimensionalidad ($Re = ${Math.round(Re)}$)</strong>.<br>Aparecen inestabilidades longitudinales en los núcleos de los vórtices, rompiendo la simetría perfecta de dos dimensiones.`;
                regimeColor = '#fb7185';
            } else {
                regimeText = `<i class="fas fa-info-circle"></i> <strong>Régimen: Calle de Vórtices Turbulenta ($Re = ${Math.round(Re)}$)</strong>.<br>El desprendimiento ocurre a la frecuencia calculada de $f = ${f.toFixed(2)}\\ \\text{Hz}$, pero la estela se vuelve caótica y turbulenta a medida que se desplaza aguas abajo.`;
                regimeColor = '#ef4444';
            }
        }

        const Cd = getDragCoefficient(Re);

        // Update UI
        if (lblRe) lblRe.innerText = Math.round(Re).toLocaleString();
        if (lblSt) lblSt.innerText = Re >= 47 ? St.toFixed(4) : '0.0000';
        if (lblF) lblF.innerText = Re >= 47 ? f.toFixed(2) + ' Hz' : '0.00 Hz';
        if (lblT) lblT.innerText = Re >= 47 ? T.toFixed(3) + ' s' : '∞';
        if (lblCd) lblCd.innerText = Cd.toFixed(3);
        if (lblRegime) {
            lblRegime.innerHTML = regimeText;
            lblRegime.style.borderLeftColor = regimeColor;
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([lblRegime]);
            }
        }

        // Simulation parameters in pixels
        const scale = 3000 * D; // pixels per meter
        const R_px = (D_mm / 2) * (w / 800) * 1.5; // Scaled radius
        const x0 = w / 4;
        const y0 = h / 2;

        // Vortex parameters
        const dt = 0.016; // Fixed timestep approx (60fps)
        const U_px = U * 100; // pixels per second
        t_sim += dt;

        // Shedding logic
        if (Re >= 47) {
            const period = 1 / f;
            // Limit frequency to avoid CPU bottleneck
            const maxF = 40;
            const effectivePeriod = Math.max(period, 1 / maxF);

            if (t_sim - last_shed_time >= effectivePeriod) {
                // Shed a new vortex!
                const sign = toggle_shed ? 1 : -1;
                // Shed coordinates: slightly behind the cylinder
                const x_shed = x0 + R_px * 1.2;
                const y_shed = y0 + sign * (R_px * 0.5);
                
                // Strength scales with velocity and diameter in pixel space
                const strength = sign * U_px * R_px * 2.2;

                vortices.push({
                    x: x_shed,
                    y: y_shed,
                    strength: strength,
                    core: R_px * 0.7,
                    age: 0
                });

                toggle_shed = !toggle_shed;
                last_shed_time = t_sim;
            }
        } else {
            // Dissipate current vortices if Re drops below 47
            vortices = [];
        }

        // Update vortices
        for (let i = 0; i < vortices.length; i++) {
            const v = vortices[i];
            v.age += dt;
            // Move downstream with flow
            v.x += U_px * dt;
            // Grow core size (diffusion)
            v.core = R_px * 0.7 + 2 * Math.sqrt(v.age);
            // Dissipate strength
            v.strength *= Math.exp(-0.15 * dt);
        }
        // Filter out old vortices
        vortices = vortices.filter(v => v.x < w + 50);

        // Spawn new particles
        // 1. Spontaneous dye line injectors in front
        const numDyeLines = 12;
        for (let j = 0; j < numDyeLines; j++) {
            const dyeY = (h / (numDyeLines + 1)) * (j + 1);
            particles.push(new Particle(0, dyeY, true, j));
        }

        // 2. Random background particles for wake seeding
        if (particles.length < 300) {
            particles.push(new Particle(0, Math.random() * h));
        }

        // Clear canvas
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, w, h);

        // Draw background grid lines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
        ctx.lineWidth = 1;
        const gridSpacing = 40;
        for (let x = 0; x < w; x += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, h);
            ctx.stroke();
        }
        for (let y = 0; y < h; y += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }

        // Update and draw particles
        ctx.lineWidth = 2.0;
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.age += 1;

            // Velocity calculation at (p.x, p.y)
            let vx = U_px;
            let vy = 0;

            const dx = p.x - x0;
            const dy = p.y - y0;
            const r2 = dx * dx + dy * dy;
            const r = Math.sqrt(r2);

            if (r < R_px) {
                // Particle hit cylinder! Destroy it immediately to prevent boundary jitter/bounce
                particles.splice(i, 1);
                continue;
            } else {
                // Potential flow around cylinder
                const factor2 = (R_px * R_px) / (r2 || 1);
                // Potential flow velocity field
                const v_pot_x = U_px * (1 - factor2 * (dx * dx - dy * dy) / (r2 || 1));
                const v_pot_y = U_px * (-2 * factor2 * dx * dy / (r2 || 1));

                vx = v_pot_x;
                vy = v_pot_y;

                // Add vortex induction velocities (Biot-Savart 2D core model)
                let netVorticity = 0;
                for (const v of vortices) {
                    const vdx = p.x - v.x;
                    const vdy = p.y - v.y;
                    const vr2 = vdx * vdx + vdy * vdy;
                    if (vr2 > 0) {
                        const core2 = v.core * v.core;
                        const factor = v.strength / (vr2 + core2);
                        vx += -factor * vdy;
                        vy += factor * vdx;

                        // Calculate influence for coloring
                        const netDist = Math.sqrt(vr2);
                        if (netDist < v.core * 3) {
                            netVorticity += (v.strength > 0 ? 1 : -1) * (1 - netDist / (v.core * 3));
                        }
                    }
                }
                p.vorticityInfluence = netVorticity;
            }

            // Cap maximum particle speed to prevent numerical slingshotting (shooting) near vortex cores
            const speed = Math.sqrt(vx * vx + vy * vy);
            const maxSpeed = U_px * 2.2;
            if (speed > maxSpeed) {
                vx = (vx / speed) * maxSpeed;
                vy = (vy / speed) * maxSpeed;
            }

            // Move particle
            p.x += vx * dt;
            p.y += vy * dt;

            // Out of bounds check
            if (p.x > w || p.y < 0 || p.y > h) {
                particles.splice(i, 1);
                continue;
            }

            // Coloring based on vorticity
            let pColor = 'rgba(156, 163, 175, 0.2)'; // Gray background trace
            if (p.isDyeLine) {
                const inf = Math.min(Math.max(p.vorticityInfluence, -1), 1);
                if (inf > 0.05) {
                    // Positive (anti-clockwise) - Blue
                    pColor = lerpColorHex('#3b82f6', '#ffffff', 1 - inf);
                } else if (inf < -0.05) {
                    // Negative (clockwise) - Red
                    pColor = lerpColorHex('#ef4444', '#ffffff', 1 + inf);
                } else {
                    // Neutral - Cyan/Greenish/White line
                    pColor = 'rgba(56, 189, 248, 0.45)';
                }
            }

            ctx.fillStyle = pColor;
            if (p.isDyeLine) {
                ctx.fillRect(p.x, p.y, 2, 2);
            } else {
                ctx.fillRect(p.x, p.y, 1.5, 1.5);
            }
        }

        // Draw vortices as glowing cores if active
        if (Re >= 47) {
            for (const v of vortices) {
                const isPos = v.strength > 0;
                ctx.beginPath();
                ctx.arc(v.x, v.y, v.core * 0.5, 0, 2 * Math.PI);
                ctx.fillStyle = isPos ? 'rgba(59, 130, 246, 0.15)' : 'rgba(239, 68, 68, 0.15)';
                ctx.fill();

                // Small center dot
                ctx.beginPath();
                ctx.arc(v.x, v.y, 2, 0, 2 * Math.PI);
                ctx.fillStyle = isPos ? '#3b82f6' : '#ef4444';
                ctx.fill();
            }
        }

        // Draw Cylinder
        ctx.beginPath();
        ctx.arc(x0, y0, R_px, 0, 2 * Math.PI);
        ctx.fillStyle = '#1f2937';
        ctx.fill();
        ctx.strokeStyle = 'var(--accent-cyan)';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw cylinder center anchor
        ctx.beginPath();
        ctx.arc(x0, y0, 3, 0, 2 * Math.PI);
        ctx.fillStyle = 'var(--accent-cyan)';
        ctx.fill();
    }

    // Helper color interpolator for hex strings
    function lerpColorHex(color1, color2, factor) {
        const hex = color => color.replace('#', '');
        const r1 = parseInt(hex(color1).substring(0, 2), 16);
        const g1 = parseInt(hex(color1).substring(2, 4), 16);
        const b1 = parseInt(hex(color1).substring(4, 6), 16);

        const r2 = parseInt(hex(color2).substring(0, 2), 16);
        const g2 = parseInt(hex(color2).substring(2, 4), 16);
        const b2 = parseInt(hex(color2).substring(4, 6), 16);

        const r = Math.round(r1 + factor * (r2 - r1));
        const g = Math.round(g1 + factor * (g2 - g1));
        const b = Math.round(b1 + factor * (b2 - b1));

        return `rgba(${r}, ${g}, ${b}, 0.65)`;
    }

    // Event listeners
    const inputs = [inputU, inputD, inputNu];
    inputs.forEach(el => {
        if (el) {
            el.addEventListener('input', () => {
                // Clear particles on drastic change to prevent visual bugs
                if (el === inputD || el === inputNu) {
                    initParticles();
                }
            });
            el.addEventListener('change', () => {
                if (el === inputD || el === inputNu) {
                    initParticles();
                }
            });
        }
    });

    let activeAnimId;
    function loop() {
        // Only run if tab is active
        const tab = document.getElementById('vortex-sim');
        if (tab && tab.classList.contains('active')) {
            updateAndRender();
        }
        activeAnimId = requestAnimationFrame(loop);
    }
    loop();

    // Clean up animation loop if switching tabs
    return () => {
        cancelAnimationFrame(activeAnimId);
        window.removeEventListener('resize', resize);
    };
}

/* =========================================================================
   24. NUKIYAMA BOILING SIMULATOR
   ========================================================================= */
function initBoilingSimulation() {
    const canvas = document.getElementById('boilingCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const chartCanvas = document.getElementById('nukiyamaChart');
    const inputFluid = document.getElementById('boiling-fluid');
    const inputDte = document.getElementById('boiling-dte');
    const valDte = document.getElementById('boiling-dte-val');
    const valTs = document.getElementById('boiling-ts-val');
    const valQ = document.getElementById('boiling-q-val');
    const valH = document.getElementById('boiling-h-val');
    const valQmax = document.getElementById('boiling-qmax-val');
    const lblRegime = document.getElementById('boiling-regime-note');

    if (!chartCanvas || !inputFluid || !inputDte) return;

    let chart = null;
    let bubbles = [];
    let plumes = [];
    let t_sim = 0;

    // Saturation temperatures (°C)
    const SatTemps = {
        water: 100.0,
        ethanol: 78.0,
        r134a: -26.0
    };

    function hermite(x1, y1, m1, x2, y2, m2, x) {
        const h = x2 - x1;
        const t = (x - x1) / h;
        const t2 = t * t;
        const t3 = t2 * t;
        
        const h00 = 2 * t3 - 3 * t2 + 1;
        const h10 = t3 - 2 * t2 + t;
        const h01 = -2 * t3 + 3 * t2;
        const h11 = t3 - t2;
        
        return y1 * h00 + h * m1 * h10 + y2 * h01 + h * m2 * h11;
    }

    function getCHFJumpX(fluid, qmax, lim_trans) {
        for (let temp = lim_trans; temp <= 500; temp += 1) {
            const props = getBoilingProperties(fluid, temp);
            if (props.q >= qmax) {
                return temp;
            }
        }
        return 400;
    }

    function getCoolingJumpX(fluid, qmin, lim_nc, lim_nuc) {
        for (let temp = lim_nc; temp <= lim_nuc; temp += 0.1) {
            const props = getBoilingProperties(fluid, temp);
            if (props.q >= qmin) {
                return temp;
            }
        }
        return lim_nc;
    }

    // Calculate heat flux q'' (W/m²) and other properties
    function getBoilingProperties(fluid, dte) {
        let qmax = 0;
        let qmin = 0;
        let lim_nc = 5.0;
        let lim_nuc = 30.0;
        let lim_trans = 120.0;
        
        let q_nc_val = 8500;
        let q_chf_val = 1200000;
        let q_lfp_val = 30000;
        let q_film_val = 1000000;
        let slope_nc = 1.33;
        let slope_nuc = 3.8;
        let slope_film = 1.8;

        if (fluid === 'water') {
            qmax = 1200000;
            qmin = 30000;
            lim_nc = 5.0;
            lim_nuc = 30.0;
            lim_trans = 120.0;
            q_nc_val = 8500;
            q_chf_val = 1200000;
            q_lfp_val = 30000;
            q_film_val = 1000000;
            slope_nc = 1.33;
            slope_nuc = 3.8;
            slope_film = 1.8;
        } else if (fluid === 'ethanol') {
            qmax = 400000;
            qmin = 15000;
            lim_nc = 4.0;
            lim_nuc = 25.0;
            lim_trans = 80.0;
            q_nc_val = 5000;
            q_chf_val = 400000;
            q_lfp_val = 15000;
            q_film_val = 500000;
            slope_nc = 1.33;
            slope_nuc = 3.8;
            slope_film = 1.8;
        } else {
            qmax = 250000;
            qmin = 10000;
            lim_nc = 3.0;
            lim_nuc = 18.0;
            lim_trans = 60.0;
            q_nc_val = 3000;
            q_chf_val = 250000;
            q_lfp_val = 10000;
            q_film_val = 350000;
            slope_nc = 1.33;
            slope_nuc = 3.8;
            slope_film = 1.8;
        }

        let Tsat = SatTemps[fluid];
        let Ts = Tsat + dte;

        const X = Math.log10(Math.max(dte, 0.1));
        const X_A = Math.log10(lim_nc);
        const X_C = Math.log10(lim_nuc);
        const X_D = Math.log10(lim_trans);
        const X_E = Math.log10(400.0);

        const Y_A = Math.log10(q_nc_val);
        const Y_C = Math.log10(q_chf_val);
        const Y_D = Math.log10(q_lfp_val);
        const Y_E = Math.log10(q_film_val);

        let Y = 0;
        if (X <= X_A) {
            Y = Y_A + slope_nc * (X - X_A);
        } else if (X <= X_C) {
            Y = hermite(X_A, Y_A, slope_nuc, X_C, Y_C, 0.0, X);
        } else if (X <= X_D) {
            Y = hermite(X_C, Y_C, 0.0, X_D, Y_D, 0.0, X);
        } else if (X <= X_E) {
            Y = hermite(X_D, Y_D, 0.0, X_E, Y_E, slope_film, X);
        } else {
            Y = Y_E + slope_film * (X - X_E);
        }

        let q = Math.pow(10, Y);
        if (dte > lim_trans) {
            const q_rad = 5.67e-8 * 0.85 * (Math.pow(Ts + 273.15, 4) - Math.pow(Tsat + 273.15, 4));
            q += q_rad;
        }

        const h = q / Math.max(dte, 0.1);
        return { q, h, qmax, qmin, Ts, Tsat };
    }

    // Build the curve datasets for the chart
    function generateCurveData(fluid) {
        const points = [];
        const minDte = 0.5;
        const maxDte = 400.0;
        const steps = 100;
        for (let i = 0; i <= steps; i++) {
            const dte = minDte * Math.pow(maxDte / minDte, i / steps);
            const props = getBoilingProperties(fluid, dte);
            points.push({ x: dte, y: props.q });
        }
        return points;
    }

    function getAnnotations(fluid) {
        let lim_nc = 5.0;
        let lim_nuc = 30.0;
        let lim_trans = 120.0;
        if (fluid === 'ethanol') {
            lim_nc = 4.0;
            lim_nuc = 25.0;
            lim_trans = 80.0;
        } else if (fluid === 'r134a') {
            lim_nc = 3.0;
            lim_nuc = 18.0;
            lim_trans = 60.0;
        }

        const propsMax = getBoilingProperties(fluid, lim_nuc);
        const propsMin = getBoilingProperties(fluid, lim_trans);
        const qmax = propsMax.qmax;
        const qmin = propsMin.qmin;
        const x_jump = getCHFJumpX(fluid, qmax, lim_trans);
        const x_cooling = getCoolingJumpX(fluid, qmin, lim_nc, lim_nuc);

        let yMin = 500;
        let yMax = 3000000;
        if (fluid === 'ethanol') {
            yMin = 200;
            yMax = 1200000;
        } else if (fluid === 'r134a') {
            yMin = 100;
            yMax = 800000;
        }

        const isLight = document.body.classList.contains('light-theme');
        const labelBgColor = isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(11, 15, 25, 0.85)';

        return {
            box1: {
                type: 'box',
                xMin: 0.5,
                xMax: lim_nc,
                yMin: yMin,
                yMax: yMax,
                backgroundColor: 'rgba(56, 189, 248, 0.04)',
                borderWidth: 0,
                label: {
                    display: true,
                    content: 'Conv. Natural',
                    position: 'bottom',
                    color: '#38bdf8',
                    font: { size: 9, weight: 'bold' }
                }
            },
            box2: {
                type: 'box',
                xMin: lim_nc,
                xMax: lim_nuc,
                yMin: yMin,
                yMax: yMax,
                backgroundColor: 'rgba(16, 185, 129, 0.04)',
                borderWidth: 0,
                label: {
                    display: true,
                    content: 'Nucleada',
                    position: 'bottom',
                    color: '#10b981',
                    font: { size: 9, weight: 'bold' }
                }
            },
            box3: {
                type: 'box',
                xMin: lim_nuc,
                xMax: lim_trans,
                yMin: yMin,
                yMax: yMax,
                backgroundColor: 'rgba(245, 158, 11, 0.04)',
                borderWidth: 0,
                label: {
                    display: true,
                    content: 'Transición',
                    position: 'bottom',
                    color: '#f59e0b',
                    font: { size: 9, weight: 'bold' }
                }
            },
            box4: {
                type: 'box',
                xMin: lim_trans,
                xMax: 400,
                yMin: yMin,
                yMax: yMax,
                backgroundColor: 'rgba(239, 68, 68, 0.04)',
                borderWidth: 0,
                label: {
                    display: true,
                    content: 'Película',
                    position: 'bottom',
                    color: '#ef4444',
                    font: { size: 9, weight: 'bold' }
                }
            },
            line1: {
                type: 'line',
                xMin: lim_nc,
                xMax: lim_nc,
                borderColor: 'rgba(56, 189, 248, 0.3)',
                borderWidth: 1.5,
                borderDash: [4, 4]
            },
            line2: {
                type: 'line',
                xMin: lim_nuc,
                xMax: lim_nuc,
                borderColor: 'rgba(16, 185, 129, 0.3)',
                borderWidth: 1.5,
                borderDash: [4, 4]
            },
            line3: {
                type: 'line',
                xMin: lim_trans,
                xMax: lim_trans,
                borderColor: 'rgba(239, 68, 68, 0.3)',
                borderWidth: 1.5,
                borderDash: [4, 4]
            },
            chfPoint: {
                type: 'point',
                xValue: lim_nuc,
                yValue: qmax,
                backgroundColor: '#ef4444',
                borderColor: '#ffffff',
                borderWidth: 2,
                radius: 6,
                label: {
                    display: true,
                    content: 'Flujo Crítico (CHF)',
                    position: 'top',
                    color: '#ef4444',
                    font: { size: 8, weight: 'bold' },
                    yAdjust: -12
                }
            },
            lfpPoint: {
                type: 'point',
                xValue: lim_trans,
                yValue: qmin,
                backgroundColor: '#f59e0b',
                borderColor: '#ffffff',
                borderWidth: 2,
                radius: 6,
                label: {
                    display: true,
                    content: 'Leidenfrost (LFP)',
                    position: 'bottom',
                    color: '#f59e0b',
                    font: { size: 8, weight: 'bold' },
                    yAdjust: 12
                }
            },
            burnoutJump: {
                type: 'line',
                xMin: lim_nuc,
                xMax: x_jump,
                yMin: qmax,
                yMax: qmax,
                borderColor: '#ea580c',
                borderWidth: 2,
                borderDash: [6, 4],
                label: {
                    display: true,
                    content: 'Crisis (Burnout)',
                    position: 'center',
                    color: '#ea580c',
                    backgroundColor: labelBgColor,
                    font: { size: 8, weight: 'bold' },
                    yAdjust: -10
                }
            },
            coolingJump: {
                type: 'line',
                xMin: x_cooling,
                xMax: lim_trans,
                yMin: qmin,
                yMax: qmin,
                borderColor: '#0284c7',
                borderWidth: 2,
                borderDash: [6, 4],
                label: {
                    display: true,
                    content: 'Enfriamiento',
                    position: 'center',
                    color: '#0284c7',
                    backgroundColor: labelBgColor,
                    font: { size: 8, weight: 'bold' },
                    yAdjust: 10
                }
            }
        };
    }

    function initChart() {
        const fluid = inputFluid.value;
        const curveData = generateCurveData(fluid);
        const currentDte = parseFloat(inputDte.value);
        const currentProps = getBoilingProperties(fluid, currentDte);

        if (chart) {
            chart.destroy();
        }

        const isLight = document.body.classList.contains('light-theme');
        const isDark = !isLight;
        const textColor = isDark ? '#e2e8f0' : '#1e293b';
        const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';

        let yMin = 500;
        let yMax = 3000000;
        if (fluid === 'ethanol') {
            yMin = 200;
            yMax = 1200000;
        } else if (fluid === 'r134a') {
            yMin = 100;
            yMax = 800000;
        }

        chart = new Chart(chartCanvas, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Curva de Nukiyama',
                        data: curveData,
                        showLine: true,
                        borderColor: '#38bdf8',
                        borderWidth: 3,
                        backgroundColor: 'transparent',
                        pointRadius: 0,
                        tension: 0.1
                    },
                    {
                        label: 'Estado Actual',
                        data: [{ x: currentDte, y: currentProps.q }],
                        pointBackgroundColor: '#f97316',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 7,
                        pointHoverRadius: 8
                    },
                    {
                        label: 'Flujo Crítico (CHF)',
                        data: [],
                        pointBackgroundColor: '#ef4444',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        backgroundColor: '#ef4444'
                    },
                    {
                        label: 'Leidenfrost (LFP)',
                        data: [],
                        pointBackgroundColor: '#f59e0b',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        backgroundColor: '#f59e0b'
                    },
                    {
                        label: 'Crisis (Burnout)',
                        data: [],
                        borderColor: '#ea580c',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        backgroundColor: 'transparent',
                        type: 'line'
                    },
                    {
                        label: 'Enfriamiento',
                        data: [],
                        borderColor: '#0284c7',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        backgroundColor: 'transparent',
                        type: 'line'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: textColor,
                            font: { size: 9, weight: 'bold' },
                            boxWidth: 12,
                            padding: 10
                        }
                    },
                    annotation: {
                        annotations: getAnnotations(fluid)
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `ΔTe: ${context.raw.x.toFixed(1)}°C, q": ${(context.raw.y / 1000).toFixed(1)} kW/m²`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        type: 'logarithmic',
                        title: { display: true, text: 'Temperatura de Exceso ΔTe (°C)', color: textColor },
                        min: 0.5,
                        max: 400,
                        ticks: {
                            color: textColor,
                            callback: function(value) {
                                if (value === 0.5 || value === 1 || value === 5 || value === 10 || value === 30 || value === 100 || value === 400) {
                                    return value + '°C';
                                }
                                return null;
                            }
                        },
                        grid: { color: gridColor }
                    },
                    y: {
                        type: 'logarithmic',
                        title: { display: true, text: 'Flujo de Calor q" (W/m²)', color: textColor },
                        min: yMin,
                        max: yMax,
                        ticks: {
                            color: textColor,
                            callback: function(value) {
                                if (value === 1000) return '1k';
                                if (value === 10000) return '10k';
                                if (value === 100000) return '100k';
                                if (value === 1000000) return '1M';
                                if (value === 3000000) return '3M';
                                return null;
                            }
                        },
                        grid: { color: gridColor }
                    }
                }
            }
        });
    }

    function updateIndicator() {
        const fluid = inputFluid.value;
        const dte = parseFloat(inputDte.value);
        const props = getBoilingProperties(fluid, dte);

        if (chart) {
            chart.data.datasets[1].data = [{ x: dte, y: props.q }];
            chart.update('none');
        }

        if (valDte) valDte.innerText = dte.toFixed(1);
        if (valTs) valTs.innerText = props.Ts.toFixed(1) + ' °C';
        if (valQ) valQ.innerText = (props.q / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + ' kW/m²';
        if (valH) valH.innerText = props.h.toLocaleString(undefined, { maximumFractionDigits: 0 }) + ' W/m²·K';
        if (valQmax) valQmax.innerText = (props.qmax / 1000).toLocaleString() + ' kW/m²';

        let note = '';
        let borderCol = '#10b981';

        let lim_nc = 5.0;
        let lim_nuc = 30.0;
        let lim_trans = 120.0;
        if (fluid === 'ethanol') {
            lim_nc = 4.0;
            lim_nuc = 25.0;
            lim_trans = 80.0;
        } else if (fluid === 'r134a') {
            lim_nc = 3.0;
            lim_nuc = 18.0;
            lim_trans = 60.0;
        }

        if (dte < lim_nc) {
            note = `<i class="fas fa-snowflake"></i> <strong>Convección Natural (${dte.toFixed(1)}°C < ${lim_nc}°C)</strong>:<br>El líquido adyacente a la superficie se calienta, se vuelve menos denso y asciende. No se forman burbujas debido a que el sobrecalentamiento no supera la tensión superficial para iniciar la nucleación.`;
            borderCol = '#38bdf8';
        } else if (dte < lim_nuc) {
            note = `<i class="fas fa-soap"></i> <strong>Ebullición Nucleada (${lim_nc}°C a ${lim_nuc}°C)</strong>:<br>Se forman burbujas de vapor en los sitios de nucleación (cavidades microscópicas). Inicialmente burbujas aisladas (baja ΔTe), progresando a columnas continuas. Este régimen ofrece los coeficientes de transferencia $h$ más elevados del proceso.`;
            borderCol = '#10b981';
        } else if (dte < lim_trans) {
            note = `<i class="fas fa-random"></i> <strong>Ebullición de Transición (${lim_nuc}°C a ${lim_trans}°C)</strong>:<br>La tasa de formación de burbujas es tan alta que comienzan a fusionarse formando parches intermitentes de vapor. Dado que el vapor es mal conductor térmico, el flujo de calor $q''$ disminuye a medida que aumenta la temperatura.`;
            borderCol = '#f59e0b';
        } else {
            note = `<i class="fas fa-fire"></i> <strong>Ebullición en Película (ΔTe ≥ ${lim_trans}°C)</strong>:<br>La superficie calefactora queda completamente aislada por una película estable de vapor. La transferencia de calor ocurre por conducción a través del vapor y por radiación térmica directa. ¡Riesgo alto de burnout si se controla por flujo de calor!`;
            borderCol = '#ef4444';
        }

        if (lblRegime) {
            lblRegime.innerHTML = note;
            lblRegime.style.borderLeftColor = borderCol;
        }
    }

    const heater = {
        x: 0,
        y: 0,
        r: 24
    };

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = 320 * dpr;
        ctx.scale(dpr, dpr);

        heater.x = rect.width / 2;
        heater.y = 320 * 0.65;
    }

    class Bubble {
        constructor(x, y, radius, speed, type = 'normal') {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.speed = speed;
            this.opacity = 0.8;
            this.type = type;
            this.wobbleSpeed = 0.1 + Math.random() * 0.15;
            this.wobbleAmp = 2 + Math.random() * 4;
            this.seed = Math.random() * 100;
        }

        update() {
            this.y -= this.speed;
            this.x += Math.sin(t_sim * this.wobbleSpeed * 10 + this.seed) * (this.wobbleAmp * 0.05);
            this.radius += 0.025;
            if (this.y < 50) {
                this.opacity -= 0.15;
            }
        }

        draw(c) {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            c.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            c.lineWidth = 1;
            c.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.15})`;
            c.fill();
            c.stroke();

            c.beginPath();
            c.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.25, 0, Math.PI * 2);
            c.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
            c.fill();
        }
    }

    class Plume {
        constructor(x) {
            this.x = x;
            this.y = heater.y - heater.r;
            this.speed = 1.0 + Math.random() * 0.8;
            this.length = 60 + Math.random() * 50;
            this.opacity = 0.4;
        }

        update() {
            this.y -= this.speed;
            this.opacity -= 0.005;
        }

        draw(c) {
            c.beginPath();
            c.moveTo(this.x, this.y);
            for (let i = 0; i < this.length; i += 5) {
                const waveY = this.y + i;
                const waveX = this.x + Math.sin(waveY * 0.04 + t_sim * 4) * 4;
                c.lineTo(waveX, waveY);
            }
            c.strokeStyle = `rgba(239, 68, 68, ${this.opacity})`;
            c.lineWidth = 2;
            c.stroke();
        }
    }

    function updateAndRender() {
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        ctx.clearRect(0, 0, w, h);

        t_sim += 0.016;

        const fluid = inputFluid.value;
        const dte = parseFloat(inputDte.value);

        let lim_nc = 5.0;
        let lim_nuc = 30.0;
        let lim_trans = 120.0;
        if (fluid === 'ethanol') {
            lim_nc = 4.0;
            lim_nuc = 25.0;
            lim_trans = 80.0;
        } else if (fluid === 'r134a') {
            lim_nc = 3.0;
            lim_nuc = 18.0;
            lim_trans = 60.0;
        }

        const gradBg = ctx.createLinearGradient(0, 0, 0, h);
        if (fluid === 'water') {
            gradBg.addColorStop(0, '#0c1524');
            gradBg.addColorStop(1, '#070a12');
        } else if (fluid === 'ethanol') {
            gradBg.addColorStop(0, '#0a2221');
            gradBg.addColorStop(1, '#051211');
        } else {
            gradBg.addColorStop(0, '#1c0c24');
            gradBg.addColorStop(1, '#0e0712');
        }
        ctx.fillStyle = gradBg;
        ctx.fillRect(0, 0, w, h);

        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(w, 50);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.lineWidth = 2;
        ctx.stroke();

        if (dte < lim_nc) {
            if (Math.random() < 0.2) {
                const rx = heater.x + (Math.random() - 0.5) * (heater.r * 2);
                plumes.push(new Plume(rx));
            }
        } else if (dte < lim_nuc) {
            const fraction = (dte - lim_nc) / (lim_nuc - lim_nc);
            const numSites = Math.floor(3 + fraction * 10);
            const spawnChance = 0.08 + fraction * 0.42;

            for (let i = 0; i < numSites; i++) {
                if (Math.random() < spawnChance) {
                    const angle = -Math.PI/2 + (Math.random() - 0.5) * Math.PI;
                    const bx = heater.x + Math.cos(angle) * heater.r;
                    const by = heater.y + Math.sin(angle) * heater.r;
                    const rad = 2 + Math.random() * 3;
                    const sp = 1.8 + Math.random() * 1.5;
                    bubbles.push(new Bubble(bx, by, rad, sp));
                }
            }
        } else if (dte < lim_trans) {
            // Transition Boiling: few but very large bubbles that almost completely cover the heater
            if (Math.random() < 0.05) {
                const bx = heater.x + (Math.random() - 0.5) * (heater.r * 0.8);
                const by = heater.y - heater.r + 5;
                const rad = 25 + Math.random() * 12; // Massive bubbles covering the heater
                const sp = 0.8 + Math.random() * 0.6; // Slower rise
                bubbles.push(new Bubble(bx, by, rad, sp));
            }
        } else {
            // Base film boiling bubbles: detach large bubbles from the top of the vapor film
            if (Math.random() < 0.08) {
                const bx = heater.x + (Math.random() - 0.5) * heater.r;
                // Spawn at the top edge of the large vapor film (radius is heater.r * 2)
                const by = heater.y - heater.r * 2.0;
                const rad = 14 + Math.random() * 6; // Large bubbles
                const sp = 1.2 + Math.random() * 0.8;
                bubbles.push(new Bubble(bx, by, rad, sp, 'large'));
            }

            // When the curve rises again (high excess temperature dte > 180),
            // form columns of vapor rising continuously around the heater.
            if (dte > 180) {
                const numColumns = 3;
                const offsets = [-heater.r, 0, heater.r];
                for (let c = 0; c < numColumns; c++) {
                    if (Math.random() < 0.2) {
                        const bx = heater.x + offsets[c] + (Math.random() - 0.5) * 4;
                        // Spawn at the top edge of the large vapor film
                        const by = heater.y - heater.r * 2.0 + (offsets[c] === 0 ? 0 : heater.r * 0.5);
                        const rad = 8 + Math.random() * 5; // Large bubbles in columns
                        const sp = 2.0 + Math.random() * 1.0; // High speed columns
                        bubbles.push(new Bubble(bx, by, rad, sp));
                    }
                }
            }
        }

        plumes.forEach(p => p.update());
        plumes = plumes.filter(p => p.opacity > 0 && p.y > 50);
        plumes.forEach(p => p.draw(ctx));

        bubbles.forEach(b => b.update());
        bubbles = bubbles.filter(b => b.opacity > 0 && b.y > 45);
        bubbles.forEach(b => b.draw(ctx));

        if (dte >= lim_nuc) {
            ctx.beginPath();
            if (dte < lim_trans) {
                const amp = 3 + Math.sin(t_sim * 15) * 2;
                ctx.arc(heater.x, heater.y, heater.r + amp, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.22)';
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
            } else {
                // Stable film bubble of twice the diameter of the heater (radius = 2 * r)
                const thickness = heater.r;
                const amp = Math.sin(t_sim * 4) * 2; // slow gentle breathing oscillation
                ctx.arc(heater.x, heater.y, heater.r + thickness + amp, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
            }
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.stroke();
        }

        let heaterFill = '#1e293b';
        let heaterStroke = '#475569';
        if (dte >= lim_trans) {
            const val = Math.min((dte - lim_trans) / (350 - lim_trans), 1.0);
            const red = 180 + Math.floor(75 * val);
            const green = Math.floor(90 * val);
            heaterFill = `rgb(${red}, ${green}, 0)`;
            heaterStroke = '#ff7b00';
        } else if (dte >= lim_nuc) {
            heaterFill = '#7f1d1d';
            heaterStroke = '#ef4444';
        } else if (dte >= lim_nc) {
            heaterFill = '#374151';
            heaterStroke = '#9ca3af';
        }

        ctx.beginPath();
        ctx.arc(heater.x, heater.y, heater.r, 0, Math.PI * 2);
        ctx.fillStyle = heaterFill;
        ctx.strokeStyle = heaterStroke;
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('ELEMENTO', heater.x, heater.y - 4);
        ctx.fillText('CALEFACTOR', heater.x, heater.y + 6);

        // Draw excess temperature HUD inside the animation
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(15, 15, 200, 60);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(15, 15, 200, 60);

        ctx.fillStyle = '#38bdf8'; // Cyan text for variables
        ctx.font = 'bold 12px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(`ΔT exceso: ${dte.toFixed(1)} °C`, 25, 28);

        const Ts = SatTemps[fluid] + dte;
        ctx.fillStyle = '#9ca3af'; // Grey for secondary text
        ctx.font = '9px sans-serif';
        ctx.fillText(`T superficie: ${Ts.toFixed(1)} °C`, 25, 43);

        const fluidNames = {
            water: 'Agua (Tsat = 100 °C)',
            ethanol: 'Etanol (Tsat = 78 °C)',
            r134a: 'R-134a (Tsat = -26 °C)'
        };
        ctx.fillStyle = '#f97316'; // Orange text for fluid
        ctx.fillText(`Fluido: ${fluidNames[fluid]}`, 25, 57);
    }

    inputFluid.addEventListener('change', () => {
        bubbles = [];
        plumes = [];
        initChart();
        updateIndicator();
    });

    inputDte.addEventListener('input', () => {
        updateIndicator();
    });

    const observer = new MutationObserver(() => {
        initChart();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    resize();
    window.addEventListener('resize', resize);
    initChart();
    updateIndicator();

    let animId;
    function loop() {
        const tab = document.getElementById('boiling-sim');
        if (tab && tab.classList.contains('active')) {
            updateAndRender();
        }
        animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener('resize', resize);
        observer.disconnect();
        if (chart) {
            chart.destroy();
        }
    };
}


/* =========================================================================
   TRANSIENT HEAT CONDUCTION SIMULATOR (FDM 1D)
   ========================================================================= */
let transientAnimationId = null;
let transientChart = null;

function initTransientSimulation() {
    const selectGeometry = document.getElementById("transient-geometry");
    const selectMaterial = document.getElementById("transient-material");
    const inputH = document.getElementById("transient-h");
    const inputSize = document.getElementById("transient-size");
    const inputTi = document.getElementById("transient-ti");
    const inputTinf = document.getElementById("transient-tinf");
    const resetBtn = document.getElementById("transient-reset-btn");
    const inputSpeed = document.getElementById("transient-speed");

    const valH = document.getElementById("transient-h-val");
    const valSize = document.getElementById("transient-size-val");
    const valTi = document.getElementById("transient-ti-val");
    const valTinf = document.getElementById("transient-tinf-val");
    const valSpeed = document.getElementById("transient-speed-val");

    const valBi = document.getElementById("transient-bi-val");
    const valFo = document.getElementById("transient-fo-val");
    const valT0 = document.getElementById("transient-t0-val");
    const valTs = document.getElementById("transient-ts-val");
    const valQ = document.getElementById("transient-q-val");
    const valTime = document.getElementById("transient-time-val");
    const valDteq = document.getElementById("transient-dteq-val");
    const regimeNote = document.getElementById("transient-regime-note");

    const canvas = document.getElementById("transientCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const chartCtx = document.getElementById("transientChart");

    // Material properties dictionary
    const Materials = {
        copper: { k: 401, rho: 8933, cp: 385, name: 'Cobre' },
        glass: { k: 1.4, rho: 2500, cp: 750, name: 'Vidrio' },
        wood: { k: 0.15, rho: 700, cp: 1200, name: 'Madera' }
    };

    let geometry = selectGeometry.value;
    let materialKey = selectMaterial.value;
    let h = parseFloat(inputH.value);
    let size = parseFloat(inputSize.value); // D or 2L
    let Ti = parseFloat(inputTi.value);
    let Tinf = parseFloat(inputTinf.value);

    let R = size / 2.0; // Radius or half-thickness
    let N = 10; // Number of elements
    let dr = R / N;

    // Discretization array (temperatures of 11 nodes, center to surface)
    let T = new Array(N + 1).fill(Ti);
    let simTime = 0;
    let chartDataCenter = [];
    let chartDataSurface = [];
    let chartDataFluid = [];
    let running = true;

    function getAdimensionalNumbers() {
        const mat = Materials[materialKey];
        const k = mat.k;
        const alpha = k / (mat.rho * mat.cp);

        // Characteristic length Lc = V / As
        let Lc = R;
        if (geometry === 'sphere') {
            Lc = R / 3.0;
        } else if (geometry === 'cylinder') {
            Lc = R / 2.0;
        } else { // slab
            Lc = R;
        }

        const Bi = (h * Lc) / k;
        const Fo = (alpha * simTime) / (Lc * Lc);
        return { Bi, Fo, alpha };
    }

    function getVolumeWeights(geom) {
        const w = new Array(N + 1);
        if (geom === 'slab') {
            w[0] = 0.5;
            for (let i = 1; i < N; i++) w[i] = 1.0;
            w[N] = 0.5;
        } else if (geom === 'cylinder') {
            w[0] = 0.25;
            for (let i = 1; i < N; i++) w[i] = 2 * i;
            w[N] = N - 0.25;
        } else { // sphere
            w[0] = 0.125;
            for (let i = 1; i < N; i++) w[i] = 3 * i * i + 0.25;
            w[N] = 3 * N * N - 1.5 * N + 0.125;
        }
        return w;
    }

    function calculateHeatLossFraction() {
        const w = getVolumeWeights(geometry);
        let sum_temp = 0;
        let sum_initial = 0;
        for (let i = 0; i <= N; i++) {
            sum_temp += w[i] * (T[i] - Tinf);
            sum_initial += w[i] * (Ti - Tinf);
        }
        if (Math.abs(sum_initial) < 1e-5) return 1.0;
        return 1.0 - (sum_temp / sum_initial);
    }

    function resetSimulation() {
        geometry = selectGeometry.value;
        materialKey = selectMaterial.value;
        h = parseFloat(inputH.value);
        size = parseFloat(inputSize.value);
        Ti = parseFloat(inputTi.value);
        Tinf = parseFloat(inputTinf.value);

        R = size / 2.0;
        dr = R / N;
        T.fill(Ti);
        simTime = 0;
        chartDataCenter = [{ x: 0, y: Ti }];
        chartDataSurface = [{ x: 0, y: Ti }];
        chartDataFluid = [{ x: 0, y: Tinf }];
        running = true;

        if (transientChart) {
            transientChart.destroy();
            transientChart = null;
        }
        initTransientChart();
        updateUI();
    }

    function solveStep() {
        const mat = Materials[materialKey];
        const alpha = mat.k / (mat.rho * mat.cp);
        const k = mat.k;

        let g = 0; // Geometry factor
        if (geometry === 'cylinder') g = 1;
        else if (geometry === 'sphere') g = 2;

        // Stability limit considering both center and convection surface node stability:
        const Bi_delta = (h * dr) / k;
        const limitCenter = 1.0 / (2 * (1 + g));
        const limitSurface = 1.0 / (2 * (Math.pow(1 - 0.5/N, g) + Bi_delta));
        const Fo_delta = 0.9 * Math.min(limitCenter, limitSurface);
        const dt = (Fo_delta * dr * dr) / alpha;

        const T_next = [...T];

        // 1. Center node (i = 0)
        T_next[0] = T[0] + 2 * (1 + g) * Fo_delta * (T[1] - T[0]);

        // 2. Internal nodes (0 < i < N)
        for (let i = 1; i < N; i++) {
            T_next[i] = T[i] + Fo_delta * ((T[i+1] - 2 * T[i] + T[i-1]) + (g / (2 * i)) * (T[i+1] - T[i-1]));
        }

        // 3. Surface node (i = N)
        T_next[N] = T[N] + 2 * Fo_delta * (Math.pow(1 - 0.5/N, g) * (T[N-1] - T[N]) + Bi_delta * (Tinf - T[N]));

        T = T_next;
        simTime += dt;
    }

    function getColorForTemp(temp) {
        const minT = Math.min(Ti, Tinf);
        const maxT = Math.max(Ti, Tinf);
        const tNorm = Math.min(Math.max((temp - minT) / (maxT - minT || 1), 0), 1);
        const hue = (1.0 - tNorm) * 220; // 0 HSL = Red, 220 HSL = Blue
        return `hsl(${hue}, 85%, 50%)`;
    }

    function drawSolid() {
        const w = canvas.width;
        const h_canvas = canvas.height;
        const isLight = document.body.classList.contains('light-theme');
        
        ctx.fillStyle = isLight ? '#f1f5f9' : '#0f111a';
        ctx.fillRect(0, 0, w, h_canvas);

        const cx = w / 2;
        const cy = h_canvas / 2;
        const maxRadius = 100;

        // Draw convection fluid layer background
        const fluidGrad = ctx.createRadialGradient(cx, cy, maxRadius, cx, cy, maxRadius + 30);
        fluidGrad.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
        fluidGrad.addColorStop(1, 'rgba(56, 189, 248, 0.0)');
        ctx.fillStyle = fluidGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, maxRadius + 30, 0, 2 * Math.PI);
        ctx.fill();

        if (geometry === 'slab') {
            // Slab flat parallel layers
            const layerWidth = maxRadius * 2 / N;
            for (let i = N - 1; i >= 0; i--) {
                const color = getColorForTemp(T[i]);
                ctx.fillStyle = color;
                
                const wDraw = (i + 1) * layerWidth;
                ctx.fillRect(cx - wDraw/2, cy - 70, wDraw, 140);
            }
        } else {
            // Concentric rings (cylinder or sphere)
            const ringWidth = maxRadius / N;
            for (let i = N - 1; i >= 0; i--) {
                const rDraw = (i + 1) * ringWidth;
                ctx.fillStyle = getColorForTemp(T[i]);
                ctx.beginPath();
                ctx.arc(cx, cy, rDraw, 0, 2 * Math.PI);
                ctx.fill();
            }
        }

        // Draw outline of solid
        ctx.strokeStyle = isLight ? '#475569' : '#94a3b8';
        ctx.lineWidth = 2;
        if (geometry === 'slab') {
            ctx.strokeRect(cx - maxRadius, cy - 70, maxRadius * 2, 140);
        } else {
            ctx.beginPath();
            ctx.arc(cx, cy, maxRadius, 0, 2 * Math.PI);
            ctx.stroke();
        }

        // Draw fluid label
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 9px sans-serif';
        ctx.fillText("FLUIDO CONVECTIVO", cx - 50, cy - maxRadius - 15);

        // 1. Draw dashed indicator line and text for T0 and Ts
        ctx.save();
        ctx.setLineDash([4, 4]);
        ctx.strokeStyle = isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        
        const textColor = isLight ? '#1e293b' : '#f8fafc';
        ctx.fillStyle = textColor;
        ctx.font = 'bold 9px sans-serif';

        if (geometry === 'slab') {
            // Center line
            ctx.beginPath();
            ctx.moveTo(cx, cy - 75);
            ctx.lineTo(cx, cy + 75);
            ctx.stroke();

            // Surface line right
            ctx.beginPath();
            ctx.moveTo(cx + maxRadius, cy - 75);
            ctx.lineTo(cx + maxRadius, cy + 75);
            ctx.stroke();

            // Labels
            ctx.fillText(`Centro T₀: ${T[0].toFixed(1)} °C`, cx - 35, cy - 80);
            ctx.fillText(`Sup. Ts: ${T[N].toFixed(1)} °C`, cx + maxRadius - 30, cy + 87);
        } else {
            // Line from center to surface
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + maxRadius, cy);
            ctx.stroke();

            // Labels
            ctx.beginPath();
            ctx.arc(cx, cy, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#ef4444';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(cx + maxRadius, cy, 3, 0, 2 * Math.PI);
            ctx.fillStyle = '#f59e0b';
            ctx.fill();

            ctx.fillStyle = textColor;
            ctx.fillText(`Centro T₀: ${T[0].toFixed(1)} °C`, cx - 35, cy - 8);
            ctx.fillText(`Sup. Ts: ${T[N].toFixed(1)} °C`, cx + maxRadius + 5, cy + 4);
        }
        ctx.restore();

        // 2. Draw Color Map Legend (Thermography scale)
        const colorbarX = 20;
        const colorbarY = h_canvas - 30;
        const colorbarW = 150;
        const colorbarH = 8;

        // Gradient container background
        ctx.fillStyle = isLight ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)';
        ctx.fillRect(colorbarX - 5, colorbarY - 18, colorbarW + 10, colorbarH + 28);

        // Color gradient bar
        const barGrad = ctx.createLinearGradient(colorbarX, colorbarY, colorbarX + colorbarW, colorbarY);
        // Blue is cold (Tinf), Red is hot (Ti)
        barGrad.addColorStop(0, getColorForTemp(Math.min(Ti, Tinf)));
        barGrad.addColorStop(0.5, getColorForTemp((Ti + Tinf) / 2));
        barGrad.addColorStop(1, getColorForTemp(Math.max(Ti, Tinf)));
        ctx.fillStyle = barGrad;
        ctx.fillRect(colorbarX, colorbarY, colorbarW, colorbarH);

        // Text labels
        ctx.fillStyle = isLight ? '#475569' : '#94a3b8';
        ctx.font = 'bold 8px sans-serif';
        ctx.fillText("Mapa de Color (Termografía)", colorbarX, colorbarY - 5);
        ctx.fillText(`${Math.min(Ti, Tinf).toFixed(0)}°C`, colorbarX, colorbarY + colorbarH + 8);
        ctx.fillText(`${Math.max(Ti, Tinf).toFixed(0)}°C`, colorbarX + colorbarW - 25, colorbarY + colorbarH + 8);
    }

    function updateUI() {
        const { Bi, Fo } = getAdimensionalNumbers();

        valH.textContent = h;
        valSize.textContent = size.toFixed(2);
        valTi.textContent = Ti;
        valTinf.textContent = Tinf;
        if (valSpeed && inputSpeed) valSpeed.textContent = inputSpeed.value;

        valBi.textContent = Bi.toFixed(4);
        valFo.textContent = Fo.toFixed(4);
        valT0.textContent = T[0].toFixed(1) + " °C";
        valTs.textContent = T[N].toFixed(1) + " °C";

        const qFrac = calculateHeatLossFraction();
        valQ.textContent = (qFrac * 100).toFixed(1) + " %";

        if (valTime) valTime.textContent = simTime.toFixed(1) + " s";
        if (valDteq) {
            const dteq = Math.abs(T[0] - Tinf);
            valDteq.textContent = dteq.toFixed(1) + " °C";
        }

        // Regime descriptive note
        if (Bi < 0.1) {
            regimeNote.style.borderLeftColor = 'var(--accent-emerald)';
            regimeNote.innerHTML = `<strong>Método de Capacitancia Global válido (Bi = ${Bi.toFixed(4)} < 0.1)</strong>.<br>La resistencia interna es despreciable. La temperatura del cuerpo es prácticamente uniforme y decrece de forma exponencial pura.`;
        } else {
            regimeNote.style.borderLeftColor = 'var(--accent-orange)';
            regimeNote.innerHTML = `<strong>Gradientes internos importantes (Bi = ${Bi.toFixed(4)} > 0.1)</strong>.<br>Existe resistencia a la conducción interna. El centro (T0 = ${T[0].toFixed(1)}°C) permanece más caliente que la superficie (Ts = ${T[N].toFixed(1)}°C). Requiere soluciones espaciales completas.`;
        }
    }

    function initTransientChart() {
        if (transientChart) return;
        const isLight = document.body.classList.contains('light-theme');
        const textColor = isLight ? '#1e293b' : '#cbd5e1';
        const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

        transientChart = new Chart(chartCtx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Centro (T0)',
                        data: chartDataCenter,
                        showLine: true,
                        borderColor: '#ef4444',
                        backgroundColor: '#ef4444',
                        pointRadius: 0,
                        borderWidth: 2
                    },
                    {
                        label: 'Superficie (Ts)',
                        data: chartDataSurface,
                        showLine: true,
                        borderColor: '#f59e0b',
                        backgroundColor: '#f59e0b',
                        pointRadius: 0,
                        borderWidth: 2
                    },
                    {
                        label: 'Fluido (Tinf)',
                        data: chartDataFluid,
                        showLine: true,
                        borderColor: '#3b82f6',
                        backgroundColor: 'transparent',
                        pointRadius: 0,
                        borderDash: [5, 5],
                        borderWidth: 1.5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: { color: textColor, font: { size: 9, weight: 'bold' } }
                    }
                },
                scales: {
                    x: {
                        type: 'linear',
                        title: { display: true, text: 'Tiempo Físico (s)', color: textColor, font: { size: 9 } },
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { size: 8 } }
                    },
                    y: {
                        type: 'linear',
                        title: { display: true, text: 'Temperatura (°C)', color: textColor, font: { size: 9 } },
                        grid: { color: gridColor },
                        ticks: { color: textColor, font: { size: 8 } }
                    }
                }
            }
        });
    }

    function runLoopStep() {
        if (!running) return;

        const mat = Materials[materialKey];
        const alpha = mat.k / (mat.rho * mat.cp);
        let g = 0;
        if (geometry === 'cylinder') g = 1;
        else if (geometry === 'sphere') g = 2;
        const Bi_delta = (h * dr) / mat.k;
        const limitCenter = 1.0 / (2 * (1 + g));
        const limitSurface = 1.0 / (2 * (Math.pow(1 - 0.5/N, g) + Bi_delta));
        const Fo_delta = 0.9 * Math.min(limitCenter, limitSurface);
        const actualDt = (Fo_delta * dr * dr) / alpha;

        // The speed slider multiplier defines the target physical seconds per second of real time.
        // At 60 frames per second, we want (speedMultiplier / 60) physical seconds per frame.
        const speedMultiplier = inputSpeed ? parseFloat(inputSpeed.value) : 1;
        const dtFrameTarget = speedMultiplier / 60;

        const stepsPerFrame = Math.min(2500, Math.max(1, Math.round(dtFrameTarget / actualDt)));

        for (let i = 0; i < stepsPerFrame; i++) {
            solveStep();
        }

        // Add to chart data throttle (adapt sampling interval to the total estimated cooling time)
        let Lc = R;
        if (geometry === 'sphere') Lc = R / 3.0;
        else if (geometry === 'cylinder') Lc = R / 2.0;
        const tau = (mat.rho * Lc * mat.cp) / h;
        const tCool = 4.0 * tau;
        const sampleInterval = Math.max(0.01, tCool / 150); // sample around 150 points

        const lastPoint = chartDataCenter[chartDataCenter.length - 1];
        const lastT = lastPoint ? lastPoint.x : 0;
        if (simTime - lastT >= sampleInterval) {
            chartDataCenter.push({ x: simTime, y: T[0] });
            chartDataSurface.push({ x: simTime, y: T[N] });
            chartDataFluid.push({ x: simTime, y: Tinf });
            
            if (transientChart) {
                transientChart.update('none');
            }
        }

        // Auto-stop simulation when steady state is reached (99% cooled/heated)
        if (Math.abs(T[0] - Tinf) < 0.005 * Math.abs(Ti - Tinf)) {
            running = false;
        }

        drawSolid();
        updateUI();
    }

    // Attach listeners
    resetBtn.addEventListener("click", resetSimulation);
    
    // Sliders dynamic value updates
    inputH.addEventListener("input", () => {
        h = parseFloat(inputH.value);
        updateUI();
    });
    inputSize.addEventListener("input", () => {
        size = parseFloat(inputSize.value);
        R = size / 2.0;
        dr = R / N;
        updateUI();
    });
    inputTi.addEventListener("input", () => {
        Ti = parseFloat(inputTi.value);
        updateUI();
    });
    inputTinf.addEventListener("input", () => {
        Tinf = parseFloat(inputTinf.value);
        updateUI();
    });
    if (inputSpeed) {
        inputSpeed.addEventListener("input", () => {
            updateUI();
        });
    }

    selectGeometry.addEventListener("change", resetSimulation);
    selectMaterial.addEventListener("change", resetSimulation);

    // Initial setup
    resetSimulation();

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        drawSolid();
    }

    resize();
    window.addEventListener('resize', resize);

    function loop() {
        const tab = document.getElementById('transient-sim');
        if (tab && tab.classList.contains('active')) {
            runLoopStep();
        }
        transientAnimationId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
        cancelAnimationFrame(transientAnimationId);
        window.removeEventListener('resize', resize);
        if (transientChart) {
            transientChart.destroy();
        }
    };
}


function initInsulatedSimulation() {
    const canvas = document.getElementById('insulatedCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const chartCanvas = document.getElementById('insulatedChart');
    if (!chartCanvas) return;
    const chartCtx = chartCanvas.getContext('2d');

    // Controls
    const inputTs = document.getElementById('ins-ts');
    const inputK = document.getElementById('ins-k');
    const inputQg = document.getElementById('ins-qg');
    const inputThick = document.getElementById('ins-thick');
    const selectMode = document.getElementById('ins-mode');
    const playBtn = document.getElementById('ins-play-btn');
    const resetBtn = document.getElementById('ins-reset-btn');

    // Value spans
    const spanTs = document.getElementById('ins-ts-val');
    const spanK = document.getElementById('ins-k-val');
    const spanQg = document.getElementById('ins-qg-val');
    const spanThick = document.getElementById('ins-thick-val');

    // Results
    const lblT0 = document.getElementById('ins-t0-val');
    const lblQfree = document.getElementById('ins-qfree-val');
    const lblAlpha = document.getElementById('ins-alpha-val');
    const lblTime = document.getElementById('ins-time-val');

    // Simulation State
    const M = 11; // 11 nodes
    let T = new Array(M).fill(20.0); // Temperature array
    let simTime = 0;
    let running = false;
    let insChart;

    // Fixed physical constants for the wall material (steel-like base, k varies)
    const rho = 7800; // kg/m^3
    const cp = 460;   // J/kg-K

    function getAlpha(k) {
        return k / (rho * cp);
    }

    // Initialize Chart.js
    function initChart() {
        const bodyStyles = getComputedStyle(document.body);
        const textColor = bodyStyles.getPropertyValue('--chart-text').trim() || '#94a3b8';
        const gridColor = bodyStyles.getPropertyValue('--chart-grid').trim() || 'rgba(255, 255, 255, 0.05)';

        insChart = new Chart(chartCtx, {
            type: 'line',
            data: {
                labels: Array.from({ length: M }, (_, i) => (i / (M - 1)).toFixed(2)),
                datasets: [{
                    label: 'Perfil de Temperatura',
                    data: [],
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    borderWidth: 3,
                    pointRadius: 3,
                    pointBackgroundColor: '#06b6d4',
                    tension: 0.15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: { display: true, text: 'Posición normalizada (x / L)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    y: {
                        title: { display: true, text: 'Temperatura (°C)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor },
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    initChart();

    function updateSlidersText() {
        if (spanTs) spanTs.innerText = inputTs.value;
        if (spanK) spanK.innerText = inputK.value;
        if (spanQg) spanQg.innerText = inputQg.value;
        if (spanThick) spanThick.innerText = parseFloat(inputThick.value).toFixed(2);
    }

    function resetSimulation() {
        const Ts = parseFloat(inputTs.value);
        T.fill(20.0); // Reset to room temp
        T[M - 1] = Ts; // Dirichlet boundary
        simTime = 0;
        updateUI();
    }

    function updateUI() {
        const k = parseFloat(inputK.value);
        const qg = parseFloat(inputQg.value) * 1000; // kW/m^3 to W/m^3
        const L = parseFloat(inputThick.value);
        const alpha = getAlpha(k);

        // Update spans/labels
        updateSlidersText();
        if (lblT0) lblT0.innerText = T[0].toFixed(1);
        if (lblAlpha) lblAlpha.innerText = alpha.toExponential(3);
        if (lblTime) lblTime.innerText = simTime.toFixed(2);

        // Heat flux at the free boundary (x = L)
        // q'' = -k * (T[M-1] - T[M-2]) / dx
        const dx = L / (M - 1);
        const qFree = -k * (T[M - 1] - T[M - 2]) / dx;
        if (lblQfree) lblQfree.innerText = qFree.toFixed(1);

        // Update Chart
        insChart.data.labels = Array.from({ length: M }, (_, i) => (i / (M - 1)).toFixed(2));
        insChart.data.datasets[0].data = [...T];
        insChart.update('none');
    }

    function solveStep() {
        const mode = selectMode.value;
        const Ts = parseFloat(inputTs.value);
        const k = parseFloat(inputK.value);
        const qg = parseFloat(inputQg.value) * 1000; // W/m^3
        const L = parseFloat(inputThick.value);
        const alpha = getAlpha(k);

        if (mode === 'steady') {
            // Steady State analytical solution
            // T(x) = Ts + (q_g * L^2 / (2*k)) * (1 - (x/L)^2)
            for (let i = 0; i < M; i++) {
                const xFrac = i / (M - 1);
                T[i] = Ts + (qg * L * L / (2 * k)) * (1 - xFrac * xFrac);
            }
            simTime = Infinity;
        } else {
            // Transient Finite Difference Solver (Explicit FDM)
            const dx = L / (M - 1);
            // Stability condition: Fo_delta = alpha * dt / dx^2 <= 0.25 (since node 0 has 2*Fo coefficient)
            const dt = 0.2 * dx * dx / alpha;
            const Fo = alpha * dt / (dx * dx);

            const nextT = [...T];

            // Node 0: Insulated (dT/dx = 0)
            nextT[0] = T[0] + 2 * Fo * (T[1] - T[0]) + (qg * dt) / (rho * cp);

            // Internal Nodes
            for (let i = 1; i < M - 1; i++) {
                nextT[i] = T[i] + Fo * (T[i - 1] - 2 * T[i] + T[i + 1]) + (qg * dt) / (rho * cp);
            }

            // Node M-1: Constant Surface Temp (Ts)
            nextT[M - 1] = Ts;

            T = nextT;
            simTime += dt;
        }
    }

    // Particle flow for heat flux animation
    let particles = [];
    class HeatParticle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = 1.0; // Enters from free boundary (right)
            this.y = 0.1 + Math.random() * 0.8;
            this.speed = 0.005 + Math.random() * 0.008;
            this.active = true;
        }
        update() {
            // Move left towards insulated boundary
            this.x -= this.speed;
            if (this.x < 0.15) {
                // Dissipate/stop at the insulation boundary
                this.active = false;
            }
        }
    }

    // Populate particles
    for (let i = 0; i < 30; i++) {
        particles.push(new HeatParticle());
    }

    function render() {
        if (canvas.offsetParent === null) return; // invisible

        const w = canvas.width = canvas.clientWidth;
        const h = canvas.height = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const L = parseFloat(inputThick.value);
        const startX = 140;
        const plateWidth = Math.max(30, (w - 200) * (L / 0.50));
        const endX = startX + plateWidth;
        const centerY = h / 2;
        const plateHeight = 160;

        // 1. Draw Insulation Layer on the Left (x = 0)
        ctx.fillStyle = '#475569';
        ctx.fillRect(startX - 25, centerY - plateHeight / 2 - 10, 25, plateHeight + 20);

        // Draw diagonal stripes on insulation
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        for (let y = centerY - plateHeight / 2 - 5; y <= centerY + plateHeight / 2 + 5; y += 15) {
            ctx.beginPath();
            ctx.moveTo(startX - 25, y);
            ctx.lineTo(startX, y + 10);
            ctx.stroke();
        }

        // Label for insulation
        ctx.fillStyle = '#94a3b8';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText("AISLAMIENTO IDEAL", startX - 30, centerY);
        ctx.fillText("dT/dx = 0 (Adiabático)", startX - 30, centerY + 15);

        // 2. Draw the Plate with dynamic temperature color gradient
        const grad = ctx.createLinearGradient(startX, 0, endX, 0);
        // Interpolate colors based on nodes
        for (let i = 0; i < M; i++) {
            const xFrac = i / (M - 1);
            // Map temperature to HSL color (Blue/Cold = 220, Red/Hot = 0)
            const tVal = Math.max(20, Math.min(200, T[i]));
            const hue = 220 - ((tVal - 20) / 180) * 220;
            grad.addColorStop(xFrac, `hsl(${hue}, 85%, 45%)`);
        }

        ctx.fillStyle = grad;
        ctx.fillRect(startX, centerY - plateHeight / 2, plateWidth, plateHeight);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3;
        ctx.strokeRect(startX, centerY - plateHeight / 2, plateWidth, plateHeight);

        // 3. Draw heat flux arrows / particles
        ctx.globalAlpha = 0.6;
        particles.forEach(p => {
            if (p.active) {
                p.update();
                const px = startX + p.x * plateWidth;
                const py = centerY - plateHeight / 2 + p.y * plateHeight;

                // Color based on local temperature
                const nodeIdx = Math.max(0, Math.min(M - 1, Math.floor(p.x * (M - 1))));
                const tVal = Math.max(20, Math.min(200, T[nodeIdx]));
                const hue = 220 - ((tVal - 20) / 180) * 220;
                ctx.fillStyle = `hsl(${hue}, 85%, 60%)`;

                ctx.beginPath();
                ctx.arc(px, py, 4, 0, Math.PI * 2);
                ctx.fill();
            } else {
                p.reset();
            }
        });
        ctx.globalAlpha = 1.0;

        // 4. Draw Callouts/Labels on boundaries
        ctx.fillStyle = 'white';
        ctx.font = 'bold 11px Inter, sans-serif';
        ctx.textAlign = 'center';

        // T_insulated (Left)
        ctx.fillText(`T_iso = ${T[0].toFixed(1)} °C`, startX + 15, centerY - plateHeight / 2 - 15);
        ctx.fillStyle = '#22d3ee';
        ctx.beginPath();
        ctx.arc(startX, centerY - plateHeight / 2, 5, 0, Math.PI * 2);
        ctx.fill();

        // T_s (Right)
        ctx.fillStyle = 'white';
        ctx.fillText(`T_s = ${T[M - 1].toFixed(1)} °C`, endX - 15, centerY - plateHeight / 2 - 15);
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(endX, centerY - plateHeight / 2, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Listeners
    const inputs = [inputTs, inputK, inputQg, inputThick];
    inputs.forEach(el => {
        if (el) {
            el.addEventListener('input', () => {
                updateUI();
                if (selectMode.value === 'steady') {
                    solveStep();
                    updateUI();
                }
            });
        }
    });

    if (selectMode) {
        selectMode.addEventListener('change', () => {
            if (selectMode.value === 'steady') {
                running = false;
                if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i> Simular';
                solveStep();
                updateUI();
            } else {
                resetSimulation();
            }
        });
    }

    if (playBtn) {
        playBtn.addEventListener('click', () => {
            if (selectMode.value === 'steady') {
                solveStep();
                updateUI();
                return;
            }
            running = !running;
            playBtn.innerHTML = running ? '<i class="fas fa-pause"></i> Pausar' : '<i class="fas fa-play"></i> Simular';
        });
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            running = false;
            if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i> Simular';
            resetSimulation();
        });
    }

    // Animation Loop
    let animId;
    function loop() {
        if (running && selectMode.value === 'transient') {
            for (let s = 0; s < 50; s++) { // run multiple steps per frame for speed
                solveStep();
            }
            updateUI();
        }
        render();
        animId = requestAnimationFrame(loop);
    }
    loop();

    // Initial state
    resetSimulation();
    updateUI();
}


function initMulticapaCustomSimulation() {
    const canvas = document.getElementById('customMultiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animTime = 0;

    const chartCanvas = document.getElementById('customMultiChart');
    if (!chartCanvas) return;
    const chartCtx = chartCanvas.getContext('2d');

    // Controls
    const selectLayersCount = document.getElementById('cm-layers-count');
    const layersContainer = document.getElementById('cm-layers-container');

    // BC Left Controls
    const selectBcLType = document.getElementById('cm-bc-l-type');
    const inputLTemp = document.getElementById('cm-l-temp');
    const inputLH = document.getElementById('cm-l-h');
    const inputLTinf = document.getElementById('cm-l-tinf');
    const inputLEps = document.getElementById('cm-l-eps');
    const inputLTsur = document.getElementById('cm-l-tsur');
    const inputLFlux = document.getElementById('cm-l-flux');

    // BC Right Controls
    const selectBcRType = document.getElementById('cm-bc-r-type');
    const inputRTemp = document.getElementById('cm-r-temp');
    const inputRH = document.getElementById('cm-r-h');
    const inputRTinf = document.getElementById('cm-r-tinf');
    const inputREps = document.getElementById('cm-r-eps');
    const inputRTsur = document.getElementById('cm-r-tsur');
    const inputRFlux = document.getElementById('cm-r-flux');

    // Metrics Spans
    const lblRcond = document.getElementById('cm-rcond-val');
    const lblRtot = document.getElementById('cm-rtot-val');
    const lblQ = document.getElementById('cm-q-val');
    const alertBox = document.getElementById('cm-alert-box');
    const tempTableBody = document.getElementById('cm-temp-table-body');

    // Simulation variables
    let layers = [
        { L: 0.05, k: 50.0 }, // default steel
        { L: 0.08, k: 0.15 }, // default wood/insulation
        { L: 0.04, k: 1.5 }   // default concrete
    ];
    const maxLayers = 10;
    let T = []; // temperatures at interfaces (size N+1)
    let qFlux = 0.0;
    let customChart;

    const sigma = 5.67e-8; // Stefan-Boltzmann W/m^2K^4

    // Initialize Chart.js
    function initChart() {
        const bodyStyles = getComputedStyle(document.body);
        const textColor = bodyStyles.getPropertyValue('--chart-text').trim() || '#94a3b8';
        const gridColor = bodyStyles.getPropertyValue('--chart-grid').trim() || 'rgba(255, 255, 255, 0.05)';

        customChart = new Chart(chartCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Perfil de Temperatura',
                    data: [],
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    borderWidth: 3,
                    pointRadius: 4,
                    pointBackgroundColor: '#ef4444',
                    tension: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'linear',
                        title: { display: true, text: 'Posición x (m)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor }
                    },
                    y: {
                        title: { display: true, text: 'Temperatura (°C)', color: textColor },
                        grid: { color: gridColor },
                        ticks: { color: textColor },
                        suggestedMin: 0,
                        suggestedMax: 200
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }

    initChart();

    // Render configuration fields for layers dynamically
    function renderLayersConfig() {
        const count = parseInt(selectLayersCount.value);
        
        // Adjust layers array size
        while (layers.length < count) {
            layers.push({ L: 0.05, k: 15.0 }); // append defaults
        }
        while (layers.length > count) {
            layers.pop();
        }

        layersContainer.innerHTML = '';

        layers.forEach((layer, idx) => {
            const div = document.createElement('div');
            div.className = 'result-card';
            div.style.padding = '10px';
            div.style.display = 'flex';
            div.style.flexDirection = 'column';
            div.style.gap = '8px';
            div.innerHTML = `
                <div style="font-weight: bold; font-size: 0.8rem; color: var(--accent-cyan); display: flex; justify-content: space-between;">
                    <span>Capa ${idx + 1}</span>
                    <span id="cm-l${idx}-k-badge" style="font-size: 0.7rem; opacity: 0.8;"></span>
                </div>
                <div class="control-group">
                    <label style="font-size: 0.7rem;">Espesor (L${idx+1}): <span id="cm-l${idx}-L-val">${layer.L.toFixed(2)}</span> m</label>
                    <input type="range" class="cm-layer-L" data-idx="${idx}" min="0.01" max="0.30" step="0.01" value="${layer.L}">
                </div>
                <div class="control-group">
                    <label style="font-size: 0.7rem;">Conductividad (k${idx+1}): <span id="cm-l${idx}-k-val">${layer.k.toFixed(1)}</span> W/mK</label>
                    <input type="range" class="cm-layer-k" data-idx="${idx}" min="0.1" max="400" step="0.5" value="${layer.k}">
                </div>
                <div style="font-size: 0.7rem; border-top: 1px dashed rgba(255,255,255,0.08); padding-top: 6px; color: var(--text-secondary); display: flex; justify-content: space-between; align-items: center;">
                    <span>Resistencia (R${idx+1}):</span>
                    <strong><span id="cm-l${idx}-R-val" style="color: var(--accent-orange);">${(layer.L / layer.k).toFixed(4)}</span> K/W</strong>
                </div>
            `;
            layersContainer.appendChild(div);
        });

        // Add event listeners to new elements
        document.querySelectorAll('.cm-layer-L').forEach(input => {
            input.addEventListener('input', (e) => {
                const idx = parseInt(e.target.getAttribute('data-idx'));
                layers[idx].L = parseFloat(e.target.value);
                document.getElementById(`cm-l${idx}-L-val`).innerText = layers[idx].L.toFixed(2);
                document.getElementById(`cm-l${idx}-R-val`).innerText = (layers[idx].L / layers[idx].k).toFixed(4);
                solveSimulation();
            });
        });

        document.querySelectorAll('.cm-layer-k').forEach(input => {
            input.addEventListener('input', (e) => {
                const idx = parseInt(e.target.getAttribute('data-idx'));
                layers[idx].k = parseFloat(e.target.value);
                document.getElementById(`cm-l${idx}-k-val`).innerText = layers[idx].k.toFixed(1);
                document.getElementById(`cm-l${idx}-R-val`).innerText = (layers[idx].L / layers[idx].k).toFixed(4);
                
                // Update material badge text for common values
                const kBadge = document.getElementById(`cm-l${idx}-k-badge`);
                if (kBadge) {
                    if (layers[idx].k < 0.3) kBadge.innerText = "Madera/Aislante";
                    else if (layers[idx].k < 2.0) kBadge.innerText = "Vidrio/Vidrio templado";
                    else if (layers[idx].k > 300) kBadge.innerText = "Cobre/Plata";
                    else if (layers[idx].k > 100) kBadge.innerText = "Aluminio";
                    else if (layers[idx].k > 30) kBadge.innerText = "Acero/Hierro";
                    else kBadge.innerText = "";
                }

                solveSimulation();
            });
        });

        solveSimulation();
    }

    // Toggle BC inputs visibility
    function updateBcVisibility() {
        const typeL = selectBcLType.value;
        document.getElementById('cm-l-temp-group').style.display = typeL === 'temp' ? 'block' : 'none';
        document.getElementById('cm-l-conv-group').style.display = (typeL === 'conv' || typeL === 'comb') ? 'block' : 'none';
        document.getElementById('cm-l-rad-group').style.display = (typeL === 'rad' || typeL === 'comb') ? 'block' : 'none';
        document.getElementById('cm-l-flux-group').style.display = typeL === 'flux' ? 'block' : 'none';

        const typeR = selectBcRType.value;
        document.getElementById('cm-r-temp-group').style.display = typeR === 'temp' ? 'block' : 'none';
        document.getElementById('cm-r-conv-group').style.display = (typeR === 'conv' || typeR === 'comb') ? 'block' : 'none';
        document.getElementById('cm-r-rad-group').style.display = (typeR === 'rad' || typeR === 'comb') ? 'none' : 'none'; // wait, keep matching
        document.getElementById('cm-r-rad-group').style.display = (typeR === 'rad' || typeR === 'comb') ? 'block' : 'none';
        document.getElementById('cm-r-flux-group').style.display = typeR === 'flux' ? 'block' : 'none';

        // Update slider values spans
        const spansMap = [
            ['cm-l-temp-val', inputLTemp], ['cm-l-h-val', inputLH], ['cm-l-tinf-val', inputLTinf],
            ['cm-l-eps-val', inputLEps], ['cm-l-tsur-val', inputLTsur], ['cm-l-flux-val', inputLFlux],
            ['cm-r-temp-val', inputRTemp], ['cm-r-h-val', inputRH], ['cm-r-tinf-val', inputRTinf],
            ['cm-r-eps-val', inputREps], ['cm-r-tsur-val', inputRTsur], ['cm-r-flux-val', inputRFlux]
        ];

        spansMap.forEach(([spanId, input]) => {
            const span = document.getElementById(spanId);
            if (span && input) span.innerText = input.value;
        });

        solveSimulation();
    }

    // Attach listeners to BC selectors and range inputs
    [selectBcLType, selectBcRType].forEach(el => el.addEventListener('change', updateBcVisibility));
    [
        inputLTemp, inputLH, inputLTinf, inputLEps, inputLTsur, inputLFlux,
        inputRTemp, inputRH, inputRTinf, inputREps, inputRTsur, inputRFlux
    ].forEach(el => el.addEventListener('input', updateBcVisibility));

    selectLayersCount.addEventListener('change', renderLayersConfig);

    // Physics solver
    function solveSimulation() {
        const typeL = selectBcLType.value;
        const typeR = selectBcRType.value;
        const N = layers.length;

        // Calc total wall resistance
        let Rcond = 0.0;
        layers.forEach(l => {
            Rcond += l.L / l.k;
        });

        // 1. Check for double flux boundary condition
        if (typeL === 'flux' && typeR === 'flux') {
            const qL = parseFloat(inputLFlux.value);
            const qR = parseFloat(inputRFlux.value);
            if (Math.abs(qL - qR) > 1.0) {
                // Unstable / no steady state
                if (alertBox) alertBox.style.display = 'flex';
                lblRcond.innerText = Rcond.toFixed(4) + ' K/W';
                lblRtot.innerText = '-- K/W';
                lblQ.innerText = '-- W/m²';
                return;
            }
        }
        if (alertBox) alertBox.style.display = 'none';

        // 2. Formulate boundary condition functions
        // T is in Celsius, return heat flux (W/m^2) entering wall
        function getFluxLeft(T0) {
            if (typeL === 'temp') {
                return (parseFloat(inputLTemp.value) - T0) / 1e-4; // large virtual h
            }
            let q = 0.0;
            if (typeL === 'conv' || typeL === 'comb') {
                const hL = parseFloat(inputLH.value);
                const tinfL = parseFloat(inputLTinf.value);
                q += hL * (tinfL - T0);
            }
            if (typeL === 'rad' || typeL === 'comb') {
                const epsL = parseFloat(inputLEps.value);
                const tsurL = parseFloat(inputLTsur.value);
                q += sigma * epsL * (Math.pow(tsurL + 273.15, 4) - Math.pow(T0 + 273.15, 4));
            }
            if (typeL === 'flux') {
                q += parseFloat(inputLFlux.value);
            }
            return q;
        }

        // T is in Celsius, return heat flux (W/m^2) leaving wall
        function getFluxRight(TN) {
            if (typeR === 'temp') {
                return (TN - parseFloat(inputRTemp.value)) / 1e-4;
            }
            let q = 0.0;
            if (typeR === 'conv' || typeR === 'comb') {
                const hR = parseFloat(inputRH.value);
                const tinfR = parseFloat(inputRTinf.value);
                q += hR * (TN - tinfR);
            }
            if (typeR === 'rad' || typeR === 'comb') {
                const epsR = parseFloat(inputREps.value);
                const tsurR = parseFloat(inputRTsur.value);
                q += sigma * epsR * (Math.pow(TN + 273.15, 4) - Math.pow(tsurR + 273.15, 4));
            }
            if (typeR === 'flux') {
                q += parseFloat(inputRFlux.value);
            }
            return q;
        }

        // Derivatives for Newton-Raphson solver
        function getDFluxLeftDT(T0) {
            if (typeL === 'temp') return -1e4;
            let dq = 0.0;
            if (typeL === 'conv' || typeL === 'comb') {
                const hL = parseFloat(inputLH.value);
                dq += -hL;
            }
            if (typeL === 'rad' || typeL === 'comb') {
                const epsL = parseFloat(inputLEps.value);
                dq += -4 * sigma * epsL * Math.pow(T0 + 273.15, 3);
            }
            return dq;
        }

        function getDFluxRightDT(TN) {
            if (typeR === 'temp') return 1e4;
            let dq = 0.0;
            if (typeR === 'conv' || typeR === 'comb') {
                const hR = parseFloat(inputRH.value);
                dq += hR;
            }
            if (typeR === 'rad' || typeR === 'comb') {
                const epsR = parseFloat(inputREps.value);
                dq += 4 * sigma * epsR * Math.pow(TN + 273.15, 3);
            }
            return dq;
        }

        // Iteratively solve for T0 and TN
        let T0_guess = 100.0;
        let TN_guess = 20.0;

        // Initialize guesses based on specifications if possible
        if (typeL === 'temp') T0_guess = parseFloat(inputLTemp.value);
        if (typeR === 'temp') TN_guess = parseFloat(inputRTemp.value);
        if (typeL === 'conv') T0_guess = parseFloat(inputLTinf.value);
        if (typeR === 'conv') TN_guess = parseFloat(inputRTinf.value);

        let converged = false;

        for (let iter = 0; iter < 100; iter++) {
            // q = (T0 - TN) / Rcond
            // f1: getFluxLeft(T0) - (T0 - TN)/Rcond = 0
            // f2: (T0 - TN)/Rcond - getFluxRight(TN) = 0
            const q_cond = (T0_guess - TN_guess) / Rcond;
            const f1 = getFluxLeft(T0_guess) - q_cond;
            const f2 = q_cond - getFluxRight(TN_guess);

            if (Math.abs(f1) < 1e-4 && Math.abs(f2) < 1e-4) {
                converged = true;
                break;
            }

            // Jacobian matrix elements
            // J = [ df1/dT0, df1/dTN ]
            //     [ df2/dT0, df2/dTN ]
            const df1_dT0 = getDFluxLeftDT(T0_guess) - 1.0/Rcond;
            const df1_dTN = 1.0/Rcond;
            const df2_dT0 = 1.0/Rcond;
            const df2_dTN = -1.0/Rcond - getDFluxRightDT(TN_guess);

            const det = df1_dT0 * df2_dTN - df1_dTN * df2_dT0;
            if (Math.abs(det) < 1e-12) break;

            const dT0 = (-f1 * df2_dTN + f2 * df1_dTN) / det;
            const dTN = (f1 * df2_dT0 - f2 * df1_dT0) / det;

            T0_guess += dT0;
            TN_guess += dTN;
        }

        // Compute all interface temperatures
        T = new Array(N + 1);
        T[0] = T0_guess;
        qFlux = (T0_guess - TN_guess) / Rcond;

        for (let i = 1; i <= N; i++) {
            T[i] = T[i - 1] - qFlux * (layers[i - 1].L / layers[i - 1].k);
        }

        // Calculate total resistance including boundary layers (if convection/combined is active)
        let Rtot = Rcond;
        if (typeL === 'conv' || typeL === 'comb') {
            Rtot += 1.0 / parseFloat(inputLH.value);
        }
        if (typeR === 'conv' || typeR === 'comb') {
            Rtot += 1.0 / parseFloat(inputRH.value);
        }

        // Update UI metrics
        lblRcond.innerText = Rcond.toFixed(4) + ' K/W';
        lblRtot.innerText = Rtot.toFixed(4) + ' K/W';
        lblQ.innerText = qFlux.toFixed(1) + ' W/m²';

        // Update Table
        let tableHtml = '';
        let xPos = 0.0;
        T.forEach((tVal, idx) => {
            tableHtml += `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                    <td style="padding: 6px;">Interfase ${idx}</td>
                    <td style="padding: 6px;">${xPos.toFixed(3)} m</td>
                    <td style="padding: 6px; text-align: right; font-weight: bold; color: var(--accent-cyan);">${tVal.toFixed(1)} °C</td>
                </tr>
            `;
            if (idx < N) xPos += layers[idx].L;
        });
        if (tempTableBody) tempTableBody.innerHTML = tableHtml;

        // Update Chart
        const chartLabels = [];
        const chartData = [];
        let curX = 0.0;
        T.forEach((tVal, idx) => {
            chartLabels.push(curX);
            chartData.push(tVal);
            if (idx < N) curX += layers[idx].L;
        });

        customChart.data.datasets[0].data = chartData.map((t, idx) => ({ x: chartLabels[idx], y: t }));
        customChart.options.scales.x.max = curX;
        customChart.update('none');
    }

    // Canvas particle anim and flow diagram
    let particles = [];
    class FlowParticle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = qFlux >= 0 ? 0.0 : 1.0;
            this.y = 0.1 + Math.random() * 0.8;
            this.speed = (0.003 + Math.random() * 0.004) * Math.min(3, Math.max(0.2, Math.abs(qFlux) / 200.0));
        }
        update() {
            if (qFlux >= 0) {
                this.x += this.speed;
                if (this.x > 1.0) this.reset();
            } else {
                this.x -= this.speed;
                if (this.x < 0.0) this.reset();
            }
        }
    }

    // Populate particles
    for (let i = 0; i < 40; i++) {
        particles.push(new FlowParticle());
    }

    function render() {
        if (canvas.offsetParent === null) return; // invisible

        const w = canvas.width = canvas.clientWidth;
        const h = canvas.height = canvas.clientHeight;
        ctx.clearRect(0, 0, w, h);

        const startX = 80;
        const widthMax = w - 160;
        const centerY = h / 2 - 10;
        const heightPlate = 140;

        const N = layers.length;
        const totalThickness = layers.reduce((acc, curr) => acc + curr.L, 0);
        const endX = startX + widthMax;

        // 1. Draw each layer
        let currentX = startX;
        layers.forEach((layer, idx) => {
            const thicknessFrac = layer.L / totalThickness;
            const lWidth = thicknessFrac * widthMax;

            // Gradient representing local temperature
            const hue = Math.max(0, Math.min(220, 220 - (T[idx] - 20) * 1.5));
            ctx.fillStyle = `hsl(${hue}, 70%, 40%)`;
            ctx.fillRect(currentX, centerY - heightPlate/2, lWidth, heightPlate);

            // Layer outline
            ctx.strokeStyle = 'rgba(255,255,255,0.15)';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(currentX, centerY - heightPlate/2, lWidth, heightPlate);

            // Print layer ID inside
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.font = 'bold 9px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(`Capa ${idx+1}`, currentX + lWidth/2, centerY + heightPlate/2 - 10);

            // Draw interface temperature on interface lines
            ctx.fillStyle = 'white';
            ctx.font = 'bold 10px Inter, sans-serif';
            ctx.fillText(`${T[idx].toFixed(1)} °C`, currentX, centerY - heightPlate/2 - 12);

            currentX += lWidth;
        });

        // Draw last interface temperature
        ctx.fillStyle = 'white';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.fillText(`${T[N].toFixed(1)} °C`, currentX, centerY - heightPlate/2 - 12);

        // 2. Boundary Condition Animations (Left & Right)
        const typeL = selectBcLType.value;
        const typeR = selectBcRType.value;

        // Left Boundary Animations (x < startX)
        if (typeL === 'temp') {
            const leftColor = T[0] > 50 ? 'rgba(239, 68, 68, 0.35)' : 'rgba(59, 130, 246, 0.35)';
            const gradL = ctx.createLinearGradient(startX - 20, 0, startX, 0);
            gradL.addColorStop(0, 'rgba(0,0,0,0)');
            gradL.addColorStop(1, leftColor);
            ctx.fillStyle = gradL;
            ctx.fillRect(startX - 20, centerY - heightPlate / 2, 20, heightPlate);
        }
        if (typeL === 'conv' || typeL === 'comb') {
            ctx.strokeStyle = parseFloat(inputLTinf.value) > T[0] ? '#f87171' : '#60a5fa';
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.5;
            for (let offset = -20; offset <= -8; offset += 6) {
                ctx.beginPath();
                for (let y = centerY - heightPlate/2; y <= centerY + heightPlate/2; y += 5) {
                    const x = startX + offset + Math.sin(y * 0.05 + animTime * 3) * 4;
                    if (y === centerY - heightPlate/2) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            ctx.globalAlpha = 1.0;
        }
        if (typeL === 'rad' || typeL === 'comb') {
            const isLIncoming = parseFloat(inputLTsur.value) > T[0];
            ctx.strokeStyle = isLIncoming ? '#fb923c' : '#c084fc';
            ctx.lineWidth = 1.8;
            ctx.globalAlpha = 0.6;
            for (let y = centerY - heightPlate/2 + 15; y <= centerY + heightPlate/2 - 15; y += 28) {
                ctx.beginPath();
                for (let xOff = -45; xOff <= -5; xOff += 5) {
                    const x = startX + xOff;
                    const yOffset = Math.sin(xOff * 0.2 + animTime * 5) * 4;
                    if (xOff === -45) ctx.moveTo(x, y + yOffset);
                    else ctx.lineTo(x, y + yOffset);
                }
                ctx.stroke();
                // Arrowhead
                ctx.fillStyle = isLIncoming ? '#fb923c' : '#c084fc';
                ctx.beginPath();
                if (isLIncoming) {
                    ctx.moveTo(startX - 4, y);
                    ctx.lineTo(startX - 11, y - 4);
                    ctx.lineTo(startX - 11, y + 4);
                } else {
                    ctx.moveTo(startX - 45, y);
                    ctx.lineTo(startX - 38, y - 4);
                    ctx.lineTo(startX - 38, y + 4);
                }
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
        }
        if (typeL === 'flux') {
            const qVal = parseFloat(inputLFlux.value);
            if (Math.abs(qVal) > 1.0) {
                ctx.strokeStyle = qVal > 0 ? '#f87171' : '#60a5fa';
                ctx.lineWidth = 2.5;
                const isLIncomingFlux = qVal > 0;
                for (let y = centerY - heightPlate/2 + 20; y <= centerY + heightPlate/2 - 20; y += 35) {
                    ctx.beginPath();
                    ctx.moveTo(startX - 45, y);
                    ctx.lineTo(startX - 5, y);
                    ctx.stroke();
                    // Arrowhead
                    ctx.fillStyle = qVal > 0 ? '#f87171' : '#60a5fa';
                    ctx.beginPath();
                    if (isLIncomingFlux) {
                        ctx.moveTo(startX - 4, y);
                        ctx.lineTo(startX - 11, y - 4);
                        ctx.lineTo(startX - 11, y + 4);
                    } else {
                        ctx.moveTo(startX - 45, y);
                        ctx.lineTo(startX - 38, y - 4);
                        ctx.lineTo(startX - 38, y + 4);
                    }
                    ctx.fill();
                }
            }
        }

        // Right Boundary Animations (x > endX)
        if (typeR === 'temp') {
            const rightColor = T[N] > 50 ? 'rgba(239, 68, 68, 0.35)' : 'rgba(59, 130, 246, 0.35)';
            const gradR = ctx.createLinearGradient(endX, 0, endX + 20, 0);
            gradR.addColorStop(0, rightColor);
            gradR.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradR;
            ctx.fillRect(endX, centerY - heightPlate / 2, 20, heightPlate);
        }
        if (typeR === 'conv' || typeR === 'comb') {
            ctx.strokeStyle = T[N] > parseFloat(inputRTinf.value) ? '#f87171' : '#60a5fa';
            ctx.lineWidth = 2.5;
            ctx.globalAlpha = 0.5;
            for (let offset = 8; offset <= 20; offset += 6) {
                ctx.beginPath();
                for (let y = centerY - heightPlate/2; y <= centerY + heightPlate/2; y += 5) {
                    const x = endX + offset + Math.sin(y * 0.05 - animTime * 3) * 4;
                    if (y === centerY - heightPlate/2) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            }
            ctx.globalAlpha = 1.0;
        }
        if (typeR === 'rad' || typeR === 'comb') {
            const isRIncoming = parseFloat(inputRTsur.value) > T[N];
            ctx.strokeStyle = isRIncoming ? '#fb923c' : '#c084fc';
            ctx.lineWidth = 1.8;
            ctx.globalAlpha = 0.6;
            for (let y = centerY - heightPlate/2 + 15; y <= centerY + heightPlate/2 - 15; y += 28) {
                ctx.beginPath();
                for (let xOff = 5; xOff <= 45; xOff += 5) {
                    const x = endX + xOff;
                    const yOffset = Math.sin(xOff * 0.2 + animTime * 5) * 4;
                    if (xOff === 5) ctx.moveTo(x, y + yOffset);
                    else ctx.lineTo(x, y + yOffset);
                }
                ctx.stroke();
                // Arrowhead
                ctx.fillStyle = isRIncoming ? '#fb923c' : '#c084fc';
                ctx.beginPath();
                if (isRIncoming) {
                    ctx.moveTo(endX + 4, y);
                    ctx.lineTo(endX + 11, y - 4);
                    ctx.lineTo(endX + 11, y + 4);
                } else {
                    ctx.moveTo(endX + 45, y);
                    ctx.lineTo(endX + 38, y - 4);
                    ctx.lineTo(endX + 38, y + 4);
                }
                ctx.fill();
            }
            ctx.globalAlpha = 1.0;
        }
        if (typeR === 'flux') {
            const qValR = parseFloat(inputRFlux.value);
            if (Math.abs(qValR) > 1.0) {
                ctx.strokeStyle = qValR > 0 ? '#60a5fa' : '#f87171'; // positive leaving = cold-like vs entering = hot-like
                ctx.lineWidth = 2.5;
                const isRIncomingFlux = qValR < 0; // negative flux means entering
                for (let y = centerY - heightPlate/2 + 20; y <= centerY + heightPlate/2 - 20; y += 35) {
                    ctx.beginPath();
                    ctx.moveTo(endX + 5, y);
                    ctx.lineTo(endX + 45, y);
                    ctx.stroke();
                    // Arrowhead
                    ctx.fillStyle = qValR > 0 ? '#60a5fa' : '#f87171';
                    ctx.beginPath();
                    if (isRIncomingFlux) {
                        ctx.moveTo(endX + 4, y);
                        ctx.lineTo(endX + 11, y - 4);
                        ctx.lineTo(endX + 11, y + 4);
                    } else {
                        ctx.moveTo(endX + 45, y);
                        ctx.lineTo(endX + 38, y - 4);
                        ctx.lineTo(endX + 38, y + 4);
                    }
                    ctx.fill();
                }
            }
        }

        // 3. Animate heat flux particles through the wall
        ctx.globalAlpha = 0.7;
        particles.forEach(p => {
            p.update();
            const px = startX + p.x * widthMax;
            const py = centerY - heightPlate/2 + p.y * heightPlate;

            ctx.fillStyle = qFlux >= 0 ? '#ef4444' : '#3b82f6';
            ctx.beginPath();
            ctx.arc(px, py, 3.5, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.globalAlpha = 1.0;

        // 4. Draw heat flux arrow at the bottom
        ctx.strokeStyle = qFlux >= 0 ? '#ef4444' : '#3b82f6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        const arrowY = centerY + heightPlate / 2 + 18;
        if (qFlux >= 0) {
            ctx.moveTo(startX + 10, arrowY);
            ctx.lineTo(startX + widthMax - 10, arrowY);
            // arrow head
            ctx.lineTo(startX + widthMax - 20, arrowY - 5);
            ctx.moveTo(startX + widthMax - 10, arrowY);
            ctx.lineTo(startX + widthMax - 20, arrowY + 5);
        } else {
            ctx.moveTo(startX + widthMax - 10, arrowY);
            ctx.lineTo(startX + 10, arrowY);
            // arrow head
            ctx.lineTo(startX + 20, arrowY - 5);
            ctx.moveTo(startX + 10, arrowY);
            ctx.lineTo(startX + 20, arrowY + 5);
        }
        ctx.stroke();
    }

    // Loop
    let animId;
    function animLoop() {
        animTime += 0.05;
        render();
        animId = requestAnimationFrame(animLoop);
    }
    animLoop();

    // Initial populate
    renderLayersConfig();
    updateBcVisibility();
}

// ============================================================
// LAB 28: MOTOR DE CARNOT — Sadi Carnot (1824)
// ============================================================
function initCarnotSimulation() {
    const state = {
        TH: 800,   // K - hot reservoir
        TC: 300,   // K - cold reservoir
        QH: 1000,  // kJ - heat absorbed from hot source
        animPhase: 0,
        animId: null
    };

    // ── DOM refs ──────────────────────────────────────────────
    const slTH  = document.getElementById('carnot-th');
    const slTC  = document.getElementById('carnot-tc');
    const slQH  = document.getElementById('carnot-qh');
    const spTH  = document.getElementById('carnot-th-val');
    const spTC  = document.getElementById('carnot-tc-val');
    const spQH  = document.getElementById('carnot-qh-val');
    const spEta = document.getElementById('carnot-eta-val');
    const spW   = document.getElementById('carnot-w-val');
    const spQC  = document.getElementById('carnot-qc-val');
    const spCOP = document.getElementById('carnot-cop-val');
    const spCOPHP = document.getElementById('carnot-cophp-val');
    const etaBar  = document.getElementById('carnot-eta-bar');
    const etaBarLabel = document.getElementById('carnot-eta-bar-label');

    const pvCanvas  = document.getElementById('carnot-pv-canvas');
    const engCanvas = document.getElementById('carnot-engine-canvas');
    const tsCanvas  = document.getElementById('carnot-ts-canvas');

    if (!pvCanvas || !engCanvas || !tsCanvas) return;

    const pvCtx  = pvCanvas.getContext('2d');
    const engCtx = engCanvas.getContext('2d');
    const tsCtx  = tsCanvas.getContext('2d');

    // ── Carnot cycle physics ──────────────────────────────────
    function solve() {
        let TH = Math.max(state.TH, state.TC + 10);
        let TC = state.TC;
        let QH = state.QH;
        const eta  = 1 - TC / TH;
        const QC   = QH * (TC / TH);
        const W    = QH - QC;
        const COP_R  = TC / (TH - TC);
        const COP_HP = TH / (TH - TC);
        return { TH, TC, QH, eta, QC, W, COP_R, COP_HP };
    }

    // ── Update result DOM ─────────────────────────────────────
    function updateResults() {
        const r = solve();
        spEta.textContent = (r.eta * 100).toFixed(1) + '%';
        spW.textContent   = r.W.toFixed(1);
        spQC.textContent  = r.QC.toFixed(1);
        spCOP.textContent = r.COP_R.toFixed(2);
        spCOPHP.textContent = r.COP_HP.toFixed(2);

        const pct = Math.min(r.eta * 100, 100);
        etaBar.style.width = pct + '%';
        etaBarLabel.textContent = (r.eta * 100).toFixed(1) + '%';
    }

    // ── PV Diagram ────────────────────────────────────────────
    // Carnot cycle in PV space using ideal gas:
    // State a: (Va, TH)  → State b: (Vb, TH)  isothermal expansion
    // State b: (Vb, TH)  → State c: (Vc, TC)  adiabatic expansion
    // State c: (Vc, TC)  → State d: (Vd, TC)  isothermal compression
    // State d: (Vd, TC)  → State a: (Va, TH)  adiabatic compression
    // We use dimensionless units for the diagram.

    function computeCyclePoints(TH, TC) {
        const gamma = 1.4;
        // Choose Va=1, Vb=3 (isothermal expansion ratio = 3)
        const Va = 1, Vb = 3;
        // Adiabatic: T*V^(gamma-1) = const  => Vc = Vb*(TH/TC)^(1/(gamma-1))
        const Vc = Vb * Math.pow(TH / TC, 1 / (gamma - 1));
        // Isothermal at TC: Vd = Va*(TH/TC)^(1/(gamma-1))  [from adiabatic d→a]
        const Vd = Va * Math.pow(TH / TC, 1 / (gamma - 1));
        // Pressures P = n*R*T/V  (use n*R=1)
        const Pa = TH / Va, Pb = TH / Vb, Pc = TC / Vc, Pd = TC / Vd;
        return { Va, Vb, Vc, Vd, Pa, Pb, Pc, Pd };
    }

    function curvePoints(V1, P1, V2, P2, type, TH_or_TC, steps) {
        const pts = [];
        for (let i = 0; i <= steps; i++) {
            const t = i / steps;
            if (type === 'iso') {
                // Isothermal: P*V = const => P = T/V
                const V = V1 + (V2 - V1) * t;
                pts.push({ V, P: TH_or_TC / V });
            } else {
                // Adiabatic: P*V^gamma = const
                const gamma = 1.4;
                const V = V1 + (V2 - V1) * t;
                const C = P1 * Math.pow(V1, gamma);
                pts.push({ V, P: C / Math.pow(V, gamma) });
            }
        }
        return pts;
    }

    function drawPV(phase) {
        const W = pvCanvas.width, H = pvCanvas.height;
        pvCtx.clearRect(0, 0, W, H);

        // Background
        pvCtx.fillStyle = '#0f1117';
        pvCtx.fillRect(0, 0, W, H);

        const r = solve();
        const cp = computeCyclePoints(r.TH, r.TC);
        const { Va, Vb, Vc, Vd, Pa, Pb, Pc, Pd } = cp;

        // Canvas margins
        const ml = 55, mr = 25, mt = 25, mb = 50;
        const cw = W - ml - mr, ch = H - mt - mb;

        const Vmin = Va * 0.85, Vmax = Vc * 1.12;
        const Pmin = Pc * 0.78, Pmax = Pa * 1.18;

        function toX(V) { return ml + (V - Vmin) / (Vmax - Vmin) * cw; }
        function toY(P) { return mt + ch - (P - Pmin) / (Pmax - Pmin) * ch; }

        // Grid
        pvCtx.strokeStyle = 'rgba(255,255,255,0.06)';
        pvCtx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const x = ml + cw * i / 5;
            pvCtx.beginPath(); pvCtx.moveTo(x, mt); pvCtx.lineTo(x, mt + ch); pvCtx.stroke();
            const y = mt + ch * i / 5;
            pvCtx.beginPath(); pvCtx.moveTo(ml, y); pvCtx.lineTo(ml + cw, y); pvCtx.stroke();
        }

        // Axes
        pvCtx.strokeStyle = 'rgba(255,255,255,0.4)';
        pvCtx.lineWidth = 1.5;
        pvCtx.beginPath(); pvCtx.moveTo(ml, mt); pvCtx.lineTo(ml, mt + ch); pvCtx.lineTo(ml + cw, mt + ch); pvCtx.stroke();

        // Axis labels
        pvCtx.fillStyle = 'rgba(255,255,255,0.55)';
        pvCtx.font = '12px Inter, sans-serif';
        pvCtx.textAlign = 'center';
        pvCtx.fillText('Volumen V →', ml + cw / 2, H - 8);
        pvCtx.save();
        pvCtx.translate(14, mt + ch / 2);
        pvCtx.rotate(-Math.PI / 2);
        pvCtx.fillText('Presión P →', 0, 0);
        pvCtx.restore();

        // Build curve points
        const ab = curvePoints(Va, Pa, Vb, Pb, 'iso', r.TH, 60);
        const bc = curvePoints(Vb, Pb, Vc, Pc, 'adi', null, 60);
        const cd = curvePoints(Vc, Pc, Vd, Pd, 'iso', r.TC, 60);
        const da = curvePoints(Vd, Pd, Va, Pa, 'adi', null, 60);

        const segments = [
            { pts: ab, color: '#ef4444', label: 'a→b', dir: 1 },
            { pts: bc, color: '#f97316', label: 'b→c', dir: 1 },
            { pts: cd, color: '#3b82f6', label: 'c→d', dir: 1 },
            { pts: da, color: '#22d3ee', label: 'd→a', dir: 1 }
        ];

        // Fill cycle area
        pvCtx.beginPath();
        pvCtx.moveTo(toX(ab[0].V), toY(ab[0].P));
        [...ab, ...bc, ...cd, ...da].forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        pvCtx.closePath();
        pvCtx.fillStyle = 'rgba(249,115,22,0.08)';
        pvCtx.fill();

        // Draw each segment
        segments.forEach(seg => {
            pvCtx.strokeStyle = seg.color;
            pvCtx.lineWidth = 2.5;
            pvCtx.beginPath();
            pvCtx.moveTo(toX(seg.pts[0].V), toY(seg.pts[0].P));
            seg.pts.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
            pvCtx.stroke();

            // Arrow at midpoint
            const mid = Math.floor(seg.pts.length / 2);
            const p0 = seg.pts[mid - 1], p1 = seg.pts[mid + 1];
            const ax = toX(p1.V) - toX(p0.V), ay = toY(p1.P) - toY(p0.P);
            const len = Math.sqrt(ax * ax + ay * ay) || 1;
            const mx = toX(seg.pts[mid].V), my = toY(seg.pts[mid].P);
            pvCtx.fillStyle = seg.color;
            pvCtx.beginPath();
            pvCtx.moveTo(mx + ax / len * 8, my + ay / len * 8);
            pvCtx.lineTo(mx - ay / len * 5, my + ax / len * 5);
            pvCtx.lineTo(mx + ay / len * 5, my - ax / len * 5);
            pvCtx.closePath();
            pvCtx.fill();
        });

        // State point labels
        const stateLabels = [
            { V: Va, P: Pa, lbl: 'a', dx: -12, dy: -8 },
            { V: Vb, P: Pb, lbl: 'b', dx: 8,  dy: -8 },
            { V: Vc, P: Pc, lbl: 'c', dx: 8,  dy: 12 },
            { V: Vd, P: Pd, lbl: 'd', dx: -14, dy: 12 }
        ];
        stateLabels.forEach(s => {
            pvCtx.beginPath();
            pvCtx.arc(toX(s.V), toY(s.P), 4, 0, Math.PI * 2);
            pvCtx.fillStyle = '#ffffff';
            pvCtx.fill();
            pvCtx.fillStyle = 'rgba(255,255,255,0.9)';
            pvCtx.font = 'bold 13px Inter, sans-serif';
            pvCtx.textAlign = 'center';
            pvCtx.fillText(s.lbl, toX(s.V) + s.dx, toY(s.P) + s.dy);
        });

        // Isothermal temperature lines label
        pvCtx.fillStyle = 'rgba(239,68,68,0.75)';
        pvCtx.font = '11px Inter, sans-serif';
        pvCtx.textAlign = 'left';
        pvCtx.fillText('T_H = ' + r.TH + ' K', toX(Va) + 6, toY(Pa) + 18);
        pvCtx.fillStyle = 'rgba(59,130,246,0.75)';
        pvCtx.fillText('T_C = ' + r.TC + ' K', toX(Vc) - 60, toY(Pc) - 8);

        // Animated point
        const totalPts = ab.length + bc.length + cd.length + da.length;
        const animIdx = Math.floor(phase * totalPts) % totalPts;
        const allPts = [...ab, ...bc, ...cd, ...da];
        const segColors = [
            ...Array(ab.length).fill('#ef4444'),
            ...Array(bc.length).fill('#f97316'),
            ...Array(cd.length).fill('#3b82f6'),
            ...Array(da.length).fill('#22d3ee')
        ];
        const apt = allPts[animIdx];
        pvCtx.beginPath();
        pvCtx.arc(toX(apt.V), toY(apt.P), 7, 0, Math.PI * 2);
        pvCtx.fillStyle = segColors[animIdx];
        pvCtx.shadowColor = segColors[animIdx];
        pvCtx.shadowBlur = 14;
        pvCtx.fill();
        pvCtx.shadowBlur = 0;
    }

    // ── Engine Schematic ──────────────────────────────────────
    function drawEngine(phase) {
        const W = engCanvas.width, H = engCanvas.height;
        engCtx.clearRect(0, 0, W, H);
        engCtx.fillStyle = '#0f1117';
        engCtx.fillRect(0, 0, W, H);

        const r = solve();
        const cx = W / 2;

        // ── Carnot phase segmentation (0 to 1) ─────────────────
        // phase: 0 -> 0.25 : Expansión Isotérmica (T_H)
        //        0.25 -> 0.5 : Expansión Adiabática (T_H -> T_C)
        //        0.5 -> 0.75 : Compresión Isotérmica (T_C)
        //        0.75 -> 1.0 : Compresión Adiabática (T_C -> T_H)
        let processName = '';
        let gasColor = '';
        let baseType = ''; // 'hot', 'cold', or 'adiabatic'
        let pistonYOffset = 0; // Displacement of the piston
        let flowDirection = 0; // 1 = heat entering, -1 = heat leaving, 0 = isolated

        if (phase < 0.25) {
            const t = phase / 0.25;
            processName = '1. Expansión Isotérmica (a→b)';
            gasColor = 'rgba(239, 68, 68, 0.35)'; // Red gas
            baseType = 'hot';
            pistonYOffset = - (t * 30); // Moving up
            flowDirection = 1; // Heat in
        } else if (phase < 0.5) {
            const t = (phase - 0.25) / 0.25;
            processName = '2. Expansión Adiabática (b→c)';
            gasColor = `rgba(${Math.round(239 - (239 - 59) * t)}, ${Math.round(68 + (130 - 68) * t)}, ${Math.round(68 + (246 - 68) * t)}, 0.25)`; // Red to Blue transition
            baseType = 'adiabatic';
            pistonYOffset = -30 - (t * 20); // Moving up further
            flowDirection = 0; // Isolated
        } else if (phase < 0.75) {
            const t = (phase - 0.5) / 0.25;
            processName = '3. Compresión Isotérmica (c→d)';
            gasColor = 'rgba(59, 130, 246, 0.3)'; // Blue gas
            baseType = 'cold';
            pistonYOffset = -50 + (t * 30); // Moving down
            flowDirection = -1; // Heat out
        } else {
            const t = (phase - 0.75) / 0.25;
            processName = '4. Compresión Adiabática (d→a)';
            gasColor = `rgba(${Math.round(59 + (239 - 59) * t)}, ${Math.round(130 - (130 - 68) * t)}, ${Math.round(246 - (246 - 68) * t)}, 0.28)`; // Blue to Red transition
            baseType = 'adiabatic';
            pistonYOffset = -20 + (t * 20); // Moving down further
            flowDirection = 0; // Isolated
        }

        // Draw reservoirs or insulation block at the base
        const cyBase = H - 150;
        
        // ── Draw base contact ──────────────────────────────────
        if (baseType === 'hot') {
            // Hot reservoir base
            const hotGrad = engCtx.createLinearGradient(30, cyBase, W - 30, H - 20);
            hotGrad.addColorStop(0, '#7f1d1d');
            hotGrad.addColorStop(1, '#ef4444');
            engCtx.fillStyle = hotGrad;
            engCtx.beginPath();
            engCtx.roundRect(30, cyBase + 20, W - 60, H - cyBase - 40, 10);
            engCtx.fill();
            
            engCtx.fillStyle = '#ffffff';
            engCtx.font = 'bold 12px Inter';
            engCtx.fillText('🔥 Foco Caliente (' + r.TH + ' K)', cx, cyBase + 50);
        } else if (baseType === 'cold') {
            // Cold reservoir base
            const coldGrad = engCtx.createLinearGradient(30, cyBase, W - 30, H - 20);
            coldGrad.addColorStop(0, '#1e3a5f');
            coldGrad.addColorStop(1, '#3b82f6');
            engCtx.fillStyle = coldGrad;
            engCtx.beginPath();
            engCtx.roundRect(30, cyBase + 20, W - 60, H - cyBase - 40, 10);
            engCtx.fill();
            
            engCtx.fillStyle = '#ffffff';
            engCtx.font = 'bold 12px Inter';
            engCtx.fillText('❄️ Foco Frío (' + r.TC + ' K)', cx, cyBase + 50);
        } else {
            // Adiabatic support (Insulated base)
            engCtx.fillStyle = '#374151';
            engCtx.beginPath();
            engCtx.roundRect(30, cyBase + 20, W - 60, H - cyBase - 40, 10);
            engCtx.fill();
            engCtx.strokeStyle = '#4b5563';
            engCtx.stroke();
            
            engCtx.fillStyle = '#9ca3af';
            engCtx.font = 'bold 11px Inter';
            engCtx.fillText('🛑 Soporte Adiabático (Aislado)', cx, cyBase + 50);
        }

        // ── Draw Cylinder ──────────────────────────────────────
        const cylW = 100;
        const cylH = 150;
        const cylX = cx - cylW / 2;
        const cylY = 80;

        // Inside gas area
        engCtx.fillStyle = gasColor;
        engCtx.fillRect(cylX + 5, cylY + 30 - pistonYOffset, cylW - 10, cylH - 30 + pistonYOffset);

        // Cylinder walls (left, right, bottom)
        engCtx.strokeStyle = '#e5e7eb';
        engCtx.lineWidth = 4;
        engCtx.beginPath();
        // Left wall
        engCtx.moveTo(cylX, cylY);
        engCtx.lineTo(cylX, cylY + cylH);
        // Bottom wall (thin thermal window or thick insulated window)
        engCtx.lineTo(cylX + cylW, cylY + cylH);
        // Right wall
        engCtx.lineTo(cylX + cylW, cylY);
        engCtx.stroke();

        // Base thermal window (indicates heat conductivity)
        engCtx.lineWidth = 4;
        engCtx.strokeStyle = (baseType === 'adiabatic') ? '#4b5563' : '#fbbf24';
        engCtx.beginPath();
        engCtx.moveTo(cylX + 4, cylY + cylH);
        engCtx.lineTo(cylX + cylW - 4, cylY + cylH);
        engCtx.stroke();

        // ── Draw Piston ────────────────────────────────────────
        const pistonHeight = 15;
        const pistonY = cylY + 15 - pistonYOffset;
        
        // Piston block
        engCtx.fillStyle = '#9ca3af';
        engCtx.beginPath();
        engCtx.fillRect(cylX + 2, pistonY, cylW - 4, pistonHeight);
        
        // Piston rod (vástago)
        engCtx.fillStyle = '#6b7280';
        engCtx.fillRect(cx - 6, 25, 12, pistonY - 25);

        // ── Draw Heat Flow arrows (Q) ───────────────────────────
        if (flowDirection === 1) { // Entering heat
            const pulse = Math.sin(Date.now() * 0.01) * 4;
            engCtx.strokeStyle = '#f87171';
            engCtx.lineWidth = 3;
            // Draw arrows going up through the base
            const arrY = cylY + cylH + 10;
            engCtx.beginPath();
            engCtx.moveTo(cx, arrY + 15);
            engCtx.lineTo(cx, arrY - 5 + pulse);
            engCtx.stroke();
            
            engCtx.fillStyle = '#f87171';
            engCtx.beginPath();
            engCtx.moveTo(cx, arrY - 7 + pulse);
            engCtx.lineTo(cx - 5, arrY + pulse);
            engCtx.lineTo(cx + 5, arrY + pulse);
            engCtx.closePath();
            engCtx.fill();

            engCtx.fillStyle = '#ef4444';
            engCtx.font = 'bold 11px Inter';
            engCtx.fillText('QH Calor Entrando', cx - 60, arrY + 5);
        } else if (flowDirection === -1) { // Leaving heat
            const pulse = Math.sin(Date.now() * 0.01) * 4;
            engCtx.strokeStyle = '#60a5fa';
            engCtx.lineWidth = 3;
            const arrY = cylY + cylH + 10;
            engCtx.beginPath();
            engCtx.moveTo(cx, arrY - 5);
            engCtx.lineTo(cx, arrY + 15 + pulse);
            engCtx.stroke();
            
            engCtx.fillStyle = '#60a5fa';
            engCtx.beginPath();
            engCtx.moveTo(cx, arrY + 17 + pulse);
            engCtx.lineTo(cx - 5, arrY + 10 + pulse);
            engCtx.lineTo(cx + 5, arrY + 10 + pulse);
            engCtx.closePath();
            engCtx.fill();

            engCtx.fillStyle = '#3b82f6';
            engCtx.font = 'bold 11px Inter';
            engCtx.fillText('QC Calor Saliendo', cx - 60, arrY + 5);
        }

        // ── Text Overlays ──────────────────────────────────────
        // Phase title
        engCtx.fillStyle = '#f97316';
        engCtx.font = 'bold 12px Inter';
        engCtx.textAlign = 'center';
        engCtx.fillText(processName, cx, 18);

        // Efficiency inside the base info area
        engCtx.fillStyle = 'rgba(255,255,255,0.7)';
        engCtx.font = '10px Inter';
        engCtx.fillText('Eficiencia de Carnot: ' + (r.eta * 100).toFixed(1) + '%', cx, H - 15);
    }

    // ── T-S Diagram — fully dynamic axes + animated point ──────
    function drawTS(phase) {
        const W = tsCanvas.width, H = tsCanvas.height;
        tsCtx.clearRect(0, 0, W, H);
        tsCtx.fillStyle = '#0f1117';
        tsCtx.fillRect(0, 0, W, H);

        const r = solve();

        // ── Physics: real ΔS and ΔT ──────────────────────────────
        // Isothermal expansion at TH: ΔS = QH / TH  (kJ/K)
        // Isothermal compression at TC: -QC/TC = -QH/TH (reversible, same magnitude)
        const deltaS = r.QH / r.TH;   // kJ/K
        const deltaT = r.TH - r.TC;   // K

        // S axis: starts at a round reference value, spans ΔS with padding
        const S_ref = 1.0;            // fixed reference (state a/d)
        const S_low = S_ref;
        const S_high = S_ref + deltaS;
        const S_pad  = deltaS * 0.35;
        const Smin = S_low  - S_pad;
        const Smax = S_high + S_pad;

        // T axis: dynamic, spans from 0 (or TC-pad) to TH+pad
        const T_pad = deltaT * 0.28;
        const Tmin = Math.max(0, r.TC - T_pad);
        const Tmax = r.TH + T_pad;

        // Canvas margins (wider left for T axis labels)
        const ml = 72, mr = 20, mt = 26, mb = 44;
        const cw = W - ml - mr, ch = H - mt - mb;

        function toX(S) { return ml + (S - Smin) / (Smax - Smin) * cw; }
        function toY(T) { return mt + ch - (T - Tmin) / (Tmax - Tmin) * ch; }

        // ── T-axis smart ticks ────────────────────────────────────
        // Pick a nice step size that fits roughly 4-6 ticks
        function niceStep(range, targetCount) {
            const rough = range / targetCount;
            const mag = Math.pow(10, Math.floor(Math.log10(rough)));
            const norm = rough / mag;
            let step = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
            return step * mag;
        }
        const Tstep = niceStep(Tmax - Tmin, 5);
        const Tstart = Math.ceil(Tmin / Tstep) * Tstep;

        // Grid lines
        tsCtx.strokeStyle = 'rgba(255,255,255,0.05)';
        tsCtx.lineWidth = 1;
        for (let T = Tstart; T <= Tmax; T += Tstep) {
            const y = toY(T);
            tsCtx.beginPath(); tsCtx.moveTo(ml, y); tsCtx.lineTo(ml + cw, y); tsCtx.stroke();
        }
        // S grid lines (3 divisions)
        for (let i = 0; i <= 4; i++) {
            const x = ml + cw * i / 4;
            tsCtx.beginPath(); tsCtx.moveTo(x, mt); tsCtx.lineTo(x, mt + ch); tsCtx.stroke();
        }

        // ── Axes ──────────────────────────────────────────────────
        tsCtx.strokeStyle = 'rgba(255,255,255,0.45)';
        tsCtx.lineWidth = 1.5;
        tsCtx.beginPath();
        tsCtx.moveTo(ml, mt); tsCtx.lineTo(ml, mt + ch); tsCtx.lineTo(ml + cw, mt + ch);
        tsCtx.stroke();

        // ── T axis ticks + values ─────────────────────────────────
        tsCtx.font = '10px Inter, sans-serif';
        tsCtx.textAlign = 'right';
        for (let T = Tstart; T <= Tmax + 0.001; T += Tstep) {
            const y = toY(T);
            if (y < mt - 2 || y > mt + ch + 2) continue;
            // Tick mark
            tsCtx.strokeStyle = 'rgba(255,255,255,0.35)';
            tsCtx.lineWidth = 1;
            tsCtx.beginPath(); tsCtx.moveTo(ml - 4, y); tsCtx.lineTo(ml, y); tsCtx.stroke();
            // Value label
            tsCtx.fillStyle = 'rgba(255,255,255,0.55)';
            tsCtx.fillText(Math.round(T) + ' K', ml - 7, y + 4);
        }

        // ── S axis ticks + values ─────────────────────────────────
        // Show S_low and S_high (state a/d and b/c)
        tsCtx.textAlign = 'center';
        tsCtx.font = '10px Inter';
        const sTickPositions = [S_low, S_high];
        const sTickLabels = [S_low.toFixed(2), (S_high).toFixed(2)];
        sTickPositions.forEach((S, i) => {
            const x = toX(S);
            tsCtx.strokeStyle = 'rgba(255,255,255,0.35)';
            tsCtx.lineWidth = 1;
            tsCtx.beginPath(); tsCtx.moveTo(x, mt + ch); tsCtx.lineTo(x, mt + ch + 4); tsCtx.stroke();
            tsCtx.fillStyle = 'rgba(255,255,255,0.55)';
            tsCtx.fillText(sTickLabels[i] + ' kJ/K', x, mt + ch + 16);
        });

        // ── Axis titles ───────────────────────────────────────────
        tsCtx.fillStyle = 'rgba(255,255,255,0.5)';
        tsCtx.font = '11px Inter, sans-serif';
        tsCtx.textAlign = 'center';
        tsCtx.fillText('Entropía S (kJ/K)', ml + cw / 2, H - 4);
        tsCtx.save();
        tsCtx.translate(12, mt + ch / 2);
        tsCtx.rotate(-Math.PI / 2);
        tsCtx.fillText('Temperatura T (K)', 0, 0);
        tsCtx.restore();

        // ── Rectangle corners ─────────────────────────────────────
        const x1 = toX(S_low), x2 = toX(S_high);
        const yH = toY(r.TH), yC = toY(r.TC);

        // Fill work area — gradient red→blue
        const fillGrad = tsCtx.createLinearGradient(x1, yH, x1, yC);
        fillGrad.addColorStop(0, 'rgba(239,68,68,0.18)');
        fillGrad.addColorStop(1, 'rgba(59,130,246,0.10)');
        tsCtx.fillStyle = fillGrad;
        tsCtx.fillRect(x1, yH, x2 - x1, yC - yH);

        // ── Edges with direction arrows ───────────────────────────
        const edges = [
            { x1: x1, y1: yH, x2: x2, y2: yH, color: '#ef4444' },  // a→b
            { x1: x2, y1: yH, x2: x2, y2: yC, color: '#f97316' },  // b→c
            { x1: x2, y1: yC, x2: x1, y2: yC, color: '#3b82f6' },  // c→d
            { x1: x1, y1: yC, x2: x1, y2: yH, color: '#22d3ee' }   // d→a
        ];
        edges.forEach(e => {
            tsCtx.strokeStyle = e.color;
            tsCtx.lineWidth = 2.5;
            tsCtx.beginPath(); tsCtx.moveTo(e.x1, e.y1); tsCtx.lineTo(e.x2, e.y2); tsCtx.stroke();
            const mx = (e.x1 + e.x2) / 2, my = (e.y1 + e.y2) / 2;
            const dx = e.x2 - e.x1, dy = e.y2 - e.y1;
            const len = Math.sqrt(dx*dx + dy*dy) || 1;
            const ux = dx/len, uy = dy/len;
            tsCtx.fillStyle = e.color;
            tsCtx.beginPath();
            tsCtx.moveTo(mx + ux*8, my + uy*8);
            tsCtx.lineTo(mx - uy*5, my + ux*5);
            tsCtx.lineTo(mx + uy*5, my - ux*5);
            tsCtx.closePath(); tsCtx.fill();
        });

        // ── State point labels (a, b, c, d) ──────────────────────
        const corners = [
            { x: x1, y: yH, lbl: 'a', dx: -10, dy: -8 },
            { x: x2, y: yH, lbl: 'b', dx:  10, dy: -8 },
            { x: x2, y: yC, lbl: 'c', dx:  10, dy: 12 },
            { x: x1, y: yC, lbl: 'd', dx: -10, dy: 12 }
        ];
        corners.forEach(c => {
            tsCtx.beginPath(); tsCtx.arc(c.x, c.y, 4, 0, Math.PI*2);
            tsCtx.fillStyle = '#ffffff'; tsCtx.fill();
            tsCtx.fillStyle = 'rgba(255,255,255,0.88)';
            tsCtx.font = 'bold 11px Inter';
            tsCtx.textAlign = 'center';
            tsCtx.fillText(c.lbl, c.x + c.dx, c.y + c.dy);
        });

        // ── ΔT bracket on Y axis (left of rectangle) ─────────────
        const brX = ml - 38;
        tsCtx.strokeStyle = 'rgba(250,200,80,0.7)';
        tsCtx.lineWidth = 1.5;
        tsCtx.beginPath();
        tsCtx.moveTo(brX + 6, yH); tsCtx.lineTo(brX, yH);
        tsCtx.lineTo(brX, yC);
        tsCtx.lineTo(brX + 6, yC);
        tsCtx.stroke();
        // ΔT label
        const brMid = (yH + yC) / 2;
        tsCtx.fillStyle = 'rgba(250,200,80,0.9)';
        tsCtx.font = 'bold 10px Inter';
        tsCtx.textAlign = 'right';
        tsCtx.fillText('ΔT=' + deltaT.toFixed(0) + ' K', brX - 2, brMid + 4);

        // ── ΔS bracket on X axis (below rectangle) ───────────────
        const brY = mt + ch + 22;
        tsCtx.strokeStyle = 'rgba(34,211,238,0.7)';
        tsCtx.lineWidth = 1.5;
        tsCtx.beginPath();
        tsCtx.moveTo(x1, brY - 5); tsCtx.lineTo(x1, brY);
        tsCtx.lineTo(x2, brY);
        tsCtx.lineTo(x2, brY - 5);
        tsCtx.stroke();
        // ΔS label
        tsCtx.fillStyle = 'rgba(34,211,238,0.9)';
        tsCtx.font = 'bold 10px Inter';
        tsCtx.textAlign = 'center';
        tsCtx.fillText('ΔS = ' + deltaS.toFixed(3) + ' kJ/K', (x1 + x2) / 2, brY + 12);

        // ── Info labels inside the rectangle ─────────────────────
        const midX = (x1 + x2) / 2, midY = (yH + yC) / 2;
        if (Math.abs(yC - yH) > 30) {
            tsCtx.fillStyle = 'rgba(249,115,22,0.92)';
            tsCtx.font = 'bold 12px Inter';
            tsCtx.textAlign = 'center';
            tsCtx.fillText('W = ' + r.W.toFixed(1) + ' kJ', midX, midY - 8);
            tsCtx.fillStyle = 'rgba(255,255,255,0.5)';
            tsCtx.font = '10px Inter';
            tsCtx.fillText('η = ' + (r.eta * 100).toFixed(1) + '%', midX, midY + 10);
        }

        // TH / TC horizontal dashed guide lines
        [{ T: r.TH, color: 'rgba(239,68,68,0.4)', lbl: 'T_H=' + r.TH + ' K' },
         { T: r.TC, color: 'rgba(59,130,246,0.4)', lbl: 'T_C=' + r.TC + ' K' }]
        .forEach(item => {
            const y = toY(item.T);
            tsCtx.strokeStyle = item.color;
            tsCtx.setLineDash([4, 5]);
            tsCtx.lineWidth = 1;
            tsCtx.beginPath(); tsCtx.moveTo(ml, y); tsCtx.lineTo(x1, y); tsCtx.stroke();
            tsCtx.setLineDash([]);
        });

        // ── Animated glowing point ────────────────────────────────
        // phase [0,1] maps to the 4 edges of the rectangle
        const ph = (phase !== undefined) ? phase : 0;
        let ptX, ptY, ptColor;
        if (ph < 0.25) {
            const t = ph / 0.25;
            ptX = x1 + (x2 - x1) * t;  ptY = yH;  ptColor = '#ef4444';
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            ptX = x2;  ptY = yH + (yC - yH) * t;  ptColor = '#f97316';
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            ptX = x2 + (x1 - x2) * t;  ptY = yC;  ptColor = '#3b82f6';
        } else {
            const t = (ph - 0.75) / 0.25;
            ptX = x1;  ptY = yC + (yH - yC) * t;  ptColor = '#22d3ee';
        }
        tsCtx.shadowColor = ptColor;
        tsCtx.shadowBlur = 18;
        tsCtx.beginPath(); tsCtx.arc(ptX, ptY, 7, 0, Math.PI * 2);
        tsCtx.fillStyle = ptColor; tsCtx.fill();
        tsCtx.shadowBlur = 0;
        tsCtx.beginPath(); tsCtx.arc(ptX, ptY, 3, 0, Math.PI * 2);
        tsCtx.fillStyle = 'rgba(255,255,255,0.95)'; tsCtx.fill();
    }

    // ── Animation loop ────────────────────────────────────────
    function animate() {
        state.animPhase = (state.animPhase + 0.00075) % 1;
        drawPV(state.animPhase);
        drawEngine(state.animPhase);
        drawTS(state.animPhase);
        state.animId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (state.animId) cancelAnimationFrame(state.animId);
        animate();
    }

    // ── Event listeners ───────────────────────────────────────
    function refresh() {
        // Enforce TH > TC (min gap of 10 K to avoid division by zero)
        state.TH = parseInt(slTH.value);
        state.TC = parseInt(slTC.value);
        state.QH = parseInt(slQH.value);

        if (state.TC >= state.TH - 10) {
            state.TC = Math.max(0, state.TH - 10);
            slTC.value = state.TC;
        }
        if (state.TC < 0) {
            state.TC = 0;
            slTC.value = 0;
        }
        spTH.textContent = state.TH;
        spTC.textContent = state.TC;
        spQH.textContent = state.QH;

        updateResults();
        drawTS(0);
    }

    slTH.addEventListener('input', refresh);
    slTC.addEventListener('input', refresh);
    slQH.addEventListener('input', refresh);

    // ── Stop animation when tab is not visible ─────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) startAnimation();
            else if (state.animId) { cancelAnimationFrame(state.animId); state.animId = null; }
        });
    }, { threshold: 0.1 });
    observer.observe(pvCanvas);

    // ── Initial render ────────────────────────────────────────
    refresh();
    startAnimation();
}

// ============================================================================
// LAB 29: COMPARACIÓN DE CICLOS OTTO Y DIESEL
// ============================================================================
function initOttoDieselSimulation() {
    const slMode   = document.getElementById('ottodiesel-mode');
    const slROtto  = document.getElementById('ottodiesel-r-otto');
    const slRDiesel = document.getElementById('ottodiesel-r-diesel');
    const slTMax   = document.getElementById('ottodiesel-tmax');
    const slSpeed  = document.getElementById('ottodiesel-speed');

    const spROtto  = document.getElementById('ottodiesel-r-otto-val');
    const spRDiesel = document.getElementById('ottodiesel-r-diesel-val');
    const spTMax   = document.getElementById('ottodiesel-tmax-val');
    const spSpeed  = document.getElementById('ottodiesel-speed-val');

    const cardEtaOtto   = document.getElementById('ottodiesel-eta-otto');
    const cardWOtto     = document.getElementById('ottodiesel-w-otto');
    const cardEtaDiesel = document.getElementById('ottodiesel-eta-diesel');
    const cardWDiesel   = document.getElementById('ottodiesel-w-diesel');
    const txtVerdict    = document.getElementById('ottodiesel-verdict');

    const pvCanvas       = document.getElementById('ottodiesel-pv-canvas');
    const tsCanvas       = document.getElementById('ottodiesel-ts-canvas');
    const ottoEngCanvas  = document.getElementById('otto-engine-canvas');
    const dieselEngCanvas= document.getElementById('diesel-engine-canvas');
    // Legacy fallback id (unused but keep reference so old code doesn't crash)
    const engCanvas = ottoEngCanvas;

    const processElements = [
        document.getElementById('p-admision'),
        document.getElementById('p-compresion'),
        document.getElementById('p-combustion'),
        document.getElementById('p-fuerza'),
        document.getElementById('p-escape')
    ];

    if (!pvCanvas || !tsCanvas || !ottoEngCanvas || !dieselEngCanvas) return;

    const pvCtx      = pvCanvas.getContext('2d');
    const tsCtx      = tsCanvas.getContext('2d');
    const ottoEngCtx  = ottoEngCanvas.getContext('2d');
    const dieselEngCtx= dieselEngCanvas.getContext('2d');
    // keep engCtx alias so existing code still works
    const engCtx = ottoEngCtx;

    // ── Set canvas internal resolution to match CSS display size ──
    function resizeEngineCanvases() {
        const dpr = window.devicePixelRatio || 1;
        [ottoEngCanvas, dieselEngCanvas].forEach(cv => {
            const rect = cv.getBoundingClientRect();
            const w = Math.round(rect.width  || 500);
            const h = Math.round(rect.height || 420);
            if (cv.width !== w * dpr || cv.height !== h * dpr) {
                cv.width  = w * dpr;
                cv.height = h * dpr;
                cv.getContext('2d').scale(dpr, dpr);
            }
        });
    }
    // Set once now (layout may not be ready; also call on first frame)
    requestAnimationFrame(() => resizeEngineCanvases());
    window.addEventListener('resize', resizeEngineCanvases);

    const state = {
        mode: 'real', // 'real' or 'equal'
        rOtto: 8.5,
        rDiesel: 16.0,
        Tmax: 1800,
        speed: 1.0,
        animPhase: 0,
        animId: null,
        isPlaying: true
    };

    const gamma = 1.4;
    const Cv = 0.718; // kJ/kg.K
    const Cp = 1.005; // kJ/kg.K
    const R = 0.287;  // kJ/kg.K (Gas constant for air)

    // ── Math & Thermodynamics solver ─────────────────────────
    function solveCycles() {
        const T1 = 300; // K (atmospheric intake)
        const P1 = 100; // kPa

        let rO = state.rOtto;
        let rD = state.rDiesel;

        if (state.mode === 'equal') {
            rD = rO; // force same compression ratio
        }

        // --- Cycle Otto ---
        const T2_O = T1 * Math.pow(rO, gamma - 1);
        const P2_O = P1 * Math.pow(rO, gamma);
        
        // Clamp Tmax to be greater than T2 to ensure physical feasibility
        const tMaxO = Math.max(state.Tmax, T2_O + 150);
        const T3_O = tMaxO;
        const P3_O = P2_O * (T3_O / T2_O);
        const T4_O = T3_O / Math.pow(rO, gamma - 1);
        const P4_O = P3_O / Math.pow(rO, gamma);

        const Qin_O = Cv * (T3_O - T2_O);
        const Qout_O = Cv * (T4_O - T1);
        const W_O = Qin_O - Qout_O;
        const eta_O = 1 - 1 / Math.pow(rO, gamma - 1);

        // --- Cycle Diesel ---
        const T2_D = T1 * Math.pow(rD, gamma - 1);
        const P2_D = P1 * Math.pow(rD, gamma);

        const tMaxD = Math.max(state.Tmax, T2_D + 150);
        const T3_D = tMaxD;
        const P3_D = P2_D; // constant pressure combustion
        
        // Cutoff ratio rc = V3/V2 = T3/T2
        const rc = Math.max(1.01, Math.min(T3_D / T2_D, rD - 0.5));
        const T4_D = T3_D * Math.pow(rc / rD, gamma - 1);
        const P4_D = P3_D * Math.pow(rc / rD, gamma);

        const Qin_D = Cp * (T3_D - T2_D);
        const Qout_D = Cv * (T4_D - T1);
        const W_D = Qin_D - Qout_D;
        const eta_D = Qin_D > 0 ? (1 - Qout_D / Qin_D) : 0;

        return {
            otto: { r: rO, T2: T2_O, T3: T3_O, T4: T4_O, P2: P2_O, P3: P3_O, P4: P4_O, W: W_O, eta: eta_O },
            diesel: { r: rD, rc: rc, T2: T2_D, T3: T3_D, T4: T4_D, P2: P2_D, P3: P3_D, P4: P4_D, W: W_D, eta: eta_D }
        };
    }

    // ── Update GUI cards ─────────────────────────────────────
    function updateResults() {
        const res = solveCycles();

        if (cardEtaOtto)   cardEtaOtto.textContent   = (res.otto.eta * 100).toFixed(1) + '%';
        if (cardWOtto)     cardWOtto.textContent     = res.otto.W.toFixed(0) + ' kJ';
        if (cardEtaDiesel) cardEtaDiesel.textContent = (res.diesel.eta * 100).toFixed(1) + '%';
        if (cardWDiesel)   cardWDiesel.textContent   = res.diesel.W.toFixed(0) + ' kJ';

        // Update the expanded states table values
        const v2_O = 1.0 / res.otto.r;
        const v2_D = 1.0 / res.diesel.r;
        const v3_D = v2_D * res.diesel.rc;

        // Helper to set cell text safely
        const setCell = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

        // State 1 (Inicial) - same for both
        setCell('ot-tbl-1-T', '300');   setCell('ot-tbl-1-P', '100');    setCell('ot-tbl-1-V', '1.000');
        setCell('di-tbl-1-T', '300');   setCell('di-tbl-1-P', '100');    setCell('di-tbl-1-V', '1.000');

        // State 2 (Post-compresión)
        setCell('ot-tbl-2-T', res.otto.T2.toFixed(0));   setCell('ot-tbl-2-P', res.otto.P2.toFixed(0));    setCell('ot-tbl-2-V', v2_O.toFixed(4));
        setCell('di-tbl-2-T', res.diesel.T2.toFixed(0)); setCell('di-tbl-2-P', res.diesel.P2.toFixed(0));  setCell('di-tbl-2-V', v2_D.toFixed(4));

        // State 3 (Pico combustión)
        setCell('ot-tbl-3-T', res.otto.T3.toFixed(0));   setCell('ot-tbl-3-P', res.otto.P3.toFixed(0));    setCell('ot-tbl-3-V', v2_O.toFixed(4));
        setCell('di-tbl-3-T', res.diesel.T3.toFixed(0)); setCell('di-tbl-3-P', res.diesel.P3.toFixed(0));  setCell('di-tbl-3-V', v3_D.toFixed(4));

        // State 4 (Post-expansión)
        setCell('ot-tbl-4-T', res.otto.T4.toFixed(0));   setCell('ot-tbl-4-P', res.otto.P4.toFixed(0));    setCell('ot-tbl-4-V', '1.000');
        setCell('di-tbl-4-T', res.diesel.T4.toFixed(0)); setCell('di-tbl-4-P', res.diesel.P4.toFixed(0));  setCell('di-tbl-4-V', '1.000');

        // W/eta summary row
        setCell('ot-tbl-we', `${res.otto.W.toFixed(1)} kJ/kg  |  η = ${(res.otto.eta*100).toFixed(1)}%`);
        setCell('di-tbl-we', `${res.diesel.W.toFixed(1)} kJ/kg  |  η = ${(res.diesel.eta*100).toFixed(1)}%`);

        // Verdict updates
        if (state.mode === 'equal') {
            txtVerdict.innerHTML = `<strong>Comparación a r = ${state.rOtto.toFixed(1)}:</strong> El ciclo Otto (${(res.otto.eta*100).toFixed(1)}%) es <strong>más eficiente</strong> que el Diesel (${(res.diesel.eta*100).toFixed(1)}%). La adición de calor a volumen constante en el Otto alcanza temperaturas/presiones pico más altas con la misma energía, reduciendo el calor de desecho.`;
        } else {
            txtVerdict.innerHTML = `<strong>Relaciones de Diseño Reales (Otto r=${state.rOtto.toFixed(1)} vs Diesel r=${state.rDiesel.toFixed(1)}):</strong> El Diesel (${(res.diesel.eta*100).toFixed(1)}%) es <strong>más eficiente</strong> que el Otto (${(res.otto.eta*100).toFixed(1)}%). La ignición por compresión del Diesel tolera relaciones mucho mayores sin autoencendido catastrófico (*knocking*).`;
        }
    }

    // ── Draw P-V overlay diagram ─────────────────────────────
    function drawPV(phase) {
        const W = pvCanvas.width, H = pvCanvas.height;
        pvCtx.clearRect(0, 0, W, H);
        pvCtx.fillStyle = '#0f1117';
        pvCtx.fillRect(0, 0, W, H);

        const res = solveCycles();

        const ml = 55, mr = 20, mt = 20, mb = 40;
        const cw = W - ml - mr, ch = H - mt - mb;

        // Scale factors
        const Vmin = 0.05, Vmax = 1.05;
        const Pmin = 0, Pmax = Math.max(res.otto.P3, res.diesel.P3, 4000) * 1.08;

        function toX(V) { return ml + (V - Vmin) / (Vmax - Vmin) * cw; }
        function toY(P) { return mt + ch - (P - Pmin) / (Pmax - Pmin) * ch; }

        // Draw axes
        pvCtx.strokeStyle = 'rgba(255,255,255,0.45)';
        pvCtx.lineWidth = 1.5;
        pvCtx.beginPath();
        pvCtx.moveTo(ml, mt); pvCtx.lineTo(ml, mt + ch); pvCtx.lineTo(ml + cw, mt + ch);
        pvCtx.stroke();

        // Axes titles
        pvCtx.fillStyle = 'rgba(255,255,255,0.55)';
        pvCtx.font = '11px Inter';
        pvCtx.textAlign = 'center';
        pvCtx.fillText('Volumen relativo V/V₁', ml + cw / 2, H - 4);
        pvCtx.save();
        pvCtx.translate(12, mt + ch / 2);
        pvCtx.rotate(-Math.PI / 2);
        pvCtx.fillText('Presión P (kPa)', 0, 0);
        pvCtx.restore();

        // Y-axis ticks (Pressure)
        pvCtx.font = '9px Inter';
        pvCtx.fillStyle = 'rgba(255,255,255,0.45)';
        pvCtx.strokeStyle = 'rgba(255,255,255,0.15)';
        pvCtx.lineWidth = 0.5;
        const numPticks = 6;
        for (let i = 0; i <= numPticks; i++) {
            const Pval = Pmin + (Pmax - Pmin) * (i / numPticks);
            const yTick = toY(Pval);
            // gridline
            pvCtx.beginPath(); pvCtx.moveTo(ml, yTick); pvCtx.lineTo(ml + cw, yTick); pvCtx.stroke();
            // label
            pvCtx.textAlign = 'right';
            const label = Pval >= 1000 ? (Pval/1000).toFixed(1)+'k' : Pval.toFixed(0);
            pvCtx.fillText(label, ml - 4, yTick + 3);
        }

        // X-axis ticks (Volume)
        const vTicks = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];
        pvCtx.strokeStyle = 'rgba(255,255,255,0.1)';
        for (const Vval of vTicks) {
            const xTick = toX(Vval);
            pvCtx.beginPath(); pvCtx.moveTo(xTick, mt); pvCtx.lineTo(xTick, mt + ch); pvCtx.stroke();
            pvCtx.textAlign = 'center';
            pvCtx.fillStyle = 'rgba(255,255,255,0.45)';
            pvCtx.fillText(Vval.toFixed(1), xTick, mt + ch + 14);
        }

        // ── Draw Otto Curve ──────────────────────────────────────
        const v2_O = 1.0 / res.otto.r;
        const v1_O = 1.0;
        
        // 1 -> 2: Compression isentropic (P = P1 * (V1/V)^gamma)
        const ptsComp_O = [];
        const steps = 25;
        for (let i = 0; i <= steps; i++) {
            const v = v1_O - (v1_O - v2_O) * (i / steps);
            const p = 100 * Math.pow(v1_O / v, gamma);
            ptsComp_O.push({ V: v, P: p });
        }

        // 3 -> 4: Expansion isentropic (P = P3 * (V3/V)^gamma)
        const ptsExp_O = [];
        for (let i = 0; i <= steps; i++) {
            const v = v2_O + (v1_O - v2_O) * (i / steps);
            const p = res.otto.P3 * Math.pow(v2_O / v, gamma);
            ptsExp_O.push({ V: v, P: p });
        }

        // Draw area Otto
        pvCtx.fillStyle = 'rgba(239, 68, 68, 0.08)';
        pvCtx.beginPath();
        pvCtx.moveTo(toX(ptsComp_O[0].V), toY(ptsComp_O[0].P));
        ptsComp_O.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        pvCtx.lineTo(toX(v2_O), toY(res.otto.P3)); // 2 -> 3
        ptsExp_O.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        pvCtx.closePath();
        pvCtx.fill();

        // Draw lines Otto
        pvCtx.strokeStyle = '#ef4444';
        pvCtx.lineWidth = 2.5;
        pvCtx.beginPath();
        // 1 -> 2
        pvCtx.moveTo(toX(ptsComp_O[0].V), toY(ptsComp_O[0].P));
        ptsComp_O.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        // 2 -> 3
        pvCtx.lineTo(toX(v2_O), toY(res.otto.P3));
        // 3 -> 4
        ptsExp_O.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        // 4 -> 1
        pvCtx.closePath();
        pvCtx.stroke();

        // ── Draw Diesel Curve ────────────────────────────────────
        const v2_D = 1.0 / res.diesel.r;
        const v1_D = 1.0;
        const v3_D = v2_D * res.diesel.rc;

        const ptsComp_D = [];
        for (let i = 0; i <= steps; i++) {
            const v = v1_D - (v1_D - v2_D) * (i / steps);
            const p = 100 * Math.pow(v1_D / v, gamma);
            ptsComp_D.push({ V: v, P: p });
        }

        const ptsExp_D = [];
        for (let i = 0; i <= steps; i++) {
            const v = v3_D + (v1_D - v3_D) * (i / steps);
            const p = res.diesel.P3 * Math.pow(v3_D / v, gamma);
            ptsExp_D.push({ V: v, P: p });
        }

        // Draw area Diesel
        pvCtx.fillStyle = 'rgba(245, 158, 11, 0.08)';
        pvCtx.beginPath();
        pvCtx.moveTo(toX(ptsComp_D[0].V), toY(ptsComp_D[0].P));
        ptsComp_D.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        pvCtx.lineTo(toX(v3_D), toY(res.diesel.P3)); // 2 -> 3 isobaric
        ptsExp_D.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        pvCtx.closePath();
        pvCtx.fill();

        // Draw lines Diesel
        pvCtx.strokeStyle = '#f59e0b';
        pvCtx.lineWidth = 2.5;
        pvCtx.beginPath();
        // 1 -> 2
        pvCtx.moveTo(toX(ptsComp_D[0].V), toY(ptsComp_D[0].P));
        ptsComp_D.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        // 2 -> 3 (isobaric)
        pvCtx.lineTo(toX(v3_D), toY(res.diesel.P3));
        // 3 -> 4
        ptsExp_D.forEach(pt => pvCtx.lineTo(toX(pt.V), toY(pt.P)));
        // 4 -> 1
        pvCtx.closePath();
        pvCtx.stroke();

        // ── Animated tracer dot ──────────────────────────────────
        // Trace Otto dot
        const ph = phase;
        let oX, oY, dX, dY;
        
        // Otto tracing
        if (ph < 0.25) {
            const t = ph / 0.25;
            const idx = Math.floor(t * (ptsComp_O.length - 1));
            oX = toX(ptsComp_O[idx].V); oY = toY(ptsComp_O[idx].P);
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            oX = toX(v2_O); oY = toY(ptsComp_O[ptsComp_O.length - 1].P + (res.otto.P3 - ptsComp_O[ptsComp_O.length - 1].P) * t);
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            const idx = Math.floor(t * (ptsExp_O.length - 1));
            oX = toX(ptsExp_O[idx].V); oY = toY(ptsExp_O[idx].P);
        } else {
            const t = (ph - 0.75) / 0.25;
            oX = toX(v1_O); oY = toY(res.otto.P4 - (res.otto.P4 - 100) * t);
        }

        // Diesel tracing
        if (ph < 0.25) {
            const t = ph / 0.25;
            const idx = Math.floor(t * (ptsComp_D.length - 1));
            dX = toX(ptsComp_D[idx].V); dY = toY(ptsComp_D[idx].P);
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            dX = toX(v2_D + (v3_D - v2_D) * t); dY = toY(res.diesel.P3);
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            const idx = Math.floor(t * (ptsExp_D.length - 1));
            dX = toX(ptsExp_D[idx].V); dY = toY(ptsExp_D[idx].P);
        } else {
            const t = (ph - 0.75) / 0.25;
            dX = toX(v1_D); dY = toY(res.diesel.P4 - (res.diesel.P4 - 100) * t);
        }

        // Draw tracer dots
        pvCtx.fillStyle = '#ef4444';
        pvCtx.beginPath(); pvCtx.arc(oX, oY, 6, 0, Math.PI*2); pvCtx.fill();

        pvCtx.fillStyle = '#f59e0b';
        pvCtx.beginPath(); pvCtx.arc(dX, dY, 6, 0, Math.PI*2); pvCtx.fill();

        // Helper function for markers
        function drawStateMarker(ctx, x, y, num, color) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#0f1117';
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 8px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(num, x, y);
            ctx.restore();
        }

        // Draw State Markers 1, 2, 3, 4
        // State 1 is common
        drawStateMarker(pvCtx, toX(1.0), toY(100), "1", "#cbd5e1");

        // Otto States
        drawStateMarker(pvCtx, toX(v2_O), toY(res.otto.P2), "2", "#ef4444");
        drawStateMarker(pvCtx, toX(v2_O), toY(res.otto.P3), "3", "#ef4444");
        drawStateMarker(pvCtx, toX(1.0), toY(res.otto.P4), "4", "#ef4444");

        // Diesel States
        drawStateMarker(pvCtx, toX(v2_D), toY(res.diesel.P2), "2", "#f59e0b");
        drawStateMarker(pvCtx, toX(v3_D), toY(res.diesel.P3), "3", "#f59e0b");
        drawStateMarker(pvCtx, toX(1.0), toY(res.diesel.P4), "4", "#f59e0b");
    }

    // ── Update live metric cards ──────────────────────────────────────────
    function updateLiveMetrics() {
        const res = solveCycles();
        const ph  = state.animPhase;
        const T1  = 300, P1 = 100; // ambient

        // ── Interpolate instantaneous T and P through cycle phases ──
        function cycleInstant(st) {
            // st = { T1, T2, T3, T4, P1, P2, P3, P4 }
            let T, P;
            if (ph < 0.25) {          // Compression  1→2
                const t = ph / 0.25;
                T = st.T1 + t * (st.T2 - st.T1);
                P = st.P1 + t * (st.P2 - st.P1);
            } else if (ph < 0.5) {    // Combustion   2→3
                const t = (ph - 0.25) / 0.25;
                T = st.T2 + t * (st.T3 - st.T2);
                P = st.P2 + t * (st.P3 - st.P2);
            } else if (ph < 0.75) {   // Expansion    3→4
                const t = (ph - 0.5) / 0.25;
                T = st.T3 + t * (st.T4 - st.T3);
                P = st.P3 + t * (st.P4 - st.P3);
            } else {                  // Exhaust / Intake  →1
                T = st.T1;
                P = st.P1;
            }
            return { T: Math.max(0, T), P: Math.max(0, P) };
        }

        const instO = cycleInstant({ T1, T2: res.otto.T2,   T3: res.otto.T3,   T4: res.otto.T4,
                                          P1, P2: res.otto.P2,   P3: res.otto.P3,   P4: res.otto.P4 });
        const instD = cycleInstant({ T1, T2: res.diesel.T2, T3: res.diesel.T3, T4: res.diesel.T4,
                                          P1, P2: res.diesel.P2, P3: res.diesel.P3, P4: res.diesel.P4 });

        const safe = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

        // Peak values
        safe('otto-live-T',   res.otto.T3.toFixed(0)   + ' K');
        safe('otto-live-P',   res.otto.P3.toFixed(0)   + ' kPa');
        safe('otto-live-W',   res.otto.W.toFixed(1)    + ' kJ');
        safe('otto-live-eta', (res.otto.eta * 100).toFixed(1) + ' %');

        safe('diesel-live-T',   res.diesel.T3.toFixed(0)   + ' K');
        safe('diesel-live-P',   res.diesel.P3.toFixed(0)   + ' kPa');
        safe('diesel-live-W',   res.diesel.W.toFixed(1)    + ' kJ');
        safe('diesel-live-eta', (res.diesel.eta * 100).toFixed(1) + ' %');

        // Instantaneous values
        safe('otto-live-T-inst',   instO.T.toFixed(0)  + ' K');
        safe('otto-live-P-inst',   instO.P.toFixed(0)  + ' kPa');
        safe('diesel-live-T-inst', instD.T.toFixed(0)  + ' K');
        safe('diesel-live-P-inst', instD.P.toFixed(0)  + ' kPa');
    }



    // ── Helper: render one engine on a given canvas/ctx ──────
    function renderSingleEngine(canvas, ctx, phase, isOtto) {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#0a0f1e';
        ctx.fillRect(0, 0, W, H);

        const res = solveCycles();
        const cx = W / 2;       // engine centered horizontally
        const cylW = Math.round(W * 0.28);   // ~28% of canvas width
        const cylH = Math.round(H * 0.52);   // ~52% of canvas height
        const yBase = Math.round(H * 0.18);  // top of cylinder from top

        const ph = phase;
        let disp = 0;
        let isCombustion = false;
        let combustionProgress = 0;
        let isIntake = false;
        let isExhaust = false;
        let hasSpark = false;
        let hasInjection = false;
        const maxStroke = isOtto ? Math.round(cylH * 0.55) : Math.round(cylH * 0.62);

        if (ph < 0.25) {
            disp = (ph / 0.25) * maxStroke;
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            disp = maxStroke - t * (maxStroke * 0.36);
            isCombustion = true;
            combustionProgress = t;
            if (isOtto && t < 0.15) hasSpark = true;
            if (!isOtto && t < 0.40) hasInjection = true;
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            disp = (maxStroke - maxStroke * 0.36) - t * (maxStroke - maxStroke * 0.36);
        } else {
            const t = (ph - 0.75) / 0.25;
            if (t < 0.5) {
                disp = (t / 0.5) * maxStroke * 0.7;
                isExhaust = true;
            } else {
                disp = maxStroke * 0.7 - ((t - 0.5) / 0.5) * maxStroke * 0.7;
                isIntake = true;
            }
        }

        const isExpansion = ph >= 0.5 && ph < 0.75;

        // ── Chamber glow ─────────────────────────────────────────
        if (isCombustion) {
            const glowColor = isOtto ? `rgba(255,180,0,${0.7*(1-combustionProgress)})` : `rgba(245,158,11,${0.65*(1-combustionProgress)})`;
            const glow = ctx.createRadialGradient(cx, yBase + 10, 5, cx, yBase + 10, cylH);
            glow.addColorStop(0, glowColor);
            glow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = glow;
            ctx.fillRect(cx - cylW/2 + 2, yBase + 10, cylW - 4, cylH - 10);
        }

        // ── Manifolds & valves ───────────────────────────────────
        ctx.fillStyle = '#374151';
        ctx.fillRect(cx - cylW/2 - 2, yBase + 6, cylW + 4, 6);
        ctx.fillStyle = '#1e293b';
        // Intake port
        ctx.beginPath();
        ctx.moveTo(cx - cylW/2, yBase + 10);
        ctx.lineTo(cx - cylW/2 - Math.round(cylW*0.3), yBase - Math.round(cylH*0.12));
        ctx.lineTo(cx - Math.round(cylW*0.15), yBase - Math.round(cylH*0.12));
        ctx.lineTo(cx - Math.round(cylW*0.15), yBase + 10);
        ctx.fill();
        // Exhaust port
        ctx.beginPath();
        ctx.moveTo(cx + Math.round(cylW*0.15), yBase + 10);
        ctx.lineTo(cx + Math.round(cylW*0.15), yBase - Math.round(cylH*0.12));
        ctx.lineTo(cx + cylW/2 + Math.round(cylW*0.3), yBase - Math.round(cylH*0.12));
        ctx.lineTo(cx + cylW/2, yBase + 10);
        ctx.fill();

        // Valves
        const vOpen = Math.round(cylH * 0.045);
        const vi = yBase + 10 + (isIntake ? vOpen : 0);
        const ve = yBase + 10 + (isExhaust ? vOpen : 0);
        ctx.strokeStyle = '#9ca3af'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx - Math.round(cylW*0.3), yBase - Math.round(cylH*0.09));
        ctx.lineTo(cx - Math.round(cylW*0.3), vi);
        ctx.moveTo(cx - Math.round(cylW*0.3) - Math.round(cylW*0.12), vi);
        ctx.lineTo(cx - Math.round(cylW*0.3) + Math.round(cylW*0.12), vi);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + Math.round(cylW*0.3), yBase - Math.round(cylH*0.09));
        ctx.lineTo(cx + Math.round(cylW*0.3), ve);
        ctx.moveTo(cx + Math.round(cylW*0.3) - Math.round(cylW*0.12), ve);
        ctx.lineTo(cx + Math.round(cylW*0.3) + Math.round(cylW*0.12), ve);
        ctx.stroke();

        // Flow arrows
        if (isIntake) {
            ctx.save(); ctx.strokeStyle='#22c55e'; ctx.lineWidth=3; ctx.lineCap='round';
            const off=(phase*15)%8;
            ctx.beginPath();
            ctx.moveTo(cx-cylW/2-10+off, yBase-8+off);
            ctx.lineTo(cx-cylW/2*0.35+off, yBase+6+off);
            ctx.stroke(); ctx.restore();
        }
        if (isExhaust) {
            ctx.save(); ctx.strokeStyle='#f97316'; ctx.lineWidth=3; ctx.lineCap='round';
            const off=(phase*15)%8;
            ctx.beginPath();
            ctx.moveTo(cx+cylW/2*0.35+off, yBase+6-off);
            ctx.lineTo(cx+cylW/2+10+off, yBase-8-off);
            ctx.stroke(); ctx.restore();
        }

        // ── Particles ────────────────────────────────────────────
        const chamberTop = yBase + 10;
        const pistonTop  = yBase + (maxStroke - disp) + 12;
        const chamberH   = pistonTop - chamberTop;
        ctx.save();
        ctx.beginPath();
        ctx.rect(cx - cylW/2 + 2, chamberTop, cylW - 4, Math.max(1, chamberH));
        ctx.clip();
        const numP = 55;
        for (let i = 0; i < numP; i++) {
            const sx = Math.sin(i * 432.12 + phase * 0.1) * 0.5 + 0.5;
            const sy = Math.cos(i * 123.45 + phase * 0.05) * 0.5 + 0.5;
            let px = cx - cylW/2 + 6 + sx * (cylW - 12);
            let py = chamberTop + 4 + sy * Math.max(1, chamberH - 8);
            let color = 'rgba(255,255,255,0.7)';
            let sz = 2.8;
            if (isExhaust) {
                color = `rgba(156,163,175,${0.6*(1-(i%10)/10)})`; sz=3;
            } else if (isIntake) {
                color = isOtto ? (i%2===0?'#22d3ee':'rgba(255,255,255,0.7)') : 'rgba(191,219,254,0.75)';
            } else if (isExpansion) {
                color = 'rgba(156,163,175,0.65)'; sz=2.8;
            } else if (isCombustion) {
                if (isOtto) {
                    const fl = chamberTop + combustionProgress * chamberH;
                    if (py < fl) { color = py < fl-20 ? 'rgba(156,163,175,0.65)' : `rgba(239,68,68,${1.2-combustionProgress})`; sz=3.2; }
                    else { color = i%2===0?'#22d3ee':'rgba(255,255,255,0.7)'; }
                } else {
                    if (sy < combustionProgress*1.3) { color = sy<combustionProgress*0.7?'rgba(156,163,175,0.65)':`rgba(245,158,11,${1-combustionProgress})`; sz=3.2; }
                    else if (hasInjection&&sx>0.4&&sx<0.6&&sy<0.5) { color='#22d3ee'; sz=2; }
                    else { color='rgba(255,255,255,0.7)'; }
                }
            } else {
                color = (!isOtto) ? 'rgba(255,255,255,0.7)' : (i%2===0?'#22d3ee':'rgba(255,255,255,0.7)');
            }
            ctx.fillStyle = color;
            ctx.beginPath(); ctx.arc(px, py, sz, 0, Math.PI*2); ctx.fill();
        }
        ctx.restore();

        // ── Cylinder walls ───────────────────────────────────────
        ctx.strokeStyle = isOtto ? 'rgba(239,68,68,0.7)' : 'rgba(245,158,11,0.7)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx - cylW/2, yBase + 10);
        ctx.lineTo(cx - cylW/2, yBase + cylH);
        ctx.lineTo(cx + cylW/2, yBase + cylH);
        ctx.lineTo(cx + cylW/2, yBase + 10);
        ctx.stroke();

        // ── Piston ───────────────────────────────────────────────
        const pistonY = yBase + (maxStroke - disp) + 10;
        ctx.fillStyle = isOtto ? '#9ca3af' : '#4b5563';
        ctx.fillRect(cx - cylW/2 + 2, pistonY, cylW - 4, Math.round(cylH*0.1));

        // Piston rings
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        const ph2 = Math.round(cylH*0.1);
        ctx.beginPath(); ctx.moveTo(cx-cylW/2+4, pistonY+ph2*0.35); ctx.lineTo(cx+cylW/2-4, pistonY+ph2*0.35); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx-cylW/2+4, pistonY+ph2*0.65); ctx.lineTo(cx+cylW/2-4, pistonY+ph2*0.65); ctx.stroke();

        // ── Connecting rod & crankshaft ──────────────────────────
        const rodW = Math.round(cylW*0.1);
        ctx.fillStyle = isOtto ? '#6b7280' : '#374151';
        const rodTop = pistonY + Math.round(cylH*0.1);
        const rodH   = Math.round(cylH*0.35);
        ctx.fillRect(cx - rodW/2, rodTop, rodW, rodH);

        const discY = yBase + cylH + Math.round(cylH*0.22);
        const angle = phase * Math.PI * 2;
        const crankR = Math.round(cylW*0.22);
        const pinX = cx + Math.cos(angle) * crankR;
        const pinY = discY + Math.sin(angle) * crankR;
        const wristY = rodTop + rodH;

        ctx.strokeStyle = isOtto ? '#4b5563' : '#374151';
        ctx.lineWidth = 6; ctx.lineCap='round';
        ctx.beginPath(); ctx.moveTo(cx, discY); ctx.lineTo(pinX, pinY); ctx.stroke();

        ctx.fillStyle = isOtto ? '#374151' : '#1f2937';
        ctx.beginPath(); ctx.arc(cx, discY, 8, 0, Math.PI*2); ctx.fill();

        ctx.strokeStyle = isOtto ? '#9ca3af' : '#6b7280';
        ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(cx, wristY); ctx.lineTo(pinX, pinY); ctx.stroke();

        ctx.fillStyle = isOtto ? '#374151' : '#1f2937';
        ctx.beginPath(); ctx.arc(cx, wristY, 4, 0, Math.PI*2); ctx.fill();

        // ── Spark plug (Otto) / Injector (Diesel) ────────────────
        if (isOtto) {
            ctx.fillStyle = '#e5e7eb';
            ctx.fillRect(cx - 4, yBase - 6, 8, 6);
            if (hasSpark) {
                ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(cx-5, yBase+4); ctx.lineTo(cx+5, yBase+2); ctx.lineTo(cx, yBase+9);
                ctx.stroke();
            }
        } else {
            ctx.fillStyle = '#1f2937';
            ctx.fillRect(cx - 3, yBase - 8, 6, 8);
            if (hasInjection) {
                ctx.fillStyle='rgba(34,211,238,0.8)';
                ctx.beginPath();
                ctx.moveTo(cx, yBase); ctx.lineTo(cx-10, yBase+22); ctx.lineTo(cx+10, yBase+22);
                ctx.closePath(); ctx.fill();
            }
        }

        // ── Phase label ──────────────────────────────────────────
        const labels = ['Compresión','Combustión','Expansión','Escape / Admisión'];
        const phIdx = ph < 0.25 ? 0 : ph < 0.5 ? 1 : ph < 0.75 ? 2 : 3;
        ctx.font = `bold ${Math.round(W*0.033)}px Inter`;
        ctx.textAlign = 'center';
        ctx.fillStyle = ['#60a5fa','#f97316','#22d3ee','#94a3b8'][phIdx];
        ctx.fillText(labels[phIdx], cx, H - Math.round(H*0.04));
    }

    // ── Draw Parallel Piston engines with molecular simulation ──────
    function drawEngine(phase) {
        renderSingleEngine(ottoEngCanvas,   ottoEngCtx,   phase, true);
        renderSingleEngine(dieselEngCanvas, dieselEngCtx, phase, false);
        updateLiveMetrics();

        // keep legacy variables defined so nothing else breaks
        const W = ottoEngCanvas.width, H = ottoEngCanvas.height;
        const res = solveCycles();
        const splitX = W / 2;
        const cylW = 72;
        const cylH = 140;
        const yBase = 65;
        const xOtto = splitX / 2;
        const xDiesel = splitX + splitX / 2;
        // Legacy body removed — rendering now handled by renderSingleEngine()
    }
    // ── Draw T-S comparison diagram ──────────────────────────
    function drawTS(phase) {
        const W = tsCanvas.width, H = tsCanvas.height;
        tsCtx.clearRect(0, 0, W, H);
        tsCtx.fillStyle = '#0f1117';
        tsCtx.fillRect(0, 0, W, H);

        const res = solveCycles();

        const ml = 50, mr = 20, mt = 20, mb = 40;
        const cw = W - ml - mr, ch = H - mt - mb;

        // Limits zoomed in to maximize screen utilization
        const Tmin = 250, TmaxLimit = 2200;
        const Smin = -0.04, SmaxLimit = 1.15;

        function toX(S) { return ml + (S - Smin) / (SmaxLimit - Smin) * cw; }
        function toY(T) { return mt + ch - (T - Tmin) / (TmaxLimit - Tmin) * ch; }

        // Axes
        tsCtx.strokeStyle = 'rgba(255,255,255,0.45)';
        tsCtx.lineWidth = 1.5;
        tsCtx.beginPath();
        tsCtx.moveTo(ml, mt); tsCtx.lineTo(ml, mt + ch); tsCtx.lineTo(ml + cw, mt + ch);
        tsCtx.stroke();

        // Labels
        tsCtx.fillStyle = 'rgba(255,255,255,0.55)';
        tsCtx.font = '11px Inter';
        tsCtx.textAlign = 'center';
        tsCtx.fillText('Entropía específica s (kJ/kg·K)', ml + cw / 2, H - 4);
        tsCtx.save();
        tsCtx.translate(12, mt + ch / 2);
        tsCtx.rotate(-Math.PI / 2);
        tsCtx.fillText('Temperatura T (K)', 0, 0);
        tsCtx.restore();

        // Y-axis ticks (Temperature)
        tsCtx.font = '9px Inter';
        tsCtx.fillStyle = 'rgba(255,255,255,0.45)';
        tsCtx.strokeStyle = 'rgba(255,255,255,0.1)';
        tsCtx.lineWidth = 0.5;
        const tTickValues = [300, 500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100];
        for (const Tval of tTickValues) {
            if (Tval < Tmin || Tval > TmaxLimit) continue;
            const yTick = toY(Tval);
            tsCtx.beginPath(); tsCtx.moveTo(ml, yTick); tsCtx.lineTo(ml + cw, yTick); tsCtx.stroke();
            tsCtx.textAlign = 'right';
            tsCtx.fillText(Tval.toFixed(0), ml - 4, yTick + 3);
        }

        // X-axis ticks (Entropy)
        tsCtx.strokeStyle = 'rgba(255,255,255,0.08)';
        const sTickCount = 7;
        for (let i = 0; i <= sTickCount; i++) {
            const Sval = Smin + (SmaxLimit - Smin) * (i / sTickCount);
            const xTick = toX(Sval);
            tsCtx.beginPath(); tsCtx.moveTo(xTick, mt); tsCtx.lineTo(xTick, mt + ch); tsCtx.stroke();
            tsCtx.textAlign = 'center';
            tsCtx.fillStyle = 'rgba(255,255,255,0.45)';
            tsCtx.fillText(Sval.toFixed(2), xTick, mt + ch + 14);
        }

        // --- Cycle Otto T-S ---
        // 1: (s1=0, T1=300)
        // 2: isentropic comp: (s2=0, T2)
        // 3: const vol heat add: s3 = s2 + Cv*ln(T3/T2)
        // 4: isentropic exp: s4 = s3, T4
        const s1_O = 0;
        const s2_O = 0;
        const s3_O = s2_O + Cv * Math.log(res.otto.T3 / res.otto.T2);
        const s4_O = s3_O;

        const pts23_O = [];
        const pts41_O = [];
        const steps = 25;
        for (let i = 0; i <= steps; i++) {
            // 2 -> 3 (V=cte)
            const t = res.otto.T2 + (res.otto.T3 - res.otto.T2) * (i / steps);
            const s = s2_O + Cv * Math.log(t / res.otto.T2);
            pts23_O.push({ S: s, T: t });

            // 4 -> 1 (V=cte)
            const t41 = 300 + (res.otto.T4 - 300) * (i / steps);
            const s41 = s1_O + Cv * Math.log(t41 / 300);
            pts41_O.push({ S: s41, T: t41 });
        }

        // Draw area Otto
        tsCtx.fillStyle = 'rgba(239, 68, 68, 0.08)';
        tsCtx.beginPath();
        tsCtx.moveTo(toX(s1_O), toY(300));
        tsCtx.lineTo(toX(s2_O), toY(res.otto.T2));
        pts23_O.forEach(pt => tsCtx.lineTo(toX(pt.S), toY(pt.T)));
        tsCtx.lineTo(toX(s4_O), toY(res.otto.T4));
        for (let i = pts41_O.length - 1; i >= 0; i--) {
            tsCtx.lineTo(toX(pts41_O[i].S), toY(pts41_O[i].T));
        }
        tsCtx.closePath();
        tsCtx.fill();

        // Draw Lines Otto
        tsCtx.strokeStyle = '#ef4444';
        tsCtx.lineWidth = 2.5;
        tsCtx.beginPath();
        tsCtx.moveTo(toX(s1_O), toY(300));
        tsCtx.lineTo(toX(s2_O), toY(res.otto.T2)); // 1 -> 2
        pts23_O.forEach(pt => tsCtx.lineTo(toX(pt.S), toY(pt.T))); // 2 -> 3
        tsCtx.lineTo(toX(s4_O), toY(res.otto.T4)); // 3 -> 4
        for (let i = pts41_O.length - 1; i >= 0; i--) {
            tsCtx.lineTo(toX(pts41_O[i].S), toY(pts41_O[i].T)); // 4 -> 1
        }
        tsCtx.stroke();

        // --- Cycle Diesel T-S ---
        // 1: (s1=0, T1=300)
        // 2: isentropic comp: (s2=0, T2)
        // 3: const press heat: s3 = s2 + Cp*ln(T3/T2)
        // 4: isentropic exp: s4 = s3, T4
        const s1_D = 0;
        const s2_D = 0;
        const s3_D = s2_D + Cp * Math.log(res.diesel.T3 / res.diesel.T2);
        const s4_D = s3_D;

        const pts23_D = [];
        const pts41_D = [];
        for (let i = 0; i <= steps; i++) {
            // 2 -> 3 (P=cte)
            const t = res.diesel.T2 + (res.diesel.T3 - res.diesel.T2) * (i / steps);
            const s = s2_D + Cp * Math.log(t / res.diesel.T2);
            pts23_D.push({ S: s, T: t });

            // 4 -> 1 (V=cte)
            const t41 = 300 + (res.diesel.T4 - 300) * (i / steps);
            const s41 = s1_D + Cv * Math.log(t41 / 300);
            pts41_D.push({ S: s41, T: t41 });
        }

        // Draw area Diesel
        tsCtx.fillStyle = 'rgba(245, 158, 11, 0.08)';
        tsCtx.beginPath();
        tsCtx.moveTo(toX(s1_D), toY(300));
        tsCtx.lineTo(toX(s2_D), toY(res.diesel.T2));
        pts23_D.forEach(pt => tsCtx.lineTo(toX(pt.S), toY(pt.T)));
        tsCtx.lineTo(toX(s4_D), toY(res.diesel.T4));
        for (let i = pts41_D.length - 1; i >= 0; i--) {
            tsCtx.lineTo(toX(pts41_D[i].S), toY(pts41_D[i].T));
        }
        tsCtx.closePath();
        tsCtx.fill();

        // Draw Lines Diesel
        tsCtx.strokeStyle = '#f59e0b';
        tsCtx.lineWidth = 2.5;
        tsCtx.beginPath();
        tsCtx.moveTo(toX(s1_D), toY(300));
        tsCtx.lineTo(toX(s2_D), toY(res.diesel.T2)); // 1 -> 2
        pts23_D.forEach(pt => tsCtx.lineTo(toX(pt.S), toY(pt.T))); // 2 -> 3
        tsCtx.lineTo(toX(s4_D), toY(res.diesel.T4)); // 3 -> 4
        for (let i = pts41_D.length - 1; i >= 0; i--) {
            tsCtx.lineTo(toX(pts41_D[i].S), toY(pts41_D[i].T)); // 4 -> 1
        }
        tsCtx.stroke();

        // Tracers T-S
        const ph = phase;
        let oX, oY, dX, dY;

        // Otto trace
        if (ph < 0.25) {
            const t = ph / 0.25;
            const temp = 300 + (res.otto.T2 - 300) * t;
            oX = toX(0); oY = toY(temp);
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            const idx = Math.floor(t * (pts23_O.length - 1));
            oX = toX(pts23_O[idx].S); oY = toY(pts23_O[idx].T);
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            const temp = res.otto.T3 - (res.otto.T3 - res.otto.T4) * t;
            oX = toX(s3_O); oY = toY(temp);
        } else {
            const t = (ph - 0.75) / 0.25;
            const idx = Math.floor((1 - t) * (pts41_O.length - 1));
            oX = toX(pts41_O[idx].S); oY = toY(pts41_O[idx].T);
        }

        // Diesel trace
        if (ph < 0.25) {
            const t = ph / 0.25;
            const temp = 300 + (res.diesel.T2 - 300) * t;
            dX = toX(0); dY = toY(temp);
        } else if (ph < 0.5) {
            const t = (ph - 0.25) / 0.25;
            const idx = Math.floor(t * (pts23_D.length - 1));
            dX = toX(pts23_D[idx].S); dY = toY(pts23_D[idx].T);
        } else if (ph < 0.75) {
            const t = (ph - 0.5) / 0.25;
            const temp = res.diesel.T3 - (res.diesel.T3 - res.diesel.T4) * t;
            dX = toX(s3_D); dY = toY(temp);
        } else {
            const t = (ph - 0.75) / 0.25;
            const idx = Math.floor((1 - t) * (pts41_D.length - 1));
            dX = toX(pts41_D[idx].S); dY = toY(pts41_D[idx].T);
        }

        // Draw tracer dots
        tsCtx.fillStyle = '#ef4444';
        tsCtx.beginPath(); tsCtx.arc(oX, oY, 6, 0, Math.PI*2); tsCtx.fill();

        tsCtx.fillStyle = '#f59e0b';
        tsCtx.beginPath(); tsCtx.arc(dX, dY, 6, 0, Math.PI*2); tsCtx.fill();

        // Helper function for markers
        function drawStateMarker(ctx, x, y, num, color) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(x, y, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#0f1117';
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.stroke();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 8px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(num, x, y);
            ctx.restore();
        }

        // Draw State Markers 1, 2, 3, 4
        // State 1 is common
        drawStateMarker(tsCtx, toX(0), toY(300), "1", "#cbd5e1");

        // Otto States
        drawStateMarker(tsCtx, toX(0), toY(res.otto.T2), "2", "#ef4444");
        drawStateMarker(tsCtx, toX(s3_O), toY(res.otto.T3), "3", "#ef4444");
        drawStateMarker(tsCtx, toX(s4_O), toY(res.otto.T4), "4", "#ef4444");

        // Diesel States
        drawStateMarker(tsCtx, toX(0), toY(res.diesel.T2), "2", "#f59e0b");
        drawStateMarker(tsCtx, toX(s3_D), toY(res.diesel.T3), "3", "#f59e0b");
        drawStateMarker(tsCtx, toX(s4_D), toY(res.diesel.T4), "4", "#f59e0b");
    }

    // ── Live telemetry update (per-frame interpolation) ──────────
    function updateLiveTelemetry(ph, res) {
        const gamma = 1.4;
        // Volumes
        const v1_O = 1.0, v2_O = 1.0 / res.otto.r;
        const v1_D = 1.0, v2_D = 1.0 / res.diesel.r, v3_D = v2_D * res.diesel.rc;

        let lT_O, lP_O, lV_O;
        let lT_D, lP_D, lV_D;

        // Otto interpolation
        if (ph < 0.25) {
            // Compression 1->2
            const t = ph / 0.25;
            lV_O = v1_O - (v1_O - v2_O) * t;
            lP_O = 100 * Math.pow(v1_O / lV_O, gamma);
            lT_O = 300 * Math.pow(v1_O / lV_O, gamma - 1);
        } else if (ph < 0.5) {
            // Combustion 2->3 (isochoric, V constant)
            const t = (ph - 0.25) / 0.25;
            lV_O = v2_O;
            lP_O = res.otto.P2 + (res.otto.P3 - res.otto.P2) * t;
            lT_O = res.otto.T2 + (res.otto.T3 - res.otto.T2) * t;
        } else if (ph < 0.75) {
            // Expansion 3->4
            const t = (ph - 0.5) / 0.25;
            lV_O = v2_O + (v1_O - v2_O) * t;
            lP_O = res.otto.P3 * Math.pow(v2_O / lV_O, gamma);
            lT_O = res.otto.T3 * Math.pow(v2_O / lV_O, gamma - 1);
        } else {
            // Exhaust 4->1 (isochoric)
            const t = (ph - 0.75) / 0.25;
            lV_O = v1_O;
            lP_O = res.otto.P4 - (res.otto.P4 - 100) * t;
            lT_O = res.otto.T4 - (res.otto.T4 - 300) * t;
        }

        // Diesel interpolation
        if (ph < 0.25) {
            // Compression 1->2
            const t = ph / 0.25;
            lV_D = v1_D - (v1_D - v2_D) * t;
            lP_D = 100 * Math.pow(v1_D / lV_D, gamma);
            lT_D = 300 * Math.pow(v1_D / lV_D, gamma - 1);
        } else if (ph < 0.5) {
            // Combustion 2->3 (isobaric)
            const t = (ph - 0.25) / 0.25;
            lV_D = v2_D + (v3_D - v2_D) * t;
            lP_D = res.diesel.P3; // constant pressure
            lT_D = res.diesel.T2 + (res.diesel.T3 - res.diesel.T2) * t;
        } else if (ph < 0.75) {
            // Expansion 3->4
            const t = (ph - 0.5) / 0.25;
            lV_D = v3_D + (v1_D - v3_D) * t;
            lP_D = res.diesel.P3 * Math.pow(v3_D / lV_D, gamma);
            lT_D = res.diesel.T3 * Math.pow(v3_D / lV_D, gamma - 1);
        } else {
            // Exhaust 4->1
            const t = (ph - 0.75) / 0.25;
            lV_D = v1_D;
            lP_D = res.diesel.P4 - (res.diesel.P4 - 100) * t;
            lT_D = res.diesel.T4 - (res.diesel.T4 - 300) * t;
        }

        // Stage name
        const stageNames = ['Admisión', 'Compresión', 'Combustión', 'Fuerza/Expansión', 'Escape'];
        let stageIdx = 0;
        if (ph < 0.25) stageIdx = 1;
        else if (ph < 0.5) stageIdx = 2;
        else if (ph < 0.75) stageIdx = 3;
        else if (ph < 0.875) stageIdx = 4;

        // Update DOM
        const allElems = {
            'live-o-T': lT_O.toFixed(0),
            'live-o-P': lP_O.toFixed(0),
            'live-o-V': lV_O.toFixed(3),
            'live-o-W': res.otto.W.toFixed(1),
            'live-o-eta': (res.otto.eta * 100).toFixed(1),
            'live-d-T': lT_D.toFixed(0),
            'live-d-P': lP_D.toFixed(0),
            'live-d-V': lV_D.toFixed(3),
            'live-d-W': res.diesel.W.toFixed(1),
            'live-d-eta': (res.diesel.eta * 100).toFixed(1),
        };
        for (const [id, val] of Object.entries(allElems)) {
            const el = document.getElementById(id);
            if (el) el.textContent = val;
        }
        const stageLabel = stageNames[stageIdx];
        const stageNameEl = document.getElementById('live-stage-name');
        if (stageNameEl) stageNameEl.textContent = stageLabel;
        
        const pct = (ph * 100).toFixed(0) + '%';
        const progressEl = document.getElementById('live-progress');
        if (progressEl) progressEl.textContent = pct;
    }

    // ── Animation Loop ───────────────────────────────────────
    function animate() {
        if (state.isPlaying) {
            state.animPhase = (state.animPhase + 0.0018 * state.speed) % 1;
            const slider = document.getElementById('ottodiesel-cycle-phase');
            if (slider) {
                slider.value = state.animPhase;
            }
        }
        const ph = state.animPhase;

        // Clear styles of all process blocks
        processElements.forEach(el => {
            if (el) {
                el.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
                el.style.borderColor = 'transparent';
                el.style.boxShadow = 'none';
            }
        });

        // Restore dashed border for different stages, solid for identical stages
        const pAdm = document.getElementById('p-admision');
        const pComp = document.getElementById('p-compresion');
        const pComb = document.getElementById('p-combustion');
        const pFuer = document.getElementById('p-fuerza');
        const pEsc = document.getElementById('p-escape');

        if (pAdm) pAdm.style.borderColor = 'rgba(239, 68, 68, 0.25)';
        if (pComp) pComp.style.borderColor = 'rgba(239, 68, 68, 0.25)';
        if (pComb) pComb.style.borderColor = 'rgba(239, 68, 68, 0.25)';
        if (pFuer) pFuer.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        if (pEsc) pEsc.style.borderColor = 'rgba(255, 255, 255, 0.08)';

        // Determine active index
        let activeIdx = 0;
        if (ph < 0.25) {
            activeIdx = 1; // Compresión
        } else if (ph < 0.5) {
            activeIdx = 2; // Combustión
        } else if (ph < 0.75) {
            activeIdx = 3; // Fuerza (Expansión)
        } else if (ph < 0.875) {
            activeIdx = 4; // Escape
        } else {
            activeIdx = 0; // Admisión
        }

        const activeEl = processElements[activeIdx];
        if (activeEl) {
            const isDifferent = activeIdx <= 2;
            if (isDifferent) {
                // Highlight different stage with blue-purple glow
                activeEl.style.backgroundColor = 'rgba(99, 102, 241, 0.15)';
                activeEl.style.borderColor = 'rgba(99, 102, 241, 0.45)';
                activeEl.style.boxShadow = '0 0 10px rgba(99, 102, 241, 0.2)';
            } else {
                // Highlight identical stage with green-emerald glow
                activeEl.style.backgroundColor = 'rgba(16, 185, 129, 0.15)';
                activeEl.style.borderColor = 'rgba(16, 185, 129, 0.45)';
                activeEl.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.2)';
            }
        }

        const liveRes = solveCycles();
        updateLiveTelemetry(ph, liveRes);
        drawPV(state.animPhase);
        drawTS(state.animPhase);
        drawEngine(state.animPhase);
        state.animId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (state.animId) cancelAnimationFrame(state.animId);
        animate();
    }

    // ── Event listeners ──────────────────────────────────────
    function refresh() {
        state.rOtto = parseFloat(slROtto.value);
        state.rDiesel = parseFloat(slRDiesel.value);
        state.Tmax = parseInt(slTMax.value);
        state.speed = parseFloat(slSpeed.value);
        state.mode = slMode.value;

        if (state.mode === 'equal') {
            slRDiesel.disabled = true;
            // Force values to match Otto
            state.rDiesel = state.rOtto;
            slRDiesel.value = state.rOtto;
            spRDiesel.textContent = state.rOtto.toFixed(1) + ' (Forzado)';
        } else {
            slRDiesel.disabled = false;
            spRDiesel.textContent = state.rDiesel.toFixed(1);
        }

        spROtto.textContent = state.rOtto.toFixed(1);
        spTMax.textContent = state.Tmax;
        spSpeed.textContent = state.speed.toFixed(2);

        updateResults();
    }

    slMode.addEventListener('change', refresh);
    slROtto.addEventListener('input', refresh);
    slRDiesel.addEventListener('input', refresh);
    slTMax.addEventListener('input', refresh);
    slSpeed.addEventListener('input', refresh);

    // Play/Pause button and cycle phase manual slider listeners
    const slPhase = document.getElementById('ottodiesel-cycle-phase');
    const btnPlayPause = document.getElementById('ottodiesel-play-pause');
    const playPauseIcon = document.getElementById('ottodiesel-play-pause-icon');
    const playPauseText = document.getElementById('ottodiesel-play-pause-text');

    if (slPhase) {
        slPhase.addEventListener('input', function() {
            // Pause animation when slider is dragged manually
            state.isPlaying = false;
            if (playPauseIcon) playPauseIcon.className = 'fas fa-play';
            if (playPauseText) playPauseText.textContent = 'Reanudar';
            state.animPhase = parseFloat(this.value);
        });
    }

    if (btnPlayPause) {
        btnPlayPause.addEventListener('click', function() {
            state.isPlaying = !state.isPlaying;
            if (state.isPlaying) {
                if (playPauseIcon) playPauseIcon.className = 'fas fa-pause';
                if (playPauseText) playPauseText.textContent = 'Pausar';
            } else {
                if (playPauseIcon) playPauseIcon.className = 'fas fa-play';
                if (playPauseText) playPauseText.textContent = 'Reanudar';
            }
        });
    }

    // Only stop when the whole ottodiesel-sim tab is hidden (not on scroll)
    const simPane = document.getElementById('ottodiesel-sim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) startAnimation();
            else if (state.animId) { cancelAnimationFrame(state.animId); state.animId = null; }
        });
    }, { threshold: 0.0, rootMargin: '200px' });
    if (simPane) observer.observe(simPane);
    else observer.observe(pvCanvas);

    refresh();
    startAnimation();
}


// ═══════════════════════════════════════════════════════════════════════════
//  LAB 28b: NEWCOMEN vs. WATT — Steam Engine Efficiency Simulation
// ═══════════════════════════════════════════════════════════════════════════
function initWattLab() {
    const newcomenCanvas = document.getElementById('newcomen-canvas');
    const wattCanvas     = document.getElementById('watt-canvas');
    const tempChartEl    = document.getElementById('watt-temp-chart');
    if (!newcomenCanvas || !wattCanvas || !tempChartEl) return;

    const nCtx = newcomenCanvas.getContext('2d');
    const wCtx = wattCanvas.getContext('2d');

    const slSteam = document.getElementById('watt-steam-temp');
    const slCold  = document.getElementById('watt-cold-temp');
    const slSpeed = document.getElementById('watt-speed');
    const spSteam = document.getElementById('watt-steam-temp-val');
    const spCold  = document.getElementById('watt-cold-temp-val');
    const spSpeed = document.getElementById('watt-speed-val');

    const state = { steamT: 180, coldT: 20, speed: 1.0, phase: 0, animId: null,
                    newcomenCylT: 180, wattCylT: 180,
                    tHistory: [],       // rolling buffer of {t, n, w}
                    elapsedTime: 0,     // total simulated seconds
                    lastChartSample: 0  // last time we pushed to chart (ms)
                  };

    // Chart.js temperature history
    const tempChart = new Chart(tempChartEl, {
        type: 'line',
        data: {
            labels: [],
            datasets: [
                { label: 'Newcomen — Cilindro', data: [], borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.08)', borderWidth: 2, pointRadius: 0, tension: 0.35, fill: true },
                { label: 'Watt — Cilindro',     data: [], borderColor: '#22d3ee', backgroundColor: 'rgba(34,211,238,0.08)', borderWidth: 2, pointRadius: 0, tension: 0.2,  fill: true }
            ]
        },
        options: {
            responsive: true, maintainAspectRatio: false, animation: false,
            scales: {
                x: { title: { display: true, text: 'Tiempo (s)', color: '#94a3b8', font: { size: 11 } }, ticks: { color: '#64748b', maxTicksLimit: 10 }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { title: { display: true, text: 'T cilindro (°C)', color: '#94a3b8', font: { size: 11 } }, ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            },
            plugins: { legend: { labels: { color: '#cbd5e1', font: { size: 11 }, boxWidth: 14 } } }
        }
    });

    // Physics helpers
    function carnotEff(TH, TC) { return Math.max(0, ((TH + 273.15) - (TC + 273.15)) / (TH + 273.15)); }
    function newcomenCylT(ph, sT, cT) {
        return ph < 0.45 ? cT + (sT - cT) * (1 - Math.exp(-3.5 * ph / 0.45))
                         : cT + (sT - cT) * Math.exp(-4 * (ph - 0.45) / 0.55);
    }
    function wattCylT(ph, sT) { return sT - 5 + 5 * Math.sin(ph * Math.PI * 2); }
    function newcomenEff(sT, cT) { return carnotEff(sT, cT) * 100 * 0.028; }
    function wattEffFn(sT, cT)   { return carnotEff(sT, cT) * 100 * 0.12;  }
    function coalKgH(eff)        { return eff > 0 ? (5 / (eff / 100 * 30000)) * 3600 : 999; }

    // Draw Newcomen engine
    function drawNewcomen(ctx, canvas, ph, cylT, sT, cT) {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#0a0f1e'; ctx.fillRect(0, 0, W, H);

        const cx = W * 0.44, cylW = 68, cylTop = 55, cylH = H * 0.52, stroke = cylH * 0.72;
        const isHeat = ph < 0.45;
        const pistY = isHeat ? stroke * (1 - ph / 0.45) : stroke * ((ph - 0.45) / 0.55);

        // Boiler
        const bx = 28, by = H * 0.55, bw = 52, bh = 68;
        const bG = ctx.createLinearGradient(bx, by, bx, by + bh);
        bG.addColorStop(0, '#7f1d1d'); bG.addColorStop(1, '#450a0a');
        ctx.fillStyle = bG; ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 6); ctx.fill();
        ctx.strokeStyle = '#dc2626'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#fca5a5'; ctx.font = 'bold 8px Inter'; ctx.textAlign = 'center';
        ctx.fillText('CALDERA', bx + bw / 2, by + bh / 2 + 3);
        const fh = 12 + 5 * Math.sin(ph * Math.PI * 7);
        ctx.fillStyle = `rgba(251,191,36,${0.65 + 0.3 * Math.sin(ph * 9)})`;
        ctx.beginPath(); ctx.ellipse(bx + bw / 2, by + bh + fh / 2, bw * 0.32, fh, 0, 0, Math.PI * 2); ctx.fill();

        // Steam pipe
        ctx.strokeStyle = isHeat ? '#fbbf24' : '#334155'; ctx.lineWidth = 6; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(bx + bw, by + 18); ctx.lineTo(cx - cylW / 2, by + 18); ctx.lineTo(cx - cylW / 2, cylTop + 8); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx - cylW / 2, by + 18, 5, 0, Math.PI * 2);
        ctx.fillStyle = isHeat ? '#fbbf24' : '#1e293b'; ctx.fill();

        // Water injection
        ctx.strokeStyle = !isHeat ? '#38bdf8' : '#1e293b'; ctx.lineWidth = 5;
        ctx.beginPath(); ctx.moveTo(cx + cylW / 2 + 38, H * 0.22); ctx.lineTo(cx + cylW / 2, H * 0.22); ctx.lineTo(cx + cylW / 2, cylTop + 8); ctx.stroke();
        if (!isHeat) {
            ctx.fillStyle = '#7dd3fc'; ctx.font = '7px Inter'; ctx.textAlign = 'left';
            ctx.fillText('AGUA FRÍA', cx + cylW / 2 + 5, H * 0.22 + 3);
            for (let i = 0; i < 3; i++) {
                const dy = H * 0.22 + (ph * H * 1.5 + i * 22) % (cylH * 0.55);
                ctx.beginPath(); ctx.arc(cx + cylW / 2 + 14, dy, 3, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(56,189,248,0.75)'; ctx.fill();
            }
        }

        // Cylinder with thermal color
        const norm = (cylT - cT) / Math.max(1, sT - cT);
        const r = Math.round(30 + 220 * norm), g = Math.round(30 + 60 * (1 - norm)), b = Math.round(180 * (1 - norm));
        const cG = ctx.createLinearGradient(cx - cylW / 2, 0, cx + cylW / 2, 0);
        cG.addColorStop(0, `rgba(${r},${g},${b},0.2)`); cG.addColorStop(0.5, `rgba(${r},${g},${b},0.45)`); cG.addColorStop(1, `rgba(${r},${g},${b},0.2)`);
        ctx.fillStyle = cG; ctx.fillRect(cx - cylW / 2, cylTop, cylW, cylH);
        ctx.strokeStyle = '#475569'; ctx.lineWidth = 4; ctx.strokeRect(cx - cylW / 2, cylTop, cylW, cylH);

        if (isHeat) {
            for (let i = 0; i < 7; i++) {
                const px = cx - cylW / 2 + 8 + Math.sin(ph * 6 + i * 1.3) * (cylW - 16) / 2 + (cylW - 16) / 2;
                const py = cylTop + 5 + (i / 7) * (cylH * 0.45) * (1 - ph / 0.45);
                ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(251,191,36,${0.35 + 0.35 * Math.sin(ph * 8 + i)})`; ctx.fill();
            }
        }

        // Piston
        const pY = cylTop + pistY;
        ctx.fillStyle = '#64748b'; ctx.fillRect(cx - cylW / 2 + 3, pY, cylW - 6, 14);
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.strokeRect(cx - cylW / 2 + 3, pY, cylW - 6, 14);
        ctx.fillStyle = '#94a3b8'; ctx.fillRect(cx - 4, pY + 14, 8, cylTop + cylH - pY - 14 + 18);

        // Beam
        const bpx = cx + 42, bpy = cylTop - 18;
        ctx.strokeStyle = '#78716c'; ctx.lineWidth = 8; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(cx, pY - 16); ctx.lineTo(bpx, bpy); ctx.lineTo(bpx * 2 - cx, cylTop + cylH - pistY); ctx.stroke();
        ctx.beginPath(); ctx.arc(bpx, bpy, 6, 0, Math.PI * 2); ctx.fillStyle = '#a8a29e'; ctx.fill();

        // Temperature badge
        ctx.fillStyle = `rgba(${r},${g},${b},0.85)`; ctx.beginPath(); ctx.roundRect(cx - 28, cylTop + 6, 56, 22, 4); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 11px Inter'; ctx.textAlign = 'center';
        ctx.fillText(`${cylT.toFixed(0)} °C`, cx, cylTop + 21);
        ctx.fillStyle = isHeat ? '#fbbf24' : '#38bdf8'; ctx.font = 'bold 9px Inter';
        ctx.fillText(isHeat ? '▲ VAPOR  calentando' : '▼ AGUA FRÍA enfriando', cx, H - 10);
    }

    // ── Draw Watt engine — double-action cycle ─────────────────
    // Phase 0→0.5 : Steam ABOVE piston → piston moves DOWN  (power stroke 1)
    // Phase 0.5→1 : Steam BELOW piston → piston moves UP    (power stroke 2)
    function drawWattEngine(ctx, canvas, ph, cylT, sT, cT) {
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);

        // ── Background ──────────────────────────────────────────
        const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
        bgGrad.addColorStop(0, '#070d1a');
        bgGrad.addColorStop(1, '#0a1020');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // ── Layout constants ────────────────────────────────────
        const cx     = W * 0.38;   // cylinder center-x
        const cylW   = 72;
        const cylTop = 52;
        const cylH   = H * 0.50;
        const cylBot = cylTop + cylH;
        const stroke = cylH * 0.74;

        // Double-action piston: DOWN during 0→0.5, UP during 0.5→1
        const downStroke = ph < 0.5;
        const phHalf     = downStroke ? ph / 0.5 : (ph - 0.5) / 0.5;   // 0→1 within each half
        const pistY      = downStroke ? stroke * phHalf : stroke * (1 - phHalf);
        const pYabs      = cylTop + pistY;   // absolute Y of piston top

        // ── Helper: draw a flow-particle stream ─────────────────
        function flowParticles(x1, y1, x2, y2, speed, color, size, count) {
            for (let i = 0; i < count; i++) {
                const t = (ph * speed + i / count) % 1;
                const px = x1 + (x2 - x1) * t;
                const py = y1 + (y2 - y1) * t;
                const alpha = 0.7 * Math.sin(t * Math.PI);
                ctx.beginPath();
                ctx.arc(px, py, size * (0.6 + 0.4 * Math.sin(t * Math.PI * 2)), 0, Math.PI * 2);
                ctx.fillStyle = color.replace('A', `${alpha.toFixed(2)}`);
                ctx.fill();
            }
        }

        // ── Helper: draw valve dot ──────────────────────────────
        function valve(x, y, open, openColor, label) {
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, Math.PI * 2);
            ctx.fillStyle = open ? openColor : '#1e293b';
            ctx.fill();
            ctx.strokeStyle = open ? openColor : '#334155';
            ctx.lineWidth = 1.5;
            ctx.stroke();
            if (label) {
                ctx.fillStyle = open ? openColor : '#475569';
                ctx.font = '6px Inter';
                ctx.textAlign = 'center';
                ctx.fillText(label, x, y - 9);
            }
        }

        // ═══════════════════════════════════════════════════════
        // 1. BOILER (left side)
        // ═══════════════════════════════════════════════════════
        const bx = 14, by = H * 0.62, bw = 52, bh = H * 0.22;
        const boilerGrad = ctx.createLinearGradient(bx, by, bx, by + bh);
        boilerGrad.addColorStop(0, '#1e3a6e');
        boilerGrad.addColorStop(0.6, '#0f2040');
        boilerGrad.addColorStop(1, '#070d1a');
        ctx.fillStyle = boilerGrad;
        ctx.beginPath(); ctx.roundRect(bx, by, bw, bh, 8); ctx.fill();
        ctx.strokeStyle = '#3b82f6'; ctx.lineWidth = 2; ctx.stroke();

        // Boiler label
        ctx.fillStyle = '#93c5fd'; ctx.font = 'bold 7.5px Inter'; ctx.textAlign = 'center';
        ctx.fillText('CALDERA', bx + bw / 2, by + 14);
        ctx.fillStyle = '#60a5fa'; ctx.font = '6.5px Inter';
        ctx.fillText(`~${sT}°C`, bx + bw / 2, by + 25);

        // Bubble animation inside boiler
        for (let i = 0; i < 5; i++) {
            const bblX = bx + 8 + Math.sin(ph * 4 + i * 1.3) * (bw - 20) / 2 + (bw - 20) / 2;
            const bblY = by + bh - 8 - ((ph * 1.2 + i * 0.2) % 1) * (bh - 20);
            ctx.beginPath(); ctx.arc(bblX, bblY, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147,197,253,${0.2 + 0.3 * Math.sin(ph * 5 + i)})`; ctx.fill();
        }

        // Flame under boiler
        const flameH = 14 + 6 * Math.sin(ph * Math.PI * 8);
        const flameGrad = ctx.createRadialGradient(bx + bw / 2, by + bh + flameH, 2, bx + bw / 2, by + bh, bw * 0.4);
        flameGrad.addColorStop(0, 'rgba(255,200,50,0.9)');
        flameGrad.addColorStop(0.5, 'rgba(255,100,20,0.6)');
        flameGrad.addColorStop(1, 'rgba(220,40,0,0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.ellipse(bx + bw / 2, by + bh + flameH * 0.5, bw * 0.4, flameH, 0, 0, Math.PI * 2);
        ctx.fill();

        // ═══════════════════════════════════════════════════════
        // 2. STEAM DISTRIBUTION PIPE (boiler → cylinder top/bottom)
        //    Steam main header runs from boiler up to two branches
        // ═══════════════════════════════════════════════════════
        const mainPipeY  = by - 8;               // horizontal main header Y
        const topPortX   = cx - cylW / 2;        // where pipe enters top of cylinder
        const botPortX   = cx - cylW / 2;        // where pipe enters bottom

        // Main header pipe (boiler → distribution point)
        ctx.strokeStyle = '#1d4ed8'; ctx.lineWidth = 7; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(bx + bw, by + 15);
        ctx.lineTo(cx - cylW / 2 - 18, by + 15);
        ctx.lineTo(cx - cylW / 2 - 18, mainPipeY);
        ctx.stroke();

        // Branch 1: main header → TOP of cylinder
        ctx.strokeStyle = downStroke ? '#fbbf24' : '#1e3a5f';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(cx - cylW / 2 - 18, mainPipeY);
        ctx.lineTo(cx - cylW / 2, mainPipeY);
        ctx.lineTo(cx - cylW / 2, cylTop + 2);
        ctx.stroke();

        // Branch 2: main header → BOTTOM of cylinder
        ctx.strokeStyle = !downStroke ? '#fbbf24' : '#1e3a5f';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(cx - cylW / 2 - 18, mainPipeY);
        ctx.lineTo(cx - cylW / 2 - 18, cylBot + 8);
        ctx.lineTo(cx - cylW / 2, cylBot + 2);
        ctx.stroke();

        // Valve 1 (top steam inlet) — open during downstroke
        valve(cx - cylW / 2, cylTop + 2, downStroke, '#fbbf24', 'V1');

        // Valve 2 (bottom steam inlet) — open during upstroke
        valve(cx - cylW / 2, cylBot + 2, !downStroke, '#fbbf24', 'V2');

        // ── Animated steam particles — clipped to cylinder interior ──
        ctx.save();
        // Clip region = interior of cylinder (inside the walls)
        ctx.beginPath();
        ctx.rect(cx - cylW / 2 + 3, cylTop + 2, cylW - 6, cylH - 4);
        ctx.clip();

        if (downStroke) {
            // Stroke ① — steam fills space ABOVE piston (cylinder top → piston top)
            const availH = Math.max(0, pYabs - cylTop - 4);
            for (let i = 0; i < 8; i++) {
                const t = (phHalf * 1.2 + i / 8) % 1;
                // x: centered on cx, bounded ±(cylW/2 - 8) so always inside walls
                const px = cx + Math.sin(t * Math.PI * 4 + i * 0.9) * (cylW / 2 - 8);
                // y: top of cylinder down to just above the piston
                const py = cylTop + 6 + t * availH;
                ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(251,191,36,${0.55 + 0.35 * Math.sin(t * Math.PI)})`; ctx.fill();
            }
        } else {
            // Stroke ② — steam fills space BELOW piston (piston bottom → cylinder bottom)
            const pistonBot = pYabs + 14;
            const availH = Math.max(0, cylBot - pistonBot - 4);
            for (let i = 0; i < 8; i++) {
                const t = (phHalf * 1.2 + i / 8) % 1;
                const px = cx + Math.sin(t * Math.PI * 4 + i * 0.9) * (cylW / 2 - 8);
                // y: just below piston up to cylinder bottom
                const py = pistonBot + 4 + t * availH;
                ctx.beginPath(); ctx.arc(px, py, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(251,191,36,${0.55 + 0.35 * Math.sin(t * Math.PI)})`; ctx.fill();
            }
        }

        ctx.restore();  // remove clip

        // ═══════════════════════════════════════════════════════
        // 3. STEAM JACKET (Watt innovation — keeps cylinder warm)
        // ═══════════════════════════════════════════════════════
        const jacketPulse = 0.12 + 0.04 * Math.sin(ph * Math.PI * 4);
        ctx.strokeStyle = `rgba(251,146,60,${jacketPulse + 0.25})`;
        ctx.lineWidth = 8;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(cx - cylW / 2 - 6, cylTop - 6, cylW + 12, cylH + 12);
        ctx.setLineDash([]);
        // Jacket label
        ctx.fillStyle = 'rgba(253,186,116,0.85)';
        ctx.font = '6.5px Inter'; ctx.textAlign = 'left';
        ctx.fillText('CAMISA', cx + cylW / 2 + 8, cylTop + 16);
        ctx.fillText('DE VAPOR', cx + cylW / 2 + 8, cylTop + 26);
        ctx.fillText('(siempre', cx + cylW / 2 + 8, cylTop + 36);
        ctx.fillText('caliente)', cx + cylW / 2 + 8, cylTop + 46);

        // ═══════════════════════════════════════════════════════
        // 4. CYLINDER BODY (color-coded by temperature)
        // ═══════════════════════════════════════════════════════
        // Above piston: active steam zone (warm, yellow-tinted)
        // Below piston: exhaust/vacuum zone (cooler, blue-tinted)
        const aboveH = pYabs - cylTop;
        const belowH = cylBot - (pYabs + 14);

        // Zone above piston
        const aboveGrad = ctx.createLinearGradient(cx, cylTop, cx, pYabs);
        if (downStroke) {
            aboveGrad.addColorStop(0, 'rgba(251,191,36,0.25)');
            aboveGrad.addColorStop(1, 'rgba(251,191,36,0.08)');
        } else {
            aboveGrad.addColorStop(0, 'rgba(30,58,95,0.3)');
            aboveGrad.addColorStop(1, 'rgba(30,58,95,0.1)');
        }
        ctx.fillStyle = aboveGrad;
        ctx.fillRect(cx - cylW / 2 + 3, cylTop + 2, cylW - 6, Math.max(0, aboveH - 2));

        // Zone below piston
        const belowGrad = ctx.createLinearGradient(cx, pYabs + 14, cx, cylBot);
        if (!downStroke) {
            belowGrad.addColorStop(0, 'rgba(251,191,36,0.08)');
            belowGrad.addColorStop(1, 'rgba(251,191,36,0.25)');
        } else {
            belowGrad.addColorStop(0, 'rgba(30,58,95,0.1)');
            belowGrad.addColorStop(1, 'rgba(30,58,95,0.3)');
        }
        ctx.fillStyle = belowGrad;
        if (belowH > 0) ctx.fillRect(cx - cylW / 2 + 3, pYabs + 16, cylW - 6, belowH - 2);

        // Cylinder walls
        ctx.strokeStyle = '#0e7490'; ctx.lineWidth = 3;
        ctx.strokeRect(cx - cylW / 2, cylTop, cylW, cylH);
        // Top cap
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - cylW / 2, cylTop - 6, cylW, 8);
        ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 2;
        ctx.strokeRect(cx - cylW / 2, cylTop - 6, cylW, 8);
        // Bottom cap
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - cylW / 2, cylBot - 2, cylW, 8);
        ctx.strokeStyle = '#1e40af'; ctx.lineWidth = 2;
        ctx.strokeRect(cx - cylW / 2, cylBot - 2, cylW, 8);

        // ═══════════════════════════════════════════════════════
        // 5. EXHAUST PIPES → CONDENSER
        //    Exhaust exits from the side that lost steam (vacuum side)
        // ═══════════════════════════════════════════════════════
        const condX = cx + cylW / 2 + 55;
        const condY = H * 0.30;
        const condW = 50;
        const condH = 80;
        const condMidY = condY + condH / 2;

        // Exhaust pipe from top of cylinder (active during upstroke — Watt empties top)
        const topExhaustActive = !downStroke;
        ctx.strokeStyle = topExhaustActive ? '#94a3b8' : '#1e293b';
        ctx.lineWidth = 4; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + cylW / 2, cylTop + 10);
        ctx.lineTo(condX, condY + 15);
        ctx.stroke();
        // Exhaust valve top
        valve(cx + cylW / 2 + 2, cylTop + 10, topExhaustActive, '#94a3b8', 'EV1');

        // Exhaust pipe from bottom of cylinder (active during downstroke)
        const botExhaustActive = downStroke;
        ctx.strokeStyle = botExhaustActive ? '#94a3b8' : '#1e293b';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx + cylW / 2, cylBot - 10);
        ctx.lineTo(condX, condY + condH - 15);
        ctx.stroke();
        // Exhaust valve bottom
        valve(cx + cylW / 2 + 2, cylBot - 10, botExhaustActive, '#94a3b8', 'EV2');

        // Animated exhaust vapor particles → condenser
        const activeExhaustY = botExhaustActive ? cylBot - 10 : cylTop + 10;
        const targetExhaustY = botExhaustActive ? condY + condH - 15 : condY + 15;
        for (let i = 0; i < 5; i++) {
            const t = (phHalf * 1.5 + i / 5) % 1;
            const ex = (cx + cylW / 2 + 2) + (condX - cx - cylW / 2 - 2) * t;
            const ey = activeExhaustY + (targetExhaustY - activeExhaustY) * t;
            ctx.beginPath(); ctx.arc(ex, ey, 3.5 * (1 - t * 0.7), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(148,163,184,${0.6 * (1 - t)})`; ctx.fill();
        }

        // ═══════════════════════════════════════════════════════
        // 6. CONDENSER (always cold, always condensing)
        // ═══════════════════════════════════════════════════════
        const condGrad = ctx.createLinearGradient(condX, condY, condX, condY + condH);
        condGrad.addColorStop(0, '#0c4a6e');
        condGrad.addColorStop(0.5, '#083344');
        condGrad.addColorStop(1, '#042f2e');
        ctx.fillStyle = condGrad;
        ctx.beginPath(); ctx.roundRect(condX, condY, condW, condH, 8); ctx.fill();
        ctx.strokeStyle = '#06b6d4'; ctx.lineWidth = 2; ctx.stroke();

        // Condenser label
        ctx.fillStyle = '#67e8f9'; ctx.font = 'bold 7px Inter'; ctx.textAlign = 'center';
        ctx.fillText('CONDENSADOR', condX + condW / 2, condY + 13);
        ctx.fillStyle = '#22d3ee'; ctx.font = '6px Inter';
        ctx.fillText('SEPARADO', condX + condW / 2, condY + 23);
        ctx.fillStyle = '#0ea5e9'; ctx.font = '6px Inter';
        ctx.fillText(`~${cT}°C`, condX + condW / 2, condY + 33);

        // Water condensation dripping inside condenser
        const waterLevel = condY + condH - 8 - ((ph * 0.3) % 1) * 15;
        ctx.fillStyle = 'rgba(56,189,248,0.35)';
        ctx.fillRect(condX + 4, waterLevel, condW - 8, condY + condH - 4 - waterLevel);

        // Condensation drops forming on walls
        for (let i = 0; i < 6; i++) {
            const dropX = condX + 6 + (i % 3) * (condW / 3 - 4);
            const dropY = condY + 38 + ((ph * 0.8 + i * 0.16) % 1) * (condH - 45);
            const dropSize = 2 + 1.5 * Math.sin(ph * 3 + i);
            ctx.beginPath(); ctx.arc(dropX, dropY, dropSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56,189,248,${0.5 + 0.3 * Math.sin(ph * 4 + i)})`; ctx.fill();
        }

        // Cold water jacket around condenser (Watt kept condenser always cold)
        ctx.strokeStyle = 'rgba(56,189,248,0.3)'; ctx.lineWidth = 6; ctx.setLineDash([3, 3]);
        ctx.strokeRect(condX - 4, condY - 4, condW + 8, condH + 8);
        ctx.setLineDash([]);
        ctx.fillStyle = '#7dd3fc'; ctx.font = '6px Inter'; ctx.textAlign = 'center';
        ctx.fillText('agua fría exterior', condX + condW / 2, condY + condH + 14);

        // ═══════════════════════════════════════════════════════
        // 7. WATER RETURN PUMP (water from condenser back to boiler)
        // ═══════════════════════════════════════════════════════
        const pumpX = condX + condW / 2 - 15;
        const pumpY = condY + condH + 20;
        const pumpR = 12;

        // Pump body
        ctx.fillStyle = '#1e3a5f';
        ctx.beginPath(); ctx.roundRect(pumpX, pumpY, 30, 22, 5); ctx.fill();
        ctx.strokeStyle = '#2563eb'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = '#93c5fd'; ctx.font = 'bold 6px Inter'; ctx.textAlign = 'center';
        ctx.fillText('BOMBA', pumpX + 15, pumpY + 14);

        // Pump piston animation
        const pumpPhase = (ph * 2) % 1;
        ctx.fillStyle = `rgba(59,130,246,${0.4 + 0.3 * Math.sin(pumpPhase * Math.PI * 2)})`;
        ctx.fillRect(pumpX + 3, pumpY + 3, 24, 8);

        // Water return pipe: condenser bottom → pump → boiler
        const returnColor = `rgba(56,189,248,${0.5 + 0.3 * Math.sin(ph * 3)})`;
        ctx.strokeStyle = '#0284c7'; ctx.lineWidth = 3; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(condX + condW / 2, condY + condH);
        ctx.lineTo(condX + condW / 2, pumpY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pumpX, pumpY + 11);
        ctx.lineTo(bx + bw / 2, pumpY + 11);
        ctx.lineTo(bx + bw / 2, by + bh);
        ctx.stroke();

        // Animated water return flow (blue droplets going to boiler)
        for (let i = 0; i < 4; i++) {
            const t = (ph * 0.8 + i / 4) % 1;
            // Path: condenser bottom → boiler top
            const wx = (condX + condW / 2) + (bx + bw / 2 - condX - condW / 2) * t;
            const wy = (pumpY + 11);
            ctx.beginPath(); ctx.arc(wx, wy, 3 * (1 - t * 0.3), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56,189,248,${0.7 * (0.5 + 0.5 * Math.sin(t * Math.PI))})`; ctx.fill();
        }

        // ═══════════════════════════════════════════════════════
        // 8. PISTON & PISTON ROD
        // ═══════════════════════════════════════════════════════
        // Piston body
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - cylW / 2 + 3, pYabs, cylW - 6, 14);
        // Piston highlight
        const pistGrad = ctx.createLinearGradient(cx - cylW / 2, pYabs, cx + cylW / 2, pYabs);
        pistGrad.addColorStop(0, 'rgba(100,116,139,0.6)');
        pistGrad.addColorStop(0.3, 'rgba(203,213,225,0.9)');
        pistGrad.addColorStop(0.7, 'rgba(148,163,184,0.8)');
        pistGrad.addColorStop(1, 'rgba(71,85,105,0.6)');
        ctx.fillStyle = pistGrad;
        ctx.fillRect(cx - cylW / 2 + 4, pYabs + 1, cylW - 8, 12);
        // Piston rings
        ctx.strokeStyle = '#22d3ee'; ctx.lineWidth = 1.5;
        ctx.strokeRect(cx - cylW / 2 + 3, pYabs, cylW - 6, 14);
        ctx.strokeStyle = 'rgba(34,211,238,0.4)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(cx - cylW / 2 + 5, pYabs + 4); ctx.lineTo(cx + cylW / 2 - 5, pYabs + 4); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx - cylW / 2 + 5, pYabs + 9); ctx.lineTo(cx + cylW / 2 - 5, pYabs + 9); ctx.stroke();

        // Piston rod (extends DOWN from piston to crankshaft)
        ctx.fillStyle = '#475569';
        ctx.fillRect(cx - 5, pYabs + 14, 10, cylBot + 20 - pYabs - 14);
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 1;
        ctx.strokeRect(cx - 5, pYabs + 14, 10, cylBot + 20 - pYabs - 14);

        // ═══════════════════════════════════════════════════════
        // 9. CRANKSHAFT — continuous rotation (Watt's great innovation)
        // ═══════════════════════════════════════════════════════
        const crX = cx, crY = cylBot + 40, crR = 22;
        const crAngle = ph * Math.PI * 2 - Math.PI / 2;  // starts at top

        // Flywheel outer ring
        ctx.strokeStyle = '#334155'; ctx.lineWidth = 8;
        ctx.beginPath(); ctx.arc(crX, crY, crR + 8, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = '#475569'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(crX, crY, crR + 8, 0, Math.PI * 2); ctx.stroke();

        // Flywheel spokes
        for (let s = 0; s < 4; s++) {
            const sAngle = crAngle + s * Math.PI / 2;
            ctx.strokeStyle = '#334155'; ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(crX, crY);
            ctx.lineTo(crX + Math.cos(sAngle) * (crR + 6), crY + Math.sin(sAngle) * (crR + 6));
            ctx.stroke();
        }

        // Crank pin position
        const pinX = crX + Math.cos(crAngle) * crR;
        const pinY = crY + Math.sin(crAngle) * crR;

        // Connecting rod (piston rod bottom → crank pin)
        ctx.strokeStyle = '#64748b'; ctx.lineWidth = 6; ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, cylBot + 20);
        ctx.lineTo(pinX, pinY);
        ctx.stroke();

        // Center hub
        ctx.beginPath(); ctx.arc(crX, crY, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#1e293b'; ctx.fill();
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 2; ctx.stroke();

        // Crank pin
        ctx.beginPath(); ctx.arc(pinX, pinY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#22d3ee'; ctx.fill();

        // Power output shaft label
        ctx.fillStyle = '#64748b'; ctx.font = '6.5px Inter'; ctx.textAlign = 'center';
        ctx.fillText('⚙️ EJE ROTATIVO', crX, crY + crR + 20);

        // ═══════════════════════════════════════════════════════
        // 10. CYLINDER TEMPERATURE BADGE
        // ═══════════════════════════════════════════════════════
        ctx.fillStyle = 'rgba(6,182,212,0.85)';
        ctx.beginPath(); ctx.roundRect(cx - 30, cylTop - 30, 60, 22, 5); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.font = 'bold 10px Inter'; ctx.textAlign = 'center';
        ctx.fillText(`${cylT.toFixed(0)} °C`, cx, cylTop - 14);

        // ═══════════════════════════════════════════════════════
        // 11. PHASE LABEL (which half of the double-action cycle)
        // ═══════════════════════════════════════════════════════
        const phaseLabel  = downStroke ? '① VAPOR ↓  |  vacío ↑ → condensador' : '② VAPOR ↑  |  vacío ↓ → condensador';
        const phaseColor  = downStroke ? '#fbbf24' : '#a78bfa';

        // Bottom status bar
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, H - 24, W, 24);
        ctx.fillStyle = phaseColor;
        ctx.font = 'bold 8px Inter'; ctx.textAlign = 'center';
        ctx.fillText(phaseLabel, W / 2, H - 10);

        // Progress bar for current half-cycle
        const barW = W - 20;
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fillRect(10, H - 22, barW, 3);
        ctx.fillStyle = phaseColor;
        ctx.fillRect(10, H - 22, barW * phHalf, 3);
    }

    function resizeCanvases() {
        [newcomenCanvas, wattCanvas].forEach(c => {
            const rect = c.parentElement.getBoundingClientRect();
            c.width  = Math.max(rect.width || 300, 200);
            c.height = Math.max(rect.height || 380, 200);
        });
    }
    resizeCanvases();

    function updateMetrics() {
        const effN = newcomenEff(state.steamT, state.coldT);
        const effW = wattEffFn(state.steamT, state.coldT);
        const carnot = carnotEff(state.steamT, state.coldT) * 100;
        const cN = coalKgH(effN), cW = coalKgH(effW);
        const saving = cN > 0 ? (cN - cW) / cN * 100 : 0;

        document.getElementById('watt-newcomen-tcyl').textContent  = `${state.newcomenCylT.toFixed(0)} °C`;
        document.getElementById('watt-newcomen-coal').textContent  = `${cN.toFixed(1)} kg/h`;
        document.getElementById('watt-newcomen-waste').textContent = `${(100 - effN).toFixed(1)} %`;
        document.getElementById('watt-newcomen-eff').textContent   = `${effN.toFixed(2)} %`;
        document.getElementById('watt-watt-tcyl').textContent  = `${state.wattCylT.toFixed(0)} °C`;
        document.getElementById('watt-watt-coal').textContent  = `${cW.toFixed(1)} kg/h`;
        document.getElementById('watt-watt-waste').textContent = `${(100 - effW).toFixed(1)} %`;
        document.getElementById('watt-watt-eff').textContent   = `${effW.toFixed(2)} %`;
        document.getElementById('watt-coal-saving').textContent  = `${saving.toFixed(1)} %`;
        document.getElementById('watt-eff-ratio').textContent    = `${(effW / Math.max(effN, 0.001)).toFixed(1)} ×`;
        document.getElementById('watt-carnot-limit').textContent = `${carnot.toFixed(1)} %`;
    }

    let lastTimestamp = null;
    const CHART_SAMPLE_MS  = 80;   // sample temperature every 80 ms of real time
    const CHART_MAX_POINTS = 250;  // rolling window size

    function animate(ts) {
        if (!lastTimestamp) lastTimestamp = ts;
        const dtReal = ts - lastTimestamp;          // ms of real wall-clock time
        const dtSim  = dtReal / 1000;               // seconds of real time
        lastTimestamp = ts;

        state.phase = (state.phase + dtSim * state.speed * 0.25) % 1;

        // Compute current cylinder temperatures
        state.newcomenCylT = newcomenCylT(state.phase, state.steamT, state.coldT);
        state.wattCylT     = wattCylT(state.phase, state.steamT);

        // ── Real-time chart sampling (every CHART_SAMPLE_MS of wall time) ──
        if (ts - state.lastChartSample >= CHART_SAMPLE_MS) {
            const deltaSinceLastSample = ts - state.lastChartSample;
            state.elapsedTime += deltaSinceLastSample / 1000;  // accumulate real seconds
            state.lastChartSample = ts;

            const label = state.elapsedTime.toFixed(1);

            if (state.tHistory.length >= CHART_MAX_POINTS) state.tHistory.shift();
            state.tHistory.push({
                t: label,
                n: parseFloat(state.newcomenCylT.toFixed(1)),
                w: parseFloat(state.wattCylT.toFixed(1))
            });

            tempChart.data.labels           = state.tHistory.map(d => d.t);
            tempChart.data.datasets[0].data = state.tHistory.map(d => d.n);
            tempChart.data.datasets[1].data = state.tHistory.map(d => d.w);
            tempChart.update('none');
        }

        drawNewcomen(nCtx, newcomenCanvas, state.phase, state.newcomenCylT, state.steamT, state.coldT);
        drawWattEngine(wCtx, wattCanvas, state.phase, state.wattCylT, state.steamT, state.coldT);
        updateMetrics();

        state.animId = requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (state.animId) cancelAnimationFrame(state.animId);
        lastTimestamp = null;
        state.lastChartSample = 0;  // reset sampling clock on restart
        state.animId = requestAnimationFrame(animate);
    }

    function refresh() {
        state.steamT = parseInt(slSteam.value);
        state.coldT  = parseInt(slCold.value);
        state.speed  = parseFloat(slSpeed.value);
        spSteam.textContent = state.steamT;
        spCold.textContent  = state.coldT;
        spSpeed.textContent = state.speed.toFixed(1);
    }
    slSteam.addEventListener('input', refresh);
    slCold.addEventListener('input', refresh);
    slSpeed.addEventListener('input', refresh);
    refresh();

    const simPane = document.getElementById('watt-sim');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { resizeCanvases(); startAnimation(); }
            else if (state.animId) { cancelAnimationFrame(state.animId); state.animId = null; }
        });
    }, { threshold: 0.05, rootMargin: '100px' });
    if (simPane) observer.observe(simPane);
}

document.addEventListener('DOMContentLoaded', () => { initWattLab(); });




// ============================================================================
// LAB: PRINCIPIO DE BERNOULLI (TUBO DE VENTURI)
// ============================================================================
function initBernoulliSimulation() {
    const canvas = document.getElementById('bernoulli-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const ui = {
        v1: document.getElementById('bernoulli-v1'),
        d1: document.getElementById('bernoulli-d1'),
        d2: document.getElementById('bernoulli-d2'),
        dz: document.getElementById('bernoulli-dz'),
        v1Val: document.getElementById('bernoulli-v1-val'),
        d1Val: document.getElementById('bernoulli-d1-val'),
        d2Val: document.getElementById('bernoulli-d2-val'),
        dzVal: document.getElementById('bernoulli-dz-val'),
        resQ: document.getElementById('bernoulli-res-q'),
        resV2: document.getElementById('bernoulli-res-v2'),
        tblP1: document.getElementById('bernoulli-tbl-p1'),
        tblP2: document.getElementById('bernoulli-tbl-p2'),
        tblPd1: document.getElementById('bernoulli-tbl-pd1'),
        tblPd2: document.getElementById('bernoulli-tbl-pd2'),
        tblPe1: document.getElementById('bernoulli-tbl-pe1'),
        tblPe2: document.getElementById('bernoulli-tbl-pe2'),
        tblPtot1: document.getElementById('bernoulli-tbl-ptot1'),
        tblPtot2: document.getElementById('bernoulli-tbl-ptot2')
    };

    let particles = [];
    const NUM_PARTICLES = 150;
    let animId = null;
    let isVisible = false;

    // Initialize particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
        // Distribute y such that it is denser in the middle or uniform
        particles.push({
            x: Math.random(), // relative 0 to 1
            y: (Math.random() - 0.5) * 0.95, // relative -0.5 to 0.5 (slight safety margin from walls)
            phase: Math.random() * Math.PI * 2
        });
    }

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    window.addEventListener('resize', () => { if (isVisible) resize(); });

    function getParams() {
        const v1 = parseFloat(ui.v1.value);
        const d1 = parseFloat(ui.d1.value);
        const d2 = parseFloat(ui.d2.value);
        const dz = parseFloat(ui.dz.value);
        return { v1, d1, d2, dz };
    }

    function updateUI() {
        const { v1, d1, d2, dz } = getParams();
        ui.v1Val.textContent = v1.toFixed(1);
        ui.d1Val.textContent = d1.toFixed(1);
        ui.d2Val.textContent = d2.toFixed(1);
        ui.dzVal.textContent = dz.toFixed(1);

        const A1 = Math.PI * Math.pow(d1 / 100 / 2, 2); // m^2
        const A2 = Math.PI * Math.pow(d2 / 100 / 2, 2); // m^2
        const v2 = v1 * (A1 / A2);
        const Q = A1 * v1 * 1000; // L/s
        
        // Define total Bernoulli constant (P_total = 150 kPa)
        const P_total = 150; 
        const rho = 1000; // kg/m3
        const g = 9.81;

        // Heights
        const z1 = Math.max(0, dz);
        const z2 = Math.max(0, -dz);

        // Individual Terms in kPa
        const P_dyn1 = 0.5 * rho * Math.pow(v1, 2) / 1000;
        const P_pot1 = rho * g * z1 / 1000;
        let P_static1 = P_total - P_dyn1 - P_pot1;

        const P_dyn2 = 0.5 * rho * Math.pow(v2, 2) / 1000;
        const P_pot2 = rho * g * z2 / 1000;
        let P_static2 = P_total - P_dyn2 - P_pot2;

        let hasCavitation = false;
        if (P_static1 < 0) {
            P_static1 = 0;
            hasCavitation = true;
        }
        if (P_static2 < 0) {
            P_static2 = 0;
            hasCavitation = true;
        }

        const alertEl = document.getElementById('bernoulli-cavitation-alert');
        if (alertEl) {
            alertEl.style.display = hasCavitation ? 'block' : 'none';
        }

        // Highlight table fields on cavitation/vacuum limit
        if (ui.tblP1) {
            ui.tblP1.style.color = (P_static1 === 0) ? '#ef4444' : '';
        }
        if (ui.tblP2) {
            ui.tblP2.style.color = (P_static2 === 0) ? '#ef4444' : '';
        }

        // Populate Table
        ui.tblP1.textContent = P_static1.toFixed(1);
        ui.tblP2.textContent = P_static2.toFixed(1);
        ui.tblPd1.textContent = P_dyn1.toFixed(1);
        ui.tblPd2.textContent = P_dyn2.toFixed(1);
        ui.tblPe1.textContent = P_pot1.toFixed(1);
        ui.tblPe2.textContent = P_pot2.toFixed(1);
        
        ui.tblPtot1.textContent = (P_static1 + P_dyn1 + P_pot1).toFixed(1);
        ui.tblPtot2.textContent = (P_static2 + P_dyn2 + P_pot2).toFixed(1);

        ui.resQ.textContent = Q.toFixed(2) + ' L/s';
        ui.resV2.textContent = v2.toFixed(2) + ' m/s';

        return { v1, v2, d1, d2, dz, P1: P_static1, P2: P_static2 };
    }

    // Controls listeners
    [ui.v1, ui.d1, ui.d2, ui.dz].forEach(el => {
        el.addEventListener('input', () => {
            // Prevent D2 from being larger than D1
            if (parseFloat(ui.d2.value) > parseFloat(ui.d1.value)) {
                ui.d2.value = ui.d1.value;
            }
        });
    });

    function getTubeY(xRelative, d1, d2) {
        // xRelative goes 0 to 1
        // Tube has 3 zones: [0, 0.35] wide, [0.45, 0.55] narrow, [0.65, 1] wide
        let radius = d1;
        if (xRelative > 0.35 && xRelative < 0.45) {
            // Transition wide to narrow
            const t = (xRelative - 0.35) / 0.10;
            // smoothstep
            const st = t * t * (3 - 2 * t);
            radius = d1 - st * (d1 - d2);
        } else if (xRelative >= 0.45 && xRelative <= 0.55) {
            radius = d2;
        } else if (xRelative > 0.55 && xRelative < 0.65) {
            // Transition narrow to wide
            const t = (xRelative - 0.55) / 0.10;
            const st = t * t * (3 - 2 * t);
            radius = d2 + st * (d1 - d2);
        }
        return radius;
    }

    function getVelocity(xRelative, v1, d1, d2) {
        const radius = getTubeY(xRelative, d1, d2);
        // v = v1 * (A1 / A_local) = v1 * (d1 / radius)^2
        return v1 * Math.pow(d1 / radius, 2);
    }

    function draw() {
        if (!isVisible) return;
        const width = canvas.width / (window.devicePixelRatio || 1);
        const height = canvas.height / (window.devicePixelRatio || 1);
        const cy = height * 0.55; // base center Y of the tube
        const scaleFactor = 6; // px per cm

        ctx.clearRect(0, 0, width, height);
        const { v1, v2, d1, d2, dz, P1, P2 } = updateUI();

        const offset = dz * 70; // 70px per meter
        const getCyLocal = (xr) => cy - (offset / 2) + xr * offset;

        // 1. Draw Piezo tubes (background/structure)
        const piezoWidth = 20;
        const piezo1X = width * 0.2;
        const piezo2X = width * 0.5;
        
        const cyLocal1 = getCyLocal(0.2);
        const r1 = getTubeY(0.2, d1, d2) * scaleFactor;
        const h1Bottom = cyLocal1 - r1;
        const piezo1H = h1Bottom - 20;

        const cyLocal2 = getCyLocal(0.5);
        const r2 = getTubeY(0.5, d1, d2) * scaleFactor;
        const h2Bottom = cyLocal2 - r2;
        const piezo2H = h2Bottom - 20;

        ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
        ctx.lineWidth = 2;

        // Tube 1
        ctx.fillRect(piezo1X - piezoWidth/2, 20, piezoWidth, piezo1H);
        ctx.strokeRect(piezo1X - piezoWidth/2, 20, piezoWidth, piezo1H);
        
        // Tube 2
        ctx.fillRect(piezo2X - piezoWidth/2, 20, piezoWidth, piezo2H);
        ctx.strokeRect(piezo2X - piezoWidth/2, 20, piezoWidth, piezo2H);

        // Water level in piezometers (clip at 0 for visual rendering only)
        const P0 = 150; // kPa
        const P1_vis = Math.max(0, P1);
        const P2_vis = Math.max(0, P2);

        // Map pressure to Y position in the piezometer tubes
        let h1Y = 30 + (h1Bottom - 30) * (1 - P1_vis / P0);
        let h2Y = 30 + (h2Bottom - 30) * (1 - P2_vis / P0);

        ctx.fillStyle = "rgba(59, 130, 246, 0.5)"; // water color
        ctx.fillRect(piezo1X - piezoWidth/2, h1Y, piezoWidth, h1Bottom - h1Y);
        ctx.fillRect(piezo2X - piezoWidth/2, h2Y, piezoWidth, h2Bottom - h2Y);

        // 2. Draw Venturi Tube Background (Fluid)
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
            const xr = x / width;
            const r = getTubeY(xr, d1, d2) * scaleFactor;
            const cyLocal = getCyLocal(xr);
            if (x === 0) ctx.moveTo(x, cyLocal - r);
            else ctx.lineTo(x, cyLocal - r);
        }
        for (let x = width; x >= 0; x -= 5) {
            const xr = x / width;
            const r = getTubeY(xr, d1, d2) * scaleFactor;
            const cyLocal = getCyLocal(xr);
            ctx.lineTo(x, cyLocal + r);
        }
        ctx.closePath();
        ctx.fillStyle = "rgba(30, 64, 175, 0.3)"; // fluid color
        ctx.fill();
        ctx.strokeStyle = "#3b82f6";
        ctx.lineWidth = 3;
        ctx.stroke();

        // 3. Draw Particles
        ctx.fillStyle = "#60a5fa";
        for (let p of particles) {
            // Parabolic profile: u = p.y / 0.5 (range [-1, 1])
            const u = p.y / 0.5;
            const parabolicFactor = 2.0 * (1.0 - u * u); // 0 at walls, 2 at center (avg = 1)
            
            // Local velocity
            const locV = getVelocity(p.x, v1, d1, d2) * parabolicFactor;
            
            // Advance particle
            p.x += (locV * 0.002);
            if (p.x > 1.0) {
                p.x = 0;
                p.y = (Math.random() - 0.5) * 0.95; 
            }

            // Map to screen
            const xr = p.x;
            const r = getTubeY(xr, d1, d2) * scaleFactor;
            const cyLocal = getCyLocal(xr);
            
            const wave = Math.sin(p.phase + xr * 20) * 0.05; 
            const y_pos = cyLocal + (p.y + wave) * 2 * r;

            // Only draw if inside actual tube bounds
            if (y_pos > cyLocal - r && y_pos < cyLocal + r) {
                ctx.beginPath();
                const stretch = 1 + (locV / 10);
                ctx.ellipse(xr * width, y_pos, 2 * stretch, 2, 0, 0, Math.PI * 2);
                ctx.fill();
            }
            p.phase += 0.1;
        }

        // Annotations
        ctx.fillStyle = "#60a5fa";
        ctx.font = "bold 12px Inter";
        ctx.fillText(`P₁ = ${P1.toFixed(1)} kPa`, piezo1X + 15, h1Y + 4);
        
        ctx.fillStyle = "#34d399";
        ctx.fillText(`P₂ = ${P2.toFixed(1)} kPa`, piezo2X + 15, h2Y + 4);

        // Draw local speed indicators below the tube
        ctx.fillStyle = "#94a3b8";
        ctx.font = "11px Inter";
        ctx.fillText(`v₁ = ${v1.toFixed(1)} m/s`, piezo1X - 30, cyLocal1 + r1 + 18);
        ctx.fillText(`v₂ = ${v2.toFixed(1)} m/s`, piezo2X - 30, cyLocal2 + r2 + 18);

        // Draw Bernoulli Equation box at the bottom
        const eqY = height - 20;
        ctx.fillStyle = "rgba(10, 15, 30, 0.7)";
        ctx.fillRect(width * 0.15, eqY - 18, width * 0.7, 26);
        ctx.strokeStyle = "rgba(59, 130, 246, 0.25)";
        ctx.lineWidth = 1;
        ctx.strokeRect(width * 0.15, eqY - 18, width * 0.7, 26);

        ctx.fillStyle = "#e2e8f0";
        ctx.font = "italic 11px Inter";
        ctx.textAlign = "center";
        ctx.fillText("P₁ + ½ρv₁² + ρgz₁ = P₂ + ½ρv₂² + ρgz₂ = constante (150 kPa)", width / 2, eqY - 1);
        ctx.textAlign = "left"; // reset alignment

        animId = requestAnimationFrame(draw);
    }

    const pane = document.getElementById('bernoulli-sim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
            if (ent.isIntersecting) {
                isVisible = true;
                resize();
                if (!animId) draw();
            } else {
                isVisible = false;
                if (animId) { cancelAnimationFrame(animId); animId = null; }
            }
        });
    }, { threshold: 0.1 });
    if (pane) observer.observe(pane);

    setTimeout(resize, 100);
}

function initClausiusSimulation() {
    const canvas = document.getElementById('clausiusCanvas');
    const chartCtx = document.getElementById('clausiusChart');
    if (!canvas || !chartCtx) return;

    const ctx = canvas.getContext('2d');
    
    // Sliders & Buttons
    const sliderN = document.getElementById('clausius-n');
    const spanN = document.getElementById('clausius-n-val');
    const sliderTemp = document.getElementById('clausius-temp');
    const spanTemp = document.getElementById('clausius-temp-val');
    const btnPartition = document.getElementById('clausius-partition-btn');
    const btnReset = document.getElementById('clausius-reset-btn');
    
    // Results
    const resLeft = document.getElementById('clausius-res-left');
    const resRight = document.getElementById('clausius-res-right');
    const resEntropy = document.getElementById('clausius-res-entropy');

    let particles = [];
    let hasPartition = true;
    let animId = null;
    let isVisible = false;
    let chartData = [];
    let chartLabels = [];
    let frameCount = 0;

    // Helper for ln(n!)
    function lnFactorial(n) {
        if (n <= 1) return 0;
        let sum = 0;
        for (let i = 2; i <= n; i++) {
            sum += Math.log(i);
        }
        return sum;
    }

    // Chart.js Configuration
    const entropyChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [{
                label: 'Entropía S/S_max',
                data: chartData,
                borderColor: '#facc15',
                backgroundColor: 'rgba(250, 204, 21, 0.1)',
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { display: false }
                },
                y: {
                    min: 0,
                    max: 100,
                    title: { display: true, text: 'Entropía (%)', color: '#94a3b8', font: { size: 9 } },
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#cbd5e1', font: { size: 8 } }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    window.addEventListener('resize', () => { if (isVisible) resize(); });

    function initParticles() {
        particles = [];
        const N = parseInt(sliderN.value);
        spanN.textContent = N;

        const speedSelect = parseInt(sliderTemp.value);
        let baseSpeed = 1.0;
        if (speedSelect === 1) { baseSpeed = 0.6; spanTemp.textContent = "Baja"; }
        else if (speedSelect === 2) { baseSpeed = 1.2; spanTemp.textContent = "Media"; }
        else if (speedSelect === 3) { baseSpeed = 2.2; spanTemp.textContent = "Alta"; }

        const w = canvas.width / (window.devicePixelRatio || 1) || 450;
        const h = canvas.height / (window.devicePixelRatio || 1) || 320;
        const r = 4; // particle radius

        const halfN = Math.floor(N / 2);

        // Hot particles on the left (Red)
        for (let i = 0; i < halfN; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = baseSpeed * 2.8;
            particles.push({
                x: 15 + Math.random() * (w / 2 - 30),
                y: 15 + Math.random() * (h - 30),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                r: r,
                isHot: true
            });
        }

        // Cold particles on the right (Blue)
        for (let i = halfN; i < N; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = baseSpeed * 0.8;
            particles.push({
                x: w / 2 + 15 + Math.random() * (w / 2 - 30),
                y: 15 + Math.random() * (h - 30),
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                r: r,
                isHot: false
            });
        }

        // Reset chart
        chartData.length = 0;
        chartLabels.length = 0;
        entropyChart.update();
        frameCount = 0;
    }

    function update() {
        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const partitionX = w / 2;

        for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce off outer walls
            if (p.x - p.r < 10) { p.vx = Math.abs(p.vx); p.x = 10 + p.r; }
            if (p.x + p.r > w - 10) { p.vx = -Math.abs(p.vx); p.x = w - 10 - p.r; }
            if (p.y - p.r < 10) { p.vy = Math.abs(p.vy); p.y = 10 + p.r; }
            if (p.y + p.r > h - 10) { p.vy = -Math.abs(p.vy); p.y = h - 10 - p.r; }

            // Bounce off partition
            if (hasPartition) {
                if (p.x - p.vx < partitionX) { // originally on left
                    if (p.x + p.r > partitionX) {
                        p.vx = -Math.abs(p.vx);
                        p.x = partitionX - p.r;
                    }
                } else { // originally on right
                    if (p.x - p.r < partitionX) {
                        p.vx = Math.abs(p.vx);
                        p.x = partitionX + p.r;
                    }
                }
            }
        }

        // Particle-particle collisions (molecular heat transfer)
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const pi = particles[i];
                const pj = particles[j];
                const dx = pj.x - pi.x;
                const dy = pj.y - pi.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                const minDist = pi.r + pj.r;

                if (dist < minDist && dist > 0.1) {
                    // Exact 2D elastic collision physics for realistic kinetic energy transfer
                    const dvx = pi.vx - pj.vx;
                    const dvy = pi.vy - pj.vy;
                    const dotProduct = (dvx * dx + dvy * dy) / (dist * dist);

                    pi.vx -= dotProduct * dx;
                    pi.vy -= dotProduct * dy;
                    pj.vx += dotProduct * dx;
                    pj.vy += dotProduct * dy;

                    // Push apart to prevent sticking
                    const overlap = minDist - dist;
                    pi.x -= (dx / dist) * (overlap / 2);
                    pi.y -= (dy / dist) * (overlap / 2);
                    pj.x += (dx / dist) * (overlap / 2);
                    pj.y += (dy / dist) * (overlap / 2);
                }
            }
        }
    }

    function draw() {
        if (!isVisible) return;

        update();

        const w = canvas.width / (window.devicePixelRatio || 1);
        const h = canvas.height / (window.devicePixelRatio || 1);
        const partitionX = w / 2;

        ctx.clearRect(0, 0, w, h);

        // Draw Outer Box
        ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
        ctx.lineWidth = 4;
        ctx.strokeRect(10, 10, w - 20, h - 20);

        // Draw Partition
        if (hasPartition) {
            ctx.strokeStyle = "#fbbf24";
            ctx.lineWidth = 3;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(partitionX, 10);
            ctx.lineTo(partitionX, h - 10);
            ctx.stroke();
            ctx.setLineDash([]); // reset
        }

        // Count distribution & calculate statistics
        let numL = 0;
        let numR = 0;
        let numL_hot = 0;
        let numL_cold = 0;
        let numR_hot = 0;
        let numR_cold = 0;
        let sumSqSpeedL = 0;
        let sumSqSpeedR = 0;

        // Draw Particles
        const speedSelect = parseInt(sliderTemp.value);
        let baseSpeed = 1.2;
        if (speedSelect === 1) baseSpeed = 0.6;
        else if (speedSelect === 3) baseSpeed = 2.2;

        // Max expected speed for color scaling
        const maxExpectedSpeed = baseSpeed * 3.5;

        for (let p of particles) {
            const speedSq = p.vx * p.vx + p.vy * p.vy;
            const speed = Math.sqrt(speedSq);
            const ratio = Math.min(1, speed / maxExpectedSpeed);
            
            // HSL: 240 is blue, 0 is red
            ctx.fillStyle = `hsl(${240 - 240 * ratio}, 85%, 55%)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            if (p.x < partitionX) {
                numL++;
                sumSqSpeedL += speedSq;
                if (p.isHot) numL_hot++;
                else numL_cold++;
            } else {
                numR++;
                sumSqSpeedR += speedSq;
                if (p.isHot) numR_hot++;
                else numR_cold++;
            }
        }

        const N = particles.length;
        const halfN = Math.floor(N / 2);

        // Convert mean squared speed (proportional to kinetic energy) to mock temperature scale
        // This ensures the First Law (conservation of energy) is perfectly respected:
        // T_equilibrium = (T_left * N_left + T_right * N_right) / N
        const tLeft = numL > 0 ? (sumSqSpeedL / numL) * 5.0 : 0;
        const tRight = numR > 0 ? (sumSqSpeedR / numR) * 5.0 : 0;

        // Statistical Entropy of Mixing Calculation
        const S = 2 * lnFactorial(halfN) - lnFactorial(numL_hot) - lnFactorial(numR_hot) - lnFactorial(numL_cold) - lnFactorial(numR_cold);
        const S_max = 2 * lnFactorial(halfN) - 4 * lnFactorial(Math.floor(halfN / 2));
        const entropyPct = Math.max(0, S_max > 0 ? (S / S_max) * 100 : 100);

        // Populate Table Metrics
        resLeft.textContent = `${numL} part. (${tLeft.toFixed(1)} °C)`;
        resRight.textContent = `${numR} part. (${tRight.toFixed(1)} °C)`;
        resEntropy.textContent = `${entropyPct.toFixed(1)} %`;

        // Draw temperature badges on canvas (T1 left, T2 right)
        ctx.save();
        // Left Badge (Caliente)
        ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
        ctx.fillRect(20, 20, 105, 28);
        ctx.strokeStyle = "rgba(239, 68, 68, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(20, 20, 105, 28);
        ctx.fillStyle = "#ef4444";
        ctx.font = "bold 12px monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(`T₁ = ${tLeft.toFixed(1)} °C`, 28, 34);

        // Right Badge (Frío)
        ctx.fillStyle = "rgba(15, 23, 42, 0.75)";
        ctx.fillRect(w - 125, 20, 105, 28);
        ctx.strokeStyle = "rgba(96, 165, 250, 0.5)";
        ctx.lineWidth = 1.5;
        ctx.strokeRect(w - 125, 20, 105, 28);
        ctx.fillStyle = "#60a5fa";
        ctx.font = "bold 12px monospace";
        ctx.textAlign = "left";
        ctx.textBaseline = "middle";
        ctx.fillText(`T₂ = ${tRight.toFixed(1)} °C`, w - 117, 34);
        ctx.restore();

        // Update Chart periodically (every 15 frames)
        frameCount++;
        if (frameCount % 15 === 0) {
            chartData.push(entropyPct);
            chartLabels.push("");
            if (chartData.length > 50) {
                chartData.shift();
                chartLabels.shift();
            }
            entropyChart.update('none');
        }

        animId = requestAnimationFrame(draw);
    }

    // Event Listeners
    btnPartition.addEventListener('click', () => {
        hasPartition = !hasPartition;
        btnPartition.innerHTML = hasPartition ? '<i class="fas fa-door-open"></i> Remover Tabique' : '<i class="fas fa-door-closed"></i> Colocar Tabique';
        btnPartition.style.background = hasPartition ? '#3b82f6' : '#f59e0b';
    });

    btnReset.addEventListener('click', () => {
        hasPartition = true;
        btnPartition.innerHTML = '<i class="fas fa-door-open"></i> Remover Tabique';
        btnPartition.style.background = '#3b82f6';
        initParticles();
    });

    sliderN.addEventListener('input', initParticles);
    sliderTemp.addEventListener('input', initParticles);

    // Visibility Observer
    const pane = document.getElementById('clausius-sim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
            if (ent.isIntersecting) {
                isVisible = true;
                resize();
                initParticles();
                if (!animId) draw();
            } else {
                isVisible = false;
                if (animId) { cancelAnimationFrame(animId); animId = null; }
            }
        });
    }, { threshold: 0.1 });
    if (pane) observer.observe(pane);

    setTimeout(() => { resize(); initParticles(); }, 150);
}

function initNavierStokesSimulation() {
    const canvas = document.getElementById('nsCanvas');
    const chartCtx = document.getElementById('nsChart');
    const selectMode = document.getElementById('ns-mode');
    if (!canvas || !chartCtx || !selectMode) return;

    const ctx = canvas.getContext('2d');
    const sliderAlpha = document.getElementById('ns-alpha');
    const spanAlpha = document.getElementById('ns-alpha-val');
    const sliderRe = document.getElementById('ns-re');
    const spanRe = document.getElementById('ns-re-val');
    const btnReset = document.getElementById('ns-reset-btn');
    const btnToggle = document.getElementById('ns-toggle-btn');
    const cellCL = document.getElementById('ns-cl');
    const cellCD = document.getElementById('ns-cd');
    const cellLD = document.getElementById('ns-ld');
    const cellRegime = document.getElementById('ns-regime');

    let animId = null;
    let isVisible = false;
    let isPaused = false;
    let particles = [];
    let currentResidual = 0.0;
    function formatRe(Re) {
        let reStr = Re.toExponential(1).replace('e+', '×10^').replace('^0', '^').replace('^', '');
        const exponentMap = {'0':'⁰', '1':'¹', '2':'²', '3':'³', '4':'⁴', '5':'⁵', '6':'⁶', '7':'⁷', '8':'⁸', '9':'⁹'};
        const expParts = reStr.split('×10');
        if (expParts.length === 2) {
            const exp = expParts[1].split('').map(char => exponentMap[char] || char).join('');
            reStr = expParts[0] + '×10' + exp;
        }
        return reStr;
    }

    const selectResolution = document.getElementById('ns-resolution');

    // Grid Dimensions (mutable)
    let NX = 120;
    let NY = 60;
    const u0 = 0.08; // Inflow speed

    // LBM D2Q9 variables (allocated dynamically)
    let rho, ux, uy, solid;
    let f0, f1, f2, f3, f4, f5, f6, f7, f8;
    let f0_next, f1_next, f2_next, f3_next, f4_next, f5_next, f6_next, f7_next, f8_next;
    let f_arr, f_next_arr;

    function allocateArrays() {
        const res = selectResolution ? selectResolution.value : 'medium';
        if (res === 'very_coarse') {
            NX = 40;
            NY = 20;
        } else if (res === 'coarse') {
            NX = 60;
            NY = 30;
        } else if (res === 'fine') {
            NX = 200;
            NY = 100;
        } else if (res === 'very_fine') {
            NX = 300;
            NY = 150;
        } else {
            NX = 120;
            NY = 60;
        }

        rho = new Float32Array(NX * NY);
        ux = new Float32Array(NX * NY);
        uy = new Float32Array(NX * NY);
        solid = new Uint8Array(NX * NY);

        f0 = new Float32Array(NX * NY);
        f1 = new Float32Array(NX * NY);
        f2 = new Float32Array(NX * NY);
        f3 = new Float32Array(NX * NY);
        f4 = new Float32Array(NX * NY);
        f5 = new Float32Array(NX * NY);
        f6 = new Float32Array(NX * NY);
        f7 = new Float32Array(NX * NY);
        f8 = new Float32Array(NX * NY);

        f0_next = new Float32Array(NX * NY);
        f1_next = new Float32Array(NX * NY);
        f2_next = new Float32Array(NX * NY);
        f3_next = new Float32Array(NX * NY);
        f4_next = new Float32Array(NX * NY);
        f5_next = new Float32Array(NX * NY);
        f6_next = new Float32Array(NX * NY);
        f7_next = new Float32Array(NX * NY);
        f8_next = new Float32Array(NX * NY);

        f_arr = [f0, f1, f2, f3, f4, f5, f6, f7, f8];
        f_next_arr = [f0_next, f1_next, f2_next, f3_next, f4_next, f5_next, f6_next, f7_next, f8_next];
    }

    allocateArrays();

    const cx = [0, 1, 0, -1, 0, 1, -1, -1, 1];
    const cy = [0, 0, 1, 0, -1, 1, 1, -1, -1];
    const opp = [0, 3, 4, 1, 2, 7, 8, 5, 6];

    // Chart.js Setup
    const clData = Array.from({length: 26}, (_, i) => ({x: i, y: 0}));
    const nsChart = new Chart(chartCtx, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: 'C_L (Sustentación)',
                    data: clData,
                    borderColor: '#34d399',
                    backgroundColor: 'rgba(52,211,153,0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: true,
                    tension: 0.3,
                    yAxisID: 'y',
                    parsing: {xAxisKey: 'x', yAxisKey: 'y'}
                },
                {
                    label: 'C_D (Arrastre)',
                    data: clData.map(d => ({x: d.x, y: 0})),
                    borderColor: '#f97316',
                    backgroundColor: 'rgba(249,115,22,0.1)',
                    borderWidth: 2,
                    pointRadius: 0,
                    fill: false,
                    tension: 0.3,
                    yAxisID: 'y1',
                    parsing: {xAxisKey: 'x', yAxisKey: 'y'}
                },
                {
                    label: 'C_L Actual',
                    data: [{x: 8, y: 0}],
                    borderColor: '#34d399',
                    backgroundColor: '#ffffff',
                    borderWidth: 2,
                    pointRadius: 6,
                    showLine: false,
                    yAxisID: 'y',
                    parsing: {xAxisKey: 'x', yAxisKey: 'y'}
                },
                {
                    label: 'C_D Actual',
                    data: [{x: 8, y: 0}],
                    borderColor: '#f97316',
                    backgroundColor: '#ffffff',
                    borderWidth: 2,
                    pointRadius: 6,
                    showLine: false,
                    yAxisID: 'y1',
                    parsing: {xAxisKey: 'x', yAxisKey: 'y'}
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    min: 0,
                    max: 25,
                    title: {display: true, text: 'α (°)', color: '#94a3b8', font:{size:9}},
                    grid: {color: 'rgba(255,255,255,0.05)'},
                    ticks: {color: '#cbd5e1', font:{size:8}}
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    min: -0.2,
                    max: 2.0,
                    title: {display: true, text: '← Coeficiente de Sustentación (C_L)', color: '#34d399', font:{size:9}},
                    grid: {color: 'rgba(255,255,255,0.05)'},
                    ticks: {color: '#cbd5e1', font:{size:8}}
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    min: 0.0,
                    max: 0.4,
                    title: {display: true, text: 'Coeficiente de Arrastre (C_D) →', color: '#f97316', font:{size:9}},
                    grid: {
                        drawOnChartArea: false,
                    },
                    ticks: {color: '#cbd5e1', font:{size:8}}
                }
            },
            plugins: {legend: {display: true, labels: {color:'#94a3b8', font:{size:8}}}}
        }
    });

    function nacaY(x, t = 0.12) {
        return 5 * t * (0.2969 * Math.sqrt(x) - 0.1260 * x - 0.3516 * x*x + 0.2843 * x*x*x - 0.1015 * x*x*x*x);
    }

    function getAirfoilPoints(cx, cy, chord, alpha) {
        const N = 60;
        const upper = [], lower = [];
        for (let i = 0; i <= N; i++) {
            const t = i / N;
            const x = t;
            const y = nacaY(x);
            upper.push({x, y});
            lower.push({x, y: -y});
        }
        const all = [...upper, ...lower.slice().reverse()];
        const rad = alpha * Math.PI / 180;
        const cos = Math.cos(rad), sin = Math.sin(rad);
        return all.map(p => {
            const px = (p.x - 0.5) * chord;
            const py = -p.y * chord;
            return {
                x: cx + px * cos - py * sin,
                y: cy + px * sin + py * cos
            };
        });
    }

    function getEquilibrium(r, vx, vy) {
        const u2 = vx*vx + vy*vy;
        return [
            (4/9) * r * (1 - 1.5*u2),
            (1/9) * r * (1 + 3*vx + 4.5*vx*vx - 1.5*u2),
            (1/9) * r * (1 + 3*vy + 4.5*vy*vy - 1.5*u2),
            (1/9) * r * (1 - 3*vx + 4.5*vx*vx - 1.5*u2),
            (1/9) * r * (1 - 3*vy + 4.5*vy*vy - 1.5*u2),
            (1/36) * r * (1 + 3*(vx+vy) + 4.5*(vx+vy)*(vx+vy) - 1.5*u2),
            (1/36) * r * (1 + 3*(-vx+vy) + 4.5*(-vx+vy)*(-vx+vy) - 1.5*u2),
            (1/36) * r * (1 + 3*(-vx-vy) + 4.5*(vx+vy)*(vx+vy) - 1.5*u2),
            (1/36) * r * (1 + 3*(vx-vy) + 4.5*(vx-vy)*(vx-vy) - 1.5*u2)
        ];
    }

    function updateSolidObstacle(alpha) {
        solid.fill(0);
        const rad = alpha * Math.PI / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Geometrical parameters scaled to grid size NX & NY
        const cx_rot = Math.floor(NX * 0.28);
        const cy_rot = Math.floor(NY / 2);
        const chord = Math.floor(NX * 0.32);

        for (let y = 0; y < NY; y++) {
            for (let x = 0; x < NX; x++) {
                const dx = x - cx_rot;
                const dy = y - cy_rot;
                const rx = dx * cos + dy * sin;
                const ry = -dx * sin + dy * cos;

                const t = (rx / chord) + 0.5;
                if (t >= 0.0 && t <= 1.0) {
                    const y_thick = nacaY(t) * chord;
                    if (Math.abs(ry) <= y_thick) {
                        solid[y * NX + x] = 1;
                    }
                }
            }
        }
    }

    function spawnParticle(w, h) {
        return {
            x: Math.random() * w,
            y: Math.random() * h
        };
    }

    function initSim() {
        const alpha = parseInt(sliderAlpha.value);
        updateSolidObstacle(alpha);

        for (let y = 0; y < NY; y++) {
            for (let x = 0; x < NX; x++) {
                const idx = y * NX + x;
                const r = 1.0;
                let ux_val = solid[idx] ? 0.0 : u0;
                let uy_val = 0.0;

                rho[idx] = r;
                ux[idx] = ux_val;
                uy[idx] = uy_val;

                const eq = getEquilibrium(r, ux_val, uy_val);
                for (let d = 0; d < 9; d++) {
                    f_arr[d][idx] = eq[d];
                    f_next_arr[d][idx] = eq[d];
                }
            }
        }

        // Initialize particles
        particles = [];
        const w = canvas.width / (window.devicePixelRatio || 1) || 500;
        const h = canvas.height / (window.devicePixelRatio || 1) || 300;
        for (let i = 0; i < 350; i++) {
            particles.push(spawnParticle(w, h));
        }

        // Pre-run the LBM simulation to develop the flow field around the airfoil instantly
        for (let i = 0; i < 400; i++) {
            lbmStep();
        }
    }

    function lbmStep() {
        const speedKmh = parseInt(sliderRe.value);
        const speedMs = speedKmh / 3.6;
        const Re = speedMs * 0.5 / 1.5e-5;

        // Map Re to LBM tau (viscosity)
        // nu = u0 * chord / Re
        const chord = Math.floor(NX * 0.32);
        const nu = (u0 * chord) / Re;
        let tau = 3 * nu + 0.5;
        // Cap for numerical stability (prevent blow up if tau < 0.505)
        tau = Math.max(0.506, Math.min(0.95, tau));

        const omega = 1.0 / tau;

        let sumSqDiff = 0.0;
        let count = 0;

        for (let y = 1; y < NY - 1; y++) {
            for (let x = 1; x < NX - 1; x++) {
                const idx = y * NX + x;

                if (solid[idx]) {
                    f_next_arr[0][idx] = f_arr[0][idx];
                    f_next_arr[1][idx] = f_arr[3][idx];
                    f_next_arr[2][idx] = f_arr[4][idx];
                    f_next_arr[3][idx] = f_arr[1][idx];
                    f_next_arr[4][idx] = f_arr[2][idx];
                    f_next_arr[5][idx] = f_arr[7][idx];
                    f_next_arr[6][idx] = f_arr[8][idx];
                    f_next_arr[7][idx] = f_arr[5][idx];
                    f_next_arr[8][idx] = f_arr[6][idx];
                    continue;
                }

                const r = f_arr[0][idx] + f_arr[1][idx] + f_arr[2][idx] + f_arr[3][idx] + f_arr[4][idx] + f_arr[5][idx] + f_arr[6][idx] + f_arr[7][idx] + f_arr[8][idx];
                const vx = (f_arr[1][idx] - f_arr[3][idx] + f_arr[5][idx] - f_arr[6][idx] - f_arr[7][idx] + f_arr[8][idx]) / r;
                const vy = (f_arr[2][idx] - f_arr[4][idx] + f_arr[5][idx] + f_arr[6][idx] - f_arr[7][idx] - f_arr[8][idx]) / r;

                const old_vx = ux[idx];
                const old_vy = uy[idx];

                rho[idx] = r;
                ux[idx] = vx;
                uy[idx] = vy;

                // Sum velocity differences for residual calculation
                sumSqDiff += (vx - old_vx) * (vx - old_vx) + (vy - old_vy) * (vy - old_vy);
                count++;

                const u2 = vx*vx + vy*vy;
                const eq0 = (4/9) * r * (1 - 1.5*u2);
                const eq1 = (1/9) * r * (1 + 3*vx + 4.5*vx*vx - 1.5*u2);
                const eq2 = (1/9) * r * (1 + 3*vy + 4.5*vy*vy - 1.5*u2);
                const eq3 = (1/9) * r * (1 - 3*vx + 4.5*vx*vx - 1.5*u2);
                const eq4 = (1/9) * r * (1 - 3*vy + 4.5*vy*vy - 1.5*u2);
                const eq5 = (1/36) * r * (1 + 3*(vx+vy) + 4.5*(vx+vy)*(vx+vy) - 1.5*u2);
                const eq6 = (1/36) * r * (1 + 3*(-vx+vy) + 4.5*(-vx+vy)*(-vx+vy) - 1.5*u2);
                const eq7 = (1/36) * r * (1 + 3*(-vx-vy) + 4.5*(vx+vy)*(vx+vy) - 1.5*u2);
                const eq8 = (1/36) * r * (1 + 3*(vx-vy) + 4.5*(vx-vy)*(vx-vy) - 1.5*u2);

                const c0 = f_arr[0][idx] - omega * (f_arr[0][idx] - eq0);
                const c1 = f_arr[1][idx] - omega * (f_arr[1][idx] - eq1);
                const c2 = f_arr[2][idx] - omega * (f_arr[2][idx] - eq2);
                const c3 = f_arr[3][idx] - omega * (f_arr[3][idx] - eq3);
                const c4 = f_arr[4][idx] - omega * (f_arr[4][idx] - eq4);
                const c5 = f_arr[5][idx] - omega * (f_arr[5][idx] - eq5);
                const c6 = f_arr[6][idx] - omega * (f_arr[6][idx] - eq6);
                const c7 = f_arr[7][idx] - omega * (f_arr[7][idx] - eq7);
                const c8 = f_arr[8][idx] - omega * (f_arr[8][idx] - eq8);

                f_next_arr[0][idx] = c0;
                f_next_arr[1][y * NX + (x + 1)] = c1;
                f_next_arr[2][(y + 1) * NX + x] = c2;
                f_next_arr[3][y * NX + (x - 1)] = c3;
                f_next_arr[4][(y - 1) * NX + x] = c4;
                f_next_arr[5][(y + 1) * NX + (x + 1)] = c5;
                f_next_arr[6][(y + 1) * NX + (x - 1)] = c6;
                f_next_arr[7][(y - 1) * NX + (x - 1)] = c7;
                f_next_arr[8][(y - 1) * NX + (x + 1)] = c8;
            }
        }

        // Left Boundary Inflow with tiny gust fluctuation (unsteady flow / wind tunnel turbulence)
        const t_sec = Date.now() * 0.002;
        const u0_dynamic = u0 * (1.0 + 0.03 * Math.sin(t_sec * 3.0) + 0.012 * Math.cos(t_sec * 7.7));
        for (let y = 1; y < NY - 1; y++) {
            const idx = y * NX;
            const r = 1.0;
            const eq = getEquilibrium(r, u0_dynamic, 0.0);
            for (let d = 0; d < 9; d++) f_next_arr[d][idx] = eq[d];
        }

        // Right Boundary Outflow
        for (let y = 1; y < NY - 1; y++) {
            const idx = y * NX + (NX - 1);
            const sourceIdx = y * NX + (NX - 2);
            for (let d = 0; d < 9; d++) f_next_arr[d][idx] = f_next_arr[d][sourceIdx];
        }

        // Top/Bottom bounce-back / slip
        for (let x = 0; x < NX; x++) {
            const topIdx = x;
            const bottomIdx = (NY - 1) * NX + x;
            const eq = getEquilibrium(1.0, u0, 0.0);
            for (let d = 0; d < 9; d++) {
                f_next_arr[d][topIdx] = eq[d];
                f_next_arr[d][bottomIdx] = eq[d];
            }
        }

        // Swap buffers
        for (let d = 0; d < 9; d++) {
            const temp = f_arr[d];
            f_arr[d] = f_next_arr[d];
            f_next_arr[d] = temp;
        }

        if (count > 0) {
            currentResidual = Math.sqrt(sumSqDiff / count);
        }
    }

    function calculateAerodynamics() {
        let fx = 0.0;
        let fy = 0.0;

        for (let y = 1; y < NY - 1; y++) {
            for (let x = 1; x < NX - 1; x++) {
                const idx = y * NX + x;
                if (!solid[idx]) continue;

                // Sum momentum exchange with fluid neighbors
                for (let d = 1; d < 9; d++) {
                    const nx = x + cx[d];
                    const ny = y + cy[d];
                    const nIdx = ny * NX + nx;
                    if (!solid[nIdx]) {
                        const mom = f_arr[d][idx] + f_arr[opp[d]][idx];
                        fx += mom * cx[d];
                        fy += mom * cy[d];
                    }
                }
            }
        }

        const lift = fy;
        const drag = -fx;
        const chord = Math.floor(NX * 0.32);

        // Exact physics scaling: CL = L / (q * c) where q = 0.5 * rho * u0^2 = 0.0032
        const CL = (lift / chord) * 680.0;
        const CD = Math.max(0.015, (drag / chord) * 340.0);
        return { CL, CD };
    }

    function updateCoefficients(alpha, speedKmh) {
        const a = alpha;
        const speedMs = speedKmh / 3.6;
        const M = speedMs / 340;
        const Re = speedMs * 0.5 / 1.5e-5;
        const isStalled = a > 16;

        // Prandtl-Glauert compressibility correction (beta)
        const M_capped = Math.min(0.75, M);
        const beta = Math.sqrt(1 - M_capped * M_capped);

        // Consistent analytical formulas for NACA 0012 with compressibility correction
        let CL = (2 * Math.PI * Math.sin(a * Math.PI / 180) * 0.85) / beta;
        if (isStalled) {
            CL *= Math.max(0.3, 1 - (a - 16) * 0.08);
        }

        const CD0 = 0.015 + 0.15 / Math.sqrt(Re);
        const CDi = (CL * CL) / (Math.PI * 8 * beta);
        let CD = CD0 + CDi;
        if (isStalled) {
            CD += (a - 16) * 0.012;
        }

        const LD = CD > 0 ? (CL / CD).toFixed(1) : '--';

        cellCL.textContent = CL.toFixed(3);
        cellCD.textContent = CD.toFixed(4);
        cellLD.textContent = LD;

        let regimeText = 'Subsónico (Laminar)';
        if (M >= 0.6) regimeText = 'Transónico (Compresible)';
        else if (Re >= 1e4) regimeText = 'Subsónico (Turbulento)';

        cellRegime.textContent = isStalled ? 'Desprendimiento (Stall)' : regimeText;
        cellRegime.style.color = isStalled ? '#ef4444' : M >= 0.6 ? '#f87171' : Re < 1e4 ? '#60a5fa' : '#facc15';

        // Populate Chart.js (scaled to standard aerodynamic values)
        for (let i = 0; i <= 25; i++) {
            const ai = i;
            const stalled = ai > 16;
            let cli = (2 * Math.PI * Math.sin(ai * Math.PI / 180) * 0.85) / beta;
            if (stalled) cli *= Math.max(0.3, 1 - (ai - 16) * 0.08);

            const cdi0 = 0.015 + 0.15 / Math.sqrt(Re);
            const cdi_ind = (cli * cli) / (Math.PI * 8 * beta);
            let cdi = cdi0 + cdi_ind;
            if (stalled) cdi += (ai - 16) * 0.012;

            nsChart.data.datasets[0].data[i] = { x: ai, y: cli };
            nsChart.data.datasets[1].data[i] = { x: ai, y: cdi };
        }
        nsChart.data.datasets[2].data = [{ x: alpha, y: CL }];
        nsChart.data.datasets[3].data = [{ x: alpha, y: CD }];
        nsChart.update('none');
    }

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    window.addEventListener('resize', () => { if (isVisible) resize(); });

    function draw() {
        if (!isVisible) return;

        if (!isPaused) {
            // Perform different LBM steps per frame depending on resolution to balance speed and CPU load
            let steps = 2;
            const res = selectResolution.value;
            if (res === 'very_coarse') steps = 4;
            else if (res === 'coarse') steps = 3;
            else if (res === 'fine') steps = 1;
            else if (res === 'very_fine') steps = 1;

            for (let s = 0; s < steps; s++) {
                lbmStep();
            }
        }

        let w = canvas.width / (window.devicePixelRatio || 1);
        let h = canvas.height / (window.devicePixelRatio || 1);
        if (w === 0 || h === 0) {
            resize();
            w = canvas.width / (window.devicePixelRatio || 1);
            h = canvas.height / (window.devicePixelRatio || 1);
        }
        const cellW = w / NX;
        const cellH = h / NY;
        const mode = selectMode.value;

        // Draw heat map or background
        if (mode === 'velocity') {
            const speedKmh = parseInt(sliderRe.value);
            for (let y = 0; y < NY; y++) {
                for (let x = 0; x < NX; x++) {
                    const idx = y * NX + x;
                    if (solid[idx]) {
                        ctx.fillStyle = '#111827';
                        ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                        continue;
                    }
                    const vx = ux[idx];
                    const vy = uy[idx];
                    const speed = Math.sqrt(vx*vx + vy*vy);

                    // Map relative local LBM speed to physical speed (km/h) relative to absolute max of 900 km/h
                    const cellSpeedKmh = (speed / u0) * speedKmh;
                    const ratio = Math.min(1, cellSpeedKmh / 900);
                    ctx.fillStyle = `hsl(${220 - 220 * ratio}, 85%, 45%)`;
                    ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                }
            }

            // Draw color bar legend on top of velocity heatmap
            ctx.save();
            const legendX = w - 165;
            const legendY = h - 22;
            const legendW = 150;
            const legendH = 8;

            const grad = ctx.createLinearGradient(legendX, 0, legendX + legendW, 0);
            for (let i = 0; i <= 10; i++) {
                const r = i / 10;
                grad.addColorStop(r, `hsl(${220 - 220 * r}, 85%, 45%)`);
            }
            ctx.fillStyle = grad;
            ctx.fillRect(legendX, legendY, legendW, legendH);

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX, legendY, legendW, legendH);

            // Left/Right boundaries of absolute scale
            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 8px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('0', legendX, legendY - 4);
            ctx.textAlign = 'right';
            ctx.fillText('900 km/h', legendX + legendW, legendY - 4);

            // Draw current speed indicator tick on the color bar
            const indicatorX = legendX + (speedKmh / 900) * legendW;
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(indicatorX, legendY - 2);
            ctx.lineTo(indicatorX, legendY + legendH + 2);
            ctx.stroke();

            // Label showing selected speed
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.font = 'bold 8px sans-serif';
            ctx.fillText(`${speedKmh}`, indicatorX, legendY - 4);
            ctx.restore();
        } else if (mode === 'vorticity') {
            const speedKmh = parseInt(sliderRe.value);
            const scaleFactor = 0.08 * (100 / speedKmh);
            for (let y = 0; y < NY; y++) {
                for (let x = 0; x < NX; x++) {
                    const idx = y * NX + x;
                    if (solid[idx]) {
                        ctx.fillStyle = '#111827';
                        ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                        continue;
                    }

                    let rot = 0.0;
                    if (x > 0 && x < NX - 1 && y > 0 && y < NY - 1) {
                        rot = (uy[idx + 1] - uy[idx - 1]) - (ux[idx - NX] - ux[idx + NX]);
                    }
                    const ratio = Math.max(-1, Math.min(1, rot / scaleFactor));
                    ctx.fillStyle = '#060d1a';
                    ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);

                    if (ratio > 0) {
                        ctx.fillStyle = `rgba(239, 68, 68, ${ratio})`;
                    } else {
                        ctx.fillStyle = `rgba(59, 130, 246, ${Math.abs(ratio)})`;
                    }
                    ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                }
            }

            // Draw color bar legend on top of vorticity heatmap
            ctx.save();
            const legendX = w - 165;
            const legendY = h - 22;
            const legendW = 150;
            const legendH = 8;

            const grad = ctx.createLinearGradient(legendX, 0, legendX + legendW, 0);
            grad.addColorStop(0, 'rgba(59, 130, 246, 1)'); // Blue (negative rotation)
            grad.addColorStop(0.5, '#060d1a'); // Dark background (zero vorticity)
            grad.addColorStop(1, 'rgba(239, 68, 68, 1)'); // Red (positive rotation)
            
            ctx.fillStyle = grad;
            ctx.fillRect(legendX, legendY, legendW, legendH);

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX, legendY, legendW, legendH);

            // Left/Center/Right boundaries of vorticity scale
            const speedMs = speedKmh / 3.6;
            const maxVort = Math.round(8 * (speedMs / 0.5)); // chord = 0.5 m

            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 8px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(`-${maxVort} s⁻¹`, legendX, legendY - 4);
            ctx.textAlign = 'center';
            ctx.fillText('0', legendX + legendW / 2, legendY - 4);
            ctx.textAlign = 'right';
            ctx.fillText(`+${maxVort} s⁻¹`, legendX + legendW, legendY - 4);
            ctx.restore();
        } else if (mode === 'pressure') {
            const speedKmh = parseInt(sliderRe.value);
            // dp = rho - 1.0. Scale factor depends on u0^2 ~ velocity^2
            const scaleFactor = 0.005 * Math.pow(speedKmh / 100, 2);
            const cappedScaleFactor = Math.max(0.0005, scaleFactor);

            for (let y = 0; y < NY; y++) {
                for (let x = 0; x < NX; x++) {
                    const idx = y * NX + x;
                    if (solid[idx]) {
                        ctx.fillStyle = '#111827';
                        ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                        continue;
                    }

                    const dp = rho[idx] - 1.0;
                    const ratio = Math.max(-1, Math.min(1, dp / cappedScaleFactor));

                    ctx.fillStyle = '#060d1a'; // Neutral background
                    ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);

                    if (ratio > 0) {
                        // High pressure (Red)
                        ctx.fillStyle = `rgba(239, 68, 68, ${ratio})`;
                    } else {
                        // Low pressure (Cyan)
                        ctx.fillStyle = `rgba(6, 182, 212, ${Math.abs(ratio)})`;
                    }
                    ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                }
            }

            // Draw color bar legend on top of pressure heatmap
            ctx.save();
            const legendX = w - 165;
            const legendY = h - 22;
            const legendW = 150;
            const legendH = 8;

            const grad = ctx.createLinearGradient(legendX, 0, legendX + legendW, 0);
            grad.addColorStop(0, 'rgba(6, 182, 212, 1)'); // Cyan (low pressure)
            grad.addColorStop(0.5, '#060d1a'); // Dark background (ambient pressure)
            grad.addColorStop(1, 'rgba(239, 68, 68, 1)'); // Red (high pressure)
            
            ctx.fillStyle = grad;
            ctx.fillRect(legendX, legendY, legendW, legendH);

            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1;
            ctx.strokeRect(legendX, legendY, legendW, legendH);

            // Calculate physical pressure deviation in Pa: Delta P = rho_air * V^2 * Cp
            const speedMs = speedKmh / 3.6;
            const maxDeltaP = Math.round(0.5 * 1.225 * speedMs * speedMs * 1.5); // Pa

            ctx.fillStyle = '#f8fafc';
            ctx.font = 'bold 8px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText(`-${maxDeltaP} Pa`, legendX, legendY - 4);
            ctx.textAlign = 'center';
            ctx.fillText('P_amb', legendX + legendW / 2, legendY - 4);
            ctx.textAlign = 'right';
            ctx.fillText(`+${maxDeltaP} Pa`, legendX + legendW, legendY - 4);
            ctx.restore();
        } else if (mode === 'particles') {
            ctx.fillStyle = '#060d1a';
            ctx.fillRect(0, 0, w, h);

            // Draw solid cells in dark grey
            ctx.fillStyle = 'rgba(30, 41, 59, 0.4)';
            for (let y = 0; y < NY; y++) {
                for (let x = 0; x < NX; x++) {
                    if (solid[y * NX + x]) {
                        ctx.fillRect(x * cellW, y * cellH, cellW + 0.5, cellH + 0.5);
                    }
                }
            }

            // Draw particles moving along LBM velocity vectors
            for (let p of particles) {
                const px = Math.floor(p.x * NX / w);
                const py = Math.floor(p.y * NY / h);
                let vx = u0;
                let vy = 0.0;

                if (px >= 0 && px < NX && py >= 0 && py < NY) {
                    const pIdx = py * NX + px;
                    if (!solid[pIdx]) {
                        vx = ux[pIdx];
                        vy = uy[pIdx];
                    }
                }

                if (!isPaused) {
                    const speedKmh = parseInt(sliderRe.value);
                    // Scale particle velocity with speed (base multiplier 85 at 100 km/h)
                    const particleSpeedMult = 85 * (speedKmh / 100);
                    p.x += vx * particleSpeedMult;
                    p.y += vy * particleSpeedMult;
                }

                const speed = Math.sqrt(vx*vx + vy*vy);
                const ratio = Math.min(1, speed / (u0 * 2.0));
                ctx.fillStyle = `hsl(${220 - 220 * ratio}, 90%, 55%)`;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
                ctx.fill();

                if (p.x > w || p.x < 0 || p.y > h || p.y < 0 || (px >= 0 && px < NX && py >= 0 && py < NY && solid[py * NX + px])) {
                    p.x = 0;
                    p.y = Math.random() * h;
                }
            }
        }

        // Draw overlay NACA airfoil boundary (scaled dynamically)
        const cx_airfoil = Math.floor(NX * 0.28) * cellW;
        const cy_airfoil = Math.floor(NY / 2) * cellH;
        const chord_airfoil = Math.floor(NX * 0.32) * cellW;
        const alpha = parseInt(sliderAlpha.value);
        const airfoilPts = getAirfoilPoints(cx_airfoil, cy_airfoil, chord_airfoil, alpha);

        ctx.beginPath();
        ctx.moveTo(airfoilPts[0].x, airfoilPts[0].y);
        for (let i = 1; i < airfoilPts.length; i++) ctx.lineTo(airfoilPts[i].x, airfoilPts[i].y);
        ctx.closePath();
        ctx.fillStyle = '#0f172a';
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.0;
        ctx.stroke();

        // Draw angle of attack arc helper
        ctx.save();
        ctx.strokeStyle = '#facc15';
        ctx.lineWidth = 1.0;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(cx_airfoil, cy_airfoil);
        ctx.lineTo(cx_airfoil + chord_airfoil, cy_airfoil);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.arc(cx_airfoil, cy_airfoil, chord_airfoil * 0.25, 0, -alpha * Math.PI / 180, true);
        ctx.stroke();
        ctx.fillStyle = '#facc15';
        ctx.font = '9px monospace';
        ctx.fillText(`α = ${alpha}°`, cx_airfoil + chord_airfoil * 0.28, cy_airfoil - chord_airfoil * 0.12);
        ctx.restore();



        if (!isPaused) {
            updateCoefficients(alpha, parseInt(sliderRe.value));
        }

        // Update residual UI text
        const cellResidual = document.getElementById('ns-residual');
        if (cellResidual) {
            if (isPaused) {
                cellResidual.textContent = 'Pausado';
                cellResidual.style.color = '#f59e0b';
            } else {
                let resStr = currentResidual.toExponential(1);
                if (currentResidual < 1.5e-5) {
                    cellResidual.textContent = `${resStr} (Estable)`;
                    cellResidual.style.color = '#10b981'; // Green
                } else {
                    cellResidual.textContent = `${resStr} (Estabilizando...)`;
                    cellResidual.style.color = '#c084fc'; // Light purple
                }
            }
        }

        animId = requestAnimationFrame(draw);
    }

    sliderAlpha.addEventListener('input', () => {
        const alpha = parseInt(sliderAlpha.value);
        spanAlpha.textContent = alpha;
        updateSolidObstacle(alpha);
        updateCoefficients(alpha, parseInt(sliderRe.value));
    });

    sliderRe.addEventListener('input', () => {
        const speedKmh = parseInt(sliderRe.value);
        const speedMs = speedKmh / 3.6;
        const M = speedMs / 340;
        const Re = speedMs * 0.5 / 1.5e-5;
        spanRe.textContent = `${speedKmh} km/h (${speedMs.toFixed(1)} m/s, Re = ${formatRe(Re)}, M = ${M.toFixed(2)})`;
        updateCoefficients(parseInt(sliderAlpha.value), speedKmh);
    });

    btnReset.addEventListener('click', initSim);

    selectResolution.addEventListener('change', () => {
        allocateArrays();
        initSim();
        updateCoefficients(parseInt(sliderAlpha.value), parseInt(sliderRe.value));
    });

    btnToggle.addEventListener('click', () => {
        isPaused = !isPaused;
        btnToggle.innerHTML = isPaused ? '<i class="fas fa-play"></i> Reanudar' : '<i class="fas fa-pause"></i> Pausar';
        btnToggle.style.background = isPaused ? '#f59e0b' : '#3b82f6';
    });

    const pane = document.getElementById('ns-sim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(ent => {
            if (ent.isIntersecting) {
                isVisible = true;
                requestAnimationFrame(() => {
                    resize();
                    initSim();
                    updateCoefficients(parseInt(sliderAlpha.value), parseInt(sliderRe.value));
                    if (!animId) draw();
                });
            } else {
                isVisible = false;
                if (animId) { cancelAnimationFrame(animId); animId = null; }
            }
        });
    }, {threshold: 0.1});
    if (pane) observer.observe(pane);

    setTimeout(() => {
        resize();
        initSim();
        spanAlpha.textContent = sliderAlpha.value;
        
        const speedKmh = parseInt(sliderRe.value);
        const speedMs = speedKmh / 3.6;
        const M = speedMs / 340;
        const Re = speedMs * 0.5 / 1.5e-5;
        spanRe.textContent = `${speedKmh} km/h (${speedMs.toFixed(1)} m/s, Re = ${formatRe(Re)}, M = ${M.toFixed(2)})`;

        updateCoefficients(parseInt(sliderAlpha.value), speedKmh);
    }, 150);
}

// ============================================================================
// LAB: BERNOULLI + VENTURI + PELTON
// ============================================================================
function initPeltonSimulation() {
    const canvas = document.getElementById('pelton-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const ui = {
        h: document.getElementById('pelton-h'),
        d1: document.getElementById('pelton-d1'),
        d2: document.getElementById('pelton-d2'),
        hVal: document.getElementById('pelton-h-val'),
        d1Val: document.getElementById('pelton-d1-val'),
        d2Val: document.getElementById('pelton-d2-val'),
        vOut: document.getElementById('pelton-v-out'),
        mDot: document.getElementById('pelton-m-dot'),
        force: document.getElementById('pelton-force'),
        power: document.getElementById('pelton-power'),
        bP1: document.getElementById('b-p1'),
        bP2: document.getElementById('b-p2'),
        bP3: document.getElementById('b-p3'),
        bK1: document.getElementById('b-k1'),
        bK2: document.getElementById('b-k2'),
        bK3: document.getElementById('b-k3'),
        bZ1: document.getElementById('b-z1'),
        bZ2: document.getElementById('b-z2'),
        bZ3: document.getElementById('b-z3'),
        bTot1: document.getElementById('b-tot1'),
        bTot2: document.getElementById('b-tot2'),
        bTot3: document.getElementById('b-tot3')
    };

    let animId = null;
    let isVisible = false;
    let wheelAngle = 0;
    let particles = [];
    
    // Create particles with staggered initial distances so the pipe is immediately populated
    const NUM_PARTICLES = 150;
    for(let i = 0; i < NUM_PARTICLES; i++) {
        particles.push({
            dist: Math.random() * 360, 
            offsetY: Math.random() - 0.5,
            isSplash: false,
            x: 0,
            y: 0,
            vx: 0,
            vy: 0,
            life: 0
        });
    }

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width * (window.devicePixelRatio || 1);
        canvas.height = rect.height * (window.devicePixelRatio || 1);
        ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
    }
    window.addEventListener('resize', () => { if (isVisible) resize(); });

    function render() {
        if (!isVisible) {
            animId = requestAnimationFrame(render);
            return;
        }

        const W = canvas.width / (window.devicePixelRatio || 1);
        const H_canvas = canvas.height / (window.devicePixelRatio || 1);
        
        ctx.clearRect(0, 0, W, H_canvas);

        const h = parseFloat(ui.h.value);
        const d1 = parseFloat(ui.d1.value);
        const d2 = parseFloat(ui.d2.value);

        // Update UI labels
        ui.hVal.textContent = h.toFixed(1);
        ui.d1Val.textContent = d1.toFixed(2);
        ui.d2Val.textContent = d2.toFixed(2);

        // Layout and geometry constants
        const tankX = 40;
        const tankWidth = 90;
        const maxH = 50;
        const tankYBase = H_canvas - 120;
        
        // Pipe and Venturi dimensions
        const p1W = d1 * 25; // Visual thickness for D1
        const p2W = d2 * 25; // Visual thickness for D2
        const pipeY = tankYBase - 45; // Centerline of the pipe (above base)
        const pipeL1 = 120;
        const venturiL = 70;
        const pipeL2 = 60;
        const jetL = 110;
        const totalLength = pipeL1 + venturiL + pipeL2 + jetL;

        const nozzleX = tankX + tankWidth + pipeL1 + venturiL;
        const jetStartX = nozzleX + pipeL2;
        const wheelX = jetStartX + jetL;
        const wheelR = 55;
        const wheelY = pipeY - wheelR; // Bottom of wheel is tangent to pipeY (center of jet)

        // Physics check: If H is at or below the pipe entrance (h <= d1 / 2), the siphon/flow breaks.
        const hasFlow = h > (d1 / 2);

        // Visual water height: h = 0 means water level is exactly at centerline (pipeY)
        const waterHeightAboveCenter = (h / maxH) * 180;
        const tankYTop = pipeY - waterHeightAboveCenter;

        // Physics calculations
        const g = 9.81;
        const rho = 1000;
        const p_atm = 101.325; // kPa

        // Bernoulli: v_out = sqrt(2gh) only if we have flow
        const v_out = hasFlow ? Math.sqrt(2 * g * h) : 0;
        const A1 = Math.PI * Math.pow(d1, 2) / 4;
        const A2 = Math.PI * Math.pow(d2, 2) / 4;
        
        const Q = A2 * v_out; // m3/s
        const mDot = rho * Q; // kg/s
        const force = mDot * v_out;
        const power = 0.5 * mDot * Math.pow(v_out, 2);

        const v1 = v_out * (A2 / A1);
        const v2 = v_out;

        // Pressures (absolute, kPa)
        const pTankVal = p_atm;
        const pD1Val = hasFlow 
            ? (p_atm + (rho * g * h - 0.5 * rho * Math.pow(v1, 2)) / 1000)
            : (p_atm + (rho * g * h) / 1000); // Stagnant hydrostatic pressure
        const pD2Val = hasFlow
            ? p_atm
            : (p_atm + (rho * g * h) / 1000); // Stagnant hydrostatic pressure

        // Kinetic Energy (1/2 * rho * v^2 / 1000, kPa)
        const k1Val = 0.0;
        const k2Val = (0.5 * rho * Math.pow(v1, 2)) / 1000;
        const k3Val = (0.5 * rho * Math.pow(v2, 2)) / 1000;

        // Potential Energy (rho * g * z / 1000, kPa)
        const z1Val = (rho * g * h) / 1000;
        const z2Val = 0.0;
        const z3Val = 0.0;

        // Total Bernoulli sums
        const tot1Val = pTankVal + k1Val + z1Val;
        const tot2Val = pD1Val + k2Val + z2Val;
        const tot3Val = pD2Val + k3Val + z3Val;

        ui.vOut.textContent = v_out.toFixed(2) + " m/s";
        ui.mDot.textContent = mDot.toFixed(2) + " kg/s";
        ui.force.textContent = (force / 1000).toFixed(2) + " kN";
        ui.power.textContent = (power / 1000).toFixed(2) + " kW";

        // Update Bernoulli table cells
        if (ui.bP1) ui.bP1.textContent = pTankVal.toFixed(1);
        if (ui.bP2) ui.bP2.textContent = pD1Val.toFixed(1);
        if (ui.bP3) ui.bP3.textContent = pD2Val.toFixed(1);

        if (ui.bK1) ui.bK1.textContent = k1Val.toFixed(1);
        if (ui.bK2) ui.bK2.textContent = k2Val.toFixed(1);
        if (ui.bK3) ui.bK3.textContent = k3Val.toFixed(1);

        if (ui.bZ1) ui.bZ1.textContent = z1Val.toFixed(1);
        if (ui.bZ2) ui.bZ2.textContent = z2Val.toFixed(1);
        if (ui.bZ3) ui.bZ3.textContent = z3Val.toFixed(1);

        if (ui.bTot1) ui.bTot1.textContent = tot1Val.toFixed(1);
        if (ui.bTot2) ui.bTot2.textContent = tot2Val.toFixed(1);
        if (ui.bTot3) ui.bTot3.textContent = tot3Val.toFixed(1);

        // Draw Tank structure (with solid base and left wall, opening on right for pipe)
        ctx.fillStyle = "#334155";
        // Left wall
        ctx.fillRect(tankX - 10, tankYBase - 250, 10, 260);
        // Base (complete bottom wall)
        ctx.fillRect(tankX - 10, tankYBase, tankWidth + 20, 10);

        // Water in tank
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fillRect(tankX, tankYTop, tankWidth, tankYBase - tankYTop);

        // Draw Tank right wall: top section (above pipe) and bottom section (below pipe)
        ctx.fillStyle = "#334155";
        ctx.fillRect(tankX + tankWidth, tankYBase - 250, 10, (pipeY - p1W/2) - (tankYBase - 250));
        ctx.fillRect(tankX + tankWidth, pipeY + p1W/2, 10, tankYBase - (pipeY + p1W/2) + 10);

        // Draw water inside the pipes (only if there is flow, otherwise it is empty/dry)
        if (hasFlow) {
            ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
            // Pipe 1
            ctx.fillRect(tankX + tankWidth, pipeY - p1W/2, pipeL1, p1W);
            // Venturi contraction
            ctx.beginPath();
            ctx.moveTo(tankX + tankWidth + pipeL1, pipeY - p1W/2);
            ctx.lineTo(nozzleX, pipeY - p2W/2);
            ctx.lineTo(nozzleX, pipeY + p2W/2);
            ctx.lineTo(tankX + tankWidth + pipeL1, pipeY + p1W/2);
            ctx.fill();
            // Pipe 2 (Nozzle)
            ctx.fillRect(nozzleX, pipeY - p2W/2, pipeL2, p2W);
        }

        // Draw Pipe boundaries (Borders)
        ctx.strokeStyle = "#94a3b8";
        ctx.lineWidth = 3;
        ctx.beginPath();
        // Top boundary
        ctx.moveTo(tankX + tankWidth, pipeY - p1W/2);
        ctx.lineTo(tankX + tankWidth + pipeL1, pipeY - p1W/2);
        ctx.lineTo(nozzleX, pipeY - p2W/2);
        ctx.lineTo(nozzleX + pipeL2, pipeY - p2W/2);
        ctx.stroke();

        ctx.beginPath();
        // Bottom boundary
        ctx.moveTo(tankX + tankWidth, pipeY + p1W/2);
        ctx.lineTo(tankX + tankWidth + pipeL1, pipeY + p1W/2);
        ctx.lineTo(nozzleX, pipeY + p2W/2);
        ctx.lineTo(nozzleX + pipeL2, pipeY + p2W/2);
        ctx.stroke();

        // Particle speed multipliers for visualization
        const visSpeedScale = 0.5; 

        // Update and draw flowing water particles
        ctx.fillStyle = "rgba(147, 197, 253, 0.9)";
        particles.forEach(p => {
            if (!p.isSplash) {
                // If there's no flow, particles just stay static at start.
                let speed = hasFlow ? v2 : 0;
                if (hasFlow) {
                    // Parabolic profile multiplier: 2 * (1 - 4 * y^2) where y is in [-0.5, 0.5]
                    const profileFactor = 2 * (1 - 4 * p.offsetY * p.offsetY);
                    if (p.dist < pipeL1) {
                        speed = v1 * profileFactor;
                    } else if (p.dist < pipeL1 + venturiL) {
                        const frac = (p.dist - pipeL1) / venturiL;
                        const d_local = d1 + (d2 - d1) * frac;
                        const A_local = Math.PI * Math.pow(d_local, 2) / 4;
                        speed = (Q / A_local) * profileFactor;
                    } else if (p.dist < pipeL1 + venturiL + pipeL2) {
                        speed = v2 * profileFactor;
                    } else {
                        // Free jet: uniform velocity profile
                        speed = v_out;
                    }
                }

                // Advance particle position
                p.dist += speed * visSpeedScale;

                // Map p.dist to coordinates
                if (p.dist < pipeL1) {
                    p.x = tankX + tankWidth + p.dist;
                    p.y = pipeY + p.offsetY * p1W * 0.9;
                } else if (p.dist < pipeL1 + venturiL) {
                    const localDist = p.dist - pipeL1;
                    p.x = tankX + tankWidth + pipeL1 + localDist;
                    const frac = localDist / venturiL;
                    const d_local = d1 + (d2 - d1) * frac;
                    const w_local = d_local * 25;
                    p.y = pipeY + p.offsetY * w_local * 0.9;
                } else if (p.dist < pipeL1 + venturiL + pipeL2) {
                    const localDist = p.dist - (pipeL1 + venturiL);
                    p.x = nozzleX + localDist;
                    p.y = pipeY + p.offsetY * p2W * 0.9;
                } else {
                    const localDist = p.dist - (pipeL1 + venturiL + pipeL2);
                    p.x = jetStartX + localDist;
                    p.y = pipeY + p.offsetY * p2W * 0.8; // slightly focused jet
                }

                // Draw pipe/jet particle
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.dist >= (pipeL1 + venturiL + pipeL2) ? 2.5 : 2, 0, Math.PI * 2);
                ctx.fill();

                // Hit detection with Pelton Wheel
                if (p.dist >= totalLength) {
                    // Turn particle into a splash splash
                    p.isSplash = true;
                    p.x = wheelX - 10;
                    p.y = pipeY + p.offsetY * p2W;
                    // Deflect backward/downward and scatter
                    p.vx = - (v_out * 0.15 * Math.random()) - 1;
                    p.vy = (Math.random() - 0.6) * 4 - 1;
                    p.life = Math.random() * 25 + 15;
                }
            } else {
                // Splash particle physics (gravity)
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.25; // gravity effect
                p.life--;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
                ctx.fill();

                if (p.life <= 0) {
                    // Reset to start of pipe
                    p.isSplash = false;
                    p.dist = 0;
                    p.offsetY = Math.random() - 0.5;
                }
            }
        });

        // Draw Pelton Wheel (tangent to jet centerline at the bottom edge)
        // Wheel rotation speed scales with jet velocity, rotating anti-clockwise.
        // Capped to prevent stroboscopic (wagon-wheel) effect where it visually looks like it spins backward.
        wheelAngle -= Math.min(v_out * 0.003, 0.06);

        ctx.save();
        ctx.translate(wheelX, wheelY);
        ctx.rotate(wheelAngle);

        // Core wheel disk
        ctx.fillStyle = "#475569";
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, wheelR, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner rim decoration
        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, wheelR - 12, 0, Math.PI * 2);
        ctx.stroke();

        // 12 Pelton Buckets (cucharas)
        const numBuckets = 12;
        ctx.fillStyle = "#cbd5e1";
        ctx.strokeStyle = "#475569";
        ctx.lineWidth = 1.5;
        for(let i = 0; i < numBuckets; i++) {
            const angle = (i * Math.PI * 2) / numBuckets;
            // Place buckets along the outer radius
            const bx = Math.cos(angle) * wheelR;
            const by = Math.sin(angle) * wheelR;
            
            ctx.save();
            ctx.translate(bx, by);
            ctx.rotate(angle + Math.PI / 2); // Orient outward
            
            // Draw double-hemispherical bucket (typical Pelton shape)
            ctx.beginPath();
            ctx.arc(-5, 0, 8, 0, Math.PI * 1.1);
            ctx.arc(5, 0, 8, -Math.PI * 0.1, Math.PI);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        // Center hub shaft
        ctx.fillStyle = "#f59e0b";
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.restore();

        // Helper to draw text with subscript centered on x
        function drawSubscriptText(x, y, main, sub, mainFont = "bold 9px Inter", subFont = "bold 7px Inter", color = "#cbd5e1") {
            ctx.save();
            ctx.fillStyle = color;
            ctx.textAlign = "left";
            ctx.font = mainFont;
            const mainW = ctx.measureText(main).width;
            ctx.font = subFont;
            const subW = ctx.measureText(sub).width;
            const totalW = mainW + subW;
            
            const startX = x - totalW / 2;
            ctx.font = mainFont;
            ctx.fillText(main, startX, y);
            ctx.font = subFont;
            ctx.fillText(sub, startX + mainW, y + 2);
            ctx.restore();
        }

        // Dynamic canvas labels
        ctx.fillStyle = "#f1f5f9";
        ctx.font = "bold 13px Inter";
        ctx.textAlign = "center";
        ctx.fillText("Tanque de Nivel Constante", tankX + tankWidth/2, 30);
        ctx.font = "12px Inter";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText("H = " + h.toFixed(1) + " m", tankX + tankWidth/2, tankYBase + 25);
        drawSubscriptText(tankX + tankWidth + pipeL1/2, pipeY - p1W/2 - 12, "D", "1", "bold 11px Inter", "bold 8px Inter", "#cbd5e1");
        drawSubscriptText(nozzleX + pipeL2/2, pipeY - p2W/2 - 12, "D", "2 (Venturi)", "bold 11px Inter", "bold 8px Inter", "#cbd5e1");
        ctx.font = "bold 11px Inter";
        ctx.fillStyle = "#cbd5e1";
        ctx.textAlign = "center";
        ctx.fillText("Turbina Pelton", wheelX, wheelY - wheelR - 15);

        function drawPressureGauge(x, y, label, value, minVal, maxVal) {
            const gaugeY = y - 32;
            const gaugeR = 18;
            ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, gaugeY + gaugeR); ctx.stroke();
            ctx.fillStyle = "#1e293b"; ctx.strokeStyle = "#475569"; ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(x, gaugeY, gaugeR, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = "#0f172a";
            ctx.beginPath(); ctx.arc(x, gaugeY, gaugeR - 2, 0, Math.PI * 2); ctx.fill();
            ctx.strokeStyle = "#64748b"; ctx.lineWidth = 1;
            const startAngle = -5 * Math.PI / 6;
            const endAngle = 5 * Math.PI / 6;
            for (let i = 0; i < 5; i++) {
                const angle = startAngle + (i * (endAngle - startAngle)) / 4;
                ctx.beginPath();
                ctx.moveTo(x + Math.cos(angle) * (gaugeR - 6), gaugeY + Math.sin(angle) * (gaugeR - 6));
                ctx.lineTo(x + Math.cos(angle) * (gaugeR - 3), gaugeY + Math.sin(angle) * (gaugeR - 3));
                ctx.stroke();
            }
            const frac = Math.max(0, Math.min(1, (value - minVal) / (maxVal - minVal)));
            const needleAngle = startAngle + frac * (endAngle - startAngle);
            ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 1.8;
            ctx.beginPath(); ctx.moveTo(x, gaugeY);
            ctx.lineTo(x + Math.cos(needleAngle) * (gaugeR - 4), gaugeY + Math.sin(needleAngle) * (gaugeR - 4));
            ctx.stroke();
            ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.arc(x, gaugeY, 2.5, 0, Math.PI * 2); ctx.fill();
            let mainLabel = label, subLabel = "";
            if (label.includes("_")) { const p = label.split("_"); mainLabel = p[0]; subLabel = p[1]; }
            if (subLabel) { drawSubscriptText(x, gaugeY - gaugeR - 6, mainLabel, subLabel, "bold 9px Inter", "bold 7px Inter", "#94a3b8"); }
            else { ctx.fillStyle = "#94a3b8"; ctx.font = "bold 9px Inter"; ctx.textAlign = "center"; ctx.fillText(label, x, gaugeY - gaugeR - 6); }
            ctx.fillStyle = "#38bdf8"; ctx.font = "bold 7.5px monospace"; ctx.textAlign = "center"; ctx.fillText(value.toFixed(1), x, gaugeY + 11);
            ctx.fillStyle = "#64748b"; ctx.font = "5.5px Inter"; ctx.fillText("kPa", x, gaugeY + 16);
        }

        function drawVelocityIndicator(x, y, label, value) {
            ctx.strokeStyle = "#a7f3d0"; ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 20); ctx.stroke();
            ctx.fillStyle = "rgba(15,23,42,0.9)"; ctx.strokeStyle = "#059669"; ctx.lineWidth = 1.2;
            const boxW = 85, boxH = 16;
            ctx.beginPath(); ctx.rect(x - boxW/2, y + 20, boxW, boxH); ctx.fill(); ctx.stroke();
            let mainLabel = label, subLabel = "";
            if (label.includes("_")) { const p = label.split("_"); mainLabel = p[0]; subLabel = p[1]; }
            ctx.fillStyle = "#a7f3d0";
            if (subLabel) {
                ctx.textAlign = "left"; ctx.font = "bold 9px Inter";
                const mW = ctx.measureText(mainLabel).width;
                ctx.font = "bold 7px Inter"; const sW = ctx.measureText(subLabel).width;
                ctx.font = "bold 9px Inter";
                const valText = ": " + value.toFixed(2) + " m/s";
                const vW = ctx.measureText(valText).width;
                const totalW = mW + sW + vW;
                const sx = x - totalW / 2;
                ctx.font = "bold 9px Inter"; ctx.fillText(mainLabel, sx, y + 20 + 11);
                ctx.font = "bold 7px Inter"; ctx.fillText(subLabel, sx + mW, y + 20 + 13);
                ctx.font = "bold 9px Inter"; ctx.fillText(valText, sx + mW + sW, y + 20 + 11);
            } else {
                ctx.font = "bold 9px Inter"; ctx.textAlign = "center";
                ctx.fillText(label + ": " + value.toFixed(2) + " m/s", x, y + 20 + 11);
            }
        }

        drawPressureGauge(tankX + tankWidth/2, tankYTop, "P_tanque", pTankVal, 0, 200);
        drawPressureGauge(tankX + tankWidth + pipeL1/2, pipeY - p1W/2, "P_D1", pD1Val, 0, 600);
        drawPressureGauge(nozzleX + pipeL2/2, pipeY - p2W/2, "P_D2", pD2Val, 0, 200);
        drawVelocityIndicator(tankX + tankWidth + pipeL1/2, pipeY + p1W/2, "v_D1", v1);
        drawVelocityIndicator(nozzleX + pipeL2/2, pipeY + p2W/2, "v_D2", v2);

        animId = requestAnimationFrame(render);
    }

    const pane = document.getElementById('pelton-sim');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            isVisible = entry.isIntersecting;
            if (isVisible) { resize(); if (!animId) render(); }
            else { if (animId) { cancelAnimationFrame(animId); animId = null; } }
        });
    }, {threshold: 0.1});
    if (pane) observer.observe(pane);

    setTimeout(resize, 150);
}

function initCelsiusSimulation() {

    var slider      = document.getElementById('celsius-temp');
    var selScale    = document.getElementById('celsius-scale');
    var selPressure = document.getElementById('celsius-pressure');
    var cvP = document.getElementById('celsiusPhaseCanvas');
    var cvT = document.getElementById('celsiusThermometerCanvas');

    if (!slider || !cvP || !cvT) return;

    var ctxP = cvP.getContext('2d');
    var ctxT = cvT.getContext('2d');
    if (!ctxP || !ctxT) return;

    var spanState = document.getElementById('celsius-water-state');
    var spanTVal  = document.getElementById('celsius-thermometer-value');
    var spanTDisp = document.getElementById('celsius-temp-display');
    var cellMod   = document.getElementById('celsius-val-modern');
    var cellOrig  = document.getElementById('celsius-val-original');
    var cellFahr  = document.getElementById('celsius-val-fahrenheit');
    var cellKelv  = document.getElementById('celsius-val-kelvin');
    var divEq     = document.getElementById('celsius-equation-box');

    var animId = null;
    var tt = 0;

    var bubbles  = [], steam = [], currents = [];
    for (var i=0;i<20;i++) bubbles.push({x:Math.random()*130+45,y:Math.random()*100+110,r:Math.random()*3+1,spd:Math.random()*2+1,wb:Math.random()*6.28});
    for (var i=0;i<15;i++) steam.push({x:Math.random()*130+45,y:Math.random()*40+60,r:Math.random()*4+2,a:Math.random(),sy:Math.random()+0.5,sx:(Math.random()-0.5)*0.5});
    for (var i=0;i<5;i++)  currents.push({x:Math.random()*120+50,y:Math.random()*80+120,d:Math.random()>0.5?1:-1});

    function getTemp()   { return parseFloat(slider.value); }
    function getScale()  { return selScale ? selScale.value : 'modern'; }
    // FIX v2: use Antoine equation for accurate boiling point at any pressure
    // log10(P_mmHg) = 8.07131 - 1730.63/(233.426+T)  →  T = 1730.63/(8.07131-log10(P_mmHg))-233.426
    function getBoil()   {
        var p_atm  = selPressure ? parseFloat(selPressure.value) : 1.0;
        var p_mmHg = p_atm * 760.0;
        var T = 1730.63 / (8.07131 - Math.log10(p_mmHg)) - 233.426;
        return Math.round(T * 10) / 10;
    }

    function updateDOM() {
        var tm=getTemp(), tb=getBoil(), sc=getScale();
        var to=100-tm, tf=tm*1.8+32, tk=tm+273.15;
        if(cellMod)  cellMod.textContent  = tm.toFixed(1)+' \u00b0C';
        if(cellOrig) cellOrig.textContent = to.toFixed(1)+' \u00b0C_orig';
        if(cellFahr) cellFahr.textContent = tf.toFixed(1)+' \u00b0F';
        if(cellKelv) cellKelv.textContent = tk.toFixed(1)+' K';
        var txt=tm.toFixed(1)+' \u00b0C', eq='$$ T_{\\text{mod}}=100-T_{\\text{orig}} $$';
        if(sc==='original')   { txt=to.toFixed(1)+' \u00b0C_orig'; eq='$$ T_{\\text{orig}}=100-T_{\\text{mod}} $$'; if(spanTDisp) spanTDisp.textContent=to.toFixed(1)+' \u00b0C (Original 1742)'; }
        else if(sc==='fahrenheit') { txt=tf.toFixed(1)+' \u00b0F'; eq='$$ T_{\\text{fah}}=T_{\\text{mod}}\\times1.8+32 $$'; if(spanTDisp) spanTDisp.textContent=tf.toFixed(1)+' \u00b0F'; }
        else if(sc==='kelvin')    { txt=tk.toFixed(1)+' K'; eq='$$ T_{\\text{kel}}=T_{\\text{mod}}+273.15 $$'; if(spanTDisp) spanTDisp.textContent=tk.toFixed(1)+' K'; }
        else { if(spanTDisp) spanTDisp.textContent=tm.toFixed(1)+' \u00b0C (Moderna)'; }
        if(spanTVal) spanTVal.textContent=txt;
        if(divEq){ divEq.innerHTML=eq; if(window.MathJax) MathJax.typesetPromise([divEq]).catch(function(){}); }
        if(spanState){
            if(tm<=0)      { spanState.textContent='Hielo S\u00f3lido'; spanState.style.color='#38bdf8'; }
            else if(tm<tb) { spanState.textContent='Agua L\u00edquida'; spanState.style.color='#60a5fa'; }
            else           { spanState.textContent='Ebullici\u00f3n ('+tb+'\u00b0C)'; spanState.style.color='#ef4444'; }
        }
    }

    function drawBeaker() {
        var tm=getTemp(), tb=getBoil();
        ctxP.clearRect(0,0,cvP.width,cvP.height);
        // Burner glow
        if(tm>=tb){
            var pulse=0.8+0.2*Math.sin(tt*5);
            var gr=ctxP.createLinearGradient(40,0,180,0);
            gr.addColorStop(0,'rgba(239,68,68,0.2)');gr.addColorStop(0.5,'rgba(249,115,22,'+pulse+')');gr.addColorStop(1,'rgba(239,68,68,0.2)');
            ctxP.fillStyle=gr;ctxP.fillRect(36,210,148,12);
            ctxP.strokeStyle='rgba(249,115,22,0.5)';ctxP.lineWidth=2;
            for(var x=45;x<180;x+=25){var wh=15+Math.sin(tt*10+x)*5;ctxP.beginPath();ctxP.moveTo(x,222);ctxP.quadraticCurveTo(x+5,210-wh/2,x,210-wh);ctxP.stroke();}
        }else if(tm>0){
            ctxP.fillStyle='rgba(250,204,21,'+(0.1+0.4*(tm/tb))+')';ctxP.fillRect(36,210,148,8);
        }else{
            ctxP.fillStyle='rgba(56,189,248,0.15)';ctxP.fillRect(36,210,148,6);
        }
        // Beaker walls
        ctxP.strokeStyle='#94a3b8';ctxP.lineWidth=5;ctxP.lineCap='round';
        ctxP.beginPath();ctxP.moveTo(40,50);ctxP.lineTo(40,210);ctxP.lineTo(180,210);ctxP.lineTo(180,50);ctxP.stroke();
        // Fluid
        if(tm<=0){
            var ig=ctxP.createLinearGradient(43,105,177,207);
            ig.addColorStop(0,'rgba(56,189,248,0.5)');ig.addColorStop(1,'rgba(186,230,253,0.3)');
            ctxP.fillStyle=ig;ctxP.fillRect(43,105,134,102);
            var vib=Math.sin(tt*15)*0.3;
            ctxP.strokeStyle='rgba(255,255,255,0.4)';ctxP.lineWidth=2;
            ctxP.beginPath();ctxP.moveTo(70+vib,120);ctxP.lineTo(95+vib,155);ctxP.lineTo(85+vib,185);
            ctxP.moveTo(150+vib,115);ctxP.lineTo(130+vib,150);ctxP.lineTo(160+vib,190);ctxP.stroke();
            ctxP.fillStyle='rgba(255,255,255,0.6)';
            for(var i=0;i<6;i++){var sx=45+((i*23)%120),sy=110+((i*17)%90),sz=1.5+Math.sin(tt+i)*0.8;ctxP.fillRect(sx,sy,sz,sz);}
        }else if(tm<tb){
            var wg=ctxP.createLinearGradient(43,105,43,207);
            wg.addColorStop(0,'rgba(59,130,246,0.4)');wg.addColorStop(1,'rgba(30,58,138,0.6)');
            ctxP.fillStyle=wg;ctxP.beginPath();ctxP.moveTo(43,207);ctxP.lineTo(43,105);
            var amp=1.0+(tm/tb)*2.5;
            for(var x=43;x<=177;x++) ctxP.lineTo(x,105+Math.sin(x*0.15+tt*3.5)*amp);
            ctxP.lineTo(177,207);ctxP.closePath();ctxP.fill();
            ctxP.strokeStyle='rgba(255,255,255,0.15)';ctxP.lineWidth=1.5;
            currents.forEach(function(c,idx){c.y-=0.6*(1+(tm/tb));if(c.y<112){c.y=202;c.x=Math.random()*110+55;}ctxP.beginPath();ctxP.arc(c.x+Math.sin(tt*2+idx)*6,c.y,8,0,Math.PI,c.d>0);ctxP.stroke();});
        }else{
            var bg=ctxP.createLinearGradient(43,105,43,207);
            bg.addColorStop(0,'rgba(239,68,68,0.4)');bg.addColorStop(0.5,'rgba(249,115,22,0.3)');bg.addColorStop(1,'rgba(59,130,246,0.5)');
            ctxP.fillStyle=bg;ctxP.beginPath();ctxP.moveTo(43,207);ctxP.lineTo(43,105);
            for(var x=43;x<=177;x++) ctxP.lineTo(x,105+Math.sin(x*0.3+tt*12)*5+Math.cos(x*0.15+tt*6)*3);
            ctxP.lineTo(177,207);ctxP.closePath();ctxP.fill();
            ctxP.lineWidth=0.5;
            bubbles.forEach(function(b){b.y-=b.spd*1.5;b.x+=Math.sin(tt*5+b.wb)*0.8;if(b.y<105){b.y=200;b.x=Math.random()*120+50;}ctxP.fillStyle='rgba(255,255,255,0.65)';ctxP.strokeStyle='rgba(255,255,255,0.8)';ctxP.beginPath();ctxP.arc(b.x,b.y,b.r+0.5,0,6.28);ctxP.fill();ctxP.stroke();});
            steam.forEach(function(s){s.y-=s.sy*1.2;s.x+=s.sx*1.5;s.a-=0.012;if(s.y<20||s.a<=0){s.y=95;s.x=Math.random()*120+50;s.a=Math.random()*0.6+0.3;}ctxP.save();ctxP.globalAlpha=s.a;ctxP.fillStyle='rgba(255,255,255,0.25)';ctxP.beginPath();ctxP.arc(s.x,s.y,s.r+1,0,6.28);ctxP.fill();ctxP.restore();});
        }
        ctxP.fillStyle='#94a3b8';ctxP.font='bold 8px monospace';ctxP.textAlign='left';
        ctxP.fillText('200 ml',145,115);ctxP.fillRect(160,115,15,2);
        ctxP.fillText('100 ml',145,160);ctxP.fillRect(160,160,15,2);
    }

    // FIX v2: track last pressure to detect altitude change for pulsing effect
    var _lastBoil = null, _boilPulseFrames = 0;

    function drawThermo() {
        var tm=getTemp(), tb=getBoil(), sc=getScale();
        ctxT.clearRect(0,0,cvT.width,cvT.height);
        var tx=cvT.width/2;
        // Backplate
        ctxT.fillStyle='rgba(30,41,59,0.75)';ctxT.strokeStyle='rgba(71,85,105,0.8)';ctxT.lineWidth=2;
        ctxT.beginPath();ctxT.rect(15,10,cvT.width-30,cvT.height-20);ctxT.fill();ctxT.stroke();
        // Y mapping: 0C -> y=160, each degree -> 0.9px up
        function ty(d){return 160-d*0.9;}
        // Detect boiling point change (altitude change) → trigger pulse
        if(_lastBoil !== null && Math.abs(tb - _lastBoil) > 0.05) _boilPulseFrames = 60;
        _lastBoil = tb;
        if(_boilPulseFrames > 0) _boilPulseFrames--;
        var boilAlpha = _boilPulseFrames > 0 ? (0.6 + 0.4*Math.sin(tt*20)) : 0.55;
        var boilLineW  = _boilPulseFrames > 0 ? (2 + Math.sin(tt*20)) : 1;
        // Dashed calibration lines
        ctxT.setLineDash([2,2]);ctxT.lineWidth=1;
        ctxT.strokeStyle='rgba(56,189,248,0.5)';ctxT.beginPath();ctxT.moveTo(20,ty(0));ctxT.lineTo(cvT.width-20,ty(0));ctxT.stroke();
        // Boiling line — pulses when altitude changes
        ctxT.setLineDash(_boilPulseFrames > 0 ? [4,2] : [2,2]);
        ctxT.lineWidth=boilLineW;
        ctxT.strokeStyle='rgba(239,68,68,'+boilAlpha+')';
        ctxT.beginPath();ctxT.moveTo(20,ty(tb));ctxT.lineTo(cvT.width-20,ty(tb));ctxT.stroke();
        // Boiling label on the line (show value when pulsing)
        if(_boilPulseFrames > 0) {
            var tbLabel = sc==='original'?(100-tb).toFixed(1):sc==='fahrenheit'?(tb*1.8+32).toFixed(1):sc==='kelvin'?(tb+273.15).toFixed(1):tb.toFixed(1);
            ctxT.setLineDash([]);
            ctxT.fillStyle='rgba(239,68,68,'+(0.7+0.3*Math.sin(tt*20))+')';
            ctxT.font='bold 7px monospace';ctxT.textAlign='center';
            ctxT.fillText('↑'+tbLabel+(sc==='fahrenheit'?'°F':sc==='kelvin'?'K':'°C'), tx, ty(tb)-4);
        }
        ctxT.setLineDash([]);
        // Tick marks every 20 degrees
        ctxT.lineWidth=1;
        for(var d=-40;d<=140;d+=20){
            var y=ty(d);
            if(y<25||y>195) continue;
            ctxT.strokeStyle='rgba(148,163,184,0.4)';ctxT.beginPath();ctxT.moveTo(tx-10,y);ctxT.lineTo(tx-4,y);ctxT.stroke();
            var lv=d;
            if(sc==='original') lv=100-d;else if(sc==='fahrenheit') lv=d*1.8+32;else if(sc==='kelvin') lv=d+273.15;
            ctxT.fillStyle=(d===0)?'#38bdf8':(Math.abs(d-tb)<5?'#ef4444':'#94a3b8');
            ctxT.font='bold 8px monospace';ctxT.textAlign='right';
            ctxT.fillText(Math.round(lv)+'',tx-14,y+3);
        }
        // Units label
        ctxT.fillStyle='#64748b';ctxT.font='7px monospace';ctxT.textAlign='center';
        ctxT.fillText(sc==='fahrenheit'?'\u00b0F':sc==='kelvin'?'K':sc==='original'?'\u00b0C Orig':'\u00b0C',tx,22);
        // Glass tube background
        ctxT.fillStyle='#1e293b';ctxT.fillRect(tx-4,30,8,170);
        // Mercury column
        var my=Math.max(32,Math.min(198,ty(tm)));
        var mh=Math.max(0,210-my);
        ctxT.fillStyle='#ef4444';ctxT.fillRect(tx-2,my,4,mh);
        // Bulb
        ctxT.beginPath();ctxT.arc(tx,210,13,0,6.28);ctxT.fill();
        // Glass reflections
        ctxT.fillStyle='rgba(255,255,255,0.2)';ctxT.fillRect(tx+1,my,1,mh);
        ctxT.beginPath();ctxT.arc(tx-4,206,4,0,6.28);ctxT.fill();
        // Glass outlines
        ctxT.strokeStyle='#475569';ctxT.lineWidth=1.5;
        ctxT.beginPath();ctxT.moveTo(tx-5,30);ctxT.lineTo(tx-5,198);ctxT.moveTo(tx+5,30);ctxT.lineTo(tx+5,198);ctxT.stroke();
    }

    function render() {
        tt += 0.05;
        drawBeaker();
        drawThermo();
        animId = requestAnimationFrame(render);
    }

    slider.addEventListener('input', updateDOM);
    if(selScale)    selScale.addEventListener('change', updateDOM);
    if(selPressure) selPressure.addEventListener('change', updateDOM);

    window.setCelsiusTemp = function(v){ slider.value=v; updateDOM(); };

    updateDOM();
    render();

    var pane = document.getElementById('celsius-sim');
    if(pane){
        new IntersectionObserver(function(entries){
            if(!entries[0].isIntersecting){ if(animId){cancelAnimationFrame(animId);animId=null;} }
            else{ if(!animId) render(); }
        }).observe(pane);
    }
}

// ── DOM Translation System ──────────────────
const reverseTranslations = {};
let reverseMapBuilt = false;

window.translateDOM = function(lang) {
    window.currentLanguage = lang;
    
    // Toggle pre-translated lab spans
    document.querySelectorAll('.lang-es').forEach(el => el.style.display = (lang === 'en') ? 'none' : '');
    document.querySelectorAll('.lang-en').forEach(el => el.style.display = (lang === 'en') ? '' : 'none');

    if (!reverseMapBuilt && window.uiTranslations) {
        for (const [esText, enText] of Object.entries(window.uiTranslations)) {
            if (enText && esText) {
                reverseTranslations[enText.trim()] = esText.trim();
            }
        }
        reverseMapBuilt = true;
    }
    
    function walk(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.nodeValue;
            const trimmed = text.trim();
            const cleaned = trimmed.replace(/\s+/g, ' ');
            if (cleaned.length > 1) {
                if (lang === 'en') {
                    if (window.uiTranslations && window.uiTranslations[text]) {
                        node.nodeValue = window.uiTranslations[text];
                    } else if (window.uiTranslations && window.uiTranslations[cleaned]) {
                        const lws = text.match(/^\s*/)[0];
                        const tws = text.match(/\s*$/)[0];
                        node.nodeValue = lws + window.uiTranslations[cleaned] + tws;
                    }
                } else {
                    if (reverseTranslations[text]) {
                        node.nodeValue = reverseTranslations[text];
                    } else if (reverseTranslations[cleaned]) {
                        const lws = text.match(/^\s*/)[0];
                        const tws = text.match(/\s*$/)[0];
                        node.nodeValue = lws + reverseTranslations[cleaned] + tws;
                    }
                }
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            // FIX v2: Skip traversing dynamic elements, static language spans, and MathJax containers to prevent freezes/infinite loops
            if (node.id === 'timeline' || node.id === 'top-timeline' || node.id === 'comment-feed-container' ||
                (node.classList && (node.classList.contains('lang-es') || node.classList.contains('lang-en') || node.classList.contains('mjx-container'))) || 
                (node.tagName && node.tagName.startsWith('MJX'))) {
                return;
            }
            if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE' && node.tagName !== 'TEXTAREA' && node.tagName !== 'CANVAS') {
                if (node.placeholder) {
                    const ph = node.placeholder;
                    if (lang === 'en' && window.uiTranslations && window.uiTranslations[ph]) {
                        node.placeholder = window.uiTranslations[ph];
                    } else if (lang === 'es' && reverseTranslations[ph]) {
                        node.placeholder = reverseTranslations[ph];
                    }
                }
                
                if (node.title) {
                    const t = node.title;
                    if (lang === 'en' && window.uiTranslations && window.uiTranslations[t]) {
                        node.title = window.uiTranslations[t];
                    } else if (lang === 'es' && reverseTranslations[t]) {
                        node.title = reverseTranslations[t];
                    }
                }
                
                for (let child of node.childNodes) {
                    walk(child);
                }
            }
        }
    }
    
    walk(document.body);
    
    // Re-render timeline
    const searchInput = document.getElementById('timeline-search');
    const categorySelect = document.getElementById('timeline-filter-category');
    initTimeline(searchInput ? searchInput.value : '', categorySelect ? categorySelect.value : 'all');
    initTopTimeline();
    
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            btn.style.color = 'white';
        } else {
            btn.classList.remove('active');
            btn.style.color = 'var(--text-muted)';
        }
    });

    // FIX v2: Re-render all MathJax equations after language switch
    if (window.MathJax && MathJax.typesetPromise) {
        MathJax.typesetPromise().catch(function(err) { console.warn('MathJax re-typeset error:', err); });
    }
};
// ── Boundary Layer Development in Internal Flow ──────────────────────────────
function initInternalBLSimulation() {
    var canvas = document.getElementById('internalBLCanvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    var sliderUavg  = document.getElementById('ibl-uavg');
    var sliderDiam  = document.getElementById('ibl-diam');
    var sliderLength = document.getElementById('ibl-length');
    var sliderPr    = document.getElementById('ibl-prandtl');
    var sliderTfIn  = document.getElementById('ibl-tfin');
    var sliderTs    = document.getElementById('ibl-ts');
    var chkProfiles = document.getElementById('ibl-show-profiles');
    var chkBL       = document.getElementById('ibl-show-bl');
    var chkThermal  = document.getElementById('ibl-show-thermal');
    var lblUavg     = document.getElementById('ibl-uavg-val');
    var lblDiam     = document.getElementById('ibl-diam-val');
    var lblPrandtl  = document.getElementById('ibl-prandtl-val');
    var lblCalcRe   = document.getElementById('ibl-calc-re-lbl');
    var lblLength   = document.getElementById('ibl-length-val');
    var lblLTotal   = document.getElementById('ibl-ltotal-lbl');
    var msgFD       = document.getElementById('ibl-fd-msg');
    var lblLh       = document.getElementById('ibl-lh-lbl');
    var lblLt       = document.getElementById('ibl-lt-lbl');
    var lblFrac     = document.getElementById('ibl-frac-lbl');
    var lblRegime   = document.getElementById('ibl-regime-lbl');
    var lblUmax     = document.getElementById('ibl-umax-lbl');

    var animId = null;
    var particles = [];

    function getLayout(diam) {
        var d = diam || 20.0;
        var W = canvas.width;
        var H = canvas.height;
        // Scale visual pipe height proportionally to the full 1-1000 range
        var min_pipeH = 15.0; // minimum visual thickness
        var max_pipeH = H * 0.88; // maximum visual thickness without clipping
        var pipeH = min_pipeH + ((d - 1.0) / 999.0) * (max_pipeH - min_pipeH);
        pipeH = Math.min(Math.max(pipeH, min_pipeH), max_pipeH);
        var pipeTop    = (H - pipeH) / 2;
        var pipeBottom = (H + pipeH) / 2;
        var pipeR = pipeH / 2;
        var pipeYc = H / 2;
        var pipeLeft  = 44;
        var pipeRight = W - 18;
        var pipeW = pipeRight - pipeLeft;
        return { W:W, H:H, pipeTop:pipeTop, pipeBottom:pipeBottom,
                 pipeH:pipeH, pipeR:pipeR, pipeYc:pipeYc,
                 pipeLeft:pipeLeft, pipeRight:pipeRight, pipeW:pipeW };
    }

    function tProfile(xnT, yn) {
        var deltaT = Math.sqrt(xnT) * 1.1;
        var absY = Math.abs(yn);
        if (deltaT >= 1.0) {
            var excess = deltaT - 1.0;
            var baseT = 1.0 - (1.0 - absY) * (1.0 - absY);
            var blend = 1.0 - Math.exp(-excess * 2.0); 
            return baseT + (1.0 - baseT) * blend;
        } else {
            if (absY < (1.0 - deltaT)) return 0.0;
            else {
                var sT = (absY - (1.0 - deltaT)) / deltaT;
                return sT * sT;
            }
        }
    }

    function uProfile(xn, yn, ReVal) {
        var isTurbulent = ReVal > 4000;
        var isTrans = ReVal >= 2300 && ReVal <= 4000;
        
        var delta = Math.min(1.0, Math.sqrt(xn) * (isTurbulent ? 3.0 : 1.1));
        var absY  = Math.abs(yn);
        
        // Base Laminar Profile
        var uLam;
        if (delta >= 1.0) uLam = 2.0 * (1.0 - yn * yn);
        else {
            if (absY < (1.0 - delta)) {
                var core = Math.max(1.0 - delta * delta, 0.05);
                uLam = Math.min(1.0 / core, 2.0);
            } else {
                var s = (1.0 - absY) / delta;
                var Uc = Math.min(1.0 / Math.max(1.0 - delta * delta, 0.05), 2.0);
                uLam = Uc * (1.5 * s - 0.5 * s * s * s);
            }
        }
        
        // Turbulent Profile (1/7th power law)
        var uTurb;
        if (delta >= 1.0) uTurb = 1.22 * Math.pow(1.0 - absY, 1.0 / 7.0);
        else {
            if (absY < (1.0 - delta)) uTurb = 1.22; // Core
            else {
                var sT = (1.0 - absY) / delta;
                uTurb = 1.22 * Math.pow(sT, 1.0 / 7.0);
            }
        }
        
        if (isTurbulent) return uTurb;
        if (isTrans) {
            var f = (ReVal - 2300) / 1700;
            return uLam * (1 - f) + uTurb * f;
        }
        return uLam;
    }

    function buildParticles() {
        particles = [];
        for (var xi = 0; xi < 8; xi++) {
            for(var pi = 0; pi <= 12; pi++) {
                particles.push({ xn: xi * 0.15, yn: (pi/12) * 1.94 - 0.97 });
            }
        }
    }

    function draw() {
        var Uavg  = sliderUavg  ? parseFloat(sliderUavg.value)  : 0.05;
        var Diam  = sliderDiam  ? parseFloat(sliderDiam.value)  : 20.0;
        
        // Fluid Properties: Water at 20°C
        var rho = 998; // kg/m^3
        var mu  = 1.0e-3; // Pa*s
        
        // Calculate Reynolds Number: Re = rho * Uavg * (D/1000) / mu
        var Re = (rho * Uavg * (Diam / 1000.0)) / mu;
        var speed = 1.0;
        var showP = chkProfiles ? chkProfiles.checked : true;
        var showB = chkBL       ? chkBL.checked       : true;
        var showT = chkThermal  ? chkThermal.checked  : true;
        var TfIn  = sliderTfIn  ? parseFloat(sliderTfIn.value) : 20.0;
        var Ts    = sliderTs    ? parseFloat(sliderTs.value)   : 80.0;
        var dynPr = document.getElementById('ibl-prandtl');
        var Pr    = dynPr ? parseFloat(dynPr.value) : 7.0;

        if (document.getElementById('ibl-tfin-val')) document.getElementById('ibl-tfin-val').textContent = TfIn.toFixed(0);
        if (document.getElementById('ibl-ts-val')) document.getElementById('ibl-ts-val').textContent = Ts.toFixed(0);
        var lblPr = document.getElementById('ibl-prandtl-val');
        if (lblPr) lblPr.textContent = Pr.toFixed(1);

        canvas.width  = canvas.clientWidth  || 760;
        canvas.height = canvas.clientHeight || 380;
        var L = getLayout(Diam);

        // Physics entry-length fraction (0..1) — used for profile shapes & BL physics
        var LhVal;
        if (Re < 2300) LhVal = 0.05 * Re;
        else if (Re <= 4000) LhVal = 0.05 * 2300 * (1 - (Re - 2300)/1700) + 1.359 * Math.pow(Re, 0.25) * ((Re - 2300)/1700);
        else LhVal = 1.359 * Math.pow(Re, 0.25);
        var LhMeters = LhVal * (Diam / 1000.0);         // L_h in meters
        
        // Dynamic visual split based on a configurable pipe length
        var L_total = sliderLength ? parseFloat(sliderLength.value) : 130.0;
        if (lblLength) lblLength.textContent = L_total.toFixed(0);
        var physScale = LhVal / L_total;
        var fdVisual = Math.min(physScale, 0.88); // Cap at 88% to always show some FD zone
        var fdX      = L.pipeLeft + fdVisual * L.pipeW; 
        var Lh       = LhMeters.toFixed(2);
        
        // Thermal boundary layer
        var LtVal;
        if (Re < 2300) {
            LtVal = LhVal * Pr;
        } else if (Re <= 4000) {
            var fT = (Re - 2300) / 1700;
            var exponent = 1.0 * (1 - fT) + 0.333 * fT;
            LtVal = LhVal * Math.pow(Pr, exponent);
        } else {
            LtVal = LhVal * Math.pow(Pr, 0.333);
        }
        var LtMeters = LtVal * (Diam / 1000.0);
        var noThermal = Math.abs(Ts - TfIn) < 0.1;
        if (lblLt) {
            lblLt.textContent = noThermal ? 'N/A (ΔT=0)' : LtMeters.toFixed(2) + ' m';
        }
        var physScaleT = LtVal / L_total;
        var fdVisualT = Math.min(physScaleT, 0.88);
        
        // Pipe represents this many diameters total in the view
        var pipeDiam = L_total.toFixed(1);
        var LTotalMeters = L_total * (Diam / 1000.0);

        if (lblUavg)   lblUavg.textContent   = Uavg.toFixed(3);
        if (lblDiam)   lblDiam.textContent   = Diam.toFixed(0);
        if (lblCalcRe) lblCalcRe.textContent = Re.toFixed(0);
        if (lblLh)     lblLh.textContent     = Lh + ' m';
        if (lblLt)     lblLt.textContent     = LtMeters.toFixed(2) + ' m';
        if (lblLTotal) lblLTotal.textContent = LTotalMeters.toFixed(2) + ' m';
        if (lblFrac) {
            var percDev = (fdVisual * 100).toFixed(0);
            lblFrac.textContent = percDev + '% / ' + (100 - percDev) + '%';
        }
        if (msgFD) {
            msgFD.style.display = (fdVisual <= 0.10) ? 'block' : 'none';
        }
        
        var regimeText = Re < 2300 ? 'Laminar' : (Re <= 4000 ? 'Transición' : 'Turbulento');
        var regimeColor = Re < 2300 ? '#10b981' : (Re <= 4000 ? '#f59e0b' : '#ef4444');
        if (lblRegime) {
            lblRegime.textContent = regimeText;
            lblRegime.style.color = regimeColor;
        }
        
        // velScale is used for drawing arrow lengths scaling with Uavg
        var UavgRef = 0.05;
        var velScale = Math.max(0.20, Math.min(Uavg / UavgRef, 2.0));
        var uMaxRatio = Re < 2300 ? 2.0 : (Re > 4000 ? 1.22 : 2.0 - 0.78 * ((Re - 2300) / 1700));
        var uMax = uMaxRatio * Uavg;
        if (lblUmax)   lblUmax.textContent   = uMax.toFixed(3) + ' m/s';

        ctx.clearRect(0, 0, L.W, L.H);

        // Background zone tints
        ctx.fillStyle = 'rgba(56,189,248,0.06)';
        ctx.fillRect(L.pipeLeft, L.pipeTop, fdX - L.pipeLeft, L.pipeH);
        ctx.fillStyle = 'rgba(52,211,153,0.07)';
        ctx.fillRect(fdX, L.pipeTop, L.pipeRight - fdX, L.pipeH);

        // FD divider dashed line
        ctx.save();
        ctx.setLineDash([6, 4]);
        ctx.strokeStyle = 'rgba(52,211,153,0.65)';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(fdX, L.pipeTop - 8); ctx.lineTo(fdX, L.pipeBottom + 8); ctx.stroke();
        ctx.setLineDash([]); ctx.restore();

        // Boundary layer shading — drawn only within the developing zone (0..fdVisual)
        if (showB) {
            var i, xn, delta, xPx, yPx, xnScaled;
            // Top BL fill
            ctx.beginPath();
            for (i = 0; i <= 200; i++) {
                xnScaled = i / 200;                                   // 0..1 within developing zone
                xn = xnScaled;                                         // physics fraction
                delta = Math.min(1.0, Math.sqrt(xn) * 1.1);
                xPx = L.pipeLeft + xnScaled * fdVisual * L.pipeW;     // screen x within dev zone
                yPx = L.pipeTop + delta * L.pipeR;
                if (i === 0) ctx.moveTo(xPx, yPx); else ctx.lineTo(xPx, yPx);
            }
            ctx.lineTo(fdX, L.pipeTop); ctx.lineTo(L.pipeLeft, L.pipeTop); ctx.closePath();
            ctx.fillStyle = 'rgba(251,146,60,0.18)'; ctx.fill();

            // Bottom BL fill
            ctx.beginPath();
            for (i = 0; i <= 200; i++) {
                xnScaled = i / 200;
                xn = xnScaled;
                delta = Math.min(1.0, Math.sqrt(xn) * 1.1);
                xPx = L.pipeLeft + xnScaled * fdVisual * L.pipeW;
                yPx = L.pipeBottom - delta * L.pipeR;
                if (i === 0) ctx.moveTo(xPx, yPx); else ctx.lineTo(xPx, yPx);
            }
            ctx.lineTo(fdX, L.pipeBottom); ctx.lineTo(L.pipeLeft, L.pipeBottom); ctx.closePath();
            ctx.fillStyle = 'rgba(251,146,60,0.18)'; ctx.fill();

            // BL edge curves
            ['top','bot'].forEach(function(side) {
                ctx.beginPath(); ctx.strokeStyle = 'rgba(251,146,60,0.90)'; ctx.lineWidth = 2.0;
                for (var k = 0; k <= 300; k++) {
                    var xkS = k / 300;                                 // 0..1 within developing zone
                    var dk  = Math.min(1.0, Math.sqrt(xkS) * 1.1);
                    var xk2 = L.pipeLeft + xkS * fdVisual * L.pipeW;
                    var yk  = (side === 'top') ? (L.pipeTop + dk * L.pipeR) : (L.pipeBottom - dk * L.pipeR);
                    if (k === 0) ctx.moveTo(xk2, yk); else ctx.lineTo(xk2, yk);
                }
                ctx.stroke();
            });
        }
        
        // Thermal Boundary Layer shading
        if (showT && !noThermal) {
            var isHeating = Ts > TfIn;
            var tColorFill = isHeating ? 'rgba(244,63,94,0.15)' : 'rgba(56,189,248,0.15)';
            var tColorEdge = isHeating ? 'rgba(244,63,94,0.90)' : 'rgba(56,189,248,0.90)';
            
            // Top Thermal BL fill
            ctx.beginPath();
            for (var i = 0; i <= 200; i++) {
                var xnVis = i / 200;
                var xPx = L.pipeLeft + xnVis * L.pipeW;
                var xnScaled = xnVis / physScaleT;
                var deltaT = Math.min(1.0, Math.sqrt(xnScaled) * 1.1);
                var yPx = L.pipeTop + deltaT * L.pipeR;
                if (i === 0) ctx.moveTo(xPx, yPx); else ctx.lineTo(xPx, yPx);
            }
            ctx.lineTo(L.pipeRight, L.pipeTop); ctx.lineTo(L.pipeLeft, L.pipeTop); ctx.closePath();
            ctx.fillStyle = tColorFill; ctx.fill();

            // Bottom Thermal BL fill
            ctx.beginPath();
            for (var i = 0; i <= 200; i++) {
                var xnVis = i / 200;
                var xPx = L.pipeLeft + xnVis * L.pipeW;
                var xnScaled = xnVis / physScaleT;
                var deltaT = Math.min(1.0, Math.sqrt(xnScaled) * 1.1);
                var yPx = L.pipeBottom - deltaT * L.pipeR;
                if (i === 0) ctx.moveTo(xPx, yPx); else ctx.lineTo(xPx, yPx);
            }
            ctx.lineTo(L.pipeRight, L.pipeBottom); ctx.lineTo(L.pipeLeft, L.pipeBottom); ctx.closePath();
            ctx.fillStyle = tColorFill; ctx.fill();

            // Thermal BL edge curves
            ['top','bot'].forEach(function(side) {
                ctx.beginPath(); ctx.strokeStyle = tColorEdge; ctx.lineWidth = 2.0; ctx.setLineDash([4, 4]);
                for (var k = 0; k <= 300; k++) {
                    var xnVis = k / 300;
                    var xk2 = L.pipeLeft + xnVis * L.pipeW;
                    var xnScaled = xnVis / physScaleT;
                    var dkT  = Math.min(1.0, Math.sqrt(xnScaled) * 1.1);
                    var yk  = (side === 'top') ? (L.pipeTop + dkT * L.pipeR) : (L.pipeBottom - dkT * L.pipeR);
                    if (k === 0) ctx.moveTo(xk2, yk); else ctx.lineTo(xk2, yk);
                }
                ctx.stroke(); ctx.setLineDash([]);
            });
        }

        // Velocity profiles — positions defined as fractions of total visible pipe (0..1)
        // Dev zone profiles at 0..fdVisual, FD profiles at fdVisual..1
        if (showP) {
            // Positions in "visual" space (0=inlet, 1=pipe end)
            // Use fixed absolute positions so profiles don't bunch up when fdVisual shrinks
            var posVis = [0.06, 0.18, 0.35, 0.55, 0.75, 0.92];
            posVis = posVis.filter(function(p){ return p > 0.01 && p < 0.99; });
            // maxArr scales with Re: higher Re = higher U_avg = higher u_max
            // Clamped so arrows fit inside pipe at extreme Re values
            var maxArr = L.pipeR * 0.80 * Math.max(0.28, Math.min(velScale, 1.0));
            pos2 = posVis;
            pos2.forEach(function(pxnVis) {
                var px   = L.pipeLeft + pxnVis * L.pipeW;
                var isFD = pxnVis >= fdVisual;
                // Map visual position to physics fraction within dev zone (0..1) or FD (1)
                var pxnPhys = isFD ? 1.0 : (pxnVis / fdVisual);
                var pxn = pxnPhys;
                var col  = isFD ? '#34d399' : '#38bdf8';
                ctx.beginPath(); ctx.strokeStyle = col; ctx.lineWidth = 1.6; ctx.globalAlpha = 0.5;
                for (var j = 0; j <= 60; j++) {
                    var yn2 = -1 + 2 * j / 60;
                    var xt = px + uProfile(pxnPhys, yn2, Re) * maxArr * 0.55;
                    var yt = L.pipeYc + yn2 * L.pipeR;
                    if (j === 0) ctx.moveTo(xt, yt); else ctx.lineTo(xt, yt);
                }
                ctx.stroke();
                ctx.lineWidth = 1.1;
                for (var j2 = 0; j2 <= 18; j2++) {
                    var yn3 = -1 + 2 * j2 / 18;
                    var al  = uProfile(pxnPhys, yn3, Re) * maxArr * 0.55;
                    var yt3 = L.pipeYc + yn3 * L.pipeR;
                    ctx.globalAlpha = 0.75;
                    ctx.beginPath(); ctx.strokeStyle = col; ctx.moveTo(px, yt3); ctx.lineTo(px + al, yt3); ctx.stroke();
                    if (al > 4) {
                        ctx.beginPath(); ctx.fillStyle = col; ctx.globalAlpha = 0.9;
                        ctx.moveTo(px + al, yt3); ctx.lineTo(px + al - 5, yt3 - 2.5); ctx.lineTo(px + al - 5, yt3 + 2.5);
                        ctx.closePath(); ctx.fill();
                    }
                }
                ctx.globalAlpha = 1.0;
                
                if (showT && !noThermal) {
                    var pxnPhysT = pxnVis / physScaleT;
                    var tCol = Ts > TfIn ? '#f43f5e' : '#38bdf8'; // red if heating, blue if cooling
                    ctx.beginPath(); ctx.strokeStyle = tCol; ctx.lineWidth = 1.6; ctx.setLineDash([2, 2]);
                    var deltaT_mag = Math.abs(Ts - TfIn);
                    var tScale = Math.min(Math.max(deltaT_mag / 60.0, 0.15), 1.6);
                    
                    // The temperature profile curve
                    for (var j3 = 0; j3 <= 60; j3++) {
                        var yn4 = -1 + 2 * j3 / 60;
                        var tv = tProfile(pxnPhysT, yn4); // 0 to 1
                        if (Ts < TfIn) {
                            tv = 1.0 - tv;
                        }
                        // Scale it proportionally to temperature difference
                        var tt = px + tv * tScale * maxArr * 0.55; 
                        var yt4 = L.pipeYc + yn4 * L.pipeR;
                        if (j3 === 0) ctx.moveTo(tt, yt4); else ctx.lineTo(tt, yt4);
                    }
                    ctx.stroke(); ctx.setLineDash([]);
                }
            });
        }

        // Draw fully-developed parabolic outline — amplitude scales with velScale
        ctx.save();
        var fdArrScale = Math.max(0.28, Math.min(velScale, 1.0)); // same cap as maxArr
        ctx.beginPath();
        for (var fp = 0; fp <= 60; fp++) {
            var fyn = -1 + 2 * fp / 60;
            var fv  = uProfile(1.0, fyn, Re);                           // normalized (0..2)
            var fxt = fdX + fv * (L.pipeR * 0.42) * fdArrScale;    // scale with Re
            var fyt = L.pipeYc + fyn * L.pipeR;
            if (fp === 0) ctx.moveTo(fxt, fyt); else ctx.lineTo(fxt, fyt);
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(52,211,153,0.12)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(52,211,153,0.55)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        // u_max label at the tip of the parabola
        var umaxTipX = fdX + 2.0 * (L.pipeR * 0.42) * fdArrScale + 5;
        var umaxTipY = L.pipeYc;
        ctx.font = 'bold 10px Outfit, sans-serif';
        ctx.fillStyle = '#34d399';
        ctx.textAlign = 'left';
        ctx.fillText('u\u2098\u2090\u02e3 = ' + uMaxRatio.toFixed(2) + 'U\u2090\u1d65\u1d72', umaxTipX, umaxTipY - 4);
        ctx.fillStyle = 'rgba(52,211,153,0.7)';
        ctx.font = '9px Outfit, sans-serif';
        ctx.fillText('(×' + velScale.toFixed(2) + ' vs Re=500)', umaxTipX, umaxTipY + 8);
        ctx.restore();

        // Pipe walls
        ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(L.pipeLeft, L.pipeTop);    ctx.lineTo(L.pipeRight, L.pipeTop);    ctx.stroke();
        ctx.beginPath(); ctx.moveTo(L.pipeLeft, L.pipeBottom); ctx.lineTo(L.pipeRight, L.pipeBottom); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(L.pipeLeft, L.pipeTop - 8); ctx.lineTo(L.pipeLeft, L.pipeBottom + 8); ctx.stroke();

        // Centerline dashed
        ctx.save(); ctx.setLineDash([7, 5]);
        ctx.strokeStyle = 'rgba(148,163,184,0.35)'; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(L.pipeLeft, L.pipeYc); ctx.lineTo(L.pipeRight, L.pipeYc); ctx.stroke();
        ctx.setLineDash([]); ctx.restore();

        // Particles — speed proportional to Re so higher Re = faster tracers
        if (particles.length === 0) buildParticles();
        var dt = 0.0025 * speed * velScale;
        
        if (typeof canvas.particleTimer === 'undefined') canvas.particleTimer = 0;
        canvas.particleTimer += velScale;
        // Spawn a vertical column periodically so they trace out the velocity profile visibly
        if (canvas.particleTimer > 60) {
            canvas.particleTimer = 0;
            for(var pi = 0; pi <= 12; pi++) {
                particles.push({ xn: 0.0, yn: (pi/12) * 1.94 - 0.97 });
            }
        }

        for (var i = particles.length - 1; i >= 0; i--) {
            var p = particles[i];
            var isInFD = p.xn >= fdVisual;
            var pPhys = isInFD ? 1.0 : (p.xn / fdVisual);
            var v = Math.max(0.02, uProfile(pPhys, p.yn, Re));
            p.xn += v * dt * 0.40;
            
            if (Re >= 2300) {
                var turbulenceIntensity = Re > 4000 ? 0.05 : 0.05 * ((Re - 2300) / 1700);
                p.yn += (Math.random() - 0.5) * turbulenceIntensity;
                if (p.yn > 0.95) p.yn = 0.95;
                if (p.yn < -0.95) p.yn = -0.95;
            }
            
            if (p.xn > 1.02) {
                particles.splice(i, 1);
                continue;
            }
            
            var px2 = L.pipeLeft + p.xn * L.pipeW;
            var py2 = L.pipeYc  + p.yn * L.pipeR;
            var fd2 = p.xn >= fdVisual;
            var pPhys2 = fd2 ? 1.0 : (p.xn / fdVisual);
            var dk2 = Math.min(1.0, Math.sqrt(pPhys2) * 1.1);
            var nw  = Math.abs(p.yn) > (1.0 - dk2 * 0.55);
            var c2  = fd2 ? '#34d399' : (nw ? 'rgba(251,146,60,0.95)' : '#60a5fa');
            ctx.beginPath(); ctx.arc(px2, py2, 2.8, 0, Math.PI * 2);
            ctx.fillStyle = c2; ctx.globalAlpha = 0.85; ctx.fill(); ctx.globalAlpha = 1.0;
        }

        // Zone labels
        ctx.font = 'bold 11px Outfit, sans-serif'; ctx.textAlign = 'center';
        ctx.fillStyle = '#60a5fa';
        ctx.fillText('Región de Entrada (Lₕ = ' + Lh + ' m)', L.pipeLeft + (fdX - L.pipeLeft) * 0.5, L.pipeTop - 13);
        ctx.fillStyle = '#34d399';
        ctx.fillText('Flujo Desarrollado', fdX + (L.pipeRight - fdX) * 0.5, L.pipeTop - 13);

        // Lh annotation arrow below pipe
        ctx.save();
        ctx.strokeStyle = '#f59e0b'; ctx.fillStyle = '#f59e0b'; ctx.lineWidth = 1.2;
        ctx.beginPath(); ctx.moveTo(L.pipeLeft + 6, L.pipeBottom + 18); ctx.lineTo(fdX - 6, L.pipeBottom + 18); ctx.stroke();
        [[L.pipeLeft + 6, -1], [fdX - 6, 1]].forEach(function(arr) {
            ctx.beginPath(); ctx.moveTo(arr[0], L.pipeBottom + 18);
            ctx.lineTo(arr[0] + 6*arr[1], L.pipeBottom + 14);
            ctx.lineTo(arr[0] + 6*arr[1], L.pipeBottom + 22);
            ctx.closePath(); ctx.fill();
        });
        ctx.font = '10px Outfit, sans-serif'; ctx.textAlign = 'center';
        ctx.fillText('Lₕ = 0.05 · Re · D = ' + Lh + ' m',
                     (L.pipeLeft + fdX) / 2, L.pipeBottom + 31);
        ctx.restore();

        // Wall / CL text
        ctx.font = '10px Outfit, sans-serif'; ctx.fillStyle = '#94a3b8'; ctx.textAlign = 'left';
        ctx.fillText('Pared', L.pipeLeft + 4, L.pipeTop - 4);
        ctx.fillText('Pared', L.pipeLeft + 4, L.pipeBottom + 13);
        ctx.fillText('CL',    L.pipeLeft + 4, L.pipeYc + 4);

        // BL legend
        if (showB) {
            ctx.fillStyle = 'rgba(251,146,60,0.65)';
            ctx.fillRect(L.pipeRight - 118, L.pipeTop + 6, 11, 11);
            ctx.fillStyle = '#94a3b8'; ctx.textAlign = 'left';
            ctx.fillText('δ(x) — Capa Límite', L.pipeRight - 104, L.pipeTop + 16);
        }

        animId = requestAnimationFrame(draw);
    }

    buildParticles();

    var pane = document.getElementById('internal-bl-sim');
    if (pane) {
        new IntersectionObserver(function(entries) {
            if (!entries[0].isIntersecting) { if (animId) { cancelAnimationFrame(animId); animId = null; } }
            else { if (!animId) draw(); }
        }, { threshold: 0.1 }).observe(pane);
    } else {
        draw();
    }
}


// =========================================================================
// COMMUNITY COMMENT WALL SYSTEM (LOCALSTORAGE ENGINE + FIREBASE READY)
// =========================================================================
(function() {
    let currentUser = null;
    let selectedAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg";
    let commentCurrentPage = 1;
    const firebaseConfig = {
      apiKey: "AIzaSyCVeHphav65sj851u72ikIcDXY1e2BN3Qk",
      authDomain: "thermal-science-history.firebaseapp.com",
      databaseURL: "https://thermal-science-history-default-rtdb.firebaseio.com",
      projectId: "thermal-science-history",
      storageBucket: "thermal-science-history.firebasestorage.app",
      messagingSenderId: "820331402760",
      appId: "1:820331402760:web:706f1ea98599a474ce23bd"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const database = firebase.database();

    // Helper to fetch from cloud with fallback
    async function cloudFetch(key, defaultValue) {
        try {
            const snapshot = await database.ref(key).once('value');
            if (snapshot.exists()) {
                let val = snapshot.val();
                // Firebase a veces convierte Arrays en Objetos si tienen índices faltantes.
                if (Array.isArray(defaultValue) && !Array.isArray(val) && val !== null && typeof val === 'object') {
                    val = Object.values(val);
                }
                return val || defaultValue;
            }
        } catch (e) {
            console.warn("Cloud read failed, using localStorage fallback:", e);
        }
        return JSON.parse(localStorage.getItem(`ht_${key}`) || JSON.stringify(defaultValue));
    }

    // Helper to save to cloud & local
    async function cloudSave(key, data) {
        localStorage.setItem(`ht_${key}`, JSON.stringify(data));
        try {
            await database.ref(key).set(data);
        } catch (e) {
            console.error("Cloud write failed:", e);
        }
    }

    async function syncFromCloud() {
        const cloudUsers = await cloudFetch("users", []);
        const localUsers = JSON.parse(localStorage.getItem("ht_registered_users") || "[]");
        const userMap = new Map();
        localUsers.forEach(u => userMap.set(u.email, u));
        cloudUsers.forEach(u => userMap.set(u.email, u));
        const mergedUsers = Array.from(userMap.values());
        localStorage.setItem("ht_registered_users", JSON.stringify(mergedUsers));
        await cloudSave("users", mergedUsers);

        const cloudComments = await cloudFetch("comments", []);
        let localComments = JSON.parse(localStorage.getItem("ht_comments") || "[]");
        
        const commentMap = new Map();
        localComments.forEach(c => commentMap.set(c.id, c));
        cloudComments.forEach(c => commentMap.set(c.id, c));
        
        // Ensure default comments of the three scientists are ALWAYS present
        defaultComments.forEach(defComm => {
            if (!commentMap.has(defComm.id)) {
                commentMap.set(defComm.id, defComm);
            }
        });

        const mergedComments = Array.from(commentMap.values()).sort((a, b) => b.timestamp - a.timestamp);
        
        let needsSave = false;
        mergedComments.forEach(comment => {
            if (comment.avatar && comment.avatar.includes("Jean_Baptiste_Joseph_Fourier.jpg")) {
                comment.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fourier2_-_restoration1.jpg/330px-Fourier2_-_restoration1.jpg";
                needsSave = true;
            }
            if (comment.avatar && comment.avatar.includes("Sadi_Carnot_in_military_uniform.jpg")) {
                comment.avatar = "Sadi_Carnot.jpeg";
                needsSave = true;
            }
            if (comment.avatar && comment.avatar.includes("Jpjoule.jpg")) {
                comment.avatar = "joule.jpg";
                needsSave = true;
            }
        });
        localStorage.setItem("ht_comments", JSON.stringify(mergedComments));
        await cloudSave("comments", mergedComments);
        drawComments();
    }

    const defaultComments = [
        {
            id: 1,
            author: "Sir Isaac Newton",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/330px-GodfreyKneller-IsaacNewton-1689.jpg",
            role: "Hero",
            text: "¡Este laboratorio de termociencias es fascinante! Me alegra ver que mi Ley de Enfriamiento sigue vigente.",
            timestamp: Date.now() - 3600000 * 24 // 1 day ago
        },
        {
            id: 2,
            author: "Joseph Fourier",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fourier2_-_restoration1.jpg/330px-Fourier2_-_restoration1.jpg",
            role: "Conduction Legend",
            text: "Excellent numerical calculus work. The linear heat conduction resolution is impeccable.",
            timestamp: Date.now() - 3600000 * 12 // 12 hours ago
        },
        {
            id: 3,
            author: "Sadi Carnot",
            avatar: "Sadi_Carnot.jpeg",
            role: "Thermodynamics Pioneer",
            text: "Una herramienta muy útil para entender el límite de eficiencia termodinámica de mis motores.",
            timestamp: Date.now() - 3600000 * 2 // 2 hours ago
        }
    ];

    function initCommentSystem() {
        // Load logged in user from localStorage
        const storedUser = localStorage.getItem("ht_logged_user");
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            showLoggedInState();
        } else {
            showLoggedOutState();
        }

        // Populate avatars dynamically from timelineEvents
        const avatarContainer = document.getElementById("register-avatar-selector");
        if (avatarContainer) {
            avatarContainer.innerHTML = "";
            let first = true;
            const seenImages = new Set();
            timelineEvents.forEach((ev) => {
                if (ev.image && ev.surname && !seenImages.has(ev.image)) {
                    seenImages.add(ev.image);
                    const img = document.createElement("img");
                    img.className = "avatar-option" + (first ? " selected" : "");
                    img.src = ev.image;
                    img.title = ev.surname;
                    
                    if (first) {
                        selectedAvatar = ev.image;
                        first = false;
                    }
                    
                    img.addEventListener("click", () => {
                        document.querySelectorAll("#register-avatar-selector .avatar-option").forEach(opt => opt.classList.remove("selected"));
                        img.classList.add("selected");
                        selectedAvatar = ev.image;
                    });
                    
                    avatarContainer.appendChild(img);
                }
            });
        }

        // Initialize characters counter
        const textInput = document.getElementById("comment-input-text");
        const counter = document.getElementById("comment-char-counter");
        if (textInput && counter) {
            textInput.addEventListener("input", () => {
                const remaining = 300 - textInput.value.length;
                counter.textContent = remaining;
                counter.style.color = remaining < 20 ? "#ef4444" : "var(--text-secondary)";
            });
        }

        syncFromCloud();
    }

    window.switchAuthTab = function(tab) {
        const loginForm = document.getElementById("auth-login-form");
        const registerForm = document.getElementById("auth-register-form");
        const loginBtn = document.getElementById("auth-tab-login");
        const registerBtn = document.getElementById("auth-tab-register");

        if (tab === 'login') {
            if (loginForm) loginForm.style.display = "block";
            if (registerForm) registerForm.style.display = "none";
            if (loginBtn) {
                loginBtn.style.fontWeight = "700";
                loginBtn.style.color = "white";
                loginBtn.style.borderBottom = "2px solid var(--accent-blue)";
            }
            if (registerBtn) {
                registerBtn.style.fontWeight = "500";
                registerBtn.style.color = "var(--text-secondary)";
                registerBtn.style.borderBottom = "none";
            }
        } else {
            if (loginForm) loginForm.style.display = "none";
            if (registerForm) registerForm.style.display = "block";
            if (loginBtn) {
                loginBtn.style.fontWeight = "500";
                loginBtn.style.color = "var(--text-secondary)";
                loginBtn.style.borderBottom = "none";
            }
            if (registerBtn) {
                registerBtn.style.fontWeight = "700";
                registerBtn.style.color = "white";
                registerBtn.style.borderBottom = "2px solid var(--accent-blue)";
            }
        }
    };

    window.selectAvatar = function(element, avatarUrl) {
        document.querySelectorAll(".avatar-option").forEach(opt => opt.classList.remove("selected"));
        element.classList.add("selected");
        selectedAvatar = avatarUrl;
    };

    window.handleAuthSubmit = function(event, type) {
        if (event) event.preventDefault();
        
        if (type === 'register') {
            const name = document.getElementById("register-name").value.trim();
            const email = document.getElementById("register-email").value.trim().toLowerCase();
            const password = document.getElementById("register-password").value;
            const errorMsg = document.getElementById("register-error-msg");

            if (!name || !email || !password) return;

            // Simple validation: check if email already exists
            const users = JSON.parse(localStorage.getItem("ht_registered_users") || "[]");
            if (users.find(u => u.email === email)) {
                if (errorMsg) {
                    errorMsg.textContent = window.currentLanguage === 'en' ? "Email already registered." : "El correo electrónico ya está registrado.";
                    errorMsg.style.display = "block";
                }
                return;
            }

            // Create user
            const isEmailAdmin = email === "felipe.colorado@udea.edu.co";
            const newUser = {
                id: Date.now(),
                name: name,
                email: email,
                password: password,
                avatar: selectedAvatar,
                role: isEmailAdmin ? "Administrador" : "Estudiante"
            };

            users.push(newUser);
            cloudSave("users", users);

            // Automatically login
            currentUser = { id: newUser.id, name: newUser.name, email: newUser.email, avatar: newUser.avatar, role: newUser.role };
            localStorage.setItem("ht_logged_user", JSON.stringify(currentUser));
            
            if (errorMsg) errorMsg.style.display = "none";
            showLoggedInState();
            syncFromCloud();
        } else {
            const email = document.getElementById("login-email").value.trim().toLowerCase();
            const password = document.getElementById("login-password").value;
            const errorMsg = document.getElementById("login-error-msg");

            // Fetch users from cloud first to ensure we have any newly registered users from other devices
            cloudFetch("users", []).then(users => {
                localStorage.setItem("ht_registered_users", JSON.stringify(users));
                const user = users.find(u => u.email === email && u.password === password);

                if (!user) {
                    if (errorMsg) {
                        errorMsg.textContent = window.currentLanguage === 'en' ? "Invalid email or password." : "Correo o contraseña inválidos.";
                        errorMsg.style.display = "block";
                    }
                    return;
                }

                currentUser = { id: user.id, name: user.name, email: user.email, avatar: user.avatar, role: user.role };
                localStorage.setItem("ht_logged_user", JSON.stringify(currentUser));

                if (errorMsg) errorMsg.style.display = "none";
                showLoggedInState();
                syncFromCloud();
            });
        }
    };

    window.handleLogOut = function() {
        currentUser = null;
        localStorage.removeItem("ht_logged_user");
        showLoggedOutState();
    };

    window.handlePostComment = function() {
        if (!currentUser) {
            alert(window.currentLanguage === 'en' ? "Please log in or register to comment." : "Por favor inicia sesión o regístrate para comentar.");
            return;
        }

        const input = document.getElementById("comment-input-text");
        if (!input || !input.value.trim()) return;

        const comments = JSON.parse(localStorage.getItem("ht_comments") || "[]");
        const newComment = {
            id: Date.now(),
            author: currentUser.name,
            avatar: currentUser.avatar,
            role: currentUser.role,
            text: input.value.trim(),
            timestamp: Date.now()
        };

        comments.unshift(newComment);
        localStorage.setItem("ht_comments", JSON.stringify(comments));

        input.value = "";
        const counter = document.getElementById("comment-char-counter");
        if (counter) counter.textContent = "300";

        commentCurrentPage = 1;
        syncFromCloud();
    };

    function showLoggedInState() {
        document.getElementById("auth-logged-out-state").style.display = "none";
        document.getElementById("auth-logged-in-state").style.display = "block";
        document.getElementById("user-profile-avatar").src = currentUser.avatar;
        document.getElementById("user-profile-name").textContent = currentUser.name;
        
        let displayRole = currentUser.role;
        if (currentUser.role === "Administrador" && window.currentLanguage === 'en') {
            displayRole = "Administrator";
        } else if (currentUser.role === "Estudiante" && window.currentLanguage === 'en') {
            displayRole = "Student";
        }
        document.getElementById("user-profile-role").textContent = displayRole;
    }

    function showLoggedOutState() {
        document.getElementById("auth-logged-out-state").style.display = "block";
        document.getElementById("auth-logged-in-state").style.display = "none";
        // Reset forms
        document.getElementById("auth-login-form").reset();
        document.getElementById("auth-register-form").reset();
        document.getElementById("login-error-msg").style.display = "none";
        document.getElementById("register-error-msg").style.display = "none";
        window.switchAuthTab('login');
    }

    function drawComments() {
        const container = document.getElementById("comment-feed-container");
        if (!container) return;

        let comments = JSON.parse(localStorage.getItem("ht_comments") || "[]");
        
        // Auto-fix legacy broken avatar URLs cached in user's browser localStorage
        let needsSave = false;
        comments.forEach(comment => {
            if (comment.avatar && comment.avatar.includes("Jean_Baptiste_Joseph_Fourier.jpg")) {
                comment.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Fourier2_-_restoration1.jpg/330px-Fourier2_-_restoration1.jpg";
                needsSave = true;
            }
            if (comment.avatar && comment.avatar.includes("Sadi_Carnot_in_military_uniform.jpg")) {
                comment.avatar = "Sadi_Carnot.jpeg";
                needsSave = true;
            }
            if (comment.avatar && comment.avatar.includes("Jpjoule.jpg")) {
                comment.avatar = "joule.jpg";
                needsSave = true;
            }
        });
        
        if (comments.length === 0) {
            comments = [...defaultComments];
            needsSave = true;
        }
        
        if (needsSave) {
            localStorage.setItem("ht_comments", JSON.stringify(comments));
        }

        container.innerHTML = "";
        
        // Pagination logic
        const itemsPerPage = 20;
        const totalPages = Math.ceil(comments.length / itemsPerPage);
        
        // Ensure current page is valid
        if (commentCurrentPage > totalPages) {
            commentCurrentPage = Math.max(1, totalPages);
        }
        
        const startIndex = (commentCurrentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedComments = comments.slice(startIndex, endIndex);

        paginatedComments.forEach(comment => {
            const card = document.createElement("div");
            card.className = "comment-card";
            
            const date = new Date(comment.timestamp);
            const timeStr = date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

            const isAdmin = currentUser && currentUser.role === "Administrador";
            const deleteBtnHtml = isAdmin ? `
                <button onclick="window.deleteComment(${comment.id})" class="btn-clear" style="background: none; border: none; color: #f87171; cursor: pointer; padding: 4px; font-size: 0.82rem; margin-left: 10px; opacity: 0.7; transition: opacity 0.2s;" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=0.7" title="Borrar comentario">
                    <i class="fas fa-trash-alt"></i>
                </button>
            ` : "";

            let displayRole = comment.role;
            if (comment.role === "Administrador" && window.currentLanguage === 'en') {
                displayRole = "Administrator";
            } else if (comment.role === "Estudiante" && window.currentLanguage === 'en') {
                displayRole = "Student";
            }

            card.innerHTML = `
                <img class="comment-card-avatar" src="${comment.avatar}" alt="Avatar" />
                <div class="comment-card-content">
                    <div class="comment-card-header" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                        <div style="display: flex; align-items: center; flex-wrap: wrap;">
                            <span class="comment-author-name">${comment.author}</span>
                            <span style="font-size:0.7rem; color:var(--accent-blue); background:rgba(59,130,246,0.1); padding:2px 6px; border-radius:4px; margin-left:6px; font-weight:600;">${displayRole}</span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="comment-timestamp">${timeStr}</span>
                            ${deleteBtnHtml}
                        </div>
                    </div>
                    <div class="comment-card-body" style="margin-top: 4px;">${comment.text}</div>
                </div>
            `;
            container.appendChild(card);
        });

        // Render pagination controls if total comments > 20
        if (comments.length > itemsPerPage) {
            const controls = document.createElement("div");
            controls.className = "comment-pagination";
            controls.style.display = "flex";
            controls.style.justifyContent = "center";
            controls.style.alignItems = "center";
            controls.style.gap = "15px";
            controls.style.marginTop = "15px";
            controls.style.padding = "10px";
            controls.style.background = "rgba(15,23,42,0.2)";
            controls.style.borderRadius = "8px";
            controls.style.border = "1px solid rgba(255,255,255,0.03)";

            const prevBtn = document.createElement("button");
            prevBtn.className = "btn-clear";
            prevBtn.disabled = commentCurrentPage === 1;
            prevBtn.style.padding = "6px 12px";
            prevBtn.style.borderRadius = "6px";
            prevBtn.style.fontSize = "0.8rem";
            prevBtn.style.fontWeight = "600";
            prevBtn.style.cursor = commentCurrentPage === 1 ? "not-allowed" : "pointer";
            prevBtn.style.background = commentCurrentPage === 1 ? "rgba(255,255,255,0.03)" : "var(--accent-blue)";
            prevBtn.style.color = commentCurrentPage === 1 ? "var(--text-muted)" : "white";
            prevBtn.style.border = "none";
            prevBtn.innerHTML = `<i class="fas fa-chevron-left"></i> ${window.currentLanguage === 'en' ? "Previous" : "Anterior"}`;
            prevBtn.addEventListener("click", () => {
                commentCurrentPage--;
                drawComments();
            });

            const indicator = document.createElement("span");
            indicator.style.fontSize = "0.8rem";
            indicator.style.color = "var(--text-secondary)";
            indicator.style.fontWeight = "600";
            indicator.innerHTML = window.currentLanguage === 'en' 
                ? `Page ${commentCurrentPage} of ${totalPages}` 
                : `Página ${commentCurrentPage} de ${totalPages}`;

            const nextBtn = document.createElement("button");
            nextBtn.className = "btn-clear";
            nextBtn.disabled = commentCurrentPage === totalPages;
            nextBtn.style.padding = "6px 12px";
            nextBtn.style.borderRadius = "6px";
            nextBtn.style.fontSize = "0.8rem";
            nextBtn.style.fontWeight = "600";
            nextBtn.style.cursor = commentCurrentPage === totalPages ? "not-allowed" : "pointer";
            nextBtn.style.background = commentCurrentPage === totalPages ? "rgba(255,255,255,0.03)" : "var(--accent-blue)";
            nextBtn.style.color = commentCurrentPage === totalPages ? "var(--text-muted)" : "white";
            nextBtn.style.border = "none";
            nextBtn.innerHTML = `${window.currentLanguage === 'en' ? "Next" : "Siguiente"} <i class="fas fa-chevron-right"></i>`;
            nextBtn.addEventListener("click", () => {
                commentCurrentPage++;
                drawComments();
            });

            controls.appendChild(prevBtn);
            controls.appendChild(indicator);
            controls.appendChild(nextBtn);
            container.appendChild(controls);
        }
    }

    window.deleteComment = function(commentId) {
        if (!currentUser || currentUser.role !== "Administrador") return;
        
        const confirmDelete = confirm(window.currentLanguage === 'en' ? "Are you sure you want to delete this comment?" : "¿Estás seguro de que deseas borrar este comentario?");
        if (!confirmDelete) return;

        let comments = JSON.parse(localStorage.getItem("ht_comments") || "[]");
        comments = comments.filter(c => c.id !== commentId);
        localStorage.setItem("ht_comments", JSON.stringify(comments));

        syncFromCloud();
    };

    // Initialize on DOMContentLoaded
    document.addEventListener("DOMContentLoaded", initCommentSystem);
    if (document.readyState !== 'loading') {
        initCommentSystem();
    }
})();

