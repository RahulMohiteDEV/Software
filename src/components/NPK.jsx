import React, { useState } from "react";

const cropData = {
  Sugercane_Adsali: { nitrogen: 400, phosphorus: 170, potassium: 170 },
  Sugercane_Purvahangami: { nitrogen: 340, phosphorus: 170, potassium: 170 },
  Sugercane_Suru_Khodva: { nitrogen: 250, phosphorus: 115, potassium: 115 },
  Rabi_Jowar: { nitrogen: 80, phosphorus: 40, potassium: 40 },
  Kharip_Jowar: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  Sunflower_Kored: { nitrogen: 50, phosphorus: 25, potassium: 25 },
  Sunflower_Bagayati: { nitrogen: 60, phosphorus: 30, potassium: 30 },
  onion: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  wheat: { nitrogen: 120, phosphorus: 60, potassium: 40 },
  rice: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  chili: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  Tomato: { nitrogen: 200, phosphorus: 100, potassium: 150 },
  Brinjal: { nitrogen: 150, phosphorus: 50, potassium: 50 },
  okra: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  cabbage: { nitrogen: 160, phosphorus: 80, potassium: 80 },
  Cauliflower: { nitrogen: 150, phosphorus: 75, potassium: 75 },
  Potato: { nitrogen: 100, phosphorus: 60, potassium: 120 },
  pees: { nitrogen: 15, phosphorus: 60, potassium: 60 },
  Radish: { nitrogen: 20, phosphorus: 20, potassium: 80 },
  Cucumber: { nitrogen: 100, phosphorus: 50, potassium: 50 },
  MilkPumpkin: { nitrogen: 50, phosphorus: 50, potassium: 50 },
  bitterGourd: { nitrogen: 100, phosphorus: 50, potassium: 560 },
  RidgeLuffa: { nitrogen: 50, phosphorus: 50, potassium: 50 },
  Watermelon: { nitrogen: 50, phosphorus: 50, potassium: 50 },
  melon: { nitrogen: 50, phosphorus: 50, potassium: 50 },
  Garlic: { nitrogen: 50, phosphorus: 50, potassium: 50 },
  Spinach: { nitrogen: 40, phosphorus: 40, potassium: 40 },
  Cluster: { nitrogen: 20, phosphorus: 60, potassium: 60 },
  turmeric: { nitrogen: 200, phosphorus: 100, potassium: 100 },
  Ginger: { nitrogen: 120, phosphorus: 75, potassium: 75 },
  Millet: { nitrogen: 50, phosphorus: 25, potassium: 25 },
  Soyabean: { nitrogen: 50, phosphorus: 75, potassium: 0 },
  maize: { nitrogen: 120, phosphorus: 60, potassium: 40 },
  Groundnut: { nitrogen: 25, phosphorus: 50, potassium: 0 },
  Gram: { nitrogen: 25, phosphorus: 50, potassium: 30 },
  Tur: { nitrogen: 25, phosphorus: 50, potassium: 0 },
  Udit: { nitrogen: 20, phosphorus: 40, potassium: 0 },
  Mung_Bean: { nitrogen: 20, phosphorus: 40, potassium: 0 },
  Pitcher: { nitrogen: 15, phosphorus: 30, potassium: 0 },
  Kidney_Beans: { nitrogen: 30, phosphorus: 80, potassium: 0 },
  Cow: { nitrogen: 25, phosphorus: 50, potassium: 0 },
  Safflower: { nitrogen: 50, phosphorus: 25, potassium: 25 },
  Brocoli: { nitrogen: 120, phosphorus: 60, potassium: 60 },
};

// Marathi crop names mapping
const cropNamesMarathi = {
  Sugercane_Adsali: "ऊस_आडसाली",
  Sugercane_Purvahangami: "ऊस_पूर्वहंगामी",
  Sugercane_Suru_Khodva: "ऊस_सुरू_खोडवा",
  Rabi_Jowar: "रब्बी_ज्वारी",
  Kharip_Jowar: "खरीप_ज्वारी",
  Sunflower_Kored: "सूर्यफूल_कोरड",
  Sunflower_Bagayati: "सूर्यफूल_बागायती",
  onion: "कांदा",
  wheat: "गहू",
  rice: "तांदूळ",
  chili: "मिरची",
  Tomato: "टोमॅटो",
  Brinjal: "वांगी",
  okra: "भेंडी",
  cabbage: "कोबी",
  Cauliflower: "फुलकोबी",
  Potato: "बटाटा",
  pees: "मटार",
  Radish: "मुळा",
  Cucumber: "काकडी",
  MilkPumpkin: "दुधी भोपळा",
  bitterGourd: "कारले",
  RidgeLuffa: "दोडका",
  Watermelon: "टरबूज",
  melon: "खरबूज",
  Garlic: "लसूण",
  Spinach: "पालक",
  Cluster: "गवार",
  turmeric: "हळद",
  Ginger: "आले",
  Millet: "बाजरी",
  Soyabean: "सोयाबीन",
  maize: "मका",
  Groundnut: "शेंगदाणा",
  Gram: "हरभरा",
  Tur: "तूर",
  Udit: "उडीद",
  Mung_Bean: "मूग",
  Pitcher: "चवळी",
  Kidney_Beans: "राजमा",
  Cow: "चवळी",
  Safflower: "करडई",
  Brocoli: "ब्रोकली ",
};

const soilTypes = ["Red Soil", "Black Soil", "Medium Soil", "Silt"];
const soilTypesMarathi = ["लाल माती ", "काळी माती ", "मध्यम माती ", "गाळ"];

const fertilizers = {
  urea: { name: "Neem coted Urea (46% N)", nameMarathi: "नीम कोटेड युरिया (46% N)", n: 46, p: 0, k: 0 },
  dap: { name: "DAP (18-46-0)", nameMarathi: "डीएपी (18-46-0)", n: 18, p: 46, k: 0 },
  mop: { name: "MOP (0-0-60)", nameMarathi: "एमओपी (0-0-60)", n: 0, p: 0, k: 60 },
  ssp: { name: "SSP (0-16-0)", nameMarathi: "एसएसपी (0-16-0)", n: 0, p: 16, k: 0 },
  sop: { name: "SOP (0-0-50)", nameMarathi: "एसओपी (0-0-50)", n: 0, p: 0, k: 50 },
  Ammonium_Sulphate: { name: "Ammonium Sulphate (21-0-0)", nameMarathi: "अमोनियम सल्फेट (21-0-0)", n: 21, p: 0, k: 0 },
  npk123216: { name: "NPK 12-32-16", nameMarathi: "एनपीके 12-32-16", n: 12, p: 32, k: 16 },
  npk082424: { name: "NPK 8-24-24", nameMarathi: "एनपीके 8-24-24", n: 8, p: 24, k: 24 },
  npk092424: { name: "NPK 9-24-24", nameMarathi: "एनपीके 9-24-24", n: 9, p: 24, k: 24 },
  npk102626: { name: "NPK 10-26-26", nameMarathi: "एनपीके 10-26-26", n: 10, p: 26, k: 26 },
  npk20200013: { name: "NPK 20-20-00-13", nameMarathi: "एनपीके 20-20-00-13", n: 20, p: 20, k: 0, s: 13 },
  npk282800: { name: "NPK 28-28-00", nameMarathi: "एनपीके 28-28-00", n: 28, p: 28, k: 0 },
  npk143514: { name: "NPK 14-35-14", nameMarathi: "एनपीके 14-35-14", n: 14, p: 35, k: 14 },
};

const straightFertilizers = [
  { id: "urea", label: "Neem Coated Urea (46% N)", labelMarathi: "नीम कोटेड युरिया  (46% N)", color: "bg-blue-100 border-blue-300" },
  { id: "ssp", label: "SSP (Phosphorus)", labelMarathi: "एसएसपी (फॉस्फरस)", color: "bg-green-100 border-green-300" },
  { id: "mop", label: "MOP (Potassium)", labelMarathi: "एमओपी (पोटॅशियम)", color: "bg-yellow-100 border-yellow-300" },
  { id: "sop", label: "SOP (Potassium)", labelMarathi: "एसओपी (पोटॅशियम)", color: "bg-yellow-100 border-yellow-300" },
  { id: "Ammonium_Sulphate", label: "Ammonium Sulphate (Nitrogen)", labelMarathi: "अमोनियम सल्फेट (नायट्रोजन)", color: "bg-yellow-100 border-yellow-300" },
];

const complexFertilizers = [
  { id: "dap", label: "DAP (Phosphorus)", labelMarathi: "डीएपी (फॉस्फरस)", color: "bg-green-100 border-green-300" },
  { id: "npk123216", label: "NPK 12-32-16", labelMarathi: "एनपीके 12-32-16", color: "bg-purple-100 border-purple-300" },
  { id: "npk092424", label: "NPK 9-24-24", labelMarathi: "एनपीके 9-24-24", color: "bg-green-100 border-green-300" },
  { id: "npk082424", label: "NPK 8-24-24", labelMarathi: "एनपीके 8-24-24", color: "bg-yellow-100 border-yellow-300" },
  { id: "npk102626", label: "NPK 10-26-26", labelMarathi: "एनपीके 10-26-26", color: "bg-purple-100 border-purple-300" },
  { id: "npk20200013", label: "NPK 20-20-00-13", labelMarathi: "एनपीके 20-20-00-13", color: "bg-green-100 border-green-300" },
  { id: "npk282800", label: "NPK 28-28-00", labelMarathi: "एनपीके 28-28-00", color: "bg-yellow-100 border-yellow-300" },
  { id: "npk143514", label: "NPK 14-35-14", labelMarathi: "एनपीके 14-35-14", color: "bg-blue-100 border-blue-300" },
];

const soilLevels = {
  nitrogen: [
    { level: 1, range: "0 - 140", recommendation: "Very low - 66% more fertilizer than recommended", recommendationMarathi: "खूप कमी - शिफारस केलेल्यापेक्षा 66% जासत खत" },
    { level: 2, range: "140 - 280", recommendation: "Low - 33% more fertilizer than recommended", recommendationMarathi: "कमी - शिफारस केलेल्यापेक्षा 33% जासत खत" },
    { level: 3, range: "280 - 560", recommendation: "Medium - As recommended", recommendationMarathi: "मध्यम - शिफारसीनुसार" },
    { level: 4, range: "560 - 700", recommendation: "High - 33% less fertilizer than recommended", recommendationMarathi: "जास्त - शिफारस केलेल्यापेक्षा 33% कमी खत" },
    { level: 5, range: "700+", recommendation: "Very high - 66% less fertilizer than recommended", recommendationMarathi: "खूप जास्त - शिफारस केलेल्यापेक्षा 66% कमी खत" }
  ],
  phosphorus: [
    { level: 1, range: "<5", recommendation: "Very low - 66% more fertilizer than recommended", recommendationMarathi: "खूप कमी - शिफारस केलेल्यापेक्षा 66% जासत खत" },
    { level: 2, range: "5 - 10", recommendation: "Low - 33% more fertilizer than recommended", recommendationMarathi: "कमी - शिफारस केलेल्यापेक्षा 33% जासत खत" },
    { level: 3, range: "10 - 25", recommendation: "Medium - As recommended", recommendationMarathi: "मध्यम - शिफारसीनुसार" },
    { level: 4, range: "25 - 40", recommendation: "High - 33% less fertilizer than recommended", recommendationMarathi: "जास्त - शिफारस केलेल्यापेक्षा 33% कमी खत" },
    { level: 5, range: "40+", recommendation: "Very high - 66% less fertilizer than recommended", recommendationMarathi: "खूप जास्त - शिफारस केलेल्यापेक्षा 66% कमी खत" }
  ],
  potassium: [
    { level: 1, range: "<60", recommendation: "Very low - 66% more fertilizer than recommended", recommendationMarathi: "खूप कमी - शिफारस केलेल्यापेक्षा 66% जासत खत" },
    { level: 2, range: "60 - 120", recommendation: "Low - 33% more fertilizer than recommended", recommendationMarathi: "कमी - शिफारस केलेल्यापेक्षा 33% जासत खत" },
    { level: 3, range: "120 - 280", recommendation: "Medium - As recommended", recommendationMarathi: "मध्यम - शिफारसीनुसार" },
    { level: 4, range: "280 - 560", recommendation: "High - 33% less fertilizer than recommended", recommendationMarathi: "जास्त - शिफारस केलेल्यापेक्षा 33% कमी खत" },
    { level: 5, range: "560+", recommendation: "Very high - 66% less fertilizer than recommended", recommendationMarathi: "खूप जास्त - शिफारस केलेल्यापेक्षा 66% कमी खत" }
  ]
};

const translations = {
  en: {
    title: "Smart Fertilizer Calculator",
    subtitle: "Optimize your crop yield with precise fertilizer recommendations based on soil analysis and crop requirements",
    selectCrop: "Select Crop",
    soilType: "Soil Type",
    area: "Area (hectares)",
    useSoilAnalysis: "Use Soil Analysis Results",
    soilAnalysisTitle: "Soil Analysis Results",
    nitrogen: "Nitrogen (kg/ha)",
    phosphorus: "Phosphorus (kg/ha)",
    potassium: "Potassium (kg/ha)",
    soilAnalysisNote: "Enter your soil test results to calculate precise fertilizer requirements.",
    selectFertilizers: "Select Fertilizers",
    straightFertilizers: "Straight Fertilizers",
    complexFertilizers: "Complex Fertilizers",
    nutrientRequirements: "Nutrient Requirements",
    fertilizerRecommendations: "Fertilizer Recommendations",
    macronutrients: "Macronutrients",
    micronutrients: "Micronutrients",
    secondaryMicronutrients: "Secondary Micronutrients",
    printReport: "Print Report",
    lastUpdated: "Last updated",
    nutrient: "Nutrient",
    required: "Required (kg)",
    fertilizer: "Fertilizer",
    normalRange: "Normal Range",
    recommendation: "Recommendation",
    secondaryMicronutrient: "Secondary Micronutrient",
    normalLimits: "Normal Limits",
    farmDetails: "Farm Details",
    crop: "Crop",
    healthySoil: "Healthy Soils for a Healthy Life",
    soilAnalysis: "Soil Analysis",
    yes: "Yes",
    no: "No (Using standard values)",
    soilAnalysisRecommendations: "Soil Analysis Recommendations",
    micronutrientRecommendations: "Micronutrient Recommendations",
    secondaryMicronutrientRecommendations: "Secondary Micronutrient Recommendations",
    generatedBy: "Generated by Fertilizer Calculator on",
    analyst: "Analyst / Lab In charge",
    note: "Note:",
    note1: "The report cannot be used for court purpose.",
    note2: "The results refer only tested samples and applicable.",
    note3: "The liability of our laboratory is limited to the invoice amount.",
    authorizedBy: "Authorised by",
    md: "Managing Director",
    officeAddress: "Office Address",
    labAddress: "Lab Address",
    contactInfo: "Contact No. & Email Id",
    website: "Website",
    ureaNote: " Urea should be applied in three stages: 50% as a basal dose at sowing, 25% as the first top dressing, and 25% as the second top dressing.",
  },
  mr: {
    title: "स्मार्ट खत कॅल्क्युलेटर",
    subtitle: "मातीच्या विश्लेषण आणि पिकाच्या गरजांवर आधारित अचूक खत शिफारसीसह आपल्या पिकाच्या उत्पादनाचे अनुकूलन करा",
    selectCrop: "पिक निवडा",
    soilType: "मातीचा प्रकार",
    area: "क्षेत्रफळ (हेक्टर)",
    useSoilAnalysis: "माती विश्लेषण परिणाम वापरा",
    soilAnalysisTitle: "माती विश्लेषण परिणाम",
    nitrogen: "नायट्रोजन (किलो/हेक्टर)",
    phosphorus: "फॉस्फरस (किलो/हेक्टर)",
    potassium: "पोटॅशियम (किलो/हेक्टर)",
    soilAnalysisNote: "अचूक खताच्या गरजा मोजण्यासाठी आपले माती चाचणी परिणाम प्रविष्ट करा.",
    selectFertilizers: "खते निवडा",
    straightFertilizers: "सरळ खते",
    complexFertilizers: "कॉम्प्लेक्स खते",
    nutrientRequirements: "पोषक आवश्यकता",
    fertilizerRecommendations: "खत शिफारस",
    macronutrients: "मुख्य पोषक तत्वे",
    micronutrients: "सूक्ष्म पोषक तत्वे",
    secondaryMicronutrients: "दुय्यम सूक्ष्म पोषक तत्वे",
    printReport: "अहवाल मुद्रित करा",
    lastUpdated: "शेवटचे अद्यतन",
    nutrient: "पोषक",
    required: "आवश्यक (किलो)",
    fertilizer: "खत",
    normalRange: "सामान्य श्रेणी",
    recommendation: "शिफारस",
    secondaryMicronutrient: "दुय्यम सूक्ष्म पोषक",
    normalLimits: "सामान्य मर्यादा",
    farmDetails: "शेत तपशील",
    crop: "पीक",
    soilAnalysis: "माती विश्लेषण",
    yes: "होय",
    no: "नाही (मानक मूल्ये वापरत आहे)",
    soilAnalysisRecommendations: "माती विश्लेषण शिफारसी",
    micronutrientRecommendations: "सूक्ष्म पोषक शिफारसी",
    secondaryMicronutrientRecommendations: "दुय्यम सूक्ष्म पोषक शिफारसी",
    generatedBy: "खत कॅल्क्युलेटर द्वारे तयार केले",
    analyst: "विश्लेषक / प्रयोगशाळा प्रभारी",
    note: "टीप:",
    note1: "हा अहवाल न्यायालयीन हेतूसाठी वापरला जाऊ शकत नाही.",
    note2: "परिणाम केवळ चाचणी केलेल्या नमुन्यांना संदर्भित करतात आणि लागू आहेत.",
    note3: "आमच्या प्रयोगशाळेची जबाबदारी इनव्हॉइस रकमेपर्यंत मर्यादित आहे.",
    authorizedBy: "अधिकृत केले",
    md: "व्यवस्थापकीय संचालक",
    officeAddress: "कार्यालयाचा पत्ता",
    labAddress: "प्रयोगशाळेचा पत्ता",
    contactInfo: "संपर्क क्रमांक आणि ईमेल आयडी",
    website: "वेबसाइट",
    healthySoil: "निरोगी माती निरोगी जीवनासाठी",
    ureaNote: " युरिया तीन टप्प्यांमध्ये टाकावा: ५०% पेरणीवेळी बेसल डोस म्हणून, २५% पहिला टॉप ड्रेसिंग म्हणून, आणि २५% दुसरा टॉप ड्रेसिंग म्हणून.",
  }
};

const micronutrientsData = {
  en: [
    { nutrient: "Iron", range: "4.50 ppm", recommendation: "Ferrous sulphate 25 to 30 kg/ha" },
    { nutrient: "Manganese", range: "2.00 ppm", recommendation: "Manganese sulphate 10 to 25 kg/ha" },
    { nutrient: "Zinc", range: "0.60 ppm", recommendation: "Zinc Sulphate 25 to 30 kg/ha" },
    { nutrient: "Copper", range: "0.20 ppm", recommendation: "Copper Sulphate 10 to 25 kg/ha" },
    { nutrient: "Boron", range: "0.5 to 1 ppm", recommendation: "Borox 5 to 10 kg/ha" }
  ],
  mr: [
    { nutrient: "लोह", range: "4.50 ppm", recommendation: "फेरस सल्फेट 25 ते 30 किलो/हेक्टर" },
    { nutrient: "मॅंगनीज", range: "2.00 ppm", recommendation: "मॅंगनीज सल्फेट 10 ते 25 किलो/हेक्टर" },
    { nutrient: "जस्त", range: "0.60 ppm", recommendation: "झिंक सल्फेट 25 ते 30 किलो/हेक्टर" },
    { nutrient: "तांबे", range: "0.20 ppm", recommendation: "कॉपर सल्फेट 10 ते 25 किलो/हेक्टर" },
    { nutrient: "बोरॉन", range: "0.5 ते 1 ppm", recommendation: "बोरॉक्स 5 ते 10 किलो/हेक्टर" }
  ]
};

const secondaryMicronutrientsData = {
  en: [
    { nutrient: "Calcium", range: "65 to 80 meq", recommendation: "Gypsum or Calcium Nitrate 50 to 100 kg/ha" },
    { nutrient: "Sulpher", range: "10 to 20 ppm", recommendation: "Sulfur 20 to 40 kg/ha" },
    { nutrient: "Magnesium", range: "10 to 15 meq", recommendation: "Magnesium Sulphate 10 to 20 kg/ha" }
  ],
  mr: [
    { nutrient: "कॅल्शियम", range: "65 ते 80 meq", recommendation: "जिप्सम किंवा कॅल्शियम नायट्रेट 50 ते 100 किलो/हेक्टर" },
    { nutrient: "सल्फर", range: "10 ते 20 ppm", recommendation: "सल्फर 20 ते 40 किलो/हेक्टर" },
    { nutrient: "मॅग्नेशियम", range: "10 ते 15 meq", recommendation: "मॅग्नेशियम सल्फेट 10 ते 20 किलो/हेक्टर" }
  ]
};

const getNutrientLevel = (nutrient, value) => {
  if (nutrient === "nitrogen") {
    if (value < 140) return soilLevels.nitrogen[0];
    if (value <= 280) return soilLevels.nitrogen[1];
    if (value <= 560) return soilLevels.nitrogen[2];
    if (value <= 700) return soilLevels.nitrogen[3];
    return soilLevels.nitrogen[4];
  } else if (nutrient === "phosphorus") {
    if (value < 5) return soilLevels.phosphorus[0];
    if (value <= 10) return soilLevels.phosphorus[1];
    if (value <= 25) return soilLevels.phosphorus[2];
    if (value <= 40) return soilLevels.phosphorus[3];
    return soilLevels.phosphorus[4];
  } else { // potassium
    if (value < 60) return soilLevels.potassium[0];
    if (value <= 120) return soilLevels.potassium[1];
    if (value <= 280) return soilLevels.potassium[2];
    if (value <= 560) return soilLevels.potassium[3];
    return soilLevels.potassium[4];
  }
};

const FertilizerCalculator = () => {
  const [selectedCrop, setSelectedCrop] = useState("onion");
  const [selectedSoil, setSelectedSoil] = useState("Red Soil");
  const [totalArea, setTotalArea] = useState(1);
  const [selectedFertilizers, setSelectedFertilizers] = useState({
    urea: true,
    dap: true,
    mop: true,
    ssp: false,
    sop: false,
    npk123216: false,
    npk082424: false,
    npk092424: false,
    npk102626: false,
    npk20200013: false,
    npk282800: false,
    npk143514: false,
  });

  const [useSoilAnalysis, setUseSoilAnalysis] = useState(false);
  const [soilAnalysis, setSoilAnalysis] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: ""
  });
  const [activeTab, setActiveTab] = useState("macronutrients");
  const [language, setLanguage] = useState("en");

  const t = translations[language];
  const micronutrients = micronutrientsData[language];
  const secondaryMicronutrients = secondaryMicronutrientsData[language];

  // Function to get display name based on language
  const getCropDisplayName = (cropKey) => {
    if (language === 'mr') {
      return cropNamesMarathi[cropKey] || cropKey;
    }
    return cropKey.charAt(0).toUpperCase() + cropKey.slice(1);
  };

  const handleCropChange = (event) => {
    const crop = event.target.value;
    setSelectedCrop(crop);
  };

  const handleSoilChange = (event) => {
    setSelectedSoil(event.target.value);
  };

  const handleAreaChange = (event) => {
    setTotalArea(Number(event.target.value));
  };

  const handleFertilizerChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFertilizers({
      ...selectedFertilizers,
      [name]: checked,
    });
  };

  const handleSoilAnalysisChange = (event) => {
    const { name, value } = event.target;
    setSoilAnalysis({
      ...soilAnalysis,                               
      [name]: value === "" ? "" : Number(value)
    });  
  };

  const toggleSoilAnalysis = () => {
    setUseSoilAnalysis(!useSoilAnalysis);
  };

  const calculateFertilizer = (nutrientRequired, fertilizerContent) => {
    if (selectedFertilizers.npk123216) {
      const results = calculateNPK();
      return results.baseFertilizer;
    }
    return ((nutrientRequired * totalArea * 100) / fertilizerContent).toFixed(2);
  };

  const calculateUreaAndDAP = (nitrogenReq, phosphorusReq) => {
    const dapForP = (phosphorusReq * 100) / fertilizers.dap.p;
    const nitrogenFromDAP = (dapForP * fertilizers.dap.n) / 100;
    const remainingN = nitrogenReq - nitrogenFromDAP;
    const ureaForN = (remainingN * 100) / fertilizers.urea.n;
    return {
      urea: ureaForN.toFixed(2),
      dap: dapForP.toFixed(2),
    };
  };

  const calculateNPK = (type = '123216') => {
    const target_N = npk.nitrogen * totalArea;
    const target_P = npk.phosphorus * totalArea;
    const target_K = npk.potassium * totalArea;

    const npkCompositions = {
      '123216': { n: 12, p: 32, k: 16 },
      '082424': { n: 8, p: 24, k: 24 },
      '092424': { n: 9, p: 24, k: 24 },
      '102626': { n: 10, p: 26, k: 26 },
      '282800': { n: 28, p: 28, k: 0 },
      '143514': { n: 14, p: 35, k: 14 },
      '20200013': { n: 20, p: 20, k: 0, s: 13 },
    };

    const { n: N_percent, p: P_percent, k: K_percent } = npkCompositions[type];
    const baseFertilizer = (target_P * 100) / P_percent;

    const N_from_base = (N_percent / 100) * baseFertilizer;
    const P_from_base = (P_percent / 100) * baseFertilizer;
    const K_from_base = (K_percent / 100) * baseFertilizer;

    const additional_N = Math.max(0, target_N - N_from_base);
    const urea = (additional_N * 100) / fertilizers.urea.n;
    const additional_K = Math.max(0, target_K - K_from_base);
    const mop = (additional_K * 100) / fertilizers.mop.k;
    return {
      baseFertilizer: baseFertilizer.toFixed(2),
      urea: urea.toFixed(2),
      mop: mop.toFixed(2),
      provides: {
        N: N_from_base.toFixed(2),
        P: P_from_base.toFixed(2),
        K: K_from_base.toFixed(2)
      }
    };
  };

  const getRecommendations = () => {
    if (!useSoilAnalysis || !soilAnalysis.nitrogen || !soilAnalysis.phosphorus || !soilAnalysis.potassium) {
      return null;
    }

    const nitrogenLevel = getNutrientLevel("nitrogen", soilAnalysis.nitrogen);
    const phosphorusLevel = getNutrientLevel("phosphorus", soilAnalysis.phosphorus);
    const potassiumLevel = getNutrientLevel("potassium", soilAnalysis.potassium);

    return (
      <div className="mt-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 shadow-sm transition-all duration-300 hover:shadow-md">
        <h3 className="text-lg font-bold text-center text-blue-700 mb-3 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          {t.soilAnalysisRecommendations}
        </h3>
        <div className="mt-2 space-y-4">
          <div className="bg-white p-3 rounded-lg shadow-xs">
            <h4 className="font-semibold text-blue-600 flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              {t.nitrogen.split(" (")[0]}: {soilAnalysis.nitrogen} kg/ha
            </h4>
            <p className="text-sm text-gray-600 mt-1">{language === 'en' ? 'Level' : 'स्तर'} {nitrogenLevel.level} ({nitrogenLevel.range})</p>
            <p className="text-sm font-medium text-blue-800 mt-1">
              {language === 'en' ? nitrogenLevel.recommendation : nitrogenLevel.recommendationMarathi}
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-xs">
            <h4 className="font-semibold text-green-600 flex items-center">
              <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              {t.phosphorus.split(" (")[0]}: {soilAnalysis.phosphorus} kg/ha
            </h4>
            <p className="text-sm text-gray-600 mt-1">{language === 'en' ? 'Level' : 'स्तर'} {phosphorusLevel.level} ({phosphorusLevel.range})</p>
            <p className="text-sm font-medium text-green-800 mt-1">
              {language === 'en' ? phosphorusLevel.recommendation : phosphorusLevel.recommendationMarathi}
            </p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-xs">
            <h4 className="font-semibold text-yellow-600 flex items-center">
              <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              {t.potassium.split(" (")[0]}: {soilAnalysis.potassium} kg/ha
            </h4>
            <p className="text-sm text-gray-600 mt-1">{language === 'en' ? 'Level' : 'स्तर'} {potassiumLevel.level} ({potassiumLevel.range})</p>
            <p className="text-sm font-medium text-yellow-800 mt-1">
              {language === 'en' ? potassiumLevel.recommendation : potassiumLevel.recommendationMarathi}
            </p>
          </div>
        </div>
      </div>
    );
  };

const handlePrint = () => {
    const printWindow = window.open('', '', 'width=1200,height=800');

    const getFertilizerName = (id) => {
      return language === 'en' ? fertilizers[id].name : fertilizers[id].nameMarathi;
    };

    // Separate straight and complex fertilizers
    const straightFertilizers = [];
    const complexFertilizers = [];

    // Handle DAP + Urea combination
    if (selectedFertilizers.dap) {
      const { urea, dap } = calculateUreaAndDAP(npk.nitrogen, npk.phosphorus);
      complexFertilizers.push({
        name: `${getFertilizerName('dap')}`,
        amount: dap,
        supplements: [
          { name: getFertilizerName('urea'), amount: urea }
        ]
      });
    } else if (selectedFertilizers.urea) {
      straightFertilizers.push({
        name: getFertilizerName('urea'),
        amount: calculateFertilizer(npk.nitrogen, fertilizers.urea.n)
      });
    }

    if (selectedFertilizers.ssp) {
      straightFertilizers.push({
        name: getFertilizerName('ssp'),
        amount: calculateFertilizer(npk.phosphorus, fertilizers.ssp.p)
      });
    }

    if (selectedFertilizers.mop) {
      straightFertilizers.push({
        name: getFertilizerName('mop'),
        amount: calculateFertilizer(npk.potassium, fertilizers.mop.k)
      });
    }

    if (selectedFertilizers.sop) {
      straightFertilizers.push({
        name: getFertilizerName('sop'),
        amount: calculateFertilizer(npk.potassium, fertilizers.sop.k)
      });
    }

    if (selectedFertilizers.Ammonium_Sulphate) {
      straightFertilizers.push({
        name: getFertilizerName('Ammonium_Sulphate'),
        amount: calculateFertilizer(npk.nitrogen, fertilizers.Ammonium_Sulphate.n)
      });
    }

    // Complex fertilizers
    if (selectedFertilizers.npk123216) {
      const npkData = calculateNPK('123216');
      complexFertilizers.push({
        name: getFertilizerName('npk123216'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk082424) {
      const npkData = calculateNPK('082424');
      complexFertilizers.push({
        name: getFertilizerName('npk082424'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk092424) {
      const npkData = calculateNPK('092424');
      complexFertilizers.push({
        name: getFertilizerName('npk092424'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk102626) {
      const npkData = calculateNPK('102626');
      complexFertilizers.push({
        name: getFertilizerName('npk102626'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk282800) {
      const npkData = calculateNPK('282800');
      complexFertilizers.push({
        name: getFertilizerName('npk282800'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk143514) {
      const npkData = calculateNPK('143514');
      complexFertilizers.push({
        name: getFertilizerName('npk143514'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    if (selectedFertilizers.npk20200013) {
      const npkData = calculateNPK('20200013');
      complexFertilizers.push({
        name: getFertilizerName('npk20200013'),
        amount: npkData.baseFertilizer,
        supplements: [
          { name: getFertilizerName('urea'), amount: npkData.urea },
          { name: getFertilizerName('mop'), amount: npkData.mop }
        ]
      });
    }

    const isMarathi = language === "mr";

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${language === 'en' ? 'Fertilizer Recommendation Report' : 'खत शिफारस अहवाल'}</title>
          <style>
            @page {
              size: A4;
              margin: 0.7cm;
            }
            body {
              font-family: Arial, sans-serif;
              font-size: 11px;
              margin: 0;
              padding: 0;
              position: relative;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              line-height: 1.3;
            }
            .print-container {
              width: 100%;
              padding: 8px;
            }
            .print-section {
              margin-bottom: 12px;
            }
            /* Improved page break handling */
            .page-break-before {
              page-break-before: always;
            }
            .page-break-after {
              page-break-after: always;
            }
            .avoid-break {
              page-break-inside: avoid;
            }
            .allow-break {
              page-break-inside: auto;
            }
            .print-section h3 {
              background-color: #3498db !important;
              color: white !important;
              padding: 5px 8px;
              font-size: 12px;
              margin: 0 0 6px 0;
              border-radius: 3px;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              page-break-after: avoid;
            }
            .print-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 8px;
              font-size: 10px;
              page-break-inside: auto;
            }
            .print-table th, .print-table td {
              border: 1px solid #ddd;
              padding: 4px;
              text-align: left;
            }
            .print-table th {
              background-color: #3d61cf !important;
              color: white !important;
              font-weight: bold;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              font-size: 10px;
            }
            .print-footer {
              text-align: center;
              margin-top: 12px;
              font-style: italic;
              color: #7f8c8d;
              font-size: 10px;
              page-break-before: avoid;
            }
            .two-columns {
              display: flex;
              gap: 12px;
              page-break-inside: avoid;
            }
            .column {
              flex: 1;
            }
            .compact-address-container {
              font-family: Arial, sans-serif;
              width: 100%;
              padding: 5px 0;
              border-top: 1px solid #000;
              border-bottom: 1px solid #000;
              margin: 10px 0;
              page-break-inside: avoid;
              font-size: 9px;
            }
            .address-row {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              flex-wrap: nowrap;
            }
            .address-block {
              flex: 1;
              min-width: 130px;
            }
            .address-header {
              display: flex;
              align-items: center;
              margin-bottom: 2px;
            }
            .address-icon {
              width: 10px;
              height: 10px;
              margin-right: 3px;
              flex-shrink: 0;
            }
            .address-title {
              font-size: 9px;
              font-weight: bold;
              margin: 0;
              color: #000;
            }
            .address-text {
              font-size: 8px;
              margin: 0;
              line-height: 1.3;
            }
            .separator {
              color: #999;
              font-size: 9px;
              align-self: center;
              padding: 0 3px;
            }
            .contact-line {
              display: flex;
              align-items: center;
              margin-bottom: 1px;
            }
            .mini-icon {
              width: 7px;
              height: 7px;
              margin-right: 2px;
              flex-shrink: 0;
            }
            .header-container {
              display: flex;
              justify-content: space-between;
              margin: 12px 0;
              page-break-inside: avoid;
              page-break-before: avoid;
            }
            .lab-header-container {
              text-align: left;
              flex: 1;
            }
            .lab-header h2 {
              font-size: 0.75rem;
              color: #000;
              margin-top: 25px;
              margin-bottom: 8px;
              font-weight: bold;
            }
            .lab-notes {
              font-size: 0.7rem;
              color: #333;
              margin-top: 6px;
            }
            .note-title {
              font-weight: bold;
              margin-bottom: 3px;
            }
            .note-items {
              list-style-type: none;
              padding-left: 0;
              margin-top: 0;
              margin-bottom: 0;
              font-size: 0.65rem;
            }
            .note-items li {
              position: relative;
              padding-left: 10px;
              margin-bottom: 2px;
              line-height: 1.3;
            }
            .note-items li:before {
              content: "-";
              position: absolute;
              left: 0;
            }
            .authorization-container {
              text-align: center;
              flex: 1;
            }
            .authorization-text {
              display: inline-block;
              text-align: left;
              font-size: 0.75rem;
              color: #000;
              margin-top: 25px;
              margin-bottom: 8px;
            }
            .top-slogan-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0 18px;
              padding: 0 12px;
              page-break-inside: avoid;
              page-break-before: avoid;
            }
            .slogan-text {
              flex: 1;
              text-align: left;
            }
            .main-slogan {
              font-size: 12px;
              font-weight: bold;
              color: #000;
            }
            .logo-icon {
              height: 45px;
              object-fit: contain;
            }
            .logo-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              page-break-inside: avoid;
              page-break-before: avoid;
              margin-bottom: 6px;
            }
            .report-title {
              font-size: 17px;
              font-weight: bold;
              margin-bottom: 6px;
            }
            .report-subtitle {
              font-size: 11px;
              margin-bottom: 12px;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .marathi-text {
              line-height: 1.3;
            }
            .compact-recommendations {
              font-size: 10px;
              line-height: 1.3;
            }
            .fertilizer-type-title {
              font-size: 11px;
              font-weight: bold;
              margin: 12px 0 6px;
              color: #2c3e50;
              padding-left: 4px;
              border-left: 3px solid #3498db;
              page-break-after: avoid;
            }
            .supplement-row {
              background-color: #f8f9fa;
            }
            .supplement-cell {
              padding-left: 20px !important;
              font-style: italic;
            }
            .soil-results {
              max-height: none;
              overflow: visible;
              page-break-inside: auto;
            }
            .urea-note-container {
              width: 100%;
              padding: 0.6rem;
              background-color: white;
              border-radius: 0.6rem;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              border: 1px solid #E5E7EB;
              margin: 12px 0;
              font-size: 10px;
              page-break-inside: avoid;
            }
            
            /* Smart content grouping for page breaks */
            .content-group {
              page-break-inside: avoid;
            }
            .main-content {
              page-break-inside: auto;
            }
            
            /* Print-specific optimizations */
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              
              /* Allow tables to break across pages naturally */
              table {
                page-break-inside: auto;
              }
              tr {
                page-break-inside: avoid;
                page-break-after: auto;
              }
              thead {
                display: table-header-group;
              }
              tfoot {
                display: table-footer-group;
              }
              
              /* Let browser handle section breaks naturally */
              .print-section {
                page-break-inside: auto;
                page-break-after: auto;
              }
              
              /* Prevent small sections from being orphaned */
              h3, h4 {
                page-break-after: avoid;
              }
              
              /* Ensure footer stays together */
              .print-footer {
                page-break-before: avoid;
              }
              
              /* Better page break control */
              .keep-together {
                page-break-inside: avoid;
              }
              .break-before {
                page-break-before: always;
              }
              .break-after {
                page-break-after: always;
              }
            }
          </style>
        </head>
        <body class="${isMarathi ? 'marathi-text' : ''}">
          <div class="print-container">
            <!-- Header with Logos -->
            <div class="logo-container">
              <div>
                <img src="logo_com.png" alt="Left Logo" style="height: 90px;" />
              </div>
              <div style="display: flex; gap: 10px;">
                <img src="startup.png" alt="Right Logo 2" style="height: 80px;" />
                <img src="msme.png" alt="Right Logo 2" style="height: 46px;" />
              </div>
            </div>

            <hr style="width: 100%; margin-top:3px; border: 1px solid #3498db;">

            <div style="margin-top:0px;">
              <div style="margin-top:1px;">
                <div style="text-align: center; margin-top: 0px;">
                  <div class="report-title">${language === 'en' ? '🌱 Fertilizer Recommendation Report' : '🌱 खत शिफारस अहवाल'}</div>
                  <div class="report-subtitle">${new Date().toLocaleDateString()}</div>
                </div> 
              </div>
              
              <!-- Farm Details Section -->
              <div class="print-section avoid-break">
                <h3>${t.farmDetails}</h3>
                <div class="two-columns">
                  <div class="column">
                    <table class="print-table">
                      <tbody>
                        <tr>
                          <td width="40%"><strong>${t.crop}</strong></td>
                          <td width="60%">${language === 'en' ? selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1) : cropNamesMarathi[selectedCrop] || selectedCrop}</td>
                        </tr>
                        <tr>
                          <td><strong>${t.soilType}</strong></td>
                          <td>${language === 'en' ? selectedSoil : soilTypesMarathi[soilTypes.indexOf(selectedSoil)]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="column">
                    <table class="print-table">
                      <tbody>
                        <tr>
                          <td width="40%"><strong>${t.area.split(" (")[0]}</strong></td>
                          <td width="60%">${totalArea} ${language === 'en' ? 'hectares' : 'हेक्टर'}</td>
                        </tr>
                        <tr>
                          <td><strong>${t.soilAnalysis}</strong></td>
                          <td>${useSoilAnalysis ? t.yes : t.no}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <!-- Soil Analysis Results -->
              ${useSoilAnalysis ? `
              <div class="print-section allow-break">
                <h3>${t.soilAnalysisTitle}</h3>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.nutrient}</th>
                      <th>${t.required}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${t.nitrogen.split(" (")[0]} (N)</td>
                      <td>${soilAnalysis.nitrogen} kg/ha</td>
                    </tr>
                    <tr>
                      <td>${t.phosphorus.split(" (")[0]} (P₂O₅)</td>
                      <td>${soilAnalysis.phosphorus} kg/ha</td>
                    </tr>
                    <tr>
                      <td>${t.potassium.split(" (")[0]} (K₂O)</td>
                      <td>${soilAnalysis.potassium} kg/ha</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              ` : ''}

              <!-- Nutrient Requirements -->
              <div class="print-section allow-break">
                <h3>${t.nutrientRequirements}</h3>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.nutrient}</th>
                      <th>${t.required}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${t.nitrogen.split(" (")[0]} (N)</td>
                      <td>${(npk.nitrogen * totalArea).toFixed(2)} kg</td>
                    </tr>
                    <tr>
                      <td>${t.phosphorus.split(" (")[0]} (P₂O₅)</td>
                      <td>${(npk.phosphorus * totalArea).toFixed(2)} kg</td>
                    </tr>
                    <tr>
                      <td>${t.potassium.split(" (")[0]} (K₂O)</td>
                      <td>${(npk.potassium * totalArea).toFixed(2)} kg</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Fertilizer Recommendations -->
              <div class="print-section allow-break">
                <h3>${t.fertilizerRecommendations}</h3>
                
                ${straightFertilizers.length > 0 ? `
                <div class="fertilizer-type-title">${language === 'en' ? 'Straight Fertilizers' : 'सरळ खते'}</div>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.fertilizer}</th>
                      <th>${t.required} (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${straightFertilizers.map(fertilizer => `
                    <tr>
                      <td>${fertilizer.name}</td>
                      <td>${fertilizer.amount}</td>
                    </tr>
                    `).join('')}
                  </tbody>
                </table>
                ` : ''}
                
                ${complexFertilizers.length > 0 ? `
                <div class="fertilizer-type-title">${language === 'en' ? 'Complex Fertilizers' : 'कॉम्प्लेक्स खते'}</div>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.fertilizer}</th>
                      <th>${t.required} (kg)</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${complexFertilizers.map(fertilizer => `
                    <tr>
                      <td><strong>${fertilizer.name}</strong></td>
                      <td><strong>${fertilizer.amount}</strong></td>
                    </tr>
                    ${fertilizer.supplements.map(supplement => `
                    <tr class="supplement-row">
                      <td class="supplement-cell">+ ${supplement.name}</td>
                      <td>${supplement.amount}</td>
                    </tr>
                    `).join('')}
                    `).join('')}
                  </tbody>
                </table>
                ` : ''}
              </div>

              <!-- Soil Analysis Recommendations -->
              ${useSoilAnalysis && soilAnalysis.nitrogen && soilAnalysis.phosphorus && soilAnalysis.potassium ? `
              <div class="print-section allow-break">
                <h3>${t.soilAnalysisRecommendations}</h3>
                <div style="margin-bottom: 8px; font-size: 10px;">
                  <strong>${t.nitrogen.split(" (")[0]}: ${soilAnalysis.nitrogen} kg/ha</strong><br>
                  ${language === 'en' ? 'Level' : 'स्तर'} ${getNutrientLevel("nitrogen", soilAnalysis.nitrogen).level} (${getNutrientLevel("nitrogen", soilAnalysis.nitrogen).range})<br>
                  ${language === 'en' ? getNutrientLevel("nitrogen", soilAnalysis.nitrogen).recommendation : getNutrientLevel("nitrogen", soilAnalysis.nitrogen).recommendationMarathi}
                </div>
                <div style="margin-bottom:8px; font-size: 10px;">
                  <strong>${t.phosphorus.split(" (")[0]}: ${soilAnalysis.phosphorus} kg/ha</strong><br>
                  ${language === 'en' ? 'Level' : 'स्तर'} ${getNutrientLevel("phosphorus", soilAnalysis.phosphorus).level} (${getNutrientLevel("phosphorus", soilAnalysis.phosphorus).range})<br>
                  ${language === 'en' ? getNutrientLevel("phosphorus", soilAnalysis.phosphorus).recommendation : getNutrientLevel("phosphorus", soilAnalysis.phosphorus).recommendationMarathi}
                </div>
                <div style="margin-bottom: 8px; font-size: 10px;">
                  <strong>${t.potassium.split(" (")[0]}: ${soilAnalysis.potassium} kg/ha</strong><br>
                  ${language === 'en' ? 'Level' : 'स्तर'} ${getNutrientLevel("potassium", soilAnalysis.potassium).level} (${getNutrientLevel("potassium", soilAnalysis.potassium).range})<br>
                  ${language === 'en' ? getNutrientLevel("potassium", soilAnalysis.potassium).recommendation : getNutrientLevel("potassium", soilAnalysis.potassium).recommendationMarathi}
                </div>
              </div>
              ` : ''}

              <!-- Urea Note -->
              <div class="urea-note-container avoid-break">
                <div style="display: flex; align-items: flex-start; gap: 0.4rem;">
                  <span style="color: #EF4444; font-size: 0.9rem;">📌</span>
                  <p style="color: #374151; margin: 0; font-size: 10px;">
                    <span style="color: #1D4ED8; font-weight: 600;">
                      <strong> ${language === "en" ? "Note:" : "टीप:"} </strong>
                    </span> 
                    ${translations[language].ureaNote}
                  </p>
                </div>
              </div>

              <hr style="margin: 15px 0; border: 1px solid #000;">

              <!-- REMOVED THE FORCED PAGE BREAK - Let browser handle it naturally -->

              <!-- Secondary Micronutrients -->
              <div class="print-section allow-break">
                <h3>${t.secondaryMicronutrientRecommendations}</h3>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.secondaryMicronutrient}</th>
                      <th>${t.normalLimits}</th>
                      <th>${t.recommendation}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${secondaryMicronutrients.map(item => `
                    <tr>
                      <td>${item.nutrient}</td>
                      <td>${item.range}</td>
                      <td>${item.recommendation}</td>
                    </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
              
              <!-- Micronutrients -->
              <div class="print-section allow-break">
                <h3>${t.micronutrientRecommendations}</h3>
                <table class="print-table">
                  <thead>
                    <tr>
                      <th>${t.nutrient}</th>
                      <th>${t.normalRange}</th>
                      <th>${t.recommendation}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${micronutrients.map(item => `
                    <tr>
                      <td>${item.nutrient}</td>
                      <td>${item.range}</td>
                      <td>${item.recommendation}</td>
                    </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
              
              <div class="print-footer avoid-break">
                <p>${t.generatedBy} ${new Date().toLocaleString()}</p>
                <p>${t.healthySoil}</p>
              </div>
            </div>

            <!-- Footer Section -->
            <div class="header-container avoid-break">
              <div class="lab-header-container">
                <div class="lab-header">
                  <h2>${t.analyst}</h2>
                  <div class="lab-notes">
                    <p class="note-title">${t.note}</p>
                    <ul class="note-items">
                      ${language === "en" ? `
                        <li>The report cannot be used for court purpose.</li>
                        <li>The results refer only tested samples and applicable.</li>
                        <li>The liability of our laboratory is limited to the invoice amount.</li>
                      ` : `
                        <li>हा अहवाल न्यायालयीन हेतूसाठी वापरला जाऊ शकत नाही.</li>
                        <li>निकाल केवळ चाचणी केलेल्या नमुन्यांना संदर्भित करतात आणि लागू आहेत.</li>
                        <li>आमच्या प्रयोगशाटेची जबाबदारी चलनवाढीच्या रकमेपर्यंत मर्यादित आहे.</li>
                      `}
                    </ul>
                  </div>
                </div>
              </div>

              <div class="authorization-container">
                <div class="signature-image">
                  <img src="signature.png" alt="Digital Signature" style="height: 65px;" />
                </div>
                <div class="authorization-text">
                  ${t.authorizedBy}<br>
                  <strong>${language === 'en' ? 'Mr. Yogesh Nikam' : 'श्री. योगेश निकम'}<br></strong>
                  <strong>${t.md}</strong>
                </div>
              </div>
            </div>

            <div class="top-slogan-header avoid-break">
              <div class="slogan-text">
                <div class="main-slogan">${t.healthySoil}</div>
              </div>
              <div class="center-icon">
                <img src="${window.location.origin}/mati.png" alt="Mati Icon" class="logo-icon" />
              </div>
              <div class="right-icon">
                <img src="${window.location.origin}/Soil.png" alt="Bharat Icon" class="logo-icon" />
              </div>
            </div>

            <div class="compact-address-container avoid-break">
              <div class="address-row">
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <h4 class="address-title">${t.officeAddress}</h4>
                  </div>
                  <p class="address-text">CIII Center for Invention,Innovation,Incubatiopn,3rd Floor,G-buliding YCIS,Powai Naka,Satara</p>
                </div>
                
                <div class="separator">|</div>
                
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <h4 class="address-title">${t.labAddress}</h4>
                  </div>
                  <p class="address-text">B-3 Dipali Complex, Near Karad Urban Bank, Dahiwadi Rd., Pusegaon. Tal- Khatav, Dist- Satara. MH. 415 502</p>
                </div>
                
                <div class="separator">|</div>
                
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <h4 class="address-title">${t.contactInfo}</h4>
                  </div>
                  <p class="address-text">
                    <span class="contact-line">
                      <svg class="mini-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      +91 93225-26581
                    </span>
                    <span class="contact-line">
                      <svg class="mini-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      satarabiochem@gmail.com
                    </span>
                  </p>
                </div>
                
                <div class="separator">|</div>
                
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    <h4 class="address-title">${t.website}</h4>
                  </div>
                  <p class="address-text">www.satarabiochem.in</p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 1000);
  };




  const npk = selectedCrop ? cropData[selectedCrop] : { nitrogen: 0, phosphorus: 0, potassium: 0 };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8 ml-30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center">
            <h1 className="text-3xl mt-10 font-bold text-green-800 mb-2">
              <span className="mr-2">🌱</span>
              {t.title}
            </h1>
            <div className="ml-10 mt-15">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
              >
                <option value="en">English</option>
                <option value="mr">मराठी</option>
              </select>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {/* Form Section */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Crop Selection */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    {t.selectCrop}
                  </span>
                </label>
                <select
                  value={selectedCrop}
                  onChange={handleCropChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                >
                  {Object.keys(cropData).map((crop) => (
                    <option key={crop} value={crop}>
                      {getCropDisplayName(crop)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Soil Type */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.soilType}
                  </span>
                </label>
                <select
                  value={selectedSoil}
                  onChange={handleSoilChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                >
                  {soilTypes.map((soil, index) => (
                    <option key={soil} value={soil}>
                      {language === 'en' ? soil : soilTypesMarathi[index]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Area Input */}
              <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    {t.area}
                  </span>
                </label>
                <input
                  type="number"
                  value={totalArea || ''}
                  onChange={(e) => {
                    const value = parseFloat(e.target.value);
                    setTotalArea(isNaN(value) ? 0 : value);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                  min="0.1"
                  step="0.1"
                  placeholder={language === 'en' ? "Enter area" : "क्षेत्रफळ प्रविष्ट करा"}
                />
              </div>

              {/* Soil Analysis Toggle */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="useSoilAnalysis"
                  checked={useSoilAnalysis}
                  onChange={toggleSoilAnalysis}
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded transition duration-150"
                />
                <label htmlFor="useSoilAnalysis" className="text-sm font-medium text-gray-700">
                  <span className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {t.useSoilAnalysis}
                  </span>
                </label>
              </div>
            </div>

            {/* Soil Analysis Inputs */}
            {useSoilAnalysis && (
              <div className="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 p-4 rounded-lg border border-yellow-200 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="text-lg font-semibold text-center text-yellow-700 mb-3 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t.soilAnalysisTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t.nitrogen}</label>
                    <input
                      type="number"
                      name="nitrogen"
                      value={soilAnalysis.nitrogen}
                      onChange={handleSoilAnalysisChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                      placeholder={language === 'en' ? "N value" : "N मूल्य"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t.phosphorus}</label>
                    <input
                      type="number"
                      name="phosphorus"
                      value={soilAnalysis.phosphorus}
                      onChange={handleSoilAnalysisChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                      placeholder={language === 'en' ? "P value" : "P मूल्य"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">{t.potassium}</label>
                    <input
                      type="number"
                      name="potassium"
                      value={soilAnalysis.potassium}
                      onChange={handleSoilAnalysisChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-150"
                      placeholder={language === 'en' ? "K value" : "K मूल्य"}
                    />
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  {t.soilAnalysisNote}
                </p>
              </div>
            )}

            {/* Recommendations */}
            {useSoilAnalysis && soilAnalysis.nitrogen && soilAnalysis.phosphorus && soilAnalysis.potassium && (
              getRecommendations()
            )}
          </div>

          {/* Fertilizer Selection */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              {t.selectFertilizers}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Straight Fertilizers */}
              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-2">{t.straightFertilizers}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {straightFertilizers.map((fertilizer) => (
                    <div
                      key={fertilizer.id}
                      className={`flex items-center p-2 rounded-md border ${fertilizer.color} transition-all duration-200 
                            ${selectedFertilizers[fertilizer.id] ? 'ring-2 ring-offset-1 ring-green-500' : ''}`}
                    >
                      <input
                        type="checkbox"
                        id={fertilizer.id}
                        name={fertilizer.id}
                        checked={selectedFertilizers[fertilizer.id]}
                        onChange={handleFertilizerChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={fertilizer.id} className="ml-2 text-sm font-medium text-gray-700">
                        {language === 'en' ? fertilizer.label : fertilizer.labelMarathi}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complex Fertilizers */}
              <div>
                <h4 className="text-md font-semibold text-gray-700 mb-2">{t.complexFertilizers}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {complexFertilizers.map((fertilizer) => (
                    <div
                      key={fertilizer.id}
                      className={`flex items-center p-2 rounded-md border ${fertilizer.color} transition-all duration-200 
                            ${selectedFertilizers[fertilizer.id] ? 'ring-2 ring-offset-1 ring-green-500' : ''}`}
                    >
                      <input
                        type="checkbox"
                        id={fertilizer.id}
                        name={fertilizer.id}
                        checked={selectedFertilizers[fertilizer.id]}
                        onChange={handleFertilizerChange}
                        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                      />
                      <label htmlFor={fertilizer.id} className="ml-2 text-sm font-medium text-gray-700">
                        {language === 'en' ? fertilizer.label : fertilizer.labelMarathi}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex border-b border-gray-200 mb-4">
              <button
                className={`py-2 px-4 font-medium ${activeTab === 'macronutrients'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('macronutrients')}
              >
                {t.macronutrients}
              </button>

              <button
                className={`py-2 px-4 font-medium ${activeTab === 'Secondary micronutrients'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('Secondary micronutrients')}
              >
                {t.secondaryMicronutrients}
              </button>

              <button
                className={`py-2 px-4 font-medium ${activeTab === 'micronutrients'
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-500 hover:text-gray-700'
                  }`}
                onClick={() => setActiveTab('micronutrients')}
              >
                {t.micronutrients}
              </button>

            </div>

            {activeTab === 'macronutrients' ? (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    {t.nutrientRequirements}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t.nutrient}
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t.required}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                            {t.nitrogen.split(" (")[0]} (N)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {(npk.nitrogen * totalArea).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                            {t.phosphorus.split(" (")[0]} (P₂O₅)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {(npk.phosphorus * totalArea).toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                            {t.potassium.split(" (")[0]} (K₂O)
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {(npk.potassium * totalArea).toFixed(2)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                    {t.fertilizerRecommendations}
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-100">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t.fertilizer}
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {t.required}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {selectedFertilizers.dap ? (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateUreaAndDAP(npk.nitrogen, npk.phosphorus).urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                                {language === 'en' ? fertilizers.dap.name : fertilizers.dap.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateUreaAndDAP(npk.nitrogen, npk.phosphorus).dap}
                              </td>
                            </tr>
                          </>
                        ) : (
                          selectedFertilizers.urea && (
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateFertilizer(npk.nitrogen, fertilizers.urea.n)}
                              </td>
                            </tr>
                          )
                        )}
                        {selectedFertilizers.ssp && (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                              {language === 'en' ? fertilizers.ssp.name : fertilizers.ssp.nameMarathi}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {calculateFertilizer(npk.phosphorus, fertilizers.ssp.p)}
                            </td>
                          </tr>
                        )}
                        {selectedFertilizers.mop && (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                              {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {calculateFertilizer(npk.potassium, fertilizers.mop.k)}
                            </td>
                          </tr>
                        )}
                        {selectedFertilizers.sop && (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                              {language === 'en' ? fertilizers.sop.name : fertilizers.sop.nameMarathi}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {calculateFertilizer(npk.potassium, fertilizers.sop.k)}
                            </td>
                          </tr>
                        )}
                        {selectedFertilizers.Ammonium_Sulphate && (
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                              {language === 'en' ? fertilizers.Ammonium_Sulphate.name : fertilizers.Ammonium_Sulphate.nameMarathi}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {calculateFertilizer(npk.nitrogen, fertilizers.Ammonium_Sulphate.n)}
                            </td>
                          </tr>
                        )}

                        {selectedFertilizers.npk123216 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk123216.name : fertilizers.npk123216.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('123216').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('123216').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('123216').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk082424 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk082424.name : fertilizers.npk082424.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('082424').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('082424').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('082424').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk092424 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk092424.name : fertilizers.npk092424.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('092424').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('092424').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('092424').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk102626 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk102626.name : fertilizers.npk102626.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('102626').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('102626').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('102626').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk282800 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk282800.name : fertilizers.npk282800.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('282800').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('282800').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('282800').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk143514 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk143514.name : fertilizers.npk143514.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('143514').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('143514').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('143514').mop}
                              </td>
                            </tr>
                          </>
                        )}
                        {selectedFertilizers.npk20200013 && (
                          <>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-600">
                                {language === 'en' ? fertilizers.npk20200013.name : fertilizers.npk20200013.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('20200013').baseFertilizer}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                                {language === 'en' ? fertilizers.urea.name : fertilizers.urea.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('20200013').urea}
                              </td>
                            </tr>
                            <tr>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-600">
                                {language === 'en' ? fertilizers.mop.name : fertilizers.mop.nameMarathi}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {calculateNPK('20200013').mop}
                              </td>
                            </tr>
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            ) : activeTab === 'Secondary micronutrients' ? (
              <div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t.secondaryMicronutrientRecommendations}
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.secondaryMicronutrient}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.normalLimits}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.recommendation}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {secondaryMicronutrients.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.nutrient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.range}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.recommendation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-center text-gray-800 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  {t.micronutrientRecommendations}
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.nutrient}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.normalRange}
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t.recommendation}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {micronutrients.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.nutrient}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.range}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {item.recommendation}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          <div className="w-full p-4 bg-white rounded-2xl shadow-md border border-gray-200">
            <div className="flex items-start space-x-2">
              <span className="text-red-500 text-lg">📌</span>
              <p className="text-gray-800 text-sm">
                <span className="text-blue-700 font-semibold">
                  {language === "en" ? "Note:" : "टीप:"}
                </span>{" "}
                {translations[language].ureaNote}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-between">
            <button
              onClick={handlePrint}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              {t.printReport}
            </button>
            <div className="text-sm text-gray-500 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t.lastUpdated}: {new Date().toLocaleString()}
            </div>
          </div>
          <div className="flex items-center ml-10 justify-between mt-4 sm:mt-6 space-x-4">
            <p className="text-sm sm:text-lg font-semibold">{t.healthySoil}</p>

            <img
              src="/mati.png"
              alt="Soil Icon"
              className="w-16 mr-5 mb-5 sm:w-20 h-16 sm:h-20"
            />

            <img
              src="/Soil.png"
              alt="Soil Icon"
              className="w-16 mr-5 sm:w-20 h-16 sm:h-20"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FertilizerCalculator;