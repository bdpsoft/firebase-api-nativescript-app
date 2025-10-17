import { firebase } from "@nativescript/firebase-core";
import "@nativescript/firebase-auth";

// NativeScript Firebase initialization
// Configuration is automatically loaded from platform-specific files:
// - Android: App_Resources/Android/src/google-services.json
// - iOS: App_Resources/iOS/GoogleService-Info.plist
firebase().initializeApp();

export const auth = firebase().auth();