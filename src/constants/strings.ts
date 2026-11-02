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

  hero: {
    eyebrow: 'Recruitment marketing voor het MKB',
    title: 'Bereik de 85% kandidaten die niet actief zoeken',
    titleHighlight: '85%',
    subtitle: 'Stop met wachten op reacties op dure vacaturebanken. Wervify combineert doelgerichte social campagnes in jouw huisstijl met 24/7 AI-voorselectie en menselijke validatie.',
    primaryCta: 'Plan gratis demo (20 min)',
    secondaryCta: 'Hoe het werkt',
    stats: [
      {
        value: '14 dagen',
        label: 'Gemiddelde doorlooptijd',
        detail: 'Tot eerste gekwalificeerde kandidaat',
      },
      {
        value: '65%',
        label: 'Kostenbesparing',
        detail: 'T.o.v. traditionele no-cure fees',
      },
      {
        value: '92%',
        label: 'Relevante voorselectie',
        detail: 'Geschikt bevonden via AI + validatie',
      },
    ],
    microProof: 'Vrijblijvend adviesgesprek • Direct inzicht in jouw wervingsregio • Geen plaatsingsfees',
    chat: {
      botName: 'Wervify AI-Assistent Bo',
      botBadge: '24/7 Live',
      botSub: 'Automatische WhatsApp voorselectie',
      status: 'Gekwalificeerd',
      responseTime: 'Reactietijd: 42 seconden',
      handoverStatus: 'Overdracht gereed',
      msg1Speaker: 'Bo:',
      msg1Text: 'Hoi Tom! Leuk dat je reageert op de vacature Servicemonteur bij Van Dijk Techniek. Heb je ervaring met installatietechniek?',
      msg2Speaker: 'Kandidaat (Tom):',
      msg2Text: 'Zeker, ik werk nu 4 jaar in de sector en heb mijn benodigde vakcertificaten op orde.',
      msg3Speaker: 'Bo:',
      msg3Text: 'Top! Je profiel sluit 100% aan op de criteria. Zullen we direct een vrijblijvende kennismaking inplannen?',
    },
  },

  trust: {
    heading: 'Actief voor groeiende werkgevers in heel Nederland',
    subheading: 'Wij helpen ambitieuze bedrijven in techniek, bouw, logistiek en zakelijke dienstverlening structureel aan personeel.',
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
    eyebrow: 'De traditionele wervingsvalkuil',
    title: 'Waarom traditionele werving het MKB in de steek laat',
    subtitle: 'De meeste bedrijven vallen terug op dezelfde twee opties die niet meer renderen in de huidige arbeidsmarkt.',
    cards: [
      {
        number: '01',
        title: 'Torenhoge bureaufees',
        description: 'Traditionele wervingsbureaus vragen 20% tot 25% van het jaarsalaris. Een enorme kostenpost zonder enige garantie op duurzame culturele fit of langdurige retentie.',
        drawback: 'Hoge vaste kosten, geen opbouw van eigen merkwaarde',
      },
      {
        number: '02',
        title: 'Verlaten vacaturesites',
        description: 'Vacaturebanken zoals Indeed bereiken uitsluitend de kleine 15% actieve zoekers. Dit leidt tot een stroom irrelevante sollicitaties van zogenoemde job-hoppers.',
        drawback: 'Veel ruis, nul bereik onder passieve topkrachten',
      },
      {
        number: '03',
        title: 'Traag opvolgen kost talent',
        description: 'Goede kandidaten die reageren wachten dagen op een telefoontje. In de tussentijd tekenen ze elders een contract. Snelheid is de bepalende factor.',
        drawback: 'Verlies van geschikte kandidaten door gebrek aan capaciteit',
      },
    ],
  },

  passiveTalent: {
    eyebrow: 'De verborgen arbeidsmarkt',
    title: 'Waarom werven via social media wél werkt',
    subtitle: 'In Nederland is slechts 10% tot 15% van de werkenden actief op zoek. De overige 85% heeft een baan, maar staat open voor een aantrekkelijk aanbod.',
    activePool: {
      percentage: '15%',
      label: 'Actief zoekend',
      description: 'Zitten op Indeed en LinkedIn Jobs. Krijgen dagelijks tientallen aanbiedingen en job-hoppen regelmatig.',
    },
    passivePool: {
      percentage: '85%',
      label: 'Passief / Latent zoekend',
      description: 'Zitten niet op vacaturesites, maar scrollen wel dagelijks op Instagram, Facebook en LinkedIn. Bereikbaar met een gericht aanbod.',
    },
    takeawayTitle: 'Wervify brengt jouw vacature direct onder de aandacht van de 85%',
    takeawayText: 'Niet als saaie vacaturetekst, maar als overtuigend employer-brand verhaal in jouw eigen huisstijl.',
  },

  pillars: {
    eyebrow: 'Onze bouwstenen',
    title: 'Vier pijlers voor voorspelbare instroom',
    subtitle: 'Een compleet wervingssysteem dat recruitment marketing, AI-technologie en menselijke screening combineert.',
    items: [
      {
        id: 'campaigns',
        title: 'Social Recruitment Campagnes',
        description: 'Op maat gemaakte video- en advertentiecampagnes op Meta en LinkedIn. Volledig in jouw eigen huisstijl, gericht op passieve kandidaten binnen jouw regio.',
        highlight: 'Eigen werkgeversmerk opbouwen',
      },
      {
        id: 'ai-screener',
        title: '24/7 AI-Voorselectie met Bo',
        description: 'Onze AI-assistent Bo reageert binnen 90 seconden via WhatsApp of webchat. Bo stelt 3 tot 4 kwalificerende knockout-vragen over ervaring, salaris en beschikbaarheid.',
        highlight: 'Onmiddellijke reactie dag en nacht',
      },
      {
        id: 'human-check',
        title: 'Persoonlijke Validatie',
        description: 'AI filtert de eerste laag, maar een menselijke recruitment specialist checkt altijd de motivatie en communicatieve vaardigheden voor overdracht.',
        highlight: 'Kwaliteit boven kwantiteit',
      },
      {
        id: 'dashboard',
        title: 'Kandidaten-Dashboard',
        description: 'In één overzichtelijk dashboard zie je alle gekwalificeerde kandidaten. Jij behoudt de volledige regie en plant met één klik het sollicitatiegesprek.',
        highlight: 'Directe agenda-integratie',
      },
    ],
  },

  process: {
    eyebrow: 'De Wervify Methode',
    title: 'Van vacature naar aanname in 4 stappen',
    subtitle: 'Geen ingewikkelde trajecten. Binnen twee weken heb je de eerste gekwalificeerde kandidaten aan tafel.',
    steps: [
      {
        step: '01',
        title: 'Digitale Intake & Profielbepaling',
        description: 'In een gerichte sessie van 30 minuten scherpen we het profiel aan: wat maakt de rol aantrekkelijk, welke eisen zijn hard en wat is het onderscheidend vermogen?',
        duration: 'Dag 1',
      },
      {
        step: '02',
        title: 'Campagnecreatie & Livegang',
        description: 'Ons creatieve team bouwt converterende advertenties in jouw huisstijl en lanceert hyper-gerichte campagnes op Instagram, Facebook en LinkedIn.',
        duration: 'Binnen 5 werkdagen',
      },
      {
        step: '03',
        title: 'AI Screening & Menselijke Check',
        description: 'Bo vangt alle reacties binnen 90 seconden op via WhatsApp. Onze consultants controleren beschikbaarheid en motivatie voordat de kandidaat wordt doorgezet.',
        duration: 'Continu 24/7',
      },
      {
        step: '04',
        title: 'Sollicitatiegesprekken & Selectie',
        description: 'De gekwalificeerde profielen verschijnen direct in jouw dashboard. Je nodigt de beste kandidaten uit voor een kennismaking en kiest zelf wie je aanneemt.',
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
