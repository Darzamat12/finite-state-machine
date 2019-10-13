const events={
    'study':'busy',
    'get_tired':'sleeping',
    'get_hungry':'hungry',
    'eat':'normal',
    'get_up':'normal',
}

class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.activeState=config.initial;

    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this.activeState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        this.activeState=state;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        this.activeState=events[event];
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.activeState=config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {}

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
