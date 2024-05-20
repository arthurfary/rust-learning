fn main() {
    // ownership prevents rust from needing a garbage collector
    {   
        // variables are 'valid' when in scope, as soon as they
        // are out of scope they are auto-dropped

        // variables with fixed size, such as a string literal
        // are pushed directly to the stack
        // variables that can grow such as a String type
        // have their len and a pointer on the stack
        // the pointer points to the heap

        let s = "Hello"; // string literal
        println!("{}", s);

        // s is valid in this scope
    }    
    // s is not valid here anymore
    // println!("{}", s); -> s not found in this scope

    let mut s = String::from("Hello"); // String type from literal "Hello"
    s.push_str(", World!"); // appends ", World!" to the String type

    println!("{}", s);

    // the folowing bit MOVES the value in s 
    // (the pointer to the String type)
    // to the var y. This basically copies
    // the value in stack from the first to the second then
    // frees the value in stack from the first, meaning s is
    // no longer valid from the point of the move onwards
    let y = s;

    // println!("{}", s); -> value moved in line 32;
    println!("{}", y);
}


