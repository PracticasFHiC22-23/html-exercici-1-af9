# <div align="center"> Factors Humans i Computació

## Version

**refactory with Vue**

## Web

> https://practicasfhic22-23.github.io/html-exercici-1-af9/

## About Web

![cover1](./.etc/cover1.png) ![cover1](./.etc/cover2.png)

## Contributors

Authors: [@Junjie Li](https://github.com/junjielyu13), [@Manuel Liu Wang](https://github.com/TheExorcit), [@Oscar Jaquero](https://github.com/OscarJaquero).

## Other

IT'S 2023, Bootstrap is a SHIT, please use [tailwindcss](https://tailwindcss.com/).

## License

[MIT](https://github.com/PracticasFHiC22-23/html-exercici-1-af9/blob/main/LICENSE) @ALL CONTRIBUTORS

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-c66648af7eb3fe8bc4f294546bfd86ef473780cde1dea487d3c4ff354943c9ae.svg)](https://classroom.github.com/online_ide?assignment_repo_id=10171500&assignment_repo_type=AssignmentRepo)


 ## **Informe sobre los criterios de diseño del formulario.**
 
 **STRUCTURE**
 
 Ask only what's required: Aplicat, nomes demanem les dades necessaries, en aquest cas el nom i l'edat.
 
 Order the form logically: Aplicat, primer es demana el nom i despres l'edat.
 
 Group related information: Aplicat, al nomes tenir nom i edat, pertanyent al grup de informacio personal.
 
 One column vs multiple columns: One column, el nostre format es d'una columna.
 
 **INPUT FIELDS**
 
 Number of fields: Aplicat, nomes hi tenim dos fields, un per el nom i un altre per l'edat.
 
 Mandatory vs Optional: No ho tenim aplicat
 
 Setting default values: Aplicat, quan es vol introduïr informacio sobre un nou gat, en el Nom surt com a default en el fons el nom de Mishi, encara que no es un nom aplicat, es a dir, si lo donas a guardar sortira un nom buit i en el cas d'Edat, el seu default es 0.
 
 Input masks: No aplicat.
 
 Desktop-Only: Make form keyboard-friendly: Aplicat, es pot navegar nomes amb el teclat, si fas tab vas al següent camp.
 
 Desktop-Only: Autofocus for input fields: Aplicat, quan es troba en un field, el seu contorn es de color blau fosc, si no esta en el field, el contorn no té color.
 
 Mobile-Only: Match keyboard to input: No hem testejat la pagina en un dispositiu mobil pero si estas en el field del Nom pots escriure lletres i numeros, en canvi, si estas en el field de l'Edat nomes pots escriure numeros, i el field de edat a la part dreta té dos fletxes d'augment i disminuir, es a dir, si tens un 3 i li donas a la fletxa cap a munt, el nombre augmenta en 1, si li donas a la fletxa cap a baix, el nombre disminueix en 1.

Limit typing (autocompletition): No aplicat

**LABELS**

 Number of words: Els labels nomes contenen les lletres necessaries, en aquest cas, Nom i Edat.
 
 Sentence case vs title case: En el nostre cas estem aplicant el sentence case ja que es més facil de llegir.
 
 Avoid all caps: Només tenim la primera lletra en majuscula, les demes estan en minuscula.
 
 Alignment of labels: left vs right vs top: Nosaltres tenim aplicat el top alignment label, facilita la lectura.
 
 Inline labels: Nosaltres en la part de Nom tenim Mishi com a inline label, un cop començes a escriure el Mishi s'en va i esta el que estas escrivint, en el cas de l'Edat, comença en 0 pero si elimines el 0 hi ha un 3 con a inline label.
 
 **ACTION BUTTON**
 
 Primary vs secondary actions: En el nostre cas, nomes tenim un button guardar.
 
 Button Location: La localització del nostre guardar button esta en el centre i es tan amplia com el form, d'aquesta manera l'usuari no es pot equivocar.
 
 Naming conventions: En el forms només tenim el botó guardar, per guardar les dades del gat.
 
 Multiple action buttons: Només tenim un button.
 
 The reset button is pure evil: No tenim reset button.
 
 Visual appearance: el nostre guardar button es de color verd, es diferenciat dels demes labels i inputs.
 
 **Feedback**
 
 Visual feedback: No ho tenim aplicat.
 
 Validation: No ho tenim aplicat.
 
 Inline validation: No ho tenim aplicat.
 
 Protecting data: No ho tenim aplicat.
 
 Natural lenguage interface: No ho tenim aplicat.
 
 Conversational Form: No ho tenim implementat.
