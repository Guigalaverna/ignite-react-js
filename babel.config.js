module.exports = {
  presets: [
    // Permite que o babel escolha a melhor opção de conversão
    // de acordo com o ambiente onde está sendo executado
    "@babel/preset-env",

    // Permite que o babel entenda a sintaxe do React, o JSX não é um tipo de arquivo
    // que o browser entenderia, então isso possibilita do babel entender a sintaxe
    "@babel/preset-react",
  ],
};
