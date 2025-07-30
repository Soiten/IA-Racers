class Machine {
  constructor(state) {
    this._state = state;
    state.setMachine(this);
  }

  changeTo(state) {
    this._state = state;
    state.setMachine(this);
  }

  update() {
    this._state.run();
  }
}

class State {
  setMachine(maquina) {
    this._machine = maquina;
  }

  machineState(state) {
    this._machine.changeTo(state);
  }

  run() {}
}
