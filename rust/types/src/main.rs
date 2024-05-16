fn main() {
    // type is parsed to unsigned 32bit int from string "42"
    // .expect() is handeling in case "42" cannot be parsed
    let number: u32 = "42".parse().expect("Not a number.");
    println!("{}", number);
}
