# Flash Message script

Notification script using the [toastr.js](https://github.com/CodeSeven/toastr) library

### Public Methods

```sh
innovedFlashMessage.init();
```
innovedFlashMessage.init() - Default Options:

```sh
"closeButton": true,
"positionClass": "toast-top-right",
"extendedTimeOut": "0"
```

```sh
innovedFlashMessage.create();
```

innovedFlashMessage.create() -Accepts:

```sh
type, title, message, options
```
Default type = 'info'. For other types and options see https://codeseven.github.io/toastr/demo.html