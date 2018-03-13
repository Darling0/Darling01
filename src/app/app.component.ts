import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'{{title}} My faveorite hero is: {{myHero}}'
})
export class AppComponent {
  title = 'Tour of Heroes';
  myHero = 'Windstorm';
}

