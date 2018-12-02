import ImputKey			from './inputkey';
import InputHandler		from './inputhandler';

class EventHandler {

	public static registerControls(): void {
		window.addEventListener('keydown', event => {
			new InputHandler(<ImputKey>event.keyCode);
		}, false);

		window.addEventListener('click', event => {
			new InputHandler(<ImputKey>18);
		}, false);
	}
}

export default EventHandler;