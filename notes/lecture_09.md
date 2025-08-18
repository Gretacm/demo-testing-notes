2.Regression, Smoke, Exploratory, ad-hock...

Regresijai aptikti naudojami autmatiniai testai, kai gaunam naujus build'us, gali atsirasti nes naujai sukurti ar atnaujinimai gali seni nustatymai nebeveikti.
Jeigu neturim automat.tada ziurim i senus testus kurie buvo daryti pries tai. 
sMOKE TESTAI - isitikinti ar produktas timkamas testavimui, ar jis yra veikiantis, testuojam tik pagr.funkcijas, ir tik happy path(tik darom posityvius testus)
Primary functionality (log in, registracija ir pan)- testuojama.
Salutines funkcijos(Secondary functionality) - netestuojama.


3.TC management systems (Testomat)


1. Repeat and check homework
2. Regression, Smoke, Exploratory, Ad-hoc testing
3. TC management systems (Testomat)


## 1. Repeat and check homework


## 2. Regression, Smoke, Exploratory, Ad-hoc testing

Smoke testing -> happy path only:

Pagrindines funckcijos (Primary functionality) - testuojama
Šalutnės funkcijos (Secondary functionality) - netetuojama

todo app:

Primary:
TS01 Create new todo
TS02 Edit todo
TS03 Change todo status
TS07 Delete one todo
TS09 Cashing data locally

Secondary:
TS04 Change all todo status
TS05 Count active todo
TS06 Filter
TS08 Delete all completed todo
TS10 UI/UX

Smoke testing TODO web app:
TC 1.1 Create new todo
TC 2.1 Edit todo
TC 3.1 Change todo status
TC 7.1 Delete one todo
TC 9.1 Cashing data locally

Smoke testing TODO mob app:
TC 0.1 Install
TC 1.1 Create new todo
TC 2.1 Edit todo
TC 3.1 Change todo status
TC 7.1 Delete one todo
TC 9.1 Cashing data locally
TC 11.1 Uninstall


smoke testai reikalingi kad paziuret ar priduktas tinkamas testavimui, ar yra nesuluzes, 

Exploratory testing:  
tai testavimo metodas, kai testuotojas aktyviai tyrinėja sistemą be iš anksto paruoštų testų scenarijų, remdamasis savo patirtimi, intuicija ir supratimu apie sistemą.

Kai neturim joios pries tai 

Ad-hoc testing: 
tai neformalus, neplanuotas testavimas, kai testuotojas testuoja sistemą be jokių dokumentuotų testų atvejų, remdamasis tik savo patirtimi, supratimu ir kūrybiškumu.

Kai testuoji "is reikalo" kai reikia kazka daryt cia ir dabar. Spontaniski testai. Pabaigoj nereikia jokios dokumentacijos. 

## 3. TC management systems (Testomat)
https://testomat.io/

back logu tipai: 
viso projekto backlogas, su visom uzduotim, 


viskas kas sudeta, reikia padaryti, ten sudeti testai, tada deliojam sprintus, ka reikia istestuot ir pan. visi 