import { callApiWithToken } from './api-client';

// Types for authentication
export interface AuthUser {
    uid: string;
    getIdToken(): Promise<string>;
}

export interface AuthResult {
    user: AuthUser;
    apiResult: any;
}

// Shared authentication logic
export async function handleUserLoggedIn(user: AuthUser): Promise<AuthResult> {
    console.log("User logged in:", user.uid);
    
    // Get ID Token
    const token = await user.getIdToken();
    
    // Call API with Token
    const apiResult = await callApiWithToken(token);
    
    return { user, apiResult };
}

// Platform-specific auth implementations will be in separate files:
// - web-auth.ts for Web/Storybook
// - ns-auth.ts for NativeScript