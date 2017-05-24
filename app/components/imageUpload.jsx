import React, { Component } from 'react';
import { connect } from 'react-redux';

/* -----------------    DUMB COMPONENT     ------------------ */

const DumbUploader = ({_handleSubmit, _handleImageChange, closeImageUploader, imgUrl}) => (
  <div className="previewComponent">
    <form onSubmit={(e)=>_handleSubmit(e)}>
      <input className="fileInput"
        type="file"
        onChange={(e)=>_handleImageChange(e)} />
      <button className="submitButton"
        type="submit"
        onClick={(e)=>_handleSubmit(e)}>UPLOAD IMAGE
      </button>
      <button className="submitButton" onClick={closeImageUploader}>
        CANCEL
      </button>
    </form>
    <div className="imgPreview">
      {
        (imgUrl.imagePreviewUrl) ? <img src={imgUrl.imagePreviewUrl} /> : <div className="previewText">Please select an Image for Preview</div>
        }
    </div>
  </div>
);

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class ImageUpload extends Component {
  constructor(props) {
    super(props);

  this.closeImageUploader = this.closeImageUploader.bind(this);
  }

  closeImageUploader(evt){
    evt.preventDefault();
    const el = evt.currentTarget.parentNode.parentNode;

    el.style.display = 'none';
  }

  render() {
    return (
      <DumbUploader
        _handleSubmit = { this.props._handleSubmit }
        _handleImageChange = { this.props._handleImageChange }
        imgUrl = { this.props.imgUrl}
        closeImageUploader = { this.closeImageUploader }
      />
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = () => ({});

export default connect(null, mapDispatchToProps)(ImageUpload);
