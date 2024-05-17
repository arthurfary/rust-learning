fn main() {
    sum(2, 5);

    println!("To return something, add a statement without ;");
    println!("2 - 5 = {}", minus(2, 5));
    
    println!("{}", greet("Arthur"))
}

fn sum(a: i32, b: i32){
    println!("{a} + {b} = {}", a+b);
}

// if something is returned, return type must be defined
fn minus(a: i32, b: i32) -> i32{
    a - b
}

fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

