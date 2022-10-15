import library from "/resources/library.json" assert {type: "json"};


// WORK IN PROGRESS


const genreList = [];
for (let i = 0; i < library.length; i++) {
    if (!genreList.includes(library[i].genre)) {
        genreList.push(library[i].genre);
    }
}

let unreadGenres = []
let readGenres = []

for (let i = 0; i < library.length; i++) {
    if (library[i].timesRead > 0) {
        if (library[i].genre in readGenres) {

        } else {

        }
    } else {

    }
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
