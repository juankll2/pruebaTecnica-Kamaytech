
# Prueba tecnica kamaytech

## Encabezado

El objetivo de esta prueba técnica es desarrollar una aplicación web utilizando React y TypeScript que interactúe con la API JSONPlaceholder. La aplicación debe permitir a los usuarios ver, crear, actualizar y eliminar publicaciones, así como agregar comentarios a las publicaciones. Además, la aplicación debe tener un diseño atractivo y responsivo las tecnologías que se consideren pertinentes.

    ✅ Utilizar API JSONPlaceholder
    ✅ Permitir a los usuarios ver, crear, actualizar y eliminar publicaciones
    ✅ Permitir a los usuarios agregar comentarios a las publicaciones
    ✅ La Aplicacion debe tener un dise;o atractivo y responsivo (tecnologias pertinentes)

## Requerimientos:

1. Ubicación y Despliegue del proyecto:

   - La aplicación debe estar alojada en un repositorio de github publico
   - Debe ser desplegada en un servidor gratuito (Netlify).

2. Integración con API:
   - Utilizar la API JSONPlaceholder para realizar operaciones CRUD en publicaciones y comentarios.
   - Implementar funcionalidad para crear, leer, actualizar y eliminar publicaciones y comentarios.
   
3. Interfaz de Usuario:
   - Mostrar una lista de publicaciones obtenidas de la API JSONPlaceholder.
   - Permitir al usuario hacer clic en una publicación para mostrar los comentarios de la publicación seleccionada.
   - Dar la posibilidad al usuario de crear nuevas publicaciones.

4. Estilos:

   - Implementar un diseño responsivo que se vea bien en dispositivos de diferentes tamaños.

5. Componentes de UI:

   - Emplear componentes como botones, formularios, modales, etc., para mejorar la experiencia del usuario.

6. Funcionalidad Adicional (Opcional):
   - Agregar validación de formularios para la creación y edición de publicaciones.
   - Incluir animaciones o transiciones suaves para mejorar la experiencia del usuario.
   - Utilizar componentes de la librería Chakra UI para construir la interfaz de usuario.
   - Utilizar Tailwind CSS para estilizar la aplicación de manera atractiva y moderna.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
