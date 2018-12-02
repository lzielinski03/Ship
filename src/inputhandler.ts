import Command 			from './command';
import MoveUnitCommand 	from './moveunitcommand';
import ImputKey			from './inputkey';

class InputHandler {
	
	private arrowUp: MoveUnitCommand;
	private arrowDown: MoveUnitCommand;
	private arrowLeft: MoveUnitCommand;
	private arrowRight: MoveUnitCommand;
	// private clickLeft: FireUnitCommand;

	constructor (input: ImputKey) {
		if (input === ImputKey.Up) {
			console.log('unit Up')
		}
		if (input === ImputKey.Down) {
			console.log('unit Down')
		}
		if (input === ImputKey.Left) {
			console.log('unit Left')
		}
		if (input === ImputKey.Right) {
			console.log('unit Right')
		}
		if (input === ImputKey.Fire) {
			console.log('unit Fire')
		}
	}

}

export default InputHandler;