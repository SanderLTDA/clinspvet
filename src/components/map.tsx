export const Map: React.FC = () => {
    return (
        <iframe
            src={process.env.NEXT_PUBLIC_MAPS_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};