import { db } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";

const sampleQuestions = [
  // Chapter 1: Environment and Climate Change
  {
    question: "The term Ecology was introduced by ____",
    options: ["Haeckel", "Newton", "E. P. Odum", "Tansley"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Ecological factors related to soil and substratum are called ____ factors.",
    options: ["Edaphic", "Biotic", "Abiotic", "Physiographic"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The first government conference on environmental education in 1977 was held in ____",
    options: ["Tbilisi (USSR)", "Delhi (India)", "Athens", "New York (USA)"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Abiotic components are ____",
    options: ["non living", "living", "artificial", "both living"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "CFCs mostly contribute to depletion of ____",
    options: ["ozone layer", "carbon dioxide", "layer", "methane layer"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The major greenhouse gases are ____",
    options: ["CO2, CH4, N2O", "CO2, O2, CFCs", "CO2, CH4, CFC", "CO2, SO2, O2"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Greenhouse gases are regulated under U.N. framework on climate change and the ____",
    options: ["Tokyo protocol", "Kyoto protocol", "Montreal protocol", "Nagpur protocol"],
    correctAnswer: 1,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "____ are animals that have no backbones and are visible without magnification.",
    options: ["Macro", "Micro", "Macro invertebrates", "None"],
    correctAnswer: 2,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Montreal protocol is related to ____",
    options: ["Depletion of ozone layer", "Biodiversity", "Soil", "Sulphur layer"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "OECD stands for ____",
    options: ["Organisation for Economic Co-operation and Development", "Organization for Environmental Company and Development", "Organization for Environmental Company Department", "Organization for Economic Co-operation Department"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "____ are crystalline solid salt at or below the freezing point of water (0 C) for two or more years.",
    options: ["Permafrost", "Frost", "Plankton", "Thermofrost"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Area in the interface between land and river or stream is called ____.",
    options: ["riparian", "aquatic", "forest", "desert"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Development that meets present needs without compromising future generations is called ____.",
    options: ["sustainable development", "stable development", "future development", "natural development"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Van-Mahotsav is an annual tree-planting festival in India celebrated in ____.",
    options: ["July", "March", "May", "June"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The scientific method of dating based on analysis of tree rings is called ____.",
    options: ["Dendrochronology", "Ecosystem", "Anatomy", "Ecology"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of the following is a primary greenhouse gas?",
    options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Argon"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The World Environment Day is celebrated on ____.",
    options: ["June 5", "April 22", "May 1", "March 21"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Acid rain is caused by the emissions of ____.",
    options: ["SO2 and NOx", "CO2 and CH4", "O3 and CFCs", "CO and CO2"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The ozone layer is located in the ____.",
    options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Biodiversity refers to ____.",
    options: ["Variety of life on Earth", "Different types of rocks", "Different layers of atmosphere", "Study of planets"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },

  // Chapter 2: Sustainability and Renewable Resources
  {
    question: "About ___ % of the Earth's surface is covered by water.",
    options: ["1%", "71%", "97%", "3%"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Fresh water makes up about ___ % of the total amount of water on Earth.",
    options: ["3%", "1%", "97%", "71%"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The maximum density of water is at ____.",
    options: ["0 C", "4 C", "10 C", "100 C"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Water is called a universal ____.",
    options: ["agent", "solvent", "solute", "mixture"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Ethanol is the same as ____.",
    options: ["Alcohol", "Paper", "Salt", "Wood"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Graphite is the form of the mineral ____.",
    options: ["Iron", "Carbon", "Gold", "Lead"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Bio-mass depends on ____.",
    options: ["Photosynthesis", "Insolation", "Plants", "All of the above"],
    correctAnswer: 3,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "When bio-mass is treated with mixture of catalysts and hydrogen at high pressure it is called ____.",
    options: ["Pyrolysis", "Gasification", "Liquefaction", "Combustion"],
    correctAnswer: 2,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Gasification is a process of converting ____.",
    options: ["solid to gas", "liquid to gas", "gas to solid", "solid to liquid"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Pyrolysis is decomposition at high temperature in ____.",
    options: ["presence of oxygen", "absence of oxygen", "presence of CO2", "presence of N2"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "A device used to capture solar energy is called a ____.",
    options: ["collector", "generator", "motor", "turbine"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The most common type of solar collector is the ____ type.",
    options: ["flat plate", "parabolic", "spherical", "cylindrical"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Solar pond captures energy in ____ form.",
    options: ["liquid", "gas", "solid", "plasma"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "CNG stands for ____.",
    options: ["Compressed Natural Gas", "Common Natural Gas", "Company Natural Gas", "Coal Natural Gas"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Water gas is a mixture of ____.",
    options: ["Carbon monoxide and hydrogen", "Carbon dioxide and hydrogen", "Methane and ethane", "Nitrogen and oxygen"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "LPG is shorthand for ____.",
    options: ["Liquefied Petroleum Gas", "Liquid Petrol Gas", "Liquefied Petrol Gas", "Liquid Petroleum Gas"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Bio-fuel can be produced from ____.",
    options: ["Sugar", "Starch", "Vegetable oil", "All of the above"],
    correctAnswer: 3,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The main component of Biogas is ____.",
    options: ["Methane", "Ethane", "Propane", "Butane"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Ocean currents are streams of water flowing in the ____.",
    options: ["Ocean", "River", "Lake", "Pond"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Water is a ____ resource.",
    options: ["Non-renewable", "Exhaustible", "Renewable", "Synthetic"],
    correctAnswer: 2,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Tidal energy is caused by ____ force.",
    options: ["Wind", "Magnetic", "Frictional", "Gravitational"],
    correctAnswer: 3,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The main source of energy for the Earth is the ____.",
    options: ["Sun", "Moon", "Stars", "Internal heat"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Geothermal energy comes from ____.",
    options: ["Sun", "Moon", "Earth's internal heat", "Wind"],
    correctAnswer: 2,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Wind energy is a form of ____ energy.",
    options: ["Potential", "Kinetic", "Thermal", "Nuclear"],
    correctAnswer: 1,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Which of these is a non-renewable source of energy?",
    options: ["Coal", "Wind", "Solar", "Geothermal"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The word 'Sustainability' was first used in the context of forestry by ____.",
    options: ["Hans Carl von Carlowitz", "Gro Harlem Brundtland", "Rachel Carson", "Charles Darwin"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The Brundtland Commission's report 'Our Common Future' was published in ____.",
    options: ["1987", "1992", "2000", "1972"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "How many Sustainable Development Goals (SDGs) were adopted by the UN in 2015?",
    options: ["17", "10", "21", "15"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Which cell is used to convert solar energy directly into electricity?",
    options: ["Photovoltaic (PV) cell", "Dry cell", "Lead-acid cell", "Fuel cell"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The Chipko Movement was led by ____.",
    options: ["Sunderlal Bahuguna", "Medha Patkar", "Baba Amte", "Indira Gandhi"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "For ecological balance, what percentage of the Earth's surface should be covered by forests?",
    options: ["33%", "21%", "50%", "10%"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  // ... Continuing Chapter 1
  {
    question: "The Environment Protection Act in India was passed in ____.",
    options: ["1986", "1972", "1992", "2002"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of the following is a non-biodegradable waste?",
    options: ["Paper", "Plastic", "Fruit peels", "Wood"],
    correctAnswer: 1,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The Narmada Bachao Andolan was led by ____.",
    options: ["Medha Patkar", "Sunderlal Bahuguna", "Anna Hazare", "Baba Amte"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Carbon footprint refers to ____.",
    options: ["Total GHGs emitted by an individual/org", "Size of a carbon molecule", "Amount of coal produced", "Study of soil carbon"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Global warming leads to ____.",
    options: ["Rise in sea level", "Decrease in temperature", "More snowfall", "None of above"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The study of the relationship between living organisms and their environment is ____.",
    options: ["Ecology", "Biology", "Zoology", "Botany"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which gas is released during the Bhopal Gas Tragedy?",
    options: ["Methyl Isocyanate", "Carbon Monoxide", "Nitrous Oxide", "Sulphur Dioxide"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The main cause of acid rain is ____ pollution.",
    options: ["Air", "Water", "Soil", "Noise"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Solar panels are made of ____.",
    options: ["Silicon", "Gold", "Silver", "Copper"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },

  // ... Continuing Chapter 2
  {
    question: "What are the 3 R's of waste management?",
    options: ["Reduce, Reuse, Recycle", "Read, Register, Review", "Run, Road, Race", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Rainwater harvesting is a method to ____.",
    options: ["Conserve water", "Waste water", "Clean water", "Store sea water"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Which of the following is an example of organic farming?",
    options: ["Using natural fertilizers", "Using chemical pesticides", "Using GMOs", "Using heavy machinery"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Drip irrigation is used to ____.",
    options: ["Minimize water wastage in farming", "Increase flood risk", "Wash clothes", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Fossil fuels include ____.",
    options: ["Coal, Petroleum, Natural Gas", "Wind, Solar, Water", "Wood, Biomass", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Composting is the process of ____.",
    options: ["Converting organic waste into manure", "Burning plastic", "Dumping chemicals", "Air filtration"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  // ... Continuing Chapter 2 (already added)
  
  // CHAPTER 3: Ecosystem and Biodiversity (FULL VERSION)
  {
    question: "The term 'Ecosystem' was first proposed by ____.",
    options: ["A.G. Tansley", "E.P. Odum", "Charles Darwin", "Lamarck"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Which of the following is an abiotic component of an ecosystem?",
    options: ["Plants", "Animals", "Fungi", "Sunlight"],
    correctAnswer: 3,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Primary consumers are also known as ____.",
    options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The energy flow in an ecosystem is always ____.",
    options: ["Unidirectional", "Bidirectional", "Multidirectional", "Circular"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The 10% law of energy transfer in food chains was given by ____.",
    options: ["Lindeman", "Tansley", "Odum", "Haeckel"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Which of these is a biodiversity hotspot in India?",
    options: ["Western Ghats", "Thar Desert", "Gangetic Plains", "Deccan Plateau"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The 'Red Data Book' contains information about ____.",
    options: ["Endangered species", "Extinct species only", "Common species", "Mineral resources"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "National Parks and Wildlife Sanctuaries are examples of ____ conservation.",
    options: ["In-situ", "Ex-situ", "Artificial", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "A sequence of organisms through which energy is transferred is called ____.",
    options: ["Food chain", "Food web", "Ecosystem", "Pyramid"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Decomposers in an ecosystem include ____.",
    options: ["Fungi and Bacteria", "Green plants", "Insects", "Birds"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Pyramid of energy is always ____.",
    options: ["Upright", "Inverted", "Spindle shaped", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Kaziranga National Park is famous for ____.",
    options: ["One-horned Rhino", "Tiger", "Lion", "Elephant"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Gir National Park in Gujarat is famous for ____.",
    options: ["Asiatic Lions", "Tigers", "Rhinos", "Elephants"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Jim Corbett National Park is famous for ____.",
    options: ["Tigers", "Lions", "Rhinos", "Bears"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The width of the biosphere is approximately ____ km.",
    options: ["20 km", "100 km", "50 km", "10 km"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Non-green plants like fungi lack ____.",
    options: ["Chlorophyll", "Roots", "Stems", "Leaves"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Wind, temperature, and rainfall are ____ factors.",
    options: ["Abiotic", "Biotic", "Chemical", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The continuous flow of nutrients through an ecosystem is called ____ cycle.",
    options: ["Biogeochemical", "Biochemical", "Geological", "Water"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Organisms that eat both plants and animals are called ____.",
    options: ["Omnivores", "Herbivores", "Carnivores", "Decomposers"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Ex-situ conservation examples include ____.",
    options: ["Zoos and Botanical Gardens", "National Parks", "Wildlife Sanctuaries", "Biosphere Reserves"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  
  // PHASE 1 expansion (Reaching 50 each)
  
  // Chapter 1 Additions
  {
    question: "What is the primary cause of the Greenhouse Effect?",
    options: ["Increase in CO2", "Decrease in O2", "Increase in Nitrogen", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The layer of atmosphere that contains Ozone is ____.",
    options: ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of the following is a non-renewable source of energy?",
    options: ["Coal", "Wind", "Solar", "Biomass"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The Earth Day is celebrated on ____.",
    options: ["April 22", "June 5", "March 21", "December 1"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Global warming is caused by ____ gases.",
    options: ["Greenhouse", "Noble", "Acidic", "Basic"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The Montreal Protocol is related to ____.",
    options: ["Ozone layer", "Global warming", "Water pollution", "Noise pollution"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Deforestation generally decreases ____.",
    options: ["Rainfall", "Soil erosion", "Drought", "Global warming"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Chipko movement is related to ____.",
    options: ["Forest conservation", "Tiger conservation", "Water conservation", "Air pollution"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },

  // Chapter 2 Additions
  {
    question: "Which of these is the cleanest source of energy?",
    options: ["Solar", "Coal", "Nuclear", "Petrol"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Biogas mainly consists of ____.",
    options: ["Methane", "Propane", "Butane", "Hydrogen"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Energy from tides is called ____ energy.",
    options: ["Tidal", "Wave", "Thermal", "Geothermal"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Sustainable development means meeting the needs of ____.",
    options: ["Present without compromising future", "Only present generation", "Only future generation", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Recycling of paper helps in ____.",
    options: ["Saving trees", "Consuming more energy", "Increasing waste", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },

  // Chapter 3 Additions
  {
    question: "A group of individuals of the same species in an area is ____.",
    options: ["Population", "Community", "Ecosystem", "Biome"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "In-situ conservation includes ____.",
    options: ["National Parks", "Zoos", "Botanical Gardens", "Cryopreservation"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The pyramid of biomass in a terrestrial ecosystem is ____.",
    options: ["Upright", "Inverted", "Spindle", "Circular"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Which species is extinct from India?",
    options: ["Cheetah", "Tiger", "Lion", "Leopard"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Biodiversity is highest in ____ forests.",
    options: ["Tropical Rain Forests", "Temperate Forests", "Desert", "Coniferous Forests"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The primary source of nutrients for plants is ____.",
    options: ["Soil", "Water", "Air", "Sun"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Food webs are ____.",
    options: ["Interconnected food chains", "Single food chains", "Type of habitat", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Ecology deals with ____.",
    options: ["Organisms and Environment", "Cells", "Atoms", "Space"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The term Biodiversity was coined by ____.",
    options: ["Walter Rosen", "Charles Darwin", "Mendel", "Newton"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Project Tiger was launched in ____.",
    options: ["1973", "1980", "1990", "2000"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  
  // Phase 1 - Final Stretch to 50
  {
    question: "Which of the following causes minamata disease?",
    options: ["Mercury", "Lead", "Cadmium", "Arsenic"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Itai-itai disease is caused by ____.",
    options: ["Cadmium", "Mercury", "Lead", "Nitrate"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The presence of E. coli in water indicator of ____.",
    options: ["Sewage pollution", "Industrial pollution", "Thermal pollution", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "BOD stands for ____.",
    options: ["Biological Oxygen Demand", "Biotic Oxygen Dose", "Basic Oxygen Demand", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Noise pollution is measured in ____.",
    options: ["Decibels (dB)", "Watts", "Hertz", "Joules"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of these is a secondary air pollutant?",
    options: ["Ozone", "CO", "SO2", "CO2"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Global warming potential is highest for ____.",
    options: ["SF6", "CO2", "CH4", "N2O"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The headquarter of UNEP is in ____.",
    options: ["Nairobi", "Geneva", "New York", "Paris"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Greenhouse effect was discovered by ____.",
    options: ["Joseph Fourier", "Newton", "Einstein", "Darwin"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "World Environment Day 2024 theme was ____.",
    options: ["Land restoration", "Beat plastic pollution", "Only one earth", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },

  // Chapter 3 to 50
  {
    question: "Which ecosystem has the highest rate of biomass production?",
    options: ["Tropical Rain Forest", "Grassland", "Desert", "Tundra"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Mangroves are found in ____.",
    options: ["Coastal areas", "Deserts", "Mountains", "Plains"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The place where an organism lives is its ____.",
    options: ["Habitat", "Niche", "Biome", "Ecosystem"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Lion-tailed macaque is endemic to ____.",
    options: ["Western Ghats", "Himalayas", "Eastern Ghats", "Sunderbans"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The Great Indian Bustard is found in ____.",
    options: ["Rajasthan", "Kerala", "Assam", "Tamil Nadu"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Which is a renewable resource?",
    options: ["Forest", "Coal", "Natural Gas", "Uranium"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Nutrients are recycled in an ecosystem by ____.",
    options: ["Decomposers", "Producers", "Consumers", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Coral reefs are often called ____ of the sea.",
    options: ["Rainforests", "Deserts", "Grasslands", "Valleys"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The largest herbivore in India is ____.",
    options: ["Elephant", "Rhino", "Gaur", "Sambar"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Cuscuta is an example of ____.",
    options: ["Parasite", "Producer", "Decomposer", "Scavenger"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Mycorrhiza is a symbiotic association between ____.",
    options: ["Fungi and Roots", "Algae and Fungi", "Bacteria and Roots", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The process of successful establishment of a species in a new area is ____.",
    options: ["Ecesis", "Migration", "Aggregation", "Reaction"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Ecological pyramid that is always upright ____.",
    options: ["Energy", "Biomass", "Number", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "One-horned rhino is protected in ____.",
    options: ["Kaziranga", "Gir", "Corbett", "Bandipur"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Inverted pyramid of biomass is found in ____.",
    options: ["Pond ecosystem", "Forest ecosystem", "Grassland", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The relationship between remora fish and shark is ____.",
    options: ["Commensalism", "Mutualism", "Parasitism", "Predation"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Sacred groves are useful in ____.",
    options: ["Conserving rare species", "Generating revenue", "Soil erosion", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },

  // Phase 2 - Batch 1 (Reaching 75 each)
  
  // Chapter 1 Additions (Total ~75)
  {
    question: "The chemical used in cloud seeding to induce rain is ____.",
    options: ["Silver Iodide", "Potassium Chloride", "Sodium Chloride", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which gas is known as the 'Laughing Gas'?",
    options: ["Nitrous Oxide", "Nitric Oxide", "Nitrogen Dioxide", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Atmospheric pressure is measured by ____.",
    options: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The humidity of air is measured by ____.",
    options: ["Hygrometer", "Barometer", "Hydrometer", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Wind speed is measured by ____.",
    options: ["Anemometer", "Barometer", "Thermometer", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The darkest part of the shadow is called ____.",
    options: ["Umbra", "Penumbra", "Antumbra", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of the following determines the color of a star?",
    options: ["Temperature", "Distance", "Mass", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The hottest planet in the solar system is ____.",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The nearest star to Earth after Sun is ____.",
    options: ["Proxima Centauri", "Sirius", "Alpha Centauri", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The study of Universe is known as ____.",
    options: ["Cosmology", "Astronomy", "Astrology", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which layer of the atmosphere reflects radio waves?",
    options: ["Ionosphere", "Mesosphere", "Stratosphere", "Troposphere"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The average salt content in seawater is ____.",
    options: ["3.5%", "1.5%", "5.5%", "10%"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Tsunami is a word derived from ____.",
    options: ["Japanese", "Chinese", "Greek", "Latin"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "The intensity of an earthquake is measured on ____ scale.",
    options: ["Richter", "Mercalli", "Celcius", "None"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },
  {
    question: "Which of the following is an example of sedimentary rock?",
    options: ["Sandstone", "Granite", "Gneiss", "Marble"],
    correctAnswer: 0,
    chapter: "Environment and Climate Change",
    type: "chapter"
  },

  // Chapter 2 Additions (Total ~75)
  {
    question: "Wave energy is common in ____ ecosystems.",
    options: ["Coastal", "Mountain", "Desert", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Which country is the largest producer of wind energy?",
    options: ["China", "USA", "Germany", "India"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Geothermal energy is heat from ____.",
    options: ["Inside Earth", "Sun", "Ocean", "Wind"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Solar thermal collectors are used for ____.",
    options: ["Heating water", "Generating electricity", "Both", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Bio-diesel is obtained from ____ plant.",
    options: ["Jatropha", "Neem", "Oak", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Nuclear energy is produced by ____.",
    options: ["Nuclear fission", "Nuclear fusion", "Both", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "The use of hydrogen as a fuel is clean because its byproduct is ____.",
    options: ["Water", "CO2", "Methane", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "CNG stands for ____.",
    options: ["Compressed Natural Gas", "Common Natural Gas", "Certified Natural Gas", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "LPG is a mixture of ____.",
    options: ["Propane and Butane", "Methane and Ethane", "Carbon and Oxygen", "None"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },
  {
    question: "Coal with highest carbon content is ____.",
    options: ["Anthracite", "Bituminous", "Lignite", "Peat"],
    correctAnswer: 0,
    chapter: "Sustainability and Renewable Resources",
    type: "chapter"
  },

  // Chapter 3 Additions (Total ~75)
  {
    question: "The study of individual species is ____.",
    options: ["Autecology", "Synecology", "Biology", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "The transitions zone between two ecosystems is ____.",
    options: ["Ecotone", "Ecotype", "Niche", "Sere"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Succession on bare rock is ____.",
    options: ["Lithosere", "Hydrosere", "Psammosere", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Final stable community in succession is ____ community.",
    options: ["Climax", "Pioneer", "Serial", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Nitrogen fixation is done by ____.",
    options: ["Rhizobium", "Fungi", "Animals", "Sun"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Deep-sea hydrothermal vents have ____ as producers.",
    options: ["Chemosynthetic bacteria", "Algae", "Zooplankton", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Detritus food chain starts from ____.",
    options: ["Dead organic matter", "Green plants", "Sun", "Animals"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Grazing food chain starts from ____.",
    options: ["Green plants", "Bacteria", "Dead matter", "None"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  {
    question: "Maximum energy is available at ____ level.",
    options: ["Producer", "Primary consumer", "Secondary consumer", "Top level"],
    correctAnswer: 0,
    chapter: "Ecosystem and Biodiversity",
    type: "chapter"
  },
  // FINAL BATCH - Reaching 100 each
  
  // Chapter 1 Final (Total 100)
  { question: "The Environment Day was first held in ____.", options: ["1974", "1972", "1984", "1994"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Solid waste management involves ____.", options: ["Collection and disposal", "Burning only", "Dumping in sea", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Vermicomposting uses ____.", options: ["Earthworms", "Bacteria", "Fungi", "Viruses"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Electronic waste is also called ____.", options: ["E-waste", "B-waste", "C-waste", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The main cause of urbanization is ____.", options: ["Job opportunities", "Farming", "Forestry", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Global population reached 8 billion in ____.", options: ["2022", "2010", "2000", "2024"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Which of the following is a physical hazard?", options: ["Radiation", "Bacteria", "Chemicals", "Stress"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "EIA stands for ____.", options: ["Environmental Impact Assessment", "Energy Impact Area", "Electronic Industry Area", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Social forestry involves ____.", options: ["Planting trees by community", "Cutting trees", "Urbanization", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Sustainable urbanization leads to ____ city.", options: ["Smart", "Crowded", "Polluted", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The Air Act in India was passed in ____.", options: ["1981", "1974", "1986", "1992"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The Water Act in India was passed in ____.", options: ["1974", "1981", "1986", "1992"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Wild Life Protection Act was passed in ____.", options: ["1972", "1986", "1992", "2000"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "ISO 14001 is related to ____.", options: ["Environmental Management", "Quality Management", "Food Safety", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Rainwater harvesting helps in ____.", options: ["Ground water recharge", "Soil erosion", "Flood", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The most abundant gas in Earth's atmosphere is ____.", options: ["Nitrogen", "Oxygen", "Argon", "CO2"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Deforestation leads to ____ soil erosion.", options: ["Increased", "Decreased", "No change", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The study of interactions among organisms and environment is ____.", options: ["Ecology", "Physiology", "Genetics", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Noise level safe for human ear is ____.", options: ["Upto 80 dB", "120 dB", "150 dB", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Particulate matter is a ____ pollutant.", options: ["Air", "Water", "Soil", "Noise"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Fly ash is a byproduct of ____.", options: ["Thermal power plants", "Hydro plants", "Solar plants", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The disaster in Chernobyl was a ____ disaster.", options: ["Nuclear", "Chemical", "Natural", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Kyoto protocol aim is ____.", options: ["Reduction of GHGs", "Ozone protection", "Waste management", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Carbon footprint is measured in ____.", options: ["Tons of CO2", "Kilograms of Coal", "Watts", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Global warming causes ____ of glaciers.", options: ["Melting", "Freezing", "No change", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Greenhouse effect is ____ for life on Earth.", options: ["Necessary", "Harmful", "Useless", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Acid rain has pH ____.", options: ["Less than 5.6", "More than 7", "7", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Coral bleaching is caused by ____.", options: ["Ocean warming", "Cooling", "Salinity decrease", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Eutrophication is caused by excessive ____.", options: ["Nutrients in water", "Oxygen in water", "Fish in water", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Smog is a combination of ____.", options: ["Smoke and Fog", "Snow and Fog", "Smoke and Mist", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Photochemical smog contains ____.", options: ["Ozone and PAN", "CO2", "SO2", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The primary source of CFCs is ____.", options: ["Refrigerators", "Cars", "Farms", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "World Ozone Day is on ____.", options: ["Sept 16", "June 5", "April 22", "Oct 1"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "Which layer of the atmosphere is the thinnest?", options: ["Troposphere", "Stratosphere", "Exosphere", "Mesosphere"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },
  { question: "The 'Green Belt' movement was started by ____.", options: ["Wangari Maathai", "Medha Patkar", "Anna Hazare", "None"], correctAnswer: 0, chapter: "Environment and Climate Change", type: "chapter" },

  // Chapter 2 Final (Total 100)
  { question: "Energy obtained from hot springs is ____.", options: ["Geothermal", "Solar", "Wind", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The main fuel used in nuclear power plants is ____.", options: ["Uranium", "Coal", "Petrol", "Natural Gas"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Bio-gas is also known as ____.", options: ["Gobar gas", "Natural gas", "LPG", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Which energy is produced by moving water?", options: ["Hydroelectric", "Geothermal", "Solar", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Silicon is used in making ____.", options: ["Solar cells", "Wind mills", "Turbines", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The process of getting energy from organic matter is ____.", options: ["Biomass conversion", "Nuclear fission", "Combustion", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Energy from the sun is captured using ____.", options: ["Photovoltaic cells", "Wind vanes", "Barometers", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Which is a cleaner fossil fuel?", options: ["Natural gas", "Coal", "Oil", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Renewable energy sources are ____.", options: ["Inexhaustible", "Exhaustible", "Polluting", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Non-renewable energy sources are ____.", options: ["Exhaustible", "Infinite", "Clean", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The concept of 'Green Building' focus on ____.", options: ["Energy efficiency", "Using green paint", "Height of building", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Energy star label is related to ____.", options: ["Energy efficient appliances", "Car rating", "Food quality", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Smart grids help in ____.", options: ["Efficient electricity distribution", "Reducing water use", "Increasing traffic", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Hybrid vehicles use ____ fuels.", options: ["Two or more", "Only one", "No fuel", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Solar energy can be used for ____.", options: ["Cooking, Heating, Lighting", "Only cooking", "Only lighting", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Wind turbines convert kinetic energy to ____.", options: ["Electrical energy", "Heat energy", "Chemical energy", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Ocean Thermal Energy Conversion (OTEC) uses ____.", options: ["Temperature difference", "Waves", "Tides", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Hydrogen fuel cells produce ____ as waste.", options: ["Pure water", "CO2", "Carbon", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Energy density is highest in ____.", options: ["Nuclear fuel", "Coal", "Wood", "Petrol"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Tidal energy is produced due to ____.", options: ["Gravitational pull of moon", "Wind", "Sun", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The major component of LPG is ____.", options: ["Butane", "Methane", "Propane", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The major component of CNG is ____.", options: ["Methane", "Butane", "Propane", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Gasohol is a mixture of ____.", options: ["Gasoline and Ethanol", "Petrol and Diesel", "Water and Alcohol", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Sustainable living includes ____.", options: ["Minimal waste", "Maximum consumption", "Luxury", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Energy audit is done to ____.", options: ["Assess energy use", "Increase energy cost", "Check water use", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The use of solar cookers reduces ____.", options: ["Dependency on LPG/Wood", "Cooking time", "Food taste", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Photo-cells are used in ____.", options: ["Solar calculators", "Cars", "Bicycles", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Windmills were traditionally used for ____.", options: ["Grinding grain", "Generating electricity", "Lighting", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Energy conservation means ____.", options: ["Reducing energy waste", "Increasing energy use", "Burning more coal", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Daylighting in buildings saves ____.", options: ["Electricity", "Water", "Space", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Compost is a ____ fertilizer.", options: ["Natural", "Chemical", "Toxic", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "The process of reforestation means ____.", options: ["Planting trees in deforested area", "Cutting trees", "Farming", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Ecological footprint measures ____.", options: ["Human demand on nature", "Size of forest", "Carbon in soil", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Zero waste management aim is ____.", options: ["To send zero waste to landfills", "To burn all waste", "To dump in ocean", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Sustainable agriculture focus on ____.", options: ["Long term soil health", "Short term yield", "Chemical use", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Rainwater harvesting tanks should be ____.", options: ["Cleaned regularly", "Open to air", "Filled with chemicals", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Solar street lights are ____.", options: ["Cost effective in long run", "Very expensive", "Always broken", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "LED bulbs consume ____ electricity than incandescent bulbs.", options: ["Much less", "More", "Same", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Geothermal energy is available ____.", options: ["24/7", "Only during day", "Only during night", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },
  { question: "Sustainability is a ____ goal.", options: ["Global", "Local", "Personal", "None"], correctAnswer: 0, chapter: "Sustainability and Renewable Resources", type: "chapter" },

  // Chapter 3 Final (Total 100)
  { question: "Maximum biodiversity is found in ____ ecosystem.", options: ["Coral reef", "Desert", "Field", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Food chain always starts with ____.", options: ["Producers", "Herbivores", "Carnivores", "Decomposers"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The functional unit of an ecosystem is ____.", options: ["Energy flow & Nutrient cycles", "Abiotic factors", "Biotic factors", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Primary productivity is highest in ____.", options: ["Tropical Rainforest", "Tundra", "Desert", "Grassland"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The set of all ecosystems is called ____.", options: ["Biosphere", "Community", "Population", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Ecological succession on sand is ____.", options: ["Psammosere", "Hydrosere", "Lithosere", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "A species whose presence is critical for an ecosystem is ____.", options: ["Keystone species", "Invasive species", "Common species", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The variety of life on Earth is ____.", options: ["Biodiversity", "Biomass", "Biotype", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Genetic diversity refers to variety within ____.", options: ["Species", "Genus", "Kingdom", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Species diversity is a measure of ____.", options: ["Species richness & evenness", "Total plants", "Total animals", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Hotspots of biodiversity have high ____.", options: ["Endemism", "Pollution", "Altitude", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Which is a major threat to biodiversity?", options: ["Habitat loss", "Conservation", "Reforestation", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "IUCN stands for ____.", options: ["International Union for Conservation of Nature", "Indian Union for Climate", "International Energy Area", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Biosphere reserves are part of ____.", options: ["MAB program", "UNEP program", "WWF program", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Endemic species are those found ____.", options: ["Only in a specific area", "Everywhere", "Only in sea", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Exotic species are also called ____.", options: ["Invasive/Non-native", "Endemic", "Native", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Carbon cycle involves ____.", options: ["Photosynthesis & Respiration", "Water evaporation", "Nitrogen fixation", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Nitrogen cycle depends on ____.", options: ["Nitrogen fixing bacteria", "Sunlight", "Water", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Phosphorus cycle is a ____ cycle.", options: ["Sedimentary", "Gaseous", "Liquid", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Water cycle is also called ____ cycle.", options: ["Hydrological", "Geological", "Biological", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Competition between members of same species is ____.", options: ["Intraspecific", "Interspecific", "Both", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Symbiosis where both partners benefit is ____.", options: ["Mutualism", "Parasitism", "Commensalism", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Symbiosis where one benefits and other is harmed is ____.", options: ["Parasitism", "Mutualism", "Commensalism", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The study of interactions in a community is ____.", options: ["Synecology", "Autecology", "Physiology", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Pioneer species in Lithosere are usually ____.", options: ["Lichens", "Trees", "Grasses", "Shrubs"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "A lake ecosystem is called ____.", options: ["Lentic", "Lotic", "Marine", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "A river ecosystem is called ____.", options: ["Lotic", "Lentic", "Terrestrial", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The upper part of an aquatic ecosystem has ____.", options: ["Plankton", "Nekton", "Benthos", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Bottom dwellers in a lake are ____.", options: ["Benthos", "Plankton", "Nekton", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The process of nitrogen conversion to ammonia is ____.", options: ["Nitrogen fixation", "Denitrification", "Nitrification", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Decomposition of organic matter is done by ____.", options: ["Saprophytes", "Herbivores", "Carnivores", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Primary producers in ocean are ____.", options: ["Phytoplankton", "Zooplankton", "Small fish", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Bio-remediation uses ____ to clean environment.", options: ["Micro-organisms", "Chemicals", "Fire", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "CITIES is an international agreement on ____.", options: ["Trade in endangered species", "Climate change", "Ozone layer", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "WWF stands for ____.", options: ["World Wide Fund for Nature", "World Weather Fund", "Water Waste Fund", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "RAMSAR convention is related to ____.", options: ["Wetlands", "Mountains", "Deserts", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The only floating national park in the world is in ____.", options: ["Manipur (Keibul Lamjao)", "Assam", "Kerala", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Which animal is the state animal of Maharashtra?", options: ["Indian Giant Squirrel", "Tiger", "Lion", "Elephant"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "The 'Valley of Flowers' is in ____.", options: ["Uttarakhand", "Himachal", "Sikkim", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },
  { question: "Silent Valley National Park is in ____.", options: ["Kerala", "Karnataka", "Tamil Nadu", "None"], correctAnswer: 0, chapter: "Ecosystem and Biodiversity", type: "chapter" },

  // CHAPTER 4: Environmental Pollution
  { question: "Which one of the following is not a source of indoor air pollution:", options: ["Wood fuel","Biomas","Fumaroles","Animal dung"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A gaseous air pollutant which is responsible for photochemical smog:", options: ["Nitrogen dioxide","Carbon dioxide","Carbon monoxide","Particulates"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Health effect of carbon monoxide is:", options: ["Carboxy hemoglobin","Causes lung cancer","Respiratory","All of above"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "One of the following is the best source of determining past climate:", options: ["Tree ring analysis","Ice core analysis","Soil sediment","Both A and B"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Country mostly affected by Tsunami in 2004:", options: ["Indonesia","India","Sri Lanka","Bangladesh"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The thickness of ozone is measured in:", options: ["Dobson units","Millimeter","Centimeter","Micrometer"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Air pollution is:", options: ["mixing of any substance in air","mixing of toxic chemicals in air","alteration in original composition of air","all of the above"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which one of the following statement is false:", options: ["CO has 200 times more affinity than oxygen to combine with Hb","Excessive CO accumulation cause death","CO causes acid rain","All of the above"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Major pollutant causing acid rain:", options: ["SO2","CO2","NO2","CH4"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The large amount of carbon dioxide is added to the atmosphere by:", options: ["Deforestation","Volcanoes","Sea","All of above"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Noise is:", options: ["loud sound","unwanted sound","continuous sound","None of above"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The unit of measurement of Noise is:", options: ["Hertz","Decibel","Joules","None"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The most harmful pollutant from automobile exhaust is:", options: ["Nitrogen dioxide","Carbon monoxide","Sulphur dioxide","Lead"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Disease caused by eating fish polluted by industrial wastes containing mercury:", options: ["Minamata","Itai-itai","Fluorosis","None"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Bhopal Gas Tragedy in 1984 was due to the leakage of:", options: ["MIC (Methyl Isocyanate)","DDT","CFC","CO"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The gas released from paddy fields and cattle is:", options: ["Methane","Ethane","Propane","Butane"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which one of the following is not a greenhouse gas?", options: ["CO2","N2","CH4","N2O"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Earth's temperature without greenhouse effect would be:", options: ["-15°C","0°C","-18°C","15°C"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The major source of thermal pollution is:", options: ["Power plants","Automobiles","Industries","Agriculture"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following causes global warming?", options: ["Deforestation","Burning of fossil fuels","Both A and B","Only B"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The layer of ozone is present in:", options: ["Stratosphere","Troposphere","Mesosphere","Thermosphere"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is responsible for ozone depletion?", options: ["CFC","CO2","NO2","SO2"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which country has highest carbon emissions?", options: ["USA","China","India","Russia"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The intensity of earthquake is measured by:", options: ["Richter scale","Seismograph","Barometer","None"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Tsunami is caused by:", options: ["Earthquake under the sea","Volcanic eruption under sea","Landslides","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is a natural disaster?", options: ["Flood","Drought","Earthquake","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Soil erosion is prevented by:", options: ["Deforestation","Afforestation","Over grazing","None"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Acid rain affects:", options: ["Monuments","Aquatic life","Terrestrial life","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The primary cause of oceanic acidification is:", options: ["CO2","SO2","NO2","CFCs"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Biomagnification is highest in:", options: ["Producers","Primary Consumers","Secondary Consumers","Top Carnivores"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which heavy metal causes damage to the nervous system?", options: ["Lead","Calcium","Iron","Sodium"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A major contributor to e-waste is:", options: [" discarded plastics","discarded electronics","glass","textiles"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Black lung disease is common among:", options: ["Farmers","Coal miners","Textile workers","Drivers"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which gas has the highest global warming potential per molecule?", options: ["CO2","Methane","Nitrous oxide","CFCs"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The Taj Mahal is being affected primarily by:", options: ["Acid Rain","Global Warming","Ozone Depletion","Noise Pollution"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Biological Oxygen Demand (BOD) is a measure of:", options: ["Oxygen used by fish","Oxygen required by microbes to degrade organic matter","Oxygen in air","Oxygen in soil"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Higher BOD in a water body indicates:", options: ["Clear water","Highly polluted water","More fish","Less microbes"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Eutrophication is caused by an excess of:", options: ["Nitrates and Phosphates","Lead and Mercury","Carbon and Sulphur","Iron and Zinc"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Algal bloom results in:", options: ["Increase in DO","Decrease in DO (Dissolved Oxygen)","Clean water","None"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Fluoride pollution mainly affects:", options: ["Brain","Heart","Teeth and Bones","Lungs"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The 'Silent Spring' book brought attention to the dangers of:", options: ["DDT and Pesticides","Acid rain","Ozone hole","Noise"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which form of pollution is completely invisible to human eyes?", options: ["Solid Waste","Noise Pollution","Water pollution (turbidity)","Smoke"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Fly ash is a waste product of:", options: ["Thermal power plants","Hydro power plants","Nuclear power plants","Wind mills"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is a secondary pollutant?", options: ["SO2","CO","PAN (Peroxyacetyl nitrate)","NO"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which is the clean fuel replacing petrol in public transport in many cities?", options: ["CNG","Diesel","Kerosene","Coal"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Ozone hole was first discovered over:", options: ["Antarctica","Arctic","Equator","Europe"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What acts as a sink for carbon dioxide?", options: ["Oceans","Forests","Both A and B","Deserts"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Smog is a combination of:", options: ["Smoke and Fog","Snow and Fog","Smoke and Dust","Sun and Rain"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A major source of radioactive pollution is:", options: ["X-rays","Nuclear weapon testing","Nuclear reactors","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which disaster struck Chernobyl in 1986?", options: ["Nuclear disaster","Chemical leak","Earthquake","Tsunami"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The primary source of CFCs previously was:", options: ["Aerosols and Refrigerants","Automobiles","Farming","Volcanoes"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Blue baby syndrome is caused by excess of ____ in drinking water.", options: ["Nitrate","Sulphate","Lead","Mercury"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Pollutants that are biodegradable are broken down by:", options: ["Sunlight","Water","Micro-organisms","Air"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is an example of point-source pollution?", options: ["Municipal sewage pipe","Agricultural runoff","Urban runoff","None of these"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Non-point source pollution is ____ to control than point source.", options: ["Easier","Harder","Impossible","Same"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Thermal pollution in rivers from power plants causes:", options: ["Death of fish due to low oxygen","Increase in fish population","Cleaner water","Freezing of water"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Chernobyl disaster occurred in the country of:", options: ["Ukraine (USSR)","USA","Japan","China"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The Fukushima Daiichi nuclear disaster (2011) was caused by:", options: ["Human error","Tsunami","Terrorist attack","Meteorite"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What are PM10 and PM2.5?", options: ["Types of Pesticides","Particulate Matter in Air","Radioactive elements","Water pollutants"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which is not a method to control particulate air pollution?", options: ["Electrostatic Precipitator","Scrubber","Bag filter","Catalytic converter"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Catalytic converters in vehicles help to reduce:", options: ["CO and unburnt hydrocarbons","CO2 only","Water vapor","Heat emission"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Phytoremediation involves the use of ____ to clean up polluted environments.", options: ["Plants","Fungi","Bacteria","Animals"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is a greenhouse gas naturally abundant in the atmosphere?", options: ["Water vapor","CFCs","SF6","HFCs"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A consequence of global warming is:", options: ["Melting of polar ice","Rising sea levels","Extreme weather patterns","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The threshold of hearing for humans is about:", options: ["0 dB","10 dB","20 dB","30 dB"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Hearing damage can occur from prolonged exposure to noise above:", options: ["85 dB","40 dB","50 dB","60 dB"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What is the main strategy to manage solid waste?", options: ["Dumping in sea","Landfills","3R (Reduce, Reuse, Recycle)","Burning openly"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Incineration of municipal solid waste involves:", options: ["Burying it","Burning it at high temperature","Composting it","Recycling it"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Leachate is a highly toxic liquid that seeps from:", options: ["Landfills","Nuclear plants","Air conditioners","Vehicles"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which one of the following is an occupational hazard disease?", options: ["Cholera","Silicosis","Malaria","Typhoid"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Soil pollution can result in:", options: ["Decreased agricultural yield","Groundwater contamination","Loss of soil flora/fauna","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which element is primarily associated with the depletion of the ozone layer?", options: ["Chlorine","Carbon","Oxygen","Nitrogen"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What is the unit used to measure the intensity of noise?", options: ["Joule","Decibel","Newton","Watt"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What is the principal cause of soil salinity?", options: ["Over-irrigation in dry areas","Afforestation","Heavy rainfall","Organic farming"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Aerosols are:", options: ["Suspended solid or liquid particles in a gas","Greenhouse gases","Ozone depleting substances only","Soil pollutants"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "What is the phenomenon where trapped heat from the sun keeps the Earth warm?", options: ["Ozone Depletion","Greenhouse Effect","Acid Rain","Smog"], correctAnswer: 1, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Photochemical smog always contains:", options: ["Ozone","Methane","Sulphur dioxide","CFC"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which gas limits the oxygen-carrying capacity of blood?", options: ["CO","CO2","SO2","NO2"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which gas is widely known as laughing gas, which is also a GHG?", options: ["Nitrous Oxide (N2O)","Nitric Oxide (NO)","Nitrogen Dioxide (NO2)","Nitric Acid"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Chlorofluorocarbons (CFCs) are used in:", options: ["Refrigerators","Air Conditioners","Aerosol Sprays","All of the above"], correctAnswer: 3, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Arsenic pollution in groundwater is a massive problem primarily in:", options: ["West Bengal & Bangladesh","Rajasthan","Kerala","Gujarat"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A primary source of Arsenic in groundwater is:", options: ["Natural geological formations","Pesticides only","Plastic waste","Air pollution fallout"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Nuclear waste is dangerous because it releases:", options: ["Radiation","CFCs","Greenhouse gases","Heavy metals"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which method is considered safest for nuclear waste disposal?", options: ["Deep geological repository","Dumping in oceans","Launching into space","Burning"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Water polluted with sewage contains high amounts of:", options: ["Pathogenic bacteria","Heavy metals","Radioactive material","Plastics"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Sewage treatment plant involves:", options: ["Primary, Secondary, and Tertiary treatments","Only physical settling","Only chlorination","Only aeration"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Chlorination in water treatment aims to:", options: ["Kill bacteria and pathogens","Remove hardness","Remove foul smell","Add flavor"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The primary driver of modern climate change is:", options: ["Anthropogenic (Human) activities","Volcanic eruptions","Solar flares","Orbital changes"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "O-zone is formed by ____ atoms of oxygen.", options: ["Three","Two","Four","One"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A major factor in reducing air pollution in cities is:", options: ["Increasing green cover","More vehicles","Taller factories","Cutting trees"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A sound level of 120 dB is considered:", options: ["Normal conversation","Whisper","Threshold of pain","Silent"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "An example of indoor air pollutant is:", options: ["Radon gas","Volcanic ash","Industrial smoke","Traffic exhaust"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Pollution caused by the warming of rivers/lakes by industrial effluents is:", options: ["Thermal pollution","Toxic pollution","Nutrient pollution","Sediment pollution"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A plastic bottle normally takes how long to decompose?", options: ["1 year","50 years","Over 400 years","10 years"], correctAnswer: 2, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Single-use plastics are highly damaging because they are:", options: ["Non-biodegradable","Edible","Heavy","Expensive"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Which of the following is the most effective way to manage agricultural waste?", options: ["Composting","Burning","Dumping in rivers","Sending to landfill"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "The EPA stands for:", options: ["Environmental Protection Agency","Energy Processing Agency","Earth Protection Association","Environment Plant Association"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "Air Quality Index (AQI) is used to measure:", options: ["How clean or polluted the air is","Temperature","Humidity","Wind speed"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "An AQI value over 300 represents ____ air quality.", options: ["Hazardous","Good","Moderate","Satisfactory"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  { question: "A primary pollutant emitted directly from an exhaust is:", options: ["Carbon Monoxide (CO)","Ozone (O3)","Photochemical smog","Nitric acid"], correctAnswer: 0, chapter: "Environmental Pollution", type: "chapter" },
  {"question":"The Environmental Protection Act was passed in India in the year:","options":["1986","1972","1981","1974"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Water (Prevention and Control of Pollution) Act was enacted in:","options":["1974","1986","1972","1981"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Air (Prevention and Control of Pollution) Act was passed in:","options":["1981","1974","1986","1972"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Wildlife Protection Act was passed in:","options":["1972","1980","1986","1974"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Forest (Conservation) Act was exacted in the year:","options":["1980","1972","1986","1988"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which Article of the Indian Constitution directs the State to protect and improve the environment?","options":["Article 48A","Article 51A","Article 21","Article 14"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which Article states that it shall be the duty of every citizen of India to protect and improve the natural environment?","options":["Article 51A(g)","Article 48A","Article 21","Article 42"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The noise pollution rules in India were established under which act?","options":["Environment (Protection) Act, 1986","Air Act, 1981","Water Act, 1974","Motor Vehicles Act"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Motor Vehicles Act which contains provisions related to vehicular pollution was enacted in:","options":["1988","1972","1981","1994"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The term 'Sustainable Development' was popularized by:","options":["Brundtland Report","Kyoto Protocol","Montreal Protocol","Paris Agreement"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Kyoto Protocol is an international agreement primarily aimed at:","options":["Reducing greenhouse gas emissions","Protecting the ozone layer","Conserving wetlands","Managing hazardous waste"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Montreal Protocol was signed to protect the:","options":["Ozone layer","Marine life","Forest cover","Endangered species"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Montreal Protocol aims to phase out the production of:","options":["Chlorofluorocarbons (CFCs)","Carbon dioxide","Methane","Sulphur dioxide"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Paris Agreement is an international treaty focusing on:","options":["Climate change mitigation","Ozone depletion","Desertification","Plastic pollution"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The first Earth Summit was held in 1992 in:","options":["Rio de Janeiro","Kyoto","Paris","Montreal"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Agenda 21 is a non-binding action plan of the UN related to:","options":["Sustainable development","Nuclear disarmament","Space exploration","Global trade"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which of the following is NOT a pillar of sustainability?","options":["Political","Economic","Social","Environmental"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Sustainable agriculture does NOT include:","options":["Excessive use of chemical fertilizers","Crop rotation","Organic farming","Integrated pest management"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Rainwater harvesting is a sustainable practice primarily aimed at:","options":["Water conservation","Soil erosion control","Air purification","Energy generation"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which energy source is considered the most sustainable long-term?","options":["Solar energy","Coal","Natural gas","Petroleum"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 3R principle of waste management stands for:","options":["Reduce, Reuse, Recycle","Reduce, Refuse, React","Reuse, Restore, Reveal","Repair, Remake, Resist"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which of the following describes 'Green Building'?","options":["Resource-efficient and environmentally responsible","Painted green","Located in a forest","Made entirely of wood"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Corporate Social Responsibility (CSR) in India requires certain companies to spend what percentage of their average net profit on CSR?","options":["2%","5%","1%","10%"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which standard provides guidelines for Environmental Management Systems (EMS)?","options":["ISO 14001","ISO 9001","ISO 27001","ISO 45001"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Ecolabeling is a method of:","options":["Certifying environmental performance of products","Pricing goods based on weight","Marketing harmful chemicals","Exporting waste"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 'Ecomark' scheme in India is symbolized by a:","options":["Earthen Pitcher","Green Tree","Rising Sun","Blue Drop"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"A carbon footprint measures the total amount of:","options":["Greenhouse gases produced directly and indirectly","Oxygen consumed by an individual","Carbon stored in plants","Solid waste generated"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which mechanism allows emission-reduction projects in developing countries to earn certified emission reduction (CER) credits?","options":["Clean Development Mechanism (CDM)","Greenpeace","Montreal Protocol","CITES"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Ramsar Convention (1971) is an international treaty for the conservation of:","options":["Wetlands","Forests","Oceans","Deserts"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The CITES agreement regulates the international trade of:","options":["Endangered species of wild flora and fauna","Hazardous wastes","Ozone-depleting substances","Greenhouse gases"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Central Pollution Control Board (CPCB) was constituted under the:","options":["Water Act, 1974","Air Act, 1981","Environment Protection Act, 1986","Forest Act, 1927"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The National Green Tribunal (NGT) was established in India in:","options":["2010","1995","1986","2002"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The primary purpose of the National Green Tribunal (NGT) is for:","options":["Effective and expeditious disposal of cases relating to environmental protection","Wildlife census","Granting mining leases","Monitoring weather patterns"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 'Polluter Pays Principle' implies that:","options":["The polluter must bear the cost of preventing or cleaning up pollution","The government pays the polluter","Citizens pay extra taxes for pollution","Pollution is completely banned"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 'Precautionary Principle' advises that:","options":["Lack of full scientific certainty shall not be used as a reason for postponing cost-effective environmental protection measures","We should wait for absolute proof before acting","Industry takes precedence over environment","Pollution is inevitable"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which environmental movement was led by Sunderlal Bahuguna?","options":["Chipko Movement","Narmada Bachao Andolan","Appiko Movement","Silent Valley Project"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Narmada Bachao Andolan is associated with:","options":["Medha Patkar","Vandana Shiva","Salim Ali","Rajendra Singh"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Public Interest Litigation (PIL) in India has significantly helped in:","options":["Enforcing environmental laws","Protecting corporate interests","Increasing pollution","Deforestation"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which famous court case led to the relocation of hazardous industries from Delhi?","options":["M.C. Mehta vs Union of India","Kesavananda Bharati case","Minerva Mills case","Vishaka case"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Biomedical Waste (Management and Handling) Rules were drafted under which Act?","options":["Environment (Protection) Act, 1986","Medical Council Act","Pharmacy Act","Drugs and Cosmetics Act"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The term 'Hazardous Substance' is formally defined in which Indian Act?","options":["Environment (Protection) Act, 1986","Water Act","Air Act","Forest Conservation Act"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Environmental Impact Assessment (EIA) became mandatory in India for certain projects in:","options":["1994","1974","1981","2010"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The main objective of Environmental Impact Assessment (EIA) is:","options":["To anticipate the environmental consequences of a proposed project","To increase project costs","To stop all industrial development","To calculate taxes"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which schedule of the Wildlife Protection Act (1972) provides absolute protection to species (like Tigers)?","options":["Schedule I","Schedule V","Schedule VI","Schedule IV"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Vermin species that can be hunted are listed in which schedule of the Wildlife Protection Act?","options":["Schedule V","Schedule I","Schedule II","Schedule VI"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Project Tiger was launched in India in the year:","options":["1973","1972","1980","1992"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Biological Diversity Act was enacted in India in:","options":["2002","1992","1986","2010"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which protocol supplements the Convention on Biological Diversity regarding benefit-sharing?","options":["Nagoya Protocol","Kyoto Protocol","Montreal Protocol","Cartagena Protocol"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Cartagena Protocol primarily deals with:","options":["Biosafety of Genetically Modified Organisms (GMOs)","Greenhouse gases","Ozone layer","Persistent Organic Pollutants"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Stockholm Convention restricts the use of:","options":["Persistent Organic Pollutants (POPs)","CFCs","Lead in petrol","Nuclear weapons"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which tragedy prompted the enactment of the Environment (Protection) Act, 1986?","options":["Bhopal Gas Tragedy","Chernobyl Disaster","Fukushima Disaster","Minamata Disease"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"What poisonous gas leaked during the Bhopal Gas Tragedy?","options":["Methyl Isocyanate (MIC)","Hydrogen Cyanide","Carbon Monoxide","Sulphur Dioxide"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Basel Convention controls the transboundary movements of:","options":["Hazardous wastes","Endangered animals","Ozone depleting substances","Electronic goods"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Minamata Convention is an international treaty designed to protect human health from:","options":["Mercury","Lead","Cadmium","Arsenic"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Coastal Regulation Zone (CRZ) Notification regulates activities in coastal areas to protect:","options":["Coastal environments","Mountain peaks","Desert dunes","Deep sea mining"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"According to the Indian Forest Act 1927, forests are classified into:","options":["Reserved, Protected, and Village forests","Evergreen, Deciduous, and Coniferous","Dry, Wet, and Moist","Alpine, Tropical, and Temperate"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Under which Act does the government declare National Parks and Sanctuaries?","options":["Wildlife Protection Act, 1972","Environment Protection Act, 1986","Forest Act, 1927","Biodiversity Act, 2002"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Joint Forest Management (JFM) involves partnership between:","options":["Local communities and the Forest Department","Two different countries","Central and State Governments","NGOs and Private Companies"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"In the context of the environment, what does NGO stand for?","options":["Non-Governmental Organization","National Geopolitics Office","Natural Greenhouse Ozone","Non-Green Organization"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Eco-tourism promotes:","options":["Responsible travel to natural areas that conserves the environment","Mass tourism in cities","Building resorts in core forest areas","Hunting and fishing tours"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"India's National Action Plan on Climate Change (NAPCC) launched in 2008 has how many national missions?","options":["8","5","10","12"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which of the following is ONE of the missions under NAPCC?","options":["National Solar Mission","National Coal Mission","National Deforestation Mission","National Plastic Mission"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"International Solar Alliance (ISA) was jointly launched by India and:","options":["France","USA","Russia","UK"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Goal 13 of the UN Sustainable Development Goals (SDGs) is regarding:","options":["Climate Action","Zero Hunger","Quality Education","Gender Equality"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"How many Sustainable Development Goals (SDGs) were adopted by the UN in 2015?","options":["17","10","21","8"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"By which year are the Sustainable Development Goals (SDGs) targeted to be achieved?","options":["2030","2050","2025","2100"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which UN agency is primarily responsible for environmental issues?","options":["UNEP","WHO","UNESCO","UNICEF"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"UNEP stands for:","options":["United Nations Environment Programme","United Nations Economic Policy","Union of National Earth Protectors","Universal Nature Ecology Plan"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The headquarters of UNEP is located in:","options":["Nairobi, Kenya","Geneva, Switzerland","New York, USA","Paris, France"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"World Environment Day is celebrated every year on:","options":["June 5","April 22","March 21","September 16"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Earth Day is observed internationally on:","options":["April 22","June 5","October 2","December 1"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"World Ozone Day is celebrated on:","options":["September 16","August 12","July 1","March 3"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"A carbon credit is equivalent to:","options":["1 ton of Carbon Dioxide","10 tons of Carbon Dioxide","100 kg of Methane","1 ton of CFCs"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which certification is specifically given for forest management?","options":["FSC (Forest Stewardship Council)","ISO 9001","ISI mark","Agmark"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The concept that 'Earth provides enough to satisfy every man's need, but not every man's greed' was coined by:","options":["Mahatma Gandhi","Nelson Mandela","Rachel Carson","Sunderlal Bahuguna"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which book written by Rachel Carson is credited with advancing the global environmental movement?","options":["Silent Spring","The Population Bomb","Our Common Future","Limits to Growth"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Net-zero emissions mean:","options":["Balancing greenhouse gas emissions with its removal","Zero industrial activity","100% solar energy consumption","Completely banning fossil fuels"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"A life cycle assessment (LCA) evaluates:","options":["Environmental impacts associated with all stages of a product's life","Lifespan of animals","Durability of concrete","Cost of production"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Greenwashing refers to:","options":["Making false or misleading claims about the environmental benefits of a product","Washing clothes with organic detergents","Painting roofs green","Planting trees in an industrial site"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which is an example of an economic incentive for environmental protection?","options":["Subsidies for buying electric vehicles","Banning all plastics","Imprisonment for poaching","Public awareness campaigns"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 'Clean India Mission' is officially known as:","options":["Swachh Bharat Abhiyan","Harit Kranti","Namami Gange","Jal Jeevan Mission"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Swachh Bharat Abhiyan aims to achieve generally what?","options":["Elimination of open defecation and improved solid waste management","Providing 24/7 electricity","Building smart cities","Forest conservation"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The 'Namami Gange' Programme focuses on the rejuvenation of which river?","options":["Ganga","Yamuna","Godavari","Brahmaputra"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which policy promotes electric mobility in India?","options":["FAME India Scheme","Make in India","Skill India","Digital India"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Energy Conservation Act in India was enacted in:","options":["2001","1991","2010","2005"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The Bureau of Energy Efficiency (BEE) is known for providing:","options":["Star ratings to electrical appliances","Subsidies for agriculture","Water quality testing","Certificates for deforestation"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which principle focuses on designing products so they can be completely reused or broken down naturally without pollution?","options":["Cradle to Cradle","Cradle to Grave","End of Pipe treatment","Top-Down approach"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Permaculture is a concept related to:","options":["Sustainable and self-sufficient agricultural ecosystems","Permanent plastic production","Deep sea drilling","Space agriculture"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The concept of 'Circular Economy' aims to:","options":["Eliminate waste and the continual use of resources","Encourage single-use products","Increase fossil fuel consumption","Promote linear resource extraction"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"LEED certification in green building stands for:","options":["Leadership in Energy and Environmental Design","Lesser Emission and Ecological Development","Long-term Economic and Ecological Defense","Local Environmental Ecology Department"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which index measures the overall environmental performance of a country's policies?","options":["Environmental Performance Index (EPI)","Gross Domestic Product (GDP)","Human Development Index (HDI)","Consumer Price Index (CPI)"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which Indian state became the first to be fully organic in agriculture?","options":["Sikkim","Kerala","Punjab","Goa"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"A Biogas plant primarily produces which gas as fuel?","options":["Methane","Propane","Carbon Dioxide","Helium"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which is a major strategy to combat urban heat island effect?","options":["Planting urban forests and green roofs","Constructing massive glass buildings","Paving all areas with black asphalt","Removing trees on streets"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The term 'Carrying Capacity' refers to:","options":["Maximum population size a given environment can sustain","Maximum weight a truck can carry","Amount of water a river holds","Total wood stored in a given forest"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"In relation to hazardous waste, 'TSDF' stands for:","options":["Treatment, Storage, and Disposal Facility","Toxic Substance Disposal Firm","Temporal Storage and Deep Freeze","Temperature Sensitive Diagnostic Facility"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Extended Producer Responsibility (EPR) makes manufacturers responsible for:","options":["The end-of-life disposal of their products","The initial raw materials only","Reducing worker wages","Only the packaging of products"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"E-waste (Management) Rules apply to the disposal of:","options":["Electronic and electrical equipment","Agricultural residue","Medical syringes","Leftover food waste"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which heavy metal found in e-waste poses serious neurological threats?","options":["Lead","Iron","Copper","Aluminum"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Aquaponics is a sustainable farming method combining:","options":["Aquaculture and Hydroponics","Agriculture and Forestry","Beekeeping and Gardening","Dairy and Poultry"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The precautionary principle was notably incorporated into Indian environmental law through which tribunal?","options":["National Green Tribunal","Income Tax Appellate Tribunal","Central Administrative Tribunal","Securities Appellate Tribunal"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which organization maintains the 'Red List' of threatened species?","options":["IUCN","WWF","UNEP","Greenpeace"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"What is the primary motive of the Coalition for Disaster Resilient Infrastructure (CDRI)?","options":["Promoting resilience of infrastructure systems to climate and disaster risks","Funding fossil fuel projects","Building mega-dams exclusively","Military infrastructure"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which sustainable practice involves turning food waste into nutrient-rich soil?","options":["Composting","Incineration","Landfilling","Dredging"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Which of the following is considered a 'carbon sink'?","options":["Oceans and forests","Coal mines","Automobile exhausts","Cement factories"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Micro-irrigation techniques like drip irrigation help in:","options":["Maximizing water use efficiency","Flooding the fields","Increasing ground water pollution","Pesticide application"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Ozone Depleting Substances (Regulation and Control) Rules in India were passed in:","options":["2000","1986","2010","1995"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"Plastic Waste Management Rules prohibit the use of:","options":["Single-use plastic items below a certain thickness","All types of plastic indiscriminately","Metal containers","Paper bags"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"In environmental auditing, a 'Non-compliance' means:","options":["Failure to meet regulatory requirements","A successful ecological project","Excessive greening","Donating to NGOs"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"},
  {"question":"The overarching goal of the Decade on Ecosystem Restoration launched by UN is:","options":["Preventing, halting and reversing the degradation of ecosystems worldwide","Expanding industrial zones into forests","Promoting desertification","Ending all conservation efforts"],"correctAnswer":0,"chapter":"Environmental Legislation and Sustainable Practices","type":"chapter"}
];

export const seedData = async () => {
  console.log("Starting smart seed operation...");
  try {
    const questionsCol = collection(db, "questions");
    
    // 1. Fetch current questions to avoid duplicates
    const snapshot = await getDocs(questionsCol);
    const existingQuestions = snapshot.docs.map(doc => doc.data().question);
    
    let addedCount = 0;
    for (const q of sampleQuestions) {
      if (!existingQuestions.includes(q.question)) {
        console.log(`Adding new question: ${q.question.substring(0, 30)}...`);
        await addDoc(questionsCol, q);
        addedCount++;
      }
    }
    
    console.log(`Success: ${addedCount} new questions added!`);
    return { success: true, count: addedCount, total: sampleQuestions.length };
  } catch (e) {
    console.error("Critical Error during seeding:", e);
    throw new Error(e.message);
  }
};
