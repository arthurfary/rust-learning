import "./RustPageStyles.css";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";

import hljs from "highlight.js/lib/core";
import rust from "highlight.js/lib/languages/rust";
import shell from "highlight.js/lib/languages/shell";
import Dropdown from "../../components/dropdown/Dropdown";

const fileTree = `hello_world/
├── src/
│   └── main.rs
├── .gitignore
└── Cargo.toml
`;

const rustHelloWorld = `fn main() {
  println!("Hello, world!");
}
`;

const rustVariablePrint = `fn main() {
  let number = 5;
  println!("The number is ", number); // println has now 2 arguments
}
`;

const RustPage = () => {
  useEffect(() => {
    hljs.registerLanguage("rust", rust);
    hljs.registerLanguage("shell", shell);
    hljs.highlightAll();
  }, []);

  return (
    <>
      <article>
        <h1>What is this thing?</h1>
        <p>
          This <i>"blog"</i> is mainly for me to study both{" "}
          <a
            href="http://doc.rust-lang.org/book/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rust-Lang
          </a>{" "}
          (from now-on refered as Rust) and React/TSX. I'll be documenting my
          journey of learning Rust here. Maybe I can even teach someone
          something new in the process! Everything I write on this blog will
          assume prior basic/intermediate knowledge about programming languages.{" "}
          <strong>Let us begin!</strong>
        </p>

        <section className="doubleTitle">
          <h1>Rust 🦀</h1>
          <h4>
            <i> Like the thing in old cars? </i>
          </h4>
        </section>
        <p>
          Actually no! The name Rust comes from the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Rust_(fungus)"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rust Fungi
          </a>{" "}
          known for its remarkable resilience. The connection here is that Rust
          was made with one goal in mind: <i>Ensure memory safety</i>. Story
          goes that Rust creator Graydon Hoare one day came home to his
          appartment and was met with an out of order elevator,{" "}
          <a
            href="https://www.technologyreview.com/2023/02/14/1067869/rust-worlds-fastest-growing-programming-language/#:~:text=Hoare%20lived%20on,in%20these%20languages."
            target="_blank"
            rel="noopener noreferrer"
          >
            turns out the elevator's software had crashed due to a memory error,
            forcing him to take the stairs 21 stories up.
          </a>{" "}
          He then decided to create Rust, focusing on making it a memory-safe
          programming language.{" "}
          <strong>
            Enough with the blabber though, lets get to the intresting stuff
          </strong>
        </p>

        <section>
          <h1>The intresting stuff</h1>
          <p>
            Alright, so, for starts I should mention Rust is a compiled
            low-level programming language, with high level abstractions. This
            basically means we've got a very fast compiled program that somewhat
            easily written. Rust also achieves its memory safety by essentialy
            preventing that the programmer writes memory unsafe code.
          </p>
        </section>
        <section>
          <h2>Getting started</h2>
          <p>
            After{" "}
            <a
              href="https://doc.rust-lang.org/book/ch01-03-hello-cargo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              installing Rust and its package manager cargo
            </a>
            , you can run this command the create a new Rust project called
            hello_world:
          </p>
          <pre>
            <code className="language-shell">~$ cargo new hello_world</code>
          </pre>
          <p>
            This will create a <code>hello_world/</code> directory with the{" "}
            <code>src/main.rs</code> file that will contain the main function of
            your code, and also a <code>Cargo.toml</code> file that will contain
            program data like its name and dependencies. Your file tree should
            look something like this:
          </p>
          <pre>
            <code>{fileTree}</code>
          </pre>
          <p>
            Perfect! Now open up the <code>src/main.rs</code>, it should contain
            a simple hello world program, let's understand it!
          </p>
        </section>
        <section>
          <h2>Hello World! 👋</h2>
          <p>A hello world program in Rust is structured like this:</p>
          <pre>
            <code className="language-rust">{rustHelloWorld}</code>
          </pre>
          <p>
            Where:
            <ul>
              <li>
                <code>fn main()</code> is defining a new function called main.
              </li>
              <li>
                and <code>println!()</code> is a <strong>macro</strong> that
                writes to the standard output.
              </li>
            </ul>
            Cool! Let's now break it down. Firstly, the program creates a
            function called main, the body of this function (simmilarly to
            something like C++) is where Rust will first execute your code!
            Inside the body of this function there is a <i>macro</i>{" "}
            <code>println!()</code> being executed.{" "}
          </p>
          <Dropdown dropDownText="Now, what is a macro?">
            <p>
              According to the Rust docs:{" "}
              <i>
                <a
                  href="https://doc.rust-lang.org/book/ch19-06-macros.html#:~:text=macros%20are%20a%20way%20of%20writing%20code%20that%20writes%20other%20code"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "macros are a way of writing code that writes other code".{" "}
                </a>
              </i>
              Essentialy, macros allow functions to have a variable number of
              arguments,{" "}
              <i>
                since when compiling they expand to a case matched in the
                macros' definition.
              </i>
              In the hello world example, <code>println!()</code> is a macro
              because it can more arguments, like, if you were printing a
              variable:
            </p>
            <pre>
              <code className="language-rust">{rustVariablePrint}</code>
            </pre>
          </Dropdown>
        </section>
        <section>
          <h3>let Variables = "next";</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            distinctio eos deleniti, quasi nulla molestiae voluptatibus
            assumenda, nesciunt veniam cumque ad error enim fugiat accusantium
            hic est aliquam fuga vero?
          </p>
        </section>
      </article>
    </>
  );
};

export default RustPage;
