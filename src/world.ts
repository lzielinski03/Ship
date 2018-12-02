import Ship from './ship';

class World {

	private context: CanvasRenderingContext2D;
	private objects = [];

	constructor() { 
		this.init();
	}

	public async init(): Promise<void> {
		return new Promise(async resolve => {
			this.context = await this.initializeCanvas();
			this.inicializeObjects();
			resolve();
		})
	}

	private async initializeCanvas(): Promise<CanvasRenderingContext2D> {
		return new Promise( resolve => 
			window.onload =  (() => {
				const root: any = document.getElementById('canvas');
				root.setAttribute('width', window.innerWidth + "px");
				root.setAttribute('height', window.innerHeight + "px");
				resolve(root.getContext("2d"));
			})
		);
	
	}

	private inicializeObjects(): void {
		this.objects.push(new Ship(this.context));
	}

	public render = (): void => {
		this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
		this.objects.forEach( object => {
			object.draw();
		});
		// console.log('render')
	}
}

export default World;