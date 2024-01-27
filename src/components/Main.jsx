import React from "react";
import { useState, useEffect } from "react";
import { Footer } from "./Footer.jsx"
import styles from "./Main.module.css"
import loaderStyles from "../animations/loading.module.css";

export const Main = () => {
    
    const [characters, setCharacters] = useState([]);
    const [loadedCont, setLoadedCont] = useState(false); // to render the Footer ONLY after the data is received and rendered
    const [selectedCharacter, setSelectedCharacter] = useState(null); // to store the selected character information
    const [isSelected, setIsSelected] = useState(false); // to apply styles to a list character when clicked. This stores the "id" of the selected character. I'll compare it inside the mapped elements, and if they are equal, the styles will apply only to that element and no to all of them.
 
    useEffect(() => {
        async function callCharacters() {
            try {
                const response = await fetch('https://a38af5dc737745ab8cf1f6c1e3f8b133.api.mockbin.io/'); // made with Mock API
                if (!response.ok) {
                    throw new Error("Error in the HTTP request")
                }
                const data = await response.json();
                setCharacters(data.characters) // "character" is the key in the object where the characters are contained in the incoming data
                setLoadedCont(true)
            } catch (error) {
                console.error('Error:', error, error.message);
            }
          }
    
        callCharacters()
    }, []);

    const handleSelectedCharacter = (character) => { // to be enabled once any mapped element in the list is clicked
        setSelectedCharacter(character);
        setIsSelected(character.id)
    }

    return (
        <>
            <main className="flex flex-col md:flex-row md:items-center md:justify-center md:my-10 ">
                {loadedCont && <section className="md:w-1/2">
                    {selectedCharacter !== null ? <div className="flex flex-col justify-center items-center mt-5 mb-7 md:h-128 lg:flex-row lg:ml-20 2xl:ml-40 lg:w-128">
                        <div className="flex flex-col justify-center items-center w-full 2xl:mr-3">
                            <p className="mb-4 text-2xl text-center text-yellow-300 font-bold md:text-3xl lg:text-4xl">{selectedCharacter.name}</p>
                            <img 
                                src={selectedCharacter.image} 
                                alt={selectedCharacter.name}
                                className="w-40 mb-5 rounded-3xl md:w-60 2xl:w-72"
                            />
                        </div>
                        <div className="flex justify-center items-center w-full lg:flex-col lg:bg-white/20 lg:rounded-2xl lg:w-60">
                            <div className="flex flex-col items-end w-1/2 lg:w-full lg:items-start">
                                <p className="lg:ml-6 lg:my-3">{`Height (cm): ${selectedCharacter.height}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Mass (kg): ${selectedCharacter.mass}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Hair color: ${selectedCharacter.hair_color}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Skin color: ${selectedCharacter.skin_color}`}</p>
                            </div>
                            <div className="flex flex-col w-1/2 ml-6 lg:w-full lg:ml-0">
                                <p className="lg:ml-6 lg:mb-3">{`Eyes color: ${selectedCharacter.eye_color}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Birth: ${selectedCharacter.birth_year}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Gender: ${selectedCharacter.gender}`}</p>
                                <p className="lg:ml-6 lg:mb-3">{`Planet: ${selectedCharacter.homeworld}`}</p>
                            </div>
                        </div>
                    </div> :
                    <div 
                        className="flex justify-center items-center mx-14 text-center text-3xl font-bold lg:w-128 lg:pl-32 lg:text-4xl"
                        style={{height: window.innerWidth >= 1024 ? "512px" : "432px"}}
                    >
                        Scroll and click on a character to check aditional information!
                    </div>}
                </section>}
                {loadedCont ? <section className="flex flex-col items-center h-48 overflow-y-auto mb-10 mt-2 md:h-128 md:w-1/2 md:mx-20 2xl:mx-48">
                    {characters?.map((character) => ( // here I use characters?.map... because that "?" acceses the properties of an object that could be null or undefined withouth giving an error. This is called Optional Chaining
                        <div 
                            key={character.id} 
                            className={`flex justify-between border rounded-xl w-11/12 mb-2 bg-white/20 transition duration-700 ease-in-out ${isSelected == character.id ? styles.listClicked : styles.list} sm:w-3/5 md:w-80`}
                            onClick={() => handleSelectedCharacter(character)}
                        >
                            <div className="w-1/2 flex items-center justify-center">
                                <img 
                                    src={character.image} 
                                    alt={character.name} 
                                    className="w-10"
                                />
                                <p className={`ml-5 ${isSelected == character.id ? styles.idClicked : styles.id}`}>{`No. ${character.id}`}</p>
                            </div>
                            <div className="w-1/2 flex">
                                <p className={`self-center ml-10 ${isSelected == character.id ? styles.textClicked : styles.text}`}>{character.name}</p>
                            </div>
                        </div>
                    ))}
                </section> : <div className={`${loaderStyles.loader} absolute top-1/2 left-1/2`}></div>}    
            </main>
            {loadedCont && <Footer />}
        </>
    )
}

