const booklist = [
    {
        title: "Dune",
        author: "Frank Herbert",
        yearPublished: 1965,
        genre: "scifi",
        wordCount: 188000,
        timesRead: 1
    },
    {
        title: "Dune Messiah",
        author: "Frank Herbert",
        yearPublished: 1969,
        genre: "scifi",
        wordCount: 60000,
        timesRead: 0
    },
    {
        title: "Children of Dune",
        author: "Frank Herbert",
        yearPublished: 1976,
        genre: "scifi",
        wordCount: 148000,
        timesRead: 0
    },
    {
        title: "God Emperor of Dune",
        author: "Frank Herbert",
        yearPublished: 1981,
        genre: "scifi",
        wordCount: 138000,
        timesRead: 0
    },
    {
        title: "Heretics of Dune",
        author: "Frank Herbert",
        yearPublished: 1984,
        genre: "scifi",
        wordCount: 164000,
        timesRead: 0
    },
    {
        title: "Chapterhouse: Dune",
        author: "Frank Herbert",
        yearPublished: 1985,
        genre: "scifi",
        wordCount: 141000,
        timesRead: 0
    },
    {
        title: "Song of Achilles",
        author: "Madeline Miller",
        yearPublished: 2011,
        genre: "lgbt",
        wordCount: 105000,
        timesRead: 1
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        yearPublished: 1993,
        genre: "dystopian",
        wordCount: 52000,
        timesRead: 1
    },
    {
        title: "Gathering Blue",
        author: "Lois Lowry",
        yearPublished: 2000,
        genre: "dystopian",
        wordCount: 48000,
        timesRead: 0
    },
    {
        title: "Messenger",
        author: "Lois Lowry",
        yearPublished: 2004,
        genre: "dystopian",
        wordCount: 37000,
        timesRead: 0
    },
    {
        title: "Son",
        author: "Lois Lowry",
        yearPublished: 2012,
        genre: "dystopian",
        wordCount: 76000,
        timesRead: 0
    },
    {
        title: "The Lion, the Witch, and the Wardrobe",
        author: "C.S. Lewis",
        yearPublished: 1950,
        genre: "fantasy",
        wordCount: 38000,
        timesRead: 0
    },
    {
        title: "Prince Caspian",
        author: "C.S. Lewis",
        yearPublished: 1951,
        genre: "fantasy",
        wordCount: 46000,
        timesRead: 0
    },
    {
        title: "The Voyage of the Dawn Treader",
        author: "C.S. Lewis",
        yearPublished: 1952,
        genre: "fantasy",
        wordCount: 54000,
        timesRead: 0
    },
    {
        title: "The Silver Chair",
        author: "C.S. Lewis",
        yearPublished: 1953,
        genre: "fantasy",
        wordCount: 51000,
        timesRead: 0
    },
    {
        title: "The Horse and His Boy",
        author: "C.S. Lewis",
        yearPublished: 1954,
        genre: "fantasy",
        wordCount: 48000,
        timesRead: 0
    },
    {
        title: "The Magician's Nephew",
        author: "C.S. Lewis",
        yearPublished: 1955,
        genre: "fantasy",
        wordCount: 64000,
        timesRead: 0
    },
    {
        title: "The Last Battle",
        author: "C.S. Lewis",
        yearPublished: 1956,
        genre: "fantasy",
        wordCount: 43000,
        timesRead: 0
    },
    {
        title: "Eragon",
        author: "Christopher Paolini",
        yearPublished: 2003,
        genre: "fantasy",
        wordCount: 157000,
        timesRead: 3
    },
    {
        title: "Eldest",
        author: "Christopher Paolini",
        yearPublished: 2005,
        genre: "fantasy",
        wordCount: 213000,
        timesRead: 3
    },
    {
        title: "Brisingr",
        author: "Christopher Paolini",
        yearPublished: 2008,
        genre: "fantasy",
        wordCount: 254000,
        timesRead: 3
    },
    {
        title: "Inheritance",
        author: "Christopher Paolini",
        yearPublished: 2011,
        genre: "fantasy",
        wordCount: 280000,
        timesRead: 3
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        yearPublished: 1997,
        genre: "ya",
        wordCount: 77000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        yearPublished: 1998,
        genre: "ya",
        wordCount: 85000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        yearPublished: 1999,
        genre: "ya",
        wordCount: 107000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        yearPublished: 2000,
        genre: "ya",
        wordCount: 190000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        yearPublished: 2003,
        genre: "ya",
        wordCount: 257000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        yearPublished: 2005,
        genre: "ya",
        wordCount: 168000,
        timesRead: 4
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        yearPublished: 2007,
        genre: "ya",
        wordCount: 198000,
        timesRead: 4
    },
    {
        title: "The Merchant of Death",
        author: "D. J. MacHale",
        yearPublished: 2002,
        genre: "ya",
        wordCount: 117000,
        timesRead: 2
    },
    {
        title: "The Lost City of Faar",
        author: "D. J. MacHale",
        yearPublished: 2003,
        genre: "ya",
        wordCount: 114000,
        timesRead: 2
    },
    {
        title: "The Never War",
        author: "D. J. MacHale",
        yearPublished: 2003,
        genre: "ya",
        wordCount: 105000,
        timesRead: 2
    },
    {
        title: "The Reality Bug",
        author: "D. J. MacHale",
        yearPublished: 2003,
        genre: "ya",
        wordCount: 106000,
        timesRead: 2
    },
    {
        title: "Black Water",
        author: "D. J. MacHale",
        yearPublished: 2004,
        genre: "ya",
        wordCount: 120000,
        timesRead: 2
    },
    {
        title: "The Rivers of Zadaa",
        author: "D. J. MacHale",
        yearPublished: 2005,
        genre: "ya",
        wordCount: 104000,
        timesRead: 2
    },
    {
        title: "The Quillan Games",
        author: "D. J. MacHale",
        yearPublished: 2006,
        genre: "ya",
        wordCount: 128000,
        timesRead: 1
    },
    {
        title: "The Pilgrims of Rayne",
        author: "D. J. MacHale",
        yearPublished: 2007,
        genre: "ya",
        wordCount: 144000,
        timesRead: 1
    },
    {
        title: "Raven Rise",
        author: "D. J. MacHale",
        yearPublished: 2008,
        genre: "ya",
        wordCount: 140000,
        timesRead: 1
    },
    {
        title: "The Soldiers of Halla",
        author: "D. J. MacHale",
        yearPublished: 2009,
        genre: "ya",
        wordCount: 152000,
        timesRead: 1
    },
    {
        title: "The Light",
        author: "D. J. MacHale",
        yearPublished: 2010,
        genre: "ya",
        wordCount: 88000,
        timesRead: 1
    },
    {
        title: "The Black",
        author: "D. J. MacHale",
        yearPublished: 2011,
        genre: "ya",
        wordCount: 104000,
        timesRead: 1
    },
    {
        title: "The Blood",
        author: "D. J. MacHale",
        yearPublished: 2012,
        genre: "ya",
        wordCount: 96000,
        timesRead: 1
    },
    {
        title: "The Lightning Thief",
        author: "Rick Riordan",
        yearPublished: 2005,
        genre: "ya",
        wordCount: 87000,
        timesRead: 1
    },
    {
        title: "The Sea of Monsters",
        author: "Rick Riordan",
        yearPublished: 2006,
        genre: "ya",
        wordCount: 64000,
        timesRead: 1
    },
    {
        title: "The Titan's Curse",
        author: "Rick Riordan",
        yearPublished: 2007,
        genre: "ya",
        wordCount: 73000,
        timesRead: 1
    },
    {
        title: "The Battle of the Labyrinth",
        author: "Rick Riordan",
        yearPublished: 2008,
        genre: "ya",
        wordCount: 85000,
        timesRead: 1
    },
    {
        title: "The Last Olympian",
        author: "Rick Riordan",
        yearPublished: 2009,
        genre: "ya",
        wordCount: 89000,
        timesRead: 1
    },
    {
        title: "The Lost Hero",
        author: "Rick Riordan",
        yearPublished: 2010,
        genre: "ya",
        wordCount: 128000,
        timesRead: 0
    },
    {
        title: "The Son of Neptune",
        author: "Rick Riordan",
        yearPublished: 2011,
        genre: "ya",
        wordCount: 128000,
        timesRead: 0
    },
    {
        title: "The Mark of Athena",
        author: "Rick Riordan",
        yearPublished: 2012,
        genre: "ya",
        wordCount: 133000,
        timesRead: 0
    },
    {
        title: "The House of Hades",
        author: "Rick Riordan",
        yearPublished: 2013,
        genre: "ya",
        wordCount: 130000,
        timesRead: 0
    },
    {
        title: "The Blood of Olympus",
        author: "Rick Riordan",
        yearPublished: 2014,
        genre: "ya",
        wordCount: 112000,
        timesRead: 0
    },
    {
        title: "The Hidden Oracle",
        author: "Rick Riordan",
        yearPublished: 2016,
        genre: "ya",
        wordCount: 84000,
        timesRead: 0
    },
    {
        title: "The Dark Prophecy",
        author: "Rick Riordan",
        yearPublished: 2017,
        genre: "ya",
        wordCount: 108000,
        timesRead: 0
    },
    {
        title: "The Burning Maze",
        author: "Rick Riordan",
        yearPublished: 2018,
        genre: "ya",
        wordCount: 112000,
        timesRead: 0
    },
    {
        title: "The Tyrant's Tomb",
        author: "Rick Riordan",
        yearPublished: 2019,
        genre: "ya",
        wordCount: 131000,
        timesRead: 0
    },
    {
        title: "The Tower of Nero",
        author: "Rick Riordan",
        yearPublished: 2020,
        genre: "ya",
        wordCount: 114000,
        timesRead: 0
    },
    {
        title: "Life as We Knew It",
        author: "Susan Beth Pfeffer",
        yearPublished: 2006,
        genre: "ya",
        wordCount: 101000,
        timesRead: 1
    },
    {
        title: "The Dead and the Gone",
        author: "Susan Beth Pfeffer",
        yearPublished: 2008,
        genre: "ya",
        wordCount: 84000,
        timesRead: 1
    },
    {
        title: "This World We Live In",
        author: "Susan Beth Pfeffer",
        yearPublished: 2010,
        genre: "ya",
        wordCount: 77000,
        timesRead: 1
    },
    {
        title: "The Shade of the Moon",
        author: "Susan Beth Pfeffer",
        yearPublished: 2013,
        genre: "ya",
        wordCount: 76000,
        timesRead: 1
    }
];

const series = [
    {
        title: "Dune Series",
        books: [
            "Dune",
            "Dune Messiah",
            "Children of Dune",
            "God Emperor of Dune",
            "Heretics of Dune",
            "Chapterhouse: Dune"]
    },
    {
        title: "Harry Potter Series",
        books: [
            "Harry Potter and the Sorcerer's Stone",
            "Harry Potter and the Chamber of Secrets",
            "Harry Potter and the Prisoner of Azkaban",
            "Harry Potter and the Goblet of Fire",
            "Harry Potter and the Order of the Phoenix",
            "Harry Potter and the Half-Blood Prince",
            "Harry Potter and the Deathly Hallows"]
    },
    {
        title: "The Giver Quartet",
        books: [
            "The Giver",
            "Gathering Blue",
            "Messenger",
            "Son"
        ]
    },
    {
        title: "The Chronicles of Narnia",
        books: [
            "The Lion, the Witch, and the Wardrobe",
            "Prince Caspian",
            "The Voyage of the Dawn Treader",
            "The Silver Chair",
            "The Horse and His Boy",
            "The Magician's Nephew",
            "The Last Battle"
        ]
    },
    {
        title: "The Inheritance Cycle",
        books: [
            "Eragon",
            "Eldest",
            "Brisingr",
            "Inheritance"
        ]
    },
    {
        title: "Pendragon: Journal of an Adventure through Time and Space",
        books: [
            "The Merchant of Death",
            "The Lost City of Faar",
            "The Never War",
            "The Reality Bug",
            "Black Water",
            "The Rivers of Zadaa",
            "The Quillan Games",
            "The Pilgrims of Rayne",
            "Raven Rise",
            "The Soldiers of Halla"
        ]
    },
    {
        title: "Morpheus Road Trilogy",
        books: [
            "The Light",
            "The Black",
            "The Blood"
        ]
    },
    {
        title: "Percy Jackson & the Olympians",
        books: [
            "The Lightning Thief",
            "The Sea of Monsters",
            "The Titan's Curse",
            "The Battle of the Labyrinth",
            "The Last Olympian"
        ]
    },
    {
        title: "The Heroes of Olympus",
        books: [
            "The Lost Hero",
            "The Son of Neptune",
            "The Mark of Athena",
            "The House of Hades",
            "The Blood of Olympus"
        ]
    },
    {
        title: "The Trials of Apollo",
        books: [
            "The Hidden Oracle",
            "The Dark Prophecy",
            "The Burning Maze",
            "The Tyrant's Tomb",
            "The Tower of Nero"
        ]
    },
    {
        title: "The Last Survivors",
        books: [
            "Life as We Knew It",
            "The Dead and the Gone",
            "This World We Live In",
            "The Shade of the Moon"
        ]
    }
];

