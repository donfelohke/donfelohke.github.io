(function(){
const root=document.documentElement;
const themeKey='nakebusen-theme';
const languageKey='nakebusen-language';
const themeToggle=document.getElementById('theme-toggle');
const languageToggle=document.getElementById('language-toggle');
const themeMeta=document.querySelector('meta[name="theme-color"]');
const storage={
get(key){try{return localStorage.getItem(key);}catch(error){return null;}},
set(key,value){try{localStorage.setItem(key,value);}catch(error){}}
};
const copy={
en:{
skip:'Skip to content',navMain:'Main navigation',navFooter:'Footer navigation',navQuick:'Section navigation',dockHome:'Home',dockEnquire:'Enquire',navLocs:'Locs',navDigital:'Digital',navAbout:'@donfeloh',navConnect:'Connect',footerSignature:'@donfelohke · #HisGenjeness · GRACE · GRIT · GLORY / HERITAGE · BLACK EXCELLENCE · SOVEREIGN FUTURES',themeToLight:'Switch to light theme',themeToDark:'Switch to dark theme',
eyebrow:'NAKEBUSEN · BEAUTY & DIGITAL · ELDORET, KENYA.',tagline:'Your Beauty ° Your Way.',
heroLead:'NAKEBUSEN is a beauty and digital-services practice founded by Felix Lwova (Don Feloh), bringing together natural loc care, practical computing and creative technology.',
overviewBeautyTitle:'LOCS · CROWN',overviewBeauty:'Natural loc maintenance, retouching, styling, Sisterlocs retie and artificial loc installation.',overviewDigitalTitle:'DIGITAL · WARENA CAPABILITY',overviewDigital:'GNU/Linux, computer support, networking and local-first infrastructure. Freedom Is a System.',overviewResearchTitle:'RESEARCH & CREATIVE',overviewResearch:'IKAI · GENJE · FELOH Corpus — reflective computing, embodied practice and creative technology. Research and knowledge domains, not services for purchase.',researchExplore:'Explore research & creative work',digitalScope:'NAKEBUSEN handles commercial enquiries, agreements and transactions. WARENA is a distinct technical capability domain supporting eligible engagements; it is not a separate checkout. Scope, feasibility, deliverables and price are agreed before work begins.',






heroDigitalLink:'Explore LOCS services',heroWorkLink:'Explore work on GitHub',
heroEnquire:'WhatsApp — Enquire about loc care',exploreLocs:'Explore Locs services',
enquireRetouch:'Enquire about Retouch & Styling',enquireRetie:'Enquire about Sisterlocs Retie',enquireArtificial:'Enquire about Artificial Locs Installation',
crownKicker:'LOCS · CROWN',crownTitle:'Your Crown. Your Craft.',
crownIntro:'Natural loc care, maintenance and styling, Sisterlocs Retie and artificial loc installation. Clear service scope, starting prices and direct enquiries.',
svcRetouch:'Retouch & Styling',svcRetie:'Sisterlocs Retie',svcArtificial:'Artificial Locs Installation',
price700:'KES 700+',price1500:'KES 1,500+',price3500:'KES 3,500',
svcRetouchDesc:'Refresh and maintain your existing locs with retouching and styling. Final scope depends on your loc condition and the work required.',svcRetieDesc:'Careful retightening for established Sisterlocs. Share their current condition and your maintenance needs when enquiring.',svcArtificialDesc:'Artificial loc installation, with the method, materials and scope confirmed before work begins.',
bookingNote:'Prices are starting points. Final cost depends on condition, scope and materials. An enquiry does not confirm a booking. Availability and final terms are agreed directly.',
enquiryTitle:'A clear enquiry, a considered plan.',enquiryStep1:'Choose the service you are interested in and tell us what you need.',enquiryStep2:'Share your loc condition, maintenance needs or preferred installation details.',enquiryStep3:'We discuss suitability, availability, scope and the final price directly before any booking is agreed.',digitalProcessTitle:'How a technical engagement works',digitalProcess1:'Describe the system, issue and outcome you need.',digitalProcess2:'We assess feasibility and agree the scope, deliverables and price.',digitalProcess3:'Work proceeds on agreement, with a practical handover of what was completed.',
digitalKicker:'DIGITAL · WARENA',digitalTitle:'Freedom Is a System.',
digitalIntro:'Practical GNU/Linux, workstation and network support, drawing on WARENA technical capability. We help people and small organisations understand, maintain and adapt their systems, including where connectivity is unreliable. Each engagement is assessed and scoped before work begins.',
dig1:'GNU/Linux and workstation support',dig2:'Computer diagnostics and maintenance',dig3:'Small-office networking and Wi-Fi',dig4:'Local-first and offline-capable systems',dig5:'Infrastructure planning and documented handover',
bookTech:'Discuss a technical project',connectKicker:'Connect',founderTitle:'Felix Lwova — Don Feloh',
role:'Founder · CTO · Loctician · Creative Technologist',
founderDesc:'I founded NAKEBUSEN around natural loc care, skilled craft and grounded enterprise. My wider work spans GNU/Linux systems, infrastructure and creative technology. WARENA is a distinct technical capability domain; NAKEBUSEN remains the commercial point of contact.',
connectDesc:'Whether you are enquiring about loc care or a technology project, get in touch. We will discuss suitability, availability, scope and next steps before agreeing on any work.',
call2:'Call +254 719 635 415',email:'Email',location:'Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya',
paymentTitle:'M-PESA Buy Goods · Published payment details',paymentIntro:'For an agreed NAKEBUSEN service, pay using the published merchant details below after confirming the service and total amount directly.',paymentMerchant:'Account / Merchant name: FELIX LWOVA',paymentTill:'Buy Goods Till Number: 3511456',paymentSteps:'Open M-PESA → Lipa na M-PESA → Buy Goods and Services → enter Till 3511456. Confirm FELIX LWOVA and the agreed amount before entering your PIN.',paymentHowTitle:'Before you pay',paymentStep1:'Confirm the service and total amount directly with NAKEBUSEN.',paymentStep2:'Use the published Buy Goods Till and merchant name shown above.',paymentStep3:'Before entering your PIN, check that the merchant name shown by M-PESA matches the details confirmed directly.',paymentStep4:'Keep your M-PESA confirmation message.',paymentSafetyTitle:'Payment safety',paymentSafety:'Never share your M-PESA PIN or one-time code. Do not pay an amount that has not been agreed directly with NAKEBUSEN.',paymentAction:'Contact NAKEBUSEN about payment',paymentBoundary:'An enquiry is not a booking or payment request. Pay only after the service and total amount are agreed directly with NAKEBUSEN.',supportTitle:'Support Us · Support independent work',supportCopy:'Support Don Feloh’s independent creative, cultural and technical work. Support is voluntary and separate from NAKEBUSEN service payments; contact us first for available arrangements.',supportAction:'Ask about supporting the work',boundary:'ONLY NAKEBUSEN TRANSACTS. Commercial enquiries route through NAKEBUSEN. An enquiry is not a confirmed booking.',
githubTitle:'Beyond the interface.',githubCopy:'Explore the code and documentation behind the work.',githubWarena:'WARENA · Systems',githubCorpus:'FELOH Corpus · Canon',githubSource:'Website source · Code',githubProfile:'GitHub portfolio · Projects',githubRepositories:'GitHub repositories'
},
sw:{
skip:'Ruka hadi maudhui',navMain:'Urambazaji mkuu',navFooter:'Urambazaji wa chini',navQuick:'Urambazaji wa sehemu',dockHome:'Mwanzo',dockEnquire:'Uliza',navLocs:'Locs',navDigital:'Digital',navAbout:'@donfeloh',navConnect:'Wasiliana',footerSignature:'@donfelohke · #HisGenjeness · GRACE · GRIT · GLORY / HERITAGE · BLACK EXCELLENCE · SOVEREIGN FUTURES',themeToLight:'Badilisha hadi mandhari mepesi',themeToDark:'Badilisha hadi mandhari meusi',
eyebrow:'NAKEBUSEN · UREMBO NA TEKNOLOJIA · ELDORET, KENYA.',tagline:'Uzuri Wako ° Kwa Namna Yako.',
heroLead:'NAKEBUSEN ni biashara ya urembo na huduma za teknolojia iliyoanzishwa na Felix Lwova (Don Feloh), inayounganisha utunzaji wa loc za asili, huduma za kompyuta na teknolojia bunifu.',
overviewBeautyTitle:'LOCS · CROWN',overviewBeauty:'Utunzaji wa loc za asili, retouch, mitindo, Sisterlocs retie na uwekaji wa loc za bandia.',overviewDigitalTitle:'TEKNOLOJIA · UWEZO WA WARENA',overviewDigital:'GNU/Linux, usaidizi wa kompyuta, mitandao na miundombinu ya local-first. Uhuru ni Mfumo.',overviewResearchTitle:'UTAFITI NA UBUNIFU',overviewResearch:'IKAI · GENJE · FELOH Corpus — utafiti wa kompyuta tafakuri, maarifa ya mwili na teknolojia bunifu. Ni maeneo ya utafiti na maarifa, si huduma za kununua.',researchExplore:'Chunguza utafiti na kazi za ubunifu',digitalScope:'NAKEBUSEN hushughulikia maulizo, makubaliano na miamala ya kibiashara. WARENA ni eneo tofauti la uwezo wa kiteknolojia linalosaidia kazi zinazofaa; si sehemu tofauti ya malipo. Upeo, uwezekano, matokeo na gharama hukubaliwa kabla ya kazi kuanza.',






heroDigitalLink:'Chunguza huduma za LOCS',heroWorkLink:'Chunguza kazi kwenye GitHub',
heroEnquire:'WhatsApp — Uliza kuhusu utunzaji wa locs',exploreLocs:'Chunguza huduma za Locs',
enquireRetouch:'Uliza kuhusu Retouch & Styling',enquireRetie:'Uliza kuhusu Sisterlocs Retie',enquireArtificial:'Uliza kuhusu Artificial Locs Installation',
crownKicker:'LOCS · CROWN',crownTitle:'Taji Yako. Ufundi Wako.',
crownIntro:'Utunzaji wa loc za asili, matengenezo na mitindo, Sisterlocs Retie na uwekaji wa loc za bandia. Upeo wa huduma, bei za kuanzia na maulizo ya moja kwa moja vimeelezwa wazi.',
svcRetouch:'Retouch & Styling',svcRetie:'Sisterlocs Retie',svcArtificial:'Artificial Locs Installation',
price700:'KES 700+',price1500:'KES 1,500+',price3500:'KES 3,500',
svcRetouchDesc:'Fanya locs zako zionekane nadhifu tena kwa retouch na umaliziaji makini. Kazi ya mwisho hutegemea hali ya nywele na huduma inayohitajika.',svcRetieDesc:'Kukaza upya Sisterlocs kwa umakini. Eleza hali ya sasa na mahitaji ya utunzaji unapoulizia.',svcArtificialDesc:'Ufungaji wa loc za bandia; aina ya ufungaji na kazi inayohitajika huthibitishwa kabla ya kuanza.',
bookingNote:'Bei ni za kuanzia. Gharama ya mwisho hutegemea hali, upeo wa kazi na vifaa. Ombi halithibitishi nafasi. Upatikanaji na masharti ya mwisho hukubaliwa moja kwa moja.',
enquiryTitle:'Ulizia huduma kwa uwazi, panga hatua zinazofuata.',enquiryStep1:'Chagua huduma unayoihitaji na utueleze unachotafuta.',enquiryStep2:'Eleza hali ya loc zako, mahitaji ya matengenezo au maelezo ya mtindo unaopendelea.',enquiryStep3:'Tutajadili kufaa, upatikanaji, upeo wa kazi na bei ya mwisho kabla ya kukubaliana kuhusu nafasi.',digitalProcessTitle:'Namna kazi ya teknolojia inavyofanyika',digitalProcess1:'Eleza mfumo, changamoto na matokeo unayohitaji.',digitalProcess2:'Tunatathmini uwezekano na kukubaliana kuhusu upeo, matokeo na gharama.',digitalProcess3:'Kazi huanza baada ya makubaliano, kisha tunakabidhi maelezo ya kazi iliyokamilika.',
digitalKicker:'DIGITAL · WARENA',digitalTitle:'Uhuru ni Mfumo.',
digitalIntro:'Usaidizi wa GNU/Linux, workstation na mitandao, kwa kutumia uwezo wa kiteknolojia wa WARENA. Tunasaidia watu na mashirika madogo kuelewa, kutunza na kuboresha mifumo yao, hata pale muunganisho wa intaneti unapokuwa hafifu. Kila kazi hutathminiwa na kupangiwa upeo kabla ya kuanza.',
dig1:'Msaada wa GNU/Linux na workstation',dig2:'Uchunguzi na matengenezo ya kompyuta',dig3:'Mitandao ya ofisi ndogo na Wi-Fi',dig4:'Mifumo ya local-first na inayoweza kufanya kazi bila intaneti',dig5:'Mipango ya miundombinu na makabidhiano yaliyoandikwa',
bookTech:'Jadili mradi wa teknolojia',connectKicker:'Wasiliana',founderTitle:'Felix Lwova — Don Feloh',
role:'Mwanzilishi · CTO · Loctician · Creative Technologist',
founderDesc:'Nilianzisha NAKEBUSEN kwa ajili ya utunzaji wa loc za asili, ufundi stadi na biashara yenye msingi imara. Kazi yangu pana inahusisha mifumo ya GNU/Linux, miundombinu na teknolojia bunifu. WARENA ni eneo tofauti la uwezo wa kiteknolojia; NAKEBUSEN hubaki sehemu ya mawasiliano ya kibiashara.',
connectDesc:'Iwe unahitaji utunzaji wa loc au mradi wa teknolojia, wasiliana nasi. Tutajadili kufaa, upatikanaji, upeo na hatua zinazofuata kabla ya kukubaliana kuhusu kazi.',
call2:'Piga +254 719 635 415',email:'Barua pepe',location:'Loc care · Eldoret Town / Karibu Mdosi · Uasin Gishu · Kenya',
paymentTitle:'M-PESA Buy Goods · Maelezo ya malipo',paymentIntro:'Kwa huduma ya NAKEBUSEN mliyokubaliana, tumia maelezo ya mfanyabiashara yaliyochapishwa hapa chini baada ya kuthibitisha huduma na jumla ya kiasi moja kwa moja.',paymentMerchant:'Jina la akaunti / mfanyabiashara: FELIX LWOVA',paymentTill:'Nambari ya Till ya Buy Goods: 3511456',paymentSteps:'Fungua M-PESA → Lipa na M-PESA → Nunua Bidhaa na Huduma → weka Till 3511456. Thibitisha FELIX LWOVA na kiasi mlichokubaliana kabla ya kuweka PIN.',paymentHowTitle:'Kabla ya kulipa',paymentStep1:'Thibitisha huduma na jumla ya kiasi moja kwa moja na NAKEBUSEN.',paymentStep2:'Tumia nambari ya Till na jina la mfanyabiashara lililoonyeshwa hapo juu.',paymentStep3:'Kabla ya kuweka PIN, hakikisha jina la mfanyabiashara linaloonyeshwa na M-PESA linalingana na maelezo mliyothibitisha moja kwa moja.',paymentStep4:'Hifadhi ujumbe wa uthibitisho wa M-PESA.',paymentSafetyTitle:'Usalama wa malipo',paymentSafety:'Usishiriki PIN yako ya M-PESA au msimbo wa mara moja. Usilipe kiasi ambacho hamjakubaliana moja kwa moja na NAKEBUSEN.',paymentAction:'Wasiliana na NAKEBUSEN kuhusu malipo',paymentBoundary:'Kuuliza hakuthibitishi nafasi wala ombi la malipo. Lipa tu baada ya kukubaliana moja kwa moja na NAKEBUSEN kuhusu huduma na jumla ya kiasi.',supportTitle:'Tuunge Mkono · Kazi huru',supportCopy:'Saidia kazi huru za ubunifu, utamaduni na teknolojia za Don Feloh. Msaada ni wa hiari na umetenganishwa na malipo ya huduma za NAKEBUSEN; wasiliana nasi kwanza kuhusu njia zinazopatikana.',supportAction:'Uliza jinsi ya kuunga mkono kazi',boundary:'Miamala yote hupitia NAKEBUSEN pekee. Maswali ya kibiashara hupitia NAKEBUSEN. Ombi halithibitishi nafasi.',
githubTitle:'Zaidi ya mwonekano wa tovuti.',githubCopy:'Chunguza msimbo na nyaraka za kazi hizi.',githubWarena:'WARENA · Mifumo',githubCorpus:'FELOH Corpus · Kanuni',githubSource:'Chanzo cha tovuti · Msimbo',githubProfile:'GitHub · Miradi',githubRepositories:'Hazina za GitHub'
}
};
const whatsappMessages={
en:{
loc:"Hello NAKEBUSEN — I'm enquiring about loc care. I'd like to discuss my requirements.",
tech:"Hello NAKEBUSEN — I'm enquiring about a technology project. I'd like to discuss my requirements.",
general:"Hello NAKEBUSEN — I'd like to make an enquiry. Please let me know the next steps.",
payment:"Hello NAKEBUSEN — please share the current verified M-PESA Buy Goods payment details for my agreed service.",
support:"Hello Don Feloh — I would like to support your independent creative and technical work. Please share the available options.",
retouch:"Hello NAKEBUSEN — I'm enquiring about Retouch & Styling. I'd like to discuss my requirements.",
retie:"Hello NAKEBUSEN — I'm enquiring about Sisterlocs Retie. I'd like to discuss my requirements.",
artificial:"Hello NAKEBUSEN — I'm enquiring about Artificial Locs Installation. I'd like to discuss my requirements."
},
sw:{
loc:"Habari NAKEBUSEN — ninaulizia huduma za utunzaji wa loc. Ningependa kujadili mahitaji yangu.",
tech:"Habari NAKEBUSEN — ninaulizia mradi wa teknolojia. Ningependa kujadili mahitaji yangu.",
general:"Habari NAKEBUSEN — ningependa kuuliza kuhusu huduma za NAKEBUSEN. Tafadhali nijulishe hatua zinazofuata.",
payment:"Habari NAKEBUSEN — tafadhali nitumie maelezo yaliyothibitishwa ya malipo ya M-PESA Buy Goods kwa huduma tuliyokubaliana.",
support:"Habari Don Feloh — ningependa kuunga mkono kazi zako huru za ubunifu na teknolojia. Tafadhali nitumie njia zinazopatikana.",
retouch:"Habari NAKEBUSEN — ninaulizia huduma ya Retouch & Styling. Ningependa kujadili mahitaji yangu.",
retie:"Habari NAKEBUSEN — ninaulizia huduma ya Sisterlocs Retie. Ningependa kujadili mahitaji yangu.",
artificial:"Habari NAKEBUSEN — ninaulizia huduma ya Artificial Locs Installation. Ningependa kujadili mahitaji yangu."
}
};
function applyTheme(theme){
root.setAttribute('data-theme',theme);
if(themeMeta)themeMeta.setAttribute('content',theme==='dark'?'#000000':'#173D32');
storage.set(themeKey,theme);
if(themeToggle){const dict=copy[root.lang]||copy.en;themeToggle.setAttribute('aria-label',theme==='dark'?dict.themeToLight:dict.themeToDark);}
}
function applyLanguage(lang){
const selected=copy[lang]?lang:'en';
const dict=copy[selected];
document.querySelectorAll('[data-i18n]').forEach(el=>{
const key=el.getAttribute('data-i18n');
if(dict[key]!=null)el.textContent=dict[key];
});
document.querySelectorAll('[data-i18n-aria]').forEach(el=>{
const key=el.getAttribute('data-i18n-aria');
if(dict[key]!=null)el.setAttribute('aria-label',dict[key]);
});
document.querySelectorAll('[data-wa-service]').forEach(el=>{
const service=el.getAttribute('data-wa-service');
const message=whatsappMessages[selected][service];
if(message)el.href='https://wa.me/254719635415?text='+encodeURIComponent(message);
});
document.querySelectorAll('[data-wa-purpose]').forEach(el=>{
const purpose=el.getAttribute('data-wa-purpose');
const message=whatsappMessages[selected][purpose];
if(message)el.href='https://wa.me/254719635415?text='+encodeURIComponent(message);
});
root.lang=selected;
storage.set(languageKey,selected);
if(languageToggle){
languageToggle.querySelector('.toggle-icon').textContent=selected==='en'?'EN':'SW';
languageToggle.setAttribute('aria-label',selected==='en'?'Switch language to Kiswahili':'Badilisha lugha hadi Kiingereza');
}
if(themeToggle)themeToggle.setAttribute('aria-label',root.getAttribute('data-theme')==='dark'?dict.themeToLight:dict.themeToDark);
}
function init(){
const preferredTheme=storage.get(themeKey);
const systemDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches;
applyTheme(preferredTheme==='dark'||preferredTheme==='light'?preferredTheme:(systemDark?'dark':'light'));
applyLanguage(storage.get(languageKey)||'en');
if(themeToggle)themeToggle.addEventListener('click',()=>applyTheme(root.getAttribute('data-theme')==='dark'?'light':'dark'));
if(languageToggle)languageToggle.addEventListener('click',()=>applyLanguage(root.lang==='en'?'sw':'en'));
const dockLinks=Array.from(document.querySelectorAll('[data-dock-target]'));
if('IntersectionObserver' in window&&dockLinks.length){
const sections=dockLinks.map(link=>document.getElementById(link.dataset.dockTarget)).filter(Boolean);
const observer=new IntersectionObserver(entries=>{
const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio);
if(!visible.length)return;
const activeId=visible[0].target.id;
dockLinks.forEach(link=>{
if(link.dataset.dockTarget===activeId)link.setAttribute('aria-current','location');
else link.removeAttribute('aria-current');
});
},{rootMargin:'-18% 0px -58% 0px',threshold:[0,.15,.35,.6]});
sections.forEach(section=>observer.observe(section));
}
}
init();
})();
