import { CommonModule } from "@angular/common";
import {
    Component,
    Input,
    ViewEncapsulation,
    computed,
    signal
} from "@angular/core";
import { NgxImageZoomModule } from "ngx-image-zoom";

@Component({
	selector: "image-zoom-viewer",
	standalone: true,
	imports: [CommonModule, NgxImageZoomModule],
	templateUrl: "./image-zoom-viewer.component.html",
	styleUrl: "./image-zoom-viewer.component.scss",
	encapsulation: ViewEncapsulation.None
})
export class ImageZoomViewerComponent {
	@Input() imageSrc: string;
	@Input() imageThumbnailSrc: string;
    @Input() imageClass: any;
	
    isLoading = signal(true);
	currentClass = computed(() => {
		return {
			skeleton: this.isLoading(),
			[this.imageClass]: true
		};
    });
    
	constructor() {}

	ngOnInit() {}

	imageLoaded(event) {
		if (event) {
			this.isLoading.set(!event);
		}
	}
}
