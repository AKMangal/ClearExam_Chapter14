// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "In the hydrogenation of oils, the catalyst used is",
    answer: "Nickel",
    options: [
      "Iron",
      "Platinum",
      "Nickel",
      "Molybdenum"
    ]
  },
  {
    numb: 2,
    question: "Gold number gives",
    answer: "None of the above",
    options: [
      "The amount of gold present in the colloid",
      "The amount of gold required to break the colloid",
      "The amount of gold required to protect the colloid",
      "None of the above"
    ]
  },
  {
    numb: 3,
    question: "Which requires catalyst?",
    answer: "2SO2 + O2 → 2SO3",
    options: [
      "S + O<sub>2</sub> → SO<sub>2</sub>",
      "2SO<sub>2</sub> + O<sub>2</sub> → 2SO<sub>3</sub>",
      "C + O<sub>2</sub> → CO<sub>2</sub>",
      "All"
    ]
  },
  {
    numb: 4,
    question: "A catalyst in a reaction",
    answer: "Decreases the activation energy of both the reactions",
    options: [
      "Increases the activation energy of the forward reaction",
      "Increases the activation energy of the backward reaction",
      "Increases the activation energy of both the reactions",
      "Decreases the activation energy of both the reactions"
    ]
  },
  {
    numb: 5,
    question: "A catalyst in a reaction changes which of the following?",
    answer: "Rate constant",
    options: [
      "Equilibrium constant",
      "Entropy",
      "Rate constant",
      "Nature of products"
    ]
  },
  {
    numb: 6,
    question: "A liquid which markedly scatters a beam of light (visible in a dark room)" +
      "but leaves no residue when passed through a filter paper is best described as",
    answer: "Lyophobic sol",
    options: [
      "A suspension",
      "A true solution",
      "Lyophobic sol",
      "Lyophilic sol"
    ]
  },
  {
    numb: 7,
    question: "Which one of the following substances adsorbs hydrogen gas most strongly?",
    answer: "Platinum black	",
    options: [
      "Activated carbon",
      "Silica gel",
      "Platinum black	",
      "Iron powder"
    ]
  },
  {
    numb: 8,
    question: "Most effective electrolyte causing coagulation of a negatively charged As<sub>2</sub>S<sub>3</sub> sol is",
    answer: "MgCl2",
    options: [
      "MgCl<sub>2</sub>",
      "KCl",
      "K<sub>3</sub>Fe(CN)<sub>6</sub>",
      "Na<sub>2</sub>SO<sub>4</sub>"
    ]
  },
  {
    numb: 9,
    question: "Swimming for a long time in salt water makes the skin of one’s finger tips wrinkled." +
      "Which one of the following properties is responsible for this observation?",
    answer: "Osmosis",
    options: [
      "Osmosis",
      "Dialysis",
      "Electrodialysis",
      "Coagulation"
    ]
  },
  {
    numb: 10,
    question: "Peptization is a process of",
    answer: "Dispersing precipitate into colloidal solss",
    options: [
      "Precipitation of colloidal particles",
      "Purification of colloids",
      "Dispersing precipitate into colloidal solss",
      "Movement of colloidal particles in the electrical field"
    ]
  },
  {
    numb: 11,
    question: "As<sub>2</sub>S<sub>3</sub> sol. is",
    answer: "Negative colloid",
    options: [
      "Positive colloid",
      "Negative colloid",
      "Neutral colloid",
      "None of the above"
    ]
  },
  {
    numb: 12,
    question: "Sulphur sol contains",
    answer: "Large aggregates of Sulphur molecules",
    options: [
      "Discrete Sulphur atoms",
      "Discrete Sulphur molecules",
      "Large aggregates of Sulphur molecules",
      "Water dispersed in solid Sulphur"
    ]
  },
  {
    numb: 13,
    question: "Cow milk is an example of natural emulsion stabilized by",
    answer: "Casein",
    options: [
      "Fat",
      "Water",
      "Casein",
      "Mg<sup>++</sup> ions"
    ]
  },
  {
    numb: 14,
    question: "The colour of the colloidal particles of gold obtained by different methods differ because of",
    answer: "Different diameters of colloidal particles",
    options: [
      "Variable valency of gold",
      "Different concentration of gold particles",
      "Different types of impurities",
      "Different diameters of colloidal particles"
    ]
  },
  {
    numb: 15,
    question: "Which one of the following statements regarding catalysis is not true?",
    answer: "A catalyst can initiate a reaction",
    options: [
      "A catalyst remains unchanged at the end of the reaction",
      "A catalyst can initiate a reaction",
      "A catalyst does not alter the equilibrium in a reversible reaction",
      "Catalysts are sometimes very specific in terms of reactions"
    ]
  },
  {
    numb: 16,
    question: "Crystalloids differ from colloids mainly in respect of",
    answer: "Particle size",
    options: [
      "Electrical behavior",
      "Particle size",
      "Particle nature",
      "Solubility"
    ]
  },
  {
    numb: 17,
    question: "A colloidal solution is subjected to an electrical field. The particles move towards anode."+
    "The coagulation of same sol is studied using NaCl, BaCl<sub>2</sub> and AlCl<sub>3</sub> solutions."+
    "Their coagulating power should be",
    answer: "AlCl3 > BaCl2 > NaCl",
    options: [
      "NaCl > BaCl<sub>2</sub> > AlCl<sub>3</sub>",
      "BaCl<sub>2</sub> > AlCl<sub>3</sub> > NaCl",
      "AlCl<sub>3</sub> > BaCl<sub>2</sub> > NaCl",
      "BaCl<sub>2</sub> > NaCl > AlCl<sub>3</sub>"
    ]
  },
  {
    numb: 18,
    question: "For adsorption of a gas on a solid, the plot of log x/m vs log P is linear with slope equal to (n being whole number)",
    answer: "1/n",
    options: [
      "k",
      "Log k",
      "n",
      "1/n"
    ]
  },
  {
    numb: 19,
    question: "Peptization denotes",
    answer: "Breaking and dispersion into the colloidal state",
    options: [
      "Digestion of food",
      "Hydrolysis of proteins",
      "Breaking and dispersion into the colloidal state",
      "Precipitation of solid from colloidal dispersion"
    ]
  },
  {
    numb: 20,
    question: "Which of the following statements about a catalyst is/are true?",
    answer: "A catalyst accelerates the reaction by bringing down the free energy of activation",
    options: [
      "A catalyst accelerates the reaction by bringing down the free energy of activation",
      "A catalyst does not take part in the reaction mechanism",
      "A catalyst makes the reaction more feasible by making the more negative",
      "A catalyst makes the equilibrium constant of the reaction more favorable for the forward reaction"
    ]
  },
  {
    numb: 21,
    question: "Brownian movement is found in",
    answer: "Colloidal solution",
    options: [
      "Colloidal solution",
      "Suspension",
      "Saturated solution",
      "Unsaturated solution"
    ]
  },
  {
    numb: 22,
    question: "Random motion of colloidal particles is known as",
    answer: "Brownian movement",
    options: [
      "Dialysis",
      "Brownian movement",
      "Electroosmosis",
      "Tyndall effect"
    ]
  },
  {
    numb: 23,
    question: "In physical adsorption, gas molecules are bound on the solid surface by",
    answer: "Van der Waal’s forces",
    options: [
      "Chemical forces",
      "Electrostatic forces",
      "Gravitational forces",
      "Van der Waal’s forces"
    ]
  },
  {
    numb: 24,
    question: "Milk can be preserved by adding a few drops of",
    answer: "Formaldehyde solution",
    options: [
      "Formic acid solution",
      "Formaldehyde solution",
      "Acetic acid solution",
      "Acetaldehyde solution"
    ]
  },
  {
    numb: 25,
    question: "The Rubin number which was proposed by Ostwald as an alternative to the Gold number in order "+
    "to measure the protective efficiency of a lyophillic colloid may be defined as the",
    answer: "Mass in milligrams of a colloid per 100 c.c. of solution which just prevents the colour change of standard sol of dye Congo-Rubin from red to violet when 0.16 g eq. KCl is added to it",
    options: [
      "Mass in milligrams of a colloid per 100 c.c. of solution which just prevents the colour change of standard sol of dye Congo-Rubin from red to violet when 0.16 g eq. KCl is added to it",
      "Mass in grams of a colloid per 100 c.c. of solution which just prevents the colour change of standard sol of dye Congo-Rubin from red to violet when 0.1 M KCl is added to it",
      "Mass in grams of a colloid per 100 c.c. of solution which just prevents the colour change of standard sol of dye Congo-Rubin from red to violet when 0.2 M KCl is added to it",
      "Mass in grams of a colloid per 100 c.c. of solution which just prevents the colour-change of standard sol of dye Congo-Rubin from red to violet when 1 M KCl is added to it"
    ]
  },
  {
    numb: 26,
    question: "Cod Liver oil is",
    answer: "Water dispersed in oil",
    options: [
      "Fat dispersed in water",
      "Water dispersed in fat",
      "Water dispersed in oil",
      "Fat dispersed in fat"
    ]
  },
  {
    numb: 27,
    question: "Which of the following kind of catalysis can be explained by the adsorption theory?",
    answer: "Heterogeneous catalysis",
    options: [
      "Homogeneous catalysis",
      "Acid-base catalysis",
      "Heterogeneous catalysis",
      "Enzyme catalysis"
    ]
  },
  {
    numb: 28,
    question: "Which one of the following will have the highest coagulating power for a ferric hydroxide sol.?",
    answer: "K3[Fe(CN)6]",
    options: [
      "NaCl",
      "BaCl<sub>2</sub>",
      "K<sub>2</sub>CrO<sub>4</sub>",
      "K<sub>3</sub>[Fe(CN)<sub>6</sub>]"
    ]
  },
  {
    numb: 29,
    question: "At CMC the surfactant molecules",
    answer: "Associate",
    options: [
      "Decompose",
      "Become completely soluble",
      "Associate",
      "Dissociate"
    ]
  },
  {
    numb: 30,
    question: "The size of colloidal particles is",
    answer: "10-6 - 10-9 m",
    options: [
      "10<sup>-6</sup> - 10<sup>-9</sup> m",
      "10<sup>-9</sup> - 10<sup>-12</sup> m",
      "10<sup>-3</sup> - 10<sup>-9</sup> m",
      "10<sup>-12</sup> - 10<sup>-19</sup> m"
    ]
  },
  {
    numb: 31,
    question: "The process which is catalysed by one of the products is called",
    answer: "Auto catalysis",
    options: [
      "Acid-base catalysis",
      "Auto catalysis",
      "Negative catalysis",
      "Positive catalysis"
    ]
  },
  {
    numb: 32,
    question: "In physical adsorption, the forces associated are",
    answer: "Van der Waal",
    options: [
      "Ionic",
      "Covalent",
      "Van der Waal",
      "H-bonding"
    ]
  },
  {
    numb: 33,
    question: "Which is used for ending charge on colloidal solution",
    answer: "Electrolytes",
    options: [
      "Electrons",
      "Electrolytes",
      "Positively charged ions",
      "Compounds"
    ]
  },
  {
    numb: 34,
    question: "Which of the following is most effective in causing the coagulation of ferric hydroxide sol?",
    answer: "K3[Fe(CN)6]",
    options: [
      "KCl",
      "KNO<sub>3</sub>",
      "K<sub>2</sub>SO<sub>4</sub>",
      "K<sub>3</sub>[Fe(CN)<sub>6</sub>]"
    ]
  },
  {
    numb: 35,
    question: "When gas is passed through nitric acid, the product is",
    answer: "Amorphous S",
    options: [
      "Rhombic S",
      "Prismatic S",
      "Amorphous S",
      "Monoclinic S"
    ]
  },
  {
    numb: 36,
    question: "Which one of the following is correctly matched?",
    answer: "Aerosol-smoke",
    options: [
      "Emulsion-Curd",
      "Foam-mist",
      "Aerosol-smoke",
      "Solid sol-cake"
    ]
  },
  {
    numb: 37,
    question: "The formation of colloid from suspension is",
    answer: "Peptisation",
    options: [
      "Peptisation",
      "Condensation",
      "Sedimentation",
      "Fragmentation"
    ]
  },
  {
    numb: 38,
    question: "In the case of auto catalysis",
    answer: "product catalyses",
    options: [
      "reactant catalyses",
      "heat produced in the reaction catalyses",
      "product catalyses",
      "solvent catalyses"
    ]
  },
  {
    numb: 39,
    question: "Which among the following statements is false?",
    answer: "Particle size of the adsorbent will not affect the amount of adsorption",
    options: [
      "Increase of pressure increases the amount of adsorption",
      "Increase of temperature may decrease the amount of adsorption",
      "The adsorption may be monolayered or multilayered",
      "Particle size of the adsorbent will not affect the amount of adsorption"
    ]
  },
  {
    numb: 40,
    question: "The simplest way to check whether a system is colloidal is by",
    answer: "Tyndall effect",
    options: [
      "Tyndall effect",
      "Brownian movement",
      "Electrodialysis",
      "Finding out particle size"
    ]
  },
  {
    numb: 41,
    question: "Adsorbed acetic acid on activated charcoal is:",
    answer: "Adsorbate",
    options: [
      "Adsorber",
      "Absorber",
      "Adsorbent",
      "Adsorbate"
    ]
  },
  {
    numb: 42,
    question: "Alum helps in purifying water by",
    answer: "aluminium which coagulates the mud particles",
    options: [
      "forming Si complex with clay particles",
      "sulphate part which combines with the dirt and removes it",
      "aluminium which coagulates the mud particles",
      "making mud water soluble"
    ]
  },
  {
    numb: 43,
    question: "According to adsorption theory of catalysis, the speed of the reaction increases because",
    answer: "adsorption lowers the activation energy of the reaction",
    options: [
      "the concentration of the reactant molecules at the active centres of the catalyst becomes high due to adsorption",
      "in the process of adsorption, the activation energy of the molecules becomes large",
      "adsorption produces heat which increases the speed of reaction",
      "adsorption lowers the activation energy of the reaction"
    ]
  },
  {
    numb: 44,
    question: "Which one of the following characteristics is not correct for physical adsorption?",
    answer: "Adsorption increases with increase in temperature",
    options: [
      "Adsorption increases with increase in temperature",
      "Adsorption is spontaneous",
      "Both enthalpy and entropy of adsorption are negative",
      "Adsorption on solids is reversible"
    ]
  },
  {
    numb: 45,
    question: "The coagulating power of an electrolyte for arsenious sulphide decreases in the order",
    answer: "Al3+ > Ba2+ > Na+",
    options: [
      "Na<sup>+</sup> > Al<sup>3+</sup> > Ba<sup>2+</sup>",
      "PO<sub>4</sub><sup>3-</sup> > SO<sub>4</sub><sup>2-</sup> > Cl<sup>-</sup>",
      "Cl<sup>-</sup> > SO<sub>4</sub><sup>2-</sup> > PO<sub>4</sub><sup>3-</sup>",
      "Al<sup>3+</sup> > Ba<sup>2+</sup> > Na<sup>+</sup>"
    ]
  },
  {
    numb: 46,
    question: "Rate of physisorption increases with",
    answer: "decrease in temperature",
    options: [
      "decrease in temperature",
      "increase in temperature",
      "decrease in pressure",
      "decrease in surface area"
    ]
  },
  {
    numb: 47,
    question: "Which one is an example of miscelles system?",
    answer: "Soap + water",
    options: [
      "Soap + water",
      "Rubber + benzene",
      "Protein + water",
      "None of these"
    ]
  },
  {
    numb: 48,
    question: "At isoelectric point",
    answer: "colloidal particles become uncharged",
    options: [
      "colloidal particles become uncharged",
      "Colloidal sol becomes highly stable",
      "Peptisation can be carried out",
      "None of these"
    ]
  },
  {
    numb: 49,
    question: "Gold number was given by",
    answer: "Zsigmondy",
    options: [
      "Ostwald",
      "Zsigmondy",
      "Williams and Chang",
      "Langmuir"
    ]
  },
  {
    numb: 50,
    question: "Sedimentation potential is the reverse of",
    answer: "Electrophoresis",
    options: [
      "Electroomosis",
      "Electrophoresis",
      "Electrokinetic potential",
      "Dorn potential"
    ]
  },
  {
    numb: 51,
    question: "Electroosmosis was discovered by",
    answer: "Dorn",
    options: [
      "Dorn",
      "Reuss and Porret",
      "Freundlich",
      "Langmuir"
    ]
  },
  {
    numb: 52,
    question: "50 ml of 1 M oxalic acid is shaken with 0.5 g wood charcoal. The final concentration"+ 
    " of the solution after adsorption is 0.5 M. What is the amount of oxalic acid absorbed per gm of carbon?",
    answer: "6.30 g",
    options: [
      "3.15 g",
      "3.45 g",
      "6.30 g",
      "None"
    ]
  },
  {
    numb: 53,
    question: "Collodion is a colloidal solution of",
    answer: "Cellulose nitrate in ethanol",
    options: [
      "sucrose in water",
      "Cellulose in water",
      "Cellulose nitrate in water",
      "Cellulose nitrate in ethanol"
    ]
  },
  {
    numb: 54,
    question: "Ferric chloride is applied to stop bleeding because",
    answer: "Fe3+ ions coagulate negatively charged blood solution",
    options: [
      "Fe<sub>3+</sub> ions coagulate negatively charged blood solution",
      "Fe<sub>3+</sub> ions coagulate positively charged blood solution",
      "Cl<sub>-</sub> ions coagulate positively charged blood solution",
      "Cl<sub>-</sub> ions coagulate negatively charged blood solution"
    ]
  },
  {
    numb: 55,
    question: "ZSM-5 converts",
    answer: "Alcohol to petrol",
    options: [
      "Alcohol to petrol",
      "Benzene to toluene",
      "Toluene to benzene",
      "Heptane to toluene"
    ]
  },
];
