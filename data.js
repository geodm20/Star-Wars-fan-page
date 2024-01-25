// curl -X 
// POST -H 
// "Content-Type: application/json" 
// -d '{"message": "Hello World"}' 
// https://a38af5dc737745ab8cf1f6c1e3f8b133.api.mockbin.io/



let data = {
    "films": [
        {
            "title": "Episode IV: A New Hope", 
            "image": "https://starwars-visualguide.com/assets/img/films/1.jpg",
            "id": "1",
            "description": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...", 
            "director": "George Lucas", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "25-05-1977", 
            "characters": [
                "Luke Skywalker", 
                "C-3PO", 
                "R2-D2", 
                "Darth Vader", 
                "Leia Organa", 
                "Owen Lars", 
                "Beru Whitesun lars", 
                "R5-D4", 
                "Biggs Darklighter", 
                "Obi-Wan Kenobi", 
                "Wilhuff Tarkin", 
                "Chewbacca", 
                "Han Solo", 
                "Greedo", 
                "Jabba Desilijic Tiure", 
                "Wedge Antilles", 
                "Jek Tono Porkins", 
                "Raymus Antilles"
            ], 
            "planets": [
                "Tatooine", 
                "Alderaan", 
                "Yavin IV"
            ], 
            "starships": [
                "CR90 corvette", 
                "Star Destroyer", 
                "Sentinel-class landing craft", 
                "Death Star", 
                "Millennium Falcon", 
                "Y-wing", 
                "X-wing", 
                "TIE Advanced x1"
            ], 
            "vehicles": [
                "Sand Crawler", 
                "T-16 skyhopper", 
                "X-34 landspeeder", 
                "TIE/LN starfighter"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Wookie", 
                "Rodian", 
                "Hutt"
            ]
        }, 
        {
            "title": "Episode V: The Empire Strikes Back",
            "image": "https://starwars-visualguide.com/assets/img/films/2.jpg",
            "id": "2",
            "description": "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy. Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth. The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space...", 
            "director": "Irvin Kershner", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "17-05-1980", 
            "characters": [
                "Luke Skywalker", 
                "C-3PO", 
                "R2-D2", 
                "Darth Vader", 
                "Leia Organa", 
                "Obi-Wan Kenobi", 
                "Chewbacca", 
                "Han Solo", 
                "Wedge Antilles", 
                "Yoda", 
                "Palpatine", 
                "Boba Fett", 
                "IG-88", 
                "Bossk", 
                "Lando Calrissian", 
                "Lobot"
            ], 
            "planets": [
                "Hoth", 
                "Dagobah", 
                "Bespin", 
                "Ord Mantell"
            ], 
            "starships": [
                "Star Destroyer", 
                "Millennium Falcon", 
                "Y-wing", 
                "X-wing", 
                "Executor", 
                "Rebel transport", 
                "Slave 1", 
                "Imperial shuttle", 
                "EF76 Nebulon-B escort frigate"
            ], 
            "vehicles": [
                "TIE/LN starfighter", 
                "Snowspeeder", 
                "TIE bomber", 
                "AT-AT", 
                "AT-ST", 
                "Storm IV Twin-Pod cloud car"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Wookie", 
                "Yoda's species", 
                "Trandoshan"
            ]
        }, 
        {
            "title": "Episode VI: Return of the Jedi", 
            "image": "https://starwars-visualguide.com/assets/img/films/3.jpg",
            "id": "3",
            "description": "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...", 
            "director": "Richard Marquand", 
            "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum", 
            "release_date": "25-05-1983", 
            "characters": [
                "Luke Skywalker", 
                "C-3PO", 
                "R2-D2", 
                "Darth Vader", 
                "Leia Organa", 
                "Obi-Wan Kenobi", 
                "Chewbacca", 
                "Han Solo", 
                "Jabba Desilijic Tiure", 
                "Wedge Antilles", 
                "Yoda", 
                "Palpatine", 
                "Boba Fett", 
                "Lando Calrissian", 
                "Ackbar", 
                "Mon Mothma", 
                "Arvel Crynyd", 
                "Wicket Systri Warrick", 
                "Nien Nunb", 
                "Bib Fortuna"
            ], 
            "planets": [
                "Tatooine", 
                "Dagobah", 
                "Endor", 
                "Naboo", 
                "Coruscant"
            ], 
            "starships": [
                "CR90 corvette", 
                "Star Destroyer", 
                "Millennium Falcon", 
                "Y-wing", 
                "X-wing", 
                "Executor", 
                "Rebel transport", 
                "Imperial shuttle", 
                "EF76 Nebulon-B escort frigate", 
                "Calamari Cruiser", 
                "A-wing", 
                "B-wing"
            ], 
            "vehicles": [
                "TIE/LN starfighter", 
                "TIE bomber", 
                "AT-AT", 
                "AT-ST", 
                "Sail barge", 
                "Bantha-II cargo skiff", 
                "TIE/IN interceptor", 
                "Imperial Speeder Bike"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Wookie", 
                "Hutt", 
                "Yoda's species", 
                "Mon Calamari", 
                "Ewok", 
                "Sullustan", 
                "Twi'lek"
            ]
        }, 
        {
            "title": "Episode I: The Phantom Menace",
            "image": "https://starwars-visualguide.com/assets/img/films/4.jpg",
            "id": "4",
            "description": "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.  Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo. While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict...", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "19-05-1999", 
            "characters": [
                "C-3PO", 
                "R2-D2", 
                "Obi-Wan Kenobi", 
                "Anakin Skywalker", 
                "Jabba Desilijic Tiure", 
                "Yoda", 
                "Palpatine", 
                "Qui-Gon Jinn", 
                "Nute Gunray", 
                "Finis Valorum", 
                "Padmé Amidala", 
                "Jar Jar Binks", 
                "Roos Tarpals", 
                "Rugor Nass", 
                "Ric Olié", 
                "Watto", 
                "Sebulba", 
                "Quarsh Panaka", 
                "Shmi Skywalker", 
                "Darth Maul", 
                "Ayla Secura", 
                "Ratts Tyerel", 
                "Dud Bolt", 
                "Gasgano", 
                "Ben Quadinaros", 
                "Mace Windu", 
                "Ki-Adi-Mundi", 
                "Kit Fisto", 
                "Eeth Koth", 
                "Adi Gallia", 
                "Saesee Tiin", 
                "Yarael Poof", 
                "Plo Koon", 
                "Mas Amedda"
            ], 
            "planets": [
                "Tatooine", 
                "Naboo", 
                "Coruscant"
            ], 
            "starships": [
                "Republic Cruiser", 
                "Droid control ship", 
                "Naboo fighter", 
                "Naboo Royal Starship", 
                "Scimitar"
            ], 
            "vehicles": [
                "Vulture Droid", 
                "Multi-Troop Transport", 
                "Armored Assault Tank", 
                "Single Trooper Aerial Platform", 
                "C-9979 landing craft", 
                "Tribubble bongo", 
                "Sith speeder"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Yoda's species", 
                "Neimodian", 
                "Gungan", 
                "Toydarian", 
                "Dug", 
                "Twi'lek", 
                "Aleena", 
                "Vulptereen", 
                "Xexto", 
                "Toong", 
                "Cerean", 
                "Nautolan", 
                "Zabrak", 
                "Tholothian", 
                "Iktotchi", 
                "Quermian", 
                "Kel Dor", 
                "Chagrian"
            ]
        }, 
        {
            "title": "Episode II: Attack of the Clones",
            "image": "https://starwars-visualguide.com/assets/img/films/5.jpg",
            "id": "5",
            "description": "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic. This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy. Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi...", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "16-05-2002", 
            "characters": [
                "C-3PO", 
                "R2-D2", 
                "Owen Lars", 
                "Beru Whitesun lars", 
                "Obi-Wan Kenobi", 
                "Anakin Skywalker", 
                "Yoda", 
                "Palpatine", 
                "Boba Fett", 
                "Nute Gunray", 
                "Padmé Amidala", 
                "Jar Jar Binks", 
                "Watto", 
                "Shmi Skywalker", 
                "Ayla Secura", 
                "Mace Windu", 
                "Ki-Adi-Mundi", 
                "Kit Fisto", 
                "Plo Koon", 
                "Mas Amedda", 
                "Gregar Typho", 
                "Cordé", 
                "Cliegg Lars", 
                "Poggle the Lesser", 
                "Luminara Unduli", 
                "Barriss Offee", 
                "Dormé", 
                "Dooku", 
                "Bail Prestor Organa", 
                "Jango Fett", 
                "Zam Wesell", 
                "Dexter Jettster", 
                "Lama Su", 
                "Taun We", 
                "Jocasta Nu", 
                "R4-P17", 
                "Wat Tambor", 
                "San Hill", 
                "Shaak Ti", 
                "Sly Moore"
            ], 
            "planets": [
                "Tatooine", 
                "Naboo", 
                "Coruscant", 
                "Kamino", 
                "Geonosis"
            ], 
            "starships": [
                "Slave 1", 
                "Droid control ship", 
                "Naboo fighter", 
                "J-type diplomatic barge", 
                "AA-9 Coruscant freighter", 
                "Jedi starfighter", 
                "H-type Nubian yacht", 
                "Republic Assault ship", 
                "Solar Sailer"
            ], 
            "vehicles": [
                "Sand Crawler", 
                "Zephyr-G swoop bik", 
                "Koro-2 Exodrive airspeeder", 
                "XJ-6 airspeeder", 
                "LAAT/i", 
                "LAAT/c", 
                "AT-TE", 
                "SPHA", 
                "Flitknot speeder", 
                "Neimoidian shuttle", 
                "Geonosian starfighter"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Yoda's species", 
                "Gungan", 
                "Toydarian", 
                "Twi'lek", 
                "Geonosian", 
                "Mirialan", 
                "Clawdite", 
                "Besalisk", 
                "Kaminoan", 
                "Skakoan", 
                "Muun", 
                "Togruta"
            ]
        }, 
        {
            "title": "Episode III: Revenge of the Sith",
            "image": "https://starwars-visualguide.com/assets/img/films/6.jpg",
            "id": "6",
            "description": "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.  In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate. As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor...", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "19-05-2005", 
            "characters": [
                "Luke Skywalker", 
                "C-3PO", 
                "R2-D2", 
                "Darth Vader", 
                "Leia Organa", 
                "Owen Lars", 
                "Beru Whitesun lars", 
                "Obi-Wan Kenobi", 
                "Anakin Skywalker", 
                "Wilhuff Tarkin", 
                "Chewbacca", 
                "Yoda", 
                "Palpatine", 
                "Nute Gunray", 
                "Padmé Amidala", 
                "Ayla Secura", 
                "Mace Windu", 
                "Ki-Adi-Mundi", 
                "Kit Fisto", 
                "Eeth Koth", 
                "Adi Gallia", 
                "Saesee Tiin", 
                "Plo Koon", 
                "Poggle the Lesser", 
                "Luminara Unduli", 
                "Dooku", 
                "Bail Prestor Organa", 
                "R4-P17", 
                "Shaak Ti", 
                "Grievou", 
                "Tarfful", 
                "Raymus Antilles", 
                "Sly Moore", 
                "Tion Medon"
            ], 
            "planets": [
                "Tatooine", 
                "Alderaan", 
                "Dagobah", 
                "Naboo", 
                "Coruscant", 
                "Utapau", 
                "Mustafar", 
                "Kashyyyk", 
                "Polis Massa", 
                "Mygeeto", 
                "Felucia", 
                "Cato Neimoidia", 
                "Saleucami"
            ], 
            "starships": [
                "CR90 corvette", 
                "Droid control ship", 
                "Jedi starfighter", 
                "Trade Federation cruiser", 
                "Theta-class T-2c shuttle", 
                "Republic attack cruiser", 
                "Naboo star skiff", 
                "Jedi Interceptor", 
                "arc-170", 
                "Banking clan frigte", 
                "Belbullab-22 starfighter", 
                "V-wing"
            ], 
            "vehicles": [
                "Vulture Droid", 
                "LAAT/i", 
                "AT-TE", 
                "Neimoidian shuttle", 
                "Tsmeu-6 personal wheel bike", 
                "Emergency Firespeeder", 
                "Droid tri-fighter", 
                "Oevvaor jet catamaran", 
                "Raddaugh Gnasp fluttercraft", 
                "Clone turbo tank", 
                "Corporate Alliance tank droid", 
                "Droid gunship", 
                "AT-RT"
            ], 
            "species": [
                "Human", 
                "Droid", 
                "Wookie", 
                "Yoda's species", 
                "Twi'lek", 
                "Toong", 
                "Cerean", 
                "Tholothian", 
                "Iktotchi", 
                "Quermian", 
                "Kel Dor", 
                "Chagrian", 
                "Geonosian", 
                "Mirialan", 
                "Clawdite", 
                "Skakoan", 
                "Muun", 
                "Togruta", 
                "Kaleesh", 
                "Pau'an"
            ]
        }
    ],
    "characters": [
        {   
            "id": "1",
            "name": "Luke Skywalker",
            "image": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Human"
            ],
            "vehicles": [
                "Snowspeeder", 
                "Imperial Speeder Bike"
            ], 
            "starships": [
                "X-wing", 
                "Imperial shuttle"
            ]
        }, 
        {
            "id": "2",
            "name": "C-3PO",
            "image": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Droid"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "3",
            "name": "R2-D2",
            "image": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
            "height": "96", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, blue", 
            "eye_color": "red", 
            "birth_year": "33BBY", 
            "gender": "n/a", 
            "homeworld": "Naboo", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Droid"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "4",
            "name": "Darth Vader",
            "image": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
            "height": "202", 
            "mass": "136", 
            "hair_color": "none", 
            "skin_color": "white", 
            "eye_color": "yellow", 
            "birth_year": "41.9BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [], 
            "starships": [
                "TIE Advanced x1"
            ]
        }, 
        {
            "id": "5",
            "name": "Leia Organa",
            "image": "https://starwars-visualguide.com/assets/img/characters/5.jpg", 
            "height": "150", 
            "mass": "49", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "19BBY", 
            "gender": "female", 
            "homeworld": "Alderaan", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [
                "Imperial Speeder Bike"
            ], 
            "starships": []
        }, 
        {
            "id": "6",
            "name": "Owen Lars",
            "image": "https://starwars-visualguide.com/assets/img/characters/6.jpg", 
            "height": "178", 
            "mass": "120", 
            "hair_color": "brown, grey", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "52BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "7",
            "name": "Beru Whitesun lars",
            "image": "https://starwars-visualguide.com/assets/img/characters/7.jpg", 
            "height": "165", 
            "mass": "75", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "47BBY", 
            "gender": "female", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "8",
            "name": "R5-D4",
            "image": "https://starwars-visualguide.com/assets/img/characters/8.jpg", 
            "height": "97", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, red", 
            "eye_color": "red", 
            "birth_year": "unknown", 
            "gender": "n/a", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope"
            ], 
            "species": [
                "Droid"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "9",
            "name": "Biggs Darklighter",
            "image": "https://starwars-visualguide.com/assets/img/characters/9.jpg", 
            "height": "183", 
            "mass": "84", 
            "hair_color": "black", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "24BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode IV: A New Hope"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "X-wing"
            ]
        }, 
        {
            "id": "10",
            "name": "Obi-Wan Kenobi",
            "image": "https://starwars-visualguide.com/assets/img/characters/10.jpg", 
            "height": "182", 
            "mass": "77", 
            "hair_color": "auburn, white", 
            "skin_color": "fair", 
            "eye_color": "blue-gray", 
            "birth_year": "57BBY", 
            "gender": "male", 
            "homeworld": "Stewjon", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [
                "Tribubble bongo"
            ], 
            "starships": [
                "Jedi starfighter", 
                "Trade Federation cruiser", 
                "Naboo star skiff", 
                "Jedi Interceptor", 
                "Belbullab-22 starfighter"
            ]
        },
        {
            "id": "11",
            "name": "Anakin Skywalker",
            "image": "https://starwars-visualguide.com/assets/img/characters/11.jpg", 
            "height": "188", 
            "mass": "84", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "41.9BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [
                "Zephyr-G swoop bike", 
                "XJ-6 airspeeder"
            ], 
            "starships": [
                "Naboo fighter", 
                "Trade Federation cruiser", 
                "Jedi Interceptor"
            ]
        }, 
        {
            "id": "12",
            "name": "Wilhuff Tarkin",
            "image": "https://starwars-visualguide.com/assets/img/characters/12.jpg", 
            "height": "180", 
            "mass": "unknown", 
            "hair_color": "auburn, grey", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "64BBY", 
            "gender": "male", 
            "homeworld": "Eriadu", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "13",
            "name": "Chewbacca",
            "image": "https://starwars-visualguide.com/assets/img/characters/13.jpg",  
            "height": "228", 
            "mass": "112", 
            "hair_color": "brown", 
            "skin_color": "unknown", 
            "eye_color": "blue", 
            "birth_year": "200BBY", 
            "gender": "male", 
            "homeworld": "Kashyyyk", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Wookie"
            ], 
            "vehicles": [
                "AT-ST"
            ], 
            "starships": [
                "Millennium Falcon", 
                "Imperial shuttle"
            ]
        }, 
        {
            "id": "14",
            "name": "Han Solo",
            "image": "https://starwars-visualguide.com/assets/img/characters/14.jpg", 
            "height": "180", 
            "mass": "80", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "29BBY", 
            "gender": "male", 
            "homeworld": "Corellia", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Millennium Falcon", 
                "Imperial shuttle"
            ]
        }, 
        {
            "id": "15",
            "name": "Greedo",
            "image": "https://starwars-visualguide.com/assets/img/characters/15.jpg", 
            "height": "173", 
            "mass": "74", 
            "hair_color": "n/a", 
            "skin_color": "green", 
            "eye_color": "black", 
            "birth_year": "44BBY", 
            "gender": "male", 
            "homeworld": "Rodia", 
            "films": [
                "Episode IV: A New Hope"
            ], 
            "species": [
                "Rodian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "16",
            "name": "Jabba Desilijic Tiure", 
            "image": "https://starwars-visualguide.com/assets/img/characters/16.jpg", 
            "height": "175", 
            "mass": "1,358", 
            "hair_color": "n/a", 
            "skin_color": "green-tan, brown", 
            "eye_color": "orange", 
            "birth_year": "600BBY", 
            "gender": "hermaphrodite", 
            "homeworld": "Nal Hutta", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Hutt"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "17",
            "name": "Wedge Antilles",
            "image": "https://starwars-visualguide.com/assets/img/characters/18.jpg",  
            "height": "170", 
            "mass": "77", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "hazel", 
            "birth_year": "21BBY", 
            "gender": "male", 
            "homeworld": "Corellia", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi"
            ], 
            "species": [], 
            "vehicles": [
                "Snowspeeder"
            ], 
            "starships": [
                "X-wing"
            ]
        }, 
        {
            "id": "18",
            "name": "Jek Tono Porkins", 
            "image": "https://starwars-visualguide.com/assets/img/characters/19.jpg", 
            "height": "180", 
            "mass": "110", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Bestine IV", 
            "films": [
                "Episode IV: A New Hope"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "X-wing"
            ]
        }, 
        {
            "id": "19",
            "name": "Yoda", 
            "image": "https://starwars-visualguide.com/assets/img/characters/20.jpg", 
            "height": "66", 
            "mass": "17", 
            "hair_color": "white", 
            "skin_color": "green", 
            "eye_color": "brown", 
            "birth_year": "896BBY", 
            "gender": "male", 
            "homeworld": "unkown", 
            "films": [
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Yoda's species"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "20",
            "name": "Palpatine", 
            "image": "https://starwars-visualguide.com/assets/img/characters/21.jpg", 
            "height": "170", 
            "mass": "75", 
            "hair_color": "grey", 
            "skin_color": "pale", 
            "eye_color": "yellow", 
            "birth_year": "82BBY", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        },
        {
            "id": "21",
            "name": "Boba Fett", 
            "image": "https://starwars-visualguide.com/assets/img/characters/22.jpg", 
            "height": "183", 
            "mass": "78.2", 
            "hair_color": "black", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "31.5BBY", 
            "gender": "male", 
            "homeworld": "Kamino", 
            "films": [
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi", 
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Slave 1"
            ]
        }, 
        {
            "id": "22",
            "name": "IG-88", 
            "image": "https://starwars-visualguide.com/assets/img/characters/23.jpg", 
            "height": "200", 
            "mass": "140", 
            "hair_color": "none", 
            "skin_color": "metal", 
            "eye_color": "red", 
            "birth_year": "15BBY", 
            "gender": "none", 
            "homeworld": "unkown", 
            "films": [
                "Episode V: The Empire Strikes Back"
            ], 
            "species": [
                "Droid"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "23",
            "name": "Bossk", 
            "image": "https://starwars-visualguide.com/assets/img/characters/24.jpg", 
            "height": "190", 
            "mass": "113", 
            "hair_color": "none", 
            "skin_color": "green", 
            "eye_color": "red", 
            "birth_year": "53BBY", 
            "gender": "male", 
            "homeworld": "Trandosha", 
            "films": [
                "Episode V: The Empire Strikes Back"
            ], 
            "species": [
                "Trandoshan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "24",
            "name": "Lando Calrissian", 
            "image": "https://starwars-visualguide.com/assets/img/characters/25.jpg", 
            "height": "177", 
            "mass": "79", 
            "hair_color": "black", 
            "skin_color": "dark", 
            "eye_color": "brown", 
            "birth_year": "31BBY", 
            "gender": "male", 
            "homeworld": "Socorro", 
            "films": [
                "Episode V: The Empire Strikes Back", 
                "Episode VI: Return of the Jedi"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Millennium Falcon"
            ]
        }, 
        {
            "id": "25",
            "name": "Lobot", 
            "image": "https://starwars-visualguide.com/assets/img/characters/26.jpg", 
            "height": "175", 
            "mass": "79", 
            "hair_color": "none", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "37BBY", 
            "gender": "male", 
            "homeworld": "Bespin", 
            "films": [
                "Episode V: The Empire Strikes Back"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "26",
            "name": "Ackbar", 
            "image": "https://starwars-visualguide.com/assets/img/characters/27.jpg", 
            "height": "180", 
            "mass": "83", 
            "hair_color": "none", 
            "skin_color": "brown mottle", 
            "eye_color": "orange", 
            "birth_year": "41BBY", 
            "gender": "male", 
            "homeworld": "Mon Cala", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [
                "Mon Calamari"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "27",
            "name": "Mon Mothma", 
            "image": "https://starwars-visualguide.com/assets/img/characters/28.jpg", 
            "height": "150", 
            "mass": "unknown", 
            "hair_color": "auburn", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "48BBY", 
            "gender": "female", 
            "homeworld": "Chandrila", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        },
        {
            "id": "28",
            "name": "Arvel Crynyd", 
            "image": "https://starwars-visualguide.com/assets/img/characters/29.jpg", 
            "height": "unknown", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "unkown", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "A-wing"
            ]
        }, 
        {
            "id": "29",
            "name": "Wicket Systri Warrick", 
            "image": "https://starwars-visualguide.com/assets/img/characters/30.jpg", 
            "height": "88", 
            "mass": "20", 
            "hair_color": "brown", 
            "skin_color": "brown", 
            "eye_color": "brown", 
            "birth_year": "8BBY", 
            "gender": "male", 
            "homeworld": "Endor", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [
                "Ewok"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "30",
            "name": "Nien Nunb", 
            "image": "https://starwars-visualguide.com/assets/img/characters/31.jpg", 
            "height": "160", 
            "mass": "68", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Sullust", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [
                "Sullustan"
            ], 
            "vehicles": [], 
            "starships": [
                "Millennium Falcon"
            ]
        },
        {
            "id": "31",
            "name": "Qui-Gon Jinn", 
            "image": "https://starwars-visualguide.com/assets/img/characters/32.jpg", 
            "height": "193", 
            "mass": "89", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "92BBY", 
            "gender": "male", 
            "homeworld": "unkown", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [], 
            "vehicles": [
                "Tribubble bongo"
            ], 
            "starships": []
        }, 
        {
            "id": "32",
            "name": "Nute Gunray", 
            "image": "https://starwars-visualguide.com/assets/img/characters/33.jpg", 
            "height": "191", 
            "mass": "90", 
            "hair_color": "none", 
            "skin_color": "mottled green", 
            "eye_color": "red", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Cato Neimoidia", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Neimodian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "33",
            "name": "Finis Valorum", 
            "image": "https://starwars-visualguide.com/assets/img/characters/34.jpg", 
            "height": "170", 
            "mass": "unknown", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "91BBY", 
            "gender": "male", 
            "homeworld": "Coruscant", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "34",
            "name": "Padmé Amidala", 
            "image": "https://starwars-visualguide.com/assets/img/characters/35.jpg", 
            "height": "185", 
            "mass": "45", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "46BBY", 
            "gender": "female", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Naboo fighter", 
                "H-type Nubian yacht", 
                "Naboo star skiff"
            ]
        },
        {
            "id": "35",
            "name": "Jar Jar Binks", 
            "image": "https://starwars-visualguide.com/assets/img/characters/36.jpg", 
            "height": "196", 
            "mass": "66", 
            "hair_color": "none", 
            "skin_color": "orange", 
            "eye_color": "orange", 
            "birth_year": "52BBY", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Gungan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "36",
            "name": "Roos Tarpals", 
            "image": "https://starwars-visualguide.com/assets/img/characters/37.jpg", 
            "height": "224", 
            "mass": "82", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Gungan"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "37",
            "name": "Rugor Nass", 
            "image": "https://starwars-visualguide.com/assets/img/characters/38.jpg", 
            "height": "206", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "green", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Gungan"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "38",
            "name": "Ric Olié", 
            "image": "https://starwars-visualguide.com/assets/img/characters/39.jpg", 
            "height": "183", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Naboo Royal Starship"
            ]
        }, 
        {
            "id": "39",
            "name": "Watto", 
            "image": "https://starwars-visualguide.com/assets/img/characters/40.jpg", 
            "height": "137", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "blue, grey", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Toydaria", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Toydarian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "40",
            "name": "Sebulba", 
            "image": "https://starwars-visualguide.com/assets/img/characters/41.jpg", 
            "height": "112", 
            "mass": "40", 
            "hair_color": "none", 
            "skin_color": "grey, red", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Malastare", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Dug"
            ], 
            "vehicles": [], 
            "starships": [] 
        },
        {
            "id": "41",
            "name": "Quarsh Panaka", 
            "image": "https://starwars-visualguide.com/assets/img/characters/42.jpg", 
            "height": "183", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "dark", 
            "eye_color": "brown", 
            "birth_year": "62BBY", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "42",
            "name": "Shmi Skywalker", 
            "image": "https://starwars-visualguide.com/assets/img/characters/43.jpg", 
            "height": "163", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "72BBY", 
            "gender": "female", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "43",
            "name": "Darth Maul", 
            "image": "https://starwars-visualguide.com/assets/img/characters/44.jpg", 
            "height": "175", 
            "mass": "80", 
            "hair_color": "none", 
            "skin_color": "red", 
            "eye_color": "yellow", 
            "birth_year": "54BBY", 
            "gender": "male", 
            "homeworld": "Dathomir", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Zabrak"
            ], 
            "vehicles": [
                "Sith speeder"
            ], 
            "starships": [
                "Scimitar"
            ]
        }, 
        {
            "id": "44",
            "name": "Bib Fortuna", 
            "image": "https://starwars-visualguide.com/assets/img/characters/45.jpg", 
            "height": "180", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "pale", 
            "eye_color": "pink", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Ryloth", 
            "films": [
                "Episode VI: Return of the Jedi"
            ], 
            "species": [
                "Twi'lek"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "45",
            "name": "Ayla Secura", 
            "image": "https://starwars-visualguide.com/assets/img/characters/46.jpg", 
            "height": "178", 
            "mass": "55", 
            "hair_color": "none", 
            "skin_color": "blue", 
            "eye_color": "hazel", 
            "birth_year": "48BBY", 
            "gender": "female", 
            "homeworld": "Ryloth", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Twi'lek"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "46",
            "name": "Ratts Tyerel", 
            "image": "https://starwars-visualguide.com/assets/img/characters/47.jpg", 
            "height": "79", 
            "mass": "15", 
            "hair_color": "none", 
            "skin_color": "grey, blue", 
            "eye_color": "unknown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Aleen Minor", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Aleena"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "47",
            "name": "Dud Bolt", 
            "image": "https://starwars-visualguide.com/assets/img/characters/48.jpg", 
            "height": "94", 
            "mass": "45", 
            "hair_color": "none", 
            "skin_color": "blue, grey", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Vulpter", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Vulptereen"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "48",
            "name": "Gasgano", 
            "image": "https://starwars-visualguide.com/assets/img/characters/49.jpg", 
            "height": "122", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "white, blue", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Troiken", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Xexto"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "49",
            "name": "Ben Quadinaros",
            "image": "https://starwars-visualguide.com/assets/img/characters/50.jpg",  
            "height": "163", 
            "mass": "65", 
            "hair_color": "none", 
            "skin_color": "grey, green, yellow", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Tund", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Toong"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "50",
            "name": "Mace Windu", 
            "image": "https://starwars-visualguide.com/assets/img/characters/51.jpg", 
            "height": "188", 
            "mass": "84", 
            "hair_color": "none", 
            "skin_color": "dark", 
            "eye_color": "brown", 
            "birth_year": "72BBY", 
            "gender": "male", 
            "homeworld": "Haruun Kal", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        },
        {
            "id": "51",
            "name": "Ki-Adi-Mundi",
            "image": "https://starwars-visualguide.com/assets/img/characters/52.jpg",  
            "height": "198", 
            "mass": "82", 
            "hair_color": "white", 
            "skin_color": "pale", 
            "eye_color": "yellow", 
            "birth_year": "92BBY", 
            "gender": "male", 
            "homeworld": "Cerea", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Cerean"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "52",
            "name": "Kit Fisto", 
            "image": "https://starwars-visualguide.com/assets/img/characters/53.jpg", 
            "height": "196", 
            "mass": "87", 
            "hair_color": "none", 
            "skin_color": "green", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Glee Anselm", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Nautolan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "53",
            "name": "Eeth Koth", 
            "image": "https://starwars-visualguide.com/assets/img/characters/54.jpg", 
            "height": "171", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "brown", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Iridonia", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Zabrak"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "54",
            "name": "Adi Gallia", 
            "image": "https://starwars-visualguide.com/assets/img/characters/55.jpg", 
            "height": "184", 
            "mass": "50", 
            "hair_color": "none", 
            "skin_color": "dark", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Coruscant", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Tholothian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "55",
            "name": "Saesee Tiin", 
            "image": "https://starwars-visualguide.com/assets/img/characters/56.jpg", 
            "height": "188", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "pale", 
            "eye_color": "orange", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Iktotch", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Iktotchi"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "56",
            "name": "Yarael Poof", 
            "image": "https://starwars-visualguide.com/assets/img/characters/57.jpg", 
            "height": "264", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "white", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Quermia", 
            "films": [
                "Episode I: The Phantom Menace"
            ], 
            "species": [
                "Quermian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "57",
            "name": "Plo Koon", 
            "image": "https://starwars-visualguide.com/assets/img/characters/58.jpg", 
            "height": "188", 
            "mass": "80", 
            "hair_color": "none", 
            "skin_color": "orange", 
            "eye_color": "black", 
            "birth_year": "22BBY", 
            "gender": "male", 
            "homeworld": "Dorin", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Kel Dor"
            ], 
            "vehicles": [], 
            "starships": [
                "Jedi starfighter"
            ]
        }, 
        {
            "id": "58",
            "name": "Mas Amedda",
            "image": "https://starwars-visualguide.com/assets/img/characters/59.jpg", 
            "height": "196", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "blue", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Champala", 
            "films": [
                "Episode I: The Phantom Menace", 
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Chagrian"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "59",
            "name": "Gregar Typho", 
            "image": "https://starwars-visualguide.com/assets/img/characters/60.jpg", 
            "height": "185", 
            "mass": "85", 
            "hair_color": "black", 
            "skin_color": "dark", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Naboo", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [
                "Naboo fighter"
            ]
        }, 
        {
            "id": "60",
            "name": "Cordé", 
            "image": "https://starwars-visualguide.com/assets/img/characters/61.jpg", 
            "height": "157", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Naboo", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [] 
        },
        {
            "id": "61",
            "name": "Cliegg Lars", 
            "image": "https://starwars-visualguide.com/assets/img/characters/62.jpg", 
            "height": "183", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "82BBY", 
            "gender": "male", 
            "homeworld": "Tatooine", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "62",
            "name": "Poggle the Lesser", 
            "image": "https://starwars-visualguide.com/assets/img/characters/63.jpg", 
            "height": "183", 
            "mass": "80", 
            "hair_color": "none", 
            "skin_color": "green", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Geonosis", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Geonosian"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "63",
            "name": "Luminara Unduli", 
            "image": "https://starwars-visualguide.com/assets/img/characters/64.jpg", 
            "height": "170", 
            "mass": "56.2", 
            "hair_color": "black", 
            "skin_color": "yellow", 
            "eye_color": "blue", 
            "birth_year": "58BBY", 
            "gender": "female", 
            "homeworld": "Mirial", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Mirialan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "64",
            "name": "Barriss Offee", 
            "image": "https://starwars-visualguide.com/assets/img/characters/65.jpg", 
            "height": "166", 
            "mass": "50", 
            "hair_color": "black", 
            "skin_color": "yellow", 
            "eye_color": "blue", 
            "birth_year": "40BBY", 
            "gender": "female", 
            "homeworld": "Mirial", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Mirialan"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "65",
            "name": "Dormé", 
            "image": "https://starwars-visualguide.com/assets/img/characters/66.jpg", 
            "height": "165", 
            "mass": "unknown", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Naboo", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "66",
            "name": "Dooku", 
            "image": "https://starwars-visualguide.com/assets/img/characters/67.jpg", 
            "height": "193", 
            "mass": "80", 
            "hair_color": "white", 
            "skin_color": "fair", 
            "eye_color": "brown", 
            "birth_year": "102BBY", 
            "gender": "male", 
            "homeworld": "Serenno", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [
                "Flitknot speeder"
            ], 
            "starships": [] 
        }, 
        {
            "id": "67",
            "name": "Bail Prestor Organa", 
            "image": "https://starwars-visualguide.com/assets/img/characters/68.jpg", 
            "height": "191", 
            "mass": "unknown", 
            "hair_color": "black", 
            "skin_color": "tan", 
            "eye_color": "brown", 
            "birth_year": "67BBY", 
            "gender": "male", 
            "homeworld": "Alderaan", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "68",
            "name": "Jango Fett", 
            "image": "https://starwars-visualguide.com/assets/img/characters/69.jpg", 
            "height": "183", 
            "mass": "79", 
            "hair_color": "black", 
            "skin_color": "tan", 
            "eye_color": "brown", 
            "birth_year": "66BBY", 
            "gender": "male", 
            "homeworld": "Concord Dawn", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "69",
            "name": "Zam Wesell", 
            "image": "https://starwars-visualguide.com/assets/img/characters/70.jpg", 
            "height": "168", 
            "mass": "55", 
            "hair_color": "blonde", 
            "skin_color": "fair, green, yellow", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Zolan", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Clawdite"
            ], 
            "vehicles": [
                "Koro-2 Exodrive airspeeder"
            ], 
            "starships": []
        }, 
        {
            "id": "70",
            "name": "Dexter Jettster", 
            "image": "https://starwars-visualguide.com/assets/img/characters/71.jpg", 
            "height": "198", 
            "mass": "102", 
            "hair_color": "none", 
            "skin_color": "brown", 
            "eye_color": "yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Ojom", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Besalisk"
            ], 
            "vehicles": [], 
            "starships": [] 
        },
        {
            "id": "71",
            "name": "Lama Su",
            "image": "https://starwars-visualguide.com/assets/img/characters/72.jpg",  
            "height": "229", 
            "mass": "88", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Kamino", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Kaminoan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "72",
            "name": "Taun We", 
            "image": "https://starwars-visualguide.com/assets/img/characters/73.jpg", 
            "height": "213", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Kamino", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Kaminoan"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "73",
            "name": "Jocasta Nu", 
            "image": "https://starwars-visualguide.com/assets/img/characters/74.jpg", 
            "height": "167", 
            "mass": "unknown", 
            "hair_color": "white", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Coruscant", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Human"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "74",
            "name": "R4-P17", 
            "image": "https://starwars-visualguide.com/assets/img/characters/75.jpg", 
            "height": "96", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "silver, red", 
            "eye_color": "red, blue", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "unkown", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "75",
            "name": "Wat Tambor", 
            "image": "https://starwars-visualguide.com/assets/img/characters/76.jpg", 
            "height": "193", 
            "mass": "48", 
            "hair_color": "none", 
            "skin_color": "green, grey", 
            "eye_color": "unknown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Skako", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Skakoan"
            ], 
            "vehicles": [], 
            "starships": [] 
        }, 
        {
            "id": "76",
            "name": "San Hill", 
            "image": "https://starwars-visualguide.com/assets/img/characters/77.jpg", 
            "height": "191", 
            "mass": "unknown", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "gold", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Muunilinst", 
            "films": [
                "Episode II: Attack of the Clones"
            ], 
            "species": [
                "Muun"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "77",
            "name": "Shaak Ti", 
            "image": "https://starwars-visualguide.com/assets/img/characters/78.jpg", 
            "height": "178", 
            "mass": "57", 
            "hair_color": "none", 
            "skin_color": "red, blue, white", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Shili", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Togruta"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "78",
            "name": "Grievous", 
            "image": "https://starwars-visualguide.com/assets/img/characters/79.jpg", 
            "height": "216", 
            "mass": "159", 
            "hair_color": "none", 
            "skin_color": "brown, white", 
            "eye_color": "green, yellow", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Kalee", 
            "films": [
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Kaleesh"
            ], 
            "vehicles": [
                "Tsmeu-6 personal wheel bike"
            ], 
            "starships": [
                "Belbullab-22 starfighter"
            ]
        }, 
        {
            "id": "79",
            "name": "Tarfful", 
            "image": "https://starwars-visualguide.com/assets/img/characters/80.jpg", 
            "height": "234", 
            "mass": "136", 
            "hair_color": "brown", 
            "skin_color": "brown", 
            "eye_color": "blue", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Kashyyyk", 
            "films": [
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Wookie"
            ], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "80",
            "name": "Raymus Antilles", 
            "image": "https://starwars-visualguide.com/assets/img/characters/81.jpg", 
            "height": "188", 
            "mass": "79", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Alderaan", 
            "films": [
                "Episode IV: A New Hope", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": [] 
        },
        {
            "id": "81",
            "name": "Sly Moore", 
            "image": "https://starwars-visualguide.com/assets/img/characters/82.jpg", 
            "height": "178", 
            "mass": "48", 
            "hair_color": "none", 
            "skin_color": "pale", 
            "eye_color": "white", 
            "birth_year": "unknown", 
            "gender": "female", 
            "homeworld": "Umbara", 
            "films": [
                "Episode II: Attack of the Clones", 
                "Episode III: Revenge of the Sith"
            ], 
            "species": [], 
            "vehicles": [], 
            "starships": []
        }, 
        {
            "id": "82",
            "name": "Tion Medon", 
            "image": "https://starwars-visualguide.com/assets/img/characters/83.jpg", 
            "height": "206", 
            "mass": "80", 
            "hair_color": "none", 
            "skin_color": "grey", 
            "eye_color": "black", 
            "birth_year": "unknown", 
            "gender": "male", 
            "homeworld": "Utapau", 
            "films": [
                "Episode III: Revenge of the Sith"
            ], 
            "species": [
                "Pau'an"
            ], 
            "vehicles": [], 
            "starships": []
        }
    ]
}