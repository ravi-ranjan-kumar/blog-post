import React from "react";
import { WithContext as ReactTags } from "react-tag-input";

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const CreatePostTags = ({ post, setPost }) => {
  const handleDelete = (i) => {
    const tags = post?.tags.filter((tag, index) => index !== i);
    setPost({ ...post, tags });
  };

  const handleAddition = (tag) => {
    const newTags = [...post?.tags, tag];
    setPost({ ...post, tags: newTags });
  };

  return (
    <ReactTags
      tags={post?.tags}
      delimiters={delimiters}
      handleDelete={handleDelete}
      handleAddition={handleAddition}
      inputFieldPosition="inline"
      autocomplete
      classNames={{
        tags: "ReactTags__tags",
        tagInput: "ReactTags__tagInput",
        tagInputField: "ReactTags__tagInputField",
        selected: "ReactTags__selected",
        tag: "ReactTags__selected ReactTags__tag",
        remove: "ReactTags__selected ReactTags__remove",
        suggestions: "suggestionsClass",
        editTagInput: "ReactTags__editTagInput",
        editTagInputField: "ReactTags__editTagInputField",
        clearAll: "ReactTags__clearAll",
      }}
    />
  );
};

export default CreatePostTags;
