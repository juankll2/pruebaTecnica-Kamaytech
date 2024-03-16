import {
	Alert,
	AlertIcon,
	Button,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
export default function CreatePost() {
	const USER_ID = 1;

	interface PostData {
		title: string;
		body: string;
		userId: number;
	}

	const [newPost, setNewPost] = useState<PostData>({
		title: "",
		body: "",
		userId: USER_ID,
	});
	// Controlador de estado del alert
	const [success, setSuccess] = useState(false);

	const postData = async (postData: PostData) => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts",
				{
					method: "POST",
					body: JSON.stringify(postData),
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				},
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			console.log(data);
			setSuccess(true);
			setTimeout(() => {
				setSuccess(false);
				window.location.replace("/"); // Ocultar el Alert después de 1.5 segundos
			}, 1500);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const addPost = async () => {
		await postData(newPost);
		setNewPost({ title: "", body: "", userId: USER_ID });
	};

	return (
		<div className="form-container">
			<div className="title-form">
				<Text mt={"50px"} fontSize="xl" textAlign={"center"}>
					Crear publicación
				</Text>
			</div>
			<form onSubmit={(e) => e.preventDefault()}>
				<Text mb="8px">Ingrese el título:</Text>
				<Input
					variant="filled"
					placeholder="Titulo de la publicación"
					type="text"
					color="black"
					value={newPost.title}
					onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
				/>

				<Text mb="8px" mt="8px">
					Publicación
				</Text>
				<Textarea
					value={newPost.body}
					onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
					placeholder="Contenido del comentario"
					size="sm"
					color="black"
				/>
				<Button mt="20px" colorScheme="teal" variant="solid" onClick={addPost}>
					Enviar Publicación
				</Button>
			</form>
			{success && (
				<Alert status="success" variant="subtle" mt={4}>
					<AlertIcon />
					Publicación creada con exito
				</Alert>
			)}
		</div>
	);
}
