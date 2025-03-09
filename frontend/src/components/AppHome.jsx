import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Editor from "./Editor";
import HTML from "./HTML";

const AppHome = () => {
    const width = localStorage.getItem('editorWidth')
    const [content, setContent] = useState();
    const [editorWidth, setEditorWidth] = useState(width ? width : 50);
    const [isVertical, setIsVertical] = useState(window.innerWidth < 1080);
    const separatorRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth < 1080);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleDrag = (e) => {
        e.preventDefault();
        if (!separatorRef.current) return;

        const parentSize = isVertical
            ? separatorRef.current.parentElement.clientHeight
            : separatorRef.current.parentElement.clientWidth;

        const newSize = (isVertical ? e.clientY : e.clientX) / parentSize * 100;
        const minSize = 20;
        const maxSize = 80;

        if (newSize > minSize && newSize < maxSize) {
            setEditorWidth(newSize);
            localStorage.setItem('editorWidth', newSize)
        }
    };

    return (<>
        <Navbar isApp />
        <div className="home">

            <div style={{ width: `${isVertical ? 100 : editorWidth}%`, height: `${isVertical ? editorWidth : 100}%` }}>
                <Editor sendContent={(e) => {
                    setContent(e);
                }} />
            </div>
            <div ref={separatorRef}
                draggable
                onMouseDown={(e) => {
                    e.preventDefault()
                    const moveHandler = (event) => handleDrag(event);
                    const upHandler = () => {
                        window.removeEventListener("mousemove", moveHandler);
                        window.removeEventListener("mouseup", upHandler);
                    };
                    window.addEventListener("mousemove", moveHandler);
                    window.addEventListener("mouseup", upHandler);
                }}

                className="divider"></div>
            <div style={{ width: `${isVertical ? 100 : 100 - editorWidth}%`, height: `${isVertical ? 100 - editorWidth : 100}%` }}>
                <HTML output={content} />
            </div>
        </div>
    </>)
}

export default AppHome;