import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.SVELTE_FIREBASE_API_KEY,
	authDomain: process.env.SVELTE_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.SVELTE_FIREBASE_PROJECT_ID,
	storageBucket: process.env.SVELTE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.SVELTE_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.SVELTE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);
