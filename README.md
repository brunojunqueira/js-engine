
# Engine.js

This graphic engine was built with the purpose to make easier and intuitive build games with javascript, also optimize and turn possible run heavy games on browser web pages.

## Documentation

### class MonoBehavior

```http
  const ExampleClass = new MonoBehavior();
```

| Methods      | Type       | Description                                                         |
| :----------- | :--------- | :----------------------------------------------------------------   |
| `Start`      | `void`     | This method run on scene start.                                     |
| `Update`     | `void`     | This method run on every animation frame.                           |
| `LateUpdate` | `void`     | This method run on every animation frame but asynchronously.        |
| `FixedUpdate`| `void`     | This method run on every animation frame but first than everything. |

| Properties      | Type           | Description                                                         |
| :-------------- | :------------- | :----------------------------------------------------------------   |
| `GameObjects`   | `GameObject []`| This property contains all GameObjects that run this MonoBehavior.       |

#### Start()

Receive a *void* function that runs on the scene start.

```http
  let player;

  ExampleClass.Start = () => {
    player = this.getGameObjectById('player');
  }
```


