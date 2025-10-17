import { Application } from '@nativescript/core';
import { firebase } from "@nativescript/firebase-core";

// Initialize Firebase before the app starts
firebase().initializeApp();

Application.run({ moduleName: 'app-root' });