function phoneNumberDirectory(str) {
  const phoneNumbers = str;
  const directory = new Map();
  phoneNumbers.forEach((phoneNumber) => {
    const [name, number] = phoneNumber.split(":");
    directory.set(name, number);
  });
  return directory;
}

module.exports = phoneNumberDirectory;
