# mfehelper - Microfrontend Helper for Angular Module Federation

mfehelper ensures your Angular host application runs smoothly even if some microfrontends (MFEs) are offline or unavailable. It prevents crashes by providing a fallback UI when an MFE is down, improving resilience and user experience.

## 🚀 Features  
✅ Handles Missing Microfrontends – Prevents crashes when an MFE is unavailable  
✅ Provides a Fallback UI – Displays an alternative component instead of breaking the host app  
✅ Automatic Remote Check – Dynamically checks if an MFE is running before loading  
✅ Easy to Integrate – Works seamlessly with Angular Webpack Module Federation  
✅ Minimal Configuration – No need to manually modify Webpack settings  

## 📦 Installation  

### Using npm:  
```sh
npm install angular-mfe-helper
```

### Using yarn:  
```sh
yarn add angular-mfe-helper
```

## 🔧 Usage  

### 1️⃣ Wrap Remote Modules with loadRemoteMFE  
In your **app.routes.ts**, use \`loadRemoteMFE\` to load remote microfrontends dynamically with a fallback UI:  

```typescript
import { ModuleFederationHelper } from 'angular-mfe-helper';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => 
      ModuleFederationHelper.loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        remoteName: 'mfeDashboard',
        exposedModule: './Module',
      }),
  },
  {
    path: 'analytics',
    loadChildren: () => 
      ModuleFederationHelper.loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        remoteName: 'mfeAnalytics',
        exposedModule: './Module',
      }),
  },
];
```

### 2️⃣ Providing Fallback Components  
If an MFE is unavailable, mfehelper will load the provided fallback module instead:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackComponent } from './fallback.component';

@NgModule({
  declarations: [FallbackComponent],
  imports: [CommonModule],
})
export class FallbackDashboardModule {}
```

## 🛠 How It Works  
1️⃣ mfehelper first checks if the remote MFE is accessible  
2️⃣ If available → Loads the MFE normally  
3️⃣ If unavailable → Loads the provided fallback module instead  

This prevents runtime errors and allows the host application to function even if some MFEs are offline.  

## 📌 Configuration  
You can dynamically load remote modules using `ModuleFederationHelper`:  

```typescript
ModuleFederationHelper.loadRemoteModule({
  remoteEntry: 'http://localhost:4201/remoteEntry.js',
  remoteName: 'remoteApp',
  exposedModule: './Component'
}).then((component) => {
  console.log('Remote Component Loaded:', component);
});
```


## 🎯 Why Use mfehelper?  
🚀 Prevents host app crashes when MFEs are missing  
💡 Enhances user experience with fallback UI instead of errors  
🔧 Reduces manual error handling in Angular Module Federation setups  
📈 Scales easily with multiple MFEs  

## 📄 License  
MIT License © 2025 Lakshay Bhardwaj  

## 📢 Contact  
If you have any issues or queries, feel free to reach out at **lakshay112111@gmail.com**. We will soon make this open source! 🚀" > README.md
