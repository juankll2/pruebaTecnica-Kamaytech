import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ButtonHome from "./components/ButtonHome.js";
import Comments from "./components/Comments.js";
import CreateComment from "./components/CreateComment.js";
import CreatePost from "./components/CreatePost.js";
import EditPost from "./components/EditPost.js";
import Posts from "./components/Posts.js";

function App() {
	return (
		<div>
			<BrowserRouter>
				<ButtonHome />
				<Routes>
					<Route path="/" element={<Posts />} />
					<Route path="/agregar" element={<CreatePost />} />
					<Route path="/editar/:id" element={<EditPost />} />
					<Route path="/comentarios/:id" element={<Comments />} />
					<Route path="/agregarComentario/:id" element={<CreateComment />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
