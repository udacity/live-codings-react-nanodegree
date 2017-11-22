# switchcase

`switchcase` is an internal Redux utility built for avoiding use the the `switch` statement, because "it's not immutable, it can't be composed with other functions, and it's a little side effecty". Concepts for this use is located in https://hackernoon.com/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d.

## `switchcase(cases)(defaultCase)(key)`

`switchcase` is a curried function which executes its curried callbacks in three levels, and its arguments are:

*`cases`*: an object for receiving the possible cases to be matched following this model:

```
{
  TRIGGER_EXAMPLE: action.example,
  USER_STATUS: action.status,
}
```

*`defaultCase`*: the defaultCase is the state itself. From a reducer, its execution is:

```
export default function exampleReducer(state = {}, action) {
  return switchcase({
    TRIGGER_EXAMPLE: action.example
  })(state)(action.type);
}
```

*`key`*: used for receiving the action type in the reducer as showed in `defaultCase` argument example. It is used to match the case and return the value from matched object key in `cases`.

