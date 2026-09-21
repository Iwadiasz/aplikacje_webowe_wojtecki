export const kursy = [
  { nazwa: "React", godziny: 30, aktywny: true },
  { nazwa: "Node.js", godziny: 20, aktywny: false },
  { nazwa: "MySQL", godziny: 15, aktywny: true },
  { nazwa: "Bootstrap", godziny: 10, aktywny: true },
];

export const nazwyAktywnych = tablica =>
  tablica.filter(kurs => kurs.aktywny).map(kurs => kurs.nazwa);

export const sumaGodzin = tablica =>
  tablica.reduce((suma, kurs) => suma + kurs.godziny, 0);

export const opis = ({ nazwa, godziny }) => `Kurs ${nazwa} trwa ${godziny} godzin`;

export const dodajGodziny = (kurs, ile) => ({ ...kurs, godziny: kurs.godziny + ile });
