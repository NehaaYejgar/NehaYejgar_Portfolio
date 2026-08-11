const menu=document.getElementById('menu'),menuBtn=document.getElementById('menuBtn'),menuClose=document.getElementById('menuClose');menuBtn.onclick=()=>{menu.classList.add('open');menu.setAttribute('aria-hidden','false')};menuClose.onclick=closeMenu;menu.querySelectorAll('a').forEach(a=>a.onclick=closeMenu);function closeMenu(){menu.classList.remove('open');menu.setAttribute('aria-hidden','true')}

document.querySelectorAll('.areas button').forEach(btn=>btn.onclick=()=>btn.parentElement.classList.toggle('open'));

const caps={
bi:{num:'CAPABILITY 01',title:'Business Intelligence',line:'From fragmented sources to a trusted view of the decision.',proof:'25+ dashboards and reporting solutions supported at Accenture; 1M+ records connected for an Equinix churn model.',do:['KPI definition','Data modeling','Dashboard design','Reporting automation','Executive storytelling'],where:['Equinix FP&A reporting','Accenture enterprise reporting','Austin FC portfolio case study'],tools:['Power BI','DAX','Power Query','Tableau','Excel','SQL'],flow:['SOURCE','MODEL','KPI','DASHBOARD','DECISION']},
da:{num:'CAPABILITY 02',title:'Data Analytics',line:'Evidence that is cleaned, questioned, and interpreted with care.',proof:'5M+ enterprise records worked with at Accenture; 15K+ transportation records analyzed at CUTR.',do:['Data cleaning','Exploratory analysis','Statistical comparison','Root-cause analysis','Decision framing'],where:['CUTR transportation analysis','Accenture data workflows','Independent analytics projects'],tools:['SQL','Python','Pandas','NumPy','SciPy','Matplotlib','Excel'],flow:['RAW DATA','QUERY','VALIDATE','ANALYZE','PATTERN']},
ba:{num:'CAPABILITY 03',title:'Business Analysis',line:'Turning an unclear request into a shared, testable understanding.',proof:'Current volunteer work applies reporting, process analysis, risk tracking, and requirements thinking across nonprofit projects.',do:['Requirements gathering','Process mapping','Gap analysis','User stories','Acceptance criteria','Stakeholder alignment'],where:['Community Dreams Foundation','Equinix cross-system KPI work','Portfolio problem framing'],tools:['Jira','Confluence','Process mapping','Lucidchart','Excel','Stakeholder interviews'],flow:['PROBLEM','STAKEHOLDERS','REQUIREMENTS','PROCESS','SOLUTION']},
pm:{num:'CAPABILITY 04',title:'Project Management',line:'A supporting capability for making work, risks, and dependencies visible.',proof:'Applied through project coordination, Agile ways of working, risk tracking, status communication, and planning.',do:['Planning','Prioritization','Risk tracking','Dependency tracking','Status communication'],where:['Community Dreams Foundation','Cross-functional analytics work','Independent projects'],tools:['Jira','Smartsheet','Monday.com','Lucidchart','Excel'],flow:['SCOPE','PLAN','DEPENDENCIES','EXECUTION','DELIVERY']},
qa:{num:'CAPABILITY 05',title:'Quality Assurance',line:'Before I learned to analyze data, I learned to question it.',proof:'Approximately 2,000 automation scripts across Accenture quality-assurance work, with validation habits that continue to shape analytics.',do:['Functional testing','Automation testing','Regression testing','Data validation','Defect investigation','Edge-case thinking'],where:['Accenture application and data workflows','Analytics validation practices'],tools:['Selenium','Jira','GitLab','SQL / PL-SQL','XML'],flow:['INPUT','TEST','EDGE CASE','DEFECT','VALIDATE']}}
const el=id=>document.getElementById(id);function setCap(k){let c=caps[k];document.querySelectorAll('.cap-nav button').forEach(b=>b.classList.toggle('active',b.dataset.cap===k));el('capNum').textContent=c.num;el('capTitle').textContent=c.title;el('capLine').textContent=c.line;el('capProof').textContent=c.proof;el('capDo').innerHTML=c.do.map(x=>`<li>${x}</li>`).join('');el('capWhere').innerHTML=c.where.map(x=>`<li>${x}</li>`).join('');el('capTools').innerHTML=c.tools.map(x=>`<li>${x}</li>`).join('');el('capVisual').innerHTML=`<div class="cap-diagram">${c.flow.map((x,i)=>`<span>${x}</span>${i<c.flow.length-1?'<b>→</b>':''}`).join('')}</div>`}setCap('bi');document.querySelectorAll('.cap-nav button').forEach(b=>b.onclick=()=>setCap(b.dataset.cap));

const drawer=el('drawer'),bg=el('drawerBg'),content=el('drawerContent');function openDrawer(html){content.innerHTML=html;drawer.classList.add('open');bg.classList.add('open');drawer.setAttribute('aria-hidden','false')}function closeDrawer(){drawer.classList.remove('open');bg.classList.remove('open');drawer.setAttribute('aria-hidden','true')}el('drawerClose').onclick=closeDrawer;bg.onclick=closeDrawer;document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();closeMenu()}})

const projectDetails={
austin:['INDEPENDENT PORTFOLIO PROJECT','Austin FC Fan & Ticketing Intelligence','A connected Power BI concept for exploring ticketing, membership, attendance, engagement, marketing, and survey decisions. Independent portfolio work; no affiliation with Austin FC.'],
cte:['INTERACTIVE PROJECT','SQL CTE Visual Explainer','A visual grocery-store analogy that maps database → tables → CTE → final query into store → shelves → cart → checkout.'],
amazon:['ANALYTICS PROJECT','Amazon Promotion A/B Test','A 10% versus 15% promotion experiment framed around GMV, ROAS, conversions, CTR, cost, statistical comparison, and uncertainty.'],
risk:['INDEPENDENT PROJECT','Explainable Login Risk Detection','Suspicious sign-in detection using device, location, timing, travel feasibility, behavioral profiles, rules fired, and a traceable risk explanation.'],
tax:['DOCUMENTATION IN PROGRESS','Tax Impact and U.S. Development Disparities','A Power BI public-data exploration of tax contributions, infrastructure quality, and development patterns. Keep conclusions qualified until project documentation is complete.'],
voting:['ACADEMIC SOFTWARE PROJECT','Online Voting System','A Java and SQL database-backed voting application covering voter authentication, registration, voting workflow, result tracking, administrative controls, and data integrity. This should not be presented as production-level election security.']}
document.querySelectorAll('.quick').forEach(b=>b.onclick=()=>{const p=projectDetails[b.dataset.project];openDrawer(`<div class="tag">${p[0]}</div><h2>${p[1]}</h2><p>${p[2]}</p>`)})

const stories={
cdf:['VOLUNTEER EXPERIENCE','Community Dreams Foundation — Volunteer Business Analyst',`<div class="detail-block"><div class="detail-label">ROLE OVERVIEW</div><p>Support nonprofit initiatives through business analysis, reporting, process improvement, project coordination, and decision support. The work is volunteer experience and is presented separately from paid employment.</p></div><div class="detail-block"><div class="detail-label">WHAT I WORK ON</div><ul><li>Translate project needs into clearer requirements, actions, and reporting views.</li><li>Create executive and operational dashboards and review project data for quality gaps and trends.</li><li>Track risks, deliverables, dependencies, ownership, and status across multiple nonprofit projects.</li><li>Use process mapping, value-stream and time-motion thinking, Lean Six Sigma concepts, and ROI analysis to identify improvement opportunities.</li></ul></div><div class="detail-block"><div class="detail-label">TOOLS & METHODS</div><ul class="tool-list"><li>Jira</li><li>Salesforce</li><li>Google Sheets</li><li>Dashboards</li><li>Process Mapping</li><li>ROI Analysis</li><li>Project Coordination</li></ul></div>`],
equinix:['INTERNSHIP','Equinix — FP&A Intern, Americas Revenue FP&A',`<div class="detail-block"><div class="detail-label">ROLE OVERVIEW</div><p>Supported Americas Revenue FP&A with recurring reporting, automation, KPI development, data reconciliation, and executive business reviews across bookings, churn, pricing, actuals, and forecasts.</p></div><div class="detail-block"><div class="detail-label">SELECTED WORK & IMPACT</div><ul><li>Built a Power BI churn reporting solution connecting seven source groups and more than one million records across financial and operational data.</li><li>Standardized KPI logic across QTD actual, forecast, prior period, prior year, churn percentage, size buckets, and top-driver reporting.</li><li>Reduced a major recurring churn-reporting workflow by approximately 80%, saving about three hours each week.</li><li>Built a Python KPI tracker that unified six Excel exports into a repeatable reporting workflow.</li><li>Reconciled reporting across systems including PBCS/Hyperion, Salesforce, Excel, and Tableau outputs before results were used in business reviews.</li></ul></div><div class="detail-block"><div class="detail-label">TOOLS & METHODS</div><ul class="tool-list"><li>Power BI</li><li>DAX</li><li>Power Query</li><li>Python</li><li>Excel</li><li>Salesforce</li><li>PBCS / Hyperion</li><li>Data Reconciliation</li><li>KPI Design</li></ul></div>`],
cutr:['PART-TIME PAID STUDENT RESEARCH POSITION','CUTR — Student Research Assistant, Data Analytics',`<div class="detail-block"><div class="detail-label">ROLE OVERVIEW</div><p>Worked as a part-time paid Student Research Assistant at the Center for Urban Transportation Research at the University of South Florida, supporting transportation-data analysis and validation.</p></div><div class="detail-block"><div class="detail-label">SELECTED WORK</div><ul><li>Analyzed more than 15,000 FDOT crash and transportation records and validated more than 10,000 records for analytical consistency.</li><li>Built Power BI views to make roadway, location, driver, and crash variables easier to explore.</li><li>Supported exploratory modeling using logistic regression and random forest methods, keeping interpretation appropriately qualified.</li><li>Focused on data quality and evidence validation before drawing conclusions from transportation patterns.</li></ul></div><div class="detail-block"><div class="detail-label">TOOLS & METHODS</div><ul class="tool-list"><li>Power BI</li><li>Python</li><li>Data Validation</li><li>Exploratory Analysis</li><li>Logistic Regression</li><li>Random Forest</li></ul></div>`],
accenture:['PROFESSIONAL EXPERIENCE','Accenture — Data Analyst / Application Development Associate',`<div class="detail-block"><div class="detail-label">ROLE OVERVIEW</div><p>Progressed from application-development and quality-assurance work into a Data Analyst role supporting enterprise data, validation, automation, reporting, and business-facing analytics.</p></div><div class="detail-block"><div class="detail-label">SELECTED WORK & IMPACT</div><ul><li>Worked with more than five million enterprise records using SQL, Python, Oracle, and Siebel data sources.</li><li>Retrieved, validated, reconciled, and prepared data for recurring operational and business reporting.</li><li>Supported more than 25 dashboards and reporting solutions in Power BI and related reporting workflows.</li><li>Built and maintained approximately 2,000 automation scripts across QA workflows, strengthening regression coverage and repeatability.</li><li>Used Selenium, Jira, GitLab, XML, and PL/SQL across testing, defect investigation, data validation, and application workflows.</li><li>Applied SAP Signavio for process mapping and carried the QA mindset—edge cases, validation, traceability—into later analytics work.</li></ul></div><div class="detail-block"><div class="detail-label">TOOLS & METHODS</div><ul class="tool-list"><li>SQL</li><li>Python</li><li>Power BI</li><li>Oracle</li><li>Siebel</li><li>Excel</li><li>Selenium</li><li>Jira</li><li>GitLab</li><li>PL/SQL</li><li>XML</li><li>SAP Signavio</li></ul></div>`],
eamvey:['INTERNSHIP','Eamvey — Web Developer Intern',`<div class="detail-block"><div class="detail-label">ROLE OVERVIEW</div><p>Early-career web development internship supporting a responsive e-commerce experience and the reliability of its user-facing workflows.</p></div><div class="detail-block"><div class="detail-label">SELECTED WORK</div><ul><li>Built and improved responsive web-interface components.</li><li>Supported feature testing, issue resolution, and end-to-end shopping-flow improvements.</li><li>Contributed to payment-gateway integration support and validation.</li></ul></div><div class="detail-block"><div class="detail-label">TOOLS & METHODS</div><ul class="tool-list"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>Responsive Web Design</li><li>Feature Testing</li></ul></div>`],
community:['LEADERSHIP & COMMUNITY','Community stories','<p><b>India, before 2024:</b> Women’s Representative; HPV vaccine awareness; traffic awareness with Change We Need NGO; government-school books and stationery support; two old-age-home visits; wall painting/restoration.</p><p><b>United States:</b> current volunteer work with Community Dreams Foundation.</p>']}
document.querySelectorAll('[data-story]').forEach(b=>b.onclick=()=>{const s=stories[b.dataset.story];openDrawer(`<div class="tag">${s[0]}</div><h2>${s[1]}</h2>${s[2]}`)})
document.querySelectorAll('[data-resume]').forEach(b=>b.onclick=()=>openDrawer('<div class="tag">RÉSUMÉ REQUEST</div><h2>Tailored résumé available by request.</h2><p>Add the verified professional email or approved résumé-request destination before publishing this build.</p>'))


// V6: visible pop/lift feedback on click or tap.
const popSelectors = [
  '.areas > div',
  '.cap-nav button',
  '.project',
  '.project .quick',
  '.role',
  '.role-copy button',
  '.beyond-grid .hobby-card',
  '.edu article',
  '.menu nav a',
  '.connect-actions button'
];

document.querySelectorAll(popSelectors.join(',')).forEach(node => {
  node.addEventListener('click', () => {
    node.classList.remove('click-pop');
    // Force animation restart when the same item is clicked again.
    void node.offsetWidth;
    node.classList.add('click-pop');
    window.setTimeout(() => node.classList.remove('click-pop'), 360);
  });
});


// V7: robust click/tap lift. Lift the relevant visual container for 650ms.
(function(){
  const liftSelectors = [
    '.areas > div',
    '.cap-nav button',
    '.project',
    '.role',
    '.beyond-grid .hobby-card',
    '.edu article',
    '.menu nav a',
    '.connect-actions button'
  ];

  function targetToLift(target){
    // If a child action is clicked, lift its whole parent section/card.
    const project = target.closest('.project');
    if(project) return project;
    const role = target.closest('.role');
    if(role) return role;
    const area = target.closest('.areas > div');
    if(area) return area;
    const beyond = target.closest('.beyond-grid .hobby-card');
    if(beyond) return beyond;
    const edu = target.closest('.edu article');
    if(edu) return edu;
    const cap = target.closest('.cap-nav button');
    if(cap) return cap;
    const menuLink = target.closest('.menu nav a');
    if(menuLink) return menuLink;
    const connect = target.closest('.connect-actions button');
    if(connect) return connect;
    return null;
  }

  document.addEventListener('pointerdown', function(e){
    const el = targetToLift(e.target);
    if(!el) return;
    el.classList.remove('interaction-pop');
    void el.offsetWidth;
    el.classList.add('interaction-pop');
    clearTimeout(el.__atlasPopTimer);
    el.__atlasPopTimer = setTimeout(()=>el.classList.remove('interaction-pop'), 650);
  }, {passive:true});
})();


// V8 compact project gallery
const galleryProjects = {
  austin:{
    type:'INDEPENDENT PORTFOLIO PROJECT · NO AFFILIATION',
    title:'Austin FC Fan & Ticketing Intelligence',
    desc:'A connected Power BI concept for exploring ticketing, membership, attendance, engagement, marketing, and survey decisions.',
    image:'assets/austin.svg',
    alt:'Austin FC portfolio visualization',
    tags:['Power BI','DAX','Power Query','Data modeling']
  },
  cte:{
    type:'INTERACTIVE PROJECT',
    title:'SQL CTE Visual Explainer',
    desc:'A grocery-store analogy that makes the data flow behind a Common Table Expression visible and memorable.',
    image:'assets/cte.svg',
    alt:'SQL CTE grocery-store visual explainer',
    tags:['SQL','HTML','CSS','JavaScript']
  },
  amazon:{
    type:'ANALYTICS PROJECT',
    title:'Amazon Promotion A/B Test',
    desc:'A 10% versus 15% promotion comparison framed around GMV, ROAS, conversions, CTR, spend, and uncertainty.',
    image:'assets/amazon.svg',
    alt:'Amazon promotion A/B test visualization',
    tags:['Python','Pandas','SciPy','Experiment design']
  },
  risk:{
    type:'INDEPENDENT PROJECT',
    title:'Explainable Login Risk Detection',
    desc:'A transparent behavioral-risk framework for suspicious sign-ins with traceable rules and plain-language explanations.',
    image:'assets/risk.svg',
    alt:'Explainable login risk detection visualization',
    tags:['Python','Behavioral profiling','Risk scoring']
  },
  tax:{
    type:'PORTFOLIO PROJECT · DOCUMENTATION IN PROGRESS',
    title:'Tax Impact & U.S. Development Disparities',
    desc:'A public-data Power BI analysis exploring regional tax contributions, infrastructure quality, and development patterns.',
    image:'assets/tax.svg',
    alt:'Tax and development public-data visualization',
    tags:['Power BI','Public data','DAX']
  },
  voting:{
    type:'ACADEMIC SOFTWARE PROJECT',
    title:'Online Voting System',
    desc:'A database-backed Java and SQL project for voter authentication, voting workflow, result management, and data integrity.',
    image:'assets/voting.svg',
    alt:'Online voting system visualization',
    tags:['Java','SQL','Database Design','Authentication']
  }
};

document.querySelectorAll('.project-tab').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.project-tab').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');
    const p=galleryProjects[btn.dataset.project];
    const img=document.getElementById('projectFeatureImage');
    img.src=p.image;
    img.alt=p.alt;
    document.getElementById('projectFeatureType').textContent=p.type;
    document.getElementById('projectFeatureTitle').textContent=p.title;
    document.getElementById('projectFeatureDesc').textContent=p.desc;
    document.getElementById('projectFeatureTags').innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');
    const q=document.getElementById('projectQuickView');
    q.dataset.project=btn.dataset.project;
    q.onclick=()=>{const d=projectDetails[btn.dataset.project];openDrawer(`<div class="tag">${d[0]}</div><h2>${d[1]}</h2><p>${d[2]}</p>`)};
  });
});

// Ensure first quick-view button is live after replacing the old section.
const firstQuick=document.getElementById('projectQuickView');
if(firstQuick){
  firstQuick.onclick=()=>{
    const d=projectDetails[firstQuick.dataset.project];
    openDrawer(`<div class="tag">${d[0]}</div><h2>${d[1]}</h2><p>${d[2]}</p>`);
  };
}


// Community service: open the complete service/leadership timeline.
document.querySelectorAll('[data-story="community"]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const template=document.getElementById('communityStoriesTemplate');
    if(template){
      openDrawer(template.innerHTML);
    }
  });
});


// Clean capability renderer — matches approved full-width flow layout
const cleanCaps = {
  bi:{
    num:'CAPABILITY 01',
    title:'Business Intelligence',
    line:'From fragmented sources to a trusted view of the decision.',
    proof:'25+ dashboards and reporting solutions supported at Accenture; 1M+ records connected for an Equinix churn model.',
    flow:['SOURCE','MODEL','KPI','DASHBOARD','DECISION'],
    do:['KPI definition','Data modeling','Dashboard design','Reporting automation','Executive storytelling'],
    where:['Equinix FP&A reporting','Accenture enterprise reporting','Austin FC portfolio case study'],
    related:['Austin FC Fan & Ticketing Intelligence ↗','Amazon Promotion A/B Test ↗'],
    tools:['Power BI','DAX','Power Query','Tableau','Excel','SQL']
  },
  da:{
    num:'CAPABILITY 02',
    title:'Data Analytics',
    line:'Evidence that is cleaned, questioned, and interpreted with care.',
    proof:'5M+ enterprise records worked with at Accenture; 15K+ transportation records analyzed at CUTR.',
    flow:['RAW','QUERY','VALIDATE','ANALYZE','PATTERN'],
    do:['Data cleaning','Exploratory analysis','Statistical comparison','Root-cause analysis','Decision framing'],
    where:['CUTR transportation analysis','Accenture data workflows','Independent analytics projects'],
    related:['Amazon Promotion A/B Test ↗','Explainable Login Risk Detection ↗'],
    tools:['SQL','Python','Pandas','NumPy','SciPy','Matplotlib','Excel']
  },
  ba:{
    num:'CAPABILITY 03',
    title:'Business Analysis',
    line:'Turning an unclear request into a shared, testable understanding.',
    proof:'Current volunteer work applies reporting, process analysis, risk tracking, and requirements thinking across nonprofit projects.',
    flow:['PROBLEM','STAKEHOLDERS','REQUIREMENTS','PROCESS','SOLUTION'],
    do:['Requirements gathering','Process mapping','Gap analysis','User stories','Acceptance criteria','Stakeholder alignment'],
    where:['Community Dreams Foundation','Equinix cross-system KPI work','Portfolio problem framing'],
    related:['SQL CTE Visual Explainer ↗','Austin FC Fan & Ticketing Intelligence ↗'],
    tools:['Jira','Confluence','Process mapping','Lucidchart','Excel','Stakeholder interviews']
  },
  pm:{
    num:'CAPABILITY 04',
    title:'Project Management',
    line:'A supporting capability for making work, risks, and dependencies visible.',
    proof:'Presented as a capability—not as a past job title.',
    flow:['SCOPE','PLAN','DEPENDENCIES','EXECUTION','DELIVERY'],
    do:['Project planning','Status reporting','Risk tracking','Dependency mapping','Meeting facilitation','Agile coordination'],
    where:['Community Dreams Foundation','Cross-functional reporting delivery','Graduate coursework'],
    related:['How I Think ↗'],
    tools:['Jira','Smartsheet','Monday.com','Azure DevOps','Kanban','Scrum']
  },
  qa:{
    num:'CAPABILITY 05',
    title:'Quality Assurance',
    line:'Before I learned to analyze data, I learned to question it.',
    proof:'≈2,000 automation scripts created and maintained within Accenture quality-assurance workflows.',
    flow:['INPUT','TEST','EDGE CASE','DEFECT','VALIDATE'],
    do:['Test-case design','Regression testing','Data validation','Defect investigation','Automation','Reconciliation'],
    where:['Accenture enterprise systems','Dashboard validation','Analytical quality checks'],
    related:['Explainable Login Risk Detection ↗','SQL CTE Visual Explainer ↗'],
    tools:['Selenium','UFT','SQL','PL/SQL','Jira','GitLab']
  }
};

function renderCleanCapability(key){
  const c=cleanCaps[key];
  if(!c) return;

  document.querySelectorAll('.capability-layout .cap-nav button').forEach(btn=>{
    btn.classList.toggle('active',btn.dataset.cap===key);
  });

  document.getElementById('capNum').textContent=c.num;
  document.getElementById('capTitle').textContent=c.title;
  document.getElementById('capLine').textContent=c.line;
  document.getElementById('capProof').textContent=c.proof;

  document.getElementById('capFlowLine').innerHTML=c.flow.map((label,i)=>`
    <div class="cap-step">
      <span class="step-num">${String(i+1).padStart(2,'0')}</span>
      <span class="step-label">${label}</span>
    </div>
  `).join('');

  document.getElementById('capDo').innerHTML=c.do.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('capWhere').innerHTML=c.where.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('capRelated').innerHTML=c.related.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('capTools').innerHTML=c.tools.map(x=>`<span>${x}</span>`).join('');
}

document.querySelectorAll('.capability-layout .cap-nav button').forEach(btn=>{
  btn.addEventListener('click',()=>renderCleanCapability(btn.dataset.cap));
});

renderCleanCapability('bi');
