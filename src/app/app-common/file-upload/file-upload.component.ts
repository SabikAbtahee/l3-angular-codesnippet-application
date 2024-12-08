import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, ViewChild } from "@angular/core";
import { ToastMessageService } from "@common";
import { MaterialModule } from "@material";
import { AppSharedModule } from "@shared";

@Component({
    selector: "file-upload",
    imports: [CommonModule, AppSharedModule, MaterialModule],
    templateUrl: "./file-upload.component.html",
    styleUrl: "./file-upload.component.scss"
})
export class FileUploadComponent {
	@Input() label: string = "Drag and drop files here or click to upload";

	@ViewChild("fileInput", { static: false }) fileInput!: ElementRef;

	files: File[] = [];
	fileUrls: string[] = [];
	filesHovering: boolean = false;
	validFileTypes = ["image/jpeg", "image/png"];

	constructor(private _toastMessageService: ToastMessageService) {}
	onDragOver(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.filesHovering = true;

		console.log("OVER");
		// Add class to indicate active drag
	}

	onDragLeave(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.filesHovering = false;
		console.log("LEAVE");

		// Remove class indicating active drag
	}

	onDrop(event: DragEvent) {
		event.preventDefault();
		event.stopPropagation();
		this.filesHovering = false;
		console.log("DROP");

		if (event.dataTransfer) {
			this.handleFiles(event.dataTransfer.files);
		}
	}

	onFileSelect(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files) {
			this.handleFiles(input.files);
		}
	}

	handleFiles(files: FileList) {
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (this.validFileTypes.includes(file.type)) {
				this.files.push(file);
				this.fileUrls.push(this.fileUrl(file));
			} else {
				this._toastMessageService.openSnackbar({
					message: `File type ${file.type} not supported.`,
					type: "error"
				});
			}
		}
		// Trigger upload or other processing
	}
	fileUrl(file: File): string {
		return URL.createObjectURL(file);
	}
	uploadFiles() {
		// Implement file upload logic
	}
}
