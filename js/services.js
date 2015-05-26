angular.module('myApp.services', [])

.factory('FarmaciasSrv', function(){
  
  var farmaciaActual = null;
    
  var farmacias =
	  [{
        "nombre": "ARMELLINI",
        "direccion": "Av. Central Y 31 Oeste",
        "grupo": "A"
    },
    {
        "nombre": "CABRERA",
        "direccion": "Av. Falcón 222",
        "grupo": "A"
    },
    {
        "nombre": "DIAMANTE",
        "direccion": "Belgrano Y Alvarez",
        "grupo": "A"
    },
    {
        "nombre": "FURLAN",
        "direccion": "9 De Julio 260",
        "grupo": "A"
    },
    {
        "nombre": "GONZALEZ PACIN",
        "direccion": "De La Nación 314",
        "grupo": "A"
    },
    {
        "nombre": "HECTOR LOPEZ",
        "direccion": "Maipú 749",
        "grupo": "A"
    },
    {
        "nombre": "CARRERA",
        "direccion": "Almafuerte Y España",
        "grupo": "B"
    },
    {
        "nombre": "COCCARO",
        "direccion": "Rivadavia 987 Bis",
        "grupo": "B"
    },
    {
        "nombre": "DEL PUEBLO",
        "direccion": "De La Nación 450",
        "grupo": "B"
    },
    {
        "nombre": "DOTTO",
        "direccion": "Pringles Y Alvear",
        "grupo": "B"
    },
    {
        "nombre": "MELONE",
        "direccion": "Pte. Perón 858",
        "grupo": "B"
    },
    {
        "nombre": "TALJAME",
        "direccion": "Alberdi 346",
        "grupo": "B"
    },
    {
        "nombre": "AMEFARMA SCS",
        "direccion": "Mitre 200",
        "grupo": "C"
    },
    {
        "nombre": "GARETTO",
        "direccion": "Av. Morteo Y España",
        "grupo": "C"
    },
    {
        "nombre": "LILIANA LATORRE",
        "direccion": "Ameghino 347",
        "grupo": "C"
    },
    {
        "nombre": "PONCE",
        "direccion": "Juramento 1445",
        "grupo": "C"
    },
    {
        "nombre": "RASETTO",
        "direccion": "Viale 401",
        "grupo": "C"
    },
    {
        "nombre": "SAN NICOLAS",
        "direccion": "Cochabamba 357",
        "grupo": "C"
    },
    {
        "nombre": "BOFFA",
        "direccion": "Av. Savio 1142",
        "grupo": "C"
    },
    {
        "nombre": "CEJ",
        "direccion": "Maipú 495",
        "grupo": "D"
    },
    {
        "nombre": "DE LOS ARROYOS",
        "direccion": "De La Nación 102",
        "grupo": "D"
    },
    {
        "nombre": "LOMBARDI",
        "direccion": "Alberdi 548",
        "grupo": "D"
    },
    {
        "nombre": "PORTA",
        "direccion": "Av. Savio 124",
        "grupo": "D"
    },
    {
        "nombre": "ROMERO",
        "direccion": "Pte. Perón 1648",
        "grupo": "D"
    },
    {
        "nombre": "ALMADA",
        "direccion": "Maipú Y J. B. Justo",
        "grupo": "E"
    },
    {
        "nombre": "CATALAN",
        "direccion": "Almafuerte 442",
        "grupo": "E"
    },
    {
        "nombre": "DE LA TORRE",
        "direccion": "Av. A. Illia 643",
        "grupo": "E"
    },
    {
        "nombre": "GIRARDI",
        "direccion": "Av. Savio 1634",
        "grupo": "E"
    },
    {
        "nombre": "HENRICH",
        "direccion": "9 De Julio 63",
        "grupo": "E"
    },
    {
        "nombre": "TONON",
        "direccion": "Garibaldi 668",
        "grupo": "E"
    },
    {
        "nombre": "CANTONDEBAT",
        "direccion": "Brown 598",
        "grupo": "F"
    },
    {
        "nombre": "CAVARA",
        "direccion": "Italia Y Necochea",
        "grupo": "F"
    },
    {
        "nombre": "FENIX",
        "direccion": "Garibaldi 281",
        "grupo": "F"
    },
    {
        "nombre": "FRATTINI",
        "direccion": "Moreno 108",
        "grupo": "F"
    },
    {
        "nombre": "PRAT",
        "direccion": "Pte. Peron 1093",
        "grupo": "F"
    },
    {
        "nombre": "RIVADAVIA ",
        "direccion": "Rivadavia 724",
        "grupo": "F"
    },
    {
        "nombre": "ZONTA",
        "direccion": "Urquiza 422",
        "grupo": "F"
    },
    {
        "nombre": "BARBOTTI",
        "direccion": "Bolivar 351",
        "grupo": "G"
    },
    {
        "nombre": "BRASESCO",
        "direccion": "Av. Savio Y Pombo",
        "grupo": "G"
    },
    {
        "nombre": "CESARI",
        "direccion": "De La Nación 183",
        "grupo": "G"
    },
    {
        "nombre": "CONDE",
        "direccion": "De La Nación 703",
        "grupo": "G"
    },
    {
        "nombre": "GARAGUSO",
        "direccion": "Belgrano 320",
        "grupo": "G"
    },
    {
        "nombre": "PRINA",
        "direccion": "Av. Arturo Ilia 739",
        "grupo": "G"
    },
    {
        "nombre": "BLANCO",
        "direccion": "Almafuerte Y Benitez",
        "grupo": "H"
    },
    {
        "nombre": "CORREA ",
        "direccion": "Italia 38",
        "grupo": "H"
    },
    {
        "nombre": "DONATELLI",
        "direccion": "Urquiza 499",
        "grupo": "H"
    },
    {
        "nombre": "GAGLIARDO",
        "direccion": "Pte. Perón 1035",
        "grupo": "H"
    },
    {
        "nombre": "SALVADOR",
        "direccion": "Moreno 220",
        "grupo": "H"
    },
    {
        "nombre": "TIONI",
        "direccion": "Rademil Y Alvear",
        "grupo": "H"
    },
    {
        "nombre": "TROFFE",
        "direccion": "Av. Savio 238",
        "grupo": "H"
    },
    {
        "nombre": "CENTRO",
        "direccion": "Don Bosco Y Pellegrini",
        "grupo": "I"
    },
    {
        "nombre": "CIMINARI",
        "direccion": "Alberdi 699",
        "grupo": "I"
    },
    {
        "nombre": "GARCIA",
        "direccion": "Belgrano 184",
        "grupo": "I"
    },
    {
        "nombre": "GOMEZ",
        "direccion": "Pte. Peron 1366",
        "grupo": "I"
    },
    {
        "nombre": "LEONE",
        "direccion": "Bolivar 1053",
        "grupo": "I"
    },
    {
        "nombre": "PZA. SARMIENTO ",
        "direccion": "España Y Rivadavia",
        "grupo": "I"
    },
    {
        "nombre": "TONELLO",
        "direccion": "Av. Falcón 651",
        "grupo": "F"
    },
    {
        "nombre": "ALLUCHON ",
        "direccion": "Olleros 55",
        "grupo": "J"
    },
    {
        "nombre": "BONGIORNO ",
        "direccion": "Francia Y Alberdi",
        "grupo": "J"
    },
    {
        "nombre": "BRACCO",
        "direccion": "Av. Savio 373",
        "grupo": "J"
    },
    {
        "nombre": "FLOREANI",
        "direccion": "Garibaldi Y Alem",
        "grupo": "J"
    },
    {
        "nombre": "PINASCO",
        "direccion": "Alvear 95",
        "grupo": "J"
    },
    {
        "nombre": "PRADO M.",
        "direccion": "Cernadas 110",
        "grupo": "J"
    },
    {
        "nombre": "ANDRADA",
        "direccion": "Av. Savio 601",
        "grupo": "K"
    },
    {
        "nombre": "LALLO",
        "direccion": "Balcarce 441",
        "grupo": "K"
    },
    {
        "nombre": "MARIA I. LOPEZ",
        "direccion": "L. Guruciaga 103",
        "grupo": "K"
    },
    {
        "nombre": "MARTINELLI",
        "direccion": "Av. Moreno 74",
        "grupo": "K"
    },
    {
        "nombre": "PALAU",
        "direccion": "Av. Central 2215",
        "grupo": "K"
    },
    {
        "nombre": "PERUGINI",
        "direccion": "Lavalle 618",
        "grupo": "K"
    },
    {
        "nombre": "RADIUM",
        "direccion": "De La Nación 352",
        "grupo": "K"
    },
    {
        "nombre": "BARONI",
        "direccion": "Av. Irigoyen 1272",
        "grupo": "L"
    },
    {
        "nombre": "CAPRA",
        "direccion": "Moreno 446",
        "grupo": "L"
    },
    {
        "nombre": "HEGOUABURU",
        "direccion": "Hegouaburu",
        "grupo": "L"
    },
    {
        "nombre": "MACCARONI",
        "direccion": "Av. Savio 717",
        "grupo": "L"
    },
    {
        "nombre": "MENNA",
        "direccion": "Rivadavia 501",
        "grupo": "L"
    },
    {
        "nombre": "PUCCIARELLI",
        "direccion": "Lavalle 215 Bis",
        "grupo": "L"
    }];
    
  function farmaciaList(){
      return farmacias;
  }
  
  function getFarmacia(){
    return farmaciaActual;
  }
  
  function setFarmacia(farmacia){
    return farmaciaActual = farmacia;
  }
  

  return { 
    list: farmaciaList,
    getFarmacia : getFarmacia,
    setFarmacia : setFarmacia
    };
});