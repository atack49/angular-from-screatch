import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute-directives-page',
  standalone: true,            
  imports: [CommonModule],     
  templateUrl: './attribute-directives-page.component.html',
})
export class AttributeDirectivesPageComponent {
  title = 'Attribute Directives';

  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The current state is active';
      case 'error':
        return 'The current state is error';
      case 'neutral':
        return 'The current state is neutral';
    }
  });

  setActive() {
    this.state.set('active');
  }

  setError() {
    this.state.set('error');
  }

  setNeutral() {
    this.state.set('neutral');
  }
}
