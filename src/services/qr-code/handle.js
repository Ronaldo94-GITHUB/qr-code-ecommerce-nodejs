function isValidUrl(value) {
  try {
    const url = new URL(value);

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    );
  } catch {
    return false;
  }
}

async function handleQRCode(link) {
  const normalizedLink = link.trim();

  if (!normalizedLink) {
    throw new Error("O link não pode estar vazio.");
  }

  if (!isValidUrl(normalizedLink)) {
    throw new Error(
      "Link inválido. Utilize uma URL iniciando com http:// ou https://."
    );
  }

  return normalizedLink;
}

export default handleQRCode;
