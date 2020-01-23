import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SetFormComponent } from './set-form/set-form.component';
import { SetListComponent } from './set-list/set-list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SetListComponent, SetFormComponent],
  exports: [SetListComponent, SetFormComponent]
})
export class FeatureSetsModule {}