const form = document["words"];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const pluralNoun1 = form.pluralNoun1.value;
  form.pluralNoun1.value = "";
  const pluralNoun2 = form.pluralNoun2.value;
  form.pluralNoun2.value = "";
  const pluralNoun3 = form.pluralNoun3.value;
  form.pluralNoun3.value = "";
  const pluralNoun4 = form.pluralNoun4.value;
  form.pluralNoun4.value = "";

  const animals = form.animals.value;
  form.animals.value = "";

  const noun1 = form.noun1.value;
  form.noun1.value = "";
  const noun2 = form.noun2.value;
  form.noun2.value = "";

  const adjective1 = form.adjective1.value;
  form.adjective1.value = "";
  const adjective2 = form.adjective2.value;
  form.adjective2.value = "";
  const adjective3 = form.adjective3.value;
  form.adjective3.value = "";
  const adjective4 = form.adjective4.value;
  form.adjective4.value = "";
  const adjective5 = form.adjective5.value;
  form.adjective5.value = "";

  const color = form.color.value;
  form.color.value = "";

  const verb1 = form.verb1.value;
  form.verb1.value = "";
  const verb2 = form.verb2.value;
  form.verb2.value = "";
  const verb3 = form.verb3.value;
  form.verb3.value = "";

  const h1 = document.createElement("h1");
  h1.textContent =
    " Unicorns aren't like other " +
    pluralNoun1 +
    ";" +
    " they're " +
    adjective1 +
    "." +
    " They look like " +
    animals +
    "," +
    " with " +
    pluralNoun2 +
    " for feet and a " +
    adjective2 +
    " mane of hair. But Unicorns are " +
    color +
    " and have a " +
    adjective3 +
    " " +
    noun1 +
    " on their heads. Some " +
    pluralNoun3 +
    " don't believe Unicorns are " +
    adjective4 +
    " but I believe in them. I would love to " +
    verb1 +
    " a Unicorn to faraway " +
    pluralNoun4 +
    "." +
    " one thing I've always " +
    verb3 +
    " about is whether Unicorns " +
    verb2 +
    " rainbows, or is their " +
    noun2 +
    " " +
    adjective5 +
    " like any other animals? ";
  document.getElementsByTagName("body")[0].append(h1);
});
