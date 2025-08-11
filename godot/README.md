# RaidMaster Godot Project

This folder contains a minimal Godot project for the **RaidMaster** prototype. It is
set up so that you can open it directly in the Godot editor and start building
the game. The project currently consists of a simple `Main.tscn` scene with a
`Node2D` and a `Camera2D`. You can build upon this scene to implement the
gameplay loop, boss logic, and UI.

## How to use

1. **Open the project in Godot**: Launch the Godot editor and choose to
   **Import** an existing project. Navigate to this `godot_project` folder and
   select `project.godot`. This will add the project to your list.

2. **Run the project**: Press <kbd>F5</kbd> to run the project. You should see an
   empty window with nothing in it yet. Use the `Main.tscn` scene as your
   starting point.

3. **Add assets and scenes**: Create additional scenes in the `scenes` directory
   or organise your assets however you like. Commit your changes using Git to
   track progress.

## Version control

The `.gitignore` in this folder ignores files and folders that Godot generates
automatically and that should not be committed (for example, `.import/`). If
you create new top‑level folders or resources, remember to add them to the
repository.

Refer to the Godot documentation for more details on best practices when
working with version control【412633894475620†L5533-L5549】.
