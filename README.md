# Hybrid Web/Mobile Application with Firebase

This project is a hybrid application that supports both web and mobile platforms using Vite for web development and NativeScript for mobile development, with Firebase integration and Storybook support for component development.

## Prerequisites

- Node.js (latest LTS version)
- NativeScript CLI: `npm install -g nativescript`
- For Android development:
  - Android Studio
  - Java Development Kit (JDK)
- For iOS development:
  - macOS
  - Xcode
  - CocoaPods

## Project Structure

```
.
├── app/                    # NativeScript application code
│   ├── shared/            # Shared logic (API, auth)
│   └── components/        # NativeScript UI components
├── src/                   # Web application code
├── App_Resources/         # Native platform configurations
│   ├── Android/          # Android specific resources
│   └── iOS/              # iOS specific resources
└── .storybook/           # Storybook configuration
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   - Copy your Firebase configuration:
     - For Android: Place `google-services.json` in `App_Resources/Android/src/`
     - For iOS: Place `GoogleService-Info.plist` in `App_Resources/iOS/`
     - For Web: Update `.env` file with your Firebase credentials

## Development

### Web Development

Start the web development server:
```bash
npm run web:dev
```

Build for production:
```bash
npm run web:build
```

### Mobile Development

Run on Android:
```bash
npm run mobile:android
```

Run on iOS:
```bash
npm run mobile:ios
```

### Storybook

Start Storybook development server:
```bash
npm run storybook
```

Build Storybook:
```bash
npm run storybook:build
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_API_ENDPOINT=your_api_endpoint
```

## Features

- 🌐 Web support using Vite
- 📱 Mobile support using NativeScript
- 🔥 Firebase Integration
  - Authentication
  - Real-time database (optional)
  - Cloud Firestore (optional)
- 📚 Storybook for component development
- 🔄 Shared business logic between platforms
- 🔒 Environment-based configuration

## Folder Structure Details

- `app/`: NativeScript application
  - `shared/`: Contains shared logic
    - `api-client.ts`: API communication
    - `auth-logic.ts`: Authentication logic
    - `ns-firebase-config.ts`: NativeScript Firebase configuration
  - `components/`: UI components for mobile
  
- `src/`: Web application
  - `web-firebase-config.js`: Web Firebase configuration

- `App_Resources/`: Native platform resources
  - `Android/`: Android configuration and resources
  - `iOS/`: iOS configuration and resources

## Best Practices

1. Keep platform-specific code separate
2. Share business logic when possible
3. Use TypeScript for type safety
4. Test components in Storybook before integration
5. Follow the respective platform guidelines for UI/UX

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.