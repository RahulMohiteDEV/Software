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
        const printWindow = window.open('', '', 'width=1000,height=600');
        const isMarathi = language === 'marathi';
        const currentDate = new Date().toLocaleString();

        printWindow.document.write(`
          <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Water Quality Report</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="font-sans p-2">

  <!-- Header with logos -->
  <div class="flex flex-col items-center mb-1 mt-1">
    <div class="flex justify-between items-center w-full">
      <img src="logo_com.png" alt="SATARA BIOCHEM Logo" class="h-28" />
      <div class="flex gap-5 mt-2">
        <img src="startup.png" alt="Startup Logo" class="h-24" />
        <img src="msme.png" alt="MSME Logo" class="h-16" />
      </div>
    </div>
  </div>
<style>
 .logo {
          height: 160px;
          width: auto;
          margin-right:800px
</style>
  <!-- Title & Date -->
  <div class="text-center ">
    <h1 class="text-xl font-bold">
      ${isMarathi ? 'जल सिंचन गुणवत्ता अहवाल' : 'Irrigation Water Quality Report'}
    </h1>
    <p class="text-sm font-semibold mt-1">
      ${currentDate}
    </p>
  </div>

  <div class="w-full h-0.5 bg-black my-4"></div>

  <!-- Farmer & Sample Info -->
  <section class="mb-4">
    <h2 class="text-lg  text-center font-bold text-emerald-800 mb-2">
      ${isMarathi ? 'शेतकरी आणि नमुना माहिती' : 'Farmer & Sample Information'}
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-2 gap-6">
      <!-- Personal Info -->
      <div>
        <h3 class="font-bold text-black mb-2">
          ${isMarathi ? '📍 वैयक्तिक माहिती📍' : '📍 Personal Information📍'}
        </h3>
        <p><strong>${isMarathi ? 'नाव' : 'Name'}:</strong> ${farmerInfo.name || '-'}</p>
        <p><strong>${isMarathi ? 'फर्मचे नाव' : 'Firm Name'}:</strong> ${farmerInfo.firmName || '-'}</p>
        <p><strong>${isMarathi ? 'संपर्क क्रमांक' : 'Contact No'}:</strong> ${farmerInfo.contactNo || '-'}</p>
        <p><strong>${isMarathi ? 'ईमेल आयडी' : 'EmailId'}:</strong> ${farmerInfo.email || '-'}</p>
        <p><strong>${isMarathi ? 'नमुना गोळा करणारा' : 'Sample Collected By'}:</strong> ${farmerInfo.sampleCollectedBy || '-'}</p>
      </div>

      <!-- Sample Info -->
      <div>
        <h3 class="font-bold text-black mb-2">
          ${isMarathi ? '🧪 नमुना माहिती🧪' : '🧪 Sample Information🧪'}
        </h3>
        <p><strong>${isMarathi ? 'नमुना क्रमांक' : 'Sample No'}:</strong> ${farmerInfo.sampleNo || '-'}</p>
        <p><strong>${isMarathi ? 'चाचणी अहवाल तारीख' : 'Test Report Date'}:</strong> ${farmerInfo.testReportDate || '-'}</p>
        <p><strong>${isMarathi ? 'नमुना वर्णन' : 'Sample Description'}:</strong> ${farmerInfo.sampleDescription || '-'}</p>
        <p><strong>${isMarathi ? 'नमुना प्राप्त तारीख' : 'Sample Received date'}:</strong> ${farmerInfo.sampleReceivedDate || '-'}</p>
        <p><strong>${isMarathi ? 'नमुना विश्लेषण तारीख' : 'Sample Analysis Date'}:</strong> ${farmerInfo.sampleAnalysisDate || '-'}</p>
      </div>
    </div>
  </section>

  <div class="w-full h-0.5 bg-black my-2"></div>

  <!-- Parameters Table -->
  <h2 class="text-lg font-bold text-blue-900 my-5">
    ${isMarathi ? 'पाण्याची गुणवत्ता ' : 'Water Quality Parameters'}
  </h2>

  <table class="w-full border border-black text-center text-sm">
    <thead>
      <tr style="background-color: #3498db;" class="text-black">

        <th class="border border-black px-2 py-1">${isMarathi ? 'अ. क्र.' : 'No.'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'घटक' : 'Parameter'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'मात्रा' : 'Unit'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'चांगली' : 'Good'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'बरी' : 'Moderate'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'खराब' : 'Poor'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'प्रमाण' : 'Your Value'}</th>
        <th class="border border-black px-2 py-1">${isMarathi ? 'निष्कर्ष' : 'Result'}</th>
      </tr>
    </thead>
    <tbody>
      ${waterData.map(item => {
            const remark = getRemark(item);
            const remarkDisplay = getRemarkDisplay(remark);
            return `
        <tr>
          <td class="border px-2 py-1">${item.id}</td>
          <td class="border px-2 py-1">${isMarathi ? item.marathiLabel : item.label}</td>
          <td class="border px-2 py-1">${item.unit}</td>
          <td class="border px-2 py-1">${item.ranges[0]}</td>
          <td class="border px-2 py-1">${item.ranges[1]}</td>
          <td class="border px-2 py-1">${item.ranges[2] || '-'}</td>
          <td class="border px-2 py-1">${item.user}</td>
          <td class="border px-2 py-1">${remarkDisplay}</td>
        </tr>
        `;
        }).join('')}
    </tbody>
  </table>

  <!-- Overall Assessment -->
  <div class="mt-6 p-4 rounded-md border border-green-200 bg-green-50">
    <h3 class="text-base font-bold text-emerald-800 mb-2">
      ${isMarathi ? 'एकूण निकाल' : 'Overall Assessment'}
    </h3>
    <p>
      ${isMarathi
                ? `तुमच्या पाण्याच्या नमुन्याची एकूण गुणवत्ता: <span class="font-bold">${overallRemark}</span>`
                : `Your water sample overall quality: <span class="font-bold">${overallRemark}</span>`}
    </p>
    <div class="w-full bg-gray-200 rounded mt-3 h-5">
      <div class="h-5 rounded" style="width: ${qualityPercentage}%; background-color: ${qualityPercentage >= 80 ? '#10B981' : qualityPercentage >= 60 ? '#F59E0B' : '#EF4444'};"></div>
    </div>
    <p class="mt-1 text-sm">
      ${isMarathi
                ? `${qualityPercentage}% गुणवत्ता - ${qualityPercentage >= 60 ? 'सिंचनासाठी योग्य' : 'सिंचनासाठी योग्य नाही'}`
                : `${qualityPercentage}% quality - ${qualityPercentage >= 60 ? 'Suitable for irrigation' : 'Not suitable for irrigation'}`}
    </p>
  </div>

  <!-- Footer -->
  <div class="mt-10 text-center text-xs text-gray-500">
    <p>${isMarathi ? 'हा अहवाल केवळ माहितीच्या उद्देशाने आहे' : 'This report is for informational purposes only'}</p>
    <p>${currentDate}</p>
  </div>
  <div class="header-container">
      <!-- Left side content -->
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
    
      <!-- Right side content -->
<div class="authorization-container" style="margin-top: -30px;">
  <div class="authorization-text">
     <img src="/signature.png" alt="Signature" style="height: 100px; margin-bottom: 5px; margin-right: 5px; margin-left: 50px;" />
   <center> ${t.authorizedBy}</center><br>
    <strong>${t.mdName}<br></strong>
    <strong>${t.designation}</strong>
  </div>
</div>
</div>
    

<!-- Top Header Section with Slogan and Icons -->
<div class="top-slogan-header">
  

    <!-- Center: Mati Image -->
 

  <!-- Right: Bharat Image -->
  <div class="right-icon">
    <img src="${window.location.origin}/Soil.png" alt="Bharat Icon" class="logo-icon" />
  </div>
   <div class="right-icon">
    <img src="${window.location.origin}/qr.png" alt="Bharat Icon" class="logo-icon" />
  </div>
</div>

    
    <div class="compact-address-container">
      <div class="address-row">
        <!-- Reg. Office Address -->
        <div class="address-block">
          <div class="address-header">
            <svg class="address-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <h4 class="address-title">${t.regOfficeAddress}</h4>
          </div>
          <p class="address-text">CIII Center for Invention,Innovation,Incubatiopn,3rd Floor,G-buliding YCIS,Powai Naka,Satara</p>
        </div>
        
        <div class="separator">|</div>
        
        <!-- Lab Address -->
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
        
        <!-- Contact Information -->
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
        
        <!-- Website -->
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
    
    <style>
 .report-section {
    margin-top: 20px;
  }

  .section-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
    text-decoration: underline;
  }

  .info-columns {
    display: flex;
    gap: 40px; /* Space between columns */
  }

  .info-column {
    flex: 1;
  }

  .info-row {
    display: flex;
    margin-bottom: 10px;
  }

  .info-label {
    width: 50%;
    font-weight: 600;
  }

  .info-value {
    width: 50%;
  }


  
    .compact-address-container {
      font-family: Arial, sans-serif;
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      padding: 8px 0;
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      margin: 15px 0;
      font-size: 0;
      overflow: hidden;
    }
    
    .address-row {
      display: inline-flex;
      align-items: flex-start;
      gap: 8px;
    }
    
    .address-block {
      display: inline-flex;
      flex-direction: column;
      white-space: normal;
      min-width: 180px;
      font-size: 11px;
    }
    
    .address-header {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
    }
    
    .address-icon {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      flex-shrink: 0;
    }
    
    .address-title {
      font-size: 11px;
      font-weight: bold;
      margin: 0;
      color: #000;
    }
    
    .address-text {
      font-size: 10px;
      margin: 0;
      line-height: 1.4;
      padding-left: 19px;
    }
    
    .separator {
      color: #999;
      font-size: 12px;
      align-self: center;
      padding: 0 2px;
    }
    
    .contact-line {
      display: flex;
      align-items: center;
      margin-bottom: 3px;
    }
    
    .mini-icon {
      width: 10px;
      height: 10px;
      margin-right: 4px;
      flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
      .address-block {
        min-width: 160px;
      }
      .address-title {
        font-size: 10px;
      }
      .address-text {
        font-size: 9px;
      }
      .separator {
        font-size: 10px;
      }
    }
    
    .header-container {
      display: flex;
      justify-content: space-between;
      max-width: 800px;
      margin: 20px 0;
    }
    
    .lab-header-container {
      text-align: left;
      flex: 1;
    }
    
    .lab-header h2 {
      font-size: .9rem;
      color: #000;
       margin-top: 50px;
      margin-bottom: 15px;
      font-weight: bold;
       font-family: Arial, sans-serif;
    }
    
    .lab-notes {
      font-size: 0.875rem;
      color: #333;
      margin-top: 10px;
    }
    
    .note-title {
      font-weight: bold;
      margin-bottom: 8px;
    }
    
    .note-items {
      list-style-type: none;
      padding-left: 0;
      margin-top: 0;
      margin-bottom: 0;
    }
    
    .note-items li {
      position: relative;
      padding-left: 15px;
      margin-bottom: 5px;
      line-height: 1.5;
    }
    
    .note-items li:before {
      content: "-";
      position: absolute;
      left: 0;
    }
    
    .authorization-container {
      text-align: right;
      flex: 1;
      margin-bottom :50px;
    }
    
    .authorization-text {
      display: inline-block;
      text-align: left;
      font-size: .9rem;
      color: #000;
       margin-top: 50px;
      margin-bottom: 15px;
    }

.top-slogan-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 30px;
  padding: 0 20px;
  font-family: Arial, sans-serif;
}

.slogan-text {
  flex: 1;
  text-align: left;
}

.main-slogan {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

.sub-slogan {
  font-size: 12px;
  color: #555;
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
  height: 60px;
  object-fit: contain;
}

     
      
    </style>
       </div>
            </body>
          </html>
        `);

        printWindow.document.close();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 3000);
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