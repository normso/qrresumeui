import "./Editor.css"
import EditorNav from "./EditorNav"
import EditorContent from "./EditorContent"

export default function Editor(){
    return(
        <div className="editorcontainer">
            <EditorNav/>
            <EditorContent />
        </div>
    );
}