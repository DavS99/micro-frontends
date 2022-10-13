import {registerApplication, start} from 'single-spa'

registerApplication(
    'vue',
    () => import('./src/vue/vue.app.js'),
    () => location.pathname.startsWith('/')
);

registerApplication(
    'react',
    () => import('./src/react/react.app'),
    () => location.pathname.startsWith('/')
);

start();