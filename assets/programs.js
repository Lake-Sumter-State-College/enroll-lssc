const programs = JSON.parse(`
    [
        {
            "name": "Bachelor of Applied Science in Leadership - Criminal Justice Leadership",
            "url": "https:\/\/www.lssc.edu\/bas-criminal-justice-leadership\/",
            "area_of_interest": "Public Safety",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "",
            "keywords": "leadership, management, communication, decision-making, problem-solving"
        },
        {
            "name": "Bachelor of Applied Science in Leadership - Health Services Administration",
            "url": "https:\/\/www.lssc.edu\/basl-health-services-administration\/",
            "area_of_interest": "Health Care",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "",
            "keywords": "leadership, management, communication, decision-making, problem-solving"
        },
        {
            "name": "Bachelor of Applied Science in Leadership - Human Resources Management",
            "url": "https:\/\/www.lssc.edu\/human-resources-management\/",
            "area_of_interest": "Business",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "",
            "keywords": "leadership, management, communication, decision-making, problem-solving"
        },
        {
            "name": "Bachelor of Applied Science in Leadership - Organizational Management",
            "url": "https:\/\/www.lssc.edu\/basl-organizational-management\/",
            "area_of_interest": "Business",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "",
            "keywords": "leadership, management, communication, decision-making, problem-solving"
        },
        {
            "name": "Bachelor of Applied Science in Leadership - Project Management",
            "url": "https:\/\/www.lssc.edu\/basl-project-management\/",
            "area_of_interest": "Business",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "",
            "keywords": "leadership, management, communication, decision-making, problem-solving"
        },
        {
            "name": "Bachelor of Applied Science in Leadership - Sports Leadership Concentration",
            "url": "https:\/\/www.lssc.edu\/sports-leadership-concentration\/",
            "area_of_interest": "",
            "type": "Bachelor's Degree",
            "location": "On Campus, Online",
            "partnership": "",
            "keywords": ""
        },
        {
            "name": "Bachelor of Science in Nursing (RN-BSN)",
            "url": "https:\/\/www.lssc.edu\/academics\/bachelor\/nursing-rnbsn\/",
            "area_of_interest": "Health Care",
            "type": "Bachelor's Degree",
            "location": "Online",
            "partnership": "Lake Technical College, Orlando Health, AdventHealth, UF Health Central Florida, Florida Dept. of Health - Lake County, Lifestream",
            "keywords": "nursing, health care, patient care, clinical skills, evidence-based practice"
        },
        {
            "name": "Associate in Arts - General Studies\/Undecided",
            "url": "",
            "area_of_interest": "General Studies\/Undecided",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": ""
        },
        {
            "name": "Associate in Arts - Athletic Training",
            "url": "",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": ""
        },
        {
            "name": "Associate in Arts - Advertising",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/advertising-transfer\/",
            "area_of_interest": "Communication, Design",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "advertising, marketing, branding, consumer behavior, creative strategy, social media, digital marketing"
        },
        {
            "name": "Associate in Arts - Art Studio Art",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/art-transfer\/",
            "area_of_interest": "Communication, Design",
            "type": "Associate's Degree",
            "location": "On Campus,Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "art, studio art, visual arts, fine arts, art theory"
        },
        {
            "name": "Associate in Arts - Biology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/biology-transfer\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "biology, anatomy, immunology"
        },
        {
            "name": "Associate in Arts - Business",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/business-transfer\/",
            "area_of_interest": "Business",
            "type": "Associate's Degree",
            "location": "Online, hybrid ",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "business, management, finance, accounting, economics, entrepreneurship, human resources, operations, analytics, ethics, supply chain"
        },
        {
            "name": "Associate in Arts - Chemistry",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/chemistry-transfer\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "chemistry, anatomy, genetics, biochemistry, immunology"
        },
        {
            "name": "Associate in Arts - Computer Science",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/computer-science-transfer\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "computer science, programming, algorithims, data, system, networks, database, AI, machine learning, cybersecurity, software"
        },
        {
            "name": "Associate in Arts - Criminal Justice",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/criminal-justice-transfer\/",
            "area_of_interest": "Public Safety",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "criminal justice, law enforcement, leadership, ethics, justice, socioogy, law, corrections"
        },
        {
            "name": "Associate in Arts - Digital Media",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/digital-media-transfer\/",
            "area_of_interest": "Communication; Design",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "digital, media, art, user experience, UX, production, content, social, animation"
        },
        {
            "name": "Associate in Arts - Early Childhood Education",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/early-childhood-education-transfer\/",
            "area_of_interest": "Education",
            "type": "Associate's Degree",
            "location": "Online",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "education, early childhood, classroom, teach, curriculum"
        },
        {
            "name": "Associate in Arts - Elementary Education",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/elementary-education-transfer-plan\/",
            "area_of_interest": "Education",
            "type": "Associate's Degree",
            "location": "Online ",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "education, elementary, classroom, teach, curriculum"
        },
        {
            "name": "Associate in Arts - Engineering",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/engineering-transfer-plan\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "engineering, programming, data, systems, manufacturing, electrical, mechanical, civil"
        },
        {
            "name": "Associate in Arts - English & Literature",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/english-literature-transfer\/",
            "area_of_interest": "Arts; Humanities",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "English literature, Literary theory, Literary criticism, Creative writing, Poetry"
        },
        {
            "name": "Associate in Arts - Environmental Science",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/biology-transfer\/",
            "area_of_interest": "Science; Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "Online",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "environment"
        },
        {
            "name": "Associate in Arts - History",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/history-transfer\/",
            "area_of_interest": "Social and Behavioral Sciences, Human Services",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "History, Historical"
        },
        {
            "name": "Associate in Arts - Information Technology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/information-technology-transfer\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "IT, information technology, Programming, Algorithms, Data Structures, Operating Systems, Computer Networks, Databases, Artificial Intelligence, Machine Learning, Cybersecurity, Software, Web Development, development"
        },
        {
            "name": "Associate in Arts - Mathematics",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/mathematics-transfer-plan\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Mathematics, Algebra, Geometry, Calculus, Trigonometry, Statistics, Probability"
        },
        {
            "name": "Associate in Arts - Nursing",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/aa-nursing\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "On campus  ",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Nursing, Patient care, LPN, RN, CNA, medical, health, nurse, praciticioner"
        },
        {
            "name": "Associate in Arts - Pharmacy",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/pharmacy-transfer-plan\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "Online (except Chemistry)",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Pharmacy, Pharmacology, Medications, pharmacist"
        },
        {
            "name": "Associate in Arts - Political Science",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/political-science-transfer\/",
            "area_of_interest": "Social and Behavioral Sciences, Human Services",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "political, politic"
        },
        {
            "name": "Associate in Arts - Professional Health",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/professional-health-transfer\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "Online (except Chemistry)",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Professional health, Health care, Health promotion, Health education, Health policy, Health disparities, Health equity, Health communication, Health literacy, Health behavior, Health psychology, Health ethics"
        },
        {
            "name": "Associate in Arts - Psychology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/psychology-transfer\/",
            "area_of_interest": "Social and Behavioral Sciences; Human Services",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Psychology, Human behavior, Mental health,"
        },
        {
            "name": "Associate in Arts - Secondary Education",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/secondary-education-transfer\/",
            "area_of_interest": "Education",
            "type": "Associate's Degree",
            "location": "Online (except BSC 1011C)",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "secondary, education, classroom, teach, curriculum"
        },
        {
            "name": "Associate in Arts - Social Work",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/social-work-transfer\/",
            "area_of_interest": "Social and Behavioral Sciences; Human Services",
            "type": "Associate's Degree",
            "location": "Online ",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Social work"
        },
        {
            "name": "Associate in Arts - Sports & Exercise Science",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/sports-and-exercise-science-transfer\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "Sports science, Exercise science, Kinesiology, Biomechanics, Physiology, Anatomy, Sports nutrition, Sports psychology, Sports medicine, Athletic training, Physical therapy, Fitness"
        },
        {
            "name": "Associate in Science - Business Administration",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/a-s-business-administration\/",
            "area_of_interest": "Business",
            "type": "Associate's Degree",
            "location": "Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "business administration, business, administration, management, finance"
        },
        {
            "name": "Associate in Science - Computer Information Technology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/computer-information-technology\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "Online, Hybrid",
            "partnership": "Lake County Schools, Marion County Schools, Florida Virtual School Career Pathways",
            "keywords": "computer information technology, computer, information, technology, network"
        },
        {
            "name": "Associate in Science - Criminal Justice",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/a-s-criminal-justice\/",
            "area_of_interest": "Public Safety",
            "type": "Associate's Degree",
            "location": "Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "criminal justice, criminal, justice, law, enforcement"
        },
        {
            "name": "Associate in Science - Engineering Technology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/engineering-technology-substation\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "Associate's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools and Marion County Schools Career Pathways",
            "keywords": "engineering technology substation, engineering, technology, substation, power"
        },
        {
            "name": "Associate in Science - Health Services Management",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/health-services-management\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "Online, Hybrid",
            "partnership": "Orlando Health, Advent Health, UF Health Central Florida, Lake County Schools, Sumter County Schools, Lake Technical College",
            "keywords": "health services management, health, services, management, health care"
        },
        {
            "name": "Associate in Science - Management Technology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/a-s-management-technology\/",
            "area_of_interest": "Business",
            "type": "Associate's Degree",
            "location": "Online, Hybrid",
            "partnership": "Specifically for articulating credit from Lake Technical College",
            "keywords": "management technology, management, technology, business, leadership"
        },
        {
            "name": "Associate in Science - Medical Lab Technology",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/medical-lab-tech\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "On campus, hybrid",
            "partnership": "Lake Technical College, Orlando Health, AdventHealth, UF Health Central Florida, Florida Dept. of Health - Lake County,Vista Clinical, Sumter County Schools Career Pathways",
            "keywords": "medical laboratory technology, medical, laboratory, technology, analysis"
        },
        {
            "name": "Associate in Science - Nursing",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/nursing\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "On campus, hybrid",
            "partnership": "Lake County Schools Career Pathways, Lake Technical College, Orlando Health, AdventHealth, UF Health Central Florida, Lake County Health Dept., Lifestream",
            "keywords": "nursing, health care, patient care, clinical skills"
        },
        {
            "name": "Associate in Science - Respiratory Care",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/a-s-respiratory-care\/",
            "area_of_interest": "Health Care",
            "type": "Associate's Degree",
            "location": "On campus, hybrid",
            "partnership": "Orlando Health, Advent Health, UF Health",
            "keywords": "respiratory care, respiratory, care, therapy, patient care"
        },
        {
            "name": "Advanced Technical Certificate - Criminal Justice Leadership",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/advanced-technical-certificates\/criminal-justice-leadership-advanced-technical-certificate\/",
            "area_of_interest": "Public Safety",
            "type": "Advanced Technical Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "criminal justice, law enforcement, leadership, ethics, justice"
        },
        {
            "name": "Advanced Technical Certificate - Health Services Administration",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/advanced-technical-certificates\/health-services-administration-advanced-technical-certificate\/",
            "area_of_interest": "Health Care",
            "type": "Advanced Technical Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "health services, administration, management, health care, finance"
        },
        {
            "name": "Advanced Technical Certificate - Human Resources Management",
            "url": "",
            "area_of_interest": "Business",
            "type": "Advanced Technical Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": ""
        },
        {
            "name": "Advanced Technical Certificate - Organizational Management",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/advanced-technical-certificates\/organizational-management-advanced-technical-certificate\/",
            "area_of_interest": "Business",
            "type": "Advanced Technical Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "organizational management, business, leadership, human resources, strategy"
        },
        {
            "name": "Advanced Technical Certificate - Project Management",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/advanced-technical-certificates\/project-management-advanced-technical-certificate\/",
            "area_of_interest": "Business",
            "type": "Advanced Technical Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "project management, planning, execution, control, risk"
        },
        {
            "name": "Certificate - Business Management",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/business-management-college-credit-certificate\/",
            "area_of_interest": "Business",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "Lake Technical College",
            "keywords": "business management, leadership, operations, finance, marketing"
        },
        {
            "name": "Certificate - Business Operations",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/business-operations-college-credit-certificate\/",
            "area_of_interest": "Business",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "Lake Technical College",
            "keywords": "business operations, accounting, economics, management, technology"
        },
        {
            "name": "Certificate - Business Specialist",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/business-specialist-college-credit-certificate\/",
            "area_of_interest": "Business",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "Lake Technical College",
            "keywords": "business specialist, customer service, office skills, communication, computer"
        },
        {
            "name": "Certificate - Chemical Lab Specialist",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/chemical-lab-specialist-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "hybrid",
            "partnership": "",
            "keywords": "chemical lab specialist, chemistry, laboratory, safety, analysis"
        },
        {
            "name": "Certificate - Criminal Justice Leadership",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/criminal-justice-leadership-college-credit-certificate\/",
            "area_of_interest": "Public Safety",
            "type": "College Credit Certificate",
            "location": "Hybrid",
            "partnership": "Lake Technical College",
            "keywords": "criminal justice leadership, law enforcement, supervision, management, ethics"
        },
        {
            "name": "Certificate - Cybersecurity",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/cybersecurity-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "cybersecurity, information security, network security, threat analysis, encryption"
        },
        {
            "name": "Certificate - Engineering Technology Support Specialist",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/engineering-technology-support-specialist-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Hybrid",
            "partnership": "",
            "keywords": "engineering technology support specialist, engineering, technology, design, support"
        },
        {
            "name": "Certificate - Help Desk Support Technician",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/help-desk-support-technician-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "help desk support technician, computer, troubleshooting, customer service, technical support"
        },
        {
            "name": "Certificate - Information Technology Support Specialist",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/information-technology-support-specialist-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "information technology support specialist, computer, hardware, software, network"
        },
        {
            "name": "Certificate - Information Technology Analysis",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/information-technology-support-specialist-college-credit-certificate\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Online",
            "partnership": "",
            "keywords": "information technology analysis specialist, computer, data, analysis, programming"
        },
        {
            "name": "Certificate - Internet of Things",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/computer-information-technology\/iot\/",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "Hybrid",
            "partnership": "Redd Ash",
            "keywords": "internet of things, IoT, devices, sensors, connectivity"
        },
        {
            "name": "Certificate - Mechatronics and Manufacturing Automation",
            "url": "https:\/\/www.lssc.edu\/academics\/certificate\/mechatronics\/",
            "area_of_interest": "Energy, Construction, Manufacturing",
            "type": "College Credit Certificate",
            "location": "On Campus,  Hybrid",
            "partnership": "",
            "keywords": "mechatronics, manufacturing automation, robotics, electronics, mechanical"
        },
        {
            "name": "Certificate - Medical Information Coding and Billing",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/medical-information-coder-biller-college-credit-certificate\/",
            "area_of_interest": "Health Care",
            "type": "College Credit Certificate",
            "location": "Online, Hybrid",
            "partnership": "Orlando Health, AdventHealth, UF Health Central Florida, Lake Technical College",
            "keywords": "medical information, coder, biller, health care, coding, billing"
        },
        {
            "name": "Certificate - Medical Office Management",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/medical-office-management-college-credit-certificate\/",
            "area_of_interest": "Health Care",
            "type": "College Credit Certificate",
            "location": "Online, Hybrid",
            "partnership": "Orlando Health, AdventHealth, UF Health Central Florida, Lake Technical College",
            "keywords": "medical office, management, health care, office, administration, management"
        },
        {
            "name": "Certificate - Scientific Workplace Preparation",
            "url": "https:\/\/lssc-public.courseleaf.com\/academic-programs\/college-credit-certificate-programs\/scientific-workplace-preparation-college-credit-certificate",
            "area_of_interest": "Science, Technology, Engineering, Math",
            "type": "College Credit Certificate",
            "location": "On campus, hybrid",
            "partnership": "",
            "keywords": "scientific workplace preparation, science, mathematics, laboratory, research"
        },
        {
            "name": "Commercial Vehicle Driving (CDL Class A & B)",
            "url": "https:\/\/www.lssc.edu\/dept\/continuing-education\/transportation\/cdl\/",
            "area_of_interest": "Transportation & Logistics",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "On Campus",
            "partnership": "",
            "keywords": "commercial vehicle driving, CDL, truck, transportation, safety"
        },
        {
            "name": "Lineworker Boot Camp",
            "url": "https:\/\/www.lssc.edu\/dept\/continuing-education\/utility\/lineworker-boot-camp\/",
            "area_of_interest": "Energy; Utility Distribution",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "On Campus",
            "partnership": "Duke Energy, SECO, Pike, Team Fishel, Elite Ocala",
            "keywords": "lineworker boot camp, lineworker, electricity, power, utility Distribution"
        },
        {
            "name": "Microsoft Excel, Level 1 & 2",
            "url": "https:\/\/lssceduce.asapconnected.com\/?org=5293",
            "area_of_interest": "Business",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "On Campus",
            "partnership": "",
            "keywords": "Microsoft Excel, spreadsheet, data, analysis, functions"
        },
        {
            "name": "Florida Child Care Professional Credential (FCCPC)",
            "url": "",
            "area_of_interest": "Education",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "On Campus",
            "partnership": "",
            "keywords": "children, families, FCCPC, FDCF, DCF, classroom, education, child care, daycare, day care, child care facility"
        },
        {
            "name": "Operation of an Early Childhood Center (Director\u2019s Credential)",
            "url": "https:\/\/go.asapconnected.com\/?org=5293",
            "area_of_interest": "Education",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "On Campus",
            "partnership": "",
            "keywords": "operation of an early childhood center, director, credential, child care, education"
        },
        {
            "name": "Dental Assisting \u2013 Entry Level",
            "url": "https:\/\/go.asapconnected.com\/?org=5293",
            "area_of_interest": "Health Care",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Seated - off campus",
            "partnership": "Greater Orlando Dental Assisting School",
            "keywords": "dental assisting, entry level, dental, assistant, oral health"
        },
        {
            "name": "Expanded Functions & Radiology Certification for Dental Auxiliary",
            "url": "https:\/\/go.asapconnected.com\/?org=5293",
            "area_of_interest": "Health Care",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Seated - off campus",
            "partnership": "Greater Orlando Dental Assisting School",
            "keywords": "expanded functions\/radiology for the dental auxiliary, dental, auxiliary, radiology, functions"
        },
        {
            "name": "Advanced Legal Research and Writing",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-advanced-legal-research-and-writing\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "advanced legal research and writing, legal, research, writing, analysis"
        },
        {
            "name": "Advanced Paralegal Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-advanced-paralegal-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "advanced paralegal certificate course, paralegal, certificate, course, law"
        },
        {
            "name": "Alternative Dispute Resolution Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-alternative-dispute-resolution-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "alternative dispute resolution certificate course, dispute resolution, certificate, course, mediation"
        },
        {
            "name": "eDiscovery for Paralegals",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-ediscovery-for-paralegals\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "eDiscovery for paralegals, eDiscovery, paralegals, electronic, discovery"
        },
        {
            "name": "Employment Law Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-employment-law\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "employment law certificate course, employment law, certificate, course, labor"
        },
        {
            "name": "Intellectual Property Law for Engineers",
            "url": "",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "IP, intellectual, property, IPR, trademark, copyright, licensing"
        },
        {
            "name": "Legal Investigation Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-legal-investigation-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "legal investigation certificate course, legal investigation, certificate, course, investigation"
        },
        {
            "name": "Legal Nurse Consultant Training Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-legal-nurse-consultant-training-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "legal nurse consultant training course, legal nurse consultant, training, course, nursing"
        },
        {
            "name": "Legal Secretary Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-legal-secretary-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "legal secretary certificate course, legal secretary, certificate, course, secretary"
        },
        {
            "name": "Medical Professional Legal Consultant",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-medical-professional-legal-consultant\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "medical professional legal consultant, medical, legal, consultant, health care"
        },
        {
            "name": "Paralegal Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-paralegal-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "paralegal certificate course, paralegal, certificate, course, law"
        },
        {
            "name": "Personal Injury for Paralegals",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-personal-injury-for-paralegals\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "personal injury for paralegals, personal injury, paralegals, law, injury"
        },
        {
            "name": "Software Essentials for the Law Office",
            "url": "",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "software, law office, office management"
        },
        {
            "name": "Victim Advocacy Certificate Course",
            "url": "https:\/\/www.legalstudies.com\/product\/lake-sumter-state-college-victim-advocacy-certificate-course\/",
            "area_of_interest": "Legal Studies",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "Barbri Center for Legal Studies",
            "keywords": "victim advocacy certificate course, victim advocacy, certificate, course, advocacy"
        },
        {
            "name": "Continuing Education Requirement for Broker and Sales License",
            "url": "https:\/\/lssc.theceshop.com\/online-education\/florida\/real-estate\/broker-and-sales-license\/continuing-education\/courses.html",
            "area_of_interest": "Real Estate",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "CE Shop",
            "keywords": "real estate, broker, sales, realtor, sales associate"
        },
        {
            "name": "Pre-Licensing for Sales Associate",
            "url": "https:\/\/lssc.theceshop.com\/florida\/pre-licensing\/fl-sales-associate-pre-licensing-cost",
            "area_of_interest": "Real Estate",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "CE Shop",
            "keywords": "real estate, broker, sales, realtor, sales associate"
        },
        {
            "name": "Exam Prep for Sales Associate",
            "url": "https:\/\/lssc.theceshop.com\/florida\/real-estate-exam-prep\/fl-sales-associate-exam-prep-cost",
            "area_of_interest": "Real Estate",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "CE Shop",
            "keywords": "real estate, broker, sales, realtor, sales associate"
        },
        {
            "name": "Post-Licensing for Sales Associate",
            "url": "https:\/\/lssc.theceshop.com\/online-education\/florida\/real-estate\/sales-associate\/post-licensing\/courses.html",
            "area_of_interest": "Real Estate",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "CE Shop",
            "keywords": "real estate, broker, sales, realtor, sales associate"
        },
        {
            "name": "Post-Licensing for Broker",
            "url": "https:\/\/lssc.theceshop.com\/online-education\/florida\/real-estate\/broker\/post-licensing\/courses.html",
            "area_of_interest": "Real Estate",
            "type": "Workforce Career Training \/ Non-Credit",
            "location": "Online",
            "partnership": "CE Shop",
            "keywords": "real estate, broker, sales, realtor, sales associate"
        },
        {
            "name": "Dual Enrollment",
            "url": "https:\/\/www.lssc.edu\/future-students\/de\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "dual enrollment, high school, college, credit, acceleration"
        },
        {
            "name": "Early Admission",
            "url": "https:\/\/www.lssc.edu\/future-students\/de\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "dual enrollment, early admission, high school, college, admission"
        },
        {
            "name": "Health Sciences Collegiate Academy",
            "url": "https:\/\/www.lssc.edu\/hsca\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "Lake County Schools, Orlando Health, UCF, Pinecrest Academy",
            "keywords": "dual enrollment, early college academy, HSCA, health sciences, STEM"
        },
        {
            "name": "The Villages Early College Academy",
            "url": "https:\/\/libguides.lssc.edu\/earlycollege",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "Seated - off campus",
            "partnership": "The Villages High School",
            "keywords": "dual enrollment, early college academy, TVAC, technical, villages"
        },
        {
            "name": "Criminal Justice Early College Academy",
            "url": "",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "",
            "partnership": "Mount Dora High School",
            "keywords": ""
        },
        {
            "name": "Talent Search",
            "url": "https:\/\/www.lssc.edu\/visitors-friends\/educational-opportunity-programs\/talent-search\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "talent search, education, opportunity, college, career"
        },
        {
            "name": "Emerging Lakehawks",
            "url": "https:\/\/www.lssc.edu\/dept\/early-college-programs\/emerging-lakehawks\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": "emerging lakehawks, leadership, development, service, college"
        },
        {
            "name": "Kids\u2019 College",
            "url": "https:\/\/www.lssc.edu\/visitors-friends\/youth-development\/kids-college-experiences\/",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "kids college, summer, camp, fun, learning"
        },
        {
            "name": "Aides in Training (AIT) Leadership Program",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "college prep, aids-in-training, AIT, leadership, volunteer"
        },
        {
            "name": "Program Aide",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "program aide, kids\u2019 college, aide, camp, service"
        },
        {
            "name": "Xploration- Babysitting + Pediatric First Aid & CPR",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "CPR, AED, youth"
        },
        {
            "name": "Xploration- Career Exploration",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "youth, career"
        },
        {
            "name": "Xploration- Computer Skills",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "youth, computer, digital literacy, apps"
        },
        {
            "name": "Xploration- STEM Playground",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "youth, STEM"
        },
        {
            "name": "Xploration- Youth Academic Enrichment",
            "url": "https:\/\/lssc.asapconnected.com\/?org=5057",
            "area_of_interest": "Early College Programs (K-12)",
            "type": "Early College Programs (K-12)",
            "location": "On Campus",
            "partnership": "",
            "keywords": "youth"
        },
        {
            "name": "Associate in Science - Building Construction Management",
            "url": "https:\/\/www.lssc.edu\/academics\/associate\/a-s-building-construction-management",
            "area_of_interest": "Energy, Construction, Manufacturing",
            "type": "Associate's Degree",
            "location": "On Campus, Hybrid",
            "partnership": "",
            "keywords": "Construction management, Building construction, Project management, Construction technology, Building codes, Construction safety, Construction materials, Construction scheduling, Construction estimating, Construction contracts, Building inspection, Building design"
        },
        {
            "name": "Bachelor of Science in Elementary Education",
            "url": "https:\/\/www.lssc.edu\/academics\/bachelor\/b-s-elementary-education",
            "area_of_interest": "",
            "type": "Bachelor's Degree",
            "location": "On Campus, Online, Hybrid",
            "partnership": "Lake County Schools, Sumter County Schools",
            "keywords": ""
        }
    ]
    `);
    
    function htmlToElement(html) {
        var template = document.createElement('template');
        html = html.trim(); // Never return a text node of whitespace as the result
        template.innerHTML = html;
        return template.content.firstChild;
    }
    
    
    
    const populatePrograms = (showAll = false) => {
        const programOutput = document.querySelector('#program-output');
    
        programOutput.innerHTML = '';
    
        let selectedPrograms = programs;
    
        if (!showAll) {
            const keyword = document.querySelector('#keyword').value.toLowerCase();
    
            if (keyword) {
                selectedPrograms = selectedPrograms.filter((program) => {
                    let match = false;
    
                    if (program.name.toLowerCase().indexOf(keyword) >= 0) {
                        match = true;
                    }
                    if (program.area_of_interest.split(';').map(interest => interest.trim().toLowerCase()).indexOf(keyword) >= 0) {
                        match = true;
                    }
                    if (program.location.toLowerCase().indexOf(keyword) >= 0) {
                        match = true;
                    }
                    if (program.type.toLowerCase().indexOf(keyword) >= 0) {
                        match = true;
                    }
                    if (program.partnership.toLowerCase().indexOf(keyword) >= 0) {
                        match = true;
                    }
                    if (program.keywords.toLowerCase().indexOf(keyword) >= 0) {
                        match = true;
                    }
    
                    return match;
                });
            }
    
            const areaOfInterest = document.querySelector('#area_of_interest').value.toLowerCase();
            if (areaOfInterest) {
                selectedPrograms = selectedPrograms.filter((program) => {
                    return program.area_of_interest.split(';').map(interest => interest.trim().toLowerCase()).includes(areaOfInterest);
                });
            }
    
            const programType = document.querySelector('#program_type').value;
            if (programType) {
                selectedPrograms = selectedPrograms.filter((program) => {
                    return programType === program.type;
                });
            }
    
            const location = document.querySelector('#location').value;
            if (location) {
                if (location === 'Online') {
                    selectedPrograms = selectedPrograms.filter((program) => {
                        return program.location.indexOf('Online') >= 0;
                    });
                }
                if (location === 'On Campus, Hybrid') {
                    selectedPrograms = selectedPrograms.filter((program) => {
                        return (program.location.indexOf('On Campus') >= 0 || program.location.indexOf('Hybrid') >= 0);
                    });
                }
            }
        }
    
        document.querySelector('#program-status').textContent = `${selectedPrograms.length} programs found.`;

        if (selectedPrograms.length === 0) {
            programOutput.appendChild(htmlToElement(`<p>Try a different search or <a class="view-all-programs" href="#">view all programs</a>.</p>`));
            document.querySelector('.view-all-programs').addEventListener('click', (e) => {
                e.preventDefault();
    
                populatePrograms(true);
            });
        } else {
            selectedPrograms.forEach((program) => {
                const name = program.url ? `<a href="${program.url}">${program.name}</a>` : `${program.name}`;
                const location = program.location ? `<div>Location: ${program.location}</div>` : '';
                const partnership = program.partnership ? `<div>Partnership: ${program.partnership}</div>` : '';
                programOutput.appendChild(htmlToElement(`<div class="mb-2rem"><h3 class="h5">${name}</h3><div>Type: ${program.type}</div>${location}${partnership}</div>`));
            });
        }
    }
    
    document.addEventListener('DOMContentLoaded', (e) => {
        document.querySelectorAll('#show_all').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
    
                populatePrograms(true);
            });
        });
        document.querySelectorAll('#area_of_interest').forEach((el) => {
            el.addEventListener('change', (e) => {
                populatePrograms();
            });
        });
        document.querySelectorAll('#program_type').forEach((el) => {
            el.addEventListener('change', (e) => {
                populatePrograms();
            });
        });
        document.querySelectorAll('#location').forEach((el) => {
            el.addEventListener('change', (e) => {
                populatePrograms();
            });
        });
        document.querySelectorAll('#form-search').forEach((el) => {
            el.addEventListener('submit', (e) => {
                e.preventDefault();
    
                populatePrograms();
            });
        });
    });
    