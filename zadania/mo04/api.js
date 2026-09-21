const ADRES = "https://jsonplaceholder.typicode.com/users";

const wynik = document.querySelector("#wynik");
const filtr = document.querySelector("#filtr");
const licznik = document.querySelector("#licznik");

let uzytkownicy = [];

function bezpieczny(tekst) {
  return String(tekst)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function kartaHtml(uzytkownik) {
  const { name, email, address, company } = uzytkownik;

  return `
    <li class="karta">
      <h2>${bezpieczny(name)}</h2>
      <dl>
        <dt>E-mail</dt>
        <dd><a href="mailto:${bezpieczny(email)}">${bezpieczny(email)}</a></dd>
        <dt>Miasto</dt>
        <dd>${bezpieczny(address.city)}</dd>
        <dt>Firma</dt>
        <dd>${bezpieczny(company.name)}</dd>
      </dl>
    </li>`;
}

function pokazListe(lista) {
  if (lista.length === 0) {
    wynik.innerHTML = `<p class="stan">Brak wyników</p>`;
    return;
  }

  wynik.innerHTML = `<ul class="lista">${lista.map(kartaHtml).join("")}</ul>`;
}

function pokazBlad(komunikat) {
  wynik.innerHTML = `
    <p class="stan stan--blad">
      <strong>Nie udało się pobrać danych.</strong>
      ${bezpieczny(komunikat)}
    </p>`;
}

function odswiez() {
  const szukane = filtr.value.trim().toLowerCase();

  const widoczne = szukane === ""
    ? uzytkownicy
    : uzytkownicy.filter(u => u.name.toLowerCase().includes(szukane));

  licznik.textContent =
    `Widocznych: ${widoczne.length} z ${uzytkownicy.length}`;

  pokazListe(widoczne);
}

async function pobierzUzytkownikow() {
  try {
    const odpowiedz = await fetch(ADRES);

    if (!odpowiedz.ok) {
      throw new Error(`Błąd HTTP: ${odpowiedz.status} ${odpowiedz.statusText}`);
    }

    return await odpowiedz.json();
  } catch (blad) {
    console.error("Nie udało się pobrać danych:", blad);
    throw blad;
  }
}

async function start() {
  filtr.disabled = true;

  try {
    uzytkownicy = await pobierzUzytkownikow();
    filtr.disabled = false;
    odswiez();
    filtr.focus();
  } catch (blad) {
    pokazBlad(blad.message);
    licznik.textContent = "";
  }
}

filtr.addEventListener("input", odswiez);

start();
