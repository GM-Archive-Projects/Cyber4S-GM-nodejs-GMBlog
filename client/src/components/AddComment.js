import React, { useRef, useState } from "react";
function AddComment(props) {
    // const [newComment, setnewComment] = useState({});
    const formTitle = useRef('')
    const formEmail = useRef('')
    const formWritter = useRef('')
    const formContent = useRef('')
    const formData = useRef('')
    const formSubmit = useRef('')

    
    
	const handleSubmit = () => {
        let newComment = {
            title: formTitle.current.value,
            email: formEmail.current.value,
            writter: formWritter.current.value,
            content: formContent.current.value,
            date: formData.current.value
        }

		props.handleSubmit(newComment)
	};
    const handleKeyUp = (e, key) => {
        if(e.keyCode === 13) {

            switch (key) {
                case 'title':
                    formEmail.current.focus()
                    break;
                case 'email':
                    formWritter.current.focus()
                    break;
            
                case 'writter':
                    formContent.current.focus()
                    break;
            
                case 'content':
                    formSubmit.current.focus()
                    break;
    
                case 'formSubmit':
                    handleSubmit()
                    break;
    
                default:
                    formTitle.current.focus()
                    break;
            }
        }
        
    }
	return (
		<div>
			<label>
				Title:
				<input type="text" name="title" ref={formTitle} onKeyUp={(e) => handleKeyUp(e, 'title')}/>
			</label>
			<label>
				Email:
				<input type="text" name="email" ref={formEmail} onKeyUp={(e) => handleKeyUp(e, 'email')}/>
			</label>
			<label>
				Writter:
				<input type="text" name="writter" ref={formWritter} onKeyUp={(e) => handleKeyUp(e, 'writter')}/>
			</label>
			<label>
				Content:
				<input type="text" name="content" ref={formContent} onKeyUp={(e) => handleKeyUp(e, 'content')}/>
			</label>
			<label>
				Date:
				<input type="text" value={new Date(Date.now())} ref={formData} onKeyUp={(e) => handleKeyUp(e, 'submit')} />
			</label>

			<input type="submit" value="Submit" onClick={handleSubmit} ref={formSubmit}/>
		</div>
	);
}

export default AddComment;
