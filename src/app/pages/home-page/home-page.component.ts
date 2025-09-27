import { Message } from './../../../../node_modules/esbuild-wasm/esm/browser.d';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent { 
  message: string = 'Bienvenid@ a Angular desde cero!';
}
