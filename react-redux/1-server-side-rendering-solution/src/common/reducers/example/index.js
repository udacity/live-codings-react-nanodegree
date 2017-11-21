import switchcase from './../../lib/switchcase';

export default function exampleReducer(state = {}, action) {
  return switchcase({
    EXAMPLE: action.example,
  })(state)(action.type);
}

