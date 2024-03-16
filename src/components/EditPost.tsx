import {
	Alert,
	AlertIcon,
	Button,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function EditPost() {
	const URL_BASE = "https://jsonplaceholder.typicode.com/posts/";
	const { id } = useParams();
	const [post, setPost] = useState({
		id: `${id}`,
		title: "",
		body: "",
		userId: 1,
	});
	// Controlador de estado del alert
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		const cargarPost = async () => {
			try {
				const response = await fetch(`${URL_BASE}${id}`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setPost(data);
			} catch (error) {
				console.error("Error fetching post:", error);
			}
		};

		cargarPost();
	}, [id]);

	const handleInputClick = () => {
		setPost({ ...post, title: "" });
	};

	const handleTextareaClick = () => {
		setPost({ ...post, body: "" });
	};

	const handleModifyClick = () => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
			method: "PUT",
			body: JSON.stringify(post),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((response) => response.json())
			.then((json) => {
				console.log("Publicación modificada:", json);
				setSuccess(true);
				// alert("Datos modificados con éxito");
				setTimeout(() => {
					setSuccess(false);
					window.location.replace("/"); // Ocultar el Alert después de 3 segundos
				}, 1500);
			})

			.catch((error) =>
				console.error("Error al modificar la publicación:", error),
			);
	};

	return (
		<div className="form-container">
			<div className="title-form">
				<Text mt={"50px"} fontSize="xl" textAlign={"center"}>
					Modificar publicación
				</Text>
			</div>
			<form onSubmit={(e) => e.preventDefault()}>
				<Text mb="8px">Ingrese el título:</Text>
				<Input
					variant="filled"
					placeholder="Titulo de la publicación"
					type="text"
					color="black"
					value={post.title}
					onChange={(e) => setPost({ ...post, title: e.target.value })}
					onClick={handleInputClick}
					mb={"20px"}
				/>

				<Text mb="8px">Publicación</Text>
				<Textarea
					placeholder="Contenido del comentario"
					size="sm"
					color="black"
					value={post.body}
					onChange={(e) => setPost({ ...post, body: e.target.value })}
					onClick={handleTextareaClick}
					rows={8}
				/>
				<Button
					mt={"20px"}
					colorScheme="teal"
					variant="solid"
					onClick={handleModifyClick}
				>
					Modificar
				</Button>
			</form>
			{success && (
				<Alert status="success" variant="subtle" mt={4}>
					<AlertIcon />
					Datos modificados con éxito
				</Alert>
			)}
		</div>
	);
}
