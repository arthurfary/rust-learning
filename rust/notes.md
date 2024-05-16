# Variables

Variables in rust are immutable by default, meaning
they cannot be changed;
```rust 
let number = 5;
```

To make them mutable you must do that with `mut`
```rust 
let mut number = 3;
```

If you want to declare a const use the keyword `const`
```rust
const OTHER_NUMBER: u32 = 10;
```
Notice the type declared after the variables name: `u32`

`32` stands for the number of bits in the intager
`u` stands for 'unsigned' which means it doesn't have a 
positive/negative signaling bit.
A signed int would be `i`

You can also shadow a variable, meaning creating 
a variable with the same name as an existing one, this
overshadows the former
```rust
let x = 5;
let x = x * 2; // x is here = 10
{
  let x = x * 2; // x is here = 20
  println!(x);
}
println!(x); // x is here = 10
```
Shadowing is basically creating a new variable, so type
can also be changed.
