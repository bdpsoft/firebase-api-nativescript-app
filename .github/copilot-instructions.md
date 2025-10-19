# AI Agent Instructions for Firebase-API-NativeScript-App

## Project Architecture

This is a hybrid application supporting both web (Vite) and mobile (NativeScript) platforms with shared Firebase integration:

```
app/                    # NativeScript mobile app
  ├── shared/          # Cross-platform shared logic
  └── components/      # Mobile-specific UI
src/                   # Web application (Vite)
App_Resources/         # Native platform configs
```

### Key Architecture Patterns

1. **Platform-Specific Firebase Initialization**
   - Mobile: Auto-loads from platform files (`ns-firebase-config.ts`)
   - Web: Manual config from env vars (`web-firebase-config.js`)
   - Example: `app/shared/ns-firebase-config.ts` demonstrates mobile initialization

2. **Authentication Flow**
   - Shared auth logic in `app/shared/auth-logic.ts`
   - Platform-specific implementations extend shared base
   - Token management pattern: `handleUserLoggedIn()` -> get token -> call API

3. **API Communication**
   - Centralized in `app/shared/api-client.ts`
   - Uses environment-based endpoint configuration
   - Bearer token authentication pattern

## Development Workflows

### Environment Setup
1. Firebase configuration required in platform-specific locations:
   ```
   App_Resources/Android/src/google-services.json
   App_Resources/iOS/GoogleService-Info.plist
   .env (for web)
   ```

2. Required env variables:
   ```
   VITE_FIREBASE_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN
   VITE_FIREBASE_PROJECT_ID
   VITE_API_ENDPOINT
   ```

### Key Commands
- Mobile: `npm run mobile:android` or `npm run mobile:ios`
- Web: `npm run web:dev` and `npm run web:build`
- Components: `npm run storybook`

## Conventions & Patterns

1. **Cross-Platform Code Organization**
   - Shared logic goes in `app/shared/`
   - Platform-specific UI in respective directories
   - Use TypeScript interfaces for cross-platform type safety

2. **Error Handling Pattern**
   ```typescript
   try {
     const response = await fetch(/*...*/);
     if (!response.ok) throw new Error(`API failed: ${response.statusText}`);
     return await response.json();
   } catch (error) {
     return { error: true, message: error.message };
   }
   ```

3. **Component Development**
   - Create Storybook stories alongside components
   - Example: See `components/Login.stories.ts`

## Integration Points

1. **Firebase Services**
   - Authentication (implemented)
   - Real-time database (optional)
   - Cloud Firestore (optional)

2. **API Integration**
   - RESTful endpoints
   - Bearer token authentication
   - Centralized error handling

When modifying code:
- Maintain platform-specific separation
- Update both web and mobile implementations when changing shared logic
- Test changes in Storybook before integration