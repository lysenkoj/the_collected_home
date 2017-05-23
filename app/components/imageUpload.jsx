import React, { Component } from 'react';
import { connect } from 'react-redux';

/* -----------------    DUMB COMPONENT     ------------------ */

const DumbUploader = ({_handleSubmit, _handleImageChange, state, closeImageUploader}) => (
  <div className="previewComponent">
    <form onSubmit={(e)=>this._handleSubmit(e)}>
      <input className="fileInput"
        type="file"
        onChange={(e)=>_handleImageChange(e)} />
      <button className="submitButton"
        type="submit"
        onClick={(e)=>_handleSubmit(e)}>Upload Image
      </button>
      <button className="submitButton" onClick={closeImageUploader}>
        Cancel
      </button>
    </form>
    <div className="imgPreview">
      {
        (state.imagePreviewUrl) ? <img src={state.imagePreviewUrl} /> : <div className="previewText">Please select an Image for Preview</div>
        }
    </div>
  </div>
);

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};

  this._handleSubmit = this._handleSubmit.bind(this);
  this._handleImageChange = this._handleImageChange.bind(this);
  this.closeImageUploader = this.closeImageUploader.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  closeImageUploader(evt){
    evt.preventDefault();
    const el = evt.currentTarget.parentNode.parentNode;

    el.style.display = 'none';
  }

  render() {
    return (
      <DumbUploader
        _handleSubmit = { this._handleSubmit }
        _handleImageChange = { this._handleImageChange }
        state = { this.state }
        closeImageUploader = { this.closeImageUploader }
      />
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = () => ({});

export default connect(null, mapDispatchToProps)(ImageUpload);
