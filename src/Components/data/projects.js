const ProjectsData = [
    {
        title:"E-Commerce Backend",
        about:"I implemented the back-end functionalities using express router, mongoDb and jwt based token authentication. The functionalities include signup, login logout, insert, view edit the products, their comments, categories etc. It is also featured with admin privileges. User can also reset their passwords, they will get a reset password link on their email which will direct them to do so.",
        tags:["nodejs", "mongodb", "express", "JWT"],
        github:"https://github.com/aparsh/ecommerce-website-backend-template",
        demo:"",
        image:require("../../images/shopping_cart.png").default
    },
    {
        title:"Resturant-Website",
        about:"It is a React based single page web application for a restaurant. The website uses the redux principle like thunk to enhance the user experience. You can see the menu, details of a dish, featured items, can give feedback and so on. It is supported with json-server to display the data and the images. It is built using the principles of MVC. It is also equipped with some animations using the react-transition library and animation library.",
        tags:["reactjs", "json-server", "bootstrap"],
        github:"https://github.com/aparsh/Restraunt-React",
        demo:"https://aparsh.github.io/Restraunt-React",
        image:require("../../images/donut.png").default
    },
    {
        title:"Quiz-System",
        about:"It is a python based quiz system. It uses tkinter for ui purposes. The data related to quizzes is stored in csv files and sqlite DB. It is also equipped with login function. It helped me to understand the multithreading consept.",
        tags:["python", "tkinter", "threading"],
        github:"https://github.com/aparsh/Tkinter-Quiz-System",
        demo:"https://www.youtube.com/watch?v=tuq4OBdbygA",
        image:require("../../images/quiz.jpg").default
    }
]

export default ProjectsData