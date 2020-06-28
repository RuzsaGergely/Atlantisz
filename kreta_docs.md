# Atlantisz-Proxy / Kréta docs

[TOC]

## Mobilverzió lekérése

**Request:**

`GET http://kretamobile.blob.core.windows.net/configuration/EllenorzoMobilVersionInfo.json  `

**Response:**

```json
{
  "LatestVersion": 0,
  "MinimumSupportedVersion": 5,
  "BlacklistPlatformByMobileBuildVersion": [
    {
      "MobileBuildVersions": "2.6.2.2018092801",
      "Platform": "Android"
    },
    {
      "MobileBuildVersions": "2.6.1.2018090501",
      "Platform": "Android"
    },
    {
      "MobileBuildVersions": "2.6.0.2018090302",
      "Platform": "Android"
    },
    {
      "MobileBuildVersions": "2.5.5.2018062001",
      "Platform": "Android"
    },
    {
      "MobileBuildVersions": "2.4.4.201804051",
      "Platform": "Android"
    }
  ],
  "GDPRLink": "https://tudasbazis.ekreta.hu/pages/viewpage.action?pageId\u003d4065038",
  "GDPRUpdateDate": "2018-08-20T21:00:00Z",
  "AndroidMobileStoreUrl": "market://details?id\u003dhu.eKreta.KretaAndroid",
  "IOSMobileStoreUrl": "itms-apps://itunes.apple.com/app/id1169400318",
  "AndroidMobileTeacherStoreUrl": "market://details?id\u003dhu.ekreta.naplo",
  "IOSMobileTeacherStoreUrl": "itms-apps://itunes.apple.com/app/id1434586902",
  "MinimumSupportedClientBuildNumber": "2020012004"
}
```

## API-k lekérése

**Request:**

 `GET kretamobile.blob.core.windows.net/configuration/ConfigurationDescriptor.json `

**Response:**

```json
{
  "GlobalMobileApiUrlDEV": "https://kretaglobalmobileapiuat.ekreta.hu",
  "GlobalMobileApiUrlTEST": "https://kretaglobalmobileapitest.ekreta.hu",
  "GlobalMobileApiUrlUAT": "https://kretaglobalmobileapiuat.ekreta.hu",
  "GlobalMobileApiUrlPROD": "https://kretaglobalmobileapi.ekreta.hu"
}
```

## Iskolák listájának lekérése

**Request:**

```
GET kretaglobalmobileapi2.ekreta.hu/api/v2/Institute
Header: {
	apiKey: 7856d350-1fda-45f5-822d-e1a2f3f1acf0
}
```

**Response:**

```json
[
  {
    "instituteId": 3867,
    "instituteCode": "klik030581001",
    "name": "Abdai Zrínyi Ilona Általános Iskola",
    "city": "Abda",
    "url": "https://klik030581001.e-kreta.hu",
    "advertisingUrl": "",
    "informationImageUrl": "https://kretamobile.blob.core.windows.net/advertisement/nati_app.gif",
    "informationUrl": "",
    "featureToggleSet": {}
  },
  {
    "instituteId": 3868,
    "instituteCode": "klik037141001",
    "name": "Bakonyszentlászlói Szent László Általános Iskola",
    "city": "Bakonyszentlászló",
    "url": "https://klik037141001.e-kreta.hu",
    "advertisingUrl": "",
    "informationImageUrl": "https://kretamobile.blob.core.windows.net/advertisement/nati_app.gif",
    "informationUrl": "",
    "featureToggleSet": {}
  },
  ...
]
```

## Bearer token lekérése

**Request:**

```
POST xxxxxx.e-kreta.hu/idp/api/v1/Token
Headers: {
	Content-Type: application/x-www-form-urlencoded; charset=utf-8
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
}
```

A bejelentkezési adatokat "urlencoded" kell elküldeni. Így néz ki:

```
institute_code=xxxxxxxx&userName=xxxxxxxxx&password=xxxxxxxx&grant_type=password&client_id=919e0c1c-76a2-4646-a2fb-7085bbbf3c56
```

**Response:**

```json
{
  "access_token": "zqGEhpU9ZDTMBhgZjRFpaFLFkNYPW2Pmqydv6VJSgfRfJHNEbXBtsbcfu23NShCNAH7HnRCH9Yd4GDJrEeLUjyRECK4Zqd42SHY28ubWZrb9hVg7M5VzY4MAQKmLMvE4SWuczGZLJBVzCwa8FVpwPpaHQZAxxWGfCgRyEAmK6KCTGcarzJJpuSdZT6NSjBxZuKFQm9jupc2Djpcs8yStxqMn6RWLcdJyKRg8u7VtmnkU88JVgYKrx9SnTW9jUpTaRYt7vM4kPsgbSDcfkZzDhfzeU87uKBF9DF3p5ZyF4qQhJw7wnuMKfd6wsxvJ4eHZ3ZHP4cfRx4GLRvh9ng4h8UsvSfejgPVdntaG29KcDtcKwQt9JHXLSZMWvw8np5g7NYwSdgCsuVZCMctSuUQNyAA9Ssp3NWpcs2KBuXNMK7u4MzxpjDvwmZnJKcdr5rNqDPsSwnsXtqqFpnHkax6dsygszmjt8fr3x2NPwzPnnC8xheVKerngDajzmKEvrgxL",
  "token_type": "bearer",
  "expires_in": 3599,
  "refresh_token": "TCJHJDQ2YcqpRWxY34vYJ3g6qjpPb4hxGeNPmCvE9v9VgQrtS5yjWCmpduUwV6dvxs3vhdAKRhyNyyMkQMy8Yn8wRm53VJJrnHjvsK7Mq"
}
```

## Bearer token frissítése

**Request:**

```
POST xxxxxx.e-kreta.hu/idp/api/v1/Token
Headers: {
	Content-Type: application/x-www-form-urlencoded; charset=utf-8
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
}
```

A bejelentkezési adatokat "urlencoded" kell elküldeni. Így néz ki:

```
refresh_token=XXXXXXXXXXX&grant_type=refresh_token&client_id=919e0c1c-76a2-4646-a2fb-7085bbbf3c56
```

**Response:**

## Intézmény információ lekérése

**Request:**

```
GET kretaglobalmobileapi2.ekreta.hu/api/v2/Institute/<InstituteID>
Header: {
	apiKey: 7856d350-1fda-45f5-822d-e1a2f3f1acf0
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
{
  "instituteId": 6873,
  "instituteCode": "bmszc-neumann",
  "name": "Budapesti Muszaki SZC Neumann János Számítástechnikai Szakgimnáziuma",
  "city": "Budapest XIV. kerület (1144)",
  "url": "https://bmszc-neumann.e-kreta.hu",
  "advertisingUrl": "",
  "informationImageUrl": "https://kretamobile.blob.core.windows.net/advertisement/nati_app.gif",
  "informationUrl": "",
  "featureToggleSet": {}
}
```

## Diák adatainak lekérése

Olyan adatok tartoznak ide, mint a születési dátum, teljes név, lakcím, osztályfőnök, jegyek.

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/StudentAmi?fromDate=xxxx-xx-xx&toDate=xxxx-xx-xx
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

*A fromDate és toDate-et ki lehet hagyni és akkor mindent is kilistáz, vagy a helyére null-t is lehet írni.*

Response:**

```json
{
  "StudentId": xxxxxx,
  "SchoolYearId": 562,
  "Name": "Ruzsa Gergely",
  "NameOfBirth": "Ruzsa Gergely",
  "PlaceOfBirth": "----",
  "MothersName": "-----",
  "AddressDataList": [
    "----"
  ],
  "DateOfBirthUtc": "---------",
  "InstituteName": "Budapesti Műszaki SZC Neumann János Számítástechnikai Szakgimnáziuma",
  "InstituteCode": "bmszc-neumann",
  "Evaluations": [
    {
      "EvaluationId": 13149696,
      "Form": "Deportment",
      "FormName": "Rossz, Változó, Jó, Példás",
      "Type": "EndYear",
      "TypeName": "Év végi jegy/értékelés",
      "IsAtlagbaBeleszamit": false,
      "Weight": "-",
      "Value": "Példás",
      "NumberValue": 0,
      "Teacher": "Kis Géza",
      "Date": "2020-06-12T00:00:00",
      "CreatingTime": "2020-06-12T10:28:06.223",
      "Jelleg": {
        "Id": 2,
        "Nev": "Magatartas",
        "Leiras": "Magatartás"
      },
      "JellegNev": "Magatartas",
      "ErtekFajta": {
        "Id": 4,
        "Nev": "MagatartasErtek",
        "Leiras": "Magatartás érték"
      },
      "OsztalyCsoportUid": "xxxxxx"
    },
    ...
]
```

## Események lekérése

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/EventAmi
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

<u>Nálam semmi, mert nem volt esemény(?) bejegyezve.</u>

## Órarend lekérése

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/LessonAmi?fromDate=xxxx-xx-xx&toDate=xxxx-xx-xx
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
[
  {
    "LessonId": 7081474,
    "CalendarOraType": "UresOra",
    "Count": 1,
    "Date": "2020-01-06T00:00:00",
    "StartTime": "2020-01-06T07:30:00",
    "EndTime": "2020-01-06T08:15:00",
    "Subject": "irodalom",
    "SubjectCategory": null,
    "SubjectCategoryName": "Magyar nyelv és irodalom",
    "ClassRoom": "044",
    "OsztalyCsoportUid": "xxxxxx",
    "ClassGroup": "10.a",
    "Teacher": "Kovács Géza",
    "DeputyTeacher": "",
    "State": "Missed",
    "StateName": "Elmaradt tanóra",
    "PresenceType": "NotDefined",
    "PresenceTypeName": "Nem definiált",
    "TeacherHomeworkId": null,
    "IsHaziFeladatMegoldva": false,
    "IsTanuloHaziFeladatEnabled": false,
    "BejelentettSzamonkeresIdList": [],
    "Theme": "",
    "Nev": "irodalom",
    "Homework": null
  },
  {
    "LessonId": 7084681,
    "CalendarOraType": "TanitasiOra",
    "Count": 2,
    "Date": "2020-01-06T00:00:00",
    "StartTime": "2020-01-06T08:25:00",
    "EndTime": "2020-01-06T09:10:00",
    "Subject": "történelem",
    "SubjectCategory": null,
    "SubjectCategoryName": "Történelem",
    "ClassRoom": "044",
    "OsztalyCsoportUid": "xxxxxx",
    "ClassGroup": "10.a",
    "Teacher": "Kis Péter",
    "DeputyTeacher": "",
    "State": "Registered",
    "StateName": "Naplózott tanóra",
    "PresenceType": "Present",
    "PresenceTypeName": "A tanuló részt vett a tanórán",
    "TeacherHomeworkId": null,
    "IsHaziFeladatMegoldva": false,
    "IsTanuloHaziFeladatEnabled": false,
    "BejelentettSzamonkeresIdList": [],
    "Theme": "I. Erzsébet uralkodása",
    "Nev": "történelem",
    "Homework": null
  },
  ...
]
```

## Bejelentett számonkérések lekérése

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/BejelentettSzamonkeresAmi?DatumTol=null&DatumIg=null
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

Érdekesség, hogy az app alapból null-null-ként küldi ki a számonkérések intervallumát.

**Response:**

```json
[
  {
    "Uid": "xxxxxx",
    "Id": xxxxxx,
    "Datum": "2020-02-10T23:00:00Z",
    "HetNapja": "Kedd",
    "Oraszam": 7,
    "Tantargy": "Informatika",
    "Tanar": "Grosicsné Ilona",
    "SzamonkeresMegnevezese": "Javító/Pótdolgozat(lekérdezés)",
    "SzamonkeresModja": "Beszámoló",
    "BejelentesDatuma": "2020-02-04T13:53:39Z",
    "OsztalyCsoportUid": "xxxxxx"
  },
  {
    "Uid": "xxxxxx",
    "Id": xxxxxx,
    "Datum": "2019-10-24T22:00:00Z",
    "HetNapja": "Péntek",
    "Oraszam": 7,
    "Tantargy": "Hálózatok I. - gyakorlat",
    "Tanar": "Késes Lajos",
    "SzamonkeresMegnevezese": "PT Alapok",
    "SzamonkeresModja": "Írásbeli témazáró dolgozat",
    "BejelentesDatuma": "2019-10-22T10:24:00Z",
    "OsztalyCsoportUid": "xxxxxx"
  },
  {
    "Uid": "xxxxxx",
    "Id": xxxxxx,
    "Datum": "2020-01-13T23:00:00Z",
    "HetNapja": "Kedd",
    "Oraszam": 7,
    "Tantargy": "Informatika",
    "Tanar": "Grosicsné Ilona",
    "SzamonkeresMegnevezese": "Access- Lekérdezések",
    "SzamonkeresModja": "Órai munka",
    "BejelentesDatuma": "2020-01-12T14:47:02Z",
    "OsztalyCsoportUid": "xxxxxx"
  }
]
```

## Postaláda elemek lekérése

**Request:**

```
GET eugyintezes.e-kreta.hu/integration-kretamobile-api/v1/kommunikacio/postaladaelemek/sajat
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
[
  {
    "azonosito": xxxxxx,
    "isElolvasva": true,
    "isToroltElem": false,
    "tipus": {
      "azonosito": 1,
      "kod": "BEERKEZETT",
      "rovidNev": "Beérkezett üzenet",
      "nev": "Beérkezett üzenet",
      "leiras": "Beérkezett üzenet"
    },
    "uzenet": {
      "azonosito": xxxxxx,
      "kuldesDatum": "2019-11-15T13:55:27",
      "feladoNev": "Hamu Samu",
      "feladoTitulus": "tanár",
      "szoveg": "\u003cp\u003eSziasztok!\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003eJövő hét (11.29) kedden 8-9. órában. Kérem jelezzétek ki venne részt ",
      "targy": "Korrepetálás",
      "cimzettLista": [
        {
          "azonosito": xxxxxx,
          "kretaAzonosito": xxxxxx,
          "nev": "10.a",
          "tipus": {
            "azonosito": 4,
            "kod": "OSZTALY_TANULO",
            "rovidNev": "Osztály - Tanuló",
            "nev": "Osztály - Tanuló",
            "leiras": "Osztály - Tanuló"
          }
        },
        {
          "azonosito": xxxxxx,
          "kretaAzonosito": xxxxxx,
          "nev": "10.b",
          "tipus": {
            "azonosito": 4,
            "kod": "OSZTALY_TANULO",
            "rovidNev": "Osztály - Tanuló",
            "nev": "Osztály - Tanuló",
            "leiras": "Osztály - Tanuló"
          }
        }
      ],
      "csatolmanyok": []
    }
  },
  ...
]
```

### Specifikus postaláda elem lekérése

**Request:**

```
GET eugyintezes.e-kreta.hu/integration-kretamobile-api/v1/kommunikacio/postaladaelemek/<azonosító>
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
{
  "azonosito": azonosító,
  "isElolvasva": true,
  "isToroltElem": false,
  "tipus": {
    "azonosito": 1,
    "kod": "BEERKEZETT",
    "rovidNev": "Beérkezett üzenet",
    "nev": "Beérkezett üzenet",
    "leiras": "Beérkezett üzenet"
  },
  "uzenet": {
    "azonosito": xxxxxx,
    "kuldesDatum": "2020-04-16T13:03:09",
    "feladoNev": "Menyhárt Erika Hajnalka",
    "feladoTitulus": "igazgató",
    "szoveg": "AZ ÜZENET SZÖVEGE",
    "targy": "Az ÜZENET TÁRGYA",
    "cimzettLista": [
      {
        "azonosito": xxxxxx,
        "kretaAzonosito": xxxxxx,
        "nev": "1/13.RSZ",
        "tipus": {
          "azonosito": 4,
          "kod": "OSZTALY_TANULO",
          "rovidNev": "Osztály - Tanuló",
          "nev": "Osztály - Tanuló",
          "leiras": "Osztály - Tanuló"
        }
      },
      {
        "azonosito": xxxxxx,
        "kretaAzonosito": xxxxxx,
        "nev": "1/13.RSZE",
        "tipus": {
          "azonosito": 4,
          "kod": "OSZTALY_TANULO",
          "rovidNev": "Osztály - Tanuló",
          "nev": "Osztály - Tanuló",
          "leiras": "Osztály - Tanuló"
        }
      },
      {
        "azonosito": xxxxxx,
        "kretaAzonosito": xxxxxx,
        "nev": "2/14.RSZE",
        "tipus": {
          "azonosito": 4,
          "kod": "OSZTALY_TANULO",
          "rovidNev": "Osztály - Tanuló",
          "nev": "Osztály - Tanuló",
          "leiras": "Osztály - Tanuló"
        }
      },
      ....
      ],
      "csatolmányok": []
	}
}
```

## Tantárgyi átlagok lekérése

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/TantargyiAtlagAmi
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
[
  {
    "SubjectUid": "Magatartas",
    "Subject": "Magatartás",
    "SubjectCategory": "Magatartás",
    "SortIndex": 0
  },
  {
    "SubjectUid": "Szorgalom",
    "Subject": "Szorgalom",
    "SubjectCategory": "Szorgalom",
    "SortIndex": 1
  },
  {
    "SubjectUid": "311071",
    "Subject": "angol nyelv",
    "SubjectCategory": "Angol nyelv",
    "Value": 4.17,
    "SortIndex": 7
  },
  {
    "SubjectUid": "311078",
    "Subject": "fizika",
    "SubjectCategory": "Fizika",
    "Value": 3.47,
    "SortIndex": 6
  },
  {
    "SubjectUid": "311086",
    "Subject": "hálózatok I.",
    "SubjectCategory": "Szakmai elmélet (Informatika - 7.)",
    "Value": 5.0,
    "SortIndex": 12
  },
  {
    "SubjectUid": "311087",
    "Subject": "Hálózatok I. - gyakorlat",
    "SubjectCategory": "Szakmai gyakorlat (Informatika - 7.)",
    "Value": 5.0,
    "SortIndex": 16
  },
  ...
]
```

## Tanári házifeladatok

### Tanári házifeladatok lekérése

A házifeladatok lekérése ugyanúgy az órarend lekérdezésével történik, tekintettel arra, hogy az órarendben bejegyzett óra adati között van számon tartva a házifeladat is. 

<u>Az óra adati között a "TeacherHomeworkId" kulcsot kell keresni és az ID alapján a következő szekcióban lévő módon lehet lekérni a házifeladat adatait.</u>

### Specifikus tanári házifeladat lekérése

**Request:**

```
GET xxxxxx.e-kreta.hu/mapi/api/v1/HaziFeladat/TanarHaziFeladat/<id>
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Response:**

```json
{
  "Uid": "id",
  "Id": id,
  "OsztalyCsoportUid": "xxxxxx",
  "Tantargy": "fizika",
  "Rogzito": "Kutya Katalin",
  "IsTanarRogzitette": true,
  "Oraszam": 3,
  "TanitasiOraId": xxxxxx,
  "Szoveg": "Nincs.",
  "FeladasDatuma": "2020-06-15T00:00:00",
  "Hatarido": "2020-06-27T00:00:00",
  "RogzitesIdopontja": "2020-06-26T00:31:24.007",
  "IsTanuloHaziFeladatEnabled": false,
  "IsMegoldva": false,
  "Csatolmanyok": {}
}
```

### Tanári házifeladatok megoldottnak jelölése

**Request:**

```
Post xxxxxx.e-kreta.hu/mapi/api/v1/HaziFeladat/Megoldva
Header: {
	User-Agent: Kreta.Ellenorzo/2.9.15.2020060401
	Authorization: bearer <bearer_kódod>
}
```

**Body:**

```json
{
  "TanarHaziFeladatId": "xxxxx",
  "IsMegoldva": "True"
}
```

Ez visszafelé is működik "false" kapcsolóval.

**Response:**

Nincs JSON response, csupán egy 204 (No content) jelzés

