export const Map: React.FC = () => {
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7311.331693898018!2d-46.64112377247911!3d-23.616314058323763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a51aad099a1%3A0xf036bbd3894d96a4!2sAv.%20Jabaquara%20-%20Mirand%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004045-002!5e0!3m2!1spt-BR!2sbr!4v1678658862751!5m2!1spt-BR!2sbr";

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