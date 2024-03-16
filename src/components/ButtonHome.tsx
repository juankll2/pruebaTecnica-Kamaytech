import { SunIcon } from "@chakra-ui/icons";
import { Button, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ButtonHome() {
	return (
		<div>
			<Tooltip label="Ir al Inicio" fontSize="md">
				<Button
					as={Link}
					to="/"
					variant="ghost"
					colorScheme="teal"
					position="fixed"
					top="1rem"
					left="1rem"
					aria-label="Inicio"
				>
					<SunIcon boxSize={6} />
				</Button>
			</Tooltip>
		</div>
	);
}
