import axios from "axios";
import { useEffect, useState } from "react";

const Editor = ({ sendContent }) => {
    const [content, setContent] = useState('');
    const url = import.meta.env.VITE_API_URL;

    const handleDownload = () => {
        const blob = new Blob([content], { type: "text/markdown" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "markdown.md";
        a.click();
        URL.revokeObjectURL(url);
    };

    const convert = async () => {
        try {
            if (!content) {
                sendContent("");
                return;
            }
            const res = await axios.post(`${url}/convert`, { content })
            if (res.data) {
                sendContent(res.data)
            }
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            convert()
        }, 900)

        return () => {
            clearTimeout(timer)
        }

    }, [content])

    return (<>
        <div className="editor-wrapper">
            <textarea className="editor" onChange={(e) => {
                setContent(e.target.value);
            }}></textarea>
            <div className="download-btn" onClick={handleDownload}>
                <img height={25} width={25} src="download.svg" className="relative group" />
            </div>
        </div>
    </>)
}

export default Editor;