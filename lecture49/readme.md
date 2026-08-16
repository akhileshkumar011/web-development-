# Common In-Built Objects in JavaScript

JavaScript provides some built-in objects that help us perform common tasks easily.

---

## 1. Math Object

The `Math` object is used for mathematical operations.

### Common Methods

```js
Math.PI              // Value of π
Math.max(10, 20, 30) // Maximum value
Math.min(10, 20, 30) // Minimum value

Math.round(1.4)      // 1 → nearest integer
Math.floor(1.9)      // 1 → rounds down
Math.ceil(1.1)       // 2 → rounds up

Math.abs(-5)         // 5 → absolute value

Math.random()        // Random number: 0 <= x < 1
Math.random() * 10   // Random number: 0 <= x < 10

Math.sqrt(25)        // 5 → square root
Math.pow(2, 3)       // 8 → 2³
```

### Example

```js
console.log(Math.max(60, 30, 24, 600, 712, 89));
console.log(Math.floor(1.9));
console.log(Math.random());
```

### Important

To generate a random integer from `1` to `10`:

```js
let num = Math.floor(Math.random() * 10) + 1;
```

---

# Date and Time in JavaScript

JavaScript provides the `Date` object to work with dates and time.

## 2. Creating a Date

### Current Date and Time

```js
let date = new Date();

console.log(date);
```

`new Date()` gives the current date and time.

### Specific Date

```js
let date1 = new Date("2023-06-01 7:30:00");

console.log(date1);
```

### Using Date Components

```js
let date = new Date(1998, 5, 20, 7);
```

Format:

```text
new Date(year, month, date, hour)
```

**Important:** JavaScript months start from `0`.

```text
0  → January
1  → February
...
5  → June
...
11 → December
```

So:

```js
new Date(1998, 5, 20, 7);
```

means **20 June 1998, 7:00 AM**.

---

## 3. Getting Date Information

Use `get` methods to read information from a Date object.

```js
let date = new Date(1998, 5, 20, 7);

date.getFullYear();  // 1998
date.getMonth();     // 5
date.getDate();      // 20
```

### Common `get` Methods

| Method          | Returns        |
| --------------- | -------------- |
| `getFullYear()` | Year           |
| `getMonth()`    | Month (`0–11`) |
| `getDate()`     | Day of month   |
| `getHours()`    | Hour           |
| `getMinutes()`  | Minutes        |
| `getSeconds()`  | Seconds        |

---

## 4. Changing Date Information

Use `set` methods to modify a Date object.

```js
let date = new Date(1998, 5, 20);

date.setFullYear(2001);

console.log(date);
```

### Common `set` Methods

```js
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()
```

### Remember

```text
get → read the value
set → change the value
```

---

## Quick Revision

### Math

```text
Math.max()     → largest value
Math.min()     → smallest value
Math.round()   → nearest integer
Math.floor()   → round down
Math.ceil()    → round up
Math.abs()     → absolute value
Math.random()  → random number
Math.sqrt()    → square root
Math.pow()     → power
```

### Date

```text
new Date()        → current date & time
getFullYear()     → get year
getMonth()        → get month (0–11)
getDate()         → get day
setFullYear()     → change year
```

**Most important point:** JavaScript's month indexing starts from `0`, not `1`.
