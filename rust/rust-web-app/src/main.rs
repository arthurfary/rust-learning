#[macro_use] extern crate nickel;

use nickel::Nickel;
use std::fs;

// readfile takes a string literal and returns a 
// Result type with the ok being a String type
fn read_file(file_path: &str) -> String {
    match fs::read_to_string(file_path){
        Ok(content) => content,
        Err(_) => "Error reading file.".to_string(),
    }
}

fn main() {
    let mut server = Nickel::new();

    server.utilize(router! {
        get "**" => |_req, _res| {
            read_file("index.html")
        }
    });

    server.listen("127.0.0.1:6767").expect("Error starting the server.");
}