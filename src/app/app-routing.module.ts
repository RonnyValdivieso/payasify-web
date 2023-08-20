import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { VotingResultsComponent } from './pages/voting-results/voting-results.component';
import { VotingComponent } from './pages/voting/voting.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: ':id', component: VotingComponent },
	{ path: 'resultados', component: VotingResultsComponent }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }