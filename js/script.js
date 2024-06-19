


{
    const tasks = [
        {
            content: "Zrobić obiad",
            done: false,
        },
        {
            content: "Zrobić zakupy",
            done: true,
        },
        {
            content: "Spakować walizkę na wyjazd",
            done: false,
        },
        {
            content: "Zatankować auto",
            done: true,
        }
    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
    ${task.content}
    </li>
    `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event)=> {
            event.preventDefault();
            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if(newTaskContent === "") {
                return;
            }

            tasks.push({
                content: newTaskContent,
            });
            render();
        });
    };

    init();
}