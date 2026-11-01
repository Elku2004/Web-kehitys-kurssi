const student1 = {
  nimi: "Elias",
  pisteet: 35,
  opiskelijanumero: 0,
  puuttuu: function () {
  return 240 - this.pisteet;
  },
};

const student2 = {
  nimi: "Alias",
  pisteet: 1,
  opiskelijanumero: 0,
  puuttuu: function () {
  return 240 - this.pisteet;
  },
};

const student3 = {
  nimi: "Pekka",
  pisteet: 240,
  opiskelijanumero: 0,
  puuttuu: function () {
    return 240 - this.pisteet;
  },
};


opiskelijat = [student1, student2, student3];
for (let i = 0; i < opiskelijat.length; i++) {
    opiskelijat[i].opiskelijanumero = 261 + i;
}

for (let i = 0; i < opiskelijat.length; i++) {
  console.log(`Nimi: ${opiskelijat[i].nimi}`);
  console.log(`Opiskelijanumero: ${opiskelijat[i].opiskelijanumero}`)
  console.log (`Puuttuvat pisteet: ${opiskelijat[i].puuttuu()}`)
}

document.querySelector("#thisname").innerHTML = opiskelijat[0].nimi