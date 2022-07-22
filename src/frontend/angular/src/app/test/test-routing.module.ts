import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleTestComponent } from './simple-test/simple-test.component';

const routes: Routes = [
  { path: '', component: SimpleTestComponent },
  { path: 'simple', component: SimpleTestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
