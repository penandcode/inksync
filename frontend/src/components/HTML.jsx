import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

const HTML = ({ output }) => {
    return <div className="html-wrapper">
        <div className="html-output">
            <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>{output}</Markdown>
        </div>
    </div>
}

export default HTML;