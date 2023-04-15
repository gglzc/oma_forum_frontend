import { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';   


const tags = [
  { id: 1, name: 'oma' },
  { id: 2, name: 'hello' },
  { id: 3, name: 'world' },
  { id: 4, name: 'react' },
  { id: 5, name: 'bootstrap' },
];

const TagInput = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagChange = (selected) => {
    setSelectedTags(selected);
  };

  return (
    <div>
      <Typeahead
        id="tag-input"
        labelKey="name"
        multiple
        options={tags}
        selected={selectedTags}
        onChange={handleTagChange}
        placeholder="Enter tags"
      />
      <div>
        {selectedTags.map((tag) => (
          <span key={tag.id} className="badge bg-primary me-1">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TagInput;