# PJP PAC 1

En aquesta PAC aprendrem a gestionar GitHub i el seu entorn de programació estàndard que utilitzarem a la resta de PACs de l'assignatura.

## Competències

En aquesta PAC es desenvolupen les següents competències del Màster:

- [CB10] Que els estudiants posseeixin les habilitats d'aprenentatge que els permetin continuar estudiant d'una manera que haurà de ser en gran manera autodirigida o autònoma.
- [CG1] Analitzar i sintetitzar informació tècnica complexa.
- [CE3] Utilitzar de manera adequada els llenguatges de programació i les millors eines de desenvolupament per a l'anàlisi, el disseny i la implementació de llocs i aplicacions web en funció de les necessitats del projecte.
- [CE8] Adaptar-se a les tecnologies web i als futurs entorns actualitzant les competències professionals.

## Objectius

Els objectius d'aquesta PAC són:

- Configurar un entorn de treball per desenvolupar aplicacions en JavaScript.
- Conèixer i saber utilitzar les ordres bàsiques de Git.
- Conèixer i saber utilitzar GitHub i les principals tasques col·laboratives de la plataforma.
- Revisar el nivell previ de programació.
- Posar en pràctica coneixements bàsics de JavaScript.

## Entrega de la PAC

Un cop hagis realitzat les activitats pràctiques proposades en aquest enunciat, **el lliurament es realitzarà de forma doble**:

- Hauràs d'enviar els teus canvis a l'apartat de l'aula virtual de la UOC.
- Hauràs d'enviar els teus canvis al repositori de GitHub Classroom.

Recorda que aquest repositori l'has clonat del repositori a GitHub. Quan treballis al teu sistema, tots els canvis els faràs als teus fitxers locals, els quals hauràs d'afegir i _comitejar_ al teu repositori Git. Aquests canvis estaran al teu sistema fins que facis _push_ i els enviïs al repositori a GitHub.

Recorda que has de treballar a la branca _main_ o _master_ (la que es creï per defecte). Pots fer diversos enviaments.

A l'aula virtual trobaràs una _checklist_ que t'ajudarà a repassar tots els passos que has de fer per al lliurament de la teva PAC.

## Puntuació

El fet de treballar amb tests per verificar la funcionalitat del codi, us permetrà tenir una idea de la vostra pròpia nota abans del lliurament.

La puntuació dels exercicis pràctics es basa en dos criteris: **Funcionalitat** i **implementació**. S'espera que els exercicis funcionin correctament (superin els tests) i que la implementació (el codi) tingui una qualitat adequada.

Alguns detalls a tenir en compte:

- Es penalitzarà qualsevol intent de _hardcodejar_ els tests per forçar que passin. Aquesta tècnica consisteix a canviar la implementació perquè retorni únicament el valor esperat pel test (qualsevol altre test fallaria).
- Els tests automàtics estan dissenyats per detectar exercicis erronis o incomplets. El fet que un test passi no garanteix que l'exercici estigui realitzat correctament.
- Un exercici els tests del qual no passen es puntuarà amb un 0 llevat que hi hagi problemes amb el test.
- A més de passar els tests, el professorat avaluarà el vostre codi en base als criteris següents:
  - Llegibilitat, senzillesa i qualitat del codi.
  - Coneixements de programació. Per exemple, no utilitzar les estructures de control adequades, com ara utilitzar un bucle per construir una sentència condicional o viceversa.

## Requeriments mínims

- Tenir instal·lat Visual Studio Code (o qualsevol altre IDE).
- Coneixements bàsics de Git i GitHub (Activitats 2 i 3 del Repte 1).
- Coneixements bàsics de programació (Requisit de l'assignatura).

## Preguntes Teòriques (7 punts)

Hauràs de respondre aquestes preguntes al fitxer `src/pec1/pec1.md`.

### Exercici T1 (3 punts)

La següent imatge mostra un escenari de desenvolupament col·laboratiu en GitHub:

![ej1](public/ej1.png)

A la part central pots veure el repositori a GitHub, el qual conté els fitxers indicats a la caixa.
A l'esquerra i a la dreta del repositori a GitHub, s'han representat dos desenvolupadors, anomenats `Dev1` i `Dev2`, respectivament.
Cada desenvolupador ha clonat el repositori de GitHub i ha editat el fitxer indicat en negreta.
A la part inferior de cada caixa que representa cada desenvolupador, s'indiquen les comandes de Git que ha executat cada desenvolupador per enviar els seus canvis al repositori a GitHub.

Respon les següents preguntes i raona la resposta (màxim 300 paraules):
* T1.1 (1,5 punts) Descriu cadascuna de les comandes que ha realitzat el desenvolupador `Dev1` i valora si són correctes/incorrectes o necessàries/innecessàries.
* T1.2 (1,5 punts) Descriu cadascuna de les comandes que ha realitzat el desenvolupador `Dev2` i valora si són correctes/incorrectes o necessàries/innecessàries.

### Exercici T2 (4 punts)

La següent figura mostra un escenari de l'evolució d'un repositori seguint la notació utilitzada als materials de l'assignatura:

![ej2](public/ej2.png)

Cada una de les línies horitzontals representa una branca al repositori. Com es pot observar, existeixen dues branques:

* `main`, que és la branca principal del repositori.
* `developer-1`, on està treballant un dels desenvolupadors de l'aplicació.

Cada cercle representa un `commit` al repositori. Els commits s'han numerat segons el seu moment temporal de creació. A més, la seva posició horitzontal en cada una de les branques ajuda a visualitzar el moment temporal en què s'han creat. D'aquesta manera, el commit `c2` s'ha creat abans que el commit `c3`, per això el cercle que representa `c2` està més a l'esquerra que el cercle que representa `c3`.

Respon les següents preguntes i raona la resposta (màxim 300 paraules):
* T2.1 (2 punts) Quins commits són considerats a la branca `developer-1`?
* T2.2 (2 punts) Un cop es fa el merge de la branca `developer-1` a la branca main i es crea el commit `c5`, quins canvis s'incorporen a la branca `main`? (has d'indicar quins commits contribueixen a realitzar canvis a la branca `main`).

## Exercicis pràctics (3 punts)

Per realitzar els exercicis pràctics t'has de dirigir al fitxer `src/pec1/pec1.js`.

En aquest fitxer hauràs de definir les funcions que t'indiquem als exercicis que veuràs més avall.

D'altra banda, els tests que et permetran saber si la solució que proposes per als exercicis és correcta són al fitxer `src/pec/pec1.spec.js`.
**No has d'editar aquest fitxer (ni cap altre que no se t'indiqui expressament)**.
Tingues en compte que els tests són condicions que han de complir les funcions que implementaràs en els exercicis, per la qual cosa et poden servir d'ajuda per corregir-los.

### Preparant l'entorn (0 punts)

En primer lloc, assegura't que tens instal·lats:

- [Node.js](https://nodejs.org/es/)
- [VSCode](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

Perquè el vostre professor us localitzi a GitHub Classroom, recorda que necessita conèixer el vostre _login_ a la plataforma. Un cop estigueu registrats a GitHub, podeu informar del vostre _login_ tal com es descriu a l'activitat 4.2 del Repte 1.

A continuació us donem algunes indicacions per preparar el vostre repositori per a la realització dels exercicis.

#### Instal·la les dependències del projecte

````
npm install
````

Recorda que cal estar situat a la carpeta arrel del projecte.

#### Executa els tests

````
npm t
````

La instrucció anterior llançarà els tests cada vegada que deseu el fitxer `src/pec1/pec1.js`, que és precisament on implementareu els exercicis d'aquesta PAC.

Com pots esperar, la primera vegada que executis `npm t` i es llencin els tests, fallaran tots, ja que no hi ha cap exercici implementat. Revisa el missatge d'error que s'imprimeix per pantalla per conèixer el format i entendre com es notifiquen els errors.

Aquest és un exemple d'una possible sortida d'error:

````
  FAIL src/pec1/pec1.spec.js
   ex1:
     × should return true when value is between 2000 and 2020 (4 ms)
````

És important fixar-se en la descripció de l'error, per exemple, el text d'error anterior indica que per a l'exercici 1 (`ex1`) la funció ha de retornar `true` si `value` té un valor entre 2000 i 2020. Aquesta indicació us ajuda a revisar el codi per comprovar perquè el comportament no és l'esperat.

Un cop corregit el problema, quan es desa el fitxer on estem editant els exercicis, el test es torna a llançar i ens mostraria:

````
  PASS src/pec1/pec1.spec.js
   ex1
     √ should return true when value is between 0 and 17 (2 ms)
````

Ara el test mostra `PASS` i el cas de prova que abans fallava es mostra com a correcte (amb el caràcter `√`).

L'entorn de proves té un menú (accessible mitjançant la tecla `w`) que us permet executar els tests selectivament. Per exemple, prement `a` podeu rellançar manualment tots els tests; i prement `f` podeu rellançar només aquells tests que han fallat. Proveu les diferents opcions i si teniu algun dubte, consulteu-lo al fòrum de l'assignatura.

### Exercici P1 (1,5 punts)

Implementa una funció `ex1` que determini si un valor numèric, que representa l'any de producció d'una pel·lícula, està comprès en l'interval [2000, 2020].

La funció rebrà el següent paràmetre:
* `value`: És un valor numèric.

La funció retornarà `true` si el valor està comprès entre 2000 i 2020, ambdós inclosos; i `false` en un altre cas.

### Exercici P2 (1,5 punts)

Implementa una funció `ex2` que calculi la temperatura a partir del cant d'un grill. La temperatura es pot calcular dividint per 5 el nombre de vegades que un grill canta en un minut i restant 9.

La funció rebrà els següents paràmetres:
* `times`: És el nombre de vegades que un grill canta en un minut.

La funció haurà de retornar un valor numèric resultat d'aplicar la fórmula descrita anteriorment.