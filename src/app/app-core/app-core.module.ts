import { CommonModule } from "@angular/common";
import {
	provideHttpClient,
	withInterceptorsFromDi
} from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [],
	exports: [ReactiveFormsModule],
	imports: [CommonModule, ReactiveFormsModule],
	providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppCoreModule {}
