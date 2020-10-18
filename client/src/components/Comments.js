import React, { useRef, useEffect,useState } from "react";
import AddComment from "./AddComment";


const dateHelper = (day) => {
	let date = new Date(Date.now() - day * 24 * 60 * 60 * 1000);
	return date;
};

let InitialComments = [
	{
		title: "Interesting Article",
		email: "Anoymous@gmail.com",
		content: "Thank You For that Interesting Article Would Like to see more",
		writter: "Anonymous Man",
		date: `${dateHelper(4)}`,
	},
	{
		title: "Add More Content",
		email: "CyberMan@gmail.com",
		content: "TI Just Love Your Site Please Add More Content!!",
		writter: "Cyber Man",
		date: `${dateHelper(8)}`,
	},
	{
		title: "This Is Amazing Conent Wow",
		email: "eli56534@gmail.com",
		content: "This Look like on of the best Cyber Blogs!!",
		writter: "eli eliyahoo",
		date: `${dateHelper(12)}`,
	},
];

function Comments(props) {
    const [comments, setComments] = useState(InitialComments);
    


    const handleSubmit = (newComment) => {
        console.log("comments", comments)
        let newComments = comments
        newComments.push(newComment)
        console.log("New Comments", newComments)
        setComments(newComments)
    }
	return (
		<div style={styles.comments}>
			<h1 style={styles.commentsHeader}>Comments</h1>
            <AddComment handleSubmit={handleSubmit}/>
			{comments.map((comment) => (
				<div style={styles.comment} className="comment" key={comment.name}>
					<h3> Title: {comment.title}</h3>
					<h4> Name: {comment.writter}</h4>
					<h4> Email: {comment.email}</h4>
					<p>{comment.content}</p>
					<strong>
						<p> Comment Date: {comment.date}</p>
					</strong>
				</div>
			))}
		</div>
    );
    
}

const styles = {
	comment: {
		borderStyle: "solid",
		borderColor: "darkblue",
		margin: 10,
		padding: 10,
	},
	commentsHeader: {
		color: "red",
	},
	comments: {
		backgroundColor: "lightblue",
	},
	newComment: {},
};
// 	comment: {
//         border: ''
// 		color: "darkblue",
// 		fontWeight: "bold",
// 		textAlign: "center",
// 		backgroundColor: "lightgrey",
// 		padding: 0,
// 		margin: 0,
// 	},
// 	text: {
// 		color: "black",
// 		fontWeight: "normal",
// 	},
// 	mainArticle: {
// 		backgroundColor: "darkgrey",
// 	},
// 	articleHeader: {
// 		color: "darkred",
// 	},
// 	subArticleHeader: {
// 		color: "darkgreen",
// 		fontWeight: "normal",
// 	},
// };
export default Comments;
