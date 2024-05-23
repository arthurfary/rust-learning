#[macro_use]
extern crate nickel;

use nickel::Nickel;
use std::fs;

// readfile takes a string literal and returns a
// Result type with the ok being a String type
fn read_file(file_path: &str) -> Result<String, std::io::Error> {
    fs::read_to_string(file_path)
}

fn parse_file_name(file_string: &str) -> String {
    // remove first '/'
    // by shadowing file_string to a pointer
    // from itself without the firs letter
    let file_string = &file_string[1..];
    match file_string {
        "" => String::from("index.html"),
        _ => String::from(file_string),
    }
}

fn main() {
    let mut server = Nickel::new();

    server.utilize(router! {
        get "**" => |req, _res| {
            println!("{:?}", req.origin.uri);
            let file_path = req.origin.uri.to_string();
            read_file(&parse_file_name(&file_path)).unwrap()
        }
    });

    server.listen("127.0.0.1:6767").unwrap();
}
