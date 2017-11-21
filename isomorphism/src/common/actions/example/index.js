const exampleActionType = () => ({
  type: 'EXAMPLE',
  example: { test: true },
  createAt: Date.now(),
});

export default function exampleAction() {
  return dispatch => dispatch(exampleActionType());
}

