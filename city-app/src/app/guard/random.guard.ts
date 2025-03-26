import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// guard purpose: authentication, privileges, ...
export const randomGuard: CanActivateFn = (route, state) => {
  // injection routes (DI)
  const router = inject(Router)

  const seconds = (new Date()).getSeconds()
  console.log(`Random guard: ${seconds}s`)
  if (seconds % 3 == 0){
    console.log('Random guard: ok')
    return true
  } else {
    console.log('Random guard: ko')
    // navigate to error page
    router.navigate(["/error"])
    return false
  }
};
