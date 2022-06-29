
# Engine.js

This graphic engine was built with the purpose to make easier and intuitive build games with javascript, also optimize and turn possible run heavy games on browser web pages.

## Documentation

### class MonoBehavior

```js
const ExampleClass = new MonoBehavior();
```

| Methods      | Type       | Return | Description                                                         |
| :----------- | :--------- | :----- | :----------------------------------------------------------------   |
| `Start`      | `function` | `void` | This method run on scene start.                                     |
| `Update`     | `function` | `void` | This method run on every animation frame.                           |
| `LateUpdate` | `function` | `void` | This method run on every animation frame but asynchronously.        |
| `FixedUpdate`| `function` | `void` | This method run on every animation frame but first than everything. |

| Properties      | Type           | Description                                                         |
| :-------------- | :------------- | :----------------------------------------------------------------   |
| `GameObjects`   | `GameObject []`| This property contains all GameObjects that run this MonoBehavior.       |

#### Start()

Receive a *void* function that runs on the scene start.

```js
let player;

ExampleClass.Start = () => {
  player = this.getGameObjectById('player');
}
```

#### Update()
Receive a *void* function that runs on each animation frame.

```js
let velocity = 2.5;

ExampleClass.Update = () => {
  player.controller.moveRight(velocity);
}
```
## Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/brunojunqueira" target="_blank" rel="noreferrer"> <img src='https://github.com/brunojunqueira.png' alt='Bruno Junqueira' width="80px" height="80px"/></a> <a href="https://github.com/erick-menezes" target="_blank" rel="noreferrer"> <img src='https://github.com/erick-menezes.png' alt='Erick Menezes' width="80px" height="80px"/></a>
