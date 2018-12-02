import Command 		from './command';
import Point 		from './point';
import Unit 		from './unit';
// import Direction	from './direction';
import GameActor 	from './gameactor';

class MoveUnitCommand implements Command {

	private unit: Unit;
	private point: Point;

	constructor() {
		this.unit = new Unit();
		this.point = new Point();
	}

	// static getDirection (direction: Direction): Command {
	// 	let fn;
	// 	const directions = {
	// 		[Direction.Up]: () => {
	// 			console.log('Up');
	// 		},
	// 		[Direction.Down]: () => {
	// 			console.log('Down');
	// 		},
	// 		[Direction.Left]: () => {
	// 			console.log('Left');
	// 		},
	// 		[Direction.Right]: () => {
	// 			console.log('Right');
	// 		},
	// 		'default': () => null
	// 	};

	// 	fn = directions[direction]
	// 		? directions[direction]
	// 		: directions['default'];

	// 	return fn();
	// }

	public execute(actor: GameActor): void {
		// actor.move(this.direction)
		// console.log('move unit command executed!');
	}

}

export default MoveUnitCommand;