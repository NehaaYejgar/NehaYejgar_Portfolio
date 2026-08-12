
(() => {
  "use strict";

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Menu ---------- */
  const menu = $("#menu");
  const menuBtn = $("#menuBtn");
  const menuClose = $("#menuClose");

  function closeMenu(){
    if(!menu) return;
    menu.classList.remove("open");
    menu.setAttribute("aria-hidden","true");
  }

  if(menuBtn && menu){
    menuBtn.addEventListener("click", () => {
      menu.classList.add("open");
      menu.setAttribute("aria-hidden","false");
    });
  }
  if(menuClose) menuClose.addEventListener("click", closeMenu);
  if(menu) $$("a", menu).forEach(a => a.addEventListener("click", closeMenu));

  /* ---------- Drawer ---------- */
  const drawer = $("#drawer");
  const drawerBg = $("#drawerBg");
  const drawerClose = $("#drawerClose");
  const drawerContent = $("#drawerContent");

  function openDrawer(content){
    if(!drawer || !drawerBg || !drawerContent) return;
    drawerContent.innerHTML = content;
    drawer.classList.add("open");
    drawerBg.classList.add("open");
    drawer.setAttribute("aria-hidden","false");
    document.body.classList.add("drawer-open");
  }

  function closeDrawer(){
    if(!drawer || !drawerBg) return;
    drawer.classList.remove("open");
    drawerBg.classList.remove("open");
    drawer.setAttribute("aria-hidden","true");
    document.body.classList.remove("drawer-open");
  }

  if(drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if(drawerBg) drawerBg.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", e => {
    if(e.key === "Escape"){
      closeDrawer();
      closeMenu();
    }
  });

  /* ---------- Experience details ---------- */
  const roleDetails = {
    cdf: {
      tag:"VOLUNTEER EXPERIENCE",
      title:"Community Dreams Foundation · Volunteer Business Analyst",
      body:"Support nonprofit projects through business analysis, executive reporting, process improvement, project coordination, risk tracking, data-quality review, Jira, Salesforce, and Google Sheets."
    },
    equinix: {
      tag:"INTERNSHIP",
      title:"Equinix · FP&A Intern — Americas Revenue FP&A",
      body:"Built and automated recurring reporting across bookings, churn, pricing, and forecast workflows. Connected and reconciled PBCS/Hyperion, Salesforce, Excel, and Tableau exports; standardized KPI logic; supported Power BI reporting across 1M+ records; and reduced recurring reporting effort substantially."
    },
    cutr: {
      tag:"PART-TIME PAID STUDENT RESEARCH POSITION",
      title:"Center for Urban Transportation Research · Student Research Assistant",
      body:"Analyzed 15K+ FDOT transportation and crash records, validated 10K+ records for completeness and consistency, explored safety and severity patterns, and supported Power BI and predictive-analysis work."
    },
    accenture: {
      tag:"PROFESSIONAL EXPERIENCE",
      title:"Accenture · Data Analyst / Application Development Associate",
      body:"Worked across SQL, Python, enterprise reporting, data validation, reconciliation, QA automation, Power BI, and process documentation. Developed and maintained approximately 2,000 Selenium/UFT automation scripts and later progressed into data-analysis and reporting work across millions of telecom billing records."
    },
    eamvey: {
      tag:"INTERNSHIP",
      title:"Eamvey · Web Developer Intern",
      body:"Supported front-end development for responsive web experiences, interface updates, feature testing, payment-flow support, and issue resolution."
    }
  };

  $$("[data-story]").forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.story;
      if(key === "community"){
        const tpl = $("#communityStoriesTemplate");
        if(tpl) openDrawer(tpl.innerHTML);
        return;
      }
      const d = roleDetails[key];
      if(d){
        openDrawer(`<div class="tag">${d.tag}</div><h2>${d.title}</h2><p>${d.body}</p>`);
      }
    });
  });

  /* ---------- Project filters ---------- */
  $$(".project-filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      $$(".project-filter button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      $$(".project-text-card").forEach(card => {
        card.style.display = (filter === "all" || card.dataset.category === filter) ? "grid" : "none";
      });
    });
  });

  const projectDetails = {
    austin:["INDEPENDENT PORTFOLIO PROJECT","Austin FC Fan & Ticketing Intelligence","A connected Power BI concept exploring ticketing, membership, attendance, engagement, marketing, and survey decisions. Independent portfolio work; no affiliation with Austin FC."],
    cte:["INTERACTIVE PROJECT","SQL CTE Visual Explainer","A visual grocery-store analogy that makes Common Table Expressions easier to understand by mapping store → shelves → cart → checkout to database → table → CTE → final query."],
    amazon:["ANALYTICS PROJECT","Amazon Promotion A/B Test","Compared 10% versus 15% promotion performance across GMV, ROAS, conversions, CTR, spend, and uncertainty."],
    risk:["INDEPENDENT PROJECT","Explainable Login Risk Detection","A transparent behavioral-risk framework for suspicious sign-ins using traceable rules and plain-language explanations."],
    food:["PYTHON PROJECT","Food Donation Dispatch Prioritization","A Python prototype that prioritizes perishable food donations using expiration windows, refrigeration requirements, distance, and operational urgency."],
    pain:["ACADEMIC MACHINE-LEARNING PROJECT","Pain Level Detection Through Facial Expressions","An academic computer-vision project exploring pain-level classification from facial-expression images. Presented as a learning project, not as a medical diagnostic system."],
    tax:["DOCUMENTATION IN PROGRESS","Tax Impact & U.S. Development Disparities","A Power BI public-data exploration of regional tax contributions, infrastructure quality, and development patterns."],
    voting:["ACADEMIC SOFTWARE PROJECT","Online Voting System","A Java and SQL database-backed voting application covering voter authentication, voting workflow, results, administrative controls, and data integrity."]
  };

  $$(".project-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const d = projectDetails[btn.dataset.project];
      if(d) openDrawer(`<div class="tag">${d[0]}</div><h2>${d[1]}</h2><p>${d[2]}</p>`);
    });
  });

  /* ---------- Capabilities ---------- */
  const capabilities = {
    bi:{
      num:"CAPABILITY 01",
      title:"Business Intelligence",
      line:"From fragmented sources to a trusted view of the decision.",
      proof:"25+ dashboards and reporting solutions supported at Accenture; 1M+ records connected for an Equinix churn model.",
      flow:["SOURCE","MODEL","KPI","DASHBOARD","DECISION"],
      what:["KPI definition","Data modeling","Dashboard design","Reporting automation","Executive storytelling"],
      where:["Equinix FP&A reporting","Accenture enterprise reporting","Austin FC portfolio case study"],
      related:["Austin FC Fan & Ticketing Intelligence","Amazon Promotion A/B Test"],
      tools:["Power BI","DAX","Power Query","Tableau","Excel","SQL"]
    },
    da:{
      num:"CAPABILITY 02",
      title:"Data Analytics",
      line:"Evidence that is cleaned, questioned, and interpreted with care.",
      proof:"5M+ enterprise records worked with at Accenture; 15K+ transportation records analyzed at CUTR.",
      flow:["RAW","QUERY","VALIDATE","ANALYZE","PATTERN"],
      what:["Data cleaning","Exploratory analysis","Statistical comparison","Root-cause analysis","Decision framing"],
      where:["CUTR transportation analysis","Accenture data workflows","Independent analytics projects"],
      related:["Amazon Promotion A/B Test","Explainable Login Risk Detection"],
      tools:["SQL","Python","Pandas","NumPy","SciPy","Matplotlib","Excel"]
    },
    ba:{
      num:"CAPABILITY 03",
      title:"Business Analysis",
      line:"Turning an unclear request into a shared, testable understanding.",
      proof:"Business analysis, reporting, process improvement, risk tracking, and requirements work across nonprofit and cross-functional projects.",
      flow:["PROBLEM","STAKEHOLDERS","REQUIREMENTS","PROCESS","SOLUTION"],
      what:["Requirements gathering","Process mapping","Gap analysis","User stories","Acceptance criteria","Stakeholder alignment"],
      where:["Community Dreams Foundation","Equinix cross-system KPI work","Portfolio problem framing"],
      related:["SQL CTE Visual Explainer","Austin FC Fan & Ticketing Intelligence"],
      tools:["Jira","Confluence","Process mapping","Lucidchart","Excel","Stakeholder interviews"]
    },
    pm:{
      num:"CAPABILITY 04",
      title:"Project Management",
      line:"Making work, risks, priorities, and dependencies visible.",
      proof:"Applied through nonprofit project coordination, cross-functional reporting delivery, and graduate coursework.",
      flow:["SCOPE","PLAN","DEPENDENCIES","EXECUTION","DELIVERY"],
      what:["Project planning","Status reporting","Risk tracking","Dependency mapping","Meeting facilitation","Agile coordination"],
      where:["Community Dreams Foundation","Cross-functional reporting delivery","Graduate coursework"],
      related:["How I Think"],
      tools:["Jira","Smartsheet","Monday.com","Azure DevOps","Kanban","Scrum"]
    },
    qa:{
      num:"CAPABILITY 05",
      title:"Quality Assurance",
      line:"Before I learned to analyze data, I learned to question it.",
      proof:"Approximately 2,000 automation scripts created and maintained within Accenture quality-assurance workflows.",
      flow:["INPUT","TEST","EDGE CASE","DEFECT","VALIDATE"],
      what:["Test-case design","Regression testing","Data validation","Defect investigation","Automation","Reconciliation"],
      where:["Accenture enterprise systems","Dashboard validation","Analytical quality checks"],
      related:["Explainable Login Risk Detection","SQL CTE Visual Explainer"],
      tools:["Selenium","UFT","SQL","PL/SQL","Jira","GitLab"]
    }
  };

  function renderCapability(key){
    const c = capabilities[key];
    if(!c) return;

    $$("#capabilities .cap-nav button[data-cap]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.cap === key);
    });

    $("#capNum").textContent = c.num;
    $("#capTitle").textContent = c.title;
    $("#capLine").textContent = c.line;
    $("#capProof").textContent = c.proof;

    $("#capFlowLine").innerHTML = c.flow.map((label,i) => `
      <div class="cap-step">
        <span class="step-num">${String(i+1).padStart(2,"0")}</span>
        <span class="step-label">${label}</span>
      </div>
    `).join("");

    $("#capDo").innerHTML = c.what.map(x => `<li>${x}</li>`).join("");
    $("#capWhere").innerHTML = c.where.map(x => `<li>${x}</li>`).join("");
    $("#capRelated").innerHTML = c.related.map(x => `<li>${x}</li>`).join("");
    $("#capTools").innerHTML = c.tools.map(x => `<span>${x}</span>`).join("");
  }

  $$("#capabilities .cap-nav button[data-cap]").forEach(btn => {
    btn.addEventListener("click", () => renderCapability(btn.dataset.cap));
  });

  renderCapability("bi");
})();
