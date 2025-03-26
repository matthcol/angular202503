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

- class (cl), enum (e), interface (i)
- guard (g), pipe (p), interceptor
- component (c)
- service (s), service-worker, web-worker, resolver
- config, directive
- module (m), application, app-shell, library

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

### Pipes
Builtins and customs:
https://angular.dev/guide/templates/pipes

```
ng g p pipe/not-defined
```

### Guards
```
ng g g guard/random
```

### Service
```
ng g s service/city
```

## JSON Server
https://github.com/typicode/json-server
```
npm install --save-dev json-server
npx json-server data/cities82.json
```
