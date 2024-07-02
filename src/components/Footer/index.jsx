import insta from "../../assets/logo_insta_20x20.webp"

function Footer(){
    return(
        <footer className="footer">
            <p>Site réalisé par Kévin Picard</p>
            <div className="reseaux">
                <a href="https://www.linkedin.com/in/picard-kévin-a9299210a/">
                    <i className="devicon-linkedin-plain"></i>
                </a>
                <a href="https://www.instagram.com">
                    <img src={insta} alt="instagram" height="20" width="20" />
                </a>
                <a href="https://github.com/Boro-nii">                  
                    <i className="devicon-github-original"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer