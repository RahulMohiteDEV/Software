import React, { useState } from 'react';

const Irrigation = () => {
    const [language, setLanguage] = useState('english');
    const [submitted, setSubmitted] = useState(false);

    const [farmerInfo, setFarmerInfo] = useState({
        name: '',
        firmName: '',
        email: '',
        address: '',
        contactNo: '',
        sampleCollectedBy: '',
        sampleNo: '',
        testReportNo: '',
        testReportDate: '',
        sampleDescription: '',
        sampleReceivedDate: '',
        sampleAnalysisDate: '',
        testReportIssueDate: '',
        sampleAnalysisBy: '',
    });

    const [waterData, setWaterData] = useState([
        {
            id: 1,
            label: 'pH VALUE',
            unit: '-',
            ranges: ['6.5-8.0', '7.0-8.5', '>8.5'],
            user: '',
            marathiLabel: 'सामू (pH)'
        },
        {
            id: 2,
            label: 'ELECTRICAL CONDUCTIVITY',
            unit: 'ds/m',
            ranges: ['<0.75', '0.75-2.0', '>2.0'],
            user: '',
            marathiLabel: 'विद्युत वाहकता '
        },
        {
            id: 3,
            label: 'CARBONATE',
            unit: 'meq/l',
            ranges: ['<0', '>0', 'N/A'],
            user: '',
            marathiLabel: 'कार्बोनेट'
        },
        {
            id: 4,
            label: 'BI CARBONATES',
            unit: 'meq/l',
            ranges: ['<1.5', '1.5-8.5', '>8.5'],
            user: '',
            marathiLabel: 'बायकार्बोनेट'
        },
        {
            id: 5,
            label: 'CHLORIDES',
            unit: 'meq/l',
            ranges: ['<2.0', '2.0-4.0', '>4.0'],
            user: '',
            marathiLabel: 'क्लोराईड'
        },
        {
            id: 6,
            label: 'RSC',
            unit: 'meq/l',
            ranges: ['<1.25', '1.25-2.5', '>2.5'],
            user: '',
            marathiLabel: 'रिसिड्युअल सोडियम'
        },
        {
            id: 7,
            label: 'SULPHATE',
            unit: 'meq/l',
            ranges: ['<4.0', '4.0-10', '>10'],
            user: '',
            marathiLabel: 'सल्फेट'
        },
        {
            id: 8,
            label: 'Ca/Mg RATIO',
            unit: 'meq/l',
            ranges: ['>1.0', '0.7-1.0', '<0.7'],
            user: '',
            marathiLabel: 'कॅल्शियम / मॅग्नेशियम'
        },
    ]);

    // Translations
    const translations = {
        english: {
            title: "Irrigation Water Quality Report",
            personalInfo: "📍 Personal Information",
            sampleInfo: "🧪 Sample Information",
            name: "Name",
            firmName: "Firm Name",
            email: "Email Id",
            address: "Address",
            contactNo: "Contact No",
            sampleCollectedBy: "Sample Collected By",
            sampleNo: "Sample No",
            testReportNo: "Test Report No",
            testReportDate: "Test Report Date",
            sampleDescription: "Sample Description",
            sampleReceivedDate: "Sample Received date",
            sampleAnalysisDate: "Sample Analysis Date",
            testReportIssueDate: "Test Repor Issue Date",
            sampleAnalysisBy: "Sample Analysis By",
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
            submit: "Submit & Show Analysis",
        },
        marathi: {
            title: "जल सिंचन गुणवत्ता अहवाल",
            personalInfo: "📍 वैयक्तिक माहिती",
            sampleInfo: "🧪 नमुना माहिती",
            name: "नाव",
            firmName: "फर्मचे नाव",
            email: "ईमेल आयडी",
            address: "पत्ता",
            contactNo: "संपर्क क्रमांक",
            sampleCollectedBy: "नमुना गोळा करणारा",
            testReportNo: "चाचणी अहवाल क्रमांक ",
            sampleNo: "नमुना क्रमांक",
            testReportDate: "चाचणी अहवाल तारीख",
            sampleDescription: "नमुना वर्णन",
            sampleReceivedDate: "नमुना प्राप्त तारीख",
            sampleAnalysisDate: "नमुना विश्लेषण तारीख",
            testReportIssueDate: "चाचणी अहवाल जारी करण्याची तारीख ",
            sampleAnalysisBy: "नमूना विश्लेषण ",
            submit: "सबमिट करा आणि विश्लेषण दाखवा",
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

    const handleInputChange = (id, value) => {
        setWaterData(prevData =>
            prevData.map(item =>
                item.id === id ? { ...item, user: value } : item
            )
        );
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const getRemark = (item) => {
        const value = parseFloat(item.user) || 0;
        const [goodRange, moderateRange, poorRange] = item.ranges;

        // Special handling for pH (item.id === 1)
        if (item.id === 1) {
            if (value >= 6.5 && value <= 8.0) return 'good';
            if ((value >= 7.0 && value <= 8.5) || (value >= 6.5 && value < 7.0)) return 'moderate';
            return 'poor';
        }

        // Special handling for Carbonate (item.id === 3)
        if (item.id === 3) {
            if (value < 0) return 'good';
            if (value > 0) return 'moderate';
            return 'good'; // exactly 0
        }

        // Generic range checking
        if (goodRange.startsWith('<') && value < parseFloat(goodRange.substring(1))) {
            return 'good';
        }
        if (goodRange.startsWith('>') && value > parseFloat(goodRange.substring(1))) {
            return 'good';
        }
        if (moderateRange.includes('-')) {
            const [min, max] = moderateRange.split('-').map(parseFloat);
            if (value >= min && value <= max) return 'moderate';
        }
        return 'poor';
    };

    const getRemarkDisplay = (remark) => {
        switch (remark) {
            case 'good':
                return language === 'marathi' ? 'चांगली' : 'Good';
            case 'moderate':
                return language === 'marathi' ? 'बरी' : 'Moderate';
            case 'poor':
                return language === 'marathi' ? 'खराब' : 'Poor';
            default:
                return '';
        }
    };

    const getRemarkClass = (remark) => {
        switch (remark) {
            case 'good': return 'text-green-600 font-bold';
            case 'moderate': return 'text-yellow-600 font-bold';
            case 'poor': return 'text-red-600 font-bold';
            default: return '';
        }
    };

    // Calculate overall water quality
    const calculateOverallQuality = () => {
        const remarks = waterData.map(item => getRemark(item));
        const goodCount = remarks.filter(r => r === 'good').length;
        const moderateCount = remarks.filter(r => r === 'moderate').length;
        const poorCount = remarks.filter(r => r === 'poor').length;

        const qualityPercentage = Math.round(
            (goodCount * 1 + moderateCount * 0.66 + poorCount * 0.33) / waterData.length * 100
        );

        let overallRemark, remarkClass;
        if (qualityPercentage >= 80) {
            overallRemark = language === 'marathi' ? 'उत्कृष्ट' : 'Excellent';
            remarkClass = 'text-green-600';
        } else if (qualityPercentage >= 60) {
            overallRemark = language === 'marathi' ? 'मध्यम' : 'Moderate';
            remarkClass = 'text-yellow-600';
        } else {
            overallRemark = language === 'marathi' ? 'खराब' : 'Poor';
            remarkClass = 'text-red-600';
        }

        return { qualityPercentage, overallRemark, remarkClass };
    };

    const { qualityPercentage, overallRemark, remarkClass } = calculateOverallQuality();

 
    const handlePrint = () => {
  const printWindow = window.open('', '', 'width=1200,height=800');
  const isMarathi = language === 'marathi';
  const currentDate = new Date().toLocaleString();

  // Calculate overall quality for display
  const { qualityPercentage, overallRemark, remarkClass } = calculateOverallQuality();

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${isMarathi ? 'जल सिंचन गुणवत्ता अहवाल' : 'Irrigation Water Quality Report'}</title>
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
            font-size: 12px;
            page-break-inside: avoid;
          }
          .print-table th, .print-table td {
            border: 1px solid #ddd;
            padding: 6px;
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
          .bg-green-light { background-color: #d4edda; }
          .bg-yellow-light { background-color: #fff3cd; }
          .bg-red-light { background-color: #f8d7da; }
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
            <div class="report-title">${isMarathi ? 'जल सिंचन गुणवत्ता अहवाल' : 'Irrigation Water Quality Report'}</div>
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
                    <tr><td><strong>${isMarathi ? 'पत्ता' : 'Address'}</strong></td><td>${farmerInfo.address || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना गोळा करणारा' : 'Sample Collected By'}</strong></td><td>${farmerInfo.sampleCollectedBy || '-'}</td></tr>
                     <tr><td><strong>${isMarathi ? 'नमुना विश्लेषण कर्ता' : 'Sample Analysis By'}</strong></td><td>${farmerInfo.sampleAnalysisBy || '-'}</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="column">
                <table class="print-table">
                  <tbody>
                    <tr><td width="40%"><strong>${isMarathi ? 'नमुना क्रमांक' : 'Sample No'}</strong></td><td>${farmerInfo.sampleNo || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'चाचणी अहवाल क्रमांक' : 'Test Report No'}</strong></td><td>${farmerInfo.testReportNo || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'चाचणी अहवाल तारीख' : 'Test Report Date'}</strong></td><td>${farmerInfo.testReportDate || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना वर्णन' : 'Sample Description'}</strong></td><td>${farmerInfo.sampleDescription || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना प्राप्त तारीख' : 'Sample Received Date'}</strong></td><td>${farmerInfo.sampleReceivedDate || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'नमुना विश्लेषण तारीख' : 'Sample Analysis Date'}</strong></td><td>${farmerInfo.sampleAnalysisDate || '-'}</td></tr>
                    <tr><td><strong>${isMarathi ? 'चाचणी अहवाल जारी तारीख' : 'Test Report Issue Date'}</strong></td><td>${farmerInfo.testReportIssueDate || '-'}</td></tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Water Quality Parameters Table -->
          <div class="print-section avoid-break">
            <h3>${isMarathi ? 'पाण्याची गुणवत्ता मापदंड' : 'Water Quality Parameters'}</h3>
            <table class="print-table">
              <thead>
                <tr>
                  <th>${isMarathi ? 'अ.क्र.' : 'No.'}</th>
                  <th>${isMarathi ? 'घटक' : 'Parameter'}</th>
                  <th>${isMarathi ? 'मात्रा' : 'Unit'}</th>
                  <th>${isMarathi ? 'चांगली' : 'Good'}</th>
                  <th>${isMarathi ? 'बरी' : 'Moderate'}</th>
                  <th>${isMarathi ? 'खराब' : 'Poor'}</th>
                  <th>${isMarathi ? 'प्रमाण' : 'Your Value'}</th>
                  <th>${isMarathi ? 'निष्कर्ष' : 'Result'}</th>
                </tr>
              </thead>
              <tbody>
                ${waterData.map(item => {
                  const remark = getRemark(item);
                  const remarkDisplay = getRemarkDisplay(remark);
                  const remarkClass = remark === 'good' ? 'text-green' : (remark === 'moderate' ? 'text-yellow' : 'text-red');
                  return `
                    <tr>
                      <td>${item.id}</td>
                      <td>${isMarathi ? item.marathiLabel : item.label}</td>
                      <td>${item.unit}</td>
                      <td class="bg-green-light">${item.ranges[0]}</td>
                      <td class="bg-yellow-light">${item.ranges[1]}</td>
                      <td class="bg-red-light">${item.ranges[2] || '-'}</td>
                      <td>${item.user || '-'}</td>
                      <td class="${remarkClass}">${remarkDisplay}</td>
                    </tr>
                  `;
                }).join('')}
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
                  <div class="gauge-value">${qualityPercentage.toFixed(1)}%</div>
                </div>
              </div>
              <div class="water-quality-info">
                <div class="water-quality-score">
                  <strong>${isMarathi ? 'गुणवत्ता स्कोअर:' : 'Quality Score:'}</strong> ${qualityPercentage.toFixed(1)}%
                </div>
                <div class="water-quality-status" style="background-color: ${qualityPercentage >= 80 ? '#27ae60' : (qualityPercentage >= 60 ? '#f39c12' : '#e74c3c')}; color: white;">
                  ${overallRemark}
                </div>
                <div class="progress-bar">
                  <div class="progress-fill" style="width: ${qualityPercentage}%; background-color: ${qualityPercentage >= 80 ? '#27ae60' : (qualityPercentage >= 60 ? '#f39c12' : '#e74c3c')};"></div>
                </div>
                <div class="water-quality-score" style="margin-top: 8px;">
                  <strong>${isMarathi ? 'निष्कर्ष:' : 'Conclusion:'}</strong> 
                  ${qualityPercentage >= 60 
                    ? (isMarathi ? 'सिंचनासाठी योग्य' : 'Suitable for irrigation') 
                    : (isMarathi ? 'सिंचनासाठी योग्य नाही' : 'Not suitable for irrigation')}
                </div>
              </div>
            </div>
          </div>

          <!-- Legend -->
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color" style="background-color: #2ecc71 !important;"></div>
              <span>${isMarathi ? 'चांगली' : 'Good'}</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #f39c12 !important;"></div>
              <span>${isMarathi ? 'बरी' : 'Moderate'}</span>
            </div>
            <div class="legend-item">
              <div class="legend-color" style="background-color: #e74c3c !important;"></div>
              <span>${isMarathi ? 'खराब' : 'Poor'}</span>
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
              <div class="main-slogan">${isMarathi ? 'निरोगी पाणी, निरोगी शेती' : 'Healthy Water, Healthy Farming'}</div>
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
                  <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
                  <span class="contact-line">📞 +91 93225-26581</span>
                  <span class="contact-line">✉️ satarabiochem@gmail.com</span>
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
        <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 p-4 md:p-6 ml-30">
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

                        {/* Personal Info */}
                        <fieldset className="border border-gray-200 rounded-md p-4 mb-6">
                            <legend className="text-lg font-semibold text-pink-600 px-2">
                                {t.personalInfo}
                            </legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                {['name', 'firmName', 'address', 'email', 'contactNo', 'sampleCollectedBy'].map((field) => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {t[field]}:
                                        </label>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            value={farmerInfo[field]}
                                            onChange={(e) => handleFarmerInfoChange(field, e.target.value)}
                                            placeholder={language === 'marathi' ? 'माहिती प्रविष्ट करा' : 'Enter information'}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Sample Info */}
                        <fieldset className="border border-gray-200 rounded-md p-4 mb-6">
                            <legend className="text-lg font-semibold text-cyan-700 px-2">
                                {t.sampleInfo}
                            </legend>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                {[
                                    { field: 'sampleNo', type: 'text' },
                                    { field: 'testReportNo', type: 'text' },
                                    { field: 'testReportDate', type: 'date' },
                                    { field: 'sampleDescription', type: 'text' },
                                    { field: 'sampleReceivedDate', type: 'date' },
                                    { field: 'sampleAnalysisDate', type: 'date' },
                                    { field: 'testReportIssueDate', type: 'date' },
                                    { field: 'sampleAnalysisBy', type: 'text' },
                                ].map(({ field, type }) => (
                                    <div key={field}>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            {t[field]}:
                                        </label>
                                        <input
                                            type={type}
                                            value={farmerInfo[field]}
                                            onChange={(e) => handleFarmerInfoChange(field, e.target.value)}
                                            placeholder={language === 'marathi' ? 'माहिती प्रविष्ट करा' : 'Enter information'}
                                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </fieldset>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition duration-300 transform hover:scale-105"
                            >
                                {t.submit}
                            </button>
                        </div>
                    </div>

                    {/* Conditional Analysis or Print Section */}
                    {submitted && (
                        <>
                            {/* Analysis Table */}
                            <div className="overflow-x-auto mt-10 bg-white rounded-lg shadow-md p-4">
                                <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
                                    {language === 'marathi' ? 'पाण्याचे विश्लेषण' : 'Water Quality Analysis'}
                                </h2>

                                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <p className="text-blue-800 text-center">
                                        {language === 'marathi'
                                            ? 'खालील तक्त्यामध्ये तुमच्या पाण्याच्या नमुन्याची मूल्ये प्रविष्ट करा. निकाल आपोआप दिसेल.'
                                            : 'Enter your water sample values in the table below. Results will update automatically.'}
                                    </p>
                                </div>

                                <table className="min-w-full border text-sm text-center bg-white shadow-sm">
                                    <thead className="bg-green-600 text-white">
                                        <tr>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'अ. क्र.' : 'No.'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'घटक' : 'Parameter'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'मात्रा' : 'Unit'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'चांगली' : 'Good'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'बरी' : 'Moderate'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'खराब' : 'Poor'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'प्रमाण' : 'Your Value'}</th>
                                            <th className="border px-3 py-2">{language === 'marathi' ? 'निष्कर्ष' : 'Result'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {waterData.map((item) => {
                                            const remark = getRemark(item);
                                            const remarkDisplay = getRemarkDisplay(remark);
                                            const remarkClass = getRemarkClass(remark);

                                            return (
                                                <tr key={item.id} className="border-t hover:bg-gray-50">
                                                    <td className="border px-3 py-2">{item.id}</td>
                                                    <td className="border px-3 py-2 font-medium">
                                                        {language === 'marathi' ? item.marathiLabel : item.label}
                                                    </td>
                                                    <td className="border px-3 py-2">{item.unit}</td>
                                                    <td className="border px-3 py-2 bg-green-50">{item.ranges[0]}</td>
                                                    <td className="border px-3 py-2 bg-yellow-50">{item.ranges[1]}</td>
                                                    <td className="border px-3 py-2 bg-red-50">{item.ranges[2] || '-'}</td>
                                                    <td className="border px-3 py-2">
                                                        <input
                                                            type="number"
                                                            step="0.01"
                                                            className="w-20 px-2 py-1 border rounded focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center"
                                                            value={item.user}
                                                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                                                        />
                                                    </td>
                                                    <td className={`border px-3 py-2 ${remarkClass}`}>
                                                        {remarkDisplay}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                                        {language === 'marathi' ? 'एकूण निकाल' : 'Overall Assessment'}
                                    </h3>
                                    <div className="flex items-center">
                                        <div className="flex-1 bg-white p-3 rounded border">
                                            <p className="text-gray-700">
                                                {language === 'marathi'
                                                    ? `तुमच्या पाण्याच्या नमुन्याची एकूण गुणवत्ता: ${overallRemark}`
                                                    : `Your water sample overall quality: ${overallRemark}`}
                                            </p>
                                            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                                                <div
                                                    className="h-4 rounded-full"
                                                    style={{
                                                        width: `${qualityPercentage}%`,
                                                        backgroundColor:
                                                            qualityPercentage >= 80 ? '#10B981' :
                                                                qualityPercentage >= 60 ? '#F59E0B' : '#EF4444'
                                                    }}
                                                ></div>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {language === 'marathi'
                                                    ? `${qualityPercentage}% गुणवत्ता - ${qualityPercentage >= 60 ? 'सिंचनासाठी योग्य' : 'सिंचनासाठी योग्य नाही'}`
                                                    : `${qualityPercentage}% quality - ${qualityPercentage >= 60 ? 'Suitable for irrigation' : 'Not suitable for irrigation'}`}
                                            </p>
                                        </div>
                                        <div className="ml-4 text-4xl">
                                            {qualityPercentage >= 80 ? '💧😊' :
                                                qualityPercentage >= 60 ? '💧😐' : '💧😞'}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 text-sm text-gray-600 text-center">
                                    {language === 'marathi'
                                        ? 'सर्व मूल्ये मानक प्रयोगशाळा पद्धतीने मोजली गेली आहेत.'
                                        : 'All values are measured using standard laboratory methods.'}
                                </div>
                            </div>
                            {/* Print Button */}
                            <div className="text-center mt-8">
                                <button
                                    onClick={handlePrint}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md mb-6"
                                >
                                    {language === 'marathi' ? 'अहवाल प्रिंट करा' : 'Print Report'}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Irrigation;