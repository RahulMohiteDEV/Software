import React, { useState } from 'react';

const WaterReport = () => {
    const [language, setLanguage] = useState('english');
    const [submitted, setSubmitted] = useState(false);


    // Farmer information state
    const [farmerInfo, setFarmerInfo] = useState({
        name: '',
        firmName: '',
        email: '',
        contactNo: '',
        sampleCollectedBy: '',
        sampleNo: '',
        testReportDate: '',
        sampleDescription: '',
        sampleReceivedDate: '',
        sampleAnalysisDate: ''
    });

    // Water quality results state
    const [results, setResults] = useState({
        TASTE: 'Agressible',
        ODOUR: 'Agressible',
        TURBIDITY: '',
        COLOUR: '',
        PH_VALUE: '',
        TDS: '',
        TOTAL_ALKALINITY: '',
        TOTAL_HARDNESS: '',
        NITRATES: '',
        CHLORIDES: '',
        FLUORIDES: '',
        CALCIUM: '',
        MAGNESIUM: '',
        IRON: '',
        E_COLI: '',
        THERMO_TOLERANT_COLIFORM: '',
        TOTAL_COLIFORM: ''
    });

    // Translations
    const translations = {
        english: {
            title: "Drinking Water Quality Report",
            personalInfo: "📍 Personal Information",
            sampleInfo: "🧪 Sample Information",
            name: "Name",
            firmName: "Firm Name",
            email: "Email Id",
            contactNo: "Contact No",
            sampleCollectedBy: "Sample Collected By",
            sampleNo: "Sample No",
            testReportDate: "Test Report Date",
            sampleDescription: "Sample Description",
            sampleReceivedDate: "Sample Received date",
            sampleAnalysisDate: "Sample Analysis Date",
            submit: "Submit & Show Analysis",
            waterQuality: "💧 Water Quality Analysis",
            desirableLimit: "Within Desirable Limit",
            permissibleLimit: "Within Permissible Limit",
            aboveLimit: "Above Permissible Limit",
            parameter: "PARAMETER",
            unit: "UNIT",
            desirable: "DESIRABLE LIMIT",
            permissible: "PERMISSIBLE LIMIT",
            results: "RESULTS",
            visualization: "📊 Water Quality Visualization",
            keyParameters: "Key Parameters Status",
            recommendations: "Recommendations",
            generateReport: "Generate Water Quality Report",
            printReport: "Print Report",
            closePrint: "Close Print View",
            physicalParams: "PHYSICAL PARAMETERS",
            chemicalParams: "CHEMICAL PARAMETERS",
            biologicalParams: "BIOLOGICAL PARAMETERS",
            waterStatus: "Water Status",
            fit: "FIT ✅",
            notFit: "NOT FIT ❌",
            fitMarathi: "वापरासाठी योग्य आहे ✅",
            notFitMarathi: "वापरासाठी योग्य नाही ❌",
            analyst: "Analyst / Lab In charge",
            note: "Note:",
            note1: "The report cannot be used for court purpose.",
            note2: "The results refer only tested samples and applicable.",
            note3: "The liability of our laboratory is limited to the invoice amount.",
            authorizedBy: "Authorised by",
            mdName: "Mr. Yogesh Nikam",
            designation: "Managing Director",
            regOfficeAddress: "Office Address",
            labAddress: "Lab Address",
            contactInfo: "Contact No. & Email Id",
            website: "Website",

        },
        marathi: {
            title: "पिण्याच्या पाण्याचा  गुणवत्ता अहवाल",
            personalInfo: "📍 वैयक्तिक माहिती",
            sampleInfo: "🧪 नमुना माहिती",
            name: "नाव",
            firmName: "फर्मचे नाव",
            email: "ईमेल आयडी",
            contactNo: "संपर्क क्रमांक",
            sampleCollectedBy: "नमुना गोळा करणारा",
            sampleNo: "नमुना क्रमांक",
            testReportDate: "चाचणी अहवाल तारीख",
            sampleDescription: "नमुना वर्णन",
            sampleReceivedDate: "नमुना प्राप्त तारीख",
            sampleAnalysisDate: "नमुना विश्लेषण तारीख",
            submit: "सबमिट करा आणि विश्लेषण दाखवा",
            waterQuality: "💧 पाण्याच्या गुणवत्तेचे विश्लेषण",
            desirableLimit: "इच्छित मर्यादेमध्ये",
            permissibleLimit: "परवानगीयोग्य मर्यादेमध्ये",
            aboveLimit: "परवानगीयोग्य मर्यादेपेक्षा जास्त",
            parameter: "पॅरामीटर",
            unit: "युनिट",
            desirable: "इच्छित मर्यादा",
            permissible: "परवानगीयोग्य मर्यादा",
            results: "निकाल",
            visualization: "📊 पाण्याच्या गुणवत्तेचे दृश्यीकरण",
            keyParameters: "मुख्य पॅरामीटर्स स्थिती",
            recommendations: "शिफारसी",
            generateReport: "पाण्याच्या गुणवत्तेचा अहवाल तयार करा",
            printReport: "अहवाल प्रिंट करा",
            closePrint: "प्रिंट दृश्य बंद करा",
            physicalParams: "भौतिक पॅरामीटर्स",
            chemicalParams: "रासायनिक पॅरामीटर्स",
            biologicalParams: "जैविक पॅरामीटर्स",
            waterStatus: "पाण्याची स्थिती",
            fit: "योग्य ✅",
            notFit: "योग्य नाही ❌",
            fitMarathi: "वापरासाठी योग्य आहे ✅",
            notFitMarathi: "वापरासाठी योग्य नाही ❌",
            analyst: "विश्लेषक / प्रयोगशाळा प्रभारी",
            note: "टीप:",
            note1: "हा अहवाल कोर्टाच्या कामासाठी वापरला जाऊ शकत नाही.",
            note2: "निकाल केवळ चाचणी केलेल्या नमुन्यांना लागू आहेत.",
            note3: "आमच्या प्रयोगशाळेची जबाबदारी फक्त बिलाच्या रकमेपर्यंत मर्यादित आहे.",
            authorizedBy: "अधिकृत केले",
            mdName: "श्री. योगेश निकम",
            designation: "व्यवस्थापकीय संचालक",
            regOfficeAddress: "नोंदणी कार्यालय पत्ता",
            labAddress: "प्रयोगशाळा पत्ता",
            contactInfo: "संपर्क क्रमांक आणि ईमेल आयडी",
            website: "वेबसाइट",

        }
    };

    const t = translations[language];

    const handleFarmerInfoChange = (field, value) => {
        setFarmerInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleWaterResultChange = (param, value) => {
        setResults(prev => ({
            ...prev,
            [param]: value
        }));
    };

    function isWaterFit(results, parameters) {
        for (let param of parameters) {
            const value = parseFloat(results[param.id]);
            const desirable = parseFloat(param.desirable) || 0;
            const permissible = parseFloat(param.permissible) || desirable;

            if (!isNaN(value) && value > permissible) {
                return false;
            }
        }
        return true;
    }

    const getStatusColor = (value, desirable, permissible) => {
        if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') {
            return 'bg-green-100 text-green-800';
        }

        const numValue = parseFloat(value);
        if (isNaN(numValue)) return 'bg-gray-100 text-gray-800';
        if (numValue <= desirable) return 'bg-green-100 text-green-800';
        if (numValue <= permissible) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    };

    const parameters = [
        { id: 'TASTE', name: language === 'marathi' ? 'चव' : 'TASTE', unit: '-', desirable: 'Agressible', permissible: '-', category: 'PHYSICAL' },
        { id: 'ODOUR', name: language === 'marathi' ? 'वास' : 'ODOUR', unit: '-', desirable: 'Unobjectionable', permissible: '-', category: 'PHYSICAL' },
        { id: 'TURBIDITY', name: language === 'marathi' ? 'गढूळपणा' : 'TURBIDITY', unit: 'NTU', desirable: '5', permissible: '10', category: 'PHYSICAL' },
        { id: 'COLOUR', name: language === 'marathi' ? 'रंग' : 'COLOUR', unit: 'HAZEN UNITS', desirable: '5', permissible: '25', category: 'PHYSICAL' },
        { id: 'PH_VALUE', name: language === 'marathi' ? 'पीएच मूल्य' : 'PH VALUE', unit: '-', desirable: '6.5-8', permissible: 'No Relaxation', category: 'CHEMICAL' },
        { id: 'TDS', name: language === 'marathi' ? 'एकूण विरघळलेले घन' : 'TOTAL DISSOLVED SOLIDS (TDS)', unit: 'mg/l', desirable: '500', permissible: '2000', category: 'CHEMICAL' },
        { id: 'TOTAL_ALKALINITY', name: language === 'marathi' ? 'एकूण अल्कधर्मिता' : 'TOTAL ALKALINITY (as CaCO3)', unit: 'mg/l', desirable: '200', permissible: '600', category: 'CHEMICAL' },
        { id: 'TOTAL_HARDNESS', name: language === 'marathi' ? 'एकूण कठीणपणा' : 'TOTAL HARDNESS (as CaCO3)', unit: 'mg/l', desirable: '300', permissible: '600', category: 'CHEMICAL' },
        { id: 'NITRATES', name: language === 'marathi' ? 'नायट्रेट्स' : 'NITRATES', unit: 'mg/l', desirable: '45', permissible: 'No Relaxation', category: 'CHEMICAL' },
        { id: 'CHLORIDES', name: language === 'marathi' ? 'क्लोराईड्स' : 'CHLORIDES', unit: 'mg/l', desirable: '200', permissible: '1000', category: 'CHEMICAL' },
        { id: 'FLUORIDES', name: language === 'marathi' ? 'फ्लोराईड्स' : 'FLUORIDES (as F)', unit: 'mg/l', desirable: '1.0', permissible: '-', category: 'CHEMICAL' },
        { id: 'CALCIUM', name: language === 'marathi' ? 'कॅल्शियम' : 'CALCIUM', unit: 'mg/l', desirable: '75', permissible: '200', category: 'CHEMICAL' },
        { id: 'MAGNESIUM', name: language === 'marathi' ? 'मॅग्नेशियम' : 'MAGNESIUM', unit: 'mg/l', desirable: '30', permissible: '-', category: 'CHEMICAL' },
        { id: 'IRON', name: language === 'marathi' ? 'लोखंड' : 'IRON (as Fe)', unit: 'mg/l', desirable: '0.3', permissible: '1.0', category: 'CHEMICAL' },
        { id: 'E_COLI', name: language === 'marathi' ? 'ई. कोलाई' : 'E.COLI', unit: 'CFU/100ML', desirable: '-', permissible: '-', category: 'BIOLOGICAL' },
        { id: 'THERMO_TOLERANT_COLIFORM', name: language === 'marathi' ? 'थर्मो टॉलरंट कोलिफॉर्म' : 'THERMO TOLERANT COLIFORM', unit: 'CFU/100ML', desirable: '-', permissible: '-', category: 'BIOLOGICAL' },
        { id: 'TOTAL_COLIFORM', name: language === 'marathi' ? 'एकूण कोलिफॉर्म' : 'TOTAL COLIFORM', unit: 'CFU/100ML', desirable: '-', permissible: '-', category: 'BIOLOGICAL' },
    ];

    const categories = [...new Set(parameters.map(param => param.category))];

    const overallStatus = () => {
        let passed = 0;
        let warning = 0;
        let failed = 0;

        parameters.forEach(param => {
            const value = results[param.id];
            if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') {
                passed++;
                return;
            }

            const numValue = parseFloat(value);
            if (isNaN(numValue)) return;

            const desirable = parseFloat(param.desirable) || 0;
            const permissible = parseFloat(param.permissible) || desirable;

            if (numValue <= desirable) passed++;
            else if (numValue <= permissible) warning++;
            else failed++;
        });

        if (failed > 0) return 'bg-red-500';
        if (warning > 0) return 'bg-yellow-500';
        return 'bg-green-500';
    };
   
    const handlePrint = () => {
  const printWindow = window.open('', '', 'width=1200,height=800');
  const currentDate = new Date().toLocaleString();
  const isMarathi = language === 'marathi';
  const waterStatus = isWaterFit(results, parameters) ?
    (isMarathi ? 'वापरासाठी योग्य आहे' : 'FIT') :
    (isMarathi ? 'वापरासाठी योग्य नाही' : 'NOT FIT');

  // Calculate statistics for gauge
  const desirableCount = parameters.filter(param => {
    const value = results[param.id];
    if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return true;
    const numValue = parseFloat(value);
    const desirable = parseFloat(param.desirable) || 0;
    return numValue <= desirable;
  }).length;

  const permissibleCount = parameters.filter(param => {
    const value = results[param.id];
    if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return false;
    const numValue = parseFloat(value);
    const desirable = parseFloat(param.desirable) || 0;
    const permissible = parseFloat(param.permissible) || desirable;
    return numValue > desirable && numValue <= permissible;
  }).length;

  const aboveLimitCount = parameters.filter(param => {
    const value = results[param.id];
    if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return false;
    const numValue = parseFloat(value);
    const desirable = parseFloat(param.desirable) || 0;
    const permissible = parseFloat(param.permissible) || desirable;
    return numValue > permissible;
  }).length;

  const qualityPercentage = Math.round((desirableCount * 100 + permissibleCount * 66) / parameters.length);
  const overallRemark = qualityPercentage >= 80 ? (isMarathi ? 'उत्कृष्ट' : 'Excellent') :
                        qualityPercentage >= 60 ? (isMarathi ? 'मध्यम' : 'Moderate') :
                        (isMarathi ? 'खराब' : 'Poor');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${isMarathi ? 'पिण्याच्या पाण्याचा गुणवत्ता अहवाल' : 'Drinking Water Quality Report'}</title>
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
            font-size: 11px;
            page-break-inside: avoid;
          }
          .print-table th, .print-table td {
            border: 1px solid #ddd;
            padding: 5px;
            text-align: left;
          }
          .print-table th {
            background-color: #2c3e50 !important;
            color: white !important;
            font-weight: bold;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print-table td {
            text-align: center;
          }
          .print-footer {
            text-align: center;
            margin-top: 15px;
            font-style: italic;
            color: #7f8c8d;
            font-size: 11px;
          }
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
          .water-quality-card {
            border: 2px solid #3498db;
            border-radius: 10px;
            padding: 15px;
            margin: 15px 0;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            page-break-inside: avoid;
          }
          .water-quality-header {
            text-align: center;
            margin-bottom: 15px;
          }
          .water-quality-title {
            font-size: 18px;
            font-weight: bold;
            color: #2c3e50;
            margin: 0;
          }
          .water-quality-content {
            display: flex;
            align-items: center;
            justify-content: space-around;
          }
          .water-quality-gauge {
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
          .water-quality-info {
            flex: 1;
            padding-left: 20px;
          }
          .water-quality-score {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .water-quality-status {
            font-size: 16px;
            font-weight: bold;
            padding: 8px 12px;
            border-radius: 20px;
            text-align: center;
            display: inline-block;
          }
          .progress-bar {
            width: 100%;
            background-color: #e0e0e0;
            border-radius: 10px;
            margin-top: 10px;
            overflow: hidden;
          }
          .progress-fill {
            height: 20px;
            border-radius: 10px;
            transition: width 0.3s ease;
          }
          .text-green { color: #2ecc71 !important; font-weight: bold; }
          .text-yellow { color: #f39c12 !important; font-weight: bold; }
          .text-red { color: #e74c3c !important; font-weight: bold; }
          .bg-green-light { background-color: #d4edda; }
          .bg-yellow-light { background-color: #fff3cd; }
          .bg-red-light { background-color: #f8d7da; }
          
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
              background-color: #2c3e50 !important;
              color: white !important;
            }
            .legend-item {
              color: #000000 !important;
            }
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }
          .marathi-text {
            line-height: 1.3;
          }
          .summary-card {
            text-align: center;
            padding: 8px;
            border-radius: 8px;
          }
          .summary-number {
            font-size: 24px;
            font-weight: bold;
          }
          .summary-label {
            font-size: 10px;
          }
          .status-badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: bold;
          }
        </style>
      </head>
      <body class="${isMarathi ? 'marathi-text' : ''}">
        <div class="print-container">
          <!-- Logo Container -->
          <div class="logo-container">
            <div>
              <img src="logo_com.png" alt="SATARA BIOCHEM Logo" style="height: 100px;" />
            </div>
            <div style="display: flex; gap: 15px;">
              <img src="startup.png" alt="Startup Logo" style="height: 70px;" />
              <img src="msme.png" alt="MSME Logo" style="height: 60px;" />
            </div>
          </div>
          <hr style="width: 100%; margin-top: 5px; border: 1px solid #3498db;">

          <!-- Title -->
          <div style="text-align: center; margin-top: 10px;">
            <div class="report-title">${isMarathi ? 'पिण्याच्या पाण्याचा गुणवत्ता अहवाल' : 'Drinking Water Quality Report'}</div>
            <div class="report-subtitle">${currentDate}</div>
          </div>

          <!-- Farmer & Sample Information -->
          <div class="print-section avoid-break">
            <h3>${isMarathi ? 'शेतकरी आणि नमुना माहिती' : 'Farmer & Sample Information'}</h3>
            <div class="two-columns">
              <div class="column">
                <table class="print-table">
                  <tbody>
                    <tr><td width="40%"><strong>${isMarathi ? 'नाव' : 'Name'}</strong></td><td>${farmerInfo.name || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'फर्मचे नाव' : 'Firm Name'}</strong></td><td>${farmerInfo.firmName || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'संपर्क क्रमांक' : 'Contact No'}</strong></td><td>${farmerInfo.contactNo || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'ईमेल आयडी' : 'Email Id'}</strong></td><td>${farmerInfo.email || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना गोळा करणारा' : 'Sample Collected By'}</strong></td><td>${farmerInfo.sampleCollectedBy || '-'}</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="column">
                <table class="print-table">
                  <tbody>
                    <tr><td width="40%"><strong>${isMarathi ? 'नमुना क्रमांक' : 'Sample No'}</strong></td><td>${farmerInfo.sampleNo || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'चाचणी अहवाल तारीख' : 'Test Report Date'}</strong></td><td>${farmerInfo.testReportDate || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना वर्णन' : 'Sample Description'}</strong></td><td>${farmerInfo.sampleDescription || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना प्राप्त तारीख' : 'Sample Received Date'}</strong></td><td>${farmerInfo.sampleReceivedDate || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना विश्लेषण तारीख' : 'Sample Analysis Date'}</strong></td><td>${farmerInfo.sampleAnalysisDate || '-'}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Summary Cards -->
          <div class="print-section avoid-break">
            <div style="display: flex; gap: 10px; margin-bottom: 15px;">
              <div style="flex: 1; background-color: #d4edda; border-radius: 8px; padding: 10px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold;">${desirableCount}</div>
                <div style="font-size: 11px;">${isMarathi ? 'इच्छित मर्यादेमध्ये' : 'Within Desirable'}</div>
              </div>
              <div style="flex: 1; background-color: #fff3cd; border-radius: 8px; padding: 10px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold;">${permissibleCount}</div>
                <div style="font-size: 11px;">${isMarathi ? 'परवानगीयोग्य मर्यादेमध्ये' : 'Within Permissible'}</div>
              </div>
              <div style="flex: 1; background-color: #f8d7da; border-radius: 8px; padding: 10px; text-align: center;">
                <div style="font-size: 24px; font-weight: bold;">${aboveLimitCount}</div>
                <div style="font-size: 11px;">${isMarathi ? 'मर्यादेपेक्षा जास्त' : 'Above Limit'}</div>
              </div>
            </div>
          </div>

          <!-- Water Quality Parameters Table -->
          <div class="print-section avoid-break">
            <h3>${isMarathi ? 'पाण्याच्या गुणवत्तेचे मापदंड' : 'Water Quality Parameters'}</h3>
            <table class="print-table">
              <thead>
                <tr>
                  <th>${isMarathi ? 'क्र.' : 'No.'}</th>
                  <th>${isMarathi ? 'पॅरामीटर' : 'Parameter'}</th>
                  <th>${isMarathi ? 'युनिट' : 'Unit'}</th>
                  <th>${isMarathi ? 'इच्छित मर्यादा' : 'Desirable'}</th>
                  <th>${isMarathi ? 'परवानगीयोग्य' : 'Permissible'}</th>
                  <th>${isMarathi ? 'निकाल' : 'Result'}</th>
                  <th>${isMarathi ? 'स्थिती' : 'Status'}</th>
                </tr>
              </thead>
              <tbody>
                ${(() => {
                  let rows = '';
                  let addedPhysical = false;
                  let addedChemical = false;
                  let addedBiological = false;

                  parameters.forEach((param, index) => {
                    const value = results[param.id];
                    const numValue = parseFloat(value);
                    const desirable = parseFloat(param.desirable) || 0;
                    const permissible = parseFloat(param.permissible) || desirable;

                    let status = '';
                    let statusClass = '';
                    let statusTextClass = '';

                    if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') {
                      status = isMarathi ? 'इच्छित' : 'Desirable';
                      statusClass = 'bg-green-light';
                      statusTextClass = 'text-green';
                    } else if (isNaN(numValue)) {
                      status = '-';
                      statusClass = 'bg-gray-100';
                      statusTextClass = '';
                    } else if (numValue <= desirable) {
                      status = isMarathi ? 'इच्छित' : 'Desirable';
                      statusClass = 'bg-green-light';
                      statusTextClass = 'text-green';
                    } else if (numValue <= permissible) {
                      status = isMarathi ? 'परवानगीयोग्य' : 'Permissible';
                      statusClass = 'bg-yellow-light';
                      statusTextClass = 'text-yellow';
                    } else {
                      status = isMarathi ? 'मर्यादेपेक्षा जास्त' : 'Above Limit';
                      statusClass = 'bg-red-light';
                      statusTextClass = 'text-red';
                    }

                    if (!addedPhysical && param.category === 'PHYSICAL') {
                      rows += `<tr style="background-color: #d0e8f7;"><td colspan="7" style="text-align: center; font-weight: bold;">${isMarathi ? 'भौतिक घटक' : 'PHYSICAL PARAMETERS'}</td></tr>`;
                      addedPhysical = true;
                    }
                    if (!addedChemical && param.category === 'CHEMICAL') {
                      rows += `<tr style="background-color: #fff3cd;"><td colspan="7" style="text-align: center; font-weight: bold;">${isMarathi ? 'रासायनिक घटक' : 'CHEMICAL PARAMETERS'}</td></tr>`;
                      addedChemical = true;
                    }
                    if (!addedBiological && param.category === 'BIOLOGICAL') {
                      rows += `<tr style="background-color: #d4edda;"><td colspan="7" style="text-align: center; font-weight: bold;">${isMarathi ? 'जैविक घटक' : 'BIOLOGICAL PARAMETERS'}</td></tr>`;
                      addedBiological = true;
                    }

                    rows += `
                      <tr>
                        <td>${index + 1}</td>
                        <td>${param.name}</td>
                        <td>${param.unit}</td>
                        <td>${param.desirable}</td>
                        <td>${param.permissible || '-'}</td>
                        <td>${value || '-'}</td>
                        <td class="${statusClass}"><span class="${statusTextClass} status-badge">${status}</span></td>
                      </tr>
                    `;
                  });
                  return rows;
                })()}
              </tbody>
            </table>
          </div>

          <!-- Water Quality Index Card -->
          <div class="water-quality-card avoid-break">
            <div class="water-quality-header">
              <h3 class="water-quality-title">${isMarathi ? 'एकूण पाणी गुणवत्ता निर्देशांक' : 'Overall Water Quality Index'}</h3>
            </div>
            <div class="water-quality-content">
              <div class="water-quality-gauge">
                <div class="gauge-background"></div>
                <div class="gauge-inner">
                  <div class="gauge-value">${qualityPercentage}%</div>
                </div>
              </div>
              <div class="water-quality-info">
                <div class="water-quality-score">
                  <strong>${isMarathi ? 'गुणवत्ता स्कोअर:' : 'Quality Score:'}</strong> ${qualityPercentage}%
                </div>
                <div class="water-quality-status" style="background-color: ${qualityPercentage >= 80 ? '#27ae60' : (qualityPercentage >= 60 ? '#f39c12' : '#e74c3c')}; color: white;">
                  ${overallRemark}
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${qualityPercentage}%; background-color: ${qualityPercentage >= 80 ? '#27ae60' : (qualityPercentage >= 60 ? '#f39c12' : '#e74c3c')};"></div>
                </div>
                <div class="water-quality-score" style="margin-top: 8px;">
                  <strong>${isMarathi ? 'पिण्यासाठी स्थिती:' : 'Drinking Status:'}</strong>
                  <span style="color: ${isWaterFit(results, parameters) ? '#27ae60' : '#e74c3c'}; font-weight: bold;"> ${waterStatus}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Legend -->
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color" style="background-color: #2ecc71 !important;"></div>
              <span>${isMarathi ? 'इच्छित मर्यादेमध्ये' : 'Within Desirable'}</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #f39c12 !important;"></div>
              <span>${isMarathi ? 'परवानगीयोग्य मर्यादेमध्ये' : 'Within Permissible'}</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #e74c3c !important;"></div>
              <span>${isMarathi ? 'मर्यादेपेक्षा जास्त' : 'Above Limit'}</span>
            </div>
          </div>

          <!-- Recommendations -->
          <div class="print-section avoid-break">
            <h3>${isMarathi ? 'शिफारसी' : 'Recommendations'}</h3>
            <div style="background-color: #fff3cd; padding: 12px; border-radius: 8px; font-size: 11px;">
              ${(() => {
                const alerts = [];
                if (results.NITRATES > 45) {
                  alerts.push(`⚠️ ${isMarathi ? 'नायट्रेटची पातळी जास्त आहे. नायट्रेट-विशिष्ट फिल्टर वापरा.' : 'Nitrate level is high. Use nitrate-specific filter.'}`);
                }
                if (results.TDS > 500) {
                  alerts.push(`⚠️ ${isMarathi ? 'एकूण विरघळलेले घन जास्त आहेत. रिव्हर्स ऑस्मोसिस वापरा.' : 'TDS is elevated. Use Reverse Osmosis.'}`);
                }
                if (results.IRON > 0.3) {
                  alerts.push(`⚠️ ${isMarathi ? 'लोहाची पातळी जास्त आहे. लोह काढून टाकणारा फिल्टर वापरा.' : 'Iron level is high. Use iron removal filter.'}`);
                }
                const pHValue = parseFloat(results.PH_VALUE);
                if (pHValue < 6.5 || pHValue > 8) {
                  alerts.push(`⚠️ ${isMarathi ? 'पीएच पातळी योग्य नाही. पीएच समायोजन आवश्यक.' : 'pH level is not optimal. pH adjustment needed.'}`);
                }
                if (alerts.length > 0) {
                  return alerts.map(a => `<div style="margin-bottom: 5px;">${a}</div>`).join('');
                } else {
                  return `<div>✓ ${isMarathi ? 'सर्व पॅरामीटर्स स्वीकार्य श्रेणीमध्ये आहेत. पाण्याची गुणवत्ता चांगली आहे.' : 'All parameters are within acceptable ranges. Water quality is good.'}</div>`;
                }
              })()}
            </div>
          </div>

          <!-- Footer with Analyst and Authorization -->
          <div class="header-container avoid-break">
            <div class="lab-header-container">
              <div class="lab-header">
                <h2>${t.analyst}</h2>
                <div class="lab-notes">
                  <p class="note-title">${t.note}</p>
                  <ul class="note-items">
                    <li>${t.note1}</li>
                    <li>${t.note2}</li>
                    <li>${t.note3}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="authorization-container">
              <div class="signature-image">
                <img src="signature.png" alt="Digital Signature" style="height: 70px;" />
              </div>
              <div class="authorization-text">
                ${t.authorizedBy}<br>
                <strong>${t.mdName}<br></strong>
                <strong>${t.designation}</strong>
              </div>
            </div>
          </div>

          <!-- Slogan Header -->
          <div class="top-slogan-header avoid-break">
            <div class="slogan-text">
              <div class="main-slogan">${isMarathi ? 'निरोगी पाणी, निरोगी आयुष्य' : 'Healthy Water, Healthy Life'}</div>
            </div>
            <div class="center-icon">
              <img src="Soil.png" alt="Soil Icon" class="logo-icon" />
            </div>
            <div class="right-icon">
              <img src="qr.png" alt="QR Code" class="logo-icon" />
            </div>
          </div>

          <!-- Address Container -->
          <div class="compact-address-container avoid-break">
            <div class="address-row">
              <div class="address-block">
                <div class="address-header">
                  <svg class="address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <h4 class="address-title">${t.regOfficeAddress}</h4>
                </div>
                <p class="address-text">CIII Center for Invention, Innovation, Incubation, 3rd Floor, G-building YCIS, Powai Naka, Satara</p>
              </div>
              <div class="separator">|</div>
              <div class="address-block">
                <div class="address-header">
                  <svg class="address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                  <h4 class="address-title">${t.labAddress}</h4>
                </div>
                <p class="address-text">B-3 Dipali Complex, Near Karad Urban Bank, Dahiwadi Rd., Pusegaon. Tal- Khatav, Dist- Satara. MH. 415 502</p>
              </div>
              <div class="separator">|</div>
              <div class="address-block">
                <div class="address-header">
                  <svg class="address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <h4 class="address-title">${t.contactInfo}</h4>
                </div>
                <p class="address-text">
                  <span class="contact-line">📞 +91 93225-26581</span>
                  <span class="contact-line">✉️ satarabiochem@gmail.com</span>
                </p>
              </div>
              <div class="separator">|</div>
              <div class="address-block">
                <div class="address-header">
                  <svg class="address-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                  <h4 class="address-title">${t.website}</h4>
                </div>
                <p class="address-text">www.satarabiochem.in</p>
              </div>
            </div>
          </div>

          <div class="print-footer">
            <p>${isMarathi ? 'हा अहवाल केवळ माहितीच्या उद्देशाने आहे' : 'This report is for informational purposes only'}</p>
            <p>${currentDate}</p>
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

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-4 md:p-6 ml-30 ">
            {/* Language Selector */}
            <div className="flex justify-end mb-4">

            </div>

            <div className="max-w-5xl mx-auto mt-10">

                {/* Farmer Information Section */}
                <div className="bg-white rounded-xl shadow-md mb-8 border border-green-200">
                    <div className="p-6">
                        <div className="flex justify-end">
                            <div className="ml-4">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-150"
                                >
                                    <option value="english">English</option>
                                    <option value="marathi">Marathi</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center">
                            <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                                {t.title}
                            </h1>
                        </div>

                        {/* Personal Information */}
                        <fieldset className="border border-gray-200 rounded-md p-4 mb-6">
                            <legend className="text-lg font-semibold text-pink-600 px-2">
                                {t.personalInfo}
                            </legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                {[
                                    { field: 'name', label: t.name, type: 'text', placeholder: language === 'marathi' ? 'नाव प्रविष्ट करा' : 'Enter Name' },
                                    { field: 'firmName', label: t.firmName, type: 'text', placeholder: language === 'marathi' ? 'फर्मचे नाव प्रविष्ट करा' : 'Enter Firm Name' },
                                    { field: 'email', label: t.email, type: 'email', placeholder: language === 'marathi' ? 'ईमेल प्रविष्ट करा' : 'Enter Email' },
                                    { field: 'contactNo', label: t.contactNo, type: 'text', placeholder: language === 'marathi' ? 'संपर्क क्रमांक प्रविष्ट करा' : 'Enter Contact Number' },
                                    { field: 'sampleCollectedBy', label: t.sampleCollectedBy, type: 'text', placeholder: language === 'marathi' ? 'संग्राहकाचे नाव प्रविष्ट करा' : 'Enter Collector Name' }
                                ].map((item) => (
                                    <div key={item.field}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{item.label}:</label>
                                        <input
                                            type={item.type}
                                            value={farmerInfo[item.field]}
                                            onChange={(e) => handleFarmerInfoChange(item.field, e.target.value)}
                                            placeholder={item.placeholder}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Sample Information */}
                        <fieldset className="border border-gray-200 rounded-md p-4 mb-6">
                            <legend className="text-lg font-semibold text-cyan-700 px-2">
                                {t.sampleInfo}
                            </legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                {[
                                    { field: 'sampleNo', label: t.sampleNo, type: 'text', placeholder: language === 'marathi' ? 'नमुना क्रमांक प्रविष्ट करा' : 'Enter Sample No' },
                                    { field: 'testReportDate', label: t.testReportDate, type: 'date' },
                                    { field: 'sampleDescription', label: t.sampleDescription, type: 'text', placeholder: language === 'marathi' ? 'नमुना वर्णन प्रविष्ट करा' : 'Enter Sample Description' },
                                    { field: 'sampleReceivedDate', label: t.sampleReceivedDate, type: 'date' },
                                    { field: 'sampleAnalysisDate', label: t.sampleAnalysisDate, type: 'date' }
                                ].map((item) => (
                                    <div key={item.field}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{item.label}:</label>
                                        <input
                                            type={item.type}
                                            value={farmerInfo[item.field]}
                                            onChange={(e) => handleFarmerInfoChange(item.field, e.target.value)}
                                            placeholder={item.placeholder}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        <div className="flex justify-center">
                            <button
                                onClick={() => {
                                    console.log("Farmer Information:", farmerInfo);
                                    const fit = isWaterFit(results, parameters);
                                    console.log(`Water is ${fit ? 'FIT' : 'NOT FIT'} for human consumption`);
                                    setSubmitted(true);
                                }}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition duration-300 transform hover:scale-105"
                            >
                                {t.submit}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Water Quality Analysis Section */}
                {submitted && (
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-blue-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-blue-700">
                                    {t.waterQuality}
                                </h2>
                                <div className={`inline-block mt-2 px-3 py-1 rounded-full text-sm text-white ${overallStatus()}`}>
                                    {t.waterStatus}: {
                                        language === 'marathi'
                                            ? (isWaterFit(results, parameters) ? t.fitMarathi : t.notFitMarathi)
                                            : (isWaterFit(results, parameters) ? t.fit : t.notFit)
                                    }
                                </div>

                            </div>

                        </div>

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                            {[
                                {
                                    title: t.desirableLimit,
                                    count: parameters.filter(param => {
                                        const value = results[param.id];
                                        if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return true;
                                        const numValue = parseFloat(value);
                                        const desirable = parseFloat(param.desirable) || 0;
                                        return numValue <= desirable;
                                    }).length,
                                    color: 'bg-green-100 text-green-800'
                                },
                                {
                                    title: t.permissibleLimit,
                                    count: parameters.filter(param => {
                                        const value = results[param.id];
                                        if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return false;
                                        const numValue = parseFloat(value);
                                        const desirable = parseFloat(param.desirable) || 0;
                                        const permissible = parseFloat(param.permissible) || desirable;
                                        return numValue > desirable && numValue <= permissible;
                                    }).length,
                                    color: 'bg-yellow-100 text-yellow-800'
                                },
                                {
                                    title: t.aboveLimit,
                                    count: parameters.filter(param => {
                                        const value = results[param.id];
                                        if (value === '-' || value === 'Agressible' || value === 'Unobjectionable' || value === '<1') return false;
                                        const numValue = parseFloat(value);
                                        const desirable = parseFloat(param.desirable) || 0;
                                        const permissible = parseFloat(param.permissible) || desirable;
                                        return numValue > permissible;
                                    }).length,
                                    color: 'bg-red-100 text-red-800'
                                }
                            ].map((card, index) => (
                                <div key={index} className={`p-4 rounded-lg ${card.color}`}>
                                    <div className="text-2xl font-bold">{card.count}</div>
                                    <div className="text-sm">{card.title}</div>
                                </div>
                            ))}
                        </div>

                        {/* Parameters Table */}
                        <div className="mb-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {language === 'marathi' ? 'क्र.' : 'No.'}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {t.parameter}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {t.unit}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {t.desirable}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {t.permissible}
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                {t.results}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {(() => {
                                            let globalIndex = 1; // Global counter for "No."

                                            return categories.map((category) => (
                                                <React.Fragment key={category}>
                                                    <tr className="bg-blue-50">
                                                        <td colSpan="6" className="px-6 py-2 font-bold text-blue-800">
                                                            {category === 'PHYSICAL' ? t.physicalParams :
                                                                category === 'CHEMICAL' ? t.chemicalParams :
                                                                    t.biologicalParams}
                                                        </td>
                                                    </tr>

                                                    {parameters
                                                        .filter(param => param.category === category)
                                                        .map((param) => (
                                                            <tr key={param.id} className={globalIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {globalIndex++}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                    {param.name}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {param.unit}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {param.desirable}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                    {param.permissible}
                                                                </td>
                                                                <td className="px-6 py-4 whitespace-nowrap">
                                                                    <input
                                                                        type="text"
                                                                        value={results[param.id]}
                                                                        onChange={(e) => handleWaterResultChange(param.id, e.target.value)}
                                                                        className={`w-24 px-2 py-1 border rounded text-sm ${getStatusColor(
                                                                            results[param.id],
                                                                            parseFloat(param.desirable) || 0,
                                                                            parseFloat(param.permissible) || parseFloat(param.desirable) || 0
                                                                        )}`}
                                                                    />
                                                                </td>
                                                            </tr>
                                                        ))}
                                                </React.Fragment>
                                            ));
                                        })()}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                        {/* Water Quality Visualization */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-purple-100">
                          
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                

                                <div>
                                    <h3 className="font-medium mb-2">{t.recommendations}</h3>
                                    <div className="bg-yellow-50 p-4 rounded-lg text-sm">
                                        {(() => {
                                            const alerts = [];

                                            if (results.NITRATES > 45) {
                                                alerts.push(
                                                    <div key="nitrate" className="flex items-start mb-2">
                                                        <span className="text-red-500 mr-2">⚠️</span>
                                                        <p>{language === 'marathi'
                                                            ? 'नायट्रेटची पातळी जास्त आहे. नायट्रेट-विशिष्ट फिल्टर वापरण्याचा विचार करा.'
                                                            : 'Nitrate level is high. Consider using a nitrate-specific filter.'}
                                                        </p>
                                                    </div>
                                                );
                                            }

                                            if (results.TDS > 500) {
                                                alerts.push(
                                                    <div key="tds" className="flex items-start mb-2">
                                                        <span className="text-red-500 mr-2">⚠️</span>
                                                        <p>{language === 'marathi'
                                                            ? 'एकूण विरघळलेले घन जास्त आहेत. रिव्हर्स ऑस्मोसिस फिल्टरेशन शिफारस केली जाते.'
                                                            : 'Total Dissolved Solids are elevated. Reverse osmosis filtration recommended.'}
                                                        </p>
                                                    </div>
                                                );
                                            }

                                            if (results.IRON > 0.3) {
                                                alerts.push(
                                                    <div key="iron" className="flex items-start mb-2">
                                                        <span className="text-red-500 mr-2">⚠️</span>
                                                        <p>{language === 'marathi'
                                                            ? 'लोह सामग्री इच्छित पातळीपेक्षा जास्त आहे. लोह काढून टाकणारा फिल्टर सुचविला जातो.'
                                                            : 'Iron content is above desirable level. Iron removal filter suggested.'}
                                                        </p>
                                                    </div>
                                                );
                                            }

                                            const pHValue = parseFloat(results.PH_VALUE);
                                            if (pHValue < 6.5 || pHValue > 8) {
                                                alerts.push(
                                                    <div key="ph" className="flex items-start mb-2">
                                                        <span className="text-red-500 mr-2">⚠️</span>
                                                        <p>{language === 'marathi'
                                                            ? 'पीएच पातळी इष्टतम श्रेणीबाहेर आहे. पीएच समायोजन आवश्यक आहे.'
                                                            : 'pH level is outside optimal range. pH adjustment needed.'}
                                                        </p>
                                                    </div>
                                                );
                                            }

                                            if (alerts.length > 0) {
                                                return alerts;
                                            } else {
                                                return (
                                                    <div className="flex items-start">
                                                        <span className="text-green-500 mr-2">✓</span>
                                                        <p>
                                                            {language === 'marathi'
                                                                ? 'सर्व प्रमुख पॅरामीटर्स स्वीकार्य श्रेणीमध्ये आहेत. पाण्याची गुणवत्ता चांगली आहे.'
                                                                : 'All key parameters are within acceptable ranges. Water quality is good.'}
                                                        </p>
                                                    </div>
                                                );
                                            }
                                        })()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Final Actions */}
                        <div className="flex flex-col sm:flex-row justify-left gap-4 mt-6">

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="waterStatusCheckbox"
                                    onChange={(e) => {
                                        if (e.target.checked) {
                                            const fit = isWaterFit(results, parameters);
                                            alert(
                                                language === 'marathi'
                                                    ? `पाणी ${fit ? t.fitMarathi : t.notFitMarathi}`
                                                    : `Water is ${fit ? t.fit : t.notFit} for human consumption`
                                            );
                                            // Uncheck after showing alert
                                            e.target.checked = true;
                                        }
                                    }}
                                    className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                                />
                                <label htmlFor="waterStatusCheckbox" className="ml-2 text-sm font-medium text-gray-700">
                                    {t.generateReport}
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                            <button
                                onClick={handlePrint}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                                </svg>
                                {language === 'marathi' ? 'अहवाल मुद्रित करा' : 'Print Report'}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Print View Modal */}

        </div>
    );
};

export default WaterReport;