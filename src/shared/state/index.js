import reducers from './reducers';
import eventEmitter from './event-emitter';

export default (() => {
  return Object.entries(reducers).map(([action, callback]) =>
    eventEmitter.on(action, callback),
  );
})();
