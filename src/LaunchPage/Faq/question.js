import React, {useState, useRef, useEffect} from 'react'
import "./question.css";
import { FiPlus } from "react-icons/fi";
import { RiSubtractFill } from "react-icons/ri";

const Question = (props) => {

  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <>
        <div className='w-full'>
			<button
				className={`question-section ${active}`}
				onClick={toggleAccordion}
			>
			<div>
				<div className="question-align">
					<h4 className="question-style">
						{props.title}
					</h4>
					{
						active 
						? <RiSubtractFill className='question-icon'/>
						: <FiPlus  className='question-icon'/>
					}
					{/* <FiPlus className={active ? `question-icon rotate transform duration-150` : `question-icon transition duration-150`}/> */}
				</div>
				<div
					ref={contentRef}
					className={active ? `answer answer-divider` : `answer`}>
					<p>{props.answer}</p>
				</div>
			</div>
            </button>
        </div>  
    </>
  )
}

export default Question
