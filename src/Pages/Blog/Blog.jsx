import React from "react";
import Pdf from "react-to-pdf";
import Answers from "./Answers";
const ref = React.createRef();
import { FaDownload } from 'react-icons/fa';

const Blog = () => {
    const options = {
        orientation: "landscape",
        unit: "in",
    };
    return (
        <div>
            <div className="flex justify-end">
                <Pdf
                    targetRef={ref}
                    filename="question_answer.pdf"
                    options={options}
                    scale={0.7}
                >
                    {({ toPdf }) => (
                        <button
                            className="btn btn-error text-white"
                            onClick={toPdf}
                        >
                           <FaDownload className="me-2"></FaDownload> Download Pdf
                        </button>
                    )}
                </Pdf>
            </div>
            <div className=" ms-4 p-4" ref={ref}>
                <Answers></Answers>
            </div>
        </div>
    );
};

export default Blog;
