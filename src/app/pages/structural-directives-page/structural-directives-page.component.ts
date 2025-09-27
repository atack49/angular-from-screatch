import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesComponent {

  // Conditional IF
  isVisible = signal(true);

  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  // Conditional SWITCH (con Signals)
  viewMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }

  // Cycle - For Loop
  users = signal([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' },
  ]);
}
