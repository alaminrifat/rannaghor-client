import React from "react";

const Answers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        1. Tell us the differences between uncontrolled and
                        controlled components.
                    </h3>
                </a>

                <p className="mt-1  ">
                    A controlled component is a component whose state is managed
                    by a parent component. In other words, the parent component
                    has full control over the prop values ​​and the state of the
                    child components. A child component can only update its
                    state when the parent component passes new props. Control
                    components are typically used for form elements such as
                    input fields and checkboxes.
                    <br /> An uncontrolled component, on the other hand, is a
                    component that manages its own state internally without any
                    input from its parent component. In other words, the parent
                    component has no control over the values ​​of props and the
                    state of child components. A child component can update its
                    state at any time without the parent component being aware
                    of the change. Non-controlling components are typically used
                    for form elements such as input fields and checkboxes. 
                </p>
            </article>
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        2. How to validate React props using PropTypes?
                    </h3>
                </a>

                <p className="mt-1  ">
                    PropTypes is a built-in typechecking feature in React that
                    allows us to validate the props passed to a component. To
                    use PropTypes, we import it from the 'prop-types' package
                    and define the expected type for each prop.
                </p>
            </article>
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        3. Tell us the difference between nodejs and express js
                        ?
                    </h3>
                </a>

                <p className="mt-1  ">
                    Node.js and Express.js are both JavaScript technologies that
                    are often used for server-side web development.Node.js is a
                    runtime environment that allows us to run JavaScript code
                    outside of the browser. It provides the core features and
                    APIs of the JavaScript language, such as the ability to
                    create and manipulate objects, control flow, and perform I/O
                    operations. <br /> Express.js, on the other hand, is a web
                    framework that is built on top of Node.js. It provides
                    additional features and abstractions that make it easier to
                    build web applications, such as middleware for handling HTTP
                    requests and responses, routing, and templating.
                </p>
            </article>
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
                

                <a href="#">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                        4. What is a custom hook, and why will you create a
                        custom hook?
                    </h3>
                </a>

                <p className="mt-1  ">
                    A custom hook in React is a JavaScript function that uses
                    one or more built-in hooks and allows us to reuse stateful
                    logic across multiple components. Custom hooks are a way to
                    abstract away repetitive or complex logic into reusable
                    functions, making our code more modular and easier to
                    maintain. <br /> Creating a custom hook is useful when we have a
                    piece of stateful logic that we need to reuse across
                    multiple components. For example, let's say we have a
                    component that needs to fetch data from an API and display
                    it. We can create a custom hook to handle the API call and
                    data fetching logic, so we can reuse it across multiple
                    components that need to fetch data from the same API.
                </p>
            </article>
        </div>
    );
};

export default Answers;
