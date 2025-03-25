# Angular

## JavaScript Environment
### NVM
- Windows: https://github.com/coreybutler/nvm-windows/releases
- Linux, WSL, MacOS: https://github.com/nvm-sh/nvm

```
nvm list
nvm list available
nvm install 22.14.0
nvm use 22.14.0
```

## IDE
- VS Code: https://code.visualstudio.com/
- Webstorm: https://www.jetbrains.com/webstorm/

## JavaScript/EcmaScript
- MDN: https://developer.mozilla.org/fr/docs/Web/JavaScript
- W3Schools: https://www.w3schools.com/js/default.asp

## TypeScript
- Main website: https://www.typescriptlang.org/
- Playground: https://www.typescriptlang.org/

## Angular
- Main website: https://angular.dev/
- Tutorial: https://angular.dev/tutorials
- Playground: https://angular.dev/playground

### Install Angular (latest stable version)
Globally: `npm install -g @angular/cli`

or locally (project directory): `npm install @angular/cli`

Tester: 
```
ng --version
ng version
npx ng --version
npx ng version
```

### Install Angular (older version)
NB: globally add flag `-g`
```
npm install @angular/cli@18
ng version
```

### IDE
Extension VSCode: Angular Language Service

## Angular commands (CLI)
https://angular.dev/cli

### start project
ng new city-app

### add element to the project
https://angular.dev/cli/generate
#### Interfaces
```
ng generate interface interface/city
ng g i interface/department 
```
#### Component
```
ng generate component component/city-card
ng g c component/city-card --skip-tests
ng g c component/city-card-simple --skip-tests --inline-style --inline-template
```

### Structures de contrôles
@if, @for, @case, ...
- https://angular.dev/api/core/@if
- https://angular.dev/api/core/@for