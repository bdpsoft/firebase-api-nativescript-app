import { StackLayout } from '@nativescript/core';
import { TextField } from '@nativescript/core';
import { Button } from '@nativescript/core';
import { Label } from '@nativescript/core';

function createLoginLayout() {
    const layout = new StackLayout();
    layout.style.padding = '20';
    
    const title = new Label();
    title.text = 'Login';
    title.className = 'h2';
    layout.addChild(title);

    const email = new TextField();
    email.hint = 'Email';
    layout.addChild(email);

    const pass = new TextField();
    pass.hint = 'Password';
    pass.secure = true;
    layout.addChild(pass);

    const btn = new Button();
    btn.text = 'Sign In';
    btn.on('tap', () => console.log('Login tapped', email.text));
    layout.addChild(btn);

    return layout;
}

export default {
    title: 'Mobile/Login',
    component: StackLayout,
};

export const Default = () => createLoginLayout();