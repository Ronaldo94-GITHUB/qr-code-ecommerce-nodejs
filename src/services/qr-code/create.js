import qrcode from "qrcode-terminal";

async function createQRCode(link) {
  console.log("");
  console.log("Gerando QR Code...");
  console.log("");

  qrcode.generate(link, {
    small: true
  });

  console.log("");
  console.log("QR Code criado com sucesso!");
  console.log(`Destino: ${link}`);
}

export default createQRCode;
