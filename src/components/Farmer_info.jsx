import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import html2canvas from "html2canvas";

const SoilReport = () => {
  const navigate = useNavigate();
  const chartRef = useRef(null);
  const [language, setLanguage] = useState("english"); // 'english' or 'marathi'
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  // Translations
  const translations = {
    english: {
      title: "🌿 Soil Test Report",
      farmerInfo: "👩‍🌾 Farmer Information",
      submit: "✅ Submit",
      soilData: "📝 Enter Soil Data",
      generateReport: "📊 Generate Report",
      graphTitle: "📊 Graphical Representation",
      recommendations: "General Fertilizer Recommendations",
      print: "🖨 Print Report",
      healthySoil: "Healthy Soils for a Healthy Life",
      language: "Language",
      soilHealthIndex: "Soil Health Index",
      soilHealthStatus: "Soil Health Status",
      soilHealthScore: "Overall Soil Health Score",
      formLabels: {
        FarmerName: "Farmer Name",
        Aadhaar: "Aadhaar Number",
        MobileNo: "Mobile Number",
        Village: "Village",
        District: "District",
        Taluka: "Taluka",
        SoilType: "Soil Type",
        SoilSample: " Sample No.",
        SampleDate: "Sample Date",
        ReportDate: "Report Date",
        TotalArea: "Total Area",
        SurveyNumber: "Survey Number",
        Pincode: "Pincode"
      },
      errors: {
        required: "is required",
        aadhaar: "Aadhaar must be 12 digits",
        mobile: "Mobile Number must be 10 digits",
        pincode: "Pincode must be 6 digits",
        number: "must be a number"
      },
      soilTable: {
        nutrient: "Nutrient",
        unit: "Unit",
        min: "Min",
        max: "Max",
        value: "Value",
        status: "Status",
        recommendation: "Recommendation"
      },
      status: {
        notEntered: "❔ Not Entered",
        low: "⬇ Low",
        high: "⬆ High",
        optimal: " Medium"
      },
      printLabels: {
        page1Title: "🌱 Soil Test Report",
        farmerInfo: "Farmer Information",
        soilResults: "Soil Test Results",
        page1Footer: "Page 1 of 2",
        page2Title: "🌱 Soil Test Analysis",
        nutrientVisualization: "Nutrient Levels Visualization",
        lowDeficient: "Low (Deficient)",
        optimal: "Medium",
        highExcess: "High (Excess)",
        fertilizerRecommendations: "Fertilizer Recommendations",
        organicFertilizer: "Organic Fertilizer:",
        bioFertilizer: "Bio-Fertilizer:",
        limeGypsum: "Lime/Gypsum:",
        micronutrients: "Micronutrients:",
        additionalNotes: "Additional Notes",
        generatedOn: "Generated on:",
        page2Footer: "Page 2 of 2",
        analystLabInCharge: "Analyst / Lab In charge",
        note: "Note:",
        authorisedBy: "Authorised by",
        managingDirector: "Managing Director",
        officeAddress: "Office Address",
        labAddress: "Lab Address",
        contactEmail: "Contact No. & Email Id",
        website: "Website",
        soilHealthIndex: "Soil Health Index",
        soilHealthStatus: "Soil Health Status"
      }
    },
    marathi: {
      title: "🌿 मातीच्या चाचणीचा अहवाल",
      farmerInfo: "👩‍🌾 शेतकऱ्याची माहिती",
      submit: "✅ सबमिट करा",
      soilData: "📝 मातीची माहिती टाका",
      generateReport: "📊 अहवाल तयार करा",
      graphTitle: "📊 आलेखीय प्रतिनिधित्व",
      recommendations: "सामान्य खत शिफारस",
      print: "🖨 अहवाल प्रिंट करा",
      healthySoil: "निरोगी माती निरोगी जीवनासाठी",
      language: "भाषा",
      soilHealthIndex: "माती आरोग्य निर्देशांक",
      soilHealthStatus: "माती आरोग्य स्थिती",
      soilHealthScore: "एकूण माती आरोग्य गुण",
      formLabels: {
        FarmerName: "शेतकऱ्याचे नाव",
        Aadhaar: "आधार क्रमांक",
        MobileNo: "मोबाईल क्रमांक",
        Village: "गाव",
        District: "जिल्हा",
        Taluka: "तालुका",
        SoilType: "मातीचा प्रकार",
        SoilSample: " नमुना नंबर.  ",
        SampleDate: "नमुन्याची तारीख",
        ReportDate: "अहवालाची तारीख",
        TotalArea: "एकूण क्षेत्र",
        SurveyNumber: "सर्वेक्षण क्रमांक",
        Pincode: "पिनकोड"
      },
      errors: {
        required: "आवश्यक आहे",
        aadhaar: "आधार क्रमांक १२ अंकी असावा",
        mobile: "मोबाईल क्रमांक १० अंकी असावा",
        pincode: "पिनकोड ६ अंकी असावा",
        number: "संख्या असावी"
      },
      soilTable: {
        nutrient: "पोषक तत्व",
        unit: "एकक",
        min: "किमान",
        max: "कमाल",
        value: "मूल्य",
        status: "स्थिती",
        recommendation: "शिफारस"
      },
      status: {
        notEntered: "❔ प्रविष्ट केले नाही",
        low: "⬇ कमी",
        high: "⬆ जास्त",
        optimal: " मध्यम"
      },
      printLabels: {
        page1Title: "🌱 माती चाचणी अहवाल",
        farmerInfo: "शेतकऱ्याची माहिती",
        soilResults: "माती चाचणी निकाल",
        page1Footer: "पृष्ठ १ पैकी २",
        page2Title: "🌱 माती चाचणी विश्लेषण",
        nutrientVisualization: "पोषक तत्व स्तर दृश्य",
        lowDeficient: "कमी (उणीव)",
        optimal: "मध्यम",
        highExcess: "जास्त (अतिरिक्त)",
        fertilizerRecommendations: "खत शिफारस",
        organicFertilizer: "सेंद्रिय खत:",
        bioFertilizer: "जैविक खत:",
        limeGypsum: "चुना/जिप्सम:",
        micronutrients: "सूक्ष्म पोषक तत्व:",
        additionalNotes: "अतिरिक्त टिपा",
        generatedOn: "तयार केले:",
        page2Footer: "पृष्ठ २ पैकी २",
        analystLabInCharge: "विश्लेषक / प्रयोगशाळा प्रमुख",
        note: "टीप:",
        authorisedBy: "प्राधिकृत",
        managingDirector: "व्यवस्थापकीय संचालक",
        officeAddress: "कार्यालयाचा पत्ता",
        labAddress: "प्रयोगशाळेचा पत्ता",
        contactEmail: "संपर्क क्रमांक आणि ईमेल आयडी",
        website: "वेबसाइट",
        soilHealthIndex: "माती आरोग्य निर्देशांक",
        soilHealthStatus: "माती आरोग्य स्थिती"
      }
    }
  };

  const t = translations[language];

  const [reportData, setReportData] = useState({
    FarmerName: "",
    Aadhaar: "",
    MobileNo: "",
    Village: "",
    District: "",
    Taluka: "",
    SoilType: "",
    SoilSample: "",
    SampleDate: "",
    ReportDate: "",
    TotalArea: "",
    SurveyNumber: "",
    Pincode: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [soilData, setSoilData] = useState([
    { name: "pH", unit: "", value: "", min: 6.5, max: 7.5, weight: 15 },
    { name: "EC", unit: "ds/m", value: "", min: 0, max: 1, weight: 5 },
    { name: "Organic Carbon", unit: "%", value: "", min: 0.51, max: 0.75, weight: 20 },
    { name: " Nitrogen", unit: "Kg/ha", value: "", min: 280, max: 560, weight: 15 },
    { name: " Phosphorus", unit: "Kg/ha", value: "", min: 10, max: 25, weight: 10 },
    { name: " Potassium", unit: "Kg/ha", value: "", min: 145, max: 337, weight: 10 },
    { name: "Calcium", unit: "meq", value: "", min: 65, max: 80, weight: 5 },
    { name: "Magnesium", unit: "meq", value: "", min: 10, max: 15, weight: 5 },
    { name: "Sulfur", unit: "ppm", value: "", min: 10, max: 20, weight: 3 },
    { name: "Sodium", unit: "ppm", value: "", min: 5, max: 15, weight: 2 },
    { name: "Iron", unit: "ppm", value: "", min: 2.0, max: 5.0, weight: 2 },
    { name: "Zinc", unit: "ppm", value: "", min: 1.0, max: 5.0, weight: 2 },
    { name: "Manganese", unit: "ppm", value: "", min: 2.0, max: 5.0, weight: 2 },
    { name: "Copper", unit: "ppm", value: "", min: 0.2, max: 5.0, weight: 2 },
    { name: "Boron", unit: "ppm", value: "", min: 0.5, max: 1.0, weight: 2 },
    { name: "Calcium Carbonate", unit: "%", value: "", min: 1.0, max: 15.00, weight: 0 },
    { name: "WHC", unit: "%", value: "", min: 0, max: 100, weight: 0 },
  ]);

  const [showGraph, setShowGraph] = useState(false);
  const [error, setError] = useState("");
  const [isFarmerDataSubmitted, setIsFarmerDataSubmitted] = useState(false);
  const [soilHealthIndex, setSoilHealthIndex] = useState(0);
  const [soilHealthStatus, setSoilHealthStatus] = useState("");

  // Calculate Soil Health Index
  const calculateSoilHealthIndex = () => {
    let totalScore = 0;
    let totalWeight = 0;
    let parametersCounted = 0;

    soilData.forEach(item => {
      if (item.value !== "" && item.weight > 0) {
        const normalizedScore = calculateParameterScore(item.value, item.min, item.max);
        totalScore += normalizedScore * item.weight;
        totalWeight += item.weight;
        parametersCounted++;
      }
    });

    if (parametersCounted === 0) return 0;

    const finalScore = (totalScore / totalWeight) * 100;
    return Math.min(100, Math.max(0, finalScore));
  };

  // Calculate individual parameter score (0-1)
  const calculateParameterScore = (value, min, max) => {
    if (value === "") return 0;
    
    // For parameters where higher is better (most nutrients)
    if (min > 0 && max > min) {
      if (value < min) return value / min * 0.5; // 0-0.5 for below optimal
      if (value > max) return 1 - ((value - max) / (max * 2)) * 0.5; // 0.5-1 for above optimal, with penalty for very high
      return 0.5 + ((value - min) / (max - min)) * 0.5; // 0.5-1 for optimal range
    }
    
    // For pH which has optimal range
    if (min === 6.5 && max === 7.5) {
      if (value >= min && value <= max) return 1;
      if (value < min) return value / min;
      if (value > max) return 1 - ((value - max) / 3); // Penalty for high pH
    }
    
    return 0.5; // Default score
  };

  // Get Soil Health Status based on index
  const getSoilHealthStatus = (index) => {
    if (index >= 80) return language === "english" ? "Excellent" : "उत्कृष्ट";
    if (index >= 70) return language === "english" ? "Good" : "चांगले";
    if (index >= 60) return language === "english" ? "Fair" : "समाधानकारक";
    if (index >= 50) return language === "english" ? "Poor" : "कमकुवत";
    return language === "english" ? "Very Poor" : "अत्यंत कमकुवत";
  };

  // Get Status Color
  const getStatusColor = (index) => {
    if (index >= 80) return "#27ae60";
    if (index >= 70) return "#2ecc71";
    if (index >= 60) return "#f39c12";
    if (index >= 50) return "#e67e22";
    return "#e74c3c";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    const { FarmerName, Aadhaar, MobileNo, Village, District, Taluka, SoilType, SoilSample, SampleDate, ReportDate, TotalArea, SurveyNumber, Pincode } = reportData;

    if (!FarmerName.trim()) errors.FarmerName = `${t.formLabels.FarmerName} ${t.errors.required}`;
    if (!Aadhaar.trim() || Aadhaar.length !== 12 || !/^\d+$/.test(Aadhaar)) errors.Aadhaar = t.errors.aadhaar;
    if (!MobileNo.trim() || MobileNo.length !== 10 || !/^\d+$/.test(MobileNo)) errors.MobileNo = t.errors.mobile;
    if (!Village.trim()) errors.Village = `${t.formLabels.Village} ${t.errors.required}`;
    if (!District.trim()) errors.District = `${t.formLabels.District} ${t.errors.required}`;
    if (!Taluka.trim()) errors.Taluka = `${t.formLabels.Taluka} ${t.errors.required}`;
    if (!SoilType.trim()) errors.SoilType = `${t.formLabels.SoilType} ${t.errors.required}`;
    if (!SoilSample.trim()) errors.SoilSample = `${t.formLabels.SoilSample} ${t.errors.required}`;
    if (!SampleDate.trim()) errors.SampleDate = `${t.formLabels.SampleDate} ${t.errors.required}`;
    if (!ReportDate.trim()) errors.ReportDate = `${t.formLabels.ReportDate} ${t.errors.required}`;
    if (SampleDate && new Date(SampleDate) > new Date()) {
      errors.SampleDate = "Sample date cannot be in the future";
    }
    if (ReportDate && new Date(ReportDate) > new Date()) {
      errors.ReportDate = "Report date cannot be in the future";
    }
    if (!TotalArea.trim() || isNaN(TotalArea)) errors.TotalArea = `${t.formLabels.TotalArea} ${t.errors.number}`;
    if (!SurveyNumber.trim()) errors.SurveyNumber = `${t.formLabels.SurveyNumber} ${t.errors.required}`;
    if (!Pincode.trim() || Pincode.length !== 6 || !/^\d+$/.test(Pincode)) errors.Pincode = t.errors.pincode;

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Submitted Data:", reportData);
      alert(language === "english" ? "✅ Data Submitted" : "✅ माहिती सबमिट केली");
      setIsFarmerDataSubmitted(true);
      navigate("/", { state: { reportData } });
    } else {
      alert(language === "english" ? "⚠ Please correct the errors before submitting." : "⚠ सबमिट करण्यापूर्वी त्रुटी दुरुस्त करा");
    }
  };

  const handleSoilChange = (index, newValue) => {
    const updatedData = [...soilData];
    updatedData[index].value = newValue === "" ? "" : parseFloat(newValue);
    setSoilData(updatedData);
  };

  const generateReport = () => {
    const isDataFilled = soilData.every((item) => item.value !== "");
    if (isDataFilled) {
      const calculatedIndex = calculateSoilHealthIndex();
      setSoilHealthIndex(calculatedIndex);
      setSoilHealthStatus(getSoilHealthStatus(calculatedIndex));
      setShowGraph(true);
      setError("");
    } else {
      setError(language === "english"
        ? "⚠ Please fill in all soil test values before generating the report."
        : "⚠ कृपया अहवाल तयार करण्यापूर्वी सर्व माती चाचणी मूल्ये भरा.");
      setShowGraph(false);
    }
  };

  const getBarColor = (value, min, max) => {
    if (value === "") return "#BDC3C7";
    if (value < min) return "#2ECC71";
    if (value > max) return "#E74C3C";
    return "#F1C40F";
  };

  const getRecommendation = (name, value, min, max) => {
    if (value === "") return language === "english" ? "Data not available" : "माहिती उपलब्ध नाही";
    if (value < min) return language === "english" ? `Increase ${name} levels` : `${name} पातळी वाढवा`;
    if (value > max) return language === "english" ? `Reduce ${name} levels` : `${name} पातळी कमी करा`;
    return language === "english" ? "Medium" : "मध्यम";
  };

  const getPrintLabel = (key) => {
    return t.printLabels[key] || key;
  };

  const handlePrint = async () => {
  try {
    const chartElement = document.querySelector('.recharts-wrapper');
    const canvas = await html2canvas(chartElement, {
      scale: 2,
      logging: false,
      useCORS: true,
    });
    const chartImage = canvas.toDataURL("image/png");

    const farmerEntries = Object.entries(reportData);
    const halfLength = Math.ceil(farmerEntries.length / 2);
    const leftColumn = farmerEntries.slice(0, halfLength);
    const rightColumn = farmerEntries.slice(halfLength);

    const printWindow = window.open('', '', 'width=1200,height=800');

    // Calculate if Marathi content needs more space
    const isMarathi = language === "marathi";
    const page1ExtraMargin = isMarathi ? 'margin-bottom: 5px;' : '';
    const soilTableFontSize = isMarathi ? 'font-size: 11px;' : 'font-size: 12px;';
    const recommendationsFontSize = isMarathi ? 'font-size: 11px;' : 'font-size: 12px;';

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${getPrintLabel('page1Title')}</title>
          <style>
            @page {
              size: A4;
              margin: 1cm;
            }
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              position: relative;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .print-container {
              width: 100%;
              padding: 10px;
            }
            .print-section {
              margin-bottom: 15px;
              ${page1ExtraMargin}
            }
            .page-break {
              page-break-before: always;
            }
            .no-break {
              page-break-inside: avoid;
            }
            .avoid-break {
              page-break-inside: avoid;
            }
            .force-break {
              page-break-before: always;
            }
            .print-section h3 {
              background-color: #3498db !important;
              color: white !important;
              padding: 6px 10px;
              font-size: 14px;
              margin: 0 0 8px 0;
              border-radius: 4px;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .print-table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 10px;
              ${soilTableFontSize}
              page-break-inside: avoid;
            }
            .print-table th, .print-table td {
              border: 1px solid #ddd;
              padding: 4px;
              text-align: left;
            }
            .print-table th {
              background-color: #6642f3 !important;
              color: white !important;
              font-weight: bold;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .print-graph {
              width: 100%;
              height: 250px;
              margin: 15px 0;
              page-break-inside: avoid;
            }
            .print-footer {
              text-align: center;
              margin-top: 15px;
              font-style: italic;
              color: #7f8c8d;
              font-size: 11px;
            }
            .optimal { color: #2ecc71 !important; }
            .low { color: #3498db !important; }
            .high { color: #e74c3c !important; }
            .two-columns {
              display: flex;
              gap: 15px;
              page-break-inside: avoid;
            }
            .column {
              flex: 1;
            }
            .legend {
              display: flex;
              justify-content: center;
              gap: 10px;
              margin: 8px 0;
              page-break-inside: avoid;
            }
            .legend-item {
              display: flex;
              align-items: center;
              font-size: 12px !important;
              font-weight: bold !important;
              color: #000000 !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .legend-color {
              width: 12px;
              height: 12px;
              margin-right: 4px;
              border: 1px solid #ddd;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .soil-results {
              max-height: none;
              overflow: visible;
              page-break-inside: avoid;
            }
            .compact-address-container {
              font-family: Arial, sans-serif;
              width: 100%;
              padding: 6px 0;
              border-top: 1px solid #000;
              border-bottom: 1px solid #000;
              margin: 10px 0;
              page-break-inside: avoid;
            }
            .address-row {
              display: flex;
              justify-content: space-between;
              align-items: flex-start;
              flex-wrap: nowrap;
            }
            .address-block {
              flex: 1;
              min-width: 150px;
              font-size: 10px;
            }
            .address-header {
              display: flex;
              align-items: center;
              margin-bottom: 3px;
            }
            .address-icon {
              width: 12px;
              height: 12px;
              margin-right: 4px;
              flex-shrink: 0;
            }
            .address-title {
              font-size: 10px;
              font-weight: bold;
              margin: 0;
              color: #000;
            }
            .address-text {
              font-size: 9px;
              margin: 0;
              line-height: 1.3;
            }
            .separator {
              color: #999;
              font-size: 10px;
              align-self: center;
              padding: 0 3px;
            }
            .contact-line {
              display: flex;
              align-items: center;
              margin-bottom: 2px;
            }
            .mini-icon {
              width: 8px;
              height: 8px;
              margin-right: 3px;
              flex-shrink: 0;
            }
            .header-container {
              display: flex;
              justify-content: space-between;
              margin: 15px 0;
              page-break-inside: avoid;
            }
            .lab-header-container {
              text-align: left;
              flex: 1;
            }
            .lab-header h2 {
              font-size: 0.8rem;
              color: #000;
              margin-top: 30px;
              margin-bottom: 10px;
              font-weight: bold;
            }
            .lab-notes {
              font-size: 0.75rem;
              color: #333;
              margin-top: 8px;
            }
            .note-title {
              font-weight: bold;
              margin-bottom: 5px;
            }
            .note-items {
              list-style-type: none;
              padding-left: 0;
              margin-top: 0;
              margin-bottom: 0;
            }
            .note-items li {
              position: relative;
              padding-left: 12px;
              margin-bottom: 3px;
              line-height: 1.4;
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
              font-size: 0.8rem;
              color: #000;
              margin-top: 30px;
              margin-bottom: 10px;
            }

            /* Soil Health Index Styles */
            .soil-health-card {
              border: 2px solid #3498db;
              border-radius: 10px;
              padding: 15px;
              margin: 15px 0;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              page-break-inside: avoid;
            }
            .soil-health-header {
              text-align: center;
              margin-bottom: 15px;
            }
            .soil-health-title {
              font-size: 18px;
              font-weight: bold;
              color: #2c3e50;
              margin: 0;
            }
            .soil-health-content {
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
            .soil-health-gauge {
              position: relative;
              width: 120px;
              height: 120px;
            }
            .gauge-background {
              width: 100%;
              height: 100%;
              border-radius: 50%;
              background: conic-gradient(
                #e74c3c 0% 20%,
                #e67e22 20% 40%,
                #f39c12 40% 60%,
                #2ecc71 60% 80%,
                #27ae60 80% 100%
              );
              position: relative;
            }
            .gauge-inner {
              position: absolute;
              top: 10%;
              left: 10%;
              width: 80%;
              height: 80%;
              background: white;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .gauge-value {
              font-size: 24px;
              font-weight: bold;
              color: #2c3e50;
            }
            .soil-health-info {
              flex: 1;
              padding-left: 20px;
            }
            .soil-health-score {
              font-size: 14px;
              margin-bottom: 10px;
            }
            .soil-health-status {
              font-size: 16px;
              font-weight: bold;
              padding: 8px 12px;
              border-radius: 20px;
              text-align: center;
              display: inline-block;
            }
            .soil-health-recommendations {
              margin-top: 10px;
              font-size: 12px;
              color: #7f8c8d;
            }
            
            /* Color Indicators Styles */
            .color-indicators {
              margin-top: 15px;
            }
            .color-indicators-title {
              font-size: 12px;
              font-weight: bold;
              margin-bottom: 5px;
              color: #2c3e50;
            }
            .color-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 6px;
            }
            .color-item {
              display: flex;
              align-items: center;
            }
            .color-dot {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 5px;
              flex-shrink: 0;
            }
            .color-label {
              font-size: 10px;
              line-height: 1.2;
            }
            .full-width {
              grid-column: 1 / span 2;
            }

            /* Print-specific fixes */
            @media print {
              body {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
                color-adjust: exact !important;
              }
              .print-section h3 {
                background-color: #3498db !important;
                color: white !important;
              }
              .print-table th {
                background-color: #3d61cfff !important;
                color: white !important;
              }
              .legend-item {
                color: #000000 !important;
              }
              .optimal { color:#F1C40F !important; }
              .low { color: #2ecc71  !important; }
              .high { color: #e74c3c !important; }
              
              /* Ensure proper page breaks */
              .page-break-before {
                page-break-before: always;
              }
              .page-break-after {
                page-break-after: always;
              }
              .avoid-break {
                page-break-inside: avoid;
              }
            }

            .top-slogan-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 8px 0 20px;
              padding: 0 15px;
              page-break-inside: avoid;
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
            .center-icon {
              flex: 1;
              text-align: center;
            }
            .right-icon {
              flex: 1;
              text-align: right;
            }
            .logo-icon {
              height: 50px;
              object-fit: contain;
            }
            
            /* Logo container styles */
            .logo-container {
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              page-break-inside: avoid;
            }
            .report-title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 8px;
            }
            .report-subtitle {
              font-size: 12px;
              margin-bottom: 15px;
            }
            
            /* Force colors to print */
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }

            /* Marathi-specific adjustments */
            .marathi-text {
              line-height: 1.3;
            }
            
            /* Compact layout for recommendations */
            .compact-recommendations {
              ${recommendationsFontSize}
              line-height: 1.3;
            }
          </style>
        </head>
        <body class="${isMarathi ? 'marathi-text' : ''}">
          <!-- Page 1: Farmer Information and Soil Results -->
          <div class="print-container">
            <div class="logo-container">
              <div>
                <img src="logo_com.png" alt="Left Logo" style="height: 120px;" />
              </div>
              <div style="display: flex; gap: 15px;">
                <img src="startup.png" alt="Right Logo 2" style="height: 80px;" />
                <img src="msme.png" alt="Right Logo 2" style="height: 70px;" />
              </div>
            </div>
            <hr style="width: 100%; margin-top:3px; border: 1px solid #3498db;">

            <div style="margin-top:0.5px;">
              <div style="margin-top:2px;">
                <div style="text-align: center; margin-top: 0px;">
                  <div class="report-title">${getPrintLabel('page1Title')}</div>
                  <div class="report-subtitle">${new Date().toLocaleDateString()}</div>
                </div> 
              </div>
              
              <div class="print-section avoid-break">
                <h3>${getPrintLabel('farmerInfo')}</h3>
                <div class="two-columns">
                  <div class="column">
                    <table class="print-table">
                      <tbody>
                        ${leftColumn.map(([key, value]) => `
                          <tr>
                            <td width="40%"><strong>${t.formLabels[key] || key}</strong></td>
                            <td width="60%">${value}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                  <div class="column">
                    <table class="print-table">
                      <tbody>
                        ${rightColumn.map(([key, value]) => `
                          <tr>
                            <td width="40%"><strong>${t.formLabels[key] || key}</strong></td>
                            <td width="60%">${value}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="print-section avoid-break">
                <h3>${getPrintLabel('soilResults')}</h3>
                <div class="soil-results">
                  <table class="print-table">
                    <thead>
                      <tr>
                        <th>${t.soilTable.nutrient}</th>
                        <th>${t.soilTable.unit}</th>
                        <th>${t.soilTable.min}</th>
                        <th>${t.soilTable.max}</th>
                        <th>${t.soilTable.value}</th>
                        <th>${t.soilTable.status}</th>
                        <th>${t.soilTable.recommendation}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${soilData.map(item => {
        const status = item.value === "" ? t.status.notEntered :
          item.value < item.min ? t.status.low :
            item.value > item.max ? t.status.high : t.status.optimal;
        const statusClass = status === t.status.low ? "low" :
          status === t.status.high ? "high" : "optimal";
        const recommendation = getRecommendation(item.name, item.value, item.min, item.max);

        return `
                          <tr>
                            <td>${item.name}</td>
                            <td>${item.unit}</td>
                            <td>${item.min}</td>
                            <td>${item.max}</td>
                            <td>${item.value}</td>
                            <td class="${statusClass}" style="font-weight: bold;">${status}</td>
                            <td style="${soilTableFontSize}">${recommendation}</td>
                          </tr>
                        `;
      }).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div class="print-footer">
              <p>${getPrintLabel('generatedOn')}: ${new Date().toLocaleString()}</p>
              <p>${t.healthySoil}</p>
                ${getPrintLabel('page1Footer')}
              </div>
            </div>
          </div>
          
          <!-- Page 2: Graph and Recommendations -->
          <div class="print-container force-break">
            <div style="text-align: center; margin-bottom: 10px;">
              <h2 style="margin: 10px 0; font-size: 16px;">${getPrintLabel('page2Title')}</h2>
            </div>
            
            <div class="print-section avoid-break">
              <h3>${getPrintLabel('nutrientVisualization')}</h3>
              <div class="legend">
                <div class="legend-item">
                  <div class="legend-color" style="background-color:  #2ECC71 !important;"></div>
                  <span>${getPrintLabel('lowDeficient')}</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color" style="background-color: #F1C40F !important;"></div>
                  <span>${getPrintLabel('optimal')}</span>
                </div>
                <div class="legend-item">
                  <div class="legend-color" style="background-color: #E74C3C  !important;"></div>
                  <span>${getPrintLabel('highExcess')}</span>
                </div>
              </div>
              
              <div class="print-graph">
                <img src="${chartImage}" style="width: 100%; height: 100%; object-fit: contain;" />
              </div>
            </div>

             <!-- Soil Health Index Card with Color Indicators -->
              <div class="soil-health-card avoid-break">
                <div class="soil-health-header">
                  <h3 class="soil-health-title">${getPrintLabel('soilHealthIndex')}</h3>
                </div>
                <div class="soil-health-content">
                  <div class="soil-health-gauge">
                    <div class="gauge-background"></div>
                    <div class="gauge-inner">
                      <div class="gauge-value">${soilHealthIndex.toFixed(1)}%</div>
                    </div>
                  </div>
                  <div class="soil-health-info">
                    <div class="soil-health-score">
                      <strong>${t.soilHealthScore}:</strong> ${soilHealthIndex.toFixed(1)}%
                    </div>
                    <div class="soil-health-status" style="background-color: ${getStatusColor(soilHealthIndex)}; color: white;">
                      ${soilHealthStatus}
                    </div>
                    
                    <!-- Color Indicators -->
                    <div class="color-indicators">
                      <p class="color-indicators-title">${language === "english" ? "Color Indicators:" : "रंग सूचक:"}</p>
                      <div class="color-grid">
                        <div class="color-item">
                          <div class="color-dot" style="background-color: #27ae60;"></div>
                          <span class="color-label">${language === "english" ? "Excellent (80-100%)" : "उत्कृष्ट (८०-१००%)"}</span>
                        </div>
                        <div class="color-item">
                          <div class="color-dot" style="background-color: #2ecc71;"></div>
                          <span class="color-label">${language === "english" ? "Good (70-79%)" : "चांगले (७०-७९%)"}</span>
                        </div>
                        <div class="color-item">
                          <div class="color-dot" style="background-color: #f39c12;"></div>
                          <span class="color-label">${language === "english" ? "Fair (60-69%)" : "समाधानकारक (६०-६९%)"}</span>
                        </div>
                        <div class="color-item">
                          <div class="color-dot" style="background-color: #e67e22;"></div>
                          <span class="color-label">${language === "english" ? "Poor (50-59%)" : "कमकुवत (५०-५९%)"}</span>
                        </div>
                        <div class="color-item full-width">
                          <div class="color-dot" style="background-color: #e74c3c;"></div>
                          <span class="color-label">${language === "english" ? "Very Poor (0-49%)" : "अत्यंत कमकुवत (०-४९%)"}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="soil-health-recommendations">
                      ${getOverallRecommendations()}
                    </div>
                  </div>
                </div>
              </div>

            
            <div class="print-section avoid-break">
              <h3>${getPrintLabel('fertilizerRecommendations')}</h3>
              <table class="print-table compact-recommendations">
                <tbody>
                  <tr>
                    <td width="30%"><strong>${getPrintLabel('organicFertilizer')}</strong></td>
                    <td width="70%">
                      ${language === "english"
          ? "Based on your soil's organic carbon content, we recommend applying 5-10 tons of well-decomposed farmyard manure per hectare."
          : "तुमच्या मातीच्या सेंद्रिय कार्बन सामग्रीवर आधारित, आम्ही प्रति हेक्टर ५-१० टन चांगले विघटित शेण  खत वापरण्याची शिफारस करतो."}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>${getPrintLabel('bioFertilizer')}</strong></td>
                    <td>
                      ${language === "english"
          ? "Azotobacter and Phosphobacteria cultures are recommended for nitrogen and phosphorus fixation."
          : "नायट्रोजन आणि फॉस्फरस निर्धारणासाठी ऍझोटोबॅक्टर आणि फॉस्फोबॅक्टेरिया संस्कृतींची शिफारस केली जाते."}
                    </td>
                  </tr>
                  <tr>
                    <td><strong>${getPrintLabel('limeGypsum')}</strong></td>
                    <td>${getLimeRecommendation()}</td>
                  </tr>
                  <tr>
                    <td><strong>${getPrintLabel('micronutrients')}</strong></td>
                    <td>${getMicronutrientRecommendation()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div class="print-section avoid-break">
              <h3>${getPrintLabel('additionalNotes')}</h3>
              <ul style="margin: 0; padding-left: 15px; font-size: 11px; line-height: 1.3;">
                ${language === "english" ? `
                  <li>Maintain proper soil moisture for optimal nutrient availability</li>
                  <li>Rotate crops to prevent nutrient depletion</li>
                  <li>Test soil every 2-3 years to monitor changes</li>
                  <li>Consider green manuring to improve organic content</li>
                ` : `
                  <li>मध्यम पोषक तत्व उपलब्धतेसाठी योग्य मातीतील आर्द्रता राखा</li>
                  <li>पोषक तत्वांची कमतरता टाळण्यासाठी पिकांची फेरबदल करा</li>
                  <li>बदलांचे निरीक्षण करण्यासाठी दर २-३ वर्षांनी मातीची चाचणी घ्या</li>
                  <li>सेंद्रिय सामग्री सुधारण्यासाठी हिरव्या खताचा विचार करा</li>
                `}
              </ul>
            </div>
            
            <!-- Rest of your content remains the same but with reduced margins -->
            <div class="header-container avoid-break">
              <div class="lab-header-container">
                <div class="lab-header">
                  <h2>${getPrintLabel('analystLabInCharge')}</h2>
                  <div class="lab-notes">
                    <p class="note-title">${getPrintLabel('note')}</p>
                    <ul class="note-items">
                      ${language === "english" ? `
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
                  <img src="signature.png" alt="Digital Signature" style="height: 80px;" />
                </div>
                <div class="authorization-text">
                  ${getPrintLabel('authorisedBy')}<br>
                  <strong>Mr. Yogesh Nikam<br></strong>
                  <strong>${getPrintLabel('managingDirector')}</strong>
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
                    <h4 class="address-title">${getPrintLabel('officeAddress')}</h4>
                  </div>
                  <p class="address-text">CIII Center for Invention,Innovation,Incubatiopn,3rd Floor,G-buliding YCIS,Powai Naka,Satara</p>
                </div>
                
                <div class="separator">|</div>
                
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                    <h4 class="address-title">${getPrintLabel('labAddress')}</h4>
                  </div>
                  <p class="address-text">B-3 Dipali Complex, Near Karad Urban Bank, Dahiwadi Rd., Pusegaon. Tal- Khatav, Dist- Satara. MH. 415 502</p>
                </div>
                
                <div class="separator">|</div>
                
                <div class="address-block">
                  <div class="address-header">
                    <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <h4 class="address-title">${getPrintLabel('contactEmail')}</h4>
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
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9"/>
                    </svg>
                    <h4 class="address-title">${getPrintLabel('website')}</h4>
                  </div>
                  <p class="address-text">www.satarabiochem.in</p>
                </div>
              </div>
            </div>
            <div class="print-footer">
              <p>${getPrintLabel('page2Footer')}</p>
            </div><br>
          </div>
        </body>
      </html>
    `);

      setTimeout(() => {
        printWindow.document.close();
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }, 1000);
    } catch (error) {
      console.error("Error generating print:", error);
      alert(language === "english"
        ? "Error generating print. Please try again."
        : "प्रिंट तयार करताना त्रुटी. कृपया पुन्हा प्रयत्न करा.");
    }
  };

  const getLimeRecommendation = () => {
    const pHItem = soilData.find(item => item.name === "pH");
    if (!pHItem || pHItem.value === "") return language === "english"
      ? "pH data not available"
      : "pH माहिती उपलब्ध नाही";

    if (pHItem.value < 6.0) return language === "english"
      ? "Apply 2-4 tons of agricultural lime per hectare to raise pH"
      : "pH वाढवण्यासाठी प्रति हेक्टर २-४ टन शेतीचा चुना वापरा";
    if (pHItem.value > 7.5) return language === "english"
      ? "Apply 1-2 tons of gypsum per hectare to lower pH"
      : "pH कमी करण्यासाठी प्रति हेक्टर १-२ टन जिप्सम वापरा";
    return language === "english"
      ? "No lime or gypsum needed - pH is in optimal range"
      : "चुना किंवा जिप्सम आवश्यक नाही - pH इष्टतम श्रेणीत आहे";
  };

  const getMicronutrientRecommendation = () => {
    const recommendations = [];

    soilData.forEach(item => {
      if (["Iron", "Zinc", "Manganese", "Copper", "Boron"].includes(item.name.trim())) {
        if (item.value < item.min) {
          recommendations.push(language === "english"
            ? `Apply ${item.name} supplement (${item.min - item.value} ${item.unit} deficiency)`
            : `${item.name} पूरक वापरा (${item.min - item.value} ${item.unit} उणीव)`);
        } else if (item.value > item.max) {
          recommendations.push(language === "english"
            ? `Reduce ${item.name} application (${item.value - item.max} ${item.unit} excess)`
            : `${item.name} वापर कमी करा (${item.value - item.max} ${item.unit} जास्त)`);
        }
      }
    });

    return recommendations.length > 0
      ? recommendations.join("; ")
      : language === "english"
        ? "All micronutrients are within optimal ranges"
        : "सर्व सूक्ष्म पोषक तत्व इष्टतम श्रेणीत आहेत";
  };

  const getOverallRecommendations = () => {
    if (soilHealthIndex >= 80) {
      return language === "english" 
        ? "Excellent soil health! Maintain current practices with regular monitoring."
        : "उत्कृष्ट माती आरोग्य! नियमित देखरेख सह सध्याच्या पद्धती राखा.";
    } else if (soilHealthIndex >= 70) {
      return language === "english"
        ? "Good soil health. Focus on maintaining organic matter and balanced fertilization."
        : "चांगले माती आरोग्य. सेंद्रिय पदार्थ राखणे आणि संतुलित खतवापरावर लक्ष केंद्रित करा.";
    } else if (soilHealthIndex >= 60) {
      return language === "english"
        ? "Fair soil health. Improve organic content and address nutrient deficiencies."
        : "समाधानकारक माती आरोग्य. सेंद्रिय सामग्री सुधारा आणि पोषक तत्वांच्या कमतरता दूर करा.";
    } else if (soilHealthIndex >= 50) {
      return language === "english"
        ? "Poor soil health. Implement comprehensive soil improvement program."
        : "कमकुवत माती आरोग्य. व्यापक माती सुधार कार्यक्रम अंमलात आणा.";
    } else {
      return language === "english"
        ? "Very poor soil health. Immediate soil remediation required with expert guidance."
        : "अत्यंत कमकुवत माती आरोग्य. तज्ञ मार्गदर्शनासह तातडीने माती सुधारणा आवश्यक.";
    }
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  // Soil Health Index Display Component
  const SoilHealthIndexDisplay = () => (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border-2 border-blue-500">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{t.soilHealthIndex}</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-32 h-32 mb-4 md:mb-0">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(
                #e74c3c 0% 20%,
                #e67e22 20% 40%,
                #f39c12 40% 60%,
                #2ecc71 60% 80%,
                #27ae60 80% 100%
              )`
            }}
          />
          <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-800">{soilHealthIndex.toFixed(1)}%</span>
          </div>
        </div>
        <div className="flex-1 md:pl-6">
          <div className="mb-3">
            <strong className="text-lg">{t.soilHealthScore}:</strong> {soilHealthIndex.toFixed(1)}%
          </div>
          <div 
            className="text-lg font-bold text-white px-4 py-2 rounded-full text-center mb-4"
            style={{ backgroundColor: getStatusColor(soilHealthIndex) }}
          >
            {soilHealthStatus}
          </div>
          
          {/* Color Indicators */}
          <div className="mt-4">
            <p className="text-sm font-semibold mb-2 text-gray-700">
              {language === "english" ? "Color Indicators:" : "रंग सूचक:"}
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#27ae60' }}></div>
                <span className="text-sm">{language === "english" ? "Excellent (80-100%)" : "उत्कृष्ट (८०-१००%)"}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#2ecc71' }}></div>
                <span className="text-sm">{language === "english" ? "Good (70-79%)" : "चांगले (७०-७९%)"}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#f39c12' }}></div>
                <span className="text-sm">{language === "english" ? "Fair (60-69%)" : "समाधानकारक (६०-६९%)"}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#e67e22' }}></div>
                <span className="text-sm">{language === "english" ? "Poor (50-59%)" : "कमकुवत (५०-५९%)"}</span>
              </div>
              <div className="flex items-center col-span-2">
                <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: '#e74c3c' }}></div>
                <span className="text-sm">{language === "english" ? "Very Poor (0-49%)" : "अत्यंत कमकुवत (०-४९%)"}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            {getOverallRecommendations()}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 sm:p-10 bg-gradient-to-r from-green-50 to-blue-50 min-h-screen ml-30">
      <div className="flex justify-end mb-4 relative">
        <div className="relative inline-block text-left">
          <button
            type="button"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="language-menu"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {t.language}: {language === "english" ? "English" : "मराठी"}
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {showLanguageDropdown && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
              <div className="py-1" role="none">
                <button
                  onClick={() => toggleLanguage("english")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  English
                </button>
                <button
                  onClick={() => toggleLanguage("marathi")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  मराठी
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-6">{t.title}</h2>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl mb-8">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-green-700">{t.farmerInfo}</h3>

          <form onSubmit={handleSubmit}>
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <tbody>
                {Object.keys(reportData).map((key) => (
                  <tr key={key} className="even:bg-gray-50">
                    <td className="border p-4 text-sm sm:text-lg font-medium text-gray-800">
                      {t.formLabels[key] || key}
                    </td>
                    <td className="border p-4">
                      <input
                        type={key.includes("Date") ? "date" : "text"}
                        name={key}
                        value={reportData[key]}
                        onChange={handleChange}
                        className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-all ease-in-out ${formErrors[key] ? "border-red-500" : ""
                          }`}
                        placeholder={`${language === "english" ? "Enter" : "प्रविष्ट करा"} ${t.formLabels[key] || key}`}
                        required
                      />
                      {formErrors[key] && (
                        <p className="text-red-500 text-xs sm:text-sm mt-2">{formErrors[key]}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-8 sm:px-12 py-3 sm:py-4 bg-green-600 text-white text-lg font-bold rounded-lg hover:bg-green-700 transition-all shadow-lg transform hover:scale-105"
              >
                {t.submit}
              </button>
            </div>
          </form>
        </div>

        {isFarmerDataSubmitted && (
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4">{t.soilData}</h3>
            {error && <p className="text-red-600 text-center font-semibold mb-4">{error}</p>}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="border p-2 text-sm sm:text-base">{t.soilTable.nutrient}</th>
                    <th className="border p-2 text-sm sm:text-base">{t.soilTable.unit}</th>
                    <th className="border p-2 text-sm sm:text-base">{t.soilTable.min}</th>
                    <th className="border p-2 text-sm sm:text-base">{t.soilTable.max}</th>
                    <th className="border p-2 text-sm sm:text-base">{t.soilTable.value}</th>
                    <th className="border p-2 text-sm sm:text-base">
                      {t.soilTable.status} & {t.soilTable.recommendation}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {soilData.map((item, index) => {
                    const status = item.value === ""
                      ? t.status.notEntered
                      : item.value < item.min
                        ? t.status.low
                        : item.value > item.max
                          ? t.status.high
                          : t.status.optimal;

                    const statusColor = status === t.status.low
                      ? "text-green-500"
                      : status === t.status.high
                        ? "text-red-500"
                        : status === t.status.notEntered
                          ? "text-gray-500"
                          : "text-yellow-500";

                    const recommendation = getRecommendation(item.name, item.value, item.min, item.max);

                    return (
                      <tr key={index} className="text-center">
                        <td className="border p-2 text-sm sm:text-base font-semibold">{item.name}</td>
                        <td className="border p-2 text-sm sm:text-base">{item.unit}</td>
                        <td className="border p-2 text-sm sm:text-base">{item.min}</td>
                        <td className="border p-2 text-sm sm:text-base">{item.max}</td>
                        <td className="border p-2 text-sm sm:text-base">
                          <input
                            type="number"
                            className="p-1 sm:p-2 border border-gray-300 rounded w-24 sm:w-40"
                            placeholder={`${language === "english" ? "Range" : "श्रेणी"}: ${item.min}-${item.max}`}
                            value={item.value}
                            onChange={(e) => handleSoilChange(index, e.target.value)}
                          />
                        </td>
                        <td className={`border p-2 text-sm sm:text-base font-bold ${statusColor}`}>
                          <div>{status}</div>
                          <div className="text-xs sm:text-sm text-gray-600">{recommendation}</div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 no-print">
              <button
                onClick={generateReport}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-all shadow-md transform hover:scale-105"
              >
                {t.generateReport}
              </button>
            </div>

            {showGraph && (
              <div className="mt-4 sm:mt-6">
                {/* Soil Health Index Display */}
                <SoilHealthIndexDisplay />

                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-4">{t.graphTitle}</h3>
                <div className="flex justify-center gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-4 sm:w-6 h-2 sm:h-3 bg-green-500 mr-1 sm:mr-2"></div>
                    <span>{language === "english" ? "Low" : "कमी"}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 sm:w-6 h-2 sm:h-3 bg-yellow-500 mr-1 sm:mr-2"></div>
                    <span>{language === "english" ? "Medium" : "मध्यम"}</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 sm:w-6 h-2 sm:h-3 bg-red-500 mr-1 sm:mr-2"></div>
                    <span>{language === "english" ? "High" : "जास्त"}</span>
                  </div>
                </div>
                <div className="w-full h-64 sm:h-80" ref={chartRef}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={soilData}>
                      <XAxis
                        dataKey="name"
                        interval={0}
                        tick={{ fontSize: 9, fill: "#333" }}
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" barSize={20}>
                        {soilData.map((entry, index) => (
                          <Cell key={index} fill={getBarColor(entry.value, entry.min, entry.max)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-center my-4 sm:my-6">{t.recommendations}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <tbody>
                      <tr>
                        <td className="border p-2 text-sm sm:text-base font-bold">
                          {language === "english" ? "Organic Fertilizer:" : "सेंद्रिय खत:"}
                        </td>
                        <td className="border p-2 text-sm sm:text-base">
                          {language === "english"
                            ? "Recommended Organic Fertilizer"
                            : "शिफारस केलेले सेंद्रिय खत"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 text-sm sm:text-base font-bold">
                          {language === "english" ? "Bio-Fertilizer:" : "जैविक खत:"}
                        </td>
                        <td className="border p-2 text-sm sm:text-base">
                          {language === "english"
                            ? "Suggested Bio-Fertilizer"
                            : "शिफारस केलेले जैविक खत"}
                        </td>
                      </tr>
                      <tr>
                        <td className="border p-2 text-sm sm:text-base font-bold">
                          {language === "english" ? "Lime/Gypsum:" : "चुना/जिप्सम:"}
                        </td>
                        <td className="border p-2 text-sm sm:text-base">
                          {getLimeRecommendation()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
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

                <div className="flex justify-center mt-4 sm:mt-6 no-print">
                  <button
                    onClick={handlePrint}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md transform hover:scale-105"
                  >
                    {t.print}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SoilReport;