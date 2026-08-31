(function(){
  "use strict";
 
  var IMAGES = {
    hero: "hero.jpg",
    grid: "grid.jpg",
    vangogh: "vangogh.jpg",
    vintage: "vintage.jpg",
    logo: "logo-duif.png"
  };
 
    var GUESTS = [
    { "code": "esther-dijkman", "naam": "Esther Dijkman", "tag": "stadhuis" },
    { "code": "martijn-spierenburg", "naam": "Martijn Spierenburg", "tag": "stadhuis" },
    { "code": "eddy-dijkman", "naam": "Eddy Dijkman", "tag": "stadhuis" },
    { "code": "jonathan-dijkman", "naam": "Jonathan Dijkman", "tag": "stadhuis" },
    { "code": "david-dijkman", "naam": "David Dijkman", "tag": "stadhuis", "partners": ["lisa-berghorst"] },
    { "code": "lisa-berghorst", "naam": "Lisa Berghorst", "tag": "stadhuis", "partners": ["david-dijkman"] },
    { "code": "lise-klapwijk", "naam": "Lise Klapwijk", "tag": "stadhuis" },
    { "code": "esther-nanlohy", "naam": "Esther Nanlohy", "tag": "stadhuis" },
    { "code": "saffira-frantzen", "naam": "Saffira Frantzen", "tag": "stadhuis" },
    { "code": "peter-spierenburg", "naam": "Peter Spierenburg", "tag": "stadhuis", "partners": ["arine-spierenburg"] },
    { "code": "arine-spierenburg", "naam": "Arine Spierenburg", "tag": "stadhuis", "partners": ["peter-spierenburg"] },
    { "code": "carien-zaalmink", "naam": "Carien Zaalmink", "tag": "stadhuis", "partners": ["bram-zaalmink"] },
    { "code": "bram-zaalmink", "naam": "Bram Zaalmink", "tag": "stadhuis", "partners": ["carien-zaalmink"] },
    { "code": "thomas-spierenburg", "naam": "Thomas Spierenburg", "tag": "stadhuis", "partners": ["jiske-van-der-schaft"] },
    { "code": "jiske-van-der-schaft", "naam": "Jiske van der Schaft", "tag": "stadhuis", "partners": ["thomas-spierenburg"] },
    { "code": "opa-spierenburg", "naam": "Opa Spierenburg", "tag": "stadhuis", "partners": ["oma-spierenburg"] },
    { "code": "oma-spierenburg", "naam": "Oma Spierenburg", "tag": "stadhuis", "partners": ["opa-spierenburg"] },
    { "code": "jasper-hageman", "naam": "Jasper Hageman", "tag": "stadhuis", "partners": ["acelya-gedik"] },
    { "code": "quentin-aker", "naam": "Quentin Aker", "tag": "stadhuis" },
    { "code": "elja-roelofsen", "naam": "Elja Roelofsen", "tag": "dag" },
    { "code": "sophie-van-dam", "naam": "Sophie van Dam", "tag": "dag", "partners": ["filip-smeets"] },
    { "code": "filip-smeets", "naam": "Filip Smeets", "tag": "dag", "partners": ["sophie-van-dam"] },
    { "code": "lotte-van-veldhuizen", "naam": "Lotte van Veldhuizen", "tag": "dag", "partners": ["lauge-kjaergaard-jensen"] },
    { "code": "lauge-kjaergaard-jensen", "naam": "Lauge Kjærgaard Jensen", "tag": "dag", "partners": ["lotte-van-veldhuizen"] },
    { "code": "roos-los", "naam": "Roos Los", "tag": "dag", "partners": ["jurjen-overbeek"] },
    { "code": "jurjen-overbeek", "naam": "Jurjen Overbeek", "tag": "dag", "partners": ["roos-los"] },
    { "code": "judith-graansma", "naam": "Judith Graansma", "tag": "dag" },
    { "code": "tom-hardenberg", "naam": "Tom Hardenberg", "tag": "dag", "partners": ["john-appiah"] },
    { "code": "john-appiah", "naam": "John Appiah", "tag": "dag", "partners": ["tom-hardenberg"] },
    { "code": "luuk-verbeek", "naam": "Luuk Verbeek", "tag": "dag", "partners": ["rosanne-bunschoten"] },
    { "code": "rosanne-bunschoten", "naam": "Rosanne Bunschoten", "tag": "dag", "partners": ["luuk-verbeek"] },
    { "code": "matthijs-van-der-ploeg", "naam": "Matthijs van der Ploeg", "tag": "dag" },
    { "code": "joel-koppes", "naam": "Joël Koppes", "tag": "dag" },
    { "code": "jesse-van-tilburg", "naam": "Jesse van Tilburg", "tag": "dag", "partners": ["marjet-jonker"] },
    { "code": "marjet-jonker", "naam": "Marjet Jonker", "tag": "dag", "partners": ["jesse-van-tilburg"] },
    { "code": "sophia-wallenburg", "naam": "Sophia Wallenburg", "tag": "dag" },
    { "code": "anja-van-der-ham", "naam": "Anja van der Ham", "tag": "dag" },
    { "code": "acelya-gedik", "naam": "Açelya Gedik", "tag": "dag", "partners": ["jasper-hageman"] },
    { "code": "jurrien-van-t-oever", "naam": "Jurriën van t Oever", "tag": "dag", "partners": ["joyce-brandes"] },
    { "code": "christiaan-veltkamp", "naam": "Christiaan Veltkamp", "tag": "dag" },
    { "code": "joyce-brandes", "naam": "Joyce Brandes", "tag": "dag", "partners": ["jurrien-van-t-oever"] },
    { "code": "levi-springer", "naam": "Levi Springer", "tag": "dag", "partners": ["isa-pardo"] },
    { "code": "isa-pardo", "naam": "Isa Pardo", "tag": "dag", "partners": ["levi-springer"] },
    { "code": "nordin-bigare", "naam": "Nordin Bigaré", "tag": "dag", "partners": ["leander-wolters"] },
    { "code": "leander-wolters", "naam": "Leander Wolters", "tag": "dag", "partners": ["nordin-bigare"] },
    { "code": "ezra-leeuwenhage", "naam": "Ezra Leeuwenhage", "tag": "dag" },
    { "code": "tein-van-riel", "naam": "Tein van Riel", "tag": "dag", "partners": ["stas"] },
    { "code": "stas", "naam": "Nastasia Filipovic", "tag": "dag", "looseName": true, "partners": ["tein-van-riel"] },
    { "code": "david-shader", "naam": "David Shader", "tag": "dag" },
    { "code": "louise-dijkman", "naam": "Louise Dijkman", "tag": "receptie" },
    { "code": "bob-jeltes", "naam": "Bob Jeltes", "tag": "receptie", "partners": ["tamara-jeltes"] },
    { "code": "tamara-jeltes", "naam": "Tamara Jeltes", "tag": "receptie", "partners": ["bob-jeltes"] },
    { "code": "dana-roelofsen", "naam": "Dana Roelofsen", "tag": "receptie" },
    { "code": "derk-roelofsen", "naam": "Derk Roelofsen", "tag": "receptie" },
    { "code": "jan-roelofsen", "naam": "Jan Roelofsen", "tag": "receptie", "partners": ["jannie-roelofsen"] },
    { "code": "jannie-roelofsen", "naam": "Jannie Roelofsen", "tag": "receptie", "partners": ["jan-roelofsen"] },
    { "code": "ria-dorrestein", "naam": "Ria Dorrestein", "tag": "receptie" },
    { "code": "jan-dorrestein", "naam": "Jan Dorrestein", "tag": "receptie" },
    { "code": "els-spierenburg", "naam": "Els Spierenburg", "tag": "receptie" },
    { "code": "echica-kolman", "naam": "Echica Kolman", "tag": "receptie" },
    { "code": "nico-van-wijngaarden", "naam": "Nico van Wijngaarden", "tag": "receptie", "partners": ["gerdien-van-wijngaarden"] },
    { "code": "gerdien-van-wijngaarden", "naam": "Gerdien van Wijngaarden", "tag": "receptie", "partners": ["nico-van-wijngaarden"] },
    { "code": "jan-van-wijngaarden", "naam": "Jan van Wijngaarden", "tag": "receptie", "partners": ["anke-willemstein"] },
    { "code": "anke-willemstein", "naam": "Anke Willemstein", "tag": "receptie", "partners": ["jan-van-wijngaarden"] },
    { "code": "herman-van-wijngaarden", "naam": "Herman van Wijngaarden", "tag": "receptie" },
    { "code": "els-tan", "naam": "Els Tan", "tag": "receptie", "partners": ["geoffrey-tan"] },
    { "code": "geoffrey-tan", "naam": "Geoffrey Tan", "tag": "receptie", "partners": ["els-tan"] },
    { "code": "joel-tan", "naam": "Joël Tan", "tag": "kerkreceptie", "partners": ["femke"] },
    { "code": "femke", "naam": "Femke", "tag": "kerkreceptie", "looseName": true, "partners": ["joel-tan"] },
    { "code": "tinie-bouw", "naam": "Tinie Bouw", "tag": "kerkreceptie", "partners": ["paul-bouw"] },
    { "code": "paul-bouw", "naam": "Paul Bouw", "tag": "kerkreceptie", "partners": ["tinie-bouw"] },
    { "code": "lennart-bouw", "naam": "Lennart Bouw", "tag": "kerkreceptie", "partners": ["colinda-bouw"] },
    { "code": "colinda-bouw", "naam": "Colinda Bouw", "tag": "kerkreceptie", "partners": ["lennart-bouw"] },
    { "code": "menno-bouw", "naam": "Menno Bouw", "tag": "kerkreceptie" },
    { "code": "mandy-alboe-van-woudenberg", "naam": "Mandy Alboe-van Woudenberg", "tag": "kerkreceptie" },
    { "code": "tom-van-baren", "naam": "Tom van Baren", "tag": "kerkreceptie", "partners": ["lisa-van-baren"] },
    { "code": "lisa-van-baren", "naam": "Lisa van Baren", "tag": "kerkreceptie", "partners": ["tom-van-baren"] },
    { "code": "anne-marij", "naam": "Anne Marij", "tag": "kerkreceptie", "looseName": true },
    { "code": "pien-hoorweg", "naam": "Pien Hoorweg", "tag": "kerkreceptie" },
    { "code": "maryse-sturm", "naam": "Maryse Sturm", "tag": "kerkreceptie" },
    { "code": "sara-van-der-bijl", "naam": "Sara van der Bijl", "tag": "kerkreceptie" },
    { "code": "mujtaba-najim", "naam": "Mujtaba Najim", "tag": "kerkreceptie" },
    { "code": "hayo-osmani", "naam": "Hayo Osmani", "tag": "kerkreceptie" },
    { "code": "hilal-sarica", "naam": "Hilal Sarica", "tag": "kerkreceptie" },
    { "code": "yuri-kroon", "naam": "Yuri Kroon", "tag": "kerkreceptie" },
    { "code": "toon-van-asselt", "naam": "Toon van Asselt", "tag": "kerkreceptie" },
    { "code": "yoni-tehubijuluw", "naam": "Yoni Tehubijuluw", "tag": "kerkreceptie" },
    { "code": "jochem-back", "naam": "Jochem Back", "tag": "kerkreceptie" },
    { "code": "maxime-plasmeijer", "naam": "Maxime Plasmeijer", "tag": "kerkreceptie" },
    { "code": "yannik-t-hart", "naam": "Yannik 't Hart", "tag": "kerkreceptie", "partners": ["astrid-schouten"] },
    { "code": "astrid-schouten", "naam": "Astrid Schouten", "tag": "kerkreceptie", "partners": ["yannik-t-hart"] },
    { "code": "mees-lindeman", "naam": "Mees Lindeman", "tag": "kerkreceptie" },
    { "code": "tristan-aker", "naam": "Tristan Aker", "tag": "kerkreceptie" },
    { "code": "yannick-spronk", "naam": "Yannick Spronk", "tag": "kerkreceptie" },
    { "code": "sietse-bouma", "naam": "Sietse Bouma", "tag": "kerkreceptie" },
    { "code": "yosha-vogel", "naam": "Yosha Vogel", "tag": "kerkreceptie" },
    { "code": "davy-struik", "naam": "Davy Struik", "tag": "kerkreceptie" },
    { "code": "dirk-jan-broersma", "naam": "Dirk-Jan Broersma", "tag": "kerkreceptie" },
    { "code": "sybren-wakkerman", "naam": "Sybren Wakkerman", "tag": "kerkreceptie" },
    { "code": "thijs-savelkouls", "naam": "Thijs Savelkouls", "tag": "kerkreceptie" },
    { "code": "paul-niemoller", "naam": "Paul Niemöller", "tag": "kerkreceptie" },
    { "code": "wisse-trommelen", "naam": "Wisse Trommelen", "tag": "kerkreceptie" },
    { "code": "marnik-linnekamp", "naam": "Marnik Linnekamp", "tag": "kerkreceptie" },
    { "code": "marit-elie", "naam": "Marit Elie", "tag": "kerkreceptie" },
    { "code": "jolie-van-der-klis", "naam": "Jolie van der Klis", "tag": "kerkreceptie", "partners": ["edwin-martin"] },
    { "code": "rosalie-martin", "naam": "Rosalie Martin", "tag": "kerkreceptie" },
    { "code": "lexander-martin", "naam": "Lexander Martin", "tag": "kerkreceptie" },
    { "code": "edwin-martin", "naam": "Edwin Martin", "tag": "kerkreceptie", "partners": ["jolie-van-der-klis"] },
    { "code": "rik-van-wijngaarden", "naam": "Rik van Wijngaarden", "tag": "kerk", "partners": ["ciska-van-wijngaarden"] },
    { "code": "ciska-van-wijngaarden", "naam": "Ciska van Wijngaarden", "tag": "kerk", "partners": ["rik-van-wijngaarden"] },
    { "code": "emma-baas", "naam": "Emma Baas", "tag": "kerk", "partners": ["marnix-ruta"] },
    { "code": "marnix-ruta", "naam": "Marnix Ruta", "tag": "kerk", "partners": ["emma-baas"] },
    { "code": "annah-planjer", "naam": "Annah Planjer", "tag": "kerk", "partners": ["peter-burger"] },
    { "code": "peter-burger", "naam": "Peter Burger", "tag": "kerk", "partners": ["annah-planjer"] },
    { "code": "sofie-planjer", "naam": "Sofie Planjer", "tag": "kerk", "partners": ["gijs"] },
    { "code": "gijs", "naam": "Gijs", "tag": "kerk", "looseName": true, "partners": ["sofie-planjer"] },
    { "code": "saar-planjer", "naam": "Saar Planjer", "tag": "kerk", "partners": ["robin-grun"] },
    { "code": "robin-grun", "naam": "Robin Grun", "tag": "kerk", "partners": ["saar-planjer"] },
    { "code": "rolf", "naam": "Rolf", "tag": "kerk", "looseName": true, "partners": ["geke"] },
    { "code": "geke", "naam": "Geke", "tag": "kerk", "looseName": true, "partners": ["rolf"] },
    { "code": "julia-raijmakers", "naam": "Julia Raijmakers", "tag": "kerk" },
    { "code": "isabelle-van-der-linden", "naam": "Isabelle van der Linden", "tag": "kerk" },
    { "code": "jorge-madridparedes", "naam": "Jorge Madridparedes", "tag": "kerk" },
    { "code": "marlies-destoop", "naam": "Marlies Destoop", "tag": "kerk" },
    { "code": "danique-bruil", "naam": "Danique Bruil", "tag": "kerk" },
    { "code": "sabien-peeters", "naam": "Sabien Peeters", "tag": "kerk" },
    { "code": "kors-van-der-ent", "naam": "Kors van der Ent", "tag": "kerk" },
    { "code": "karin-de-winter", "naam": "Karin de Winter", "tag": "kerk", "partners": ["kees-de-winter"] },
    { "code": "kees-de-winter", "naam": "Kees de Winter", "tag": "kerk", "partners": ["karin-de-winter"] },
    { "code": "floortje-sijpestein", "naam": "Floortje Sijpestein", "tag": "kerk", "partners": ["maarten-sijpestein", "luuk-sijpestein"] },
    { "code": "maarten-sijpestein", "naam": "Maarten Sijpestein", "tag": "kerk", "partners": ["floortje-sijpestein", "luuk-sijpestein"] },
    { "code": "marije-witting", "naam": "Marije Witting", "tag": "kerk" },
    { "code": "rebecca-feddes", "naam": "Rebecca Feddes", "tag": "kerk" },
    { "code": "annegreeth-rozema", "naam": "Annegreeth Rozema", "tag": "kerk" },
    { "code": "thom-de-vries", "naam": "Thom de Vries", "tag": "kerk" },
    { "code": "jonne", "naam": "Jonne", "tag": "kerk", "looseName": true, "partners": ["peter"] },
    { "code": "peter", "naam": "Peter", "tag": "kerk", "looseName": true, "partners": ["jonne"] },
    { "code": "alexis", "naam": "Alexis", "tag": "kerk", "looseName": true },
    { "code": "delene", "naam": "Delene", "tag": "kerk", "looseName": true },
    { "code": "ardt-klapwijk", "naam": "Ardt Klapwijk", "tag": "kerk", "partners": ["fokelien-klapwijk"] },
    { "code": "fokelien-klapwijk", "naam": "Fokelien Klapwijk", "tag": "kerk", "partners": ["ardt-klapwijk"] },
    { "code": "bert-aker", "naam": "Bert Aker", "tag": "kerk", "partners": ["jocelyne-aker"] },
    { "code": "jocelyne-aker", "naam": "Jocelyne Aker", "tag": "kerk", "partners": ["bert-aker"] },
    { "code": "luuk-sijpestein", "naam": "Luuk Sijpestein", "tag": "kerk", "partners": ["floortje-sijpestein", "maarten-sijpestein"] },
    { "code": "miranda-hageman", "naam": "Miranda Hageman", "tag": "kerk", "partners": ["chris-hageman"] },
    { "code": "chris-hageman", "naam": "Chris Hageman", "tag": "kerk", "partners": ["miranda-hageman"] },
    { "code": "annemiek", "naam": "Annemiek", "tag": "kerk", "looseName": true },
    { "code": "roel", "naam": "Roel", "tag": "kerk", "looseName": true, "partners": ["nienke"] },
    { "code": "nienke", "naam": "Nienke", "tag": "kerk", "looseName": true, "partners": ["roel"] },
    { "code": "joris", "naam": "Joris", "tag": "kerk", "looseName": true, "partners": ["amy"] },
    { "code": "amy", "naam": "Amy", "tag": "kerk", "looseName": true, "partners": ["joris"] },
    { "code": "eva-leusink", "naam": "Eva Leusink", "tag": "kerk", "partners": ["arjan-leusink"] },
    { "code": "arjan-leusink", "naam": "Arjan Leusink", "tag": "kerk", "partners": ["eva-leusink"] },
    { "code": "gert-jan-van-wijngaarden", "naam": "Gert-Jan van Wijngaarden", "tag": "kerk" },
    { "code": "ester-van-wijngaarden", "naam": "Ester van Wijngaarden", "tag": "kerk" },
    { "code": "rachel-verdoold", "naam": "Rachel Verdoold", "tag": "kerk", "partners": ["william-verdoold"] },
    { "code": "william-verdoold", "naam": "William Verdoold", "tag": "kerk", "partners": ["rachel-verdoold"] },
    { "code": "naomi-de-ruiter", "naam": "Naomi de Ruiter", "tag": "kerk", "partners": ["peter-de-ruiter"] },
    { "code": "peter-de-ruiter", "naam": "Peter de Ruiter", "tag": "kerk", "partners": ["naomi-de-ruiter"] },
    { "code": "sten-smit", "naam": "Sten Smit", "tag": "kerk" },
    { "code": "david-geraedts", "naam": "David Geraedts", "tag": "kerk" },
    { "code": "luz-nebbeling", "naam": "Luz Nebbeling", "tag": "kerk" },
    { "code": "esther-veldkamp", "naam": "Esther Veldkamp", "tag": "kerk" },
    { "code": "robert-jan-nijland", "naam": "Robert-Jan Nijland", "tag": "kerk" },
    { "code": "koos-van-beelen", "naam": "Koos van Beelen", "tag": "kerk" },
    { "code": "adriana-paeper", "naam": "Adriana Paeper", "tag": "kerk" },
    { "code": "evert-veenendaal", "naam": "Evert Veenendaal", "tag": "kerk" },
    { "code": "arjan", "naam": "Arjan", "tag": "kerk", "looseName": true },
    { "code": "lia-van-westen", "naam": "Lia van Westen", "tag": "kerk" },
    { "code": "kim", "naam": "Kim", "tag": "kerk", "looseName": true },
    { "code": "maarten-atsma", "naam": "Maarten Atsma", "tag": "kerk" },
    { "code": "karin", "naam": "Karin", "tag": "kerk", "looseName": true },
    { "code": "janneke-wolters", "naam": "Janneke Wolters", "tag": "kerk" },
    { "code": "judith-van-den-berg", "naam": "Judith van den Berg", "tag": "kerk" },
    { "code": "robin", "naam": "Robin", "tag": "kerk", "looseName": true },
    { "code": "yvonne-teitsma", "naam": "Yvonne Teitsma", "tag": "kerk" },
    { "code": "martijn-horsman", "naam": "Martijn Horsman", "tag": "kerk", "looseName": true },
    { "code": "sonja-den-dikken", "naam": "Sonja den Dikken", "tag": "kerk", "partners": ["arjen-den-dikken"] },
    { "code": "arjen-den-dikken", "naam": "Arjen den Dikken", "tag": "kerk", "partners": ["sonja-den-dikken"] },
    { "code": "henriette-eijkelenboom", "naam": "Henriëtte Eijkelenboom", "tag": "kerk", "partners": ["gerard-eijkelenboom"] },
    { "code": "gerard-eijkelenboom", "naam": "Gerard Eijkelenboom", "tag": "kerk", "partners": ["henriette-eijkelenboom"] },
    { "code": "henriet-baas", "naam": "Henriët Baas", "tag": "kerk", "partners": ["dick-baas"] },
    { "code": "dick-baas", "naam": "Dick Baas", "tag": "kerk", "partners": ["henriet-baas"] }
  ];
 
  var CONTENT = {
    coupleNames: ["Esther","Martijn"],
    weddingDateISO: "2027-05-22T15:00:00+02:00",
    welcomeText: "Wij gaan trouwen!? Wat de flip!! Hoe fijn dat wij ons grote feest met jou mogen vieren! Hier lees je meer over wat de dag inhoudt — en vergeet niet te RSVP’en :)",
    rsvpDeadlineText: "Laat het ons alsjeblieft vóór 22 maart 2027 weten!",
    programmeNote: "De tijden van het programma zijn nog niet volledig definitief. Hou deze pagina dus voor de bruiloft in de gaten voor de juiste tijden!",
    coupleNote: "Zijn jij en je partner beide uitgenodigd? Zorg er dan voor dat je beide inlogt met je naam en RSVP't zodat voor ons duidelijk is dat jullie beiden komen. Dankjewel!",
    tagLabels: {
      stadhuis: "Alle festiviteiten!",
      dag: "Diner, kerk en receptie!",
      kerkreceptie: "Kerk + receptie",
      kerk: "Kerk"
    },
    tagAttends: {
      stadhuis: ["stadhuis","diner","kerk","receptie"],
      dag: ["diner","kerk","receptie"],
      kerkreceptie: ["kerk","receptie"],
      kerk: ["kerk"]
    },
    eventLabels: {
      stadhuis: "het stadhuis",
      diner: "het diner op vrijdagavond",
      kerk: "de kerkdienst",
      receptie: "de borrel & het feest"
    },
    foodEvents: ["diner","receptie"],
    programme: [
      { day: "Vrijdag 21 mei 2027", items: [
        { key:"stadhuis", time:"14:00", title:"Stadhuis", place:"Stadsloket Centrum", address:"Amstel 1, 1011 PN Amsterdam", note:"#yolo trouwen voor de wet!!" },
        { key:"diner", time:"18:00", title:"Diner", place:"Westerwijk", address:"Admiraal de Ruijterweg 150, 1056 GV Amsterdam", note:"Een diner met al onze lieve vrienden en familie." }
      ]},
      { day: "Zaterdag 22 mei 2027", items: [
        { key:"kerk", time:"14:00 – 15:30", title:"Kerkdienst", place:"Keizersgrachtkerk", address:"Keizersgracht 566, 1017 EM Amsterdam", note:"De kerkdienst waar ons huwelijk zal worden ingezegend." },
        { key:"receptie", time:"18:00 - 24:00", title:"Borrel & feest", place:"Hoftuin", address:"Nieuwe Herengracht 18, Amsterdam", note:"Borrel, drankjes en dansen tot in de late uurtjes." }
      ]}
    ],
    faq: [
      { q:"Voor wanneer kan ik uiterlijk RSVP’en?", a:"Laat alsjeblieft vóór 22 maart 2027 weten of je komt!" },
      { q:"Hoe kom ik bij de kerk?", a:"1. Parkeer bij een P+R en reis met het OV de stad in.\n2. Huur een OV-fiets vanaf Amsterdam Centraal of Amstel station en fiets een minuutje of 15.", onlyIdentified:true },
      { q:"Hoe kom ik bij de receptielocatie?", a:"Vanaf de kerk loop je in ongeveer 20 minuten naar de receptielocatie. Geen zin om te lopen? Pak dan tram 1, 7 of 19 vanaf halte Rijksmuseum naar Weesperplein. Daarvandaan is het nog tien minuten lopen, of pak daar de metro richting Amsterdam centraal station en stap uit bij Waterlooplein.", onlyReceptie:true, onlyIdentified:true},
      { q:"Hoe bereik ik de ceremoniemeesters?", a:"Mail naar e.m.ceremoniemeesters27@gmail.com, dan nemen zij contact met je op." }
    ],
    faqUpdated: "laatste update 26 aug",
    giftIntro: "Jullie aanwezigheid is het mooiste cadeau dat we ons kunnen wensen!",
    giftBody: "Maar mocht je toch iets willen geven, dan hebben we een verlanglijstje.",
    contactTitle: "Contact met de ceremoniemeesters",
    contactIntro: "Heb je vragen voor de ceremoniemeesters? Laat het hieronder weten, dan nemen zij contact met je op."
  };
 
  function el(html){ var t=document.createElement("template"); t.innerHTML=html.trim(); return t.content.firstElementChild; }
  function escapeHtml(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  function qs(name){ return new URLSearchParams(window.location.search).get(name); }
 
  function findGuestByCode(code){
    if(!code) return null;
    var m = GUESTS.filter(function(g){ return g.code === code; });
    return m[0] || null;
  }
  function normalizeName(s){
    return (s||"").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();
  }
  function findGuestByName(name){
    var norm = normalizeName(name);
    if(!norm) return null;
    var exact = GUESTS.filter(function(g){ return normalizeName(g.naam) === norm; });
    if(exact.length === 1) return exact[0];
    if(exact.length > 1) return null;
    // Fallback: voor gasten met looseName:true (naam gedeeltelijk onbekend), maakt het niet uit
    // wat iemand er verder nog achter typt -- we matchen zolang het begin overeenkomt.
    var loose = GUESTS.filter(function(g){
      if(!g.looseName) return false;
      var gNorm = normalizeName(g.naam);
      return norm === gNorm || norm.indexOf(gNorm + " ") === 0;
    });
    return loose.length === 1 ? loose[0] : null;
  }
 
  var previewTag = null; // when set (via ?preview=..., not shown in the UI), used to spot-check a tag's view
  var codeParam = qs("g");
  var isAdmin = qs("beheer") === "1";
  var storedGuestCode = null;
  try{ storedGuestCode = localStorage.getItem("em_guest_code"); }catch(e){}
  var currentGuest = findGuestByCode(codeParam) || (storedGuestCode ? findGuestByCode(storedGuestCode) : null);
  var previewParam = qs("preview");
  if(!currentGuest && previewParam && CONTENT.tagAttends[previewParam]) previewTag = previewParam;
 
  var ADMIN_UNLOCKED = false;
  var CURRENT_RESPONSE = null; // the signed-in guest's own previously-submitted RSVP, if any
  var PARTNER_STATUS = []; // [{code, naam, responded}] for the current guest's linked partners, if any
  var RESPONSES = []; // only populated for the admin overview, after password check
 
  function ringsSVG(){
    return '<svg class="rings" width="86" height="46" viewBox="0 0 86 46" fill="none" aria-hidden="true">'
      + '<circle cx="30" cy="26" r="16" stroke="'+"#bd5a2e"+'" stroke-width="2.5"/>'
      + '<circle cx="56" cy="26" r="16" stroke="'+"#276b5c"+'" stroke-width="2.5"/>'
      + '</svg>';
  }
  function sprigSVG(){
    return '<svg class="sprig" width="64" height="40" viewBox="0 0 64 40" fill="none" aria-hidden="true">'
      + '<path d="M32 38 C32 22 32 10 32 2" stroke="#276b5c" stroke-width="2" fill="none"/>'
      + '<path d="M32 10 C24 6 16 8 12 16 C20 18 27 16 32 10Z" fill="#bd5a2e" opacity="0.85"/>'
      + '<path d="M32 20 C40 16 48 18 52 26 C44 28 37 26 32 20Z" fill="#276b5c" opacity="0.85"/>'
      + '<path d="M32 30 C25 28 18 31 15 38 C23 39 29 36 32 30Z" fill="#bd5a2e" opacity="0.7"/>'
      + '</svg>';
  }
 
  function renderNameGate(idSuffix, heading){
    return '<div class="name-gate">'
      + '<p class="glabel">'+escapeHtml(heading || "Wie ben jij?")+'</p>'
      + '<p class="hint">Vul je voor- en achternaam in, zodat het programma en RSVP formulier zichtbaar wordt.</p>'
      + '<form class="name-gate-form" data-ctx="'+idSuffix+'">'
      + '<input type="text" class="name-gate-input" placeholder="Voor- en achternaam" autocomplete="name">'
      + '<button type="submit" class="submit-btn">Bekijken</button>'
      + '<div class="err name-gate-err"></div>'
      + '</form></div>';
  }
 
  function fetchExistingResponse(code){
    return fetch("/api/rsvp?code=" + encodeURIComponent(code))
      .then(function(r){ return r.ok ? r.json() : null; })
      .then(function(data){ CURRENT_RESPONSE = (data && data.response) || null; })
      .catch(function(){ CURRENT_RESPONSE = null; });
  }
 
  function fetchPartnerStatuses(guest){
    if(!guest || !guest.partners || !guest.partners.length){ PARTNER_STATUS = []; return Promise.resolve(); }
    return Promise.all(guest.partners.map(function(code){
      var g = findGuestByCode(code);
      return fetch("/api/rsvp?code=" + encodeURIComponent(code))
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(data){
          return { code: code, naam: g ? g.naam : code, responded: !!(data && data.response) };
        })
        .catch(function(){ return { code: code, naam: g ? g.naam : code, responded: false }; });
    })).then(function(results){ PARTNER_STATUS = results; });
  }
 
  function renderPartnerNote(){
    if(!PARTNER_STATUS.length) return "";
    var missing = PARTNER_STATUS.filter(function(p){ return !p.responded; });
    if(!missing.length) return "";
    var names = missing.map(function(p){ return p.naam; });
    var namesText = names.length === 1 ? names[0] : (names.slice(0,-1).join(", ") + " en " + names[names.length-1]);
    var verb = names.length === 1 ? "moet" : "moeten";
    var pron = names.length === 1 ? "die" : "zij";
    return '<p class="hint partner-hint">Vergeet niet aan '+escapeHtml(namesText)+' door te geven dat '+pron+' ook nog '+verb+' RSVP\'en!</p>';
  }
 
  function wireNameGates(){
    document.querySelectorAll(".name-gate-form").forEach(function(form){
      form.addEventListener("submit", function(ev){
        ev.preventDefault();
        var input = form.querySelector(".name-gate-input");
        var errEl = form.querySelector(".name-gate-err");
        var btn = form.querySelector(".submit-btn");
        var match = findGuestByName(input.value);
        if(match){
          btn.disabled = true;
          Promise.all([fetchExistingResponse(match.code), fetchPartnerStatuses(match)]).finally(function(){
            currentGuest = match;
            previewTag = null;
            try{ localStorage.setItem("em_guest_code", match.code); }catch(e){}
            render();
            var target = document.getElementById("welkom");
            if(target) target.scrollIntoView({behavior:"smooth", block:"start"});
          });
        } else {
          errEl.textContent = "We kunnen deze naam niet vinden op de gastenlijst. Check de spelling, of neem contact op met Esther als je er niet uitkomt.";
        }
      });
    });
    var switchLink = document.getElementById("switch-guest");
    if(switchLink){
      switchLink.addEventListener("click", function(ev){
        ev.preventDefault();
        currentGuest = null;
        CURRENT_RESPONSE = null;
        PARTNER_STATUS = [];
        try{ localStorage.removeItem("em_guest_code"); }catch(e){}
        render();
      });
    }
  }
 
  function renderHero(){
    var target = new Date(CONTENT.weddingDateISO).getTime();
    var guestLine = "";
    if(currentGuest){
      guestLine = '<p class="guestbar"><span class="who">Welkom, '+escapeHtml(currentGuest.naam)+'</span><br>Wees welkom tijdens: <strong>'+escapeHtml(CONTENT.tagLabels[currentGuest.tag])+'</strong><br><a href="#" id="switch-guest" class="switch-link">Niet jouw naam? Klik hier</a></p>';
    } else {
      guestLine = renderNameGate("hero", "Wie ben jij?");
    }
    return '<section class="hero" id="welkom">'
      + '<div class="wrap">'
      + '<div class="hero-photo-wrap"><img class="duif-behind" src="'+IMAGES.logo+'" alt="" aria-hidden="true"><div class="hero-photo"><img src="'+IMAGES.hero+'" alt="Esther en Martijn"></div></div>'
      + '<div class="countdown" id="countdown" data-target="'+target+'"></div>'
      + '<p class="welcome-text">'+escapeHtml(CONTENT.welcomeText)+'</p>'
      + guestLine
      + '<div class="scroll-hint"><span>Blijf scrollen</span><span class="arrow">&darr;</span></div>'
      + '</div></section>';
  }
 
  function tickCountdown(){
    var cd = document.getElementById("countdown");
    if(!cd) return;
    var target = parseInt(cd.getAttribute("data-target"),10);
    var diff = Math.max(0, target - Date.now());
    var d = Math.floor(diff/86400000);
    var h = Math.floor(diff/3600000)%24;
    var m = Math.floor(diff/60000)%60;
    cd.innerHTML = [[d,"dagen"],[h,"uur"],[m,"min"]].map(function(p){
      return '<div><div class="num">'+p[0]+'</div><div class="lbl">'+p[1]+'</div></div>';
    }).join("");
  }
 
  var MONTH_NL = { januari:0, februari:1, maart:2, april:3, mei:4, juni:5, juli:6, augustus:7, september:8, oktober:9, november:10, december:11 };
  function parseDayString(day){
    var m = day.match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/i);
    if(!m) return null;
    var month = MONTH_NL[m[2].toLowerCase()];
    if(month === undefined) return null;
    return { y: parseInt(m[3],10), m: month, d: parseInt(m[1],10) };
  }
  function parseTimeRange(timeStr){
    var parts = String(timeStr||"").split(/[–-]/).map(function(s){ return s.trim(); });
    function toHM(t){
      var mm = t.match(/(\d{1,2}):(\d{2})/);
      return mm ? { h: parseInt(mm[1],10), m: parseInt(mm[2],10) } : null;
    }
    return { start: toHM(parts[0]), end: parts[1] ? toHM(parts[1]) : null };
  }
  function pad2(n){ return (n<10?"0":"")+n; }
  function fmtLocal(dt){
    return dt.getFullYear()+pad2(dt.getMonth()+1)+pad2(dt.getDate())+"T"+pad2(dt.getHours())+pad2(dt.getMinutes())+"00";
  }
  function fmtUTC(dt){
    return dt.getUTCFullYear()+pad2(dt.getUTCMonth()+1)+pad2(dt.getUTCDate())+"T"+pad2(dt.getUTCHours())+pad2(dt.getUTCMinutes())+pad2(dt.getUTCSeconds())+"Z";
  }
  function getEventTimes(day, item){
    var dateParts = parseDayString(day);
    var times = parseTimeRange(item.time);
    if(!dateParts || !times.start) return null;
    var start = new Date(dateParts.y, dateParts.m, dateParts.d, times.start.h, times.start.m, 0);
    var end;
    if(times.end){
      var endDay = dateParts.d, endH = times.end.h;
      if(endH === 24){ endH = 0; endDay += 1; }
      end = new Date(dateParts.y, dateParts.m, endDay, endH, times.end.m, 0);
    } else {
      end = new Date(start.getTime() + 2*60*60*1000);
    }
    return { start: start, end: end };
  }
  function buildCalendarUrl(day, item){
    var t = getEventTimes(day, item);
    if(!t) return null;
    var params = new URLSearchParams({
      action: "TEMPLATE",
      text: item.title,
      dates: fmtLocal(t.start)+"/"+fmtLocal(t.end),
      details: item.note || "",
      location: item.place + ", " + item.address,
      ctz: "Europe/Amsterdam"
    });
    return "https://www.google.com/calendar/render?" + params.toString();
  }
  function escapeICS(s){
    return String(s||"").replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n");
  }
  function utf8ToBase64(str){
    var bytes = new TextEncoder().encode(str);
    var binary = "";
    for(var i=0;i<bytes.length;i++){ binary += String.fromCharCode(bytes[i]); }
    return btoa(binary);
  }
  function buildIcsUrl(day, item){
    var t = getEventTimes(day, item);
    if(!t) return null;
    var uid = (item.key||"event")+"-"+fmtLocal(t.start)+"@estherenmartijn.com";
    var ics = "BEGIN:VCALENDAR\r\n"
      + "VERSION:2.0\r\n"
      + "PRODID:-//Esther en Martijn//Bruiloft//NL\r\n"
      + "CALSCALE:GREGORIAN\r\n"
      + "BEGIN:VEVENT\r\n"
      + "UID:"+uid+"\r\n"
      + "DTSTAMP:"+fmtUTC(new Date())+"\r\n"
      + "DTSTART:"+fmtLocal(t.start)+"\r\n"
      + "DTEND:"+fmtLocal(t.end)+"\r\n"
      + "SUMMARY:"+escapeICS(item.title)+"\r\n"
      + "LOCATION:"+escapeICS(item.place + ", " + item.address)+"\r\n"
      + "DESCRIPTION:"+escapeICS(item.note || "")+"\r\n"
      + "END:VEVENT\r\n"
      + "END:VCALENDAR\r\n";
    return "data:text/calendar;charset=utf-8;base64," + utf8ToBase64(ics);
  }
 
  function renderPhotoBand(){
    return '<div class="photo-band hero-band">'
      + '<img src="'+IMAGES.grid+'" alt="Esther en Martijn samen">'
      + '<div class="hero-band-overlay">'
      + '<p class="eyebrow">Wij gaan trouwen</p>'
      + '<h1 class="names script">'+CONTENT.coupleNames[0]+' <span class="amp">&amp;</span> '+CONTENT.coupleNames[1]+'</h1>'
      + '<p class="date hand">Zaterdag 22 mei 2027 &middot; Amsterdam</p>'
      + '</div></div>';
  }
 
  function renderProgramme(){
    var attends = currentGuest ? CONTENT.tagAttends[currentGuest.tag] : (previewTag ? CONTENT.tagAttends[previewTag] : null);
    var html = '<section id="programma"><div class="wrap">'
      + '<p class="eyebrow">Wat gaan we doen</p><h2 class="title">Programma</h2>'
      + '<p class="hint">'+escapeHtml(CONTENT.programmeNote)+'</p>';
    if(!attends){
      html += renderNameGate("programma", "Vul je naam in om je programma te zien");
      html += '</div></section>';
      return html;
    }
    CONTENT.programme.forEach(function(day){
      var visibleItems = day.items.filter(function(it){ return attends.indexOf(it.key) !== -1; });
      if(visibleItems.length === 0) return;
      html += '<h3 class="day-heading">'+day.day+'</h3><div class="tl">';
      visibleItems.forEach(function(it){
        var calUrl = buildCalendarUrl(day.day, it);
        var icsUrl = buildIcsUrl(day.day, it);
        html += '<div class="tl-item">'
          + '<div class="tl-time">'+it.time+'</div>'
          + '<div class="tl-title">'+it.title+'</div>'
          + '<div class="tl-place">'+it.place+'</div>'
          + '<div class="tl-address">'+it.address+'</div>'
          + '<div class="tl-note">'+it.note+'</div>'
          + '<div class="cal-links">'
          + (calUrl ? '<a class="cal-link" href="'+calUrl+'" target="_blank" rel="noopener">+ Google Agenda</a>' : '')
          + (icsUrl ? '<a class="cal-link" href="'+icsUrl+'" download="'+(it.key||"event")+'.ics">+ Apple / Outlook</a>' : '')
          + '</div>'
          + '</div>';
      });
      html += '</div>';
    });
    html += '</div></section>';
    return html;
  }
 
  function renderRsvpForm(guest){
    if(!guest){
      return '<section id="rsvp" class="band"><div class="wrap">'
        + '<p class="eyebrow">Ben je erbij?</p><h2 class="title">RSVP</h2>'
        + '<p class="hint">'+CONTENT.coupleNote+'</p>'
        + renderNameGate("rsvp", "Vul je naam in om te RSVP'en")
        + '<p class="hint">'+CONTENT.rsvpDeadlineText+'</p>'
        + '</div></section>';
    }
    var attends = CONTENT.tagAttends[guest.tag];
    var needsFood = attends.some(function(k){ return CONTENT.foodEvents.indexOf(k) !== -1; });
    var existing = CURRENT_RESPONSE;
    var toggles = attends.map(function(k){
      var val = existing && existing.attendance ? existing.attendance[k] : null;
      return '<div class="field"><label class="req">Kom je naar '+CONTENT.eventLabels[k]+'?</label>'
        + '<div class="toggle-row" data-event="'+k+'">'
        + '<button type="button" data-val="yes" class="'+(val==="yes"?"active-yes":"")+'">Ja, ik kom!</button>'
        + '<button type="button" data-val="no" class="'+(val==="no"?"active-no":"")+'">Helaas, ik kan niet</button>'
        + '</div></div>';
    }).join("");
    var dietField = needsFood ? '<div class="field"><label for="f-diet">Dieetwensen / allergieën (optioneel)</label>'
      + '<input type="text" id="f-diet" placeholder="bijv. vegetarisch, notenallergie, geen" value="'+escapeHtml(existing?existing.diet:"")+'"></div>' : "";
    return '<section id="rsvp" class="band"><div class="wrap">'
      + '<p class="eyebrow">Doe je mee?</p><h2 class="title">RSVP</h2>'
      + '<p class="hint">'+CONTENT.coupleNote+'</p>'
      + '<p class="hint">'+CONTENT.rsvpDeadlineText+'</p>'
      + renderPartnerNote()
      + '<form class="card" id="rsvp-form" novalidate>'
      + '<p class="glabel">Naam</p><p style="margin-top:-8px;font-weight:700;">'+escapeHtml(guest.naam)+'</p>'
      + toggles
      + dietField
      + '<div class="field"><label for="f-msg">Vragen, opmerkingen, of wat te melden aan het bruidspaar? Laat hier een berichtje achter.</label>'
      + '<textarea id="f-msg" placeholder="optioneel">'+escapeHtml(existing?existing.bericht:"")+'</textarea></div>'
      + '<div class="field"><label for="f-fun">Voor de lol: waar moeten wij heen op huwelijksreis?</label>'
      + '<input type="text" id="f-fun" placeholder="optioneel, alle tips welkom" value="'+escapeHtml(existing?existing.honeymoon:"")+'"></div>'
      + '<div class="field"><label for="f-song">Voor de lol: welk nummer moet er zeker op de dansvloer gedraaid worden?</label>'
      + '<input type="text" id="f-song" placeholder="optioneel" value="'+escapeHtml(existing?existing.song:"")+'"></div>'
      + '<button type="submit" class="submit-btn">RSVP versturen</button>'
      + '<div class="form-msg" id="form-msg" role="status"></div>'
      + '</form>'
      + '</div></section>';
  }
 
  function renderRsvpPhoto(){
    if(!guestAttendsReceptie()) return "";
    return '<div class="photo-band"><img src="IMG_4696.jpeg" alt="Esther en Martijn op de schommel"></div>';
  }
 
 function guestAttendsReceptie(){
    var tag = currentGuest ? currentGuest.tag : previewTag;
    if(!tag) return true;
    return CONTENT.tagAttends[tag] && CONTENT.tagAttends[tag].indexOf("receptie") !== -1;
  }
 
  function renderContact(){
    if(!guestAttendsReceptie()) return "";
    return '<section id="contact" class="band"><div class="wrap">'
      + '<p class="eyebrow">Wil je nog iets kwijt?</p><h2 class="title">'+escapeHtml(CONTENT.contactTitle)+'</h2>'
      + '<p class="hint">'+escapeHtml(CONTENT.contactIntro)+'</p>'
      + '<form class="card" id="contact-form" novalidate>'
      + '<div class="field"><label class="req" for="c-email">E-mailadres</label>'
      + '<input type="email" id="c-email" placeholder="jij@voorbeeld.nl"></div>'
      + '<div class="field"><label for="c-phone">Telefoonnummer (optioneel)</label>'
      + '<input type="tel" id="c-phone" placeholder="optioneel"></div>'
      + '<div class="field"><label class="req" for="c-message">Je bericht</label>'
      + '<textarea id="c-message" placeholder="Waar kunnen we je mee helpen?"></textarea></div>'
      + '<button type="submit" class="submit-btn">Versturen</button>'
      + '<div class="form-msg" id="contact-msg" role="status"></div>'
      + '</form>'
      + '</div></section>';
  }
 
  function renderFaq(){
    var visibleFaq = CONTENT.faq.filter(function(f){
      if(f.onlyReceptie && !guestAttendsReceptie()) return false;
      if(f.onlyIdentified && !currentGuest && !previewTag) return false;
      return true;
    });
    var items = visibleFaq.map(function(f,i){
      return '<div class="faq-item" data-open="false" data-i="'+i+'">'
        + '<button type="button" class="faq-q"><span>'+escapeHtml(f.q)+'</span><span class="plus">+</span></button>'
        + '<div class="faq-a">'+escapeHtml(f.a)+'</div></div>';
    }).join("");
    return '<section id="faq" class="band">'
      + '<div class="photo-band"><img src="'+IMAGES.vangogh+'" alt="Esther en Martijn"></div>'
      + '<div class="wrap">'
      + '<p class="eyebrow">Overige informatie</p><h2 class="title">Veelgestelde vragen</h2>'
      + '<p class="faq-updated">'+escapeHtml(CONTENT.faqUpdated)+'</p>'
      + items
      + '</div></section>';
  }
 
  function renderGifts(){
    return '<section id="cadeau" class="band">'
      + '<div class="photo-band"><img src="'+IMAGES.vintage+'" alt="Esther en Martijn, oude foto’s"></div>'
      + '<div class="wrap" style="text-align:center;">'
      + '<h2 class="title">Cadeauwensen</h2>'
      + '<p class="prose" style="margin:0 auto;">'+escapeHtml(CONTENT.giftIntro)+' '+escapeHtml(CONTENT.giftBody)+'</p>'
      + '<p class="prose" style="margin:14px auto 0;"><a href="https://www.lijstje.nl/MartijnenEsther27" target="_blank" rel="noopener">Bekijk ons verlanglijstje</a></p>'
      + '</div></section>';
  }
 
  function renderFooter(){
    return '<footer><div class="wrap">Tot op 21 &amp; 22 mei 2027! &mdash; '+CONTENT.coupleNames[0]+' &amp; '+CONTENT.coupleNames[1]
      + '<br><span class="hint">Deze website wordt regelmatig bijgewerkt, kom nog eens terug voor de laatste updates.</span>'
      + '<br><a href="?beheer=1">voor het bruidspaar</a></div></footer>';
  }
 
  function renderAdmin(){
    var counts = { stadhuis:0, dag:0, kerkreceptie:0, kerk:0 };
    RESPONSES.forEach(function(r){
      var g = findGuestByCode(r.code);
      if(g && counts.hasOwnProperty(g.tag)) counts[g.tag]++;
    });
    var totalPersonen = RESPONSES.reduce(function(sum,r){
      var anyYes = r.attendance && Object.keys(r.attendance).some(function(k){ return r.attendance[k]==="yes"; });
      return sum + (anyYes ? (parseInt(r.aantal,10)||0) : 0);
    },0);
    var rows = RESPONSES.map(function(r){
      var g = findGuestByCode(r.code) || {naam:r.code, tag:"?"};
      var att = r.attendance ? Object.keys(r.attendance).map(function(k){ return k+": "+r.attendance[k]; }).join(", ") : "";
      return '<tr><td>'+escapeHtml(g.naam)+'</td><td>'+escapeHtml(CONTENT.tagLabels[g.tag]||g.tag)+'</td><td>'+escapeHtml(att)+'</td>'
        + '<td>'+escapeHtml(r.aantal)+'</td><td>'+escapeHtml(r.diet||"")+'</td><td>'+escapeHtml(r.bericht||"")+'</td><td>'+escapeHtml(r.honeymoon||"")+'</td><td>'+escapeHtml(r.song||"")+'</td></tr>';
    }).join("");
    return '<section class="admin-wrap"><div class="wrap" style="max-width:1000px;">'
      + '<p class="eyebrow">Alleen voor het bruidspaar</p><h2 class="title">RSVP-overzicht</h2>'
      + '<div class="stat-row">'
      + '<div class="stat"><div class="n">'+RESPONSES.length+'</div><div class="l">Reacties</div></div>'
      + '<div class="stat"><div class="n">'+totalPersonen+'</div><div class="l">Personen totaal</div></div>'
      + '<div class="stat"><div class="n">'+counts.stadhuis+'</div><div class="l">Stadhuis</div></div>'
      + '<div class="stat"><div class="n">'+counts.dag+'</div><div class="l">Daggasten</div></div>'
      + '<div class="stat"><div class="n">'+counts.kerkreceptie+'</div><div class="l">Kerk+receptie</div></div>'
      + '<div class="stat"><div class="n">'+counts.kerk+'</div><div class="l">Alleen kerk</div></div>'
      + '</div>'
      + '<p style="margin-bottom:18px;"><button type="button" id="export-csv-btn" class="submit-btn">Download overzicht (CSV)</button> <span class="hint" id="export-msg" style="margin-left:10px;"></span></p>'
      + '<div class="admin-scroll"><table class="admin-table"><thead><tr><th>Naam</th><th>Groep</th><th>Aanwezig bij</th><th>Aantal</th><th>Dieet</th><th>Berichtje</th><th>Huwelijksreis-tip</th><th>Muziekwens</th></tr></thead><tbody>'
      + (rows || '<tr><td colspan="8">Nog geen reacties.</td></tr>')
      + '</tbody></table></div>'
      + '<p class="hint" style="margin-top:20px;"><a href="./">&larr; Terug naar de site</a></p>'
      + '</div></section>';
  }
 
  function csvEscape(val){
    var s = (val === null || val === undefined) ? "" : String(val);
    if(/[",\n\r]/.test(s)){
      s = '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }
 
  function buildResponsesCsv(){
    var header = ["Naam","Groep","Aanwezig bij","Aantal","Dieet","Berichtje","Huwelijksreis-tip","Muziekwens","Ingevuld op"];
    var lines = [header.map(csvEscape).join(",")];
    RESPONSES.forEach(function(r){
      var g = findGuestByCode(r.code) || {naam:r.code, tag:"?"};
      var att = r.attendance ? Object.keys(r.attendance).map(function(k){ return k+": "+r.attendance[k]; }).join("; ") : "";
      var when = r.submittedAt ? new Date(r.submittedAt).toLocaleString("nl-NL") : "";
      var row = [
        g.naam,
        CONTENT.tagLabels[g.tag] || g.tag,
        att,
        r.aantal,
        r.diet || "",
        r.bericht || "",
        r.honeymoon || "",
        r.song || "",
        when
      ];
      lines.push(row.map(csvEscape).join(","));
    });
    return lines.join("\r\n");
  }
 
  function downloadResponsesCsv(msgEl){
    try{
      var csv = "﻿" + buildResponsesCsv();
      var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "rsvp-overzicht.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function(){ URL.revokeObjectURL(url); }, 1000);
      if(msgEl) msgEl.textContent = "Gedownload!";
    }catch(e){
      if(msgEl) msgEl.textContent = "Downloaden lukte niet, probeer het nog eens.";
    }
  }
 
  function wireAdminExport(){
    var btn = document.getElementById("export-csv-btn");
    if(!btn) return;
    btn.addEventListener("click", function(){
      downloadResponsesCsv(document.getElementById("export-msg"));
    });
  }
 
  function wireContact(){
    var form = document.getElementById("contact-form");
    if(!form) return;
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var msgEl = document.getElementById("contact-msg");
      var btn = form.querySelector(".submit-btn");
      var email = document.getElementById("c-email").value.trim();
      var telefoon = document.getElementById("c-phone").value.trim();
      var bericht = document.getElementById("c-message").value.trim();
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if(!emailOk || !bericht){
        msgEl.textContent = "Vul een geldig e-mailadres en een bericht in.";
        msgEl.className = "form-msg err";
        return;
      }
      btn.disabled = true;
      msgEl.textContent = "Bezig met versturen…";
      msgEl.className = "form-msg";
      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: currentGuest ? currentGuest.code : "",
          naam: currentGuest ? currentGuest.naam : "",
          email: email,
          telefoon: telefoon,
          bericht: bericht
        })
      }).then(function(r){
        return r.ok;
      }).then(function(ok){
        btn.disabled = false;
        if(ok){
          form.reset();
          msgEl.textContent = "Bedankt! Je bericht is verstuurd.";
          msgEl.className = "form-msg ok";
        } else {
          msgEl.textContent = "Versturen lukte niet. Probeer het zo nog eens.";
          msgEl.className = "form-msg err";
        }
      }).catch(function(){
        btn.disabled = false;
        msgEl.textContent = "Versturen lukte niet (geen verbinding). Probeer het zo nog eens.";
        msgEl.className = "form-msg err";
      });
    });
  }
 
  function renderAdminGate(){
    return '<div class="admin-gate">'
      + '<p class="glabel">Alleen voor het bruidspaar</p>'
      + '<p class="hint">Hey nieuwsgierig aagje, je hebt het geheime gedeelte gevonden. Het staat je vrij om wat wachtwoorden te proberen, maar ik kan je vertellen: wat hierna komt is heel saai.</p>'
      + '<form id="admin-gate-form">'
      + '<input type="password" id="admin-pw" placeholder="Wachtwoord" autocomplete="off">'
      + '<button type="submit" class="submit-btn">Bekijken</button>'
      + '<div class="err" id="admin-gate-err"></div>'
      + '</form>'
      + '<p style="margin-top:16px;"><a href="javascript:history.back()" class="switch-link">← Terug naar de site</a></p>'
      + '</div>';
  }
 
  function wireAdminGate(){
    var form = document.getElementById("admin-gate-form");
    if(!form) return;
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var val = document.getElementById("admin-pw").value;
      var errEl = document.getElementById("admin-gate-err");
      var btn = form.querySelector(".submit-btn");
      btn.disabled = true;
      errEl.textContent = "";
      fetch("/api/responses", { headers: { "X-Admin-Password": val } })
        .then(function(r){
          if(!r.ok) throw new Error("unauthorized");
          return r.json();
        })
        .then(function(data){
          RESPONSES = (data && data.responses) || [];
          ADMIN_UNLOCKED = true;
          var app = document.getElementById("app");
          app.innerHTML = '<div style="padding-top:24px;">'+renderAdmin()+'</div>';
          wireAdminExport();
        })
        .catch(function(){
          btn.disabled = false;
          errEl.textContent = "Dat wachtwoord klopt niet (of er ging iets mis bij het ophalen).";
        });
    });
  }
 
  var scrollSpyObserver = null;
  function wireScrollSpy(){
    if(scrollSpyObserver){ scrollSpyObserver.disconnect(); scrollSpyObserver = null; }
    if(!("IntersectionObserver" in window)) return;
    var navLinks = document.querySelectorAll(".nav-inner a");
    if(!navLinks.length) return;
    var pairs = [];
    navLinks.forEach(function(link){
      var id = (link.getAttribute("href") || "").replace("#", "");
      var section = id ? document.getElementById(id) : null;
      if(section) pairs.push({ link: link, section: section });
    });
    if(!pairs.length) return;
    function setActive(id){
      pairs.forEach(function(p){
        p.link.classList.toggle("active-link", p.section.id === id);
      });
    }
    scrollSpyObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
    pairs.forEach(function(p){ scrollSpyObserver.observe(p.section); });
  }
 
  function render(){
    var app = document.getElementById("app");
    var navEl = document.querySelector(".nav");
    if(isAdmin){
      if(navEl) navEl.style.display = "none";
      if(!ADMIN_UNLOCKED){
        app.innerHTML = renderAdminGate();
        wireAdminGate();
      } else {
        app.innerHTML = '<div style="padding-top:24px;">'+renderAdmin()+'</div>';
        wireAdminExport();
      }
      return;
    }
    if(navEl) navEl.style.display = "";
    var guest = currentGuest || (previewTag ? { code:"__preview__", naam:"Voorbeeldgast", tag:previewTag } : null);
    app.innerHTML = renderPhotoBand() + renderHero() + renderProgramme() + renderRsvpForm(guest) + renderRsvpPhoto() + renderContact() + renderFaq() + renderGifts() + renderFooter();
    tickCountdown();
    wireInteractions(guest);
    wireScrollSpy();
  }
 
  function wireInteractions(guest){
    wireNameGates();
    document.querySelectorAll(".faq-item").forEach(function(item){
      item.querySelector(".faq-q").addEventListener("click", function(){
        var open = item.getAttribute("data-open") === "true";
        document.querySelectorAll(".faq-item").forEach(function(i){ i.setAttribute("data-open","false"); });
        item.setAttribute("data-open", open ? "false" : "true");
      });
    });
    wireContact();
    var form = document.getElementById("rsvp-form");
    if(!form || !guest || guest.code === "__preview__") return;
 
    var attendance = {};
    form.querySelectorAll(".toggle-row").forEach(function(row){
      var evKey = row.getAttribute("data-event");
      row.querySelectorAll("button").forEach(function(btn){
        if(btn.classList.contains("active-yes")) attendance[evKey] = "yes";
        if(btn.classList.contains("active-no")) attendance[evKey] = "no";
        btn.addEventListener("click", function(){
          attendance[evKey] = btn.getAttribute("data-val");
          row.querySelectorAll("button").forEach(function(b){ b.classList.remove("active-yes","active-no"); });
          btn.classList.add(btn.getAttribute("data-val")==="yes" ? "active-yes" : "active-no");
        });
      });
    });
 
    form.addEventListener("submit", function(ev){
      ev.preventDefault();
      var msgEl = document.getElementById("form-msg");
      var attends = CONTENT.tagAttends[guest.tag];
      var missing = attends.some(function(k){ return !attendance[k]; });
      if(missing){
        msgEl.textContent = "Beantwoord voor elk onderdeel of je wel of niet komt.";
        msgEl.className = "form-msg err";
        return;
      }
      var anyYes = attends.some(function(k){ return attendance[k]==="yes"; });
      var dietEl = document.getElementById("f-diet");
      var response = {
        code: guest.code,
        attendance: attendance,
        aantal: anyYes ? 1 : 0,
        diet: dietEl ? dietEl.value.trim() : "",
        bericht: document.getElementById("f-msg").value.trim(),
        honeymoon: document.getElementById("f-fun").value.trim(),
        song: document.getElementById("f-song").value.trim(),
        submittedAt: Date.now()
      };
 
      var submitBtn = form.querySelector(".submit-btn");
      submitBtn.disabled = true;
      msgEl.textContent = "Bezig met versturen…";
      msgEl.className = "form-msg";
 
      fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(response)
      }).then(function(r){
        return r.ok;
      }).then(function(ok){
        submitBtn.disabled = false;
        if(ok){
          CURRENT_RESPONSE = response;
          msgEl.textContent = "Bedankt! Jullie RSVP is opgeslagen.";
          msgEl.className = "form-msg ok";
        } else {
          msgEl.textContent = "Opslaan lukte niet. Probeer het zo nog eens.";
          msgEl.className = "form-msg err";
        }
      }).catch(function(){
        submitBtn.disabled = false;
        msgEl.textContent = "Opslaan lukte niet (geen verbinding). Probeer het zo nog eens.";
        msgEl.className = "form-msg err";
      });
    });
  }
 
  function init(){
    if(currentGuest){
      Promise.all([fetchExistingResponse(currentGuest.code), fetchPartnerStatuses(currentGuest)]).finally(render);
    } else {
      render();
    }
  }
 
  init();
  setInterval(tickCountdown, 30000);
})();
 
