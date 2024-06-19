


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
            <li>
    ${task.content}
    </li>
    `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const init = () => {
        render();
    };

    init();
}