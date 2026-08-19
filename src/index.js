import prompt from "prompt";

import promptSchemaMain from "./prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";
import handleQRCode from "./services/qr-code/handle.js";

console.clear();

console.log("==========================================");
console.log("     GERADOR DE QR CODE E-COMMERCE");
console.log("==========================================");
console.log("");
console.log("Gere QR Codes de links de produtos");
console.log("diretamente pelo terminal.");
console.log("");

prompt.start();

prompt.get(promptSchemaMain, async (error, result) => {
  if (error) {
    console.error("");
    console.error("Erro ao receber os dados.");
    process.exit(1);
  }

  try {
    const link = await handleQRCode(result.link);

    await createQRCode(link);

    console.log("");
    console.log("==========================================");
    console.log("PROCESSO FINALIZADO");
    console.log("==========================================");
  } catch (error) {
    console.error("");
    console.error(`Erro: ${error.message}`);
    process.exitCode = 1;
  }
});
