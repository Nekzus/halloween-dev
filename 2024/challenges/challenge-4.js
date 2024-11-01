function findTheKiller(whisper, suspects) {
  const regex = new RegExp(
    `^${whisper.replace(/~/g, "([a-zA-Z])").replace(/\$$/, "$")}`,
    "i"
  );
  return suspects.filter(regex.test, regex).join(",");
}
