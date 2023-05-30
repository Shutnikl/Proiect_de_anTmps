// CLASĂ: Masina
class Masina {
    constructor(marca, model, culoare, an, pret) {
      this.marca = marca;
      this.model = model;
      this.an = an;
      this.pret = pret;
      this.culoare = culoare;
    }
  }
  
  // CLASĂ: DepozitMasini
  class DepozitMasini {
    constructor() {
      this.masini = [];
    }
  
    adaugaMasina(masina) {
      this.masini.push(masina);
    }
  
    stergeMasina(marca, model) {
      const index = this.masini.findIndex(m => m.marca === marca && m.model === model);
      if (index !== -1) {
        this.masini.splice(index, 1);
      }
    }
  
    cautaMasina(cuvantCheie) {
      return this.masini.filter(m => m.marca.includes(cuvantCheie) || m.model.includes(cuvantCheie));
    }
  }
  
  // SINGLE RESPONSIBILITY PRINCIPLE (SOLID)
  // Separarea responsabilităților de afișare și manipulare a datelor
  
  // CREATIONAL DESIGN PATTERN
  // Factory Method
  class MasinaFactory {
    static creazaMasina(marca, model, culoare, an, pret) {
      return new Masina(marca, model, culoare,  an, pret);
    }
  }
  
  // CREATIONAL DESIGN PATTERN
  // Builder
  class DepozitMasiniBuilder {
    constructor() {
      this.depozitMasini = new DepozitMasini();
    }
  
    adaugaMasina(marca, model, culoare, an, pret) {
      const masina = MasinaFactory.creazaMasina(marca, model, culoare, an, pret);
      this.depozitMasini.adaugaMasina(masina);
      return this;
    }
  
    build() {
      return this.depozitMasini;
    }
  }
  
  // STRUCTURAL DESIGN PATTERN
  // Adapter
  class DepozitMasiniAdapter {
    constructor(depozitMasini) {
      this.depozitMasini = depozitMasini;
    }
  
    adauga(marca, model, culoare, an, pret) {
      this.depozitMasini.adaugaMasina(MasinaFactory.creazaMasina(marca, model, culoare, an, pret));
    }
  
    sterge(marca, model) {
      this.depozitMasini.stergeMasina(marca, model);
    }
  
    cauta(cuvantCheie) {
      return this.depozitMasini.cautaMasina(cuvantCheie);
    }
  }
  
  // BEHAVIORAL DESIGN PATTERN
  // Observer
  class DepozitMasiniObserver {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers() {
      this.observers.forEach(observer => observer.update());
    }
  }
  
  // Interfață Observer
  class Observer {
    update() {}
  }
  
  // IMPLEMENTARE: Adaugare masina
  function adaugaMasina() {
    const marcaInput = document.getElementById('marca-input');
    const modelInput = document.getElementById('model-input');
    const culoareInput = document.getElementById('culoare-input');
    const anInput = document.getElementById('an-input');
    const pretInput = document.getElementById('pret-input');
  
    const marca = marcaInput.value;
    const model = modelInput.value;
    const culoare = culoareInput.value;
    const an = parseInt(anInput.value);
    const pret = parseFloat(pretInput.value);
  
    if (marca && model && culoare && !isNaN(an) && !isNaN(pret)) {
      const masina = MasinaFactory.creazaMasina(marca, model, culoare,  an, pret);
      depozitMasini.adaugaMasina(masina);
  
      marcaInput.value = '';
      modelInput.value = '';
      culoareInput.value = '';
      anInput.value = '';
      pretInput.value = '';
  
      afiseazaStoc();
    }
  }
  
  // IMPLEMENTARE: Ștergere masina
function stergeMasina(marca, model) {
    depozitMasini.stergeMasina(marca, model);
    afiseazaStoc();
  }
  
  // IMPLEMENTARE: Căutare masina
  function cautaMasina() {
    const searchInput = document.getElementById('search-input');
    const cuvantCheie = searchInput.value;
  
    if (cuvantCheie) {
      const rezultateCautare = depozitMasini.cautaMasina(cuvantCheie);
      afiseazaRezultateCautare(rezultateCautare);
    } else {
      afiseazaStoc();
    }
  }
  
  // IMPLEMENTARE: Afișare stoc
function afiseazaStoc() {
    const listaMasini = document.getElementById('lista-masini');
    listaMasini.innerHTML = '';
  
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Marca</th>
        <th>Model</th>
        <th>Culoare</th>
        <th>An</th>
        <th>Pret</th>
        <th></th>
      </tr>
    `;
  
    depozitMasini.masini.forEach(masina => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${masina.marca}</td>
        <td>${masina.model}</td>
        <td>${masina.culoare}</td>
        <td>${masina.an}</td>
        <td>${masina.pret} EUR</td>
      `;
  
      const button = document.createElement('button');
      button.textContent = 'Șterge';
      button.onclick = function () {
        stergeMasina(masina.marca, masina.model);
      };
  
      const td = document.createElement('td');
      td.appendChild(button);
  
      tr.appendChild(td);
      table.appendChild(tr);
    });
  
    listaMasini.appendChild(table);
  }
  
  // IMPLEMENTARE: Afișare rezultate căutare
  function afiseazaRezultateCautare(rezultate) {
    const listaMasini = document.getElementById('lista-masini');
    listaMasini.innerHTML = '';
  
    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>Marca</th>
        <th>Model</th>
        <th>Culoare</th>
        <th>An</th>
        <th>Pret</th>
      </tr>
    `;
  
    rezultate.forEach(masina => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${masina.marca}</td>
        <td>${masina.model}</td>
        <td>${masina.culoare}</td>
        <td>${masina.an}</td>
        <td>${masina.pret} EUR</td>
      `;
  
      table.appendChild(tr);
    });
  
    listaMasini.appendChild(table);
  }
  
  // Creare instanță DepozitMasini și adaptare prin intermediul Adapter
  const depozitMasini = new DepozitMasini();
  
  const depozitMasiniAdapter = new DepozitMasiniAdapter(depozitMasini);
  
  // Adăugare Observer pentru actualizarea afișării stocului
  const observer = new Observer();
  observer.update = afiseazaStoc;
  depozitMasini.addObserver(observer);
  
  // Inițializare afișare stoc
  afiseazaStoc();
  