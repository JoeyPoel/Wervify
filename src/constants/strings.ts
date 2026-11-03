/**
 * Single Source of Truth for ALL User-Facing Copy (nl-NL).
 * Structured hierarchically by section.
 * Clean, generic Dutch MKB terminology without raw technical prefixes.
 */

export const strings = {
  meta: {
    siteTitle: 'Wervify | AI-Gedreven Recruitment Marketing voor het MKB',
    siteDescription: 'Bereik passieve topkandidaten die niet actief zoeken. Gerichte social campagnes, 24/7 AI-voorselectie met Bo en persoonlijke menselijke validatie.',
  },

  common: {
    brandName: 'Wervify',
    tagline: 'Het wervingssysteem voor het moderne MKB',
    planDemo: 'Plan gratis demo',
    learnMore: 'Bekijk de aanpak',
    contactUs: 'Neem contact op',
    viewPricing: 'Bekijk pakketten',
    viewCases: 'Bekijk resultaten',
    directPhone: '+31 (0)85 000 0000',
    directEmail: 'info@wervify.nl',
    directWhatsApp: 'WhatsApp ons',
    gdprNotice: 'Ik ga akkoord met de verwerking van mijn gegevens conform het privacybeleid.',
    loading: 'Versturen...',
    success: 'Verzonden!',
    error: 'Er ging iets mis',
    stepNumber: 'Stap',
    mostChosen: 'Meest gekozen',
    recommended: 'Aanbevolen',
    freeAdviceCall: 'Vrijblijvend adviesgesprek (20 min)',
    themeToggleLight: 'Schakel naar donkere modus',
    themeToggleDark: 'Schakel naar lichte modus',
  },

  nav: {
    approach: 'Aanpak',
    pricing: 'Pakketten',
    cases: 'Cases',
    about: 'Over ons',
    contact: 'Contact',
    ctaButton: 'Plan gratis demo',
  },

  missionVision: {
    eyebrow: 'Visie',
    title: 'Werving op eigen kracht',
    subtitle: 'Geen torenhoge provisies, maar een voorspelbare instroom van vakmensen in eigen beheer.',
    missionLabel: 'Missie',
    missionTitle: 'MKB bevrijden van dure bureaus.',
    missionText: 'Werven mag geen gok zijn. Wij geven werkgevers een eigen machine van gerichte social ads en 24/7 AI-screening.',
    missionTag: 'Vaste maandprijs • 0% provisie',
    visionLabel: 'Visie',
    visionTitle: 'De standaard voor MKB-werving.',
    visionText: 'Elk groeiend bedrijf in techniek, bouw en logistiek bouwt zelfstandig een sterk werkgeversmerk via WhatsApp.',
    visionTag: 'Duurzaam werkgeversmerk',
  },

  funnel: {
    eyebrow: 'In 3 stappen',
    title: 'Van scroller naar sollicitant',
    subtitle: 'Kandidaten bereiken, screenen en inplannen zonder handmatig werk.',
    step1Title: 'Gerichte Social Ad',
    step1Desc: 'Meta & LinkedIn advertenties in jouw regio en huisstijl.',
    step2Title: '24/7 AI-Screening',
    step2Desc: 'Bo toetst ervaring en certificaten binnen 90 seconden.',
    step3Title: 'Klaar voor Gesprek',
    step3Desc: 'Gekwalificeerde kandidaten direct in jouw agenda.',
  },

  calculator: {
    eyebrow: 'ROI Calculator',
    title: 'Bereken je besparing',
    subtitle: 'Traditionele bureaus vs. het vaste Wervify-systeem.',
    sliderLabel: 'Aantal vacatures per jaar',
    traditionalLabel: 'Traditioneel W&S Bureau',
    traditionalSub: '22% fee bij bruto jaarsalaris van € 45.000',
    wervifyLabel: 'Wervify Systeem',
    wervifySub: 'Vast maandbedrag, 0% provisie achteraf',
    savingsLabel: 'Jouw Jaarlijkse Besparing',
    ctaText: 'Claim deze besparing via een demo',
  },

  hero: {
    eyebrow: 'MKB Recruitment Marketing',
    title: 'Bereik de 85% die niet actief zoekt',
    titleHighlight: '85%',
    subtitle: 'Bouw een eigen wervingsmachine. Wij targeten passieve vakmensen op social media en screenen sollicitanten direct via WhatsApp.',
    primaryCta: 'Plan gratis demo',
    secondaryCta: 'Hoe het werkt',
    stats: [
      {
        value: '14 dagen',
        label: 'Doorlooptijd',
        detail: 'Tot eerste kandidaat',
      },
      {
        value: '65%',
        label: 'Besparing',
        detail: 'T.o.v. bureaufees',
      },
      {
        value: '92%',
        label: 'Kwalificatie',
        detail: 'Geschikt via AI-check',
      },
    ],
    microProof: 'Vrijblijvend advies • Direct regio-inzicht • 0% provisie',
    chat: {
      botName: 'AI-Assistent Bo',
      botBadge: '24/7 Live',
      botSub: 'WhatsApp voorselectie',
      status: 'Gekwalificeerd',
      responseTime: '42s reactietijd',
      handoverStatus: 'Overdracht gereed',
      msg1Speaker: 'Bo:',
      msg1Text: 'Hoi Tom! Leuk dat je reageert op de vacature Monteur. Heb je ervaring met installatietechniek?',
      msg2Speaker: 'Kandidaat (Tom):',
      msg2Text: 'Zeker, 4 jaar ervaring en VCA op orde.',
      msg3Speaker: 'Bo:',
      msg3Text: 'Top! Sluit 100% aan. Zullen we direct een kennismaking inplannen?',
    },
  },

  trust: {
    heading: 'Actief voor ambitieuze MKB-werkgevers',
    subheading: 'Structurele instroom voor techniek, bouw, logistiek en dienstverlening.',
    logos: [
      { name: 'Techniek & Installatie', category: 'Installatietechniek' },
      { name: 'Bouw & Aanneming', category: 'Bouw & Infra' },
      { name: 'Transport & Logistiek', category: 'Supply Chain' },
      { name: 'Zakelijke Dienstverlening', category: 'Financieel & Juridisch' },
      { name: 'Maakindustrie & Productie', category: 'Industrie' },
      { name: 'Zorg & Welzijn', category: 'Zorgorganisaties' },
    ],
  },

  problem: {
    eyebrow: 'De traditionele valkuil',
    title: 'Waarom oude werving faalt',
    subtitle: 'Vacaturebanken en wervingsbureaus renderen niet meer in de huidige markt.',
    cards: [
      {
        number: '01',
        title: 'Torenhoge bureaufees',
        description: 'Bureaus rekenen 20-25% provisie per aanname. Duur, eenmalig en zonder merkwaarde voor je eigen bedrijf.',
        drawback: 'Hoge vaste kosten, 0% merkwaarde',
      },
      {
        number: '02',
        title: 'Verlaten vacaturesites',
        description: 'Indeed bereikt slechts 15% actieve zoekers. Veel irrelevante reacties en job-hoppers.',
        drawback: 'Veel ruis, nul passief bereik',
      },
      {
        number: '03',
        title: 'Trage opvolging',
        description: 'Sollicitanten wachten dagen op reactie en tekenen elders. Snelheid bepaalt succes.',
        drawback: 'Talentverlies door vertraging',
      },
    ],
  },

  passiveTalent: {
    eyebrow: 'De arbeidsmarkt',
    title: 'Bereik de stille meerderheid',
    subtitle: 'Slechts 15% zoekt actief. De overige 85% heeft een baan, maar staat open voor een goed aanbod.',
    activePool: {
      percentage: '15%',
      label: 'Actief zoekend',
      description: 'Zitten op Indeed. Krijgen tientallen berichten en wisselen vaak van baan.',
    },
    passivePool: {
      percentage: '85%',
      label: 'Passief latent',
      description: 'Scrollen dagelijks op Instagram en LinkedIn. Bereikbaar met een gericht aanbod.',
    },
    takeawayTitle: 'Wervify bereikt de 85% passieve vakmensen',
    takeawayText: 'Niet met saaie teksten, maar met video- en fotocampagnes in jouw huisstijl.',
  },

  pillars: {
    eyebrow: 'Het Systeem',
    title: 'Vier pijlers voor constante instroom',
    subtitle: 'Recruitment marketing, 24/7 AI-screening en menselijke validatie gecombineerd.',
    items: [
      {
        id: 'campaigns',
        title: 'Social Campagnes',
        description: 'Gerichte video- en advertentiecampagnes op Meta en LinkedIn in jouw eigen huisstijl.',
        highlight: 'Eigen werkgeversmerk',
      },
      {
        id: 'ai-screener',
        title: '24/7 AI-Screening',
        description: 'Bo reageert binnen 90 seconden via WhatsApp en toetst vakkennis en beschikbaarheid.',
        highlight: 'Directe reactie',
      },
      {
        id: 'human-check',
        title: 'Persoonlijke Validatie',
        description: 'Een recruitment specialist controleert motivatie en communicatie vóór overdracht.',
        highlight: 'Kwaliteitsgarantie',
      },
      {
        id: 'dashboard',
        title: 'Kandidaten Dashboard',
        description: 'Overzichtelijk portaal met gekwalificeerde profielen en één-klik agenda integratie.',
        highlight: 'Volledige regie',
      },
    ],
  },

  process: {
    eyebrow: 'Werkwijze',
    title: 'Binnen 14 dagen de eerste kandidaat',
    subtitle: 'Van intake tot kennismakingsgesprek in vier stappen.',
    steps: [
      {
        step: '01',
        title: 'Intake (30 min)',
        description: 'We bepalen de harde eisen en het onderscheidend vermogen van de rol.',
        duration: 'Dag 1',
      },
      {
        step: '02',
        title: 'Campagne Live',
        description: 'Ons team bouwt advertenties in jouw huisstijl en lanceert regionaal.',
        duration: 'Binnen 5 dagen',
      },
      {
        step: '03',
        title: 'AI Screening',
        description: 'Bo vangt reacties binnen 90s op via WhatsApp en toetst ervaring.',
        duration: '24/7 continu',
      },
      {
        step: '04',
        title: 'Kennismaken',
        description: 'Gekwalificeerde profielen landen in jouw agenda. Jij kiest wie je aanneemt.',
        duration: 'Vanaf week 2',
      },
    ],
  },

  results: {
    eyebrow: 'Bewezen aanpak',
    title: 'Meetbare resultaten voor het MKB',
    subtitle: 'Transparante recruitment marketing zonder vage beloftes. Resultaten die voor zich spreken.',
    band: [
      { value: '14', unit: 'dagen', label: 'Tot eerste sollicitatiegesprek' },
      { value: '4.8', unit: '/5', label: 'Tevredenheidsscore werkgevers' },
      { value: '65%', unit: '', label: 'Besparing t.o.v. traditionele bureaus' },
      { value: '85%', unit: '', label: 'Bereik onder passieve kandidaten' },
    ],
  },

  cases: {
    eyebrow: 'Praktijkvoorbeelden',
    title: 'Succesvolle wervingen voor het MKB',
    subtitle: 'Ontdek hoe andere werkgevers moeilijk vervulbare posities structureel invulden met Wervify.',
  },

  comparison: {
    eyebrow: 'Vergelijk & Kies',
    title: 'Traditioneel Wervingsbureau vs. Wervify',
    subtitle: 'Waarom moderne werkgevers kiezen voor een eigen wervingssysteem in plaats van dure no-cure no-pay fees.',
    headers: {
      criteria: 'Onderdeel',
      agency: 'Traditioneel Bureau',
      wervify: 'Wervify Wervingssysteem',
    },
    rows: [
      {
        criteria: 'Kostenstructuur',
        agency: '20% - 25% van bruto jaarsalaris (€8.000 - €15.000 per hire)',
        wervify: 'Vast maandelijks bedrag, 0% plaatsingsfee, volledige budgetcontrole',
      },
      {
        criteria: 'Doelgroepbereik',
        agency: 'Eigen cv-database & actieve zoekers op LinkedIn/Indeed',
        wervify: '85% passieve doelgroep via gerichte social media campagnes',
      },
      {
        criteria: 'Merkopbouw',
        agency: 'Werving onder de naam van het bureau; bouwt geen merk voor jou',
        wervify: '100% in jouw huisstijl; bouwt duurzame naamsbekendheid op',
      },
      {
        criteria: 'Reactiesnelheid',
        agency: 'Handmatig cv-sorteren; opvolging duurt dagen',
        wervify: '24/7 respons binnen 90 seconden via AI-assistent Bo',
      },
      {
        criteria: 'Kwaliteitscontrole',
        agency: 'Wisselend; bureau pusht cv\'s voor snelle provisie',
        wervify: 'AI-knockout vragen gecombineerd met menselijke validatie',
      },
      {
        criteria: 'Eigenaarschap Data',
        agency: 'Kandidaten blijven eigendom van het bureau',
        wervify: 'Alle leads en data blijven 100% eigendom van jouw bedrijf',
      },
    ],
  },

  video: {
    eyebrow: 'Bekijk de introductie',
    title: 'Hoe Wervify werkt in 90 seconden',
    subtitle: 'Een korte introductie van onze gerichte campagnes, Bo de AI-assistent en het kandidaten-dashboard.',
    placeholderText: 'Videopresentatie en platformdemonstratie in productie.',
    playLabel: 'Start video',
  },

  pricing: {
    eyebrow: 'Transparante tarieven',
    title: 'Drie overzichtelijke pakketten, geen verborgen provisies',
    subtitle: 'Kies het niveau dat aansluit bij jouw wervingsdoelstelling. Maandelijks opzegbaar, geen plaatsingskosten achteraf.',
    billingMonthly: 'Maandelijks flexibel',
    billingQuarterly: 'Kwartaal voordeel (-15%)',
    setupNotice: 'Eenmalige onboarding & setup fee: € 450 (campagneconcept, huisstijl-templates, Bo AI-configuratie).',
    adSpendNotice: 'Let op: Advertentiebudget (Meta/LinkedIn) wordt direct 1-op-1 afgerekend bij de advertentieplatformen, zonder verborgen opslag van Wervify.',
    addOnsHeading: 'Beschikbare Uitbreidingen & Add-ons',
    comparisonHeading: 'Gedetailleerde vergelijking',
  },

  testimonials: {
    eyebrow: 'Ervaringen',
    title: 'Wat werkgevers over ons zeggen',
    subtitle: 'Reviews van directeuren en HR-verantwoordelijken in het MKB.',
    items: [
      {
        quote: 'We zochten al vier maanden tevergeefs naar een ervaren servicemonteur. Binnen 12 dagen na lancering met Wervify hadden we twee gekwalificeerde kandidaten op gesprek en direct één aangenomen.',
        author: 'Directeur Eigenaar',
        company: 'Installatiebedrijf MKB (45 medewerkers)',
        role: 'Directie',
      },
      {
        quote: 'De AI-assistent Bo filtert de reacties ongelooflijk snel. Geen stapels cv’s meer doorspitten. We spreken alleen mensen die echt gemotiveerd zijn en passen binnen ons salarishuis.',
        author: 'Head of People & Culture',
        company: 'Logistiek Dienstverlener (80 medewerkers)',
        role: 'HR & Werving',
      },
      {
        quote: 'Voorheen betaalden we tienduizenden euro’s per jaar aan werving- en selectiebureaus. Met Wervify bouwen we aan ons eigen werkgeversmerk tegen een fractie van die kosten.',
        author: 'Algemeen Directeur',
        company: 'Industriële Toeleverancier (60 medewerkers)',
        role: 'Management',
      },
    ],
  },

  faq: {
    eyebrow: 'Veelgestelde vragen',
    title: 'Alles wat je moet weten over Wervify',
    subtitle: 'Helderheid over werkwijze, kosten, technologie en samenwerking.',
  },

  about: {
    eyebrow: 'Over Wervify',
    title: 'Wij geven het MKB de regie over werving terug',
    subtitle: 'Ontstaan uit frustratie over trage bureaus en torenhoge plaatsingsfees.',
    story: 'Als ondernemer wil je groeien, maar een tekort aan goed personeel remt je af. Traditionele werving- en selectiebureaus rekenen duizenden euro’s per aanname en vacaturebanken leveren vooral ruis op. Wervify is opgericht met één duidelijke missie: MKB-bedrijven voorzien van een eigen, voorspelbaar wervingssysteem dat 24/7 doorwerkt.',
    consultantTitle: 'Jouw vaste recruitment marketing strategist',
    consultantSubtitle: 'Direct contact met een specialist die jouw sector en regio begrijpt.',
    consultantName: 'Recruitment Specialist',
    consultantRole: 'Senior Recruitment Strategist',
  },

  demo: {
    eyebrow: 'Zet de eerste stap',
    title: 'Plan een gratis demo en ontdek het wervingspotentieel',
    subtitle: 'In 20 minuten laten we zien hoeveel passieve kandidaten er in jouw regio beschikbaar zijn en hoe Bo jouw vacatures kan vullen.',
    companyNameLabel: 'Bedrijfsnaam*',
    companyNamePlaceholder: 'bijv. Jansen Bouwgroep B.V.',
    vacancyTitleLabel: 'Functietitel vacature*',
    vacancyTitlePlaceholder: 'bijv. Ervaren Werkvoorbereider E',
    salaryRangeLabel: 'Salarisindicatie (optioneel)',
    salaryRangePlaceholder: 'bijv. €3.500 - €4.500 p/m',
    notesLabel: 'Extra toelichting of gewenste ervaring',
    notesPlaceholder: 'bijv. Minimaal 3 jaar ervaring, rijbewijs B vereist...',
    emailLabel: 'Zakelijk e-mailadres*',
    emailPlaceholder: 'naam@bedrijf.nl',
    phoneLabel: 'Telefoonnummer (optioneel)',
    phonePlaceholder: '+31 6 12345678',
    gdprLabel: 'Ik geef toestemming om contact op te nemen over deze aanvraag conform het privacybeleid.*',
    submitButton: 'Plan vrijblijvende demo',
    phoneCallHeading: 'Liever direct even sparren?',
    phoneCallText: 'Bel direct met onze adviseur voor snel advies over jouw openstaande vacature.',
  },

  contact: {
    eyebrow: 'Contact opnemen',
    title: 'Heb je een vraag over onze aanpak of tarieven?',
    subtitle: 'Laat een bericht achter of neem direct contact met ons op. We reageren binnen één werkdag.',
    nameLabel: 'Jouw naam*',
    namePlaceholder: 'bijv. Peter van Dijk',
    companyLabel: 'Bedrijfsnaam',
    companyPlaceholder: 'bijv. Van Dijk Techniek',
    emailLabel: 'E-mailadres*',
    emailPlaceholder: 'peter@vandijktechniek.nl',
    messageLabel: 'Jouw vraag of toelichting*',
    messagePlaceholder: 'Vertel ons over jouw wervingsuitdaging...',
    gdprLabel: 'Ik ga akkoord met de verwerking van mijn gegevens.*',
    submitButton: 'Verstuur bericht',
  },

  footer: {
    description: 'Het slimme recruitment marketing systeem voor het Nederlandse MKB. Bereik passieve kandidaten met doelgerichte social campagnes en 24/7 AI-voorselectie.',
    navigationHeading: 'Navigatie',
    legalHeading: 'Juridisch',
    contactHeading: 'Contact & Gegevens',
    newsletterHeading: 'Recruitment Inzichten',
    newsletterSubtitle: 'Ontvang maandelijks praktische tips om passief talent aan te trekken. Geen spam.',
    newsletterPlaceholder: 'Jouw zakelijke e-mailadres',
    newsletterButton: 'Aanmelden',
    kvkLabel: 'KvK: 85940211',
    btwLabel: 'BTW: NL859402110B01',
    address: 'Centraal Nederland',
    privacyLink: 'Privacyverklaring',
    termsLink: 'Algemene Voorwaarden',
    cookiesLink: 'Cookiebeleid',
    copyright: '© 2026 Wervify. Alle rechten voorbehouden.',
  },

  notFound: {
    code: '404',
    title: 'Pagina niet gevonden',
    description: 'De pagina die je zoekt bestaat niet of is verplaatst. Keer terug naar de hoofdpagina.',
    homeButton: 'Terug naar Home',
  },
} as const;

export type AppStrings = typeof strings;
