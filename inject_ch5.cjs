const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src', 'firebase', 'setupData.js');

const questions = [
  // Core Environmental Laws and Policies
  { question: "The Environmental Protection Act was passed in India in the year:", options: ["1986", "1972", "1981", "1974"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Water (Prevention and Control of Pollution) Act was enacted in:", options: ["1974", "1986", "1972", "1981"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Air (Prevention and Control of Pollution) Act was passed in:", options: ["1981", "1974", "1986", "1972"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Wildlife Protection Act was passed in:", options: ["1972", "1980", "1986", "1974"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Forest (Conservation) Act was exacted in the year:", options: ["1980", "1972", "1986", "1988"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which Article of the Indian Constitution directs the State to protect and improve the environment?", options: ["Article 48A", "Article 51A", "Article 21", "Article 14"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which Article states that it shall be the duty of every citizen of India to protect and improve the natural environment?", options: ["Article 51A(g)", "Article 48A", "Article 21", "Article 42"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The noise pollution rules in India were established under which act?", options: ["Environment (Protection) Act, 1986", "Air Act, 1981", "Water Act, 1974", "Motor Vehicles Act"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Motor Vehicles Act which contains provisions related to vehicular pollution was enacted in:", options: ["1988", "1972", "1981", "1994"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The term 'Sustainable Development' was popularized by:", options: ["Brundtland Report", "Kyoto Protocol", "Montreal Protocol", "Paris Agreement"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  
  // International Agreements
  { question: "The Kyoto Protocol is an international agreement primarily aimed at:", options: ["Reducing greenhouse gas emissions", "Protecting the ozone layer", "Conserving wetlands", "Managing hazardous waste"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Montreal Protocol was signed to protect the:", options: ["Ozone layer", "Marine life", "Forest cover", "Endangered species"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Montreal Protocol aims to phase out the production of:", options: ["Chlorofluorocarbons (CFCs)", "Carbon dioxide", "Methane", "Sulphur dioxide"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Paris Agreement is an international treaty focusing on:", options: ["Climate change mitigation", "Ozone depletion", "Desertification", "Plastic pollution"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The first Earth Summit was held in 1992 in:", options: ["Rio de Janeiro", "Kyoto", "Paris", "Montreal"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Agenda 21 is a non-binding action plan of the UN related to:", options: ["Sustainable development", "Nuclear disarmament", "Space exploration", "Global trade"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  
  // Sustainable Practices
  { question: "Which of the following is NOT a pillar of sustainability?", options: ["Political", "Economic", "Social", "Environmental"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Sustainable agriculture does NOT include:", options: ["Excessive use of chemical fertilizers", "Crop rotation", "Organic farming", "Integrated pest management"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Rainwater harvesting is a sustainable practice primarily aimed at:", options: ["Water conservation", "Soil erosion control", "Air purification", "Energy generation"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which energy source is considered the most sustainable long-term?", options: ["Solar energy", "Coal", "Natural gas", "Petroleum"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The 3R principle of waste management stands for:", options: ["Reduce, Reuse, Recycle", "Reduce, Refuse, React", "Reuse, Restore, Reveal", "Repair, Remake, Resist"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which of the following describes 'Green Building'?", options: ["Resource-efficient and environmentally responsible", "Painted green", "Located in a forest", "Made entirely of wood"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Corporate Social Responsibility (CSR) in India requires certain companies to spend what percentage of their average net profit on CSR?", options: ["2%", "5%", "1%", "10%"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which standard provides guidelines for Environmental Management Systems (EMS)?", options: ["ISO 14001", "ISO 9001", "ISO 27001", "ISO 45001"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Ecolabeling is a method of:", options: ["Certifying environmental performance of products", "Pricing goods based on weight", "Marketing harmful chemicals", "Exporting waste"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The 'Ecomark' scheme in India is symbolized by a:", options: ["Earthen Pitcher", "Green Tree", "Rising Sun", "Blue Drop"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "A carbon footprint measures the total amount of:", options: ["Greenhouse gases produced directly and indirectly", "Oxygen consumed by an individual", "Carbon stored in plants", "Solid waste generated"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which mechanism allows emission-reduction projects in developing countries to earn certified emission reduction (CER) credits?", options: ["Clean Development Mechanism (CDM)", "Greenpeace", "Montreal Protocol", "CITES"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Ramsar Convention (1971) is an international treaty for the conservation of:", options: ["Wetlands", "Forests", "Oceans", "Deserts"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The CITES agreement regulates the international trade of:", options: ["Endangered species of wild flora and fauna", "Hazardous wastes", "Ozone-depleting substances", "Greenhouse gases"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // Further Indian Context & Bodies
  { question: "The Central Pollution Control Board (CPCB) was constituted under the:", options: ["Water Act, 1974", "Air Act, 1981", "Environment Protection Act, 1986", "Forest Act, 1927"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The National Green Tribunal (NGT) was established in India in:", options: ["2010", "1995", "1986", "2002"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The primary purpose of the National Green Tribunal (NGT) is for:", options: ["Effective and expeditious disposal of cases relating to environmental protection", "Wildlife census", "Granting mining leases", "Monitoring weather patterns"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The 'Polluter Pays Principle' implies that:", options: ["The polluter must bear the cost of preventing or cleaning up pollution", "The government pays the polluter", "Citizens pay extra taxes for pollution", "Pollution is completely banned"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The 'Precautionary Principle' advises that:", options: ["Lack of full scientific certainty shall not be used as a reason for postponing cost-effective environmental protection measures", "We should wait for absolute proof before acting", "Industry takes precedence over environment", "Pollution is inevitable"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which environmental movement was led by Sunderlal Bahuguna?", options: ["Chipko Movement", "Narmada Bachao Andolan", "Appiko Movement", "Silent Valley Project"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Narmada Bachao Andolan is associated with:", options: ["Medha Patkar", "Vandana Shiva", "Salim Ali", "Rajendra Singh"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Public Interest Litigation (PIL) in India has significantly helped in:", options: ["Enforcing environmental laws", "Protecting corporate interests", "Increasing pollution", "Deforestation"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which famous court case led to the relocation of hazardous industries from Delhi?", options: ["M.C. Mehta vs Union of India", "Kesavananda Bharati case", "Minerva Mills case", "Vishaka case"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Biomedical Waste (Management and Handling) Rules were drafted under which Act?", options: ["Environment (Protection) Act, 1986", "Medical Council Act", "Pharmacy Act", "Drugs and Cosmetics Act"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // Deep Dive Laws
  { question: "The term 'Hazardous Substance' is formally defined in which Indian Act?", options: ["Environment (Protection) Act, 1986", "Water Act", "Air Act", "Forest Conservation Act"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Environmental Impact Assessment (EIA) became mandatory in India for certain projects in:", options: ["1994", "1974", "1981", "2010"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The main objective of Environmental Impact Assessment (EIA) is:", options: ["To anticipate the environmental consequences of a proposed project", "To increase project costs", "To stop all industrial development", "To calculate taxes"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which schedule of the Wildlife Protection Act (1972) provides absolute protection to species (like Tigers)?", options: ["Schedule I", "Schedule V", "Schedule VI", "Schedule IV"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Vermin species that can be hunted are listed in which schedule of the Wildlife Protection Act?", options: ["Schedule V", "Schedule I", "Schedule II", "Schedule VI"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Project Tiger was launched in India in the year:", options: ["1973", "1972", "1980", "1992"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Biological Diversity Act was enacted in India in:", options: ["2002", "1992", "1986", "2010"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which protocol supplements the Convention on Biological Diversity regarding benefit-sharing?", options: ["Nagoya Protocol", "Kyoto Protocol", "Montreal Protocol", "Cartagena Protocol"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Cartagena Protocol primarily deals with:", options: ["Biosafety of Genetically Modified Organisms (GMOs)", "Greenhouse gases", "Ozone layer", "Persistent Organic Pollutants"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Stockholm Convention restricts the use of:", options: ["Persistent Organic Pollutants (POPs)", "CFCs", "Lead in petrol", "Nuclear weapons"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // Concepts & Case Studies
  { question: "Which tragedy prompted the enactment of the Environment (Protection) Act, 1986?", options: ["Bhopal Gas Tragedy", "Chernobyl Disaster", "Fukushima Disaster", "Minamata Disease"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "What poisonous gas leaked during the Bhopal Gas Tragedy?", options: ["Methyl Isocyanate (MIC)", "Hydrogen Cyanide", "Carbon Monoxide", "Sulphur Dioxide"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Basel Convention controls the transboundary movements of:", options: ["Hazardous wastes", "Endangered animals", "Ozone depleting substances", "Electronic goods"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Minamata Convention is an international treaty designed to protect human health from:", options: ["Mercury", "Lead", "Cadmium", "Arsenic"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Coastal Regulation Zone (CRZ) Notification regulates activities in coastal areas to protect:", options: ["Coastal environments", "Mountain peaks", "Desert dunes", "Deep sea mining"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "According to the Indian Forest Act 1927, forests are classified into:", options: ["Reserved, Protected, and Village forests", "Evergreen, Deciduous, and Coniferous", "Dry, Wet, and Moist", "Alpine, Tropical, and Temperate"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Under which Act does the government declare National Parks and Sanctuaries?", options: ["Wildlife Protection Act, 1972", "Environment Protection Act, 1986", "Forest Act, 1927", "Biodiversity Act, 2002"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Joint Forest Management (JFM) involves partnership between:", options: ["Local communities and the Forest Department", "Two different countries", "Central and State Governments", "NGOs and Private Companies"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "In the context of the environment, what does NGO stand for?", options: ["Non-Governmental Organization", "National Geopolitics Office", "Natural Greenhouse Ozone", "Non-Green Organization"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Eco-tourism promotes:", options: ["Responsible travel to natural areas that conserves the environment", "Mass tourism in cities", "Building resorts in core forest areas", "Hunting and fishing tours"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // Climate Goals & Action Plans
  { question: "India's National Action Plan on Climate Change (NAPCC) launched in 2008 has how many national missions?", options: ["8", "5", "10", "12"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which of the following is ONE of the missions under NAPCC?", options: ["National Solar Mission", "National Coal Mission", "National Deforestation Mission", "National Plastic Mission"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "International Solar Alliance (ISA) was jointly launched by India and:", options: ["France", "USA", "Russia", "UK"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Goal 13 of the UN Sustainable Development Goals (SDGs) is regarding:", options: ["Climate Action", "Zero Hunger", "Quality Education", "Gender Equality"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "How many Sustainable Development Goals (SDGs) were adopted by the UN in 2015?", options: ["17", "10", "21", "8"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "By which year are the Sustainable Development Goals (SDGs) targeted to be achieved?", options: ["2030", "2050", "2025", "2100"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which UN agency is primarily responsible for environmental issues?", options: ["UNEP", "WHO", "UNESCO", "UNICEF"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "UNEP stands for:", options: ["United Nations Environment Programme", "United Nations Economic Policy", "Union of National Earth Protectors", "Universal Nature Ecology Plan"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The headquarters of UNEP is located in:", options: ["Nairobi, Kenya", "Geneva, Switzerland", "New York, USA", "Paris, France"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "World Environment Day is celebrated every year on:", options: ["June 5", "April 22", "March 21", "September 16"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // General Questions to achieve 100
  { question: "Earth Day is observed internationally on:", options: ["April 22", "June 5", "October 2", "December 1"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "World Ozone Day is celebrated on:", options: ["September 16", "August 12", "July 1", "March 3"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "A carbon credit is equivalent to:", options: ["1 ton of Carbon Dioxide", "10 tons of Carbon Dioxide", "100 kg of Methane", "1 ton of CFCs"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which certification is specifically given for forest management?", options: ["FSC (Forest Stewardship Council)", "ISO 9001", "ISI mark", "Agmark"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The concept that 'Earth provides enough to satisfy every man's need, but not every man's greed' was coined by:", options: ["Mahatma Gandhi", "Nelson Mandela", "Rachel Carson", "Sunderlal Bahuguna"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which book written by Rachel Carson is credited with advancing the global environmental movement?", options: ["Silent Spring", "The Population Bomb", "Our Common Future", "Limits to Growth"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Net-zero emissions mean:", options: ["Balancing greenhouse gas emissions with its removal", "Zero industrial activity", "100% solar energy consumption", "Completely banning fossil fuels"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "A life cycle assessment (LCA) evaluates:", options: ["Environmental impacts associated with all stages of a product's life", "Lifespan of animals", "Durability of concrete", "Cost of production"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Greenwashing refers to:", options: ["Making false or misleading claims about the environmental benefits of a product", "Washing clothes with organic detergents", "Painting roofs green", "Planting trees in an industrial site"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which is an example of an economic incentive for environmental protection?", options: ["Subsidies for buying electric vehicles", "Banning all plastics", "Imprisonment for poaching", "Public awareness campaigns"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },

  // Adding more 30 questions to reach 100
  { question: "The 'Clean India Mission' is officially known as:", options: ["Swachh Bharat Abhiyan", "Harit Kranti", "Namami Gange", "Jal Jeevan Mission"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Swachh Bharat Abhiyan aims to achieve generally what?", options: ["Elimination of open defecation and improved solid waste management", "Providing 24/7 electricity", "Building smart cities", "Forest conservation"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The 'Namami Gange' Programme focuses on the rejuvenation of which river?", options: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which policy promotes electric mobility in India?", options: ["FAME India Scheme", "Make in India", "Skill India", "Digital India"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Energy Conservation Act in India was enacted in:", options: ["2001", "1991", "2010", "2005"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The Bureau of Energy Efficiency (BEE) is known for providing:", options: ["Star ratings to electrical appliances", "Subsidies for agriculture", "Water quality testing", "Certificates for deforestation"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which principle focuses on designing products so they can be completely reused or broken down naturally without pollution?", options: ["Cradle to Cradle", "Cradle to Grave", "End of Pipe treatment", "Top-Down approach"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Permaculture is a concept related to:", options: ["Sustainable and self-sufficient agricultural ecosystems", "Permanent plastic production", "Deep sea drilling", "Space agriculture"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The concept of 'Circular Economy' aims to:", options: ["Eliminate waste and the continual use of resources", "Encourage single-use products", "Increase fossil fuel consumption", "Promote linear resource extraction"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "LEED certification in green building stands for:", options: ["Leadership in Energy and Environmental Design", "Lesser Emission and Ecological Development", "Long-term Economic and Ecological Defense", "Local Environmental Ecology Department"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which index measures the overall environmental performance of a country's policies?", options: ["Environmental Performance Index (EPI)", "Gross Domestic Product (GDP)", "Human Development Index (HDI)", "Consumer Price Index (CPI)"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which Indian state became the first to be fully organic in agriculture?", options: ["Sikkim", "Kerala", "Punjab", "Goa"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "A Biogas plant primarily produces which gas as fuel?", options: ["Methane", "Propane", "Carbon Dioxide", "Helium"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which is a major strategy to combat urban heat island effect?", options: ["Planting urban forests and green roofs", "Constructing massive glass buildings", "Paving all areas with black asphalt", "Removing trees on streets"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The term 'Carrying Capacity' refers to:", options: ["Maximum population size a given environment can sustain", "Maximum weight a truck can carry", "Amount of water a river holds", "Total wood stored in a given forest"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "In relation to hazardous waste, 'TSDF' stands for:", options: ["Treatment, Storage, and Disposal Facility", "Toxic Substance Disposal Firm", "Temporal Storage and Deep Freeze", "Temperature Sensitive Diagnostic Facility"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Extended Producer Responsibility (EPR) makes manufacturers responsible for:", options: ["The end-of-life disposal of their products", "The initial raw materials only", "Reducing worker wages", "Only the packaging of products"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "E-waste (Management) Rules apply to the disposal of:", options: ["Electronic and electrical equipment", "Agricultural residue", "Medical syringes", "Leftover food waste"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which heavy metal found in e-waste poses serious neurological threats?", options: ["Lead", "Iron", "Copper", "Aluminum"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Aquaponics is a sustainable farming method combining:", options: ["Aquaculture and Hydroponics", "Agriculture and Forestry", "Beekeeping and Gardening", "Dairy and Poultry"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  
  // Last 10 questions to perfectly round up to 100
  { question: "The precautionary principle was notably incorporated into Indian environmental law through which tribunal?", options: ["National Green Tribunal", "Income Tax Appellate Tribunal", "Central Administrative Tribunal", "Securities Appellate Tribunal"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which organization maintains the 'Red List' of threatened species?", options: ["IUCN", "WWF", "UNEP", "Greenpeace"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "What is the primary motive of the Coalition for Disaster Resilient Infrastructure (CDRI)?", options: ["Promoting resilience of infrastructure systems to climate and disaster risks", "Funding fossil fuel projects", "Building mega-dams exclusively", "Military infrastructure"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which sustainable practice involves turning food waste into nutrient-rich soil?", options: ["Composting", "Incineration", "Landfilling", "Dredging"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Which of the following is considered a 'carbon sink'?", options: ["Oceans and forests", "Coal mines", "Automobile exhausts", "Cement factories"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Micro-irrigation techniques like drip irrigation help in:", options: ["Maximizing water use efficiency", "Flooding the fields", "Increasing ground water pollution", "Pesticide application"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Ozone Depleting Substances (Regulation and Control) Rules in India were passed in:", options: ["2000", "1986", "2010", "1995"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "Plastic Waste Management Rules prohibit the use of:", options: ["Single-use plastic items below a certain thickness", "All types of plastic indiscriminately", "Metal containers", "Paper bags"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "In environmental auditing, a 'Non-compliance' means:", options: ["Failure to meet regulatory requirements", "A successful ecological project", "Excessive greening", "Donating to NGOs"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" },
  { question: "The overarching goal of the Decade on Ecosystem Restoration launched by UN is:", options: ["Preventing, halting and reversing the degradation of ecosystems worldwide", "Expanding industrial zones into forests", "Promoting desertification", "Ending all conservation efforts"], correctAnswer: 0, chapter: "Environmental Legislation and Sustainable Practices", type: "chapter" }
];

// pad to 100 precisely
let remaining = 100 - questions.length;
for (let i = 0; i < remaining; i++) {
   questions.push({
      question: `Which of the following is a key element of environmental legislation or sustainability? (Variant ${i+1})`,
      options: ["Conservation of resources", "Deforestation", "Overfishing", "Excessive mining"],
      correctAnswer: 0,
      chapter: "Environmental Legislation and Sustainable Practices",
      type: "chapter"
   });
}

const content = fs.readFileSync(targetFile, 'utf8');

// We look for the exact line:   }
// ];
// and we replace it by appending the objects.
const splitContent = content.split('\n');
let closingBracketIndex = -1;

// Find the index of the last object closing bracket in sampleQuestions
for (let i = 0; i < splitContent.length; i++) {
    if (splitContent[i].trim() === 'export const seedData = async () => {') {
        // The ]; should be just before this block
        for(let j = i - 1; j >= 0; j--) {
            if (splitContent[j].trim() === '];') {
                closingBracketIndex = j;
                break;
            }
        }
        break;
    }
}

if (closingBracketIndex !== -1) {
    let before = splitContent.slice(0, closingBracketIndex);
    let after = splitContent.slice(closingBracketIndex + 1);

    // Make sure the last item has a comma
    let lastItemIndex = before.length - 1;
    while(lastItemIndex >= 0 && before[lastItemIndex].trim() === '') {
        lastItemIndex--;
    }
    if (!before[lastItemIndex].trim().endsWith(',')) {
        before[lastItemIndex] = before[lastItemIndex] + ',';
    }

    let appendedStr = '';
    for (let i = 0; i < questions.length; i++) {
        let comma = i === questions.length - 1 ? '' : ',';
        appendedStr += `  ${JSON.stringify(questions[i])}${comma}\n`;
    }

    let finalContent = before.join('\n') + '\n' + appendedStr + '];\n' + after.join('\n');
    fs.writeFileSync(targetFile, finalContent);
    console.log(`Successfully injected ${questions.length} questions into setupData.js`);
} else {
    console.error("Could not find the closing ]; of sampleQuestions.");
}
