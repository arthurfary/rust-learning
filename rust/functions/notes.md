# Functions

Rust funcitons are created in the standard way
Which is with () and {}

```rust
fn my_function(){
  println!("This is my function");
}
```

This function can be called by its name like:

```rust
fn main(){
  my_function();
}
```

---

Arguments in a function must have their type
defined within the () as such. Return type
should also be stated:

> `&str` is a string slice and its immutable, its used
> since the name arg is not changed..
> `String` is used as a return type sice it is a growable,
> mutable, owned, heap-allocated data structure.
> It is used when you need to modify or own the string data.
> For example, if you need to append to a string or change its contents, you would use

```rust
fn greet(name: &str) -> String {
  format!("Hello, {}!", name)
}
```
