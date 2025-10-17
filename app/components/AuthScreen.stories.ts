import { ContentView, Button } from '@nativescript/core';

// Create a simple NativeScript view for Storybook
function createAuthLayout() {
    const layout = new ContentView();
    layout.className = 'p-20';
    layout.style.backgroundColor = 'white';

    const button = createNativeButton('Sign in Anonymously', () => console.log('Anonymous sign-in'));
    layout.content = button;
    
    return layout;
}

function createNativeButton(text: string, tapHandler: () => void) {
    const button = new Button();
    button.text = text;
    button.on('tap', tapHandler);
    return button;
}

export default {
    title: 'Mobile/AuthButtons',
    component: ContentView,
};

export const AnonymousButton = () => createAuthLayout();