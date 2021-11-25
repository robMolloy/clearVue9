# For Quasar;

In quasar boot file - src/boot/clearvue9.js

```
import { clearConsole } from 'clearvue9';

clearConsole(module, 'a messsage to overrride the default message');
```

In quasar.conf.js, clearvue9 should be the first boot file

```

boot: [ 'clearvue9', ... ]

```
