export const Map: React.FC = () => {
    const mapUrl = import.meta.env.VITE_MAPS_URL;

    return !mapUrl ? null : (
        <iframe
            src={import.meta.env.VITE_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};