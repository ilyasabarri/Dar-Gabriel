import { Room, Experience, Language } from '../types';

export const hotelContent = {
  fr: {
    meta: {
      title: "Dar Gabriel Chefchaouen | Maison d'Hôtes & Riad de Charme en Médina",
      tagline: "CHEFCHAOUEN • MÉDINA BAB SOUK",
      hotelName: "DAR GABRIEL",
      hotelCategory: "MAISON D'HÔTES TRADITIONNELLE • 7 CHAMBRES",
      ratingBadge: "8.8 / 10 • Superbe (Booking.com)",
      heroTitle: "Maison d'Hôtes de Charme à Chefchaouen",
      heroSubtitle: "Niché au cœur de la Médina bleue près de Bab Souk, Dar Gabriel est un riad traditionnel de 7 chambres intimistes où le calme andalou rencontre la douceur du Rif. Profitez d'une terrasse panoramique avec vue sur les montagnes, d'un accueil chaleureux et d'un accès facile sans portage de bagages dans les ruelles en pente."
    },
    hero: {
      category: "MAISON D'HÔTES TRADITIONNELLE • 7 CHAMBRES",
      tagline: "Un riad intimiste au cœur de la Médina Bleue, avec toit-terrasse panoramique et accueil chaleureux",
      discover: "DÉCOUVRIR",
      ratingText: "Superbe",
      ratingTitle: "Voir nos avis sur Booking.com"
    },
    nav: {
      rooms: "Chambres & Tarifs",
      hotel: "Le Riad",
      rooftop: "Toit-Terrasse & Table",
      gallery: "Galerie",
      offers: "Offres & Séjours",
      contact: "Accès & Contact",
      menu: "MENU",
      reserve: "RÉSERVER EN DIRECT",
      questions: "Des questions ? Appelez-nous",
      writeUs: "Conciergerie Directe"
    },
    bookingBar: {
      checkIn: "ARRIVÉE",
      checkInPlaceholder: "Date d'arrivée",
      checkOut: "DÉPART",
      checkOutPlaceholder: "Date de départ",
      guests: "VOYAGEURS",
      guestLabel: "2 Voyageurs, 1 Chambre",
      promoCode: "CODE DIRECT",
      promoPlaceholder: "GABRIEL",
      button: "VÉRIFIER DISPONIBILITÉ",
      adultsOnly: "MAISON D'HÔTES",
      personSingle: "Personne",
      personPlural: "Personnes",
      guestsDropdownTitle: "Voyageurs (1 à 4):"
    },
    advantages: [
      { text: "Accès direct Bab Souk (sans portage difficile de bagages)" },
      { text: "Petit-déjeuner traditionnel sur le rooftop inclus" },
      { text: "Climatisation réversible chaud/froid dans toutes les chambres" },
      { text: "Wi-Fi haut débit gratuit dans tout le riad" },
      { text: "À 100 m de la Kasbah & 300 m de la place Outa el-Hammam" },
      { text: "Animaux de compagnie bienvenus (sur demande)" }
    ],
    roomsSection: {
      tag: "LES 8 CHAMBRES & SUITES PRIVATIVES",
      title: "Nos Chambres & Suites de Charme à Dar Gabriel",
      subtitle: "Chaque chambre dispose de sa salle de bains privative, d'une climatisation réversible indispensable été comme hiver, et d'un décor traditionnel mariant bleu indigo, fer forgé et artisanat local.",
      viewAll: "VOIR TOUTES LES CHAMBRES",
      bookRoom: "RÉSERVER CETTE CHAMBRE",
      pricePrefix: "Dès",
      night: "/ nuit"
    },
    roomsLabels: {
      sizeLabel: "Superficie :",
      capacityLabel: "Capacité :",
      bedLabel: "Literie :",
      viewLabel: "Vue :",
      prevRoom: "Chambre précédente",
      nextRoom: "Chambre suivante",
      bookDirect: "RÉSERVER EN DIRECT"
    },
    experiencesSection: {
      tag: "L'EXPÉRIENCE DAR GABRIEL",
      title: "Une parenthèse de sérénité au sommet de la médina. Vue imprenable sur le Rif, cuisine maison et hospitalité sincère.",
      cta: "EN SAVOIR PLUS"
    },
    instagramSection: {
      title: "Une atmosphère douce et authentique au cœur de la Perle Bleue du Maroc",
      button: "VOIR NOTRE GALERIE"
    },
    liveSunsetSection: {
      tag: "VUE PANORAMIQUE",
      quote: "Depuis le toit-terrasse de Dar Gabriel, observez le soleil dorer les crêtes du Rif tandis que l'appel du soir résonne doucement sur la ville bleue.",
      subtitle: "Découvrez le rythme paisible du Rif",
      button: "DÉCOUVRIR LA TERRASSE",
      modalTitle: "Caméra en Direct • Terrasse Dar Gabriel",
      orientation: "Orientation : Est vers les sources de Ras El-Maa et la Mosquée Espagnole",
      realtime: "Signal en Temps Réel",
      weather: "Ensoleillé • 24°C"
    },
    locationSection: {
      tag: "EMPLACEMENT IDÉAL (NOTE : 9.5 / 10)",
      title: "Dar Gabriel — Bab Souk",
      district: "Accès direct par la porte Bab Souk • À 100 m de la Kasbah et 300 m de la place Outa el-Hammam",
      address: "Quartier Bab Souk, Ancienne Médina, Chefchaouen, 91000, Maroc",
      openMaps: "OUVRIR SUR GOOGLE MAPS",
      contactDirect: "ÉCRIVEZ-NOUS EN DIRECT",
      phone: "+212 539 98 42 10",
      email: "contact@dargabriel-chaouen.com",
      taxiBadge: "Accès immédiat taxi / dépose minute à la porte Bab Souk",
      ratingBadge: "Note Emplacement : 9.5 / 10",
      bullet1: "À 100 m de la Kasbah historique",
      bullet2: "À 300 m de la place animée Outa el-Hammam",
      bullet3: "À 5 min à pied des cascades de Ras El Maa"
    },
    newsletter: {
      title: "Recevez les meilleures offres de Dar Gabriel",
      placeholder: "Votre adresse e-mail",
      button: "S'INSCRIRE",
      terms: "J'accepte de recevoir les offres exclusives et conseils de voyage pour Chefchaouen.",
      thankYou: "Merci de vous être inscrit aux nouvelles exclusives de Dar Gabriel !"
    },
    promoPopup: {
      tag: "RÉSERVATION DIRECTE GARANTIE",
      title: "Séjour à Dar Gabriel : -15% avec le code GABRIEL",
      dates: "MEILLEUR TARIF GARANTI PAR RAPPORT À BOOKING.COM",
      description: "En réservant directement sur notre site officiel ou par téléphone, bénéficiez de 15% de réduction immédiate, du thé à la menthe de bienvenue et du meilleur placement en chambre.",
      buttonText: "ACTIVER LE CODE GABRIEL"
    },
    bookingModal: {
      title: "Réservation Directe • Dar Gabriel (Chefchaouen)",
      subtitle: "Maison d'Hôtes de Charme • Bab Souk • Note 8.8/10",
      closeAria: "Fermer la fenêtre (Échap)",
      checkIn: "Arrivée (12h - 19h)",
      checkOut: "Départ (jusqu'à 12h)",
      guests: "Voyageurs",
      guestOptions: ["1 Personne", "2 Personnes", "3 Personnes", "4 Personnes (Chambre Familiale)"],
      selectRoom: "Sélectionnez votre chambre :",
      perNight: "/ nuit",
      nameLabel: "Nom & Prénom *",
      namePlaceholder: "Ex. Yassine Benali",
      phoneLabel: "Numéro de Téléphone *",
      phonePlaceholder: "+33 6 00 00 00 00",
      promoLabel: "Code Avantage Direct",
      promoApplied: "-15% Réduction Directe",
      emailLabel: "Adresse e-mail *",
      emailPlaceholder: "contact@exemple.com",
      policies: "Arrivée : 12h00 – 19h00 • Départ : 06h30 – 12h00 • Heures de calme : 23h00 – 07h00.",
      stay: "Séjour :",
      nightSingle: "nuit",
      nightPlural: "nuits",
      discountLabel: "Réduction Directe Code GABRIEL (15%)",
      totalGuaranteed: "Total Garanti (Petit-déjeuner inclus) :",
      submitBtn: "Confirmer la Demande de Réservation Directe",
      receptionHelp: "Assistance réception immédiate :",
      cancelBtn: "Annuler et fermer",
      successTitle: "Demande Transmise avec Succès !",
      successMessage: "Notre équipe à Dar Gabriel a bien reçu votre demande. Nous vous contacterons sans attendre par téléphone ou e-mail pour valider votre séjour et organiser votre arrivée facile à Bab Souk.",
      successClose: "Fermer"
    },
    menuFlyout: {
      close: "Fermer",
      ratingBadge: "Note 8.8 / 10 • Superbe (Booking.com)",
      quote: "\"Une maison d'hôtes intimiste et chaleureuse à deux pas de la porte Bab Souk. Arrivée simple en taxi, rooftop avec vue sur le Rif et petit-déjeuner copieux inclus.\"",
      changeLang: "Changer de langue",
      subtitles: {
        rooms: "Les 8 chambres et suites de charme avec salle de bains privative",
        hotel: "Maison d'hôtes traditionnelle restaurée avec art",
        rooftop: "Toit-terrasse panoramique sur le Rif & table d'hôtes",
        gallery: "Ambiance bleue, artisanat et patio intérieur",
        contact: "Accès facile Bab Souk • Kasbah ~100 m"
      }
    },
    footer: {
      about: "Maison d'hôtes traditionnelle de charme au cœur de la Médina de Chefchaouen. Notée 8.8/10 sur Booking.com avec une note d'emplacement exceptionnelle de 9.5/10 grâce à l'accès direct par Bab Souk.",
      links: {
        rooms: "Chambres",
        hotel: "Le Riad",
        rooftop: "Toit-Terrasse",
        dinner: "Table d'Hôtes",
        gallery: "Galerie Photos",
        reserveDirect: "Réserver en Direct",
        babSouk: "Accès Bab Souk",
        contact: "Plan & Contact"
      },
      copyright: "Tous droits réservés.",
      classified: "Maison d'hôtes classée • Médina de Chefchaouen, Maroc",
      legal: "Mentions Légales",
      privacy: "Confidentialité",
      terms: "Conditions de Séjour"
    }
  },
  es: {
    meta: {
      title: "Dar Gabriel Chefchaouen | Riad Tradicional & Hotel Boutique en la Medina",
      tagline: "CHEFCHAOUEN • MEDINA BAB SOUK",
      hotelName: "DAR GABRIEL",
      hotelCategory: "MAISON D'HÔTES TRADICIONAL • 7 HABITACIONES",
      ratingBadge: "8.8 / 10 • Excelente (Booking.com)",
      heroTitle: "Riad Boutique & Encanto en Chefchaouen",
      heroSubtitle: "Ubicado en el corazón de la Medina Azul junto a Bab Souk, Dar Gabriel es un riad tradicional de 7 habitaciones íntimas donde la calma andalusí se funde con el Rif. Disfruta de terraza panorámica con vistas a las montañas, trato familiar excepcional y acceso directo sin cargar maletas por empinadas cuestas."
    },
    hero: {
      category: "MAISON D'HÔTES TRADICIONAL • 7 HABITACIONES",
      tagline: "Un riad íntimo en el corazón de la Medina Azul, con terraza panorámica y trato familiar entrañable",
      discover: "DESCUBRIR",
      ratingText: "Excelente",
      ratingTitle: "Ver opiniones en Booking.com"
    },
    nav: {
      rooms: "Habitaciones & Tarifas",
      hotel: "El Riad",
      rooftop: "Rooftop & Desayuno",
      gallery: "Galería",
      offers: "Ofertas Directas",
      contact: "Ubicación & Contacto",
      menu: "MENÚ",
      reserve: "RESERVAR DIRECTO",
      questions: "¿Dudas? Llámanos",
      writeUs: "Atención Directa"
    },
    bookingBar: {
      checkIn: "ENTRADA",
      checkInPlaceholder: "Fecha de llegada",
      checkOut: "SALIDA",
      checkOutPlaceholder: "Fecha de salida",
      guests: "HUÉSPEDES",
      guestLabel: "2 Huéspedes, 1 Habitación",
      promoCode: "CÓDIGO PROMO",
      promoPlaceholder: "GABRIEL",
      button: "CONSULTAR DISPONIBILIDAD",
      adultsOnly: "BOUTIQUE RIAD",
      personSingle: "Persona",
      personPlural: "Personas",
      guestsDropdownTitle: "Huéspedes (1 a 4):"
    },
    advantages: [
      { text: "Acceso fácil Bab Souk (sin subir maletas por empinadas cuestas)" },
      { text: "Desayuno tradicional en terraza panorámica incluido" },
      { text: "Climatización frío/calor en todas las habitaciones" },
      { text: "Wi-Fi gratuito de alta velocidad" },
      { text: "A 100 m de la Kasbah y 300 m de Plaza Uta el-Hammam" },
      { text: "Mascotas bienvenidas (bajo petición)" }
    ],
    roomsSection: {
      tag: "LAS 8 HABITACIONES & SUITES EXCLUSIVAS",
      title: "Nuestras Habitaciones en Dar Gabriel",
      subtitle: "Cada habitación cuenta con baño privado en suite, climatización réversible frío/calor y un diseño tradicional marroquí en tonos azules, ladrillo y hierro forjado.",
      viewAll: "VER TODAS LAS HABITACIONES",
      bookRoom: "RESERVAR ESTA HABITACIÓN",
      pricePrefix: "Desde",
      night: "/ noche"
    },
    roomsLabels: {
      sizeLabel: "Superficie:",
      capacityLabel: "Capacidad:",
      bedLabel: "Camas:",
      viewLabel: "Vistas:",
      prevRoom: "Habitación anterior",
      nextRoom: "Habitación siguiente",
      bookDirect: "RESERVAR DIRECTO"
    },
    experiencesSection: {
      tag: "LA EXPERIENCIA EN DAR GABRIEL",
      title: "Un remanso de paz en la parte alta de la medina. Vistas privilegiadas al Rif, cocina casera y hospitalidad entrañable.",
      cta: "DESCUBRIR EL RIAD"
    },
    instagramSection: {
      title: "Instantes mágicos y calma absoluta en la perla azul de Marruecos",
      button: "VER FOTOS DE DAR GABRIEL"
    },
    liveSunsetSection: {
      tag: "TERRAZA PANORÁMICA",
      quote: "Desde el rooftop de Dar Gabriel, contempla cómo el atardecer ilumina las montañas del Rif y los techos añiles de Chefchaouen.",
      subtitle: "Descubra el pulso tranquilo del Rif",
      button: "CONOCER LA TERRAZA",
      modalTitle: "Cámara en Directo • Terraza Dar Gabriel",
      orientation: "Orientación: Este hacia las fuentes de Ras El-Maa y la Mezquita Española",
      realtime: "Señal en Tiempo Real",
      weather: "Despejado • 24°C"
    },
    locationSection: {
      tag: "UBICACIÓN PRIVILEGIADA (NOTA: 9.5 / 10)",
      title: "Dar Gabriel — Bab Souk",
      district: "Acceso inmediato por la puerta Bab Souk • A 100 m de la Kasbah y 300 m de Plaza Uta el-Hammam",
      address: "Barrio Bab Souk, Medina Vieja, Chefchaouen, 91000, Marruecos",
      openMaps: "ABRIR EN GOOGLE MAPS",
      contactDirect: "CONTACTAR RECEPCIÓN",
      phone: "+212 539 98 42 10",
      email: "contact@dargabriel-chaouen.com",
      taxiBadge: "Acceso inmediato taxi / parada a pocos metros de la puerta Bab Souk",
      ratingBadge: "Nota Ubicación: 9.5 / 10",
      bullet1: "A 100 m de la Kasbah histórica",
      bullet2: "A 300 m de la animada Plaza Uta el-Hammam",
      bullet3: "A 5 min a pie de los manantiales de Ras El Maa"
    },
    newsletter: {
      title: "Suscríbete a las novedades de Dar Gabriel",
      placeholder: "Tu correo electrónico",
      button: "SUSCRÍBETE",
      terms: "Acepto recibir novedades y promociones exclusivas para Chefchaouen.",
      thankYou: "¡Gracias por suscribirse a las novedades de Dar Gabriel!"
    },
    promoPopup: {
      tag: "VENTAJA RESERVA DIRECTA",
      title: "Oferta Dar Gabriel: 15% Dto. con el código GABRIEL",
      dates: "MEJOR PRECIO GARANTIZADO FRENTE A BOOKING.COM",
      description: "Al reservar directamente a través de nuestro portal web o por teléfono, obtén un 15% de descuento exclusivo, té con pastas de bienvenida y la mejor asignación de habitación.",
      buttonText: "APLICAR CÓDIGO GABRIEL"
    },
    bookingModal: {
      title: "Reserva Directa • Dar Gabriel (Chefchaouen)",
      subtitle: "Riad Boutique de Encanto • Bab Souk • Puntuación 8.8/10",
      closeAria: "Cerrar ventana (Esc)",
      checkIn: "Llegada (12:00 - 19:00)",
      checkOut: "Salida (hasta 12:00)",
      guests: "Huéspedes",
      guestOptions: ["1 Persona", "2 Personas", "3 Personas", "4 Personas (Habitación Familiar)"],
      selectRoom: "Seleccione su habitación:",
      perNight: "/ noche",
      nameLabel: "Nombre y Apellidos *",
      namePlaceholder: "Ej. Carlos Martínez",
      phoneLabel: "Número de Teléfono *",
      phonePlaceholder: "+34 600 000 000",
      promoLabel: "Código de Descuento Directo",
      promoApplied: "-15% Descuento Directo",
      emailLabel: "Correo Electrónico *",
      emailPlaceholder: "contacto@ejemplo.com",
      policies: "Entrada: 12:00 – 19:00 • Salida: 06:30 – 12:00 • Horas de descanso: 23:00 – 07:00.",
      stay: "Estancia:",
      nightSingle: "noche",
      nightPlural: "noches",
      discountLabel: "Descuento Directo Código GABRIEL (15%)",
      totalGuaranteed: "Total Garantizado (Desayuno incluido):",
      submitBtn: "Confirmar Solicitud de Reserva Directa",
      receptionHelp: "Atención inmediata de recepción:",
      cancelBtn: "Cancelar y cerrar",
      successTitle: "¡Solicitud Enviada con Éxito!",
      successMessage: "El equipo de Dar Gabriel ha recibido su solicitud. Nos pondremos en contacto con usted enseguida por teléfono o correo para confirmar su estancia y coordinar su llegada a Bab Souk.",
      successClose: "Cerrar"
    },
    menuFlyout: {
      close: "Cerrar",
      ratingBadge: "Puntuación 8.8 / 10 • Excelente (Booking.com)",
      quote: "\"Un riad íntimo y acogedor a pocos pasos de la puerta Bab Souk. Llegada cómoda en taxi, terraza con vistas al Rif y desayuno abundante incluido.\"",
      changeLang: "Cambiar idioma",
      subtitles: {
        rooms: "Las 8 habitaciones y suites con encanto y baño privado",
        hotel: "Riad tradicional restaurado con esmero",
        rooftop: "Terraza panorámica al Rif y cenas caseras",
        gallery: "Atmósfera azul, artesanía y patio interior",
        contact: "Acceso fácil Bab Souk • Kasbah a 100 m"
      }
    },
    footer: {
      about: "Riad tradicional con encanto en el corazón de la Medina de Chefchaouen. Valorado con 8.8/10 en Booking.com y una nota de ubicación de 9.5/10 gracias al acceso directo por Bab Souk.",
      links: {
        rooms: "Habitaciones",
        hotel: "El Riad",
        rooftop: "Terraza",
        dinner: "Cenas Caseras",
        gallery: "Galería de Fotos",
        reserveDirect: "Reservar Directo",
        babSouk: "Acceso Bab Souk",
        contact: "Mapa y Contacto"
      },
      copyright: "Todos los derechos reservados.",
      classified: "Alojamiento turístico clasificado • Medina de Chefchaouen, Marruecos",
      legal: "Aviso Legal",
      privacy: "Privacidad",
      terms: "Condiciones de Estancia"
    }
  },
  en: {
    meta: {
      title: "Dar Gabriel Chefchaouen | Traditional Boutique Guesthouse in the Medina",
      tagline: "CHEFCHAOUEN • BAB SOUK MEDINA",
      hotelName: "DAR GABRIEL",
      hotelCategory: "TRADITIONAL GUESTHOUSE • 7 ROOMS",
      ratingBadge: "8.8 / 10 • Superb (Booking.com)",
      heroTitle: "Boutique Traditional Riad in Chefchaouen",
      heroSubtitle: "Tucked inside the Blue Medina right by the Bab Souk gate, Dar Gabriel is an intimate 7-room boutique guesthouse combining authentic Andalusian-Moroccan charm with peaceful mountain horizons. Enjoy a panoramic rooftop terrace, hearty artisan breakfast, and effortless access without lugging bags through steep cobblestone alleys."
    },
    hero: {
      category: "TRADITIONAL BOUTIQUE RIAD • 7 ROOMS",
      tagline: "An intimate boutique riad in the heart of the Blue Medina, with a panoramic rooftop terrace and warm hospitality",
      discover: "DISCOVER",
      ratingText: "Superb",
      ratingTitle: "See reviews on Booking.com"
    },
    nav: {
      rooms: "Rooms & Rates",
      hotel: "The Riad",
      rooftop: "Rooftop & Dining",
      gallery: "Gallery",
      offers: "Direct Booking",
      contact: "Location & Contact",
      menu: "MENU",
      reserve: "BOOK DIRECT",
      questions: "Questions? Call us",
      writeUs: "Direct Concierge"
    },
    bookingBar: {
      checkIn: "CHECK-IN",
      checkInPlaceholder: "Arrival date",
      checkOut: "CHECK-OUT",
      checkOutPlaceholder: "Departure date",
      guests: "GUESTS",
      guestLabel: "2 Guests, 1 Room",
      promoCode: "PROMO CODE",
      promoPlaceholder: "GABRIEL",
      button: "CHECK AVAILABILITY",
      adultsOnly: "BOUTIQUE RIAD",
      personSingle: "Guest",
      personPlural: "Guests",
      guestsDropdownTitle: "Guests (1 to 4):"
    },
    advantages: [
      { text: "Easy Bab Souk taxi access (no steep uphill luggage carrying)" },
      { text: "Fresh traditional rooftop breakfast included" },
      { text: "Reversible heating & AC in all 7 rooms" },
      { text: "Complimentary high-speed Wi-Fi throughout" },
      { text: "100m to the Kasbah & 300m to Outa el-Hammam Square" },
      { text: "Pets welcome upon prior request" }
    ],
    roomsSection: {
      tag: "THE 8 PRIVATE GUEST ROOMS & SUITES",
      title: "Authentic Rooms & Suites at Dar Gabriel",
      subtitle: "Every guest room features a private en-suite bathroom, reversible heating/air conditioning, and local artisan craft details in blue indigo and wrought iron.",
      viewAll: "VIEW ALL ROOMS",
      bookRoom: "BOOK THIS ROOM",
      pricePrefix: "From",
      night: "/ night"
    },
    roomsLabels: {
      sizeLabel: "Size:",
      capacityLabel: "Capacity:",
      bedLabel: "Bedding:",
      viewLabel: "View:",
      prevRoom: "Previous room",
      nextRoom: "Next room",
      bookDirect: "BOOK DIRECT"
    },
    experiencesSection: {
      tag: "THE DAR GABRIEL EXPERIENCE",
      title: "A sanctuary of calm at the top of the medina. Panoramic Rif vistas, home-cooked Moroccan dinners, and heartfelt hospitality.",
      cta: "DISCOVER THE RIAD"
    },
    instagramSection: {
      title: "Authentic Moroccan moments in Chefchaouen's historic blue quarter",
      button: "VIEW PHOTO GALLERY"
    },
    liveSunsetSection: {
      tag: "PANORAMIC ROOFTOP",
      quote: "From Dar Gabriel's rooftop terrace, watch the dusk cast warm golden hues over the Rif mountains and the blue alleys of Chefchaouen.",
      subtitle: "Discover the tranquil rhythm of the Rif",
      button: "VIEW OUR TERRACE",
      modalTitle: "Live Camera • Dar Gabriel Rooftop",
      orientation: "Orientation: East towards Ras El-Maa springs and the Spanish Mosque",
      realtime: "Real-Time Feed",
      weather: "Sunny • 24°C"
    },
    locationSection: {
      tag: "EXCELLENT LOCATION (9.5 / 10 RATING)",
      title: "Dar Gabriel — Bab Souk",
      district: "Direct car/taxi drop-off at Bab Souk • 100m from the Kasbah and 300m from Outa el-Hammam",
      address: "Bab Souk Quarter, Old Medina, Chefchaouen, 91000, Morocco",
      openMaps: "OPEN IN GOOGLE MAPS",
      contactDirect: "CONTACT RECEPTION",
      phone: "+212 539 98 42 10",
      email: "contact@dargabriel-chaouen.com",
      taxiBadge: "Direct taxi / car drop-off right at Bab Souk gate",
      ratingBadge: "Location Rating: 9.5 / 10",
      bullet1: "100m from the historic Kasbah",
      bullet2: "300m from bustling Outa el-Hammam Square",
      bullet3: "5 min walk to Ras El Maa waterfalls"
    },
    newsletter: {
      title: "Receive special offers from Dar Gabriel",
      placeholder: "Your email address",
      button: "SUBSCRIBE",
      terms: "I accept receiving exclusive direct deals for Chefchaouen.",
      thankYou: "Thank you for subscribing to Dar Gabriel's exclusive updates!"
    },
    promoPopup: {
      tag: "DIRECT BOOKING ADVANTAGE",
      title: "Book Direct with Dar Gabriel: 15% off with code GABRIEL",
      dates: "BEST RATE GUARANTEED OVER BOOKING.COM",
      description: "Book directly through our official website or by phone to enjoy 15% off regular rates, complimentary Moroccan mint tea on arrival, and prioritized room placement.",
      buttonText: "APPLY CODE GABRIEL"
    },
    bookingModal: {
      title: "Direct Booking • Dar Gabriel (Chefchaouen)",
      subtitle: "Charming Boutique Guesthouse • Bab Souk • 8.8/10 Rating",
      closeAria: "Close window (Esc)",
      checkIn: "Check-in (12:00 - 19:00)",
      checkOut: "Check-out (until 12:00)",
      guests: "Guests",
      guestOptions: ["1 Guest", "2 Guests", "3 Guests", "4 Guests (Family Room)"],
      selectRoom: "Select your room:",
      perNight: "/ night",
      nameLabel: "Full Name *",
      namePlaceholder: "E.g. John Smith",
      phoneLabel: "Phone Number *",
      phonePlaceholder: "+1 555 000 0000",
      promoLabel: "Direct Promo Code",
      promoApplied: "-15% Direct Discount",
      emailLabel: "Email Address *",
      emailPlaceholder: "contact@example.com",
      policies: "Check-in: 12:00 – 19:00 • Check-out: 06:30 – 12:00 • Quiet hours: 23:00 – 07:00.",
      stay: "Stay:",
      nightSingle: "night",
      nightPlural: "nights",
      discountLabel: "Direct Discount Code GABRIEL (15%)",
      totalGuaranteed: "Guaranteed Total (Breakfast included):",
      submitBtn: "Confirm Direct Booking Request",
      receptionHelp: "Immediate reception assistance:",
      cancelBtn: "Cancel and close",
      successTitle: "Request Sent Successfully!",
      successMessage: "Our team at Dar Gabriel has received your request. We will reach out promptly via phone or email to confirm your stay and coordinate your easy arrival at Bab Souk.",
      successClose: "Close"
    },
    menuFlyout: {
      close: "Close",
      ratingBadge: "8.8 / 10 Rating • Superb (Booking.com)",
      quote: "\"An intimate, warm boutique guesthouse just steps from Bab Souk gate. Easy taxi arrival, panoramic rooftop with Rif views, and generous Moroccan breakfast included.\"",
      changeLang: "Change language",
      subtitles: {
        rooms: "The 8 charming guest rooms & suites with private en-suite bath",
        hotel: "Artfully restored traditional boutique guesthouse",
        rooftop: "Panoramic Rif rooftop terrace & home-cooked dining",
        gallery: "Blue medina atmosphere, artisan craft & courtyard",
        contact: "Easy Bab Souk access • Kasbah 100m"
      }
    },
    footer: {
      about: "Charming traditional boutique guesthouse in the heart of Chefchaouen's Medina. Rated 8.8/10 on Booking.com with an exceptional 9.5/10 location score thanks to direct Bab Souk access.",
      links: {
        rooms: "Rooms",
        hotel: "The Riad",
        rooftop: "Rooftop",
        dinner: "Dining",
        gallery: "Photo Gallery",
        reserveDirect: "Book Direct",
        babSouk: "Bab Souk Access",
        contact: "Map & Contact"
      },
      copyright: "All rights reserved.",
      classified: "Official Boutique Guesthouse • Chefchaouen Medina, Morocco",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions"
    }
  }
};

// The 8 authentic rooms of Dar Gabriel localized per language
export const roomsDataByLang: Record<Language, Room[]> = {
  fr: [
    {
      id: "chambre-double-deluxe-balcon",
      name: "Chambre Double Deluxe avec Balcon",
      shortName: "Deluxe Balcon",
      subtitle: "Balcon Privé en Fer Forgé, Vue Dégagée Médina & Montagnes du Rif",
      description: "La plus prisée du riad : coin salon intime avec arche traditionnelle marocaine et balcon sécurisé en fer forgé ouvrant sur les ruelles bleues et les montagnes du Rif. Salle de bains privative attenante avec douche à l'italienne, climatisation réversible chaud/froid.",
      image: "/images/rooms/deluxe-balcon.jpg",
      size: "~18 m²",
      capacity: "2 adultes",
      bed: "1 grand lit double (ou 2 lits simples)",
      view: "Ruelles bleues & Montagnes du Rif",
      priceFrom: 96,
      priceMad: 1044,
      features: [
        "Balcon privé sécurisé en fer forgé avec vue panoramique",
        "Choisissez votre lit : 1 grand lit double OU 2 lits simples",
        "Salle de bains privative complète avec douche et articles de toilette",
        "Climatisation réversible individuel chaud/froid",
        "Wi-Fi haut débit gratuit dans tout le riad",
        "Petit-déjeuner traditionnel exceptionnel sur le rooftop inclus"
      ]
    },
    {
      id: "chambre-double-standard",
      name: "Chambre Double Standard",
      shortName: "Double Standard",
      subtitle: "Style Épuré Bleu & Blanc, Tête de Lit Capitonnée & Chevets Peints",
      description: "Ambiance apaisante mariant le bleu indigo et la chaux blanche de Chefchaouen. Tête de lit capitonnée, tables de chevet artisanales peintes à la main, climatisation réversible chaud/froid et salle d'eau privative attenante.",
      image: "/images/rooms/double-standard.jpg",
      size: "~14 m²",
      capacity: "2 adultes",
      bed: "1 lit double confortable",
      view: "Médina de Bab Souk",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 lit double grand confort",
        "Salle de bains privative attenante avec douche",
        "Climatisation réversible chaud/froid",
        "Wi-Fi haut débit gratuit",
        "Penderie et rangements pratiques",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-lits-jumeaux-sdb-patio",
      name: "Chambre Lits Jumeaux avec Salle de Bains Privative",
      shortName: "Twin avec Patio",
      subtitle: "Accès Patio Intérieur, 2 Lits Simples, Vue Paisible & SDB Privative",
      description: "Chambre lumineuse avec vue et accès au patio intérieur paisible du riad. Équipée de 2 lits simples confortables, climatisation réversible et belle salle de bains privative avec vasque artisanale.",
      image: "/images/rooms/twin-patio.jpg",
      size: "~15 m²",
      capacity: "2 adultes",
      bed: "2 lits simples séparés",
      view: "Patio intérieur paisible & Médina",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "2 lits simples confortables",
        "Accès et vue sur le patio intérieur paisible",
        "Salle de bains privative attenante",
        "Climatisation réversible chaud/froid",
        "Wi-Fi haut débit gratuit",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-double-sdb-privative",
      name: "Chambre Double avec Salle de Bains Privative",
      shortName: "Double avec SDB",
      subtitle: "Configuration Confort (1 Lit Simple + 1 Lit Double) & SDB Privative",
      description: "Chambre spacieuse et polyvalente offrant 1 lit double confortable et 1 lit simple d'appoint. Murs traditionnels épais garantissant calme et fraîcheur, salle de bains privative intégrée à l'hébergement.",
      image: "/images/rooms/double-sdb.jpg",
      size: "~16 m²",
      capacity: "2 adultes",
      bed: "1 lit simple et 1 lit double",
      view: "Médina & Patio du riad",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 lit double + 1 lit simple d'appoint",
        "Salle de bains privative dans l'hébergement",
        "Climatisation réversible chaud/froid",
        "Wi-Fi haut débit gratuit",
        "Atmosphère andalouse authentique",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-double-grand-lit",
      name: "Chambre Double",
      shortName: "Chambre Double",
      subtitle: "1 Grand Lit Double Queen & Sérénité Traditionnelle",
      description: "Chambre double intime au charme marocain avec un grand lit double Queen. Poutres traditionnelles en bois, climatisation réversible individuelle chaud/froid et salle de bains privative attenante.",
      image: "/images/rooms/sdb-patio.jpg",
      size: "~15 m²",
      capacity: "2 adultes",
      bed: "1 grand lit double Queen",
      view: "Calme intérieur du riad",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 grand lit double Queen-Size",
        "Salle de bains privative avec douche",
        "Climatisation réversible individuel",
        "Plateau de bienvenue & linge de maison raffiné",
        "Wi-Fi haut débit gratuit",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-lits-jumeaux",
      name: "Chambre Lits Jumeaux",
      shortName: "Lits Jumeaux (3 lits)",
      subtitle: "3 Lits Simples & Espace Convivial Idéal Duo ou Trio",
      description: "Chambre conviviale et fonctionnelle dotée de 3 lits simples individuels. Idéale pour les voyageurs recherchant des couchages séparés sans compromis sur le confort, avec climatisation réversible et salle de bains privative.",
      image: "/images/rooms/lits-jumeaux-3.jpg",
      size: "~15 m²",
      capacity: "2 adultes (jusqu'à 3 couchages)",
      bed: "3 lits simples",
      view: "Médina de Bab Souk",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "3 lits simples individuels confortables",
        "Salle de bains privative avec douche",
        "Climatisation réversible chaud/froid",
        "Wi-Fi haut débit gratuit",
        "Rangements et penderie",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-triple",
      name: "Chambre Triple",
      shortName: "Chambre Triple",
      subtitle: "15 m² Spacieux, Vue Patio & Literie Modulable au Choix",
      description: "Chambre triple de 15 m² avec belle hauteur sous plafond et vue sur les arches du patio. Literie au choix : 1 lit simple et 1 très grand lit double OU 3 lits simples. Salle de bains privative et climatisation réversible.",
      image: "/images/rooms/chambre-triple.jpg",
      size: "15 m²",
      capacity: "2 à 3 personnes",
      bed: "1 lit simple + 1 très grand lit double (ou 3 lits simples)",
      view: "Patio central en briques apparentes",
      priceFrom: 135,
      priceMad: 1462,
      features: [
        "Superficie vérifiée de 15 m²",
        "Choisissez votre lit : 1 lit simple + 1 très grand lit double OU 3 lits simples",
        "Salle de bains privative attenante avec articles de toilette",
        "Climatisation réversible chaud/froid",
        "Wi-Fi haut débit gratuit",
        "Petit-déjeuner traditionnel exceptionnel inclus"
      ]
    },
    {
      id: "chambre-quadruple-superieure",
      name: "Chambre Quadruple Supérieure",
      shortName: "Quadruple Supérieure",
      subtitle: "20 m² de Charme Familial, Patio Briques Apparentes & Coursives",
      description: "La plus spacieuse chambre du riad avec ses 20 m² ouvrant sur les coursives en fer forgé du patio central. Literie au choix (2 lits simples + 1 grand lit double OU 4 lits simples), idéale pour les familles ou séjours entre amis.",
      image: "/images/rooms/triple-familiale.jpg",
      size: "20 m²",
      capacity: "2 à 4 personnes",
      bed: "2 lits simples + 1 grand lit double (ou 4 lits simples)",
      view: "Patio central & coursives en fer forgé",
      priceFrom: 155,
      priceMad: 1671,
      features: [
        "Grande superficie de 20 m² idéale pour familles",
        "Choisissez votre lit : 2 lits simples + 1 grand lit double OU 4 lits simples",
        "Patio central en briques apparentes et fer forgé",
        "Grande salle de bains privative équipée",
        "Climatisation réversible individuel",
        "Petit-déjeuner copieux pour toute la famille inclus"
      ]
    }
  ],
  es: [
    {
      id: "chambre-double-deluxe-balcon",
      name: "Habitación Doble Deluxe con Balcón",
      shortName: "Deluxe Balcón",
      subtitle: "Balcón Privado de Forja, Vista Panorámica a la Medina y Montañas del Rif",
      description: "La más cotizada del riad: rincón de estar íntimo con arco tradicional marroquí y balcón de forja con vistas a las callejuelas azules y el Rif. Baño privado con ducha italiana y climatización frío/calor.",
      image: "/images/rooms/deluxe-balcon.jpg",
      size: "~18 m²",
      capacity: "2 adultos",
      bed: "1 cama doble grande (o 2 camas individuales)",
      view: "Callejuelas azules y Montañas del Rif",
      priceFrom: 96,
      priceMad: 1044,
      features: [
        "Balcón privado de forja con vistas panorámicas",
        "Elija su cama: 1 cama doble grande O 2 camas individuales",
        "Baño privado completo con ducha y artículos de aseo",
        "Climatización individual frío/calor",
        "Wi-Fi de alta velocidad gratuito en todo el riad",
        "Desayuno tradicional en terraza panorámica incluido"
      ]
    },
    {
      id: "chambre-double-standard",
      name: "Habitación Doble Standard",
      shortName: "Doble Standard",
      subtitle: "Estilo Puro Azul y Blanco, Cabecero Tapizado y Mesitas Pintadas",
      description: "Ambiente relajante que fusiona el azul añil y la cal blanca de Chefchaouen. Cabecero tapizado, mesillas de noche pintadas a mano, climatización frío/calor y baño privado en suite.",
      image: "/images/rooms/double-standard.jpg",
      size: "~14 m²",
      capacity: "2 adultos",
      bed: "1 cama doble confortable",
      view: "Medina de Bab Souk",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 cama doble de gran confort",
        "Baño privado en suite con ducha",
        "Climatización frío/calor",
        "Wi-Fi de alta velocidad gratuito",
        "Armario y almacenaje práctico",
        "Desayuno tradicional en el rooftop incluido"
      ]
    },
    {
      id: "chambre-lits-jumeaux-sdb-patio",
      name: "Habitación Twin con Baño Privado",
      shortName: "Twin con Patio",
      subtitle: "Acceso al Patio Interior, 2 Camas Individuales, Vistas Apacibles y Baño Privado",
      description: "Habitación luminosa con vistas y acceso al apacible patio interior del riad. Equipada con 2 camas individuales confortables, climatización y bonito baño privado con lavabo artesanal.",
      image: "/images/rooms/twin-patio.jpg",
      size: "~15 m²",
      capacity: "2 adultos",
      bed: "2 camas individuales separadas",
      view: "Patio interior apacible y Medina",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "2 camas individuales confortables",
        "Acceso y vistas al patio interior apacible",
        "Baño privado en suite",
        "Climatización frío/calor",
        "Wi-Fi de alta velocidad gratuito",
        "Desayuno tradicional en la terraza incluido"
      ]
    },
    {
      id: "chambre-double-sdb-privative",
      name: "Habitación Doble con Baño Privado",
      shortName: "Doble con Baño",
      subtitle: "Configuración Confort (1 Cama Individual + 1 Cama Doble) y Baño Privado",
      description: "Habitación espaciosa y versátil que ofrece 1 cama doble confortable y 1 cama individual supletoria. Muros gruesos tradicionales que aseguran calma y frescura, baño privado en el alojamiento.",
      image: "/images/rooms/double-sdb.jpg",
      size: "~16 m²",
      capacity: "2 adultos",
      bed: "1 cama individual y 1 cama doble",
      view: "Medina y Patio del riad",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 cama doble + 1 cama individual supletoria",
        "Baño privado en el propio alojamiento",
        "Climatización frío/calor",
        "Wi-Fi de alta velocidad gratuito",
        "Auténtica atmósfera andalusí",
        "Desayuno tradicional en el rooftop incluido"
      ]
    },
    {
      id: "chambre-double-grand-lit",
      name: "Habitación Doble",
      shortName: "Habitación Doble",
      subtitle: "1 Gran Cama Doble Queen y Serenidad Tradicional",
      description: "Habitación doble íntima de encanto marroquí con una gran cama doble Queen. Vigas tradicionales de madera, climatización frío/calor individual y baño privado contiguo.",
      image: "/images/rooms/sdb-patio.jpg",
      size: "~15 m²",
      capacity: "2 adultos",
      bed: "1 gran cama doble Queen",
      view: "Calma interior del riad",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 gran cama doble Queen-Size",
        "Baño privado con ducha",
        "Climatización individual frío/calor",
        "Bandeja de bienvenida y ropa de cama refinada",
        "Wi-Fi de alta velocidad gratuito",
        "Desayuno tradicional incluido"
      ]
    },
    {
      id: "chambre-lits-jumeaux",
      name: "Habitación Twin (3 camas)",
      shortName: "Twin (3 camas)",
      subtitle: "3 Camas Individuales y Espacio Convivencial Ideal Dúo o Trío",
      description: "Habitación funcional y acogedora con 3 camas individuales. Ideal para viajeros que buscan camas separadas con el máximo confort, climatización frío/calor y baño privado.",
      image: "/images/rooms/lits-jumeaux-3.jpg",
      size: "~15 m²",
      capacity: "2 adultos (hasta 3 plazas)",
      bed: "3 camas individuales",
      view: "Medina de Bab Souk",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "3 camas individuales confortables",
        "Baño privado con ducha",
        "Climatización frío/calor",
        "Wi-Fi de alta velocidad gratuito",
        "Armarios y almacenaje",
        "Desayuno tradicional incluido"
      ]
    },
    {
      id: "chambre-triple",
      name: "Habitación Triple",
      shortName: "Habitación Triple",
      subtitle: "15 m² Espaciosos, Vistas al Patio y Camas Modulables a Elegir",
      description: "Habitación triple de 15 m² con techos altos y vistas a los arcos del patio. Camas a elegir: 1 cama individual y 1 cama doble extragrande O 3 camas individuales. Baño privado y climatización.",
      image: "/images/rooms/chambre-triple.jpg",
      size: "15 m²",
      capacity: "2 a 3 personas",
      bed: "1 individual + 1 doble extragrande (o 3 individuales)",
      view: "Patio central de ladrillo visto",
      priceFrom: 135,
      priceMad: 1462,
      features: [
        "Superficie verificada de 15 m²",
        "Elija sus camas: 1 indiv. + 1 doble extragrande O 3 indiv.",
        "Baño privado con artículos de aseo",
        "Climatización frío/calor",
        "Wi-Fi de alta velocidad gratuito",
        "Desayuno tradicional incluido"
      ]
    },
    {
      id: "chambre-quadruple-superieure",
      name: "Habitación Cuádruple Superior",
      shortName: "Cuádruple Superior",
      subtitle: "20 m² de Encanto Familiar, Patio de Ladrillo Visto y Galerías",
      description: "La habitación más espaciosa del riad, con 20 m² abiertos a las galerías de forja del patio central. Camas a elegir (2 individuales + 1 cama doble grande O 4 individuales), ideal para familias o grupos.",
      image: "/images/rooms/triple-familiale.jpg",
      size: "20 m²",
      capacity: "2 a 4 personas",
      bed: "2 individuales + 1 doble grande (o 4 individuales)",
      view: "Patio central y galerías de forja",
      priceFrom: 155,
      priceMad: 1671,
      features: [
        "Gran superficie de 20 m² ideal para familias",
        "Elija sus camas: 2 indiv. + 1 doble grande O 4 indiv.",
        "Patio central de ladrillo visto y forja",
        "Amplio baño privado equipado",
        "Climatización reversible individual",
        "Desayuno abundante para toda la familia incluido"
      ]
    }
  ],
  en: [
    {
      id: "chambre-double-deluxe-balcon",
      name: "Deluxe Double Room with Balcony",
      shortName: "Deluxe Balcony",
      subtitle: "Private Wrought-Iron Balcony, Panoramic Views of the Medina & Rif Mountains",
      description: "The most sought-after room at Dar Gabriel: romantic seating nook with a traditional Moroccan arch and private balcony opening directly over Chefchaouen's blue alleys and the Rif peaks. En-suite bathroom with walk-in shower and reversible heating/AC.",
      image: "/images/rooms/deluxe-balcon.jpg",
      size: "~18 m²",
      capacity: "2 guests",
      bed: "1 large double bed (or 2 single beds)",
      view: "Blue alleys & Rif Mountains",
      priceFrom: 96,
      priceMad: 1044,
      features: [
        "Private secure wrought-iron balcony with panoramic views",
        "Choose your bed: 1 large double bed OR 2 twin beds",
        "Full private en-suite bathroom with shower & toiletries",
        "Individual reversible heating / air conditioning",
        "Complimentary high-speed Wi-Fi throughout",
        "Exceptional traditional rooftop breakfast included"
      ]
    },
    {
      id: "chambre-double-standard",
      name: "Standard Double Room",
      shortName: "Standard Double",
      subtitle: "Refined Blue & White Decor, Tufted Headboard & Handcrafted Nightstands",
      description: "Soothing atmosphere blending indigo blue with crisp white lime plaster. Tufted headboard, hand-painted bedside tables, reversible heating/AC, and an attached en-suite shower room.",
      image: "/images/rooms/double-standard.jpg",
      size: "~14 m²",
      capacity: "2 guests",
      bed: "1 comfortable double bed",
      view: "Bab Souk Medina",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 comfortable double bed",
        "En-suite private bathroom with shower",
        "Reversible heating & air conditioning",
        "Free high-speed Wi-Fi",
        "Closet & convenient storage",
        "Exceptional traditional breakfast included"
      ]
    },
    {
      id: "chambre-lits-jumeaux-sdb-patio",
      name: "Twin Room with En-Suite Bathroom",
      shortName: "Twin with Patio",
      subtitle: "Direct Patio Access, 2 Twin Beds, Peaceful Ambience & Private Bathroom",
      description: "Bright room featuring direct views and access to the peaceful inner patio. Fitted with 2 comfortable twin beds, reversible climate control, and a lovely artisan en-suite bathroom.",
      image: "/images/rooms/twin-patio.jpg",
      size: "~15 m²",
      capacity: "2 guests",
      bed: "2 separate single beds",
      view: "Peaceful inner courtyard & Medina",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "2 comfortable twin beds",
        "Access and view to the quiet interior patio",
        "Private en-suite bathroom",
        "Reversible heating & air conditioning",
        "Free high-speed Wi-Fi",
        "Exceptional traditional breakfast included"
      ]
    },
    {
      id: "chambre-double-sdb-privative",
      name: "Double Room with Private Bathroom",
      shortName: "Double with Bath",
      subtitle: "Comfort Layout (1 Single Bed + 1 Double Bed) & Private Bathroom",
      description: "Generous and versatile room providing 1 comfortable double bed plus 1 single bed. Thick traditional stone walls ensuring quiet and natural coolness, with an en-suite private bathroom.",
      image: "/images/rooms/double-sdb.jpg",
      size: "~16 m²",
      capacity: "2 guests",
      bed: "1 single bed and 1 double bed",
      view: "Medina & Courtyard",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 double bed + 1 extra single bed",
        "Private bathroom inside the room",
        "Reversible heating & AC",
        "Free high-speed Wi-Fi",
        "Authentic Andalusian atmosphere",
        "Traditional rooftop breakfast included"
      ]
    },
    {
      id: "chambre-double-grand-lit",
      name: "Double Room",
      shortName: "Double Room",
      subtitle: "1 Queen-Size Double Bed & Serene Traditional Comfort",
      description: "Intimate double bedroom with Moroccan character featuring a Queen double bed. Exposed wood beams, individual climate control, and attached private bathroom.",
      image: "/images/rooms/sdb-patio.jpg",
      size: "~15 m²",
      capacity: "2 guests",
      bed: "1 Queen-size double bed",
      view: "Peaceful interior courtyard",
      priceFrom: 87,
      priceMad: 940,
      features: [
        "1 comfortable Queen-size bed",
        "Private en-suite bathroom with shower",
        "Individual climate control (heating & AC)",
        "Welcome amenities & premium linens",
        "Free high-speed Wi-Fi",
        "Exceptional traditional breakfast included"
      ]
    },
    {
      id: "chambre-lits-jumeaux",
      name: "Twin Room (3 Beds)",
      shortName: "Twin Room (3 beds)",
      subtitle: "3 Single Beds & Welcoming Space Ideal for Duos or Trios",
      description: "Inviting and functional room appointed with 3 separate twin beds. Perfect for travelers seeking separate sleeping spaces with uncompromised comfort, reversible AC, and private bathroom.",
      image: "/images/rooms/lits-jumeaux-3.jpg",
      size: "~15 m²",
      capacity: "2 guests (up to 3 beds)",
      bed: "3 single beds",
      view: "Bab Souk Medina",
      priceFrom: 82,
      priceMad: 888,
      features: [
        "3 comfortable individual single beds",
        "Private en-suite bathroom with shower",
        "Reversible heating & air conditioning",
        "Free high-speed Wi-Fi",
        "Wardrobe and storage space",
        "Traditional rooftop breakfast included"
      ]
    },
    {
      id: "chambre-triple",
      name: "Triple Room",
      shortName: "Triple Room",
      subtitle: "Spacious 15 m², Patio Views & Flexible Bedding Selection",
      description: "15 m² triple room with high ceilings and views over the courtyard arches. Choice of bedding: 1 single bed + 1 extra-large double bed OR 3 single beds. Private bathroom and reversible AC.",
      image: "/images/rooms/chambre-triple.jpg",
      size: "15 m²",
      capacity: "2 to 3 guests",
      bed: "1 single bed + 1 king double (or 3 single beds)",
      view: "Central exposed-brick patio",
      priceFrom: 135,
      priceMad: 1462,
      features: [
        "Verified 15 m² room size",
        "Choose your bed: 1 single + 1 king double OR 3 singles",
        "En-suite bathroom with complimentary toiletries",
        "Reversible heating & air conditioning",
        "Free high-speed Wi-Fi",
        "Exceptional traditional breakfast included"
      ]
    },
    {
      id: "chambre-quadruple-superieure",
      name: "Superior Quadruple Room",
      shortName: "Superior Quad",
      subtitle: "20 m² Family Room, Exposed Brick Courtyard & Wrought-Iron Balconies",
      description: "The largest room in the riad at 20 m², opening directly onto the upper galleries of the central brick courtyard. Flexible bedding (2 single beds + 1 large double bed OR 4 single beds), ideal for families and small groups.",
      image: "/images/rooms/triple-familiale.jpg",
      size: "20 m²",
      capacity: "2 to 4 guests",
      bed: "2 single beds + 1 large double (or 4 single beds)",
      view: "Central courtyard & wrought-iron walkways",
      priceFrom: 155,
      priceMad: 1671,
      features: [
        "Generous 20 m² space ideal for families",
        "Choose your bed: 2 singles + 1 large double OR 4 singles",
        "Central exposed-brick patio atmosphere",
        "Spacious private bathroom equipped with amenities",
        "Individual reversible climate control",
        "Hearty Moroccan breakfast for the whole family included"
      ]
    }
  ]
};

// Helper getter for rooms by language
export const getRoomsData = (lang: Language): Room[] => {
  return roomsDataByLang[lang] || roomsDataByLang.fr;
};

// Legacy fallback
export const roomsData: Room[] = roomsDataByLang.fr;

// Experiences localized per language
export const experiencesDataByLang: Record<Language, Experience[]> = {
  fr: [
    {
      id: "rooftop",
      title: "Toit-Terrasse Panoramique & Petit-Déjeuner",
      shortDesc: "Vue 360° sur la ville bleue et les sommets du Rif",
      fullDesc: "Le joyau de Dar Gabriel : notre terrasse sur le toit aménagée avec banquettes marocaines, parasols et tables basses. Le matin, dégustez-y votre petit-déjeuner traditionnel (crêpes marocaines, miel local, huile d'olive du Rif, œufs, jus d'orange pressé et thé à la menthe). Le soir, observez les étoiles au son de la brise des montagnes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg",
      badge: "VUE RIF 360°"
    },
    {
      id: "table-hotes",
      title: "Table d'Hôtes & Saveurs Maison",
      shortDesc: "Cuisine marocaine, méditerranéenne & espagnole sur demande",
      fullDesc: "Envie d'un tajine parfumé après une journée de marche ? Notre cuisinière prépare sur demande des plats authentiques du terroir : tajines d'agneau aux pruneaux, pastillas croustillantes, couscous du vendredi et plats aux influences andalouses et espagnoles, préparés avec des produits frais du marché de Bab Souk.",
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=85",
      badge: "CUISINE DU TERROIR"
    },
    {
      id: "situation-bab-souk",
      title: "Accès Privilégié Bab Souk & Conciergerie",
      shortDesc: "Arrivée en taxi immédiate & proximité des monuments",
      fullDesc: "L'atout majeur de Dar Gabriel (noté 9.5/10 par nos hôtes) : situé à la porte Bab Souk, les taxis et voitures vous déposent tout près. Vous évitez ainsi de porter vos bagages sur de longues montées pavées. La Kasbah est à seulement 100 m, la place Outa el-Hammam à 300 m et la source de Ras El Maa à quelques minutes à pied.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Blue_Alley_at_Chefchaouen_-_panoramio.jpg",
      badge: "NOTE EMPLACEMENT 9.5"
    }
  ],
  es: [
    {
      id: "rooftop",
      title: "Terraza Panorámica & Desayuno Tradicional",
      shortDesc: "Vistas 360° sobre la medina azul y las cumbres del Rif",
      fullDesc: "La joya de Dar Gabriel: nuestra terraza rooftop acondicionada con bancadas marroquíes, sombrillas y mesas bajas. Por la mañana, deguste nuestro desayuno tradicional (crepes marroquíes, miel pura local, aceite de oliva del Rif, huevos, zumo de naranja natural y té a la menta). Por la noche, contemple las estrellas con la brisa de la montaña.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg",
      badge: "VISTAS 360° AL RIF"
    },
    {
      id: "table-hotes",
      title: "Comedor Tradicional & Sabores Caseros",
      shortDesc: "Cocina marroquí, mediterránea y española bajo petición",
      fullDesc: "¿Desea un tajine aromático tras un día de excursión? Nuestra cocinera prepara deliciosos platos tradicionales: tajines de cordero con ciruelas, pastillas crujientes, cuscús tradicional y recetas de inspiración andalusí elaboradas con productos frescos del mercado de Bab Souk.",
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=85",
      badge: "COCINA CASERA"
    },
    {
      id: "situation-bab-souk",
      title: "Acceso Directo Bab Souk & Concierge",
      shortDesc: "Llegada en taxi inmediata y proximidad a todos los monumentos",
      fullDesc: "La gran ventaja de Dar Gabriel (valorada con un 9.5/10 por nuestros huéspedes): situado junto a la puerta Bab Souk, los taxis y vehículos le dejan a pocos metros, evitando subir pesadas maletas por empinadas cuestas. La Kasbah está a solo 100 m y la Plaza Uta el-Hammam a 300 m.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Blue_Alley_at_Chefchaouen_-_panoramio.jpg",
      badge: "NOTA UBICACIÓN 9.5"
    }
  ],
  en: [
    {
      id: "rooftop",
      title: "Panoramic Rooftop Terrace & Breakfast",
      shortDesc: "360° views across the blue medina and Rif peaks",
      fullDesc: "The crown jewel of Dar Gabriel: our furnished rooftop terrace with Moroccan cushioned banquettes and shade umbrellas. Every morning, savour an authentic breakfast (fresh Moroccan pancakes, local wild honey, Rif olive oil, eggs, fresh-squeezed orange juice, and fragrant mint tea). By evening, watch the stars rise over the Rif mountains.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Chefchaouen-the-blue-city-of-morocco-with-palm-trees-and-the-mountain-view-in-the-backrgound.jpg",
      badge: "360° RIF MOUNTAIN VIEWS"
    },
    {
      id: "table-hotes",
      title: "Home Dining & Moroccan Flavors",
      shortDesc: "Authentic Moroccan, Mediterranean & Andalusian dinners upon request",
      fullDesc: "Craving a steaming fragrant tagine after exploring the medina? Our cook prepares authentic home-cooked meals upon request: slow-braised lamb tagines with prunes, crispy pastillas, traditional Friday couscous, and fresh seasonal dishes made with ingredients from the Bab Souk market.",
      image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=85",
      badge: "LOCAL HOME COOKING"
    },
    {
      id: "situation-bab-souk",
      title: "Effortless Bab Souk Access & Concierge",
      shortDesc: "Direct taxi drop-off & quick walk to all historic landmarks",
      fullDesc: "The prime advantage of Dar Gabriel (rated 9.5/10 for location by guests): located right by Bab Souk gate, cars and taxis drop you off just steps away, saving you from hauling luggage up steep cobblestone inclines. The Kasbah is only 100m away and Outa el-Hammam Square is 300m away.",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Blue_Alley_at_Chefchaouen_-_panoramio.jpg",
      badge: "LOCATION SCORE 9.5"
    }
  ]
};

export const getExperiencesData = (lang: Language): Experience[] => {
  return experiencesDataByLang[lang] || experiencesDataByLang.fr;
};

export const experiencesData: Experience[] = experiencesDataByLang.fr;

// Gallery photos localized
export const galleryImagesByLang: Record<Language, { url: string; caption: string }[]> = {
  fr: [
    {
      url: "/images/rooms/deluxe-balcon.jpg",
      caption: "Chambre Deluxe avec balcon en fer forgé et vue sur les ruelles bleues"
    },
    {
      url: "/images/rooms/twin-patio.jpg",
      caption: "Chambre Lits Jumeaux avec accès direct au patio intérieur"
    },
    {
      url: "/images/rooms/double-sdb.jpg",
      caption: "Chambre Double avec salle de bains privative attenante"
    },
    {
      url: "/images/rooms/chambre-triple.jpg",
      caption: "Chambre Triple spacieuse avec literie modulable"
    },
    {
      url: "/images/rooms/lits-jumeaux-3.jpg",
      caption: "Chambre conviviale aux multiples couchages"
    },
    {
      url: "/images/rooms/triple-familiale.jpg",
      caption: "Patio central en briques apparentes et coursives menant aux chambres"
    }
  ],
  es: [
    {
      url: "/images/rooms/deluxe-balcon.jpg",
      caption: "Habitación Deluxe con balcón de forja y vistas a las callejuelas azules"
    },
    {
      url: "/images/rooms/twin-patio.jpg",
      caption: "Habitación Twin con acceso directo al patio interior"
    },
    {
      url: "/images/rooms/double-sdb.jpg",
      caption: "Habitación Doble con baño privado en suite"
    },
    {
      url: "/images/rooms/chambre-triple.jpg",
      caption: "Habitación Triple espaciosa con camas modulables"
    },
    {
      url: "/images/rooms/lits-jumeaux-3.jpg",
      caption: "Habitación acogedora con múltiples camas individuales"
    },
    {
      url: "/images/rooms/triple-familiale.jpg",
      caption: "Patio central de ladrillo visto y galerías hacia las habitaciones"
    }
  ],
  en: [
    {
      url: "/images/rooms/deluxe-balcon.jpg",
      caption: "Deluxe Room with wrought-iron balcony and blue alley views"
    },
    {
      url: "/images/rooms/twin-patio.jpg",
      caption: "Twin Room with direct access to the peaceful courtyard"
    },
    {
      url: "/images/rooms/double-sdb.jpg",
      caption: "Double Room with private en-suite bathroom"
    },
    {
      url: "/images/rooms/chambre-triple.jpg",
      caption: "Spacious Triple Room with flexible bedding arrangements"
    },
    {
      url: "/images/rooms/lits-jumeaux-3.jpg",
      caption: "Comfortable guest room with multiple single beds"
    },
    {
      url: "/images/rooms/triple-familiale.jpg",
      caption: "Central exposed-brick courtyard and walkways leading to rooms"
    }
  ]
};

export const getGalleryImages = (lang: Language) => {
  return galleryImagesByLang[lang] || galleryImagesByLang.fr;
};

export const galleryImages = galleryImagesByLang.fr;

// Awards logos localized
export const awardsLogosByLang: Record<Language, { label: string; sub: string }[]> = {
  fr: [
    { label: "BOOKING.COM", sub: "Note 8.8 / 10 • Superbe" },
    { label: "EMPLACEMENT", sub: "Note 9.5 / 10 • Bab Souk" },
    { label: "HOSPITALITÉ", sub: "Note 9.5 / 10 • Accueil Personnalisé" },
    { label: "TRIPADVISOR", sub: "Travelers' Choice Chefchaouen" },
    { label: "MAISON D'HÔTES", sub: "Charme & Authenticité Marocaine" }
  ],
  es: [
    { label: "BOOKING.COM", sub: "Puntuación 8.8 / 10 • Excelente" },
    { label: "UBICACIÓN", sub: "Puntuación 9.5 / 10 • Bab Souk" },
    { label: "HOSPITALIDAD", sub: "Puntuación 9.5 / 10 • Trato Familiar" },
    { label: "TRIPADVISOR", sub: "Travelers' Choice Chefchaouen" },
    { label: "RIAD BOUTIQUE", sub: "Encanto & Autenticidad Marroquí" }
  ],
  en: [
    { label: "BOOKING.COM", sub: "8.8 / 10 Rating • Superb" },
    { label: "LOCATION", sub: "9.5 / 10 Rating • Bab Souk" },
    { label: "HOSPITALITY", sub: "9.5 / 10 Rating • Personal Care" },
    { label: "TRIPADVISOR", sub: "Travelers' Choice Chefchaouen" },
    { label: "BOUTIQUE RIAD", sub: "Moroccan Charm & Authenticity" }
  ]
};

export const getAwardsLogos = (lang: Language) => {
  return awardsLogosByLang[lang] || awardsLogosByLang.fr;
};

export const awardsLogos = awardsLogosByLang.fr;
