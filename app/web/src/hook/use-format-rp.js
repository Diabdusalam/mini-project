function formatRupiahFromString(valueString) {
  const number = parseFloat(valueString);
  if (isNaN(number)) return "Rp 0";

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace("Rp", "Rp ");
}

export default formatRupiahFromString;
