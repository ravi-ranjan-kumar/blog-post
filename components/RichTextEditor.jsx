import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

const RichTextEditor = ({ value, setPost, post }) => {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("file", file);
            fetch("/api/uploads", {
              method: "POST",
              body,
            })
              .then((res) => {
                return res.json();
              })
              .then((res) => {
                resolve({
                  default: ` http://localhost:3000/uploads/${res?.originalFilename}`,
                });
              })
              .catch((err) => reject("error", err));
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new uploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      required
      editor={ClassicEditor}
      config={{
        extraPlugins: [uploadPlugin],
      }}
      data={value}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          writer.setStyle(
            "height",
            "400px",
            editor.editing.view.document.getRoot()
          );
        });
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!");
      }}
      onBlur={(event, editor) => {
        const data = editor.getData();
        console.log(data);
        setPost({ ...post, body: data });
      }}
      onError={(error, { willEditorRestart }) => {
        if (willEditorRestart) {
          this.editor.ui.view.toolbar.element.remove();
        }
      }}
    />
  );
};

export default RichTextEditor;
