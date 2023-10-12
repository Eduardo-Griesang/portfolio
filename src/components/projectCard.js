class projectCard extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles())

    }
    build(){
        const projectsCards = document.createElement("div")
        projectsCards.setAttribute("class","card college-card projects-cards")

        const mainImg = document.createElement("img")
        mainImg.setAttribute("class","card-img-top")
        mainImg.src = this.getAttribute("img")
        mainImg.alt = this.getAttribute("card-title")

        const cardBody = document.createElement("div")
        cardBody.setAttribute("class","card-body")

        const cardTitle = document.createElement("h5")
        cardTitle.setAttribute("class", "card-title")
        cardTitle.textContent = this.getAttribute("title")

        const cardText = document.createElement("p")
        cardText.setAttribute("class", "card-text")
        cardText.textContent = this.getAttribute("text")

        const cardButton = document.createElement("a")
        cardButton.setAttribute("class", "btn")
        cardButton.textContent = "Visit"
        cardButton.href = this.getAttribute("link")

        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardText)
        cardBody.appendChild(cardButton)

        projectsCards.appendChild(mainImg)
        projectsCards.appendChild(cardBody)
        return projectsCards
    }
    styles(){
        const style = document.createElement("style")
        style.textContent = `
        .card{
            width: 18rem;
            z-index: 3;
        }
        .card-img-top{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            width: 100%;
        }
        .projects-cards{
            position:relative;
            width: 20rem;
            height: 23.5rem;
            z-index: 2;
        }
        .college-card{
            background: var(--background-color2);
            font-family: 'Poppins', sans-serif;
            color: var(--white);
            border-radius: 5px;
        }
        .college-card{
            outline: 1px solid var(--background-color2);
        }
        .card-body{
            flex: 1 1 auto;
            padding: 1em;
        }        
        .card-title{
            line-height: 1.8em;
            font-size: 1em;
            margin: 0;
            margin-bottom: 1em;
        }
        .card-text{
            line-height: 1.3em;
            margin: 0;
        }
        .btn{
            background: var(--background-color3);
            border-radius: 5px;
            color: var(--white);
            font-size: 0.8em;
            text-transform: uppercase;
            position: absolute;
            bottom: 5px;
            width: 30%;
            text-align: center;
            text-decoration: none;
            padding: 0.75em 0.375em;
        }
        .btn:hover{
            background: rgb(10, 9, 9);
        }

        @media screen and (max-width: 1200px) {
            .card{
                width: 17rem;
            }
        }
        
        @media screen and (max-width:980px) {
            .card{
                width: 14rem;
            }
        }

        @media screen and (max-width:850px) {
            .card{
                width: 18rem;
            }
        }
        
        `

        return style
    }
}

customElements.define("project-card", projectCard)