export const Map: React.FC = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1579.4615981741508!2d-46.63977052439393!3d-23.61717999603525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5be1bac2bb75%3A0xec1256fde29946d6!2sClinSP%20Vet%20-%20Cl%C3%ADnica%20Veterin%C3%A1ria!5e0!3m2!1spt-BR!2sus!4v1697509348609!5m2!1spt-BR!2sus%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade";

    return (
        <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};