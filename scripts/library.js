import library from "/resources/library.json" assert {type: "json"};


// WORK IN PROGRESS


const genreList = [];
for (let i = 0; i < library.length; i++) {
    if (!genreList.includes(library[i].genre)) {
        genreList.push(library[i].genre);
    }
}

let unreadGenres = document.createElement("ul");
let readGenres = document.createElement("ul");

unreadGenres.classList.add("genres");
readGenres.classList.add("genres");

let genre;
let genreTitle;
let bookList;
for (let i = 0; i < genreList.length; i++) {
    genre = document.createElement("li");
    genreTitle = document.createElement("p");
    genreTitle.innerHTML = genreList[i];
    genre.appendChild(genreTitle);
    bookList = document.createElement("ul");
    bookList.classList.add("books");


}


/**
 * 						<li>
                            <p>Fantasy</p>
                            <ul class="books">
                                <li>
                                    <img class="cover" src="images/covers/lion.png"
                                        alt="The Lion, the Witch, and the Wardrobe cover">
                                    <p class="title">The Lion, the Witch, and the Wardrobe (series)</p>
                                    <p class="author">C.S. Lewis</p>
                                </li>
                            </ul>
                        </li>
 */
