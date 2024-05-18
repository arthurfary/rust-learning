use std::io;

fn main() {
    println!("Type a number:");

    let mut number = String::new();

    io::stdin().read_line(&mut number).expect("Error reading number!");

    // shadow number to ->  remove \n -> convert -> if err
    let number: i32 = number.trim().parse().expect("Cant convert to int");

    // conditions must evaluate to bool true
    // if number {...} will throw error
    if number > 10 {
        println!("Number > 10");
    }
    else {
        print!("Number =< 10");
    }
}
