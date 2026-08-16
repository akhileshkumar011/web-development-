# Object Cloning & Garbage Collector

## 1. Object Cloning

**Object cloning** means creating a new object with the same properties as another object.

### A. `Object.assign()`

Copies properties from one object into another object.

```javascript
let src = { age: 20, name: "Akhilesh" };

let dest = Object.assign({}, src);
```

### B. Spread Operator (`...`)

A simple and commonly used way to clone an object.

```javascript
let src = { age: 20, name: "Akhilesh" };

let dest = { ...src };
```

### C. Iteration

Copy each property manually using a loop.

```javascript
let src = { age: 20, name: "Akhilesh" };
let dest = {};

for (let key in src) {
    dest[key] = src[key];
}
```

> `Object.assign()`, spread operator, and iteration create a **shallow copy**.

---

## 2. Shallow Copy

In a shallow copy, the outer object is copied, but nested objects are still shared.

```javascript
let src = {
    name: "Akhilesh",
    address: {
        city: "Delhi"
    }
};

let dest = { ...src };
```

Here, `src.address` and `dest.address` refer to the **same nested object**.

---

## 3. Garbage Collector

The **Garbage Collector (GC)** automatically removes objects from memory that are **no longer reachable or being used**.

```javascript
let user = {
    name: "Akhilesh"
};

user = null;
```

The object is now unreachable, so the Garbage Collector can remove it from memory.

> **GC automatically manages memory by removing unreachable objects.**

### Quick Revision

| Topic             | Meaning                                               |
| ----------------- | ----------------------------------------------------- |
| Object Cloning    | Creating a copy of an object                          |
| `Object.assign()` | Clones properties into a new object                   |
| Spread `...`      | Simple way to clone an object                         |
| Iteration         | Manually copies properties                            |
| Shallow Copy      | Copies the outer object, nested objects remain shared |
| Garbage Collector | Removes unreachable objects from memory               |
