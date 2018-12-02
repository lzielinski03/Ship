import World from './world';
import EventHandler from './eventhandler';

class Main {
  
	private static _instance = null;
	private start = null;

	private world: World;
  
	private constructor() {
		this.init();
	}

	private async init() {
		this.world = new World();
		await this.world.init();
		window.requestAnimationFrame(this.step);
  		EventHandler.registerControls();
	}

	public static get Engine() {
		return this._instance || (this._instance = new this());
	}

	update = () => {};

	render = () => this.world.render();

	step = timestamp => {
		if (!this.start) this.start = timestamp;
		const progress = timestamp - this.start;
  
		this.update();
		this.render();
  
		window.requestAnimationFrame(this.step);
	}

	
}

const game = Main.Engine;

// update
// render

