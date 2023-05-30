<h1 align = center>Princiipiile SOLID</h1>

## 1. Principiul responsabilității unice (Single Responsibility Principle - SRP):
#### Acest principiu prevede că o clasă ar trebui să aibă o singură responsabilitate și să aibă un singur motiv pentru a fi modificată. În codul dat, putem observa respectarea acestui principiu prin separarea responsabilităților în diferite clase.

+ Clasa "Masina" se ocupă doar de definirea unei mașini și nu are alte responsabilități.
+ Clasa "DepozitMasini" gestionează operațiile pe colecția de mașini, cum ar fi adăugarea, ștergerea și căutarea mașinilor.
+ Clasa "MasinaFactory" se ocupă de crearea obiectelor de tipul "Masina".
+ Clasa "DepozitMasiniBuilder" se ocupă de construirea obiectului "DepozitMasini".
+ Clasa "DepozitMasiniAdapter" adaptează clasa "DepozitMasini" pentru a utiliza metodele specifice într-un alt context.
+ Clasa "DepozitMasiniObserver" gestionează lista de observatori și notificarea acestora.
#  
## 2. Principiul deschiderii/închiderii (Open/Closed Principle - OCP):
#### Acest principiu prevede că o entitate software trebuie să fie deschisă pentru extindere și închisă pentru modificare. În codul dat, putem vedea respectarea acestui principiu prin utilizarea unor design patterns precum Factory Method și Adapter.

+ Clasa "MasinaFactory" oferă o metodă statică "creazaMasina" pentru a crea obiecte de tipul "Masina". Astfel, adăugarea unui nou tip de mașină se poate face prin extinderea acestei clase și implementarea metodei corespunzătoare.
+ Clasa "DepozitMasiniAdapter" adaptează clasa "DepozitMasini" pentru a fi utilizată într-un alt context, fără a modifica clasa de bază.
#
## 3. Principiul substituției lui Liskov (Liskov Substitution Principle - LSP):
#### Acest principiu prevede că un obiect de tipul unei clase derivate trebuie să poată fi înlocuit cu un obiect de tipul clasei de bază, fără a afecta corectitudinea programului. În codul dat, nu există o ierarhie de clase, dar principiul poate fi aplicat în contextul utilizării interfeței "Observer". Astfel, orice obiect care implementează interfața "Observer" poate fi adăugat ca observator în clasa "DepozitMasiniObserver".
#
## 4. Principiul segregării interfețelor (Interface Segregation Principle - ISP):
#### Acest principiu prevede că clienții nu ar trebui să depindă de interfețe pe care nu le utilizează. În codul dat, nu există interfețe care să fie implementate, însă putem observa o separare a responsabilităților prin utilizarea claselor separate pentru diferite funcționalități (ex: "Masina", "DepozitMasini", "MasinaFactory").
#
## 5. Principiul inversiunii dependențelor (Dependency Inversion Principle - DIP):
#### Acest principiu prevede că modulele de nivel superior nu ar trebui să depindă direct de modulele de nivel inferior, ci de abstracțiuni. În codul dat, putem observa o formă de inversiune a dependențelor prin intermediul clasei "DepozitMasiniObserver" și a interfeței "Observer". Astfel, clasa "DepozitMasiniObserver" depinde de o abstracțiune ("Observer") și poate fi notificată de orice obiect care implementează această interfață.
#
<h1 align = center>Creational Design Pattern:</h1>

## Factory Method:

#### Clasa MasinaFactory oferă o metodă statică creazaMasina care se ocupă de crearea unui obiect de tip Masina. Această abordare abstractizează procesul de creare a unei instanțe de Masina și permite o flexibilitate mai mare în crearea obiectelor.
#
## Builder:

#### Clasa DepozitMasiniBuilder are rolul de a construi un obiect de tip DepozitMasini. Aceasta permite adăugarea mai ușoară a mașinilor în depozit, utilizând metoda adaugaMasina, și apoi finalizarea construcției depozitului prin apelarea metodei build. Aceasta oferă o abordare mai fluentă și mai expresivă pentru construirea depozitului de mașini.
#
<h1 align = center>Structural Design Pattern:</h1>

## Adapter:

#### Clasa DepozitMasiniAdapter acționează ca un adapter între o instanță a clasei DepozitMasini și o interfață comună de adăugare, ștergere și căutare a mașinilor. Prin intermediul adapterului, se poate utiliza DepozitMasini într-un mod compatibil cu alte componente ale sistemului.
#
<h1 align = center>Behavioral Design Pattern</h1>

## Observer:

#### Clasa DepozitMasiniObserver este o implementare a pattern-ului Observer. Aceasta permite înregistrarea de observatori (în cazul dat, obiecte de tip Observer) care vor fi notificate când se produc modificări în depozitul de mașini. Astfel, se asigură o separare între manipularea datelor și afișarea acestora.
#
# Concluzii:
#### Utilizarea acestor design patterns în codul prezentat aduce mai multă modularitate, flexibilitate și extensibilitate. Factory Method și Builder facilitează crearea și configurarea obiectelor într-un mod controlat și modular. Adapter permite adaptarea unei clase la o altă interfață, fără a modifica codul existent. Observer permite notificarea observatorilor în cazul modificărilor, menținând astfel o separare clară între componentele sistemului.
### Prin aplicarea acestor design patterns, codul devine mai ușor de înțeles, de întreținut și de extins. Aceste soluții reutilizabile și testate îmbunătățesc calitatea și flexibilitatea proiectării software-ului.