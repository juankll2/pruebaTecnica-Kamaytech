import { Button, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Comments() {
	const [comments, setComments] = useState<Comment[]>([]);
	const { id } = useParams();
	const imgSrc =
		"https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4";
	interface Comment {
		postId: number;
		id: number;
		name: string;
		email: string;
		body: string;
	}

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data: Comment[] = await response.json();
				setComments(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="comments-App">
			<Link to={`/agregarComentario/${id}`}>
				<Button
					colorScheme="blue"
					variant="solid"
					mt={"50px"}
					textAlign={"center"}
				>
					Agregar Comentario
				</Button>
			</Link>
			{comments.map((comment) => (
				<article key={comment.id} className="comentCard">
					<header className="comentCard-header">
						<img
							className="comentCard-avatar"
							alt="Imagen o avatar de perfil"
							src={imgSrc} // Reemplaza 'imgSrc' con la ruta de tu imagen/avatar
						/>
						<div>
							<Text fontSize="sm">
								<strong>{comment.name}</strong>{" "}
							</Text>
							<div>
								<span className="comment-date">
									Publicado: {new Date().toLocaleDateString()}
								</span>
							</div>
							<div>
								<Text fontSize="xs">
									<span className="comentCard-infoUserName">
										<strong>Email: </strong>
										{comment.email}
									</span>
								</Text>
							</div>
							<hr />
							<div className="containerComent">
								<p>{comment.body}</p>
								h
							</div>
						</div>
					</header>
				</article>
			))}
		</div>
	);
}
