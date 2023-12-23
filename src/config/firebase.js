// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD7n9ogLBgPZvGD5X7zbNalKkbqKFx9IrM',
  authDomain: 'stratton-banking-project.firebaseapp.com',
  projectId: 'stratton-banking-project',
  storageBucket: 'stratton-banking-project.appspot.com',
  messagingSenderId: '295711808924',
  appId: '1:295711808924:web:f1ecffe72222307f0b3c59',
  measurementId: 'G-3EHBH3VTFK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
