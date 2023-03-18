/**
 * Comments are essential to organizing code for ourselves and for others
 * ! We can use them to highlight important things,
 * todo Remind us of things to do,
 * ? Raise questions, 
 * * Or emphasise certain parts like a title
 * Functions usually have one comment above them with the following structure:
 * 
 * * Title
 * Description
 * a long description should take two lines, alternatively can use ! ? todo here
 * @param parameterName if the function has parameters, describe them
 * @param anotherParameterName ... one line for each param
 * @returns if the function returns anything, describe it  
 */

/**
 * * Write Text to Page
 * Example of how we can dynamically write elements to the DOM using JavaScript (e.g., text)
 * @param text text to write on page
 */

const writeToPage = (text) => {

    // Short explanatory comments are then used for sub-functions within functions e.g.:
    // Create element to contain our text 
    const ele = document
        .createElement('H1');

    // Set ID
    ele.id = 'exampleEle';

    // Set text contents
    ele.innerText = text;

    // Add element to page
    document.body.appendChild(ele);
}


/**
 * * Edit Text on Page
 * Example of how we can dynamically edit content already on the page
 * @param text text to update on page
 */


const editOnPage = () => {

    // Get element to edit
    const ele = document.querySelector('#exampleEle');

    // Set text contents
    ele.innerText = "Now THAT'S web development!";

}

const addButtonToPage = () => {

    // Make button
    const btn = document.createElement('Button');
    btn.innerText = 'Click here!';

    // Assign on-click function
    btn.onclick = editOnPage;

    // Add some styling and a funky animation for fun
    btn.style.padding = "10px";
    btn.style.borderRadius = "10px"
    btn.style.background = "gold";
    btn.className = "animate__animated animate__pulse animate__infinite";

    // Add to page
    document.body.appendChild(btn);

}


// Run these functions on page load
writeToPage('Hello, World!');
addButtonToPage();