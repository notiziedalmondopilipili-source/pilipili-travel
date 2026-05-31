const CONFIG = {
  "brand": "Amani Tour & Safari Zanzibar · PiliPiliTravel",
  "email": "info@pilipilitravel.com",
  "whatsapp": "393891358540",
  "whatsappDisplay": "+39 389 135 8540",
  "zanzibarPhone": "+255 629 381 793",
  "address": "Pwani Mchangani, Zanzibar, Tanzania",
  "site": "pilipilitravel.com"
};
const DEFAULT_PRODUCTS = [
  {
    "id": "combo-zanzibar-safari",
    "title": "Mare a Zanzibar + Safari nella Savana",
    "category": "Combinati",
    "location": "Zanzibar + Tanzania",
    "duration": "Da 4 a 10 giorni",
    "price": "Preventivo su misura",
    "badge": "Più venduto",
    "description": "Pacchetto combinato per chi vuole relax sull’oceano e safari nei parchi della Tanzania, con trasferimenti coordinati e assistenza locale.",
    "inclusions": [
      "Programma mare + safari",
      "Hotel o villa selezionati",
      "Richiesta rapida via WhatsApp",
      "Personalizzazione per coppie, famiglie e gruppi"
    ],
    "featured": true,
    "special": true,
    "source": "pilipilitravel.com + materiali Drive",
    "emoji": "🌊🦁"
  },
  {
    "id": "tanzania-express-4g",
    "title": "Tanzania Express",
    "category": "Safari",
    "location": "Tanzania",
    "duration": "4 giorni",
    "price": "Su richiesta",
    "badge": "Express",
    "description": "Safari veloce ideale per chi ha pochi giorni e vuole aggiungere la savana al soggiorno mare di Zanzibar.",
    "inclusions": [
      "Itinerario compatto",
      "Game drive",
      "Possibile partenza da Zanzibar",
      "Preventivo personalizzato"
    ],
    "featured": true,
    "special": false,
    "source": "www.wwwpilipilitravel.com / sezione Safari",
    "emoji": "🦒"
  },
  {
    "id": "ngoro-serengeti",
    "title": "Ngorongoro & Serengeti",
    "category": "Safari",
    "location": "Nord Tanzania",
    "duration": "6–7 giorni consigliati",
    "price": "Su richiesta",
    "badge": "Big Five",
    "description": "Esperienza iconica per chi sogna i grandi paesaggi del nord Tanzania e l’avvistamento dei big five.",
    "inclusions": [
      "Parchi del nord",
      "Lodge o campi tendati",
      "Guida locale",
      "Combinabile con Zanzibar"
    ],
    "featured": true,
    "special": true,
    "source": "pilipilitravel.com / esperienze in evidenza",
    "emoji": "🦁"
  },
  {
    "id": "best-of-tanzania-6g",
    "title": "Best of Tanzania Safari",
    "category": "Safari",
    "location": "Tanzania",
    "duration": "6 giorni",
    "price": "Su richiesta",
    "badge": "Top safari",
    "description": "Programma safari completo per vivere i parchi più amati della Tanzania con un ritmo equilibrato.",
    "inclusions": [
      "Safari 6 giorni",
      "Parchi selezionati",
      "Assistenza nella costruzione itinerario",
      "Opzione mare finale"
    ],
    "featured": false,
    "special": false,
    "source": "www.wwwpilipilitravel.com / sezione Safari",
    "emoji": "🐘"
  },
  {
    "id": "safari-special-5g4n",
    "title": "Safari Special",
    "category": "Safari",
    "location": "Tanzania",
    "duration": "5 giorni / 4 notti",
    "price": "Su richiesta",
    "badge": "Speciale",
    "description": "Prodotto safari speciale, perfetto per campagne promozionali, agenzie e richieste last minute.",
    "inclusions": [
      "Itinerario 5 giorni",
      "Prodotto in vetrina",
      "Possibili upgrade",
      "Richiesta disponibilità immediata"
    ],
    "featured": false,
    "special": true,
    "source": "www.wwwpilipilitravel.com / sezione Safari Special",
    "emoji": "🐆"
  },
  {
    "id": "selous-nyerere-24-25",
    "title": "Safari Selous / Nyerere 24–25",
    "category": "Safari",
    "location": "Tanzania del Sud",
    "duration": "Variabile",
    "price": "Su richiesta",
    "badge": "Drive PDF",
    "description": "Safari nel sud della Tanzania, vendibile come alternativa ai parchi del nord o come estensione da Zanzibar.",
    "inclusions": [
      "Proposta da PDF Drive",
      "Nyerere / Selous",
      "Preventivo dedicato",
      "Possibile volo da Zanzibar"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: SAFARI / SAFARI SELOUS 24-25.pdf",
    "emoji": "🦛"
  },
  {
    "id": "mnemba-snorkeling",
    "title": "Mnemba Snorkeling",
    "category": "Escursioni",
    "location": "Atollo di Mnemba, Zanzibar",
    "duration": "Mezza giornata / giornata",
    "price": "Da definire",
    "badge": "Oceano",
    "description": "Giornata in barca con mare cristallino, fondali e pranzo locale su richiesta.",
    "inclusions": [
      "Barca",
      "Snorkeling",
      "Assistenza locale",
      "Opzione pranzo"
    ],
    "featured": true,
    "special": false,
    "source": "pilipilitravel.com / esperienze in evidenza",
    "emoji": "🤿"
  },
  {
    "id": "stone-town-spezie",
    "title": "Stone Town + Spezie",
    "category": "Escursioni",
    "location": "Stone Town + piantagioni",
    "duration": "Giornata",
    "price": "Da definire",
    "badge": "Cultura",
    "description": "Mercati, architettura swahili, storia dell’isola e profumi delle piantagioni.",
    "inclusions": [
      "Guida",
      "Tour storico",
      "Spice tour",
      "Personalizzabile"
    ],
    "featured": true,
    "special": false,
    "source": "pilipilitravel.com / esperienze in evidenza",
    "emoji": "🕌"
  },
  {
    "id": "safari-blue",
    "title": "Safari Blue",
    "category": "Escursioni",
    "location": "Zanzibar",
    "duration": "Giornata",
    "price": "Da definire",
    "badge": "Best seller",
    "description": "Escursione in barca tradizionale, snorkeling, sandbank e pranzo seafood in stile locale.",
    "inclusions": [
      "Barca",
      "Snorkeling",
      "Pranzo",
      "Esperienza oceano"
    ],
    "featured": true,
    "special": false,
    "source": "Drive: ZANZIBAR / ESCURSIONI + sito",
    "emoji": "⛵"
  },
  {
    "id": "prison-island",
    "title": "Prison Island",
    "category": "Escursioni",
    "location": "Zanzibar",
    "duration": "Mezza giornata",
    "price": "Da definire",
    "badge": "Classico",
    "description": "Escursione classica con storia dell’isola e incontro con le tartarughe giganti.",
    "inclusions": [
      "Trasferimento opzionale",
      "Barca",
      "Guida",
      "Combinabile con Stone Town"
    ],
    "featured": false,
    "special": false,
    "source": "www.pilipilitravel.com / foto esperienze",
    "emoji": "🐢"
  },
  {
    "id": "the-rock-restaurant",
    "title": "The Rock Restaurant Experience",
    "category": "Ristoranti",
    "location": "Michamvi, Zanzibar",
    "duration": "Pranzo o cena",
    "price": "Da definire",
    "badge": "Iconico",
    "description": "Esperienza food in uno dei luoghi più fotografati di Zanzibar, vendibile con trasferimento e tour mare.",
    "inclusions": [
      "Prenotazione su richiesta",
      "Trasferimento opzionale",
      "Esperienza fotografica",
      "Combinabile con spiagge sud-est"
    ],
    "featured": false,
    "special": true,
    "source": "www.pilipilitravel.com / foto esperienze",
    "emoji": "🍽️"
  },
  {
    "id": "mtende-beach",
    "title": "Mtende Beach",
    "category": "Escursioni",
    "location": "Sud Zanzibar",
    "duration": "Mezza giornata / giornata",
    "price": "Da definire",
    "badge": "Natura",
    "description": "Spiaggia scenografica nel sud dell’isola, perfetta per tour fotografici e giornata relax.",
    "inclusions": [
      "Trasferimento",
      "Stop fotografici",
      "Guida locale",
      "Abbinabile a The Rock"
    ],
    "featured": false,
    "special": false,
    "source": "www.pilipilitravel.com / foto esperienze",
    "emoji": "🏝️"
  },
  {
    "id": "jozani-forest",
    "title": "Jozani Forest e scimmie rosse",
    "category": "Escursioni",
    "location": "Jozani, Zanzibar",
    "duration": "Mezza giornata",
    "price": "Da definire",
    "badge": "Natura",
    "description": "Tour naturalistico nella foresta di Jozani per osservare la fauna locale e scoprire l’ambiente dell’isola.",
    "inclusions": [
      "Guida",
      "Foresta",
      "Mangrovie",
      "Trasferimento opzionale"
    ],
    "featured": false,
    "special": false,
    "source": "www.pilipilitravel.com / foto esperienze",
    "emoji": "🐒"
  },
  {
    "id": "passeggiata-cavallo",
    "title": "Passeggiata a cavallo sulla spiaggia",
    "category": "Escursioni",
    "location": "Zanzibar",
    "duration": "Su richiesta",
    "price": "Da definire",
    "badge": "Romantico",
    "description": "Prodotto emozionale perfetto per coppie, honeymoon e contenuti social.",
    "inclusions": [
      "Esperienza privata o condivisa",
      "Orario su richiesta",
      "Foto ricordo",
      "Trasferimento opzionale"
    ],
    "featured": false,
    "special": true,
    "source": "www.pilipilitravel.com / foto esperienze",
    "emoji": "🐎"
  },
  {
    "id": "amani-villa-zanzibar",
    "title": "Amani Villa Zanzibar",
    "category": "Strutture",
    "location": "Pwani Mchangani",
    "duration": "Soggiorno flessibile",
    "price": "Chiedi disponibilità",
    "badge": "Villa",
    "description": "Soggiorno tranquillo vicino all’oceano con escursioni, trasferimenti e ristorante coordinati.",
    "inclusions": [
      "Camere tropicali",
      "Colazione su richiesta",
      "Pacchetti escursioni",
      "Assistenza locale"
    ],
    "featured": true,
    "special": true,
    "source": "pilipilitravel.com + Drive: Amani-Villa-Zanzibar",
    "emoji": "🌴"
  },
  {
    "id": "bahati-villa-resort",
    "title": "Bahati Villa Resort",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Resort",
    "description": "Struttura selezionata per pacchetti soggiorno, tour mare e combinati con safari.",
    "inclusions": [
      "Disponibilità su richiesta",
      "Pacchetti combinabili",
      "Trasferimenti opzionali",
      "Supporto agenzie"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Bahati Villa RESORT",
    "emoji": "🏨"
  },
  {
    "id": "nungwi-dreams",
    "title": "Nungwi Dreams by Mantis",
    "category": "Strutture",
    "location": "Nungwi",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Hotel",
    "description": "Struttura mare da inserire in pacchetti Zanzibar, safari + mare o soggiorni speciali.",
    "inclusions": [
      "Area Nungwi",
      "Soggiorni coppie/famiglie",
      "Pacchetti mare",
      "Richiesta rapida"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Nungwi Dreams by Mantis",
    "emoji": "🌅"
  },
  {
    "id": "sansi-kendwa",
    "title": "Sansi Kendwa Beach Resort",
    "category": "Strutture",
    "location": "Kendwa",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "4 stelle",
    "description": "Resort mare per pacchetti relax, coppie, gruppi e combinati con safari.",
    "inclusions": [
      "Kendwa beach",
      "Resort mare",
      "Combinabile con party night",
      "Preventivo su misura"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / 4 STAR - SANSI KENDWA BEACH RESORT",
    "emoji": "🏖️"
  },
  {
    "id": "sansi-kae",
    "title": "Sansi Kae Beach Resort & Spa",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "5 stelle",
    "description": "Resort e spa vendibile come soggiorno premium o upgrade in combinato mare+safari.",
    "inclusions": [
      "Resort 5 stelle",
      "Spa",
      "Disponibilità su richiesta",
      "Upgrade pacchetti"
    ],
    "featured": false,
    "special": true,
    "source": "Drive: ZANZIBAR / 5 STAR - SANSI KAE BEACH RESORT AND SPA ZANZIBAR",
    "emoji": "✨"
  },
  {
    "id": "blu-marlin-village",
    "title": "Blu Marlin Village Zanzibar",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Beach resort",
    "description": "Prodotto struttura per clienti che cercano mare, semplicità e pacchetti pronti.",
    "inclusions": [
      "Soggiorno mare",
      "Trasferimenti opzionali",
      "Escursioni abbinabili",
      "Richiesta disponibilità"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Blu Marlin village Zanzibar",
    "emoji": "🌊"
  },
  {
    "id": "mvuvi-resort",
    "title": "Mvuvi Boutique Resort",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Boutique",
    "description": "Boutique resort per viaggiatori che desiderano un soggiorno più raccolto e curato.",
    "inclusions": [
      "Boutique stay",
      "Mare",
      "Preventivo dedicato",
      "Pacchetti escursioni"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Mvuvi Boutique Resort",
    "emoji": "🛏️"
  },
  {
    "id": "zanzibar-pearl",
    "title": "Zanzibar Pearl Boutique Hotel & Villas",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Boutique villas",
    "description": "Hotel e ville boutique da proporre in pacchetti mare personalizzati.",
    "inclusions": [
      "Hotel/villas",
      "Preventivo",
      "Upgrade su richiesta",
      "Combinato safari"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Zanzibar Pearl Boutique Hotel & Villas",
    "emoji": "🏡"
  },
  {
    "id": "sharazad-group",
    "title": "Sharazad Group",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Partner",
    "description": "Struttura partner per pacchetti soggiorno e richieste su misura.",
    "inclusions": [
      "Partner struttura",
      "Pacchetti su misura",
      "Disponibilità",
      "Assistenza"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Sharazad group",
    "emoji": "🤝"
  },
  {
    "id": "villa-dida",
    "title": "Villa Dida Hotel Zanzibar",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Hotel",
    "description": "Hotel da inserire nel catalogo disponibilità per clienti e agenzie.",
    "inclusions": [
      "Hotel",
      "Disponibilità su richiesta",
      "Pacchetti mare",
      "Supporto agenzie"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / Villa Dida hotel Zanzibar",
    "emoji": "🏩"
  },
  {
    "id": "tao-hotel-spa",
    "title": "TAO Hotel & Spa Zanzibar",
    "category": "Strutture",
    "location": "Zanzibar",
    "duration": "Soggiorno",
    "price": "Chiedi disponibilità",
    "badge": "Spa",
    "description": "Proposta soggiorno con focus relax e servizi wellness.",
    "inclusions": [
      "Spa",
      "Soggiorno",
      "Pacchetti relax",
      "Preventivo"
    ],
    "featured": false,
    "special": false,
    "source": "Drive: ZANZIBAR / TAO HOTEL & SPA ZANZIBAR",
    "emoji": "💆"
  },
  {
    "id": "waikiki-party-night",
    "title": "Waikiki Party Night",
    "category": "Party Night",
    "location": "Kiwengwa",
    "duration": "Tutta la notte",
    "price": "Da definire",
    "badge": "Nightlife",
    "description": "Serata speciale a Kiwengwa, ideale come add-on per gruppi, giovani e pacchetti experience.",
    "inclusions": [
      "Party night",
      "Kiwengwa",
      "Trasferimento opzionale",
      "Vendibile come extra"
    ],
    "featured": true,
    "special": true,
    "source": "www.wwwpilipilitravel.com / Special Party Night",
    "emoji": "🎉"
  },
  {
    "id": "full-moon-party",
    "title": "Full Moon Party",
    "category": "Party Night",
    "location": "Kendwa Beach",
    "duration": "Serata",
    "price": "Da definire",
    "badge": "Kendwa",
    "description": "Kendwa Beach Party vendibile come esperienza speciale e prodotto ad alto impatto commerciale.",
    "inclusions": [
      "Party in spiaggia",
      "Kendwa",
      "Gruppi",
      "Transfer opzionale"
    ],
    "featured": true,
    "special": true,
    "source": "www.wwwpilipilitravel.com / Special Party Night",
    "emoji": "🌕"
  },
  {
    "id": "cocco-bello-club",
    "title": "Cocco Bello Club",
    "category": "Party Night",
    "location": "Nungwi",
    "duration": "Mercoledì & Domenica",
    "price": "Da definire",
    "badge": "Club",
    "description": "Serata club vendibile come extra per clienti in zona Nungwi e pacchetti nightlife.",
    "inclusions": [
      "Club night",
      "Mercoledì e domenica",
      "Nungwi",
      "Richiesta disponibilità"
    ],
    "featured": false,
    "special": true,
    "source": "www.wwwpilipilitravel.com / Special Party Night + Drive COCCO BELLO",
    "emoji": "💃"
  },
  {
    "id": "waikiki-food",
    "title": "Waikiki Beach Food Experience",
    "category": "Ristoranti",
    "location": "Kiwengwa",
    "duration": "Pranzo / cena",
    "price": "Da definire",
    "badge": "Food",
    "description": "Esperienza ristorante e beach club da proporre come prodotto speciale o add-on al soggiorno.",
    "inclusions": [
      "Food experience",
      "Spiaggia",
      "Gruppi",
      "Pacchetto extra"
    ],
    "featured": false,
    "special": true,
    "source": "www.wwwpilipilitravel.com / contenuti party e food",
    "emoji": "🍤"
  },
  {
    "id": "aragoste-seafood",
    "title": "Seafood & Aragoste Experience",
    "category": "Ristoranti",
    "location": "Zanzibar",
    "duration": "Pranzo / cena",
    "price": "Da definire",
    "badge": "Gourmet locale",
    "description": "Esperienza culinaria locale con seafood, ideale per coppie, gruppi e pacchetti romantici.",
    "inclusions": [
      "Menu seafood",
      "Esperienza locale",
      "Abbinabile a escursioni",
      "Prenotazione su richiesta"
    ],
    "featured": false,
    "special": true,
    "source": "www.pilipilitravel.com / foto esperienze food",
    "emoji": "🦞"
  },
  {
    "id": "last-minute-agency",
    "title": "Proposte Agenzie & Last Minute",
    "category": "Combinati",
    "location": "Zanzibar / Tanzania / Kenya",
    "duration": "Variabile",
    "price": "Offerta su richiesta",
    "badge": "Agenzie",
    "description": "Area commerciale per caricare offerte last minute, prodotti in vetrina e proposte dedicate alle agenzie partner.",
    "inclusions": [
      "Offerta modificabile",
      "Prodotti speciali",
      "Vetrina agenzie",
      "Richiesta veloce"
    ],
    "featured": true,
    "special": true,
    "source": "www.wwwpilipilitravel.com / Proposte delle nostre agenzie",
    "emoji": "🔥"
  }
];
const STORAGE_KEY = "pilipiliMegaCatalogProducts.v1";
const CART_KEY = "pilipiliMegaCatalogCart.v1";

let products = loadProducts();
let cart = loadCart();
let currentCategory = "Tutti";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return String(value || "prodotto")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "") || `prodotto-${Date.now()}`;
}

function loadProducts() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : structuredClone(DEFAULT_PRODUCTS);
  } catch (error) {
    console.warn("Impossibile caricare prodotti salvati", error);
    return structuredClone(DEFAULT_PRODUCTS);
  }
}

function saveProducts() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

function loadCart() {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function categories() {
  return ["Tutti", ...Array.from(new Set(products.map((p) => p.category))).sort((a, b) => a.localeCompare(b, "it"))];
}

function init() {
  $("#year").textContent = new Date().getFullYear();
  $("#heroWhatsApp").href = whatsappUrl("Ciao, vorrei creare un viaggio con PiliPiliTravel.");
  bindEvents();
  renderCategoryFilter();
  renderStats();
  renderProducts();
  renderCart();
  renderAdminList();
}

function bindEvents() {
  $("#searchInput").addEventListener("input", renderProducts);
  $("#categoryFilter").addEventListener("change", (event) => {
    currentCategory = event.target.value;
    renderProducts();
  });
  $("#sortFilter").addEventListener("change", renderProducts);
  $("#clearFilters").addEventListener("click", () => {
    $("#searchInput").value = "";
    $("#categoryFilter").value = "Tutti";
    $("#sortFilter").value = "featured";
    currentCategory = "Tutti";
    renderProducts();
  });

  $("#emptyCart").addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCart();
    renderProducts();
    toast("Selezione svuotata");
  });

  $("#copyRequest").addEventListener("click", async () => {
    const text = buildRequestMessage();
    try {
      await navigator.clipboard.writeText(text);
      toast("Richiesta copiata");
    } catch {
      prompt("Copia la richiesta:", text);
    }
  });

  $("#requestForm").addEventListener("input", renderCartLinks);
  $("#requestForm").addEventListener("change", renderCartLinks);

  $("#openAdmin").addEventListener("click", () => $("#adminDialog").showModal());
  $("#closeAdmin").addEventListener("click", () => $("#adminDialog").close());
  $("#newProduct").addEventListener("click", () => fillProductForm());
  $("#cancelEdit").addEventListener("click", () => fillProductForm());
  $("#productForm").addEventListener("submit", saveProductFromForm);
  $("#exportProducts").addEventListener("click", exportProducts);
  $("#importProducts").addEventListener("change", importProducts);
  $("#resetProducts").addEventListener("click", resetProducts);

  $(".nav-toggle").addEventListener("click", (event) => {
    const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
    event.currentTarget.setAttribute("aria-expanded", String(!expanded));
    $("#navLinks").classList.toggle("open", !expanded);
  });

  $("#navLinks").addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      $("#navLinks").classList.remove("open");
      $(".nav-toggle").setAttribute("aria-expanded", "false");
    }
  });
}

function renderCategoryFilter() {
  const select = $("#categoryFilter");
  select.innerHTML = categories().map((cat) => `<option value="${escapeHtml(cat)}">${escapeHtml(cat)}</option>`).join("");
  select.value = currentCategory;
}

function renderStats() {
  $("#statProducts").textContent = products.length;
  $("#statSpecials").textContent = products.filter((p) => p.special).length;
}

function filteredProducts() {
  const query = $("#searchInput").value.trim().toLowerCase();
  const sort = $("#sortFilter").value;
  const filtered = products.filter((product) => {
    const text = [product.title, product.category, product.location, product.duration, product.price, product.badge, product.description, ...(product.inclusions || [])].join(" ").toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesCategory = currentCategory === "Tutti" || product.category === currentCategory;
    return matchesQuery && matchesCategory;
  });

  filtered.sort((a, b) => {
    if (sort === "az") return a.title.localeCompare(b.title, "it");
    if (sort === "category") return `${a.category} ${a.title}`.localeCompare(`${b.category} ${b.title}`, "it");
    if (sort === "special") return Number(b.special) - Number(a.special) || Number(b.featured) - Number(a.featured) || a.title.localeCompare(b.title, "it");
    return Number(b.featured) - Number(a.featured) || Number(b.special) - Number(a.special) || a.title.localeCompare(b.title, "it");
  });

  return filtered;
}

function renderProducts() {
  const grid = $("#productGrid");
  const items = filteredProducts();
  $("#resultCount").textContent = `${items.length} ${items.length === 1 ? "prodotto" : "prodotti"}`;
  $("#activeFilterLabel").textContent = currentCategory === "Tutti" ? "Tutto il catalogo" : currentCategory;

  if (!items.length) {
    grid.innerHTML = `<article class="product-card"><h3>Nessun prodotto trovato</h3><p class="description">Prova a cambiare ricerca o categoria.</p></article>`;
    return;
  }

  grid.innerHTML = items.map(productCard).join("");
  $$("[data-add]").forEach((button) => button.addEventListener("click", () => toggleCart(button.dataset.add)));
  $$("[data-edit]").forEach((button) => button.addEventListener("click", () => {
    fillProductForm(products.find((p) => p.id === button.dataset.edit));
    $("#adminDialog").showModal();
  }));
  $$("[data-delete]").forEach((button) => button.addEventListener("click", () => deleteProduct(button.dataset.delete)));
}

function productCard(product) {
  const selected = cart.includes(product.id);
  const inclusions = (product.inclusions || []).slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  return `<article class="product-card">
    <div class="product-top">
      <div class="emoji-badge" aria-hidden="true">${escapeHtml(product.emoji || "🌴")}</div>
      <div class="badge-stack">
        ${product.featured ? `<span class="pill pill-featured">In vetrina</span>` : ""}
        ${product.special ? `<span class="pill pill-special">Speciale</span>` : ""}
        <span class="pill pill-category">${escapeHtml(product.category)}</span>
      </div>
    </div>
    <h3>${escapeHtml(product.title)}</h3>
    <div class="meta"><span>📍 ${escapeHtml(product.location || "Zanzibar")}</span><span>⏱️ ${escapeHtml(product.duration || "Su richiesta")}</span></div>
    <p class="description">${escapeHtml(product.description)}</p>
    <ul class="inclusions">${inclusions}</ul>
    <div class="product-bottom">
      <div class="price"><small>Prezzo</small><strong>${escapeHtml(product.price || "Su richiesta")}</strong></div>
      <div class="product-actions">
        <button class="mini-btn ${selected ? "active" : ""}" data-add="${escapeHtml(product.id)}" type="button">${selected ? "Selezionato" : "Seleziona"}</button>
        <button class="mini-btn" data-edit="${escapeHtml(product.id)}" type="button">Modifica</button>
      </div>
    </div>
    <div class="source">Fonte: ${escapeHtml(product.source || "Catalogo")}</div>
  </article>`;
}

function toggleCart(id) {
  cart = cart.includes(id) ? cart.filter((item) => item !== id) : [...cart, id];
  saveCart();
  renderCart();
  renderProducts();
}

function renderCart() {
  const cartItems = $("#cartItems");
  const selectedProducts = cart.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  if (!selectedProducts.length) {
    cartItems.innerHTML = `<div class="empty-cart">Nessun prodotto selezionato. Scegli safari, hotel, escursioni o prodotti speciali dal catalogo.</div>`;
  } else {
    cartItems.innerHTML = selectedProducts.map((product) => `<div class="cart-item">
      <div><strong>${escapeHtml(product.title)}</strong><small>${escapeHtml(product.category)} · ${escapeHtml(product.location || "")}</small></div>
      <button type="button" aria-label="Rimuovi ${escapeHtml(product.title)}" data-remove-cart="${escapeHtml(product.id)}">×</button>
    </div>`).join("");
    $$("[data-remove-cart]").forEach((button) => button.addEventListener("click", () => toggleCart(button.dataset.removeCart)));
  }
  renderCartLinks();
}

function formData() {
  return Object.fromEntries(new FormData($("#requestForm")).entries());
}

function buildRequestMessage() {
  const data = formData();
  const selectedProducts = cart.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const productLines = selectedProducts.length
    ? selectedProducts.map((p, index) => `${index + 1}. ${p.title} (${p.category}, ${p.location})`).join("\n")
    : "Nessun prodotto selezionato, vorrei una proposta su misura.";

  return `Ciao PiliPiliTravel, vorrei un preventivo.\n\nProdotti selezionati:\n${productLines}\n\nDettagli viaggio:\nNome: ${data.name || "-"}\nArrivo: ${data.arrival || "-"}\nRitorno: ${data.return || "-"}\nAdulti: ${data.adults || "-"}\nBambini: ${data.children || "-"}\nTipologia: ${data.style || "-"}\nBudget: ${data.budget || "-"}\nNote: ${data.notes || "-"}`;
}

function whatsappUrl(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function renderCartLinks() {
  const message = buildRequestMessage();
  $("#whatsappLink").href = whatsappUrl(message);
  $("#emailLink").href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Richiesta catalogo PiliPiliTravel")}&body=${encodeURIComponent(message)}`;
}

function fillProductForm(product = null) {
  const form = $("#productForm");
  const current = product || {
    id: "",
    title: "",
    category: "Escursioni",
    location: "Zanzibar",
    duration: "Su richiesta",
    price: "Da definire",
    badge: "Speciale",
    emoji: "🌴",
    source: "Inserito manualmente",
    description: "",
    inclusions: [],
    featured: false,
    special: false
  };
  form.elements.id.value = current.id || "";
  form.elements.title.value = current.title || "";
  form.elements.category.value = current.category || "Escursioni";
  form.elements.location.value = current.location || "";
  form.elements.duration.value = current.duration || "";
  form.elements.price.value = current.price || "";
  form.elements.badge.value = current.badge || "";
  form.elements.emoji.value = current.emoji || "🌴";
  form.elements.source.value = current.source || "";
  form.elements.description.value = current.description || "";
  form.elements.inclusions.value = (current.inclusions || []).join("; ");
  form.elements.featured.checked = Boolean(current.featured);
  form.elements.special.checked = Boolean(current.special);
  form.elements.title.focus();
}

function saveProductFromForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form).entries());
  const id = data.id || slugify(data.title);
  const product = {
    id,
    title: data.title.trim(),
    category: data.category,
    location: data.location.trim(),
    duration: data.duration.trim(),
    price: data.price.trim(),
    badge: data.badge.trim(),
    emoji: data.emoji.trim() || "🌴",
    source: data.source.trim(),
    description: data.description.trim(),
    inclusions: data.inclusions.split(";").map((item) => item.trim()).filter(Boolean),
    featured: form.elements.featured.checked,
    special: form.elements.special.checked
  };
  const index = products.findIndex((p) => p.id === id);
  if (index >= 0) products[index] = product;
  else products = [product, ...products];
  saveProducts();
  renderCategoryFilter();
  renderStats();
  renderProducts();
  renderAdminList();
  fillProductForm();
  toast("Prodotto salvato");
}

function renderAdminList() {
  const list = $("#adminList");
  list.innerHTML = products.map((product) => `<div class="admin-row">
    <div><strong>${escapeHtml(product.title)}</strong><p>${escapeHtml(product.category)} · ${escapeHtml(product.location || "")} · ${escapeHtml(product.price || "")}</p></div>
    <div class="admin-row-actions">
      <button class="mini-btn" data-admin-edit="${escapeHtml(product.id)}" type="button">Modifica</button>
      <button class="mini-btn" data-admin-delete="${escapeHtml(product.id)}" type="button">Elimina</button>
    </div>
  </div>`).join("");
  $$("[data-admin-edit]").forEach((button) => button.addEventListener("click", () => fillProductForm(products.find((p) => p.id === button.dataset.adminEdit))));
  $$("[data-admin-delete]").forEach((button) => button.addEventListener("click", () => deleteProduct(button.dataset.adminDelete)));
}

function deleteProduct(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  if (!confirm(`Eliminare "${product.title}" dal catalogo?`)) return;
  products = products.filter((p) => p.id !== id);
  cart = cart.filter((item) => item !== id);
  saveProducts();
  saveCart();
  renderCategoryFilter();
  renderStats();
  renderProducts();
  renderCart();
  renderAdminList();
  toast("Prodotto eliminato");
}

function exportProducts() {
  const blob = new Blob([JSON.stringify(products, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "pilipili-catalogo-prodotti.json";
  link.click();
  URL.revokeObjectURL(url);
  toast("JSON esportato");
}

async function importProducts(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported)) throw new Error("Il file deve contenere un array di prodotti");
    products = imported.map((item) => ({ ...item, id: item.id || slugify(item.title) }));
    saveProducts();
    renderCategoryFilter();
    renderStats();
    renderProducts();
    renderAdminList();
    toast("Catalogo importato");
  } catch (error) {
    alert(`Import non riuscito: ${error.message}`);
  } finally {
    event.target.value = "";
  }
}

function resetProducts() {
  if (!confirm("Ripristinare il catalogo base? Le modifiche locali verranno cancellate.")) return;
  products = structuredClone(DEFAULT_PRODUCTS);
  cart = [];
  saveProducts();
  saveCart();
  renderCategoryFilter();
  renderStats();
  renderProducts();
  renderCart();
  renderAdminList();
  toast("Catalogo ripristinato");
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 2200);
}

document.addEventListener("DOMContentLoaded", init);
