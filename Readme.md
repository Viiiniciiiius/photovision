# PhotoVision

Um aplicativo móvel em React Native (Expo) para captura de fotos organizadas automaticamente em pastas por data.

## 📋 Descrição

Este projeto demonstra como usar **Expo Camera** e **Expo FileSystem** para capturar fotos e armazená-las no sistema de arquivos do dispositivo, organizando-as em pastas com base na data (`YYYY-MM-DD`) e nomeando os arquivos com timestamp (`HH-MM-SS`). Tudo em **TypeScript**, sem uso de `any`.

## 🛠️ Tecnologias

* [Expo](https://expo.dev/) (Bare workflow opcional)
* React Native
* TypeScript
* expo-camera
* expo-file-system

## 🚀 Começando

### Pré-requisitos

* Node.js (v14+)
* npm ou Yarn
* Expo CLI (`npm install -g expo-cli`)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/photovision.git
   ```
2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   ```
3. Inicie o projeto:

   ```bash
   npm start
   # ou
   yarn start
   ```
4. Use um emulador ou o app Expo Go no seu dispositivo para executar.

## 📂 Estrutura de Pastas

```
photovision/
├─ src/
│  ├─ screens/
│  │  └─ CameraScreen.tsx      # Tela principal da câmera
│  ├─ utils/
│  │  └─ fileStorage.ts        # Lógica de gravação e organização de arquivos
│  └─ types/
│     └─ Photo.ts              # Interface Photo
├─ App.tsx                     # Ponto de entrada do app
├─ package.json
└─ tsconfig.json
```

## ⚙️ Uso

1. Conceda permissão de câmera quando solicitado.
2. Toque em **Capturar** para tirar uma foto.
3. A foto será movida para `documentDirectory/photos/YYYY-MM-DD/HH-MM-SS.jpg`.
4. O caminho salvo é exibido na tela.

## 📐 Configurações adicionais

* Você pode personalizar o formato de nome de arquivos em `src/utils/fileStorage.ts`.
* Para alternar entre `Bare workflow` e `Managed workflow`, consulte a [documentação do Expo](https://docs.expo.dev/).

## 🤝 Contribuições

Contribuições são bem-vindas! Abra uma issue ou envie um Pull Request.

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para detalhes.
