import { ChatIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Icon,
	IconButton,
	SimpleGrid,
	Text,
	Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Posts() {
	const [posts, setPosts] = useState<PostResource[]>([]);

	const ENDPOINT_PUBLICATIONS = "https://jsonplaceholder.typicode.com/posts";
	interface PostResource {
		userId: number;
		id: number;
		title: string;
		body: string;
	}

	// Obtener las publicaciones
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch(ENDPOINT_PUBLICATIONS);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setPosts(data);
			} catch (error) {
				console.error("Error fetching publications:", error);
			}
		};

		fetchPosts();
	}, []);

	// Eliminar publicaciones
	const deletePost = async (postId: number) => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${postId}`,
				{
					method: "DELETE",
				},
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const updatedPosts = posts.filter((post) => post.id !== postId);
			setPosts(updatedPosts);
		} catch (error) {
			console.error("Error deleting post:", error);
		}
	};

	return (
		<div>
			<div className="general-title">
				<Text fontSize="50px" color="tomato" mt="40px">
					Prueba técnica kamaytech
				</Text>
				<Link to={"/agregar"}>
					<Button colorScheme="blue" variant="solid">
						Agregar Publicación
					</Button>
				</Link>
			</div>
			<Text fontSize="3xl" textAlign={"center"}>
				Publicaciones
			</Text>
			<hr />

			{posts && (
				<SimpleGrid
					spacing={4}
					templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
				>
					{posts.map((post) => (
						<Card key={post.id}>
							<CardHeader>
								<Heading size="md">{post.title}</Heading>
							</CardHeader>
							<CardBody>
								<Text>{post.body}</Text>
							</CardBody>
							<CardFooter display={"flex"} justifyContent={"space-between"}>
								<Link to={`/editar/${post.id}`}>
									<Tooltip label="Editar Publicación" fontSize="md">
										<Icon
											as={EditIcon}
											boxSize={6} // Tamaño del icono
											color="currentColor" // Color del icono
											mr={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
											/>
										</Icon>
									</Tooltip>
								</Link>
								<Tooltip label="Eliminar Publicación" fontSize="md">
									<Icon
										as={DeleteIcon} // Icono de eliminación
										boxSize={6}
										color="red.500" // Color rojo
										cursor="pointer" // Cambia el cursor al pasar sobre el icono
										onClick={() => deletePost(post.id)} // Maneja la eliminación al hacer clic
									/>
								</Tooltip>
								<Link to={`/comentarios/${post.id}`}>
									<Tooltip label="Ver Comentarios" fontSize="md">
										<IconButton
											aria-label="Ver comentarios" // Etiqueta accesible para pantalla
											icon={<ChatIcon />} // Icono de enlace
											colorScheme="teal" // Esquema de color
											variant="solid" // Estilo de botón sólido
											// as={Link} // No necesitas esto aquí
											// to={`/comentarios/${post.id}`}
										/>
									</Tooltip>
								</Link>
							</CardFooter>
						</Card>
					))}
				</SimpleGrid>
			)}
		</div>
	);
}
