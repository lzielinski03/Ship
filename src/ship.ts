class Ship {

	// type game object
	// implement update
	// implement draw

	constructor(private ctx) {
		this.ctx = ctx;
	}


	public draw() {
		this.ctx.beginPath();
		const ax = 0;
		const ay = 120;

		const bx = 30;
		const by = 90;

		const cx = 50;
		const cy = 0;

		const dx = 70;
		const dy = 90;

		const ex = 100;
		const ey = 120;

		const fx = 90;
		const fy = 130;

		const gx = 50;
		const gy = 120;

		const hx = 10;
		const hy = 130;

		//         		 →   ↓
		this.ctx.moveTo(ax, ay);
		this.ctx.lineTo(bx, by);
		this.ctx.lineTo(cx, cy);
		this.ctx.lineTo(dx, dy);
		this.ctx.lineTo(ex, ey);
		this.ctx.lineTo(fx, fy);
		this.ctx.lineTo(gx, gy);
		this.ctx.lineTo(hx, hy);

		this.ctx.lineTo(ax, ay);
		this.ctx.fill();
	}
}

export default Ship;