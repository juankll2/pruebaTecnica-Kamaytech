import { Alert, AlertIcon, Button, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function CreateComment() {
	const { id } = useParams();
	const [newComment, setNewComment] = useState({
		postId: 1,
		id: 3,
		name: "Leanne Graham",
		body: "",
	});
	// Controlador de estado del alert
	const [success, setSuccess] = useState(false);
	interface CommentData {
		postId: number;
		name: string;
		body: string;
	}

	const createComment = async (commentData: CommentData) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
				{
					method: "POST",
					body: JSON.stringify(commentData),
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
				window.location.replace("/"); // Ocultar el Alert después de 3 segundos
			}, 1500);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const handlePublishComment = () => {
		createComment(newComment);
		setNewComment({ postId: 1, id: 3, name: "", body: "" }); // Limpia los campos después de publicar el comentario
	};

	return (
		<div className="form-container">
			<div className="title-form">
				<Text mt={"50px"} fontSize="xl" textAlign={"center"}>
					Crear Comentario
				</Text>
			</div>
			<form className="form" onSubmit={(e) => e.preventDefault()}>
				<Text mb="8px">Comentario</Text>
				<Textarea
					placeholder="Escriba el comentario"
					size="sm"
					color="black"
					value={newComment.body}
					onChange={(e) =>
						setNewComment({ ...newComment, body: e.target.value })
					}
				/>
				<Button
					colorScheme="teal"
					variant="solid"
					onClick={handlePublishComment}
					mt="20px"
				>
					Publicar comentario
				</Button>
			</form>
			{success && (
				<Alert status="success" variant="subtle" mt={4}>
					<AlertIcon />
					Comentario creado con exito
				</Alert>
			)}
		</div>
	);
}
