import headers from "@/components/header";
// create a nextjs page for aboutus
const about = () => {
    return (
        <div>
            <h1>about us x</h1>
            <h1>api: {process.env.apiKey}</h1>
            <headers />
        </div>
    )
}

export default about;
