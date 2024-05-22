#[macro_use] extern crate nickel;

use nickel::Nickel;
use std::fs;
use std::io;

fn read_file(file_path: &str) -> io::Result<String> {
    fs::read_to_string(file_path); 
}

fn main() {
    let mut server = Nickel::new();

    server.utilize(router! {
        get "**" => |_req, _res| {
             match read_file("index.html") {
                Ok(content) => content,
                Err(_) => "Error reading file.".to_string(),
            }
        }
    });

    server.listen("127.0.0.1:6767");
}