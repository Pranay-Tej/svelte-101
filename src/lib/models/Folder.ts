export interface Folder {
	isFolder: boolean;
	name: string;
	folders?: Folder[];
}
