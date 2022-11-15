import React, { useState } from "react"

export default function Gallery() {
    const [allPhotos, setAllPhotos] = useState([])

    const addPhoto = async () => {
        const newPhoto = {

        }
    }

    return (
        <>
            <input type="file" name="photo" id="addPhotoInput" />
            <label htmlFor="addPhotoInput">
                <i className="add-photo-button fas fa-plus-square" />
            </label>

            <section className="gallery">
                {allPhotos.map((photo) => (
                    <div className="item" key={photo.id}>
                        <img src={photo.url} className="item-image" alt="" />
                        <button className="delete-button" >Delete</button>
                    </div>
                ))}

            </section>


        </>
    )
}