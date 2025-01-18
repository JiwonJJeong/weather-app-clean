# weather-app
The Odin Project project to make a weather forecast site. Fetch and display forecast from visual crossing weather API.

## Skills Used
- Manage versions with git and GitHub.
- Fetch and process object data from weather API with async JS.
- Use mix of Flexbox, Grid, and DOM manipulation to render page.
- Organize assets and code with ESM and webpack.

### Important Lessons

- Any function that calls an async function needs to also be async if it needs to wait for the promise to resolve
- Embedded strings with `${variable}` is useful in minimizing code
- You can for loop over [key, values] of Object.entries()
- It is good practice to only send necessary data to functions (don't send entire data)
- An Object can be deconstructed to its values using ...Objects.values(objectName)
- AppendChild() only appends one node
- You can clone nodes
- work with Date objects (use existing functions!)
- Fetch objects already returned as JS object, not JSON
- Event listner requires e.preventDefault() to prevent page reload
- event listener second parameter for callbacks requires a function reference, not just the function

### Attribution

<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">Sun icons created by Good Ware - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/partly-cloudy" title="partly cloudy icons">Partly cloudy icons created by Sudowoodo - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/overcast" title="overcast icons">Overcast icons created by Edi Prast - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/rain" title="rain icons">Rain icons created by bqlqn - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/snow" title="snow icons">Snow icons created by Freepik - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Chanut - Flaticon</a>