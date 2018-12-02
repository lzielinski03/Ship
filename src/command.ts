import GameActor from './gameactor';

interface Command {
	execute(actor: GameActor): void;
}

export default Command;