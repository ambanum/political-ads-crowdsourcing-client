import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_ADS } from 'containers/App/constants';
import { adsLoaded, adsLoadingError } from 'containers/App/actions';

export function* getAds() {
  try {
    const ads = mockData;
    yield put(adsLoaded(ads));
  } catch (err) {
    yield put(adsLoadingError(err));
  }
}

export default function* adsSaga() {
  yield takeLatest(LOAD_ADS, getAds);
}

const mockData = [
  {
    "ad_creation_time": "2019-05-13T15:30:04+0000",
    "ad_creative_body": "When we bring our full European potential together, we will be unbeatable! Let's accomplish what Europeans hope and wish for - our common success. To achieve that we must embrace #ThePowerOfWE before the #EP2019 elections on the 26 of May.🇪🇺We are #StrongerTogether 💪",
    "ad_creative_link_caption": "instagram.com",
    "ad_delivery_start_time": "2019-05-13T15:30:13+0000",
    "ad_delivery_stop_time": "2019-05-16T15:30:04+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=408322803338923&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.001114",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.024503",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.016707",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.072768",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.167255",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.098756",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.5155",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.046037",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.056618",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.000186",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.000371",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.000186",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "EPP - European People's Party",
    "impressions": {
      "lower_bound": "5000",
      "upper_bound": "9999"
    },
    "page_id": "48034275355",
    "page_name": "EPP - European People's Party",
    "region_distribution": [
      {
        "percentage": "0.0002",
        "region": "Cavan"
      },
      {
        "percentage": "0.000401",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.001002",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.0002",
        "region": "Békés County"
      },
      {
        "percentage": "0.000601",
        "region": "Baranya County"
      },
      {
        "percentage": "0.001804",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.001002",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.0002",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.000401",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000401",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.000802",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.001203",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.001203",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.0002",
        "region": "Alytus County"
      },
      {
        "percentage": "0.004812",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.002606",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.003408",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.004611",
        "region": "Presov"
      },
      {
        "percentage": "0.003208",
        "region": "Budapest"
      },
      {
        "percentage": "0.000802",
        "region": "Fejér County"
      },
      {
        "percentage": "0.003809",
        "region": "Košice Region"
      },
      {
        "percentage": "0.0002",
        "region": "Vas County"
      },
      {
        "percentage": "0.000802",
        "region": "Limassol District"
      },
      {
        "percentage": "0.001203",
        "region": "Larnaca District"
      },
      {
        "percentage": "0.002807",
        "region": "Kyrenia District"
      },
      {
        "percentage": "0.004812",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.013633",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.000601",
        "region": "Zala County"
      },
      {
        "percentage": "0.002205",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.000601",
        "region": "Tolna County"
      },
      {
        "percentage": "0.000802",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000802",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.001002",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.001804",
        "region": "Somogy County"
      },
      {
        "percentage": "0.002606",
        "region": "Pest County"
      },
      {
        "percentage": "0.000601",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.001002",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.001002",
        "region": "Heves County"
      },
      {
        "percentage": "0.002406",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.002807",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.005213",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.0002",
        "region": "Unknown"
      },
      {
        "percentage": "0.0002",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.001403",
        "region": "Hradec Králové Region"
      },
      {
        "percentage": "0.0002",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.000401",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000601",
        "region": "Varna Province"
      },
      {
        "percentage": "0.000401",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.000601",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.000401",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.000802",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.002406",
        "region": "South Moravian Region"
      },
      {
        "percentage": "0.0002",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.000401",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.000601",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.0002",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.001804",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.000601",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.0002",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.003007",
        "region": "Prague"
      },
      {
        "percentage": "0.002205",
        "region": "South Bohemian Region"
      },
      {
        "percentage": "0.002606",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.0002",
        "region": "Littoral–Inner Carniola Statistical Region"
      },
      {
        "percentage": "0.0002",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "0.000601",
        "region": "Upper Carniola Statistical Region"
      },
      {
        "percentage": "0.001203",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.0002",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.000401",
        "region": "Lower Sava Statistical Region"
      },
      {
        "percentage": "0.000401",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.0002",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.002005",
        "region": "Zlín Region"
      },
      {
        "percentage": "0.000802",
        "region": "Vysočina Region"
      },
      {
        "percentage": "0.001403",
        "region": "Ústí nad Labem Region"
      },
      {
        "percentage": "0.003007",
        "region": "Central Bohemian Region"
      },
      {
        "percentage": "0.000401",
        "region": "Plzeň Region"
      },
      {
        "percentage": "0.001002",
        "region": "Pardubice Region"
      },
      {
        "percentage": "0.001804",
        "region": "Moravian-Silesian Region"
      },
      {
        "percentage": "0.000601",
        "region": "Olomouc Region"
      },
      {
        "percentage": "0.000601",
        "region": "Liberec Region"
      },
      {
        "percentage": "0.000601",
        "region": "Karlovy Vary Region"
      },
      {
        "percentage": "0.000601",
        "region": "Paphos District"
      },
      {
        "percentage": "0.001002",
        "region": "Alba County"
      },
      {
        "percentage": "0.000401",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.001804",
        "region": "Lorraine"
      },
      {
        "percentage": "0.003007",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.003609",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.001804",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.001203",
        "region": "Picardie"
      },
      {
        "percentage": "0.001804",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.004411",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.003007",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.001002",
        "region": "Limousin"
      },
      {
        "percentage": "0.000401",
        "region": "Central Region"
      },
      {
        "percentage": "0.002005",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.004411",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.000802",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.001203",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.000601",
        "region": "Corse"
      },
      {
        "percentage": "0.001403",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.002205",
        "region": "Centre"
      },
      {
        "percentage": "0.000802",
        "region": "Alsace"
      },
      {
        "percentage": "0.0002",
        "region": "Harju County"
      },
      {
        "percentage": "0.001002",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.004611",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.0002",
        "region": "Saxony-Anhalt"
      },
      {
        "percentage": "0.001203",
        "region": "Sachsen"
      },
      {
        "percentage": "0.000401",
        "region": "Mecklenburg-Vorpommern"
      },
      {
        "percentage": "0.0002",
        "region": "Brandenburg"
      },
      {
        "percentage": "0.0002",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.000601",
        "region": "Saarland"
      },
      {
        "percentage": "0.0002",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000601",
        "region": "Niedersachsen"
      },
      {
        "percentage": "0.0002",
        "region": "Pärnu County"
      },
      {
        "percentage": "0.001403",
        "region": "Hessen"
      },
      {
        "percentage": "0.001203",
        "region": "Hamburg"
      },
      {
        "percentage": "0.003007",
        "region": "Bayern"
      },
      {
        "percentage": "0.004611",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.0002",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.001002",
        "region": "Semigallia"
      },
      {
        "percentage": "0.000601",
        "region": "Latgale"
      },
      {
        "percentage": "0.004411",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.002606",
        "region": "Bretagne"
      },
      {
        "percentage": "0.001203",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.001203",
        "region": "Arad County"
      },
      {
        "percentage": "0.000601",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.001002",
        "region": "Gorj County"
      },
      {
        "percentage": "0.001002",
        "region": "Galați County"
      },
      {
        "percentage": "0.002606",
        "region": "Dolj County"
      },
      {
        "percentage": "0.002406",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.001203",
        "region": "Covasna County"
      },
      {
        "percentage": "0.005413",
        "region": "Constanța County"
      },
      {
        "percentage": "0.004411",
        "region": "Cluj County"
      },
      {
        "percentage": "0.002005",
        "region": "Buzău County"
      },
      {
        "percentage": "0.000401",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.014836",
        "region": "Bucharest"
      },
      {
        "percentage": "0.001203",
        "region": "Brașov County"
      },
      {
        "percentage": "0.001203",
        "region": "Brăila County"
      },
      {
        "percentage": "0.000802",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.000401",
        "region": "Bistrița-Năsăud County"
      },
      {
        "percentage": "0.003208",
        "region": "Bihor County"
      },
      {
        "percentage": "0.001002",
        "region": "Bacău County"
      },
      {
        "percentage": "0.002205",
        "region": "Argeș County"
      },
      {
        "percentage": "0.001403",
        "region": "Harghita County"
      },
      {
        "percentage": "0.000401",
        "region": "Ialomița County"
      },
      {
        "percentage": "0.000401",
        "region": "Auvergne"
      },
      {
        "percentage": "0.002005",
        "region": "Suceava County"
      },
      {
        "percentage": "0.003809",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.000401",
        "region": "Giurgiu County"
      },
      {
        "percentage": "0.000401",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.000802",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.000401",
        "region": "Tulcea County"
      },
      {
        "percentage": "0.003208",
        "region": "Timiș County"
      },
      {
        "percentage": "0.001002",
        "region": "Teleorman County"
      },
      {
        "percentage": "0.000601",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.003408",
        "region": "Iași County"
      },
      {
        "percentage": "0.000601",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.000601",
        "region": "Sălaj County"
      },
      {
        "percentage": "0.002606",
        "region": "Prahova County"
      },
      {
        "percentage": "0.000601",
        "region": "Olt County"
      },
      {
        "percentage": "0.002005",
        "region": "Neamț County"
      },
      {
        "percentage": "0.002406",
        "region": "Mureș County"
      },
      {
        "percentage": "0.000601",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.001804",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.0002",
        "region": "Montana Province"
      },
      {
        "percentage": "0.0002",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.001002",
        "region": "County Cork"
      },
      {
        "percentage": "0.001403",
        "region": "Cantabria"
      },
      {
        "percentage": "0.004812",
        "region": "Extremadura"
      },
      {
        "percentage": "0.025662",
        "region": "Cataluña"
      },
      {
        "percentage": "0.007418",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.008621",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.017041",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.004812",
        "region": "Aragón"
      },
      {
        "percentage": "0.069366",
        "region": "Andalusia"
      },
      {
        "percentage": "0.006816",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.003408",
        "region": "País Vasco"
      },
      {
        "percentage": "0.002005",
        "region": "Navarra"
      },
      {
        "percentage": "0.010626",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.023857",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.000601",
        "region": "La Rioja"
      },
      {
        "percentage": "0.009022",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.0002",
        "region": "Overijssel"
      },
      {
        "percentage": "0.0002",
        "region": "Zuid-Holland"
      },
      {
        "percentage": "0.010024",
        "region": "Galicia"
      },
      {
        "percentage": "0.028669",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000802",
        "region": "Noord-Holland"
      },
      {
        "percentage": "0.000401",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "0.005213",
        "region": "Brussels"
      },
      {
        "percentage": "0.000401",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.000601",
        "region": "Region of Southern Denmark"
      },
      {
        "percentage": "0.000802",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "0.000401",
        "region": "Zealand Region"
      },
      {
        "percentage": "0.000802",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.0002",
        "region": "Satakunta"
      },
      {
        "percentage": "0.000401",
        "region": "Skåne County"
      },
      {
        "percentage": "0.0002",
        "region": "Gävleborg County"
      },
      {
        "percentage": "0.001002",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.0002",
        "region": "Västmanland County"
      },
      {
        "percentage": "0.0002",
        "region": "Västernorrland County"
      },
      {
        "percentage": "0.0002",
        "region": "Västerbotten County"
      },
      {
        "percentage": "0.0002",
        "region": "Södermanland County"
      },
      {
        "percentage": "0.0002",
        "region": "Östergötland County"
      },
      {
        "percentage": "0.0002",
        "region": "Jönköping County"
      },
      {
        "percentage": "0.0002",
        "region": "Jämtland County"
      },
      {
        "percentage": "0.000401",
        "region": "Utrecht"
      },
      {
        "percentage": "0.0002",
        "region": "North Brabant"
      },
      {
        "percentage": "0.011026",
        "region": "Wallonia"
      },
      {
        "percentage": "0.001002",
        "region": "County Louth"
      },
      {
        "percentage": "0.005613",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.000401",
        "region": "Wicklow"
      },
      {
        "percentage": "0.0002",
        "region": "Wexford"
      },
      {
        "percentage": "0.000401",
        "region": "County Westmeath"
      },
      {
        "percentage": "0.0002",
        "region": "County Offaly"
      },
      {
        "percentage": "0.000401",
        "region": "County Meath"
      },
      {
        "percentage": "0.0002",
        "region": "County Mayo"
      },
      {
        "percentage": "0.000401",
        "region": "Limerick"
      },
      {
        "percentage": "0.010225",
        "region": "Calabria"
      },
      {
        "percentage": "0.0002",
        "region": "County Laois"
      },
      {
        "percentage": "0.0002",
        "region": "Kilkenny"
      },
      {
        "percentage": "0.000601",
        "region": "Kildare"
      },
      {
        "percentage": "0.0002",
        "region": "Kerry"
      },
      {
        "percentage": "0.0002",
        "region": "Galway"
      },
      {
        "percentage": "0.005413",
        "region": "Dublin"
      },
      {
        "percentage": "0.0002",
        "region": "Donegal"
      },
      {
        "percentage": "0.003208",
        "region": "Basilicata"
      },
      {
        "percentage": "0.043905",
        "region": "Campania"
      },
      {
        "percentage": "0.000401",
        "region": "Limburg"
      },
      {
        "percentage": "0.026664",
        "region": "Sicilia"
      },
      {
        "percentage": "0.0002",
        "region": "Groningen"
      },
      {
        "percentage": "0.002005",
        "region": "Gelderland"
      },
      {
        "percentage": "0.000601",
        "region": "Friesland"
      },
      {
        "percentage": "0.01263",
        "region": "Veneto"
      },
      {
        "percentage": "0.003408",
        "region": "Umbria"
      },
      {
        "percentage": "0.001203",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.013232",
        "region": "Tuscany"
      },
      {
        "percentage": "0.009022",
        "region": "Sardinia"
      },
      {
        "percentage": "0.013031",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.032277",
        "region": "Puglia"
      },
      {
        "percentage": "0.011227",
        "region": "Piedmont"
      },
      {
        "percentage": "0.001403",
        "region": "Molise"
      },
      {
        "percentage": "0.005413",
        "region": "Marche"
      },
      {
        "percentage": "0.026664",
        "region": "Lombardia"
      },
      {
        "percentage": "0.005613",
        "region": "Liguria"
      },
      {
        "percentage": "0.022253",
        "region": "Lazio"
      },
      {
        "percentage": "0.002005",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.045509",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.011427",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.00401",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.000401",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.001002",
        "region": "Braganca"
      },
      {
        "percentage": "0.007418",
        "region": "Braga District"
      },
      {
        "percentage": "0.002406",
        "region": "Beja District"
      },
      {
        "percentage": "0.005213",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.002406",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.001002",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.003208",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.000401",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.002606",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.001403",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.000601",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.000401",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.001403",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.000401",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.001002",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.000601",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.000601",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.001403",
        "region": "Évora District"
      },
      {
        "percentage": "0.000802",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.001203",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.000401",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.000802",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.000802",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.002807",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.0002",
        "region": "Diekirch District"
      },
      {
        "percentage": "0.001804",
        "region": "Azores"
      },
      {
        "percentage": "0.003007",
        "region": "Viseu District"
      },
      {
        "percentage": "0.000802",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.002005",
        "region": "Faro District"
      },
      {
        "percentage": "0.005814",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.00421",
        "region": "Santarém District"
      },
      {
        "percentage": "0.016239",
        "region": "Porto District"
      },
      {
        "percentage": "0.000802",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.021051",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.003007",
        "region": "Leiria District"
      },
      {
        "percentage": "0.001002",
        "region": "Guarda District"
      },
      {
        "percentage": "0.002205",
        "region": "Madeira"
      },
      {
        "percentage": "0.000401",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.002205",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.000401",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.001002",
        "region": "Western Greece"
      },
      {
        "percentage": "0.001804",
        "region": "Tyrol"
      },
      {
        "percentage": "0.001403",
        "region": "Styria"
      },
      {
        "percentage": "0.000401",
        "region": "Salzburg"
      },
      {
        "percentage": "0.001403",
        "region": "Upper Austria"
      },
      {
        "percentage": "0.002005",
        "region": "Lower Austria"
      },
      {
        "percentage": "0.000601",
        "region": "Carinthia"
      },
      {
        "percentage": "0.001002",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.000802",
        "region": "Thessaly"
      },
      {
        "percentage": "0.006014",
        "region": "Vienna"
      },
      {
        "percentage": "0.001203",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.000601",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.000601",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.0002",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.002406",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.002807",
        "region": "Crete"
      },
      {
        "percentage": "0.00421",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.002005",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.001002",
        "region": "Vorarlberg"
      },
      {
        "percentage": "0.000401",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.001203",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.001804",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.0002",
        "region": "Skierniewice"
      },
      {
        "percentage": "0.005413",
        "region": "Zagreb"
      },
      {
        "percentage": "0.000401",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.000802",
        "region": "Zadar County"
      },
      {
        "percentage": "0.001002",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.000401",
        "region": "Virovitica-Podravina County"
      },
      {
        "percentage": "0.001203",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.001203",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.000802",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.0002",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.000601",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000401",
        "region": "Požega-Slavonia County"
      },
      {
        "percentage": "0.001203",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.000401",
        "region": "Međimurje County"
      },
      {
        "percentage": "0.000401",
        "region": "Krapina-Zagorje County"
      },
      {
        "percentage": "0.000802",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.000601",
        "region": "Istria County"
      },
      {
        "percentage": "0.000802",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T15:29:36+0000",
    "ad_creative_body": "#ThePowerOfWE is strong, smart and kind. Let’s accomplish what Europeans hope and wish for, and succeed together. Our candidate @manfred.weber has 12 priorities for a #BetterEurope. 🇪🇺 Which ones are the most important for your? Comment below ⬇️ #StrongerTogether",
    "ad_creative_link_caption": "instagram.com",
    "ad_creative_link_description": "10.9k Followers, 511 Following, 771 Posts - See Instagram photos and videos from European People's Party (@epp)",
    "ad_creative_link_title": "European People's Party (@epp) • Instagram photos and videos",
    "ad_delivery_start_time": "2019-05-13T15:29:36+0000",
    "ad_delivery_stop_time": "2019-05-15T18:29:20+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=693682157733107&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.000531",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.041563",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.029006",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.08012",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.080297",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.397948",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.173329",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.051999",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.143615",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.000531",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.000707",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.000354",
        "age": "45-54",
        "gender": "unknown"
      }
    ],
    "funding_entity": "EPP - European People's Party",
    "impressions": {
      "lower_bound": "5000",
      "upper_bound": "9999"
    },
    "page_id": "48034275355",
    "page_name": "EPP - European People's Party",
    "region_distribution": [
      {
        "percentage": "0.000184",
        "region": "Carlow"
      },
      {
        "percentage": "0.006249",
        "region": "Budapest"
      },
      {
        "percentage": "0.000551",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.001287",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.000551",
        "region": "Heves County"
      },
      {
        "percentage": "0.002022",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.002022",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000184",
        "region": "Fejér County"
      },
      {
        "percentage": "0.000735",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.00147",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.000735",
        "region": "Somogy County"
      },
      {
        "percentage": "0.000184",
        "region": "Békés County"
      },
      {
        "percentage": "0.001103",
        "region": "Baranya County"
      },
      {
        "percentage": "0.001103",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.000551",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.000184",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.000551",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000368",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.002757",
        "region": "Pest County"
      },
      {
        "percentage": "0.001838",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.000919",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.003676",
        "region": "Limassol District"
      },
      {
        "percentage": "0.000551",
        "region": "Bistrița-Năsăud County"
      },
      {
        "percentage": "0.000919",
        "region": "Bihor County"
      },
      {
        "percentage": "0.001103",
        "region": "Bacău County"
      },
      {
        "percentage": "0.001287",
        "region": "Argeș County"
      },
      {
        "percentage": "0.001654",
        "region": "Arad County"
      },
      {
        "percentage": "0.000551",
        "region": "Alba County"
      },
      {
        "percentage": "0.000735",
        "region": "Paphos District"
      },
      {
        "percentage": "0.002389",
        "region": "Larnaca District"
      },
      {
        "percentage": "0.000735",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.004411",
        "region": "Kyrenia District"
      },
      {
        "percentage": "0.009557",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.01746",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.000551",
        "region": "Zala County"
      },
      {
        "percentage": "0.000919",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.000551",
        "region": "Vas County"
      },
      {
        "percentage": "0.000735",
        "region": "Tolna County"
      },
      {
        "percentage": "0.000368",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.001287",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.000551",
        "region": "Brăila County"
      },
      {
        "percentage": "0.002573",
        "region": "South Moravian Region"
      },
      {
        "percentage": "0.000919",
        "region": "Pardubice Region"
      },
      {
        "percentage": "0.001287",
        "region": "Moravian-Silesian Region"
      },
      {
        "percentage": "0.001654",
        "region": "Olomouc Region"
      },
      {
        "percentage": "0.000551",
        "region": "Liberec Region"
      },
      {
        "percentage": "0.00147",
        "region": "Karlovy Vary Region"
      },
      {
        "percentage": "0.000551",
        "region": "Vysočina Region"
      },
      {
        "percentage": "0.000919",
        "region": "South Bohemian Region"
      },
      {
        "percentage": "0.003676",
        "region": "Prague"
      },
      {
        "percentage": "0.001654",
        "region": "Central Bohemian Region"
      },
      {
        "percentage": "0.000919",
        "region": "Hradec Králové Region"
      },
      {
        "percentage": "0.000551",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.000368",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.000368",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.000551",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000735",
        "region": "Varna Province"
      },
      {
        "percentage": "0.000368",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.000919",
        "region": "Plzeň Region"
      },
      {
        "percentage": "0.003124",
        "region": "Ústí nad Labem Region"
      },
      {
        "percentage": "0.000184",
        "region": "Alytus County"
      },
      {
        "percentage": "0.003124",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.002389",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.002389",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.002757",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.002757",
        "region": "Presov"
      },
      {
        "percentage": "0.00147",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.002941",
        "region": "Košice Region"
      },
      {
        "percentage": "0.003492",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.000184",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "0.000551",
        "region": "Zlín Region"
      },
      {
        "percentage": "0.000551",
        "region": "Upper Carniola Statistical Region"
      },
      {
        "percentage": "0.001838",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.000184",
        "region": "Central Sava Statistical Region"
      },
      {
        "percentage": "0.000551",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.000551",
        "region": "Carinthia Statistical Region"
      },
      {
        "percentage": "0.000368",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000184",
        "region": "Southeast Slovenia Statistical Region"
      },
      {
        "percentage": "0.000735",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.002389",
        "region": "Brașov County"
      },
      {
        "percentage": "0.000184",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.002757",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.000184",
        "region": "Ida-Viru County"
      },
      {
        "percentage": "0.000184",
        "region": "Harju County"
      },
      {
        "percentage": "0.000368",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.000184",
        "region": "Gozo"
      },
      {
        "percentage": "0.000919",
        "region": "Central Region"
      },
      {
        "percentage": "0.00147",
        "region": "Alsace"
      },
      {
        "percentage": "0.002941",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.000551",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.000184",
        "region": "Pärnu County"
      },
      {
        "percentage": "0.000735",
        "region": "Picardie"
      },
      {
        "percentage": "0.000551",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.000184",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.001287",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.000368",
        "region": "Lorraine"
      },
      {
        "percentage": "0.000184",
        "region": "Limousin"
      },
      {
        "percentage": "0.000551",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.000184",
        "region": "Järva County"
      },
      {
        "percentage": "0.002941",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000368",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.002757",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.000184",
        "region": "Thüringen"
      },
      {
        "percentage": "0.000184",
        "region": "Saxony-Anhalt"
      },
      {
        "percentage": "0.000368",
        "region": "Sachsen"
      },
      {
        "percentage": "0.000184",
        "region": "Brandenburg"
      },
      {
        "percentage": "0.000184",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.000368",
        "region": "Saarland"
      },
      {
        "percentage": "0.000368",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000551",
        "region": "Niedersachsen"
      },
      {
        "percentage": "0.000919",
        "region": "Latgale"
      },
      {
        "percentage": "0.000551",
        "region": "Hessen"
      },
      {
        "percentage": "0.000919",
        "region": "Hamburg"
      },
      {
        "percentage": "0.000184",
        "region": "Bremen"
      },
      {
        "percentage": "0.00147",
        "region": "Bayern"
      },
      {
        "percentage": "0.002389",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.000184",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.000368",
        "region": "Semigallia"
      },
      {
        "percentage": "0.002941",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.000368",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.009373",
        "region": "Bucharest"
      },
      {
        "percentage": "0.000919",
        "region": "Gorj County"
      },
      {
        "percentage": "0.000735",
        "region": "Mureș County"
      },
      {
        "percentage": "0.000184",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.000368",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.001838",
        "region": "Iași County"
      },
      {
        "percentage": "0.000551",
        "region": "Ialomița County"
      },
      {
        "percentage": "0.001103",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.000368",
        "region": "Harghita County"
      },
      {
        "percentage": "0.001838",
        "region": "Galați County"
      },
      {
        "percentage": "0.001287",
        "region": "Prahova County"
      },
      {
        "percentage": "0.001838",
        "region": "Dolj County"
      },
      {
        "percentage": "0.000551",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.000735",
        "region": "Covasna County"
      },
      {
        "percentage": "0.00147",
        "region": "Constanța County"
      },
      {
        "percentage": "0.002573",
        "region": "Cluj County"
      },
      {
        "percentage": "0.000551",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.001287",
        "region": "Buzău County"
      },
      {
        "percentage": "0.000368",
        "region": "Neamț County"
      },
      {
        "percentage": "0.000368",
        "region": "Sălaj County"
      },
      {
        "percentage": "0.000184",
        "region": "Corse"
      },
      {
        "percentage": "0.000368",
        "region": "Ilfov County"
      },
      {
        "percentage": "0.000919",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.000919",
        "region": "Centre"
      },
      {
        "percentage": "0.000184",
        "region": "Bretagne"
      },
      {
        "percentage": "0.000368",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.000184",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.000184",
        "region": "Auvergne"
      },
      {
        "percentage": "0.003124",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.000184",
        "region": "Giurgiu County"
      },
      {
        "percentage": "0.000919",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.000919",
        "region": "Călărași County"
      },
      {
        "percentage": "0.000368",
        "region": "Vrancea County"
      },
      {
        "percentage": "0.000735",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.000368",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.001838",
        "region": "Timiș County"
      },
      {
        "percentage": "0.000735",
        "region": "Teleorman County"
      },
      {
        "percentage": "0.000919",
        "region": "Suceava County"
      },
      {
        "percentage": "0.000919",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.000735",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.000551",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.000368",
        "region": "Cavan"
      },
      {
        "percentage": "0.004779",
        "region": "Cantabria"
      },
      {
        "percentage": "0.007719",
        "region": "Extremadura"
      },
      {
        "percentage": "0.041904",
        "region": "Cataluña"
      },
      {
        "percentage": "0.011763",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.011579",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.020952",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.006065",
        "region": "Aragón"
      },
      {
        "percentage": "0.086197",
        "region": "Andalusia"
      },
      {
        "percentage": "0.006433",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.010476",
        "region": "País Vasco"
      },
      {
        "percentage": "0.001287",
        "region": "Navarra"
      },
      {
        "percentage": "0.009925",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.035288",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.001103",
        "region": "La Rioja"
      },
      {
        "percentage": "0.011027",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.000184",
        "region": "Flevoland"
      },
      {
        "percentage": "0.000368",
        "region": "Overijssel"
      },
      {
        "percentage": "0.013968",
        "region": "Galicia"
      },
      {
        "percentage": "0.039147",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000551",
        "region": "Noord-Holland"
      },
      {
        "percentage": "0.002757",
        "region": "Brussels"
      },
      {
        "percentage": "0.003308",
        "region": "Crete"
      },
      {
        "percentage": "0.006616",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.001287",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.000551",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.012865",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.006065",
        "region": "Wallonia"
      },
      {
        "percentage": "0.012681",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.000368",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.000184",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.000184",
        "region": "Region of Southern Denmark"
      },
      {
        "percentage": "0.000735",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "0.000184",
        "region": "Zealand Region"
      },
      {
        "percentage": "0.000551",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.000184",
        "region": "Southwest Finland"
      },
      {
        "percentage": "0.000184",
        "region": "Central Finland"
      },
      {
        "percentage": "0.000368",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "0.000735",
        "region": "Zuid-Holland"
      },
      {
        "percentage": "0.001287",
        "region": "North Brabant"
      },
      {
        "percentage": "0.000919",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.000551",
        "region": "County Louth"
      },
      {
        "percentage": "0.000368",
        "region": "Wicklow"
      },
      {
        "percentage": "0.000551",
        "region": "Wexford"
      },
      {
        "percentage": "0.000551",
        "region": "County Westmeath"
      },
      {
        "percentage": "0.000551",
        "region": "Waterford"
      },
      {
        "percentage": "0.000184",
        "region": "County Tipperary"
      },
      {
        "percentage": "0.000184",
        "region": "County Meath"
      },
      {
        "percentage": "0.000551",
        "region": "County Mayo"
      },
      {
        "percentage": "0.000184",
        "region": "County Longford"
      },
      {
        "percentage": "0.001838",
        "region": "Basilicata"
      },
      {
        "percentage": "0.000735",
        "region": "Limerick"
      },
      {
        "percentage": "0.000368",
        "region": "Kilkenny"
      },
      {
        "percentage": "0.000368",
        "region": "Galway"
      },
      {
        "percentage": "0.00533",
        "region": "Dublin"
      },
      {
        "percentage": "0.000735",
        "region": "Donegal"
      },
      {
        "percentage": "0.00147",
        "region": "County Cork"
      },
      {
        "percentage": "0.000368",
        "region": "County Clare"
      },
      {
        "percentage": "0.00386",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.01066",
        "region": "Calabria"
      },
      {
        "percentage": "0.000184",
        "region": "Limburg"
      },
      {
        "percentage": "0.008638",
        "region": "Sardinia"
      },
      {
        "percentage": "0.000184",
        "region": "Groningen"
      },
      {
        "percentage": "0.000735",
        "region": "Gelderland"
      },
      {
        "percentage": "0.011579",
        "region": "Veneto"
      },
      {
        "percentage": "0.004411",
        "region": "Umbria"
      },
      {
        "percentage": "0.00147",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.011579",
        "region": "Tuscany"
      },
      {
        "percentage": "0.022974",
        "region": "Sicilia"
      },
      {
        "percentage": "0.025179",
        "region": "Puglia"
      },
      {
        "percentage": "0.049439",
        "region": "Campania"
      },
      {
        "percentage": "0.012314",
        "region": "Piedmont"
      },
      {
        "percentage": "0.00147",
        "region": "Molise"
      },
      {
        "percentage": "0.004962",
        "region": "Marche"
      },
      {
        "percentage": "0.036758",
        "region": "Lombardia"
      },
      {
        "percentage": "0.008454",
        "region": "Liguria"
      },
      {
        "percentage": "0.022055",
        "region": "Lazio"
      },
      {
        "percentage": "0.002757",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.013968",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.003124",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.002022",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.000368",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.003492",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.000551",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.020768",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.002757",
        "region": "Leiria District"
      },
      {
        "percentage": "0.000551",
        "region": "Guarda District"
      },
      {
        "percentage": "0.001838",
        "region": "Madeira"
      },
      {
        "percentage": "0.003124",
        "region": "Faro District"
      },
      {
        "percentage": "0.00147",
        "region": "Évora District"
      },
      {
        "percentage": "0.001654",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.001103",
        "region": "Santarém District"
      },
      {
        "percentage": "0.000735",
        "region": "Braganca"
      },
      {
        "percentage": "0.009006",
        "region": "Braga District"
      },
      {
        "percentage": "0.00147",
        "region": "Beja District"
      },
      {
        "percentage": "0.003308",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.002022",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.000919",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.002757",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.016357",
        "region": "Porto District"
      },
      {
        "percentage": "0.005146",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.000368",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.00386",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.002941",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.001103",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.000551",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.000368",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.000368",
        "region": "Montana Province"
      },
      {
        "percentage": "0.000735",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.000184",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.000184",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.001287",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.000184",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.000551",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.003676",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.000184",
        "region": "Diekirch District"
      },
      {
        "percentage": "0.001103",
        "region": "Azores"
      },
      {
        "percentage": "0.002022",
        "region": "Viseu District"
      },
      {
        "percentage": "0.000551",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.000551",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.002573",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.00147",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.000919",
        "region": "Styria"
      },
      {
        "percentage": "0.000735",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.001287",
        "region": "Istria County"
      },
      {
        "percentage": "0.000184",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.000184",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.004227",
        "region": "Vienna"
      },
      {
        "percentage": "0.000551",
        "region": "Vorarlberg"
      },
      {
        "percentage": "0.000735",
        "region": "Tyrol"
      },
      {
        "percentage": "0.000551",
        "region": "Salzburg"
      },
      {
        "percentage": "0.000368",
        "region": "Međimurje County"
      },
      {
        "percentage": "0.000919",
        "region": "Upper Austria"
      },
      {
        "percentage": "0.000735",
        "region": "Lower Austria"
      },
      {
        "percentage": "0.000368",
        "region": "Carinthia"
      },
      {
        "percentage": "0.000368",
        "region": "Burgenland"
      },
      {
        "percentage": "0.000919",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.00147",
        "region": "Western Greece"
      },
      {
        "percentage": "0.000735",
        "region": "Thessaly"
      },
      {
        "percentage": "0.000368",
        "region": "Koprivnica-Križevci County"
      },
      {
        "percentage": "0.00147",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.001287",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.000735",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.000368",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.000368",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.000368",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.002941",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.000551",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.001838",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.000735",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.000735",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.001654",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.006433",
        "region": "Zagreb"
      },
      {
        "percentage": "0.000919",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.00147",
        "region": "Zadar County"
      },
      {
        "percentage": "0.00147",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.000184",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.002941",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.001103",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.000368",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.000551",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T15:22:06+0000",
    "ad_creative_body": "Viktor Orbán is in Washington today to meet with Trump. These two have so much in common: the same disregard for democracy, the same hatred towards migrants, the same populist lies, the same disdain towards free media or anyone not sharing their views. To a certain point, you could even say Orbán is Trump’s lookalike.  \n\nWe are determined not to let Viktor Orbán and his allies turn Europe into a real “Trumpland” where homeless people are treated as criminals, where refugees are beaten up, where civil society and journalists are silenced. This is not the Europe we believe in.",
    "ad_delivery_start_time": "2019-05-13T15:22:06+0000",
    "ad_delivery_stop_time": "2019-05-13T21:58:40+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=2168194573301261&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.017707",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.021922",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.044688",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.120573",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.074199",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.01855",
        "age": "13-17",
        "gender": "female"
      },
      {
        "percentage": "0.003373",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.130691",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.090219",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.168634",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.021922",
        "age": "13-17",
        "gender": "male"
      },
      {
        "percentage": "0.044688",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.134907",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.047218",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.059022",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.001686",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Socialists and Democrats Group in the European Parliament",
    "impressions": {
      "lower_bound": "1000",
      "upper_bound": "4999"
    },
    "page_id": "127925800618165",
    "page_name": "Socialists and Democrats Group in the European Parliament",
    "region_distribution": [
      {
        "percentage": "0.000862",
        "region": "County Clare"
      },
      {
        "percentage": "0.001724",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.003448",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.000862",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.000862",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.001724",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.00431",
        "region": "Baranya County"
      },
      {
        "percentage": "0.000862",
        "region": "Békés County"
      },
      {
        "percentage": "0.006034",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.027586",
        "region": "Budapest"
      },
      {
        "percentage": "0.00431",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.000862",
        "region": "Fejér County"
      },
      {
        "percentage": "0.00431",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.002586",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.000862",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.000862",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.003448",
        "region": "Pest County"
      },
      {
        "percentage": "0.002586",
        "region": "Somogy County"
      },
      {
        "percentage": "0.003448",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.001724",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.000862",
        "region": "Tolna County"
      },
      {
        "percentage": "0.000862",
        "region": "Vas County"
      },
      {
        "percentage": "0.006034",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.001724",
        "region": "Zala County"
      },
      {
        "percentage": "0.003448",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.000862",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.001724",
        "region": "Limassol District"
      },
      {
        "percentage": "0.000862",
        "region": "Alytus County"
      },
      {
        "percentage": "0.000862",
        "region": "Presov"
      },
      {
        "percentage": "0.001724",
        "region": "Alba County"
      },
      {
        "percentage": "0.000862",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000862",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.000862",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.012931",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.000862",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.000862",
        "region": "Lovech Province"
      },
      {
        "percentage": "0.001724",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.000862",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.003448",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.000862",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.001724",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.002586",
        "region": "Varna Province"
      },
      {
        "percentage": "0.001724",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.001724",
        "region": "Košice Region"
      },
      {
        "percentage": "0.001724",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.00431",
        "region": "Prague"
      },
      {
        "percentage": "0.000862",
        "region": "South Bohemian Region"
      },
      {
        "percentage": "0.000862",
        "region": "Vysočina Region"
      },
      {
        "percentage": "0.000862",
        "region": "Liberec Region"
      },
      {
        "percentage": "0.000862",
        "region": "Southeast Slovenia Statistical Region"
      },
      {
        "percentage": "0.000862",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000862",
        "region": "Lower Sava Statistical Region"
      },
      {
        "percentage": "0.002586",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.000862",
        "region": "Goriška Statistical Region"
      },
      {
        "percentage": "0.000862",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.001724",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.000862",
        "region": "Paphos District"
      },
      {
        "percentage": "0.006897",
        "region": "Arad County"
      },
      {
        "percentage": "0.001724",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.000862",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.000862",
        "region": "Vrancea County"
      },
      {
        "percentage": "0.000862",
        "region": "Călărași County"
      },
      {
        "percentage": "0.000862",
        "region": "Giurgiu County"
      },
      {
        "percentage": "0.000862",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.000862",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.000862",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.000862",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.001724",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.000862",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.000862",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.001724",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.000862",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.001724",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.000862",
        "region": "Alsace"
      },
      {
        "percentage": "0.006034",
        "region": "Central Region"
      },
      {
        "percentage": "0.001724",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.000862",
        "region": "Harju County"
      },
      {
        "percentage": "0.000862",
        "region": "Ida-Viru County"
      },
      {
        "percentage": "0.000862",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000862",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.001724",
        "region": "Bayern"
      },
      {
        "percentage": "0.001724",
        "region": "Hessen"
      },
      {
        "percentage": "0.003448",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.000862",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000862",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.001724",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.002586",
        "region": "Tulcea County"
      },
      {
        "percentage": "0.002586",
        "region": "Argeș County"
      },
      {
        "percentage": "0.00431",
        "region": "Dolj County"
      },
      {
        "percentage": "0.003448",
        "region": "Bacău County"
      },
      {
        "percentage": "0.003448",
        "region": "Bihor County"
      },
      {
        "percentage": "0.002586",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.002586",
        "region": "Brăila County"
      },
      {
        "percentage": "0.007759",
        "region": "Brașov County"
      },
      {
        "percentage": "0.041379",
        "region": "Bucharest"
      },
      {
        "percentage": "0.002586",
        "region": "Buzău County"
      },
      {
        "percentage": "0.002586",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.007759",
        "region": "Cluj County"
      },
      {
        "percentage": "0.00431",
        "region": "Constanța County"
      },
      {
        "percentage": "0.000862",
        "region": "Covasna County"
      },
      {
        "percentage": "0.001724",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.002586",
        "region": "Galați County"
      },
      {
        "percentage": "0.00431",
        "region": "Timiș County"
      },
      {
        "percentage": "0.002586",
        "region": "Gorj County"
      },
      {
        "percentage": "0.000862",
        "region": "Harghita County"
      },
      {
        "percentage": "0.006897",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.00431",
        "region": "Iași County"
      },
      {
        "percentage": "0.003448",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.001724",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.00431",
        "region": "Mureș County"
      },
      {
        "percentage": "0.001724",
        "region": "Neamț County"
      },
      {
        "percentage": "0.00431",
        "region": "Prahova County"
      },
      {
        "percentage": "0.00431",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.002586",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.002586",
        "region": "Suceava County"
      },
      {
        "percentage": "0.000862",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.00431",
        "region": "Azores"
      },
      {
        "percentage": "0.000862",
        "region": "County Cork"
      },
      {
        "percentage": "0.000862",
        "region": "Norrbotten County"
      },
      {
        "percentage": "0.018966",
        "region": "Andalusia"
      },
      {
        "percentage": "0.000862",
        "region": "Aragón"
      },
      {
        "percentage": "0.006034",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.003448",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.001724",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.013793",
        "region": "Cataluña"
      },
      {
        "percentage": "0.000862",
        "region": "Extremadura"
      },
      {
        "percentage": "0.002586",
        "region": "Galicia"
      },
      {
        "percentage": "0.002586",
        "region": "País Vasco"
      },
      {
        "percentage": "0.011207",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000862",
        "region": "Blekinge County"
      },
      {
        "percentage": "0.001724",
        "region": "Östergötland County"
      },
      {
        "percentage": "0.003448",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.000862",
        "region": "Södermanland County"
      },
      {
        "percentage": "0.000862",
        "region": "Uppsala County"
      },
      {
        "percentage": "0.000862",
        "region": "Västerbotten County"
      },
      {
        "percentage": "0.000862",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.000862",
        "region": "Skåne County"
      },
      {
        "percentage": "0.000862",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "0.000862",
        "region": "Northern Ostrobothnia"
      },
      {
        "percentage": "0.000862",
        "region": "Pirkanmaa"
      },
      {
        "percentage": "0.000862",
        "region": "Uusimaa"
      },
      {
        "percentage": "0.000862",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.007759",
        "region": "Brussels"
      },
      {
        "percentage": "0.007759",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.001724",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.017241",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.058621",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.006034",
        "region": "Liguria"
      },
      {
        "percentage": "0.000862",
        "region": "Donegal"
      },
      {
        "percentage": "0.003448",
        "region": "Dublin"
      },
      {
        "percentage": "0.001724",
        "region": "Galway"
      },
      {
        "percentage": "0.000862",
        "region": "Limerick"
      },
      {
        "percentage": "0.000862",
        "region": "County Louth"
      },
      {
        "percentage": "0.000862",
        "region": "County Tipperary"
      },
      {
        "percentage": "0.00431",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.006034",
        "region": "Calabria"
      },
      {
        "percentage": "0.010345",
        "region": "Campania"
      },
      {
        "percentage": "0.018966",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.003448",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.021552",
        "region": "Lazio"
      },
      {
        "percentage": "0.031034",
        "region": "Lombardia"
      },
      {
        "percentage": "0.001724",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.006897",
        "region": "Marche"
      },
      {
        "percentage": "0.001724",
        "region": "Molise"
      },
      {
        "percentage": "0.012931",
        "region": "Piedmont"
      },
      {
        "percentage": "0.006034",
        "region": "Puglia"
      },
      {
        "percentage": "0.002586",
        "region": "Sardinia"
      },
      {
        "percentage": "0.006897",
        "region": "Sicilia"
      },
      {
        "percentage": "0.009483",
        "region": "Tuscany"
      },
      {
        "percentage": "0.003448",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.003448",
        "region": "Umbria"
      },
      {
        "percentage": "0.010345",
        "region": "Veneto"
      },
      {
        "percentage": "0.000862",
        "region": "Friesland"
      },
      {
        "percentage": "0.000862",
        "region": "Limburg"
      },
      {
        "percentage": "0.006897",
        "region": "Wallonia"
      },
      {
        "percentage": "0.002586",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.001724",
        "region": "Viseu District"
      },
      {
        "percentage": "0.006034",
        "region": "Braga District"
      },
      {
        "percentage": "0.001724",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.001724",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.00431",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.006897",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.002586",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.009483",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.002586",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.022414",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.001724",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.001724",
        "region": "Beja District"
      },
      {
        "percentage": "0.000862",
        "region": "Braganca"
      },
      {
        "percentage": "0.006034",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.003448",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.006034",
        "region": "Faro District"
      },
      {
        "percentage": "0.003448",
        "region": "Madeira"
      },
      {
        "percentage": "0.000862",
        "region": "Guarda District"
      },
      {
        "percentage": "0.003448",
        "region": "Leiria District"
      },
      {
        "percentage": "0.061207",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.000862",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.032759",
        "region": "Porto District"
      },
      {
        "percentage": "0.003448",
        "region": "Santarém District"
      },
      {
        "percentage": "0.003448",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.002586",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.000862",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.001724",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.023276",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.006034",
        "region": "Crete"
      },
      {
        "percentage": "0.003448",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.000862",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.001724",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.00431",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.000862",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.00431",
        "region": "Thessaly"
      },
      {
        "percentage": "0.007759",
        "region": "Western Greece"
      },
      {
        "percentage": "0.000862",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.003448",
        "region": "Vienna"
      },
      {
        "percentage": "0.001724",
        "region": "Bjelovar-Bilogora County"
      },
      {
        "percentage": "0.002586",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.00431",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Krapina-Zagorje County"
      },
      {
        "percentage": "0.001724",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.002586",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000862",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.007759",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.000862",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.000862",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.002586",
        "region": "Zadar County"
      },
      {
        "percentage": "0.018103",
        "region": "Zagreb"
      },
      {
        "percentage": "0.001724",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.002586",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.006897",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.000862",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T13:16:22+0000",
    "ad_creative_body": "Surprenez vos proches avec un cadeau original qui a du sens et qui est bon pour la planète. Naissance, anniversaire, mariage : toutes les occasions sont bonnes pour offrir des arbres.",
    "ad_creative_link_caption": "ecotree.fr",
    "ad_creative_link_description": "Surprenez vos proches avec un cadeau original qui a du sens et qui est bon pour la planète. Naissance, anniversaire, mariage : toutes les occasions sont bonnes pour offrir des arbres.",
    "ad_creative_link_title": "A court d'idées pour la fête des mères ? On vous souffle un cadeau formidable !",
    "ad_delivery_start_time": "2019-05-13T13:16:22+0000",
    "ad_delivery_stop_time": "2019-05-17T12:55:55+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=326850847993048&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.380368",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.03681",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.01227",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.08589",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.196319",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.018405",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.03681",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.08589",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.04908",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.030675",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.04908",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.01227",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.006135",
        "age": "45-54",
        "gender": "male"
      }
    ],
    "funding_entity": "EcoTree",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "386108291584856",
    "page_name": "EcoTree",
    "region_distribution": [
      {
        "percentage": "0.030675",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.030675",
        "region": "Limousin"
      },
      {
        "percentage": "0.153374",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.092025",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.02454",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.02454",
        "region": "Picardie"
      },
      {
        "percentage": "0.02454",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.122699",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.030675",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.030675",
        "region": "Lorraine"
      },
      {
        "percentage": "0.055215",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.02454",
        "region": "Auvergne"
      },
      {
        "percentage": "0.134969",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.02454",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.030675",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.006135",
        "region": "Corse"
      },
      {
        "percentage": "0.018405",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.067485",
        "region": "Centre"
      },
      {
        "percentage": "0.02454",
        "region": "Bretagne"
      },
      {
        "percentage": "0.018405",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.018405",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.01227",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T13:06:32+0000",
    "ad_creative_body": "🇪🇺 Europeans are stronger together! \n👉🏻 Choose your future! \n🗳 Vote in the upcoming European elections!",
    "ad_delivery_start_time": "2019-05-13T13:06:32+0000",
    "ad_delivery_stop_time": "2019-05-13T19:49:38+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=2546306418929955&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.000439",
        "age": "55-64",
        "gender": "unknown"
      },
      {
        "percentage": "0.055",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.000702",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.000175",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.062982",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.051491",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.092193",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.067281",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.057632",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.079912",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.144386",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.092544",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.065263",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.082018",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.025877",
        "age": "13-17",
        "gender": "male"
      },
      {
        "percentage": "0.098772",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.022807",
        "age": "13-17",
        "gender": "female"
      },
      {
        "percentage": "0.000526",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "ALDE Group in the European Parliament. ",
    "impressions": {
      "lower_bound": "10000",
      "upper_bound": "49999"
    },
    "page_id": "123910440019",
    "page_name": "ALDE Group – Liberals and Democrats in the European Parliament",
    "region_distribution": [
      {
        "percentage": "0.000177",
        "region": "Carlow"
      },
      {
        "percentage": "0.000177",
        "region": "Utena County"
      },
      {
        "percentage": "0.001417",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.007615",
        "region": "Budapest"
      },
      {
        "percentage": "0.001505",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.001151",
        "region": "Békés County"
      },
      {
        "percentage": "0.001594",
        "region": "Baranya County"
      },
      {
        "percentage": "0.002214",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.001948",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.001063",
        "region": "Telšiai County"
      },
      {
        "percentage": "0.001505",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000531",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.001948",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.001063",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.000708",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.001417",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.002833",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.001151",
        "region": "Alytus County"
      },
      {
        "percentage": "0.000354",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.001859",
        "region": "Fejér County"
      },
      {
        "percentage": "0.001859",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.000266",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.001151",
        "region": "Zala County"
      },
      {
        "percentage": "0.000885",
        "region": "Alba County"
      },
      {
        "percentage": "0.003719",
        "region": "Paphos District"
      },
      {
        "percentage": "0.004516",
        "region": "Limassol District"
      },
      {
        "percentage": "8.9E-5",
        "region": "Nicosia District"
      },
      {
        "percentage": "0.001417",
        "region": "Larnaca District"
      },
      {
        "percentage": "0.003099",
        "region": "Kyrenia District"
      },
      {
        "percentage": "0.003365",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.011865",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.001859",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.000708",
        "region": "Heves County"
      },
      {
        "percentage": "0.001063",
        "region": "Vas County"
      },
      {
        "percentage": "0.000974",
        "region": "Tolna County"
      },
      {
        "percentage": "0.001417",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.001505",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.001682",
        "region": "Somogy County"
      },
      {
        "percentage": "0.002036",
        "region": "Pest County"
      },
      {
        "percentage": "0.000266",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.000885",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.000708",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.000885",
        "region": "Presov"
      },
      {
        "percentage": "0.001063",
        "region": "Argeș County"
      },
      {
        "percentage": "0.004693",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.002302",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.004427",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.001594",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.003365",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.003542",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.00124",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.01399",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.002391",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.006641",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.005844",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.002214",
        "region": "Montana Province"
      },
      {
        "percentage": "0.002479",
        "region": "Lovech Province"
      },
      {
        "percentage": "0.00301",
        "region": "Kyustendil Province"
      },
      {
        "percentage": "0.001771",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.006464",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.028865",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.001859",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.004162",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.001771",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.00062",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.000354",
        "region": "Lower Sava Statistical Region"
      },
      {
        "percentage": "0.00062",
        "region": "Košice Region"
      },
      {
        "percentage": "0.000443",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.000531",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.000177",
        "region": "Goriška Statistical Region"
      },
      {
        "percentage": "8.9E-5",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "0.000354",
        "region": "Upper Carniola Statistical Region"
      },
      {
        "percentage": "0.001063",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.000354",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.000177",
        "region": "Carinthia Statistical Region"
      },
      {
        "percentage": "0.010182",
        "region": "Varna Province"
      },
      {
        "percentage": "0.000443",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000177",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.000266",
        "region": "Littoral–Inner Carniola Statistical Region"
      },
      {
        "percentage": "0.000354",
        "region": "Southeast Slovenia Statistical Region"
      },
      {
        "percentage": "0.002391",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.002922",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.001328",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.005135",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.001771",
        "region": "Arad County"
      },
      {
        "percentage": "0.002568",
        "region": "Bacău County"
      },
      {
        "percentage": "0.007349",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.000531",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.000531",
        "region": "Harju County"
      },
      {
        "percentage": "0.001151",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.002125",
        "region": "Central Region"
      },
      {
        "percentage": "0.000354",
        "region": "Alsace"
      },
      {
        "percentage": "0.000531",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.001063",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.000354",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.00062",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "8.9E-5",
        "region": "Järva County"
      },
      {
        "percentage": "0.000531",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.000354",
        "region": "Lorraine"
      },
      {
        "percentage": "0.000266",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.002922",
        "region": "Île-de-France"
      },
      {
        "percentage": "8.9E-5",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.000177",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.000266",
        "region": "Corse"
      },
      {
        "percentage": "0.000354",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "8.9E-5",
        "region": "Hiiu County"
      },
      {
        "percentage": "8.9E-5",
        "region": "Pärnu County"
      },
      {
        "percentage": "0.000177",
        "region": "Bretagne"
      },
      {
        "percentage": "0.00062",
        "region": "Niedersachsen"
      },
      {
        "percentage": "8.9E-5",
        "region": "Thüringen"
      },
      {
        "percentage": "0.000266",
        "region": "Saxony-Anhalt"
      },
      {
        "percentage": "0.000354",
        "region": "Sachsen"
      },
      {
        "percentage": "8.9E-5",
        "region": "Mecklenburg-Vorpommern"
      },
      {
        "percentage": "0.000177",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.000266",
        "region": "Saarland"
      },
      {
        "percentage": "0.000708",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.002214",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.000708",
        "region": "Hessen"
      },
      {
        "percentage": "0.000177",
        "region": "Võru County"
      },
      {
        "percentage": "0.000708",
        "region": "Hamburg"
      },
      {
        "percentage": "8.9E-5",
        "region": "Bremen"
      },
      {
        "percentage": "0.001505",
        "region": "Bayern"
      },
      {
        "percentage": "0.000885",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.000708",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.002125",
        "region": "Semigallia"
      },
      {
        "percentage": "0.000443",
        "region": "Latgale"
      },
      {
        "percentage": "0.002922",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000354",
        "region": "Centre"
      },
      {
        "percentage": "0.000177",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.002391",
        "region": "Bihor County"
      },
      {
        "percentage": "0.00062",
        "region": "Covasna County"
      },
      {
        "percentage": "0.000797",
        "region": "Ialomița County"
      },
      {
        "percentage": "0.001594",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.000885",
        "region": "Harghita County"
      },
      {
        "percentage": "0.000974",
        "region": "Gorj County"
      },
      {
        "percentage": "0.000974",
        "region": "Galați County"
      },
      {
        "percentage": "0.001505",
        "region": "Dolj County"
      },
      {
        "percentage": "0.000885",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.002036",
        "region": "Constanța County"
      },
      {
        "percentage": "0.002036",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.001682",
        "region": "Cluj County"
      },
      {
        "percentage": "0.000885",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.000974",
        "region": "Buzău County"
      },
      {
        "percentage": "0.007172",
        "region": "Bucharest"
      },
      {
        "percentage": "0.002036",
        "region": "Brașov County"
      },
      {
        "percentage": "0.001151",
        "region": "Brăila County"
      },
      {
        "percentage": "0.000797",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.000531",
        "region": "Bistrița-Năsăud County"
      },
      {
        "percentage": "0.002302",
        "region": "Iași County"
      },
      {
        "percentage": "0.000974",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.000266",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.000885",
        "region": "Tulcea County"
      },
      {
        "percentage": "0.000177",
        "region": "Auvergne"
      },
      {
        "percentage": "0.000531",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.000354",
        "region": "Ilfov County"
      },
      {
        "percentage": "0.000354",
        "region": "Giurgiu County"
      },
      {
        "percentage": "0.00062",
        "region": "Călărași County"
      },
      {
        "percentage": "0.000531",
        "region": "Vrancea County"
      },
      {
        "percentage": "0.00062",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.001682",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.002745",
        "region": "Timiș County"
      },
      {
        "percentage": "0.002214",
        "region": "Mureș County"
      },
      {
        "percentage": "0.00062",
        "region": "Teleorman County"
      },
      {
        "percentage": "0.002922",
        "region": "Suceava County"
      },
      {
        "percentage": "0.001063",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.001151",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.000797",
        "region": "Sălaj County"
      },
      {
        "percentage": "0.001594",
        "region": "Prahova County"
      },
      {
        "percentage": "0.000974",
        "region": "Olt County"
      },
      {
        "percentage": "0.001505",
        "region": "Neamț County"
      },
      {
        "percentage": "0.002125",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.00726",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.000177",
        "region": "Cavan"
      },
      {
        "percentage": "0.051266",
        "region": "Cataluña"
      },
      {
        "percentage": "0.000177",
        "region": "Halland County"
      },
      {
        "percentage": "0.000177",
        "region": "Gävleborg County"
      },
      {
        "percentage": "8.9E-5",
        "region": "Blekinge County"
      },
      {
        "percentage": "0.043386",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.009563",
        "region": "País Vasco"
      },
      {
        "percentage": "0.016292",
        "region": "Galicia"
      },
      {
        "percentage": "0.011688",
        "region": "Extremadura"
      },
      {
        "percentage": "0.012662",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "8.9E-5",
        "region": "Kronoberg County"
      },
      {
        "percentage": "0.014964",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.017531",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.009297",
        "region": "Aragón"
      },
      {
        "percentage": "0.10085",
        "region": "Andalusia"
      },
      {
        "percentage": "0.004339",
        "region": "Cantabria"
      },
      {
        "percentage": "0.009031",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.003365",
        "region": "Navarra"
      },
      {
        "percentage": "0.013547",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.000177",
        "region": "Jönköping County"
      },
      {
        "percentage": "0.000266",
        "region": "Örebro County"
      },
      {
        "percentage": "0.002036",
        "region": "La Rioja"
      },
      {
        "percentage": "8.9E-5",
        "region": "Lapland (Finland)"
      },
      {
        "percentage": "8.9E-5",
        "region": "Pohjois-Savo"
      },
      {
        "percentage": "8.9E-5",
        "region": "Etelä-Savo"
      },
      {
        "percentage": "8.9E-5",
        "region": "Tavastia Proper"
      },
      {
        "percentage": "8.9E-5",
        "region": "Southwest Finland"
      },
      {
        "percentage": "0.000266",
        "region": "Ostrobothnia (region)"
      },
      {
        "percentage": "8.9E-5",
        "region": "Southern Ostrobothnia"
      },
      {
        "percentage": "0.000177",
        "region": "Pirkanmaa"
      },
      {
        "percentage": "8.9E-5",
        "region": "Northern Ostrobothnia"
      },
      {
        "percentage": "0.000708",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "8.9E-5",
        "region": "Östergötland County"
      },
      {
        "percentage": "0.00062",
        "region": "Skåne County"
      },
      {
        "percentage": "0.000885",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.000177",
        "region": "Västmanland County"
      },
      {
        "percentage": "8.9E-5",
        "region": "Västernorrland County"
      },
      {
        "percentage": "8.9E-5",
        "region": "Västerbotten County"
      },
      {
        "percentage": "0.000177",
        "region": "Värmland County"
      },
      {
        "percentage": "0.000177",
        "region": "Uppsala County"
      },
      {
        "percentage": "0.000177",
        "region": "Södermanland County"
      },
      {
        "percentage": "0.046396",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.008589",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.000531",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.000354",
        "region": "Limerick"
      },
      {
        "percentage": "0.000177",
        "region": "Waterford"
      },
      {
        "percentage": "0.000177",
        "region": "Roscommon"
      },
      {
        "percentage": "8.9E-5",
        "region": "County Offaly"
      },
      {
        "percentage": "0.000266",
        "region": "County Meath"
      },
      {
        "percentage": "0.000266",
        "region": "County Mayo"
      },
      {
        "percentage": "0.000266",
        "region": "County Louth"
      },
      {
        "percentage": "0.000266",
        "region": "County Longford"
      },
      {
        "percentage": "0.000177",
        "region": "County Laois"
      },
      {
        "percentage": "0.000531",
        "region": "Wexford"
      },
      {
        "percentage": "8.9E-5",
        "region": "Kilkenny"
      },
      {
        "percentage": "0.000177",
        "region": "Kildare"
      },
      {
        "percentage": "8.9E-5",
        "region": "Kerry"
      },
      {
        "percentage": "0.000177",
        "region": "Galway"
      },
      {
        "percentage": "0.002125",
        "region": "Dublin"
      },
      {
        "percentage": "0.000443",
        "region": "Donegal"
      },
      {
        "percentage": "0.000885",
        "region": "County Cork"
      },
      {
        "percentage": "8.9E-5",
        "region": "County Clare"
      },
      {
        "percentage": "0.000354",
        "region": "County Westmeath"
      },
      {
        "percentage": "0.000266",
        "region": "Wicklow"
      },
      {
        "percentage": "0.004427",
        "region": "Veneto"
      },
      {
        "percentage": "0.000177",
        "region": "Molise"
      },
      {
        "percentage": "8.9E-5",
        "region": "Aosta Valley"
      },
      {
        "percentage": "0.000797",
        "region": "Umbria"
      },
      {
        "percentage": "0.000708",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.004162",
        "region": "Tuscany"
      },
      {
        "percentage": "0.009386",
        "region": "Sicilia"
      },
      {
        "percentage": "0.003099",
        "region": "Sardinia"
      },
      {
        "percentage": "0.007349",
        "region": "Puglia"
      },
      {
        "percentage": "0.003188",
        "region": "Piedmont"
      },
      {
        "percentage": "0.002922",
        "region": "Marche"
      },
      {
        "percentage": "0.002214",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.0085",
        "region": "Lombardia"
      },
      {
        "percentage": "0.001417",
        "region": "Liguria"
      },
      {
        "percentage": "0.008589",
        "region": "Lazio"
      },
      {
        "percentage": "0.000974",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.003719",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.008323",
        "region": "Campania"
      },
      {
        "percentage": "0.002922",
        "region": "Calabria"
      },
      {
        "percentage": "0.000797",
        "region": "Basilicata"
      },
      {
        "percentage": "0.000266",
        "region": "Uusimaa"
      },
      {
        "percentage": "0.000531",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "0.001417",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.000177",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.001328",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.000354",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.00062",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.000797",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "8.9E-5",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.001063",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.000531",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.000177",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.002833",
        "region": "Beja District"
      },
      {
        "percentage": "8.9E-5",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.001151",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.001063",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.000974",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.001063",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.00062",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.001151",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "8.9E-5",
        "region": "Skierniewice"
      },
      {
        "percentage": "0.006464",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.007703",
        "region": "Braga District"
      },
      {
        "percentage": "0.00062",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.019214",
        "region": "Porto District"
      },
      {
        "percentage": "8.9E-5",
        "region": "Grevenmacher District"
      },
      {
        "percentage": "0.000177",
        "region": "Diekirch District"
      },
      {
        "percentage": "0.004162",
        "region": "Azores"
      },
      {
        "percentage": "0.003188",
        "region": "Viseu District"
      },
      {
        "percentage": "0.001859",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.002833",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.010182",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.005135",
        "region": "Santarém District"
      },
      {
        "percentage": "0.001151",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.001328",
        "region": "Braganca"
      },
      {
        "percentage": "0.027802",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.004958",
        "region": "Leiria District"
      },
      {
        "percentage": "0.001682",
        "region": "Guarda District"
      },
      {
        "percentage": "0.005844",
        "region": "Madeira"
      },
      {
        "percentage": "0.006287",
        "region": "Faro District"
      },
      {
        "percentage": "0.002745",
        "region": "Évora District"
      },
      {
        "percentage": "0.004162",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.003453",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.011953",
        "region": "Zagreb"
      },
      {
        "percentage": "0.001682",
        "region": "Zadar County"
      },
      {
        "percentage": "0.000266",
        "region": "Region of Southern Denmark"
      },
      {
        "percentage": "0.002391",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.000177",
        "region": "Carinthia"
      },
      {
        "percentage": "0.000531",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.002214",
        "region": "Western Greece"
      },
      {
        "percentage": "0.002036",
        "region": "Thessaly"
      },
      {
        "percentage": "0.001151",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.001594",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.00124",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.001063",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.002568",
        "region": "Crete"
      },
      {
        "percentage": "0.000531",
        "region": "Upper Austria"
      },
      {
        "percentage": "0.006198",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.002036",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.002036",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.012662",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.001948",
        "region": "Wallonia"
      },
      {
        "percentage": "0.001417",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.002302",
        "region": "Brussels"
      },
      {
        "percentage": "0.000177",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.000443",
        "region": "Lower Austria"
      },
      {
        "percentage": "0.000266",
        "region": "Styria"
      },
      {
        "percentage": "0.001771",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.000708",
        "region": "Međimurje County"
      },
      {
        "percentage": "0.00062",
        "region": "Virovitica-Podravina County"
      },
      {
        "percentage": "0.002036",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.002922",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.000885",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.000797",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.002568",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000531",
        "region": "Požega-Slavonia County"
      },
      {
        "percentage": "0.003099",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.000177",
        "region": "Lika-Senj County"
      },
      {
        "percentage": "0.000177",
        "region": "Tyrol"
      },
      {
        "percentage": "0.00124",
        "region": "Krapina-Zagorje County"
      },
      {
        "percentage": "0.000885",
        "region": "Koprivnica-Križevci County"
      },
      {
        "percentage": "0.00062",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.003453",
        "region": "Istria County"
      },
      {
        "percentage": "0.000885",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.00124",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.000974",
        "region": "Bjelovar-Bilogora County"
      },
      {
        "percentage": "0.001594",
        "region": "Vienna"
      },
      {
        "percentage": "0.000531",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T13:06:03+0000",
    "ad_creative_body": "🚨 10 DAYS UNTIL THE EUROPEAN ELECTIONS.\n🇪🇺 Don’t let anybody else decide on your own future... VOTE! 🗳️",
    "ad_creative_link_title": "🚨 10 DAYS UNTIL THE EUROPEAN ELECTIONS.",
    "ad_delivery_start_time": "2019-05-13T13:06:03+0000",
    "ad_delivery_stop_time": "2019-05-14T06:01:44+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=431384811007605&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.060286",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.106674",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.000489",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.000783",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.000685",
        "age": "65+",
        "gender": "unknown"
      },
      {
        "percentage": "0.000294",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.000294",
        "age": "55-64",
        "gender": "unknown"
      },
      {
        "percentage": "0.000489",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.07477",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.066549",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.040908",
        "age": "13-17",
        "gender": "male"
      },
      {
        "percentage": "0.068213",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.086808",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.10873",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.084459",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.043844",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.066256",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.040419",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.041593",
        "age": "13-17",
        "gender": "female"
      },
      {
        "percentage": "0.10736",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "9.8E-5",
        "age": "13-17",
        "gender": "unknown"
      }
    ],
    "funding_entity": "ALDE Group in the European Parliament. ",
    "impressions": {
      "lower_bound": "10000",
      "upper_bound": "49999"
    },
    "page_id": "123910440019",
    "page_name": "ALDE Group – Liberals and Democrats in the European Parliament",
    "region_distribution": [
      {
        "percentage": "0.000196",
        "region": "Carlow"
      },
      {
        "percentage": "0.002642",
        "region": "Budapest"
      },
      {
        "percentage": "0.001957",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.001076",
        "region": "Klaipėda County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.000391",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.000489",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000587",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.000783",
        "region": "Telšiai County"
      },
      {
        "percentage": "0.00137",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.00137",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.001174",
        "region": "Baranya County"
      },
      {
        "percentage": "0.000294",
        "region": "Békés County"
      },
      {
        "percentage": "0.000489",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.000587",
        "region": "Csongrád County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.000685",
        "region": "Fejér County"
      },
      {
        "percentage": "0.000685",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000881",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.000294",
        "region": "Heves County"
      },
      {
        "percentage": "0.000391",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.000685",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.000685",
        "region": "Pest County"
      },
      {
        "percentage": "0.000979",
        "region": "Somogy County"
      },
      {
        "percentage": "0.001076",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.000489",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.000391",
        "region": "Tolna County"
      },
      {
        "percentage": "0.000489",
        "region": "Vas County"
      },
      {
        "percentage": "0.000391",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.000294",
        "region": "Alytus County"
      },
      {
        "percentage": "0.000196",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.011547",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.019669",
        "region": "Varna Province"
      },
      {
        "percentage": "0.010862",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.005089",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.011156",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.034543",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.004404",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.011547",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.00548",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.003229",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.008318",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.006067",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.008807",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.013211",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.004012",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.010177",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "9.8E-5",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.00548",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.005578",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.005969",
        "region": "Yambol Province"
      },
      {
        "percentage": "9.8E-5",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.000196",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Central Sava Statistical Region"
      },
      {
        "percentage": "0.000294",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Goriška Statistical Region"
      },
      {
        "percentage": "0.000294",
        "region": "Košice Region"
      },
      {
        "percentage": "0.000196",
        "region": "Nitra Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Presov"
      },
      {
        "percentage": "0.000489",
        "region": "Zala County"
      },
      {
        "percentage": "0.004208",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.004404",
        "region": "Lovech Province"
      },
      {
        "percentage": "9.8E-5",
        "region": "Ilfov County"
      },
      {
        "percentage": "0.000979",
        "region": "Sălaj County"
      },
      {
        "percentage": "0.000979",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.001664",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.00274",
        "region": "Suceava County"
      },
      {
        "percentage": "0.000881",
        "region": "Teleorman County"
      },
      {
        "percentage": "0.002936",
        "region": "Timiș County"
      },
      {
        "percentage": "0.000783",
        "region": "Tulcea County"
      },
      {
        "percentage": "0.002251",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.00137",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.00137",
        "region": "Vrancea County"
      },
      {
        "percentage": "0.000881",
        "region": "Călărași County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Giurgiu County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Centre"
      },
      {
        "percentage": "0.001076",
        "region": "Olt County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Franche-Comté"
      },
      {
        "percentage": "9.8E-5",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "9.8E-5",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.000196",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "9.8E-5",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.000294",
        "region": "Central Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Gozo"
      },
      {
        "percentage": "0.000294",
        "region": "South Eastern Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Saare County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Tartu County"
      },
      {
        "percentage": "0.003131",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000196",
        "region": "Latgale"
      },
      {
        "percentage": "0.00137",
        "region": "Semigallia"
      },
      {
        "percentage": "0.001468",
        "region": "Prahova County"
      },
      {
        "percentage": "0.000979",
        "region": "Neamț County"
      },
      {
        "percentage": "0.004893",
        "region": "Kyrenia District"
      },
      {
        "percentage": "0.002251",
        "region": "Buzău County"
      },
      {
        "percentage": "0.001761",
        "region": "Larnaca District"
      },
      {
        "percentage": "0.004991",
        "region": "Limassol District"
      },
      {
        "percentage": "0.003523",
        "region": "Paphos District"
      },
      {
        "percentage": "0.001174",
        "region": "Alba County"
      },
      {
        "percentage": "0.001761",
        "region": "Arad County"
      },
      {
        "percentage": "0.001566",
        "region": "Argeș County"
      },
      {
        "percentage": "0.002642",
        "region": "Bacău County"
      },
      {
        "percentage": "0.003425",
        "region": "Bihor County"
      },
      {
        "percentage": "0.001076",
        "region": "Bistrița-Năsăud County"
      },
      {
        "percentage": "0.002642",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.000489",
        "region": "Brăila County"
      },
      {
        "percentage": "0.002349",
        "region": "Brașov County"
      },
      {
        "percentage": "0.004306",
        "region": "Bucharest"
      },
      {
        "percentage": "0.001664",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.002349",
        "region": "Mureș County"
      },
      {
        "percentage": "0.001761",
        "region": "Cluj County"
      },
      {
        "percentage": "0.000881",
        "region": "Constanța County"
      },
      {
        "percentage": "0.000489",
        "region": "Covasna County"
      },
      {
        "percentage": "0.001566",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.002838",
        "region": "Dolj County"
      },
      {
        "percentage": "0.002251",
        "region": "Galați County"
      },
      {
        "percentage": "0.00274",
        "region": "Gorj County"
      },
      {
        "percentage": "0.000783",
        "region": "Harghita County"
      },
      {
        "percentage": "0.001761",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.000587",
        "region": "Ialomița County"
      },
      {
        "percentage": "0.003621",
        "region": "Iași County"
      },
      {
        "percentage": "0.001566",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.000489",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.005284",
        "region": "Montana Province"
      },
      {
        "percentage": "0.005871",
        "region": "Kyustendil Province"
      },
      {
        "percentage": "9.8E-5",
        "region": "Cavan"
      },
      {
        "percentage": "0.035326",
        "region": "Cataluña"
      },
      {
        "percentage": "0.00548",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.001957",
        "region": "La Rioja"
      },
      {
        "percentage": "0.034641",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.009394",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.003229",
        "region": "Navarra"
      },
      {
        "percentage": "0.005578",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.002544",
        "region": "Cantabria"
      },
      {
        "percentage": "0.068402",
        "region": "Andalusia"
      },
      {
        "percentage": "0.006165",
        "region": "Aragón"
      },
      {
        "percentage": "0.016244",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.008807",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.009492",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.005969",
        "region": "Extremadura"
      },
      {
        "percentage": "9.8E-5",
        "region": "Aosta Valley"
      },
      {
        "percentage": "0.009688",
        "region": "Galicia"
      },
      {
        "percentage": "0.007339",
        "region": "País Vasco"
      },
      {
        "percentage": "0.026226",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "9.8E-5",
        "region": "Västmanland County"
      },
      {
        "percentage": "9.8E-5",
        "region": "North Karelia"
      },
      {
        "percentage": "0.000196",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "9.8E-5",
        "region": "Brussels"
      },
      {
        "percentage": "0.000196",
        "region": "Flemish Region"
      },
      {
        "percentage": "9.8E-5",
        "region": "Wallonia"
      },
      {
        "percentage": "0.007633",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.000881",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.001076",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "9.8E-5",
        "region": "Veneto"
      },
      {
        "percentage": "9.8E-5",
        "region": "Umbria"
      },
      {
        "percentage": "0.001566",
        "region": "Crete"
      },
      {
        "percentage": "9.8E-5",
        "region": "County Tipperary"
      },
      {
        "percentage": "0.000196",
        "region": "County Cork"
      },
      {
        "percentage": "9.8E-5",
        "region": "Donegal"
      },
      {
        "percentage": "0.001468",
        "region": "Dublin"
      },
      {
        "percentage": "0.000294",
        "region": "Galway"
      },
      {
        "percentage": "9.8E-5",
        "region": "Kilkenny"
      },
      {
        "percentage": "9.8E-5",
        "region": "County Laois"
      },
      {
        "percentage": "0.000196",
        "region": "Limerick"
      },
      {
        "percentage": "9.8E-5",
        "region": "County Louth"
      },
      {
        "percentage": "9.8E-5",
        "region": "County Mayo"
      },
      {
        "percentage": "0.000196",
        "region": "County Meath"
      },
      {
        "percentage": "0.000196",
        "region": "County Monaghan"
      },
      {
        "percentage": "9.8E-5",
        "region": "Roscommon"
      },
      {
        "percentage": "9.8E-5",
        "region": "Sligo"
      },
      {
        "percentage": "9.8E-5",
        "region": "Waterford"
      },
      {
        "percentage": "9.8E-5",
        "region": "Tuscany"
      },
      {
        "percentage": "0.000294",
        "region": "County Westmeath"
      },
      {
        "percentage": "9.8E-5",
        "region": "Wicklow"
      },
      {
        "percentage": "0.000489",
        "region": "Abruzzo"
      },
      {
        "percentage": "9.8E-5",
        "region": "Campania"
      },
      {
        "percentage": "9.8E-5",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.000196",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.000391",
        "region": "Lazio"
      },
      {
        "percentage": "0.000391",
        "region": "Lombardia"
      },
      {
        "percentage": "9.8E-5",
        "region": "Marche"
      },
      {
        "percentage": "9.8E-5",
        "region": "Piedmont"
      },
      {
        "percentage": "0.000294",
        "region": "Puglia"
      },
      {
        "percentage": "0.000391",
        "region": "Sardinia"
      },
      {
        "percentage": "0.000391",
        "region": "Sicilia"
      },
      {
        "percentage": "0.002838",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.001174",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.004208",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.002544",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.000294",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.011645",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.003131",
        "region": "Beja District"
      },
      {
        "percentage": "0.013602",
        "region": "Braga District"
      },
      {
        "percentage": "0.002349",
        "region": "Braganca"
      },
      {
        "percentage": "0.004795",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.008024",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.00548",
        "region": "Évora District"
      },
      {
        "percentage": "0.014483",
        "region": "Faro District"
      },
      {
        "percentage": "0.010569",
        "region": "Madeira"
      },
      {
        "percentage": "0.002838",
        "region": "Guarda District"
      },
      {
        "percentage": "0.009296",
        "region": "Leiria District"
      },
      {
        "percentage": "0.044231",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.033271",
        "region": "Porto District"
      },
      {
        "percentage": "9.8E-5",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.007046",
        "region": "Santarém District"
      },
      {
        "percentage": "0.019963",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.003816",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.003131",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.004893",
        "region": "Viseu District"
      },
      {
        "percentage": "0.008416",
        "region": "Azores"
      },
      {
        "percentage": "0.000979",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.019669",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.015364",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.005382",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.004599",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.067717",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.010666",
        "region": "Haskovo Province"
      },
      {
        "percentage": "9.8E-5",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "9.8E-5",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.001174",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.000489",
        "region": "Lika-Senj County"
      },
      {
        "percentage": "0.000294",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.001761",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.000979",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.001076",
        "region": "Thessaly"
      },
      {
        "percentage": "0.000979",
        "region": "Western Greece"
      },
      {
        "percentage": "0.000489",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.001761",
        "region": "Bjelovar-Bilogora County"
      },
      {
        "percentage": "0.000979",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.001076",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.002544",
        "region": "Istria County"
      },
      {
        "percentage": "0.000685",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.001076",
        "region": "Koprivnica-Križevci County"
      },
      {
        "percentage": "0.000783",
        "region": "Krapina-Zagorje County"
      },
      {
        "percentage": "0.001174",
        "region": "Međimurje County"
      },
      {
        "percentage": "9.8E-5",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.003523",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.000391",
        "region": "Požega-Slavonia County"
      },
      {
        "percentage": "0.003523",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000881",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.002838",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.003425",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.001761",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.000881",
        "region": "Virovitica-Podravina County"
      },
      {
        "percentage": "0.001957",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.001566",
        "region": "Zadar County"
      },
      {
        "percentage": "0.002349",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.015951",
        "region": "Zagreb"
      },
      {
        "percentage": "9.8E-5",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.000685",
        "region": "Vidzeme"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T12:14:45+0000",
    "ad_creative_body": "Surprenez vos proches avec un cadeau original qui a du sens et qui est bon pour la planète. Naissance, anniversaire, mariage : toutes les occasions sont bonnes pour offrir des arbres.",
    "ad_creative_link_caption": "ecotree.fr",
    "ad_creative_link_description": "Surprenez vos proches avec un cadeau original qui a du sens et qui est bon pour la planète. Naissance, anniversaire, mariage : toutes les occasions sont bonnes pour offrir des arbres.",
    "ad_creative_link_title": "A court d'idées pour la fête des mères ? On vous souffle un cadeau formidable !",
    "ad_delivery_start_time": "2019-05-13T12:55:55+0000",
    "ad_delivery_stop_time": "2019-05-17T12:55:55+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=408173123353698&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.038961",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.277056",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.121212",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.281385",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.038961",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.069264",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.004329",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.047619",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.04329",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.008658",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.025974",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.021645",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.008658",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.008658",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.004329",
        "age": "65+",
        "gender": "unknown"
      }
    ],
    "funding_entity": "EcoTree",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "386108291584856",
    "page_name": "EcoTree",
    "region_distribution": [
      {
        "percentage": "0.029661",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.008475",
        "region": "Limousin"
      },
      {
        "percentage": "0.118644",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.127119",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.050847",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.016949",
        "region": "Picardie"
      },
      {
        "percentage": "0.04661",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.067797",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.042373",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.033898",
        "region": "Lorraine"
      },
      {
        "percentage": "0.042373",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.033898",
        "region": "Auvergne"
      },
      {
        "percentage": "0.114407",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.038136",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.025424",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.012712",
        "region": "Corse"
      },
      {
        "percentage": "0.016949",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.055085",
        "region": "Centre"
      },
      {
        "percentage": "0.04661",
        "region": "Bretagne"
      },
      {
        "percentage": "0.016949",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.012712",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.042373",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-09T11:53:41+0000",
    "ad_creative_body": "Soutenez notre projet #Meandyoutoo contre le #sexisme au travail en votant pour nous!!! 3 minutes en cliquant ici :\nhttps://lafabriqueaviva.fr/fr/project/1518/show Pour voter il faut d'abord s'inscrire et vous pourrez donner directement 10 votes!",
    "ad_creative_link_caption": "lafabriqueaviva.fr",
    "ad_creative_link_title": "webapp contre le sexisme au travail",
    "ad_delivery_start_time": "2019-05-13T11:46:49+0000",
    "ad_delivery_stop_time": "2019-05-31T11:46:49+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=599313583909396&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.640411",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.15411",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.106164",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.078767",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.020548",
        "age": "55-64",
        "gender": "female"
      }
    ],
    "funding_entity": "Carole Anne Michelon",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "730327337332702",
    "page_name": "Meandyoutoo",
    "region_distribution": [
      {
        "percentage": "0.054237",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.00339",
        "region": "Limousin"
      },
      {
        "percentage": "0.111864",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.094915",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.016949",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.027119",
        "region": "Picardie"
      },
      {
        "percentage": "0.050847",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.044068",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.061017",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.037288",
        "region": "Lorraine"
      },
      {
        "percentage": "0.050847",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.016949",
        "region": "Auvergne"
      },
      {
        "percentage": "0.230508",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.023729",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.010169",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.016949",
        "region": "Corse"
      },
      {
        "percentage": "0.020339",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.027119",
        "region": "Centre"
      },
      {
        "percentage": "0.030508",
        "region": "Bretagne"
      },
      {
        "percentage": "0.013559",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.023729",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.033898",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T10:47:52+0000",
    "ad_creative_body": "🇪🇺 Guy Verhofstadt fights for freedom and progress in Europe. \n📱 FOLLOW HIM here: https://www.facebook.com/GuyVerhofstadt/",
    "ad_delivery_start_time": "2019-05-13T10:47:52+0000",
    "ad_delivery_stop_time": "2019-05-25T10:30:50+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=436505650509026&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.000408",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.12107",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.000408",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.000204",
        "age": "13-17",
        "gender": "unknown"
      },
      {
        "percentage": "0.000612",
        "age": "65+",
        "gender": "unknown"
      },
      {
        "percentage": "0.000408",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.000408",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.004492",
        "age": "13-17",
        "gender": "female"
      },
      {
        "percentage": "0.006737",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.00735",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.199673",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.026133",
        "age": "13-17",
        "gender": "male"
      },
      {
        "percentage": "0.048591",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.198653",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.104328",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.055941",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.14557",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.010208",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.029808",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.038791",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.000204",
        "age": "55-64",
        "gender": "unknown"
      }
    ],
    "funding_entity": "ALDE Group in the European Parliament. ",
    "impressions": {
      "lower_bound": "5000",
      "upper_bound": "9999"
    },
    "page_id": "123910440019",
    "page_name": "ALDE Group – Liberals and Democrats in the European Parliament",
    "region_distribution": [
      {
        "percentage": "0.000206",
        "region": "Carlow"
      },
      {
        "percentage": "0.0033",
        "region": "Vas County"
      },
      {
        "percentage": "0.008662",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.032172",
        "region": "Budapest"
      },
      {
        "percentage": "0.005362",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.007218",
        "region": "Fejér County"
      },
      {
        "percentage": "0.006806",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.005362",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.0033",
        "region": "Heves County"
      },
      {
        "percentage": "0.006393",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.001237",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.011755",
        "region": "Pest County"
      },
      {
        "percentage": "0.006187",
        "region": "Somogy County"
      },
      {
        "percentage": "0.008455",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.005981",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.004537",
        "region": "Tolna County"
      },
      {
        "percentage": "0.005156",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.007837",
        "region": "Baranya County"
      },
      {
        "percentage": "0.003506",
        "region": "Zala County"
      },
      {
        "percentage": "0.003093",
        "region": "Lefkoşa District"
      },
      {
        "percentage": "0.000825",
        "region": "Famagusta District"
      },
      {
        "percentage": "0.000412",
        "region": "Larnaca District"
      },
      {
        "percentage": "0.000206",
        "region": "Limassol District"
      },
      {
        "percentage": "0.000619",
        "region": "Paphos District"
      },
      {
        "percentage": "0.004949",
        "region": "Alba County"
      },
      {
        "percentage": "0.01093",
        "region": "Arad County"
      },
      {
        "percentage": "0.012786",
        "region": "Argeș County"
      },
      {
        "percentage": "0.01258",
        "region": "Bacău County"
      },
      {
        "percentage": "0.00928",
        "region": "Bihor County"
      },
      {
        "percentage": "0.002681",
        "region": "Bistrița-Năsăud County"
      },
      {
        "percentage": "0.005568",
        "region": "Botoșani County"
      },
      {
        "percentage": "0.007012",
        "region": "Brăila County"
      },
      {
        "percentage": "0.006187",
        "region": "Békés County"
      },
      {
        "percentage": "0.007424",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.058363",
        "region": "Bucharest"
      },
      {
        "percentage": "0.00165",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.000206",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.004125",
        "region": "Varna Province"
      },
      {
        "percentage": "0.002681",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000412",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.000619",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.001237",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.000412",
        "region": "Southeast Slovenia Statistical Region"
      },
      {
        "percentage": "0.000206",
        "region": "Littoral–Inner Carniola Statistical Region"
      },
      {
        "percentage": "0.000825",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.000825",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000206",
        "region": "Carinthia Statistical Region"
      },
      {
        "percentage": "0.000412",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.001856",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.000206",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.000619",
        "region": "Košice Region"
      },
      {
        "percentage": "0.004125",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.001031",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.000619",
        "region": "Presov"
      },
      {
        "percentage": "0.001031",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.000619",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.000825",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.001237",
        "region": "Alytus County"
      },
      {
        "percentage": "0.001856",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.001031",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.001237",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.000825",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.000619",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000412",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.000412",
        "region": "Telšiai County"
      },
      {
        "percentage": "0.000412",
        "region": "Utena County"
      },
      {
        "percentage": "0.012786",
        "region": "Brașov County"
      },
      {
        "percentage": "0.006187",
        "region": "Buzău County"
      },
      {
        "percentage": "0.000619",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.002475",
        "region": "Harju County"
      },
      {
        "percentage": "0.000206",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.000206",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.000206",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.000619",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.000206",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.000206",
        "region": "Lorraine"
      },
      {
        "percentage": "0.000206",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.000206",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.000206",
        "region": "Picardie"
      },
      {
        "percentage": "0.000206",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.000412",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.00165",
        "region": "Central Region"
      },
      {
        "percentage": "0.000206",
        "region": "Gozo"
      },
      {
        "percentage": "0.001031",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.000412",
        "region": "Pärnu County"
      },
      {
        "percentage": "0.000206",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.000412",
        "region": "Tartu County"
      },
      {
        "percentage": "0.000206",
        "region": "Viljandi County"
      },
      {
        "percentage": "0.000412",
        "region": "Võru County"
      },
      {
        "percentage": "0.004537",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000412",
        "region": "Latgale"
      },
      {
        "percentage": "0.002062",
        "region": "Semigallia"
      },
      {
        "percentage": "0.000825",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.000206",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.000206",
        "region": "Hamburg"
      },
      {
        "percentage": "0.000206",
        "region": "Hessen"
      },
      {
        "percentage": "0.000619",
        "region": "Niedersachsen"
      },
      {
        "percentage": "0.000825",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.000206",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000206",
        "region": "Thüringen"
      },
      {
        "percentage": "0.000206",
        "region": "Bretagne"
      },
      {
        "percentage": "0.000206",
        "region": "Auvergne"
      },
      {
        "percentage": "0.008662",
        "region": "Caraș-Severin County"
      },
      {
        "percentage": "0.005981",
        "region": "Neamț County"
      },
      {
        "percentage": "0.008249",
        "region": "Cluj County"
      },
      {
        "percentage": "0.01093",
        "region": "Constanța County"
      },
      {
        "percentage": "0.000619",
        "region": "Covasna County"
      },
      {
        "percentage": "0.006806",
        "region": "Dâmbovița County"
      },
      {
        "percentage": "0.011343",
        "region": "Dolj County"
      },
      {
        "percentage": "0.011343",
        "region": "Galați County"
      },
      {
        "percentage": "0.008249",
        "region": "Gorj County"
      },
      {
        "percentage": "0.002269",
        "region": "Harghita County"
      },
      {
        "percentage": "0.018561",
        "region": "Hunedoara County"
      },
      {
        "percentage": "0.003918",
        "region": "Ialomița County"
      },
      {
        "percentage": "0.015673",
        "region": "Iași County"
      },
      {
        "percentage": "0.009074",
        "region": "Maramureș County"
      },
      {
        "percentage": "0.006187",
        "region": "Mehedinți County"
      },
      {
        "percentage": "0.008662",
        "region": "Mureș County"
      },
      {
        "percentage": "0.006187",
        "region": "Olt County"
      },
      {
        "percentage": "0.000206",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.014642",
        "region": "Prahova County"
      },
      {
        "percentage": "0.002062",
        "region": "Sălaj County"
      },
      {
        "percentage": "0.004537",
        "region": "Satu Mare County"
      },
      {
        "percentage": "0.00763",
        "region": "Sibiu County"
      },
      {
        "percentage": "0.009074",
        "region": "Suceava County"
      },
      {
        "percentage": "0.003918",
        "region": "Teleorman County"
      },
      {
        "percentage": "0.016498",
        "region": "Timiș County"
      },
      {
        "percentage": "0.003712",
        "region": "Tulcea County"
      },
      {
        "percentage": "0.002887",
        "region": "Vaslui County"
      },
      {
        "percentage": "0.004949",
        "region": "Vâlcea County"
      },
      {
        "percentage": "0.006187",
        "region": "Vrancea County"
      },
      {
        "percentage": "0.0033",
        "region": "Călărași County"
      },
      {
        "percentage": "0.002475",
        "region": "Giurgiu County"
      },
      {
        "percentage": "0.000619",
        "region": "Ilfov County"
      },
      {
        "percentage": "0.001444",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.000619",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.000619",
        "region": "County Cork"
      },
      {
        "percentage": "0.000206",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.000206",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.006187",
        "region": "Cataluña"
      },
      {
        "percentage": "0.000206",
        "region": "Extremadura"
      },
      {
        "percentage": "0.000825",
        "region": "Galicia"
      },
      {
        "percentage": "0.001237",
        "region": "País Vasco"
      },
      {
        "percentage": "0.005774",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000412",
        "region": "Örebro County"
      },
      {
        "percentage": "0.000206",
        "region": "Östergötland County"
      },
      {
        "percentage": "0.000206",
        "region": "Värmland County"
      },
      {
        "percentage": "0.000206",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "0.000206",
        "region": "Pirkanmaa"
      },
      {
        "percentage": "0.000206",
        "region": "Tavastia Proper"
      },
      {
        "percentage": "0.000206",
        "region": "Satakunta"
      },
      {
        "percentage": "0.000412",
        "region": "Uusimaa"
      },
      {
        "percentage": "0.013199",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.001856",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.001237",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.000619",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.005568",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.001237",
        "region": "Crete"
      },
      {
        "percentage": "0.001237",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.001237",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.001237",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.000825",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.000825",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.002062",
        "region": "Thessaly"
      },
      {
        "percentage": "0.00165",
        "region": "Western Greece"
      },
      {
        "percentage": "0.001237",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.000206",
        "region": "Salzburg"
      },
      {
        "percentage": "0.000412",
        "region": "Styria"
      },
      {
        "percentage": "0.000619",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.000412",
        "region": "Aragón"
      },
      {
        "percentage": "0.000206",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.000412",
        "region": "Molise"
      },
      {
        "percentage": "0.000206",
        "region": "Donegal"
      },
      {
        "percentage": "0.002887",
        "region": "Dublin"
      },
      {
        "percentage": "0.000206",
        "region": "Galway"
      },
      {
        "percentage": "0.000206",
        "region": "Kildare"
      },
      {
        "percentage": "0.0033",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.001237",
        "region": "Basilicata"
      },
      {
        "percentage": "0.002887",
        "region": "Calabria"
      },
      {
        "percentage": "0.010105",
        "region": "Campania"
      },
      {
        "percentage": "0.00928",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.003093",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.01093",
        "region": "Lazio"
      },
      {
        "percentage": "0.006806",
        "region": "Liguria"
      },
      {
        "percentage": "0.016292",
        "region": "Lombardia"
      },
      {
        "percentage": "0.003506",
        "region": "Marche"
      },
      {
        "percentage": "0.004949",
        "region": "Piedmont"
      },
      {
        "percentage": "0.005156",
        "region": "Andalusia"
      },
      {
        "percentage": "0.008662",
        "region": "Puglia"
      },
      {
        "percentage": "0.002475",
        "region": "Sardinia"
      },
      {
        "percentage": "0.009693",
        "region": "Sicilia"
      },
      {
        "percentage": "0.007424",
        "region": "Tuscany"
      },
      {
        "percentage": "0.002475",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.001856",
        "region": "Umbria"
      },
      {
        "percentage": "0.000206",
        "region": "Aosta Valley"
      },
      {
        "percentage": "0.009074",
        "region": "Veneto"
      },
      {
        "percentage": "0.000825",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.000206",
        "region": "La Rioja"
      },
      {
        "percentage": "0.002887",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.000412",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.000206",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.000206",
        "region": "Cantabria"
      },
      {
        "percentage": "0.000206",
        "region": "Tyrol"
      },
      {
        "percentage": "0.000206",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.001444",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.000825",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.002062",
        "region": "Madeira"
      },
      {
        "percentage": "0.00165",
        "region": "Leiria District"
      },
      {
        "percentage": "0.012786",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.000206",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.004125",
        "region": "Porto District"
      },
      {
        "percentage": "0.000825",
        "region": "Santarém District"
      },
      {
        "percentage": "0.001856",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.000412",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.000619",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.000619",
        "region": "Viseu District"
      },
      {
        "percentage": "0.002062",
        "region": "Azores"
      },
      {
        "percentage": "0.000825",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.002475",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.003093",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.000825",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.000206",
        "region": "Évora District"
      },
      {
        "percentage": "0.015467",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.00165",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.000619",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.001031",
        "region": "Kyustendil Province"
      },
      {
        "percentage": "0.001444",
        "region": "Lovech Province"
      },
      {
        "percentage": "0.000825",
        "region": "Montana Province"
      },
      {
        "percentage": "0.002269",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.000825",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.003093",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.005156",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.000825",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.002269",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.001031",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.001031",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.002269",
        "region": "Faro District"
      },
      {
        "percentage": "0.000619",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.000619",
        "region": "Istria County"
      },
      {
        "percentage": "0.004743",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.000206",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.000206",
        "region": "Koprivnica-Križevci County"
      },
      {
        "percentage": "0.000206",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.000825",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000206",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.001031",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.001856",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.000206",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.000825",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.004949",
        "region": "Zagreb"
      },
      {
        "percentage": "0.015673",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.010724",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.01093",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.004537",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.00763",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.001237",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.003093",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.004125",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.002062",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.011343",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.018973",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.002887",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.00763",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.011961",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.008249",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.024129",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.000412",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.000825",
        "region": "Beja District"
      },
      {
        "percentage": "0.001237",
        "region": "Braga District"
      },
      {
        "percentage": "0.000412",
        "region": "Braganca"
      },
      {
        "percentage": "0.000206",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T09:44:31+0000",
    "ad_creative_body": "Today, Team Europe’s Guy Verhofstadt will be interviewed by Euronews English #RawPolitics! The interview will be streamed on Facebook and Euronews TV channel so stay tuned and read more: http://bit.ly/2PKR3Kk \n#EP2019 #RenewEurope",
    "ad_delivery_start_time": "2019-05-13T09:44:36+0000",
    "ad_delivery_stop_time": "2019-05-14T09:44:31+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=724748687923499&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.088368",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.180436",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.000822",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.000411",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.000411",
        "age": "55-64",
        "gender": "unknown"
      },
      {
        "percentage": "0.001233",
        "age": "65+",
        "gender": "unknown"
      },
      {
        "percentage": "0.086724",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.058775",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.121249",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.090834",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.050966",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.073161",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.092067",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.025894",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.019318",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.108508",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.000822",
        "age": "25-34",
        "gender": "unknown"
      }
    ],
    "funding_entity": "ALDE Party – Liberals and Democrats for Europe",
    "impressions": {
      "lower_bound": "1000",
      "upper_bound": "4999"
    },
    "page_id": "262681199589",
    "page_name": "ALDE Party – Liberals and Democrats for Europe",
    "region_distribution": [
      {
        "percentage": "0.000414",
        "region": "County Cork"
      },
      {
        "percentage": "0.000829",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.002072",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.001243",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.003315",
        "region": "Prague"
      },
      {
        "percentage": "0.000414",
        "region": "South Moravian Region"
      },
      {
        "percentage": "0.000414",
        "region": "Vysočina Region"
      },
      {
        "percentage": "0.000414",
        "region": "Olomouc Region"
      },
      {
        "percentage": "0.000414",
        "region": "Moravian-Silesian Region"
      },
      {
        "percentage": "0.000414",
        "region": "Pardubice Region"
      },
      {
        "percentage": "0.000829",
        "region": "Central Bohemian Region"
      },
      {
        "percentage": "0.000829",
        "region": "Ústí nad Labem Region"
      },
      {
        "percentage": "0.000414",
        "region": "Zlín Region"
      },
      {
        "percentage": "0.000829",
        "region": "Littoral–Inner Carniola Statistical Region"
      },
      {
        "percentage": "0.001658",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000829",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000414",
        "region": "Carinthia Statistical Region"
      },
      {
        "percentage": "0.000829",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.005387",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.000414",
        "region": "Upper Carniola Statistical Region"
      },
      {
        "percentage": "0.000414",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "0.000414",
        "region": "Goriška Statistical Region"
      },
      {
        "percentage": "0.001243",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.008703",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.001658",
        "region": "Košice Region"
      },
      {
        "percentage": "0.001658",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.000829",
        "region": "Presov"
      },
      {
        "percentage": "0.001243",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.001658",
        "region": "Vidin Province"
      },
      {
        "percentage": "0.00373",
        "region": "Varna Province"
      },
      {
        "percentage": "0.002487",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.003315",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.004559",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.000829",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.000829",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.002901",
        "region": "Azores"
      },
      {
        "percentage": "0.000414",
        "region": "Grevenmacher District"
      },
      {
        "percentage": "0.005802",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.002901",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.002487",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.001658",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.001243",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.024451",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.002072",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.000829",
        "region": "Kyustendil Province"
      },
      {
        "percentage": "0.002901",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.001658",
        "region": "Lovech Province"
      },
      {
        "percentage": "0.001243",
        "region": "Montana Province"
      },
      {
        "percentage": "0.002487",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.001658",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.004144",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.000829",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.001658",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.000829",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.002072",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.000414",
        "region": "Sliven Province"
      },
      {
        "percentage": "0.000414",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.001243",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.006216",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.001243",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.002487",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.010775",
        "region": "Porto District"
      },
      {
        "percentage": "0.001658",
        "region": "Harju County"
      },
      {
        "percentage": "0.002901",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.001243",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.001243",
        "region": "Limousin"
      },
      {
        "percentage": "0.001243",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.001243",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.000414",
        "region": "Picardie"
      },
      {
        "percentage": "0.000829",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.001658",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.000829",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.001243",
        "region": "Alsace"
      },
      {
        "percentage": "0.001658",
        "region": "Central Region"
      },
      {
        "percentage": "0.000414",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.000414",
        "region": "Tartu County"
      },
      {
        "percentage": "0.000414",
        "region": "Centre"
      },
      {
        "percentage": "0.003315",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000829",
        "region": "Semigallia"
      },
      {
        "percentage": "0.000829",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.001658",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.001243",
        "region": "Bayern"
      },
      {
        "percentage": "0.000829",
        "region": "Hamburg"
      },
      {
        "percentage": "0.000829",
        "region": "Hessen"
      },
      {
        "percentage": "0.001243",
        "region": "Niedersachsen"
      },
      {
        "percentage": "0.002487",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.000829",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000414",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.000414",
        "region": "Thüringen"
      },
      {
        "percentage": "0.000414",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.000829",
        "region": "Bretagne"
      },
      {
        "percentage": "0.000414",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.004973",
        "region": "Fejér County"
      },
      {
        "percentage": "0.000414",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.000414",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.001243",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000829",
        "region": "Telšiai County"
      },
      {
        "percentage": "0.001243",
        "region": "Utena County"
      },
      {
        "percentage": "0.008288",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.006216",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.004559",
        "region": "Baranya County"
      },
      {
        "percentage": "0.002487",
        "region": "Békés County"
      },
      {
        "percentage": "0.006216",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.06838",
        "region": "Budapest"
      },
      {
        "percentage": "0.006631",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.002901",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000414",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.006216",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.001243",
        "region": "Heves County"
      },
      {
        "percentage": "0.004144",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.002072",
        "region": "Nógrád County"
      },
      {
        "percentage": "0.009117",
        "region": "Pest County"
      },
      {
        "percentage": "0.004559",
        "region": "Somogy County"
      },
      {
        "percentage": "0.002072",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.00373",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.002487",
        "region": "Tolna County"
      },
      {
        "percentage": "0.006216",
        "region": "Vas County"
      },
      {
        "percentage": "0.00373",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.002072",
        "region": "Zala County"
      },
      {
        "percentage": "0.000414",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.002487",
        "region": "Santarém District"
      },
      {
        "percentage": "0.000414",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.002072",
        "region": "Dublin"
      },
      {
        "percentage": "0.000829",
        "region": "Gävleborg County"
      },
      {
        "percentage": "0.000414",
        "region": "Navarra"
      },
      {
        "percentage": "0.001243",
        "region": "Cantabria"
      },
      {
        "percentage": "0.019063",
        "region": "Andalusia"
      },
      {
        "percentage": "0.002487",
        "region": "Aragón"
      },
      {
        "percentage": "0.002901",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.005387",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.004559",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.02155",
        "region": "Cataluña"
      },
      {
        "percentage": "0.001658",
        "region": "Extremadura"
      },
      {
        "percentage": "0.005387",
        "region": "Galicia"
      },
      {
        "percentage": "0.001243",
        "region": "País Vasco"
      },
      {
        "percentage": "0.009532",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000414",
        "region": "Halland County"
      },
      {
        "percentage": "0.010361",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.000414",
        "region": "Västerbotten County"
      },
      {
        "percentage": "0.001243",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.000414",
        "region": "Skåne County"
      },
      {
        "percentage": "0.000829",
        "region": "Southwest Finland"
      },
      {
        "percentage": "0.000414",
        "region": "Kymenlaakso"
      },
      {
        "percentage": "0.000414",
        "region": "Tavastia Proper"
      },
      {
        "percentage": "0.000414",
        "region": "Satakunta"
      },
      {
        "percentage": "0.000414",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.001243",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "0.000414",
        "region": "Region of Southern Denmark"
      },
      {
        "percentage": "0.000414",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.011604",
        "region": "Brussels"
      },
      {
        "percentage": "0.002901",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.000829",
        "region": "La Rioja"
      },
      {
        "percentage": "0.003315",
        "region": "Wallonia"
      },
      {
        "percentage": "0.005802",
        "region": "Puglia"
      },
      {
        "percentage": "0.000414",
        "region": "Limerick"
      },
      {
        "percentage": "0.002901",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.001243",
        "region": "Basilicata"
      },
      {
        "percentage": "0.001243",
        "region": "Calabria"
      },
      {
        "percentage": "0.010361",
        "region": "Campania"
      },
      {
        "percentage": "0.017406",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.005387",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.028181",
        "region": "Lazio"
      },
      {
        "percentage": "0.005802",
        "region": "Liguria"
      },
      {
        "percentage": "0.033154",
        "region": "Lombardia"
      },
      {
        "percentage": "0.004973",
        "region": "Marche"
      },
      {
        "percentage": "0.01409",
        "region": "Piedmont"
      },
      {
        "percentage": "0.007874",
        "region": "Sardinia"
      },
      {
        "percentage": "0.001658",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.008703",
        "region": "Sicilia"
      },
      {
        "percentage": "0.017406",
        "region": "Tuscany"
      },
      {
        "percentage": "0.004144",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.003315",
        "region": "Umbria"
      },
      {
        "percentage": "0.000414",
        "region": "Aosta Valley"
      },
      {
        "percentage": "0.013676",
        "region": "Veneto"
      },
      {
        "percentage": "0.000414",
        "region": "Friesland"
      },
      {
        "percentage": "0.001243",
        "region": "Gelderland"
      },
      {
        "percentage": "0.000829",
        "region": "Groningen"
      },
      {
        "percentage": "0.000829",
        "region": "Limburg"
      },
      {
        "percentage": "0.000414",
        "region": "North Brabant"
      },
      {
        "percentage": "0.000414",
        "region": "Noord-Holland"
      },
      {
        "percentage": "0.000829",
        "region": "Zuid-Holland"
      },
      {
        "percentage": "0.004973",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.000414",
        "region": "Pella"
      },
      {
        "percentage": "0.021964",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.002901",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.005387",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.002072",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.004973",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.002487",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.002072",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.00746",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.000414",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.001658",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.000829",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.007874",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.008703",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.001243",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.012018",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.000829",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.002487",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.026523",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.002072",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.000414",
        "region": "Beja District"
      },
      {
        "percentage": "0.005387",
        "region": "Braga District"
      },
      {
        "percentage": "0.000414",
        "region": "Braganca"
      },
      {
        "percentage": "0.002901",
        "region": "Castelo Branco District"
      },
      {
        "percentage": "0.000829",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.000414",
        "region": "Évora District"
      },
      {
        "percentage": "0.002901",
        "region": "Faro District"
      },
      {
        "percentage": "0.001658",
        "region": "Madeira"
      },
      {
        "percentage": "0.001243",
        "region": "Guarda District"
      },
      {
        "percentage": "0.001243",
        "region": "Leiria District"
      },
      {
        "percentage": "0.011604",
        "region": "Zagreb"
      },
      {
        "percentage": "0.002487",
        "region": "Zadar County"
      },
      {
        "percentage": "0.062578",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.000414",
        "region": "Upper Austria"
      },
      {
        "percentage": "0.003315",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.009532",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.028181",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.009117",
        "region": "Crete"
      },
      {
        "percentage": "0.011189",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.00373",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.002901",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.007045",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.006631",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.013262",
        "region": "Thessaly"
      },
      {
        "percentage": "0.013676",
        "region": "Western Greece"
      },
      {
        "percentage": "0.004559",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.000414",
        "region": "Salzburg"
      },
      {
        "percentage": "0.000414",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.000829",
        "region": "Styria"
      },
      {
        "percentage": "0.000414",
        "region": "Tyrol"
      },
      {
        "percentage": "0.002901",
        "region": "Vienna"
      },
      {
        "percentage": "0.001243",
        "region": "Bjelovar-Bilogora County"
      },
      {
        "percentage": "0.000829",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.001658",
        "region": "Istria County"
      },
      {
        "percentage": "0.000414",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.001658",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.002072",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.000829",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.001243",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.002901",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.001658",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.002901",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T09:39:26+0000",
    "ad_creative_body": "Inspire your day with #FreedomPhrase of the week, from Team Europe's Guy Verhofstadt! He talked with Europe's youth on 6 April, for more 👉 check our website teameurope.eu⁣\n.⁣\n.⁣\n.⁣\n#TeamEurope #RenewEurope #inspiration #fridayquotes #ALDE #Europe #politics #EU #EuropeanUnion #EP2019 #euelections2019 #liberals",
    "ad_delivery_start_time": "2019-05-13T09:39:36+0000",
    "ad_delivery_stop_time": "2019-05-17T09:39:26+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=649806918777705&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.055096",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.06405",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.151171",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.044421",
        "age": "65+",
        "gender": "male"
      },
      {
        "percentage": "0.0427",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.042011",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.054752",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.125",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.344697",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.026171",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.016185",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.029959",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.001033",
        "age": "65+",
        "gender": "unknown"
      },
      {
        "percentage": "0.001033",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.001033",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.000689",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "ALDE Party – Liberals and Democrats for Europe",
    "impressions": {
      "lower_bound": "1000",
      "upper_bound": "4999"
    },
    "page_id": "262681199589",
    "page_name": "ALDE Party – Liberals and Democrats for Europe",
    "region_distribution": [
      {
        "percentage": "0.000344",
        "region": "County Clare"
      },
      {
        "percentage": "0.000344",
        "region": "Littoral–Inner Carniola Statistical Region"
      },
      {
        "percentage": "0.000689",
        "region": "Hradec Králové Region"
      },
      {
        "percentage": "0.00551",
        "region": "Prague"
      },
      {
        "percentage": "0.000689",
        "region": "South Moravian Region"
      },
      {
        "percentage": "0.000689",
        "region": "South Bohemian Region"
      },
      {
        "percentage": "0.000689",
        "region": "Vysočina Region"
      },
      {
        "percentage": "0.000344",
        "region": "Liberec Region"
      },
      {
        "percentage": "0.001033",
        "region": "Olomouc Region"
      },
      {
        "percentage": "0.000344",
        "region": "Moravian-Silesian Region"
      },
      {
        "percentage": "0.000344",
        "region": "Pardubice Region"
      },
      {
        "percentage": "0.000344",
        "region": "Plzeň Region"
      },
      {
        "percentage": "0.001033",
        "region": "Central Bohemian Region"
      },
      {
        "percentage": "0.000344",
        "region": "Ústí nad Labem Region"
      },
      {
        "percentage": "0.000689",
        "region": "Zlín Region"
      },
      {
        "percentage": "0.000344",
        "region": "Southeast Slovenia Statistical Region"
      },
      {
        "percentage": "0.001033",
        "region": "Mura Statistical Region"
      },
      {
        "percentage": "0.002066",
        "region": "Vratsa Province"
      },
      {
        "percentage": "0.001722",
        "region": "Drava Statistical Region"
      },
      {
        "percentage": "0.000344",
        "region": "Carinthia Statistical Region"
      },
      {
        "percentage": "0.000689",
        "region": "Savinja Statistical Region"
      },
      {
        "percentage": "0.006543",
        "region": "Central Slovenia Statistical Region"
      },
      {
        "percentage": "0.001033",
        "region": "Upper Carniola Statistical Region"
      },
      {
        "percentage": "0.001722",
        "region": "Coastal–Karst Statistical Region"
      },
      {
        "percentage": "0.000344",
        "region": "Goriška Statistical Region"
      },
      {
        "percentage": "0.002066",
        "region": "Banská Bystrica Region"
      },
      {
        "percentage": "0.007231",
        "region": "Bratislava Region"
      },
      {
        "percentage": "0.003788",
        "region": "Košice Region"
      },
      {
        "percentage": "0.001722",
        "region": "Nitra Region"
      },
      {
        "percentage": "0.003444",
        "region": "Presov"
      },
      {
        "percentage": "0.001722",
        "region": "Trenčín Region"
      },
      {
        "percentage": "0.003444",
        "region": "Trnava Region"
      },
      {
        "percentage": "0.001033",
        "region": "Yambol Province"
      },
      {
        "percentage": "0.002066",
        "region": "Veliko Tarnovo Province"
      },
      {
        "percentage": "0.000689",
        "region": "Alytus County"
      },
      {
        "percentage": "0.001377",
        "region": "Kardzhali Province"
      },
      {
        "percentage": "0.01343",
        "region": "Porto District"
      },
      {
        "percentage": "0.001033",
        "region": "Santarém District"
      },
      {
        "percentage": "0.00241",
        "region": "Setúbal District"
      },
      {
        "percentage": "0.001377",
        "region": "Viana do Castelo District"
      },
      {
        "percentage": "0.000689",
        "region": "Vila Real District"
      },
      {
        "percentage": "0.000689",
        "region": "Viseu District"
      },
      {
        "percentage": "0.00241",
        "region": "Azores"
      },
      {
        "percentage": "0.004132",
        "region": "Luxembourg District"
      },
      {
        "percentage": "0.005165",
        "region": "Blagoevgrad Province"
      },
      {
        "percentage": "0.002066",
        "region": "Burgas Province"
      },
      {
        "percentage": "0.001722",
        "region": "Dobrich Province"
      },
      {
        "percentage": "0.000344",
        "region": "Gabrovo Province"
      },
      {
        "percentage": "0.013085",
        "region": "Sofia City Province"
      },
      {
        "percentage": "0.003099",
        "region": "Haskovo Province"
      },
      {
        "percentage": "0.000689",
        "region": "Kyustendil Province"
      },
      {
        "percentage": "0.004821",
        "region": "Varna Province"
      },
      {
        "percentage": "0.001033",
        "region": "Lovech Province"
      },
      {
        "percentage": "0.002755",
        "region": "Montana Province"
      },
      {
        "percentage": "0.001722",
        "region": "Pazardzhik Province"
      },
      {
        "percentage": "0.000689",
        "region": "Pernik Province"
      },
      {
        "percentage": "0.00241",
        "region": "Pleven Province"
      },
      {
        "percentage": "0.00551",
        "region": "Plovdiv Province"
      },
      {
        "percentage": "0.001722",
        "region": "Razgrad Province"
      },
      {
        "percentage": "0.002066",
        "region": "Ruse Province"
      },
      {
        "percentage": "0.001722",
        "region": "Shumen Province"
      },
      {
        "percentage": "0.000344",
        "region": "Silistra Province"
      },
      {
        "percentage": "0.000344",
        "region": "Smolyan Province"
      },
      {
        "percentage": "0.000344",
        "region": "Sofia Province"
      },
      {
        "percentage": "0.002755",
        "region": "Stara Zagora Province"
      },
      {
        "percentage": "0.000689",
        "region": "Targovishte Province"
      },
      {
        "percentage": "0.005165",
        "region": "Žilina Region"
      },
      {
        "percentage": "0.004477",
        "region": "Kaunas County"
      },
      {
        "percentage": "0.023072",
        "region": "Lisbon District"
      },
      {
        "percentage": "0.005165",
        "region": "Kurzeme Region"
      },
      {
        "percentage": "0.000689",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.000689",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.000344",
        "region": "Picardie"
      },
      {
        "percentage": "0.000689",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.00241",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.001377",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.000689",
        "region": "Alsace"
      },
      {
        "percentage": "0.002755",
        "region": "Central Region"
      },
      {
        "percentage": "0.000689",
        "region": "South Eastern Region"
      },
      {
        "percentage": "0.003099",
        "region": "Harju County"
      },
      {
        "percentage": "0.000344",
        "region": "Lääne-Viru County"
      },
      {
        "percentage": "0.000344",
        "region": "Pärnu County"
      },
      {
        "percentage": "0.000344",
        "region": "Rapla County"
      },
      {
        "percentage": "0.000344",
        "region": "Tartu County"
      },
      {
        "percentage": "0.002755",
        "region": "Semigallia"
      },
      {
        "percentage": "0.000689",
        "region": "Limousin"
      },
      {
        "percentage": "0.000689",
        "region": "Vidzeme"
      },
      {
        "percentage": "0.00241",
        "region": "Baden-Württemberg"
      },
      {
        "percentage": "0.001722",
        "region": "Bayern"
      },
      {
        "percentage": "0.000344",
        "region": "Hamburg"
      },
      {
        "percentage": "0.000344",
        "region": "Hessen"
      },
      {
        "percentage": "0.001722",
        "region": "Niedersachsen"
      },
      {
        "percentage": "0.001722",
        "region": "Nordrhein-Westfalen"
      },
      {
        "percentage": "0.001377",
        "region": "Rheinland-Pfalz"
      },
      {
        "percentage": "0.000689",
        "region": "Schleswig-Holstein"
      },
      {
        "percentage": "0.000344",
        "region": "Brandenburg"
      },
      {
        "percentage": "0.000344",
        "region": "Mecklenburg-Vorpommern"
      },
      {
        "percentage": "0.000689",
        "region": "Sachsen"
      },
      {
        "percentage": "0.000344",
        "region": "Saxony-Anhalt"
      },
      {
        "percentage": "0.000344",
        "region": "Thüringen"
      },
      {
        "percentage": "0.000344",
        "region": "Lorraine"
      },
      {
        "percentage": "0.001033",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.000689",
        "region": "Klaipėda County"
      },
      {
        "percentage": "0.002755",
        "region": "Győr-Moson-Sopron County"
      },
      {
        "percentage": "0.000689",
        "region": "Marijampolė County"
      },
      {
        "percentage": "0.00241",
        "region": "Panevėžys County"
      },
      {
        "percentage": "0.000689",
        "region": "Šiauliai County"
      },
      {
        "percentage": "0.000344",
        "region": "Tauragė County"
      },
      {
        "percentage": "0.000689",
        "region": "Telšiai County"
      },
      {
        "percentage": "0.000689",
        "region": "Utena County"
      },
      {
        "percentage": "0.008953",
        "region": "Vilnius County"
      },
      {
        "percentage": "0.004132",
        "region": "Bács-Kiskun County"
      },
      {
        "percentage": "0.002066",
        "region": "Baranya County"
      },
      {
        "percentage": "0.00241",
        "region": "Békés County"
      },
      {
        "percentage": "0.004132",
        "region": "Borsod-Abaúj-Zemplén County"
      },
      {
        "percentage": "0.047176",
        "region": "Budapest"
      },
      {
        "percentage": "0.007231",
        "region": "Csongrád County"
      },
      {
        "percentage": "0.004477",
        "region": "Fejér County"
      },
      {
        "percentage": "0.006543",
        "region": "Hajdú-Bihar County"
      },
      {
        "percentage": "0.005165",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.00241",
        "region": "Zala County"
      },
      {
        "percentage": "0.000689",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.001033",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.001033",
        "region": "Bretagne"
      },
      {
        "percentage": "0.001033",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.000344",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.002066",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.003099",
        "region": "Veszprém County"
      },
      {
        "percentage": "0.002066",
        "region": "Komárom-Esztergom County"
      },
      {
        "percentage": "0.001722",
        "region": "Vas County"
      },
      {
        "percentage": "0.001377",
        "region": "Tolna County"
      },
      {
        "percentage": "0.001722",
        "region": "Jász-Nagykun-Szolnok County"
      },
      {
        "percentage": "0.003788",
        "region": "Szabolcs-Szatmár-Bereg County"
      },
      {
        "percentage": "0.001722",
        "region": "Somogy County"
      },
      {
        "percentage": "0.005854",
        "region": "Pest County"
      },
      {
        "percentage": "0.000344",
        "region": "Portalegre District"
      },
      {
        "percentage": "0.00241",
        "region": "Leiria District"
      },
      {
        "percentage": "0.001377",
        "region": "County Cork"
      },
      {
        "percentage": "0.001033",
        "region": "País Vasco"
      },
      {
        "percentage": "0.001033",
        "region": "Balearic Islands"
      },
      {
        "percentage": "0.009986",
        "region": "Comunidad de Madrid"
      },
      {
        "percentage": "0.003788",
        "region": "Region of Murcia"
      },
      {
        "percentage": "0.000344",
        "region": "Navarra"
      },
      {
        "percentage": "0.00241",
        "region": "Principality of Asturias"
      },
      {
        "percentage": "0.000689",
        "region": "Cantabria"
      },
      {
        "percentage": "0.009642",
        "region": "Andalusia"
      },
      {
        "percentage": "0.002066",
        "region": "Aragón"
      },
      {
        "percentage": "0.003099",
        "region": "Islas Canarias"
      },
      {
        "percentage": "0.00241",
        "region": "Castilla-La Mancha"
      },
      {
        "percentage": "0.002755",
        "region": "Castilla y Leon"
      },
      {
        "percentage": "0.025482",
        "region": "Cataluña"
      },
      {
        "percentage": "0.000689",
        "region": "Extremadura"
      },
      {
        "percentage": "0.003788",
        "region": "Galicia"
      },
      {
        "percentage": "0.010331",
        "region": "Comunidad Valenciana"
      },
      {
        "percentage": "0.000689",
        "region": "Utrecht"
      },
      {
        "percentage": "0.000344",
        "region": "Jönköping County"
      },
      {
        "percentage": "0.000344",
        "region": "Kalmar County"
      },
      {
        "percentage": "0.000689",
        "region": "Östergötland County"
      },
      {
        "percentage": "0.000344",
        "region": "Stockholm County"
      },
      {
        "percentage": "0.001377",
        "region": "Skåne County"
      },
      {
        "percentage": "0.000689",
        "region": "Västra Götaland County"
      },
      {
        "percentage": "0.000344",
        "region": "Ostrobothnia (region)"
      },
      {
        "percentage": "0.000344",
        "region": "Southwest Finland"
      },
      {
        "percentage": "0.000344",
        "region": "Uusimaa"
      },
      {
        "percentage": "0.001033",
        "region": "Central Denmark Region"
      },
      {
        "percentage": "0.000689",
        "region": "Zealand Region"
      },
      {
        "percentage": "0.000344",
        "region": "Capital Region of Denmark"
      },
      {
        "percentage": "0.000689",
        "region": "Region of Southern Denmark"
      },
      {
        "percentage": "0.000689",
        "region": "North Denmark Region"
      },
      {
        "percentage": "0.001033",
        "region": "Zuid-Holland"
      },
      {
        "percentage": "0.002066",
        "region": "Noord-Holland"
      },
      {
        "percentage": "0.006887",
        "region": "Flemish Region"
      },
      {
        "percentage": "0.008609",
        "region": "Liguria"
      },
      {
        "percentage": "0.003788",
        "region": "Dublin"
      },
      {
        "percentage": "0.000689",
        "region": "Kerry"
      },
      {
        "percentage": "0.000689",
        "region": "County Louth"
      },
      {
        "percentage": "0.000344",
        "region": "County Mayo"
      },
      {
        "percentage": "0.000344",
        "region": "County Offaly"
      },
      {
        "percentage": "0.000344",
        "region": "County Tipperary"
      },
      {
        "percentage": "0.000344",
        "region": "Wexford"
      },
      {
        "percentage": "0.005165",
        "region": "Abruzzo"
      },
      {
        "percentage": "0.001033",
        "region": "Basilicata"
      },
      {
        "percentage": "0.002755",
        "region": "Calabria"
      },
      {
        "percentage": "0.015496",
        "region": "Campania"
      },
      {
        "percentage": "0.022383",
        "region": "Emilia-Romagna"
      },
      {
        "percentage": "0.008609",
        "region": "Friuli-Venezia Giulia"
      },
      {
        "percentage": "0.033402",
        "region": "Lazio"
      },
      {
        "percentage": "0.045799",
        "region": "Lombardia"
      },
      {
        "percentage": "0.000689",
        "region": "North Brabant"
      },
      {
        "percentage": "0.006198",
        "region": "Marche"
      },
      {
        "percentage": "0.016529",
        "region": "Piedmont"
      },
      {
        "percentage": "0.008264",
        "region": "Puglia"
      },
      {
        "percentage": "0.004821",
        "region": "Sardinia"
      },
      {
        "percentage": "0.012052",
        "region": "Sicilia"
      },
      {
        "percentage": "0.021006",
        "region": "Tuscany"
      },
      {
        "percentage": "0.00551",
        "region": "Trentino-Alto Adige"
      },
      {
        "percentage": "0.002755",
        "region": "Umbria"
      },
      {
        "percentage": "0.000344",
        "region": "Aosta Valley"
      },
      {
        "percentage": "0.022039",
        "region": "Veneto"
      },
      {
        "percentage": "0.000689",
        "region": "Drenthe"
      },
      {
        "percentage": "0.001377",
        "region": "Gelderland"
      },
      {
        "percentage": "0.000689",
        "region": "Groningen"
      },
      {
        "percentage": "0.001722",
        "region": "Limburg"
      },
      {
        "percentage": "0.004821",
        "region": "Brussels"
      },
      {
        "percentage": "0.004477",
        "region": "Wallonia"
      },
      {
        "percentage": "0.000344",
        "region": "Guarda District"
      },
      {
        "percentage": "0.001033",
        "region": "Podlaskie Voivodeship"
      },
      {
        "percentage": "0.003444",
        "region": "Varaždin County"
      },
      {
        "percentage": "0.001377",
        "region": "Virovitica-Podravina County"
      },
      {
        "percentage": "0.004132",
        "region": "Vukovar-Srijem County"
      },
      {
        "percentage": "0.004821",
        "region": "Zadar County"
      },
      {
        "percentage": "0.00241",
        "region": "Zagreb County"
      },
      {
        "percentage": "0.014463",
        "region": "Zagreb"
      },
      {
        "percentage": "0.004477",
        "region": "Lower Silesian Voivodeship"
      },
      {
        "percentage": "0.002755",
        "region": "Kuyavian-Pomeranian Voivodeship"
      },
      {
        "percentage": "0.003444",
        "region": "Łódź Voivodeship"
      },
      {
        "percentage": "0.002066",
        "region": "Lublin Voivodeship"
      },
      {
        "percentage": "0.000344",
        "region": "Lubusz Voivodeship"
      },
      {
        "percentage": "0.004477",
        "region": "Lesser Poland Voivodeship"
      },
      {
        "percentage": "0.001377",
        "region": "Opole Voivodeship"
      },
      {
        "percentage": "0.00241",
        "region": "Podkarpackie Voivodeship"
      },
      {
        "percentage": "0.002066",
        "region": "Pomeranian Voivodeship"
      },
      {
        "percentage": "0.001033",
        "region": "Sisak-Moslavina County"
      },
      {
        "percentage": "0.002755",
        "region": "Silesian Voivodeship"
      },
      {
        "percentage": "0.001722",
        "region": "Świętokrzyskie Voivodeship"
      },
      {
        "percentage": "0.001033",
        "region": "Warmian-Masurian Voivodeship"
      },
      {
        "percentage": "0.003788",
        "region": "Greater Poland Voivodeship"
      },
      {
        "percentage": "0.001377",
        "region": "West Pomeranian Voivodeship"
      },
      {
        "percentage": "0.012397",
        "region": "Masovian Voivodeship"
      },
      {
        "percentage": "0.002066",
        "region": "Aveiro District"
      },
      {
        "percentage": "0.001033",
        "region": "Beja District"
      },
      {
        "percentage": "0.004821",
        "region": "Braga District"
      },
      {
        "percentage": "0.001722",
        "region": "Braganca"
      },
      {
        "percentage": "0.004821",
        "region": "Coimbra District"
      },
      {
        "percentage": "0.000344",
        "region": "Évora District"
      },
      {
        "percentage": "0.002066",
        "region": "Faro District"
      },
      {
        "percentage": "0.002066",
        "region": "Madeira"
      },
      {
        "percentage": "0.010331",
        "region": "Split-Dalmatia County"
      },
      {
        "percentage": "0.001377",
        "region": "Šibenik-Knin County"
      },
      {
        "percentage": "0.000344",
        "region": "Pella"
      },
      {
        "percentage": "0.001033",
        "region": "Carinthia"
      },
      {
        "percentage": "0.051997",
        "region": "Attica (region)"
      },
      {
        "percentage": "0.00551",
        "region": "Ionian Islands (region)"
      },
      {
        "percentage": "0.00792",
        "region": "Central Greece (region)"
      },
      {
        "percentage": "0.022383",
        "region": "Central Macedonia"
      },
      {
        "percentage": "0.005165",
        "region": "Crete"
      },
      {
        "percentage": "0.007576",
        "region": "Eastern Macedonia and Thrace"
      },
      {
        "percentage": "0.005165",
        "region": "Epirus (region)"
      },
      {
        "percentage": "0.001722",
        "region": "Northern Aegean"
      },
      {
        "percentage": "0.006543",
        "region": "Peloponnese (region)"
      },
      {
        "percentage": "0.004132",
        "region": "Southern Aegean"
      },
      {
        "percentage": "0.006887",
        "region": "Thessaly"
      },
      {
        "percentage": "0.009298",
        "region": "Western Greece"
      },
      {
        "percentage": "0.004477",
        "region": "Western Macedonia"
      },
      {
        "percentage": "0.000344",
        "region": "Burgenland"
      },
      {
        "percentage": "0.000344",
        "region": "Lower Austria"
      },
      {
        "percentage": "0.005854",
        "region": "Primorje-Gorski Kotar County"
      },
      {
        "percentage": "0.002066",
        "region": "Karlovac County"
      },
      {
        "percentage": "0.002755",
        "region": "Požega-Slavonia County"
      },
      {
        "percentage": "0.006198",
        "region": "Osijek-Baranja County"
      },
      {
        "percentage": "0.001722",
        "region": "Međimurje County"
      },
      {
        "percentage": "0.000689",
        "region": "Lika-Senj County"
      },
      {
        "percentage": "0.001377",
        "region": "Krapina-Zagorje County"
      },
      {
        "percentage": "0.002755",
        "region": "Koprivnica-Križevci County"
      },
      {
        "percentage": "0.003444",
        "region": "Istria County"
      },
      {
        "percentage": "0.000689",
        "region": "Upper Austria"
      },
      {
        "percentage": "0.001722",
        "region": "Dubrovnik-Neretva County"
      },
      {
        "percentage": "0.004132",
        "region": "Brod-Posavina County"
      },
      {
        "percentage": "0.001033",
        "region": "Bjelovar-Bilogora County"
      },
      {
        "percentage": "0.00551",
        "region": "Vienna"
      },
      {
        "percentage": "0.000689",
        "region": "Vorarlberg"
      },
      {
        "percentage": "0.000344",
        "region": "Styria"
      },
      {
        "percentage": "0.000689",
        "region": "Berlin"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T09:00:21+0000",
    "ad_creative_body": "MAGIC EYES™ FARD À PAUPIÈRE DUAL COLOR\n❤️ Fini de galérer pour vous maquiller \n❤️ Un seul passage  pour sublimer vos yeux\nDisponible ➡️ https://bit.ly/2GR7G4j\nDisponible ➡️ https://bit.ly/2GR7G4j",
    "ad_creative_link_caption": "fille-unique.com",
    "ad_creative_link_title": "MagicEyes™ ⭐️⭐️⭐️⭐️⭐️4,8/5",
    "ad_delivery_start_time": "2019-05-13T09:00:21+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=357824904858869&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.279772",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.309135",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.260196",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.113377",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.019576",
        "age": "65+",
        "gender": "female"
      },
      {
        "percentage": "0.017945",
        "age": "55-64",
        "gender": "female"
      }
    ],
    "funding_entity": "Sébastien Jean-Pierre Paul Henri Gourdon",
    "impressions": {
      "lower_bound": "1000",
      "upper_bound": "4999"
    },
    "page_id": "268836617151334",
    "page_name": "Fille Unique",
    "region_distribution": [
      {
        "percentage": "0.047466",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.012872",
        "region": "Limousin"
      },
      {
        "percentage": "0.108608",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.102977",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.013677",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.026549",
        "region": "Picardie"
      },
      {
        "percentage": "0.037812",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.061947",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.038616",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.058729",
        "region": "Lorraine"
      },
      {
        "percentage": "0.046661",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.019308",
        "region": "Auvergne"
      },
      {
        "percentage": "0.179405",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.03218",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.022526",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.018504",
        "region": "Corse"
      },
      {
        "percentage": "0.030571",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.039421",
        "region": "Centre"
      },
      {
        "percentage": "0.030571",
        "region": "Bretagne"
      },
      {
        "percentage": "0.025744",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.013677",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.03218",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=284626445756695&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.02439",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.012195",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.060976",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.085366",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.158537",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.134146",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.170732",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.04878",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.195122",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.060976",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.04878",
        "age": "35-44",
        "gender": "male"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.02439",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.04878",
        "region": "Lorraine"
      },
      {
        "percentage": "0.085366",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.109756",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.04878",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.02439",
        "region": "Picardie"
      },
      {
        "percentage": "0.060976",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.036585",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.060976",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.04878",
        "region": "Limousin"
      },
      {
        "percentage": "0.02439",
        "region": "Auvergne"
      },
      {
        "percentage": "0.036585",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.231707",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.060976",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.012195",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.012195",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.036585",
        "region": "Centre"
      },
      {
        "percentage": "0.012195",
        "region": "Bretagne"
      },
      {
        "percentage": "0.012195",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.012195",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=287260562155975&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.257576",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.060606",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.140152",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.087121",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.159091",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.015152",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.041667",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.060606",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.068182",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.060606",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.030303",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.007576",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.011364",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.037594",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.007519",
        "region": "Limousin"
      },
      {
        "percentage": "0.142857",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.090226",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.026316",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.022556",
        "region": "Picardie"
      },
      {
        "percentage": "0.067669",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.037594",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.052632",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.033835",
        "region": "Lorraine"
      },
      {
        "percentage": "0.045113",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.018797",
        "region": "Auvergne"
      },
      {
        "percentage": "0.225564",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.015038",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.011278",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.011278",
        "region": "Corse"
      },
      {
        "percentage": "0.011278",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.026316",
        "region": "Centre"
      },
      {
        "percentage": "0.041353",
        "region": "Bretagne"
      },
      {
        "percentage": "0.026316",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.022556",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.026316",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=305562100367918&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.095238",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.083333",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.178571",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.130952",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.130952",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.011905",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.238095",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.071429",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.035714",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.011905",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.011905",
        "age": "55-64",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.071429",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.011905",
        "region": "Limousin"
      },
      {
        "percentage": "0.083333",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.142857",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.059524",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.02381",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.059524",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.02381",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.035714",
        "region": "Lorraine"
      },
      {
        "percentage": "0.047619",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.083333",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.178571",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.071429",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.011905",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.02381",
        "region": "Corse"
      },
      {
        "percentage": "0.011905",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.02381",
        "region": "Centre"
      },
      {
        "percentage": "0.011905",
        "region": "Bretagne"
      },
      {
        "percentage": "0.02381",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=319189622108992&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.238806",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.119403",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.223881",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.059701",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.059701",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.164179",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.059701",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.014925",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.029851",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.014925",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.014925",
        "age": "55-64",
        "gender": "female"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.104478",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.014925",
        "region": "Lorraine"
      },
      {
        "percentage": "0.134328",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.059701",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.014925",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.014925",
        "region": "Picardie"
      },
      {
        "percentage": "0.059701",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.044776",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.044776",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.044776",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.044776",
        "region": "Auvergne"
      },
      {
        "percentage": "0.253731",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.014925",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.014925",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.044776",
        "region": "Centre"
      },
      {
        "percentage": "0.014925",
        "region": "Bretagne"
      },
      {
        "percentage": "0.014925",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.029851",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.029851",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=327449877937601&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.06383",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.212766",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.148936",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.106383",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.191489",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.085106",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.021277",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.021277",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.06383",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.042553",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.021277",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.021277",
        "age": "55-64",
        "gender": "male"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.06383",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.021277",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.021277",
        "region": "Bretagne"
      },
      {
        "percentage": "0.319149",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.106383",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.021277",
        "region": "Lorraine"
      },
      {
        "percentage": "0.085106",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.042553",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.021277",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.234043",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.06383",
        "region": "Rhône-Alpes"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=327879524564314&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.038095",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.085714",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.104762",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.161905",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.085714",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.009524",
        "age": "55-64",
        "gender": "unknown"
      },
      {
        "percentage": "0.019048",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.209524",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.114286",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.019048",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.104762",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.038095",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.009524",
        "age": "35-44",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.028571",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.009524",
        "region": "Limousin"
      },
      {
        "percentage": "0.171429",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.104762",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.009524",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.038095",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.057143",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.085714",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.019048",
        "region": "Lorraine"
      },
      {
        "percentage": "0.009524",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.019048",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.285714",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.028571",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.019048",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.019048",
        "region": "Corse"
      },
      {
        "percentage": "0.009524",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.038095",
        "region": "Centre"
      },
      {
        "percentage": "0.028571",
        "region": "Bretagne"
      },
      {
        "percentage": "0.019048",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=342144723116987&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.393939",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.121212",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.060606",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.030303",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.121212",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.060606",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.030303",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.121212",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.030303",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.030303",
        "age": "55-64",
        "gender": "male"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.030303",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.030303",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.030303",
        "region": "Bretagne"
      },
      {
        "percentage": "0.030303",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.242424",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.090909",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.090909",
        "region": "Lorraine"
      },
      {
        "percentage": "0.030303",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.060606",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.090909",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.090909",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.121212",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.060606",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=356490114973615&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.28125",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.14375",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.21875",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.025",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.1",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.10625",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.03125",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.00625",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.025",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.01875",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.0375",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.00625",
        "age": "45-54",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.049689",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.031056",
        "region": "Lorraine"
      },
      {
        "percentage": "0.10559",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.062112",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.037267",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.037267",
        "region": "Picardie"
      },
      {
        "percentage": "0.043478",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.062112",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.049689",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.055901",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.012422",
        "region": "Auvergne"
      },
      {
        "percentage": "0.223602",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.043478",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.012422",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.018634",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.012422",
        "region": "Centre"
      },
      {
        "percentage": "0.055901",
        "region": "Bretagne"
      },
      {
        "percentage": "0.018634",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.012422",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.055901",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=409203609630367&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.176955",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.168724",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.218107",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.139918",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.00823",
        "age": "18-24",
        "gender": "unknown"
      },
      {
        "percentage": "0.020576",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.004115",
        "age": "35-44",
        "gender": "unknown"
      },
      {
        "percentage": "0.08642",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.082305",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.045267",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.012346",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.024691",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.00823",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.004115",
        "age": "55-64",
        "gender": "male"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.131687",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.004115",
        "region": "Limousin"
      },
      {
        "percentage": "0.08642",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.061728",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.024691",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.00823",
        "region": "Picardie"
      },
      {
        "percentage": "0.069959",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.053498",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.061728",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.037037",
        "region": "Lorraine"
      },
      {
        "percentage": "0.032922",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.00823",
        "region": "Auvergne"
      },
      {
        "percentage": "0.251029",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.016461",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.00823",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.024691",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.016461",
        "region": "Centre"
      },
      {
        "percentage": "0.057613",
        "region": "Bretagne"
      },
      {
        "percentage": "0.004115",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.016461",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.024691",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=455802098513269&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.182692",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.298077",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.038462",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.028846",
        "age": "25-34",
        "gender": "unknown"
      },
      {
        "percentage": "0.076923",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.163462",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.067308",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.038462",
        "age": "45-54",
        "gender": "male"
      },
      {
        "percentage": "0.076923",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.019231",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.009615",
        "age": "18-24",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.048077",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.009615",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.028846",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.057692",
        "region": "Bretagne"
      },
      {
        "percentage": "0.038462",
        "region": "Centre"
      },
      {
        "percentage": "0.019231",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.317308",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.048077",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.009615",
        "region": "Limousin"
      },
      {
        "percentage": "0.048077",
        "region": "Lorraine"
      },
      {
        "percentage": "0.038462",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.048077",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.057692",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.038462",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.153846",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.038462",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=459928598085863&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.136364",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.409091",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.045455",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.136364",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.181818",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.045455",
        "age": "45-54",
        "gender": "unknown"
      },
      {
        "percentage": "0.045455",
        "age": "18-24",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.136364",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.045455",
        "region": "Basse-Normandie"
      },
      {
        "percentage": "0.045455",
        "region": "Bretagne"
      },
      {
        "percentage": "0.045455",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.045455",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.181818",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.045455",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.045455",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.136364",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.272727",
        "region": "Rhône-Alpes"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=522733034924789&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.238095",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.126984",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.095238",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.031746",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.063492",
        "age": "55-64",
        "gender": "female"
      },
      {
        "percentage": "0.15873",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.095238",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.063492",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.095238",
        "age": "55-64",
        "gender": "male"
      },
      {
        "percentage": "0.031746",
        "age": "45-54",
        "gender": "male"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.031746",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.031746",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.142857",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.142857",
        "region": "Provence-Alpes-Côte d'Azur"
      },
      {
        "percentage": "0.015873",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.031746",
        "region": "Picardie"
      },
      {
        "percentage": "0.031746",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.031746",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.031746",
        "region": "Lorraine"
      },
      {
        "percentage": "0.015873",
        "region": "Bourgogne"
      },
      {
        "percentage": "0.063492",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.111111",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.015873",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.031746",
        "region": "Franche-Comté"
      },
      {
        "percentage": "0.063492",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.047619",
        "region": "Centre"
      },
      {
        "percentage": "0.142857",
        "region": "Bretagne"
      },
      {
        "percentage": "0.015873",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  },
  {
    "ad_creation_time": "2019-05-13T08:58:37+0000",
    "ad_creative_body": "Plus de 2 milliards de brosses à dents sont jetées chaque année dans les décharges et les océans !\n\nRemplacez votre brosse à dents en plastique par une en bambou 👉 https://www.oceansrespect.com/ \n\n✓ Brosse biodégradable à 96%.\n\n✓ Fabriquée à partir de bambou 100% durable.\n\n✓ Emballage fabriqué en cartons recyclés.\n\n🌊 Des océans plus propres, des dents plus blanches. 🌍\n\n#oceansrespect",
    "ad_creative_link_caption": "OCEANSRESPECT.COM",
    "ad_creative_link_title": "Oceansrespect",
    "ad_delivery_start_time": "2019-05-13T08:58:37+0000",
    "ad_snapshot_url": "https://www.facebook.com/ads/archive/render_ad/?id=550609558680424&access_token=EAASF2ZAZAZCjZBcBANsST6eGW0TbZBxNKbMy5zGz2GK82HyCQINwnFvwjvzcZB9PGh9kOkiRdjZCKYeuUFkr26iXgmgSZB0GsO26ZAyZA6n9w73XiOspbZAmpMPgPRZC5FMMIKDQSWD1r1YHmV0W4osTDBUWpxvx7KZAS1mFZAje9lCyYmHXayjN0GMqUdGc7UhipiZCAQ0Xhnp4C2odbIQPg8qQDIPjEoweqUoOcCqcfJ1smbHg16J8ARZC7I9k",
    "currency": "EUR",
    "demographic_distribution": [
      {
        "percentage": "0.363636",
        "age": "18-24",
        "gender": "female"
      },
      {
        "percentage": "0.159091",
        "age": "18-24",
        "gender": "male"
      },
      {
        "percentage": "0.136364",
        "age": "35-44",
        "gender": "female"
      },
      {
        "percentage": "0.181818",
        "age": "25-34",
        "gender": "male"
      },
      {
        "percentage": "0.022727",
        "age": "45-54",
        "gender": "female"
      },
      {
        "percentage": "0.090909",
        "age": "25-34",
        "gender": "female"
      },
      {
        "percentage": "0.022727",
        "age": "35-44",
        "gender": "male"
      },
      {
        "percentage": "0.022727",
        "age": "45-54",
        "gender": "unknown"
      }
    ],
    "funding_entity": "Robin Lionel Cécil Cao",
    "impressions": {
      "lower_bound": "0",
      "upper_bound": "999"
    },
    "page_id": "2400740980159579",
    "page_name": "Oceansrespect",
    "region_distribution": [
      {
        "percentage": "0.045455",
        "region": "Aquitaine"
      },
      {
        "percentage": "0.022727",
        "region": "Auvergne"
      },
      {
        "percentage": "0.022727",
        "region": "Bretagne"
      },
      {
        "percentage": "0.045455",
        "region": "Centre"
      },
      {
        "percentage": "0.045455",
        "region": "Champagne-Ardenne"
      },
      {
        "percentage": "0.068182",
        "region": "Haute-Normandie"
      },
      {
        "percentage": "0.25",
        "region": "Île-de-France"
      },
      {
        "percentage": "0.090909",
        "region": "Languedoc-Roussillon"
      },
      {
        "percentage": "0.022727",
        "region": "Limousin"
      },
      {
        "percentage": "0.022727",
        "region": "Midi-Pyrénées"
      },
      {
        "percentage": "0.022727",
        "region": "Nord-Pas-de-Calais"
      },
      {
        "percentage": "0.090909",
        "region": "Pays de la Loire"
      },
      {
        "percentage": "0.022727",
        "region": "Picardie"
      },
      {
        "percentage": "0.022727",
        "region": "Poitou-Charentes"
      },
      {
        "percentage": "0.181818",
        "region": "Rhône-Alpes"
      },
      {
        "percentage": "0.022727",
        "region": "Alsace"
      }
    ],
    "spend": {
      "lower_bound": "0",
      "upper_bound": "99"
    }
  }
];
