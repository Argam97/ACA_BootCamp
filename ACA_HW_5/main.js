// Exercise 1. Create an infinite loop

// Create an infinite loop that will not stop the execution of other
// JS instructions.

// let i = 1
// let id = setInterval(() => {
//     console.log(i++)
//     // clearInterval(id)
// },1000)

// Exercise 2. Let's imagine a scenario

// There is an application that shows a list of  employees
// There are different settings stored at the backend,
// related to how to show the list
// At first, the application should get the settings from the backend,
// to be able to render the list

// Note:  Create JSON files inside the src folder and fetch all
// related information using fetch

// Here are the settings available: Settings JSON

// Show_only_active - If true, only employees with status = true
// should be displayed

// Max_items_to_show - how many employees should be visible
// (No more than the specified value)

// Show_description - If true, the description column should be visible, else
// Inside the description cell should be the following:
// `N/A` which means not available

// Then the application should get the list of employees and render the table
// on the web page.
// It should be one employee per line considering the settings described above.

// Here is an example of  Employees JSON.



function getSettings() {
    return fetch("./data.json")
        .then((resolve) => resolve.json())
        .then((data) => data);

}

function getEmployees() {
    return fetch("./employee.json")
        .then((resolve) => resolve.json())
        .then((data) => data);
}

async function render() {

    let users = await getEmployees();
    let settings = await getSettings();
    console.log(users,'users')
    console.log(settings,'settings')

}

render()



